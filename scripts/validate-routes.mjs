import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const REQUIRED_LOCALES = [
  "en", "ru", "de", "fr", "es", "nl", "pt", "it", "pl",
  "sv", "no", "da", "fi", "cs", "ro", "hu",
];
const REQUIRED_ROUTES = [
  "",
  "chrome-extension/how-to-use",
  "page2pdf-gpt",
  "html2pdf-gpt",
  "privacy",
  "terms",
  "about",
];
const REMOVED_ROUTES = [
  "cookie-policy",
  "security",
  "acceptable-use",
  "convert-webpage-to-pdf",
  "convert-webpage-to-powerpoint",
  "web2pdf-gpt",
  "one-page2powerpoint-gpt",
  "web2powerpoint-gpt",
  "export-ai-chat-to-pdf",
  "export-chatgpt-to-pdf",
  "export-claude-to-pdf",
  "export-gemini-to-pdf",
  "export-grok-to-pdf",
  "blog",
  "updates",
  "changelog",
];
const REMOVED_PUBLIC_REFERENCES = [
  ...REMOVED_ROUTES,
  "convert-webpage-to-",
  "Website 2 PDF",
];

const assertContains = (source, values, label) => {
  values.forEach(function assertValue(value) {
    if (!source.includes(`"${value}"`)) {
      throw new Error(`Missing ${label}: ${value}`);
    }
  });
};

const assertRemovedRoutesAbsent = (source, label) => {
  REMOVED_ROUTES.forEach(function assertRemovedRoute(route) {
    if (source.includes(`route: "${route}"`)) {
      throw new Error(`Removed route remains in ${label}: ${route}`);
    }
  });
};

const assertRemovedPublicReferencesAbsent = (source, label) => {
  REMOVED_PUBLIC_REFERENCES.forEach(function assertRemovedReference(reference) {
    if (source.includes(reference)) {
      throw new Error(`Removed public reference remains in ${label}: ${reference}`);
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
  const russianLandings = await readFile(
    join(ROOT, "src", "content", "russian-landings.ts"),
    "utf8",
  );
  const aboutLandings = await readFile(
    join(ROOT, "src", "content", "about-landings.ts"),
    "utf8",
  );
  const siteShell = await readFile(
    join(ROOT, "src", "shared", "ui", "site-shell.tsx"),
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
  const rootRouteSource = await readFile(
    join(ROOT, "src", "app", "(root)", "route.ts"),
    "utf8",
  );
  const publicLinkSources = [
    [
      "404 page",
      join(ROOT, "src", "features", "routing", "not-found-page.tsx"),
    ],
    [
      "preview workspace",
      join(ROOT, "src", "features", "preview", "real-preview-workspace.tsx"),
    ],
    [
      "download page",
      join(ROOT, "src", "features", "preview", "real-download-page.tsx"),
    ],
    [
      "site navigation",
      join(ROOT, "src", "shared", "ui", "site-navigation.tsx"),
    ],
    [
      "site footer",
      join(ROOT, "src", "shared", "ui", "site-shell.tsx"),
    ],
    ["sitemap", join(ROOT, "src", "app", "sitemap.ts")],
    ["llms.txt", join(ROOT, "src", "app", "llms.txt", "route.ts")],
  ];
  assertContains(locales, REQUIRED_LOCALES, "locale");
  assertContains(routes, REQUIRED_ROUTES, "route");
  assertRemovedRoutesAbsent(routes, "route registry");
  assertRemovedRoutesAbsent(landings, "English landing content");
  assertRemovedRoutesAbsent(russianLandings, "Russian landing content");
  for (const [label, path] of publicLinkSources) {
    const source = await readFile(path, "utf8");
    assertRemovedPublicReferencesAbsent(source, label);
  }
  if (
    !landings.includes('id: "cookies"') ||
    !russianLandings.includes('id: "cookies"') ||
    !siteShell.includes('/privacy#cookies')
  ) {
    throw new Error(
      "Privacy content and the footer must share the cookies anchor.",
    );
  }
  REQUIRED_LOCALES.forEach(function validateLocaleIndexing(locale) {
    const expectedReviewState = /reviewed: true, indexable: true/;
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
        "",
        "chrome-extension/how-to-use",
      ].includes(route);
    },
  );
  assertContains(
    `${landings}\n${aboutLandings}`,
    routesWithLandingContent,
    "landing content",
  );
  if (!metadataSource.includes('routePath("en", route)')) {
    throw new Error("x-default must point directly to the English route.");
  }
  if (
    !sitemapSource.includes("alternates:") ||
    !sitemapSource.includes("languages:")
  ) {
    throw new Error("Localized sitemap alternates are required.");
  }
  if (
    !rootRouteSource.includes('dynamic = "force-dynamic"') ||
    !rootRouteSource.includes('request.headers.get("cf-ipcountry")') ||
    !rootRouteSource.includes('request.headers.get("accept-language")') ||
    !rootRouteSource.includes("resolveInitialLocale") ||
    !rootRouteSource.includes("NextResponse.redirect")
  ) {
    throw new Error(
      "Dynamic root route must negotiate EN/RU from country and language headers.",
    );
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

  const bffRoutes = [
    ["session", "route.ts"],
    ["previews", "route.ts"],
    ["jobs", "[jobId]", "route.ts"],
    ["jobs", "[jobId]", "preview", "route.ts"],
    ["jobs", "[jobId]", "render", "route.ts"],
    ["jobs", "[jobId]", "cancel", "route.ts"],
    ["jobs", "[jobId]", "thumbnails", "[sectionId]", "route.ts"],
    ["jobs", "[jobId]", "download", "route.ts"],
  ];
  for (const routeParts of bffRoutes) {
    await access(
      join(ROOT, "src", "app", "api", "conversions", ...routeParts),
    );
  }
  const bffClient = await readFile(
    join(ROOT, "src", "shared", "api", "server", "backend-config.ts"),
    "utf8",
  );
  if (
    !bffClient.includes("PAGE2FILE_WEB_HMAC_SECRET") ||
    bffClient.includes("NEXT_PUBLIC_PAGE2FILE_WEB_HMAC_SECRET")
  ) {
    throw new Error("BFF service credentials must remain server-only.");
  }

  console.log(`Routes valid: ${REQUIRED_ROUTES.length} public routes across ${REQUIRED_LOCALES.length} locales and ${bffRoutes.length} BFF routes.`);
};

await run();
