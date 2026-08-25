import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const SITE_NAME = "Page 2 File";
const PRODUCTION_ORIGIN = "https://page2file.com";
const LOCALES = ["en", "ru"];
const EN_ONLY_ROUTE_PATHS = new Set([
  "/en/chrome-extension/webpage-to-pdf",
  "/en/chrome-extension/ai-chat-to-pdf",
  "/en/chrome-extension/messenger-chat-to-pdf",
  "/en/chrome-extension/full-page-pdf",
  "/en/chrome-extension/webpage-to-pdf-with-links",
  "/en/chrome-extension/html-page-to-pdf",
  "/en/chrome-extension/chatgpt-to-pdf",
  "/en/chrome-extension/claude-to-pdf",
  "/en/chrome-extension/whatsapp-chat-to-pdf",
  "/en/chrome-extension/telegram-chat-to-pdf",
  "/en/chrome-extension/chrome-print-vs-page-2-pdf",
]);
const SOURCE_CHECKS = [
  [
    "src/shared/seo/metadata.ts",
    ["canonical", "languages:", "openGraph", "twitter", "robots"],
  ],
  [
    "src/shared/seo/structured-data.tsx",
    ["WebSite", "BlogPosting", "BreadcrumbList", "Organization", "SoftwareApplication"],
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
const parseCsv = (source) => {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (quoted) {
      if (character === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }
    if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }
  if (field || row.length > 0) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }
  const [header = [], ...values] = rows;
  return values
    .filter((valuesRow) => valuesRow.some(Boolean))
    .map((valuesRow) =>
      Object.fromEntries(
        header.map((name, index) => [name, valuesRow[index] ?? ""]),
      ),
    );
};
const readCsv = async (relativePath) =>
  parseCsv(await readText(relativePath));
const normalizeQuery = (value) => value.trim().toLowerCase();
const splitSources = (value) =>
  value
    .split("|")
    .map((source) => source.trim())
    .filter(Boolean);
const sha256 = (bytes) =>
  createHash("sha256").update(bytes).digest("hex");
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

const validateSemanticData = async () => {
  const [
    core,
    excluded,
    ledger,
    competitorPatterns,
    storeCopyAnalysis,
    storeCopyTraceability,
    usValidation,
    acquisitionProspects,
  ] = await Promise.all([
    readCsv("SEO/semantic-core-en.csv"),
    readCsv("SEO/excluded-keywords.csv"),
    readCsv("SEO/source-ledger.csv"),
    readCsv("SEO/competitor-growth-patterns.csv"),
    readCsv("SEO/chrome-web-store-copy-analysis-en-US.csv"),
    readCsv("SEO/chrome-web-store-query-traceability-en-US.csv"),
    readCsv("SEO/us-serp-validation.csv"),
    readCsv("SEO/acquisition-prospects-en-US.csv"),
  ]);
  const coreQueries = new Set();
  const excludedQueries = new Set();
  const allowedTargetUrls = new Set([
    "",
    "/en",
    "/en/chrome-extension/how-to-use",
    "/en/chrome-extension/webpage-to-pdf",
    "/en/chrome-extension/ai-chat-to-pdf",
    "/en/chrome-extension/messenger-chat-to-pdf",
    "/en/chrome-extension/full-page-pdf",
    "/en/chrome-extension/webpage-to-pdf-with-links",
    "/en/chrome-extension/html-page-to-pdf",
    "/en/chrome-extension/chatgpt-to-pdf",
    "/en/chrome-extension/claude-to-pdf",
    "/en/chrome-extension/whatsapp-chat-to-pdf",
    "/en/chrome-extension/telegram-chat-to-pdf",
    "/en/chrome-extension/chrome-print-vs-page-2-pdf",
  ]);
  const allowedMarketScopes = new Set(["worldwide_english", "us_first"]);
  const allowedValidationStates = new Set(["pending", "validated", "rejected"]);
  const forbiddenTargets = new Set([
    "chatgpt export data",
    "export all whatsapp chats",
    "whatsapp export all chats",
    "discord export chat",
    "export discord chat",
    "export instagram chat",
    "export messenger chat",
    "export teams chat",
    "export teams chat history",
    "how to export instagram chat",
    "how to export teams chat",
    "microsoft teams export chat",
    "teams chat export",
    "teams export chat",
  ]);
  const informationalQueries = new Set([
    "export chat in whatsapp meaning",
    "export chat whatsapp meaning",
    "what does export chat mean on whatsapp",
    "what is export chat in whatsapp",
  ]);
  const activeTabQueries = new Set([
    "convert webpage to pdf",
    "html to pdf",
    "html to pdf converter",
    "url to pdf",
    "webpage to pdf",
    "website to pdf",
  ]);
  if (competitorPatterns.length < 10) {
    addError("Competitor growth evidence must contain at least 10 sourced patterns.");
  }
  for (const row of competitorPatterns) {
    for (const field of [
      "product",
      "surface",
      "pattern",
      "evidence",
      "source_url",
      "confidence",
      "applicability",
      "policy_risk",
    ]) {
      if (!row[field]?.trim()) {
        addError(`Competitor growth evidence is missing ${field}.`);
      }
    }
    if (!new Set(["high", "medium", "low"]).has(row.confidence)) {
      addError(`${row.product || "Competitor"}: invalid evidence confidence.`);
    }
    try {
      const source = new URL(row.source_url);
      if (source.protocol !== "https:") {
        addError(`${row.product}: evidence source must use HTTPS.`);
      }
    } catch {
      addError(`${row.product || "Competitor"}: invalid evidence source URL.`);
    }
  }
  if (acquisitionProspects.length !== 50) {
    addError(
      `Expected 50 en-US acquisition prospects, found ${acquisitionProspects.length}.`,
    );
  }
  const prospectUrls = new Set();
  for (const row of acquisitionProspects) {
    if (prospectUrls.has(row.url)) {
      addError(`Duplicate acquisition prospect URL: ${row.url}`);
    }
    prospectUrls.add(row.url);
    if (!row.outreach_angle || !row.status) {
      addError(`${row.title || row.url}: incomplete acquisition prospect.`);
    }
  }
  const targetQueries = new Set(
    core
      .filter((row) => row.status === "target")
      .map((row) => normalizeQuery(row.query ?? "")),
  );
  const targetRows = new Map(
    core
      .filter((row) => row.status === "target")
      .map((row) => [normalizeQuery(row.query ?? ""), row]),
  );
  const expectedCopyReferences = new Set([
    "sig-website",
    "viralmaxing",
    "messangermax",
    "parceled",
    "toneperfect",
    "yadaphone",
    "yadaphone-interview",
    "html-to-pdf-extension",
    "bota-chat",
    "youtube-dark-mode",
    "pixel-measurement",
    "youtube-to-text",
    "chatgpt-pdf",
    "chatgpt-sheets",
    "sigmobi-extension",
    "audio-voice-recorder",
  ]);
  const copyReferenceIds = new Set();
  let duplicateInputNotes = 0;
  if (storeCopyAnalysis.length !== expectedCopyReferences.size) {
    addError(
      `Expected ${expectedCopyReferences.size} unique Store-copy references, found ${storeCopyAnalysis.length}.`,
    );
  }
  for (const row of storeCopyAnalysis) {
    const referenceId = row.reference_id?.trim();
    if (copyReferenceIds.has(referenceId)) {
      addError(`Duplicate Store-copy reference: ${referenceId}.`);
    }
    copyReferenceIds.add(referenceId);
    for (const field of [
      "reference_id",
      "product",
      "surface",
      "source_url",
      "evidence_status",
      "useful_pattern",
      "risk_or_weakness",
      "applied_to_page_2_pdf",
      "not_applied",
      "review_status",
    ]) {
      if (!row[field]?.trim()) {
        addError(`${referenceId || "Store-copy reference"}: missing ${field}.`);
      }
    }
    if (!new Set(["available", "partial"]).has(row.evidence_status)) {
      addError(`${referenceId}: invalid evidence_status.`);
    }
    if (row.review_status !== "pass") {
      addError(`${referenceId}: Store-copy review is not pass.`);
    }
    if (row.duplicate_input_note?.trim()) {
      duplicateInputNotes += 1;
      if (referenceId !== "youtube-to-text") {
        addError(`${referenceId}: unexpected duplicate-input note.`);
      }
    }
    try {
      const source = new URL(row.source_url);
      if (source.protocol !== "https:") {
        addError(`${referenceId}: Store-copy source must use HTTPS.`);
      }
    } catch {
      addError(`${referenceId}: invalid Store-copy source URL.`);
    }
  }
  for (const referenceId of expectedCopyReferences) {
    if (!copyReferenceIds.has(referenceId)) {
      addError(`Missing Store-copy reference: ${referenceId}.`);
    }
  }
  if (duplicateInputNotes !== 1) {
    addError("The duplicated YouTube To Text input must be documented exactly once.");
  }

  const allowedTraceabilityStatuses = new Set([
    "included",
    "covered semantically",
    "excluded with reason",
  ]);
  const allowedStoreLocations = new Set([
    "title",
    "long_description",
    "long_description_boundaries",
    "not_applicable",
  ]);
  const traceabilityQueries = new Set();
  if (storeCopyTraceability.length !== targetQueries.size) {
    addError(
      `Expected Store-copy traceability for ${targetQueries.size} target queries, found ${storeCopyTraceability.length}.`,
    );
  }
  for (const row of storeCopyTraceability) {
    const query = normalizeQuery(row.query ?? "");
    const target = targetRows.get(query);
    if (traceabilityQueries.has(query)) {
      addError(`Duplicate Store-copy traceability query: ${query}.`);
    }
    traceabilityQueries.add(query);
    if (!target) {
      addError(`Store-copy traceability contains a non-target query: ${query}.`);
      continue;
    }
    if (row.cluster !== target.cluster) {
      addError(`${query}: traceability cluster does not match semantic core.`);
    }
    if (row.product_relevance !== target.product_relevance) {
      addError(`${query}: traceability product relevance does not match semantic core.`);
    }
    if (!allowedTraceabilityStatuses.has(row.status)) {
      addError(`${query}: invalid Store-copy traceability status.`);
    }
    if (!allowedStoreLocations.has(row.store_location)) {
      addError(`${query}: invalid Store-copy location.`);
    }
    if (!row.coverage_or_reason?.trim()) {
      addError(`${query}: missing Store-copy coverage or exclusion reason.`);
    }
    if (row.review_status !== "pass") {
      addError(`${query}: Store-copy traceability review is not pass.`);
    }
    if (row.us_validation_status !== target.us_validation_status) {
      addError(`${query}: traceability US validation state does not match semantic core.`);
    }
    if (
      row.us_validation_status === "pending" &&
      !/worldwide trends is not treated as us search volume/i.test(
        row.us_validation_note ?? "",
      )
    ) {
      addError(`${query}: pending US demand requires an explicit non-US-volume note.`);
    }
    if (
      row.status === "excluded with reason" &&
      row.store_location !== "not_applicable"
    ) {
      addError(`${query}: excluded Store intent must use not_applicable location.`);
    }
    if (
      row.status !== "excluded with reason" &&
      row.store_location === "not_applicable"
    ) {
      addError(`${query}: covered Store intent cannot use not_applicable location.`);
    }
  }
  for (const query of targetQueries) {
    if (!traceabilityQueries.has(query)) {
      addError(`Target query is missing from Store-copy traceability: ${query}.`);
    }
  }
  const usQueueQueries = new Set();
  for (const row of usValidation) {
    const query = normalizeQuery(row.query ?? "");
    const target = targetRows.get(query);
    if (usQueueQueries.has(query)) {
      addError(`Duplicate US SERP validation query: ${query}`);
    }
    usQueueQueries.add(query);
    if (!targetQueries.has(query)) {
      addError(`US SERP validation contains a non-target query: ${query}`);
    }
    if (row.market_scope !== "US") {
      addError(`${query}: US SERP validation must use market_scope US.`);
    }
    if (!allowedValidationStates.has(row.us_validation_status ?? "")) {
      addError(`${query}: invalid US SERP validation status.`);
    }
    if (target && row.us_validation_status !== target.us_validation_status) {
      addError(`${query}: US SERP queue state does not match semantic core.`);
    }
    if (target && row.target_url !== target.target_url) {
      addError(`${query}: US SERP target URL does not match semantic core.`);
    }
    if (
      row.us_validation_status === "validated" &&
      (!row.us_serp_checked_at || !row.evidence_url)
    ) {
      addError(`${query}: validated US demand requires a date and evidence URL.`);
    }
    if (
      Boolean(row.us_serp_checked_at) !== Boolean(row.evidence_url)
    ) {
      addError(`${query}: SERP check date and evidence URL must be recorded together.`);
    }
    if (
      row.us_serp_checked_at &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(row.us_serp_checked_at) ||
        Number.isNaN(Date.parse(`${row.us_serp_checked_at}T00:00:00Z`)))
    ) {
      addError(`${query}: invalid SERP check date ${row.us_serp_checked_at}.`);
    }
    if (row.evidence_url) {
      try {
        if (new URL(row.evidence_url).protocol !== "https:") {
          addError(`${query}: SERP evidence URL must use HTTPS.`);
        }
      } catch {
        addError(`${query}: invalid SERP evidence URL.`);
      }
    }
  }
  for (const query of targetQueries) {
    if (!usQueueQueries.has(query)) {
      addError(`Target query is missing from the US SERP validation queue: ${query}`);
    }
  }

  for (const row of core) {
    const query = normalizeQuery(row.query ?? "");
    if (!query) {
      addError("SEO/semantic-core-en.csv contains an empty query.");
      continue;
    }
    if (coreQueries.has(query)) {
      addError(`Duplicate semantic-core query: ${query}`);
    }
    coreQueries.add(query);
    if (!allowedTargetUrls.has(row.target_url ?? "")) {
      addError(`${query}: unsupported target URL ${row.target_url}.`);
    }
    if (!allowedMarketScopes.has(row.market_scope ?? "")) {
      addError(`${query}: invalid market_scope ${row.market_scope || "missing"}.`);
    }
    if (!allowedValidationStates.has(row.us_validation_status ?? "")) {
      addError(
        `${query}: invalid us_validation_status ${row.us_validation_status || "missing"}.`,
      );
    }
    if (row.status === "target" && !row.target_url) {
      addError(`${query}: target query has no target_url.`);
    }
    if (row.status === "research" && row.target_url) {
      addError(`${query}: research query must not have a target_url.`);
    }
    if (row.status === "target" && forbiddenTargets.has(query)) {
      addError(`${query}: target promises an unsupported product workflow.`);
    }
    if (informationalQueries.has(query) && row.status !== "research") {
      addError(`${query}: WhatsApp feature-definition intent must remain research.`);
    }
    if (
      activeTabQueries.has(query) &&
      !/active-tab|opens? the webpage in chrome|open chrome tab/i.test(
        row.serp_intent_notes ?? "",
      )
    ) {
      addError(`${query}: broad converter intent is missing the active-tab boundary.`);
    }
    if (
      row.us_validation_status === "validated" &&
      (row.market_scope !== "us_first" || !row.serp_checked_at)
    ) {
      addError(`${query}: US validation requires US scope and a dated SERP check.`);
    }
  }

  for (const row of excluded) {
    const query = normalizeQuery(row.query ?? "");
    if (!query) {
      addError("SEO/excluded-keywords.csv contains an empty query.");
      continue;
    }
    if (excludedQueries.has(query)) {
      addError(`Duplicate excluded query: ${query}`);
    }
    excludedQueries.add(query);
    if (coreQueries.has(query)) {
      addError(`Query exists in semantic core and excluded list: ${query}`);
    }
  }

  if (coreQueries.has("export grok deepseek perplexity or copilot chat to pdf")) {
    addError("Mixed Grok/DeepSeek/Perplexity/Copilot seed must remain split.");
  }
  for (const required of [
    "export grok chat to pdf",
    "export perplexity chat to pdf",
    "export microsoft copilot chat to pdf",
    "export deepseek chat to pdf",
  ]) {
    if (!coreQueries.has(required)) {
      addError(`Missing split AI-chat query: ${required}`);
    }
  }
  const deepSeek = core.find(
    (row) => normalizeQuery(row.query ?? "") === "export deepseek chat to pdf",
  );
  if (deepSeek?.status !== "research") {
    addError("DeepSeek must remain research until its live adapter is verified.");
  }

  const ledgerBySource = new Map();
  for (const row of ledger) {
    const source = row.source_file?.trim() ?? "";
    if (!source) {
      addError("SEO/source-ledger.csv contains an empty source_file.");
      continue;
    }
    if (ledgerBySource.has(source)) {
      addError(`Duplicate source-ledger entry: ${source}`);
    }
    ledgerBySource.set(source, row);
    const sourcePath = join(ROOT, source);
    let present = false;
    let bytes;
    try {
      const metadata = await stat(sourcePath);
      present = metadata.isFile();
      if (present) {
        bytes = await readFile(sourcePath);
      }
    } catch {
      present = false;
    }
    const expectedAvailability = present ? "present" : "missing";
    if (row.availability !== expectedAvailability) {
      addError(
        `${source}: ledger availability is ${row.availability || "missing"}, expected ${expectedAvailability}.`,
      );
    }
    if (present && row.source_sha256 !== sha256(bytes)) {
      addError(`${source}: ledger SHA-256 does not match the available source.`);
    }
    if (!present && row.source_sha256) {
      addError(`${source}: missing source must not have a SHA-256 value.`);
    }
  }

  for (const row of core) {
    for (const source of splitSources(row.source_files ?? "")) {
      if (!ledgerBySource.has(source)) {
        addError(`${row.query}: source is absent from the ledger: ${source}`);
      }
    }
  }

  let trendFiles = [];
  try {
    trendFiles = (await readdir(join(ROOT, "SEO", "trends"))).filter(
      (filename) => filename.endsWith(".csv"),
    );
  } catch {
    trendFiles = [];
  }
  for (const filename of trendFiles) {
    if (!ledgerBySource.has(`SEO/trends/${filename}`)) {
      addError(`Orphan Trends CSV is not present in the source ledger: ${filename}`);
    }
  }
};

