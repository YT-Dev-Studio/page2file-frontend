import type { Locale } from "./locales";

export type Messages = {
  draftTranslation: string;
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
    preferences: string;
    accept: string;
    reject: string;
  };
  converter: {
    urlLabel: string;
    urlHint: string;
    visual: string;
    editable: string;
  };
  footer: {
    privacy: string;
    terms: string;
    security: string;
  };
};

const en: Messages = {
  draftTranslation: "Draft translation — some long-form sections remain in English.",
  navigation: { convert: "Convert", extension: "Extension", guides: "Guides", blog: "Blog" },
  actions: {
    pdf: "Convert to PDF",
    powerpoint: "Convert to PowerPoint",
    preview: "Generate preview",
    download: "Download sample",
    install: "Install extension",
    comingSoon: "Coming soon",
    preferences: "Privacy preferences",
    accept: "Accept analytics",
    reject: "Use essential only",
  },
  converter: {
    urlLabel: "Public webpage URL",
    urlHint: "HTTPS only. Private and signed-in pages work through the extension.",
    visual: "Visual",
    editable: "Editable & clickable",
  },
  footer: { privacy: "Privacy", terms: "Terms", security: "Security" },
};

const messages: Record<Locale, Messages> = {
  en,
  de: {
    ...en,
    draftTranslation: "Übersetzungsentwurf — längere Abschnitte sind teilweise auf Englisch.",
    navigation: { convert: "Konvertieren", extension: "Erweiterung", guides: "Anleitungen", blog: "Blog" },
    actions: { ...en.actions, pdf: "Als PDF", powerpoint: "Als PowerPoint", preview: "Vorschau erstellen", preferences: "Datenschutzeinstellungen", accept: "Analyse akzeptieren", reject: "Nur notwendige Daten" },
    converter: { ...en.converter, urlLabel: "Öffentliche Webseiten-URL", urlHint: "Nur HTTPS. Private Seiten funktionieren über die Erweiterung.", visual: "Visuell", editable: "Bearbeitbar & klickbar" },
    footer: { privacy: "Datenschutz", terms: "Bedingungen", security: "Sicherheit" },
  },
  fr: {
    ...en,
    draftTranslation: "Traduction provisoire — certaines sections longues restent en anglais.",
    navigation: { convert: "Convertir", extension: "Extension", guides: "Guides", blog: "Blog" },
    actions: { ...en.actions, pdf: "Convertir en PDF", powerpoint: "Convertir en PowerPoint", preview: "Créer l’aperçu", preferences: "Préférences de confidentialité", accept: "Accepter l’analyse", reject: "Essentiel uniquement" },
    converter: { ...en.converter, urlLabel: "URL publique", urlHint: "HTTPS uniquement. Utilisez l’extension pour les pages privées.", visual: "Visuel", editable: "Modifiable et cliquable" },
    footer: { privacy: "Confidentialité", terms: "Conditions", security: "Sécurité" },
  },
  es: {
    ...en,
    draftTranslation: "Traducción provisional: algunas secciones largas siguen en inglés.",
    navigation: { convert: "Convertir", extension: "Extensión", guides: "Guías", blog: "Blog" },
    actions: { ...en.actions, pdf: "Convertir a PDF", powerpoint: "Convertir a PowerPoint", preview: "Generar vista previa", preferences: "Preferencias de privacidad", accept: "Aceptar analítica", reject: "Solo esencial" },
    converter: { ...en.converter, urlLabel: "URL pública", urlHint: "Solo HTTPS. Usa la extensión para páginas privadas.", visual: "Visual", editable: "Editable y con enlaces" },
    footer: { privacy: "Privacidad", terms: "Términos", security: "Seguridad" },
  },
  nl: {
    ...en,
    draftTranslation: "Conceptvertaling — sommige lange delen blijven in het Engels.",
    navigation: { convert: "Converteren", extension: "Extensie", guides: "Handleidingen", blog: "Blog" },
    actions: { ...en.actions, pdf: "Naar PDF", powerpoint: "Naar PowerPoint", preview: "Voorbeeld maken", preferences: "Privacyvoorkeuren", accept: "Analyse toestaan", reject: "Alleen noodzakelijk" },
    converter: { ...en.converter, urlLabel: "Openbare webpagina-URL", urlHint: "Alleen HTTPS. Gebruik de extensie voor privépagina’s.", visual: "Visueel", editable: "Bewerkbaar en klikbaar" },
    footer: { privacy: "Privacy", terms: "Voorwaarden", security: "Beveiliging" },
  },
  pt: {
    ...en,
    draftTranslation: "Tradução provisória — algumas secções longas permanecem em inglês.",
    navigation: { convert: "Converter", extension: "Extensão", guides: "Guias", blog: "Blog" },
    actions: { ...en.actions, pdf: "Converter em PDF", powerpoint: "Converter em PowerPoint", preview: "Gerar pré-visualização", preferences: "Preferências de privacidade", accept: "Aceitar análise", reject: "Apenas essencial" },
    converter: { ...en.converter, urlLabel: "URL pública", urlHint: "Apenas HTTPS. Use a extensão para páginas privadas.", visual: "Visual", editable: "Editável e clicável" },
    footer: { privacy: "Privacidade", terms: "Termos", security: "Segurança" },
  },
  it: {
    ...en,
    draftTranslation: "Traduzione provvisoria — alcune sezioni lunghe restano in inglese.",
    navigation: { convert: "Converti", extension: "Estensione", guides: "Guide", blog: "Blog" },
    actions: { ...en.actions, pdf: "Converti in PDF", powerpoint: "Converti in PowerPoint", preview: "Genera anteprima", preferences: "Preferenze privacy", accept: "Accetta analisi", reject: "Solo essenziali" },
    converter: { ...en.converter, urlLabel: "URL pubblico", urlHint: "Solo HTTPS. Usa l’estensione per pagine private.", visual: "Visuale", editable: "Modificabile e cliccabile" },
    footer: { privacy: "Privacy", terms: "Termini", security: "Sicurezza" },
  },
  pl: {
    ...en,
    draftTranslation: "Wersja robocza — część dłuższych sekcji pozostaje po angielsku.",
    navigation: { convert: "Konwertuj", extension: "Rozszerzenie", guides: "Poradniki", blog: "Blog" },
    actions: { ...en.actions, pdf: "Konwertuj do PDF", powerpoint: "Konwertuj do PowerPoint", preview: "Utwórz podgląd", preferences: "Ustawienia prywatności", accept: "Zgódź się na analitykę", reject: "Tylko niezbędne" },
    converter: { ...en.converter, urlLabel: "Publiczny adres URL", urlHint: "Tylko HTTPS. Dla stron prywatnych użyj rozszerzenia.", visual: "Wizualny", editable: "Edytowalny i klikalny" },
    footer: { privacy: "Prywatność", terms: "Warunki", security: "Bezpieczeństwo" },
  },
  sv: {
    ...en,
    draftTranslation: "Utkast till översättning — vissa längre avsnitt är på engelska.",
    navigation: { convert: "Konvertera", extension: "Tillägg", guides: "Guider", blog: "Blogg" },
    actions: { ...en.actions, pdf: "Konvertera till PDF", powerpoint: "Konvertera till PowerPoint", preview: "Skapa förhandsvisning", preferences: "Sekretessinställningar", accept: "Godkänn analys", reject: "Endast nödvändigt" },
    converter: { ...en.converter, urlLabel: "Offentlig webbadress", urlHint: "Endast HTTPS. Använd tillägget för privata sidor.", visual: "Visuell", editable: "Redigerbar och klickbar" },
    footer: { privacy: "Integritet", terms: "Villkor", security: "Säkerhet" },
  },
  no: {
    ...en,
    draftTranslation: "Utkast til oversettelse — noen lange avsnitt er fortsatt på engelsk.",
    navigation: { convert: "Konverter", extension: "Utvidelse", guides: "Veiledninger", blog: "Blogg" },
    actions: { ...en.actions, pdf: "Konverter til PDF", powerpoint: "Konverter til PowerPoint", preview: "Lag forhåndsvisning", preferences: "Personvernvalg", accept: "Godta analyse", reject: "Bare nødvendig" },
    converter: { ...en.converter, urlLabel: "Offentlig nettadresse", urlHint: "Kun HTTPS. Bruk utvidelsen for private sider.", visual: "Visuell", editable: "Redigerbar og klikkbar" },
    footer: { privacy: "Personvern", terms: "Vilkår", security: "Sikkerhet" },
  },
  da: {
    ...en,
    draftTranslation: "Oversættelsesudkast — enkelte lange afsnit er stadig på engelsk.",
    navigation: { convert: "Konvertér", extension: "Udvidelse", guides: "Vejledninger", blog: "Blog" },
    actions: { ...en.actions, pdf: "Konvertér til PDF", powerpoint: "Konvertér til PowerPoint", preview: "Opret forhåndsvisning", preferences: "Privatlivsvalg", accept: "Accepter analyse", reject: "Kun nødvendige" },
    converter: { ...en.converter, urlLabel: "Offentlig webadresse", urlHint: "Kun HTTPS. Brug udvidelsen til private sider.", visual: "Visuel", editable: "Redigerbar og klikbar" },
    footer: { privacy: "Privatliv", terms: "Vilkår", security: "Sikkerhed" },
  },
  fi: {
    ...en,
    draftTranslation: "Käännösluonnos — osa pitkistä osioista on vielä englanniksi.",
    navigation: { convert: "Muunna", extension: "Laajennus", guides: "Ohjeet", blog: "Blogi" },
    actions: { ...en.actions, pdf: "Muunna PDF:ksi", powerpoint: "Muunna PowerPointiksi", preview: "Luo esikatselu", preferences: "Tietosuoja-asetukset", accept: "Hyväksy analytiikka", reject: "Vain välttämättömät" },
    converter: { ...en.converter, urlLabel: "Julkinen verkko-osoite", urlHint: "Vain HTTPS. Käytä laajennusta yksityisille sivuille.", visual: "Visuaalinen", editable: "Muokattava ja klikattava" },
    footer: { privacy: "Tietosuoja", terms: "Ehdot", security: "Turvallisuus" },
  },
  cs: {
    ...en,
    draftTranslation: "Pracovní překlad — některé delší části zůstávají anglicky.",
    navigation: { convert: "Převést", extension: "Rozšíření", guides: "Návody", blog: "Blog" },
    actions: { ...en.actions, pdf: "Převést do PDF", powerpoint: "Převést do PowerPointu", preview: "Vytvořit náhled", preferences: "Nastavení soukromí", accept: "Povolit analytiku", reject: "Jen nezbytné" },
    converter: { ...en.converter, urlLabel: "Veřejná URL", urlHint: "Pouze HTTPS. Pro soukromé stránky použijte rozšíření.", visual: "Vizuální", editable: "Upravitelný a klikatelný" },
    footer: { privacy: "Soukromí", terms: "Podmínky", security: "Zabezpečení" },
  },
  ro: {
    ...en,
    draftTranslation: "Traducere provizorie — unele secțiuni lungi rămân în engleză.",
    navigation: { convert: "Convertește", extension: "Extensie", guides: "Ghiduri", blog: "Blog" },
    actions: { ...en.actions, pdf: "Convertește în PDF", powerpoint: "Convertește în PowerPoint", preview: "Generează previzualizarea", preferences: "Preferințe de confidențialitate", accept: "Acceptă analiza", reject: "Doar esențiale" },
    converter: { ...en.converter, urlLabel: "URL public", urlHint: "Doar HTTPS. Folosește extensia pentru pagini private.", visual: "Vizual", editable: "Editabil și accesibil" },
    footer: { privacy: "Confidențialitate", terms: "Termeni", security: "Securitate" },
  },
  hu: {
    ...en,
    draftTranslation: "Fordítási vázlat — néhány hosszabb rész angol maradt.",
    navigation: { convert: "Konvertálás", extension: "Bővítmény", guides: "Útmutatók", blog: "Blog" },
    actions: { ...en.actions, pdf: "Konvertálás PDF-be", powerpoint: "Konvertálás PowerPointba", preview: "Előnézet készítése", preferences: "Adatvédelmi beállítások", accept: "Analitika engedélyezése", reject: "Csak szükséges" },
    converter: { ...en.converter, urlLabel: "Nyilvános webcím", urlHint: "Csak HTTPS. Privát oldalakhoz használd a bővítményt.", visual: "Vizuális", editable: "Szerkeszthető és kattintható" },
    footer: { privacy: "Adatvédelem", terms: "Feltételek", security: "Biztonság" },
  },
};

export const getMessages = (locale: Locale): Messages => messages[locale];
