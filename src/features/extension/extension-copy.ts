import type { Locale } from "@/shared/i18n/locales";

export type ExtensionInlineLinkCopy = {
  href: string;
  label: string;
};

export type ExtensionModeCopy = {
  body: string;
  bodyLink?: ExtensionInlineLinkCopy;
  title: string;
};

export type ExtensionStepCopy = {
  body: string;
  title: string;
};

export type ExtensionGuideFactCopy = {
  body: string;
  title: string;
};

export type ExtensionGuideStepId = "pin" | "open" | "launch" | "result";

export type ExtensionGuideStepCopy = {
  id: ExtensionGuideStepId;
  imageAlt: string;
  title: string;
};

export type ExtensionGuideScreenId = "modes" | "settings";

export type ExtensionGuideScreenCopy = {
  id: ExtensionGuideScreenId;
  imageAlt: string;
  title: string;
};

export type ExtensionCopy = {
  homeTitle: string;
  homeLead: string;
  guideActionLabel: string;
  bannerTitle: string;
  bannerBody: string;
  bannerActionLabel: string;
  modesTitle: string;
  modesLead: string;
  modes: readonly [ExtensionModeCopy, ExtensionModeCopy, ExtensionModeCopy];
  sourcesTitle: string;
  sourcesBody: string;
  sources: readonly [string, string, string, string];
  processTitle: string;
  processBody: string;
  steps: readonly [
    ExtensionStepCopy,
    ExtensionStepCopy,
    ExtensionStepCopy,
    ExtensionStepCopy,
    ExtensionStepCopy,
    ExtensionStepCopy,
  ];
  homePrivacyTitle: string;
  privacyTitle: string;
  privacyBody: string;
  privacyPoints: readonly [string, string, string];
  privacyFactTitles: readonly [string, string, string];
  guideTitle: string;
  guideLead: string;
  guideSteps: readonly [
    ExtensionGuideStepCopy,
    ExtensionGuideStepCopy,
    ExtensionGuideStepCopy,
    ExtensionGuideStepCopy,
  ];
  guideOptionsTitle: string;
  guideOptionsLead: string;
  guideOptionScreens: readonly [ExtensionGuideScreenCopy, ExtensionGuideScreenCopy];
  supportedTitle: string;
  supportedGroups: readonly [
    ExtensionGuideFactCopy,
    ExtensionGuideFactCopy,
    ExtensionGuideFactCopy,
  ];
  limitsTitle: string;
  limits: readonly [string, string, string, string, string];
  limitTitles: readonly [string, string, string, string, string];
  breadcrumbLabel: string;
  homeLabel: string;
  guideLabel: string;
};

