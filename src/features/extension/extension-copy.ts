import type { Locale, LocalizedPublished } from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

export type GuideStep = {
  number: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

type GuideChapter = {
  title: string;
  time: string;
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
};

const extensionCopy: LocalizedPublished<ExtensionCopy> = {
  en: {
    eyebrow: "Extension guide",
    title: "From active tab to reviewed document",
    lead: "Choose a step-by-step walkthrough or an accessible demo video outline. Both instruction sets are present in the server-rendered page.",
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
        imageAlt: "A browser tab prepared for local export",
      },
      {
        number: "02",
        title: "Choose PDF or PowerPoint",
        body: "The output format is a direct choice in the extension panel. Then select Visual or Editable & clickable for the fidelity contract.",
        image: "/demos/extension-step-mode.svg",
        imageAlt: "The extension panel with format and mode controls",
      },
      {
        number: "03",
        title: "Review sections before download",
        body: "Inspect local thumbnails, reorder sections with drag or buttons, remove unwanted content and review every fallback warning.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "A local section preview with reordering controls",
      },
    ],
    videoPosterAlt:
      "Demo video poster showing webpage sections flowing into document pages",
    chapters: [
      { title: "Prepare the source", time: "00:00" },
      { title: "Choose format and mode", time: "00:42" },
      { title: "Edit the local preview", time: "01:28" },
      { title: "Download and verify", time: "02:14" },
    ],
    transcriptTitle: "Transcript",
    transcript: [
      "Open the page or conversation you want to export and make sure every required section is loaded.",
      "Activate Page2File from the toolbar. Choose PDF or PowerPoint, then choose Visual for fidelity or Editable for supported document objects.",
      "Review the local section rail. Move, split, merge or remove sections and read the warnings before downloading.",
    ],
    breadcrumbLabel: "Breadcrumbs",
    homeLabel: "Home",
    extensionLabel: "Chrome extension",
    guideLabel: "How to use",
  },
  ru: {
    eyebrow: "Инструкция по расширению",
    title: "Из активной вкладки — в проверенный документ",
    lead: "Выберите пошаговую инструкцию или доступный текст демонстрационного видео. Оба варианта присутствуют в серверной HTML-разметке страницы.",
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
        imageAlt: "Вкладка браузера, подготовленная к локальному экспорту",
      },
      {
        number: "02",
        title: "Выберите PDF или PowerPoint",
        body: "Формат результата выбирается прямо в панели расширения. Затем укажите визуальный или редактируемый и кликабельный режим.",
        image: "/demos/extension-step-mode.svg",
        imageAlt: "Панель расширения с выбором формата и режима",
      },
      {
        number: "03",
        title: "Проверьте секции перед скачиванием",
        body: "Просмотрите локальные миниатюры, измените порядок секций перетаскиванием или кнопками, удалите лишнее и прочитайте предупреждения о заменах.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Локальный предпросмотр секций с кнопками сортировки",
      },
    ],
    videoPosterAlt:
      "Постер демонстрационного видео: секции веб-страницы превращаются в страницы документа",
    chapters: [
      { title: "Подготовка источника", time: "00:00" },
      { title: "Выбор формата и режима", time: "00:42" },
      { title: "Редактирование предпросмотра", time: "01:28" },
      { title: "Скачивание и проверка", time: "02:14" },
    ],
    transcriptTitle: "Расшифровка",
    transcript: [
      "Откройте страницу или диалог для экспорта и убедитесь, что все нужные секции загружены.",
      "Запустите Page2File с панели инструментов. Выберите PDF или PowerPoint, затем визуальный режим для точного вида либо редактируемый режим для поддерживаемых объектов документа.",
      "Проверьте локальную ленту секций. Перемещайте, разделяйте, объединяйте или удаляйте блоки и прочитайте предупреждения перед скачиванием.",
    ],
    breadcrumbLabel: "Хлебные крошки",
    homeLabel: "Главная",
    extensionLabel: "Расширение Chrome",
    guideLabel: "Инструкция",
  },
};

export const getExtensionCopy = (locale: Locale): ExtensionCopy =>
  extensionCopy[isPublishedLocale(locale) ? locale : "en"];
