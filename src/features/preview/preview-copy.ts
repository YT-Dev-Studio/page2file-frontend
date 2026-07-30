import type { MockJobStage } from "@/entities/conversion/model";
import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

type StatusCopy = {
  title: string;
  text: string;
};

type PreviewSectionCopy = {
  title: string;
  warning?: string;
};

export type PreviewCopy = {
  status: Record<MockJobStage, StatusCopy>;
  sections: Record<"hero" | "comparison" | "canvas" | "article", PreviewSectionCopy>;
  continuation: string;
  workspaceEyebrow: string;
  pdfTitle: string;
  pptxTitle: string;
  completeVerification: string;
  retry: string;
  sectionsTitle: string;
  previewLabel: string;
  inspectorTitle: string;
  globalWarningsTitle: string;
  noWarnings: string;
  up: string;
  down: string;
  restore: string;
  remove: string;
  split: string;
  merge: string;
  demoWarning: string;
  mediaWarning: string;
  editableWarning: string;
  operationCount: (count: number) => string;
  openDownload: string;
  renderFinal: string;
  sampleLabel: string;
  modeLabels: Record<"visual" | "editable", string>;
  kindLabels: Record<"editable" | "visual-fallback", string>;
  dimensions: {
    onePage: string;
    twoPages: string;
    oneSlide: string;
    twoSlides: string;
  };
  downloadEyebrow: string;
  downloadTitle: string;
  downloadText: string;
  downloadSample: string;
  returnToPreview: string;
};

