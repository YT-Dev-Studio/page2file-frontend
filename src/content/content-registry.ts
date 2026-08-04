import type { ComponentType } from "react";
import Article01 from "../../content/blog/save-webpage-as-pdf.mdx";
import RuArticle01 from "../../content/ru/blog/save-webpage-as-pdf.mdx";
import Article02 from "../../content/blog/why-print-to-pdf-breaks.mdx";
import RuArticle02 from "../../content/ru/blog/why-print-to-pdf-breaks.mdx";
import Article03 from "../../content/blog/capture-full-webpage-as-pdf.mdx";
import RuArticle03 from "../../content/ru/blog/capture-full-webpage-as-pdf.mdx";
import Article04 from "../../content/blog/long-webpage-page-breaks.mdx";
import RuArticle04 from "../../content/ru/blog/long-webpage-page-breaks.mdx";
import Article05 from "../../content/blog/preserve-clickable-links.mdx";
import RuArticle05 from "../../content/ru/blog/preserve-clickable-links.mdx";
import Article06 from "../../content/blog/visual-vs-editable.mdx";
import RuArticle06 from "../../content/ru/blog/visual-vs-editable.mdx";
import Article07 from "../../content/blog/html-to-pdf-safely.mdx";
import RuArticle07 from "../../content/ru/blog/html-to-pdf-safely.mdx";
import Article08 from "../../content/blog/multi-page-website-to-pdf.mdx";
import RuArticle08 from "../../content/ru/blog/multi-page-website-to-pdf.mdx";
import Article09 from "../../content/blog/webpage-to-powerpoint.mdx";
import RuArticle09 from "../../content/ru/blog/webpage-to-powerpoint.mdx";
import Article10 from "../../content/blog/website-to-powerpoint.mdx";
import RuArticle10 from "../../content/ru/blog/website-to-powerpoint.mdx";
import Article11 from "../../content/blog/html-to-powerpoint.mdx";
import RuArticle11 from "../../content/ru/blog/html-to-powerpoint.mdx";
import Article12 from "../../content/blog/sections-to-slides.mdx";
import RuArticle12 from "../../content/ru/blog/sections-to-slides.mdx";
import Article13 from "../../content/blog/screenshot-vs-editable-powerpoint.mdx";
import RuArticle13 from "../../content/ru/blog/screenshot-vs-editable-powerpoint.mdx";
import Article14 from "../../content/blog/save-authenticated-webpage-as-pdf.mdx";
import RuArticle14 from "../../content/ru/blog/save-authenticated-webpage-as-pdf.mdx";
import Article15 from "../../content/blog/website-types-to-pdf-or-powerpoint.mdx";
import RuArticle15 from "../../content/ru/blog/website-types-to-pdf-or-powerpoint.mdx";
import Article16 from "../../content/blog/webpage-capture-vs-web-scraping.mdx";
import RuArticle16 from "../../content/ru/blog/webpage-capture-vs-web-scraping.mdx";
import Article17 from "../../content/blog/export-ai-chats-privately.mdx";
import RuArticle17 from "../../content/ru/blog/export-ai-chats-privately.mdx";
import Article18 from "../../content/blog/export-chatgpt-conversation-to-pdf.mdx";
import RuArticle18 from "../../content/ru/blog/export-chatgpt-conversation-to-pdf.mdx";
import Article19 from "../../content/blog/export-claude-chat-to-pdf.mdx";
import RuArticle19 from "../../content/ru/blog/export-claude-chat-to-pdf.mdx";
import Article20 from "../../content/blog/export-gemini-chat-to-pdf.mdx";
import RuArticle20 from "../../content/ru/blog/export-gemini-chat-to-pdf.mdx";
import Article21 from "../../content/blog/export-other-ai-chats-to-pdf.mdx";
import RuArticle21 from "../../content/ru/blog/export-other-ai-chats-to-pdf.mdx";
import Article22 from "../../content/blog/export-whatsapp-chat-to-pdf.mdx";
import RuArticle22 from "../../content/ru/blog/export-whatsapp-chat-to-pdf.mdx";
import Article23 from "../../content/blog/export-telegram-chat-to-pdf.mdx";
import RuArticle23 from "../../content/ru/blog/export-telegram-chat-to-pdf.mdx";
import Article24 from "../../content/blog/export-browser-messenger-chats-to-pdf.mdx";
import RuArticle24 from "../../content/ru/blog/export-browser-messenger-chats-to-pdf.mdx";
import type { Locale } from "@/shared/i18n/locales";

