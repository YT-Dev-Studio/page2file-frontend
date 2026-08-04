import type { Locale } from "./locales";

export type Messages = {
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
  de: {
    ...en,
    navigation: {
      convert: "Konvertieren",
      extension: "Erweiterung",
      guides: "Anleitungen",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Als PDF",
      powerpoint: "Als PowerPoint",
      preview: "Vorschau erstellen",
    },
    converter: {
      ...en.converter,
      urlLabel: "Öffentliche Webseiten-URL",
      urlHint: "Nur HTTPS. Private Seiten funktionieren über die Erweiterung.",
      visual: "Seitenaufnahmen",
      editable: "Bearbeitbar & klickbar",
      warnings: "Warnungen",
    },
    footer: {
      privacy: "Datenschutz",
      terms: "Bedingungen",
    },
  },
  fr: {
    ...en,
    navigation: {
      convert: "Convertir",
      extension: "Extension",
      guides: "Guides",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Convertir en PDF",
      powerpoint: "Convertir en PowerPoint",
      preview: "Créer l’aperçu",
    },
    converter: {
      ...en.converter,
      urlLabel: "URL publique",
      urlHint: "HTTPS uniquement. Utilisez l’extension pour les pages privées.",
      visual: "Captures de page",
      editable: "Modifiable et cliquable",
      warnings: "Avertissements",
    },
    footer: {
      privacy: "Confidentialité",
      terms: "Conditions",
    },
  },
  es: {
    ...en,
    navigation: {
      convert: "Convertir",
      extension: "Extensión",
      guides: "Guías",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Convertir a PDF",
      powerpoint: "Convertir a PowerPoint",
      preview: "Generar vista previa",
    },
    converter: {
      ...en.converter,
      urlLabel: "URL pública",
      urlHint: "Solo HTTPS. Usa la extensión para páginas privadas.",
      visual: "Capturas de página",
      editable: "Editable y con enlaces",
      warnings: "Advertencias",
    },
    footer: { privacy: "Privacidad", terms: "Términos" },
  },
  nl: {
    ...en,
    navigation: {
      convert: "Converteren",
      extension: "Extensie",
      guides: "Handleidingen",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Naar PDF",
      powerpoint: "Naar PowerPoint",
      preview: "Voorbeeld maken",
    },
    converter: {
      ...en.converter,
      urlLabel: "Openbare webpagina-URL",
      urlHint: "Alleen HTTPS. Gebruik de extensie voor privépagina’s.",
      visual: "Pagina-opnamen",
      editable: "Bewerkbaar en klikbaar",
      warnings: "Waarschuwingen",
    },
    footer: {
      privacy: "Privacy",
      terms: "Voorwaarden",
    },
  },
  pt: {
    ...en,
    navigation: {
      convert: "Converter",
      extension: "Extensão",
      guides: "Guias",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Converter em PDF",
      powerpoint: "Converter em PowerPoint",
      preview: "Gerar pré-visualização",
    },
    converter: {
      ...en.converter,
      urlLabel: "URL pública",
      urlHint: "Apenas HTTPS. Use a extensão para páginas privadas.",
      visual: "Capturas de página",
      editable: "Editável e clicável",
      warnings: "Avisos",
    },
    footer: { privacy: "Privacidade", terms: "Termos" },
  },
  it: {
    ...en,
    navigation: {
      convert: "Converti",
      extension: "Estensione",
      guides: "Guide",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Converti in PDF",
      powerpoint: "Converti in PowerPoint",
      preview: "Genera anteprima",
    },
    converter: {
      ...en.converter,
      urlLabel: "URL pubblico",
      urlHint: "Solo HTTPS. Usa l’estensione per pagine private.",
      visual: "Acquisizioni della pagina",
      editable: "Modificabile e cliccabile",
      warnings: "Avvisi",
    },
    footer: { privacy: "Privacy", terms: "Termini" },
  },
  pl: {
    ...en,
    navigation: {
      convert: "Konwertuj",
      extension: "Rozszerzenie",
      guides: "Poradniki",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Konwertuj do PDF",
      powerpoint: "Konwertuj do PowerPoint",
      preview: "Utwórz podgląd",
    },
    converter: {
      ...en.converter,
      urlLabel: "Publiczny adres URL",
      urlHint: "Tylko HTTPS. Dla stron prywatnych użyj rozszerzenia.",
      visual: "Zrzuty strony",
      editable: "Edytowalny i klikalny",
      warnings: "Ostrzeżenia",
    },
    footer: {
      privacy: "Prywatność",
      terms: "Warunki",
    },
  },
  sv: {
    ...en,
    navigation: {
      convert: "Konvertera",
      extension: "Tillägg",
      guides: "Guider",
      blog: "Blogg",
    },
    actions: {
      ...en.actions,
      pdf: "Konvertera till PDF",
      powerpoint: "Konvertera till PowerPoint",
      preview: "Skapa förhandsvisning",
    },
    converter: {
      ...en.converter,
      urlLabel: "Offentlig webbadress",
      urlHint: "Endast HTTPS. Använd tillägget för privata sidor.",
      visual: "Sidbilder",
      editable: "Redigerbar och klickbar",
      warnings: "Varningar",
    },
    footer: { privacy: "Integritet", terms: "Villkor" },
  },
  no: {
    ...en,
    navigation: {
      convert: "Konverter",
      extension: "Utvidelse",
      guides: "Veiledninger",
      blog: "Blogg",
    },
    actions: {
      ...en.actions,
      pdf: "Konverter til PDF",
      powerpoint: "Konverter til PowerPoint",
      preview: "Lag forhåndsvisning",
    },
    converter: {
      ...en.converter,
      urlLabel: "Offentlig nettadresse",
      urlHint: "Kun HTTPS. Bruk utvidelsen for private sider.",
      visual: "Sidebilder",
      editable: "Redigerbar og klikkbar",
      warnings: "Advarsler",
    },
    footer: { privacy: "Personvern", terms: "Vilkår" },
  },
  da: {
    ...en,
    navigation: {
      convert: "Konvertér",
      extension: "Udvidelse",
      guides: "Vejledninger",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Konvertér til PDF",
      powerpoint: "Konvertér til PowerPoint",
      preview: "Opret forhåndsvisning",
    },
    converter: {
      ...en.converter,
      urlLabel: "Offentlig webadresse",
      urlHint: "Kun HTTPS. Brug udvidelsen til private sider.",
      visual: "Sidebilleder",
      editable: "Redigerbar og klikbar",
      warnings: "Advarsler",
    },
    footer: { privacy: "Privatliv", terms: "Vilkår" },
  },
  fi: {
    ...en,
    navigation: {
      convert: "Muunna",
      extension: "Laajennus",
      guides: "Ohjeet",
      blog: "Blogi",
    },
    actions: {
      ...en.actions,
      pdf: "Muunna PDF:ksi",
      powerpoint: "Muunna PowerPointiksi",
      preview: "Luo esikatselu",
    },
    converter: {
      ...en.converter,
      urlLabel: "Julkinen verkko-osoite",
      urlHint: "Vain HTTPS. Käytä laajennusta yksityisille sivuille.",
      visual: "Sivukaappaukset",
      editable: "Muokattava ja klikattava",
      warnings: "Varoitukset",
    },
    footer: { privacy: "Tietosuoja", terms: "Ehdot" },
  },
  cs: {
    ...en,
    navigation: {
      convert: "Převést",
      extension: "Rozšíření",
      guides: "Návody",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Převést do PDF",
      powerpoint: "Převést do PowerPointu",
      preview: "Vytvořit náhled",
    },
    converter: {
      ...en.converter,
      urlLabel: "Veřejná URL",
      urlHint: "Pouze HTTPS. Pro soukromé stránky použijte rozšíření.",
      visual: "Snímky stránky",
      editable: "Upravitelný a klikatelný",
      warnings: "Upozornění",
    },
    footer: { privacy: "Soukromí", terms: "Podmínky" },
  },
  ro: {
    ...en,
    navigation: {
      convert: "Convertește",
      extension: "Extensie",
      guides: "Ghiduri",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Convertește în PDF",
      powerpoint: "Convertește în PowerPoint",
      preview: "Generează previzualizarea",
    },
    converter: {
      ...en.converter,
      urlLabel: "URL public",
      urlHint: "Doar HTTPS. Folosește extensia pentru pagini private.",
      visual: "Capturi de pagină",
      editable: "Editabil și accesibil",
      warnings: "Avertismente",
    },
    footer: {
      privacy: "Confidențialitate",
      terms: "Termeni",
    },
  },
  hu: {
    ...en,
    navigation: {
      convert: "Konvertálás",
      extension: "Bővítmény",
      guides: "Útmutatók",
      blog: "Blog",
    },
    actions: {
      ...en.actions,
      pdf: "Konvertálás PDF-be",
      powerpoint: "Konvertálás PowerPointba",
      preview: "Előnézet készítése",
    },
    converter: {
      ...en.converter,
      urlLabel: "Nyilvános webcím",
      urlHint: "Csak HTTPS. Privát oldalakhoz használd a bővítményt.",
      visual: "Oldal-pillanatképek",
      editable: "Szerkeszthető és kattintható",
      warnings: "Figyelmeztetések",
    },
    footer: {
      privacy: "Adatvédelem",
      terms: "Feltételek",
    },
  },
};

export const getMessages = (locale: Locale): Messages => messages[locale];