const previewCopy: LocalizedPublished<PreviewCopy> = {
  en: {
    status: {
      idle: {
        title: "Waiting to start",
        text: "Choose a source and mode.",
      },
      queued: {
        title: "Queued",
        text: "A worker slot is reserved for this mock job.",
      },
      "loading-source": {
        title: "Loading page",
        text:
          "The production service would load and stabilize the public page here.",
      },
      analyzing: {
        title: "Analyzing sections",
        text: "Headings, visual breaks and safe links are being mapped.",
      },
      "rendering-preview": {
        title: "Rendering preview",
        text: "Page and slide thumbnails are being prepared.",
      },
      "preview-ready": {
        title: "Preview ready",
        text: "Review sections and warnings before final render.",
      },
      "partial-warning": {
        title: "Preview ready with fallbacks",
        text:
          "One complex block was rasterized; the rest remains editable.",
      },
      "rendering-final": {
        title: "Rendering final file",
        text: "Your selected operations are being applied to the sample.",
      },
      "download-ready": {
        title: "Download ready",
        text:
          "This is a static sample artifact, not a conversion of the entered URL.",
      },
      "human-verification": {
        title: "Human verification needed",
        text:
          "A production service could ask for a privacy-preserving challenge before expensive work.",
      },
      "rate-limited": {
        title: "Rate limit reached",
        text:
          "Wait before starting another conversion. No job history was stored.",
      },
      "source-blocked": {
        title: "Source blocked or sign-in required",
        text:
          "The public converter does not bypass access controls. Use the current-tab extension.",
      },
      "page-too-large": {
        title: "Page is too large",
        text: "Reduce the source scope or use a bounded multi-page workflow.",
      },
      timeout: {
        title: "Source timed out",
        text:
          "The page did not stabilize within the allowed processing window.",
      },
      expired: {
        title: "Preview expired",
        text:
          "Temporary jobs are not kept as history. Start a new preview.",
      },
      failed: {
        title: "Preview could not be completed",
        text: "This mock failure is recoverable. Retry the workflow.",
      },
    },
    sections: {
      hero: { title: "Opening section" },
      comparison: { title: "Mode comparison" },
      canvas: {
        title: "Complex graphic",
        warning: "Canvas block rasterized to preserve its appearance.",
      },
      article: {
        title: "Article body",
        warning: "One web font was substituted.",
      },
    },
    continuation: "continuation",
    workspaceEyebrow: "Mock preview workspace",
    pdfTitle: "PDF pages",
    pptxTitle: "PowerPoint slides",
    completeVerification: "Complete demo verification",
    retry: "Retry with the happy path",
    sectionsTitle: "Sections",
    previewLabel: "Document preview",
    inspectorTitle: "Inspector",
    globalWarningsTitle: "Global warnings",
    noWarnings: "No conversion warnings for this section.",
    up: "Up",
    down: "Down",
    restore: "Restore",
    remove: "Remove",
    split: "Split",
    merge: "Merge",
    demoWarning: "Demo output — no source URL was fetched.",
    mediaWarning: "Video and animation use static poster frames.",
    editableWarning: "One complex graphic remains a visual fallback.",
    operationCount: (count: number): string =>
      `${count} local edit operations`,
    openDownload: "Open sample download",
    renderFinal: "Render final sample",
    sampleLabel: "PAGE2FILE SAMPLE",
    modeLabels: {
      visual: "visual",
      editable: "editable",
    },
    kindLabels: {
      editable: "editable",
      "visual-fallback": "visual fallback",
    },
    dimensions: {
      onePage: "A4 · 1 page",
      twoPages: "A4 · 2 pages",
      oneSlide: "16:9 · 1 slide",
      twoSlides: "16:9 · 2 slides",
    },
    downloadEyebrow: "Static demo artifact",
    downloadTitle: "Your sample is ready",
    downloadText:
      "This file demonstrates the download state. It was not generated from a submitted URL and contains no user content.",
    downloadSample: "Download sample",
    returnToPreview: "Return to preview",
  },
  ru: {
    status: {
      idle: {
        title: "Ожидание запуска",
        text: "Выберите источник и режим.",
      },
      queued: {
        title: "В очереди",
        text: "Для этой mock-задачи зарезервировано место обработчика.",
      },
      "loading-source": {
        title: "Загрузка страницы",
        text:
          "На этом этапе будущий сервис загрузит и стабилизирует общедоступную страницу.",
      },
      analyzing: {
        title: "Анализ секций",
        text:
          "Определяются заголовки, визуальные границы и безопасные ссылки.",
      },
      "rendering-preview": {
        title: "Создание предпросмотра",
        text: "Подготавливаются миниатюры страниц или слайдов.",
      },
      "preview-ready": {
        title: "Предпросмотр готов",
        text:
          "Проверьте секции и предупреждения до финальной обработки.",
      },
      "partial-warning": {
        title: "Предпросмотр готов с заменами",
        text:
          "Один сложный блок преобразован в изображение; остальное можно редактировать.",
      },
      "rendering-final": {
        title: "Создание итогового файла",
        text:
          "Выбранные локальные операции применяются к демонстрационному файлу.",
      },
      "download-ready": {
        title: "Файл готов к скачиванию",
        text:
          "Это статический пример, а не результат конвертации введённого URL.",
      },
      "human-verification": {
        title: "Требуется проверка пользователя",
        text:
          "Перед ресурсоёмкой операцией рабочий сервис сможет запросить проверку с учётом конфиденциальности.",
      },
      "rate-limited": {
        title: "Достигнут лимит запросов",
        text:
          "Подождите перед новой конвертацией. История задач не сохранялась.",
      },
      "source-blocked": {
        title: "Источник закрыт или требует входа",
        text:
          "Открытый конвертер не обходит ограничения доступа. Используйте расширение для текущей вкладки.",
      },
      "page-too-large": {
        title: "Страница слишком большая",
        text:
          "Сократите объём источника или используйте ограниченный многостраничный сценарий.",
      },
      timeout: {
        title: "Источник не ответил вовремя",
        text:
          "Страница не стабилизировалась за отведённое время обработки.",
      },
      expired: {
        title: "Срок предпросмотра истёк",
        text:
          "Временные задачи не хранятся как история. Создайте новый предпросмотр.",
      },
      failed: {
        title: "Не удалось создать предпросмотр",
        text:
          "Эта демонстрационная ошибка допускает повторную попытку.",
      },
    },
    sections: {
      hero: { title: "Начальная секция" },
      comparison: { title: "Сравнение режимов" },
      canvas: {
        title: "Сложная графика",
        warning:
          "Блок canvas преобразован в изображение для сохранения внешнего вида.",
      },
      article: {
        title: "Текст статьи",
        warning: "Один веб-шрифт был заменён.",
      },
    },
    continuation: "продолжение",
    workspaceEyebrow: "Демонстрационный предпросмотр",
    pdfTitle: "Страницы PDF",
    pptxTitle: "Слайды PowerPoint",
    completeVerification: "Завершить демонстрационную проверку",
    retry: "Повторить успешный сценарий",
    sectionsTitle: "Секции",
    previewLabel: "Предпросмотр документа",
    inspectorTitle: "Инспектор",
    globalWarningsTitle: "Общие предупреждения",
    noWarnings: "Для этой секции нет предупреждений о конвертации.",
    up: "Вверх",
    down: "Вниз",
    restore: "Вернуть",
    remove: "Удалить",
    split: "Разделить",
    merge: "Объединить",
    demoWarning: "Демонстрационный результат — исходный URL не загружался.",
    mediaWarning:
      "Для видео и анимации используются статические кадры-постеры.",
    editableWarning:
      "Один сложный графический блок остаётся визуальной заменой.",
    operationCount: (count: number): string => {
      const lastDigit = count % 10;
      const lastTwoDigits = count % 100;
      const noun =
        lastDigit === 1 && lastTwoDigits !== 11
          ? "локальная операция"
          : lastDigit >= 2 &&
              lastDigit <= 4 &&
              (lastTwoDigits < 12 || lastTwoDigits > 14)
            ? "локальные операции"
            : "локальных операций";
      return `${count} ${noun} редактирования`;
    },
    openDownload: "Открыть скачивание примера",
    renderFinal: "Создать итоговый пример",
    sampleLabel: "ПРИМЕР PAGE2FILE",
    modeLabels: {
      visual: "визуальный",
      editable: "редактируемый",
    },
    kindLabels: {
      editable: "редактируемый",
      "visual-fallback": "визуальная замена",
    },
    dimensions: {
      onePage: "A4 · 1 страница",
      twoPages: "A4 · 2 страницы",
      oneSlide: "16:9 · 1 слайд",
      twoSlides: "16:9 · 2 слайда",
    },
    downloadEyebrow: "Статический демонстрационный файл",
    downloadTitle: "Ваш пример готов",
    downloadText:
      "Этот файл показывает состояние скачивания. Он не создан из введённого URL и не содержит пользовательских данных.",
    downloadSample: "Скачать пример",
    returnToPreview: "Вернуться к предпросмотру",
  },
};

export const getPreviewCopy = (locale: Locale): PreviewCopy =>
  previewCopy[isPublishedLocale(locale) ? locale : "en"];
