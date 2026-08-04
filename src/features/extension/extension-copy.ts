import type { Locale } from "@/shared/i18n/locales";

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

const extensionCopy: Record<"en" | "ru" | "de" | "fr", ExtensionCopy> = {
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
  de: {
    eyebrow: "Anleitung zur Erweiterung",
    title: "Vom aktiven Tab zum geprüften Dokument",
    lead: "Wählen Sie eine Schritt-für-Schritt-Anleitung oder eine barrierefreie Videoübersicht. Beide Anleitungen sind in der serverseitig gerenderten Seite enthalten.",
    formatLabel: "Anleitungsformat",
    stepsTab: "Schritt für Schritt",
    videoTab: "Video",
    stepLabel: "SCHRITT",
    steps: [
      {
        number: "01",
        title: "Quelle im aktuellen Tab öffnen",
        body: "Laden Sie die vollständige Webseite oder AI-Unterhaltung. Öffnen Sie eingeklappte Inhalte und scrollen Sie durch lange virtualisierte Chats, damit alle Inhalte vorhanden sind.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Ein für den Export mit der Erweiterung vorbereiteter Browser-Tab",
      },
      {
        number: "02",
        title: "Export konfigurieren und Vorschau erstellen",
        body: "Verwenden Sie das Page 2 File Panel in dieser Reihenfolge:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Das originale Page 2 File Panel mit nummerierten Hinweisen zu Format, Ausgabestil, Anpassungen und Vorschau",
        imageCaption:
          "Die Notion-Karte bezeichnet die im aktuellen Tab geöffnete Webseite und ist keine separate Page 2 File Integration.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Wählen Sie PDF zum Teilen und Archivieren oder PowerPoint zum Präsentieren und Bearbeiten.",
          "Wählen Sie Accurate copy für das ursprüngliche Erscheinungsbild oder Editable document für unterstützten Text und Links.",
          "Entfernen Sie bei Bedarf Bilder, Links oder Formatierungen unter Customize.",
          "Wählen Sie Preview PDF oder Preview PowerPoint, um die temporäre Vorschau zu öffnen.",
        ],
      },
      {
        number: "03",
        title: "Abschnitte vor dem Download prüfen",
        body: "Prüfen Sie die temporären Vorschaubilder, ordnen Sie Abschnitte per Ziehen oder Schaltflächen neu, entfernen Sie unerwünschte Inhalte und lesen Sie alle Warnungen zu Ersetzungen.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Temporäre Abschnittsvorschau mit Steuerelementen zum Sortieren",
      },
    ],
    videoPosterAlt:
      "Videovorschau, in der Webseitenabschnitte zu Dokumentseiten werden",
    chapters: [
      { title: "Quelle vorbereiten", time: "00:00" },
      { title: "Format und Modus wählen", time: "00:42" },
      { title: "Temporäre Vorschau bearbeiten", time: "01:28" },
      { title: "Herunterladen und prüfen", time: "02:14" },
    ],
    transcriptTitle: "Transkript",
    transcript: [
      "Öffnen Sie die zu exportierende Seite oder Unterhaltung und stellen Sie sicher, dass alle benötigten Abschnitte geladen sind.",
      "Aktivieren Sie Page 2 File über die Symbolleiste. Wählen Sie PDF oder PowerPoint und dann Accurate copy für visuelle Treue oder Editable document für unterstützten Text und Links.",
      "Prüfen Sie die temporäre Abschnittsleiste. Verschieben, teilen, verbinden oder entfernen Sie Abschnitte und lesen Sie vor dem Download die Warnungen.",
    ],
    breadcrumbLabel: "Brotkrümelnavigation",
    homeLabel: "Startseite",
    extensionLabel: "Chrome-Erweiterung",
    guideLabel: "Anleitung",
    relatedArticlesLabel: "Verwandte Artikel",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Eine vollständige Webseite als PDF erfassen" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Eine Webseite hinter einer Anmeldung speichern" },
      { slug: "export-ai-chats-privately", label: "AI-Chats privat exportieren" },
    ],
  },
  fr: {
    eyebrow: "Guide de l’extension",
    title: "De l’onglet actif au document vérifié",
    lead: "Choisissez un guide pas à pas ou un aperçu vidéo accessible. Les deux séries d’instructions figurent dans la page rendue côté serveur.",
    formatLabel: "Format des instructions",
    stepsTab: "Pas à pas",
    videoTab: "Vidéo",
    stepLabel: "ÉTAPE",
    steps: [
      {
        number: "01",
        title: "Ouvrez la source dans l’onglet actuel",
        body: "Chargez toute la page web ou la conversation AI. Dépliez les contenus masqués et faites défiler les longues conversations virtualisées afin que leur contenu soit présent.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Un onglet de navigateur préparé pour l’export avec l’extension",
      },
      {
        number: "02",
        title: "Configurez l’export et créez un aperçu",
        body: "Utilisez le panneau Page 2 File dans cet ordre :",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Le panneau Page 2 File original avec des repères numérotés pour le format, le style de sortie, les options et l’aperçu",
        imageCaption:
          "La carte Notion indique la page web ouverte dans l’onglet actuel ; il ne s’agit pas d’une intégration Page 2 File distincte.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Choisissez PDF pour le partage et l’archivage, ou PowerPoint pour la présentation et la modification.",
          "Choisissez Accurate copy pour préserver l’apparence de la page ou Editable document pour le texte et les liens pris en charge.",
          "Vous pouvez supprimer les images, les liens ou les styles dans Customize.",
          "Sélectionnez Preview PDF ou Preview PowerPoint pour ouvrir l’aperçu temporaire.",
        ],
      },
      {
        number: "03",
        title: "Vérifiez les sections avant le téléchargement",
        body: "Examinez les miniatures temporaires, réorganisez les sections par glisser-déposer ou avec les boutons, supprimez le contenu inutile et lisez chaque avertissement de remplacement.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Un aperçu temporaire des sections avec des commandes de réorganisation",
      },
    ],
    videoPosterAlt:
      "Affiche vidéo montrant des sections de page web transformées en pages de document",
    chapters: [
      { title: "Préparer la source", time: "00:00" },
      { title: "Choisir le format et le mode", time: "00:42" },
      { title: "Modifier l’aperçu temporaire", time: "01:28" },
      { title: "Télécharger et vérifier", time: "02:14" },
    ],
    transcriptTitle: "Transcription",
    transcript: [
      "Ouvrez la page ou la conversation à exporter et vérifiez que toutes les sections nécessaires sont chargées.",
      "Activez Page 2 File depuis la barre d’outils. Choisissez PDF ou PowerPoint, puis Accurate copy pour la fidélité visuelle ou Editable document pour le texte et les liens pris en charge.",
      "Vérifiez la liste temporaire des sections. Déplacez, scindez, fusionnez ou supprimez des sections, puis lisez les avertissements avant le téléchargement.",
    ],
    breadcrumbLabel: "Fil d’Ariane",
    homeLabel: "Accueil",
    extensionLabel: "Extension Chrome",
    guideLabel: "Guide d’utilisation",
    relatedArticlesLabel: "Articles associés",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Capturer une page web complète en PDF" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Enregistrer une page web après connexion" },
      { slug: "export-ai-chats-privately", label: "Exporter des conversations AI en toute confidentialité" },
    ],
  },
};

const hasExtensionCopy = (
  locale: Locale,
): locale is keyof typeof extensionCopy => locale in extensionCopy;

export const getExtensionCopy = (locale: Locale): ExtensionCopy =>
  extensionCopy[hasExtensionCopy(locale) ? locale : "en"];
