import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const locales = ["en", "ru"];
const allowPending = process.argv.includes("--allow-pending");
const directories = {
  en: join(root, "content", "blog"),
  ru: join(root, "content", "ru", "blog"),
};
const reviewState = JSON.parse(
  await readFile(join(root, "SEO", "editorial-review-state.json"), "utf8"),
);

const technicalGuides = new Set([
  "save-webpage-as-pdf",
  "capture-full-webpage-as-pdf",
  "long-webpage-page-breaks",
  "preserve-clickable-links",
  "visual-vs-editable",
  "html-to-pdf-safely",
  "webpage-to-powerpoint",
  "html-to-powerpoint",
  "sections-to-slides",
  "screenshot-vs-editable-powerpoint",
  "save-authenticated-webpage-as-pdf",
]);
const hubsAndComparisons = new Set([
  "why-print-to-pdf-breaks",
  "multi-page-website-to-pdf",
  "website-to-powerpoint",
  "website-types-to-pdf-or-powerpoint",
  "webpage-capture-vs-web-scraping",
  "export-ai-chats-privately",
  "export-browser-messenger-chats-to-pdf",
]);
const hubSlugs = new Set([
  "website-types-to-pdf-or-powerpoint",
  "webpage-capture-vs-web-scraping",
  "export-ai-chats-privately",
  "export-browser-messenger-chats-to-pdf",
]);
const wordRanges = {
  technical: [1200, 1800],
  hub: [1400, 2200],
  platform: [900, 1400],
};
const requiredOfficialDomains = new Map([
  [
    "export-ai-chats-privately",
    ["help.openai.com", "support.claude.com", "support.google.com"],
  ],
  ["export-chatgpt-conversation-to-pdf", ["help.openai.com"]],
  ["export-claude-chat-to-pdf", ["support.claude.com"]],
  ["export-gemini-chat-to-pdf", ["support.google.com"]],
  [
    "export-other-ai-chats-to-pdf",
    ["x.ai", "deepseek.com", "perplexity.ai", "support.microsoft.com"],
  ],
  ["export-whatsapp-chat-to-pdf", ["faq.whatsapp.com"]],
  ["export-telegram-chat-to-pdf", ["telegram.org"]],
  [
    "export-browser-messenger-chats-to-pdf",
    ["discord.com", "slack.com", "support.microsoft.com", "facebook.com"],
  ],
]);
const forbiddenPatterns = [
  /\bdelve\b/i,
  /\bever-evolving landscape\b/i,
  /\brobust\b/i,
  /\btapestry\b/i,
  /\bcrucial\b/i,
  /\bunderscore\b/i,
  /\bnot just\b[\s\S]{0,100}\bbut(?: also)?\b/i,
  /\bexperts say\b/i,
  /\bstudies show\b/i,
  /\bindustry experts\b/i,
  /\bin today'?s (?:digital )?(?:world|landscape)\b/i,
  /\bin this (?:article|guide),? we(?:'ll| will)\b/i,
  /\bwhether you(?:'re| are)\b/i,
  /\bscenario\b/i,
  /сценар/iu,
  /Page2File|Page2PDF|Web2PDF|HTML2PDF|Web2PowerPoint/,
  /\b(?:TODO|TBD|placeholder)\b/i,
  /\bavailable now\b/i,
  /\bprocessed locally\b/i,
  /\bstays? local\b/i,
  /обрабатыва(?:ется|ются).*локальн/iu,
];
const unsupportedClaimPatterns = [
  /\bprocessed locally\b/i,
  /\bstays? local\b/i,
  /\bnothing leaves\b/i,
  /\bnever leaves\b/i,
  /\b(?:in|within) seconds\b/i,
  /\bavailable now\b/i,
  /обрабатыва(?:ется|ются).*локальн/iu,
  /не покида/iu,
  /за \d+ секунд/iu,
  /без огранич/iu,
];

const csvCell = (value) => {
  const stringValue = String(value ?? "");
  return /[",\r\n]/.test(stringValue)
    ? `"${stringValue.replaceAll('"', '""')}"`
    : stringValue;
};

const contentClass = (slug) => {
  if (technicalGuides.has(slug)) {
    return "technical";
  }
  if (hubsAndComparisons.has(slug)) {
    return "hub";
  }
  return "platform";
};

const linkDomainMatches = (href, expectedDomain) => {
  try {
    const hostname = new URL(href).hostname.toLowerCase();
    return (
      hostname === expectedDomain || hostname.endsWith(`.${expectedDomain}`)
    );
  } catch {
    return false;
  }
};

const filesByLocale = {};
const contentByLocaleAndSlug = new Map();
for (const locale of locales) {
  filesByLocale[locale] = (await readdir(directories[locale]))
    .filter((name) => name.endsWith(".mdx"))
    .sort();
  for (const filename of filesByLocale[locale]) {
    const slug = filename.replace(/\.mdx$/, "");
    contentByLocaleAndSlug.set(
      `${locale}/${slug}`,
      await readFile(join(directories[locale], filename), "utf8"),
    );
  }
}

if (filesByLocale.en.join("|") !== filesByLocale.ru.join("|")) {
  throw new Error("English and Russian blog filenames do not match.");
}

const validBlogPaths = new Set(
  filesByLocale.en.flatMap((name) => {
    const slug = name.replace(/\.mdx$/, "");
    return [`/en/blog/${slug}`, `/ru/blog/${slug}`];
  }),
);
const stripArticleFigures = (content) =>
  content.replace(/<ArticleFigure[\s\S]*?\/>/g, "");
const englishWordCounts = new Map();
for (const filename of filesByLocale.en) {
  const slug = filename.replace(/\.mdx$/, "");
  const content = contentByLocaleAndSlug.get(`en/${slug}`);
  const plainText = stripArticleFigures(content)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*_`>~-]/g, " ");
  englishWordCounts.set(
    slug,
    plainText.split(/\s+/).filter(Boolean).length,
  );
}

const reviewRows = [];
const allParagraphs = new Map();
const incomingLinks = new Map();
for (const locale of locales) {
  for (const filename of filesByLocale[locale]) {
    const slug = filename.replace(/\.mdx$/, "");
    const contentKey = `${locale}/${slug}`;
    const reviewKey = `${locale}:${slug}`;
    const content = contentByLocaleAndSlug.get(contentKey);
    const markdownLinks = [
      ...content.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g),
    ].map((match) => ({ anchor: match[1], href: match[2] }));
    const internalLinks = markdownLinks.filter(({ href }) =>
      href.startsWith("/"),
    );
    const externalLinks = markdownLinks.filter(
      ({ href }) => /^https?:\/\//.test(href),
    );
    const blogLinks = internalLinks.filter(({ href }) =>
      href.includes("/blog/"),
    );
    const productLinks = internalLinks.filter(
      ({ href }) => !href.includes("/blog/"),
    );
    const linkedBlogSlugs = blogLinks.map(({ href }) => href.split("/").at(-1));
    const linkedHubs = linkedBlogSlugs.filter(
      (linkedSlug) => hubSlugs.has(linkedSlug) && linkedSlug !== slug,
    );
    const adjacentLinks = linkedBlogSlugs.filter(
      (linkedSlug) => !hubSlugs.has(linkedSlug) && linkedSlug !== slug,
    );
    const wrongLocaleLinks = internalLinks.filter(
      ({ href }) => !href.startsWith(`/${locale}/`),
    );
    const brokenBlogLinks = blogLinks.filter(
      ({ href }) => !validBlogPaths.has(href),
    );
    for (const { href } of internalLinks) {
      incomingLinks.set(href, (incomingLinks.get(href) ?? 0) + 1);
    }

    const contentWithoutFigures = stripArticleFigures(content);
    const paragraphs = contentWithoutFigures
      .split(/\n{2,}/)
      .map((value) => value.trim())
      .filter(
        (value) =>
          value.length >= 120 &&
          !value.startsWith("#") &&
          !value.startsWith("-"),
      );
    const duplicateParagraphs = [];
    for (const paragraph of paragraphs) {
      const normalized = paragraph.replace(/\s+/g, " ").toLowerCase();
      const previous = allParagraphs.get(normalized);
      if (previous) {
        duplicateParagraphs.push(previous);
      } else {
        allParagraphs.set(normalized, contentKey);
      }
    }

    const plainText = contentWithoutFigures
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[#*_`>~-]/g, " ");
    const wordCount = plainText.split(/\s+/).filter(Boolean).length;
    const headings = [...content.matchAll(/^## (.+)$/gm)].map((match) =>
      match[1].trim().toLowerCase(),
    );
    const duplicateHeadings = headings.filter(
      (heading, index) => headings.indexOf(heading) !== index,
    );
    const h2Count = headings.length;
    const forbidden = forbiddenPatterns
      .filter((pattern) => pattern.test(content))
      .map((pattern) => pattern.source);
    const unsupportedClaims = unsupportedClaimPatterns
      .filter((pattern) => pattern.test(content))
      .map((pattern) => pattern.source);
    const articleClass = contentClass(slug);
    const [targetMin, targetMax] = wordRanges[articleClass];
    const translationRatio =
      locale === "ru" ? wordCount / englishWordCounts.get(slug) : 1;
    const wordDepthPass =
      locale === "en"
        ? wordCount >= targetMin && wordCount <= targetMax
        : translationRatio >= 0.55 && translationRatio <= 1.2;
    const officialDomains = requiredOfficialDomains.get(slug) ?? [];
    const missingOfficialDomains =
      locale === "en"
        ? officialDomains.filter(
            (domain) =>
              !externalLinks.some(({ href }) =>
                linkDomainMatches(href, domain),
              ),
          )
        : [];
    const factSources = [
      "product-spec:user-approved-2026-08-02",
      ...externalLinks.map(({ href }) => href),
    ];
    const manualComplete =
      locale === "en"
        ? reviewState.englishFrozen.includes(slug)
        : reviewState.russianProofread.includes(slug);
    const reviewCycle = reviewState.reviewCycles[reviewKey] ?? 0;
    const renderedComplete = reviewState.renderedReviewed.includes(reviewKey);

    const automatedSeoPass =
      wordDepthPass &&
      h2Count >= 6 &&
      internalLinks.length >= 3 &&
      internalLinks.length <= 6;
    const automatedAntiSlopPass =
      forbidden.length === 0 &&
      duplicateParagraphs.length === 0 &&
      duplicateHeadings.length === 0;
    const automatedFactPass =
      unsupportedClaims.length === 0 && missingOfficialDomains.length === 0;
    const automatedLinkPass =
      productLinks.length >= 1 &&
      linkedHubs.length >= 1 &&
      adjacentLinks.length >= 1 &&
      adjacentLinks.length <= 3 &&
      wrongLocaleLinks.length === 0 &&
      brokenBlogLinks.length === 0;

    const checks = {
      serp_intent_pass: manualComplete ? "pass" : "pending",
      fact_review:
        automatedFactPass && manualComplete
          ? "pass"
          : automatedFactPass
            ? "pending"
            : "fail",
      seo_review: automatedSeoPass ? "pass" : "fail",
      anti_slop_review:
        automatedAntiSlopPass && manualComplete
          ? "pass"
          : automatedAntiSlopPass
            ? "pending"
            : "fail",
      link_review: automatedLinkPass ? "pass" : "fail",
      rendered_review: renderedComplete ? "pass" : "pending",
    };
    const allPassed = Object.values(checks).every((value) => value === "pass");
    const blockers = [
      !manualComplete ? "manual-editorial-review" : "",
      !renderedComplete ? "rendered-review" : "",
      !wordDepthPass
        ? locale === "en"
          ? `word-depth:${wordCount} outside ${targetMin}-${targetMax}`
          : `translation-ratio:${translationRatio.toFixed(2)} outside 0.55-1.20`
        : "",
      h2Count < 6 ? `h2-count:${h2Count}<6` : "",
      productLinks.length < 1 ? "missing-product-link" : "",
      linkedHubs.length < 1 ? "missing-hub-link" : "",
      adjacentLinks.length < 1 || adjacentLinks.length > 3
        ? `adjacent-links:${adjacentLinks.length} outside 1-3`
        : "",
      internalLinks.length < 3 || internalLinks.length > 6
        ? `internal-links:${internalLinks.length} outside 3-6`
        : "",
      forbidden.length > 0 ? `forbidden:${forbidden.join(";")}` : "",
      unsupportedClaims.length > 0
        ? `unsupported-claims:${unsupportedClaims.join(";")}`
        : "",
      duplicateParagraphs.length > 0
        ? `duplicate:${duplicateParagraphs.join(";")}`
        : "",
      duplicateHeadings.length > 0
        ? `duplicate-headings:${duplicateHeadings.join(";")}`
        : "",
      wrongLocaleLinks.length > 0
        ? `wrong-locale:${wrongLocaleLinks.map(({ href }) => href).join(";")}`
        : "",
      brokenBlogLinks.length > 0
        ? `broken-blog:${brokenBlogLinks.map(({ href }) => href).join(";")}`
        : "",
      missingOfficialDomains.length > 0
        ? `missing-official:${missingOfficialDomains.join(";")}`
        : "",
    ].filter(Boolean);

    reviewRows.push({
      locale,
      slug,
      content_class: articleClass,
      review_cycle: reviewCycle,
      word_count: wordCount,
      target_word_range:
        locale === "en"
          ? `${targetMin}-${targetMax}`
          : `translation-ratio:${translationRatio.toFixed(2)}`,
      h2_count: h2Count,
      internal_links: internalLinks.length,
      external_links: externalLinks.length,
      fact_sources: factSources.join(" | "),
      ...checks,
      reviewed_at: manualComplete ? reviewState.reviewedAt : "",
      status: allPassed ? "publish" : "blocked",
      blocker: blockers.join(" | "),
    });
  }
}

const headers = Object.keys(reviewRows[0]);
const csv = [
  headers.join(","),
  ...reviewRows.map((row) =>
    headers.map((header) => csvCell(row[header])).join(","),
  ),
].join("\n");
await writeFile(
  join(root, "SEO", "editorial-review.csv"),
  `${csv}\n`,
  "utf8",
);

for (const [locale, landingFile] of [
  ["en", "src/content/landings.ts"],
  ["ru", "src/content/russian-landings.ts"],
]) {
  const source = await readFile(join(root, landingFile), "utf8");
  for (const blockMatch of source.matchAll(
    /articleLinks: \[([\s\S]*?)\n    \],/g,
  )) {
    for (const slugMatch of blockMatch[1].matchAll(/slug: "([^"]+)"/g)) {
      const href = `/${locale}/blog/${slugMatch[1]}`;
      incomingLinks.set(href, (incomingLinks.get(href) ?? 0) + 1);
    }
  }
}

const orphanedBlogPaths = [...validBlogPaths].filter(
  (href) => !incomingLinks.has(href),
);
const blocked = reviewRows.filter(({ status }) => status === "blocked");
if (orphanedBlogPaths.length > 0) {
  console.warn(`Orphaned blog paths: ${orphanedBlogPaths.join(", ")}`);
}
if (blocked.length > 0 && !allowPending) {
  throw new Error(
    `${blocked.length} article reviews are blocked. See SEO/editorial-review.csv.`,
  );
}

console.log(
  `Editorial audit recorded ${reviewRows.length} localized articles: ${reviewRows.length - blocked.length} publish, ${blocked.length} blocked; ${orphanedBlogPaths.length} orphaned blog paths.`,
);
