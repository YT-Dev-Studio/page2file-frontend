import type { ComponentType } from "react";
import type { Locale } from "@/shared/i18n/locales";
import EnChooseMode from "../../content/blog/choose-webpage-pdf-mode.mdx";
import EnLongPage from "../../content/blog/save-long-dynamic-webpage-to-pdf.mdx";
import EnPrivatePage from "../../content/blog/save-private-or-local-page-to-pdf.mdx";
import EnLinksForms from "../../content/blog/preserve-webpage-links-forms-text.mdx";
import EnDashboard from "../../content/blog/save-dashboard-report-to-pdf.mdx";
import EnResearch from "../../content/blog/save-web-research-to-pdf.mdx";
import EnReceipt from "../../content/blog/save-receipt-order-page-to-pdf.mdx";
import EnPrintCutoff from "../../content/blog/chrome-print-cuts-off-webpage.mdx";
import EnCaptureScraping from "../../content/blog/webpage-capture-vs-web-scraping.mdx";
import EnAiChat from "../../content/blog/export-ai-chat-to-pdf.mdx";
import EnChatGpt from "../../content/blog/export-chatgpt-conversation-to-pdf.mdx";
import EnClaudeGemini from "../../content/blog/export-claude-and-gemini-chat-to-pdf.mdx";
import EnOtherAi from "../../content/blog/export-grok-perplexity-copilot-manus-to-pdf.mdx";
import EnChatBlocks from "../../content/blog/preserve-code-tables-citations-in-chat-pdf.mdx";
import EnChatScope from "../../content/blog/export-ai-replies-only-and-long-chats.mdx";
import EnMessenger from "../../content/blog/export-browser-messenger-chat-to-pdf.mdx";
import EnWhatsapp from "../../content/blog/export-whatsapp-web-chat-to-pdf.mdx";
import EnTelegram from "../../content/blog/export-telegram-web-chat-to-pdf.mdx";
import EnMessengerMatrix from "../../content/blog/supported-and-unsupported-browser-messengers.mdx";
import EnChatArchive from "../../content/blog/chat-pdf-vs-account-data-export.mdx";
import RuChooseMode from "../../content/ru/blog/choose-webpage-pdf-mode.mdx";
import RuLongPage from "../../content/ru/blog/save-long-dynamic-webpage-to-pdf.mdx";
import RuPrivatePage from "../../content/ru/blog/save-private-or-local-page-to-pdf.mdx";
import RuLinksForms from "../../content/ru/blog/preserve-webpage-links-forms-text.mdx";
import RuDashboard from "../../content/ru/blog/save-dashboard-report-to-pdf.mdx";
import RuResearch from "../../content/ru/blog/save-web-research-to-pdf.mdx";
import RuReceipt from "../../content/ru/blog/save-receipt-order-page-to-pdf.mdx";
import RuPrintCutoff from "../../content/ru/blog/chrome-print-cuts-off-webpage.mdx";
import RuCaptureScraping from "../../content/ru/blog/webpage-capture-vs-web-scraping.mdx";
import RuAiChat from "../../content/ru/blog/export-ai-chat-to-pdf.mdx";
import RuChatGpt from "../../content/ru/blog/export-chatgpt-conversation-to-pdf.mdx";
import RuClaudeGemini from "../../content/ru/blog/export-claude-and-gemini-chat-to-pdf.mdx";
import RuOtherAi from "../../content/ru/blog/export-grok-perplexity-copilot-manus-to-pdf.mdx";
import RuChatBlocks from "../../content/ru/blog/preserve-code-tables-citations-in-chat-pdf.mdx";
import RuChatScope from "../../content/ru/blog/export-ai-replies-only-and-long-chats.mdx";
import RuMessenger from "../../content/ru/blog/export-browser-messenger-chat-to-pdf.mdx";
import RuWhatsapp from "../../content/ru/blog/export-whatsapp-web-chat-to-pdf.mdx";
import RuTelegram from "../../content/ru/blog/export-telegram-web-chat-to-pdf.mdx";
import RuMessengerMatrix from "../../content/ru/blog/supported-and-unsupported-browser-messengers.mdx";
import RuChatArchive from "../../content/ru/blog/chat-pdf-vs-account-data-export.mdx";

export type ContentKind = "blog" | "update";