export type ContentKind = "blog" | "update";

export type ContentEntry = {
  kind: ContentKind;
  slug: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  component: ComponentType;
};

export const blogEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "blog",
    slug: "save-webpage-as-pdf",
    image: "/blog/mocks/save-webpage-as-pdf.webp",
    imageAlt: "A long browser page becoming a clean stack of PDF pages",
    title: "How to Save a Webpage as a PDF",
    description: "Save a public or signed-in webpage as PDF, choose screenshot or editable output, review page breaks, and understand the temporary preview boundary.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-01",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article01,
  },
  {
    kind: "blog",
    slug: "why-print-to-pdf-breaks",
    image: "/blog/mocks/why-print-to-pdf-breaks.webp",
    imageAlt: "A browser print path compared with a webpage capture path",
    title: "URL to PDF vs Browser Print: Which Captures More?",
    description: "Compare URL-to-PDF conversion with browser Print, including print styles, lazy content, private tabs, visual fidelity, and editable output.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-09",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article02,
  },
  {
    kind: "blog",
    slug: "capture-full-webpage-as-pdf",
    image: "/blog/mocks/capture-full-webpage-as-pdf.webp",
    imageAlt: "A full scrolling browser page flowing into a PDF document",
    title: "How to Capture a Full Webpage as a PDF",
    description: "Capture a complete scrolling webpage as PDF by defining its boundary, loading dynamic sections, reviewing page breaks, and respecting access limits.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article03,
  },
  {
    kind: "blog",
    slug: "long-webpage-page-breaks",
    image: "/blog/mocks/long-webpage-page-breaks.webp",
    imageAlt: "A long webpage divided at readable PDF page boundaries",
    title: "How to Convert a Long Webpage Without Broken Page Breaks",
    description: "Prepare long webpages for PDF, keep headings and tables together, load dynamic content, and correct awkward boundaries in section preview.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-04",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article04,
  },
  {
    kind: "blog",
    slug: "preserve-clickable-links",
    image: "/blog/mocks/preserve-clickable-links.webp",
    imageAlt: "Browser links carried into an editable PDF document",
    title: "How to Preserve Clickable Links in a Webpage PDF",
    description: "Learn when webpage links remain clickable in PDF, why screenshot capture flattens interaction, and how editable mode handles safe link targets.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article05,
  },
  {
    kind: "blog",
    slug: "visual-vs-editable",
    image: "/blog/mocks/visual-vs-editable.webp",
    imageAlt: "A screenshot webpage compared with editable document blocks",
    title: "Screenshot vs Editable Webpage Conversion",
    description: "Choose between faithful screenshot capture and editable webpage conversion by comparing text, links, images, charts, layouts, and PowerPoint output.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-03",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article06,
  },
  {
    kind: "blog",
    slug: "html-to-pdf-safely",
    image: "/blog/mocks/html-to-pdf-safely.webp",
    imageAlt: "HTML content isolated before becoming a clean PDF",
    title: "How to Convert HTML to PDF Safely",
    description: "Convert an uploaded HTML file to PDF while treating scripts, remote resources, file access, and private network targets as security boundaries.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-07",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article07,
  },
  {
    kind: "blog",
    slug: "multi-page-website-to-pdf",
    image: "/blog/mocks/multi-page-website-to-pdf.webp",
    imageAlt: "A website map becoming several separate PDF documents",
    title: "How to Convert a Multi-Page Website to PDF",
    description: "Turn accessible pages from one website into separate PDF files, define a crawl boundary, review failures, and avoid promising one merged document.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-08",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article08,
  },
  {
    kind: "blog",
    slug: "webpage-to-powerpoint",
    image: "/blog/mocks/webpage-to-powerpoint.webp",
    imageAlt: "One webpage reorganized into a PowerPoint slide deck",
    title: "How to Convert a Webpage to PowerPoint",
    description: "Convert one webpage to PowerPoint, choose screenshot or editable slides, define useful sections, and review the PPTX before downloading.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-05",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article09,
  },
  {
    kind: "blog",
    slug: "website-to-powerpoint",
    image: "/blog/mocks/website-to-powerpoint.webp",
    imageAlt: "A website map flowing into separate PowerPoint decks",
    title: "How to Convert a Website to PowerPoint",
    description: "Convert accessible website pages into separate PowerPoint files, keep the page boundary explicit, and review screenshot or editable slide output.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article10,
  },
  {
    kind: "blog",
    slug: "html-to-powerpoint",
    image: "/blog/mocks/html-to-powerpoint.webp",
    imageAlt: "Rendered HTML blocks moving from a browser into slides",
    title: "How to Convert HTML Web Content to PowerPoint",
    description: "Move rendered HTML web content into PowerPoint by selecting useful sections, choosing screenshot or editable slides, and reviewing complex fallbacks.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article11,
  },
  {
    kind: "blog",
    slug: "sections-to-slides",
    image: "/blog/mocks/sections-to-slides.webp",
    imageAlt: "Webpage sections arranged as separate PowerPoint slides",
    title: "How Webpage Sections Become PowerPoint Slides",
    description: "Use webpage hierarchy to set slide boundaries, preserve context, split dense sections, and review screenshot or editable PowerPoint output.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-10",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article12,
  },
  {
    kind: "blog",
    slug: "screenshot-vs-editable-powerpoint",
    image: "/blog/mocks/screenshot-vs-editable-powerpoint.webp",
    imageAlt: "Screenshot slides compared with editable PowerPoint elements",
    title: "Screenshot Slides vs Editable PowerPoint from a Webpage",
    description: "Compare screenshot slides with editable PowerPoint output for layout fidelity, selectable text, links, charts, maintenance, and accessibility.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article13,
  },
  {
    kind: "blog",
    slug: "save-authenticated-webpage-as-pdf",
    image: "/blog/mocks/save-authenticated-webpage-as-pdf.webp",
    imageAlt: "A protected browser tab becoming a private PDF copy",
    title: "How to Save a Webpage Behind a Login as a PDF",
    description: "Save a signed-in webpage from the active Chrome tab without giving a URL converter your credentials, then review privacy and capture limits.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article14,
  },
  {
    kind: "blog",
    slug: "website-types-to-pdf-or-powerpoint",
    image: "/blog/mocks/website-types-to-pdf-or-powerpoint.webp",
    imageAlt: "Different website types converging into PDFs and slide decks",
    title: "What Types of Websites Can You Export to PDF or PowerPoint?",
    description: "See how articles, documentation, dashboards, shops, learning pages, web apps, AI chats, and browser messengers fit PDF or PowerPoint export.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article15,
  },
  {
    kind: "blog",
    slug: "webpage-capture-vs-web-scraping",
    image: "/blog/mocks/webpage-capture-vs-web-scraping.webp",
    imageAlt: "A browser page branching into a document and a data table",
    title: "Webpage Capture vs Web Scraping: Which One Do You Need?",
    description: "Choose webpage capture for a readable screenshot document or web scraping for structured data, and avoid treating Page 2 File as a crawler API.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article16,
  },
  {
    kind: "blog",
    slug: "export-ai-chats-privately",
    image: "/blog/mocks/export-ai-chats-privately.webp",
    imageAlt: "A private AI conversation passing through a shield into PDF",
    title: "How to Export AI Chats to PDF Privately",
    description: "Export visible AI conversations from an active browser tab, define the message range, choose a PDF mode, and understand temporary preview data.",
    author: "Page 2 File editorial",
    publishedAt: "2026-07-06",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article17,
  },
  {
    kind: "blog",
    slug: "export-chatgpt-conversation-to-pdf",
    image: "/blog/mocks/export-chatgpt-conversation-to-pdf.webp",
    imageAlt: "A generic AI browser conversation becoming a PDF document",
    title: "How to Export a ChatGPT Conversation to PDF",
    description: "Prepare a visible ChatGPT conversation, load the needed range, choose screenshot or editable PDF, and distinguish tab capture from account export.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article18,
  },
  {
    kind: "blog",
    slug: "export-claude-chat-to-pdf",
    image: "/blog/mocks/export-claude-chat-to-pdf.webp",
    imageAlt: "A generic AI chat and artifact panel becoming a PDF",
    title: "How to Export a Claude Chat to PDF",
    description: "Capture a visible Claude conversation and artifact area as PDF, choose a readable boundary, and compare it with Claude account data export.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article19,
  },
  {
    kind: "blog",
    slug: "export-gemini-chat-to-pdf",
    image: "/blog/mocks/export-gemini-chat-to-pdf.webp",
    imageAlt: "An AI chat with source cards and images becoming a PDF",
    title: "How to Export a Gemini Chat to PDF",
    description: "Save a visible Gemini conversation with citations and images as PDF, load the required content, and distinguish capture from Google Takeout.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article20,
  },
  {
    kind: "blog",
    slug: "export-other-ai-chats-to-pdf",
    image: "/blog/mocks/export-other-ai-chats-to-pdf.webp",
    imageAlt: "Several generic AI chat tabs converging into one PDF",
    title: "How to Export Grok, DeepSeek, Perplexity, or Copilot Chats",
    description: "Export visible Grok, DeepSeek, Perplexity, or Copilot chats from a browser tab while respecting loaded content, privacy, and platform limits.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article21,
  },
  {
    kind: "blog",
    slug: "export-whatsapp-chat-to-pdf",
    image: "/blog/mocks/export-whatsapp-chat-to-pdf.webp",
    imageAlt: "A generic personal web messenger conversation becoming a PDF",
    title: "How to Export a WhatsApp Chat to PDF",
    description: "Prepare a conversation in WhatsApp Web, load the required messages and media, choose a PDF mode, and understand the active-tab boundary.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article22,
  },
  {
    kind: "blog",
    slug: "export-telegram-chat-to-pdf",
    image: "/blog/mocks/export-telegram-chat-to-pdf.webp",
    imageAlt: "A generic channel conversation flowing through a shield into PDF",
    title: "How to Export a Telegram Chat to PDF",
    description: "Prepare a Telegram Web chat or channel, load replies and media, choose screenshot or editable PDF, and review the captured message boundary.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article23,
  },
  {
    kind: "blog",
    slug: "export-browser-messenger-chats-to-pdf",
    image: "/blog/mocks/export-browser-messenger-chats-to-pdf.webp",
    imageAlt: "Several browser messenger panels converging into PDF documents",
    title: "How to Export Browser Messenger Chats to PDF",
    description: "Export visible chats from Discord Web, Slack Web, Teams, Messenger, or Instagram DMs and understand why native-only apps are excluded.",
    author: "Page 2 File editorial",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: Article24,
  },
];

