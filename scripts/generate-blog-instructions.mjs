import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  expectedSceneCount,
  instructionArticles,
} from "./blog-instruction-scenes.mjs";

const ROOT = process.cwd();
const OUTPUT_DIRECTORY = join(ROOT, "public", "blog", "instructions");
const EXTENSION_DEMO_PATH = join(
  ROOT,
  "public",
  "demos",
  "extension-step-mode.svg",
);
const CONTACT_SHEET_DIRECTORY = join(ROOT, ".artifacts");
const EXTENSION_DEMO_ONLY = process.argv.includes(
  "--extension-demo-only",
);
const POPUP_X = 1118;
const POPUP_Y = 112;
const CORAL = "#f0523d";
const POPUP_MASTER_VERSION = "page2file-popup-v3";
const POPUP_GEOMETRY = {
  canvas: { width: 455, height: 751 },
  source: {
    card: { x: 21, y: 131, width: 410, height: 59 },
    favicon: { x: 31, y: 140, width: 42, height: 42 },
    title: {
      x: 91,
      y: 139,
      width: 214,
      height: 21,
      baseline: 155,
      maximumCharacters: 26,
    },
    domain: { x: 91, y: 164, width: 214, height: 17, baseline: 177 },
    ready: { x: 317, y: 149, width: 114, height: 22 },
    readyDot: { x: 322, y: 160, radius: 5 },
    readyText: { x: 334, y: 166 },
    url: { x: 68, y: 147, width: 342, height: 26, baseline: 166 },
  },
  format: {
    pdfIcon: { x: 94, y: 264, width: 49, height: 66 },
    powerpointIcon: { x: 306, y: 264, width: 49, height: 66 },
    pdfTitle: { x: 75, y: 337, width: 90, height: 29, baseline: 360 },
    powerpointTitle: {
      x: 265,
      y: 339,
      width: 134,
      height: 27,
      baseline: 360,
    },
    pdfDescription: {
      x: 30,
      y: 374,
      width: 180,
      height: 15,
      baseline: 385,
    },
    powerpointDescription: {
      x: 242,
      y: 374,
      width: 179,
      height: 15,
      baseline: 385,
    },
  },
  cta: {
    pdfIcon: { x: 153, y: 670, width: 21, height: 22 },
    pdfText: { x: 188, y: 670, width: 120, height: 24, baseline: 688 },
    powerpointIcon: { x: 122, y: 670, width: 21, height: 22 },
    powerpointText: {
      x: 157,
      y: 670,
      width: 186,
      height: 24,
      baseline: 688,
    },
  },
};

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const truncatePopupTitle = (value) => {
  const maximumCharacters =
    POPUP_GEOMETRY.source.title.maximumCharacters;
  const characters = [...value];
  if (characters.length <= maximumCharacters) {
    return value;
  }
  return `${characters.slice(0, maximumCharacters - 1).join("")}…`;
};

const boxesOverlap = (first, second) =>
  first.x < second.x + second.width &&
  first.x + first.width > second.x &&
  first.y < second.y + second.height &&
  first.y + first.height > second.y;

const assertPopupGeometry = () => {
  const { canvas, source, format, cta } = POPUP_GEOMETRY;
  const collisionPairs = [
    ["PDF icon and title", format.pdfIcon, format.pdfTitle],
    [
      "PowerPoint icon and title",
      format.powerpointIcon,
      format.powerpointTitle,
    ],
    ["PDF title and description", format.pdfTitle, format.pdfDescription],
    [
      "PowerPoint title and description",
      format.powerpointTitle,
      format.powerpointDescription,
    ],
    ["source title and capture status", source.title, source.ready],
    ["PDF preview icon and text", cta.pdfIcon, cta.pdfText],
    [
      "PowerPoint preview icon and text",
      cta.powerpointIcon,
      cta.powerpointText,
    ],
  ];
  collisionPairs.forEach(([label, first, second]) => {
    if (boxesOverlap(first, second)) {
      throw new Error(`Popup geometry collision: ${label}.`);
    }
  });
  const sourceChildren = [
    ["source title", source.title],
    ["source domain", source.domain],
    ["source URL", source.url],
  ];
  sourceChildren.forEach(([label, box]) => {
    const insideCard =
      box.x >= source.card.x &&
      box.y >= source.card.y &&
      box.x + box.width <= source.card.x + source.card.width &&
      box.y + box.height <= source.card.y + source.card.height;
    if (!insideCard) {
      throw new Error(`Popup geometry overflow: ${label}.`);
    }
  });
  if (canvas.width !== 455 || canvas.height !== 751) {
    throw new Error("Popup master must remain exactly 455×751.");
  }
};

const textLines = (text, maximumLength = 42) => {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const candidate = current.length === 0 ? word : `${current} ${word}`;
    if (candidate.length > maximumLength && current.length > 0) {
      lines.push(current);
      current = word;
      return;
    }
    current = candidate;
  });
  if (current.length > 0) {
    lines.push(current);
  }
  return lines;
};

const multiline = ({
  text,
  x,
  y,
  size = 24,
  weight = 500,
  fill = "#122247",
  maximumLength = 42,
  lineHeight = 1.25,
}) =>
  textLines(text, maximumLength)
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * size * lineHeight}" font-size="${size}" font-weight="${weight}" fill="${fill}">${escapeXml(line)}</text>`,
    )
    .join("");

