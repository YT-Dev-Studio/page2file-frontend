import type { ExternalLinkKey } from "@/shared/config/site";
import type { StaticRoute } from "@/shared/routes/routes";

export type ContentSection = {
  heading: string;
  body: string;
  points?: ReadonlyArray<string>;
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
};

export const landingContent: Partial<Record<StaticRoute, LandingContent>> = {
  "chrome-extension": {
    route: "chrome-extension",
    eyebrow: "Current tab, kept local",
    title: "Export the page you are already viewing",
    description:
      "A privacy-first Chrome extension prototype for exporting current tabs and AI chats to PDF or PowerPoint.",
    lead:
      "Use the extension when a page requires sign-in, contains a private conversation, or should never be sent to a remote conversion service.",
    sections: [
      {
        heading: "A deliberate permission model",
        body:
          "Page2File requests temporary access after you click the extension. It does not need permanent access to every site for the prototype flow.",
        points: ["User-initiated capture", "Current-tab scope", "No conversion history"],
      },
      {
        heading: "Two useful output modes",
        body:
          "Visual mode prioritizes the original appearance. Editable mode rebuilds supported text, images and links, with clear fallback warnings.",
      },
      {
        heading: "Built for long, private material",
        body:
          "The extension experience is designed for signed-in pages and long AI conversations that a public URL converter cannot access.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install extension",
  },
  "chrome-extension/welcome": {
    route: "chrome-extension/welcome",
    eyebrow: "Installation complete",
    title: "Your first export takes three steps",
    description: "Post-install guide for the Page2File Chrome extension prototype.",
    lead:
      "Pin the extension, open the page you want to export, then choose PDF or PowerPoint from the toolbar panel.",
    sections: [
      { heading: "1. Pin Page2File", body: "Open the extensions menu and keep Page2File visible in the toolbar." },
      { heading: "2. Open the source", body: "Navigate to the exact page or conversation you want to capture." },
      { heading: "3. Review before download", body: "Choose a mode, inspect the local preview and download when the sections look right." },
    ],
    primaryHref: "/chrome-extension/how-to-use",
    primaryLabel: "Open the full guide",
    noindex: true,
  },
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "GPT workflow · one page",
    title: "Turn one public webpage into a reviewed PDF",
    description: "Page2PDF GPT landing page for one-page public URL conversion.",
    lead:
      "Give the GPT one public HTTPS URL, choose visual or editable output, and review the generated preview before downloading.",
    sections: [
      { heading: "One URL, one document", body: "This focused workflow avoids crawling and keeps the source boundary easy to understand." },
      { heading: "Preview stays mandatory", body: "Font substitutions, raster fallbacks and removed unsafe links must be visible before final render." },
      { heading: "Public pages only", body: "Paywalls, login pages and private tabs are not bypassed. Use the browser extension for those sources." },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "Open Page2PDF GPT",
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "GPT workflow · bounded crawl",
    title: "Collect a small website into one organized PDF",
    description: "Web2PDF GPT landing page for limited same-origin website conversion.",
    lead:
      "Start from one public URL and collect a bounded set of same-origin pages into a merged document with page titles and bookmarks.",
    sections: [
      { heading: "A crawl with visible limits", body: "Depth, page count, redirects and duplicate URLs are constrained before work begins." },
      { heading: "Same-origin by default", body: "External links remain links; they do not silently expand the crawl boundary." },
      { heading: "Respectful collection", body: "Authenticated areas are excluded, and production policy will define robots and rate limits." },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Open Web2PDF GPT",
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "GPT workflow · supplied HTML",
    title: "Render supplied HTML without trusting its scripts",
    description: "HTML2PDF GPT landing page for sandboxed HTML and inline CSS conversion.",
    lead:
      "Provide bounded HTML and inline CSS. Scripts and network access stay disabled in the planned backend sandbox.",
    sections: [
      { heading: "Small, explicit input", body: "The first backend version accepts a document fragment, not a ZIP or arbitrary project." },
      { heading: "Network disabled", body: "The renderer must not use the supplied HTML to reach internal services or fetch unknown resources." },
      { heading: "Honest compatibility", body: "Unsupported fonts, media and complex graphics are surfaced as preview warnings." },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "Open HTML2PDF GPT",
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "GPT workflow · webpage to deck",
    title: "Translate webpage sections into presentation slides",
    description: "Web2PowerPoint GPT landing page for visual and editable slide conversion.",
    lead:
      "Turn the meaningful sections of a public webpage into a 16:9 deck, then review slide boundaries before download.",
    sections: [
      { heading: "Sections become slides", body: "Headings and visual breaks guide the initial deck structure instead of arbitrary viewport screenshots." },
      { heading: "Visual or editable", body: "Choose high-fidelity slide images or editable text and shapes with adaptive raster fallback." },
      { heading: "Presentation limits are visible", body: "Animations, video and unsupported fonts become posters, substitutions or warnings." },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Open Web2PowerPoint GPT",
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "Local AI chat export",
    title: "Keep the conversation in your browser",
    description: "Export supported AI conversations to PDF locally with the Page2File extension.",
    lead:
      "Choose the original conversation look or a clean reading document. The prototype positions chat export as a local browser task.",
    sections: [
      {
        heading: "Supported chat surfaces",
        body: "Dedicated adapters are planned for ChatGPT, Claude, Gemini and Grok, with a conservative generic fallback.",
        points: ["ChatGPT", "Claude", "Gemini", "Grok"],
      },
      { heading: "Original look", body: "Preserve message grouping, code blocks, tables and visible source links." },
      { heading: "Clean document", body: "Reflow supported text into a quieter document while retaining authorship and link targets." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install the extension",
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "ChatGPT export",
    title: "Export long ChatGPT conversations to PDF locally",
    description: "A local extension workflow for ChatGPT messages, code, tables and long conversations.",
    lead:
      "Capture the conversation you can see in the active tab, review page breaks, and download without creating a Page2File account.",
    sections: [
      { heading: "What is preserved", body: "Messages, speaker order, code blocks, tables and visible links are mapped into the preview." },
      { heading: "Two reading styles", body: "Keep the original visual rhythm or choose a cleaner document optimized for reading and printing." },
      { heading: "Platform-specific limits", body: "Collapsed branches, unloaded messages and off-DOM content may require scrolling or expansion before capture." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install for ChatGPT",
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Claude export",
    title: "Save Claude conversations and visible artifacts",
    description: "Export Claude conversations, Markdown, code and visible artifact context to PDF locally.",
    lead:
      "The extension reads the active conversation after an explicit click and prepares a local preview with long-response handling.",
    sections: [
      { heading: "Long responses stay structured", body: "Headings, lists, citations and code are kept in their reading order." },
      { heading: "Artifact context", body: "Visible artifact titles and available document content can be represented without claiming hidden access." },
      { heading: "No official affiliation", body: "Page2File is an independent export tool and is not endorsed by Anthropic." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install for Claude",
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Gemini export",
    title: "Turn a Gemini conversation into a readable PDF",
    description: "Export visible Gemini messages, source cards, code and citations through a local extension workflow.",
    lead:
      "Review how source cards and visible images appear before producing a clean or visually faithful document.",
    sections: [
      { heading: "Sources remain useful", body: "Visible citations and source links are kept clickable when their targets are safe." },
      { heading: "Images follow the DOM", body: "Only media available to the active page can appear in the local preview." },
      { heading: "No official affiliation", body: "Page2File is independent and is not a Google or Gemini product." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install for Gemini",
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Grok export",
    title: "Export Grok threads with visible citations",
    description: "A local PDF export workflow for Grok conversations, X links, posts and visible citations.",
    lead:
      "Capture the active thread, preserve visible source context and choose a visual or clean document preview.",
    sections: [
      { heading: "Thread-aware reading order", body: "Messages and quoted post context remain grouped instead of becoming one unlabelled text stream." },
      { heading: "Visible X links", body: "Post URLs and citations remain clickable when they pass the local safety check." },
      { heading: "No official affiliation", body: "Page2File is an independent product and is not endorsed by xAI or X." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Install for Grok",
  },
  privacy: {
    route: "privacy",
    eyebrow: "Draft legal document",
    title: "Privacy policy",
    description: "Draft privacy policy for the Page2File frontend prototype.",
    lead: "This draft explains the intended data boundaries. It is not production legal advice.",
    sections: [
      { heading: "No accounts or history", body: "The prototype does not create user profiles or retain a list of past conversions." },
      { heading: "Browser preferences", body: "The browser stores only the analytics consent choice. UTM values are not kept in a custom attribution cookie." },
      { heading: "Future server processing", body: "Public URL conversion will require temporary server processing and short-lived artifacts; exact processors and retention require legal review." },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Draft legal document",
    title: "Terms of service",
    description: "Draft terms for the Page2File frontend prototype.",
    lead: "These test terms describe intended product boundaries and require jurisdiction-specific review.",
    sections: [
      { heading: "Prototype status", body: "The current service demonstrates UI and sample outputs; it does not perform real webpage conversion." },
      { heading: "Your responsibility", body: "Only convert material you are permitted to access and reproduce." },
      { heading: "No fidelity guarantee", body: "Editable output cannot preserve every browser feature. Preview warnings define the expected degradation." },
    ],
    legal: true,
  },
  "cookie-policy": {
    route: "cookie-policy",
    eyebrow: "Draft legal document",
    title: "Cookie and analytics policy",
    description: "Draft explanation of essential storage, consent and optional GA4.",
    lead: "Analytics remains off until a visitor accepts it and a valid GA4 Measurement ID is configured.",
    sections: [
      { heading: "Essential storage", body: "A first-party localStorage value remembers the analytics preference." },
      { heading: "Optional analytics", body: "The Google tag is not requested before opt-in. Rejection leaves all converter prototype features available." },
      { heading: "Attribution", body: "Allowed UTM values are normalized in memory and sent only after consent." },
    ],
    legal: true,
  },
  security: {
    route: "security",
    eyebrow: "Frontend security boundary",
    title: "What this prototype protects — and what it does not",
    description: "Implemented frontend controls and future backend security boundaries.",
    lead: "This page describes only controls present in the frontend and separates them from planned server protections.",
    sections: [
      { heading: "Implemented now", body: "HTTPS-only URL parsing, private-host warnings, trusted repository MDX, safe external links, security headers and no user HTML execution." },
      { heading: "No source fetching", body: "The prototype never requests the URL entered in the form. It runs a deterministic mock job." },
      { heading: "Required before real conversion", body: "SSRF-resistant egress, redirect and DNS revalidation, isolated Chromium, rate limits, queue controls and temporary artifact deletion belong to the separate backend." },
    ],
    legal: true,
  },
  "acceptable-use": {
    route: "acceptable-use",
    eyebrow: "Draft policy",
    title: "Acceptable use",
    description: "Draft responsible-use rules for webpage and document conversion.",
    lead: "Use Page2File only for sources you are allowed to access, process and reproduce.",
    sections: [
      { heading: "Do not bypass access controls", body: "The service must not be used to evade paywalls, authentication or technical restrictions." },
      { heading: "Respect people and systems", body: "Do not submit malware, abusive content or workloads intended to exhaust another service." },
      { heading: "Respect intellectual property", body: "You remain responsible for permissions, attribution and distribution of generated documents." },
    ],
    legal: true,
  },
};

export const getLandingContent = (route: StaticRoute): LandingContent | null =>
  landingContent[route] ?? null;
