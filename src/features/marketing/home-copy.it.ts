import type { HomeCopy } from "./home-copy";

export const homeCopyIt: HomeCopy = {
  title: "Esporta qualsiasi pagina web in PDF/PPTX",
  lead:
    "Incolla il link di una pagina pubblica. Page 2 File la suddivide con cura in pagine PDF o diapositive PowerPoint, con un’anteprima prima del download.",
  form: {
    formatLabel: "Formato",
    meta: "Nessuna registrazione · Anteprima · File temporanei",
    pdfModeLabel: "Modalità PDF",
    pdfModes: [
      { label: "Acquisizioni della pagina", value: "visual" },
      { label: "PDF modificabile", value: "editable" },
    ],
    powerpointModeLabel: "Modalità PowerPoint",
    powerpointModes: [
      { label: "Acquisizioni delle diapositive", value: "visual" },
      { label: "Presentazione modificabile", value: "editable" },
    ],
    submitPdf: "Crea PDF",
    submitPowerpoint: "Crea PowerPoint",
    urlHelper:
      "Solo pagine HTTPS pubbliche. Usa l’estensione per le schede con accesso effettuato.",
    urlLabel: "Link della pagina web",
    urlPlaceholder: "https://example.com/articolo",
  },
  converterFlow: {
    backAction: "Torna alla configurazione",
    processingBody:
      "Stiamo analizzando la pagina e preparando il formato di file scelto.",
    processingTitle: "Stiamo preparando il file",
    readyBody: "Fai clic per scaricare il file",
    readyTitle: "Il file è pronto",
  },
  closingNote:
    "Il servizio funziona con articoli, documentazione, pagine di destinazione e report pubblici. Per pagine private o chat AI, l’estensione usa la scheda attiva del browser e crea un’anteprima temporanea.",
  preview: {
    accessibleLabel: "Esempio di risultato della conversione",
    divider: "L’INTERRUZIONE DI PAGINA MANTIENE UNITA L’IMMAGINE",
    imageNote: "L’immagine rimane intera",
    pdfMeta: "12 pagine · pronto",
    powerpointMeta: "12 diapositive · pronto",
    sourceTitle: "Un articolo lungo con un’immagine",
    title: "Pagina → file accurato",
  },
  promo: {
    body:
      "L’estensione funziona in due modi: tramite URL o con la scheda attiva. I dati della pagina esportata vengono eliminati dal server dopo la chiusura dell’anteprima.",
    eyebrow: "ESTENSIONE CHROME",
    title:
      "Esporta la scheda corrente, anche quando è necessario effettuare l’accesso.",
  },
  features: {
    eyebrow: "FUNZIONALITÀ",
    title: "Opzioni flessibili per i contenuti esportati",
    body:
      "Esporta pagine web nel formato adatto: come acquisizioni della pagina oppure conservando contenuti multimediali, link e struttura.",
    items: [
      {
        title: "Esporta chat AI e di messaggistica",
        body:
          "Esporta lunghe conversazioni da ChatGPT, Claude, Gemini, Grok, DeepSeek e altri servizi in un PDF chiaro e leggibile.",
      },
      {
        title: "I 2 formati più pratici",
        list: {
          items: [
            "Salva acquisizioni della pagina come PDF/PPTX.",
            "Crea file PDF/PPTX modificabili che conservano contenuti multimediali, link e struttura.",
          ],
          style: "unordered",
        },
      },
      {
        title: "Controlla il contenuto del file",
        body:
          "Combina contenuti multimediali, link e stili conservati nei file esportati. Nell’anteprima puoi anche rimuovere elementi non necessari della pagina.",
      },
      {
        title: "2 modalità di lavoro",
        body:
          "Esporta la scheda corrente di qualsiasi sito oppure inserisci l’URL di una pagina pubblica.",
      },
      {
        title: "Risolti i problemi di altri servizi",
        body:
          "Ottieni un PDF o PPTX con immagini complete e senza spazi eccessivi tra i contenuti.",
      },
      {
        title: "Sicuro e senza registrazione",
        body:
          "Non devi creare un account. Installa l’estensione e salva la pagina scelta.",
      },
    ],
  },
  howItWorks: {
    action: "Apri la guida completa",
    body:
      "Il metodo più rapido è l’estensione: usa la scheda corrente e non richiede di copiare un link.",
    eyebrow: "COME INIZIARE",
    extensionAction: "Installa l’estensione",
    installTime: "In 30 secondi",
    items: [
      {
        title: "Installa l’estensione",
        body:
          "Aggiungi Page 2 File a Chrome. Non serve un account Page 2 File.",
      },
      {
        title: "Apri la pagina",
        list: {
          items: [
            "Vai alla scheda desiderata.",
            "Apri Page 2 File.",
            "Fai clic su Preview.",
          ],
          style: "ordered",
        },
      },
      {
        title: "Verifica e scarica",
        body:
          "Verifica il risultato, rimuovi le sezioni se necessario e scarica il file completato.",
      },
    ],
    note:
      "Con esempi di un link pubblico, una scheda privata e una chat AI",
    stepLabels: ["Passaggio 1", "Passaggio 2", "Passaggio 3"],
    title: "Tre passaggi fino al file completato",
  },
  blog: {
    action: "Leggi l’articolo",
    allAction: "Tutti gli articoli",
    body:
      "Guide pratiche su fedeltà, modifica, link, interruzioni di pagina e gestione sicura delle chat AI.",
    eyebrow: "BLOG",
    items: [
      { slug: "why-print-to-pdf-breaks" },
      { slug: "visual-vs-editable" },
      { slug: "preserve-clickable-links" },
      { slug: "long-webpage-page-breaks" },
    ],
    title: "Guide per esportare diversi tipi di siti",
  },
  faq: {
    body:
      "Risposte chiare su acquisizione delle pagine, modalità di output, schede private, anteprime temporanee ed esportazione delle chat.",
    eyebrow: "DOMANDE FREQUENTI",
    items: [
      {
        title: "Come converto una pagina web in PDF o PowerPoint?",
        body:
          "Per una pagina pubblica, incolla l’URL HTTPS, scegli PDF o PowerPoint e acquisizioni della pagina o una modalità modificabile, quindi verifica le sezioni prima di creare il file. Per una pagina con accesso effettuato, usa l’estensione Page 2 File per Chrome con la scheda attiva.",
      },
      {
        title: "Page 2 File può conservare il design della pagina?",
        body:
          "Le acquisizioni della pagina sono pensate per conservare l’aspetto renderizzato, inclusi layout, colori, immagini e grafici visibili. Funzioni del browser come animazioni, video e controlli interattivi vengono rappresentate in forma statica.",
      },
      {
        title: "Testo e link restano modificabili o accessibili?",
        body:
          "La modalità modificabile conserva il testo supportato come contenuto del documento e le destinazioni sicure dei link. Widget complessi, grafica canvas ed elementi non supportati possono essere rappresentati come immagini. Le acquisizioni della pagina danno priorità all’aspetto e non trasformano ogni pixel in un oggetto modificabile.",
      },
      {
        title: "Può acquisire completamente pagine lunghe e dinamiche?",
        body:
          "L’estensione usa la scheda attiva renderizzata, comprese le pagine lunghe dopo il caricamento delle sezioni necessarie. Prima espandi i contenuti compressi e scorri fino in fondo. I contenuti nascosti o non caricati non possono essere esportati.",
      },
      {
        title: "Posso convertire pagine dopo aver effettuato l’accesso?",
        body:
          "Sì, tramite l’estensione Chrome dopo aver aperto normalmente la pagina. L’estensione usa la scheda attiva e non chiede di inviare la password dell’account al modulo per URL pubblici. Non aggira i controlli di accesso.",
      },
      {
        title: "Posso convertire una pagina o un intero sito?",
        body: [
          { kind: "text", text: "I convertitori di pagine web, oltre a " },
          { kind: "link", label: "One Page 2 PDF", route: "page2pdf-gpt" },
          { kind: "text", text: " e " },
          {
            kind: "link",
            label: "One Page 2 PowerPoint",
            route: "one-page2powerpoint-gpt",
          },
          {
            kind: "text",
            text: " elaborano un URL. Per più pagine pubbliche accessibili, usa ",
          },
          { kind: "link", label: "Web 2 PDF", route: "web2pdf-gpt" },
          { kind: "text", text: " oppure " },
          {
            kind: "link",
            label: "Web 2 PowerPoint",
            route: "web2powerpoint-gpt",
          },
          {
            kind: "text",
            text: ": riceverai un PDF o PPTX separato per ogni pagina scelta, non un unico file combinato.",
          },
        ],
      },
      {
        title: "Qual è la differenza tra acquisizioni della pagina e modalità modificabili?",
        body:
          "Le acquisizioni della pagina danno priorità alla fedeltà della pagina renderizzata. La modalità modificabile dà priorità a testo selezionabile, immagini supportate, link sicuri e strutture riutilizzabili. Verifica grafica complessa, tipografia e layout, perché entrambe le modalità possono richiedere sostituzioni.",
      },
      {
        title: "Cosa succede ai dati dell’anteprima quando chiudo la scheda?",
        body:
          "I dati dell’anteprima sono temporanei e vengono eliminati quando chiudi la scheda. Page 2 File non possiede un database della cronologia delle conversioni e non offre un archivio delle anteprime precedenti.",
      },
      {
        title: "Serve un account?",
        body:
          "Non serve un account Page 2 File per il flusso con URL pubblico né per l’anteprima dell’estensione. Per una pagina privata a cui hai accesso, potrebbe essere necessario mantenere l’accesso al sito di origine.",
      },
      {
        title: "Posso esportare chat AI e di messaggistica?",
        body:
          "L’estensione può esportare una conversazione renderizzata in una scheda Chrome, incluse chat AI supportate e messaggistica web. Carica prima l’intervallo di messaggi necessario. Le app esclusivamente native e le interfacce esterne al browser, come Signal Desktop, non vengono acquisite.",
      },
    ],
    title: "Cosa devi sapere",
  },
  finalCta: {
    body:
      "Incolla qui un link pubblico oppure installa l’estensione per la scheda corrente.",
    eyebrow: "VUOI PROVARLO CON LA TUA PAGINA?",
    title: "Ottieni un PDF o PowerPoint prima di aprire un editor",
  },
};
