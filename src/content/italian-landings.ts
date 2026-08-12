import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const italianLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "App GPT · URL esatti, PDF o schermate",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File converte URL pubblici esatti e tratta PDF di pagine web o schermate caricate producendo file Visual PDF o Interactive PDF separati.",
        lead: "Fornisci un URL pubblico esatto, un elenco di URL esatti, un PDF di una pagina web o schermate a pagina intera o consecutive. Scegli Visual PDF per salvare il sito come schermate o Interactive PDF per testo selezionabile e link cliccabili.",
        sections: [
            { heading: "1. Indica uno o più URL", body: "Invia un URL pubblico, un elenco di URL pubblici esatti, un PDF esistente di una pagina web o schermate complete o consecutive. Ogni pagina web rimane in un PDF separato." },
            { heading: "2. Scegli il tipo di PDF", body: "Scegli Visual PDF per un risultato basato su immagini che privilegia l’aspetto della pagina, oppure Interactive PDF quando contano di più testo selezionabile e link cliccabili. Un’unica modalità si applica a tutto l’elenco di URL." },
            { heading: "3. Converti solo le pagine fornite", body: "L’app GPT apre solo gli URL pubblici esatti indicati. Non scansiona domini o sitemap, non scopre pagine, non segue link interni e non aggira autenticazione, paywall, CAPTCHA, restrizioni geografiche o altri controlli di accesso." },
            { heading: "4. Elabora PDF e schermate", body: "Le schermate caricate possono essere assemblate dall’alto verso il basso in un Visual PDF. I PDF di pagine web vengono elaborati senza inventare contenuti mancanti; Interactive PDF privilegia testo, layout, immagini e link verificati esistenti." },
            { heading: "5. Ricevi istruzioni adatte e verifica il risultato", body: "Se la conversione diretta non è disponibile o è incompleta, l’app fornisce passaggi specifici per pagina, browser o esportazione nativa. Controlla contenuti mancanti o tagliati, aree vuote, leggibilità, ordine, layout, link e fedeltà alla modalità." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Apri GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Istruzioni per l’uso",
            firstStageDescription: "Fornisci all’app GPT un URL funzionante.",
            firstStageLabel: "Invia gli URL",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "App GPT · file HTML caricato",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File trasforma un file HTML caricato in un PDF verificato, conservando layout, immagini, testo e collegamenti.",
        lead: "Carica esattamente un file HTML. GPT HTML 2 PDF ne visualizza l’anteprima, carica stili, font e immagini accessibili e crea un PDF verificato con testo selezionabile e collegamenti cliccabili quando possibile.",
        sections: [
            { heading: "1. Carica esattamente un file HTML", body: "Allega un solo documento HTML. L’app GPT non accetta un URL al suo posto, non elabora più file HTML, non esplora siti, non segue collegamenti verso altre pagine e non unisce documenti." },
            { heading: "2. Includi stili e risorse", body: "Gli stili inline e incorporati vengono usati automaticamente con fogli di stile, font e immagini remoti accessibili. Se l’HTML fa riferimento a un file CSS locale mancante, carica il file corrispondente per una resa più fedele oppure continua senza." },
            { heading: "3. Visualizza e conserva il design", body: "Prima della conversione, l’HTML viene visualizzato a una larghezza desktop adatta. Il PDF mira a conservare tema, colori, tipografia, spaziatura, colonne, schede, immagini e ordine dei contenuti senza attivare controlli interattivi." },
            { heading: "4. Crea un PDF leggibile", body: "L’app GPT produce un PDF con testo selezionabile e collegamenti funzionanti quando possibile. I layout larghi possono usare l’orientamento orizzontale o un formato adatto per evitare di comprimere, tagliare o dividere elementi importanti." },
            { heading: "5. Controlla il file finale", body: "Ogni PDF viene controllato prima della consegna per individuare contenuti mancanti, componenti tagliati, aree vuote inspiegabili, problemi di leggibilità, interruzioni di pagina, posizione delle immagini e collegamenti supportati." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Apri GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Cinque passaggi da HTML a PDF",
            firstStageDescription: "Fornisci un file HTML all’app GPT.",
            firstStageLabel: "Carica HTML",
        },
    }
};
