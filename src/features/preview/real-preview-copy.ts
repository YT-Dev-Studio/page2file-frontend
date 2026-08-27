import type {
  BackendJobStatus,
  BackendPreviewSection,
} from "@/shared/api/backend-contract";
import type { Locale } from "@/shared/i18n/locales";

type StatusMessage = {
  title: string;
  text: string;
  tone: "progress" | "warning" | "error" | "success";
  pending: boolean;
};

export type RealPreviewCopy = {
  status: Record<BackendJobStatus, StatusMessage>;
  workspaceEyebrow: string;
  pdfTitle: string;
  pptxTitle: string;
  sectionsTitle: string;
  previewLabel: string;
  inspectorTitle: string;
  globalWarningsTitle: string;
  noWarnings: string;
  noPreviewYet: string;
  up: string;
  down: string;
  restore: string;
  remove: string;
  split: string;
  merge: string;
  renderFinal: string;
  openDownload: string;
  cancel: string;
  openExtensionGuide: string;
  revision: (value: number) => string;
  dimensions: (section: BackendPreviewSection) => string;
  fidelity: Record<BackendPreviewSection["fidelity"], string>;
  warnings: Record<string, string>;
  downloadEyebrow: string;
  downloadTitle: string;
  downloadPending: string;
  downloadFile: string;
  returnToPreview: string;
};

const realPreviewCopy: Record<
  Locale,
  RealPreviewCopy