const englishCopy: ExtensionCopy = {
  homeTitle: "Save the current webpage or chat as PDF.",
  homeLead:
    "Page 2 PDF is the Chrome extension from Page 2 File. It works on the active tab and creates either a visual full-page copy, a document with selectable text and links, or a clean transcript of a supported AI or messenger conversation.",
  guideActionLabel: "View instructions",
  bannerTitle: "Export the open tab to PDF",
  bannerBody:
    "The website does not receive the tab content or store user data. Open any website in a new tab and run Page 2 PDF.",
  bannerActionLabel: "Install extension",
  modesTitle: "Choose the PDF you need",
  modesLead:
    "Different modes use different capture methods, so choose based on what matters most: appearance, selectable content, or conversation structure.",
  modes: [
    {
      title: "Accurate copy",
      body: "Prepares the page's main scroll area and captures the rendered result as image-based PDF pages. Use it when appearance matters more than selectable text or working links.",
    },
    {
      title: "Editable document",
      body: "Creates a PDF with selectable text and safe links. Choose As viewed or Print optimized, remove images, links, or styling, and optionally include supported form fields or a project archive.",
      bodyLink: {
        href: "/en/blog/preserve-webpage-links-forms-text",
        label: "project archive",
      },
    },
    {
      title: "AI / Chat",
      body: "Exports a conversation from popular messengers such as Telegram and WhatsApp, as well as popular AI chats. Keep all messages or replies only, preserve supported code blocks, tables, citations, files, and media, or remove media and links.",
    },
  ],
  sourcesTitle: "Pages and chats you can save",
  sourcesBody:
    "The extension reads only the active tab. First open any website in your browser, then open Page 2 PDF. The extension does not accept a pasted URL, crawl a site, or bypass access restrictions.",
  sources: [
    "Public webpages open in the current browser tab.",
    "Authorized pages that are open in the current browser tab.",
    "Google Docs, Sheets, and Slides shown in the browser.",
    "Supported AI conversations and web messengers: ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web, and Telegram Web.",
  ],
  processTitle: "Current tab to PDF",
  processBody:
    "The website does not receive the tab content or store user data. Open any website in a new tab and run Page 2 PDF.",
  steps: [
    { title: "Open a website", body: "Load the webpage, local HTML file, or conversation you want to keep." },
    { title: "Open Page 2 PDF", body: "Click the extension icon while the tab being exported is active." },
    { title: "Choose an output style", body: "Select Accurate copy, Editable document, or AI / Chat." },
    { title: "Configure the target PDF", body: "Choose orientation, output profile, message scope, or content to remove when those controls apply." },
    { title: "Keep the tab open", body: "Wait for available content to load and the preview to be prepared without closing the original page or navigating elsewhere." },
    { title: "Check and save", body: "Review the PDF pages in Chrome's preview, then use the download or print button." },
  ],
  homePrivacyTitle: "Local processing with no sign-up",
  privacyTitle: "Processed in your browser",
  privacyBody:
    "Page 2 PDF creates the document inside the extension. Page and conversation content is not uploaded to Page 2 File servers. A Page 2 File account is not required to use the extension.",
  privacyPoints: [
    "The extension reads content only from the active tab where you launch it.",
    "Temporary preview data is removed after the session. Remaining data older than two hours is cleared the next time the extension runs.",
    "Optional website analytics run only after consent, remain separate from extension PDF processing, and never receive active-tab content.",
  ],
  privacyFactTitles: [
    "Only the active tab",
    "Automatic cleanup",
    "Separate analytics",
  ],
  guideTitle: "How to use the Page 2 PDF Chrome extension",
  guideLead:
    "Open the original page in your browser, choose the capture mode that matches the result you need, keep the tab open during preparation, and check the PDF before saving it.",
  guideSteps: [
    {
      id: "pin",
      title: "Pin the extension",
      imageAlt: "Chrome extensions menu showing Page 2 PDF and the Pin to toolbar action",
    },
    {
      id: "open",
      title: "Open any page",
      imageAlt: "Page 2 File open on localhost with the Page 2 PDF icon pinned in the browser toolbar",
    },
    {
      id: "launch",
      title: "Click the extension",
      imageAlt: "Page 2 PDF panel open on a local Page 2 File page with Accurate copy selected",
    },
    {
      id: "result",
      title: "Get the PDF",
      imageAlt: "Page 2 PDF result open in the browser PDF preview",
    },
  ],
  guideOptionsTitle: "Want to customize the PDF?",
  guideOptionsLead:
    "Choose the appropriate mode and open the settings if you want to adjust the result.",
  guideOptionScreens: [
    {
      id: "modes",
      title: "Choose an output mode",
      imageAlt: "Page 2 PDF panel showing Accurate copy, Editable document, and AI / Chat",
    },
    {
      id: "settings",
      title: "Open the settings",
      imageAlt:
        "Page 2 PDF panel with Editable document settings for profile, orientation, and content",
    },
  ],
  supportedTitle: "Supported browser chats",
  supportedGroups: [
    {
      title: "AI chats",
      body: "Dedicated adapters are available for ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, and Manus.",
    },
    {
      title: "Messengers",
      body: "Page 2 PDF supports the current WhatsApp Web conversation and Telegram Web chats or channels.",
    },
    {
      title: "Conditional compatibility",
      body: "A different AI page works only when Page 2 PDF can identify both user and assistant messages. This is conditional compatibility, not universal support.",
    },
  ],
  limitsTitle: "Before you start",
  limits: [
    "Chrome blocks extensions on browser settings, the Chrome Web Store, and other protected pages.",
    "Expand the content you need and keep the original page open. Items the page cannot load may be omitted or represented by a placeholder.",
    "AI / Chat uses portrait pages, follows the history limit shown by the installed version or plan, and includes only messages its bounded loader can retrieve.",
    "Local HTML may require enabling file URL access for Page 2 PDF in Chrome's extension settings.",
    "Very tall pages, virtualized lists, unavailable media, protected frames, or a page that keeps changing can prevent a complete result.",
  ],
  limitTitles: [
    "Protected pages",
    "Keep the page open",
    "Conversation limit",
    "Local HTML permission",
    "Complex and changing pages",
  ],
  breadcrumbLabel: "Breadcrumbs",
  homeLabel: "Home",
  guideLabel: "Chrome extension guide",
};

