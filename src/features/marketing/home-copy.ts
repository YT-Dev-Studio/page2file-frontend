import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

type CopyItem = {
  body: string;
  title: string;
};

type BlogCopyItem = CopyItem & {
  slug: string;
};

export type HomeCopy = {
  title: string;
  lead: string;
  form: {
    demoAction: string;
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
      "Paste a link to a public page. Page2File carefully splits it into PDF pages or PowerPoint slides — with a preview before download.",
    form: {
      demoAction: "DEMO",
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
      "The service works for articles, documentation, landing pages and public reports. Need the current private tab or an AI chat? The extension processes it locally in your browser.",
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
        "The extension works with both links and the open browser tab. Private pages and AI chats are processed locally in your browser.",
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
            "Independently include buttons, images and styles in editable PDF — or build a lightweight text-only version.",
        },
        {
          title: "From a link or a tab",
          body:
            "Use a public HTTPS link on the site. The extension can also save the current tab and private pages.",
        },
        {
          title: "Images stay whole",
          body:
            "Smart breaks do not cut images or long sections — in PDF pages or PowerPoint slides.",
        },
        {
          title: "No account or history",
          body:
            "Work without a required account. Private tabs stay local, and we do not keep your documents.",
        },
      ],
    },
    howItWorks: {
      action: "Open the full guide",
      body:
        "The fastest route is to install the extension: it works with the current tab and does not require copying a link.",
      eyebrow: "HOW TO START",
      extensionAction: "Install extension",
      installTime: "in 30 seconds",
      items: [
        {
          title: "Install the extension",
          body:
            "Add Page2File to Chrome. Installation takes less than a minute and registration is not required.",
        },
        {
          title: "Open the page",
          body:
            "Go to the tab you need, open Page2File and choose PDF or PowerPoint.",
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
        {
          slug: "why-print-to-pdf-breaks",
          title: "Why Print to PDF breaks complex pages",
          body:
            "What happens to fixed blocks, long images and dynamic content — and how to avoid repairing everything by hand.",
        },
        {
          slug: "visual-vs-editable",
          title: "Visual or Editable PDF: which mode to choose",
          body:
            "Compare visual fidelity, text availability and further editing through concrete tasks.",
        },
        {
          slug: "preserve-clickable-links",
          title: "How to preserve clickable links",
          body:
            "When links are needed in the result, what limitations the page has and what to check in preview.",
        },
        {
          slug: "long-webpage-page-breaks",
          title: "A long page without broken breaks",
          body:
            "How Page2File finds safe boundaries and keeps images from being split between pages.",
        },
        {
          slug: "webpage-to-powerpoint",
          title: "How to turn a webpage into PowerPoint",
          body:
            "From web content to 16:9 slides: what carries over, what stays editable and where visual mode helps.",
        },
        {
          slug: "export-ai-chats-privately",
          title: "How to save an AI chat as a local PDF",
          body:
            "A step-by-step flow for ChatGPT, Claude, Gemini, Grok and DeepSeek without sending a private chat to the server.",
        },
      ],
      title: "Understand the modes before your first export",
    },
    faq: {
      body:
        "Short answers about modes, privacy, the extension and repeated downloads.",
      eyebrow: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          title: "Can I save a private page?",
          body:
            "The site accepts only public HTTPS addresses. For a signed-in tab, install the extension: it reads the open page locally in the browser.",
        },
        {
          title: "How do “Page snapshots” differ from editable PDF?",
          body:
            "Snapshots preserve the appearance as accurately as possible. Editable PDF keeps text, links and selected elements available for further work.",
        },
        {
          title: "Why are there no extra PowerPoint settings?",
          body:
            "PPTX follows one 16:9 flow. Choose the format, review the slide split in preview and download the presentation.",
        },
        {
          title: "Can I keep links but remove images and CSS?",
          body:
            "Yes. Links, images and styles are independent options in editable PDF, so any combination is available.",
        },
        {
          title: "Where are generated files stored?",
          body:
            "Public-link processing is temporary: files are removed after a short download window or attempt limit. Private tabs are processed locally.",
        },
        {
          title: "What if the download did not start?",
          body:
            "When the file is ready, the form becomes a repeat-download button. It remains available within the temporary window and attempt limit.",
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
      "Вставьте ссылку на публичную страницу. Page2File аккуратно разделит её на страницы PDF или слайды PowerPoint — с предпросмотром перед скачиванием.",
    form: {
      demoAction: "ДЕМО",
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
      backAction: "Вернуться к настройкам",
      processingBody:
        "Анализируем страницу и готовим файл в выбранном формате.",
      processingTitle: "Готовим ваш файл",
      readyBody: "Нажмите чтобы скачать файл",
      readyTitle: "Ваш файл готов",
    },
    closingNote:
      "Сервис подходит для статей, документации, лендингов и публичных отчётов. Нужна текущая закрытая вкладка или AI-чат? Расширение обработает их локально в браузере.",
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
        "Расширение работает и по ссылке, и с открытой вкладкой. Закрытые страницы и AI-чаты обрабатываются локально в браузере.",
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
            "В редактируемом PDF независимо включайте кнопки, изображения и стили — или соберите лёгкую текстовую версию.",
        },
        {
          title: "По ссылке и из вкладки",
          body:
            "На сайте работает публичная HTTPS-ссылка. Расширение дополнительно может сохранить текущую вкладку и закрытые страницы.",
        },
        {
          title: "Изображения остаются целыми",
          body:
            "Умные разрывы не режут картинки и длинные секции — ни в PDF, ни в слайдах PowerPoint.",
        },
        {
          title: "Без регистрации и истории",
          body:
            "Работайте без обязательного аккаунта, а закрытые вкладки — локально. Мы не храним ваших документов.",
        },
      ],
    },
    howItWorks: {
      action: "Открыть полную инструкцию",
      body:
        "Самый быстрый путь — установить расширение: оно работает с текущей вкладкой и не требует копировать ссылку.",
      eyebrow: "КАК НАЧАТЬ",
      extensionAction: "Установить расширение",
      installTime: "за 30 секунд",
      items: [
        {
          title: "Установите расширение",
          body:
            "Добавьте Page2File в Chrome. Установка занимает меньше минуты, регистрация не нужна.",
        },
        {
          title: "Откройте страницу",
          body:
            "Перейдите на нужную вкладку, откройте Page2File и выберите PDF или PowerPoint.",
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
        {
          slug: "why-print-to-pdf-breaks",
          title: "Почему Print to PDF ломает сложные страницы",
          body:
            "Что происходит с фиксированными блоками, длинными изображениями и динамическим контентом — и как избежать ручной починки.",
        },
        {
          slug: "visual-vs-editable",
          title: "Visual или Editable PDF: какой режим выбрать",
          body:
            "Сравниваем визуальную точность, доступность текста и дальнейшее редактирование на конкретных задачах.",
        },
        {
          slug: "preserve-clickable-links",
          title: "Как сохранить кликабельные ссылки",
          body:
            "Когда ссылки нужны в результате, какие ограничения есть у страницы и что проверить в предпросмотре.",
        },
        {
          slug: "long-webpage-page-breaks",
          title: "Длинная страница без рваных разрывов",
          body:
            "Как Page2File находит безопасные границы и почему изображения не оказываются разрезаны между страницами.",
        },
        {
          slug: "webpage-to-powerpoint",
          title: "Как превратить веб-страницу в PowerPoint",
          body:
            "От веб-контента к слайдам 16:9: что переносится, что редактируется и где полезен визуальный режим.",
        },
        {
          slug: "export-ai-chats-privately",
          title: "Как сохранить AI-чат в PDF локально",
          body:
            "Пошаговый сценарий для ChatGPT, Claude, Gemini, Grok и DeepSeek без отправки закрытого чата на сервер.",
        },
      ],
      title: "Разберитесь в режимах до первого экспорта",
    },
    faq: {
      body:
        "Короткие ответы о режимах, приватности, расширении и повторном скачивании.",
      eyebrow: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      items: [
        {
          title: "Можно сохранить закрытую страницу?",
          body:
            "На сайте — только публичный HTTPS-адрес. Для вкладки с авторизацией установите расширение: оно читает открытую страницу локально в браузере.",
        },
        {
          title: "Чем «Снимки страницы» отличаются от редактируемого PDF?",
          body:
            "Снимки максимально точно сохраняют внешний вид. Редактируемый PDF оставляет текст, ссылки и выбранные элементы доступными для дальнейшей работы.",
        },
        {
          title: "Почему у PowerPoint нет дополнительных настроек?",
          body:
            "PPTX создаётся по единому сценарию 16:9. Вы выбираете формат, проверяете разбиение в предпросмотре и скачиваете презентацию.",
        },
        {
          title: "Можно сохранить ссылки, но убрать картинки и CSS?",
          body:
            "Да. В редактируемом PDF ссылки, изображения и стили — независимые параметры, поэтому доступны любые комбинации.",
        },
        {
          title: "Где хранятся созданные файлы?",
          body:
            "Для публичной ссылки обработка временная: файл автоматически удаляется после короткого окна скачивания или лимита попыток. Закрытые вкладки обрабатываются локально.",
        },
        {
          title: "Что делать, если скачивание не началось?",
          body:
            "После готовности форма заменяется кнопкой повторного скачивания. Она доступна в пределах временного окна и лимита попыток.",
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