export type ContentEntry = {
  kind: ContentKind;
  locale: Locale;
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

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  points: ReadonlyArray<string>;
};

export const blogEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "blog", locale: "en", slug: "choose-webpage-pdf-mode",
    image: "/blog/mocks/choose-webpage-pdf-mode.webp",
    imageAlt: "Three Page 2 PDF output modes arranged by the result they preserve",
    title: "How to Choose the Right Webpage PDF Mode",
    description: "Compare Accurate copy, Editable document, and AI / Chat before exporting an active Chrome tab, with the tradeoffs each PDF mode accepts.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: EnChooseMode,
  },
  {
    kind: "blog", locale: "en", slug: "save-long-dynamic-webpage-to-pdf",
    image: "/blog/mocks/save-long-dynamic-webpage-to-pdf.webp",
    imageAlt: "A long application page prepared through its main internal scroll area",
    title: "Save a Long Dynamic Webpage as PDF",
    description: "Prepare lazy content and internal scrolling before full-page capture, then check the limits of virtual lists, protected frames, and very tall pages.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: EnLongPage,
  },
  {
    kind: "blog", locale: "en", slug: "save-private-or-local-page-to-pdf",
    image: "/blog/mocks/save-private-or-local-page-to-pdf.webp",
    imageAlt: "A signed-in webpage and local HTML file open in active Chrome tabs",
    title: "Save a Signed-In or Local Page as PDF",
    description: "Use the active Chrome tab for a page you may access or a permitted local HTML file, without sending credentials or implying any access bypass.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: EnPrivatePage,
  },
  {
    kind: "blog", locale: "en", slug: "preserve-webpage-links-forms-text",
    image: "/blog/mocks/preserve-webpage-links-forms-text.webp",
    imageAlt: "Selectable PDF text, safe links, eligible forms, and regional OCR controls",
    title: "Keep Webpage Links, Forms, and Text in PDF",
    description: "Learn what Editable document can retain, which form controls are excluded, how regional OCR is bounded, and what the optional archive contains.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: EnLinksForms,
  },
  {
    kind: "blog", locale: "en", slug: "save-dashboard-report-to-pdf",
    image: "/blog/mocks/save-dashboard-report-to-pdf.webp",
    imageAlt: "A dashboard report with filters, charts, tables, and PDF output choices",
    title: "Save a Dashboard or Web Report as PDF",
    description: "Preserve the selected report state, choose visual or searchable output, and review wide tables, charts, filters, and internal scrolling before sharing.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: EnDashboard,
  },
  {
    kind: "blog", locale: "en", slug: "save-web-research-to-pdf",
    image: "/blog/mocks/save-web-research-to-pdf.webp",
    imageAlt: "A research webpage saved with searchable text, citations, and a visual chart",
    title: "Save Web Research and Sources as PDF",
    description: "Preserve an article, documentation page, or source list with the right balance of searchable text, working references, visual evidence, and context.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: EnResearch,
  },
  {
    kind: "blog", locale: "en", slug: "save-receipt-order-page-to-pdf",
    image: "/blog/mocks/save-receipt-order-page-to-pdf.webp",
    imageAlt: "A receipt and order confirmation checked before PDF export",
    title: "Save a Receipt or Order Page as PDF",
    description: "Capture a visible receipt, booking, invoice, or order confirmation while checking totals, status, personal data, links, and official-document limits.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnReceipt,
  },
  {
    kind: "blog", locale: "en", slug: "chrome-print-cuts-off-webpage",
    image: "/blog/mocks/chrome-print-cuts-off-webpage.webp",
    imageAlt: "Chrome Print preview diagnosing clipped panels, tables, and delayed content",
    title: "Why Chrome Print Cuts Off a Webpage",
    description: "Diagnose internal scrolling, print styles, wide tables, and delayed content, then decide whether Chrome Print or a Page 2 PDF mode fits the page.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnPrintCutoff,
  },
  {
    kind: "blog", locale: "en", slug: "webpage-capture-vs-web-scraping",
    image: "/blog/mocks/webpage-capture-vs-web-scraping.webp",
    imageAlt: "One readable webpage PDF compared with structured records from many URLs",
    title: "Webpage Capture vs. Web Scraping",
    description: "Choose PDF capture for one human-readable active tab and an authorized export, API, or scraper when the real goal is structured data across many pages.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnCaptureScraping,
  },
  {
    kind: "blog", locale: "en", slug: "export-ai-chat-to-pdf",
    image: "/blog/mocks/export-ai-chat-to-pdf.webp",
    imageAlt: "A supported AI conversation transformed into a structured portrait PDF",
    title: "Export a Supported AI Chat to PDF",
    description: "Save the current supported AI conversation with roles and semantic blocks, while respecting the 2,000-message cap and account-export boundary.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnAiChat,
  },
  {
    kind: "blog", locale: "en", slug: "export-chatgpt-conversation-to-pdf",
    image: "/blog/mocks/export-chatgpt-conversation-to-pdf.webp",
    imageAlt: "A ChatGPT conversation PDF with roles, code, tables, and sources",
    title: "Export One ChatGPT Conversation to PDF",
    description: "Prepare and verify a readable PDF of the current ChatGPT thread, including supported code, tables, sources, files, media, and history limits.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnChatGpt,
  },
  {
    kind: "blog", locale: "en", slug: "export-claude-and-gemini-chat-to-pdf",
    image: "/blog/mocks/export-claude-and-gemini-chat-to-pdf.webp",
    imageAlt: "Claude and Gemini current-conversation PDF workflows compared side by side",
    title: "Export Claude or Gemini Chats to PDF",
    description: "Compare current-thread PDF capture for Claude and Gemini with provider data exports, generated documents, attachment handling, and live adapter checks.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnClaudeGemini,
  },
  {
    kind: "blog", locale: "en", slug: "export-grok-perplexity-copilot-manus-to-pdf",
    image: "/blog/mocks/export-grok-perplexity-copilot-manus-to-pdf.webp",
    imageAlt: "Four supported AI adapters feeding one structured chat PDF workflow",
    title: "Export Grok, Perplexity, Copilot, or Manus",
    description: "Use the dedicated current-chat adapters, compare native options such as Perplexity PDF export, and treat live platform markup as a release check.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnOtherAi,
  },
  {
    kind: "blog", locale: "en", slug: "preserve-code-tables-citations-in-chat-pdf",
    image: "/blog/mocks/preserve-code-tables-citations-in-chat-pdf.webp",
    imageAlt: "Code, tables, citations, files, and media represented as chat PDF blocks",
    title: "Keep Code, Tables, and Citations in Chat PDF",
    description: "Review the semantic blocks that carry meaning in an AI transcript, including code, tables, quotes, sources, files, images, video, and audio references.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnChatBlocks,
  },
  {
    kind: "blog", locale: "en", slug: "export-ai-replies-only-and-long-chats",
    image: "/blog/mocks/export-ai-replies-only-and-long-chats.webp",
    imageAlt: "All messages and replies-only output compared at the 2,000-message boundary",
    title: "Export AI Replies Only and Long Chats",
    description: "Choose all messages or replies only, understand the latest-2,000-message ceiling, and use media controls without discarding essential context.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnChatScope,
  },
  {
    kind: "blog", locale: "en", slug: "export-browser-messenger-chat-to-pdf",
    image: "/blog/mocks/export-browser-messenger-chat-to-pdf.webp",
    imageAlt: "A selected WhatsApp Web or Telegram Web thread becoming a role-based PDF",
    title: "Export a Browser Messenger Chat to PDF",
    description: "Save one current WhatsApp Web or Telegram Web conversation as a structured PDF and keep migration, backup, unsupported services, and privacy separate.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnMessenger,
  },
  {
    kind: "blog", locale: "en", slug: "export-whatsapp-web-chat-to-pdf",
    image: "/blog/mocks/export-whatsapp-web-chat-to-pdf.webp",
    imageAlt: "The active WhatsApp Web thread exported without its conversation sidebar",
    title: "Export One WhatsApp Web Chat to PDF",
    description: "Prepare the active WhatsApp Web thread, verify message direction and supported media, and understand view-once, history, and account-export limits.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnWhatsapp,
  },
  {
    kind: "blog", locale: "en", slug: "export-telegram-web-chat-to-pdf",
    image: "/blog/mocks/export-telegram-web-chat-to-pdf.webp",
    imageAlt: "A Telegram Web chat and channel exported as a structured portrait PDF",
    title: "Export a Telegram Web Chat or Channel",
    description: "Save the current Telegram Web chat or channel as PDF, then compare that readable thread with Telegram Desktop's broader history export.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnTelegram,
  },
  {
    kind: "blog", locale: "en", slug: "supported-and-unsupported-browser-messengers",
    image: "/blog/mocks/supported-and-unsupported-browser-messengers.webp",
    imageAlt: "Messenger compatibility matrix separating supported and unsupported services",
    title: "Which Browser Messengers Can Export to PDF?",
    description: "See why WhatsApp Web and Telegram Web have dedicated transcript support while Slack, Teams, Discord, Instagram, and Messenger remain excluded.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnMessengerMatrix,
  },
  {
    kind: "blog", locale: "en", slug: "chat-pdf-vs-account-data-export",
    image: "/blog/mocks/chat-pdf-vs-account-data-export.webp",
    imageAlt: "A readable single-chat PDF compared with a broader account-data archive",
    title: "Chat PDF vs. Account Data Export",
    description: "Choose a reviewed PDF for one current conversation or a provider-controlled archive for portability, broad history, compliance, and machine-readable data.",
    author: "Page 2 File editorial team", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: EnChatArchive,
  },
  {
    kind: "blog", locale: "ru", slug: "choose-webpage-pdf-mode",
    image: "/blog/mocks/choose-webpage-pdf-mode.webp",
    imageAlt: "Три режима Page 2 PDF по свойству, которое они сохраняют",
    title: "Как выбрать подходящий режим PDF для страницы",
    description: "Сравните Accurate copy, Editable document и AI / Chat до запуска: внешний вид, выделяемый текст и структура переписки требуют разных способов.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: RuChooseMode,
  },
  {
    kind: "blog", locale: "ru", slug: "save-long-dynamic-webpage-to-pdf",
    image: "/blog/mocks/save-long-dynamic-webpage-to-pdf.webp",
    imageAlt: "Длинная страница приложения с подготовленной внутренней прокруткой",
    title: "Как сохранить длинную динамическую страницу в PDF",
    description: "Подготовьте отложенное содержимое и внутреннюю прокрутку, учитывая виртуальные списки, защищённые фреймы и пределы очень высоких страниц.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: RuLongPage,
  },
  {
    kind: "blog", locale: "ru", slug: "save-private-or-local-page-to-pdf",
    image: "/blog/mocks/save-private-or-local-page-to-pdf.webp",
    imageAlt: "Закрытая страница и локальный HTML в активных вкладках Chrome",
    title: "Как сохранить закрытую или локальную страницу в PDF",
    description: "Работайте с уже открытой разрешённой страницей или локальным HTML в Chrome, не передавая пароль и не подразумевая обход ограничений доступа.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: RuPrivatePage,
  },
  {
    kind: "blog", locale: "ru", slug: "preserve-webpage-links-forms-text",
    image: "/blog/mocks/preserve-webpage-links-forms-text.webp",
    imageAlt: "Выделяемый текст, безопасные ссылки, формы и настройки распознавания",
    title: "Как сохранить ссылки, формы и текст страницы в PDF",
    description: "Разберите возможности Editable document: подходящие поля, исключения для чувствительных данных, региональное распознавание и состав архива проекта.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: RuLinksForms,
  },
  {
    kind: "blog", locale: "ru", slug: "save-dashboard-report-to-pdf",
    image: "/blog/mocks/save-dashboard-report-to-pdf.webp",
    imageAlt: "Панель управления с фильтрами, диаграммами, таблицами и выбором PDF",
    title: "Как сохранить панель управления или отчёт в PDF",
    description: "Зафиксируйте фильтры и выбранный период, выберите визуальный или текстовый PDF и проверьте диаграммы, широкие таблицы и вложенную прокрутку.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: RuDashboard,
  },
  {
    kind: "blog", locale: "ru", slug: "save-web-research-to-pdf",
    image: "/blog/mocks/save-web-research-to-pdf.webp",
    imageAlt: "Исследовательская страница с текстом, источниками и диаграммой",
    title: "Как сохранить веб-исследование и источники в PDF",
    description: "Сохраните статью, документацию или список источников с поиском по тексту, рабочими ссылками, визуальными доказательствами и контекстом.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 6, component: RuResearch,
  },
  {
    kind: "blog", locale: "ru", slug: "save-receipt-order-page-to-pdf",
    image: "/blog/mocks/save-receipt-order-page-to-pdf.webp",
    imageAlt: "Чек и подтверждение заказа перед сохранением в PDF",
    title: "Как сохранить чек или подтверждение заказа в PDF",
    description: "Зафиксируйте видимый чек, бронь, счёт или заказ, проверив сумму, статус, персональные данные, ссылки и границу официального документа.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuReceipt,
  },
  {
    kind: "blog", locale: "ru", slug: "chrome-print-cuts-off-webpage",
    image: "/blog/mocks/chrome-print-cuts-off-webpage.webp",
    imageAlt: "Диагностика обрезанных панелей, таблиц и незагруженных блоков в Chrome Print",
    title: "Почему Chrome Print обрезает веб-страницу",
    description: "Найдите причину в прокрутке, печатных стилях, широкой таблице или загрузке, а затем выберите печать либо подходящий режим Page 2 PDF.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuPrintCutoff,
  },
  {
    kind: "blog", locale: "ru", slug: "webpage-capture-vs-web-scraping",
    image: "/blog/mocks/webpage-capture-vs-web-scraping.webp",
    imageAlt: "Читаемый PDF одной страницы и структурированные записи со множества адресов",
    title: "Захват веб-страницы или сбор данных: что выбрать",
    description: "Используйте PDF для одной читаемой вкладки, а разрешённый экспорт, API или сборщик — когда нужны одинаковые поля со многих страниц.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuCaptureScraping,
  },
  {
    kind: "blog", locale: "ru", slug: "export-ai-chat-to-pdf",
    image: "/blog/mocks/export-ai-chat-to-pdf.webp",
    imageAlt: "Поддерживаемый AI-диалог в виде структурированного книжного PDF",
    title: "Как экспортировать поддерживаемый AI-диалог в PDF",
    description: "Сохраните текущую поддерживаемую переписку с ролями и смысловыми блоками, учитывая предел 2 000 сообщений и отличие от архива аккаунта.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuAiChat,
  },
  {
    kind: "blog", locale: "ru", slug: "export-chatgpt-conversation-to-pdf",
    image: "/blog/mocks/export-chatgpt-conversation-to-pdf.webp",
    imageAlt: "Переписка ChatGPT с ролями, кодом, таблицами и источниками в PDF",
    title: "Как экспортировать одну переписку ChatGPT в PDF",
    description: "Подготовьте и проверьте читаемый PDF текущего диалога ChatGPT с поддерживаемым кодом, таблицами, источниками, файлами и пределами истории.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuChatGpt,
  },
  {
    kind: "blog", locale: "ru", slug: "export-claude-and-gemini-chat-to-pdf",
    image: "/blog/mocks/export-claude-and-gemini-chat-to-pdf.webp",
    imageAlt: "Сравнение экспорта текущих переписок Claude и Gemini",
    title: "Как экспортировать переписку Claude или Gemini в PDF",
    description: "Сравните PDF текущего диалога с архивами поставщиков, созданными документами, обработкой вложений и обязательной проверкой актуальности адаптера.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuClaudeGemini,
  },
  {
    kind: "blog", locale: "ru", slug: "export-grok-perplexity-copilot-manus-to-pdf",
    image: "/blog/mocks/export-grok-perplexity-copilot-manus-to-pdf.webp",
    imageAlt: "Четыре AI-адаптера и один процесс создания диалогового PDF",
    title: "Экспорт Grok, Perplexity, Copilot и Manus в PDF",
    description: "Используйте отдельные адаптеры текущих диалогов, сравните штатный PDF Perplexity и проверяйте фактическую разметку платформ перед выпуском.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuOtherAi,
  },
  {
    kind: "blog", locale: "ru", slug: "preserve-code-tables-citations-in-chat-pdf",
    image: "/blog/mocks/preserve-code-tables-citations-in-chat-pdf.webp",
    imageAlt: "Код, таблицы, источники, файлы и медиа как отдельные блоки PDF",
    title: "Как сохранить код, таблицы и источники из чата в PDF",
    description: "Проверьте смысловые блоки AI-расшифровки: код, таблицы, цитаты, источники, файлы, изображения, видео и упоминания аудио.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuChatBlocks,
  },
  {
    kind: "blog", locale: "ru", slug: "export-ai-replies-only-and-long-chats",
    image: "/blog/mocks/export-ai-replies-only-and-long-chats.webp",
    imageAlt: "Все сообщения и только ответы у границы загрузки в 2 000 реплик",
    title: "Как экспортировать ответы и длинный AI-диалог",
    description: "Выберите все сообщения или только ответы, учтите предел последних 2 000 доступных реплик и управляйте медиа без потери необходимого контекста.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuChatScope,
  },
  {
    kind: "blog", locale: "ru", slug: "export-browser-messenger-chat-to-pdf",
    image: "/blog/mocks/export-browser-messenger-chat-to-pdf.webp",
    imageAlt: "Выбранный диалог WhatsApp Web или Telegram Web в виде PDF с ролями",
    title: "Как экспортировать переписку из веб-мессенджера в PDF",
    description: "Сохраните один текущий диалог WhatsApp Web или Telegram Web и отделите его от миграции, резервной копии, неподдерживаемых сервисов и правил передачи.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuMessenger,
  },
  {
    kind: "blog", locale: "ru", slug: "export-whatsapp-web-chat-to-pdf",
    image: "/blog/mocks/export-whatsapp-web-chat-to-pdf.webp",
    imageAlt: "Текущая переписка WhatsApp Web без боковой панели в PDF",
    title: "Как экспортировать один чат WhatsApp Web в PDF",
    description: "Подготовьте активный диалог WhatsApp Web, проверьте направление сообщений и медиа, учтите одноразовое содержимое, историю и границу аккаунта.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuWhatsapp,
  },
  {
    kind: "blog", locale: "ru", slug: "export-telegram-web-chat-to-pdf",
    image: "/blog/mocks/export-telegram-web-chat-to-pdf.webp",
    imageAlt: "Чат и канал Telegram Web в виде структурированного книжного PDF",
    title: "Как экспортировать чат или канал Telegram Web в PDF",
    description: "Сохраните текущий чат или канал Telegram Web и сравните читаемый PDF с более широким штатным экспортом истории в Telegram Desktop.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuTelegram,
  },
  {
    kind: "blog", locale: "ru", slug: "supported-and-unsupported-browser-messengers",
    image: "/blog/mocks/supported-and-unsupported-browser-messengers.webp",
    imageAlt: "Матрица поддерживаемых и исключённых браузерных мессенджеров",
    title: "Какие веб-мессенджеры можно экспортировать в PDF",
    description: "Узнайте, почему WhatsApp Web и Telegram Web имеют отдельные адаптеры, а Slack, Teams, Discord, Instagram и Messenger не заявлены как поддерживаемые.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuMessengerMatrix,
  },
  {
    kind: "blog", locale: "ru", slug: "chat-pdf-vs-account-data-export",
    image: "/blog/mocks/chat-pdf-vs-account-data-export.webp",
    imageAlt: "Одна читаемая переписка в PDF и широкий архив данных аккаунта",
    title: "PDF переписки или экспорт данных аккаунта",
    description: "Выберите проверенный PDF одного текущего диалога либо штатный архив для переносимости, широкой истории, требований организации и машинной обработки.",
    author: "Редакция Page 2 File", publishedAt: "2026-08-25", updatedAt: "2026-08-25", readingMinutes: 5, component: RuChatArchive,
  },
];

export const updateEntries: ReadonlyArray<ContentEntry> = [];
export const changelogEntries: ReadonlyArray<ChangelogEntry> = [];

export const getBlogEntries = (locale: Locale): ReadonlyArray<ContentEntry> =>
  blogEntries.filter((entry): boolean => entry.locale === locale);

export const getUpdateEntries = (locale: Locale): ReadonlyArray<ContentEntry> =>
  updateEntries.filter((entry): boolean => entry.locale === locale);

export const getChangelogEntries = (
  locale: Locale,
): ReadonlyArray<ChangelogEntry> => {
  void locale;
  return changelogEntries;
};

export const getBlogEntry = (
  locale: Locale,
  slug: string,
): ContentEntry | null =>
  blogEntries.find(
    (entry): boolean => entry.locale === locale && entry.slug === slug,
  ) ?? null;

export const getUpdateEntry = (
  locale: Locale,
  slug: string,
): ContentEntry | null =>
  updateEntries.find(
    (entry): boolean => entry.locale === locale && entry.slug === slug,
  ) ?? null;
