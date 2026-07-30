import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const REQUIRED_LOCALES = [
  "en", "ru", "de", "fr", "es", "nl", "pt", "it", "pl",
  "sv", "no", "da", "fi", "cs", "ro", "hu",
];
const REQUIRED_ROUTES = [
  "convert-webpage-to-pdf",
  "convert-webpage-to-powerpoint",
  "chrome-extension",
  "chrome-extension/welcome",
  "chrome-extension/how-to-use",
  "page2pdf-gpt",
  "web2pdf-gpt",
  "html2pdf-gpt",
  "web2powerpoint-gpt",
  "export-ai-chat-to-pdf",
  "export-chatgpt-to-pdf",
  "export-claude-to-pdf",
  "export-gemini-to-pdf",
  "export-grok-to-pdf",
  "blog",
  "updates",
  "changelog",
  "privacy",
  "terms",
  "cookie-policy",
  "security",
  "acceptable-use",
];

const assertContains = (source, values, label) => {
  values.forEach(function assertValue(value) {
    if (!source.includes(`"${value}"`)) {
      throw new Error(`Missing ${label}: ${value}`);
    }
  });
};

const run = async () => {
  const locales = await readFile(
    join(ROOT, "src", "shared", "i18n", "locales.ts"),
    "utf8",
  );
  const routes = await readFile(
    join(ROOT, "src", "shared", "routes", "routes.ts"),
    "utf8",
  );
  const landings = await readFile(
    join(ROOT, "src", "content", "landings.ts"),
    "utf8",
  );
  const metadataSource = await readFile(
    join(ROOT, "src", "shared", "seo", "metadata.ts"),
    "utf8",
  );
  const sitemapSource = await readFile(
    join(ROOT, "src", "app", "sitemap.ts"),
    "utf8",
  );
  const rootPageSource = await readFile(
    join(ROOT, "src", "app", "(root)", "page.tsx"),
    "utf8",
  );
  assertContains(locales, REQUIRED_LOCALES, "locale");
  assertContains(routes, REQUIRED_ROUTES, "route");
  REQUIRED_LOCALES.forEach(function validateLocaleIndexing(locale) {
    const expectedReviewState =
      locale === "en" || locale === "ru"
        ? /reviewed: true, indexable: true/
        : /reviewed: false, indexable: false/;
    const localeLine = locales
      .split(/\r?\n/)
      .find(function findLocaleLine(line) {
        return line.includes(`code: "${locale}"`);
      });
    if (!localeLine || !expectedReviewState.test(localeLine)) {
      throw new Error(`Unsafe indexing state for locale: ${locale}`);
    }
  });

  const routesWithLandingContent = REQUIRED_ROUTES.filter(
    function needsLandingContent(route) {
      return ![
        "convert-webpage-to-pdf",
        "convert-webpage-to-powerpoint",
        "chrome-extension/how-to-use",
        "blog",
        "updates",
        "changelog",
      ].includes(route);
    },
  );
  assertContains(landings, routesWithLandingContent, "landing content");
  if (!metadataSource.includes('routePath("en", route)')) {
    throw new Error("x-default must point directly to the English route.");
  }
  if (
    !sitemapSource.includes("alternates:") ||
    !sitemapSource.includes("languages:")
  ) {
    throw new Error("Localized sitemap alternates are required.");
  }
  if (!rootPageSource.includes('permanentRedirect("/en")')) {
    throw new Error("Root route must permanently redirect to /en.");
  }
  await access(join(ROOT, "src", "app", "[locale]", "[[...slug]]", "page.tsx"));
  await access(join(ROOT, "src", "app", "robots.ts"));
  await access(join(ROOT, "src", "app", "sitemap.ts"));
  await access(join(ROOT, "src", "app", "manifest.ts"));

  if (process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true") {
    const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "");
    if (
      siteUrl.protocol !== "https:" ||
      ["localhost", "127.0.0.1", "0.0.0.0", "::1", "[::1]"].includes(
        siteUrl.hostname.toLowerCase(),
      ) ||
      siteUrl.hostname.toLowerCase().endsWith(".localhost")
    ) {
      throw new Error(
        "Indexing requires a public HTTPS NEXT_PUBLIC_SITE_URL.",
      );
    }
  }

  const apiDirectory = join(ROOT, "src", "app", "api");
  try {
    await access(apiDirectory);
    throw new Error("src/app/api must not exist in the mock-only frontend.");
  } catch (error) {
    if (error instanceof Error && error.message.includes("must not exist")) {
      throw error;
    }
  }

  console.log(`Routes valid: ${REQUIRED_ROUTES.length} public routes across ${REQUIRED_LOCALES.length} locales.`);
};

await run();
