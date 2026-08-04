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
  { route: "export-ai-chat-to-pdf", label: "Alle AI-Chat-Exporte" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT als PDF" },
  { route: "export-claude-to-pdf", label: "Claude als PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini als PDF" },
  { route: "export-grok-to-pdf", label: "Grok als PDF" },
];

export const germanLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "GPT-App · eine öffentliche URL",
    title: "Eine öffentliche URL mit One Page 2 PDF in ein PDF umwandeln",
    description:
      "One Page 2 PDF ist eine spezialisierte GPT-App, die eine öffentliche Webseiten-URL zur Konvertierung sendet und eine PDF-Datei für genau diese Seite zurückgibt.",
    lead:
      "Übergeben Sie der GPT-App eine öffentliche HTTPS-URL. One Page 2 PDF sendet diese Adresse an den Page 2 File Konvertierungsdienst und liefert ein herunterladbares PDF für die angeforderte Seite.",
    sections: [
      { heading: "1. Eine öffentliche URL senden", body: "Fügen Sie die genaue HTTPS-Adresse der gewünschten Webseite ein. Die Anfrage umfasst eine Seite und startet keine Suche auf der gesamten Website." },
      { heading: "2. Ein PDF erhalten", body: "Die GPT-App liefert einen Link zu einem PDF dieser Seite. Prüfen Sie Text, Links, Bilder und Seitenumbrüche, bevor Sie sich auf die Datei verlassen." },
      { heading: "3. Die richtige Grenze verwenden", body: "One Page 2 PDF öffnet keine angemeldeten Browser-Tabs und umgeht keine Zugriffskontrollen. Verwenden Sie für eine bereits hinter einer Anmeldung geöffnete Seite die Page 2 File Erweiterung." },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "One Page 2 PDF GPT-App öffnen",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "Eine Webseite als PDF speichern" },
      { slug: "long-webpage-page-breaks", label: "Seitenumbrüche auf langen Webseiten korrigieren" },
    ],
    relatedRoutes: gptRoutes,
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "GPT-App · zugängliche Webseiten",
    title: "Webseiten mit Web 2 PDF in separate PDFs umwandeln",
    description:
      "Web 2 PDF ist eine GPT-App, die zugängliche Seiten einer Website findet, ausgewählte Seiten konvertiert und für jede Seite ein eigenes PDF zurückgibt.",
    lead:
      "Geben Sie Web 2 PDF eine öffentliche Website-Adresse. Die GPT-App kann zugängliche Seiten ermitteln, ausgewählte URLs konvertieren und mehrere Downloadlinks liefern – ein PDF pro Seite.",
    sections: [
      { heading: "1. Website angeben", body: "Senden Sie die öffentliche Start-URL. Die GPT-App ermittelt zugängliche Seiten und zeigt die gewählte Website-Grenze vor der Konvertierung an." },
      { heading: "2. Seitenliste prüfen", body: "Bestätigen Sie, welche zugänglichen Seiten zur Anfrage gehören. Anmeldepflichtige Seiten, blockierte URLs und fremde Domains bleiben ausgeschlossen." },
      { heading: "3. Separate PDFs herunterladen", body: "Jede konvertierte Seite wird als eigenes PDF geliefert. Web 2 PDF verspricht weder ein zusammengeführtes Website-Dokument noch einen strukturierten Scraping-Datensatz." },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Web 2 PDF GPT-App öffnen",
    articleLinks: [
      { slug: "multi-page-website-to-pdf", label: "Eine mehrseitige Website in PDF umwandeln" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Exportierbare Website-Typen" },
    ],
    relatedRoutes: gptRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "GPT-App · hochgeladene HTML-Datei",
    title: "Eine hochgeladene HTML-Datei mit HTML 2 PDF umwandeln",
    description:
      "HTML 2 PDF ist eine GPT-App, die eine hochgeladene HTML-Datei annimmt und unter sichtbaren Rendering-Grenzen ein aufgeräumtes PDF zurückgibt.",
    lead:
      "Laden Sie eine HTML-Datei in die GPT-App hoch. HTML 2 PDF rendert das Dokument isoliert und liefert ein PDF; dieser Rohdatei-Ablauf ist nur in dieser GPT-App verfügbar.",
    sections: [
      { heading: "1. HTML-Datei hochladen", body: "Fügen Sie das HTML-Dokument hinzu, das Sie verarbeiten dürfen. Dieser Ablauf beginnt mit einer Datei, nicht mit einer öffentlichen Webseiten-URL." },
      { heading: "2. In ein PDF umwandeln", body: "Die GPT-App liefert ein PDF für das hochgeladene Dokument. Externe Ressourcen, Skripte, eigene Schriften und Browserfunktionen können abweichen." },
      { heading: "3. HTML als nicht vertrauenswürdige Eingabe behandeln", body: "Sicheres Rendering erfordert die Isolation von privaten Netzwerken, lokalen Dateien und unkontrollierten Skripten. Das Ergebnis ist eine Dokumentkonvertierung, keine gehostete Webausführung." },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "HTML 2 PDF GPT-App öffnen",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "HTML sicher in PDF umwandeln" },
      { slug: "webpage-capture-vs-web-scraping", label: "Erfassung im Vergleich zu Scraping" },
    ],
    relatedRoutes: gptRoutes,
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt",
    eyebrow: "GPT-App · eine öffentliche URL",
    title: "Eine URL mit One Page 2 PowerPoint in ein PPTX umwandeln",
    description:
      "One Page 2 PowerPoint ist eine spezialisierte GPT-App, die eine öffentliche Webseiten-URL konvertiert und eine PPTX-Präsentation für diese Seite zurückgibt.",
    lead:
      "Übergeben Sie der GPT-App eine öffentliche HTTPS-URL. One Page 2 PowerPoint sendet die Seite zur Konvertierung und liefert eine herunterladbare PPTX-Präsentation.",
    sections: [
      { heading: "1. Eine öffentliche URL senden", body: "Fügen Sie die genaue Webseitenadresse ein. Die GPT-App verarbeitet eine Seite pro Anfrage und durchsucht nicht den Rest der Website." },
      { heading: "2. Ein PPTX erhalten", body: "Die Seite wird einer Präsentation zugeordnet und als PowerPoint-Datei geliefert. Prüfen Sie Foliengrenzen sowie Ersetzungen durch Aufnahmen oder bearbeitbare Inhalte." },
      { heading: "3. Private Tabs in Chrome belassen", body: "Eine GPT-App für öffentliche URLs kann Ihre Browsersitzung nicht übernehmen. Verwenden Sie die Page 2 File Erweiterung, wenn die Quelle hinter einer Anmeldung geöffnet ist." },
    ],
    externalLinkKey: "onePage2PowerpointGpt",
    primaryLabel: "One Page 2 PowerPoint GPT-App öffnen",
    articleLinks: [
      { slug: "webpage-to-powerpoint", label: "Eine Webseite in PowerPoint umwandeln" },
      { slug: "sections-to-slides", label: "Webseitenabschnitte in Folien umwandeln" },
    ],
    relatedRoutes: gptRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "GPT-App · zugängliche Webseiten",
    title: "Webseiten mit Web 2 PowerPoint in PPTX umwandeln",
    description:
      "Web 2 PowerPoint findet zugängliche Webseiten, konvertiert ausgewählte Seiten und liefert für jede Seite eine separate PPTX-Datei.",
    lead:
      "Geben Sie Web 2 PowerPoint eine öffentliche Website-Adresse. Die GPT-App ermittelt zugängliche Seiten, konvertiert ausgewählte URLs und liefert mehrere Präsentationslinks.",
    sections: [
      { heading: "1. Website angeben", body: "Senden Sie die öffentliche Start-URL und halten Sie die gewünschte Website-Grenze eindeutig. Externe Domains und private Seiten werden nicht stillschweigend einbezogen." },
      { heading: "2. Zugängliche Seiten bestätigen", body: "Prüfen Sie die gefundene Seitenliste vor der Konvertierung. Nur ausgewählte, erreichbare Seiten werden an Page 2 File gesendet." },
      { heading: "3. Separate PPTX-Dateien herunterladen", body: "Jede konvertierte Seite wird als eigene PowerPoint-Präsentation geliefert. Die GPT-App verspricht keine zusammengeführte Präsentation für die gesamte Website." },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Web 2 PowerPoint GPT-App öffnen",
    articleLinks: [
      { slug: "website-to-powerpoint", label: "Eine Website in PowerPoint umwandeln" },
      { slug: "screenshot-vs-editable-powerpoint", label: "Folienaufnahmen oder bearbeitbare Folien" },
    ],
    relatedRoutes: gptRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "AI-Chat-Export",
    title: "Unterhaltung aus dem aktiven Tab exportieren",
    description:
      "Exportieren Sie unterstützte ChatGPT-, Claude-, Gemini- und Grok-Unterhaltungen mit der Page 2 File Erweiterung, einer temporären Vorschau und ohne Konvertierungsverlauf als PDF.",
    lead:
      "Wählen Sie das ursprüngliche Erscheinungsbild oder ein ruhiges Lesedokument. Die Page 2 File Erweiterung exportiert den Chat aus dem aktiven Browser-Tab.",
    sections: [
      { heading: "Unterstützte Chat-Oberflächen", body: "Page 2 File unterstützt ChatGPT, Claude, Gemini und Grok sowie eine vorsichtige allgemeine Ersatzdarstellung für andere Browser-Chats.", points: ["ChatGPT", "Claude", "Gemini", "Grok"] },
      { heading: "Ursprüngliches Erscheinungsbild", body: "Nachrichtengruppen, Codeblöcke, Tabellen und sichtbare Quellenlinks bleiben erhalten." },
      { heading: "Übersichtliches Dokument", body: "Unterstützter Text wird in ein ruhigeres Dokument umgebrochen, während Urheberschaft und Linkziele erhalten bleiben." },
      { heading: "Unabhängiges Produkt", body: "Page 2 File ist mit keiner unterstützten AI-Plattform verbunden und wird von keiner dieser Plattformen empfohlen oder betrieben." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Erweiterung installieren",
    articleLinks: [
      { slug: "export-ai-chats-privately", label: "AI-Chats privat exportieren" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Exportierbare Website-Typen" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "ChatGPT-Export",
    title: "Lange ChatGPT-Unterhaltungen als PDF exportieren",
    description:
      "Exportieren Sie sichtbare ChatGPT-Nachrichten, Codeblöcke, Tabellen, Links und lange Unterhaltungen aus dem aktiven Browser-Tab in ein geprüftes PDF.",
    lead:
      "Erfassen Sie die im aktiven Tab sichtbare Unterhaltung, prüfen Sie Seitenumbrüche und laden Sie die Datei ohne Page 2 File Konto herunter.",
    sections: [
      { heading: "Was erhalten bleibt", body: "Nachrichten, Sprecherreihenfolge, Codeblöcke, Tabellen und sichtbare Links werden in der Vorschau abgebildet." },
      { heading: "Zwei Lesestile", body: "Behalten Sie den ursprünglichen visuellen Rhythmus bei oder wählen Sie ein ruhigeres Dokument zum Lesen und Drucken." },
      { heading: "Plattformspezifische Grenzen", body: "Eingeklappte Zweige, nicht geladene Nachrichten und Inhalte außerhalb des DOM müssen möglicherweise vor der Erfassung gescrollt oder geöffnet werden." },
      { heading: "Keine offizielle Verbindung", body: "Page 2 File ist ein unabhängiges Exportwerkzeug und wird weder von OpenAI noch von ChatGPT unterstützt oder betrieben." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Für ChatGPT installieren",
    articleLinks: [
      { slug: "export-chatgpt-conversation-to-pdf", label: "Eine ChatGPT-Unterhaltung als PDF exportieren" },
      { slug: "export-ai-chats-privately", label: "Vorschaudaten von AI-Chats schützen" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Claude-Export",
    title: "Claude-Unterhaltungen und sichtbare Artifacts speichern",
    description:
      "Exportieren Sie sichtbare Claude-Unterhaltungen, Markdown, Code, Quellen und verfügbaren Artifact-Kontext aus dem aktiven Browser-Tab in ein geprüftes PDF.",
    lead:
      "Nach einem ausdrücklichen Klick liest die Erweiterung die aktive Unterhaltung und erstellt eine temporäre Vorschau für lange Antworten.",
    sections: [
      { heading: "Lange Antworten bleiben strukturiert", body: "Überschriften, Listen, Quellen und Code bleiben in ihrer Lesereihenfolge." },
      { heading: "Artifact-Kontext", body: "Sichtbare Artifact-Titel und verfügbare Dokumentinhalte können dargestellt werden, ohne einen verborgenen Zugriff zu behaupten." },
      { heading: "Keine offizielle Verbindung", body: "Page 2 File ist ein unabhängiges Exportwerkzeug und wird nicht von Anthropic unterstützt." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Für Claude installieren",
    articleLinks: [
      { slug: "export-claude-chat-to-pdf", label: "Einen Claude-Chat als PDF exportieren" },
      { slug: "export-ai-chats-privately", label: "Vorschaudaten von AI-Chats schützen" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Gemini-Export",
    title: "Eine Gemini-Unterhaltung in ein lesbares PDF umwandeln",
    description:
      "Exportieren Sie sichtbare Gemini-Nachrichten, Quellenkarten, Code und Quellen aus dem aktiven Browser-Tab in ein geprüftes PDF mit temporärer Vorschau.",
    lead:
      "Prüfen Sie die Darstellung von Quellenkarten und sichtbaren Bildern, bevor Sie ein übersichtliches oder visuell treues Dokument erstellen.",
    sections: [
      { heading: "Quellen bleiben nützlich", body: "Sichtbare Quellenangaben und Quellenlinks bleiben anklickbar, wenn ihre Ziele sicher sind." },
      { heading: "Bilder folgen dem DOM", body: "Nur Medien, die der aktiven Seite zur Verfügung stehen, können in der temporären Vorschau erscheinen." },
      { heading: "Keine offizielle Verbindung", body: "Page 2 File ist unabhängig und kein Produkt von Google oder Gemini." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Für Gemini installieren",
    articleLinks: [
      { slug: "export-gemini-chat-to-pdf", label: "Einen Gemini-Chat als PDF exportieren" },
      { slug: "export-ai-chats-privately", label: "Vorschaudaten von AI-Chats schützen" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Grok-Export",
    title: "Grok-Threads mit sichtbaren Quellen exportieren",
    description:
      "Exportieren Sie sichtbare Grok-Unterhaltungen, X-Links, zitierte Beiträge und Quellen aus dem aktiven Browser-Tab in ein geprüftes PDF.",
    lead:
      "Erfassen Sie den aktiven Thread, erhalten Sie sichtbaren Quellenkontext und wählen Sie eine visuelle oder übersichtliche Dokumentvorschau.",
    sections: [
      { heading: "Threadgerechte Lesereihenfolge", body: "Nachrichten und der Kontext zitierter Beiträge bleiben gruppiert, statt zu einem unbeschrifteten Textstrom zu werden." },
      { heading: "Sichtbare X-Links", body: "Beitrags-URLs und Quellen bleiben anklickbar, wenn sie die Sicherheitsprüfung bestehen." },
      { heading: "Keine offizielle Verbindung", body: "Page 2 File ist ein unabhängiges Produkt und wird weder von xAI noch von X unterstützt." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Für Grok installieren",
    articleLinks: [
      { slug: "export-other-ai-chats-to-pdf", label: "Andere AI-Chats als PDF exportieren" },
      { slug: "export-ai-chats-privately", label: "Vorschaudaten von AI-Chats schützen" },
    ],
    relatedRoutes: chatRoutes,
  },
};
