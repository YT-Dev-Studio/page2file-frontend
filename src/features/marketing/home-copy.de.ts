import type { HomeCopy } from "./home-copy";

export const homeCopyDe: HomeCopy = {
  title: "Jede Webseite als PDF/PPTX exportieren",
  lead:
    "Fügen Sie den Link zu einer öffentlichen Seite ein. Page 2 File teilt sie sorgfältig in PDF-Seiten oder PowerPoint-Folien auf – mit einer Vorschau vor dem Download.",
  form: {
    formatLabel: "Format",
    meta: "Keine Registrierung · Vorschau · Temporäre Dateien",
    pdfModeLabel: "PDF-Modus",
    pdfModes: [
      { label: "Seitenaufnahmen", value: "visual" },
      { label: "Bearbeitbares PDF", value: "editable" },
    ],
    powerpointModeLabel: "PowerPoint-Modus",
    powerpointModes: [
      { label: "Folienaufnahmen", value: "visual" },
      { label: "Bearbeitbare Präsentation", value: "editable" },
    ],
    submitPdf: "PDF erstellen",
    submitPowerpoint: "PowerPoint erstellen",
    urlHelper:
      "Nur öffentliche HTTPS-Seiten. Verwenden Sie die Erweiterung für angemeldete Browser-Tabs.",
    urlLabel: "Link zur Webseite",
    urlPlaceholder: "https://example.com/artikel",
  },
  converterFlow: {
    backAction: "Zurück zu den Einstellungen",
    processingBody:
      "Wir analysieren die Seite und bereiten das gewählte Dateiformat vor.",
    processingTitle: "Ihre Datei wird vorbereitet",
    readyBody: "Klicken Sie, um die Datei herunterzuladen",
    readyTitle: "Ihre Datei ist bereit",
  },
  closingNote:
    "Der Dienst eignet sich für Artikel, Dokumentationen, Landingpages und öffentliche Berichte. Für private Seiten oder AI-Chats arbeitet die Erweiterung mit dem aktiven Browser-Tab und stellt eine temporäre Vorschau bereit.",
  preview: {
    accessibleLabel: "Beispiel für ein Konvertierungsergebnis",
    divider: "DER SEITENUMBRUCH HÄLT DAS BILD ZUSAMMEN",
    imageNote: "Das Bild bleibt vollständig",
    pdfMeta: "12 Seiten · bereit",
    powerpointMeta: "12 Folien · bereit",
    sourceTitle: "Ein langer Artikel mit einem Bild",
    title: "Seite → präzise Datei",
  },
  promo: {
    body:
      "Die Erweiterung arbeitet in zwei Modi: per URL oder mit dem aktiven Tab. Exportierte Seitendaten werden vom Server gelöscht, nachdem Sie die Vorschau geschlossen haben.",
    eyebrow: "CHROME-ERWEITERUNG",
    title: "Aktuellen Tab exportieren, auch wenn eine Anmeldung erforderlich ist.",
  },
  features: {
    eyebrow: "FUNKTIONEN",
    title: "Flexible Einstellungen für exportierte Inhalte",
    body:
      "Exportieren Sie Webseiten in einem passenden Format: als Seitenaufnahmen oder mit erhaltenen Medien, Links und Layout.",
    items: [
      {
        title: "AI-Chats und Messenger exportieren",
        body:
          "Exportieren Sie lange Unterhaltungen aus ChatGPT, Claude, Gemini, Grok, DeepSeek und anderen Diensten in ein übersichtliches, gut lesbares PDF.",
      },
      {
        title: "Die 2 praktischsten Formate",
        list: {
          items: [
            "Seitenaufnahmen als PDF/PPTX speichern.",
            "Bearbeitbare PDF/PPTX-Dateien mit erhaltenen Medien, Links und Strukturen erstellen.",
          ],
          style: "unordered",
        },
      },
      {
        title: "Dateiinhalte kontrollieren",
        body:
          "Kombinieren Sie erhaltene Medien, Links und Gestaltung in exportierten Dateien. In der Vorschau können Sie außerdem unnötige Seitenelemente entfernen.",
      },
      {
        title: "2 Arbeitsmodi",
        body:
          "Exportieren Sie den aktuellen Tab einer beliebigen Website oder geben Sie die URL einer öffentlichen Seite an.",
      },
      {
        title: "Probleme anderer Anbieter gelöst",
        body:
          "Sie erhalten ein PDF oder PPTX mit vollständigen Bildern und ohne übergroße Lücken zwischen Inhalten.",
      },
      {
        title: "Sicher und ohne Registrierung",
        body:
          "Sie müssen kein Konto erstellen. Installieren Sie einfach die Erweiterung und speichern Sie die ausgewählte Seite.",
      },
    ],
  },
  howItWorks: {
    action: "Vollständige Anleitung öffnen",
    body:
      "Am schnellsten geht es mit der Erweiterung: Sie arbeitet mit dem aktuellen Tab und erfordert kein Kopieren eines Links.",
    eyebrow: "SO STARTEN SIE",
    extensionAction: "Erweiterung installieren",
    installTime: "In 30 Sekunden",
    items: [
      {
        title: "Erweiterung installieren",
        body:
          "Fügen Sie Page 2 File zu Chrome hinzu. Ein Page 2 File Konto ist nicht erforderlich.",
      },
      {
        title: "Seite öffnen",
        list: {
          items: [
            "Wechseln Sie zum gewünschten Tab.",
            "Öffnen Sie Page 2 File.",
            "Klicken Sie auf Preview.",
          ],
          style: "ordered",
        },
      },
      {
        title: "Prüfen und herunterladen",
        body:
          "Prüfen Sie das Ergebnis, entfernen Sie bei Bedarf Abschnitte und laden Sie die fertige Datei herunter.",
      },
    ],
    note: "Mit Beispielen für einen öffentlichen Link, einen privaten Tab und einen AI-Chat",
    stepLabels: ["Schritt 1", "Schritt 2", "Schritt 3"],
    title: "In drei Schritten zur fertigen Datei",
  },
  blog: {
    action: "Artikel lesen",
    allAction: "Alle Artikel",
    body:
      "Praktische Anleitungen zu Wiedergabetreue, Bearbeitbarkeit, Links, Seitenumbrüchen und dem sicheren Umgang mit AI-Chats.",
    eyebrow: "BLOG",
    items: [
      { slug: "why-print-to-pdf-breaks" },
      { slug: "visual-vs-editable" },
      { slug: "preserve-clickable-links" },
      { slug: "long-webpage-page-breaks" },
    ],
    title: "Anleitungen zum Export verschiedener Website-Typen",
  },
  faq: {
    body:
      "Klare Antworten zu Webseitenerfassung, Ausgabemodi, privaten Tabs, temporären Vorschauen und Chat-Export.",
    eyebrow: "HÄUFIG GESTELLTE FRAGEN",
    items: [
      {
        title: "Wie wandle ich eine Webseite in PDF oder PowerPoint um?",
        body:
          "Fügen Sie für eine öffentliche Seite deren HTTPS-URL ein, wählen Sie PDF oder PowerPoint sowie Seitenaufnahmen oder einen bearbeitbaren Modus und prüfen Sie die Abschnitte vor der Dateierstellung. Für eine angemeldete Seite verwenden Sie die Page 2 File Chrome-Erweiterung mit dem aktiven Tab.",
      },
      {
        title: "Kann Page 2 File das Seitendesign erhalten?",
        body:
          "Seitenaufnahmen sollen das gerenderte Erscheinungsbild einschließlich Layout, Farben, Bildern und sichtbaren Diagrammen erhalten. Browserfunktionen wie Animationen, Videos und interaktive Steuerelemente werden statisch dargestellt.",
      },
      {
        title: "Bleiben Text und Links bearbeitbar oder anklickbar?",
        body:
          "Der bearbeitbare Modus erhält unterstützten Text als Dokumentinhalt und sichere Linkziele. Komplexe Widgets, Canvas-Grafiken und nicht unterstützte Elemente können als Bilder dargestellt werden. Seitenaufnahmen priorisieren das Erscheinungsbild und machen nicht jedes Pixel zu einem bearbeitbaren Objekt.",
      },
      {
        title: "Kann der Dienst lange und dynamische Seiten vollständig erfassen?",
        body:
          "Die Erweiterung arbeitet mit dem gerenderten aktiven Tab, auch bei langen Seiten, nachdem die benötigten Abschnitte geladen wurden. Öffnen Sie zuerst eingeklappte Inhalte und scrollen Sie bis ganz nach unten. Versteckte oder nicht geladene Inhalte können nicht exportiert werden.",
      },
      {
        title: "Kann ich Seiten hinter einer Anmeldung konvertieren?",
        body:
          "Ja, über die Chrome-Erweiterung, nachdem Sie die Seite normal geöffnet haben. Die Erweiterung arbeitet mit dem aktiven Tab und fordert Sie nicht auf, ein Kontopasswort an das öffentliche URL-Formular zu senden. Sie umgeht keine Zugriffskontrollen.",
      },
      {
        title: "Kann ich eine einzelne Seite oder eine ganze Website konvertieren?",
        body: [
          { kind: "text", text: "Die Webseitenkonverter sowie " },
          { kind: "link", label: "Webpage to PDF Converter — Web2File", route: "page2pdf-gpt" },
          { kind: "text", text: " und " },
          {
            kind: "link",
            label: "One Page 2 PowerPoint",
            route: "one-page2powerpoint-gpt",
          },
          {
            kind: "text",
            text: " verarbeiten eine URL. Verwenden Sie für mehrere zugängliche öffentliche Seiten ",
          },
          { kind: "link", label: "Web 2 PDF", route: "web2pdf-gpt" },
          { kind: "text", text: " oder " },
          {
            kind: "link",
            label: "Web 2 PowerPoint",
            route: "web2powerpoint-gpt",
          },
          {
            kind: "text",
            text: ": Sie erhalten für jede ausgewählte Seite ein separates PDF oder PPTX, keine zusammengeführte Datei.",
          },
        ],
      },
      {
        title: "Wie unterscheiden sich Seitenaufnahmen und bearbeitbare Modi?",
        body:
          "Seitenaufnahmen priorisieren die Treue zur gerenderten Seite. Der bearbeitbare Modus priorisiert auswählbaren Text, unterstützte Bilder, sichere Links und wiederverwendbare Dokumentstrukturen. Prüfen Sie komplexe Diagramme, Typografie und Layouts, da beide Modi bewusste Ersetzungen erfordern können.",
      },
      {
        title: "Was geschieht mit Vorschaudaten, nachdem ich den Tab schließe?",
        body:
          "Vorschaudaten sind temporär und werden nach dem Schließen des Vorschau-Tabs gelöscht. Page 2 File besitzt keine Datenbank für den Konvertierungsverlauf und bietet kein Kontoarchiv früherer Vorschauen.",
      },
      {
        title: "Benötige ich ein Konto?",
        body:
          "Für den Ablauf mit öffentlicher URL oder die Vorschau der Erweiterung ist kein Page 2 File Konto erforderlich. Für eine private Seite, auf die Sie zugreifen dürfen, müssen Sie möglicherweise weiterhin bei der Quellwebsite angemeldet sein.",
      },
      {
        title: "Kann ich AI- und Messenger-Chats exportieren?",
        body:
          "Die Erweiterung kann eine in einem Chrome-Tab gerenderte Unterhaltung exportieren, einschließlich unterstützter AI-Chats und Web-Messenger. Laden Sie zuerst den benötigten Nachrichtenbereich. Reine native Apps und Oberflächen außerhalb des Browsers, etwa Signal Desktop, liegen außerhalb des Erfassungsbereichs.",
      },
    ],
    title: "Was Sie wissen sollten",
  },
  finalCta: {
    body:
      "Fügen Sie hier einen öffentlichen Link ein oder installieren Sie die Erweiterung für den aktuellen Tab.",
    eyebrow: "MÖCHTEN SIE ES MIT IHRER SEITE TESTEN?",
    title: "PDF oder PowerPoint erstellen, bevor Sie einen Editor öffnen",
  },
};
