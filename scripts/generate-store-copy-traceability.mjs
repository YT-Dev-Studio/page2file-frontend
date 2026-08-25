import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const CORE_PATH = join(ROOT, "SEO", "semantic-core-en.csv");
const OUTPUT_PATH = join(
  ROOT,
  "SEO",
  "chrome-web-store-query-traceability-en-US.csv",
);
const TITLE = "Save webpage to PDF | Converter Page 2 File";

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

const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;
const serializeCsv = (rows) => {
  const columns = [
    "query",
    "cluster",
    "product_relevance",
    "store_location",
    "status",
    "coverage_or_reason",
    "us_validation_status",
    "us_validation_note",
    "review_status",
  ];
  return [
    columns.map(escapeCsv).join(","),
    ...rows.map((row) => columns.map((column) => escapeCsv(row[column])).join(",")),
  ].join("\n") + "\n";
};

const exclusions = [
  {
    matches: (query) => /\bfree\b/.test(query),
    reason:
      "Excluded from Store copy: pricing is not used as an acquisition claim until it is explicitly confirmed.",
  },
  {
    matches: (query) => /\bonline\b/.test(query),
    reason:
      "Excluded from Store copy: an online converter implies a hosted or pasted-input workflow; Page 2 PDF works on the active Chrome tab.",
  },
  {
    matches: (query) => ["url to pdf", "html link to pdf"].includes(query),
    reason:
      "Excluded from Store copy: Page 2 PDF does not accept a pasted URL or link.",
  },
  {
    matches: (query) =>
      /\bhtml (?:file|code|document)\b/.test(query) ||
      query === "open html file in chrome and save as pdf",
    reason:
      "Excluded from Store copy: the listing promises an HTML webpage already open in Chrome, not raw code or file upload.",
  },
  {
    matches: (query) => query === "how to export chats from whatsapp",
    reason:
      "Excluded from Store copy: the plural query can imply account-wide export; Page 2 PDF exports the current supported conversation only.",
  },
];

const coverageForCluster = (cluster) => {
  switch (cluster) {
    case "PDF-WEBPAGE":
      return ["long_description", "save a webpage to PDF"];
    case "PDF-HTML":
      return ["long_description", "convert an HTML webpage to PDF"];
    case "PDF-FULL-CAPTURE":
    case "PDF-LONG-PAGE":
      return ["long_description", "full-page PDF"];
    case "PDF-AUTHENTICATED":
      return [
        "long_description",
        "save a webpage behind a login when it is already open and loaded in the current tab",
      ];
    case "PDF-LINKS":
      return ["long_description", "selectable text and clickable links"];
    case "MODE-COMPARISON":
      return ["long_description", "Accurate copy — full-page PDF"];
    case "CHAT-AI-HUB":
    case "CHAT-MSG-BROWSER":
      return ["long_description", "AI and messenger chat to PDF"];
    case "CHAT-AI-CHATGPT":
      return ["long_description", "ChatGPT to PDF"];
    case "CHAT-AI-CLAUDE":
      return ["long_description", "Claude to PDF"];
    case "CHAT-AI-GEMINI":
    case "CHAT-GROK":
    case "CHAT-PERPLEXITY":
    case "CHAT-COPILOT":
      return [
        "long_description",
        "Gemini, Grok, Perplexity, Microsoft Copilot, and Manus conversations",
      ];
    case "CHAT-MSG-WHATSAPP":
      return ["long_description", "WhatsApp Web chat to PDF"];
    case "CHAT-MSG-TELEGRAM":
      return ["long_description", "Telegram Web chat or channel to PDF"];
    default:
      throw new Error(`No Store-copy coverage rule for cluster: ${cluster}`);
  }
};

const core = parseCsv(await readFile(CORE_PATH, "utf8"));
const targets = core
  .filter((row) => row.status === "target")
  .sort((left, right) => left.query.localeCompare(right.query));

const traceability = targets.map((row) => {
  const query = row.query.trim().toLowerCase();
  const exclusion = exclusions.find(({ matches }) => matches(query));
  const usValidationNote =
    row.us_validation_status === "pending"
      ? "US demand remains pending; Worldwide Trends is not treated as US search volume."
      : `US validation state is inherited from semantic-core-en.csv: ${row.us_validation_status}.`;
  if (exclusion) {
    return {
      query,
      cluster: row.cluster,
      product_relevance: row.product_relevance,
      store_location: "not_applicable",
      status: "excluded with reason",
      coverage_or_reason: exclusion.reason,
      us_validation_status: row.us_validation_status,
      us_validation_note: usValidationNote,
      review_status: "pass",
    };
  }

  const [defaultLocation, coverage] = coverageForCluster(row.cluster);
  const includedInTitle = TITLE.toLowerCase().includes(query);
  const includedExactly = coverage.toLowerCase() === query;
  return {
    query,
    cluster: row.cluster,
    product_relevance: row.product_relevance,
    store_location: includedInTitle ? "title" : defaultLocation,
    status: includedInTitle || includedExactly ? "included" : "covered semantically",
    coverage_or_reason: includedInTitle ? TITLE : coverage,
    us_validation_status: row.us_validation_status,
    us_validation_note: usValidationNote,
    review_status: "pass",
  };
});

await writeFile(OUTPUT_PATH, serializeCsv(traceability), "utf8");
console.log(`Store-copy traceability generated for ${traceability.length} target queries.`);
