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
    powerpointLink: string;
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
  developmentNotice: "This project is currently under development.",
  navigation: {
    convert: "Convert",
    extension: "Extension",
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
      "A privacy-first service for turning webpage sections into reviewed PDF pages or PowerPoint slides.",
    pdfLink: "Webpage to PDF",
    powerpointLink: "Webpage to PowerPoint",
    extensionLink: "Chrome extension",
    changelogLink: "Changelog",
    footerMeta: "No accounts · No conversion history · Temporary processing",
  },
  footer: { privacy: "Privacy", terms: "Terms" },
};

const messages: Record<Locale, Messages> = {
  en,
  ru: {
    ...en,
    developmentNotice: "Проект находится на стадии разработки.",
    navigation: {
      convert: "Конвертация",
      extension: "Расширение",
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
        "Сервис с приоритетом конфиденциальности: превращает секции веб-страницы в проверяемые страницы PDF или слайды PowerPoint.",
      pdfLink: "Веб-страница в PDF",
      powerpointLink: "Веб-страница в PowerPoint",
      extensionLink: "Расширение Chrome",
      changelogLink: "История изменений",
      footerMeta:
        "Без аккаунтов · Без истории конвертаций · Временная обработка",
    },
    footer: {
      privacy: "Конфиденциальность",
      terms: "Условия",
    },
  },
};

export const getMessages = (locale: Locale): Messages => messages[locale];
