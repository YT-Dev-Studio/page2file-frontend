import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const BLOG_DIRECTORY = join(ROOT, "content", "blog");
const UPDATE_DIRECTORY = join(ROOT, "content", "updates");
const RUSSIAN_BLOG_DIRECTORY = join(ROOT, "content", "ru", "blog");
const RUSSIAN_UPDATE_DIRECTORY = join(ROOT, "content", "ru", "updates");
const FORBIDDEN_PATTERN =
  /<script|<iframe|dangerouslySetInnerHTML|javascript:/i;

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
  "Страница Page2File не найдена",
]);

const NOINDEX_SHORT_DESCRIPTIONS = new Set([
  "Post-install guide for the Page2File Chrome extension prototype.",
  "Implemented frontend controls and future backend security boundaries.",
  "Стартовая инструкция после установки прототипа расширения Page2File.",
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
  if (blogFiles.length !== 10) {
    throw new Error(`Expected exactly 10 blog entries, found ${blogFiles.length}`);
  }
  if (updateFiles.length !== 0) {
    throw new Error(
      `Expected no update entries before the first release, found ${updateFiles.length}`,
    );
  }
  if (russianBlogFiles.length !== 10 || russianUpdateFiles.length !== 0) {
    throw new Error(
      "Russian content must contain exactly 10 blog entries and no pre-release updates.",
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