const browserChrome = ({ title, domain, accent }) => `
  <rect width="1600" height="900" rx="30" fill="#eaf0fb"/>
  <rect x="20" y="18" width="1560" height="864" rx="24" fill="#ffffff" stroke="#cbd4e2" stroke-width="2"/>
  <path d="M44 18h1512a24 24 0 0 1 24 24v65H20V42a24 24 0 0 1 24-24Z" fill="#eef2f7"/>
  <circle cx="54" cy="53" r="8" fill="#ff6b63"/>
  <circle cx="79" cy="53" r="8" fill="#ffbd45"/>
  <circle cx="104" cy="53" r="8" fill="#31c552"/>
  <rect x="132" y="32" width="420" height="48" rx="14" fill="#ffffff" stroke="#d6dde8"/>
  <circle cx="158" cy="56" r="12" fill="${accent}"/>
  <text x="180" y="63" font-size="20" font-weight="650" fill="#152348">${escapeXml(title)}</text>
  <rect x="585" y="32" width="790" height="48" rx="24" fill="#ffffff" stroke="#d6dde8"/>
  <path d="M616 56h14m-7-7v14" stroke="#758299" stroke-width="2" stroke-linecap="round"/>
  <text x="648" y="63" font-size="19" fill="#68758a">https://${escapeXml(domain)}</text>
  <circle cx="1413" cy="56" r="17" fill="#dce6f7"/>
  <circle cx="1464" cy="56" r="17" fill="#dce6f7"/>
  <circle cx="1515" cy="56" r="17" fill="#dce6f7"/>
`;

const pageHeader = ({ title, accent, step }) => `
  <rect x="42" y="126" width="1038" height="716" rx="22" fill="#f8fafc" stroke="#dce3ed"/>
  <rect x="42" y="126" width="1038" height="78" rx="22" fill="#ffffff"/>
  <rect x="42" y="182" width="1038" height="22" fill="#ffffff"/>
  <circle cx="80" cy="165" r="18" fill="${accent}"/>
  <text x="112" y="172" font-size="25" font-weight="700" fill="#142347">${escapeXml(title)}</text>
  <rect x="844" y="148" width="78" height="14" rx="7" fill="#d9e1ed"/>
  <rect x="940" y="148" width="104" height="14" rx="7" fill="#d9e1ed"/>
  <rect x="68" y="226" width="116" height="34" rx="17" fill="${accent}" opacity=".13"/>
  <text x="88" y="249" font-size="16" font-weight="700" fill="${accent}">STEP ${step.number}</text>
  ${multiline({
    text: step.en,
    x: 68,
    y: 303,
    size: 30,
    weight: 750,
    maximumLength: 56,
  })}
`;

const articlePage = (accent) => `
  <rect x="68" y="390" width="650" height="22" rx="11" fill="#182a50"/>
  <rect x="68" y="432" width="780" height="13" rx="7" fill="#9aa8ba"/>
  <rect x="68" y="458" width="730" height="13" rx="7" fill="#b4bfcd"/>
  <rect x="68" y="484" width="765" height="13" rx="7" fill="#b4bfcd"/>
  <rect x="68" y="528" width="330" height="190" rx="16" fill="${accent}" opacity=".14"/>
  <circle cx="233" cy="609" r="52" fill="${accent}" opacity=".34"/>
  <rect x="428" y="532" width="420" height="16" rx="8" fill="#56657a"/>
  <rect x="428" y="568" width="390" height="12" rx="6" fill="#b4bfcd"/>
  <rect x="428" y="594" width="410" height="12" rx="6" fill="#b4bfcd"/>
  <rect x="428" y="620" width="330" height="12" rx="6" fill="#b4bfcd"/>
  <rect x="428" y="663" width="164" height="34" rx="17" fill="${accent}"/>
`;

const dashboardPage = (accent) => `
  <rect x="68" y="382" width="230" height="322" rx="16" fill="#17264a"/>
  <rect x="92" y="414" width="152" height="13" rx="7" fill="#6e7d98"/>
  <rect x="92" y="452" width="126" height="13" rx="7" fill="#a8b4c5"/>
  <rect x="92" y="490" width="144" height="13" rx="7" fill="#a8b4c5"/>
  <rect x="322" y="382" width="250" height="128" rx="16" fill="#ffffff" stroke="#dbe2ec"/>
  <rect x="596" y="382" width="250" height="128" rx="16" fill="#ffffff" stroke="#dbe2ec"/>
  <rect x="346" y="410" width="104" height="13" rx="7" fill="#9ca9ba"/>
  <rect x="346" y="446" width="130" height="30" rx="8" fill="${accent}" opacity=".82"/>
  <rect x="620" y="410" width="104" height="13" rx="7" fill="#9ca9ba"/>
  <rect x="620" y="446" width="92" height="30" rx="8" fill="${accent}" opacity=".6"/>
  <rect x="322" y="534" width="524" height="214" rx="16" fill="#ffffff" stroke="#dbe2ec"/>
  <path d="M350 690l88-64 78 28 96-88 84 42 112-84" fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M350 710h458M350 570h458" stroke="#e4e9f0" stroke-width="2"/>
`;