const russianCopy: ExtensionCopy = {
  homeTitle: "Сохраняйте текущую веб-страницу или чат в PDF.",
  homeLead:
    "Page 2 PDF — расширение Chrome от Page 2 File. Оно работает с активной вкладкой и создает визуальную копию всей страницы, документ с выделяемым текстом и ссылками либо чистую расшифровку поддерживаемого AI-чата или мессенджера.",
  guideActionLabel: "Смотреть инструкцию",
  bannerTitle: "Экспорт открытой вкладки в PDF",
  bannerBody:
    "Сайт не получает содержимое вкладки и не хранит пользовательские данные. Откройте любой сайт в новой вкладке и запустите Page 2 PDF",
  bannerActionLabel: "Установить расширение",
  modesTitle: "Выберите нужный тип PDF",
  modesLead:
    "Разные режимы используют разные способы захвата, поэтому выбор зависит от того, что важнее: внешний вид, выделяемый контент или структура переписки.",
  modes: [
    {
      title: "Точная копия",
      body: "Подготавливает основную прокручиваемую область и сохраняет отображенную страницу как изображения в PDF. Выбирайте этот режим, когда внешний вид важнее выделяемого текста и активных ссылок.",
    },
    {
      title: "Редактируемый документ",
      body: "Создает PDF с выделяемым текстом и безопасными ссылками. Можно выбрать вид с экрана или печатную версию, убрать изображения, ссылки и стили, а также включить поддерживаемые поля форм или архив проекта.",
      bodyLink: {
        href: "/ru/blog/preserve-webpage-links-forms-text",
        label: "архив проекта",
      },
    },
    {
      title: "AI / Чат",
      body: "Экспортирует диалог из популярных мессенджеров, таких как Telegram, WhatsApp. А также, популярные ИИ-чаты. Можно оставить все сообщения или только ответы, сохранить поддерживаемые блоки кода, таблицы, ссылки, файлы и медиа либо убрать медиа и ссылки.",
    },
  ],
  sourcesTitle: "Какие страницы и чаты можно сохранить",
  sourcesBody:
    "Расширение читает только активную вкладку. Сначала откройте любой веб-сайт в браузере, затем откройте Page 2 PDF. Расширение не принимает вставленный URL, не обходит сайт и не снимает ограничения доступа.",
  sources: [
    "Публичные страницы, открытые в текущей вкладке браузера.",
    "Авторизованные страницы, которые открыты в текущей вкладке браузера.",
    "Google Docs, Sheets и Slides, открытые в браузере.",
    "Поддерживаемые AI-чаты и мессенджеры: ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web и Telegram Web.",
  ],
  processTitle: "Текущая вкладка в PDF",
  processBody:
    "Сайт не получает содержимое вкладки и не хранит пользовательские данные. Откройте любой сайт в новой вкладке и запустите Page 2 PDF",
  steps: [
    { title: "Откройте сайт", body: "Загрузите веб-страницу, локальный HTML-файл или нужный диалог." },
    { title: "Откройте Page 2 PDF", body: "Нажмите значок расширения, пока нужная вкладка активна." },
    { title: "Выберите режим", body: "Выберите «Точная копия», «Редактируемый документ» или «AI / Чат»." },
    { title: "Настройте целевой PDF", body: "Выберите ориентацию, профиль вывода, состав сообщений или исключаемый контент, если эти настройки доступны." },
    { title: "Не закрывайте вкладку", body: "Дождитесь загрузки доступного контента и подготовки предпросмотра, не закрывая исходную страницу и не переходя на другую страницу." },
    { title: "Проверьте и сохраните", body: "Просмотрите страницы в PDF в режиме предпросмотра Chrome и воспользуйтесь кнопкой скачивания или печати." },
  ],
  homePrivacyTitle: "Локальная обработка и без регистрации",
  privacyTitle: "Обработка выполняется в браузере",
  privacyBody:
    "Page 2 PDF создает документ внутри расширения. Содержимое страниц и переписок не загружается на серверы Page 2 File. Для использования расширения учетная запись не требуется.",
  privacyPoints: [
    "Расширение читает содержимое только из активной вкладки, где вы его запускаете.",
    "Временные данные предпросмотра удаляются после сессии. Оставшиеся данные старше двух часов очищаются при следующем запуске расширения.",
    "Необязательная аналитика сайта включается только после согласия, не относится к обработке PDF в расширении и не получает содержимое активной вкладки.",
  ],
  privacyFactTitles: [
    "Только активная вкладка",
    "Автоматическая очистка",
    "Отдельная аналитика",
  ],
  guideTitle: "Как использовать расширение Page 2 PDF",
  guideLead:
    "Откройте исходную страницу в браузере, выберите режим под нужный результат, не закрывайте вкладку во время подготовки и проверьте PDF перед сохранением.",
  guideSteps: [
    {
      id: "pin",
      title: "Закрепите расширение",
      imageAlt: "Меню расширений Chrome с Page 2 PDF и действием «Закрепить на панели инструментов»",
    },
    {
      id: "open",
      title: "Откройте любую страницу",
      imageAlt: "Локальная страница Page 2 File со значком Page 2 PDF на панели браузера",
    },
    {
      id: "launch",
      title: "Кликните на расширение",
      imageAlt: "Панель Page 2 PDF поверх локальной страницы с выбранным режимом «Точная копия»",
    },
    {
      id: "result",
      title: "Получите PDF",
      imageAlt: "Результат Page 2 PDF в окне предпросмотра PDF браузера",
    },
  ],
  guideOptionsTitle: "Хотите настроить PDF?",
  guideOptionsLead:
    "Выберите подходящий режим и откройте настройки, если хотите изменить результат.",
  guideOptionScreens: [
    {
      id: "modes",
      title: "Выберите режим",
      imageAlt: "Панель Page 2 PDF с режимами «Точная копия», «Редактируемый документ» и «AI / Чат»",
    },
    {
      id: "settings",
      title: "Откройте настройки",
      imageAlt:
        "Панель Page 2 PDF с настройками профиля, ориентации и содержимого редактируемого документа",
    },
  ],
  supportedTitle: "Поддерживаемые чаты в браузере",
  supportedGroups: [
    {
      title: "ИИ-чаты",
      body: "Отдельные адаптеры реализованы для ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot и Manus.",
    },
    {
      title: "Мессенджеры",
      body: "Page 2 PDF поддерживает текущую переписку WhatsApp Web, а также чаты и каналы Telegram Web.",
    },
    {
      title: "Условная совместимость",
      body: "Другой AI-сайт работает только тогда, когда Page 2 PDF распознает сообщения пользователя и ассистента. Это не универсальная поддержка.",
    },
  ],
  limitsTitle: "Что проверить перед началом",
  limits: [
    "Chrome запрещает расширениям работать на страницах настроек браузера, в Chrome Web Store и на других защищенных страницах.",
    "Раскройте нужный контент и не закрывайте исходную страницу. Недоступные странице элементы могут быть пропущены или заменены пометкой.",
    "Режим AI / Чат использует книжную ориентацию, соблюдает предел истории для установленной версии или тарифа и включает только полученные загрузчиком сообщения.",
    "Для локального HTML может потребоваться разрешить Page 2 PDF доступ к файловым URL в настройках расширений Chrome.",
    "Очень высокие страницы, виртуальные списки, недоступные медиа, защищенные фреймы или постоянно меняющаяся страница могут привести к неполному результату.",
  ],
  limitTitles: [
    "Защищенные страницы",
    "Не закрывайте страницу",
    "Ограничение переписки",
    "Доступ к локальному HTML",
    "Сложные и меняющиеся страницы",
  ],
  breadcrumbLabel: "Навигационная цепочка",
  homeLabel: "Главная",
  guideLabel: "Инструкция по расширению",
};

