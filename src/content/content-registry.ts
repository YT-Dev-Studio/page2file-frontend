import type { ComponentType } from "react";
import Article01 from "../../content/blog/save-webpage-as-pdf.mdx";
import Article02 from "../../content/blog/preserve-clickable-links.mdx";
import Article03 from "../../content/blog/visual-vs-editable.mdx";
import Article04 from "../../content/blog/long-webpage-page-breaks.mdx";
import Article05 from "../../content/blog/webpage-to-powerpoint.mdx";
import Article06 from "../../content/blog/export-ai-chats-privately.mdx";
import Article07 from "../../content/blog/html-to-pdf-safely.mdx";
import Article08 from "../../content/blog/multi-page-website-to-pdf.mdx";
import Article09 from "../../content/blog/why-print-to-pdf-breaks.mdx";
import Article10 from "../../content/blog/sections-to-slides.mdx";
import UpdatePreview from "../../content/updates/preview-workspace.mdx";
import UpdateChat from "../../content/updates/local-chat-export.mdx";
import RuArticle01 from "../../content/ru/blog/save-webpage-as-pdf.mdx";
import RuArticle02 from "../../content/ru/blog/preserve-clickable-links.mdx";
import RuArticle03 from "../../content/ru/blog/visual-vs-editable.mdx";
import RuArticle04 from "../../content/ru/blog/long-webpage-page-breaks.mdx";
import RuArticle05 from "../../content/ru/blog/webpage-to-powerpoint.mdx";
import RuArticle06 from "../../content/ru/blog/export-ai-chats-privately.mdx";
import RuArticle07 from "../../content/ru/blog/html-to-pdf-safely.mdx";
import RuArticle08 from "../../content/ru/blog/multi-page-website-to-pdf.mdx";
import RuArticle09 from "../../content/ru/blog/why-print-to-pdf-breaks.mdx";
import RuArticle10 from "../../content/ru/blog/sections-to-slides.mdx";
import RuUpdatePreview from "../../content/ru/updates/preview-workspace.mdx";
import RuUpdateChat from "../../content/ru/updates/local-chat-export.mdx";
import type { Locale } from "@/shared/i18n/locales";

export type ContentKind = "blog" | "update";

export type ContentEntry = {
  kind: ContentKind;
  slug: string;
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
    title: "How to save a webpage as a PDF",
    description: "Choose the right webpage capture boundary, output mode and preview workflow before PDF page breaks become a document problem.",
    author: "Page2File editorial",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-29",
    readingMinutes: 4,
    component: Article01,
  },
  {
    kind: "blog",
    slug: "preserve-clickable-links",
    title: "How to preserve clickable links in a webpage PDF",
    description: "Understand when webpage links remain clickable in PDF, when visual capture removes interaction and when unsafe targets must be rejected.",
    author: "Page2File editorial",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article02,
  },
  {
    kind: "blog",
    slug: "visual-vs-editable",
    title: "Visual vs editable webpage conversion",
    description: "Compare visual fidelity with editable text and clickable links to choose an honest output mode for complex webpage conversion.",
    author: "Page2File editorial",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-29",
    readingMinutes: 4,
    component: Article03,
  },
  {
    kind: "blog",
    slug: "long-webpage-page-breaks",
    title: "How to convert a long webpage without broken page breaks",
    description: "Use semantic webpage sections, stable loading and preview controls instead of blind viewport cuts that break headings and tables.",
    author: "Page2File editorial",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-29",
    readingMinutes: 6,
    component: Article04,
  },
  {
    kind: "blog",
    slug: "webpage-to-powerpoint",
    title: "How to convert a webpage into PowerPoint slides",
    description: "Translate webpage hierarchy into coherent PowerPoint slides with visible boundaries instead of producing an unstructured screenshot dump.",
    author: "Page2File editorial",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article05,
  },
  {
    kind: "blog",
    slug: "export-ai-chats-privately",
    title: "How to export AI chats to PDF privately",
    description: "Learn why the active browser tab is the privacy-preserving boundary for exporting visible ChatGPT, Claude, Gemini and Grok conversations.",
    author: "Page2File editorial",
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article06,
  },
  {
    kind: "blog",
    slug: "html-to-pdf-safely",
    title: "How to convert HTML to PDF safely",
    description: "Treat supplied HTML as untrusted code and isolate future PDF rendering from scripts, network access and internal service addresses.",
    author: "Page2File editorial",
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-29",
    readingMinutes: 6,
    component: Article07,
  },
  {
    kind: "blog",
    slug: "multi-page-website-to-pdf",
    title: "How to convert a multi-page website to PDF",
    description: "Bound page count, depth, origin and redirects before collecting a multi-page website into one organized and reviewable PDF document.",
    author: "Page2File editorial",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-29",
    readingMinutes: 6,
    component: Article08,
  },
  {
    kind: "blog",
    slug: "why-print-to-pdf-breaks",
    title: "Why browser Print to PDF breaks complex pages",
    description: "See how print CSS, lazy content, canvas and interactive layouts change what reaches a PDF and why section preview catches the losses.",
    author: "Page2File editorial",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article09,
  },
  {
    kind: "blog",
    slug: "sections-to-slides",
    title: "How webpage sections become presentation slides",
    description: "Use webpage content hierarchy to create a coherent PowerPoint deck with reviewable slide boundaries and visible visual fallbacks.",
    author: "Page2File editorial",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article10,
  },
];

