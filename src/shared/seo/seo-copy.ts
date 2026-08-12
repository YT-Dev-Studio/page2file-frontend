import type { Locale } from "@/shared/i18n/locales";

type SeoCopy = { title: string; description: string };
export type SeoRouteKey = "home" | "guide" | "preview" | "download" | "notFound";

const home: Record<Locale, SeoCopy> = {
  en: { title: "Webpage to PDF Chrome Extension", description: "Save the current Chrome tab, a local HTML file, or a supported AI and messenger chat as PDF with selectable text or an accurate visual copy." },
  ru: { title: "Расширение Chrome для сохранения страниц в PDF", description: "Сохраняйте текущую вкладку Chrome, локальный HTML-файл или поддерживаемый AI-чат и веб-мессенджер в PDF с текстом либо точным внешним видом." },
  de: { title: "Chrome-Erweiterung für Webseiten als PDF", description: "Speichern Sie den aktuellen Chrome-Tab, lokale HTML-Dateien sowie unterstützte AI-Chats und Web-Messenger als Textdokument oder originalgetreues PDF." },
  fr: { title: "Extension Chrome pour enregistrer une page en PDF", description: "Enregistrez l’onglet Chrome actuel, un fichier HTML local ou une conversation compatible en PDF, avec texte sélectionnable ou copie visuelle fidèle." },
  es: { title: "Extensión de Chrome para guardar páginas en PDF", description: "Guarda la pestaña actual de Chrome, un archivo HTML local o un chat compatible como PDF con texto seleccionable o una copia visual fiel." },
  nl: { title: "Chrome-extensie om webpagina's als PDF op te slaan", description: "Sla het huidige Chrome-tabblad, lokale HTML-bestanden en ondersteunde AI- of messengerchats op als PDF met selecteerbare tekst of een nauwkeurige kopie." },
  pt: { title: "Extensão Chrome para guardar páginas em PDF", description: "Guarde o separador atual do Chrome, um ficheiro HTML local ou uma conversa compatível em PDF, com texto selecionável ou uma cópia visual fiel." },
  it: { title: "Estensione Chrome per salvare pagine in PDF", description: "Salva la scheda Chrome corrente, un file HTML locale o una chat supportata come PDF con testo selezionabile oppure come copia visiva fedele." },
  pl: { title: "Rozszerzenie Chrome do zapisywania stron jako PDF", description: "Zapisuj bieżącą kartę Chrome, lokalny plik HTML albo obsługiwany czat jako PDF z zaznaczalnym tekstem lub wiernym wyglądem strony." },
  cs: { title: "Rozšíření Chrome pro ukládání stránek do PDF", description: "Uložte aktuální kartu Chromu, místní soubor HTML nebo podporovaný chat do PDF s označitelným textem nebo věrnou kopií vzhledu." },
  sv: { title: "Chrome-tillägg för att spara webbsidor som PDF", description: "Spara den aktuella Chrome-fliken, en lokal HTML-fil eller en chatt som stöds som PDF med markerbar text eller en noggrann visuell kopia." },
  no: { title: "Chrome-utvidelse for å lagre nettsider som PDF", description: "Lagre den aktive Chrome-fanen, en lokal HTML-fil eller en støttet chat som PDF med markerbar tekst eller en nøyaktig visuell kopi." },
  da: { title: "Chrome-udvidelse til at gemme websider som PDF", description: "Gem den aktuelle Chrome-fane, en lokal HTML-fil eller en understøttet chat som PDF med markerbar tekst eller en nøjagtig visuel kopi." },
  fi: { title: "Chrome-laajennus verkkosivujen tallentamiseen PDF:ksi", description: "Tallenna nykyinen Chrome-välilehti, paikallinen HTML-tiedosto tai tuettu keskustelu PDF:ksi valittavana tekstinä tai tarkkana kuvakopiona." },
  ro: { title: "Extensie Chrome pentru salvarea paginilor ca PDF", description: "Salvează fila Chrome curentă, un fișier HTML local sau o conversație compatibilă ca PDF cu text selectabil ori copie vizuală fidelă." },
  hu: { title: "Chrome-bővítmény weboldalak PDF-mentéséhez", description: "Mentse az aktuális Chrome-lapot, helyi HTML-fájlt vagy támogatott csevegést PDF-be kijelölhető szöveggel vagy pontos vizuális másolatként." },
};

