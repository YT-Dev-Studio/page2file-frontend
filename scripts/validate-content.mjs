import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const BLOG_DIRECTORY = join(ROOT, "content", "blog");
const UPDATE_DIRECTORY = join(ROOT, "content", "updates");
const RUSSIAN_BLOG_DIRECTORY = join(ROOT, "content", "ru", "blog");
const RUSSIAN_UPDATE_DIRECTORY = join(ROOT, "content", "ru", "updates");
const FORBIDDEN_PATTERN =
  /<script|<iframe|dangerouslySetInnerHTML|javascript:/i;
const EXPECTED_BLOG_SLUGS = [
  "save-webpage-as-pdf",
  "why-print-to-pdf-breaks",
  "capture-full-webpage-as-pdf",
  "long-webpage-page-breaks",
  "preserve-clickable-links",
  "visual-vs-editable",
  "html-to-pdf-safely",
  "multi-page-website-to-pdf",
  "webpage-to-powerpoint",
  "website-to-powerpoint",
  "html-to-powerpoint",
  "sections-to-slides",
  "screenshot-vs-editable-powerpoint",
  "save-authenticated-webpage-as-pdf",
  "website-types-to-pdf-or-powerpoint",
  "webpage-capture-vs-web-scraping",
  "export-ai-chats-privately",
  "export-chatgpt-conversation-to-pdf",
  "export-claude-chat-to-pdf",
  "export-gemini-chat-to-pdf",
  "export-other-ai-chats-to-pdf",
  "export-whatsapp-chat-to-pdf",
  "export-telegram-chat-to-pdf",
  "export-browser-messenger-chats-to-pdf",
].sort();

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

const NOINDEX_SHORT_TITLES = new Set([
  "Privacy policy",
  "Terms of service",
  "Cookie and analytics policy",
  "Acceptable use",
  "Политика конфиденциальности",
  "Условия использования",
  "Политика cookies и аналитики",
]);

const NOINDEX_SHORT_DESCRIPTIONS = new Set([
  "Implemented frontend controls and future backend security boundaries.",
  "Реализованные frontend-контроли и будущие границы безопасности backend.",
]);

const extractStringFields = (source, field) => [
  ...source.matchAll(new RegExp(`${field}:\\s*"([^"]+)"`, "g")),
].map(function selectValue(match) {
  return match[1];
});

const validateMetadataSource = (source, label) => {
  const titles = extractStringFields(source, "title");
  const descriptions = extractStringFields(source, "description");
  if (new Set(titles).size !== titles.length) {
    throw new Error(`${label} contains duplicate metadata titles.`);
  }
  if (new Set(descriptions).size !== descriptions.length) {
    throw new Error(`${label} contains duplicate metadata descriptions.`);
  }
  titles.forEach(function validateTitle(title) {
    if (
      !NOINDEX_SHORT_TITLES.has(title) &&
      (title.length < 30 || title.length > 65)
    ) {
      throw new Error(`${label} metadata title is outside 30-65 characters: ${title}`);
    }
  });
  descriptions.forEach(function validateDescription(description) {
    if (
      !NOINDEX_SHORT_DESCRIPTIONS.has(description) &&
      (description.length < 100 || description.length > 170)
    ) {
      throw new Error(
        `${label} metadata description is outside 100-170 characters: ${description}`,
      );
    }
  });
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
  const blogSlugs = blogFiles
    .map(function selectBlogSlug(file) {
      return file.name.replace(/\.mdx$/, "");
    })
    .sort();
  if (blogSlugs.join("|") !== EXPECTED_BLOG_SLUGS.join("|")) {
    throw new Error(
      "The English blog corpus must match the approved 24-cluster content map.",
    );
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
    typeof legalProfile.jurisdiction === "string" &&
    legalProfile.jurisdiction.trim().length > 0 &&
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

  const landingSource = await readFile(
    join(ROOT, "src", "content", "russian-landings.ts"),
    "utf8",
  );
  const englishLandingSource = await readFile(
    join(ROOT, "src", "content", "landings.ts"),
    "utf8",
  );
  const seoCopySource = await readFile(
    join(ROOT, "src", "shared", "seo", "seo-copy.ts"),
    "utf8",
  );
  validateMetadataSource(englishLandingSource, "English landing content");
  validateMetadataSource(landingSource, "Russian landing content");
  validateMetadataSource(seoCopySource, "Route SEO copy");
  const requiredRussianLandingRoutes = [
    "page2pdf-gpt",
    "web2pdf-gpt",
    "html2pdf-gpt",
    "one-page2powerpoint-gpt",
    "web2powerpoint-gpt",
    "export-ai-chat-to-pdf",
    "export-chatgpt-to-pdf",
    "export-claude-to-pdf",
    "export-gemini-to-pdf",
    "export-grok-to-pdf",
    "privacy",
    "terms",
    "cookie-policy",
    "security",
    "acceptable-use",
  ];
  requiredRussianLandingRoutes.forEach(function validateRussianLanding(route) {
    if (!landingSource.includes(`"${route}"`) && !landingSource.includes(`${route}:`)) {
      throw new Error(`Missing Russian landing content: ${route}`);
    }
  });

  console.log(
    `Content valid: ${blogFiles.length} English and ${russianBlogFiles.length} Russian blog entries; ${updateFiles.length} updates per locale.`,
  );
};

await run();
