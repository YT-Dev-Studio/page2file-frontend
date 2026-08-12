import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const czechLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "Aplikace GPT · přesné URL, PDF nebo snímky",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File zpracuje přesné veřejné URL, PDF webových stránek a snímky jako Visual PDF nebo Interactive PDF.",
        lead: "Zadejte přesnou veřejnou URL, seznam přesných URL, PDF webové stránky nebo celostránkové či navazující snímky. Zvolte Visual PDF pro uložení webu jako snímků nebo Interactive PDF pro označitelný text a klikací odkazy.",
        sections: [
            { heading: "1. Zadejte jednu nebo více URL", body: "Odešlete veřejnou URL, seznam přesných veřejných URL, existující PDF webové stránky nebo celostránkové či navazující snímky. Každá webová stránka zůstane v samostatném PDF." },
            { heading: "2. Zvolte typ PDF", body: "Zvolte Visual PDF pro obrazový výsledek upřednostňující vzhled stránky, nebo Interactive PDF, pokud jsou důležitější označitelný text a klikací odkazy. Pro celý seznam URL platí jeden režim." },
            { heading: "3. Převádějte pouze zadané stránky", body: "Aplikace otevírá jen přesné veřejné URL. Neprochází domény ani sitemapy, nevyhledává stránky, nenásleduje interní odkazy a neobchází přihlášení, paywally, CAPTCHA, geografická ani jiná omezení přístupu." },
            { heading: "4. Zpracujte PDF a snímky", body: "Nahrané snímky lze sestavit shora dolů do Visual PDF. PDF webových stránek se zpracují bez vymýšlení chybějícího obsahu; Interactive PDF upřednostňuje existující text, rozvržení, obrázky a ověřené odkazy." },
            { heading: "5. Získejte vhodný návod a ověřte výsledek", body: "Pokud přímý převod není dostupný nebo je neúplný, aplikace poskytne postup pro konkrétní stránku, prohlížeč nebo nativní export. Zkontrolujte chybějící či oříznutý obsah, prázdná místa, čitelnost, pořadí, rozvržení, odkazy a věrnost režimu." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Otevřít GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Návod k použití",
            firstStageDescription: "Zadejte aplikaci GPT funkční URL.",
            firstStageLabel: "Odešlete adresy URL",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "Aplikace GPT · nahraný soubor HTML",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File převede jeden nahraný soubor HTML do ověřeného PDF a zachová rozvržení, obrázky, text i odkazy.",
        lead: "Nahrajte právě jeden soubor HTML. GPT HTML 2 PDF zobrazí náhled vzhledu, načte dostupné styly, písma a obrázky a vytvoří ověřené PDF s označitelným textem a klikacími odkazy, pokud je to možné.",
        sections: [
            { heading: "1. Nahrajte právě jeden soubor HTML", body: "Přiložte jediný dokument HTML. Aplikace GPT místo něj nepřijímá URL, nezpracovává více souborů HTML, neprochází weby, nenásleduje odkazy na další stránky a neslučuje dokumenty." },
            { heading: "2. Zahrňte styly a zdroje", body: "Vložené styly se automaticky použijí spolu s dostupnými vzdálenými styly, písmy a obrázky. Pokud HTML odkazuje na chybějící místní soubor CSS, nahrajte odpovídající soubor pro věrnější výsledek nebo pokračujte bez něj." },
            { heading: "3. Zkontrolujte náhled a zachovejte vzhled", body: "Před převodem se HTML zobrazí v náhledu s vhodnou šířkou plochy. PDF se snaží zachovat motiv, barvy, typografii, mezery, sloupce, karty, obrázky a pořadí obsahu bez aktivace interaktivních ovládacích prvků." },
            { heading: "4. Vytvořte jedno čitelné PDF", body: "Aplikace GPT vytvoří jedno PDF s označitelným textem a funkčními odkazy, pokud je to možné. Široká rozvržení mohou použít orientaci na šířku nebo vhodný formát, aby se důležité prvky nestlačily, neořízly ani nerozdělily." },
            { heading: "5. Zkontrolujte hotový soubor", body: "Každé PDF se před předáním kontroluje na chybějící obsah, oříznuté prvky, nevysvětlené prázdné plochy, čitelnost, zalomení stránek, umístění obrázků a podporované odkazy." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Otevřít GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Pět kroků od HTML k PDF",
            firstStageDescription: "Předejte aplikaci GPT jeden soubor HTML.",
            firstStageLabel: "Nahrát HTML",
        },
    }
};
