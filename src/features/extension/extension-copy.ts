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
  homeTitle: "Save webpages and browser chats as PDF",
  homeLead:
    "Page 2 File is a Chrome extension that turns the current tab into a PDF. Choose an accurate visual copy, a document with selectable text and links, or a clean export of a supported browser chat.",
  modesTitle: "Choose how the PDF should work",
  modesLead:
    "The three output styles serve different jobs. Pick the one that matters for this page before opening the preview.",
  modes: [
    {
      title: "Accurate copy",
      body: "Captures the rendered page as image-based PDF pages. Use it when preserving the page appearance matters more than selecting text or clicking links.",
    },
    {
      title: "Editable document",
      body: "Keeps supported text selectable and links clickable. You can also remove images, links, or page styling before creating the PDF.",
    },
    {
      title: "AI / Chat",
      body: "Builds a readable PDF from a supported conversation. Include all messages or replies only, and remove images or links when you do not need them.",
    },
  ],
  sourcesTitle: "Pages and chats you can save",
  sourcesBody:
    "The extension works with the page already open in the current Chrome tab. It does not ask for a separate URL and does not bypass a website's access rules.",
  sources: [
    "Public webpages and pages you are already signed in to view.",
    "Local HTML files opened in Chrome, when file URL access is allowed.",
    "Google Docs, Sheets, and Slides shown in the browser.",
    "Supported AI conversations and web messengers, including ChatGPT, Claude, Gemini, WhatsApp Web, and Telegram Web.",
  ],
  processTitle: "From the current tab to a PDF",
  processBody:
    "There is no upload form on this website. Open the source in Chrome and use the extension on that tab.",
  steps: [
    { title: "Open the source", body: "Load the webpage, local HTML file, or conversation you want to keep." },
    { title: "Open Page 2 File", body: "Click the extension icon while the source tab is active." },
    { title: "Choose an output style", body: "Select Accurate copy, Editable document, or AI / Chat." },
    { title: "Adjust the options", body: "Choose orientation or remove content that should not appear in the PDF." },
    { title: "Preview the PDF", body: "Let the extension prepare the file and open it in Chrome's PDF viewer." },
    { title: "Check and save", body: "Review the pages, then use the viewer's download or print controls." },
  ],
  privacyTitle: "Processed in your browser",
  privacyBody:
    "The extension creates the PDF locally. Conversion content is not uploaded to Page 2 File servers, and no Page 2 File account is required.",
  privacyPoints: [
    "The extension reads source content only from the tab where you launch it.",
    "The temporary PDF is deleted after the preview loads. If you never open it, data older than two hours is cleared the next time the extension runs.",
    "Website analytics, if enabled with consent, are separate from extension PDF processing.",
  ],
  guideTitle: "How to use the Page 2 File Chrome extension",
  guideLead:
    "Follow these steps to save a webpage, local HTML file, or supported browser conversation as PDF from the current tab.",
  supportedTitle: "Supported browser chats",
  supportedBody:
    "Dedicated adapters cover ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web, and Telegram Web. Other AI pages work only when Page 2 File can recognise their message structure.",
  limitsTitle: "Before you start",
  limits: [
    "Chrome blocks extensions on browser settings, the Chrome Web Store, and other protected pages.",
    "Expand hidden sections and load the messages you need; content that is not available to the tab cannot be included.",
    "AI / Chat export uses portrait pages and can include at most the latest 2,000 messages.",
    "Local HTML may require enabling file URL access for Page 2 File in Chrome's extension settings.",
    "Very tall pages, unavailable media, or a page that changes during export can prevent a complete result.",
  ],
  breadcrumbLabel: "Breadcrumbs",
  homeLabel: "Home",
  guideLabel: "Chrome extension guide",
  browseChromeLabel: "Browse Chrome extensions",
};

