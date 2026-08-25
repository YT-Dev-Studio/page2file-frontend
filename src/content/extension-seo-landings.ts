import type { ExtensionSeoRoute } from "@/shared/routes/routes";

export type ExtensionSeoFaq = {
  question: string;
  answer: string;
};

export type ExtensionSeoStep = {
  title: string;
  body: string;
};

export type ExtensionSeoDemo = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  samplePdf: string;
  sampleLabel: string;
};

export type ExtensionSeoLandingContent = {
  route: ExtensionSeoRoute;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  demo: ExtensionSeoDemo;
  steps: readonly [ExtensionSeoStep, ExtensionSeoStep, ExtensionSeoStep];
  supportedTitle: string;
  supported: ReadonlyArray<string>;
  limitsTitle: string;
  limits: ReadonlyArray<string>;
  privacy: string;
  faqs: ReadonlyArray<ExtensionSeoFaq>;
  related: ReadonlyArray<ExtensionSeoRoute>;
};

const commonSteps: readonly [
  ExtensionSeoStep,
  ExtensionSeoStep,
  ExtensionSeoStep,
] = [
  {
    title: "Open the page",
    body: "Open the page or supported conversation in Chrome and keep that tab selected.",
  },
  {
    title: "Choose the output",
    body: "Pick Accurate copy, Editable document, or AI / Chat and adjust the available options.",
  },
  {
    title: "Preview the PDF",
    body: "Select Get PDF, review the result in a separate preview tab, and download it when ready.",
  },
];

const privacy =
  "Page 2 PDF works on the tab you choose. Temporary processing stays in the extension workflow; the product does not ask you to paste a private page URL into a public converter.";

const webpageDemo: ExtensionSeoDemo = {
  title: "See a long page become a complete PDF",
  body: "This verified sample shows the Accurate copy pipeline turning a long test page into a multi-page visual PDF.",
  image: "/samples/accurate-copy-preview.svg",
  imageAlt: "Before and after preview of a long webpage saved as a multi-page PDF",
  samplePdf: "/samples/accurate-copy.pdf",
  sampleLabel: "Open the Accurate copy sample PDF",
};

const editableDemo: ExtensionSeoDemo = {
  title: "Keep useful page content selectable",
  body: "The Editable document sample preserves text and available links while applying the chosen page orientation and content options.",
  image: "/samples/editable-document-preview.svg",
  imageAlt: "Preview of a webpage exported as a PDF with selectable text and links",
  samplePdf: "/samples/editable-document.pdf",
  sampleLabel: "Open the Editable document sample PDF",
};

const chatDemo: ExtensionSeoDemo = {
  title: "Turn the current conversation into a clean PDF",
  body: "This sample uses the chat-focused layout: messages stay in order without exporting the surrounding application interface.",
  image: "/samples/ai-chat-preview.svg",
  imageAlt: "Preview of a supported browser conversation exported to a clean PDF",
  samplePdf: "/samples/ai-chat.pdf",
  sampleLabel: "Open the AI / Chat sample PDF",
};

