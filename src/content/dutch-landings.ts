import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const dutchLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "GPT-app · exacte URL's, PDF's of screenshots",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File verwerkt exacte openbare URL's, webpagina-PDF's en screenshots als Visual PDF of Interactive PDF.",
        lead: "Geef één exacte openbare URL, een lijst met exacte URL's, een webpagina-PDF of volledige of opeenvolgende screenshots. Kies Visual PDF om de website als schermafbeeldingen op te slaan of Interactive PDF voor selecteerbare tekst en klikbare links.",
        sections: [
            { heading: "1. Geef één of meer URL's op", body: "Stuur één openbare URL, een lijst met exacte openbare URL's, een bestaande webpagina-PDF of volledige of opeenvolgende screenshots. Iedere webpagina blijft een afzonderlijke PDF." },
            { heading: "2. Kies het PDF-type", body: "Kies Visual PDF voor een afbeeldingsresultaat dat de vormgeving vooropstelt, of Interactive PDF wanneer selecteerbare tekst en klikbare links belangrijker zijn. Voor een URL-lijst geldt één modus voor alle bestanden." },
            { heading: "3. Converteer alleen opgegeven pagina's", body: "De GPT-app opent alleen de exacte openbare URL's. De app crawlt geen domeinen of sitemaps, ontdekt geen pagina's, volgt geen interne links en omzeilt geen aanmelding, paywall, CAPTCHA, geografische of andere toegangsbeperking." },
            { heading: "4. Verwerk PDF's en screenshots", body: "Geüploade screenshots kunnen van boven naar beneden tot een Visual PDF worden samengevoegd. Webpagina-PDF's worden verwerkt zonder ontbrekende inhoud te verzinnen; Interactive PDF geeft voorrang aan bestaande tekst, opmaak, afbeeldingen en geverifieerde links." },
            { heading: "5. Krijg passende opslaghulp en controleer het resultaat", body: "Als directe conversie niet beschikbaar of onvolledig is, geeft de GPT-app pagina-, browser- of exportspecifieke stappen. Controleer iedere PDF op ontbrekende of afgesneden inhoud, lege vlakken, leesbaarheid, volgorde, opmaak, links en trouw aan de gekozen modus." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "GPT Webpage 2 PDF openen",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Gebruiksinstructies",
            firstStageDescription: "Geef de GPT-app een werkende URL.",
            firstStageLabel: "URL's verzenden",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "GPT-app · geüpload HTML-bestand",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File zet één geüpload HTML-bestand om in een gecontroleerde PDF met behoud van lay-out, afbeeldingen, tekst en links.",
        lead: "Upload precies één HTML-bestand. GPT HTML 2 PDF bekijkt het ontwerp vooraf, laadt bereikbare stijlen, lettertypen en afbeeldingen en maakt één gecontroleerde PDF met selecteerbare tekst en klikbare links waar mogelijk.",
        sections: [
            { heading: "1. Upload precies één HTML-bestand", body: "Voeg één HTML-document toe. De GPT-app accepteert geen URL in plaats daarvan, verwerkt geen meerdere HTML-bestanden, doorzoekt geen websites, volgt geen links naar extra pagina’s en voegt geen documenten samen." },
            { heading: "2. Neem stijlen en bronnen op", body: "Inline en ingebouwde stijlen worden automatisch gebruikt met bereikbare externe stylesheets, lettertypen en afbeeldingen. Verwijst de HTML naar een ontbrekend lokaal CSS-bestand, upload dan het passende bestand voor een nauwkeuriger resultaat of ga zonder verder." },
            { heading: "3. Bekijk en behoud het ontwerp", body: "Voor de conversie wordt de HTML bekeken op een geschikte desktopbreedte. De PDF probeert thema, kleuren, typografie, witruimte, kolommen, kaarten, afbeeldingen en inhoudsvolgorde te behouden zonder interactieve bediening te activeren." },
            { heading: "4. Maak één leesbare PDF", body: "De GPT-app maakt één PDF met selecteerbare tekst en werkende hyperlinks waar mogelijk. Brede lay-outs kunnen liggend of op een passend paginaformaat worden uitgevoerd, zodat belangrijke elementen niet worden samengedrukt, afgesneden of gesplitst." },
            { heading: "5. Controleer het voltooide bestand", body: "Elke PDF wordt vóór levering gecontroleerd op ontbrekende inhoud, afgesneden onderdelen, onverklaarde lege vlakken, leesbaarheid, pagina-einden, plaatsing van afbeeldingen en ondersteunde links." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "GPT HTML 2 PDF openen",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Vijf stappen van HTML naar PDF",
            firstStageDescription: "Geef de GPT-app één HTML-bestand.",
            firstStageLabel: "HTML uploaden",
        },
    }
};
