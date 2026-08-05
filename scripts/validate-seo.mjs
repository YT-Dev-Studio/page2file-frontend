import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const SITE_NAME = "Page 2 File";
const PRODUCTION_ORIGIN = "https://page2file.com";
const LOCALES = [
  "en",
  "ru",
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
const SOURCE_CHECKS = [
  [
    "src/shared/seo/metadata.ts",
    ["canonical", "languages:", "openGraph", "twitter", "robots"],
  ],
  [
    "src/shared/seo/structured-data.tsx",
    ["WebSite", "BlogPosting", "BreadcrumbList", "Organization"],
  ],
  [
    "src/app/robots.ts",
    ["OAI-SearchBot", "GPTBot", "sitemap"],
  ],
  [
    "src/app/sitemap.ts",
    ["alternates:", "languages:", "indexingEnabled"],
  ],
  ["src/shared/routes/routes.ts", ['"about"']],
  ["public/_headers", ["/_next/static/*", "immutable"]],
];

const errors = [];
const addError = (message) => {
  errors.push(message);
};
const readText = (relativePath) =>
  readFile(join(ROOT, relativePath), "utf8");
const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const decodeHtml = (value) =>
  value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&#([0-9]+);/g, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 10)),
    )
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
const attribute = (tag, name) =>
  decodeHtml(tag.match(
    new RegExp(
      `\\b${escapeRegExp(name)}=(?:"([^"]*)"|'([^']*)')`,
      "i",
    ),
  )?.slice(1).find((value) => value !== undefined) ?? "");
const tags = (html, name) => [
  ...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi")),
].map((match) => match[0]);
const metas = (html) => tags(html, "meta");
const links = (html) => tags(html, "link");
const metaContent = (html, key, value) => {
  const tag = metas(html).find(
    (candidate) =>
      attribute(candidate, key).toLowerCase() === value.toLowerCase(),
  );
  return tag ? attribute(tag, "content") : "";
};
const linkHref = (html, rel) => {
  const tag = links(html).find(
    (candidate) =>
      attribute(candidate, "rel").toLowerCase() === rel.toLowerCase(),
  );
  return tag ? attribute(tag, "href") : "";
};
const countH1 = (html) => [...html.matchAll(/<h1\b/gi)].length;
const htmlLanguage = (html) => {
  const htmlTag = tags(html, "html")[0] ?? "";
  return attribute(htmlTag, "lang").toLowerCase();
};
const pageTitle = (html) =>
  decodeHtml(
    html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "",
  );

const validateSource = async () => {
  for (const [relativePath, requiredSnippets] of SOURCE_CHECKS) {
    let source;
    try {
      source = await readText(relativePath);
    } catch {
      addError(`Missing required SEO source: ${relativePath}`);
      continue;
    }
    for (const snippet of requiredSnippets) {
      if (!source.includes(snippet)) {
        addError(`${relativePath} is missing required SEO marker: ${snippet}`);
      }
    }
  }

  const localeSource = await readText("src/shared/i18n/locales.ts");
  for (const locale of LOCALES) {
    const line = localeSource
      .split(/\r?\n/)
      .find((candidate) => candidate.includes(`code: "${locale}"`));
    if (!line) {
      addError(`Missing locale definition: ${locale}`);
      continue;
    }
    if (!/reviewed: true, indexable: true/.test(line)) {
      addError(`${locale} is not enabled as reviewed and indexable.`);
    }
  }

  const siteSource = await readText("src/shared/config/site.ts");
  if (!siteSource.includes(PRODUCTION_ORIGIN)) {
    addError(
      `Site configuration does not contain the canonical production origin ${PRODUCTION_ORIGIN}.`,
    );
  }

  const packageJson = JSON.parse(await readText("package.json"));
  for (const script of [
    "audit:content",
    "audit:content:update",
    "validate:seo",
    "verify:release",
  ]) {
    if (!packageJson.scripts?.[script]) {
      addError(`Missing package script: ${script}`);
    }
  }
  if (
    packageJson.scripts?.["audit:content"]?.includes("--write-review")
  ) {
    addError("audit:content must be read-only by default.");
  }

  const llmsRoute = join(ROOT, "src", "app", "llms.txt", "route.ts");
  try {
    const source = await readFile(llmsRoute, "utf8");
    for (const required of [
      SITE_NAME,
      "absoluteUrl",
      "sitemap.xml",
      "text/plain",
    ]) {
      if (!source.includes(required)) {
        addError(`llms.txt route is missing: ${required}`);
      }
    }
  } catch {
    addError("Missing /llms.txt route.");
  }

  try {
    const intentMap = JSON.parse(
      await readText("SEO/page-intent-map.json"),
    );
    const entries = Array.isArray(intentMap.entries)
      ? intentMap.entries
      : [];
    if (
      JSON.stringify([...(intentMap.locales ?? [])].sort()) !==
      JSON.stringify([...LOCALES].sort())
    ) {
      addError("SEO/page-intent-map.json does not cover all locales.");
    }
    const keys = new Set();
    for (const entry of entries) {
      const key = entry.route;
      if (keys.has(key)) {
        addError(`Duplicate intent-map route: ${key}`);
      }
      keys.add(key);
      if (
        typeof entry.route !== "string" ||
        !["static", "article"].includes(entry.kind) ||
        !["localized-seo-title", "localized-content-title"].includes(
          entry.primaryIntentSource,
        ) ||
        !entry.intentType ||
        !entry.purpose ||
        !Array.isArray(entry.internalLinks) ||
        !Array.isArray(entry.avoidCompetingWith)
      ) {
        addError(`Incomplete intent-map entry: ${key}`);
      }
    }
    const routeSource = await readText("src/shared/routes/routes.ts");
    const staticRoutes = [
      ...routeSource.matchAll(/^\s+"([^"]*)",?$/gm),
    ]
      .map((match) => match[1])
      .filter(
        (route) =>
          route === "" ||
          !route.startsWith("preview/") &&
            !route.startsWith("download/"),
      );
    const blogFiles = (await readdir(join(ROOT, "content", "blog")))
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => `blog/${filename.slice(0, -4)}`);
    const expectedRoutes = new Set([...staticRoutes, ...blogFiles]);
    for (const route of expectedRoutes) {
      if (!keys.has(route)) {
        addError(`Intent map is missing route: ${route || "/"}`);
      }
    }
    for (const route of keys) {
      if (!expectedRoutes.has(route)) {
        addError(`Intent map contains unknown route: ${route}`);
      }
    }
  } catch {
    addError("Missing or invalid SEO/page-intent-map.json.");
  }
};

