import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const germanLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "GPT-App · genaue URLs, PDFs oder Screenshots",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File verarbeitet genaue öffentliche URLs, Webseiten-PDFs und Screenshots als Visual PDF oder Interactive PDF.",
        lead: "Geben Sie eine genaue öffentliche URL, eine Liste genauer URLs, ein Webseiten-PDF oder ganzseitige beziehungsweise aufeinanderfolgende Screenshots an. Wählen Sie Visual PDF, um die Website als Seitenaufnahmen zu speichern, oder Interactive PDF für auswählbaren Text und anklickbare Links.",
        sections: [
            { heading: "1. Eine oder mehrere URLs angeben", body: "Senden Sie eine öffentliche Webseiten-URL, eine Liste genauer öffentlicher URLs, ein vorhandenes Webseiten-PDF oder ganzseitige beziehungsweise aufeinanderfolgende Screenshots. Jede Webseite bleibt ein separates PDF." },
            { heading: "2. Den PDF-Typ wählen", body: "Wählen Sie Visual PDF für ein bildbasiertes Ergebnis mit Vorrang für das Erscheinungsbild oder Interactive PDF, wenn auswählbarer Text und anklickbare Links wichtiger sind. Für eine URL-Liste gilt ein Modus für alle Dateien." },
            { heading: "3. Nur angegebene Seiten konvertieren", body: "Die GPT-App öffnet nur die genauen öffentlichen URLs. Sie durchsucht keine Domains oder Sitemaps, entdeckt keine Seiten, folgt keinen internen Links und umgeht keine Anmeldung, Paywalls, CAPTCHAs, geografischen oder sonstigen Zugriffsbeschränkungen." },
            { heading: "4. PDFs und Screenshots nachbearbeiten", body: "Hochgeladene Screenshots können in ihrer Reihenfolge von oben nach unten zu einem Visual PDF zusammengesetzt werden. Webseiten-PDFs werden ohne erfundene fehlende Inhalte verarbeitet; Interactive PDF priorisiert vorhandenen Text, Layout, Bilder und verifizierte Links." },
            { heading: "5. Passende Speicherhilfe erhalten und Ergebnis prüfen", body: "Ist die direkte Konvertierung nicht verfügbar oder unvollständig, gibt die GPT-App seitenbezogene Browser- oder Exporthinweise. Prüfen Sie jedes PDF auf fehlende oder abgeschnittene Inhalte, Leerflächen, Lesbarkeit, Seitenfolge, Layout, Links und Modustreue." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "GPT Webpage 2 PDF öffnen",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Anleitung zur Verwendung",
            firstStageDescription: "Übergeben Sie der GPT-App eine funktionierende URL.",
            firstStageLabel: "URLs senden",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "GPT-App · hochgeladene HTML-Datei",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File wandelt eine hochgeladene HTML-Datei in ein geprüftes PDF um und bewahrt Layout, Bilder, Text und Links.",
        lead: "Laden Sie genau eine HTML-Datei hoch. GPT HTML 2 PDF prüft die Gestaltung, lädt erreichbare Stile, Schriften und Bilder und erstellt ein geprüftes PDF mit auswählbarem Text und anklickbaren Links, soweit möglich.",
        sections: [
            { heading: "1. Genau eine HTML-Datei hochladen", body: "Fügen Sie ein HTML-Dokument hinzu. Die GPT-App akzeptiert stattdessen keine URL, verarbeitet nicht mehrere HTML-Dateien, durchsucht keine Websites, folgt keinen Links zu weiteren Seiten und führt keine Dokumente zusammen." },
            { heading: "2. Stile und Ressourcen einbinden", body: "Inline- und eingebettete Stile werden automatisch mit erreichbaren externen Stylesheets, Schriften und Bildern verwendet. Verweist das HTML auf eine fehlende lokale CSS-Datei, laden Sie die passende Datei für eine genauere Darstellung hoch oder fahren Sie ohne sie fort." },
            { heading: "3. Gestaltung prüfen und bewahren", body: "Vor der Umwandlung wird das HTML in einer passenden Desktop-Breite angezeigt. Das PDF soll Thema, Farben, Typografie, Abstände, Spalten, Karten, Bilder und Inhaltsreihenfolge bewahren, ohne interaktive Bedienelemente auszulösen." },
            { heading: "4. Ein lesbares PDF erstellen", body: "Die GPT-App erstellt ein PDF mit auswählbarem Text und funktionierenden Hyperlinks, soweit möglich. Breite Layouts können im Querformat oder auf einem passenden Seitenformat ausgegeben werden, damit wichtige Elemente nicht gequetscht, abgeschnitten oder geteilt werden." },
            { heading: "5. Die fertige Datei prüfen", body: "Jedes PDF wird vor der Ausgabe auf fehlende Inhalte, abgeschnittene Komponenten, unerklärliche Leerflächen, Lesbarkeit, Seitenumbrüche, Bildplatzierung und unterstützte Links geprüft." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "GPT HTML 2 PDF öffnen",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Fünf Schritte von HTML zu PDF",
            firstStageDescription: "Übergeben Sie der GPT-App eine HTML-Datei.",
            firstStageLabel: "HTML hochladen",
        },
    }
};
