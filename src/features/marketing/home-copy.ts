import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

type CopyItem = {
  body: string;
  title: string;
};

type BlogCopyItem = {
  slug: string;
};

export type HomeCopy = {
  title: string;
  lead: string;
  form: {
    formatLabel: string;
    meta: string;
    pdfModeLabel: string;
    pdfModes: ReadonlyArray<{ label: string; value: "editable" | "visual" }>;
    powerpointModeLabel: string;
    powerpointModes: ReadonlyArray<{
      label: string;
      value: "editable" | "visual";
    }>;
    submitPdf: string;
    submitPowerpoint: string;
    urlHelper: string;
    urlLabel: string;
    urlPlaceholder: string;
  };
  converterFlow: {
    backAction: string;
    processingBody: string;
    processingTitle: string;
    readyBody: string;
    readyTitle: string;
  };
  closingNote: string;
  preview: {
    accessibleLabel: string;
    divider: string;
    imageNote: string;
    pdfMeta: string;
    powerpointMeta: string;
    sourceTitle: string;
    title: string;
  };
  promo: {
    body: string;
    eyebrow: string;
    title: string;
  };
  features: {
    body: string;
    eyebrow: string;
    items: ReadonlyArray<CopyItem>;
    title: string;
  };
  howItWorks: {
    action: string;
    body: string;
    eyebrow: string;
    extensionAction: string;
    installTime: string;
    items: ReadonlyArray<CopyItem>;
    note: string;
    stepLabels: ReadonlyArray<string>;
    title: string;
  };
  blog: {
    action: string;
    allAction: string;
    body: string;
    eyebrow: string;
    items: ReadonlyArray<BlogCopyItem>;
    title: string;
  };
  faq: {
    body: string;
    eyebrow: string;
    items: ReadonlyArray<CopyItem>;
    title: string;
  };
  finalCta: {
    body: string;
    eyebrow: string;
    title: string;
  };
};

