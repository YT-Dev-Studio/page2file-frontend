import { readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = join(projectRoot, "content");
const sourceDirectory = join(contentRoot, "blog");
const locales = [
  "de",
  "fr",
  "es",
  "nl",
  "pt",
  "it",
  "pl",
  "cs",
  "sv",
  "no",
  "da",
  "fi",
  "ro",
  "hu",
];
const mixedLanguagePatterns = [
  /\blazy[- ]load(?:ing|ed)?\b/i,
  /\brendered state\b/i,
  /\bsource data\b/i,
  /\bactive-tab capture\b/i,
  /\btext-and-media package\b/i,
  /\bnative export\b/i,
  /\b(?:content|account|navigation|membership|profile) details\b/i,
  /\bboundaries\b/i,
  /\bviewport\b/i,
  /\bDOM\b/,
];
const allowedEnglishMetadataTerms =
  /\b(?:Page 2 File|PDF|PowerPoint|PPTX|HTML|CSS|URL|HTTPS|Chrome|ChatGPT|Claude|Gemini|Grok|DeepSeek|Perplexity|Copilot|WhatsApp|Telegram|Slack|Discord|Teams|Facebook|Canvas)\b/gi;
const translationIssues = [];

const sourceFiles = new Set(
  (await readdir(sourceDirectory)).filter((name) => name.endsWith(".mdx")),
);
if (sourceFiles.size !== 24) {
  throw new Error(`Expected 24 canonical English articles, found ${sourceFiles.size}.`);
}

let translatedCount = 0;

const occurrences = (value, pattern) => [...value.matchAll(pattern)].length;
const figureSources = (value) =>
  [...value.matchAll(/src="(\/blog\/instructions\/[^"]+\.svg)"/g)].map(
    (match) => match[1],
  );
const figurePropertyValues = (value, property) =>
  [
    ...value.matchAll(
      new RegExp(`^  ${property}=\\{\\\"([^\\\"]+)\\\"\\}$`, "gm"),
    ),
  ].map((match) => match[1]);
