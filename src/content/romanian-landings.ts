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
  { route: "export-ai-chat-to-pdf", label: "Toate exporturile conversațiilor AI" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT în PDF" },
  { route: "export-claude-to-pdf", label: "Claude în PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini în PDF" },
  { route: "export-grok-to-pdf", label: "Grok în PDF" },
];

export const romanianLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt", eyebrow: "Aplicație GPT · URL-uri exacte, PDF-uri sau capturi", title: "Webpage to PDF Converter — Web2File",
    description: "Webpage to PDF Converter — Web2File convertește URL-uri publice exacte și procesează PDF-uri de pagini web sau capturi încărcate în fișiere Visual PDF ori Interactive PDF separate.",
    lead: "Furnizați un URL public exact, o listă de URL-uri exacte, un PDF al unei pagini web sau capturi complete ori consecutive. Alegeți Visual PDF pentru a salva site-ul sub formă de capturi sau Interactive PDF pentru text selectabil și linkuri active.",
    sections: [
      { heading: "1. Indicați unul sau mai multe URL-uri", body: "Trimiteți un URL public, o listă de URL-uri publice exacte, un PDF existent al unei pagini web sau capturi complete ori consecutive. Fiecare pagină web rămâne într-un PDF separat." },
      { heading: "2. Alegeți tipul PDF", body: "Alegeți Visual PDF pentru un rezultat bazat pe imagini care prioritizează aspectul paginii sau Interactive PDF când textul selectabil și linkurile active sunt mai importante. Un singur mod se aplică întregii liste de URL-uri." },
      { heading: "3. Convertiți numai paginile furnizate", body: "Aplicația deschide numai URL-urile publice exacte indicate. Nu explorează domenii sau sitemap-uri, nu descoperă pagini, nu urmează linkuri interne și nu ocolește autentificarea, paywall-urile, CAPTCHA, restricțiile geografice sau alte controale. Pentru întregul site folosiți Web2File: Website 2 PDF." },
      { heading: "4. Procesați PDF-uri și capturi", body: "Capturile încărcate pot fi asamblate de sus în jos într-un Visual PDF. PDF-urile paginilor web sunt procesate fără a inventa conținut lipsă; Interactive PDF prioritizează textul, aspectul, imaginile și linkurile verificate existente." },
      { heading: "5. Primiți instrucțiuni adaptate și verificați rezultatul", body: "Dacă conversia directă nu este disponibilă sau este incompletă, aplicația oferă pași specifici paginii, browserului sau exportului nativ. Verificați conținutul lipsă sau tăiat, zonele goale, lizibilitatea, ordinea, aspectul, linkurile și fidelitatea modului." },
    ],
    externalLinkKey: "page2pdfGpt", primaryLabel: "Deschideți GPT Webpage 2 PDF",
    articleLinks: [{ slug: "save-webpage-as-pdf", label: "Salvați o pagină web ca PDF" }, { slug: "long-webpage-page-breaks", label: "Corectați întreruperile de pagină ale paginilor lungi" }], relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Instrucțiuni de utilizare",
      firstStageDescription: "Furnizați aplicației GPT un URL funcțional.",
      firstStageLabel: "Trimiteți URL-uri",
    },
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt", eyebrow: "Aplicație GPT · pagini web accesibile", title: "Convertiți paginile unui site în PDF-uri separate cu Web 2 PDF",
    description: "Web 2 PDF găsește paginile accesibile ale unui site, le convertește pe cele selectate și returnează un PDF separat pentru fiecare pagină.",
    lead: "Furnizați Web 2 PDF o adresă publică. Aplicația poate găsi pagini accesibile, converti URL-urile selectate și returna mai multe linkuri de descărcare — unul pentru fiecare pagină.",
    sections: [
      { heading: "1. Furnizați site-ul", body: "Trimiteți URL-ul public inițial. Aplicația găsește paginile accesibile și menține vizibil domeniul selectat înainte de conversie." },
      { heading: "2. Verificați lista de pagini", body: "Confirmați ce pagini accesibile aparțin solicitării. Paginile autentificate, URL-urile blocate și domeniile externe sunt excluse." },
      { heading: "3. Descărcați PDF-uri separate", body: "Fiecare pagină convertită este returnată ca PDF separat. Web 2 PDF nu promite un document unic pentru întregul site sau un set de date pentru scraping." },
    ],
    externalLinkKey: "web2pdfGpt", primaryLabel: "Deschide aplicația GPT Web 2 PDF",
    articleLinks: [{ slug: "multi-page-website-to-pdf", label: "Convertiți un site cu mai multe pagini în PDF" }, { slug: "website-types-to-pdf-or-powerpoint", label: "Tipuri de site-uri care pot fi exportate" }], relatedRoutes: gptRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt", eyebrow: "Aplicație GPT · fișier HTML încărcat", title: "Convertiți un fișier HTML încărcat cu HTML 2 PDF",
    description: "HTML 2 PDF acceptă un fișier HTML încărcat și returnează un PDF clar, păstrând vizibile limitele randării.",
    lead: "Încărcați un fișier HTML în aplicația GPT. HTML 2 PDF îl randează izolat și returnează un PDF; acest flux pentru fișiere brute este disponibil numai în aplicație.",
    sections: [
      { heading: "1. Încărcați fișierul HTML", body: "Atașați documentul HTML pe care aveți dreptul să îl procesați. Fluxul începe de la un fișier, nu de la URL-ul public al unei pagini web." },
      { heading: "2. Convertiți în PDF", body: "Aplicația returnează un PDF al documentului încărcat. Resursele externe, scripturile, fonturile personalizate și funcțiile browserului pot varia." },
      { heading: "3. Tratați HTML-ul ca date nesigure", body: "Randarea sigură necesită izolare de rețele private, fișiere locale și scripturi necontrolate. Rezultatul este conversia unui document, nu executarea de cod web găzduit." },
    ],
    externalLinkKey: "html2pdfGpt", primaryLabel: "Deschide aplicația GPT HTML 2 PDF",
    articleLinks: [{ slug: "html-to-pdf-safely", label: "Convertiți HTML în siguranță în PDF" }, { slug: "webpage-capture-vs-web-scraping", label: "Capturarea paginii comparată cu web scraping" }], relatedRoutes: gptRoutes,
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt", eyebrow: "Aplicație GPT · un URL public", title: "Convertiți un URL în PPTX cu One Page 2 PowerPoint",
    description: "One Page 2 PowerPoint este o aplicație GPT dedicată, care convertește un URL public și returnează o prezentare PPTX a paginii.",
    lead: "Furnizați aplicației un URL HTTPS public. One Page 2 PowerPoint trimite pagina pentru conversie și returnează o prezentare PPTX descărcabilă.",
    sections: [
      { heading: "1. Trimiteți un URL public", body: "Lipiți adresa exactă a paginii. Aplicația procesează o singură pagină per solicitare și nu explorează restul site-ului." },
      { heading: "2. Primiți un PPTX", body: "Pagina este organizată într-o prezentare și returnată ca fișier PowerPoint. Verificați limitele diapozitivelor și înlocuirile vizuale sau editabile." },
      { heading: "3. Păstrați filele private în Chrome", body: "O aplicație GPT pentru URL-uri publice nu poate folosi sesiunea browserului. Folosiți extensia Page 2 File când sursa este deschisă după autentificare." },
    ],
    externalLinkKey: "onePage2PowerpointGpt", primaryLabel: "Deschide One Page 2 PowerPoint",
    articleLinks: [{ slug: "webpage-to-powerpoint", label: "Convertiți o pagină web în PowerPoint" }, { slug: "sections-to-slides", label: "Convertiți secțiunile paginii în diapozitive" }], relatedRoutes: gptRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt", eyebrow: "Aplicație GPT · pagini web accesibile", title: "Convertiți paginile site-ului în PPTX cu Web 2 PowerPoint",
    description: "Web 2 PowerPoint găsește pagini accesibile, le convertește pe cele selectate și returnează un PPTX separat pentru fiecare pagină.",
    lead: "Furnizați Web 2 PowerPoint o adresă publică. Aplicația găsește pagini accesibile, convertește URL-urile selectate și returnează mai multe linkuri către prezentări.",
    sections: [
      { heading: "1. Furnizați site-ul", body: "Trimiteți URL-ul public inițial și definiți clar domeniul site-ului. Domeniile externe și paginile private nu sunt incluse fără avertizare." },
      { heading: "2. Confirmați paginile accesibile", body: "Verificați lista găsită înainte de conversie. Numai paginile selectate și accesibile sunt trimise serviciului Page 2 File." },
      { heading: "3. Descărcați fișiere PPTX separate", body: "Fiecare pagină convertită este returnată ca prezentare separată. Aplicația nu promite o prezentare combinată pentru întregul site." },
    ],
    externalLinkKey: "web2powerpointGpt", primaryLabel: "Deschide Web 2 PowerPoint",
    articleLinks: [{ slug: "website-to-powerpoint", label: "Convertiți un site în PowerPoint" }, { slug: "screenshot-vs-editable-powerpoint", label: "Diapozitive ca imagini sau editabile" }], relatedRoutes: gptRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf", eyebrow: "Export conversații AI", title: "Exportați o conversație din fila activă",
    description: "Exportați conversații acceptate din ChatGPT, Claude, Gemini și Grok în PDF cu extensia, previzualizare temporară și fără istoric.",
    lead: "Alegeți aspectul original sau un document simplu pentru citire. Extensia exportă conversația direct din fila activă a browserului.",
    sections: [
      { heading: "Interfețe de conversație acceptate", body: "Page 2 File acceptă ChatGPT, Claude, Gemini și Grok, plus o rezervă prudentă pentru alte conversații din browser.", points: ["ChatGPT", "Claude", "Gemini", "Grok"] },
      { heading: "Aspect original", body: "Gruparea mesajelor, blocurile de cod, tabelele și linkurile vizibile către surse sunt păstrate." },
      { heading: "Document clar", body: "Textul acceptat este adaptat într-un document mai liniștit, cu expeditorii și destinațiile linkurilor păstrate." },
      { heading: "Produs independent", body: "Page 2 File nu este afiliat, aprobat sau operat de nicio platformă AI acceptată." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Instalați extensia",
    articleLinks: [{ slug: "export-ai-chats-privately", label: "Exportați conversații AI în mod privat" }, { slug: "website-types-to-pdf-or-powerpoint", label: "Tipuri de site-uri care pot fi exportate" }], relatedRoutes: chatRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf", eyebrow: "Export din ChatGPT", title: "Exportați conversații ChatGPT lungi în PDF",
    description: "Exportați mesaje ChatGPT vizibile, cod, tabele, linkuri și conversații lungi din fila activă într-un PDF verificat.",
    lead: "Capturați conversația afișată în fila activă, verificați întreruperile de pagină și descărcați fișierul fără un cont Page 2 File.",
    sections: [
      { heading: "Ce se păstrează", body: "Mesajele, ordinea participanților, codul, tabelele și linkurile vizibile apar în previzualizare." },
      { heading: "Două stiluri de citire", body: "Păstrați ritmul vizual original sau alegeți un document mai liniștit pentru citire și imprimare." },
      { heading: "Limite specifice platformei", body: "Ramurile restrânse, mesajele neîncărcate și conținutul din afara DOM pot necesita deschidere sau încărcare înainte de captură." },
      { heading: "Fără afiliere oficială", body: "Page 2 File este un instrument independent și nu este aprobat sau operat de OpenAI ori ChatGPT." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Instalați pentru ChatGPT",
    articleLinks: [{ slug: "export-chatgpt-conversation-to-pdf", label: "Exportați o conversație ChatGPT în PDF" }, { slug: "export-ai-chats-privately", label: "Protejați datele previzualizării conversațiilor AI" }], relatedRoutes: chatRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf", eyebrow: "Export din Claude", title: "Salvați conversațiile Claude și artifacts vizibile",
    description: "Exportați conversații Claude, Markdown, cod, citate și contextul artifact vizibil din fila activă într-un PDF verificat.",
    lead: "După un clic explicit, extensia citește conversația activă și creează o previzualizare temporară pentru răspunsurile lungi.",
    sections: [
      { heading: "Răspunsurile lungi își păstrează structura", body: "Titlurile, listele, citatele și codul își păstrează ordinea de citire." },
      { heading: "Context artifact", body: "Titlurile vizibile și conținutul artifact disponibil pot fi randate fără a pretinde acces ascuns." },
      { heading: "Fără afiliere oficială", body: "Page 2 File este un instrument independent și nu este aprobat de Anthropic." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Instalați pentru Claude",
    articleLinks: [{ slug: "export-claude-chat-to-pdf", label: "Exportați o conversație Claude în PDF" }, { slug: "export-ai-chats-privately", label: "Protejați datele previzualizării conversațiilor AI" }], relatedRoutes: chatRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf", eyebrow: "Export din Gemini", title: "Transformați o conversație Gemini într-un PDF ușor de citit",
    description: "Exportați mesaje Gemini vizibile, carduri de surse, cod și citate din fila activă într-un PDF verificat cu previzualizare temporară.",
    lead: "Verificați cum apar cardurile de surse și imaginile vizibile înainte de a crea un document clar sau fidel vizual.",
    sections: [
      { heading: "Sursele rămân utile", body: "Citările și linkurile vizibile rămân accesibile când destinațiile sunt sigure." },
      { heading: "Imaginile urmează DOM-ul", body: "Numai elementele media disponibile paginii active pot apărea în previzualizarea temporară." },
      { heading: "Fără afiliere oficială", body: "Page 2 File este independent și nu este un produs Google sau Gemini." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Instalați pentru Gemini",
    articleLinks: [{ slug: "export-gemini-chat-to-pdf", label: "Exportați o conversație Gemini în PDF" }, { slug: "export-ai-chats-privately", label: "Protejați datele previzualizării conversațiilor AI" }], relatedRoutes: chatRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf", eyebrow: "Export din Grok", title: "Exportați conversații Grok cu sursele vizibile",
    description: "Exportați conversații Grok vizibile, linkuri X, postări citate și surse din fila activă într-un PDF verificat.",
    lead: "Capturați conversația activă, păstrați contextul vizibil al surselor și alegeți o previzualizare vizuală sau un document clar pentru citire.",
    sections: [
      { heading: "Ordine de citire care urmează conversația", body: "Mesajele și contextul postărilor citate rămân grupate, în loc să devină un singur flux de text nemarcat." },
      { heading: "Linkuri X vizibile", body: "URL-urile postărilor și sursele rămân accesibile când trec verificarea de siguranță." },
      { heading: "Fără afiliere oficială", body: "Page 2 File este un produs independent și nu este aprobat de xAI sau X." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Instalați pentru Grok",
    articleLinks: [{ slug: "export-other-ai-chats-to-pdf", label: "Exportați alte conversații AI în PDF" }, { slug: "export-ai-chats-privately", label: "Protejați datele previzualizării conversațiilor AI" }], relatedRoutes: chatRoutes,
  },
};
