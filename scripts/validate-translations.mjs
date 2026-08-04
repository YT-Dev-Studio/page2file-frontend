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
let translatedCount = 0;

const occurrences = (value, pattern) => [...value.matchAll(pattern)].length;
const figureSources = (value) =>
  [...value.matchAll(/src="(\/blog\/instructions\/[^"]+\.svg)"/g)].map(
    (match) => match[1],
  );

for (const locale of locales) {
  const directory = join(contentRoot, locale, "blog");
  let filenames = [];
  try {
    filenames = (await readdir(directory))
      .filter((name) => name.endsWith(".mdx"))
      .sort();
  } catch (error) {
    if (error?.code !== "ENOENT") {
      throw error;
    }
  }

  if (filenames.length === 0) {
    continue;
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
    if (translated.includes("/en/")) {
      throw new Error(`${locale}/${slug}: contains an English internal link.`);
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

console.log(
  `Translations valid: ${translatedCount} localized article file(s) checked.`,
);
