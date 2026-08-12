import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const hungarianLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt", eyebrow: "GPT-alkalmazás · pontos URL-ek, PDF-ek vagy képernyőképek", title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "A Webpage to PDF Converter — Web2File pontos nyilvános címeket, weboldal-PDF-eket és képernyőképeket kezel Visual PDF vagy Interactive PDF formában.",
        lead: "Adjon meg egy pontos nyilvános URL-t, pontos URL-ek listáját, weboldal-PDF-et vagy teljes oldalas, illetve egymást követő képernyőképeket. Válassza a Visual PDF módot a webhely képernyőképként történő mentéséhez, vagy az Interactive PDF módot a kijelölhető szöveghez és kattintható linkekhez.",
        sections: [
            { heading: "1. Adjon meg egy vagy több URL-t", body: "Küldjön nyilvános URL-t, pontos nyilvános URL-ek listáját, meglévő weboldal-PDF-et vagy teljes oldalas, illetve egymást követő képernyőképeket. Minden weboldal külön PDF marad." },
            { heading: "2. Válassza ki a PDF típusát", body: "Válassza a Visual PDF módot a megjelenést előtérbe helyező képalapú eredményhez, vagy az Interactive PDF módot, ha a kijelölhető szöveg és a kattintható linkek fontosabbak. Egy URL-listára egyetlen mód vonatkozik." },
            { heading: "3. Csak a megadott oldalakat konvertálja", body: "Az alkalmazás csak a pontosan megadott nyilvános URL-eket nyitja meg. Nem jár be tartományokat vagy sitemapeket, nem keres oldalakat, nem követ belső linkeket, és nem kerüli meg a bejelentkezést, paywallt, CAPTCHA-t, földrajzi vagy más hozzáférési korlátozást." },
            { heading: "4. Dolgozzon fel PDF-eket és képernyőképeket", body: "A feltöltött képernyőképek felülről lefelé Visual PDF-fé állíthatók össze. A weboldal-PDF-ek feldolgozása nem talál ki hiányzó tartalmat; az Interactive PDF a meglévő szöveget, elrendezést, képeket és ellenőrzött linkeket részesíti előnyben." },
            { heading: "5. Kapjon személyre szabott útmutatót és ellenőrizze az eredményt", body: "Ha a közvetlen konvertálás nem érhető el vagy hiányos, az alkalmazás oldal-, böngésző- vagy natív exporthoz illő lépéseket ad. Ellenőrizze a hiányzó vagy levágott tartalmat, üres területeket, olvashatóságot, sorrendet, elrendezést, linkeket és a módhoz való hűséget." },
        ],
        externalLinkKey: "page2pdfGpt", primaryLabel: "GPT Webpage 2 PDF megnyitása",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Használati útmutató",
            firstStageDescription: "Adjon a GPT-alkalmazásnak egy működő URL-t.",
            firstStageLabel: "Küldjön URL-eket",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt", eyebrow: "GPT-alkalmazás · feltöltött HTML-fájl", title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "A HTML to PDF Converter — Web2File egy feltöltött HTML-fájlból ellenőrzött PDF-et készít, megőrizve az elrendezést, képeket, szöveget és hivatkozásokat.",
        lead: "Töltsön fel pontosan egy HTML-fájlt. A GPT HTML 2 PDF előnézetben ellenőrzi a megjelenést, betölti az elérhető stílusokat, betűtípusokat és képeket, majd ellenőrzött PDF-et készít kijelölhető szöveggel és kattintható hivatkozásokkal, ahol lehetséges.",
        sections: [
            { heading: "1. Töltsön fel pontosan egy HTML-fájlt", body: "Csatoljon egyetlen HTML-dokumentumot. A GPT-alkalmazás nem fogad el helyette URL-t, nem dolgoz fel több HTML-fájlt, nem térképez fel webhelyeket, nem követ további oldalakra mutató hivatkozásokat és nem egyesít dokumentumokat." },
            { heading: "2. Adja hozzá a stílusokat és erőforrásokat", body: "A beágyazott stílusok automatikusan használatba kerülnek az elérhető távoli stíluslapokkal, betűtípusokkal és képekkel együtt. Ha a HTML hiányzó helyi CSS-fájlra hivatkozik, a pontosabb eredményhez töltse fel a hozzá illő fájlt, vagy folytassa nélküle." },
            { heading: "3. Tekintse meg és őrizze meg a megjelenést", body: "A konvertálás előtt a HTML megfelelő asztali szélességben jelenik meg előnézetben. A PDF igyekszik megőrizni a témát, színeket, tipográfiát, térközöket, oszlopokat, kártyákat, képeket és a tartalom sorrendjét az interaktív vezérlők aktiválása nélkül." },
            { heading: "4. Készítsen egy olvasható PDF-et", body: "A GPT-alkalmazás egy PDF-et készít kijelölhető szöveggel és működő hivatkozásokkal, ahol lehetséges. A széles elrendezések fekvő tájolást vagy megfelelő oldalméretet használhatnak, hogy a fontos elemek ne szűküljenek össze, ne vágódjanak le és ne szakadjanak ketté." },
            { heading: "5. Ellenőrizze a kész fájlt", body: "Átadás előtt minden PDF ellenőrzésre kerül hiányzó tartalom, levágott elemek, megmagyarázhatatlan üres területek, olvashatóság, oldaltörések, képelhelyezés és támogatott hivatkozások szempontjából." },
        ],
        externalLinkKey: "html2pdfGpt", primaryLabel: "GPT HTML 2 PDF megnyitása",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Öt lépés a HTML-től a PDF-ig",
            firstStageDescription: "Adjon a GPT-alkalmazásnak egy HTML-fájlt.",
            firstStageLabel: "HTML feltöltése",
        },
    }
};
