import type { ExternalLinkKey } from "@/shared/config/site";
import type { StaticRoute } from "@/shared/routes/routes";
import type { Locale } from "@/shared/i18n/locales";
import { russianLandingContent } from "./russian-landings";
import { germanLandingContent } from "./german-landings";
import { frenchLandingContent } from "./french-landings";
import { germanLegalLandingContent } from "./german-legal-landings";
import { frenchLegalLandingContent } from "./french-legal-landings";

export type ContentSection = {
  id?: string;
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
    description: "How Page 2 File processes webpage content, temporary conversion files, service cookies, analytics data and privacy requests.",
    lead:
      "This Privacy Policy explains what Page 2 File processes when you visit the website, use the Chrome extension or convert a webpage to PDF or PowerPoint.",
    sections: [
      {
        heading: "Operator and scope",
        body:
          "{{entityName}}, located at {{address}}, operates Page 2 File and is responsible for the processing described in this policy. This policy applies to the Page 2 File website, browser extension and related webpage-to-file conversion services.",
      },
      {
        heading: "Definitions",
        body:
          "“Service” means Page 2 File and its conversion features. “Conversion content” means the URL, visible webpage content, selected options and generated PDF or PowerPoint file involved in a conversion. “Personal data” means information that identifies or can reasonably be linked to a person.",
      },
      {
        heading: "Information we process",
        body:
          "Depending on how you use the Service, we may process technical request data, IP address, browser and device information, visited Page 2 File pages, permitted campaign parameters, a public URL or content visible in an active browser tab, conversion settings, temporary job identifiers and generated files.",
      },
      {
        heading: "Information we do not request",
        body:
          "Page 2 File does not require a Page 2 File account and does not ask for payment-card details, billing addresses or passwords for the source website. The extension uses the page already open in your browser and does not receive the password you used to access that website.",
      },
      {
        heading: "How we use information",
        body:
          "We process information to provide previews and files, protect the Service against abuse, diagnose failures, maintain reliability, understand aggregate use of public pages, respond to requests and comply with applicable law. We do not sell personal data.",
      },
      {
        heading: "Conversion content and temporary processing",
        body:
          "A public-URL conversion or an extension preview requires temporary processing of the submitted page and selected options. Page 2 File does not provide an account-based conversion history. Preview data and generated artifacts are short-lived and are deleted after the preview closes or when the configured technical expiry is reached.",
      },
      {
        heading: "Analytics and attribution",
        body:
          "When a valid Google Analytics Measurement ID is configured, Google Analytics loads automatically on public marketing pages. It may receive page, device, browser, approximate-location and campaign information. Allowed UTM values are normalized in memory and sent with the analytics event; Page 2 File does not keep them in a custom attribution cookie.",
      },
      {
        heading: "Service providers and disclosures",
        body:
          "Page 2 File uses {{processors}} to deliver, protect and measure the Service. These providers may process technical data only as needed for their services and under their own privacy terms. We may also disclose information when required by law, to protect rights or safety, or as part of a lawful business transfer.",
      },
      {
        heading: "Retention and deletion",
        body:
          "Conversion content is kept only for the temporary processing and download workflow and is not retained as a user-visible history. Security logs, infrastructure records, analytics data and correspondence may be retained for the period reasonably required for security, operations, legal obligations or resolving a request.",
      },
      {
        heading: "Security",
        body:
          "Page 2 File uses same-origin conversion routes, anonymous session controls, Origin and CSRF checks, signed backend requests, URL validation, isolated rendering and temporary artifacts. No technical or organizational measure can guarantee absolute security, so you should avoid converting material you are not permitted to disclose.",
      },
      {
        heading: "International processing",
        body:
          "Our providers may process technical or analytics data in countries other than your own. Where applicable, we rely on provider safeguards and lawful transfer mechanisms. The operator is established in {{jurisdiction}}.",
      },
      {
        heading: "Your privacy rights",
        body:
          "Depending on applicable law, you may request access to, correction of, deletion of or restriction on personal data associated with you, or object to certain processing. Because Page 2 File has no user accounts or conversion-history archive, we may need information from you to identify any relevant operational record.",
      },
      {
        heading: "Third-party websites",
        body:
          "Page 2 File can open or convert content from websites operated by others and may link to external services. Their content, security and privacy practices are controlled by those third parties, and their own terms apply when you use them.",
      },
      {
        heading: "Children",
        body:
          "The Service is not directed to children under 13, and we do not knowingly collect personal data from children under 13. A parent or guardian who believes a child has provided personal data may contact us to request its deletion.",
      },
      {
        id: "cookies",
        heading: "Cookies",
        body:
          "Page 2 File uses the short-lived p2f_session and p2f_csrf cookies to maintain an anonymous conversion session and protect requests. They use Strict SameSite settings and expire after one hour. Google Analytics may set analytics cookies on public pages when analytics is configured. We do not place conversion content or directly identifying profile data in these cookies.",
      },
      {
        heading: "Blocking and deleting cookies",
        body:
          "You can block or delete cookies through your browser settings. Blocking the Page 2 File session or CSRF cookies may prevent conversion requests from working. Blocking Google Analytics may limit measurement but does not prevent the core public pages from loading. Removing a cookie requires using your browser’s cookie controls.",
      },
      {
        heading: "Changes to this policy",
        body:
          "We may update this policy when the Service, providers or legal requirements change. The updated version will be published on this page with a revised date. Material changes apply from the stated effective date.",
      },
      {
        heading: "Contact",
        body:
          "Questions and privacy requests can be sent to {{contactEmail}}. The operator is {{entityName}}, {{address}}, under the laws of {{jurisdiction}}.",
      },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Service agreement",
    title: "Terms of service",
    description: "Terms for using Page 2 File, including permitted webpage sources, conversion limits, user responsibilities and service availability.",
    lead:
      "These Terms govern your use of the Page 2 File website, Chrome extension and webpage-to-PDF or PowerPoint conversion services.",
    sections: [
      {
        heading: "Agreement and operator",
        body:
          "By accessing or using Page 2 File, you agree to these Terms. The Service is operated by {{entityName}}, located at {{address}}. If you use the Service for an organization, you confirm that you have authority to accept these Terms for that organization.",
      },
      {
        heading: "Definitions",
        body:
          "“Service” means the Page 2 File website, Chrome extension and conversion features. “Source content” means a webpage, active-tab content or other material submitted for conversion. “Output” means a PDF, PowerPoint file, preview or other generated result.",
      },
      {
        heading: "Limited license",
        body:
          "We grant you a revocable, non-exclusive, non-transferable and limited right to access and use the Service in accordance with these Terms. No ownership in Page 2 File software, branding or other protected material is transferred to you.",
      },
      {
        heading: "Permitted sources and your responsibility",
        body:
          "You may convert only source content that you are legally permitted to access, process, reproduce and download. You are responsible for the URLs and active-tab content you submit, the conversion settings you choose, and how you use or distribute every Output.",
      },
      {
        heading: "Prohibited use",
        body:
          "You must not use the Service to break the law, infringe another person’s rights, bypass paywalls or access controls, distribute malware, submit abusive or unlawful content, probe private networks, interfere with security controls, overload systems, automate excessive requests, reverse engineer protected parts of the Service or misrepresent generated files.",
      },
      {
        heading: "Source content and third-party rights",
        body:
          "You retain any rights you already have in source content. Page 2 File does not grant rights to material owned by another person. You represent that processing the submitted material and creating the requested Output does not violate copyright, privacy, confidentiality, contract or other applicable rights.",
      },
      {
        heading: "Temporary processing",
        body:
          "The Service may temporarily process source content, conversion settings and generated artifacts to provide a preview and download. Page 2 File does not provide an account-based conversion history. Details about temporary data, cookies and providers are set out in the Privacy Policy.",
      },
      {
        heading: "Output and fidelity limitations",
        body:
          "Webpages can contain scripts, animations, video, protected media, custom fonts, canvas graphics, dynamic data and complex layouts that cannot be reproduced exactly in a static PDF or PowerPoint file. Accurate copy prioritizes appearance; Editable document rebuilds supported text, images and links. You must review the preview and final Output before relying on it.",
      },
      {
        heading: "Third-party services and links",
        body:
          "The Service may convert or link to websites and services controlled by third parties. Page 2 File is not responsible for their availability, content, accuracy, legality, security or privacy practices. Your use of a third-party service remains subject to that provider’s terms.",
      },
      {
        heading: "Privacy and cookies",
        body:
          "Our Privacy Policy explains temporary conversion processing, analytics, service providers and cookies. By using the Service, you acknowledge that processing necessary to provide the requested conversion will occur as described there.",
      },
      {
        heading: "Page 2 File intellectual property",
        body:
          "The Service, software, design, text, logos and other Page 2 File materials are owned by or licensed to {{entityName}} and are protected by applicable intellectual-property laws. You may not remove proprietary notices or copy, sell, sublicense or commercially exploit the Service except where law expressly permits it.",
      },
      {
        heading: "Feedback",
        body:
          "If you voluntarily provide suggestions or feedback, you grant us a worldwide, perpetual and royalty-free right to use that feedback to improve or develop the Service without an obligation to compensate you. This does not transfer ownership of your source content.",
      },
      {
        heading: "Changes, updates and availability",
        body:
          "We may update, limit, suspend or discontinue the Service or any feature, and we do not promise that every feature will remain available. We may apply technical limits needed for security, reliability or fair use. Where practical, material service changes will be reflected on the website.",
      },
      {
        heading: "Suspension and termination",
        body:
          "You may stop using the Service at any time. We may block or suspend access when we reasonably believe these Terms have been violated, use threatens the Service or another system, or action is required by law. Provisions intended to survive termination remain effective.",
      },
      {
        heading: "Copyright and rights complaints",
        body:
          "If you believe material available through Page 2 File infringes your rights, contact {{contactEmail}} with identification of the protected work, the relevant material or URL, your contact details and a statement explaining the claimed infringement.",
      },
      {
        heading: "No warranties",
        body:
          "To the maximum extent permitted by law, the Service and every Output are provided “as is” and “as available”. We do not guarantee uninterrupted operation, error-free conversion, complete fidelity, availability of a third-party page, fitness for a particular purpose or that every Output will meet your requirements.",
      },
      {
        heading: "Limitation of liability",
        body:
          "To the maximum extent permitted by applicable law, {{entityName}} is not liable for indirect, incidental, special, consequential or punitive loss, loss of profits, data, business or privacy, or costs caused by use of or inability to use the Service. Rights that cannot legally be excluded remain unaffected.",
      },
      {
        heading: "Indemnity",
        body:
          "To the extent permitted by law, you agree to defend and indemnify {{entityName}} against third-party claims arising from source content you submit, your use or distribution of an Output, your violation of these Terms or your infringement of another person’s rights.",
      },
      {
        heading: "Severability, waiver and entire agreement",
        body:
          "If any provision is held invalid or unenforceable, the remaining provisions continue in effect and the affected provision will be interpreted as closely as legally possible to its intended purpose. A failure to enforce a provision is not a waiver. These Terms and the Privacy Policy form the agreement governing the Service.",
      },
      {
        heading: "Governing law and disputes",
        body:
          "These Terms are governed by the laws of {{jurisdiction}}, without regard to conflict-of-law rules. Before starting formal proceedings, you and {{entityName}} will try in good faith to resolve a dispute through written notice. Unresolved disputes may be submitted to the competent courts of {{jurisdiction}}, unless mandatory law requires another forum.",
      },
      {
        heading: "Changes to these terms",
        body:
          "We may revise these Terms to reflect changes to the Service, providers or legal requirements. The revised Terms will be published with an updated date. Continuing to use the Service after the effective date means you accept the revised Terms; otherwise, you must stop using the Service.",
      },
      {
        heading: "Contact",
        body:
          "Questions or notices about these Terms may be sent to {{contactEmail}} or to {{entityName}}, {{address}}.",
      },
    ],
    legal: true,
  },
};

export const getLandingContent = (
  locale: Locale,
  route: StaticRoute,
): LandingContent | null =>
  (locale === "ru"
    ? russianLandingContent[route]
    : locale === "de"
      ? germanLandingContent[route] ??
        germanLegalLandingContent[route] ??
        landingContent[route]
      : locale === "fr"
        ? frenchLandingContent[route] ??
          frenchLegalLandingContent[route] ??
          landingContent[route]
        : landingContent[route]) ?? null;