export const updateEntries: ReadonlyArray<ContentEntry> = [];

const russianBlogEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "blog",
    slug: "save-webpage-as-pdf",
    image: "/blog/mocks/save-webpage-as-pdf.webp",
    imageAlt: "Длинная веб-страница превращается в аккуратную стопку страниц PDF",
    title: "Как сохранить веб-страницу в PDF",
    description: "Сохраните открытую или закрытую веб-страницу в PDF, выберите режим скриншотов или редактируемый режим и проверьте разрывы в предпросмотре.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-01",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle01,
  },
  {
    kind: "blog",
    slug: "why-print-to-pdf-breaks",
    image: "/blog/mocks/why-print-to-pdf-breaks.webp",
    imageAlt: "Сравнение печати браузера и захвата веб-страницы",
    title: "URL в PDF или печать браузера: что захватит больше",
    description: "Сравните конвертацию URL в PDF с печатью браузера: print-стили, ленивая загрузка, закрытые вкладки, внешний вид и редактируемый текст.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-09",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle02,
  },
  {
    kind: "blog",
    slug: "capture-full-webpage-as-pdf",
    image: "/blog/mocks/capture-full-webpage-as-pdf.webp",
    imageAlt: "Полная прокручиваемая веб-страница переходит в документ PDF",
    title: "Как захватить полную веб-страницу в PDF",
    description: "Захватите полную прокручиваемую страницу в PDF: определите границы, загрузите динамические блоки, проверьте разрывы и ограничения доступа.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle03,
  },
  {
    kind: "blog",
    slug: "long-webpage-page-breaks",
    image: "/blog/mocks/long-webpage-page-breaks.webp",
    imageAlt: "Длинная веб-страница разделена по читаемым границам PDF",
    title: "Как конвертировать длинную страницу без плохих разрывов",
    description: "Подготовьте длинную страницу к PDF, не отделяйте заголовки от текста, загрузите динамический контент и исправьте границы в предпросмотре.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-04",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle04,
  },
  {
    kind: "blog",
    slug: "preserve-clickable-links",
    image: "/blog/mocks/preserve-clickable-links.webp",
    imageAlt: "Ссылки из браузера переносятся в редактируемый документ PDF",
    title: "Как сохранить кликабельные ссылки в PDF веб-страницы",
    description: "Разберитесь, когда ссылки остаются кликабельными в PDF, почему захват скриншотами убирает интерактивность и как работает редактируемый режим.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle05,
  },
  {
    kind: "blog",
    slug: "visual-vs-editable",
    image: "/blog/mocks/visual-vs-editable.webp",
    imageAlt: "Веб-страница в режиме скриншотов сравнивается с редактируемыми блоками",
    title: "Режим скриншотов и редактируемая конвертация веб-страниц",
    description: "Сравните захват скриншотами и редактируемую конвертацию по тексту, ссылкам, изображениям, графикам, макетам и результату PowerPoint.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-03",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle06,
  },
  {
    kind: "blog",
    slug: "html-to-pdf-safely",
    image: "/blog/mocks/html-to-pdf-safely.webp",
    imageAlt: "HTML-контент изолируется перед созданием аккуратного PDF",
    title: "Как безопасно конвертировать HTML в PDF",
    description: "Конвертируйте загруженный HTML-файл в PDF, учитывая риски скриптов, удалённых ресурсов, доступа к файлам и адресам приватной сети.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-07",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle07,
  },
  {
    kind: "blog",
    slug: "multi-page-website-to-pdf",
    image: "/blog/mocks/multi-page-website-to-pdf.webp",
    imageAlt: "Карта сайта превращается в несколько отдельных документов PDF",
    title: "Как конвертировать многостраничный сайт в PDF",
    description: "Преобразуйте доступные страницы сайта в отдельные PDF, задайте границы обхода, проверьте ошибки и не путайте результат с единым документом.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-08",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle08,
  },
  {
    kind: "blog",
    slug: "webpage-to-powerpoint",
    image: "/blog/mocks/webpage-to-powerpoint.webp",
    imageAlt: "Одна веб-страница преобразуется в презентацию PowerPoint",
    title: "Как конвертировать веб-страницу в PowerPoint",
    description: "Конвертируйте одну веб-страницу в PowerPoint, выберите снимки или редактируемые слайды, задайте секции и проверьте PPTX перед скачиванием.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-05",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle09,
  },
  {
    kind: "blog",
    slug: "website-to-powerpoint",
    image: "/blog/mocks/website-to-powerpoint.webp",
    imageAlt: "Карта сайта переходит в отдельные презентации PowerPoint",
    title: "Как конвертировать сайт в PowerPoint",
    description: "Конвертируйте доступные страницы сайта в отдельные презентации PowerPoint, соблюдайте границы и проверяйте слайды-скриншоты или редактируемые слайды.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle10,
  },
  {
    kind: "blog",
    slug: "html-to-powerpoint",
    image: "/blog/mocks/html-to-powerpoint.webp",
    imageAlt: "Отображаемые HTML-блоки переходят из браузера на слайды",
    title: "Как конвертировать HTML-контент сайта в PowerPoint",
    description: "Перенесите отображаемый HTML-контент в PowerPoint: выберите полезные секции, режим слайдов и проверьте замену сложных элементов.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle11,
  },
  {
    kind: "blog",
    slug: "sections-to-slides",
    image: "/blog/mocks/sections-to-slides.webp",
    imageAlt: "Секции веб-страницы располагаются на отдельных слайдах PowerPoint",
    title: "Как секции веб-страницы становятся слайдами PowerPoint",
    description: "Используйте иерархию страницы для границ слайдов, сохраняйте контекст, делите плотные секции и проверяйте результат PowerPoint.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-10",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle12,
  },
  {
    kind: "blog",
    slug: "screenshot-vs-editable-powerpoint",
    image: "/blog/mocks/screenshot-vs-editable-powerpoint.webp",
    imageAlt: "Слайды-снимки сравниваются с редактируемыми элементами PowerPoint",
    title: "Снимки или редактируемый PowerPoint из веб-страницы",
    description: "Сравните слайды-снимки и редактируемый PowerPoint по точности макета, тексту, ссылкам, графикам, поддержке и доступности.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle13,
  },
  {
    kind: "blog",
    slug: "save-authenticated-webpage-as-pdf",
    image: "/blog/mocks/save-authenticated-webpage-as-pdf.webp",
    imageAlt: "Защищённая вкладка браузера превращается в приватную копию PDF",
    title: "Как сохранить страницу после входа в PDF",
    description: "Сохраните страницу после входа из активной вкладки Chrome без передачи пароля URL-конвертеру и проверьте границы захвата и приватности.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle14,
  },
  {
    kind: "blog",
    slug: "website-types-to-pdf-or-powerpoint",
    image: "/blog/mocks/website-types-to-pdf-or-powerpoint.webp",
    imageAlt: "Разные типы сайтов переходят в документы PDF и презентации",
    title: "Какие сайты можно экспортировать в PDF или PowerPoint",
    description: "Узнайте, как статьи, документация, дашборды, магазины, учебные страницы, веб-приложения, AI-чаты и мессенджеры подходят для экспорта.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle15,
  },
  {
    kind: "blog",
    slug: "webpage-capture-vs-web-scraping",
    image: "/blog/mocks/webpage-capture-vs-web-scraping.webp",
    imageAlt: "Веб-страница разделяется на документ и таблицу данных",
    title: "Захват веб-страницы или парсинг: что вам нужно",
    description: "Выберите захват для читаемого документа со скриншотами или парсинг для структурированных данных и не путайте Page 2 File с crawler API.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle16,
  },
  {
    kind: "blog",
    slug: "export-ai-chats-privately",
    image: "/blog/mocks/export-ai-chats-privately.webp",
    imageAlt: "Приватный AI-диалог проходит через защитный экран в PDF",
    title: "Как приватно экспортировать AI-чаты в PDF",
    description: "Экспортируйте видимые AI-диалоги из активной вкладки, задайте диапазон сообщений, выберите режим PDF и учитывайте временные данные предпросмотра.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-07-06",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle17,
  },
  {
    kind: "blog",
    slug: "export-chatgpt-conversation-to-pdf",
    image: "/blog/mocks/export-chatgpt-conversation-to-pdf.webp",
    imageAlt: "Диалог с AI в браузере превращается в документ PDF",
    title: "Как экспортировать диалог ChatGPT в PDF",
    description: "Подготовьте видимый диалог ChatGPT, загрузите нужный диапазон, выберите режим PDF и отличайте захват вкладки от экспорта данных аккаунта.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle18,
  },
  {
    kind: "blog",
    slug: "export-claude-chat-to-pdf",
    image: "/blog/mocks/export-claude-chat-to-pdf.webp",
    imageAlt: "AI-чат и панель артефактов превращаются в PDF",
    title: "Как экспортировать чат Claude в PDF",
    description: "Сохраните видимый диалог Claude и панель артефактов в PDF, задайте читаемые границы и сравните захват с экспортом данных аккаунта.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle19,
  },
  {
    kind: "blog",
    slug: "export-gemini-chat-to-pdf",
    image: "/blog/mocks/export-gemini-chat-to-pdf.webp",
    imageAlt: "AI-чат с карточками источников и изображениями переходит в PDF",
    title: "Как экспортировать чат Gemini в PDF",
    description: "Сохраните видимый диалог Gemini с источниками и изображениями в PDF, загрузите нужный контент и отличайте захват от Google Takeout.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle20,
  },
  {
    kind: "blog",
    slug: "export-other-ai-chats-to-pdf",
    image: "/blog/mocks/export-other-ai-chats-to-pdf.webp",
    imageAlt: "Несколько вкладок с AI-чатами переходят в один PDF",
    title: "Экспорт чатов Grok, DeepSeek, Perplexity и Copilot",
    description: "Экспортируйте видимые чаты Grok, DeepSeek, Perplexity или Copilot из вкладки браузера с учётом загрузки, приватности и ограничений платформ.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle21,
  },
  {
    kind: "blog",
    slug: "export-whatsapp-chat-to-pdf",
    image: "/blog/mocks/export-whatsapp-chat-to-pdf.webp",
    imageAlt: "Диалог в веб-мессенджере превращается в документ PDF",
    title: "Как экспортировать чат WhatsApp в PDF",
    description: "Подготовьте диалог в WhatsApp Web, загрузите нужные сообщения и медиа, выберите режим PDF и учитывайте границы активной вкладки.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle22,
  },
  {
    kind: "blog",
    slug: "export-telegram-chat-to-pdf",
    image: "/blog/mocks/export-telegram-chat-to-pdf.webp",
    imageAlt: "Диалог канала проходит через защитный экран в PDF",
    title: "Как экспортировать чат Telegram в PDF",
    description: "Подготовьте чат или канал Telegram Web, загрузите ответы и медиа, выберите режим PDF и проверьте захваченный диапазон сообщений.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle23,
  },
  {
    kind: "blog",
    slug: "export-browser-messenger-chats-to-pdf",
    image: "/blog/mocks/export-browser-messenger-chats-to-pdf.webp",
    imageAlt: "Несколько чатов в браузере переходят в документы PDF",
    title: "Как экспортировать чаты браузерных мессенджеров в PDF",
    description: "Экспортируйте видимые чаты Discord Web, Slack Web, Teams, Messenger или Instagram DMs и учитывайте ограничение приложений вне браузера.",
    author: "Редакция Page 2 File",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-04",
    readingMinutes: 6,
    component: RuArticle24,
  },
];