const content: Record<ExtensionSeoRoute, ExtensionSeoLandingContent> = {
  "chrome-extension/webpage-to-pdf": {
    route: "chrome-extension/webpage-to-pdf",
    title: "Save Any Webpage as PDF in Chrome",
    description:
      "Save the full webpage open in Chrome as a visual PDF or a document with selectable text, links, and available media.",
    eyebrow: "WEBPAGE TO PDF",
    heading: "Save the full webpage open in Chrome",
    lead:
      "Page 2 PDF captures the current tab from top to bottom. Choose a visual copy for appearance or an editable document for selectable content.",
    demo: webpageDemo,
    steps: commonSteps,
    supportedTitle: "What this workflow supports",
    supported: [
      "Long pages that extend beyond the visible viewport",
      "Portrait and landscape output",
      "Visual PDFs or selectable text and available links",
      "Pages you can open normally in the current Chrome tab",
    ],
    limitsTitle: "What it does not promise",
    limits: [
      "It is not a server-side URL-to-PDF service and does not accept pasted URLs.",
      "Content hidden behind logins, closed menus, or unloaded virtualized lists may remain unavailable.",
      "A visual copy prioritizes appearance; use Editable document when selectable text matters.",
    ],
    privacy,
    faqs: [
      {
        question: "Does it save more than the visible screen?",
        answer:
          "Yes. Page 2 PDF prepares and captures the full main page flow, including pages that scroll inside their own content container.",
      },
      {
        question: "Can I keep links clickable?",
        answer:
          "Choose Editable document and leave Remove links off. Available page links are retained where Chromium can represent them in the PDF.",
      },
      {
        question: "Can I paste a URL into Page 2 PDF?",
        answer:
          "No. Open the page in Chrome first, then run the extension on that active tab.",
      },
    ],
    related: [
      "chrome-extension/full-page-pdf",
      "chrome-extension/webpage-to-pdf-with-links",
      "chrome-extension/chrome-print-vs-page-2-pdf",
    ],
  },
  "chrome-extension/ai-chat-to-pdf": {
    route: "chrome-extension/ai-chat-to-pdf",
    title: "AI Chat to PDF Chrome Extension",
    description:
      "Export the current supported AI conversation to a clean PDF with ordered messages, links, and available media options.",
    eyebrow: "AI CHAT TO PDF",
    heading: "Export the current supported AI conversation",
    lead:
      "Page 2 PDF reads the open conversation, removes surrounding app chrome, and formats the messages for a clean PDF preview.",
    demo: chatDemo,
    steps: commonSteps,
    supportedTitle: "Supported AI chat workflows",
    supported: [
      "The currently open ChatGPT, Claude, Gemini, Grok, Perplexity, Copilot, or Manus conversation",
      "All messages or replies-only output",
      "Available images, video references, audio references, and links when enabled",
      "Long conversations that the adapter can load from the open page",
    ],
    limitsTitle: "Clear boundaries",
    limits: [
      "Page 2 PDF does not export every conversation in an account at once.",
      "Unsupported chat products and changed platform markup may require a future adapter update.",
      "Private assets that the active page cannot retrieve may appear as a placeholder.",
    ],
    privacy,
    faqs: [
      {
        question: "Does it export my entire AI account?",
        answer:
          "No. It exports only the current supported conversation open in the selected tab.",
      },
      {
        question: "Can I export only assistant replies?",
        answer:
          "Yes. Choose Replies only in AI / Chat customization before creating the PDF.",
      },
      {
        question: "Are conversation images included?",
        answer:
          "Available conversation images are included unless you enable Remove images. An inaccessible asset is replaced without stopping the whole export.",
      },
    ],
    related: [
      "chrome-extension/chatgpt-to-pdf",
      "chrome-extension/claude-to-pdf",
      "chrome-extension/messenger-chat-to-pdf",
    ],
  },
  "chrome-extension/messenger-chat-to-pdf": {
    route: "chrome-extension/messenger-chat-to-pdf",
    title: "Messenger Chat to PDF for Chrome",
    description:
      "Save the current supported WhatsApp or Telegram conversation as a clean PDF from the browser tab you already have open.",
    eyebrow: "MESSENGER CHAT TO PDF",
    heading: "Save the open WhatsApp or Telegram conversation",
    lead:
      "Use the AI / Chat output style to export the current supported messenger thread without the surrounding inbox and navigation interface.",
    demo: chatDemo,
    steps: commonSteps,
    supportedTitle: "Supported messenger workflows",
    supported: [
      "The current conversation in WhatsApp Web",
      "The current Telegram Web chat or channel",
      "All messages or replies-only output where the platform exposes roles",
      "Optional removal of available media and links",
    ],
    limitsTitle: "Not an account backup",
    limits: [
      "The extension does not export all WhatsApp or Telegram chats in one operation.",
      "Slack, Instagram, Messenger, Discord, and Teams are not currently supported live adapters.",
      "Only messages loaded or retrievable in the current browser conversation can be exported.",
    ],
    privacy,
    faqs: [
      {
        question: "Can it export every WhatsApp chat at once?",
        answer:
          "No. Open the conversation you need and export that current thread.",
      },
      {
        question: "Does Telegram channel export work?",
        answer:
          "The current Telegram Web channel or chat is supported when the extension detects its open conversation layout.",
      },
      {
        question: "Is Slack supported?",
        answer:
          "Not yet. Page 2 PDF does not currently claim a live Slack adapter.",
      },
    ],
    related: [
      "chrome-extension/whatsapp-chat-to-pdf",
      "chrome-extension/telegram-chat-to-pdf",
      "chrome-extension/ai-chat-to-pdf",
    ],
  },
  "chrome-extension/full-page-pdf": {
    route: "chrome-extension/full-page-pdf",
    title: "Save a Full Webpage as PDF in Chrome",
    description:
      "Capture the full scrollable page—not only the viewport—and save it as a portrait or landscape PDF from Chrome.",
    eyebrow: "FULL PAGE PDF",
    heading: "Capture beyond the visible viewport",
    lead:
      "Accurate copy prepares the page, loads the main scrollable content, and creates a multi-page visual PDF from the top of the page to the bottom.",
    demo: webpageDemo,
    steps: commonSteps,
    supportedTitle: "Designed for long pages",
    supported: [
      "Standard window scrolling and large internal content scrollers",
      "Portrait and landscape page orientation",
      "Image-only PDF pages that prioritize visual fidelity",
      "Dynamic content that loads during a bounded scroll pass",
    ],
    limitsTitle: "Known limits",
    limits: [
      "Nested menus, sidebars, and every independent scroller are not expanded as main content.",
      "Virtualized lists that remove old DOM nodes can require a platform-specific workflow.",
      "The capture remains subject to documented height, file-size, and processing limits.",
    ],
    privacy,
    faqs: [
      {
        question: "Why does Chrome Print sometimes save only what I can see?",
        answer:
          "Some apps lock the window and scroll inside a main content container. Page 2 PDF detects and prepares that main area before capture.",
      },
      {
        question: "Is the result selectable?",
        answer:
          "Accurate copy is image-only. Choose Editable document when selectable text and links are more important than pixel-level appearance.",
      },
      {
        question: "Does the page return to its original position?",
        answer:
          "The capture workflow restores the page scroll position and temporary layout changes after processing.",
      },
    ],
    related: [
      "chrome-extension/webpage-to-pdf",
      "chrome-extension/chrome-print-vs-page-2-pdf",
      "chrome-extension/webpage-to-pdf-with-links",
    ],
  },
  "chrome-extension/webpage-to-pdf-with-links": {
    route: "chrome-extension/webpage-to-pdf-with-links",
    title: "Convert a Webpage to PDF with Links",
    description:
      "Save the current Chrome page as a PDF with selectable text and available clickable links using Editable document mode.",
    eyebrow: "PDF WITH LINKS",
    heading: "Keep selectable text and available links",
    lead:
      "Editable document uses Chromium PDF output after preparing the complete page. Keep links enabled and remove only the content you do not need.",
    demo: editableDemo,
    steps: commonSteps,
    supportedTitle: "Editable document controls",
    supported: [
      "Selectable text where the source page exposes real text",
      "Available clickable links when Remove links is off",
      "Optional removal of images and styling",
      "Portrait or landscape output and screen or print-optimized profiles",
    ],
    limitsTitle: "What editable means here",
    limits: [
      "The extension does not provide a built-in PDF editor.",
      "Text drawn inside images, canvases, or inaccessible embedded viewers may not become selectable.",
      "Some sites alter their layout under print styles; use As viewed when screen layout matters.",
    ],
    privacy,
    faqs: [
      {
        question: "How do I keep links in the PDF?",
        answer:
          "Choose Editable document and leave Remove links unchecked before selecting Get PDF.",
      },
      {
        question: "Can I remove page styling?",
        answer:
          "Yes. Remove styling creates a simpler document-oriented result while keeping the available content structure.",
      },
      {
        question: "What is the project ZIP?",
        answer:
          "It is an optional project archive of the captured material. Page 2 PDF does not currently import or edit that archive.",
      },
    ],
    related: [
      "chrome-extension/webpage-to-pdf",
      "chrome-extension/html-page-to-pdf",
      "chrome-extension/full-page-pdf",
    ],
  },
  "chrome-extension/html-page-to-pdf": {
    route: "chrome-extension/html-page-to-pdf",
    title: "Save an Open HTML Page as PDF",
    description:
      "Open an HTML page or local HTML file in Chrome, then save that active tab as a full-page PDF with Page 2 PDF.",
    eyebrow: "HTML PAGE TO PDF",
    heading: "Save the HTML page already open in Chrome",
    lead:
      "Page 2 PDF works with the active browser tab. Open the HTML document first, choose the output style, and preview the generated PDF.",
    demo: editableDemo,
    steps: commonSteps,
    supportedTitle: "Works with the active HTML document",
    supported: [
      "Public pages already open in Chrome",
      "Local HTML files Chrome is allowed to expose to the extension",
      "Accurate copy and Editable document output styles",
      "Portrait and landscape orientation",
    ],
    limitsTitle: "No remote URL upload",
    limits: [
      "There is no URL input box or server-side HTML conversion endpoint.",
      "Chrome may require you to enable file URL access for local files.",
      "Scripts, protected frames, or blocked assets remain subject to browser permissions.",
    ],
    privacy,
    faqs: [
      {
        question: "Can I paste HTML source into the extension?",
        answer:
          "No. Render the HTML as a page in Chrome, then run Page 2 PDF on that active tab.",
      },
      {
        question: "Does it work with local HTML files?",
        answer:
          "It can when Chrome grants the extension access to file URLs and the local page can load its own assets.",
      },
      {
        question: "Which output should I choose?",
        answer:
          "Use Accurate copy for appearance or Editable document for selectable text and available links.",
      },
    ],
    related: [
      "chrome-extension/webpage-to-pdf",
      "chrome-extension/webpage-to-pdf-with-links",
      "chrome-extension/chrome-print-vs-page-2-pdf",
    ],
  },
  "chrome-extension/chatgpt-to-pdf": {
    route: "chrome-extension/chatgpt-to-pdf",
    title: "Export a ChatGPT Conversation to PDF",
    description:
      "Save the current ChatGPT conversation as a clean PDF with ordered messages, available links, and optional media removal.",
    eyebrow: "CHATGPT TO PDF",
    heading: "Export the ChatGPT conversation you have open",
    lead:
      "Page 2 PDF formats the current supported ChatGPT thread for reading and sharing without exporting the surrounding sidebar and account interface.",
    demo: chatDemo,
    steps: commonSteps,
    supportedTitle: "ChatGPT export options",
    supported: [
      "The current conversation open in ChatGPT",
      "All messages or assistant replies only",
      "Available images, code, lists, and links",
      "Optional removal of images, video references, audio references, or links",
    ],
    limitsTitle: "Conversation-level export",
    limits: [
      "This is not an account-wide ChatGPT export or backup.",
      "Open the exact conversation you want before starting the extension.",
      "ChatGPT interface changes can require an adapter update.",
    ],
    privacy,
    faqs: [
      {
        question: "Can it export all my ChatGPT conversations?",
        answer:
          "No. It exports the current supported conversation in the active tab.",
      },
      {
        question: "Can it keep code formatting?",
        answer:
          "The chat serializer preserves supported code and list structure in the clean print layout.",
      },
      {
        question: "Can I save assistant answers only?",
        answer:
          "Yes. Select Replies only before creating the PDF.",
      },
    ],
    related: [
      "chrome-extension/ai-chat-to-pdf",
      "chrome-extension/claude-to-pdf",
      "chrome-extension/messenger-chat-to-pdf",
    ],
  },
  "chrome-extension/claude-to-pdf": {
    route: "chrome-extension/claude-to-pdf",
    title: "Export a Claude Conversation to PDF",
    description:
      "Save the current Claude conversation as a clean PDF, including ordered messages and available conversation images and links.",
    eyebrow: "CLAUDE TO PDF",
    heading: "Save the Claude conversation you have open",
    lead:
      "Page 2 PDF groups Claude transcript rows, keeps user and assistant messages in order, and hydrates available conversation attachments for print.",
    demo: chatDemo,
    steps: commonSteps,
    supportedTitle: "Claude export coverage",
    supported: [
      "The current supported Claude transcript",
      "User and assistant messages in conversation order",
      "Available user attachments and assistant images inside transcript rows",
      "Links, lists, code, and optional media removal",
    ],
    limitsTitle: "What stays outside the PDF",
    limits: [
      "Project drawers, sidebars, file pickers, and duplicate hidden thumbnails are excluded.",
      "The extension does not export every Claude conversation in the account.",
      "An attachment that cannot be retrieved after a retry appears as a placeholder.",
    ],
    privacy,
    faqs: [
      {
        question: "Are Claude image attachments included?",
        answer:
          "Available images inside the conversation transcript are included unless Remove images is enabled.",
      },
      {
        question: "Does it include files from a closed drawer?",
        answer:
          "No. Hidden drawer thumbnails and other interface duplicates outside the transcript are excluded.",
      },
      {
        question: "Will one broken image stop the export?",
        answer:
          "No. The image is retried, then replaced with a placeholder if it remains unavailable.",
      },
    ],
    related: [
      "chrome-extension/ai-chat-to-pdf",
      "chrome-extension/chatgpt-to-pdf",
      "chrome-extension/webpage-to-pdf",
    ],
  },
  "chrome-extension/whatsapp-chat-to-pdf": {
    route: "chrome-extension/whatsapp-chat-to-pdf",
    title: "Export a WhatsApp Chat to PDF",
    description:
      "Save the current WhatsApp Web conversation as a clean PDF with ordered messages and optional media and link removal.",
    eyebrow: "WHATSAPP CHAT TO PDF",
    heading: "Save the open WhatsApp Web conversation",
    lead:
      "Page 2 PDF loads the current supported thread, formats its messages in a clean document, and prints it without switching you to a service tab.",
    demo: chatDemo,
    steps: commonSteps,
    supportedTitle: "WhatsApp Web workflow",
    supported: [
      "The current conversation open in WhatsApp Web",
      "Messages that the bounded history-loading workflow can retrieve",
      "Available text, links, images, video references, and voice-message references",
      "Optional removal of individual media categories",
    ],
    limitsTitle: "Not a bulk chat backup",
    limits: [
      "Page 2 PDF does not export every WhatsApp chat at once.",
      "Messages that WhatsApp Web cannot load in the current session cannot be included.",
      "The source tab must remain open while the conversation is being prepared.",
    ],
    privacy,
    faqs: [
      {
        question: "Does it use WhatsApp's Export Chat menu?",
        answer:
          "No. It works with the current WhatsApp Web conversation open in Chrome.",
      },
      {
        question: "Can I remove voice messages?",
        answer:
          "Yes. Use the Remove audio & voice messages option before export.",
      },
      {
        question: "Can it export all chats?",
        answer:
          "No. Each export is limited to the current supported conversation.",
      },
    ],
    related: [
      "chrome-extension/messenger-chat-to-pdf",
      "chrome-extension/telegram-chat-to-pdf",
      "chrome-extension/ai-chat-to-pdf",
    ],
  },
  "chrome-extension/telegram-chat-to-pdf": {
    route: "chrome-extension/telegram-chat-to-pdf",
    title: "Export a Telegram Chat to PDF",
    description:
      "Save the current Telegram Web chat or channel as a clean PDF with ordered messages and optional media and links.",
    eyebrow: "TELEGRAM CHAT TO PDF",
    heading: "Save the open Telegram Web chat or channel",
    lead:
      "Page 2 PDF uses the current supported Telegram conversation, prepares its available history, and creates a clean PDF preview.",
    demo: chatDemo,
    steps: commonSteps,
    supportedTitle: "Telegram Web workflow",
    supported: [
      "The current Telegram Web chat or channel",
      "Available ordered messages from the open conversation",
      "Links and supported media when enabled",
      "All messages or replies-only scope where message roles are available",
    ],
    limitsTitle: "Current-conversation scope",
    limits: [
      "The extension does not export every Telegram conversation at once.",
      "Unavailable history and protected assets cannot be reconstructed outside the active session.",
      "Telegram markup changes can require an adapter update.",
    ],
    privacy,
    faqs: [
      {
        question: "Can I export a Telegram channel?",
        answer:
          "Yes, when the current Telegram Web channel is detected by the supported adapter.",
      },
      {
        question: "Are links clickable?",
        answer:
          "Available links are preserved unless Remove links is enabled.",
      },
      {
        question: "Does it export my whole Telegram account?",
        answer:
          "No. It exports only the current supported chat or channel.",
      },
    ],
    related: [
      "chrome-extension/messenger-chat-to-pdf",
      "chrome-extension/whatsapp-chat-to-pdf",
      "chrome-extension/ai-chat-to-pdf",
    ],
  },
  "chrome-extension/chrome-print-vs-page-2-pdf": {
    route: "chrome-extension/chrome-print-vs-page-2-pdf",
    title: "Chrome Print vs Page 2 PDF",
    description:
      "Compare Chrome Print with Page 2 PDF for long pages, screen appearance, selectable content, and supported browser chats.",
    eyebrow: "CHROME PRINT ALTERNATIVE",
    heading: "Choose the right PDF workflow for the page",
    lead:
      "Chrome Print is useful for standard documents. Page 2 PDF adds full-page preparation, a visual capture mode, content controls, and clean supported-chat export.",
    demo: editableDemo,
    steps: commonSteps,
    supportedTitle: "Where Page 2 PDF adds control",
    supported: [
      "Accurate copy for appearance-first capture",
      "Editable document for selectable text and available links",
      "Detection of a large internal page scroller before capture",
      "Clean export for supported AI and messenger conversations",
    ],
    limitsTitle: "When Chrome Print may be enough",
    limits: [
      "A short, print-styled document may already print correctly with Chrome.",
      "Page 2 PDF does not bypass site permissions or retrieve content that the open page cannot access.",
      "No mode guarantees identical output for every site-specific layout.",
    ],
    privacy,
    faqs: [
      {
        question: "Does Page 2 PDF replace Chrome Print?",
        answer:
          "It adds specialized workflows. Chrome Print remains suitable for simple pages that already have good print styles.",
      },
      {
        question: "Which mode looks most like the screen?",
        answer:
          "Accurate copy prioritizes the visual appearance of the prepared page.",
      },
      {
        question: "Which mode keeps text selectable?",
        answer:
          "Editable document uses Chromium PDF output to preserve available text and links.",
      },
    ],
    related: [
      "chrome-extension/full-page-pdf",
      "chrome-extension/webpage-to-pdf-with-links",
      "chrome-extension/webpage-to-pdf",
    ],
  },
};

export const getExtensionSeoLanding = (
  route: ExtensionSeoRoute,
): ExtensionSeoLandingContent => content[route];

export const extensionSeoLandingContent: ReadonlyArray<ExtensionSeoLandingContent> =
  Object.values(content);