const validateSource = async () => {
  await validateSemanticData();
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

  const extensionContractSource = [
    await readText("src/features/extension/extension-copy.ts"),
    await readText("src/content/extension-seo-landings.ts"),
  ].join("\n");
  for (const marker of [
    "active tab",
    "2,000",
    "selectable text",
    "safe links",
    "Regional OCR",
    "project archive",
    "ChatGPT",
    "Gemini",
    "Claude",
    "Grok",
    "Perplexity",
    "Microsoft Copilot",
    "Manus",
    "WhatsApp Web",
    "Telegram Web",
    "conditional compatibility, not universal support",
  ]) {
    if (!extensionContractSource.includes(marker)) {
      addError(`Product-copy contract is missing: ${marker}.`);
    }
  }
  if (
    /\b(?:supports?|compatible with)\s+(?:Slack|Instagram|Discord|Messenger|Teams)\b/i.test(
      extensionContractSource,
    ) ||
    /\b(?:any|all|every) AI (?:chat|conversation|website|site)\b/i.test(
      extensionContractSource,
    )
  ) {
    addError("Product copy makes an unsupported universal platform claim.");
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
    const primaryQueries = new Set();
    const semanticTargets = new Map(
      (await readCsv("SEO/semantic-core-en.csv"))
        .filter((row) => row.status === "target")
        .map((row) => [normalizeQuery(row.query ?? ""), row.target_url]),
    );
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
        !entry.primaryQuery ||
        !entry.purpose ||
        !Array.isArray(entry.internalLinks) ||
        !Array.isArray(entry.avoidCompetingWith)
      ) {
        addError(`Incomplete intent-map entry: ${key}`);
      }
      const primaryQuery = normalizeQuery(entry.primaryQuery ?? "");
      if (primaryQueries.has(primaryQuery)) {
        addError(`Duplicate primary query in intent map: ${primaryQuery}.`);
      }
      primaryQueries.add(primaryQuery);
      if (entry.primaryIntentSource === "localized-content-title") {
        const targetUrl = semanticTargets.get(primaryQuery);
        const expectedTargetUrl = `/en/${entry.route}`;
        if (targetUrl !== expectedTargetUrl) {
          addError(
            `${entry.route}: primary query ${primaryQuery} does not target ${expectedTargetUrl} in the semantic core.`,
          );
        }
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
  const pagePath = new URL(url).pathname.replace(/\/+$/, "") || "/";
  const expectedLanguages = EN_ONLY_ROUTE_PATHS.has(pagePath)
    ? new Set(["x-default", "en"])
    : new Set(["x-default", ...LOCALES]);
  if (
    alternates.length < expectedLanguages.size ||
    [...expectedLanguages].some(
      (language) => !alternateLanguages.has(language),
    )
  ) {
    addError(
      `${url}: expected ${expectedLanguages.size} hreflang links, found ${alternates.length}.`,
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
        /^\/samples\//.test(linkedPath) ||
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
