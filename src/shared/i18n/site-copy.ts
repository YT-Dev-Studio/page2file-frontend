import type { Locale } from "./locales";

export type SiteCopy = {
  extensionUnavailableTooltip: string;
  footer: {
    companyTitle: string;
    copyright: string;
    gptsTitle: string;
    legalTitle: string;
    links: {
      cookiePolicy: string;
      extension: string;
      privacy: string;
      support: string;
      terms: string;
    };
    servicesTitle: string;
  };
  header: {
    brandLabel: string;
    downloadAction: string;
    extensionAction: string;
    menuLabel: string;
    mobileNavigationLabel: string;
    navigationLabel: string;
  };
};

const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    extensionUnavailableTooltip: "The extension will be available soon.",
    header: {
      brandLabel: "Page 2 File — home",
      downloadAction: "Download extension",
      extensionAction: "Install Page 2 PDF",
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
        cookiePolicy: "Analytics and cookies",
        extension: "Page 2 PDF for Chrome",
        privacy: "Privacy",
        support: "Support",
        terms: "Terms",
      },
      servicesTitle: "Services",
    },
  },
  ru: {
    extensionUnavailableTooltip: "Расширение заработает в ближайшее время.",
    header: {
      brandLabel: "Page 2 File — главная",
      downloadAction: "Скачать расширение",
      extensionAction: "Установить Page 2 PDF",
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
        cookiePolicy: "Аналитика и cookies",
        extension: "Page 2 PDF для Chrome",
        privacy: "Политика конфиденциальности",
        support: "Поддержка",
        terms: "Условия использования",
      },
      servicesTitle: "Сервисы",
    },
  },
};

export const getSiteCopy = (locale: Locale): SiteCopy =>
  siteCopy[locale];