> = {
  en: {
    status: {
      accepted: {
        title: "Request accepted",
        text: "The temporary conversion has been created.",
        tone: "progress",
        pending: true,
      },
      queued: {
        title: "Queued",
        text: "Waiting for an isolated browser worker.",
        tone: "progress",
        pending: true,
      },
      loading: {
        title: "Loading public page",
        text: "The destination is revalidated while resources load within fixed limits.",
        tone: "progress",
        pending: true,
      },
      analyzing: {
        title: "Analyzing sections",
        text: "Layout, safe links and editable elements are being mapped.",
        tone: "progress",
        pending: true,
      },
      preview_rendering: {
        title: "Rendering preview",
        text: "Temporary page or slide thumbnails are being created.",
        tone: "progress",
        pending: true,
      },
      preview_ready: {
        title: "Preview ready",
        text: "Review sections and visible fallbacks before final rendering.",
        tone: "success",
        pending: false,
      },
      final_queued: {
        title: "Final render queued",
        text: "The accepted preview revision is waiting for a worker.",
        tone: "progress",
        pending: true,
      },
      final_rendering: {
        title: "Rendering final file",
        text: "The final document uses the same preview revision shown here.",
        tone: "progress",
        pending: true,
      },
      download_ready: {
        title: "Download ready",
        text: "The temporary encrypted artifact is ready to download.",
        tone: "success",
        pending: false,
      },
      downloaded: {
        title: "Download completed",
        text: "The temporary artifact is entering its short deletion grace period.",
        tone: "success",
        pending: false,
      },
      failed_recoverable: {
        title: "Conversion interrupted",
        text: "The operation failed safely. Start a new preview to retry.",
        tone: "error",
        pending: false,
      },
      failed_terminal: {
        title: "Conversion stopped",
        text: "The submitted page could not be processed within the safety limits.",
        tone: "error",
        pending: false,
      },
      cancelled: {
        title: "Conversion cancelled",
        text: "Queued work was stopped and temporary data will be removed.",
        tone: "warning",
        pending: false,
      },
      expired: {
        title: "Preview expired",
        text: "Temporary jobs are not retained as conversion history.",
        tone: "error",
        pending: false,
      },
    },
    workspaceEyebrow: "Secure temporary workspace",
    pdfTitle: "PDF pages",
    pptxTitle: "PowerPoint slides",
    sectionsTitle: "Sections",
    previewLabel: "Document preview",
    inspectorTitle: "Inspector",
    globalWarningsTitle: "Conversion warnings",
    noWarnings: "No conversion warnings for this section.",
    noPreviewYet: "The preview will appear when analysis is complete.",
    up: "Up",
    down: "Down",
    restore: "Restore",
    remove: "Remove",
    split: "Split",
    merge: "Merge",
    renderFinal: "Render final file",
    openDownload: "Open download",
    cancel: "Cancel conversion",
    openExtensionGuide: "Open the extension guide",
    revision: (value: number): string => `Revision ${value}`,
    dimensions: (section: BackendPreviewSection): string =>
      `${Math.round(section.width)} × ${Math.round(section.height)} px`,
    fidelity: {
      native: "editable",
      mixed: "mixed fidelity",
      visual: "visual",
    },
    warnings: {
      RASTER_FALLBACK: "A complex element was rasterized.",
      FONT_SUBSTITUTED: "A web font was replaced with a safe document font.",
      RESOURCE_OMITTED: "A resource outside the safe budget was omitted.",
      STABILIZATION_INCOMPLETE:
        "The page did not become fully idle before capture.",
      LINK_REMOVED: "An unsafe or unsupported link was removed.",
      CRAWL_PAGE_SKIPPED: "A crawl target was skipped by scope or robots rules.",
    },
    downloadEyebrow: "Temporary encrypted artifact",
    downloadTitle: "Your file is ready",
    downloadPending: "The final document is still being prepared.",
    downloadFile: "Download file",
    returnToPreview: "Return to preview",
  },
  ru: {
    status: {
      accepted: {
        title: "Запрос принят",
        text: "Временная задача конвертации создана.",
        tone: "progress",
        pending: true,
      },
      queued: {
        title: "В очереди",
        text: "Ожидаем изолированный браузерный обработчик.",
        tone: "progress",
        pending: true,
      },
      loading: {
        title: "Загрузка общедоступной страницы",
        text: "Адрес повторно проверяется, а ресурсы загружаются в заданных лимитах.",
        tone: "progress",
        pending: true,
      },
      analyzing: {
        title: "Анализ секций",
        text: "Определяются макет, безопасные ссылки и редактируемые элементы.",
        tone: "progress",
        pending: true,
      },
      preview_rendering: {
        title: "Создание предпросмотра",
        text: "Формируются временные миниатюры страниц или слайдов.",
        tone: "progress",
        pending: true,
      },
      preview_ready: {
        title: "Предпросмотр готов",
        text: "Проверьте секции и видимые замены перед финальным созданием файла.",
        tone: "success",
        pending: false,
      },
      final_queued: {
        title: "Финальный файл в очереди",
        text: "Принятая ревизия предпросмотра ожидает обработчик.",
        tone: "progress",
        pending: true,
      },
      final_rendering: {
        title: "Создание итогового файла",
        text: "Документ создаётся из той же ревизии, которая показана здесь.",
        tone: "progress",
        pending: true,
      },
      download_ready: {
        title: "Файл готов",
        text: "Временный зашифрованный файл готов к скачиванию.",
        tone: "success",
        pending: false,
      },
      downloaded: {
        title: "Скачивание завершено",
        text: "Начался короткий период перед удалением временного файла.",
        tone: "success",
        pending: false,
      },
      failed_recoverable: {
        title: "Конвертация прервана",
        text: "Операция завершилась безопасно. Создайте новый предпросмотр для повтора.",
        tone: "error",
        pending: false,
      },
      failed_terminal: {
        title: "Конвертация остановлена",
        text: "Переданную страницу нельзя обработать в пределах безопасных ограничений.",
        tone: "error",
        pending: false,
      },
      cancelled: {
        title: "Конвертация отменена",
        text: "Работа остановлена, временные данные будут удалены.",
        tone: "warning",
        pending: false,
      },
      expired: {
        title: "Срок предпросмотра истёк",
        text: "Временные задачи не сохраняются как история конвертаций.",
        tone: "error",
        pending: false,
      },
    },
    workspaceEyebrow: "Безопасная временная рабочая область",
    pdfTitle: "Страницы PDF",
    pptxTitle: "Слайды PowerPoint",
    sectionsTitle: "Секции",
    previewLabel: "Предпросмотр документа",
    inspectorTitle: "Инспектор",
    globalWarningsTitle: "Предупреждения конвертации",
    noWarnings: "Для этой секции нет предупреждений.",
    noPreviewYet: "Предпросмотр появится после завершения анализа.",
    up: "Вверх",
    down: "Вниз",
    restore: "Вернуть",
    remove: "Удалить",
    split: "Разделить",
    merge: "Объединить",
    renderFinal: "Создать итоговый файл",
    openDownload: "Открыть скачивание",
    cancel: "Отменить конвертацию",
    openExtensionGuide: "Открыть инструкцию по расширению",
    revision: (value: number): string => `Ревизия ${value}`,
    dimensions: (section: BackendPreviewSection): string =>
      `${Math.round(section.width)} × ${Math.round(section.height)} пкс`,
    fidelity: {
      native: "редактируемый",
      mixed: "смешанная точность",
      visual: "визуальный",
    },
    warnings: {
      RASTER_FALLBACK: "Сложный элемент преобразован в изображение.",
      FONT_SUBSTITUTED: "Веб-шрифт заменён безопасным шрифтом документа.",
      RESOURCE_OMITTED: "Ресурс за пределами безопасного лимита пропущен.",
      STABILIZATION_INCOMPLETE:
        "Страница не перешла в полностью стабильное состояние.",
      LINK_REMOVED: "Небезопасная или неподдерживаемая ссылка удалена.",
      CRAWL_PAGE_SKIPPED:
        "Страница пропущена из-за области обхода или правил robots.",
    },
    downloadEyebrow: "Временный зашифрованный файл",
    downloadTitle: "Ваш файл готов",
    downloadPending: "Итоговый документ ещё создаётся.",
    downloadFile: "Скачать файл",
    returnToPreview: "Вернуться к предпросмотру",
  },
};

export const getRealPreviewCopy = (locale: Locale): RealPreviewCopy =>
  realPreviewCopy[locale];
