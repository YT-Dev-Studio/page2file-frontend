import type { ExternalLinkKey } from "@/shared/config/site";
import type { StaticRoute } from "@/shared/routes/routes";
import type { Locale } from "@/shared/i18n/locales";
import { russianLandingContent } from "./russian-landings";

export type ContentSection = {
  heading: string;
  body: string;
  points?: ReadonlyArray<string>;
};

export type RelatedRoute = {
  route: StaticRoute;
  label: string;
};

export type ArticleLink = {
  slug: string;
  label: string;
};

export type LandingContent = {
  route: StaticRoute;
  eyebrow: string;
  title: string;
  description: string;
  lead: string;
  sections: ReadonlyArray<ContentSection>;
  primaryHref?: string;
  primaryLabel?: string;
  externalLinkKey?: ExternalLinkKey;
  noindex?: boolean;
  legal?: boolean;
  articleLinks?: ReadonlyArray<ArticleLink>;
  relatedRoutes?: ReadonlyArray<RelatedRoute>;
};

const gptRelatedRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "page2pdf-gpt", label: "One Page 2 PDF" },
  { route: "web2pdf-gpt", label: "Web 2 PDF" },
  { route: "html2pdf-gpt", label: "HTML 2 PDF" },
  { route: "one-page2powerpoint-gpt", label: "One Page 2 PowerPoint" },
  { route: "web2powerpoint-gpt", label: "Web 2 PowerPoint" },
];

const aiChatRelatedRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "export-ai-chat-to-pdf", label: "All AI chat exports" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT to PDF" },
  { route: "export-claude-to-pdf", label: "Claude to PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini to PDF" },
  { route: "export-grok-to-pdf", label: "Grok to PDF" },
];