const fetchText = async (url) => {
  const response = await fetch(url, {
    headers: { "user-agent": "Page2File-SEO-Validator/1.0" },
    redirect: "follow",
  });
  return { response, text: await response.text() };
};

const validateRenderedPage = (url, html) => {
  const title = pageTitle(html);
  const description = metaContent(html, "name", "description");
  const canonical = linkHref(html, "canonical");
  const robots = metaContent(html, "name", "robots").toLowerCase();
  const ogTitle = metaContent(html, "property", "og:title");
  const ogDescription = metaContent(html, "property", "og:description");
  const ogUrl = metaContent(html, "property", "og:url");
  const ogImage = metaContent(html, "property", "og:image");
  const twitterCard = metaContent(html, "name", "twitter:card");
  const alternates = links(html).filter(
    (tag) => attribute(tag, "rel").toLowerCase() === "alternate",
  );
  const internalPaths = tags(html, "a")
    .map((tag) => attribute(tag, "href"))
    .filter(
      (href) =>
        href &&
        !href.startsWith("#") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:"),
    )
    .map((href) => new URL(href.replaceAll("&amp;", "&"), PRODUCTION_ORIGIN))
    .filter((href) => href.origin === PRODUCTION_ORIGIN)
    .map((href) => href.pathname.replace(/\/+$/, "") || "/");
  const jsonLd = [
    ...html.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];

  if (title.length < 30 || title.length > 65) {
    addError(`${url}: title length is ${title.length}, expected 30-65.`);
  }
  if (description.length < 100 || description.length > 170) {
    addError(
      `${url}: description length is ${description.length}, expected 100-170.`,
    );
  }
  if (canonical !== url) {
    addError(`${url}: canonical is ${canonical || "missing"}.`);
  }
  if (robots.includes("noindex") || robots.includes("nofollow")) {
    addError(`${url}: indexable page contains ${robots}.`);
  }
  if (countH1(html) !== 1) {
    addError(`${url}: expected one H1, found ${countH1(html)}.`);
  }
  const alternateLanguages = new Set(
    alternates.map((tag) => attribute(tag, "hreflang").toLowerCase()),
  );
  const expectedLanguages = new Set(["x-default", ...LOCALES]);
  if (
    alternates.length < expectedLanguages.size ||
    [...expectedLanguages].some(
      (language) => !alternateLanguages.has(language),
    )
  ) {
    addError(
      `${url}: expected ${LOCALES.length + 1} hreflang links, found ${alternates.length}.`,
    );
  }
  const expectedLanguage = new URL(url).pathname.split("/")[1];
  if (htmlLanguage(html) !== expectedLanguage) {
    addError(
      `${url}: html lang is ${htmlLanguage(html) || "missing"}, expected ${expectedLanguage}.`,
    );
  }
  if (!ogTitle || !ogDescription || ogUrl !== url || !ogImage) {
    addError(`${url}: incomplete Open Graph metadata.`);
  }
  if (twitterCard !== "summary_large_image") {
    addError(`${url}: missing summary_large_image Twitter card.`);
  }
  for (const match of jsonLd) {
    try {
      JSON.parse(match[1]);
    } catch {
      addError(`${url}: invalid JSON-LD.`);
    }
  }
  if (jsonLd.length === 0) {
    addError(`${url}: missing JSON-LD.`);
  }
  return { internalPaths, title };
};

