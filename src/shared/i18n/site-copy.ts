import type {
  Locale,
  LocalizedPublished,
} from "./locales";
import { isPublishedLocale } from "./locales";

export type SiteCopy = {
  footer: {
    brandDescription: string;
    companyTitle: string;
    copyright: string;
    gptsTitle: string;
    legalTitle: string;
    links: {
      acceptableUse: string;
      blog: string;
      cookiePolicy: string;
      extension: string;
      privacy: string;
      security: string;
      terms: string;
      webpageToPdf: string;
      webpageToPowerpoint: string;
    };
    servicesTitle: string;
  };
  header: {
    brandLabel: string;
    extensionAction: string;
    menuLabel: string;
    mobileNavigationLabel: string;
    navigationLabel: string;
    navigation: {
      blog: string;
      faq: string;
      features: string;
      howItWorks: string;
    };
  };
};

const siteCopy: LocalizedPublished<SiteCopy> = {
  en: {
    header: {
      brandLabel: "Page2File — home",
      extensionAction: "Download extension",
      menuLabel: "Open menu",
      mobileNavigationLabel: "Mobile navigation",
      navigationLabel: "Primary navigation",
      navigation: {
        blog: "Blog",
        faq: "FAQ",
        features: "Features",
        howItWorks: "How it works",
      },
    },
    footer: {
      brandDescription:
        "A webpage in a clean PDF or PowerPoint — with preview and without manually repairing page breaks.",
      companyTitle: "Company and documents",
      copyright: "© 2026 Page2File. All rights reserved.",
      gptsTitle: "GPTs",
      legalTitle: "Legal information",
      links: {
        acceptableUse: "Acceptable use",
        blog: "Blog",
        cookiePolicy: "Cookie policy",
        extension: "Chrome extension",
        privacy: "Privacy",
        security: "Security",
        terms: "Terms",
        webpageToPdf: "Webpage to PDF",
        webpageToPowerpoint: "Webpage to PowerPoint",
      },
      servicesTitle: "Services",
    },
  },
  ru: {
    header: {
      brandLabel: "Page2File — главная",
      extensionAction: "Скачать расширение",
      menuLabel: "Открыть меню",
      mobileNavigationLabel: "Мобильная навигация",
      navigationLabel: "Основная навигация",
      navigation: {
        blog: "Блог",
        faq: "FAQ",
        features: "Преимущества",
        howItWorks: "Как начать",
      },
    },
    footer: {
      brandDescription:
        "Веб-страница в чистый PDF или PowerPoint — с предпросмотром и без ручной починки разрывов.",
      companyTitle: "Компания и документы",
      copyright: "© 2026 Page2File. Все права защищены.",
      gptsTitle: "GPTs",
      legalTitle: "Юридическая информация",
      links: {
        acceptableUse: "Допустимое использование",
        blog: "Блог",
        cookiePolicy: "Cookie",
        extension: "Расширение Chrome",
        privacy: "Политика конфиденциальности",
        security: "Безопасность",
        terms: "Условия использования",
        webpageToPdf: "Веб-страница в PDF",
        webpageToPowerpoint: "Веб-страница в PowerPoint",
      },
      servicesTitle: "Сервисы",
    },
  },
};

export const getSiteCopy = (locale: Locale): SiteCopy =>
  siteCopy[isPublishedLocale(locale) ? locale : "en"];
