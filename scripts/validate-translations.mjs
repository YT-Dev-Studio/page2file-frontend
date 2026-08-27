import { readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = join(projectRoot, "content");
const publishedFiles = async (directory) =>
  (await readdir(directory))
    .filter((name) => name.endsWith(".mdx"))
    .sort();

const englishFiles = await publishedFiles(join(contentRoot, "blog"));
const russianFiles = await publishedFiles(join(contentRoot, "ru", "blog"));

if (JSON.stringify(russianFiles) !== JSON.stringify(englishFiles)) {
  throw new Error("ru: published MDX files do not match the English corpus.");
}

console.log(
  `Translation parity valid: ${englishFiles.length} published article(s) across 2 locales.`,
);