const docsPage = (accent) => `
  <rect x="68" y="380" width="202" height="370" rx="16" fill="#eef3f8"/>
  <rect x="92" y="410" width="132" height="14" rx="7" fill="${accent}"/>
  <rect x="92" y="448" width="116" height="12" rx="6" fill="#8d9aae"/>
  <rect x="92" y="480" width="142" height="12" rx="6" fill="#8d9aae"/>
  <rect x="92" y="512" width="126" height="12" rx="6" fill="#8d9aae"/>
  <rect x="304" y="386" width="440" height="22" rx="11" fill="#1b2a4d"/>
  <rect x="304" y="432" width="526" height="13" rx="7" fill="#a9b4c3"/>
  <rect x="304" y="460" width="486" height="13" rx="7" fill="#a9b4c3"/>
  <rect x="304" y="500" width="348" height="15" rx="8" fill="${accent}"/>
  <path d="M652 500h22v22" fill="none" stroke="${accent}" stroke-width="4"/>
  <rect x="304" y="542" width="526" height="108" rx="12" fill="#17264a"/>
  <rect x="330" y="570" width="356" height="11" rx="6" fill="#66d3b5"/>
  <rect x="330" y="596" width="420" height="11" rx="6" fill="#e8ab73"/>
  <rect x="304" y="684" width="276" height="15" rx="8" fill="${accent}"/>
`;

const chatPage = (accent, variant = "ai") => {
  const sidePanel =
    variant === "claude"
      ? `<rect x="720" y="380" width="130" height="340" rx="16" fill="#fff8f1" stroke="#ead7c7"/>
         <rect x="740" y="410" width="86" height="15" rx="8" fill="#9b654b"/>
         <rect x="740" y="448" width="88" height="98" rx="10" fill="#e8c7ae"/>
         <rect x="740" y="570" width="88" height="12" rx="6" fill="#bea08d"/>
         <rect x="740" y="598" width="72" height="12" rx="6" fill="#bea08d"/>`
      : variant === "gemini"
        ? `<rect x="690" y="620" width="160" height="96" rx="14" fill="#ffffff" stroke="#cbd8f7"/>
           <circle cx="720" cy="650" r="14" fill="#4c6fe8"/>
           <rect x="746" y="640" width="78" height="10" rx="5" fill="#60708b"/>
           <rect x="716" y="680" width="108" height="10" rx="5" fill="#9aa8ba"/>`
        : "";
  return `
    <rect x="68" y="380" width="170" height="370" rx="16" fill="#f0f3f7"/>
    <rect x="90" y="410" width="112" height="13" rx="7" fill="${accent}"/>
    <rect x="90" y="452" width="94" height="11" rx="6" fill="#a5b0bf"/>
    <rect x="90" y="482" width="118" height="11" rx="6" fill="#a5b0bf"/>
    <rect x="274" y="390" width="392" height="74" rx="20" fill="#ffffff" stroke="#d9e0ea"/>
    <circle cx="304" cy="418" r="15" fill="#d7deea"/>
    <rect x="332" y="408" width="198" height="12" rx="6" fill="#748298"/>
    <rect x="332" y="434" width="276" height="10" rx="5" fill="#b1bcc9"/>
    <rect x="306" y="490" width="468" height="152" rx="20" fill="${accent}" opacity=".1"/>
    <circle cx="336" cy="521" r="15" fill="${accent}"/>
    <rect x="364" y="510" width="274" height="12" rx="6" fill="#43526b"/>
    <rect x="336" y="548" width="396" height="10" rx="5" fill="#8996a9"/>
    <rect x="336" y="574" width="360" height="10" rx="5" fill="#8996a9"/>
    <rect x="336" y="602" width="238" height="18" rx="6" fill="#17264a"/>
    <rect x="274" y="672" width="380" height="64" rx="20" fill="#ffffff" stroke="#d9e0ea"/>
    <rect x="304" y="696" width="298" height="11" rx="6" fill="#9ba7b8"/>
    ${sidePanel}
  `;
};

const siteMapPage = (accent) => `
  <rect x="68" y="382" width="190" height="82" rx="16" fill="#ffffff" stroke="#d8e0eb"/>
  <text x="96" y="431" font-size="20" font-weight="700" fill="#1b2a4d">Home</text>
  <path d="M258 423h72M330 423v164" stroke="#9eabbc" stroke-width="4"/>
  <rect x="352" y="382" width="210" height="82" rx="16" fill="${accent}" opacity=".13" stroke="${accent}"/>
  <text x="380" y="431" font-size="20" font-weight="700" fill="#1b2a4d">Documentation</text>
  <rect x="352" y="498" width="210" height="82" rx="16" fill="#ffffff" stroke="#d8e0eb"/>
  <text x="380" y="547" font-size="20" font-weight="700" fill="#1b2a4d">Tutorials</text>
  <rect x="352" y="614" width="210" height="82" rx="16" fill="#ffffff" stroke="#d8e0eb"/>
  <text x="380" y="663" font-size="20" font-weight="700" fill="#1b2a4d">Reference</text>
  <path d="M562 423h104" stroke="#9eabbc" stroke-width="4"/>
  <rect x="688" y="382" width="166" height="82" rx="16" fill="#ffffff" stroke="#d8e0eb"/>
  <text x="716" y="431" font-size="18" font-weight="700" fill="#1b2a4d">Selected page</text>
`;