const guide: Record<Locale, SeoCopy> = {
  en: { title: "How to Save a Webpage as PDF in Chrome", description: "Open a webpage, local HTML file, or supported chat, choose a Page 2 File mode, preview the PDF in Chrome, check it, and save it." },
  ru: { title: "Как сохранить веб-страницу в PDF в Chrome", description: "Откройте страницу, локальный HTML-файл или поддерживаемый чат, выберите режим Page 2 File, проверьте PDF в просмотрщике Chrome и сохраните его." },
  de: { title: "Webseite in Chrome als PDF speichern", description: "Öffnen Sie eine Webseite, lokale HTML-Datei oder einen unterstützten Chat, wählen Sie den Modus, prüfen Sie das PDF in Chrome und speichern Sie es." },
  fr: { title: "Enregistrer une page web en PDF dans Chrome", description: "Ouvrez une page, un fichier HTML local ou un chat compatible, choisissez le mode Page 2 File, vérifiez le PDF dans Chrome puis enregistrez-le." },
  es: { title: "Cómo guardar una página web en PDF en Chrome", description: "Abre una página, un archivo HTML local o un chat compatible, elige el modo de Page 2 File, revisa el PDF en Chrome y guárdalo." },
  nl: { title: "Een webpagina als PDF opslaan in Chrome", description: "Open een webpagina, lokaal HTML-bestand of ondersteunde chat, kies de Page 2 File-modus, controleer de PDF in Chrome en sla hem op." },
  pt: { title: "Como guardar uma página web em PDF no Chrome", description: "Abra uma página, um ficheiro HTML local ou uma conversa compatível, escolha o modo Page 2 File, verifique o PDF no Chrome e guarde-o." },
  it: { title: "Come salvare una pagina web in PDF con Chrome", description: "Apri una pagina, un file HTML locale o una chat supportata, scegli il modo Page 2 File, controlla il PDF in Chrome e salvalo." },
  pl: { title: "Jak zapisać stronę jako PDF w Chrome", description: "Otwórz stronę, lokalny plik HTML lub obsługiwany czat, wybierz tryb Page 2 File, sprawdź PDF w Chrome i zapisz go." },
  cs: { title: "Jak uložit webovou stránku do PDF v Chromu", description: "Otevřete stránku, místní soubor HTML nebo podporovaný chat, zvolte režim Page 2 File, zkontrolujte PDF v Chromu a uložte jej." },
  sv: { title: "Så sparar du en webbsida som PDF i Chrome", description: "Öppna en webbsida, lokal HTML-fil eller chatt som stöds, välj Page 2 File-läge, kontrollera PDF-filen i Chrome och spara den." },
  no: { title: "Slik lagrer du en nettside som PDF i Chrome", description: "Åpne en nettside, lokal HTML-fil eller støttet chat, velg Page 2 File-modus, kontroller PDF-filen i Chrome og lagre den." },
  da: { title: "Sådan gemmer du en webside som PDF i Chrome", description: "Åbn en webside, lokal HTML-fil eller understøttet chat, vælg Page 2 File-tilstand, kontrollér PDF-filen i Chrome, og gem den." },
  fi: { title: "Verkkosivun tallentaminen PDF:ksi Chromessa", description: "Avaa verkkosivu, paikallinen HTML-tiedosto tai tuettu keskustelu, valitse Page 2 File -tila, tarkista PDF Chromessa ja tallenna se." },
  ro: { title: "Cum salvezi o pagină web ca PDF în Chrome", description: "Deschide o pagină, un fișier HTML local sau o conversație compatibilă, alege modul Page 2 File, verifică PDF-ul în Chrome și salvează-l." },
  hu: { title: "Weboldal mentése PDF-be a Chrome-ban", description: "Nyisson meg egy weboldalt, helyi HTML-fájlt vagy támogatott csevegést, válasszon módot, ellenőrizze a PDF-et a Chrome-ban, majd mentse." },
};