const contentParagraphs = (value) =>
  value
    .replace(/<ArticleFigure[\s\S]*?\/>/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(
      (paragraph) =>
        paragraph.length >= 120 && !paragraph.startsWith("#"),
    );
const normalizeMetadata = (value) =>
  value.replace(allowedEnglishMetadataTerms, "").trim();

for (const locale of locales) {
  const directory = join(contentRoot, locale, "blog");
  const filenames = (await readdir(directory))
    .filter((name) => name.endsWith(".mdx"))
    .sort();
  const expectedFilenames = [...sourceFiles].sort();
  if (JSON.stringify(filenames) !== JSON.stringify(expectedFilenames)) {
    throw new Error(
      `${locale}: expected the complete canonical set of 24 MDX articles.`,
    );
  }

  const manifestPath = join(contentRoot, locale, "blog-manifest.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const manifestSlugs = Object.keys(manifest).sort();
  const fileSlugs = filenames.map((name) => name.slice(0, -4));
  if (JSON.stringify(manifestSlugs) !== JSON.stringify(fileSlugs)) {
    throw new Error(
      `${locale}: MDX files and blog-manifest.json entries differ.`,
    );
  }

  for (const filename of filenames) {
    if (!sourceFiles.has(filename)) {
      throw new Error(`${locale}: unknown article ${filename}.`);
    }
    const slug = filename.slice(0, -4);
    const [source, translated] = await Promise.all([
      readFile(join(sourceDirectory, filename), "utf8"),
      readFile(join(directory, filename), "utf8"),
    ]);
    const plainTranslated = translated
      .replace(/https?:\/\/\S+/g, "")
      .replace(/<ArticleFigure[\s\S]*?\/>/g, "");
    const mixedTerms = mixedLanguagePatterns
      .filter((pattern) => pattern.test(plainTranslated))
      .map((pattern) => pattern.source);
    if (mixedTerms.length > 0) {
      translationIssues.push(
        `${locale}/${slug}: unexplained English web jargon (${mixedTerms.join(", ")}).`,
      );
    }
    const sourceParagraphSet = new Set(
      contentParagraphs(source).map((paragraph) => paragraph.toLowerCase()),
    );
    const copiedParagraph = contentParagraphs(translated).find((paragraph) =>
      sourceParagraphSet.has(paragraph.toLowerCase()),
    );
    if (copiedParagraph) {
      translationIssues.push(
        `${locale}/${slug}: contains a paragraph copied from English.`,
      );
    }
    if (occurrences(source, /^## /gm) !== occurrences(translated, /^## /gm)) {
      throw new Error(`${locale}/${slug}: H2 count differs from English.`);
    }
    if (
      occurrences(source, /<ArticleFigure\b/g) !==
      occurrences(translated, /<ArticleFigure\b/g)
    ) {
      throw new Error(
        `${locale}/${slug}: ArticleFigure count differs from English.`,
      );
    }
    if (
      JSON.stringify(figureSources(source)) !==
      JSON.stringify(figureSources(translated))
    ) {
      throw new Error(`${locale}/${slug}: SVG sequence differs from English.`);
    }
    if (
      /\]\(\/en\//.test(translated) ||
      /\b(?:href|src)=["']\/en\//.test(translated)
    ) {
      throw new Error(`${locale}/${slug}: contains an English internal link.`);
    }

    const sourceFigureCount = occurrences(source, /<ArticleFigure\b/g);
    for (const property of [
      "alt",
      "caption",
      "openLabel",
      "closeLabel",
    ]) {
      const sourceValues = figurePropertyValues(source, property);
      const translatedValues = figurePropertyValues(translated, property);
      if (translatedValues.length !== sourceFigureCount) {
        throw new Error(
          `${locale}/${slug}: every ArticleFigure needs a non-empty ${property}.`,
        );
      }
      if (
        sourceFigureCount > 0 &&
        JSON.stringify(translatedValues) === JSON.stringify(sourceValues)
      ) {
        throw new Error(
          `${locale}/${slug}: ${property} still matches the English source.`,
        );
      }
      if (
        property === "alt" &&
        new Set(translatedValues).size !== translatedValues.length
      ) {
        throw new Error(`${locale}/${slug}: duplicate ArticleFigure alt text.`);
      }
    }

    if (
      translated.includes(`](/en/`) ||
      translated.includes(`href="/en/`)
    ) {
      throw new Error(`${locale}/${slug}: English route prefix remains.`);
    }
    if (
      !manifest[slug]?.title?.trim() ||
      !manifest[slug]?.description?.trim() ||
      !manifest[slug]?.imageAlt?.trim() ||
      !manifest[slug]?.author?.trim()
    ) {
      throw new Error(`${locale}/${slug}: incomplete metadata.`);
    }
    const sourceTitle = manifest[slug].title.trim();
    const titleWithBrand = `${sourceTitle} | Page 2 File`;
    const metadataTitle =
      titleWithBrand.length <= 65 ? titleWithBrand : sourceTitle;
    const metadataDescription = manifest[slug].description.trim();
    if (
      normalizeMetadata(metadataTitle).length === 0 ||
      metadataTitle.length < 30 ||
      metadataTitle.length > 65
    ) {
      translationIssues.push(
        `${locale}/${slug}: metadata title is outside 30-65 characters.`,
      );
    }
    if (
      normalizeMetadata(metadataDescription).length === 0 ||
      metadataDescription.length < 100 ||
      metadataDescription.length > 170
    ) {
      translationIssues.push(
        `${locale}/${slug}: metadata description is outside 100-170 characters.`,
      );
    }
    translatedCount += 1;
  }
}

const expectedTranslatedCount = locales.length * sourceFiles.size;
if (translatedCount !== expectedTranslatedCount) {
  throw new Error(
    `Expected ${expectedTranslatedCount} localized articles, checked ${translatedCount}.`,
  );
}

const generatedComponentRegistry = await readFile(
  join(projectRoot, "src", "content", "generated", "localized-blog-components.ts"),
  "utf8",
);
const metadataRegistry = await readFile(
  join(projectRoot, "src", "content", "localized-blog-metadata.ts"),
  "utf8",
);
const metadataPrefixes = {
  de: "german",
  fr: "french",
  es: "spanish",
  nl: "dutch",
  pt: "portuguese",
  it: "italian",
  pl: "polish",
  cs: "czech",
  sv: "swedish",
  no: "norwegian",
  da: "danish",
  fi: "finnish",
  ro: "romanian",
  hu: "hungarian",
};
for (const locale of locales) {
  if (!generatedComponentRegistry.includes(`  ${locale}: {`)) {
    throw new Error(`${locale}: missing from the generated MDX component registry.`);
  }
  if (
    !metadataRegistry.includes(
      `  ${locale}: ${metadataPrefixes[locale]}BlogMetadata,`,
    )
  ) {
    throw new Error(`${locale}: missing from the localized metadata registry.`);
  }
}

const russianDirectory = join(contentRoot, "ru", "blog");
for (const filename of [...sourceFiles].sort()) {
  const slug = filename.slice(0, -4);
  const translated = await readFile(
    join(russianDirectory, filename),
    "utf8",
  );
  const plainTranslated = translated
    .replace(/https?:\/\/\S+/g, "")
    .replace(/<ArticleFigure[\s\S]*?\/>/g, "");
  const mixedTerms = mixedLanguagePatterns
    .filter((pattern) => pattern.test(plainTranslated))
    .map((pattern) => pattern.source);
  if (mixedTerms.length > 0) {
    translationIssues.push(
      `ru/${slug}: unexplained English web jargon (${mixedTerms.join(", ")}).`,
    );
  }
}

const localizedCopyPaths = {
  ru: [
    "src/features/marketing/home-copy.ts",
    "src/content/russian-landings.ts",
  ],
  de: [
    "src/features/marketing/home-copy.de.ts",
    "src/content/german-landings.ts",
    "src/content/german-legal-landings.ts",
  ],
  fr: [
    "src/features/marketing/home-copy.fr.ts",
    "src/content/french-landings.ts",
    "src/content/french-legal-landings.ts",
  ],
  es: [
    "src/features/marketing/home-copy.es.ts",
    "src/content/spanish-landings.ts",
    "src/content/spanish-legal-landings.ts",
  ],
  nl: [
    "src/features/marketing/home-copy.nl.ts",
    "src/content/dutch-landings.ts",
    "src/content/dutch-legal-landings.ts",
  ],
  pt: [
    "src/features/marketing/home-copy.pt.ts",
    "src/content/portuguese-landings.ts",
    "src/content/portuguese-legal-landings.ts",
  ],
  it: [
    "src/features/marketing/home-copy.it.ts",
    "src/content/italian-landings.ts",
    "src/content/italian-legal-landings.ts",
  ],
  pl: [
    "src/features/marketing/home-copy.pl.ts",
    "src/content/polish-landings.ts",
    "src/content/polish-legal-landings.ts",
  ],
  cs: [
    "src/features/marketing/home-copy.cs.ts",
    "src/content/czech-landings.ts",
    "src/content/czech-legal-landings.ts",
  ],
  sv: [
    "src/features/marketing/home-copy.sv.ts",
    "src/content/swedish-landings.ts",
    "src/content/swedish-legal-landings.ts",
  ],
  no: [
    "src/features/marketing/home-copy.no.ts",
    "src/content/norwegian-landings.ts",
    "src/content/norwegian-legal-landings.ts",
  ],
  da: [
    "src/features/marketing/home-copy.da.ts",
    "src/content/danish-landings.ts",
    "src/content/danish-legal-landings.ts",
  ],
  fi: [
    "src/features/marketing/home-copy.fi.ts",
    "src/content/finnish-landings.ts",
    "src/content/finnish-legal-landings.ts",
  ],
  ro: [
    "src/features/marketing/home-copy.ro.ts",
    "src/content/romanian-landings.ts",
    "src/content/romanian-legal-landings.ts",
  ],
  hu: [
    "src/features/marketing/home-copy.hu.ts",
    "src/content/hungarian-landings.ts",
    "src/content/hungarian-legal-landings.ts",
  ],
};
for (const [locale, relativePaths] of Object.entries(localizedCopyPaths)) {
  for (const relativePath of relativePaths) {
    const source = await readFile(join(projectRoot, relativePath), "utf8");
    const mixedTerms = mixedLanguagePatterns
      .filter((pattern) => pattern.test(source))
      .map((pattern) => pattern.source);
    if (mixedTerms.length > 0) {
      translationIssues.push(
        `${locale}/${relativePath}: unexplained web jargon (${mixedTerms.join(", ")}).`,
      );
    }
  }
}

const copyRegistryPaths = [
  "src/shared/i18n/site-copy.ts",
  "src/shared/seo/seo-copy.ts",
  "src/features/content/content-copy.ts",
  "src/features/converter/converter-copy.ts",
  "src/features/converter/conversion-runtime-copy.ts",
  "src/features/extension/extension-copy.ts",
  "src/features/marketing/home-copy.ts",
  "src/features/marketing/marketing-copy.ts",
  "src/features/marketing/workflow-landing.tsx",
  "src/features/preview/real-preview-copy.ts",
  "src/features/converter/converter-page.tsx",
  "src/features/extension/extension-guide.tsx",
  "src/content/landings.ts",
  "src/shared/i18n/messages.ts",
  "src/shared/routes/extension-link.ts",
  "src/shared/ui/site-shell.tsx",
];
for (const relativePath of copyRegistryPaths) {
  const source = await readFile(join(projectRoot, relativePath), "utf8");
  if (
    /LocalizedPublished|isPublishedLocale|has[A-Za-z]+Copy/.test(source) ||
    /\[\s*[^;\n]*\?\s*[^:\n]+:\s*["']en["']\s*\]/.test(source)
  ) {
    throw new Error(`${relativePath}: contains a user-facing English fallback.`);
  }
}

if (translationIssues.length > 0) {
  const shownIssues = translationIssues.slice(0, 40);
  const remaining = translationIssues.length - shownIssues.length;
  throw new Error(
    [
      `Translation quality failed with ${translationIssues.length} issue(s):`,
      ...shownIssues.map((issue) => `- ${issue}`),
      remaining > 0 ? `- ...and ${remaining} more.` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

console.log(
  `Translations valid: ${translatedCount + sourceFiles.size * 2} article file(s) checked across 16 locales.`,
);