const resultOverlay = (outcome, accent) => {
  const labels = {
    "pdf-pages": ["PDF PREVIEW", "01", "02", "03"],
    "full-preview": ["FULL RANGE", "START", "MIDDLE", "END"],
    "broken-breaks": ["PAGE BREAK REVIEW", "GOOD", "CHECK", "GOOD"],
    "fixed-breaks": ["CORRECTED BREAKS", "01", "02", "03"],
    comparison: ["RESULT COMPARISON", "ACCURATE", "EDITABLE", "PRINT"],
    "link-audit": ["LINK REVIEW", "SAVED", "REMOVED", "TESTED"],
    decision: ["OUTPUT DECISION", "FIDELITY", "SEARCH", "LINKS"],
    sandbox: ["CONCEPTUAL SECURITY BOUNDARY", "HTML", "ISOLATED RENDER", "PDF"],
    sequence: ["ONE PAGE AT A TIME", "URL 01", "URL 02", "URL 03"],
    "separate-files": ["SEPARATE OUTPUTS", "PAGE-01.PDF", "PAGE-02.PDF", "PAGE-03.PDF"],
    manifest: ["CONCEPTUAL REVIEW RECORD", "ACCEPTED", "EXCLUDED", "FAILED"],
    slides: ["POWERPOINT PREVIEW", "SLIDE 01", "SLIDE 02", "SLIDE 03"],
    "ppt-result": ["16:9 DECK", "TYPE", "LINKS", "OBJECTS"],
    "separate-decks": ["SEPARATE DECKS", "PAGE-01.PPTX", "PAGE-02.PPTX", "PAGE-03.PPTX"],
    "combined-deck": ["SEPARATE EDITORIAL TASK", "SELECT", "REORDER", "COMBINE"],
    "continued-slides": ["LONG SECTION", "PART 1", "PART 2", "CONTEXT"],
    "edit-test": ["EDITABILITY TEST", "HEADING", "IMAGE", "LINK"],
    "format-matrix": ["CHOOSE BY TASK", "PDF", "POWERPOINT", "OUTPUT STYLE"],
    limits: ["NOT AN EXTENSION CONTROL", "NO CRAWLER", "NO MONITORING", "NO HIDDEN DATA"],
    "document-output": ["HUMAN-READABLE OUTPUT", "PDF", "PPTX", "REVIEW"],
    "structured-data": ["SEPARATE DATA SYSTEM", "ROWS", "FIELDS", "API"],
    "chat-preview": ["CONVERSATION REVIEW", "ORDER", "CODE + TABLES", "PRIVATE LINKS"],
    "artifact-preview": ["CLAUDE REVIEW", "MESSAGES", "ARTIFACT", "CITATIONS"],
    "sources-preview": ["SOURCE REVIEW", "MESSAGES", "CARDS", "IMAGES"],
    "message-preview": ["MESSAGE REVIEW", "SENDERS", "REPLIES + MEDIA", "BOUNDARY"],
  };
  const selected = labels[outcome];
  if (!selected) {
    return "";
  }
  return `
    <rect x="620" y="365" width="254" height="376" rx="20" fill="#ffffff" stroke="${accent}" stroke-width="3"/>
    <text x="646" y="401" font-size="15" font-weight="800" fill="${accent}">${selected[0]}</text>
    ${selected
      .slice(1)
      .map(
        (label, index) => `
          <rect x="646" y="${430 + index * 92}" width="202" height="68" rx="10" fill="#f2f5fa" stroke="#d8e0eb"/>
          <text x="666" y="${470 + index * 92}" font-size="15" font-weight="700" fill="#263756">${label}</text>
        `,
      )
      .join("")}
  `;
};

const pageContent = ({ article: entry, step }) => {
  const kind = step.kind ?? entry.kind;
  const base =
    kind === "dashboard"
      ? dashboardPage(entry.accent)
      : kind === "docs" || kind === "html"
        ? docsPage(entry.accent)
        : kind === "site-map"
          ? siteMapPage(entry.accent)
          : [
                "ai-chat",
                "chatgpt",
                "claude",
                "gemini",
                "ai-multi",
                "whatsapp",
                "telegram",
                "messenger",
                "discord",
                "workspace",
              ].includes(kind)
            ? chatPage(entry.accent, kind)
            : articlePage(entry.accent);
  return `${base}${resultOverlay(step.outcome, entry.accent)}`;
};

const selectedDot = (x, y, selected, color) =>
  selected
    ? `<circle cx="${x}" cy="${y}" r="9" fill="${color}"/><path d="m${x - 4} ${y} 3 3 6-7" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<circle cx="${x}" cy="${y}" r="9" fill="#fff" stroke="#9aa5b5" stroke-width="1.6"/>`;

const formatIcon = (type) => {
  const isPdf = type === "pdf";
  const geometry = isPdf
    ? POPUP_GEOMETRY.format.pdfIcon
    : POPUP_GEOMETRY.format.powerpointIcon;
  const left = geometry.x;
  const top = geometry.y;
  const topEdgeStart = left + 7;
  const foldStart = left + 36;
  const right = left + geometry.width;
  const bottom = top + geometry.height;
  const lowerRight = right - 7;
  const color = isPdf ? "#f0443e" : "#ff7a19";
  return `
    <g data-popup-role="${isPdf ? "pdf-icon" : "powerpoint-icon"}" data-bounds="${left},${top},${geometry.width},${geometry.height}">
      <path d="M${topEdgeStart} ${top}H${foldStart}L${right} ${top + 13}V${bottom - 7}A7 7 0 0 1 ${lowerRight} ${bottom}H${topEdgeStart}A7 7 0 0 1 ${left} ${bottom - 7}V${top + 7}A7 7 0 0 1 ${topEdgeStart} ${top}Z" fill="${color}"/>
      <path d="M${foldStart} ${top}V${top + 13}H${right}" fill="${isPdf ? "#ffaca0" : "#ffb58a"}"/>
      ${
        isPdf
          ? `<path d="M${left + 11} ${top + 55}c8-12 14-26 17-40 1-6 0-9-2-9-3 0-3 7-2 16 2 11 7 23 15 32 5 6 8 6 10 4 1-2-3-5-9-6-11-3-23-1-33 2-7 3-11 6-10 9 2 2 8 0 15-5" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`
          : `<text x="${left + geometry.width / 2}" y="${top + 49}" text-anchor="middle" font-size="31" font-weight="800" fill="#fff">P</text>`
      }
    </g>
  `;
};

