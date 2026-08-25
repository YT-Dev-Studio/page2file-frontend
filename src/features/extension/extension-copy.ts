import type { Locale } from "@/shared/i18n/locales";

export type ExtensionModeCopy = {
  body: string;
  title: "Accurate copy" | "Editable document" | "AI / Chat";
};

export type ExtensionStepCopy = {
  body: string;
  title: string;
};

export type ExtensionCopy = {
  homeTitle: string;
  homeLead: string;
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
  privacyTitle: string;
  privacyBody: string;
  privacyPoints: readonly [string, string, string];
  guideTitle: string;
  guideLead: string;
  supportedTitle: string;
  supportedBody: string;
  limitsTitle: string;
  limits: readonly [string, string, string, string, string];
  breadcrumbLabel: string;
  homeLabel: string;
  guideLabel: string;
  browseChromeLabel: string;
};

const englishCopy: ExtensionCopy = {
  homeTitle: "Save the current webpage or browser chat as PDF",
  homeLead:
    "Page 2 PDF is the Chrome extension from Page 2 File. It works on the active tab and creates either a visual full-page copy, a document with selectable text and links, or a clean transcript of a supported AI or messenger conversation.",
  modesTitle: "Choose the PDF you need",
  modesLead:
    "The modes are not cosmetic presets. Each uses a different capture method, so choose based on whether appearance, selectable content, or conversation structure matters most.",
  modes: [
    {
      title: "Accurate copy",
      body: "Prepares the page's main scroll area and captures the rendered result as image-based PDF pages. Use it when appearance matters more than selectable text or working links.",
    },
    {
      title: "Editable document",
      body: "Uses Chromium PDF output for selectable text and safe links. Choose As viewed or Print optimized, remove images, links, or styling, and optionally include supported form fields or a project archive.",
    },
    {
      title: "AI / Chat",
      body: "Builds a transcript from the current supported conversation. Keep all messages or replies only, preserve supported code, tables, citations, files, and media references, or remove media and links before export.",
    },
  ],
  sourcesTitle: "Pages and chats you can save",
  sourcesBody:
    "The extension reads only the page where you launch it. Open the source in Chrome first; Page 2 PDF does not accept a pasted URL, crawl a site, or bypass the source's access rules.",
  sources: [
    "Public webpages and pages you are already signed in to view.",
    "Local HTML files opened in Chrome, when file URL access is allowed.",
    "Google Docs, Sheets, and Slides shown in the browser.",
    "Supported AI conversations and web messengers: ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web, and Telegram Web.",
  ],
  processTitle: "From the current tab to a PDF",
  processBody:
    "The website does not receive the tab through an upload form. Open the source in Chrome and run Page 2 PDF while that tab is active.",
  steps: [
    { title: "Open the source", body: "Load the webpage, local HTML file, or conversation you want to keep." },
    { title: "Open Page 2 PDF", body: "Click the extension icon while the source tab is active." },
    { title: "Choose an output style", body: "Select Accurate copy, Editable document, or AI / Chat." },
    { title: "Adjust the options", body: "Choose orientation, output profile, message scope, or content to remove when those controls apply." },
    { title: "Keep the tab open", body: "Let the extension load available content and prepare the preview without closing or navigating away from the source." },
    { title: "Check and save", body: "Review the pages in Chrome's PDF viewer, then use its download or print controls." },
  ],
  privacyTitle: "Processed in your browser",
  privacyBody:
    "Page 2 PDF creates the document inside the extension workflow. Page and conversation content is not uploaded to Page 2 File servers, and a Page 2 File account is not required.",
  privacyPoints: [
    "The extension reads source content only from the tab where you launch it.",
    "Temporary preview data is removed after its lifecycle ends. Orphaned extension data older than two hours is cleared when the extension runs again.",
    "Website analytics, if enabled with consent, are separate from extension PDF processing.",
  ],
  guideTitle: "How to use the Page 2 PDF Chrome extension",
  guideLead:
    "Open the source in Chrome, choose the capture mode that matches the result you need, keep the tab open during preparation, and check the PDF before saving it.",
  supportedTitle: "Supported browser chats",
  supportedBody:
    "Dedicated adapters are implemented for ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web, and Telegram Web chats or channels. A different AI page works only when Page 2 PDF can identify both user and assistant messages; this is conditional compatibility, not universal support.",
  limitsTitle: "Before you start",
  limits: [
    "Chrome blocks extensions on browser settings, the Chrome Web Store, and other protected pages.",
    "Expand content you need and keep the source tab open. Items the page cannot load may be omitted or represented by a placeholder.",
    "AI / Chat uses portrait pages and includes at most the latest 2,000 messages that its bounded history loader can retrieve.",
    "Local HTML may require enabling file URL access for Page 2 PDF in Chrome's extension settings.",
    "Very tall pages, virtualized lists, unavailable media, protected frames, or a page that keeps changing can prevent a complete result.",
  ],
  breadcrumbLabel: "Breadcrumbs",
  homeLabel: "Home",
  guideLabel: "Chrome extension guide",
  browseChromeLabel: "Browse Chrome extensions",
};

