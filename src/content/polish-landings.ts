import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const polishLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "Aplikacja GPT · dokładne URL-e, PDF-y lub zrzuty ekranu",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File przetwarza dokładne publiczne adresy, pliki PDF stron i zrzuty jako Visual PDF lub Interactive PDF.",
        lead: "Podaj dokładny publiczny URL, listę dokładnych URL-i, PDF strony internetowej albo pełne lub kolejne zrzuty ekranu. Wybierz Visual PDF, aby zapisać witrynę jako zrzuty, lub Interactive PDF dla zaznaczanego tekstu i aktywnych łączy.",
        sections: [
            { heading: "1. Podaj jeden lub więcej adresów URL", body: "Wyślij publiczny URL, listę dokładnych publicznych URL-i, istniejący PDF strony albo pełne lub kolejne zrzuty ekranu. Każda strona pozostaje osobnym plikiem PDF." },
            { heading: "2. Wybierz typ PDF", body: "Wybierz Visual PDF dla wyniku opartego na obrazach, który stawia wygląd strony na pierwszym miejscu, albo Interactive PDF, gdy ważniejsze są zaznaczany tekst i aktywne łącza. Jeden tryb obowiązuje dla całej listy URL-i." },
            { heading: "3. Konwertuj tylko podane strony", body: "Aplikacja otwiera wyłącznie dokładne publiczne URL-e. Nie przeszukuje domen ani sitemap, nie odkrywa stron, nie podąża za linkami wewnętrznymi i nie omija logowania, paywalli, CAPTCHA, ograniczeń geograficznych ani innych zabezpieczeń." },
            { heading: "4. Przetwarzaj PDF-y i zrzuty ekranu", body: "Przesłane zrzuty można połączyć od góry do dołu w Visual PDF. PDF-y stron są przetwarzane bez wymyślania brakującej treści; Interactive PDF zachowuje przede wszystkim istniejący tekst, układ, obrazy i zweryfikowane łącza." },
            { heading: "5. Uzyskaj dopasowane instrukcje i sprawdź wynik", body: "Jeśli bezpośrednia konwersja jest niedostępna lub niepełna, aplikacja podaje instrukcje właściwe dla strony, przeglądarki lub natywnego eksportu. Sprawdź brakującą lub uciętą treść, puste obszary, czytelność, kolejność, układ, łącza i zgodność z trybem." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Otwórz GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Instrukcja użytkowania",
            firstStageDescription: "Przekaż aplikacji GPT działający adres URL.",
            firstStageLabel: "Wyślij adresy URL",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "Aplikacja GPT · przesłany plik HTML",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File zmienia jeden przesłany plik HTML w sprawdzony PDF, zachowując układ, obrazy, tekst i odnośniki.",
        lead: "Prześlij dokładnie jeden plik HTML. GPT HTML 2 PDF wyświetla podgląd projektu, ładuje dostępne style, czcionki i obrazy, a następnie tworzy sprawdzony PDF z zaznaczalnym tekstem i klikalnymi odnośnikami, gdy jest to możliwe.",
        sections: [
            { heading: "1. Prześlij dokładnie jeden plik HTML", body: "Dołącz jeden dokument HTML. Aplikacja GPT nie przyjmuje zamiast niego adresu URL, nie przetwarza wielu plików HTML, nie przeszukuje witryn, nie podąża za odnośnikami do dodatkowych stron i nie scala dokumentów." },
            { heading: "2. Dołącz style i zasoby", body: "Style wbudowane są używane automatycznie wraz z dostępnymi zdalnymi arkuszami stylów, czcionkami i obrazami. Jeśli HTML odwołuje się do brakującego lokalnego pliku CSS, prześlij pasujący plik dla wierniejszego wyniku albo kontynuuj bez niego." },
            { heading: "3. Wyświetl podgląd i zachowaj projekt", body: "Przed konwersją HTML jest wyświetlany z odpowiednią szerokością pulpitu. PDF ma zachować motyw, kolory, typografię, odstępy, kolumny, karty, obrazy i kolejność treści bez uruchamiania interaktywnych elementów sterujących." },
            { heading: "4. Utwórz jeden czytelny PDF", body: "Aplikacja GPT tworzy jeden PDF z zaznaczalnym tekstem i działającymi hiperłączami, gdy jest to możliwe. Szerokie układy mogą używać orientacji poziomej lub odpowiedniego formatu, aby ważne elementy nie były ściskane, przycinane ani dzielone." },
            { heading: "5. Sprawdź gotowy plik", body: "Każdy PDF jest przed wydaniem sprawdzany pod kątem brakującej treści, przyciętych elementów, niewyjaśnionych pustych obszarów, czytelności, podziałów stron, ułożenia obrazów i obsługiwanych odnośników." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Otwórz GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Pięć kroków od HTML do PDF",
            firstStageDescription: "Przekaż aplikacji GPT jeden plik HTML.",
            firstStageLabel: "Prześlij HTML",
        },
    }
};