const notionSourceFavicon = (source) =>
  `<g data-popup-role="source-favicon" data-bounds="${source.favicon.x},${source.favicon.y},${source.favicon.width},${source.favicon.height}">
     <rect x="${source.favicon.x}" y="${source.favicon.y}" width="${source.favicon.width}" height="${source.favicon.height}" rx="8" fill="#fff" stroke="#c9ced8"/>
     <path d="M${source.favicon.x + 9} ${source.favicon.y + 8}h22l4 4v22H${source.favicon.x + 9}z" fill="#fff" stroke="#111" stroke-width="2.4"/>
     <text x="${source.favicon.x + 21}" y="${source.favicon.y + 31}" text-anchor="middle" font-family="Georgia, serif" font-size="23" font-weight="800" fill="#111">N</text>
   </g>`;

const popup = ({
  entry,
  step,
  x = POPUP_X,
  y = POPUP_Y,
}) => {
  const isUrl = step.sourceMode === "url";
  const isPdf = step.format === "pdf";
  const isAccurate = step.style === "accurate";
  const popupTitle = truncatePopupTitle(entry.title);
  const { canvas, source, format, cta } = POPUP_GEOMETRY;
  const previewIcon = isPdf ? cta.pdfIcon : cta.powerpointIcon;
  const previewText = isPdf ? cta.pdfText : cta.powerpointText;
  return `
    <g data-popup-master="${POPUP_MASTER_VERSION}" data-popup-geometry="${canvas.width}x${canvas.height}" transform="translate(${x} ${y})">
      <defs>
        <clipPath id="sourceTitleClip">
          <rect x="${source.title.x}" y="${source.title.y}" width="${source.title.width}" height="${source.title.height}"/>
        </clipPath>
        <clipPath id="sourceUrlClip">
          <rect x="${source.url.x}" y="${source.url.y}" width="${source.url.width}" height="${source.url.height}"/>
        </clipPath>
      </defs>
      <rect x="0" y="0" width="${canvas.width}" height="${canvas.height}" rx="16" fill="#ffffff" stroke="#d3d9e3" stroke-width="2" filter="url(#popupShadow)"/>
      <g data-popup-role="brand-logo" data-bounds="21,31,38,38">
        <rect x="21" y="31" width="38" height="38" rx="8" fill="#102e6f"/>
        <path d="M28 37h17l6 6v18H28z" fill="#f5f8ff"/>
        <path d="M45 37v7h6" fill="#b9d7ff"/>
        <path d="M32 45h10M32 50h8M32 55h6" stroke="#257fe5" stroke-width="1.5"/>
        <circle cx="47" cy="52" r="6.5" fill="none" stroke="#71b7ff" stroke-width="2.2"/>
        <path d="m51.5 56.5 4 4" stroke="#71b7ff" stroke-width="2.2" stroke-linecap="round"/>
        <text x="25" y="66" font-size="5.1" font-weight="700" fill="#fff">page2file</text>
      </g>
      <text x="69" y="58" font-size="25" font-weight="760" fill="#102652">Page 2 File</text>
      <circle cx="380" cy="49" r="5" fill="#168cf2"/>
      <text x="393" y="56" font-size="15" fill="#7b8493">Ready</text>

      <rect x="21" y="85" width="410" height="34" rx="8" fill="#f5f6f8" stroke="#c9ced8"/>
      <rect x="${isUrl ? 226 : 21}" y="85" width="205" height="34" rx="8" fill="#2188ef"/>
      <text x="123" y="107" text-anchor="middle" font-size="15" font-weight="${isUrl ? 500 : 700}" fill="${isUrl ? "#263247" : "#fff"}">Current tab</text>
      <text x="329" y="107" text-anchor="middle" font-size="15" font-weight="${isUrl ? 700 : 500}" fill="${isUrl ? "#fff" : "#263247"}">By URL</text>

      ${
        isUrl
          ? `<rect x="${source.card.x}" y="${source.card.y}" width="${source.card.width}" height="${source.card.height}" rx="10" fill="#fff" stroke="#c9ced8"/>
             <circle cx="48" cy="160" r="10" fill="${entry.accent}"/>
             <text data-source-url="true" clip-path="url(#sourceUrlClip)" x="${source.url.x}" y="${source.url.baseline}" font-size="14" fill="#727d8e">https://${escapeXml(entry.domain)}</text>`
          : `<rect x="${source.card.x}" y="${source.card.y}" width="${source.card.width}" height="${source.card.height}" rx="10" fill="#fff" stroke="#c9ced8"/>
             ${
               entry.favicon === "notion"
                 ? notionSourceFavicon(source)
                 : `<rect x="${source.favicon.x}" y="${source.favicon.y}" width="${source.favicon.width}" height="${source.favicon.height}" rx="8" fill="${entry.accent}" opacity=".14" stroke="${entry.accent}"/>
                    <circle cx="52" cy="161" r="12" fill="${entry.accent}"/>`
             }
             <text data-source-title="true" data-source-title-truncated="${popupTitle !== entry.title}" data-safe-zone="${source.title.x},${source.title.y},${source.title.width},${source.title.height}" clip-path="url(#sourceTitleClip)" x="${source.title.x}" y="${source.title.baseline}" font-size="15" font-weight="700" fill="#17284d">${escapeXml(popupTitle)}</text>
             <text x="${source.domain.x}" y="${source.domain.baseline}" font-size="12" fill="#8a93a2">${escapeXml(entry.domain)}</text>
             <g data-popup-role="capture-status" data-bounds="${source.ready.x},${source.ready.y},${source.ready.width},${source.ready.height}">
               <circle cx="${source.readyDot.x}" cy="${source.readyDot.y}" r="${source.readyDot.radius}" fill="#28ad64"/>
               <text x="${source.readyText.x}" y="${source.readyText.y}" font-size="12" font-weight="650" fill="#29955c">Ready to capture</text>
             </g>`
      }

      <text x="21" y="222" font-size="17" font-weight="750" fill="#13264d">Choose format</text>
      <rect x="21" y="235" width="198" height="171" rx="12" fill="${isPdf ? "#fff9f7" : "#fff"}" stroke="${isPdf ? CORAL : "#cbd1da"}" stroke-width="${isPdf ? 1.8 : 1}"/>
      <rect x="232" y="235" width="199" height="171" rx="12" fill="${isPdf ? "#fff" : "#fff9f4"}" stroke="${isPdf ? "#cbd1da" : "#ff7a19"}" stroke-width="${isPdf ? 1 : 1.8}"/>
      ${selectedDot(41, 255, isPdf, CORAL)}
      ${selectedDot(252, 255, !isPdf, "#ff7a19")}
      ${formatIcon("pdf")}
      ${formatIcon("pptx")}
      <text data-popup-role="pdf-title" data-bounds="${format.pdfTitle.x},${format.pdfTitle.y},${format.pdfTitle.width},${format.pdfTitle.height}" x="120" y="${format.pdfTitle.baseline}" text-anchor="middle" font-size="24" font-weight="760" fill="#102652">PDF</text>
      <text data-popup-role="powerpoint-title" data-bounds="${format.powerpointTitle.x},${format.powerpointTitle.y},${format.powerpointTitle.width},${format.powerpointTitle.height}" x="332" y="${format.powerpointTitle.baseline}" text-anchor="middle" font-size="22" font-weight="760" fill="#102652">PowerPoint</text>
      <text data-popup-role="pdf-description" data-bounds="${format.pdfDescription.x},${format.pdfDescription.y},${format.pdfDescription.width},${format.pdfDescription.height}" x="120" y="${format.pdfDescription.baseline}" text-anchor="middle" font-size="12" fill="#7e8796">For sharing and archiving</text>
      <text data-popup-role="powerpoint-description" data-bounds="${format.powerpointDescription.x},${format.powerpointDescription.y},${format.powerpointDescription.width},${format.powerpointDescription.height}" x="332" y="${format.powerpointDescription.baseline}" text-anchor="middle" font-size="12" fill="#7e8796">For presenting and editing</text>

      <text x="21" y="442" font-size="17" font-weight="750" fill="#13264d">Output style</text>
      <rect x="21" y="452" width="410" height="52" rx="9" fill="${isAccurate ? "#fff9f7" : "#fff"}" stroke="${isAccurate ? CORAL : "#d0d5dd"}" stroke-width="${isAccurate ? 1.8 : 1}"/>
      ${selectedDot(41, 478, isAccurate, CORAL)}
      <text x="71" y="474" font-size="14" font-weight="720" fill="#1c2d50">Accurate copy</text>
      <text x="71" y="491" font-size="11.5" fill="#7d8796">Preserves the page appearance</text>
      <path d="m407 470 7 8-7 8" fill="none" stroke="#626e7e" stroke-width="1.8"/>

      <rect x="21" y="511" width="410" height="52" rx="9" fill="${isAccurate ? "#fff" : "#fff9f7"}" stroke="${isAccurate ? "#d0d5dd" : CORAL}" stroke-width="${isAccurate ? 1 : 1.8}"/>
      ${selectedDot(41, 537, !isAccurate, CORAL)}
      <text x="71" y="533" font-size="14" font-weight="720" fill="#1c2d50">Editable document</text>
      <text x="71" y="550" font-size="11.5" fill="#7d8796">Rebuilds supported text and links</text>
      <path d="m407 529 7 8-7 8" fill="none" stroke="#626e7e" stroke-width="1.8"/>

      <text x="21" y="594" font-size="17" font-weight="750" fill="#13264d">Customize</text>
      <path d="m411 586 7 7 7-7" fill="none" stroke="#465469" stroke-width="1.8"/>
      <rect x="21" y="608" width="410" height="40" rx="9" fill="#fff" stroke="#d0d5dd"/>
      <rect x="32" y="620" width="15" height="15" rx="3" fill="#fff" stroke="#9da7b5" stroke-width="1.8"/>
      <text x="55" y="632" font-size="11.5" fill="#667184">Remove images</text>
      <path d="M150 614v28M289 614v28" stroke="#d5d9e0"/>
      <rect x="163" y="620" width="15" height="15" rx="3" fill="#fff" stroke="#9da7b5" stroke-width="1.8"/>
      <text x="186" y="632" font-size="11.5" fill="#667184">Remove links</text>
      <rect x="302" y="620" width="15" height="15" rx="3" fill="#fff" stroke="#9da7b5" stroke-width="1.8"/>
      <text x="325" y="632" font-size="11.5" fill="#667184">Remove styling</text>

      <rect x="21" y="658" width="410" height="45" rx="8" fill="#2188ef"/>
      <path data-popup-role="preview-icon" data-bounds="${previewIcon.x},${previewIcon.y},${previewIcon.width},${previewIcon.height}" d="M${previewIcon.x} ${previewIcon.y + 1}h13l7 7v13h-20zM${previewIcon.x + 13} ${previewIcon.y + 1}v7h7" fill="none" stroke="#fff" stroke-width="2"/>
      <text data-popup-role="preview-text" data-bounds="${previewText.x},${previewText.y},${previewText.width},${previewText.height}" x="${previewText.x}" y="${previewText.baseline}" font-size="18" font-weight="700" fill="#fff">Preview ${isPdf ? "PDF" : "PowerPoint"}</text>
      <text x="226" y="729" text-anchor="middle" font-size="11.5" fill="#7c8696">Uses this tab only · Temporary processing</text>
    </g>
  `;
};

const POPUP_TARGETS = {
  "current-tab": { x: POPUP_X + 24, y: POPUP_Y + 102, side: "left" },
  "by-url": { x: POPUP_X + 428, y: POPUP_Y + 102, side: "right" },
  "url-field": { x: POPUP_X + 24, y: POPUP_Y + 160, side: "left" },
  pdf: { x: POPUP_X + 41, y: POPUP_Y + 255, side: "left" },
  powerpoint: { x: POPUP_X + 428, y: POPUP_Y + 320, side: "right" },
  accurate: { x: POPUP_X + 41, y: POPUP_Y + 478, side: "left" },
  editable: { x: POPUP_X + 41, y: POPUP_Y + 537, side: "left" },
  "remove-links": { x: POPUP_X + 170, y: POPUP_Y + 628, side: "left" },
  preview: { x: POPUP_X + 48, y: POPUP_Y + 680, side: "left" },
};

const RESULT_OUTCOMES = new Set([
  "pdf-pages",
  "full-preview",
  "broken-breaks",
  "fixed-breaks",
  "comparison",
  "link-audit",
  "decision",
  "sandbox",
  "sequence",
  "separate-files",
  "manifest",
  "slides",
  "ppt-result",
  "separate-decks",
  "combined-deck",
  "continued-slides",
  "edit-test",
  "format-matrix",
  "limits",
  "document-output",
  "structured-data",
  "chat-preview",
  "artifact-preview",
  "sources-preview",
  "message-preview",
]);

const resolvePageCallout = (step) => {
  if (step.conceptual) {
    return {
      startX: 970,
      startY: 758,
      targetX: 676,
      targetY: 811,
    };
  }
  if (RESULT_OUTCOMES.has(step.outcome)) {
    return {
      startX: 962,
      startY: 354,
      targetX: 866,
      targetY: 548,
    };
  }
  if (
    [
      "long-range",
      "lazy-loaded",
      "chat-loaded",
      "chat-range",
      "sources-open",
      "artifact-open",
    ].includes(step.outcome)
  ) {
    return {
      startX: 958,
      startY: 390,
      targetX: 810,
      targetY: 672,
    };
  }
  return {
    startX: 958,
    startY: 350,
    targetX: 812,
    targetY: 558,
  };
};

const resolvePopupCallout = (targetName) => {
  const target = POPUP_TARGETS[targetName];
  if (!target) {
    throw new Error(`Unknown popup callout target: ${targetName}`);
  }
  const fromRight = target.side === "right";
  return {
    startX: fromRight ? 1558 : 1060,
    startY: fromRight
      ? target.y + (target.y > POPUP_Y + 620 ? -82 : 82)
      : target.y,
    targetX: target.x,
    targetY: target.y,
  };
};

const renderCallout = (step) => {
  const callout = step.callout;
  if (!callout) {
    throw new Error(`Scene ${step.number} is missing a callout.`);
  }
  const coordinates =
    callout.surface === "popup"
      ? resolvePopupCallout(callout.target)
      : resolvePageCallout(step);
  const { startX, startY, targetX, targetY } = coordinates;
  const direction = targetX >= startX ? 1 : -1;
  const lineStartX = startX + direction * 30;
  const firstControlX = lineStartX + direction * 72;
  const secondControlX = targetX - direction * 82;
  return `
    <g data-callout="step-${step.number}" data-callout-surface="${callout.surface}" data-callout-target="${callout.target}">
      <path d="M${lineStartX} ${startY} C${firstControlX} ${startY}, ${secondControlX} ${targetY}, ${targetX} ${targetY}" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round"/>
      <path d="M${lineStartX} ${startY} C${firstControlX} ${startY}, ${secondControlX} ${targetY}, ${targetX} ${targetY}" fill="none" stroke="${CORAL}" stroke-width="8" stroke-linecap="round" marker-end="url(#arrowHead)"/>
      <circle cx="${startX}" cy="${startY}" r="29" fill="${CORAL}" stroke="#fff" stroke-width="5"/>
      <text x="${startX}" y="${startY + 9}" text-anchor="middle" font-size="26" font-weight="800" fill="#fff">${step.number}</text>
    </g>
  `;
};

const conceptualBadge = (step) =>
  step.conceptual
    ? `<rect x="68" y="796" width="610" height="30" rx="15" fill="#fff0ed" stroke="${CORAL}"/>
       <text x="86" y="817" font-size="14" font-weight="800" fill="#a62d22">CONCEPTUAL WORKFLOW · NOT AN EXTENSION CONTROL</text>`
    : "";

const renderScene = (entry, step) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(step.en)}</title>
  <desc id="description">A browser page beside the consistent Page 2 File extension popup.</desc>
  <defs>
    <filter id="popupShadow" x="-30%" y="-20%" width="160%" height="160%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#1d2f50" flood-opacity=".18"/>
    </filter>
    <marker id="arrowHead" markerWidth="18" markerHeight="18" refX="15" refY="9" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 18 9 0 18Z" fill="${CORAL}"/>
    </marker>
  </defs>
  <g font-family="Inter, Arial, sans-serif">
    ${browserChrome(entry)}
    ${pageHeader({ title: entry.title, accent: entry.accent, step })}
    ${pageContent({ article: entry, step })}
    ${conceptualBadge(step)}
    ${popup({ entry, step })}
    ${renderCallout(step)}
  </g>
</svg>
`;