const russianCopy: ExtensionCopy = {
  homeTitle: "Сохраняйте текущую веб-страницу или чат в PDF",
  homeLead:
    "Page 2 PDF — расширение Chrome от Page 2 File. Оно работает с активной вкладкой и создаёт визуальную копию всей страницы, документ с выделяемым текстом и ссылками либо чистую расшифровку поддерживаемого AI-чата или мессенджера.",
  modesTitle: "Выберите нужный тип PDF",
  modesLead:
    "Это не варианты оформления одного результата. Режимы используют разные способы захвата, поэтому выбор зависит от того, что важнее: внешний вид, выделяемый контент или структура переписки.",
  modes: [
    {
      title: "Accurate copy",
      body: "Подготавливает основную прокручиваемую область и сохраняет отображённую страницу как изображения в PDF. Выбирайте этот режим, когда внешний вид важнее выделяемого текста и активных ссылок.",
    },
    {
      title: "Editable document",
      body: "Использует PDF-вывод Chromium с выделяемым текстом и безопасными ссылками. Можно выбрать вид с экрана или печатную версию, убрать изображения, ссылки и стили, а также включить поддерживаемые поля форм или архив проекта.",
    },
    {
      title: "AI / Chat",
      body: "Создаёт расшифровку текущего поддерживаемого диалога. Можно оставить все сообщения или только ответы, сохранить поддерживаемые блоки кода, таблицы, источники, файлы и медиа либо убрать медиа и ссылки.",
    },
  ],
  sourcesTitle: "Какие страницы и чаты можно сохранить",
  sourcesBody:
    "Расширение читает только ту страницу, где вы его запускаете. Сначала откройте источник в Chrome: Page 2 PDF не принимает вставленный URL, не обходит сайт и не снимает ограничения доступа.",
  sources: [
    "Публичные страницы и страницы, которые уже открыты после входа в аккаунт.",
    "Локальные HTML-файлы, открытые в Chrome, если разрешён доступ к файловым URL.",
    "Google Docs, Sheets и Slides, открытые в браузере.",
    "Поддерживаемые AI-диалоги и веб-мессенджеры: ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web и Telegram Web.",
  ],
  processTitle: "От текущей вкладки до PDF",
  processBody:
    "Сайт не получает содержимое вкладки через форму загрузки. Откройте источник в Chrome и запустите Page 2 PDF на активной вкладке.",
  steps: [
    { title: "Откройте материал", body: "Загрузите веб-страницу, локальный HTML-файл или нужный диалог." },
    { title: "Откройте Page 2 PDF", body: "Нажмите значок расширения, пока нужная вкладка активна." },
    { title: "Выберите режим", body: "Укажите Accurate copy, Editable document или AI / Chat." },
    { title: "Настройте результат", body: "Выберите ориентацию, профиль вывода, состав сообщений или исключаемый контент, если эти настройки доступны." },
    { title: "Не закрывайте вкладку", body: "Дождитесь загрузки доступного контента и подготовки предпросмотра, не закрывая источник и не переходя на другую страницу." },
    { title: "Проверьте и сохраните", body: "Просмотрите страницы в PDF-просмотрщике Chrome и воспользуйтесь его кнопкой скачивания или печати." },
  ],
  privacyTitle: "Обработка выполняется в браузере",
  privacyBody:
    "Page 2 PDF создаёт документ внутри расширения. Содержимое страниц и переписок не загружается на серверы Page 2 File, а учётная запись Page 2 File не требуется.",
  privacyPoints: [
    "Расширение читает исходное содержимое только из вкладки, где вы его запускаете.",
    "Временные данные предпросмотра удаляются после завершения его жизненного цикла. Оставшиеся данные старше двух часов очищаются при следующем запуске расширения.",
    "Аналитика сайта, если она включена с согласия, не относится к обработке PDF в расширении.",
  ],
  guideTitle: "Как пользоваться расширением Page 2 PDF для Chrome",
  guideLead:
    "Откройте источник в Chrome, выберите режим под нужный результат, не закрывайте вкладку во время подготовки и проверьте PDF перед сохранением.",
  supportedTitle: "Поддерживаемые чаты в браузере",
  supportedBody:
    "Отдельные адаптеры реализованы для ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, чатов WhatsApp Web и чатов или каналов Telegram Web. Другой AI-сайт работает лишь тогда, когда Page 2 PDF распознаёт сообщения пользователя и ассистента; это условная совместимость, а не универсальная поддержка.",
  limitsTitle: "Что проверить перед началом",
  limits: [
    "Chrome запрещает расширениям работать на страницах настроек браузера, в Chrome Web Store и на других защищённых страницах.",
    "Раскройте нужный контент и не закрывайте исходную вкладку. Недоступные странице элементы могут быть пропущены или заменены пометкой.",
    "Режим AI / Chat использует книжную ориентацию и включает не более 2 000 последних сообщений, которые успевает получить ограниченный загрузчик истории.",
    "Для локального HTML может потребоваться разрешить Page 2 PDF доступ к файловым URL в настройках расширений Chrome.",
    "Очень длинная страница, виртуализированный список, недоступные медиа, защищённый фрейм или постоянно меняющаяся страница могут помешать полному экспорту.",
  ],
  breadcrumbLabel: "Навигационная цепочка",
  homeLabel: "Главная",
  guideLabel: "Инструкция по расширению Chrome",
  browseChromeLabel: "Открыть каталог расширений Chrome",
};

const extensionCopy: Record<Locale, ExtensionCopy> = {
  en: englishCopy,
  ru: russianCopy,
};

export const getExtensionCopy = (locale: Locale): ExtensionCopy =>
  extensionCopy[locale];
