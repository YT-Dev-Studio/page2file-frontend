import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

const gptRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "page2pdf-gpt", label: "One Page 2 PDF" },
  { route: "web2pdf-gpt", label: "Web 2 PDF" },
  { route: "html2pdf-gpt", label: "HTML 2 PDF" },
  { route: "one-page2powerpoint-gpt", label: "One Page 2 PowerPoint" },
  { route: "web2powerpoint-gpt", label: "Web 2 PowerPoint" },
];
const chatRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "export-ai-chat-to-pdf", label: "Minden AI-csevegés exportálása" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT PDF-be" },
  { route: "export-claude-to-pdf", label: "Claude PDF-be" },
  { route: "export-gemini-to-pdf", label: "Gemini PDF-be" },
  { route: "export-grok-to-pdf", label: "Grok PDF-be" },
];

export const hungarianLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt", eyebrow: "GPT-alkalmazás · egy nyilvános URL", title: "Nyilvános URL konvertálása PDF-be a One Page 2 PDF segítségével",
    description: "A One Page 2 PDF egy célzott GPT-alkalmazás, amely egy nyilvános weboldal URL-jét küldi konvertálásra, és egy PDF-et ad vissza az oldalról.",
    lead: "Adjon a GPT-alkalmazásnak egy nyilvános HTTPS URL-t. A One Page 2 PDF elküldi a címet a Page 2 File szolgáltatásnak, és egy letölthető PDF-et ad vissza a kért oldalról.",
    sections: [
      { heading: "1. Küldjön nyilvános URL-t", body: "Illessze be a konvertálandó oldal pontos HTTPS-címét. A kérés egy oldalra terjed ki, és nem indít keresést a teljes webhelyen." },
      { heading: "2. Kapjon egy PDF-et", body: "A GPT-alkalmazás egy, az oldalból készült PDF hivatkozását adja vissza. Használat előtt ellenőrizze a szöveget, hivatkozásokat, képeket és oldaltöréseket." },
      { heading: "3. Használja a megfelelő hatókört", body: "A One Page 2 PDF nem nyit meg bejelentkezett lapokat, és nem kerüli meg a hozzáférés-vezérlést. A bejelentkezés után már megnyitott oldalhoz használja a Page 2 File bővítményt." },
    ],
    externalLinkKey: "page2pdfGpt", primaryLabel: "One Page 2 PDF GPT-alkalmazás megnyitása",
    articleLinks: [{ slug: "save-webpage-as-pdf", label: "Weboldal mentése PDF-ként" }, { slug: "long-webpage-page-breaks", label: "Hosszú weboldalak oldaltöréseinek javítása" }], relatedRoutes: gptRoutes,
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt", eyebrow: "GPT-alkalmazás · elérhető weboldalak", title: "Webhelyoldalak konvertálása külön PDF-ekbe a Web 2 PDF segítségével",
    description: "A Web 2 PDF megkeresi a webhely elérhető oldalait, konvertálja a kiválasztottakat, és minden oldalhoz külön PDF-et ad vissza.",
    lead: "Adjon a Web 2 PDF-nek egy nyilvános címet. Az alkalmazás megtalálja az elérhető oldalakat, konvertálja a kiválasztott URL-eket, és több letöltési hivatkozást ad vissza — oldalanként egyet.",
    sections: [
      { heading: "1. Adja meg a webhelyet", body: "Küldje el a nyilvános kezdő URL-t. Az alkalmazás megtalálja az elérhető oldalakat, és konvertálás előtt láthatóvá teszi a kiválasztott hatókört." },
      { heading: "2. Ellenőrizze az oldallistát", body: "Erősítse meg, mely elérhető oldalak tartoznak a kéréshez. A bejelentkezést igénylő oldalak, blokkolt URL-ek és külső tartományok kimaradnak." },
      { heading: "3. Töltsön le külön PDF-eket", body: "Minden konvertált oldal saját PDF-ként érkezik. A Web 2 PDF nem ígér egyetlen egyesített webhelydokumentumot vagy scraping-adatkészletet." },
    ],
    externalLinkKey: "web2pdfGpt", primaryLabel: "Web 2 PDF GPT-alkalmazás megnyitása",
    articleLinks: [{ slug: "multi-page-website-to-pdf", label: "Többoldalas webhely konvertálása PDF-be" }, { slug: "website-types-to-pdf-or-powerpoint", label: "Exportálható webhelytípusok" }], relatedRoutes: gptRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt", eyebrow: "GPT-alkalmazás · feltöltött HTML-fájl", title: "Feltöltött HTML-fájl konvertálása a HTML 2 PDF segítségével",
    description: "A HTML 2 PDF feltöltött HTML-fájlt fogad, és áttekinthető PDF-et ad vissza, miközben a renderelési korlátokat láthatóvá teszi.",
    lead: "Töltsön fel HTML-fájlt a GPT-alkalmazásba. A HTML 2 PDF elszigetelten rendereli, és PDF-et ad vissza; ez a nyersfájl-munkafolyamat csak az alkalmazásban érhető el.",
    sections: [
      { heading: "1. Töltse fel a HTML-fájlt", body: "Csatolja azt a HTML-dokumentumot, amelynek feldolgozására jogosult. Ez a munkafolyamat feltöltött fájlból indul, nem nyilvános weboldal URL-jéből." },
      { heading: "2. Konvertálás PDF-be", body: "Az alkalmazás a feltöltött dokumentum PDF-változatát adja vissza. A külső erőforrások, szkriptek, egyéni betűtípusok és böngészőfunkciók eltérően jelenhetnek meg." },
      { heading: "3. Kezelje a HTML-t nem megbízható bemenetként", body: "A biztonságos renderelés elszigetelést igényel a privát hálózatoktól, helyi fájloktól és ellenőrizetlen szkriptektől. Az eredmény dokumentumkonvertálás, nem hosztolt webkód-futtatás." },
    ],
    externalLinkKey: "html2pdfGpt", primaryLabel: "HTML 2 PDF GPT-alkalmazás megnyitása",
    articleLinks: [{ slug: "html-to-pdf-safely", label: "HTML biztonságos konvertálása PDF-be" }, { slug: "webpage-capture-vs-web-scraping", label: "Oldalrögzítés és web scraping összehasonlítása" }], relatedRoutes: gptRoutes,
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt", eyebrow: "GPT-alkalmazás · egy nyilvános URL", title: "URL konvertálása PPTX-be a One Page 2 PowerPoint segítségével",
    description: "A One Page 2 PowerPoint egy célzott GPT-alkalmazás, amely egy nyilvános URL-t konvertál, és egy PPTX-prezentációt ad vissza az oldalról.",
    lead: "Adjon az alkalmazásnak egy nyilvános HTTPS URL-t. A One Page 2 PowerPoint elküldi az oldalt konvertálásra, és egy letölthető PPTX-prezentációt ad vissza.",
    sections: [
      { heading: "1. Küldjön nyilvános URL-t", body: "Illessze be az oldal pontos címét. Az alkalmazás kérésenként egy oldalt dolgoz fel, és nem térképezi fel a webhely többi részét." },
      { heading: "2. Kapjon egy PPTX-et", body: "Az oldal prezentációvá rendezve, egyetlen PowerPoint-fájlként érkezik. Ellenőrizze a diahatárokat, valamint a vizuális vagy szerkeszthető helyettesítéseket." },
      { heading: "3. A privát lapokat tartsa a Chrome-ban", body: "A nyilvános URL-ekhez készült GPT-alkalmazás nem használhatja a böngésző-munkamenetét. Használja a Page 2 File bővítményt, ha a forrás bejelentkezés után van megnyitva." },
    ],
    externalLinkKey: "onePage2PowerpointGpt", primaryLabel: "One Page 2 PowerPoint megnyitása",
    articleLinks: [{ slug: "webpage-to-powerpoint", label: "Weboldal konvertálása PowerPointba" }, { slug: "sections-to-slides", label: "Oldalszakaszok konvertálása diákká" }], relatedRoutes: gptRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt", eyebrow: "GPT-alkalmazás · elérhető weboldalak", title: "Webhelyoldalak konvertálása PPTX-be a Web 2 PowerPoint segítségével",
    description: "A Web 2 PowerPoint megtalálja az elérhető oldalakat, konvertálja a kiválasztottakat, és minden oldalhoz külön PPTX-fájlt ad vissza.",
    lead: "Adjon a Web 2 PowerPointnak egy nyilvános címet. Az alkalmazás megtalálja az elérhető oldalakat, konvertálja a kiválasztott URL-eket, és több prezentációs hivatkozást ad vissza.",
    sections: [
      { heading: "1. Adja meg a webhelyet", body: "Küldje el a nyilvános kezdő URL-t, és egyértelműen tartsa meg a webhely hatókörét. Külső tartományok és privát oldalak nem kerülnek be észrevétlenül." },
      { heading: "2. Erősítse meg az elérhető oldalakat", body: "Konvertálás előtt ellenőrizze a megtalált listát. Csak a kiválasztott és elérhető oldalak kerülnek a Page 2 File szolgáltatáshoz." },
      { heading: "3. Töltsön le külön PPTX-fájlokat", body: "Minden konvertált oldal saját PowerPoint-prezentációként érkezik. Az alkalmazás nem ígér egyetlen egyesített prezentációt az egész webhelyhez." },
    ],
    externalLinkKey: "web2powerpointGpt", primaryLabel: "Web 2 PowerPoint megnyitása",
    articleLinks: [{ slug: "website-to-powerpoint", label: "Webhely konvertálása PowerPointba" }, { slug: "screenshot-vs-editable-powerpoint", label: "Képdiák vagy szerkeszthető diák" }], relatedRoutes: gptRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf", eyebrow: "AI-csevegés exportálása", title: "Beszélgetés exportálása az aktív lapról",
    description: "Exportáljon támogatott ChatGPT-, Claude-, Gemini- és Grok-beszélgetéseket PDF-be a bővítménnyel, ideiglenes előnézettel és előzmények nélkül.",
    lead: "Válassza az eredeti megjelenést vagy egy egyszerű olvasási dokumentumot. A bővítmény közvetlenül az aktív böngészőlapról exportálja a csevegést.",
    sections: [
      { heading: "Támogatott csevegőfelületek", body: "A Page 2 File támogatja a ChatGPT, Claude, Gemini és Grok felületét, valamint óvatos tartalékmegoldást kínál más böngészős csevegésekhez.", points: ["ChatGPT", "Claude", "Gemini", "Grok"] },
      { heading: "Eredeti megjelenés", body: "Az üzenetcsoportosítás, kódblokkok, táblázatok és látható forráshivatkozások megmaradnak." },
      { heading: "Áttekinthető dokumentum", body: "A támogatott szöveg nyugodtabb dokumentummá alakul, a küldők és hivatkozáscélok megőrzésével." },
      { heading: "Független termék", body: "A Page 2 File nem áll kapcsolatban egyetlen támogatott AI-platformmal sem, és azok nem hagyták jóvá vagy üzemeltetik." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Bővítmény telepítése",
    articleLinks: [{ slug: "export-ai-chats-privately", label: "AI-csevegések privát exportálása" }, { slug: "website-types-to-pdf-or-powerpoint", label: "Exportálható webhelytípusok" }], relatedRoutes: chatRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf", eyebrow: "Exportálás a ChatGPT-ből", title: "Hosszú ChatGPT-beszélgetések exportálása PDF-be",
    description: "Exportáljon látható ChatGPT-üzeneteket, kódot, táblázatokat, hivatkozásokat és hosszú beszélgetéseket az aktív lapról egy ellenőrzött PDF-be.",
    lead: "Rögzítse az aktív lapon látható beszélgetést, ellenőrizze az oldaltöréseket, és töltse le a fájlt Page 2 File-fiók nélkül.",
    sections: [
      { heading: "Mi marad meg", body: "Az üzenetek, a résztvevők sorrendje, a kód, a táblázatok és a látható hivatkozások megjelennek az előnézetben." },
      { heading: "Két olvasási stílus", body: "Tartsa meg az eredeti vizuális ritmust, vagy válasszon nyugodtabb dokumentumot olvasáshoz és nyomtatáshoz." },
      { heading: "Platformkorlátok", body: "Az összecsukott ágakat, be nem töltött üzeneteket és DOM-on kívüli tartalmat rögzítés előtt meg kell nyitni vagy be kell tölteni." },
      { heading: "Nincs hivatalos kapcsolat", body: "A Page 2 File független eszköz, amelyet az OpenAI vagy a ChatGPT nem hagyott jóvá és nem üzemeltet." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Telepítés a ChatGPT-hez",
    articleLinks: [{ slug: "export-chatgpt-conversation-to-pdf", label: "ChatGPT-beszélgetés exportálása PDF-be" }, { slug: "export-ai-chats-privately", label: "AI-csevegés előnézeti adatainak védelme" }], relatedRoutes: chatRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf", eyebrow: "Exportálás a Claude-ból", title: "Claude-beszélgetések és látható artifacts mentése",
    description: "Exportáljon Claude-beszélgetéseket, Markdown-szöveget, kódot, idézeteket és látható artifact-környezetet az aktív lapról ellenőrzött PDF-be.",
    lead: "Egyértelmű kattintás után a bővítmény beolvassa az aktív beszélgetést, és ideiglenes előnézetet hoz létre a hosszú válaszokhoz.",
    sections: [
      { heading: "A hosszú válaszok megőrzik szerkezetüket", body: "A címsorok, listák, idézetek és kód megtartják olvasási sorrendjüket." },
      { heading: "Artifact-környezet", body: "A látható címek és elérhető artifact-tartalom rejtett hozzáférés állítása nélkül renderelhető." },
      { heading: "Nincs hivatalos kapcsolat", body: "A Page 2 File független eszköz, amelyet az Anthropic nem hagyott jóvá." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Telepítés a Claude-hoz",
    articleLinks: [{ slug: "export-claude-chat-to-pdf", label: "Claude-csevegés exportálása PDF-be" }, { slug: "export-ai-chats-privately", label: "AI-csevegés előnézeti adatainak védelme" }], relatedRoutes: chatRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf", eyebrow: "Exportálás a Geminiből", title: "Gemini-beszélgetés átalakítása olvasható PDF-be",
    description: "Exportáljon látható Gemini-üzeneteket, forráskártyákat, kódot és idézeteket az aktív lapról egy ellenőrzött PDF-be, ideiglenes előnézettel.",
    lead: "Ellenőrizze a forráskártyák és látható képek megjelenését, mielőtt áttekinthető vagy vizuálisan hű dokumentumot hoz létre.",
    sections: [
      { heading: "A források hasznosak maradnak", body: "A látható hivatkozások és idézetek kattinthatók maradnak, ha céljuk biztonságos." },
      { heading: "A képek követik a DOM-ot", body: "Az ideiglenes előnézetben csak az aktív oldal számára elérhető média jelenhet meg." },
      { heading: "Nincs hivatalos kapcsolat", body: "A Page 2 File független, és nem a Google vagy a Gemini terméke." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Telepítés a Geminihez",
    articleLinks: [{ slug: "export-gemini-chat-to-pdf", label: "Gemini-csevegés exportálása PDF-be" }, { slug: "export-ai-chats-privately", label: "AI-csevegés előnézeti adatainak védelme" }], relatedRoutes: chatRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf", eyebrow: "Exportálás a Grokból", title: "Grok-beszélgetések exportálása látható forrásokkal",
    description: "Exportáljon látható Grok-beszélgetéseket, X-hivatkozásokat, idézett bejegyzéseket és forrásokat az aktív lapról egy ellenőrzött PDF-be.",
    lead: "Rögzítse az aktív beszélgetést, őrizze meg a látható forráskörnyezetet, és válasszon vizuális előnézetet vagy áttekinthető olvasási dokumentumot.",
    sections: [
      { heading: "A beszélgetést követő olvasási sorrend", body: "Az üzenetek és idézett bejegyzések környezete csoportosítva marad, nem válik egyetlen jelöletlen szövegfolyammá." },
      { heading: "Látható X-hivatkozások", body: "A bejegyzés-URL-ek és források kattinthatók maradnak, ha átmennek a biztonsági ellenőrzésen." },
      { heading: "Nincs hivatalos kapcsolat", body: "A Page 2 File független termék, amelyet az xAI vagy az X nem hagyott jóvá." },
    ],
    externalLinkKey: "chromeExtension", primaryLabel: "Telepítés a Grokhoz",
    articleLinks: [{ slug: "export-other-ai-chats-to-pdf", label: "Más AI-csevegések exportálása PDF-be" }, { slug: "export-ai-chats-privately", label: "AI-csevegés előnézeti adatainak védelme" }], relatedRoutes: chatRoutes,
  },
};
