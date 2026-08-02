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
    imageAlt: "A browser page becoming a stack of clean PDF pages",
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
    image: "/blog/mocks/preserve-clickable-links.webp",
    imageAlt: "Clickable links preserved between a browser page and a PDF",
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
    image: "/blog/mocks/visual-vs-editable.webp",
    imageAlt: "A visual webpage compared with editable content blocks",
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
    image: "/blog/mocks/long-webpage-page-breaks.webp",
    imageAlt: "A long webpage flowing through safe PDF page boundaries",
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
    image: "/blog/mocks/webpage-to-powerpoint.webp",
    imageAlt: "Webpage sections reorganized into presentation slides",
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
    image: "/blog/mocks/export-ai-chats-privately.webp",
    imageAlt: "A private browser conversation exported through a shield",
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
    image: "/blog/mocks/html-to-pdf-safely.webp",
    imageAlt: "HTML blocks isolated in a secure rendering sandbox",
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
    image: "/blog/mocks/multi-page-website-to-pdf.webp",
    imageAlt: "A bounded website map collected into one organized document",
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
    image: "/blog/mocks/why-print-to-pdf-breaks.webp",
    imageAlt: "A print mechanism misaligning complex webpage elements",
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
    image: "/blog/mocks/sections-to-slides.webp",
    imageAlt: "Three webpage sections moving into separate slides",
    title: "How webpage sections become presentation slides",
    description: "Use webpage content hierarchy to create a coherent PowerPoint deck with reviewable slide boundaries and visible visual fallbacks.",
    author: "Page2File editorial",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article10,
  },
];

export const updateEntries: ReadonlyArray<ContentEntry> = [];

const russianBlogEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "blog",
    slug: "save-webpage-as-pdf",
    image: "/blog/mocks/save-webpage-as-pdf.webp",
    imageAlt: "Веб-страница превращается в стопку аккуратных PDF-страниц",
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
    image: "/blog/mocks/preserve-clickable-links.webp",
    imageAlt: "Кликабельные ссылки сохраняются между веб-страницей и PDF",
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
    image: "/blog/mocks/visual-vs-editable.webp",
    imageAlt: "Сравнение визуальной страницы и редактируемых блоков",
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
    image: "/blog/mocks/long-webpage-page-breaks.webp",
    imageAlt: "Длинная веб-страница проходит через безопасные границы PDF-страниц",
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
    image: "/blog/mocks/webpage-to-powerpoint.webp",
    imageAlt: "Секции веб-страницы перестраиваются в слайды презентации",
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
    image: "/blog/mocks/export-ai-chats-privately.webp",
    imageAlt: "Закрытый диалог в браузере экспортируется через защитный экран",
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
    image: "/blog/mocks/html-to-pdf-safely.webp",
    imageAlt: "HTML-блоки изолированы в безопасной песочнице рендеринга",
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
    image: "/blog/mocks/multi-page-website-to-pdf.webp",
    imageAlt: "Ограниченная карта сайта собирается в один упорядоченный документ",
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
    image: "/blog/mocks/why-print-to-pdf-breaks.webp",
    imageAlt: "Печатный механизм смещает сложные элементы веб-страницы",
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
    image: "/blog/mocks/sections-to-slides.webp",
    imageAlt: "Три секции веб-страницы переходят в отдельные слайды",
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
    improved: ["Local-processing copy and platform disclaimers"],
    fixed: ["Welcome page indexing policy"],
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
      "Описание локальной обработки и дисклеймеры платформ",
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
