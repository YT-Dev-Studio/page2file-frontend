import type { HomeCopy } from "./home-copy";

export const homeCopyPl: HomeCopy = {
  title: "Eksportuj dowolną stronę internetową do PDF/PPTX",
  lead:
    "Wklej łącze do publicznej strony. Page 2 File starannie podzieli ją na strony PDF lub slajdy PowerPoint, z podglądem przed pobraniem.",
  form: {
    formatLabel: "Format",
    meta: "Bez rejestracji · Podgląd · Pliki tymczasowe",
    pdfModeLabel: "Tryb PDF",
    pdfModes: [
      { label: "Zrzuty strony", value: "visual" },
      { label: "Edytowalny PDF", value: "editable" },
    ],
    powerpointModeLabel: "Tryb PowerPoint",
    powerpointModes: [
      { label: "Zrzuty slajdów", value: "visual" },
      { label: "Edytowalna prezentacja", value: "editable" },
    ],
    submitPdf: "Utwórz PDF",
    submitPowerpoint: "Utwórz PowerPoint",
    urlHelper:
      "Tylko publiczne strony HTTPS. Użyj rozszerzenia dla zalogowanych kart.",
    urlLabel: "Łącze do strony internetowej",
    urlPlaceholder: "https://example.com/artykul",
  },
  converterFlow: {
    backAction: "Wróć do konfiguracji",
    processingBody: "Analizujemy stronę i przygotowujemy wybrany format pliku.",
    processingTitle: "Przygotowujemy Twój plik",
    readyBody: "Kliknij, aby pobrać plik",
    readyTitle: "Twój plik jest gotowy",
  },
  closingNote:
    "Usługa działa z artykułami, dokumentacją, stronami docelowymi i publicznymi raportami. W przypadku stron prywatnych lub czatów AI rozszerzenie używa aktywnej karty przeglądarki i tworzy tymczasowy podgląd.",
  preview: {
    accessibleLabel: "Przykładowy wynik konwersji",
    divider: "PODZIAŁ STRONY ZACHOWUJE OBRAZ W CAŁOŚCI",
    imageNote: "Obraz pozostaje w całości",
    pdfMeta: "12 stron · gotowe",
    powerpointMeta: "12 slajdów · gotowe",
    sourceTitle: "Długi artykuł z obrazem",
    title: "Strona → dokładny plik",
  },
  promo: {
    body:
      "Rozszerzenie działa na dwa sposoby: przez URL lub z aktywną kartą. Dane eksportowanej strony są usuwane z serwera po zamknięciu podglądu.",
    eyebrow: "ROZSZERZENIE CHROME",
    title: "Eksportuj bieżącą kartę, nawet gdy wymagane jest logowanie.",
  },
  features: {
    eyebrow: "FUNKCJE",
    title: "Elastyczne opcje eksportowanej treści",
    body:
      "Eksportuj strony w odpowiednim formacie: jako zrzuty strony albo z zachowaniem multimediów, łączy i struktury.",
    items: [
      { title: "Eksportuj czaty AI i komunikatorów", body: "Eksportuj długie rozmowy z ChatGPT, Claude, Gemini, Grok, DeepSeek i innych usług do przejrzystego PDF." },
      { title: "2 najpraktyczniejsze formaty", list: { items: ["Zapisuj zrzuty strony jako PDF/PPTX.", "Twórz edytowalne pliki PDF/PPTX zachowujące multimedia, łącza i strukturę."], style: "unordered" } },
      { title: "Kontroluj zawartość pliku", body: "Łącz zachowane multimedia, łącza i style. W podglądzie możesz też usunąć zbędne elementy strony." },
      { title: "2 tryby pracy", body: "Eksportuj bieżącą kartę dowolnej witryny lub podaj URL publicznej strony." },
      { title: "Rozwiązane problemy innych usług", body: "Uzyskaj PDF lub PPTX z pełnymi obrazami i bez nadmiernych odstępów między treścią." },
      { title: "Bezpiecznie i bez rejestracji", body: "Nie musisz tworzyć konta. Zainstaluj rozszerzenie i zapisz wybraną stronę." },
    ],
  },
  howItWorks: {
    action: "Otwórz pełną instrukcję",
    body: "Najszybsze jest rozszerzenie: pracuje z bieżącą kartą i nie wymaga kopiowania łącza.",
    eyebrow: "JAK ZACZĄĆ",
    extensionAction: "Zainstaluj rozszerzenie",
    installTime: "W 30 sekund",
    items: [
      { title: "Zainstaluj rozszerzenie", body: "Dodaj Page 2 File do Chrome. Konto Page 2 File nie jest potrzebne." },
      { title: "Otwórz stronę", list: { items: ["Przejdź do wybranej karty.", "Otwórz Page 2 File.", "Kliknij Preview."], style: "ordered" } },
      { title: "Sprawdź i pobierz", body: "Sprawdź wynik, w razie potrzeby usuń sekcje i pobierz gotowy plik." },
    ],
    note: "Z przykładami publicznego łącza, prywatnej karty i czatu AI",
    stepLabels: ["Krok 1", "Krok 2", "Krok 3"],
    title: "Trzy kroki do gotowego pliku",
  },
  blog: {
    action: "Czytaj artykuł",
    allAction: "Wszystkie artykuły",
    body: "Praktyczne poradniki o wierności, edycji, łączach, podziałach stron i bezpiecznej obsłudze czatów AI.",
    eyebrow: "BLOG",
    items: [
      { slug: "why-print-to-pdf-breaks" },
      { slug: "visual-vs-editable" },
      { slug: "preserve-clickable-links" },
      { slug: "long-webpage-page-breaks" },
    ],
    title: "Poradniki eksportowania różnych typów witryn",
  },
  faq: {
    body: "Jasne odpowiedzi dotyczące przechwytywania stron, trybów wyjściowych, prywatnych kart, tymczasowych podglądów i eksportu czatów.",
    eyebrow: "NAJCZĘSTSZE PYTANIA",
    items: [
      { title: "Jak przekonwertować stronę do PDF lub PowerPoint?", body: "W przypadku publicznej strony wklej jej URL HTTPS, wybierz PDF lub PowerPoint oraz zrzuty strony albo tryb edytowalny, a następnie sprawdź sekcje. Dla strony po zalogowaniu użyj rozszerzenia Page 2 File w aktywnej karcie." },
      { title: "Czy Page 2 File zachowuje wygląd strony?", body: "Zrzuty strony zachowują renderowany wygląd, w tym układ, kolory, obrazy i widoczne wykresy. Animacje, filmy i interaktywne elementy przeglądarki są przedstawiane statycznie." },
      { title: "Czy tekst i łącza pozostają edytowalne?", body: "Tryb edytowalny zachowuje obsługiwany tekst i bezpieczne cele łączy. Złożone widżety, canvas i nieobsługiwane elementy mogą zostać zapisane jako obrazy. Zrzuty strony stawiają na wygląd." },
      { title: "Czy można przechwycić długie i dynamiczne strony?", body: "Rozszerzenie pracuje z wyrenderowaną aktywną kartą. Najpierw rozwiń treści i przewiń stronę do końca. Ukrytej lub niewczytanej zawartości nie można wyeksportować." },
      { title: "Czy mogę konwertować strony po zalogowaniu?", body: "Tak, za pomocą rozszerzenia Chrome po normalnym otwarciu strony. Rozszerzenie używa aktywnej karty i nie prosi o hasło w formularzu publicznego URL. Nie omija kontroli dostępu." },
      {
        title: "Czy mogę przekonwertować stronę lub całą witrynę?",
        body: [
          { kind: "text", text: "Konwertery stron, a także " },
          { kind: "link", label: "Webpage to PDF Converter — Web2File", route: "page2pdf-gpt" },
          { kind: "text", text: " i " },
          { kind: "link", label: "One Page 2 PowerPoint", route: "one-page2powerpoint-gpt" },
          { kind: "text", text: " przetwarzają jeden URL. Dla wielu dostępnych stron publicznych użyj " },
          { kind: "link", label: "Web 2 PDF", route: "web2pdf-gpt" },
          { kind: "text", text: " lub " },
          { kind: "link", label: "Web 2 PowerPoint", route: "web2powerpoint-gpt" },
          { kind: "text", text: ": otrzymasz osobny PDF lub PPTX dla każdej wybranej strony, a nie jeden połączony plik." },
        ],
      },
      { title: "Czym różnią się zrzuty strony i tryby edytowalne?", body: "Zrzuty strony stawiają na wierność renderowanej stronie. Tryb edytowalny stawia na zaznaczalny tekst, obsługiwane obrazy, bezpieczne łącza i struktury wielokrotnego użytku. Sprawdź złożoną grafikę i układ." },
      { title: "Co dzieje się z danymi podglądu po zamknięciu karty?", body: "Dane podglądu są tymczasowe i zostają usunięte po zamknięciu karty. Page 2 File nie prowadzi bazy historii konwersji ani archiwum wcześniejszych podglądów." },
      { title: "Czy potrzebuję konta?", body: "Konto Page 2 File nie jest potrzebne ani dla publicznego URL, ani dla podglądu rozszerzenia. W przypadku prywatnej strony może być wymagane zalogowanie w witrynie źródłowej." },
      { title: "Czy mogę eksportować czaty AI i komunikatorów?", body: "Rozszerzenie eksportuje rozmowę wyrenderowaną w karcie Chrome, w tym obsługiwane czaty AI i komunikatory internetowe. Najpierw wczytaj potrzebny zakres wiadomości. Aplikacje poza przeglądarką, takie jak Signal Desktop, nie są przechwytywane." },
    ],
    title: "Co warto wiedzieć",
  },
  finalCta: {
    body: "Wklej tutaj publiczne łącze lub zainstaluj rozszerzenie dla bieżącej karty.",
    eyebrow: "CHCESZ WYPRÓBOWAĆ NA SWOJEJ STRONIE?",
    title: "Uzyskaj PDF lub PowerPoint przed otwarciem edytora",
  },
};