const russianCopy: ExtensionCopy = {
  homeTitle: "Сохраняйте веб-страницы и чаты из браузера в PDF",
  homeLead:
    "Page 2 File — расширение Chrome, которое превращает текущую вкладку в PDF. Можно сохранить точный внешний вид страницы, получить документ с выделяемым текстом и ссылками или аккуратно экспортировать поддерживаемый чат.",
  modesTitle: "Выберите подходящий вид PDF",
  modesLead:
    "Три режима решают разные задачи. Выберите нужный вариант до открытия предпросмотра.",
  modes: [
    {
      title: "Accurate copy",
      body: "Сохраняет отображённую страницу как набор изображений в PDF. Этот режим подходит, когда внешний вид важнее выделения текста и активных ссылок.",
    },
    {
      title: "Editable document",
      body: "Оставляет поддерживаемый текст выделяемым, а ссылки — активными. Перед созданием PDF можно убрать изображения, ссылки или оформление страницы.",
    },
    {
      title: "AI / Chat",
      body: "Собирает поддерживаемый диалог в удобный для чтения PDF. Можно включить все сообщения или только ответы, а также убрать изображения и ссылки.",
    },
  ],
  sourcesTitle: "Какие страницы и чаты можно сохранить",
  sourcesBody:
    "Расширение работает со страницей, уже открытой в текущей вкладке Chrome. Оно не просит отдельно вставлять URL и не обходит правила доступа сайта.",
  sources: [
    "Публичные страницы и страницы, которые уже открыты после входа в аккаунт.",
    "Локальные HTML-файлы, открытые в Chrome, если разрешён доступ к файловым URL.",
    "Google Docs, Sheets и Slides, открытые в браузере.",
    "Поддерживаемые AI-диалоги и веб-мессенджеры, включая ChatGPT, Claude, Gemini, WhatsApp Web и Telegram Web.",
  ],
  processTitle: "От текущей вкладки до PDF",
  processBody:
    "На этом сайте нет формы загрузки. Откройте нужный материал в Chrome и запустите расширение на этой вкладке.",
  steps: [
    { title: "Откройте материал", body: "Загрузите веб-страницу, локальный HTML-файл или нужный диалог." },
    { title: "Откройте Page 2 File", body: "Нажмите значок расширения, пока нужная вкладка активна." },
    { title: "Выберите режим", body: "Укажите Accurate copy, Editable document или AI / Chat." },
    { title: "Настройте результат", body: "Выберите ориентацию или уберите содержимое, которое не должно попасть в PDF." },
    { title: "Откройте предпросмотр", body: "Дождитесь подготовки файла и открытия PDF-просмотрщика Chrome." },
    { title: "Проверьте и сохраните", body: "Просмотрите страницы и воспользуйтесь кнопкой скачивания или печати." },
  ],
  privacyTitle: "Обработка выполняется в браузере",
  privacyBody:
    "Расширение создаёт PDF локально. Содержимое конвертации не загружается на серверы Page 2 File, а учётная запись Page 2 File не требуется.",
  privacyPoints: [
    "Расширение читает исходное содержимое только из вкладки, где вы его запускаете.",
    "Временный PDF удаляется после загрузки предпросмотра. Если его не открывать, данные старше двух часов очищаются при следующем запуске расширения.",
    "Аналитика сайта, если она включена с согласия, не относится к обработке PDF в расширении.",
  ],
  guideTitle: "Как пользоваться расширением Page 2 File для Chrome",
  guideLead:
    "Следуйте этим шагам, чтобы сохранить веб-страницу, локальный HTML-файл или поддерживаемый диалог из текущей вкладки в PDF.",
  supportedTitle: "Поддерживаемые чаты в браузере",
  supportedBody:
    "Отдельные адаптеры предусмотрены для ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web и Telegram Web. Другие AI-сайты работают только тогда, когда Page 2 File распознаёт структуру сообщений.",
  limitsTitle: "Что проверить перед началом",
  limits: [
    "Chrome запрещает расширениям работать на страницах настроек браузера, в Chrome Web Store и на других защищённых страницах.",
    "Раскройте скрытые блоки и загрузите нужные сообщения: недоступное вкладке содержимое нельзя включить в файл.",
    "Режим AI / Chat использует книжную ориентацию и сохраняет не более 2 000 последних сообщений.",
    "Для локального HTML может потребоваться разрешить Page 2 File доступ к файловым URL в настройках расширений Chrome.",
    "Очень длинная страница, недоступные изображения или изменение страницы во время экспорта могут помешать получить полный результат.",
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
