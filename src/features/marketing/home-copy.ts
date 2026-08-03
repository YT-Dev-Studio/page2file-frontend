import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";
import type { StaticRoute } from "@/shared/routes/routes";

export type CopyList = {
  items: ReadonlyArray<string>;
  style: "ordered" | "unordered";
};

export type CopyItem = {
  body?: string;
  list?: CopyList;
  title: string;
};

type BlogCopyItem = {
  slug: string;
};

export type FaqBodySegment =
  | {
      kind: "link";
      label: string;
      route: StaticRoute;
    }
  | {
      kind: "text";
      text: string;
    };

export type FaqCopyItem = {
  body: string | ReadonlyArray<FaqBodySegment>;
  title: string;
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
    items: ReadonlyArray<FaqCopyItem>;
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
    title: "Export any webpage to PDF/PPTX",
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
        "The extension works in two modes: by URL or from the active tab. We delete exported page data from the server after you close the preview.",
      eyebrow: "CHROME EXTENSION",
      title: "Export the current tab, even if it requires sign-in.",
    },
    features: {
      eyebrow: "FEATURES",
      title: "Flexible settings for exported content",
      body:
        "Export webpages in a convenient format: as screenshots or with media, links and layout preserved.",
      items: [
        {
          title: "Export AI chats and messengers",
          body:
            "Export long conversations from ChatGPT, Claude, Gemini, Grok, DeepSeek and other services into a clean, readable PDF.",
        },
        {
          title: "2 most convenient formats",
          list: {
            items: [
              "Save screenshots as PDF/PPTX.",
              "Create editable PDF/PPTX files with media, links and structure preserved.",
            ],
            style: "unordered",
          },
        },
        {
          title: "Control file contents",
          body:
            "Combine preserved media, links and design in exported files. You can also remove unnecessary page elements during preview.",
        },
        {
          title: "2 operating modes",
          body:
            "Export the current tab from any website or submit a URL for a public page.",
        },
        {
          title: "We solved competitors’ problems",
          body:
            "You get a PDF or PPTX with whole images and without huge gaps between content.",
        },
        {
          title: "Secure and no registration",
          body:
            "You do not need to create an account to start exporting. Simply install the extension and save the selected page.",
        },
      ],
    },
    howItWorks: {
      action: "Open the full guide",
      body:
        "The fastest route is to install the extension: it works with the current tab and does not require copying a link.",
      eyebrow: "HOW TO START",
      extensionAction: "Install extension",
      installTime: "In 30 seconds",
      items: [
        {
          title: "Install the extension",
          body:
            "Add Page 2 File to Chrome. No Page 2 File account is required.",
        },
        {
          title: "Open the page",
          list: {
            items: [
              "Go to the tab you need.",
              "Open Page 2 File.",
              "Click EXPORT.",
            ],
            style: "ordered",
          },
        },
        {
          title: "Review and download",
          body:
            "Review the result, remove sections if necessary and download the finished file.",
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
      title: "Explore guides for exporting different types of websites",
    },
    faq: {
      body:
        "Clear answers about webpage capture, output modes, private tabs, temporary previews, and chat export.",
      eyebrow: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          title: "How do I convert a webpage to PDF or PowerPoint?",
          body:
            "For a public page, paste its HTTPS URL, choose PDF or PowerPoint, select screenshot or editable mode, and review the sections before creating the file. For a signed-in page, use the Page 2 File Chrome extension with the active tab.",
        },
        {
          title: "Can Page 2 File preserve the page design?",
          body:
            "Screenshot mode is intended to preserve the rendered appearance, including layout, colors, images, and visible charts. Browser-only behavior such as animation, video, and interactive controls becomes a static representation.",
        },
        {
          title: "Will text and links remain editable or clickable?",
          body:
            "Editable mode keeps supported text as document content and preserves safe link targets. Complex widgets, canvas graphics, and unsupported elements may be represented as images. Screenshot mode prioritizes appearance and does not turn every pixel into an editable object.",
        },
        {
          title: "Can it capture full-length and dynamic pages?",
          body:
            "The extension works with the rendered active tab, including long pages after the required sections are loaded. First, expand collapsed content and scroll to the very bottom of the page. Hidden or unloaded content cannot be exported.",
        },
        {
          title: "Can it convert pages behind a login?",
          body:
            "Yes, through the Chrome extension after you open the page normally. The extension works from the active tab and does not ask you to send an account password to the public URL form. It does not bypass access controls.",
        },
        {
          title: "Can I convert only one page or an entire website?",
          body: [
            {
              kind: "text",
              text: "The webpage converters and ",
            },
            {
              kind: "link",
              label: "One Page 2 PDF",
              route: "page2pdf-gpt",
            },
            {
              kind: "text",
              text: " and ",
            },
            {
              kind: "link",
              label: "One Page 2 PowerPoint",
              route: "one-page2powerpoint-gpt",
            },
            {
              kind: "text",
              text: " handle one URL. For multiple accessible public pages, use ",
            },
            {
              kind: "link",
              label: "Web 2 PDF",
              route: "web2pdf-gpt",
            },
            {
              kind: "text",
              text: " or ",
            },
            {
              kind: "link",
              label: "Web 2 PowerPoint",
              route: "web2powerpoint-gpt",
            },
            {
              kind: "text",
              text: ": they return a separate PDF or PPTX for each selected page, not one merged file.",
            },
          ],
        },
        {
          title: "How do screenshot and editable modes differ?",
          body:
            "Screenshot mode favors fidelity to the rendered page. Editable mode favors selectable text, supported images, safe links, and reusable document structure. Review complex charts, typography, and layouts because either mode can require a deliberate fallback.",
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
      title: "What you need to know",
    },
    finalCta: {
      body:
        "Paste a public link here or install the extension for the current tab.",
      eyebrow: "READY TO TRY IT ON YOUR PAGE?",
      title: "Get a PDF or PowerPoint before opening an editor",
    },
  },
  ru: {
    title: "Экспортируйте любую веб-страницу в PDF/PPTX",
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
        "Расширение работает в двух режимах: по URL и с активной вкладкой. Мы удаляем данные экспортируемых страниц с сервера после закрытия предпросмотра.",
      eyebrow: "РАСШИРЕНИЕ CHROME",
      title: "Экспортируйте текущую вкладку, даже если она требует логина.",
    },
    features: {
      eyebrow: "ПРЕИМУЩЕСТВА",
      title: "Гибкая настройка экспортируемого контента",
      body:
        "Экспортируйте страницы в удобном формате: скриншотами или с сохранением медиа, ссылок и вёрстки.",
      items: [
        {
          title: "Экспорт AI-чатов и мессенджеров",
          body:
            "Экспортируйте длинные диалоги ChatGPT, Claude, Gemini, Grok, DeepSeek и других сервисов в чистый, читаемый PDF.",
        },
        {
          title: "2 самых удобных формата",
          list: {
            items: [
              "Сохраняйте скриншоты в PDF/PPTX.",
              "Создавайте редактируемые PDF/PPTX с сохранением медиа, ссылок и структуры.",
            ],
            style: "unordered",
          },
        },
        {
          title: "Настройте содержимое файла",
          body:
            "Вы можете комбинировать в экспортируемых файлах сохранение медиа, ссылок и дизайна, а также удалять ненужные элементы страницы во время предпросмотра.",
        },
        {
          title: "2 режима работы",
          body:
            "Экспортируйте текущую вкладку любого сайта или отправьте URL публичной страницы.",
        },
        {
          title: "Решили проблемы конкурентов",
          body:
            "Вы получаете PDF или PPTX с цельными изображениями и без огромных разрывов между контентом.",
        },
        {
          title: "Безопасно и без регистрации",
          body:
            "Чтобы начать экспортировать, не нужно создавать аккаунт. Просто установите расширение и сохраните выбранную страницу.",
        },
      ],
    },
    howItWorks: {
      action: "Открыть полную инструкцию",
      body:
        "Самый быстрый путь — установить расширение: оно работает с текущей вкладкой и не требует копировать ссылку.",
      eyebrow: "КАК НАЧАТЬ",
      extensionAction: "Установить расширение",
      installTime: "За 30 секунд",
      items: [
        {
          title: "Установите расширение",
          body:
            "Добавьте Page 2 File в Chrome. Аккаунт Page 2 File не нужен.",
        },
        {
          title: "Откройте страницу",
          list: {
            items: [
              "Перейдите на нужную вкладку.",
              "Откройте Page 2 File.",
              "Нажмите кнопку EXPORT.",
            ],
            style: "ordered",
          },
        },
        {
          title: "Проверьте и скачайте",
          body:
            "Проверьте результат, при необходимости удалите секции и скачайте готовый файл.",
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
      title: "Познакомьтесь с гайдами по экспорту разных типов сайтов",
    },
    faq: {
      body:
        "Короткие ответы о захвате страниц, режимах, закрытых вкладках, временном предпросмотре и экспорте чатов.",
      eyebrow: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      items: [
        {
          title: "Как конвертировать веб-страницу в PDF или PowerPoint?",
          body:
            "Для публичной страницы вставьте HTTPS-адрес, выберите PDF или PowerPoint, режим скриншотов или редактируемый режим и проверьте секции. Для страницы после входа используйте расширение Page 2 File с активной вкладкой.",
        },
        {
          title: "Может ли Page 2 File сохранить дизайн страницы?",
          body:
            "Режим скриншотов предназначен для сохранения отображаемого макета, цветов, изображений и видимых графиков. Анимация, видео и интерактивные элементы браузера переходят в статичное представление.",
        },
        {
          title: "Останутся ли текст и ссылки редактируемыми и кликабельными?",
          body:
            "Редактируемый режим сохраняет поддерживаемый текст как содержимое документа и оставляет безопасные ссылки кликабельными. Сложные виджеты и canvas могут стать изображениями. Режим скриншотов отдаёт приоритет внешнему виду.",
        },
        {
          title: "Можно ли захватить полную и динамическую страницу?",
          body:
            "Расширение работает с отображаемой активной вкладкой, включая длинную страницу после загрузки нужных секций. Сначала раскройте блоки и прокрутите страницу до самого низа. Скрытый или незагруженный контент экспортировать нельзя.",
        },
        {
          title: "Можно ли конвертировать страницу после входа?",
          body:
            "Да, через расширение Chrome после обычного открытия страницы. Оно работает с активной вкладкой и не просит передавать пароль в форму публичного URL. Расширение не обходит контроль доступа.",
        },
        {
          title: "Можно конвертировать только одну страницу или весь сайт?",
          body: [
            {
              kind: "text",
              text: "Конвертеры и ",
            },
            {
              kind: "link",
              label: "One Page 2 PDF",
              route: "page2pdf-gpt",
            },
            {
              kind: "text",
              text: " и ",
            },
            {
              kind: "link",
              label: "One Page 2 PowerPoint",
              route: "one-page2powerpoint-gpt",
            },
            {
              kind: "text",
              text: " обрабатывают один URL. Для нескольких доступных публичных страниц используйте ",
            },
            {
              kind: "link",
              label: "Web 2 PDF",
              route: "web2pdf-gpt",
            },
            {
              kind: "text",
              text: " или ",
            },
            {
              kind: "link",
              label: "Web 2 PowerPoint",
              route: "web2powerpoint-gpt",
            },
            {
              kind: "text",
              text: ": сервисы возвращают отдельный PDF или PPTX для каждой выбранной страницы, а не один общий файл.",
            },
          ],
        },
        {
          title: "Чем отличаются режим скриншотов и редактируемый режим?",
          body:
            "Режим скриншотов сохраняет внешний вид отрисованной страницы. Редактируемый режим сохраняет выделяемый текст, поддерживаемые изображения, безопасные ссылки и структуру. Сложные графики, шрифты и макеты требуют проверки.",
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
      title: "Что важно знать",
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
