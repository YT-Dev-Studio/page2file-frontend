import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const swedishLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "GPT-app · exakta URL:er, PDF:er eller skärmbilder",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File hanterar exakta offentliga adresser, webbsides-PDF:er och skärmbilder som Visual PDF eller Interactive PDF.",
        lead: "Ange en exakt offentlig URL, en lista med exakta URL:er, en webbsides-PDF eller helsides- eller sammanhängande skärmbilder. Välj Visual PDF för att spara webbplatsen som skärmbilder eller Interactive PDF för markerbar text och klickbara länkar.",
        sections: [
            { heading: "1. Ange en eller flera URL:er", body: "Skicka en offentlig URL, en lista med exakta offentliga URL:er, en befintlig webbsides-PDF eller helsides- eller sammanhängande skärmbilder. Varje webbsida förblir en separat PDF." },
            { heading: "2. Välj PDF-typ", body: "Välj Visual PDF för ett bildbaserat resultat som prioriterar sidans utseende, eller Interactive PDF när markerbar text och klickbara länkar är viktigare. Ett läge gäller för hela URL-listan." },
            { heading: "3. Konvertera endast angivna sidor", body: "Appen öppnar endast de exakta offentliga URL:erna. Den söker inte igenom domäner eller sitemaps, upptäcker inte sidor, följer inte interna länkar och kringgår inte inloggning, betalväggar, CAPTCHA, geografiska eller andra åtkomstbegränsningar." },
            { heading: "4. Bearbeta PDF:er och skärmbilder", body: "Uppladdade skärmbilder kan sättas samman uppifrån och ned till en Visual PDF. Webbsides-PDF:er behandlas utan att saknat innehåll hittas på; Interactive PDF prioriterar befintlig text, layout, bilder och verifierade länkar." },
            { heading: "5. Få anpassade instruktioner och kontrollera resultatet", body: "Om direkt konvertering saknas eller är ofullständig ger appen steg för sidan, webbläsaren eller den inbyggda exporten. Kontrollera saknat eller beskuret innehåll, tomma ytor, läsbarhet, ordning, layout, länkar och trohet mot valt läge." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Öppna GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Användningsinstruktioner",
            firstStageDescription: "Ge GPT-appen en fungerande URL.",
            firstStageLabel: "Skicka URL:er",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "GPT-app · uppladdad HTML-fil",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File omvandlar en uppladdad HTML-fil till en kontrollerad PDF och bevarar layout, bilder, text och länkar.",
        lead: "Ladda upp exakt en HTML-fil. GPT HTML 2 PDF förhandsgranskar utformningen, läser in tillgängliga stilar, typsnitt och bilder och skapar en kontrollerad PDF med markerbar text och klickbara länkar när det är möjligt.",
        sections: [
            { heading: "1. Ladda upp exakt en HTML-fil", body: "Bifoga ett enda HTML-dokument. GPT-appen tar inte emot en URL i stället, bearbetar inte flera HTML-filer, genomsöker inte webbplatser, följer inte länkar till fler sidor och slår inte ihop dokument." },
            { heading: "2. Ta med stilar och resurser", body: "Infogade och inbäddade stilar används automatiskt tillsammans med tillgängliga externa formatmallar, typsnitt och bilder. Om HTML-filen hänvisar till en lokal CSS-fil som saknas kan du ladda upp den matchande filen för ett trognare resultat eller fortsätta utan den." },
            { heading: "3. Förhandsgranska och bevara designen", body: "HTML-filen förhandsgranskas med en lämplig skrivbordsbredd före konverteringen. PDF-filen försöker bevara tema, färger, typografi, avstånd, kolumner, kort, bilder och innehållsordning utan att aktivera interaktiva kontroller." },
            { heading: "4. Skapa en läsbar PDF", body: "GPT-appen skapar en PDF med markerbar text och fungerande hyperlänkar när det är möjligt. Breda layouter kan använda liggande format eller en lämplig sidstorlek så att viktiga element inte pressas ihop, beskärs eller delas." },
            { heading: "5. Kontrollera den färdiga filen", body: "Varje PDF kontrolleras före leverans med avseende på saknat innehåll, beskurna komponenter, oförklarliga tomma ytor, läsbarhet, sidbrytningar, bildplacering och länkar som stöds." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Öppna GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Fem steg från HTML till PDF",
            firstStageDescription: "Ge GPT-appen en HTML-fil.",
            firstStageLabel: "Ladda upp HTML",
        },
    }
};
