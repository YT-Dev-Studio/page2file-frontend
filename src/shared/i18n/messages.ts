import type { Locale } from "./locales";

export type Messages = {
  developmentNotice: string;
  navigation: {
    convert: string;
    extension: string;
    guides: string;
    blog: string;
  };
  actions: {
    pdf: string;
    powerpoint: string;
    preview: string;
    download: string;
    install: string;
    comingSoon: string;
  };
  converter: {
    urlLabel: string;
    urlHint: string;
    visual: string;
    editable: string;
    warnings: string;
  };
  shell: {
    skipToContent: string;
    primaryNavigation: string;
    mobileNavigation: string;
    productNavigation: string;
    legalNavigation: string;
    menu: string;
    language: string;
    footerDescription: string;
    pdfLink: string;
    extensionLink: string;
    changelogLink: string;
    footerMeta: string;
  };
  footer: {
    privacy: string;
    terms: string;
  };
};

const en: Messages = {
  developmentNotice: "The website conversion workspace is currently unavailable.",
  navigation: {
    convert: "Convert",
    extension: "Page 2 PDF",
    guides: "Guides",
    blog: "Blog",
  },
  actions: {
    pdf: "Convert to PDF",
    powerpoint: "Convert to PowerPoint",
    preview: "Generate preview",
    download: "Download file",
    install: "Install extension",
    comingSoon: "Coming soon",
  },
  converter: {
    urlLabel: "Public webpage URL",
    urlHint:
      "HTTPS only. Private and signed-in pages work through the extension.",
    visual: "Page snapshots",
    editable: "Editable & clickable",
    warnings: "Warnings",
  },
  shell: {
    skipToContent: "Skip to content",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    productNavigation: "Product",
    legalNavigation: "Legal",
    menu: "Menu",
    language: "Language",
    footerDescription:
      "Page 2 File explains and supports Page 2 PDF for saving the active Chrome tab as a visual, selectable, or chat-focused PDF.",
    pdfLink: "Webpage to PDF",
    extensionLink: "Page 2 PDF for Chrome",
    changelogLink: "Changelog",
    footerMeta: "Active-tab workflow · No account-wide export · Temporary previews",
  },
  footer: { privacy: "Privacy", terms: "Terms" },
};

const messages: Record<Locale, Messages> = {
  en,
  ru: {
    ...en,
    developmentNotice: "Рабочая область конвертации на сайте сейчас недоступна.",
    navigation: {
      convert: "Конвертация",
      extension: "Page 2 PDF",
      guides: "Инструкции",
      blog: "Блог",
    },
    actions: {
      pdf: "Конвертировать в PDF",
      powerpoint: "Конвертировать в PowerPoint",
      preview: "Создать предпросмотр",
      download: "Скачать файл",
      install: "Установить расширение",
      comingSoon: "Скоро",
    },
    converter: {
      urlLabel: "URL общедоступной веб-страницы",
      urlHint:
        "Только HTTPS. Для закрытых страниц и сайтов с авторизацией используйте расширение.",
      visual: "Снимки страницы",
      editable: "Редактируемый и кликабельный",
      warnings: "Предупреждения",
    },
    shell: {
      skipToContent: "Перейти к содержимому",
      primaryNavigation: "Основная навигация",
      mobileNavigation: "Мобильная навигация",
      productNavigation: "Продукт",
      legalNavigation: "Правовая информация",
      menu: "Меню",
      language: "Язык",
      footerDescription:
        "Page 2 File объясняет работу Page 2 PDF — расширения для сохранения активной вкладки Chrome в визуальный, текстовый или чат-PDF.",
      pdfLink: "Веб-страница в PDF",
      extensionLink: "Page 2 PDF для Chrome",
      changelogLink: "История изменений",
      footerMeta:
        "Активная вкладка · Без экспорта всего аккаунта · Временный предпросмотр",
    },
    footer: {
      privacy: "Конфиденциальность",
      terms: "Условия",
    },
  },
};

export const getMessages = (locale: Locale): Messages => messages[locale];
