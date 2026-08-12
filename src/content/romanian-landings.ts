import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const romanianLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt", eyebrow: "Aplicație GPT · URL-uri exacte, PDF-uri sau capturi", title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File procesează adrese publice exacte, PDF-uri de pagini și capturi ca Visual PDF sau Interactive PDF.",
        lead: "Furnizați un URL public exact, o listă de URL-uri exacte, un PDF al unei pagini web sau capturi complete ori consecutive. Alegeți Visual PDF pentru a salva site-ul sub formă de capturi sau Interactive PDF pentru text selectabil și linkuri active.",
        sections: [
            { heading: "1. Indicați unul sau mai multe URL-uri", body: "Trimiteți un URL public, o listă de URL-uri publice exacte, un PDF existent al unei pagini web sau capturi complete ori consecutive. Fiecare pagină web rămâne într-un PDF separat." },
            { heading: "2. Alegeți tipul PDF", body: "Alegeți Visual PDF pentru un rezultat bazat pe imagini care prioritizează aspectul paginii sau Interactive PDF când textul selectabil și linkurile active sunt mai importante. Un singur mod se aplică întregii liste de URL-uri." },
            { heading: "3. Convertiți numai paginile furnizate", body: "Aplicația deschide numai URL-urile publice exacte indicate. Nu explorează domenii sau sitemap-uri, nu descoperă pagini, nu urmează linkuri interne și nu ocolește autentificarea, paywall-urile, CAPTCHA, restricțiile geografice sau alte controale." },
            { heading: "4. Procesați PDF-uri și capturi", body: "Capturile încărcate pot fi asamblate de sus în jos într-un Visual PDF. PDF-urile paginilor web sunt procesate fără a inventa conținut lipsă; Interactive PDF prioritizează textul, aspectul, imaginile și linkurile verificate existente." },
            { heading: "5. Primiți instrucțiuni adaptate și verificați rezultatul", body: "Dacă conversia directă nu este disponibilă sau este incompletă, aplicația oferă pași specifici paginii, browserului sau exportului nativ. Verificați conținutul lipsă sau tăiat, zonele goale, lizibilitatea, ordinea, aspectul, linkurile și fidelitatea modului." },
        ],
        externalLinkKey: "page2pdfGpt", primaryLabel: "Deschideți GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Instrucțiuni de utilizare",
            firstStageDescription: "Furnizați aplicației GPT un URL funcțional.",
            firstStageLabel: "Trimiteți URL-uri",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt", eyebrow: "Aplicație GPT · fișier HTML încărcat", title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File transformă un fișier HTML încărcat într-un PDF verificat, păstrând aspectul, imaginile, textul și linkurile.",
        lead: "Încărcați exact un fișier HTML. GPT HTML 2 PDF previzualizează designul, încarcă stilurile, fonturile și imaginile accesibile și creează un PDF verificat, cu text selectabil și linkuri pe care se poate da clic atunci când este posibil.",
        sections: [
            { heading: "1. Încărcați exact un fișier HTML", body: "Atașați un singur document HTML. Aplicația GPT nu acceptă un URL în locul lui, nu procesează mai multe fișiere HTML, nu explorează site-uri, nu urmează linkuri către pagini suplimentare și nu combină documente." },
            { heading: "2. Includeți stilurile și resursele", body: "Stilurile inline și încorporate sunt utilizate automat împreună cu foile de stil, fonturile și imaginile externe accesibile. Dacă HTML-ul indică un fișier CSS local lipsă, încărcați fișierul potrivit pentru un rezultat mai fidel sau continuați fără el." },
            { heading: "3. Previzualizați și păstrați designul", body: "HTML-ul este previzualizat la o lățime potrivită pentru desktop înainte de conversie. PDF-ul urmărește să păstreze tema, culorile, tipografia, spațierea, coloanele, cardurile, imaginile și ordinea conținutului fără a activa comenzile interactive." },
            { heading: "4. Creați un PDF lizibil", body: "Aplicația GPT creează un PDF cu text selectabil și hyperlinkuri funcționale atunci când este posibil. Aspectele late pot folosi orientarea peisaj sau un format adecvat, pentru ca elementele importante să nu fie înghesuite, tăiate sau împărțite." },
            { heading: "5. Verificați fișierul final", body: "Fiecare PDF este verificat înainte de livrare pentru conținut lipsă, componente tăiate, zone goale neexplicate, lizibilitate, întreruperi de pagină, poziționarea imaginilor și linkurile acceptate." },
        ],
        externalLinkKey: "html2pdfGpt", primaryLabel: "Deschide GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Cinci pași de la HTML la PDF",
            firstStageDescription: "Furnizați aplicației GPT un fișier HTML.",
            firstStageLabel: "Încărcați HTML",
        },
    }
};
