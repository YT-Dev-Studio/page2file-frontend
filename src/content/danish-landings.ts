import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const danishLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "GPT-app · nøjagtige URL'er, PDF'er eller skærmbilleder",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File behandler nøjagtige offentlige adresser, webside-PDF'er og skærmbilleder som Visual PDF eller Interactive PDF.",
        lead: "Angiv en nøjagtig offentlig URL, en liste med nøjagtige URL'er, en webside-PDF eller helsides eller sammenhængende skærmbilleder. Vælg Visual PDF for at gemme webstedet som skærmbilleder eller Interactive PDF for markerbar tekst og klikbare links.",
        sections: [
            { heading: "1. Angiv en eller flere URL'er", body: "Send en offentlig URL, en liste med nøjagtige offentlige URL'er, en eksisterende webside-PDF eller helsides eller sammenhængende skærmbilleder. Hver webside forbliver en separat PDF." },
            { heading: "2. Vælg PDF-type", body: "Vælg Visual PDF for et billedbaseret resultat, der prioriterer sidens udseende, eller Interactive PDF, når markerbar tekst og klikbare links er vigtigst. Én tilstand gælder for hele URL-listen." },
            { heading: "3. Konvertér kun angivne sider", body: "Appen åbner kun de nøjagtige offentlige URL'er. Den gennemgår ikke domæner eller sitemaps, finder ikke sider, følger ikke interne links og omgår ikke login, betalingsmure, CAPTCHA, geografiske eller andre adgangsbegrænsninger." },
            { heading: "4. Behandl PDF'er og skærmbilleder", body: "Uploadede skærmbilleder kan samles oppefra og ned i en Visual PDF. Webside-PDF'er behandles uden at opfinde manglende indhold; Interactive PDF prioriterer eksisterende tekst, layout, billeder og verificerede links." },
            { heading: "5. Få tilpasset hjælp og kontrollér resultatet", body: "Hvis direkte konvertering er utilgængelig eller ufuldstændig, giver appen trin til siden, browseren eller den indbyggede eksport. Kontrollér manglende eller beskåret indhold, tomme områder, læsbarhed, rækkefølge, layout, links og overensstemmelse med tilstanden." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Åbn GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Brugsanvisning",
            firstStageDescription: "Giv GPT-appen en fungerende URL.",
            firstStageLabel: "Send URL'er",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "GPT-app · uploadet HTML-fil",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File omdanner én uploadet HTML-fil til en kontrolleret PDF og bevarer layout, billeder, tekst og links.",
        lead: "Upload præcis én HTML-fil. GPT HTML 2 PDF forhåndsviser designet, indlæser tilgængelige typografier, skrifttyper og billeder og opretter en kontrolleret PDF med markerbar tekst og klikbare links, hvor det er muligt.",
        sections: [
            { heading: "1. Upload præcis én HTML-fil", body: "Vedhæft ét HTML-dokument. GPT-appen accepterer ikke en URL i stedet, behandler ikke flere HTML-filer, gennemgår ikke websteder, følger ikke links til ekstra sider og fletter ikke dokumenter." },
            { heading: "2. Medtag typografier og ressourcer", body: "Inline og indlejrede typografier bruges automatisk sammen med tilgængelige eksterne stylesheets, skrifttyper og billeder. Hvis HTML-filen henviser til en manglende lokal CSS-fil, kan du uploade den matchende fil for et mere præcist resultat eller fortsætte uden den." },
            { heading: "3. Forhåndsvis og bevar designet", body: "HTML-filen forhåndsvises i en passende skrivebordsbredde før konvertering. PDF-filen forsøger at bevare tema, farver, typografi, afstande, kolonner, kort, billeder og indholdsrækkefølge uden at aktivere interaktive kontroller." },
            { heading: "4. Opret én læsbar PDF", body: "GPT-appen opretter én PDF med markerbar tekst og fungerende hyperlinks, hvor det er muligt. Brede layouts kan bruge liggende format eller en passende sidestørrelse, så vigtige elementer ikke klemmes, beskæres eller opdeles." },
            { heading: "5. Kontrollér den færdige fil", body: "Hver PDF kontrolleres før levering for manglende indhold, beskårne komponenter, uforklarlige tomme områder, læsbarhed, sideskift, billedplacering og understøttede links." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Åbn GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Fem trin fra HTML til PDF",
            firstStageDescription: "Giv GPT-appen én HTML-fil.",
            firstStageLabel: "Upload HTML",
        },
    }
};
