import type { Locale } from "./locales";

export type SiteCopy = {
  footer: {
    companyTitle: string;
    copyright: string;
    gptsTitle: string;
    legalTitle: string;
    links: {
      cookiePolicy: string;
      extension: string;
      privacy: string;
      terms: string;
    };
    servicesTitle: string;
  };
  header: {
    brandLabel: string;
    extensionAction: string;
    menuLabel: string;
    mobileNavigationLabel: string;
    navigationLabel: string;
  };
};

const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    header: {
      brandLabel: "Page 2 File — home",
      extensionAction: "Install now",
      menuLabel: "Open menu",
      mobileNavigationLabel: "Mobile navigation",
      navigationLabel: "Primary navigation",
    },
    footer: {
      companyTitle: "Company and documents",
      copyright: "© 2026 Page 2 File. All rights reserved.",
      gptsTitle: "GPTs",
      legalTitle: "Legal information",
      links: {
        cookiePolicy: "Cookies",
        extension: "Chrome extension",
        privacy: "Privacy",
        terms: "Terms",
      },
      servicesTitle: "Services",
    },
  },
  ru: {
    header: {
      brandLabel: "Page 2 File — главная",
      extensionAction: "Установить сейчас",
      menuLabel: "Открыть меню",
      mobileNavigationLabel: "Мобильная навигация",
      navigationLabel: "Основная навигация",
    },
    footer: {
      companyTitle: "Компания и документы",
      copyright: "© 2026 Page 2 File. Все права защищены.",
      gptsTitle: "GPTs",
      legalTitle: "Юридическая информация",
      links: {
        cookiePolicy: "Cookies",
        extension: "Расширение Chrome",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
      },
      servicesTitle: "Сервисы",
    },
  },
};

export const getSiteCopy = (locale: Locale): SiteCopy =>
  siteCopy[locale];
