import type { Locale } from "./locales";

export type SiteCopy = {
  footer: {
    brandDescription: string;
    companyTitle: string;
    copyright: string;
    gptsTitle: string;
    legalTitle: string;
    links: {
      blog: string;
      cookiePolicy: string;
      extension: string;
      privacy: string;
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

const siteCopy: Record<"en" | "ru" | "de" | "fr", SiteCopy> = {
  en: {
    header: {
      brandLabel: "Page 2 File — home",
      extensionAction: "Install now",
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
      copyright: "© 2026 Page 2 File. All rights reserved.",
      gptsTitle: "GPTs",
      legalTitle: "Legal information",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookies",
        extension: "Chrome extension",
        privacy: "Privacy",
        terms: "Terms",
        webpageToPdf: "Webpage to PDF",
        webpageToPowerpoint: "Webpage to PowerPoint",
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
      navigation: {
        blog: "Блог",
        faq: "FAQ",
        features: "Преимущества",
        howItWorks: "Как начать",
      },
    },
    footer: {
      brandDescription:
        "Веб-страница в редактируемый PDF или PowerPoint с настраиваемым предпросмотром.",
      companyTitle: "Компания и документы",
      copyright: "© 2026 Page 2 File. Все права защищены.",
      gptsTitle: "GPTs",
      legalTitle: "Юридическая информация",
      links: {
        blog: "Блог",
        cookiePolicy: "Cookies",
        extension: "Расширение Chrome",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        webpageToPdf: "Веб-страница в PDF",
        webpageToPowerpoint: "Веб-страница в PowerPoint",
      },
      servicesTitle: "Сервисы",
    },
  },
  de: {
    header: {
      brandLabel: "Page 2 File — Startseite",
      extensionAction: "Jetzt installieren",
      menuLabel: "Menü öffnen",
      mobileNavigationLabel: "Mobile Navigation",
      navigationLabel: "Hauptnavigation",
      navigation: {
        blog: "Blog",
        faq: "FAQ",
        features: "Funktionen",
        howItWorks: "So funktioniert es",
      },
    },
    footer: {
      brandDescription:
        "Eine Webseite als übersichtliche PDF- oder PowerPoint-Datei — mit Vorschau und ohne manuelle Korrektur von Seitenumbrüchen.",
      companyTitle: "Unternehmen und Dokumente",
      copyright: "© 2026 Page 2 File. Alle Rechte vorbehalten.",
      gptsTitle: "GPTs",
      legalTitle: "Rechtliche Informationen",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookies",
        extension: "Chrome-Erweiterung",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
        webpageToPdf: "Webseite als PDF",
        webpageToPowerpoint: "Webseite als PowerPoint",
      },
      servicesTitle: "Dienste",
    },
  },
  fr: {
    header: {
      brandLabel: "Page 2 File — accueil",
      extensionAction: "Installer maintenant",
      menuLabel: "Ouvrir le menu",
      mobileNavigationLabel: "Navigation mobile",
      navigationLabel: "Navigation principale",
      navigation: {
        blog: "Blog",
        faq: "FAQ",
        features: "Fonctionnalités",
        howItWorks: "Fonctionnement",
      },
    },
    footer: {
      brandDescription:
        "Une page web dans un PDF ou PowerPoint clair — avec aperçu et sans correction manuelle des sauts de page.",
      companyTitle: "Entreprise et documents",
      copyright: "© 2026 Page 2 File. Tous droits réservés.",
      gptsTitle: "GPTs",
      legalTitle: "Informations juridiques",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookies",
        extension: "Extension Chrome",
        privacy: "Confidentialité",
        terms: "Conditions d’utilisation",
        webpageToPdf: "Page web en PDF",
        webpageToPowerpoint: "Page web en PowerPoint",
      },
      servicesTitle: "Services",
    },
  },
};

const hasSiteCopy = (
  locale: Locale,
): locale is keyof typeof siteCopy => locale in siteCopy;

export const getSiteCopy = (locale: Locale): SiteCopy =>
  siteCopy[hasSiteCopy(locale) ? locale : "en"];
