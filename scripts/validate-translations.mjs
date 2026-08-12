import { readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = join(projectRoot, "content");
const locales = ["ru", "de", "fr", "es", "nl", "pt", "it", "pl", "cs", "sv", "no", "da", "fi", "ro", "hu"];
const canonicalFiles = (await readdir(join(contentRoot, "blog")))
  .filter((name) => name.endsWith(".mdx"))
  .sort();

for (const locale of locales) {
  const directory = join(contentRoot, locale, "blog");
  const localizedFiles = (await readdir(directory))
    .filter((name) => name.endsWith(".mdx"))
    .sort();
  if (JSON.stringify(localizedFiles) !== JSON.stringify(canonicalFiles)) {
    throw new Error(`${locale}: published MDX files do not match the English corpus.`);
  }

  if (locale !== "ru") {
    const manifest = JSON.parse(
      await readFile(join(contentRoot, locale, "blog-manifest.json"), "utf8"),
    );
    const expectedSlugs = canonicalFiles.map((name) => name.slice(0, -4));
    if (JSON.stringify(Object.keys(manifest).sort()) !== JSON.stringify(expectedSlugs)) {
      throw new Error(`${locale}: blog manifest does not match the published corpus.`);
    }
  }
}

const generatedComponentRegistry = await readFile(
  join(projectRoot, "src", "content", "generated", "localized-blog-components.ts"),
  "utf8",
);
for (const locale of locales.filter((locale) => locale !== "ru")) {
  if (!generatedComponentRegistry.includes(`${locale}: {`)) {
    throw new Error(`${locale}: missing from the generated MDX component registry.`);
  }
}

console.log(
  `Translation parity valid: ${canonicalFiles.length} published article(s) across ${locales.length + 1} locales.`,
);
