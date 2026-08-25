import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const locales = ["en", "ru"];
const allowPending = process.argv.includes("--allow-pending");
const writeReview = process.argv.includes("--write-review");
const directories = Object.fromEntries(
  locales.map((locale) => [
    locale,
    locale === "en"
      ? join(root, "content", "blog")
      : join(root, "content", locale, "blog"),
  ]),
);
const reviewState = JSON.parse(
  await readFile(join(root, "SEO", "editorial-review-state.json"), "utf8"),
);
const reviewedLocales = new Set(reviewState.reviewedLocales ?? ["en", "ru"]);

const commonForbiddenPatterns = [
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
  /Page2File|Page2PDF|Web2PDF|HTML2PDF|Web2PowerPoint/,
  /\b(?:TODO|TBD|placeholder)\b/,
  /\bavailable now\b/i,
  /\bprocessed locally\b/i,
  /\bstays? local\b/i,
  /обрабатыва(?:ется|ются).*локальн/iu,
];
const localeForbiddenPatterns = {
  en: [/\bscenario\b/i],
  ru: [/сценар/iu],
};
const untranslatedJargonPatterns = [
  /\blazy[- ]load(?:ing|ed)?\b/i,
  /\brendered state\b/i,
  /\bsource data\b/i,
  /\bactive-tab capture\b/i,
  /\btext-and-media package\b/i,
  /\bnative export\b/i,
  /\b(?:content|account|navigation|membership|profile) details\b/i,
  /\bboundaries\b/i,
  /\bviewport\b/i,
  /\bDOM\b/,
];
const englishJargonRules = [
  {
    term: /\blazy[- ]load(?:ing|ed)?\b/i,
    explanation:
      /(?:appear|load|show)[^.]{0,100}(?:scroll|visible)|scroll[^.]{0,100}(?:appear|load|show)/i,
    label: "lazy-loading-without-plain-explanation",
  },
  {
    term: /\bviewport\b/i,
    explanation:
      /(?:visible|viewable)[^.]{0,80}(?:area|part|screen)|(?:area|part)[^.]{0,80}(?:screen|you can see)/i,
    label: "viewport-without-plain-explanation",
  },
  {
    term: /\bDOM\b/,
    explanation:
      /(?:elements|rows|content)[^.]{0,100}(?:browser|page)|browser[^.]{0,100}(?:keeps|holds|removes|replaces)/i,
    label: "dom-without-plain-explanation",
  },
  {
    term: /\bvirtuali[sz](?:e|ed|ation|ing)\b/i,
    explanation:
      /(?:remove|replace|discard|unload)[^.]{0,120}(?:off-screen|older|previous|element|row|content)/i,
    label: "virtualization-without-plain-explanation",
  },
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

for (const locale of locales) {
  if (filesByLocale.en.join("|") !== filesByLocale[locale].join("|")) {
    throw new Error(`English and ${locale} blog filenames do not match.`);
  }
}

if (filesByLocale.en.length === 0) {
  if (writeReview) {
    await writeFile(
      join(root, "SEO", "editorial-review.csv"),
      "locale,slug,status,blocker\n",
      "utf8",
    );
  }
  console.log(
    `Editorial audit checked an empty, locale-matched blog corpus${writeReview ? "; review CSV updated" : "; read-only mode"}.`,
  );
  process.exit(0);
}

const validBlogPaths = new Set(
  filesByLocale.en.flatMap((name) => {
    const slug = name.replace(/\.mdx$/, "");
    return locales.map((locale) => `/${locale}/blog/${slug}`);
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
const allParagraphsByLocale = new Map(
  locales.map((locale) => [locale, new Map()]),
);
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
    const allParagraphs = allParagraphsByLocale.get(locale);
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
    const forbiddenPatterns = [
      ...commonForbiddenPatterns,
      ...(localeForbiddenPatterns[locale] ?? []),
    ];
    const forbidden = forbiddenPatterns
      .filter((pattern) => pattern.test(content))
      .map((pattern) => pattern.source);
    const unexplainedJargon =
      locale === "en"
        ? englishJargonRules
            .filter(
              ({ term, explanation }) =>
                term.test(content) && !explanation.test(content),
            )
            .map(({ label }) => label)
        : untranslatedJargonPatterns
            .filter((pattern) => pattern.test(content))
            .map((pattern) => pattern.source);
    const unsupportedClaims = unsupportedClaimPatterns
      .filter((pattern) => pattern.test(content))
      .map((pattern) => pattern.source);
    const translationRatio =
      locale === "en" ? 1 : wordCount / englishWordCounts.get(slug);
    const contentDepthPass = wordCount >= 400 && h2Count >= 3;
    const factSources = [
      "product-spec:user-approved-2026-08-02",
      ...externalLinks.map(({ href }) => href),
    ];
    const manualComplete =
      locale === "en"
        ? reviewState.englishFrozen.includes(slug)
        : locale === "ru"
          ? reviewState.russianProofread.includes(slug)
          : reviewedLocales.has(locale);
    const reviewCycle = reviewState.reviewCycles[reviewKey] ?? 0;
    const renderedComplete =
      reviewState.renderedReviewed.includes(reviewKey) ||
      reviewState.renderedReviewed.includes(`${locale}:*`);

    const automatedSeoPass =
      contentDepthPass &&
      internalLinks.length >= 2 &&
      internalLinks.length <= 10;
    const automatedAntiSlopPass =
      forbidden.length === 0 &&
      unexplainedJargon.length === 0 &&
      duplicateParagraphs.length === 0 &&
      duplicateHeadings.length === 0;
    const automatedFactPass = unsupportedClaims.length === 0;
    const automatedLinkPass =
      productLinks.length >= 1 &&
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
      !contentDepthPass
        ? `minimum-depth:${wordCount} words/${h2Count} h2`
        : "",
      productLinks.length < 1 ? "missing-product-link" : "",
      internalLinks.length < 2 || internalLinks.length > 10
        ? `internal-links:${internalLinks.length} outside 2-10`
        : "",
      forbidden.length > 0 ? `forbidden:${forbidden.join(";")}` : "",
      unexplainedJargon.length > 0
        ? `plain-language:${unexplainedJargon.join(";")}`
        : "",
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
    ].filter(Boolean);

    reviewRows.push({
      locale,
      slug,
      content_class: "article",
      review_cycle: reviewCycle,
      word_count: wordCount,
      target_word_range: `minimum:400;translation-ratio:${translationRatio.toFixed(2)}`,
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
if (writeReview) {
  await writeFile(
    join(root, "SEO", "editorial-review.csv"),
    `${csv}\n`,
    "utf8",
  );
}

const landingFiles = {
  en: "src/content/landings.ts",
  ru: "src/content/russian-landings.ts",
};
for (const [locale, landingFile] of Object.entries(landingFiles)) {
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
    `${blocked.length} article reviews are blocked. Run npm run audit:content:update to refresh SEO/editorial-review.csv.`,
  );
}

console.log(
  `Editorial audit checked ${reviewRows.length} localized articles: ${reviewRows.length - blocked.length} publish, ${blocked.length} blocked; ${orphanedBlogPaths.length} orphaned blog paths${writeReview ? "; review CSV updated" : "; read-only mode"}.`,
);
