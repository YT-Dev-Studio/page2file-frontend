import { readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = join(projectRoot, "content");
const publishedFiles = async (directory) =>
  (await readdir(directory))
    .filter((name) => name.endsWith(".mdx"))
    .sort();

const locales = ["en", "ru", "de"];
const englishFiles = await publishedFiles(join(contentRoot, "blog"));
for (const locale of locales.filter((candidate) => candidate !== "en")) {
  const localizedFiles = await publishedFiles(join(contentRoot, locale, "blog"));
  if (JSON.stringify(localizedFiles) !== JSON.stringify(englishFiles)) {
    throw new Error(`${locale}: published MDX files do not match the English corpus.`);
  }
}

console.log(
  `Translation parity valid: ${englishFiles.length} published article(s) across ${locales.length} locales.`,
);
