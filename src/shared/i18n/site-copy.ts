import type { Locale } from "./locales";

export type SiteCopy = {
  extensionUnavailableTooltip: string;
  footer: {
    brandDescription: string;
    companyTitle: string;
    copyright: string;
    gptsTitle: string;
    legalTitle: string;
    links: {
      cookiePolicy: string;
      extension: string;
      webpagePdf: string;
      aiChatPdf: string;
      messengerChatPdf: string;
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
      brandDescription:
        "A webpage in a clean PDF or PowerPoint — with preview and without manually repairing page breaks.",
      companyTitle: "Company and documents",
      copyright: "© 2026 Page 2 File. All rights reserved.",
      gptsTitle: "GPTs",
      legalTitle: "Legal information",
      links: {
        cookiePolicy: "Analytics and cookies",
        extension: "Page 2 PDF for Chrome",
        webpagePdf: "Webpage to PDF",
        aiChatPdf: "AI chat to PDF",
        messengerChatPdf: "Messenger chat to PDF",
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
      brandDescription:
        "Веб-страница в редактируемый PDF или PowerPoint с настраиваемым предпросмотром.",
      companyTitle: "Компания и документы",
      copyright: "© 2026 Page 2 File. Все права защищены.",
      gptsTitle: "GPTs",
      legalTitle: "Юридическая информация",
      links: {
        cookiePolicy: "Аналитика и cookies",
        extension: "Page 2 PDF для Chrome",
        webpagePdf: "Веб-страница в PDF",
        aiChatPdf: "AI-чат в PDF",
        messengerChatPdf: "Чат мессенджера в PDF",
        privacy: "Политика конфиденциальности",
        support: "Поддержка",
        terms: "Условия использования",
      },
      servicesTitle: "Сервисы",
    },
  },
  de: {
    extensionUnavailableTooltip: "Die Erweiterung wird demnächst verfügbar sein.",
    header: {
      brandLabel: "Page 2 File — Startseite",
      downloadAction: "Erweiterung herunterladen",
      extensionAction: "Page 2 PDF installieren",
      menuLabel: "Menü öffnen",
      mobileNavigationLabel: "Mobile Navigation",
      navigationLabel: "Hauptnavigation",
    },
    footer: {
      brandDescription:
        "Eine Webseite als übersichtliche PDF- oder PowerPoint-Datei — mit Vorschau und ohne manuelle Korrektur von Seitenumbrüchen.",
      companyTitle: "Unternehmen und Dokumente",
      copyright: "© 2026 Page 2 File. Alle Rechte vorbehalten.",
      gptsTitle: "GPTs",
      legalTitle: "Rechtliche Informationen",
      links: {
        cookiePolicy: "Analytics und Cookies",
        extension: "Page 2 PDF für Chrome",
        webpagePdf: "Webseite als PDF",
        aiChatPdf: "KI-Chat als PDF",
        messengerChatPdf: "Messenger-Chat als PDF",
        privacy: "Datenschutzerklärung",
        support: "Support",
        terms: "Nutzungsbedingungen",
      },
      servicesTitle: "Dienste",
    },
  },
};

export const getSiteCopy = (locale: Locale): SiteCopy =>
  siteCopy[locale];