const russianUpdateEntries: ReadonlyArray<ContentEntry> = [];

export type ChangelogEntry = {
  version: string;
  date: string;
  added: ReadonlyArray<string>;
  improved: ReadonlyArray<string>;
  fixed: ReadonlyArray<string>;
};

export const changelogEntries: ReadonlyArray<ChangelogEntry> = [
  {
    version: "0.3.0-prototype",
    date: "2026-07-29",
    added: ["PDF and PowerPoint mock converters", "Section preview operations", "15 locale route shells"],
    improved: ["Consent-first analytics boundary", "Route and content validation"],
    fixed: ["Unreviewed locales are excluded from sitemap"],
  },
  {
    version: "0.2.0-prototype",
    date: "2026-07-24",
    added: ["Extension instruction modes", "AI chat export landing cluster"],
    improved: ["Active-tab privacy wording and platform disclaimers"],
    fixed: ["Welcome page indexing policy"],
  },
  {
    version: "0.1.0-prototype",
    date: "2026-07-18",
    added: ["Initial product route map", "Privacy-first no-account foundation"],
    improved: ["Screenshot and editable mode language"],
    fixed: [],
  },
];

const russianChangelogEntries: ReadonlyArray<ChangelogEntry> = [
  {
    version: "0.3.0-prototype",
    date: "2026-07-29",
    added: [
      "Mock-конвертеры PDF и PowerPoint",
      "Операции с секциями в предпросмотре",
      "Маршруты для 16 локалей",
    ],
    improved: [
      "Граница аналитики с предварительным согласием",
      "Проверка маршрутов и контента",
    ],
    fixed: ["Непроверенные локали исключены из sitemap"],
  },
  {
    version: "0.2.0-prototype",
    date: "2026-07-24",
    added: [
      "Два режима инструкции по расширению",
      "Кластер лендингов для экспорта AI-чатов",
    ],
    improved: [
      "Описание приватности активной вкладки и дисклеймеры платформ",
    ],
    fixed: ["Политика индексации welcome-страницы"],
  },
  {
    version: "0.1.0-prototype",
    date: "2026-07-18",
    added: [
      "Начальная карта продуктовых маршрутов",
      "Основа без аккаунтов и с приоритетом конфиденциальности",
    ],
    improved: ["Описание режима скриншотов и редактируемого режима"],
    fixed: [],
  },
];

const findEntry = (
  entries: ReadonlyArray<ContentEntry>,
  slug: string,
): ContentEntry | null => {
  const matchesSlug = (entry: ContentEntry): boolean => entry.slug === slug;
  return entries.find(matchesSlug) ?? null;
};

export const getBlogEntries = (locale: Locale): ReadonlyArray<ContentEntry> =>
  locale === "ru" ? russianBlogEntries : blogEntries;

export const getUpdateEntries = (locale: Locale): ReadonlyArray<ContentEntry> =>
  locale === "ru" ? russianUpdateEntries : updateEntries;

export const getChangelogEntries = (
  locale: Locale,
): ReadonlyArray<ChangelogEntry> =>
  locale === "ru" ? russianChangelogEntries : changelogEntries;

export const getBlogEntry = (
  locale: Locale,
  slug: string,
): ContentEntry | null => findEntry(getBlogEntries(locale), slug);

export const getUpdateEntry = (
  locale: Locale,
  slug: string,
): ContentEntry | null => findEntry(getUpdateEntries(locale), slug);
