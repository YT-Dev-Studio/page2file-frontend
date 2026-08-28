import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const REQUIRED_LOCALES = ["en", "ru"];
const REQUIRED_ROUTES = [
  "",
  "chrome-extension/how-to-use",
  "page2pdf-gpt",
  "html2pdf-gpt",
  "privacy",
  "terms",
  "about",
  "support",
];
const EN_ONLY_ROUTES = [
  "chrome-extension/webpage-to-pdf",
  "chrome-extension/ai-chat-to-pdf",
  "chrome-extension/messenger-chat-to-pdf",
  "chrome-extension/full-page-pdf",
  "chrome-extension/webpage-to-pdf-with-links",
  "chrome-extension/html-page-to-pdf",
  "chrome-extension/chatgpt-to-pdf",
  "chrome-extension/claude-to-pdf",
  "chrome-extension/whatsapp-chat-to-pdf",
  "chrome-extension/telegram-chat-to-pdf",
  "chrome-extension/chrome-print-vs-page-2-pdf",
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
  const siteConfigSource = await readFile(
    join(ROOT, "src", "shared", "config", "site.ts"),
    "utf8",
  );
  const sitemapSource = await readFile(
    join(ROOT, "src", "app", "sitemap.ts"),
    "utf8",
  );
  const localizedPageSource = await readFile(
    join(ROOT, "src", "app", "[locale]", "[[...slug]]", "page.tsx"),
    "utf8",
  );
  const rootRouteSource = await readFile(
    join(ROOT, "src", "app", "(root)", "route.ts"),
    "utf8",
  );
  const localeSwitcherSource = await readFile(
    join(ROOT, "src", "shared", "ui", "locale-switcher.tsx"),
    "utf8",
  );
  const extensionSeoLandings = await readFile(
    join(ROOT, "src", "content", "extension-seo-landings.ts"),
    "utf8",
  );
  const publicPageResolver = await readFile(
    join(ROOT, "src", "features", "routing", "public-page-resolver.tsx"),
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
  assertContains(routes, EN_ONLY_ROUTES, "US-first extension route");
  assertContains(
    extensionSeoLandings,
    EN_ONLY_ROUTES,
    "US-first extension content",
  );
  if (
    !publicPageResolver.includes('route === "blog"') ||
    !publicPageResolver.includes('segments[0] === "blog"')
  ) {
    throw new Error("The bilingual blog index and article routes are required.");
  }
  if (
    !routes.includes("isStaticRouteAvailable") ||
    !routes.includes('locale === "en"')
  ) {
    throw new Error("US-first extension routes must be English-only.");
  }
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
        "support",
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
    !metadataSource.includes(
      "languages: canIndex ? getLanguageAlternates(route, localized)",
    )
  ) {
    throw new Error("Localized HTML metadata alternates are required.");
  }
  if (
    sitemapSource.includes("alternates:") ||
    sitemapSource.includes("languages:")
  ) {
    throw new Error(
      "Sitemap alternates must remain omitted for native XML tree rendering.",
    );
  }
  if (
    siteConfigSource.includes("NEXT_PUBLIC_ENABLE_INDEXING") ||
    siteConfigSource.includes("NEXT_PUBLIC_LEGAL_REVIEWED")
  ) {
    throw new Error(
      "Public indexing must not depend on build-time feature flags.",
    );
  }
  if (
    !siteConfigSource.includes('"page2file.com"') ||
    !siteConfigSource.includes("INDEXABLE_SITE_HOSTNAMES.has")
  ) {
    throw new Error(
      "Indexing must be enabled automatically for the production hostname.",
    );
  }
  if (
    metadataSource.includes("legalReviewed") ||
    sitemapSource.includes("legalReviewed") ||
    landings.includes("noindex?:") ||
    localizedPageSource.includes("content.noindex")
  ) {
    throw new Error(
      "Published public pages must not have content or legal indexing gates.",
    );
  }
  if (
    !sitemapSource.includes("const routes = staticRoutes;") ||
    sitemapSource.includes("staticRoutes.filter")
  ) {
    throw new Error("Sitemap must include every available public route.");
  }
  if (
    !rootRouteSource.includes('redirectUrl.pathname = "/en"') ||
    !rootRouteSource.includes("NextResponse.redirect")
  ) {
    throw new Error(
      "Root route must redirect directly to the default English locale.",
    );
  }
  if (
    !localeSwitcherSource.includes("isExtensionSeoRoute") ||
    !localeSwitcherSource.includes('"/ru/chrome-extension/how-to-use"')
  ) {
    throw new Error(
      "English-only extension routes must switch to the localized Russian guide.",
    );
  }
  await access(join(ROOT, "src", "app", "[locale]", "[[...slug]]", "page.tsx"));
  await access(join(ROOT, "src", "app", "robots.ts"));
  await access(join(ROOT, "src", "app", "sitemap.ts"));
  await access(join(ROOT, "src", "app", "manifest.ts"));

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

  console.log(`Routes valid: ${REQUIRED_ROUTES.length} localized public routes, ${EN_ONLY_ROUTES.length} en-US extension routes, and ${bffRoutes.length} BFF routes.`);
};

await run();
