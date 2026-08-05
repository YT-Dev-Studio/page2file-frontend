import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

const gptRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
  { route: "web2pdf-gpt", label: "Web 2 PDF" },
  { route: "html2pdf-gpt", label: "HTML 2 PDF" },
  { route: "one-page2powerpoint-gpt", label: "One Page 2 PowerPoint" },
  { route: "web2powerpoint-gpt", label: "Web 2 PowerPoint" },
];

const chatRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "export-ai-chat-to-pdf", label: "Alle AI-chatexports" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT naar PDF" },
  { route: "export-claude-to-pdf", label: "Claude naar PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini naar PDF" },
  { route: "export-grok-to-pdf", label: "Grok naar PDF" },
];

export const dutchLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "GPT-app · exacte URL's, PDF's of screenshots",
    title: "Webpage to PDF Converter — Web2File",
    displayTitle: "GPT: Webpage 2 PDF",
    description:
      "Webpage to PDF Converter — Web2File converteert exacte openbare webpagina-URL's en verwerkt geüploade webpagina-PDF's of screenshots tot afzonderlijke Visual PDF- of Interactive PDF-bestanden.",
    lead:
      "Geef één exacte openbare URL, een lijst met exacte URL's, een webpagina-PDF of volledige of opeenvolgende screenshots. Kies Visual PDF om de website als schermafbeeldingen op te slaan of Interactive PDF voor selecteerbare tekst en klikbare links.",
    sections: [
      { heading: "1. Geef één of meer URL's op", body: "Stuur één openbare URL, een lijst met exacte openbare URL's, een bestaande webpagina-PDF of volledige of opeenvolgende screenshots. Iedere webpagina blijft een afzonderlijke PDF." },
      { heading: "2. Kies het PDF-type", body: "Kies Visual PDF voor een afbeeldingsresultaat dat de vormgeving vooropstelt, of Interactive PDF wanneer selecteerbare tekst en klikbare links belangrijker zijn. Voor een URL-lijst geldt één modus voor alle bestanden." },
      { heading: "3. Converteer alleen opgegeven pagina's", body: "De GPT-app opent alleen de exacte openbare URL's. De app crawlt geen domeinen of sitemaps, ontdekt geen pagina's, volgt geen interne links en omzeilt geen aanmelding, paywall, CAPTCHA, geografische of andere toegangsbeperking. Gebruik Web2File: Website 2 PDF voor ontdekking op websiteniveau." },
      { heading: "4. Verwerk PDF's en screenshots", body: "Geüploade screenshots kunnen van boven naar beneden tot een Visual PDF worden samengevoegd. Webpagina-PDF's worden verwerkt zonder ontbrekende inhoud te verzinnen; Interactive PDF geeft voorrang aan bestaande tekst, opmaak, afbeeldingen en geverifieerde links." },
      { heading: "5. Krijg passende opslaghulp en controleer het resultaat", body: "Als directe conversie niet beschikbaar of onvolledig is, geeft de GPT-app pagina-, browser- of exportspecifieke stappen. Controleer iedere PDF op ontbrekende of afgesneden inhoud, lege vlakken, leesbaarheid, volgorde, opmaak, links en trouw aan de gekozen modus." },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "GPT Webpage 2 PDF openen",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "Een webpagina als PDF opslaan" },
      { slug: "long-webpage-page-breaks", label: "Pagina-einden op lange webpagina's herstellen" },
    ],
    relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Gebruiksinstructies",
      firstStageDescription: "Geef de GPT-app een werkende URL.",
      firstStageLabel: "URL's verzenden",
    },
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "GPT-app · toegankelijke webpagina's",
    title: "Websitepagina's naar afzonderlijke PDF's converteren met Web 2 PDF",
    description:
      "Web 2 PDF vindt toegankelijke pagina's, converteert geselecteerde pagina's en geeft voor iedere pagina een afzonderlijke PDF terug.",
    lead:
      "Geef Web 2 PDF een openbaar websiteadres. De app kan toegankelijke pagina's vinden, geselecteerde URL's converteren en meerdere downloadlinks leveren, één PDF per pagina.",
    sections: [
      { heading: "1. Geef de website op", body: "Stuur de openbare start-URL. De app vindt toegankelijke pagina's en toont de gekozen websitegrens vóór conversie." },
      { heading: "2. Controleer de paginalijst", body: "Bevestig welke toegankelijke pagina's bij de aanvraag horen. Aangemelde pagina's, geblokkeerde URL's en externe domeinen blijven uitgesloten." },
      { heading: "3. Download afzonderlijke PDF's", body: "Iedere geconverteerde pagina wordt als eigen PDF geleverd. Web 2 PDF belooft geen samengevoegd websitedocument of gestructureerde scrapingdataset." },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Web 2 PDF GPT-app openen",
    articleLinks: [
      { slug: "multi-page-website-to-pdf", label: "Een website met meerdere pagina's naar PDF converteren" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Websitetypen die kunnen worden geëxporteerd" },
    ],
    relatedRoutes: gptRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "GPT-app · geüpload HTML-bestand",
    title: "HTML to PDF Converter — Web2File",
    displayTitle: "GPT: HTML 2 PDF",
    description:
      "HTML to PDF Converter — Web2File zet één geüpload HTML-bestand om in een gecontroleerde PDF met behoud van lay-out, afbeeldingen, tekst en links.",
    lead:
      "Upload precies één HTML-bestand. GPT HTML 2 PDF bekijkt het ontwerp vooraf, laadt bereikbare stijlen, lettertypen en afbeeldingen en maakt één gecontroleerde PDF met selecteerbare tekst en klikbare links waar mogelijk.",
    sections: [
      { heading: "1. Upload precies één HTML-bestand", body: "Voeg één HTML-document toe. De GPT-app accepteert geen URL in plaats daarvan, verwerkt geen meerdere HTML-bestanden, doorzoekt geen websites, volgt geen links naar extra pagina’s en voegt geen documenten samen." },
      { heading: "2. Neem stijlen en bronnen op", body: "Inline en ingebouwde stijlen worden automatisch gebruikt met bereikbare externe stylesheets, lettertypen en afbeeldingen. Verwijst de HTML naar een ontbrekend lokaal CSS-bestand, upload dan het passende bestand voor een nauwkeuriger resultaat of ga zonder verder." },
      { heading: "3. Bekijk en behoud het ontwerp", body: "Voor de conversie wordt de HTML bekeken op een geschikte desktopbreedte. De PDF probeert thema, kleuren, typografie, witruimte, kolommen, kaarten, afbeeldingen en inhoudsvolgorde te behouden zonder interactieve bediening te activeren." },
      { heading: "4. Maak één leesbare PDF", body: "De GPT-app maakt één PDF met selecteerbare tekst en werkende hyperlinks waar mogelijk. Brede lay-outs kunnen liggend of op een passend paginaformaat worden uitgevoerd, zodat belangrijke elementen niet worden samengedrukt, afgesneden of gesplitst." },
      { heading: "5. Controleer het voltooide bestand", body: "Elke PDF wordt vóór levering gecontroleerd op ontbrekende inhoud, afgesneden onderdelen, onverklaarde lege vlakken, leesbaarheid, pagina-einden, plaatsing van afbeeldingen en ondersteunde links." },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "GPT HTML 2 PDF openen",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "HTML veilig naar PDF converteren" },
      { slug: "webpage-capture-vs-web-scraping", label: "Vastlegging tegenover web scraping" },
    ],
    relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Vijf stappen van HTML naar PDF",
      firstStageDescription: "Geef de GPT-app één HTML-bestand.",
      firstStageLabel: "HTML uploaden",
    },
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt",
    eyebrow: "GPT-app · één openbare URL",
    title: "Eén URL naar PPTX converteren met One Page 2 PowerPoint",
    description:
      "One Page 2 PowerPoint is een gerichte GPT-app die één openbare URL converteert en een PPTX-presentatie voor die pagina teruggeeft.",
    lead:
      "Geef de app één openbare HTTPS-URL. One Page 2 PowerPoint verstuurt de pagina voor conversie en levert een downloadbare PPTX-presentatie.",
    sections: [
      { heading: "1. Stuur één openbare URL", body: "Plak het exacte webpagina-adres. De app verwerkt één pagina per aanvraag en doorzoekt de rest van de website niet." },
      { heading: "2. Ontvang één PPTX", body: "De pagina wordt aan een presentatie toegewezen en als PowerPoint-bestand geleverd. Controleer diagrensen en visuele of bewerkbare vervangingen." },
      { heading: "3. Houd privétabbladen in Chrome", body: "Een GPT-app voor openbare URL's kan uw browsersessie niet overnemen. Gebruik de Page 2 File-extensie wanneer de bron achter een aanmelding is geopend." },
    ],
    externalLinkKey: "onePage2PowerpointGpt",
    primaryLabel: "One Page 2 PowerPoint openen",
    articleLinks: [
      { slug: "webpage-to-powerpoint", label: "Een webpagina naar PowerPoint converteren" },
      { slug: "sections-to-slides", label: "Webpaginasecties in dia's omzetten" },
    ],
    relatedRoutes: gptRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "GPT-app · toegankelijke webpagina's",
    title: "Websitepagina's naar PPTX converteren met Web 2 PowerPoint",
    description:
      "Web 2 PowerPoint vindt toegankelijke pagina's, converteert geselecteerde pagina's en geeft voor iedere pagina een afzonderlijke PPTX terug.",
    lead:
      "Geef Web 2 PowerPoint een openbaar websiteadres. De app vindt toegankelijke pagina's, converteert geselecteerde URL's en levert meerdere presentatielinks.",
    sections: [
      { heading: "1. Geef de website op", body: "Stuur de openbare start-URL en houd de websitegrens duidelijk. Externe domeinen en privépagina's worden niet stilzwijgend opgenomen." },
      { heading: "2. Bevestig toegankelijke pagina's", body: "Controleer de gevonden paginalijst vóór conversie. Alleen geselecteerde, bereikbare pagina's worden naar Page 2 File gestuurd." },
      { heading: "3. Download afzonderlijke PPTX-bestanden", body: "Iedere geconverteerde pagina wordt als eigen PowerPoint-presentatie geleverd. De app belooft geen gecombineerde presentatie van de hele website." },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Web 2 PowerPoint openen",
    articleLinks: [
      { slug: "website-to-powerpoint", label: "Een website naar PowerPoint converteren" },
      { slug: "screenshot-vs-editable-powerpoint", label: "Dia-opnamen of bewerkbare dia's" },
    ],
    relatedRoutes: gptRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "AI-chatexport",
    title: "Exporteer een gesprek vanuit het actieve tabblad",
    description:
      "Exporteer ondersteunde ChatGPT-, Claude-, Gemini- en Grok-gesprekken naar PDF met de Page 2 File-extensie, een tijdelijk voorbeeld en zonder conversiegeschiedenis.",
    lead:
      "Kies de oorspronkelijke weergave of een rustig leesdocument. De extensie exporteert de chat vanuit het actieve browsertabblad.",
    sections: [
      { heading: "Ondersteunde chatinterfaces", body: "Page 2 File ondersteunt ChatGPT, Claude, Gemini en Grok, plus een voorzichtige algemene vervanging voor andere browserchats.", points: ["ChatGPT", "Claude", "Gemini", "Grok"] },
      { heading: "Oorspronkelijke weergave", body: "Berichtgroepen, codeblokken, tabellen en zichtbare bronlinks blijven behouden." },
      { heading: "Overzichtelijk document", body: "Ondersteunde tekst wordt in een rustiger document geplaatst, met behoud van auteurschap en linkdoelen." },
      { heading: "Onafhankelijk product", body: "Page 2 File is niet verbonden aan of ondersteund of beheerd door een van de ondersteunde AI-platforms." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Extensie installeren",
    articleLinks: [
      { slug: "export-ai-chats-privately", label: "AI-chats privé exporteren" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Websitetypen die kunnen worden geëxporteerd" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "ChatGPT-export",
    title: "Lange ChatGPT-gesprekken naar PDF exporteren",
    description:
      "Exporteer zichtbare ChatGPT-berichten, codeblokken, tabellen, links en lange gesprekken vanuit het actieve tabblad naar een gecontroleerde PDF.",
    lead:
      "Leg het zichtbare gesprek vast, controleer pagina-einden en download het bestand zonder Page 2 File-account.",
    sections: [
      { heading: "Wat behouden blijft", body: "Berichten, sprekersvolgorde, codeblokken, tabellen en zichtbare links worden in het voorbeeld weergegeven." },
      { heading: "Twee leesstijlen", body: "Behoud het oorspronkelijke visuele ritme of kies een rustiger document voor lezen en afdrukken." },
      { heading: "Platformspecifieke grenzen", body: "Ingeklapte takken, niet-geladen berichten en inhoud buiten de DOM moeten mogelijk vóór vastlegging worden geopend of geladen." },
      { heading: "Geen officiële relatie", body: "Page 2 File is een onafhankelijke exporttool en wordt niet ondersteund of beheerd door OpenAI of ChatGPT." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installeren voor ChatGPT",
    articleLinks: [
      { slug: "export-chatgpt-conversation-to-pdf", label: "Een ChatGPT-gesprek naar PDF exporteren" },
      { slug: "export-ai-chats-privately", label: "Voorbeeldgegevens van AI-chats beschermen" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Claude-export",
    title: "Claude-gesprekken en zichtbare artefacten opslaan",
    description:
      "Exporteer zichtbare Claude-gesprekken, Markdown, code, citaten en beschikbare artefactcontext vanuit het actieve tabblad naar een gecontroleerde PDF.",
    lead:
      "Na een expliciete klik leest de extensie het actieve gesprek en maakt zij een tijdelijk voorbeeld voor lange antwoorden.",
    sections: [
      { heading: "Lange antwoorden behouden structuur", body: "Koppen, lijsten, citaten en code blijven in hun leesvolgorde." },
      { heading: "Artefactcontext", body: "Zichtbare artefacttitels en beschikbare documentinhoud kunnen worden weergegeven zonder verborgen toegang te claimen." },
      { heading: "Geen officiële relatie", body: "Page 2 File is een onafhankelijke exporttool en wordt niet ondersteund door Anthropic." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installeren voor Claude",
    articleLinks: [
      { slug: "export-claude-chat-to-pdf", label: "Een Claude-chat naar PDF exporteren" },
      { slug: "export-ai-chats-privately", label: "Voorbeeldgegevens van AI-chats beschermen" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Gemini-export",
    title: "Een Gemini-gesprek in een leesbare PDF omzetten",
    description:
      "Exporteer zichtbare Gemini-berichten, bronkaarten, code en citaten vanuit het actieve tabblad naar een gecontroleerde PDF met tijdelijk voorbeeld.",
    lead:
      "Controleer de weergave van bronkaarten en zichtbare afbeeldingen voordat u een overzichtelijk of visueel getrouw document maakt.",
    sections: [
      { heading: "Bronnen blijven bruikbaar", body: "Zichtbare bronvermeldingen en links blijven aanklikbaar wanneer hun doelen veilig zijn." },
      { heading: "Afbeeldingen volgen de DOM", body: "Alleen media die voor de actieve pagina beschikbaar zijn, kunnen in het tijdelijke voorbeeld verschijnen." },
      { heading: "Geen officiële relatie", body: "Page 2 File is onafhankelijk en geen product van Google of Gemini." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installeren voor Gemini",
    articleLinks: [
      { slug: "export-gemini-chat-to-pdf", label: "Een Gemini-chat naar PDF exporteren" },
      { slug: "export-ai-chats-privately", label: "Voorbeeldgegevens van AI-chats beschermen" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Grok-export",
    title: "Grok-gesprekken met zichtbare bronnen exporteren",
    description:
      "Exporteer zichtbare Grok-gesprekken, X-links, geciteerde berichten en bronnen vanuit het actieve tabblad naar een gecontroleerde PDF.",
    lead:
      "Leg het actieve gesprek vast, behoud zichtbare broncontext en kies een visueel of overzichtelijk documentvoorbeeld.",
    sections: [
      { heading: "Leesvolgorde die het gesprek respecteert", body: "Berichten en context van geciteerde posts blijven gegroepeerd in plaats van één ongelabelde tekststroom te worden." },
      { heading: "Zichtbare X-links", body: "Post-URL's en bronnen blijven aanklikbaar wanneer ze de veiligheidscontrole doorstaan." },
      { heading: "Geen officiële relatie", body: "Page 2 File is een onafhankelijk product en wordt niet ondersteund door xAI of X." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installeren voor Grok",
    articleLinks: [
      { slug: "export-other-ai-chats-to-pdf", label: "Andere AI-chats naar PDF exporteren" },
      { slug: "export-ai-chats-privately", label: "Voorbeeldgegevens van AI-chats beschermen" },
    ],
    relatedRoutes: chatRoutes,
  },
};
