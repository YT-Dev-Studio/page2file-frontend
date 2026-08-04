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
  retryFromConverter: string;
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
  "en" | "ru" | "de" | "fr",
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
        text: "The source could not be processed within the safety limits.",
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
    retryFromConverter: "Start a new conversion",
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
        text: "Источник нельзя обработать в пределах безопасных ограничений.",
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
    retryFromConverter: "Начать новую конвертацию",
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
  de: {
    status: {
      accepted: {
        title: "Anfrage angenommen",
        text: "Die temporäre Konvertierung wurde erstellt.",
        tone: "progress",
        pending: true,
      },
      queued: {
        title: "In Warteschlange",
        text: "Warten auf einen isolierten Browser-Worker.",
        tone: "progress",
        pending: true,
      },
      loading: {
        title: "Öffentliche Seite wird geladen",
        text: "Das Ziel wird erneut geprüft, während Ressourcen innerhalb fester Grenzen geladen werden.",
        tone: "progress",
        pending: true,
      },
      analyzing: {
        title: "Abschnitte werden analysiert",
        text: "Layout, sichere Links und bearbeitbare Elemente werden erfasst.",
        tone: "progress",
        pending: true,
      },
      preview_rendering: {
        title: "Vorschau wird erstellt",
        text: "Temporäre Miniaturen der Seiten oder Folien werden erstellt.",
        tone: "progress",
        pending: true,
      },
      preview_ready: {
        title: "Vorschau bereit",
        text: "Prüfen Sie Abschnitte und sichtbare Ersetzungen vor der finalen Ausgabe.",
        tone: "success",
        pending: false,
      },
      final_queued: {
        title: "Finale Ausgabe in Warteschlange",
        text: "Die bestätigte Vorschauversion wartet auf einen Worker.",
        tone: "progress",
        pending: true,
      },
      final_rendering: {
        title: "Finale Datei wird erstellt",
        text: "Das endgültige Dokument verwendet dieselbe hier gezeigte Vorschauversion.",
        tone: "progress",
        pending: true,
      },
      download_ready: {
        title: "Download bereit",
        text: "Die temporäre verschlüsselte Datei kann heruntergeladen werden.",
        tone: "success",
        pending: false,
      },
      downloaded: {
        title: "Download abgeschlossen",
        text: "Für die temporäre Datei beginnt die kurze Frist bis zur Löschung.",
        tone: "success",
        pending: false,
      },
      failed_recoverable: {
        title: "Konvertierung unterbrochen",
        text: "Der Vorgang wurde sicher beendet. Starten Sie für einen neuen Versuch eine neue Vorschau.",
        tone: "error",
        pending: false,
      },
      failed_terminal: {
        title: "Konvertierung beendet",
        text: "Die Quelle konnte innerhalb der Sicherheitsgrenzen nicht verarbeitet werden.",
        tone: "error",
        pending: false,
      },
      cancelled: {
        title: "Konvertierung abgebrochen",
        text: "Die ausstehende Arbeit wurde beendet und temporäre Daten werden entfernt.",
        tone: "warning",
        pending: false,
      },
      expired: {
        title: "Vorschau abgelaufen",
        text: "Temporäre Aufgaben werden nicht als Konvertierungsverlauf gespeichert.",
        tone: "error",
        pending: false,
      },
    },
    workspaceEyebrow: "Sicherer temporärer Arbeitsbereich",
    pdfTitle: "PDF-Seiten",
    pptxTitle: "PowerPoint-Folien",
    sectionsTitle: "Abschnitte",
    previewLabel: "Dokumentvorschau",
    inspectorTitle: "Details",
    globalWarningsTitle: "Konvertierungswarnungen",
    noWarnings: "Für diesen Abschnitt liegen keine Konvertierungswarnungen vor.",
    noPreviewYet: "Die Vorschau erscheint nach Abschluss der Analyse.",
    up: "Nach oben",
    down: "Nach unten",
    restore: "Wiederherstellen",
    remove: "Entfernen",
    split: "Teilen",
    merge: "Verbinden",
    renderFinal: "Finale Datei erstellen",
    openDownload: "Download öffnen",
    cancel: "Konvertierung abbrechen",
    retryFromConverter: "Neue Konvertierung starten",
    revision: (value: number): string => `Version ${value}`,
    dimensions: (section: BackendPreviewSection): string =>
      `${Math.round(section.width)} × ${Math.round(section.height)} px`,
    fidelity: {
      native: "bearbeitbar",
      mixed: "gemischte Wiedergabetreue",
      visual: "Seitenaufnahme",
    },
    warnings: {
      RASTER_FALLBACK: "Ein komplexes Element wurde gerastert.",
      FONT_SUBSTITUTED: "Eine Webschrift wurde durch eine sichere Dokumentschrift ersetzt.",
      RESOURCE_OMITTED: "Eine Ressource außerhalb des sicheren Limits wurde ausgelassen.",
      STABILIZATION_INCOMPLETE:
        "Die Seite erreichte vor der Erfassung keinen vollständig stabilen Zustand.",
      LINK_REMOVED: "Ein unsicherer oder nicht unterstützter Link wurde entfernt.",
      CRAWL_PAGE_SKIPPED:
        "Ein Ziel wurde aufgrund des Umfangs oder der robots-Regeln übersprungen.",
    },
    downloadEyebrow: "Temporäre verschlüsselte Datei",
    downloadTitle: "Ihre Datei ist bereit",
    downloadPending: "Das endgültige Dokument wird noch erstellt.",
    downloadFile: "Datei herunterladen",
    returnToPreview: "Zurück zur Vorschau",
  },
  fr: {
    status: {
      accepted: {
        title: "Demande acceptée",
        text: "La conversion temporaire a été créée.",
        tone: "progress",
        pending: true,
      },
      queued: {
        title: "En attente",
        text: "En attente d’un processus de navigateur isolé.",
        tone: "progress",
        pending: true,
      },
      loading: {
        title: "Chargement de la page publique",
        text: "La destination est vérifiée à nouveau pendant le chargement des ressources dans les limites définies.",
        tone: "progress",
        pending: true,
      },
      analyzing: {
        title: "Analyse des sections",
        text: "La mise en page, les liens sûrs et les éléments modifiables sont en cours d’identification.",
        tone: "progress",
        pending: true,
      },
      preview_rendering: {
        title: "Création de l’aperçu",
        text: "Les miniatures temporaires des pages ou diapositives sont en cours de création.",
        tone: "progress",
        pending: true,
      },
      preview_ready: {
        title: "Aperçu prêt",
        text: "Vérifiez les sections et les remplacements visibles avant le rendu final.",
        tone: "success",
        pending: false,
      },
      final_queued: {
        title: "Rendu final en attente",
        text: "La version approuvée de l’aperçu attend un processus de traitement.",
        tone: "progress",
        pending: true,
      },
      final_rendering: {
        title: "Création du fichier final",
        text: "Le document final utilise la même version de l’aperçu que celle affichée ici.",
        tone: "progress",
        pending: true,
      },
      download_ready: {
        title: "Téléchargement prêt",
        text: "Le fichier temporaire chiffré est prêt à être téléchargé.",
        tone: "success",
        pending: false,
      },
      downloaded: {
        title: "Téléchargement terminé",
        text: "Le court délai précédant la suppression du fichier temporaire commence.",
        tone: "success",
        pending: false,
      },
      failed_recoverable: {
        title: "Conversion interrompue",
        text: "L’opération s’est arrêtée en toute sécurité. Créez un nouvel aperçu pour réessayer.",
        tone: "error",
        pending: false,
      },
      failed_terminal: {
        title: "Conversion arrêtée",
        text: "La source n’a pas pu être traitée dans les limites de sécurité.",
        tone: "error",
        pending: false,
      },
      cancelled: {
        title: "Conversion annulée",
        text: "Le travail en attente a été arrêté et les données temporaires seront supprimées.",
        tone: "warning",
        pending: false,
      },
      expired: {
        title: "Aperçu expiré",
        text: "Les tâches temporaires ne sont pas conservées dans un historique de conversions.",
        tone: "error",
        pending: false,
      },
    },
    workspaceEyebrow: "Espace de travail temporaire sécurisé",
    pdfTitle: "Pages PDF",
    pptxTitle: "Diapositives PowerPoint",
    sectionsTitle: "Sections",
    previewLabel: "Aperçu du document",
    inspectorTitle: "Détails",
    globalWarningsTitle: "Avertissements de conversion",
    noWarnings: "Aucun avertissement de conversion pour cette section.",
    noPreviewYet: "L’aperçu apparaîtra lorsque l’analyse sera terminée.",
    up: "Monter",
    down: "Descendre",
    restore: "Restaurer",
    remove: "Supprimer",
    split: "Scinder",
    merge: "Fusionner",
    renderFinal: "Créer le fichier final",
    openDownload: "Ouvrir le téléchargement",
    cancel: "Annuler la conversion",
    retryFromConverter: "Démarrer une nouvelle conversion",
    revision: (value: number): string => `Version ${value}`,
    dimensions: (section: BackendPreviewSection): string =>
      `${Math.round(section.width)} × ${Math.round(section.height)} px`,
    fidelity: {
      native: "modifiable",
      mixed: "fidélité mixte",
      visual: "capture de page",
    },
    warnings: {
      RASTER_FALLBACK: "Un élément complexe a été pixellisé.",
      FONT_SUBSTITUTED: "Une police web a été remplacée par une police de document sûre.",
      RESOURCE_OMITTED: "Une ressource dépassant la limite de sécurité a été omise.",
      STABILIZATION_INCOMPLETE:
        "La page n’était pas totalement stable avant la capture.",
      LINK_REMOVED: "Un lien non sûr ou non pris en charge a été supprimé.",
      CRAWL_PAGE_SKIPPED:
        "Une cible a été ignorée en raison du périmètre ou des règles robots.",
    },
    downloadEyebrow: "Fichier temporaire chiffré",
    downloadTitle: "Votre fichier est prêt",
    downloadPending: "Le document final est encore en cours de préparation.",
    downloadFile: "Télécharger le fichier",
    returnToPreview: "Retour à l’aperçu",
  },
};

const hasRealPreviewCopy = (
  locale: Locale,
): locale is keyof typeof realPreviewCopy => locale in realPreviewCopy;

export const getRealPreviewCopy = (locale: Locale): RealPreviewCopy =>
  realPreviewCopy[hasRealPreviewCopy(locale) ? locale : "en"];
