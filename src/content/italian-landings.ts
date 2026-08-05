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
  { route: "export-ai-chat-to-pdf", label: "Tutte le esportazioni delle chat AI" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT in PDF" },
  { route: "export-claude-to-pdf", label: "Claude in PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini in PDF" },
  { route: "export-grok-to-pdf", label: "Grok in PDF" },
];

export const italianLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "App GPT · URL esatti, PDF o schermate",
    title: "Webpage to PDF Converter — Web2File",
    displayTitle: "GPT: Webpage 2 PDF",
    description:
      "Webpage to PDF Converter — Web2File converte URL pubblici esatti e tratta PDF di pagine web o schermate caricate producendo file Visual PDF o Interactive PDF separati.",
    lead:
      "Fornisci un URL pubblico esatto, un elenco di URL esatti, un PDF di una pagina web o schermate a pagina intera o consecutive. Scegli Visual PDF per salvare il sito come schermate o Interactive PDF per testo selezionabile e link cliccabili.",
    sections: [
      { heading: "1. Indica uno o più URL", body: "Invia un URL pubblico, un elenco di URL pubblici esatti, un PDF esistente di una pagina web o schermate complete o consecutive. Ogni pagina web rimane in un PDF separato." },
      { heading: "2. Scegli il tipo di PDF", body: "Scegli Visual PDF per un risultato basato su immagini che privilegia l’aspetto della pagina, oppure Interactive PDF quando contano di più testo selezionabile e link cliccabili. Un’unica modalità si applica a tutto l’elenco di URL." },
      { heading: "3. Converti solo le pagine fornite", body: "L’app GPT apre solo gli URL pubblici esatti indicati. Non scansiona domini o sitemap, non scopre pagine, non segue link interni e non aggira autenticazione, paywall, CAPTCHA, restrizioni geografiche o altri controlli di accesso. Per scoprire un intero sito usa Web2File: Website 2 PDF." },
      { heading: "4. Elabora PDF e schermate", body: "Le schermate caricate possono essere assemblate dall’alto verso il basso in un Visual PDF. I PDF di pagine web vengono elaborati senza inventare contenuti mancanti; Interactive PDF privilegia testo, layout, immagini e link verificati esistenti." },
      { heading: "5. Ricevi istruzioni adatte e verifica il risultato", body: "Se la conversione diretta non è disponibile o è incompleta, l’app fornisce passaggi specifici per pagina, browser o esportazione nativa. Controlla contenuti mancanti o tagliati, aree vuote, leggibilità, ordine, layout, link e fedeltà alla modalità." },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "Apri GPT Webpage 2 PDF",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "Salvare una pagina web come PDF" },
      { slug: "long-webpage-page-breaks", label: "Correggere le interruzioni nelle pagine web lunghe" },
    ],
    relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Istruzioni per l’uso",
      firstStageDescription: "Fornisci all’app GPT un URL funzionante.",
      firstStageLabel: "Invia gli URL",
    },
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "App GPT · pagine web accessibili",
    title: "Converti le pagine di un sito in PDF separati con Web 2 PDF",
    description:
      "Web 2 PDF trova le pagine accessibili di un sito, converte quelle selezionate e restituisce un PDF separato per ogni pagina.",
    lead:
      "Fornisci a Web 2 PDF un indirizzo pubblico. L’app può trovare pagine accessibili, convertire gli URL selezionati e restituire più link di download, uno per pagina.",
    sections: [
      { heading: "1. Fornisci il sito", body: "Invia l’URL pubblico iniziale. L’app trova le pagine accessibili e mostra il limite scelto prima della conversione." },
      { heading: "2. Verifica l’elenco delle pagine", body: "Conferma quali pagine accessibili appartengono alla richiesta. Le pagine con accesso, gli URL bloccati e i domini esterni vengono esclusi." },
      { heading: "3. Scarica PDF separati", body: "Ogni pagina convertita viene consegnata come PDF indipendente. Web 2 PDF non promette un documento combinato del sito né un dataset di scraping." },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Apri l’app GPT Web 2 PDF",
    articleLinks: [
      { slug: "multi-page-website-to-pdf", label: "Convertire un sito multipagina in PDF" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Tipi di siti che si possono esportare" },
    ],
    relatedRoutes: gptRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "App GPT · file HTML caricato",
    title: "HTML to PDF Converter — Web2File",
    displayTitle: "GPT: HTML 2 PDF",
    description:
      "HTML to PDF Converter — Web2File trasforma un file HTML caricato in un PDF verificato, conservando layout, immagini, testo e collegamenti.",
    lead:
      "Carica esattamente un file HTML. GPT HTML 2 PDF ne visualizza l’anteprima, carica stili, font e immagini accessibili e crea un PDF verificato con testo selezionabile e collegamenti cliccabili quando possibile.",
    sections: [
      { heading: "1. Carica esattamente un file HTML", body: "Allega un solo documento HTML. L’app GPT non accetta un URL al suo posto, non elabora più file HTML, non esplora siti, non segue collegamenti verso altre pagine e non unisce documenti." },
      { heading: "2. Includi stili e risorse", body: "Gli stili inline e incorporati vengono usati automaticamente con fogli di stile, font e immagini remoti accessibili. Se l’HTML fa riferimento a un file CSS locale mancante, carica il file corrispondente per una resa più fedele oppure continua senza." },
      { heading: "3. Visualizza e conserva il design", body: "Prima della conversione, l’HTML viene visualizzato a una larghezza desktop adatta. Il PDF mira a conservare tema, colori, tipografia, spaziatura, colonne, schede, immagini e ordine dei contenuti senza attivare controlli interattivi." },
      { heading: "4. Crea un PDF leggibile", body: "L’app GPT produce un PDF con testo selezionabile e collegamenti funzionanti quando possibile. I layout larghi possono usare l’orientamento orizzontale o un formato adatto per evitare di comprimere, tagliare o dividere elementi importanti." },
      { heading: "5. Controlla il file finale", body: "Ogni PDF viene controllato prima della consegna per individuare contenuti mancanti, componenti tagliati, aree vuote inspiegabili, problemi di leggibilità, interruzioni di pagina, posizione delle immagini e collegamenti supportati." },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "Apri GPT HTML 2 PDF",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "Convertire HTML in PDF in modo sicuro" },
      { slug: "webpage-capture-vs-web-scraping", label: "Acquisizione della pagina o web scraping" },
    ],
    relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Cinque passaggi da HTML a PDF",
      firstStageDescription: "Fornisci un file HTML all’app GPT.",
      firstStageLabel: "Carica HTML",
    },
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt",
    eyebrow: "App GPT · un URL pubblico",
    title: "Converti un URL in PPTX con One Page 2 PowerPoint",
    description:
      "One Page 2 PowerPoint è un’app GPT specializzata che converte un URL pubblico e restituisce una presentazione PPTX della pagina.",
    lead:
      "Fornisci all’app un URL HTTPS pubblico. One Page 2 PowerPoint invia la pagina per la conversione e restituisce una presentazione PPTX scaricabile.",
    sections: [
      { heading: "1. Invia un URL pubblico", body: "Incolla l’indirizzo esatto della pagina. L’app elabora una pagina per richiesta e non esplora il resto del sito." },
      { heading: "2. Ricevi un PPTX", body: "La pagina viene organizzata in una presentazione e consegnata come file PowerPoint. Verifica i limiti delle diapositive e le sostituzioni visive o modificabili." },
      { heading: "3. Mantieni le schede private in Chrome", body: "Un’app GPT per URL pubblici non può usare la tua sessione del browser. Usa l’estensione Page 2 File quando la fonte è aperta dopo l’accesso." },
    ],
    externalLinkKey: "onePage2PowerpointGpt",
    primaryLabel: "Apri One Page 2 PowerPoint",
    articleLinks: [
      { slug: "webpage-to-powerpoint", label: "Convertire una pagina web in PowerPoint" },
      { slug: "sections-to-slides", label: "Convertire le sezioni di una pagina in diapositive" },
    ],
    relatedRoutes: gptRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "App GPT · pagine web accessibili",
    title: "Converti le pagine di un sito in PPTX con Web 2 PowerPoint",
    description:
      "Web 2 PowerPoint trova pagine accessibili, converte quelle selezionate e restituisce un PPTX separato per ogni pagina.",
    lead:
      "Fornisci a Web 2 PowerPoint un indirizzo pubblico. L’app trova pagine accessibili, converte gli URL selezionati e restituisce più link alle presentazioni.",
    sections: [
      { heading: "1. Fornisci il sito", body: "Invia l’URL pubblico iniziale e definisci chiaramente il limite del sito. Domini esterni e pagine private non vengono inclusi senza avviso." },
      { heading: "2. Conferma le pagine accessibili", body: "Verifica l’elenco trovato prima della conversione. Solo le pagine selezionate e accessibili vengono inviate a Page 2 File." },
      { heading: "3. Scarica file PPTX separati", body: "Ogni pagina convertita viene consegnata come presentazione indipendente. L’app non promette una presentazione combinata dell’intero sito." },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Apri Web 2 PowerPoint",
    articleLinks: [
      { slug: "website-to-powerpoint", label: "Convertire un sito in PowerPoint" },
      { slug: "screenshot-vs-editable-powerpoint", label: "Diapositive acquisite o modificabili" },
    ],
    relatedRoutes: gptRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "Esportazione delle chat AI",
    title: "Esporta una conversazione dalla scheda attiva",
    description:
      "Esporta conversazioni supportate da ChatGPT, Claude, Gemini e Grok in PDF con l’estensione Page 2 File, un’anteprima temporanea e nessuna cronologia.",
    lead:
      "Scegli l’aspetto originale oppure un documento semplice da leggere. L’estensione esporta la chat direttamente dalla scheda attiva del browser.",
    sections: [
      { heading: "Interfacce di chat supportate", body: "Page 2 File supporta ChatGPT, Claude, Gemini e Grok, oltre a un’alternativa prudente per altre chat nel browser.", points: ["ChatGPT", "Claude", "Gemini", "Grok"] },
      { heading: "Aspetto originale", body: "Il raggruppamento dei messaggi, i blocchi di codice, le tabelle e i link visibili alle fonti vengono conservati." },
      { heading: "Documento ordinato", body: "Il testo supportato viene adattato a un documento più semplice, conservando autori e destinazioni dei link." },
      { heading: "Prodotto indipendente", body: "Page 2 File non è affiliato, approvato né gestito da alcuna piattaforma AI supportata." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installa l’estensione",
    articleLinks: [
      { slug: "export-ai-chats-privately", label: "Esportare chat AI in modo privato" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Tipi di siti che si possono esportare" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "Esportazione da ChatGPT",
    title: "Esporta lunghe conversazioni ChatGPT in PDF",
    description:
      "Esporta messaggi visibili di ChatGPT, codice, tabelle, link e conversazioni lunghe dalla scheda attiva in un PDF verificato.",
    lead:
      "Acquisisci la conversazione visibile nella scheda attiva, verifica le interruzioni di pagina e scarica il file senza un account Page 2 File.",
    sections: [
      { heading: "Cosa viene conservato", body: "Messaggi, ordine dei partecipanti, codice, tabelle e link visibili vengono rappresentati nell’anteprima." },
      { heading: "Due stili di lettura", body: "Mantieni il ritmo visivo originale oppure scegli un documento più semplice da leggere e stampare." },
      { heading: "Limiti specifici della piattaforma", body: "Rami compressi, messaggi non caricati e contenuti non ancora caricati dal browser potrebbero dover essere aperti o caricati prima dell’acquisizione." },
      { heading: "Nessun rapporto ufficiale", body: "Page 2 File è uno strumento indipendente e non è approvato né gestito da OpenAI o ChatGPT." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installa per ChatGPT",
    articleLinks: [
      { slug: "export-chatgpt-conversation-to-pdf", label: "Esportare una conversazione ChatGPT in PDF" },
      { slug: "export-ai-chats-privately", label: "Proteggere i dati di anteprima delle chat AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Esportazione da Claude",
    title: "Salva conversazioni Claude e artefatti visibili",
    description:
      "Esporta conversazioni Claude, Markdown, codice, citazioni e contesto visibile degli artefatti dalla scheda attiva in un PDF verificato.",
    lead:
      "Dopo un clic esplicito, l’estensione legge la conversazione attiva e crea un’anteprima temporanea per verificare le risposte lunghe.",
    sections: [
      { heading: "Le risposte lunghe mantengono la struttura", body: "Titoli, elenchi, citazioni e codice restano nel corretto ordine di lettura." },
      { heading: "Contesto degli artefatti", body: "I titoli visibili e i contenuti disponibili degli artefatti possono essere rappresentati senza dichiarare un accesso nascosto." },
      { heading: "Nessun rapporto ufficiale", body: "Page 2 File è uno strumento indipendente e non è approvato da Anthropic." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installa per Claude",
    articleLinks: [
      { slug: "export-claude-chat-to-pdf", label: "Esportare una chat Claude in PDF" },
      { slug: "export-ai-chats-privately", label: "Proteggere i dati di anteprima delle chat AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Esportazione da Gemini",
    title: "Trasforma una conversazione Gemini in un PDF leggibile",
    description:
      "Esporta messaggi visibili di Gemini, schede delle fonti, codice e citazioni dalla scheda attiva in un PDF verificato con anteprima temporanea.",
    lead:
      "Verifica come appaiono le schede delle fonti e le immagini visibili prima di creare un documento ordinato o visivamente fedele.",
    sections: [
      { heading: "Le fonti restano utili", body: "Le citazioni e i link visibili restano selezionabili quando le loro destinazioni sono sicure." },
      { heading: "Le immagini dipendono dalla pagina caricata", body: "Solo i contenuti multimediali disponibili nella pagina attiva possono apparire nell’anteprima temporanea." },
      { heading: "Nessun rapporto ufficiale", body: "Page 2 File è indipendente e non è un prodotto Google o Gemini." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installa per Gemini",
    articleLinks: [
      { slug: "export-gemini-chat-to-pdf", label: "Esportare una chat Gemini in PDF" },
      { slug: "export-ai-chats-privately", label: "Proteggere i dati di anteprima delle chat AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Esportazione da Grok",
    title: "Esporta conversazioni Grok con fonti visibili",
    description:
      "Esporta conversazioni visibili di Grok, link di X, post citati e fonti dalla scheda attiva in un PDF verificato.",
    lead:
      "Acquisisci la conversazione attiva, conserva il contesto visibile delle fonti e scegli un’anteprima visiva oppure un documento semplice da leggere.",
    sections: [
      { heading: "Ordine di lettura rispettoso della conversazione", body: "I messaggi e il contesto dei post citati restano raggruppati invece di diventare un flusso di testo senza etichette." },
      { heading: "Link visibili di X", body: "Gli URL dei post e le fonti restano selezionabili quando superano il controllo di sicurezza." },
      { heading: "Nessun rapporto ufficiale", body: "Page 2 File è un prodotto indipendente e non è approvato da xAI o X." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installa per Grok",
    articleLinks: [
      { slug: "export-other-ai-chats-to-pdf", label: "Esportare altre chat AI in PDF" },
      { slug: "export-ai-chats-privately", label: "Proteggere i dati di anteprima delle chat AI" },
    ],
    relatedRoutes: chatRoutes,
  },
};
