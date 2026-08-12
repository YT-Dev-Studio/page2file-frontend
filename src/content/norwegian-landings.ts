import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const norwegianLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "GPT-app · nøyaktige URL-er, PDF-er eller skjermbilder",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File behandler nøyaktige offentlige adresser, nettside-PDF-er og skjermbilder som Visual PDF eller Interactive PDF.",
        lead: "Oppgi en nøyaktig offentlig URL, en liste med nøyaktige URL-er, en nettside-PDF eller helsides eller sammenhengende skjermbilder. Velg Visual PDF for å lagre nettstedet som skjermbilder eller Interactive PDF for markerbar tekst og klikkbare lenker.",
        sections: [
            { heading: "1. Oppgi én eller flere URL-er", body: "Send en offentlig URL, en liste med nøyaktige offentlige URL-er, en eksisterende nettside-PDF eller helsides eller sammenhengende skjermbilder. Hver nettside forblir en separat PDF." },
            { heading: "2. Velg PDF-type", body: "Velg Visual PDF for et bildebasert resultat som prioriterer sidens utseende, eller Interactive PDF når markerbar tekst og klikkbare lenker er viktigst. Én modus gjelder for hele URL-listen." },
            { heading: "3. Konverter bare oppgitte sider", body: "Appen åpner bare de nøyaktige offentlige URL-ene. Den gjennomsøker ikke domener eller sitemaps, finner ikke sider, følger ikke interne lenker og omgår ikke innlogging, betalingsmurer, CAPTCHA, geografiske eller andre tilgangsbegrensninger." },
            { heading: "4. Behandle PDF-er og skjermbilder", body: "Opplastede skjermbilder kan settes sammen ovenfra og ned i en Visual PDF. Nettside-PDF-er behandles uten å dikte opp manglende innhold; Interactive PDF prioriterer eksisterende tekst, oppsett, bilder og verifiserte lenker." },
            { heading: "5. Få tilpasset lagringshjelp og kontroller resultatet", body: "Hvis direkte konvertering er utilgjengelig eller ufullstendig, gir appen trinn for siden, nettleseren eller innebygd eksport. Kontroller manglende eller beskåret innhold, tomme områder, lesbarhet, rekkefølge, oppsett, lenker og samsvar med valgt modus." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Åpne GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Bruksanvisning",
            firstStageDescription: "Gi GPT-appen en fungerende URL.",
            firstStageLabel: "Send URL-er",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "GPT-app · opplastet HTML-fil",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File gjør én opplastet HTML-fil om til en kontrollert PDF og bevarer oppsett, bilder, tekst og lenker.",
        lead: "Last opp nøyaktig én HTML-fil. GPT HTML 2 PDF forhåndsviser utformingen, laster inn tilgjengelige stiler, skrifter og bilder og lager en kontrollert PDF med markerbar tekst og klikkbare lenker der det er mulig.",
        sections: [
            { heading: "1. Last opp nøyaktig én HTML-fil", body: "Legg ved ett HTML-dokument. GPT-appen godtar ikke en URL i stedet, behandler ikke flere HTML-filer, gjennomsøker ikke nettsteder, følger ikke lenker til ekstra sider og slår ikke sammen dokumenter." },
            { heading: "2. Ta med stiler og ressurser", body: "Innebygde stiler brukes automatisk sammen med tilgjengelige eksterne stilark, skrifter og bilder. Hvis HTML-filen viser til en manglende lokal CSS-fil, kan du laste opp den samsvarende filen for et mer nøyaktig resultat eller fortsette uten den." },
            { heading: "3. Forhåndsvis og bevar utformingen", body: "HTML-filen forhåndsvises med en passende skrivebordsbredde før konvertering. PDF-en forsøker å bevare tema, farger, typografi, avstander, kolonner, kort, bilder og innholdsrekkefølge uten å aktivere interaktive kontroller." },
            { heading: "4. Lag én lesbar PDF", body: "GPT-appen lager én PDF med markerbar tekst og fungerende hyperlenker der det er mulig. Brede oppsett kan bruke liggende format eller en passende sidestørrelse, slik at viktige elementer ikke presses sammen, beskjæres eller deles." },
            { heading: "5. Kontroller den ferdige filen", body: "Hver PDF kontrolleres før levering for manglende innhold, beskårne komponenter, uforklarlige tomme områder, lesbarhet, sideskift, bildeplassering og støttede lenker." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Åpne GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Fem trinn fra HTML til PDF",
            firstStageDescription: "Gi GPT-appen én HTML-fil.",
            firstStageLabel: "Last opp HTML",
        },
    }
};
