import type { Locale, LocalizedPublished } from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

export type GuideStep = {
  number: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  imageHeight?: number;
  imageWidth?: number;
  points?: ReadonlyArray<string>;
};

type GuideChapter = {
  title: string;
  time: string;
};

type GuideArticleLink = {
  slug: string;
  label: string;
};

type ExtensionCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  formatLabel: string;
  stepsTab: string;
  videoTab: string;
  stepLabel: string;
  steps: ReadonlyArray<GuideStep>;
  videoPosterAlt: string;
  chapters: ReadonlyArray<GuideChapter>;
  transcriptTitle: string;
  transcript: ReadonlyArray<string>;
  breadcrumbLabel: string;
  homeLabel: string;
  extensionLabel: string;
  guideLabel: string;
  relatedArticlesLabel: string;
  relatedArticles: ReadonlyArray<GuideArticleLink>;
};

const extensionCopy: LocalizedPublished<ExtensionCopy> = {
  en: {
    eyebrow: "Extension guide",
    title: "From active tab to reviewed document",
    lead: "Choose a step-by-step walkthrough or an accessible video outline. Both instruction sets are present in the server-rendered page.",
    formatLabel: "Instruction format",
    stepsTab: "Step-by-step",
    videoTab: "Video",
    stepLabel: "STEP",
    steps: [
      {
        number: "01",
        title: "Open the source in your current tab",
        body: "Load the complete webpage or AI conversation. Expand collapsed material and scroll long virtualized chats so the content is present.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "A browser tab prepared for extension export",
      },
      {
        number: "02",
        title: "Configure the export and create a preview",
        body: "Use the Page 2 File panel in this order:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "The original Page 2 File panel with numbered callouts for format, output style, customization, and preview",
        imageCaption:
          "The Notion card identifies the webpage open in the current tab; it is not a separate Page 2 File integration.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Choose PDF for sharing and archiving or PowerPoint for presenting and editing.",
          "Choose Accurate copy to preserve the page appearance or Editable document for supported text and links.",
          "Optionally remove images, links, or styling in Customize.",
          "Select Preview PDF or Preview PowerPoint to open the temporary preview.",
        ],
      },
      {
        number: "03",
        title: "Review sections before download",
        body: "Inspect temporary preview thumbnails, reorder sections with drag or buttons, remove unwanted content and review every fallback warning.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "A temporary section preview with reordering controls",
      },
    ],
    videoPosterAlt:
      "Video poster showing webpage sections flowing into document pages",
    chapters: [
      { title: "Prepare the source", time: "00:00" },
      { title: "Choose format and mode", time: "00:42" },
      { title: "Edit the temporary preview", time: "01:28" },
      { title: "Download and verify", time: "02:14" },
    ],
    transcriptTitle: "Transcript",
    transcript: [
      "Open the page or conversation you want to export and make sure every required section is loaded.",
      "Activate Page 2 File from the toolbar. Choose PDF or PowerPoint, then choose Accurate copy for visual fidelity or Editable document for supported text and links.",
      "Review the temporary section rail. Move, split, merge or remove sections and read the warnings before downloading.",
    ],
    breadcrumbLabel: "Breadcrumbs",
    homeLabel: "Home",
    extensionLabel: "Chrome extension",
    guideLabel: "How to use",
    relatedArticlesLabel: "Related articles",
    relatedArticles: [
      {
        slug: "capture-full-webpage-as-pdf",
        label: "Capture a full webpage as PDF",
      },
      {
        slug: "save-authenticated-webpage-as-pdf",
        label: "Save a webpage behind a login",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Export AI chats privately",
      },
    ],
  },
  ru: {
    eyebrow: "Инструкция по расширению",
    title: "Из активной вкладки — в проверенный документ",
    lead: "Выберите пошаговую инструкцию или доступный текст видео. Оба варианта присутствуют в серверной HTML-разметке страницы.",
    formatLabel: "Формат инструкции",
    stepsTab: "Пошагово",
    videoTab: "Видео",
    stepLabel: "ШАГ",
    steps: [
      {
        number: "01",
        title: "Откройте источник в текущей вкладке",
        body: "Полностью загрузите веб-страницу или AI-диалог. Разверните скрытые блоки и прокрутите длинный виртуализированный чат, чтобы сообщения появились на странице.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Вкладка браузера, подготовленная к экспорту через расширение",
      },
      {
        number: "02",
        title: "Настройте экспорт и создайте предпросмотр",
        body: "Настройте Page 2 File по порядку:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Оригинальная панель Page 2 File с пронумерованными указателями на формат, стиль результата, настройки и предпросмотр",
        imageCaption:
          "Карточка Notion обозначает страницу, открытую в текущей вкладке, а не отдельную интеграцию Page 2 File.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Выберите PDF для передачи и архивирования или PowerPoint для презентации и редактирования.",
          "Выберите Accurate copy для сохранения внешнего вида либо Editable document для поддерживаемого текста и ссылок.",
          "При необходимости удалите изображения, ссылки или стили через Customize.",
          "Нажмите Preview PDF или Preview PowerPoint, чтобы открыть временный предпросмотр.",
        ],
      },
      {
        number: "03",
        title: "Проверьте секции перед скачиванием",
        body: "Просмотрите временные миниатюры, измените порядок секций перетаскиванием или кнопками, удалите лишнее и прочитайте предупреждения о заменах.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Временный предпросмотр секций с кнопками сортировки",
      },
    ],
    videoPosterAlt:
      "Постер видео: секции веб-страницы превращаются в страницы документа",
    chapters: [
      { title: "Подготовка источника", time: "00:00" },
      { title: "Выбор формата и режима", time: "00:42" },
      { title: "Редактирование предпросмотра", time: "01:28" },
      { title: "Скачивание и проверка", time: "02:14" },
    ],
    transcriptTitle: "Расшифровка",
    transcript: [
      "Откройте страницу или диалог для экспорта и убедитесь, что все нужные секции загружены.",
      "Запустите Page 2 File с панели инструментов. Выберите PDF или PowerPoint, затем Accurate copy для точного вида либо Editable document для поддерживаемых текста и ссылок.",
      "Проверьте временную ленту секций. Перемещайте, разделяйте, объединяйте или удаляйте блоки и прочитайте предупреждения перед скачиванием.",
    ],
    breadcrumbLabel: "Хлебные крошки",
    homeLabel: "Главная",
    extensionLabel: "Расширение Chrome",
    guideLabel: "Инструкция",
    relatedArticlesLabel: "Статьи по теме",
    relatedArticles: [
      {
        slug: "capture-full-webpage-as-pdf",
        label: "Как сохранить веб-страницу целиком в PDF",
      },
      {
        slug: "save-authenticated-webpage-as-pdf",
        label: "Как сохранить страницу после входа",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Как экспортировать AI-чаты с учётом приватности",
      },
    ],
  },
};

export const getExtensionCopy = (locale: Locale): ExtensionCopy =>
  extensionCopy[isPublishedLocale(locale) ? locale : "en"];