export const landingContent: Partial<Record<StaticRoute, LandingContent>> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "GPT App · one public URL",
    title: "Convert One Public URL to One PDF with One Page 2 PDF",
    description: "One Page 2 PDF is a focused GPT App that sends one public webpage URL for conversion and returns one PDF file for that single page.",
    lead:
      "Give the GPT App one public HTTPS URL. One Page 2 PDF sends that address to the Page 2 File conversion service and returns one downloadable PDF for the requested page.",
    sections: [
      { heading: "1. Send one public URL", body: "Paste the exact HTTPS address of the webpage you want to convert. The request covers one page and does not start a site-wide search." },
      { heading: "2. Receive one PDF", body: "The GPT App returns a link to one PDF created from that page. Review the file before relying on its text, links, images, or page breaks." },
      { heading: "3. Use the right boundary", body: "One Page 2 PDF does not open signed-in browser tabs or bypass access controls. Use the Page 2 File extension for a page already open behind a login." },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "Open One Page 2 PDF GPT App",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "How to save a webpage as a PDF" },
      { slug: "long-webpage-page-breaks", label: "Fix page breaks on long webpages" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "GPT App · accessible website pages",
    title: "Convert Website Pages to Separate PDFs with Web 2 PDF",
    description: "Web 2 PDF is a GPT App that finds accessible pages on a website, converts each selected page, and returns a separate PDF for every page.",
    lead:
      "Give Web 2 PDF a public website address. The GPT App can identify accessible pages, send the selected URLs for conversion, and return several download links—one PDF per converted page.",
    sections: [
      { heading: "1. Provide the website", body: "Send the public starting URL. The GPT App identifies accessible pages and keeps the chosen website boundary visible before conversion." },
      { heading: "2. Review the page list", body: "Confirm which accessible pages belong in the request. Login-only pages, blocked URLs, and unrelated external domains stay outside the result." },
      { heading: "3. Download separate PDFs", body: "Each converted page is returned as its own PDF. Web 2 PDF does not promise one merged website document or a structured scraping dataset." },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Open Web 2 PDF GPT App",
    articleLinks: [
      { slug: "multi-page-website-to-pdf", label: "Convert a multi-page website to PDF" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Website types you can export" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "GPT App · uploaded HTML file",
    title: "Convert an Uploaded HTML File with HTML 2 PDF",
    description: "HTML 2 PDF is a GPT-only conversion App that accepts an uploaded HTML file and returns one tidy PDF while keeping rendering limits visible.",
    lead:
      "Upload an HTML file to the GPT App. HTML 2 PDF sends the supplied document for isolated rendering and returns a downloadable PDF; this raw-file workflow is available only through this GPT App.",
    sections: [
      { heading: "1. Upload the HTML file", body: "Attach the HTML document you are allowed to process. This workflow starts from the uploaded file, not from a public webpage URL." },
      { heading: "2. Convert to one PDF", body: "The GPT App returns one PDF for the uploaded document. Remote resources, scripts, custom fonts, and browser-only features may not reproduce exactly." },
      { heading: "3. Treat HTML as untrusted input", body: "Safe rendering requires isolation from private networks, local files, and uncontrolled scripts. The result is a document conversion, not hosted web execution." },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "Open HTML 2 PDF GPT App",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "Convert HTML to PDF safely" },
      { slug: "webpage-capture-vs-web-scraping", label: "Capture compared with scraping" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt",
    eyebrow: "GPT App · one public URL",
    title: "Convert One URL to One PPTX with One Page 2 PowerPoint",
    description: "One Page 2 PowerPoint is a focused GPT App that converts one public webpage URL and returns one PPTX presentation for that page.",
    lead:
      "Give the GPT App one public HTTPS URL. One Page 2 PowerPoint sends that page for conversion and returns one downloadable PPTX presentation for the requested address.",
    sections: [
      { heading: "1. Send one public URL", body: "Paste the exact webpage address. The GPT App handles one page per request and does not discover the rest of the website." },
      { heading: "2. Receive one PPTX", body: "The page is mapped to a presentation and returned as one PowerPoint file. Review slide boundaries and screenshot or editable fallbacks." },
      { heading: "3. Keep private tabs in Chrome", body: "A public-URL GPT App cannot inherit your browser session. Use the Page 2 File extension when the source is open behind a login." },
    ],
    externalLinkKey: "onePage2PowerpointGpt",
    primaryLabel: "Open One Page 2 PowerPoint GPT App",
    articleLinks: [
      { slug: "webpage-to-powerpoint", label: "Convert one webpage to PowerPoint" },
      { slug: "sections-to-slides", label: "Turn webpage sections into slides" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "GPT App · accessible website pages",
    title: "Convert Website Pages to PPTX with Web 2 PowerPoint",
    description: "Web 2 PowerPoint is a GPT App that finds accessible website pages, converts selected pages, and returns a separate PPTX file for each page.",
    lead:
      "Give Web 2 PowerPoint a public website address. The GPT App identifies accessible pages, converts the selected URLs, and returns several presentation links—one PPTX per converted page.",
    sections: [
      { heading: "1. Provide the website", body: "Send the public starting URL and keep the intended website boundary clear. External domains and private pages are not silently included." },
      { heading: "2. Confirm accessible pages", body: "Review the discovered page list before conversion. Only selected, reachable pages are sent to the Page 2 File service." },
      { heading: "3. Download separate PPTX files", body: "Every converted page is returned as its own PowerPoint presentation. The GPT App does not promise one merged deck for the entire website." },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Open Web 2 PowerPoint GPT App",
    articleLinks: [
      { slug: "website-to-powerpoint", label: "Convert a website to PowerPoint" },
      { slug: "screenshot-vs-editable-powerpoint", label: "Screenshot slides or editable slides" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "AI chat export",
    title: "Export the conversation from the active tab",
    description: "Export supported ChatGPT, Claude, Gemini and Grok conversations to PDF with the Page 2 File extension, a temporary preview and no conversion history.",
    lead:
      "Choose the original conversation look or a clean reading document. The Page 2 File extension handles chat export from the active browser tab.",
    sections: [
      {
        heading: "Supported chat surfaces",
        body: "Page 2 File supports ChatGPT, Claude, Gemini and Grok, with a conservative generic fallback for other browser chats.",
        points: ["ChatGPT", "Claude", "Gemini", "Grok"],
      },
      { heading: "Original look", body: "Preserve message grouping, code blocks, tables and visible source links." },
      { heading: "Clean document", body: "Reflow supported text into a quieter document while retaining authorship and link targets." },
      { heading: "Independent product", body: "Page 2 File is not affiliated with, endorsed by or operated by any supported AI platform." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install the extension",
    articleLinks: [
      { slug: "export-ai-chats-privately", label: "Export AI chats privately" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Website types you can export" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "ChatGPT export",
    title: "Export long ChatGPT conversations to PDF",
    description: "Export visible ChatGPT messages, code blocks, tables, links and long conversations to a reviewed PDF from the active browser tab.",
    lead:
      "Capture the conversation you can see in the active tab, review page breaks, and download without creating a Page 2 File account.",
    sections: [
      { heading: "What is preserved", body: "Messages, speaker order, code blocks, tables and visible links are mapped into the preview." },
      { heading: "Two reading styles", body: "Keep the original visual rhythm or choose a cleaner document optimized for reading and printing." },
      { heading: "Platform-specific limits", body: "Collapsed branches, unloaded messages and off-DOM content may require scrolling or expansion before capture." },
      { heading: "No official affiliation", body: "Page 2 File is an independent export tool and is not endorsed by or affiliated with OpenAI or ChatGPT." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install for ChatGPT",
    articleLinks: [
      { slug: "export-chatgpt-conversation-to-pdf", label: "Export a ChatGPT conversation to PDF" },
      { slug: "export-ai-chats-privately", label: "Protect AI chat preview data" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Claude export",
    title: "Save Claude conversations and visible artifacts",
    description: "Export visible Claude conversations, Markdown, code, citations and available artifact context to a reviewed PDF from the active browser tab.",
    lead:
      "The extension reads the active conversation after an explicit click and prepares a temporary preview for reviewing long responses.",
    sections: [
      { heading: "Long responses stay structured", body: "Headings, lists, citations and code are kept in their reading order." },
      { heading: "Artifact context", body: "Visible artifact titles and available document content can be represented without claiming hidden access." },
      { heading: "No official affiliation", body: "Page 2 File is an independent export tool and is not endorsed by Anthropic." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install for Claude",
    articleLinks: [
      { slug: "export-claude-chat-to-pdf", label: "Export a Claude chat to PDF" },
      { slug: "export-ai-chats-privately", label: "Protect AI chat preview data" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Gemini export",
    title: "Turn a Gemini conversation into a readable PDF",
    description: "Export visible Gemini messages, source cards, code and citations from the active browser tab into a reviewed PDF with temporary preview.",
    lead:
      "Review how source cards and visible images appear before producing a clean or visually faithful document.",
    sections: [
      { heading: "Sources remain useful", body: "Visible citations and source links are kept clickable when their targets are safe." },
      { heading: "Images follow the DOM", body: "Only media available to the active page can appear in the temporary preview." },
      { heading: "No official affiliation", body: "Page 2 File is independent and is not a Google or Gemini product." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install for Gemini",
    articleLinks: [
      { slug: "export-gemini-chat-to-pdf", label: "Export a Gemini chat to PDF" },
      { slug: "export-ai-chats-privately", label: "Protect AI chat preview data" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Grok export",
    title: "Export Grok threads with visible citations",
    description: "Export visible Grok conversations, X links, quoted posts and citations to a reviewed PDF from the active browser tab.",
    lead:
      "Capture the active thread, preserve visible source context and choose a visual or clean document preview.",
    sections: [
      { heading: "Thread-aware reading order", body: "Messages and quoted post context remain grouped instead of becoming one unlabelled text stream." },
      { heading: "Visible X links", body: "Post URLs and citations remain clickable when they pass the safety check." },
      { heading: "No official affiliation", body: "Page 2 File is an independent product and is not endorsed by xAI or X." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install for Grok",
    articleLinks: [
      { slug: "export-other-ai-chats-to-pdf", label: "Export other AI chats to PDF" },
      { slug: "export-ai-chats-privately", label: "Protect AI chat preview data" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  privacy: {
    route: "privacy",
    eyebrow: "Privacy and data processing",
    title: "Privacy policy",
    description: "How Page 2 File handles temporary conversion jobs, short-lived artifacts, automatic analytics and requests sent through the service.",
    lead: "This policy describes the current product boundaries and the service providers involved in operating Page 2 File.",
    sections: [
      { heading: "No accounts or history", body: "The service does not create user profiles or retain a user-visible list of past conversions." },
      { heading: "Analytics", body: "Google Analytics starts automatically when a valid Measurement ID is configured. UTM values are not kept in a custom attribution cookie." },
      { heading: "Temporary server processing", body: "Public URL conversion uses temporary job data and short-lived output artifacts. Retention and deletion depend on the configured conversion infrastructure." },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Service agreement",
    title: "Terms of service",
    description: "Terms for using Page 2 File, including permitted source use, temporary processing and limitations of editable output.",
    lead: "By using the service, you agree to submit only material you may access and reproduce and to review generated files before relying on them.",
    sections: [
      { heading: "Self-hosted MVP status", body: "The current service performs webpage conversion through a separately deployed backend, but it is not a production deployment or a fidelity guarantee." },
      { heading: "Your responsibility", body: "Only convert material you are permitted to access and reproduce." },
      { heading: "No fidelity guarantee", body: "Editable output cannot preserve every browser feature. Preview warnings define the expected degradation." },
    ],
    legal: true,
  },
  "cookie-policy": {
    route: "cookie-policy",
    eyebrow: "Analytics disclosure",
    title: "Cookie and analytics policy",
    description: "How automatic Google Analytics loading, cookies and in-memory campaign attribution work on public Page 2 File pages.",
    lead: "Analytics starts automatically when a valid GA4 Measurement ID is configured.",
    sections: [
      { heading: "Analytics settings", body: "No first-party localStorage value is used to store an analytics preference." },
      { heading: "Analytics by default", body: "The Google tag is requested automatically on public pages when a valid Measurement ID is configured." },
      { heading: "Attribution", body: "Allowed UTM values are normalized in memory and sent with the analytics event." },
    ],
    legal: true,
  },
  security: {
    route: "security",
    eyebrow: "Self-hosted security boundary",
    title: "What Page 2 File protects — and what remains an operational gate",
    description: "Review the implemented frontend, BFF and conversion-backend controls for the self-hosted Page 2 File MVP and its remaining production launch gates.",
    lead: "This page describes controls present in the codebase. Production deployment, external penetration testing and infrastructure hardening remain separate launch gates.",
    sections: [
      { heading: "Frontend and BFF", body: "The browser uses same-origin conversion routes, anonymous HttpOnly sessions, Origin and CSRF checks, trusted repository MDX, safe external links and security headers." },
      { heading: "Conversion backend", body: "The separate backend implements signed BFF requests, replay protection, SSRF-resistant URL checks, redirect revalidation, isolated Chromium, queue limits and encrypted temporary artifacts." },
      { heading: "Remaining launch gates", body: "Production secrets, network policy, monitoring, backups, legal review and an independent penetration test must be completed for the chosen hosting environment." },
    ],
    legal: true,
  },
  "acceptable-use": {
    route: "acceptable-use",
    eyebrow: "Responsible use",
    title: "Acceptable use",
    description: "Responsible-use rules for converting webpages and documents, including access controls, system abuse, intellectual property and lawful source handling.",
    lead: "Use Page 2 File only for sources you are allowed to access, process and reproduce.",
    sections: [
      { heading: "Do not bypass access controls", body: "The service must not be used to evade paywalls, authentication or technical restrictions." },
      { heading: "Respect people and systems", body: "Do not submit malware, abusive content or workloads intended to exhaust another service." },
      { heading: "Respect intellectual property", body: "You remain responsible for permissions, attribution and distribution of generated documents." },
    ],
    legal: true,
  },
};

export const getLandingContent = (
  locale: Locale,
  route: StaticRoute,
): LandingContent | null =>
  (locale === "ru" ? russianLandingContent[route] : landingContent[route]) ??
  null;
