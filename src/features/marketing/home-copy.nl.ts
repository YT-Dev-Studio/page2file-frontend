import type { HomeCopy } from "./home-copy";

export const homeCopyNl: HomeCopy = {
  title: "Exporteer elke webpagina naar PDF/PPTX",
  lead:
    "Plak een link naar een openbare pagina. Page 2 File verdeelt deze zorgvuldig over PDF-pagina's of PowerPoint-dia's, met een voorbeeld vóór het downloaden.",
  form: {
    formatLabel: "Indeling",
    meta: "Geen registratie · Voorbeeld · Tijdelijke bestanden",
    pdfModeLabel: "PDF-modus",
    pdfModes: [
      { label: "Pagina-opnamen", value: "visual" },
      { label: "Bewerkbare PDF", value: "editable" },
    ],
    powerpointModeLabel: "PowerPoint-modus",
    powerpointModes: [
      { label: "Dia-opnamen", value: "visual" },
      { label: "Bewerkbare presentatie", value: "editable" },
    ],
    submitPdf: "PDF maken",
    submitPowerpoint: "PowerPoint maken",
    urlHelper:
      "Alleen openbare HTTPS-pagina's. Gebruik de extensie voor aangemelde browsertabbladen.",
    urlLabel: "Link naar webpagina",
    urlPlaceholder: "https://example.com/artikel",
  },
  converterFlow: {
    backAction: "Terug naar instellingen",
    processingBody:
      "We analyseren de pagina en bereiden de gekozen bestandsindeling voor.",
    processingTitle: "Uw bestand wordt voorbereid",
    readyBody: "Klik om het bestand te downloaden",
    readyTitle: "Uw bestand is gereed",
  },
  closingNote:
    "De service is geschikt voor artikelen, documentatie, landingspagina's en openbare rapporten. Voor privépagina's of AI-chats werkt de extensie met het actieve browsertabblad en maakt zij een tijdelijk voorbeeld.",
  preview: {
    accessibleLabel: "Voorbeeld van een conversieresultaat",
    divider: "HET PAGINA-EINDE HOUDT DE AFBEELDING BIJ ELKAAR",
    imageNote: "De afbeelding blijft volledig",
    pdfMeta: "12 pagina's · gereed",
    powerpointMeta: "12 dia's · gereed",
    sourceTitle: "Een lang artikel met een afbeelding",
    title: "Pagina → nauwkeurig bestand",
  },
  promo: {
    body:
      "De extensie werkt op twee manieren: via URL of met het actieve tabblad. Geëxporteerde paginagegevens worden van de server verwijderd nadat u het voorbeeld sluit.",
    eyebrow: "CHROME-EXTENSIE",
    title:
      "Exporteer het huidige tabblad, ook wanneer aanmelding vereist is.",
  },
  features: {
    eyebrow: "FUNCTIES",
    title: "Flexibele instellingen voor geëxporteerde inhoud",
    body:
      "Exporteer webpagina's in een passende indeling: als pagina-opnamen of met behoud van media, links en structuur.",
    items: [
      {
        title: "Exporteer AI-chats en messengergesprekken",
        body:
          "Exporteer lange gesprekken uit ChatGPT, Claude, Gemini, Grok, DeepSeek en andere diensten naar een overzichtelijke, goed leesbare PDF.",
      },
      {
        title: "De 2 handigste indelingen",
        list: {
          items: [
            "Sla pagina-opnamen op als PDF/PPTX.",
            "Maak bewerkbare PDF/PPTX-bestanden met behoud van media, links en structuur.",
          ],
          style: "unordered",
        },
      },
      {
        title: "Beheer de bestandsinhoud",
        body:
          "Combineer behouden media, links en opmaak in geëxporteerde bestanden. In het voorbeeld kunt u ook onnodige pagina-elementen verwijderen.",
      },
      {
        title: "2 werkwijzen",
        body:
          "Exporteer het huidige tabblad van iedere website of voer de URL van een openbare pagina in.",
      },
      {
        title: "Problemen van andere diensten opgelost",
        body:
          "Ontvang een PDF of PPTX met volledige afbeeldingen en zonder buitensporige lege ruimten tussen inhoud.",
      },
      {
        title: "Veilig en zonder registratie",
        body:
          "U hoeft geen account te maken. Installeer de extensie en sla de geselecteerde pagina op.",
      },
    ],
  },
  howItWorks: {
    action: "Volledige handleiding openen",
    body:
      "De snelste manier is de extensie: deze werkt met het huidige tabblad en vereist geen gekopieerde link.",
    eyebrow: "AAN DE SLAG",
    extensionAction: "Extensie installeren",
    installTime: "Binnen 30 seconden",
    items: [
      {
        title: "Installeer de extensie",
        body:
          "Voeg Page 2 File toe aan Chrome. Een Page 2 File-account is niet nodig.",
      },
      {
        title: "Open de pagina",
        list: {
          items: [
            "Ga naar het gewenste tabblad.",
            "Open Page 2 File.",
            "Klik op Preview.",
          ],
          style: "ordered",
        },
      },
      {
        title: "Controleer en download",
        body:
          "Controleer het resultaat, verwijder zo nodig secties en download het voltooide bestand.",
      },
    ],
    note:
      "Met voorbeelden van een openbare link, een privétabblad en een AI-chat",
    stepLabels: ["Stap 1", "Stap 2", "Stap 3"],
    title: "In drie stappen naar het voltooide bestand",
  },
  blog: {
    action: "Artikel lezen",
    allAction: "Alle artikelen",
    body:
      "Praktische gidsen over nauwkeurigheid, bewerkbaarheid, links, pagina-einden en veilige verwerking van AI-chats.",
    eyebrow: "BLOG",
    items: [
      { slug: "why-print-to-pdf-breaks" },
      { slug: "visual-vs-editable" },
      { slug: "preserve-clickable-links" },
      { slug: "long-webpage-page-breaks" },
    ],
    title: "Gidsen voor het exporteren van verschillende websitetypen",
  },
  faq: {
    body:
      "Duidelijke antwoorden over webpaginavastlegging, uitvoermodi, privétabbladen, tijdelijke voorbeelden en chatexport.",
    eyebrow: "VEELGESTELDE VRAGEN",
    items: [
      {
        title: "Hoe converteer ik een webpagina naar PDF of PowerPoint?",
        body:
          "Plak voor een openbare pagina de HTTPS-URL, kies PDF of PowerPoint en pagina-opnamen of een bewerkbare modus, en controleer de secties voordat u het bestand maakt. Gebruik voor een aangemelde pagina de Page 2 File Chrome-extensie met het actieve tabblad.",
      },
      {
        title: "Kan Page 2 File het paginaontwerp behouden?",
        body:
          "Pagina-opnamen zijn bedoeld om de gerenderde weergave te behouden, waaronder lay-out, kleuren, afbeeldingen en zichtbare grafieken. Browserfuncties zoals animaties, video's en interactieve bediening worden statisch weergegeven.",
      },
      {
        title: "Blijven tekst en links bewerkbaar of aanklikbaar?",
        body:
          "De bewerkbare modus behoudt ondersteunde tekst als documentinhoud en veilige linkdoelen. Complexe widgets, canvasafbeeldingen en niet-ondersteunde elementen kunnen als afbeeldingen worden weergegeven. Pagina-opnamen geven prioriteit aan de weergave en maken niet van iedere pixel een bewerkbaar object.",
      },
      {
        title: "Kan de service lange en dynamische pagina's volledig vastleggen?",
        body:
          "De extensie werkt met het gerenderde actieve tabblad, ook bij lange pagina's nadat de vereiste secties zijn geladen. Open eerst ingeklapte inhoud en blader helemaal omlaag. Verborgen of niet-geladen inhoud kan niet worden geëxporteerd.",
      },
      {
        title: "Kan ik pagina's achter een aanmelding converteren?",
        body:
          "Ja, via de Chrome-extensie nadat u de pagina normaal hebt geopend. De extensie werkt met het actieve tabblad en vraagt u niet om een accountwachtwoord naar het openbare URL-formulier te sturen. Toegangscontroles worden niet omzeild.",
      },
      {
        title: "Kan ik één pagina of een hele website converteren?",
        body: [
          { kind: "text", text: "De webpaginaconverters en " },
          { kind: "link", label: "One Page 2 PDF", route: "page2pdf-gpt" },
          { kind: "text", text: " en " },
          {
            kind: "link",
            label: "One Page 2 PowerPoint",
            route: "one-page2powerpoint-gpt",
          },
          {
            kind: "text",
            text: " verwerken één URL. Gebruik voor meerdere toegankelijke openbare pagina's ",
          },
          { kind: "link", label: "Web 2 PDF", route: "web2pdf-gpt" },
          { kind: "text", text: " of " },
          {
            kind: "link",
            label: "Web 2 PowerPoint",
            route: "web2powerpoint-gpt",
          },
          {
            kind: "text",
            text: ": u ontvangt voor iedere geselecteerde pagina een afzonderlijke PDF of PPTX, geen samengevoegd bestand.",
          },
        ],
      },
      {
        title:
          "Wat is het verschil tussen pagina-opnamen en bewerkbare modi?",
        body:
          "Pagina-opnamen geven prioriteit aan trouw aan de gerenderde pagina. De bewerkbare modus geeft prioriteit aan selecteerbare tekst, ondersteunde afbeeldingen, veilige links en herbruikbare documentstructuren. Controleer complexe grafieken, typografie en lay-outs, omdat beide modi vervangingen kunnen vereisen.",
      },
      {
        title:
          "Wat gebeurt er met voorbeeldgegevens nadat ik het tabblad sluit?",
        body:
          "Voorbeeldgegevens zijn tijdelijk en worden verwijderd nadat het voorbeeldtabblad wordt gesloten. Page 2 File heeft geen database met conversiegeschiedenis en biedt geen accountarchief van eerdere voorbeelden.",
      },
      {
        title: "Heb ik een account nodig?",
        body:
          "Voor de openbare URL-workflow of het extensievoorbeeld is geen Page 2 File-account nodig. Voor een privépagina waartoe u toegang hebt, moet u mogelijk nog wel bij de bronwebsite zijn aangemeld.",
      },
      {
        title: "Kan ik AI- en messengerchats exporteren?",
        body:
          "De extensie kan een gesprek exporteren dat in een Chrome-tabblad is gerenderd, waaronder ondersteunde AI-chats en webmessengers. Laad eerst het vereiste berichtenbereik. Uitsluitend native apps en interfaces buiten de browser, zoals Signal Desktop, vallen buiten het vastleggingsbereik.",
      },
    ],
    title: "Wat u moet weten",
  },
  finalCta: {
    body:
      "Plak hier een openbare link of installeer de extensie voor het huidige tabblad.",
    eyebrow: "WILT U HET MET UW PAGINA PROBEREN?",
    title: "Ontvang een PDF of PowerPoint voordat u een editor opent",
  },
};