export const updateEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "update",
    slug: "preview-workspace",
    title: "A section-first preview workspace",
    description: "The Page2File prototype now makes PDF page and PowerPoint slide boundaries, local operations and fallback warnings visible before download.",
    author: "Page2File product",
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-29",
    readingMinutes: 2,
    component: UpdatePreview,
  },
  {
    kind: "update",
    slug: "local-chat-export",
    title: "Local AI chat export direction",
    description: "ChatGPT, Claude, Gemini and Grok now have dedicated local-export pages with platform limitations, privacy boundaries and independence notices.",
    author: "Page2File product",
    publishedAt: "2026-07-18",
    updatedAt: "2026-07-29",
    readingMinutes: 2,
    component: UpdateChat,
  },
];

const russianBlogEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "blog",
    slug: "save-webpage-as-pdf",
    title: "Как сохранить веб-страницу в формате PDF",
    description:
      "Определите границы захвата веб-страницы, выберите режим и проверьте секции до того, как разрывы PDF превратятся в проблему документа.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-30",
    readingMinutes: 4,
    component: RuArticle01,
  },
  {
    kind: "blog",
    slug: "preserve-clickable-links",
    title: "Как сохранить кликабельные ссылки в PDF",
    description:
      "Разберитесь, когда ссылки веб-страницы остаются кликабельными в PDF, когда визуальный режим убирает интерактивность и какие адреса нужно отклонять.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-30",
    readingMinutes: 5,
    component: RuArticle02,
  },
  {
    kind: "blog",
    slug: "visual-vs-editable",
    title: "Визуальная и редактируемая конвертация",
    description:
      "Сравните точность внешнего вида, редактируемый текст, кликабельные ссылки и адаптивные визуальные замены для сложной веб-страницы.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-30",
    readingMinutes: 4,
    component: RuArticle03,
  },
  {
    kind: "blog",
    slug: "long-webpage-page-breaks",
    title: "Как конвертировать длинную веб-страницу",
    description:
      "Используйте смысловые секции, стабильную загрузку и предпросмотр вместо случайных разрывов по высоте окна, которые ломают заголовки и таблицы.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-30",
    readingMinutes: 6,
    component: RuArticle04,
  },
  {
    kind: "blog",
    slug: "webpage-to-powerpoint",
    title: "Как превратить веб-страницу в PowerPoint",
    description:
      "Перенесите иерархию веб-страницы на связные слайды PowerPoint с видимыми границами, не превращая презентацию в набор случайных скриншотов.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-30",
    readingMinutes: 5,
    component: RuArticle05,
  },
  {
    kind: "blog",
    slug: "export-ai-chats-privately",
    title: "Как конфиденциально экспортировать AI-чаты",
    description:
      "Узнайте, почему активная вкладка браузера — конфиденциальная граница для локального экспорта видимых разговоров ChatGPT, Claude, Gemini и Grok.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-30",
    readingMinutes: 5,
    component: RuArticle06,
  },
  {
    kind: "blog",
    slug: "html-to-pdf-safely",
    title: "Как безопасно конвертировать HTML в PDF",
    description:
      "Считайте предоставленный HTML недоверенным кодом и изолируйте будущий PDF-рендерер от скриптов, сети и внутренних служебных адресов.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-30",
    readingMinutes: 6,
    component: RuArticle07,
  },
  {
    kind: "blog",
    slug: "multi-page-website-to-pdf",
    title: "Как собрать многостраничный сайт в PDF",
    description:
      "Ограничьте число страниц, глубину, origin и redirect до начала контролируемого обхода и сборки многостраничного сайта в структурированный PDF.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-30",
    readingMinutes: 6,
    component: RuArticle08,
  },
  {
    kind: "blog",
    slug: "why-print-to-pdf-breaks",
    title: "Почему браузерная печать в PDF ломается",
    description:
      "Узнайте, как печатные стили, ленивая загрузка, canvas и интерактивные макеты меняют PDF и почему предпросмотр секций выявляет потери.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-30",
    readingMinutes: 5,
    component: RuArticle09,
  },
  {
    kind: "blog",
    slug: "sections-to-slides",
    title: "Как секции веб-страницы становятся слайдами",
    description:
      "Используйте иерархию веб-контента для связной презентации PowerPoint с понятными границами слайдов и видимыми визуальными заменами.",
    author: "Редакция Page2File",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-30",
    readingMinutes: 5,
    component: RuArticle10,
  },
];

const russianUpdateEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "update",
    slug: "preview-workspace",
    title: "Рабочая область предпросмотра по секциям",
    description:
      "Прототип Page2File показывает границы страниц PDF и слайдов PowerPoint, локальные операции и предупреждения о заменах до скачивания.",
    author: "Команда Page2File",
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-30",
    readingMinutes: 2,
    component: RuUpdatePreview,
  },
  {
    kind: "update",
    slug: "local-chat-export",
    title: "Направление локального экспорта AI-чатов",
    description:
      "ChatGPT, Claude, Gemini и Grok получили отдельные страницы локального экспорта через расширение с ограничениями платформ и privacy-дисклеймерами.",
    author: "Команда Page2File",
    publishedAt: "2026-07-18",
    updatedAt: "2026-07-30",
    readingMinutes: 2,
    component: RuUpdateChat,
  },
];

export type ChangelogEntry = {
  version: string;
  date: string;
  added: ReadonlyArray<string>;
  improved: ReadonlyArray<string>;
  fixed: ReadonlyArray<string>;
  relatedUpdate?: string;
};

export const changelogEntries: ReadonlyArray<ChangelogEntry> = [
  {
    version: "0.3.0-prototype",
    date: "2026-07-29",
    added: ["PDF and PowerPoint mock converters", "Section preview operations", "15 locale route shells"],
    improved: ["Consent-first analytics boundary", "Route and content validation"],
    fixed: ["Draft locales are excluded from sitemap"],
    relatedUpdate: "preview-workspace",
  },
  {
    version: "0.2.0-prototype",
    date: "2026-07-24",
    added: ["Extension instruction modes", "AI chat export landing cluster"],
    improved: ["Local-processing copy and platform disclaimers"],
    fixed: ["Welcome page indexing policy"],
    relatedUpdate: "local-chat-export",
  },
  {
    version: "0.1.0-prototype",
    date: "2026-07-18",
    added: ["Initial product route map", "Privacy-first no-account foundation"],
    improved: ["Visual and editable mode language"],
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
    fixed: ["Черновые локали исключены из sitemap"],
    relatedUpdate: "preview-workspace",
  },
  {
    version: "0.2.0-prototype",
    date: "2026-07-24",
    added: [
      "Два режима инструкции по расширению",
      "Кластер лендингов для экспорта AI-чатов",
    ],
    improved: [
      "Описание локальной обработки и дисклеймеры платформ",
    ],
    fixed: ["Политика индексации welcome-страницы"],
    relatedUpdate: "local-chat-export",
  },
  {
    version: "0.1.0-prototype",
    date: "2026-07-18",
    added: [
      "Начальная карта продуктовых маршрутов",
      "Основа без аккаунтов и с приоритетом конфиденциальности",
    ],
    improved: ["Описание визуального и редактируемого режимов"],
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
