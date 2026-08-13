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
  de: {
    header: {
      brandLabel: "Page 2 File — Startseite",
      extensionAction: "Jetzt installieren",
      menuLabel: "Menü öffnen",
      mobileNavigationLabel: "Mobile Navigation",
      navigationLabel: "Hauptnavigation",
    },
    footer: {
      companyTitle: "Unternehmen und Dokumente",
      copyright: "© 2026 Page 2 File. Alle Rechte vorbehalten.",
      gptsTitle: "GPTs",
      legalTitle: "Rechtliche Informationen",
      links: {
        cookiePolicy: "Cookies",
        extension: "Chrome-Erweiterung",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
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
    },
    footer: {
      companyTitle: "Entreprise et documents",
      copyright: "© 2026 Page 2 File. Tous droits réservés.",
      gptsTitle: "GPTs",
      legalTitle: "Informations juridiques",
      links: {
        cookiePolicy: "Cookies",
        extension: "Extension Chrome",
        privacy: "Confidentialité",
        terms: "Conditions d’utilisation",
      },
      servicesTitle: "Services",
    },
  },
  es: {
    header: {
      brandLabel: "Page 2 File — inicio",
      extensionAction: "Instalar ahora",
      menuLabel: "Abrir menú",
      mobileNavigationLabel: "Navegación móvil",
      navigationLabel: "Navegación principal",
    },
    footer: {
      companyTitle: "Empresa y documentos",
      copyright: "© 2026 Page 2 File. Todos los derechos reservados.",
      gptsTitle: "GPTs",
      legalTitle: "Información legal",
      links: {
        cookiePolicy: "Cookies",
        extension: "Extensión de Chrome",
        privacy: "Privacidad",
        terms: "Condiciones",
      },
      servicesTitle: "Servicios",
    },
  },
  nl: {
    header: {
      brandLabel: "Page 2 File — startpagina",
      extensionAction: "Nu installeren",
      menuLabel: "Menu openen",
      mobileNavigationLabel: "Mobiele navigatie",
      navigationLabel: "Hoofdnavigatie",
    },
    footer: {
      companyTitle: "Bedrijf en documenten",
      copyright: "© 2026 Page 2 File. Alle rechten voorbehouden.",
      gptsTitle: "GPTs",
      legalTitle: "Juridische informatie",
      links: {
        cookiePolicy: "Cookies",
        extension: "Chrome-extensie",
        privacy: "Privacy",
        terms: "Voorwaarden",
      },
      servicesTitle: "Diensten",
    },
  },
  pt: {
    header: {
      brandLabel: "Page 2 File — página inicial",
      extensionAction: "Instalar agora",
      menuLabel: "Abrir menu",
      mobileNavigationLabel: "Navegação móvel",
      navigationLabel: "Navegação principal",
    },
    footer: {
      companyTitle: "Empresa e documentos",
      copyright: "© 2026 Page 2 File. Todos os direitos reservados.",
      gptsTitle: "GPTs",
      legalTitle: "Informação jurídica",
      links: {
        cookiePolicy: "Cookies",
        extension: "Extensão do Chrome",
        privacy: "Privacidade",
        terms: "Termos",
      },
      servicesTitle: "Serviços",
    },
  },
  it: {
    header: {
      brandLabel: "Page 2 File — pagina iniziale",
      extensionAction: "Installa ora",
      menuLabel: "Apri menu",
      mobileNavigationLabel: "Navigazione mobile",
      navigationLabel: "Navigazione principale",
    },
    footer: {
      companyTitle: "Azienda e documenti",
      copyright: "© 2026 Page 2 File. Tutti i diritti riservati.",
      gptsTitle: "GPTs",
      legalTitle: "Informazioni legali",
      links: {
        cookiePolicy: "Cookie",
        extension: "Estensione Chrome",
        privacy: "Privacy",
        terms: "Termini",
      },
      servicesTitle: "Servizi",
    },
  },
  pl: {
    header: {
      brandLabel: "Page 2 File — strona główna",
      extensionAction: "Zainstaluj teraz",
      menuLabel: "Otwórz menu",
      mobileNavigationLabel: "Nawigacja mobilna",
      navigationLabel: "Nawigacja główna",
    },
    footer: {
      companyTitle: "Firma i dokumenty",
      copyright: "© 2026 Page 2 File. Wszelkie prawa zastrzeżone.",
      gptsTitle: "GPTs",
      legalTitle: "Informacje prawne",
      links: {
        cookiePolicy: "Pliki cookie",
        extension: "Rozszerzenie Chrome",
        privacy: "Prywatność",
        terms: "Warunki",
      },
      servicesTitle: "Usługi",
    },
  },
  cs: {
    header: {
      brandLabel: "Page 2 File — domovská stránka",
      extensionAction: "Nainstalovat",
      menuLabel: "Otevřít nabídku",
      mobileNavigationLabel: "Mobilní navigace",
      navigationLabel: "Hlavní navigace",
    },
    footer: {
      companyTitle: "Společnost a dokumenty",
      copyright: "© 2026 Page 2 File. Všechna práva vyhrazena.",
      gptsTitle: "GPTs",
      legalTitle: "Právní informace",
      links: {
        cookiePolicy: "Cookies",
        extension: "Rozšíření Chrome",
        privacy: "Soukromí",
        terms: "Podmínky",
      },
      servicesTitle: "Služby",
    },
  },
  sv: {
    header: {
      brandLabel: "Page 2 File — startsida",
      extensionAction: "Installera nu",
      menuLabel: "Öppna menyn",
      mobileNavigationLabel: "Mobil navigering",
      navigationLabel: "Huvudnavigering",
    },
    footer: {
      companyTitle: "Företag och dokument",
      copyright: "© 2026 Page 2 File. Alla rättigheter förbehållna.",
      gptsTitle: "GPTs",
      legalTitle: "Juridisk information",
      links: {
        cookiePolicy: "Cookies",
        extension: "Chrome-tillägg",
        privacy: "Integritet",
        terms: "Villkor",
      },
      servicesTitle: "Tjänster",
    },
  },
  no: {
    header: {
      brandLabel: "Page 2 File — startside",
      extensionAction: "Installer nå",
      menuLabel: "Åpne meny",
      mobileNavigationLabel: "Mobil navigasjon",
      navigationLabel: "Hovednavigasjon",
    },
    footer: {
      companyTitle: "Selskap og dokumenter",
      copyright: "© 2026 Page 2 File. Alle rettigheter forbeholdt.",
      gptsTitle: "GPTs",
      legalTitle: "Juridisk informasjon",
      links: {
        cookiePolicy: "Informasjonskapsler",
        extension: "Chrome-utvidelse",
        privacy: "Personvern",
        terms: "Vilkår",
      },
      servicesTitle: "Tjenester",
    },
  },
  da: {
    header: {
      brandLabel: "Page 2 File — startside",
      extensionAction: "Installer nu",
      menuLabel: "Åbn menu",
      mobileNavigationLabel: "Mobil navigation",
      navigationLabel: "Primær navigation",
    },
    footer: {
      companyTitle: "Virksomhed og dokumenter",
      copyright: "© 2026 Page 2 File. Alle rettigheder forbeholdes.",
      gptsTitle: "GPTs",
      legalTitle: "Juridiske oplysninger",
      links: {
        cookiePolicy: "Cookies",
        extension: "Chrome-udvidelse",
        privacy: "Privatliv",
        terms: "Vilkår",
      },
      servicesTitle: "Tjenester",
    },
  },
  fi: {
    header: {
      brandLabel: "Page 2 File — etusivu",
      extensionAction: "Asenna nyt",
      menuLabel: "Avaa valikko",
      mobileNavigationLabel: "Mobiilinavigointi",
      navigationLabel: "Päänavigointi",
    },
    footer: {
      companyTitle: "Yritys ja asiakirjat",
      copyright: "© 2026 Page 2 File. Kaikki oikeudet pidätetään.",
      gptsTitle: "GPTs",
      legalTitle: "Oikeudelliset tiedot",
      links: {
        cookiePolicy: "Evästeet",
        extension: "Chrome-laajennus",
        privacy: "Tietosuoja",
        terms: "Käyttöehdot",
      },
      servicesTitle: "Palvelut",
    },
  },
  ro: {
    header: {
      brandLabel: "Page 2 File — pagina principală",
      extensionAction: "Instalează acum",
      menuLabel: "Deschide meniul",
      mobileNavigationLabel: "Navigare mobilă",
      navigationLabel: "Navigare principală",
    },
    footer: {
      companyTitle: "Companie și documente",
      copyright: "© 2026 Page 2 File. Toate drepturile rezervate.",
      gptsTitle: "GPTs",
      legalTitle: "Informații juridice",
      links: {
        cookiePolicy: "Cookie-uri",
        extension: "Extensie Chrome",
        privacy: "Confidențialitate",
        terms: "Termeni",
      },
      servicesTitle: "Servicii",
    },
  },
  hu: {
    header: {
      brandLabel: "Page 2 File — kezdőlap",
      extensionAction: "Telepítés most",
      menuLabel: "Menü megnyitása",
      mobileNavigationLabel: "Mobil navigáció",
      navigationLabel: "Elsődleges navigáció",
    },
    footer: {
      companyTitle: "Vállalat és dokumentumok",
      copyright: "© 2026 Page 2 File. Minden jog fenntartva.",
      gptsTitle: "GPTs",
      legalTitle: "Jogi információk",
      links: {
        cookiePolicy: "Sütik",
        extension: "Chrome-bővítmény",
        privacy: "Adatvédelem",
        terms: "Feltételek",
      },
      servicesTitle: "Szolgáltatások",
    },
  },
};

export const getSiteCopy = (locale: Locale): SiteCopy =>
  siteCopy[locale];
