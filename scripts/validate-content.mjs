import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const LOCALES = ["en", "ru"];
const BLOG_DIRECTORY = join(ROOT, "content", "blog");
const UPDATE_DIRECTORY = join(ROOT, "content", "updates");
const RUSSIAN_BLOG_DIRECTORY = join(ROOT, "content", "ru", "blog");
const RUSSIAN_UPDATE_DIRECTORY = join(ROOT, "content", "ru", "updates");
const FORBIDDEN_PATTERN =
  /<script|<iframe|dangerouslySetInnerHTML|javascript:/i;
const SITE_TITLE_SUFFIX = " | Page 2 File";
const LANDING_SOURCE_PATHS = {
  en: ["src/content/landings.ts"],
  ru: ["src/content/russian-landings.ts"],
};

const readMdxFiles = async (directory) => {
  const names = await readdir(directory);
  const mdxNames = names.filter(function isMdx(name) {
    return name.endsWith(".mdx");
  });
  const files = await Promise.all(
    mdxNames.map(async function readMdx(name) {
      const content = await readFile(join(directory, name), "utf8");
      return { name, content };
    }),
  );
  return files;
};

const validateFiles = (files, label) => {
  const names = new Set();
  files.forEach(function validateFile(file) {
    if (names.has(file.name)) {
      throw new Error(`Duplicate ${label} filename: ${file.name}`);
    }
    names.add(file.name);
    if (file.content.trim().length < 200) {
      throw new Error(`${label} entry is too short: ${file.name}`);
    }
    if (FORBIDDEN_PATTERN.test(file.content)) {
      throw new Error(`${label} entry contains forbidden HTML or scheme: ${file.name}`);
    }
  });
};

const validateMatchingFiles = (englishFiles, russianFiles, label) => {
  const englishNames = englishFiles
    .map(function selectName(file) {
      return file.name;
    })
    .sort();
  const russianNames = russianFiles
    .map(function selectName(file) {
      return file.name;
    })
    .sort();
  if (englishNames.join("|") !== russianNames.join("|")) {
    throw new Error(`English and Russian ${label} slugs must match.`);
  }
};

const extractStringFields = (source, field) => [
  ...source.matchAll(new RegExp(`${field}:\\s*"([^"]+)"`, "g")),
].map(function selectValue(match) {
  return match[1];
});

const validateMetadataSource = (source, label, allowLocaleDuplicates = false) => {
  const titles = extractStringFields(source, "title");
  const descriptions = extractStringFields(source, "description");
  const problems = [];
  if (!allowLocaleDuplicates && new Set(titles).size !== titles.length) {
    problems.push(`${label} contains duplicate metadata titles.`);
  }
  if (!allowLocaleDuplicates && new Set(descriptions).size !== descriptions.length) {
    problems.push(`${label} contains duplicate metadata descriptions.`);
  }
  titles.forEach(function validateTitle(title) {
    const titleWithBrand = `${title}${SITE_TITLE_SUFFIX}`;
    const renderedTitle =
      titleWithBrand.length <= 65 ? titleWithBrand : title;
    if (renderedTitle.length < 30 || renderedTitle.length > 65) {
      problems.push(
        `${label} rendered metadata title is outside 30-65 characters: ${renderedTitle}`,
      );
    }
  });
  descriptions.forEach(function validateDescription(description) {
    if (description.length < 100 || description.length > 170) {
      problems.push(
        `${label} metadata description is outside 100-170 characters: ${description}`,
      );
    }
  });
  if (problems.length > 0) {
    throw new Error(problems.join("\n"));
  }
};

