import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const BLOG_DIRECTORY = join(ROOT, "content", "blog");
const UPDATE_DIRECTORY = join(ROOT, "content", "updates");
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

const run = async () => {
  const blogFiles = await readMdxFiles(BLOG_DIRECTORY);
  const updateFiles = await readMdxFiles(UPDATE_DIRECTORY);
  validateFiles(blogFiles, "blog");
  validateFiles(updateFiles, "update");
  if (blogFiles.length !== 10) {
    throw new Error(`Expected exactly 10 blog entries, found ${blogFiles.length}`);
  }
  if (updateFiles.length !== 2) {
    throw new Error(`Expected exactly 2 update entries, found ${updateFiles.length}`);
  }

  const registry = await readFile(
    join(ROOT, "src", "content", "content-registry.ts"),
    "utf8",
  );
  const slugMatches = [...registry.matchAll(/slug: "([^"]+)"/g)];
  const slugs = slugMatches.map(function selectSlug(match) {
    return match[1];
  });
  if (new Set(slugs).size !== slugs.length) {
    throw new Error("Content registry contains duplicate slugs.");
  }

  console.log(`Content valid: ${blogFiles.length} blog entries, ${updateFiles.length} updates.`);
};

await run();
