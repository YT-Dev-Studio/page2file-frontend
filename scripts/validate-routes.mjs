import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const REQUIRED_LOCALES = [
  "en", "de", "fr", "es", "nl", "pt", "it", "pl",
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
  assertContains(locales, REQUIRED_LOCALES, "locale");
  assertContains(routes, REQUIRED_ROUTES, "route");

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
  await access(join(ROOT, "src", "app", "[locale]", "[[...slug]]", "page.tsx"));

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