const run = async () => {
  const blogFiles = await readMdxFiles(BLOG_DIRECTORY);
  const updateFiles = await readMdxFiles(UPDATE_DIRECTORY);
  const russianBlogFiles = await readMdxFiles(RUSSIAN_BLOG_DIRECTORY);
  const russianUpdateFiles = await readMdxFiles(RUSSIAN_UPDATE_DIRECTORY);
  validateFiles(blogFiles, "blog");
  validateFiles(updateFiles, "update");
  validateFiles(russianBlogFiles, "Russian blog");
  validateFiles(russianUpdateFiles, "Russian update");
  validateMatchingFiles(blogFiles, russianBlogFiles, "blog");
  validateMatchingFiles(updateFiles, russianUpdateFiles, "update");
  const localizedBlogFiles = new Map([
    ["en", blogFiles],
    ["ru", russianBlogFiles],
  ]);
  for (const locale of LOCALES.filter(
    (candidate) => candidate !== "en" && candidate !== "ru",
  )) {
    const files = await readMdxFiles(
      join(ROOT, "content", locale, "blog"),
    );
    validateFiles(files, `${locale} blog`);
    validateMatchingFiles(blogFiles, files, "blog");
    localizedBlogFiles.set(locale, files);
  }
  if (updateFiles.length !== 0) {
    throw new Error(
      `Expected no update entries before the first release, found ${updateFiles.length}`,
    );
  }
  if (russianUpdateFiles.length !== 0) {
    throw new Error(
      "Russian content must not contain pre-release update entries.",
    );
  }

  const registry = await readFile(
    join(ROOT, "src", "content", "content-registry.ts"),
    "utf8",
  );
  validateMetadataSource(registry, "Content registry");
  const slugMatches = [...registry.matchAll(/slug: "([^"]+)"/g)];
  const slugs = slugMatches.map(function selectSlug(match) {
    return match[1];
  });
  const slugCounts = new Map();
  slugs.forEach(function countSlug(slug) {
    slugCounts.set(slug, (slugCounts.get(slug) ?? 0) + 1);
  });
  if (
    slugCounts.size !== blogFiles.length + updateFiles.length ||
    [...slugCounts.values()].some(function hasInvalidLocaleCount(count) {
      return count !== 2;
    })
  ) {
    throw new Error(
      "Every English content slug must have exactly one Russian equivalent.",
    );
  }
  const expectedEntryCount = (blogFiles.length + updateFiles.length) * 2;
  const imageMatches = [...registry.matchAll(/image: "([^"]+)"/g)];
  const imageAltMatches = [...registry.matchAll(/imageAlt: "([^"]+)"/g)];
  if (
    imageMatches.length !== expectedEntryCount ||
    imageAltMatches.length !== expectedEntryCount ||
    imageAltMatches.some(function hasEmptyImageAlt(match) {
      return match[1].trim().length === 0;
    })
  ) {
    throw new Error(
      "Every English and Russian content entry must have an image and non-empty imageAlt.",
    );
  }
  const uniqueImages = new Set(
    imageMatches.map(function selectImage(match) {
      return match[1];
    }),
  );
  if (uniqueImages.size !== blogFiles.length) {
    throw new Error(
      `Expected ${blogFiles.length} shared blog images, found ${uniqueImages.size}.`,
    );
  }
  await Promise.all(
    [...uniqueImages].map(async function validateImage(image) {
      if (!image.startsWith("/blog/mocks/") || !image.endsWith(".webp")) {
        throw new Error(`Invalid blog image path: ${image}`);
      }
      const imageFile = await readFile(
        join(ROOT, "public", image.slice(1)),
      );
      if (imageFile.length === 0) {
        throw new Error(`Empty blog image: ${image}`);
      }
    }),
  );
  const authorMatches = [...registry.matchAll(/author: "([^"]+)"/g)];
  if (
    authorMatches.length !== expectedEntryCount ||
    authorMatches.some(function hasEmptyAuthor(match) {
      return match[1].trim().length === 0;
    })
  ) {
    throw new Error("Every blog and update entry must have an author.");
  }
  const dateMatches = [
    ...registry.matchAll(/(?:publishedAt|updatedAt): "([^"]+)"/g),
  ];
  if (dateMatches.length !== expectedEntryCount * 2) {
    throw new Error("Every blog and update entry must have publication dates.");
  }
  dateMatches.forEach(function validateDate(match) {
    const value = match[1];
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
      Number.isNaN(Date.parse(`${value}T00:00:00Z`))
    ) {
      throw new Error(`Invalid content date: ${value}`);
    }
  });

  const legalProfile = JSON.parse(
    await readFile(join(ROOT, "content", "legal-profile.json"), "utf8"),
  );
  const legalFieldsComplete =
    typeof legalProfile.entityName === "string" &&
    legalProfile.entityName.trim().length > 0 &&
    typeof legalProfile.addresses === "object" &&
    legalProfile.addresses !== null &&
    Object.values(legalProfile.addresses).length === 16 &&
    Object.values(legalProfile.addresses).every(
      (address) => typeof address === "string" && address.trim().length > 0,
    ) &&
    typeof legalProfile.jurisdictions === "object" &&
    legalProfile.jurisdictions !== null &&
    Object.values(legalProfile.jurisdictions).length === 16 &&
    Object.values(legalProfile.jurisdictions).every(
      (jurisdiction) =>
        typeof jurisdiction === "string" &&
        jurisdiction.trim().length > 0,
    ) &&
    typeof legalProfile.contactEmail === "string" &&
    legalProfile.contactEmail.trim().length > 0 &&
    Array.isArray(legalProfile.processors) &&
    legalProfile.processors.length > 0;
  if (
    process.env.NEXT_PUBLIC_LEGAL_REVIEWED === "true" &&
    !legalFieldsComplete
  ) {
    throw new Error(
      "Legal indexing cannot be enabled until content/legal-profile.json is complete.",
    );
  }

  const landingSources = new Map();
  for (const [locale, relativePaths] of Object.entries(
    LANDING_SOURCE_PATHS,
  )) {
    const sources = await Promise.all(
      relativePaths.map((relativePath) =>
        readFile(join(ROOT, relativePath), "utf8"),
      ),
    );
    landingSources.set(locale, sources.join("\n"));
  }
  const seoCopySource = await readFile(
    join(ROOT, "src", "shared", "seo", "seo-copy.ts"),
    "utf8",
  );
  const metadataErrors = [];
  for (const [locale, source] of landingSources) {
    try {
      validateMetadataSource(source, `${locale} landing content`);
    } catch (error) {
      metadataErrors.push(error instanceof Error ? error.message : String(error));
    }
  }
  try {
    validateMetadataSource(seoCopySource, "Route SEO copy");
  } catch (error) {
    metadataErrors.push(error instanceof Error ? error.message : String(error));
  }
  if (metadataErrors.length > 0) {
    throw new Error(`Metadata validation failed:\n- ${metadataErrors.join("\n- ")}`);
  }
  const extensionSeoSource = await readFile(
    join(ROOT, "src", "content", "extension-seo-landings.ts"),
    "utf8",
  );
  const extensionMetadata = [
    ...extensionSeoSource.matchAll(
      /route:\s*"(chrome-extension\/[^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?description:\s*\n?\s*"([^"]+)"/g,
    ),
  ].map((match) => ({
    route: match[1],
    title: match[2],
    description: match[3],
  }));
  if (extensionMetadata.length !== 11) {
    throw new Error(
      `Expected 11 US-first extension landings, found ${extensionMetadata.length}.`,
    );
  }
  validateMetadataSource(
    extensionMetadata
      .map(
        (entry) =>
          `title: "${entry.title}"\ndescription: "${entry.description}"`,
      )
      .join("\n"),
    "US-first extension landing content",
  );
  for (const sample of [
    "accurate-copy.pdf",
    "editable-document.pdf",
    "ai-chat.pdf",
    "accurate-copy-preview.svg",
    "editable-document-preview.svg",
    "ai-chat-preview.svg",
  ]) {
    const bytes = await readFile(join(ROOT, "public", "samples", sample));
    if (bytes.length === 0) {
      throw new Error(`Empty extension sample asset: ${sample}`);
    }
  }
  const requiredLandingRoutes = [
    "page2pdf-gpt",
    "html2pdf-gpt",
    "privacy",
    "terms",
    "about",
  ];
  const aboutSource = await readFile(
    join(ROOT, "src", "content", "about-landings.ts"),
    "utf8",
  );
  validateMetadataSource(aboutSource, "About landing content", true);
  for (const [locale, source] of landingSources) {
    requiredLandingRoutes.forEach(function validateLocalizedLanding(route) {
      const routeSource = route === "about" ? aboutSource : source;
      if (
        !routeSource.includes(`"${route}"`) &&
        !routeSource.includes(`${route}:`)
      ) {
        throw new Error(`Missing ${locale} landing content: ${route}`);
      }
    });
  }

  for (const [locale, files] of localizedBlogFiles) {
    if (files.length !== blogFiles.length) {
      throw new Error(
        `${locale} blog corpus contains ${files.length} files; expected ${blogFiles.length}.`,
      );
    }
  }

  console.log(
    `Content valid: ${blogFiles.length} blog entries across ${localizedBlogFiles.size} locales; ${updateFiles.length} updates per published update locale.`,
  );
};

await run();
