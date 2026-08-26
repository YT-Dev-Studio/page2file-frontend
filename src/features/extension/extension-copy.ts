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
    { title: "Open Page 2 PDF", body: "Click the extension icon while the source page tab is active." },
    { title: "Choose an output style", body: "Select Accurate copy, Editable document, or AI / Chat." },
    { title: "Configure the target PDF", body: "Choose orientation, output profile, message scope, or content to remove when those controls apply." },
    { title: "Keep the tab open", body: "Wait for available content to load and the preview to be prepared without closing the source page or navigating to another page." },
    { title: "Check and save", body: "Review the PDF pages in Chrome's preview, then use the download or print button." },
  ],
  homePrivacyTitle: "Local processing with no sign-up",
  privacyTitle: "Processed in your browser",
  privacyBody:
    "Page 2 PDF creates the document inside the extension. Page and conversation content is not uploaded to Page 2 File servers. A Page 2 File account is not required to use the extension.",
  privacyPoints: [
    "The extension reads content only from the active tab where you launch it.",
    "Temporary preview data is removed after the session. Remaining data older than two hours is cleared the next time the extension runs.",
    "Website analytics, if enabled with consent, are separate from extension PDF processing.",
  ],
  privacyFactTitles: [
    "Only the active tab",
    "Automatic cleanup",
    "Separate analytics",
  ],
  guideTitle: "How to use the Page 2 PDF Chrome extension",
  guideLead:
    "Open the source page in your browser, choose the capture mode that matches the result you need, keep the tab open during preparation, and check the PDF before saving it.",
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
    "Expand the content you need and keep the source page open. Items the page cannot load may be omitted or represented by a placeholder.",
    "AI / Chat uses portrait pages and includes at most the latest 2,000 messages that its bounded history loader can retrieve.",
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
    "Page 2 PDF — расширение Chrome от Page 2 File. Оно работает с активной вкладкой и создаёт визуальную копию всей страницы, документ с выделяемым текстом и ссылками либо чистую расшифровку поддерживаемого AI-чата или мессенджера.",
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
      body: "Подготавливает основную прокручиваемую область и сохраняет отображённую страницу как изображения в PDF. Выбирайте этот режим, когда внешний вид важнее выделяемого текста и активных ссылок.",
    },
    {
      title: "Редактируемый документ",
      body: "Создаёт PDF с выделяемым текстом и безопасными ссылками. Можно выбрать вид с экрана или печатную версию, убрать изображения, ссылки и стили, а также включить поддерживаемые поля форм или архив проекта.",
      bodyLink: {
        href: "/ru/blog/preserve-webpage-links-forms-text",
        label: "архив проекта",
      },
    },
    {
      title: "AI / Чат",
      body: "Экспортирует диалог из популярных мессенджеров, таких как Telegram, WhatsApp. А также, популярные ИИ-чаты. Можно оставить все сообщения или только ответы, сохранить поддерживаемые блоки кода, таблицы, источники, файлы и медиа либо убрать медиа и ссылки.",
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
    "Page 2 PDF создаёт документ внутри расширения. Содержимое страниц и переписок не загружается на серверы Page 2 File. Для использования расширения учётная запись не требуется.",
  privacyPoints: [
    "Расширение читает содержимое только из активной вкладки, где вы его запускаете.",
    "Временные данные предпросмотра удаляются после сессии. Оставшиеся данные старше двух часов очищаются при следующем запуске расширения.",
    "Аналитика сайта, если она включена с согласия, не относится к обработке PDF в расширении.",
  ],
  privacyFactTitles: [
    "Только активная вкладка",
    "Автоматическая очистка",
    "Отдельная аналитика",
  ],
  guideTitle: "Как пользоваться расширением Page 2 PDF для Chrome",
  guideLead:
    "Откройте исходную страницу в браузере, выберите режим под нужный результат, не закрывайте вкладку во время подготовки и проверьте PDF перед сохранением.",
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
      body: "Другой AI-сайт работает только тогда, когда Page 2 PDF распознаёт сообщения пользователя и ассистента. Это не универсальная поддержка.",
    },
  ],
  limitsTitle: "Что проверить перед началом",
  limits: [
    "Chrome запрещает расширениям работать на страницах настроек браузера, в Chrome Web Store и на других защищённых страницах.",
    "Раскройте нужный контент и не закрывайте исходную страницу. Недоступные странице элементы могут быть пропущены или заменены пометкой.",
    "Режим AI / Чат использует книжную ориентацию и включает не более 2 000 последних сообщений, которые успевает получить ограниченный загрузчик истории.",
    "Для локального HTML может потребоваться разрешить Page 2 PDF доступ к файловым URL в настройках расширений Chrome.",
    "Очень высокие страницы, виртуальные списки, недоступные медиа, защищённые фреймы или постоянно меняющаяся страница могут привести к неполному результату.",
  ],
  limitTitles: [
    "Защищённые страницы",
    "Не закрывайте страницу",
    "Ограничение переписки",
    "Доступ к локальному HTML",
    "Сложные и меняющиеся страницы",
  ],
  breadcrumbLabel: "Навигационная цепочка",
  homeLabel: "Главная",
  guideLabel: "Инструкция по расширению",
};

const copyByLocale: Record<Locale, ExtensionCopy> = {
  en: englishCopy,
  ru: russianCopy,
};

export const getExtensionCopy = (locale: Locale): ExtensionCopy =>
  copyByLocale[locale];