const EXTENSION_DEMO_POPUP_X = 365;
const EXTENSION_DEMO_POPUP_Y = 74;
const EXTENSION_DEMO_CALLOUTS = [
  { number: 1, targetX: 390, targetY: 329 },
  { number: 2, targetX: 390, targetY: 552 },
  { number: 3, targetX: 400, targetY: 702 },
  { number: 4, targetX: 390, targetY: 754 },
];

const renderExtensionDemoCallout = ({
  number,
  targetX,
  targetY,
}) => `
  <g data-callout="step-${number}" data-callout-surface="popup">
    <path d="M103 ${targetY} C190 ${targetY}, 280 ${targetY}, ${targetX} ${targetY}" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round"/>
    <path d="M103 ${targetY} C190 ${targetY}, 280 ${targetY}, ${targetX} ${targetY}" fill="none" stroke="${CORAL}" stroke-width="7" stroke-linecap="round" marker-end="url(#arrowHead)"/>
    <circle cx="72" cy="${targetY}" r="25" fill="${CORAL}" stroke="#fff" stroke-width="4"/>
    <text x="72" y="${targetY + 8}" text-anchor="middle" font-size="23" font-weight="800" fill="#fff">${number}</text>
  </g>
`;

const renderExtensionModeDemo = () => {
  const entry = {
    accent: "#111111",
    domain: "notion.so",
    favicon: "notion",
    title: "Product research notes",
  };
  const step = {
    format: "pdf",
    sourceMode: "tab",
    style: "accurate",
  };
  const callouts = EXTENSION_DEMO_CALLOUTS.map(
    renderExtensionDemoCallout,
  ).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" role="img" aria-labelledby="title description">
  <title id="title">Configure Page 2 File and create a preview</title>
  <desc id="description">The original Page 2 File extension interface with four numbered callouts for format, output style, customization, and preview.</desc>
  <defs>
    <filter id="popupShadow" x="-30%" y="-20%" width="160%" height="160%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#1d2f50" flood-opacity=".18"/>
    </filter>
    <marker id="arrowHead" markerWidth="18" markerHeight="18" refX="15" refY="9" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 18 9 0 18Z" fill="${CORAL}"/>
    </marker>
  </defs>
  <rect width="900" height="900" fill="#edf3fa"/>
  <g font-family="Inter, Arial, sans-serif">
    ${popup({
      entry,
      step,
      x: EXTENSION_DEMO_POPUP_X,
      y: EXTENSION_DEMO_POPUP_Y,
    })}
    ${callouts}
  </g>
</svg>
`;
};

const writeExtensionModeDemo = async () => {
  const svg = renderExtensionModeDemo().replace(/[ \t]+$/gm, "");
  await writeFile(EXTENSION_DEMO_PATH, svg, "utf8");
};

const createContactSheet = () => {
  const figures = instructionArticles
    .flatMap((entry) =>
      entry.steps.map(
        (step) => `
          <figure>
            <img src="../public/blog/instructions/${entry.slug}/${String(step.number).padStart(2, "0")}.svg" alt="">
            <figcaption>${entry.slug} · ${step.number}</figcaption>
          </figure>`,
      ),
    )
    .join("");
  return `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<title>Page 2 File instruction contact sheet</title>
<style>
  body{margin:24px;background:#eef2f7;color:#17264a;font:14px Arial,sans-serif}
  main{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px}
  figure{margin:0;padding:10px;border:1px solid #ccd5e2;border-radius:12px;background:#fff}
  img{display:block;width:100%;height:auto}
  figcaption{padding:8px 2px 0;font-weight:700}
</style>
<main>${figures}</main>
</html>`;
};

const run = async () => {
  if (expectedSceneCount !== 127) {
    throw new Error(`Expected 127 scenes, received ${expectedSceneCount}.`);
  }
  assertPopupGeometry();
  await writeExtensionModeDemo();
  if (EXTENSION_DEMO_ONLY) {
    console.log("Generated the extension mode instruction SVG.");
    return;
  }
  await mkdir(OUTPUT_DIRECTORY, { recursive: true });
  await Promise.all(
    instructionArticles.map(async (entry) => {
      const articleDirectory = join(OUTPUT_DIRECTORY, entry.slug);
      await mkdir(articleDirectory, { recursive: true });
      await Promise.all(
        entry.steps.map(async (step) => {
          const filename = `${String(step.number).padStart(2, "0")}.svg`;
          await writeFile(
            join(articleDirectory, filename),
            renderScene(entry, step),
            "utf8",
          );
        }),
      );
    }),
  );
  await mkdir(CONTACT_SHEET_DIRECTORY, { recursive: true });
  await writeFile(
    join(CONTACT_SHEET_DIRECTORY, "blog-instructions-contact-sheet.html"),
    createContactSheet(),
    "utf8",
  );
  console.log(`Generated ${expectedSceneCount} blog instruction SVG files.`);
};

await run();