const homeCopy: LocalizedPublished<HomeCopy> = {
  en: {
    title: "Save any webpage as a useful file",
    lead:
      "Paste a link to a public page. Page 2 File carefully splits it into PDF pages or PowerPoint slides — with a preview before download.",
    form: {
      formatLabel: "Format",
      meta: "No registration · Preview · Temporary files",
      pdfModeLabel: "PDF mode",
      pdfModes: [
        { label: "Page snapshots", value: "visual" },
        { label: "Editable PDF", value: "editable" },
      ],
      powerpointModeLabel: "PowerPoint mode",
      powerpointModes: [
        { label: "Slide snapshots", value: "visual" },
        { label: "Editable presentation", value: "editable" },
      ],
      submitPdf: "Create PDF",
      submitPowerpoint: "Create PowerPoint",
      urlHelper:
        "Public HTTPS pages only. Use the extension for signed-in browser tabs.",
      urlLabel: "Webpage link",
      urlPlaceholder: "https://example.com/article",
    },
    converterFlow: {
      backAction: "Back to settings",
      processingBody:
        "We are analyzing the page and preparing the selected file format.",
      processingTitle: "Preparing your file",
      readyBody: "Click to download the file",
      readyTitle: "Your file is ready",
    },
    closingNote:
      "The service works for articles, documentation, landing pages and public reports. For a private page or AI chat, the extension works from the active browser tab and provides a temporary preview.",
    preview: {
      accessibleLabel: "Example conversion result",
      divider: "THE PAGE BREAK KEEPS THE IMAGE WHOLE",
      imageNote: "The image stays whole",
      pdfMeta: "12 pages · ready",
      powerpointMeta: "12 slides · ready",
      sourceTitle: "A long article with an image",
      title: "Page → accurate file",
    },
    promo: {
      body:
        "The extension works with links and the active browser tab. Preview data is temporary and is deleted after the preview tab closes.",
      eyebrow: "CHROME EXTENSION",
      title: "Save the current tab — even when it requires sign-in",
    },
    features: {
      eyebrow: "FEATURES",
      title: "A result for the task, not one “universal” PDF",
      body:
        "Choose visual fidelity or an editable structure — and keep only what you actually need in the file.",
      items: [
        {
          title: "Clean AI chats",
          body:
            "Export long conversations from ChatGPT, Claude, Gemini, Grok, DeepSeek and other services into a clean, readable PDF.",
        },
        {
          title: "Two result types",
          body:
            "A snapshot preserves the exact appearance. An editable PDF keeps text, links and structure available for work.",
        },
        {
          title: "Control file contents",
          body:
            "Editable mode keeps supported text, images, links and layout available for review before download.",
        },
        {
          title: "From a link or a tab",
          body:
            "Use a public HTTPS link on the site. The extension can also save the current tab and private pages.",
        },
        {
          title: "Review page breaks",
          body:
            "Page-aware splitting is designed to reduce awkward cuts in PDF pages and PowerPoint slides. Check the preview before downloading.",
        },
        {
          title: "No account or history",
          body:
            "Work without a required account. Preview data is temporary, and Page 2 File has no conversion-history database.",
        },
      ],
    },
    howItWorks: {
      action: "Open the full guide",
      body:
        "The fastest route is to install the extension: it works with the current tab and does not require copying a link.",
      eyebrow: "HOW TO START",
      extensionAction: "Install extension",
      installTime: "No account required",
      items: [
        {
          title: "Install the extension",
          body:
            "Add Page 2 File to Chrome. No Page 2 File account is required.",
        },
        {
          title: "Open the page",
          body:
            "Go to the tab you need, open Page 2 File and choose PDF or PowerPoint.",
        },
        {
          title: "Review and download",
          body:
            "Review the result, adjust sections if needed and download the finished file.",
        },
      ],
      note: "With examples for a public link, a private tab and an AI chat",
      stepLabels: ["Step 1", "Step 2", "Step 3"],
      title: "Three steps to a finished file",
    },
    blog: {
      action: "Read article",
      allAction: "All articles",
      body:
        "Practical guides to fidelity, editability, links, page breaks and safe work with AI chats.",
      eyebrow: "BLOG",
      items: [
        { slug: "why-print-to-pdf-breaks" },
        { slug: "visual-vs-editable" },
        { slug: "preserve-clickable-links" },
        { slug: "long-webpage-page-breaks" },
      ],
      title: "Understand the modes before your first export",
    },
    faq: {
      body:
        "Clear answers about webpage capture, output modes, private tabs, temporary previews, and chat export.",
      eyebrow: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          title: "How do I convert a webpage to PDF or PowerPoint?",
          body:
            "For a public page, paste its HTTPS URL, choose PDF or PowerPoint, select visual or editable mode, and review the sections before creating the file. For a signed-in page, use the Page 2 File Chrome extension with the active tab.",
        },
        {
          title: "Can Page 2 File preserve the page design?",
          body:
            "Visual mode is intended to preserve the rendered appearance, including layout, colors, images, and visible charts. Browser-only behavior such as animation, video, and interactive controls becomes a static representation.",
        },
        {
          title: "Will text and links remain editable or clickable?",
          body:
            "Editable mode keeps supported text as document content and preserves safe link targets. Complex widgets, canvas graphics, and unsupported elements may be represented as images. Visual mode prioritizes appearance and does not turn every pixel into an editable object.",
        },
        {
          title: "Can it capture full-length and dynamic pages?",
          body:
            "The extension works with the rendered active tab, including long pages after you load the required sections. Expand collapsed content and scroll through lazy media first. Content that is hidden, unloaded, or removed from the page cannot be reconstructed.",
        },
        {
          title: "Can it convert pages behind a login?",
          body:
            "Yes, through the Chrome extension after you open the page normally. The extension works from the active tab and does not ask you to send an account password to the public URL form. It does not bypass access controls.",
        },
        {
          title: "Can it convert one page or an entire website?",
          body:
            "The webpage converters and One Page GPT Apps handle one URL. Web 2 PDF and Web 2 PowerPoint can find accessible pages on a public website and return a separate PDF or PPTX for each selected page, not one automatically merged file.",
        },
        {
          title: "How do visual and editable modes differ?",
          body:
            "Visual mode favors fidelity to the rendered page. Editable mode favors selectable text, supported images, safe links, and reusable document structure. Review complex charts, typography, and layouts because either mode can require a deliberate fallback.",
        },
        {
          title: "What happens to preview data after I close the tab?",
          body:
            "Preview data is temporary and is deleted after the preview tab closes. Page 2 File has no database for user conversion history and does not provide an account archive of previous previews.",
        },
        {
          title: "Do I need an account?",
          body:
            "No Page 2 File account is required for the public URL flow or extension preview. You may still need to be signed in to the source website when capturing a private page you are permitted to access.",
        },
        {
          title: "Can it export AI and messenger chats?",
          body:
            "The extension can export a conversation rendered in a Chrome tab, including supported AI chats and web messengers. Load the required message range first. Native-only apps and interfaces outside the browser, such as Signal desktop, are outside the capture boundary.",
        },
      ],
      title: "What to know before conversion",
    },
    finalCta: {
      body:
        "Paste a public link here or install the extension for the current tab.",
      eyebrow: "READY TO TRY IT ON YOUR PAGE?",
      title: "Get a PDF or PowerPoint before opening an editor",
    },
  },
  ru: {
    title: "Сохраните любую веб-страницу в удобный файл",
    lead:
      "Вставьте ссылку на публичную страницу. Page 2 File аккуратно разделит её на страницы PDF или слайды PowerPoint — с предпросмотром перед скачиванием.",
    form: {
      formatLabel: "Формат",
      meta: "Без регистрации · Предпросмотр · Временные файлы",
      pdfModeLabel: "Режим PDF",
      pdfModes: [
        { label: "Снимки страницы", value: "visual" },
        { label: "Редактируемый PDF", value: "editable" },
      ],
      powerpointModeLabel: "Режим PowerPoint",
      powerpointModes: [
        { label: "Снимки слайдов", value: "visual" },
        { label: "Редактируемая презентация", value: "editable" },
      ],
      submitPdf: "Создать PDF",
      submitPowerpoint: "Создать PowerPoint",
      urlHelper:
        "Только публичные HTTPS-страницы. Для вкладок с авторизацией используйте расширение.",
      urlLabel: "Ссылка на веб-страницу",
      urlPlaceholder: "https://example.com/article",
    },
    converterFlow: {
      backAction: "Вернуться назад",
      processingBody:
        "Анализируем страницу и готовим файл в выбранном формате.",
      processingTitle: "Готовим ваш файл",
      readyBody: "Нажмите чтобы скачать файл",
      readyTitle: "Ваш файл готов",
    },
    closingNote:
      "Сервис подходит для статей, документации, лендингов и публичных отчётов. Для закрытой страницы или AI-чата расширение работает с активной вкладкой и показывает временный предпросмотр.",
    preview: {
      accessibleLabel: "Пример результата конвертации",
      divider: "РАЗРЫВ НЕ РЕЖЕТ КАРТИНКУ",
      imageNote: "Изображение остаётся целиком",
      pdfMeta: "12 страниц · готово",
      powerpointMeta: "12 слайдов · готово",
      sourceTitle: "Большая статья с изображением",
      title: "Страница → аккуратный файл",
    },
    promo: {
      body:
        "Расширение работает по ссылке и с активной вкладкой. Данные предпросмотра временные и удаляются после закрытия вкладки предпросмотра.",
      eyebrow: "РАСШИРЕНИЕ CHROME",
      title: "Сохраните текущую вкладку — даже если она требует входа",
    },
    features: {
      eyebrow: "ПРЕИМУЩЕСТВА",
      title: "Результат под задачу, а не один «универсальный» PDF",
      body:
        "Выберите визуальную точность или редактируемую структуру — и сохраните только то, что действительно понадобится в файле.",
      items: [
        {
          title: "AI-чаты без мусора",
          body:
            "Экспортируйте длинные диалоги ChatGPT, Claude, Gemini, Grok, DeepSeek и других сервисов в чистый, читаемый PDF.",
        },
        {
          title: "Два типа результата",
          body:
            "Снимок сохраняет внешний вид один в один. Редактируемый PDF оставляет текст, ссылки и структуру доступными для работы.",
        },
        {
          title: "Настройте содержимое файла",
          body:
            "Редактируемый режим сохраняет поддерживаемые текст, изображения, ссылки и структуру для проверки перед скачиванием.",
        },
        {
          title: "По ссылке и из вкладки",
          body:
            "На сайте работает публичная HTTPS-ссылка. Расширение дополнительно может сохранить текущую вкладку и закрытые страницы.",
        },
        {
          title: "Проверяйте разрывы",
          body:
            "Разбиение с учётом страниц помогает сократить неудачные разрывы в PDF и PowerPoint. Проверьте результат в предпросмотре.",
        },
        {
          title: "Без регистрации и истории",
          body:
            "Работайте без обязательного аккаунта. Данные предпросмотра временные, а базы истории конвертаций у Page 2 File нет.",
        },
      ],
    },
    howItWorks: {
      action: "Открыть полную инструкцию",
      body:
        "Самый быстрый путь — установить расширение: оно работает с текущей вкладкой и не требует копировать ссылку.",
      eyebrow: "КАК НАЧАТЬ",
      extensionAction: "Установить расширение",
      installTime: "Без регистрации",
      items: [
        {
          title: "Установите расширение",
          body:
            "Добавьте Page 2 File в Chrome. Аккаунт Page 2 File не нужен.",
        },
        {
          title: "Откройте страницу",
          body:
            "Перейдите на нужную вкладку, откройте Page 2 File и выберите PDF или PowerPoint.",
        },
        {
          title: "Проверьте и скачайте",
          body:
            "Посмотрите результат, при необходимости скорректируйте секции и скачайте готовый файл.",
        },
      ],
      note: "С примерами для публичной ссылки, закрытой вкладки и AI-чата",
      stepLabels: ["1 шаг", "2 шаг", "3 шаг"],
      title: "Три шага до готового файла",
    },
    blog: {
      action: "Читать статью",
      allAction: "Все статьи",
      body:
        "Практические материалы о качестве, редактируемости, ссылках, разрывах и безопасной работе с AI-чатами.",
      eyebrow: "БЛОГ",
      items: [
        { slug: "why-print-to-pdf-breaks" },
        { slug: "visual-vs-editable" },
        { slug: "preserve-clickable-links" },
        { slug: "long-webpage-page-breaks" },
      ],
      title: "Разберитесь в режимах до первого экспорта",
    },
    faq: {
      body:
        "Короткие ответы о захвате страниц, режимах, закрытых вкладках, временном предпросмотре и экспорте чатов.",
      eyebrow: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      items: [
        {
          title: "Как конвертировать веб-страницу в PDF или PowerPoint?",
          body:
            "Для публичной страницы вставьте HTTPS-адрес, выберите PDF или PowerPoint, визуальный или редактируемый режим и проверьте секции. Для страницы после входа используйте расширение Page 2 File с активной вкладкой.",
        },
        {
          title: "Может ли Page 2 File сохранить дизайн страницы?",
          body:
            "Визуальный режим предназначен для сохранения отображаемого макета, цветов, изображений и видимых графиков. Анимация, видео и интерактивные элементы браузера переходят в статичное представление.",
        },
        {
          title: "Останутся ли текст и ссылки редактируемыми и кликабельными?",
          body:
            "Редактируемый режим сохраняет поддерживаемый текст как содержимое документа и оставляет безопасные ссылки кликабельными. Сложные виджеты и canvas могут стать изображениями. Визуальный режим отдаёт приоритет внешнему виду.",
        },
        {
          title: "Можно ли захватить полную и динамическую страницу?",
          body:
            "Расширение работает с отображаемой активной вкладкой, включая длинную страницу после загрузки нужных секций. Сначала раскройте блоки и прокрутите ленивые медиа. Скрытый или незагруженный контент восстановить нельзя.",
        },
        {
          title: "Можно ли конвертировать страницу после входа?",
          body:
            "Да, через расширение Chrome после обычного открытия страницы. Оно работает с активной вкладкой и не просит передавать пароль в форму публичного URL. Расширение не обходит контроль доступа.",
        },
        {
          title: "Можно конвертировать одну страницу или весь сайт?",
          body:
            "Конвертеры и GPT-приложения One Page обрабатывают один URL. Web 2 PDF и Web 2 PowerPoint находят доступные публичные страницы и возвращают отдельный PDF или PPTX для каждой выбранной страницы, а не один общий файл.",
        },
        {
          title: "Чем отличаются визуальный и редактируемый режимы?",
          body:
            "Визуальный режим сохраняет внешний вид отрисованной страницы. Редактируемый сохраняет выделяемый текст, поддерживаемые изображения, безопасные ссылки и структуру. Сложные графики, шрифты и макеты требуют проверки.",
        },
        {
          title: "Что происходит с данными после закрытия предпросмотра?",
          body:
            "Данные предпросмотра временные и удаляются после закрытия вкладки. У Page 2 File нет базы данных для истории пользовательских конвертаций и архива прошлых предпросмотров.",
        },
        {
          title: "Нужна ли регистрация?",
          body:
            "Аккаунт Page 2 File не нужен ни для публичного URL, ни для предпросмотра расширения. Для захвата закрытой страницы может понадобиться обычный вход на исходный сайт.",
        },
        {
          title: "Можно ли экспортировать AI-чаты и мессенджеры?",
          body:
            "Расширение экспортирует диалог, отображаемый во вкладке Chrome, включая поддерживаемые AI-чаты и веб-мессенджеры. Сначала загрузите нужные сообщения. Приложения вне браузера, например Signal desktop, не захватываются.",
        },
      ],
      title: "Что важно знать до конвертации",
    },
    finalCta: {
      body:
        "Вставьте публичную ссылку здесь или установите расширение для текущей вкладки.",
      eyebrow: "ГОТОВЫ ПРОВЕРИТЬ НА СВОЕЙ СТРАНИЦЕ?",
      title: "Получите PDF или PowerPoint до того, как откроете редактор",
    },
  },
};

export const getHomeCopy = (locale: Locale): HomeCopy =>
  homeCopy[isPublishedLocale(locale) ? locale : "en"];

const chromeInstallLabels: Record<Locale, string> = {
  cs: "Nainstalovat do Chromu",
  da: "Installer i Chrome",
  de: "In Chrome installieren",
  en: "Install on Chrome",
  es: "Instalar en Chrome",
  fi: "Asenna Chromeen",
  fr: "Installer sur Chrome",
  hu: "Telepítés a Chrome-ba",
  it: "Installa su Chrome",
  nl: "Installeren in Chrome",
  no: "Installer i Chrome",
  pl: "Zainstaluj w Chrome",
  pt: "Instalar no Chrome",
  ro: "Instalează în Chrome",
  ru: "Установить в Chrome",
  sv: "Installera i Chrome",
};

export const getChromeInstallLabel = (locale: Locale): string =>
  chromeInstallLabels[locale];