const germanCopy: ExtensionCopy = {
  homeTitle: "Die aktuelle Webseite oder den aktuellen Chat als PDF speichern.",
  homeLead:
    "Page 2 PDF ist die Chrome-Erweiterung von Page 2 File. Sie arbeitet mit dem aktiven Tab und erstellt entweder eine visuelle Ganzseitenkopie, ein Dokument mit auswählbarem Text und Links oder ein aufgeräumtes Protokoll eines unterstützten KI- oder Messenger-Chats.",
  guideActionLabel: "Anleitung ansehen",
  bannerTitle: "Den geöffneten Tab als PDF exportieren",
  bannerBody:
    "Die Website erhält den Inhalt des Tabs nicht und speichert keine Benutzerdaten. Öffnen Sie eine Website in einem neuen Tab und starten Sie Page 2 PDF.",
  bannerActionLabel: "Erweiterung installieren",
  modesTitle: "Das passende PDF auswählen",
  modesLead:
    "Die Modi verwenden unterschiedliche Erfassungsmethoden. Entscheidend ist, ob Erscheinungsbild, auswählbarer Inhalt oder die Struktur des Dialogs wichtiger ist.",
  modes: [
    {
      title: "Accurate copy",
      body: "Bereitet den Haupt-Scrollbereich vor und erfasst die sichtbare Darstellung als bildbasierte PDF-Seiten. Verwenden Sie diesen Modus, wenn das Erscheinungsbild wichtiger ist als auswählbarer Text oder funktionierende Links.",
    },
    {
      title: "Editable document",
      body: "Erstellt ein PDF mit auswählbarem Text und sicheren Links. Wählen Sie As viewed oder Print optimized, entfernen Sie Bilder, Links oder Stile und übernehmen Sie bei Bedarf unterstützte Formularfelder oder ein Projektarchiv.",
      bodyLink: {
        href: "/de/blog/preserve-webpage-links-forms-text",
        label: "Projektarchiv",
      },
    },
    {
      title: "AI / Chat",
      body: "Exportiert einen Dialog aus unterstützten Messengern wie Telegram und WhatsApp sowie aus unterstützten KI-Chats. Sie können alle Nachrichten oder nur Antworten übernehmen und unterstützte Codeblöcke, Tabellen, Quellen, Dateien und Medien erhalten oder Medien und Links entfernen.",
    },
  ],
  sourcesTitle: "Speicherbare Seiten und Chats",
  sourcesBody:
    "Die Erweiterung liest ausschließlich den aktiven Tab. Öffnen Sie zuerst die gewünschte Seite und danach Page 2 PDF. Die Erweiterung nimmt keine eingefügte URL entgegen, durchsucht keine Website und umgeht keine Zugriffsbeschränkungen.",
  sources: [
    "Öffentliche Webseiten im aktuellen Browser-Tab.",
    "Autorisierte Seiten, die im aktuellen Browser-Tab geöffnet sind.",
    "Im Browser angezeigte Google Docs, Sheets und Slides.",
    "Unterstützte KI-Dialoge und Web-Messenger: ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web und Telegram Web.",
  ],
  processTitle: "Vom aktuellen Tab zum PDF",
  processBody:
    "Die Website erhält den Inhalt des Tabs nicht und speichert keine Benutzerdaten. Öffnen Sie eine Website in einem neuen Tab und starten Sie Page 2 PDF.",
  steps: [
    { title: "Website öffnen", body: "Laden Sie die Webseite, lokale HTML-Datei oder Unterhaltung, die Sie speichern möchten." },
    { title: "Page 2 PDF öffnen", body: "Klicken Sie auf das Symbol der Erweiterung, während der zu exportierende Tab aktiv ist." },
    { title: "Ausgabeart wählen", body: "Wählen Sie Accurate copy, Editable document oder AI / Chat." },
    { title: "Ziel-PDF konfigurieren", body: "Legen Sie Ausrichtung, Ausgabeprofil, Nachrichtenumfang oder zu entfernende Inhalte fest, sofern diese Einstellungen verfügbar sind." },
    { title: "Tab geöffnet lassen", body: "Warten Sie, bis verfügbare Inhalte geladen und die Vorschau vorbereitet sind. Schließen Sie die Originalseite nicht und wechseln Sie nicht zu einer anderen Adresse." },
    { title: "Prüfen und speichern", body: "Kontrollieren Sie die PDF-Seiten in der Chrome-Vorschau und verwenden Sie anschließend die Download- oder Druckschaltfläche." },
  ],
  homePrivacyTitle: "Verarbeitung ohne Anmeldung",
  privacyTitle: "Im Browser verarbeitet",
  privacyBody:
    "Page 2 PDF erstellt das Dokument innerhalb der Erweiterung. Seiten- und Chatinhalte werden nicht auf Server von Page 2 File hochgeladen. Für die Erweiterung ist kein Page-2-File-Konto erforderlich.",
  privacyPoints: [
    "Die Erweiterung liest Inhalte nur aus dem aktiven Tab, in dem Sie sie starten.",
    "Temporäre Vorschaudaten werden nach der Sitzung entfernt. Verbleibende Daten, die älter als zwei Stunden sind, werden beim nächsten Start gelöscht.",
    "Optionale Website-Analytics werden erst nach Ihrer Einwilligung aktiviert, bleiben von der PDF-Verarbeitung getrennt und erhalten niemals den Inhalt des aktiven Tabs.",
  ],
  privacyFactTitles: [
    "Nur der aktive Tab",
    "Automatische Bereinigung",
    "Getrennte Analytics",
  ],
  guideTitle: "Page 2 PDF in Chrome verwenden",
  guideLead:
    "Öffnen Sie die Originalseite, wählen Sie den zum gewünschten Ergebnis passenden Modus, lassen Sie den Tab während der Vorbereitung geöffnet und prüfen Sie das PDF vor dem Speichern. Die Abbildungen zeigen die derzeitige englische Oberfläche der Erweiterung.",
  guideSteps: [
    {
      id: "pin",
      title: "Erweiterung anheften",
      imageAlt: "Englisches Chrome-Erweiterungsmenü mit Page 2 PDF und der Aktion zum Anheften an die Symbolleiste",
    },
    {
      id: "open",
      title: "Gewünschte Seite öffnen",
      imageAlt: "Page 2 File im Browser mit angeheftetem Symbol von Page 2 PDF",
    },
    {
      id: "launch",
      title: "Erweiterung anklicken",
      imageAlt: "Englische Oberfläche von Page 2 PDF auf einer geöffneten Seite mit ausgewähltem Modus Accurate copy",
    },
    {
      id: "result",
      title: "PDF prüfen",
      imageAlt: "Ergebnis von Page 2 PDF in der PDF-Vorschau des Browsers",
    },
  ],
  guideOptionsTitle: "PDF anpassen",
  guideOptionsLead:
    "Wählen Sie den passenden Modus und öffnen Sie die Einstellungen, wenn Sie die Ausgabe anpassen möchten.",
  guideOptionScreens: [
    {
      id: "modes",
      title: "Ausgabemodus wählen",
      imageAlt: "Englische Oberfläche von Page 2 PDF mit Accurate copy, Editable document und AI / Chat",
    },
    {
      id: "settings",
      title: "Einstellungen öffnen",
      imageAlt: "Englische Einstellungen von Page 2 PDF für Profil, Ausrichtung und Inhalte eines bearbeitbaren Dokuments",
    },
  ],
  supportedTitle: "Unterstützte Browser-Chats",
  supportedGroups: [
    {
      title: "KI-Chats",
      body: "Eigene Adapter sind für ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot und Manus verfügbar.",
    },
    {
      title: "Messenger",
      body: "Page 2 PDF unterstützt den aktuellen Dialog in WhatsApp Web sowie Chats und Kanäle in Telegram Web.",
    },
    {
      title: "Bedingte Kompatibilität",
      body: "Eine andere KI-Seite funktioniert nur, wenn Page 2 PDF sowohl Benutzer- als auch Assistentennachrichten erkennen kann. Das ist bedingte Kompatibilität und keine allgemeine Unterstützung.",
    },
  ],
  limitsTitle: "Vor dem Start",
  limits: [
    "Chrome sperrt Erweiterungen auf Browser-Einstellungsseiten, im Chrome Web Store und auf anderen geschützten Seiten.",
    "Klappen Sie benötigte Inhalte auf und lassen Sie die Originalseite geöffnet. Elemente, die die Seite nicht laden kann, können fehlen oder als Platzhalter erscheinen.",
    "AI / Chat verwendet Seiten im Hochformat, beachtet die in der installierten Version oder im Tarif angegebene Verlaufsgrenze und übernimmt nur Nachrichten, die der begrenzte Ladevorgang erreichen kann.",
    "Für lokale HTML-Dateien muss der Zugriff auf Datei-URLs gegebenenfalls in den Chrome-Einstellungen der Erweiterung erlaubt werden.",
    "Sehr hohe Seiten, virtuelle Listen, nicht verfügbare Medien, geschützte Frames oder ständig wechselnde Inhalte können ein vollständiges Ergebnis verhindern.",
  ],
  limitTitles: [
    "Geschützte Seiten",
    "Seite geöffnet lassen",
    "Grenze des Dialogverlaufs",
    "Berechtigung für lokale HTML-Dateien",
    "Komplexe und wechselnde Seiten",
  ],
  breadcrumbLabel: "Brotkrümelnavigation",
  homeLabel: "Startseite",
  guideLabel: "Anleitung zur Chrome-Erweiterung",
};

const copyByLocale: Record<Locale, ExtensionCopy> = {
  en: englishCopy,
  ru: russianCopy,
  de: germanCopy,
};

export const getExtensionCopy = (locale: Locale): ExtensionCopy =>
  copyByLocale[locale];