const runWithConcurrency = async (items, limit, task) => {
  let cursor = 0;
  const worker = async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      await task(items[index]);
    }
  };
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );
};

const validateRendered = async (baseUrl) => {
  const origin = new URL(baseUrl).origin;
  const specialPaths = [
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/manifest.webmanifest",
  ];
  const specialResponses = new Map();
  for (const path of specialPaths) {
    const result = await fetchText(`${origin}${path}`);
    specialResponses.set(path, result);
    if (!result.response.ok) {
      addError(`${path}: returned ${result.response.status}.`);
    }
  }

  const robots = specialResponses.get("/robots.txt")?.text ?? "";
  if (
    !/User-agent:\s*OAI-SearchBot[\s\S]*Allow:\s*\//i.test(robots) ||
    !/User-agent:\s*GPTBot[\s\S]*Disallow:\s*\//i.test(robots)
  ) {
    addError("/robots.txt: AI-search/training crawler policy is incorrect.");
  }
  if (!robots.includes(`${PRODUCTION_ORIGIN}/sitemap.xml`)) {
    addError("/robots.txt: production sitemap URL is missing.");
  }

  const sitemap = specialResponses.get("/sitemap.xml")?.text ?? "";
  const urls = [
    ...sitemap.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g),
  ].map((match) => match[1]);
  const uniqueUrls = [...new Set(urls)];
  const canonicalPaths = new Set(
    uniqueUrls.map(
      (url) => new URL(url).pathname.replace(/\/+$/, "") || "/",
    ),
  );
  const titleRoutes = new Map();
  const linkedPaths = new Map();
  if (uniqueUrls.length === 0) {
    addError("/sitemap.xml: no canonical URLs found.");
    return;
  }
  const invalidHosts = uniqueUrls.filter(
    (url) => new URL(url).origin !== PRODUCTION_ORIGIN,
  );
  if (invalidHosts.length > 0) {
    addError(
      `/sitemap.xml: ${invalidHosts.length} URL(s) use another origin.`,
    );
  }

  await runWithConcurrency(uniqueUrls, 8, async (canonicalUrl) => {
    const canonical = new URL(canonicalUrl);
    const previewUrl = `${origin}${canonical.pathname}${canonical.search}`;
    try {
      const { response, text } = await fetchText(previewUrl);
      if (response.status !== 200) {
        addError(`${canonicalUrl}: returned ${response.status}.`);
        return;
      }
      const result = validateRenderedPage(canonicalUrl, text);
      const locale = canonical.pathname.split("/")[1];
      const normalizedTitle = result.title
        .replace(/\s*\|\s*Page 2 File\s*$/i, "")
        .toLocaleLowerCase(locale);
      const localeTitles = titleRoutes.get(locale) ?? new Map();
      const competingRoute = localeTitles.get(normalizedTitle);
      if (competingRoute) {
        addError(
          `${canonicalUrl}: potential cannibalization; rendered title duplicates ${competingRoute}.`,
        );
      } else {
        localeTitles.set(normalizedTitle, canonicalUrl);
        titleRoutes.set(locale, localeTitles);
      }
      linkedPaths.set(canonicalUrl, result.internalPaths);
    } catch (error) {
      addError(`${canonicalUrl}: fetch failed (${error.message}).`);
    }
  });

  for (const [sourceUrl, paths] of linkedPaths) {
    for (const linkedPath of new Set(paths)) {
      if (
        /^\/(?:api|_next)\//.test(linkedPath) ||
        /^\/[^/]+\/(?:preview|download)\//.test(linkedPath) ||
        /^\/[^/]+\/(?:privacy|terms)$/.test(linkedPath)
      ) {
        continue;
      }
      if (!canonicalPaths.has(linkedPath)) {
        addError(`${sourceUrl}: internal link is not canonical: ${linkedPath}.`);
      }
    }
  }

  const missingLocale = LOCALES.filter(
    (locale) =>
      !uniqueUrls.some(
        (url) => new URL(url).pathname === `/${locale}`,
      ),
  );
  if (missingLocale.length > 0) {
    addError(
      `/sitemap.xml: missing locale homepages: ${missingLocale.join(", ")}.`,
    );
  }
};

await validateSource();

const baseUrl = process.env.SEO_BASE_URL?.trim();
if (baseUrl) {
  try {
    await validateRendered(baseUrl);
  } catch (error) {
    addError(`Rendered SEO validation failed: ${error.message}`);
  }
}

if (errors.length > 0) {
  const shown = errors.slice(0, 80);
  const remaining = errors.length - shown.length;
  throw new Error(
    [
      `SEO validation failed with ${errors.length} issue(s):`,
      ...shown.map((error) => `- ${error}`),
      remaining > 0 ? `- ...and ${remaining} more.` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

console.log(
  `SEO valid in ${baseUrl ? "source and rendered" : "source"} mode for ${LOCALES.length} locales.`,
);