const technical = (locale: Locale, key: "preview" | "download"): SeoCopy => ({
  title: key === "preview" ? "Page 2 File PDF preview" : "Page 2 File PDF download",
  description: `${home[locale].title}. Temporary technical page for a PDF created by the Chrome extension.`,
});

const notFound: Record<Locale, SeoCopy> = {
  en: {
    title: "Page 2 File — Page not found",
    description: "The requested page is not available. Return to the Page 2 File Chrome extension overview or open the instructions.",
  },
  ru: {
    title: "Page 2 File — Страница не найдена",
    description: "Запрошенная страница недоступна. Вернитесь к описанию расширения Page 2 File для Chrome или откройте инструкцию.",
  },
  de: {
    title: "Page 2 File — Seite nicht gefunden",
    description: "Die angeforderte Seite ist nicht verfügbar. Kehren Sie zur Übersicht der Page 2 File Chrome-Erweiterung zurück oder öffnen Sie die Anleitung.",
  },
  fr: {
    title: "Page 2 File — Page introuvable",
    description: "La page demandée n’est pas disponible. Revenez à la présentation de l’extension Chrome Page 2 File ou ouvrez le guide d’utilisation.",
  },
  es: {
    title: "Page 2 File — Página no encontrada",
    description: "La página solicitada no está disponible. Vuelve a la presentación de la extensión Page 2 File para Chrome o abre la guía de uso.",
  },
  nl: {
    title: "Page 2 File — Pagina niet gevonden",
    description: "De opgevraagde pagina is niet beschikbaar. Ga terug naar het overzicht van de Page 2 File Chrome-extensie of open de handleiding.",
  },
  pt: {
    title: "Page 2 File — Página não encontrada",
    description: "A página pedida não está disponível. Volte à apresentação da extensão Page 2 File para Chrome ou abra o guia de utilização.",
  },
  it: {
    title: "Page 2 File — Pagina non trovata",
    description: "La pagina richiesta non è disponibile. Torna alla presentazione dell’estensione Page 2 File per Chrome oppure apri la guida all’uso.",
  },
  pl: {
    title: "Page 2 File — Nie znaleziono strony",
    description: "Żądana strona jest niedostępna. Wróć do opisu rozszerzenia Page 2 File dla Chrome albo otwórz instrukcję obsługi.",
  },
  cs: {
    title: "Page 2 File — Stránka nebyla nalezena",
    description: "Požadovaná stránka není dostupná. Vraťte se k přehledu rozšíření Page 2 File pro Chrome nebo otevřete návod k použití.",
  },
  sv: {
    title: "Page 2 File — Sidan hittades inte",
    description: "Den begärda sidan är inte tillgänglig. Gå tillbaka till översikten över Chrome-tillägget Page 2 File eller öppna guiden.",
  },
  no: {
    title: "Page 2 File — Fant ikke siden",
    description: "Siden du ba om, er ikke tilgjengelig. Gå tilbake til oversikten over Chrome-utvidelsen Page 2 File, eller åpne veiledningen.",
  },
  da: {
    title: "Page 2 File — Siden blev ikke fundet",
    description: "Den ønskede side er ikke tilgængelig. Gå tilbage til oversigten over Chrome-udvidelsen Page 2 File, eller åbn vejledningen.",
  },
  fi: {
    title: "Page 2 File — Sivua ei löytynyt",
    description: "Pyydetty sivu ei ole käytettävissä. Palaa Page 2 File -Chrome-laajennuksen esittelyyn tai avaa käyttöohje.",
  },
  ro: {
    title: "Page 2 File — Pagina nu a fost găsită",
    description: "Pagina solicitată nu este disponibilă. Revino la prezentarea extensiei Page 2 File pentru Chrome sau deschide ghidul de utilizare.",
  },
  hu: {
    title: "Page 2 File — Az oldal nem található",
    description: "A kért oldal nem érhető el. Térjen vissza a Page 2 File Chrome-bővítmény áttekintéséhez, vagy nyissa meg az útmutatót.",
  },
};

export const getSeoCopy = (locale: Locale, key: SeoRouteKey): SeoCopy => {
  if (key === "home") return home[locale];
  if (key === "guide") return guide[locale];
  if (key === "notFound") return notFound[locale];
  return technical(locale, key);
};
