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

console.log(
  `Translations valid: ${translatedCount} localized article file(s) checked.`,
);
