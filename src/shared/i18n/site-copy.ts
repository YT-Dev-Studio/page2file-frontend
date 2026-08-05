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

const siteCopy: Record<Locale, SiteCopy> = {
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
  es: {
    header: {
      brandLabel: "Page 2 File — inicio",
      extensionAction: "Instalar ahora",
      menuLabel: "Abrir menú",
      mobileNavigationLabel: "Navegación móvil",
      navigationLabel: "Navegación principal",
      navigation: {
        blog: "Blog",
        faq: "Preguntas frecuentes",
        features: "Funciones",
        howItWorks: "Cómo funciona",
      },
    },
    footer: {
      brandDescription:
        "Una página web en un PDF o PowerPoint claro, con vista previa y sin corregir manualmente los saltos de página.",
      companyTitle: "Empresa y documentos",
      copyright: "© 2026 Page 2 File. Todos los derechos reservados.",
      gptsTitle: "GPTs",
      legalTitle: "Información legal",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookies",
        extension: "Extensión de Chrome",
        privacy: "Privacidad",
        terms: "Condiciones",
        webpageToPdf: "Página web a PDF",
        webpageToPowerpoint: "Página web a PowerPoint",
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
      navigation: {
        blog: "Blog",
        faq: "Veelgestelde vragen",
        features: "Functies",
        howItWorks: "Hoe het werkt",
      },
    },
    footer: {
      brandDescription:
        "Een webpagina als overzichtelijke PDF of PowerPoint, met voorbeeld en zonder handmatig pagina-einden te herstellen.",
      companyTitle: "Bedrijf en documenten",
      copyright: "© 2026 Page 2 File. Alle rechten voorbehouden.",
      gptsTitle: "GPTs",
      legalTitle: "Juridische informatie",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookies",
        extension: "Chrome-extensie",
        privacy: "Privacy",
        terms: "Voorwaarden",
        webpageToPdf: "Webpagina naar PDF",
        webpageToPowerpoint: "Webpagina naar PowerPoint",
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
      navigation: {
        blog: "Blog",
        faq: "Perguntas frequentes",
        features: "Funcionalidades",
        howItWorks: "Como funciona",
      },
    },
    footer: {
      brandDescription:
        "Uma página web num PDF ou PowerPoint claro, com pré-visualização e sem corrigir manualmente as quebras de página.",
      companyTitle: "Empresa e documentos",
      copyright: "© 2026 Page 2 File. Todos os direitos reservados.",
      gptsTitle: "GPTs",
      legalTitle: "Informação jurídica",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookies",
        extension: "Extensão do Chrome",
        privacy: "Privacidade",
        terms: "Termos",
        webpageToPdf: "Página web para PDF",
        webpageToPowerpoint: "Página web para PowerPoint",
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
      navigation: {
        blog: "Blog",
        faq: "Domande frequenti",
        features: "Funzionalità",
        howItWorks: "Come funziona",
      },
    },
    footer: {
      brandDescription:
        "Una pagina web in un PDF o PowerPoint ordinato, con anteprima e senza correggere manualmente le interruzioni di pagina.",
      companyTitle: "Azienda e documenti",
      copyright: "© 2026 Page 2 File. Tutti i diritti riservati.",
      gptsTitle: "GPTs",
      legalTitle: "Informazioni legali",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookie",
        extension: "Estensione Chrome",
        privacy: "Privacy",
        terms: "Termini",
        webpageToPdf: "Pagina web in PDF",
        webpageToPowerpoint: "Pagina web in PowerPoint",
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
      navigation: {
        blog: "Blog",
        faq: "Najczęstsze pytania",
        features: "Funkcje",
        howItWorks: "Jak to działa",
      },
    },
    footer: {
      brandDescription:
        "Strona internetowa w przejrzystym pliku PDF lub PowerPoint — z podglądem i bez ręcznego poprawiania podziałów stron.",
      companyTitle: "Firma i dokumenty",
      copyright: "© 2026 Page 2 File. Wszelkie prawa zastrzeżone.",
      gptsTitle: "GPTs",
      legalTitle: "Informacje prawne",
      links: {
        blog: "Blog",
        cookiePolicy: "Pliki cookie",
        extension: "Rozszerzenie Chrome",
        privacy: "Prywatność",
        terms: "Warunki",
        webpageToPdf: "Strona internetowa do PDF",
        webpageToPowerpoint: "Strona internetowa do PowerPoint",
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
      navigation: {
        blog: "Blog",
        faq: "Časté dotazy",
        features: "Funkce",
        howItWorks: "Jak to funguje",
      },
    },
    footer: {
      brandDescription:
        "Webová stránka v přehledném PDF nebo PowerPointu — s náhledem a bez ručních oprav zalomení stránek.",
      companyTitle: "Společnost a dokumenty",
      copyright: "© 2026 Page 2 File. Všechna práva vyhrazena.",
      gptsTitle: "GPTs",
      legalTitle: "Právní informace",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookies",
        extension: "Rozšíření Chrome",
        privacy: "Soukromí",
        terms: "Podmínky",
        webpageToPdf: "Webová stránka do PDF",
        webpageToPowerpoint: "Webová stránka do PowerPointu",
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
      navigation: {
        blog: "Blogg",
        faq: "Vanliga frågor",
        features: "Funktioner",
        howItWorks: "Så fungerar det",
      },
    },
    footer: {
      brandDescription:
        "En webbsida i en tydlig PDF eller PowerPoint — med förhandsgranskning och utan manuella korrigeringar av sidbrytningar.",
      companyTitle: "Företag och dokument",
      copyright: "© 2026 Page 2 File. Alla rättigheter förbehållna.",
      gptsTitle: "GPTs",
      legalTitle: "Juridisk information",
      links: {
        blog: "Blogg",
        cookiePolicy: "Cookies",
        extension: "Chrome-tillägg",
        privacy: "Integritet",
        terms: "Villkor",
        webpageToPdf: "Webbsida till PDF",
        webpageToPowerpoint: "Webbsida till PowerPoint",
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
      navigation: {
        blog: "Blogg",
        faq: "Vanlige spørsmål",
        features: "Funksjoner",
        howItWorks: "Slik fungerer det",
      },
    },
    footer: {
      brandDescription:
        "En nettside i en ryddig PDF eller PowerPoint — med forhåndsvisning og uten manuell retting av sideskift.",
      companyTitle: "Selskap og dokumenter",
      copyright: "© 2026 Page 2 File. Alle rettigheter forbeholdt.",
      gptsTitle: "GPTs",
      legalTitle: "Juridisk informasjon",
      links: {
        blog: "Blogg",
        cookiePolicy: "Informasjonskapsler",
        extension: "Chrome-utvidelse",
        privacy: "Personvern",
        terms: "Vilkår",
        webpageToPdf: "Nettside til PDF",
        webpageToPowerpoint: "Nettside til PowerPoint",
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
      navigation: {
        blog: "Blog",
        faq: "Ofte stillede spørgsmål",
        features: "Funktioner",
        howItWorks: "Sådan fungerer det",
      },
    },
    footer: {
      brandDescription:
        "En webside i en overskuelig PDF eller PowerPoint — med forhåndsvisning og uden manuel rettelse af sideskift.",
      companyTitle: "Virksomhed og dokumenter",
      copyright: "© 2026 Page 2 File. Alle rettigheder forbeholdes.",
      gptsTitle: "GPTs",
      legalTitle: "Juridiske oplysninger",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookies",
        extension: "Chrome-udvidelse",
        privacy: "Privatliv",
        terms: "Vilkår",
        webpageToPdf: "Webside til PDF",
        webpageToPowerpoint: "Webside til PowerPoint",
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
      navigation: {
        blog: "Blogi",
        faq: "Usein kysytyt kysymykset",
        features: "Ominaisuudet",
        howItWorks: "Näin se toimii",
      },
    },
    footer: {
      brandDescription:
        "Verkkosivu selkeäksi PDF- tai PowerPoint-tiedostoksi — esikatselulla ja ilman sivunvaihtojen käsin korjaamista.",
      companyTitle: "Yritys ja asiakirjat",
      copyright: "© 2026 Page 2 File. Kaikki oikeudet pidätetään.",
      gptsTitle: "GPTs",
      legalTitle: "Oikeudelliset tiedot",
      links: {
        blog: "Blogi",
        cookiePolicy: "Evästeet",
        extension: "Chrome-laajennus",
        privacy: "Tietosuoja",
        terms: "Käyttöehdot",
        webpageToPdf: "Verkkosivu PDF-tiedostoksi",
        webpageToPowerpoint: "Verkkosivu PowerPoint-tiedostoksi",
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
      navigation: {
        blog: "Blog",
        faq: "Întrebări frecvente",
        features: "Funcționalități",
        howItWorks: "Cum funcționează",
      },
    },
    footer: {
      brandDescription:
        "O pagină web într-un PDF sau PowerPoint clar — cu previzualizare și fără repararea manuală a întreruperilor de pagină.",
      companyTitle: "Companie și documente",
      copyright: "© 2026 Page 2 File. Toate drepturile rezervate.",
      gptsTitle: "GPTs",
      legalTitle: "Informații juridice",
      links: {
        blog: "Blog",
        cookiePolicy: "Cookie-uri",
        extension: "Extensie Chrome",
        privacy: "Confidențialitate",
        terms: "Termeni",
        webpageToPdf: "Pagină web în PDF",
        webpageToPowerpoint: "Pagină web în PowerPoint",
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
      navigation: {
        blog: "Blog",
        faq: "Gyakori kérdések",
        features: "Funkciók",
        howItWorks: "Hogyan működik",
      },
    },
    footer: {
      brandDescription:
        "Weboldal áttekinthető PDF- vagy PowerPoint-fájlban — előnézettel és az oldaltörések kézi javítása nélkül.",
      companyTitle: "Vállalat és dokumentumok",
      copyright: "© 2026 Page 2 File. Minden jog fenntartva.",
      gptsTitle: "GPTs",
      legalTitle: "Jogi információk",
      links: {
        blog: "Blog",
        cookiePolicy: "Sütik",
        extension: "Chrome-bővítmény",
        privacy: "Adatvédelem",
        terms: "Feltételek",
        webpageToPdf: "Weboldal PDF-be",
        webpageToPowerpoint: "Weboldal PowerPointba",
      },
      servicesTitle: "Szolgáltatások",
    },
  },
};

export const getSiteCopy = (locale: Locale): SiteCopy =>
  siteCopy[locale];
