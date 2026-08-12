import type { LandingContent } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

export const germanLegalLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  privacy: {
    route: "privacy",
    eyebrow: "Datenschutz und Datenverarbeitung",
    title: "Datenschutzerklärung",
    description:
      "Wie Page 2 File Webseiteninhalte, temporäre Konvertierungsdateien, Cookies, Analysedaten und Datenschutzanfragen verarbeitet.",
    lead:
      "Diese Datenschutzerklärung erläutert, welche Daten Page 2 File beim Besuch der Website, bei der Nutzung der Chrome-Erweiterung oder bei der Konvertierung einer Webseite in PDF verarbeitet.",
    sections: [
      {
        heading: "Verantwortlicher und Geltungsbereich",
        body:
          "{{entityName}} mit Sitz in {{address}} betreibt Page 2 File und ist für die hier beschriebene Verarbeitung verantwortlich. Diese Erklärung gilt für die Page 2 File Website, die Browser-Erweiterung und die zugehörigen Konvertierungsdienste.",
      },
      {
        heading: "Begriffsbestimmungen",
        body:
          "„Dienst“ bezeichnet Page 2 File und seine Konvertierungsfunktionen. „Konvertierungsinhalte“ sind die URL, sichtbare Webseiteninhalte, gewählte Optionen und erzeugte PDF. „Personenbezogene Daten“ sind Informationen, die eine Person identifizieren oder ihr vernünftigerweise zugeordnet werden können.",
      },
      {
        heading: "Von uns verarbeitete Informationen",
        body:
          "Je nach Nutzung können wir technische Anfragedaten, IP-Adresse, Browser- und Geräteinformationen, besuchte Page 2 File Seiten, zulässige Kampagnenparameter, eine öffentliche URL oder im aktiven Tab sichtbare Inhalte, Konvertierungseinstellungen, temporäre Auftragskennungen und erzeugte Dateien verarbeiten.",
      },
      {
        heading: "Nicht von uns angeforderte Informationen",
        body:
          "Page 2 File erfordert kein Konto und fragt weder Zahlungskartendaten, Rechnungsadressen noch Passwörter der Quellwebsite ab. Die Erweiterung verwendet die bereits im Browser geöffnete Seite und erhält nicht das Passwort, mit dem Sie darauf zugegriffen haben.",
      },
      {
        heading: "Verwendung der Informationen",
        body:
          "Wir verarbeiten Informationen, um Vorschauen und Dateien bereitzustellen, den Dienst vor Missbrauch zu schützen, Fehler zu diagnostizieren, die Zuverlässigkeit zu erhalten, die aggregierte Nutzung öffentlicher Seiten zu verstehen, Anfragen zu beantworten und geltendes Recht einzuhalten. Wir verkaufen keine personenbezogenen Daten.",
      },
      {
        heading: "Konvertierungsinhalte und temporäre Verarbeitung",
        body:
          "Eine Konvertierung per öffentlicher URL oder eine Vorschau der Erweiterung erfordert die temporäre Verarbeitung der übermittelten Seite und Optionen. Page 2 File bietet keinen kontobasierten Konvertierungsverlauf. Vorschaudaten und erzeugte Dateien sind kurzlebig und werden nach dem Schließen der Vorschau oder beim technischen Ablauf gelöscht.",
      },
      {
        heading: "Analyse und Zuordnung",
        body:
          "Wenn eine gültige Google Analytics Measurement ID konfiguriert ist, wird Google Analytics auf öffentlichen Marketingseiten automatisch geladen. Dabei können Seiten-, Geräte-, Browser-, ungefähre Standort- und Kampagneninformationen übertragen werden. Zulässige UTM-Werte werden im Arbeitsspeicher normalisiert und mit dem Analyseereignis gesendet; Page 2 File speichert sie nicht in einem eigenen Zuordnungs-Cookie.",
      },
      {
        heading: "Dienstleister und Offenlegung",
        body:
          "Page 2 File nutzt {{processors}}, um den Dienst bereitzustellen, zu schützen und zu messen. Diese Anbieter dürfen technische Daten nur im erforderlichen Umfang und nach ihren eigenen Datenschutzbestimmungen verarbeiten. Wir können Informationen außerdem offenlegen, wenn dies gesetzlich vorgeschrieben ist, zum Schutz von Rechten oder Sicherheit oder im Rahmen einer rechtmäßigen Unternehmensübertragung.",
      },
      {
        heading: "Speicherung und Löschung",
        body:
          "Konvertierungsinhalte werden nur für die temporäre Verarbeitung und den Download aufbewahrt und nicht als sichtbarer Verlauf gespeichert. Sicherheitsprotokolle, Infrastrukturdaten, Analysedaten und Korrespondenz können so lange gespeichert werden, wie dies für Sicherheit, Betrieb, rechtliche Pflichten oder die Bearbeitung einer Anfrage erforderlich ist.",
      },
      {
        heading: "Sicherheit",
        body:
          "Page 2 File verwendet gleichursprüngliche Konvertierungsrouten, anonyme Sitzungssteuerung, Origin- und CSRF-Prüfungen, signierte Backend-Anfragen, URL-Validierung, isoliertes Rendering und temporäre Dateien. Keine technische oder organisatorische Maßnahme garantiert absolute Sicherheit; konvertieren Sie daher kein Material, das Sie nicht offenlegen dürfen.",
      },
      {
        heading: "Internationale Verarbeitung",
        body:
          "Unsere Anbieter können technische oder Analysedaten in anderen Ländern verarbeiten. Soweit erforderlich, stützen wir uns auf Schutzmaßnahmen der Anbieter und rechtmäßige Übertragungsmechanismen. Der Betreiber hat seinen Sitz in {{jurisdiction}}.",
      },
      {
        heading: "Ihre Datenschutzrechte",
        body:
          "Je nach geltendem Recht können Sie Auskunft, Berichtigung, Löschung oder Einschränkung personenbezogener Daten verlangen oder bestimmten Verarbeitungen widersprechen. Da Page 2 File keine Benutzerkonten oder ein Konvertierungsarchiv besitzt, benötigen wir möglicherweise Angaben von Ihnen, um einen relevanten betrieblichen Datensatz zu finden.",
      },
      {
        heading: "Websites Dritter",
        body:
          "Page 2 File kann Inhalte von Websites Dritter öffnen oder konvertieren und auf externe Dienste verlinken. Inhalte, Sicherheit und Datenschutz dieser Angebote werden von den jeweiligen Dritten kontrolliert; bei ihrer Nutzung gelten deren Bedingungen.",
      },
      {
        heading: "Kinder",
        body:
          "Der Dienst richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Eltern oder Erziehungsberechtigte können uns kontaktieren, wenn sie die Löschung solcher Daten verlangen möchten.",
      },
      {
        id: "cookies",
        heading: "Cookies",
        body:
          "Page 2 File verwendet die kurzlebigen Cookies p2f_session und p2f_csrf, um eine anonyme Konvertierungssitzung aufrechtzuerhalten und Anfragen zu schützen. Sie nutzen Strict SameSite und laufen nach einer Stunde ab. Google Analytics kann auf öffentlichen Seiten Analyse-Cookies setzen, wenn Analyse konfiguriert ist. Konvertierungsinhalte oder direkt identifizierende Profildaten werden darin nicht gespeichert.",
      },
      {
        heading: "Cookies blockieren und löschen",
        body:
          "Sie können Cookies in Ihren Browsereinstellungen blockieren oder löschen. Das Blockieren der Page 2 File Sitzungs- oder CSRF-Cookies kann Konvertierungsanfragen verhindern. Das Blockieren von Google Analytics schränkt die Messung ein, verhindert aber nicht das Laden der öffentlichen Kernseiten. Cookies löschen Sie über die Cookie-Einstellungen Ihres Browsers.",
      },
      {
        heading: "Änderungen dieser Erklärung",
        body:
          "Wir können diese Erklärung aktualisieren, wenn sich der Dienst, Anbieter oder rechtliche Anforderungen ändern. Die neue Fassung wird mit einem aktualisierten Datum auf dieser Seite veröffentlicht. Wesentliche Änderungen gelten ab dem angegebenen Wirksamkeitsdatum.",
      },
      {
        heading: "Kontakt",
        body:
          "Fragen und Datenschutzanfragen können an {{contactEmail}} gesendet werden. Betreiber ist {{entityName}}, {{address}}, nach dem Recht von {{jurisdiction}}.",
      },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Nutzungsvereinbarung",
    title: "Nutzungsbedingungen",
    description:
      "Bedingungen für die Nutzung von Page 2 File, einschließlich zulässiger Quellen, Konvertierungsgrenzen, Pflichten der Nutzer und Verfügbarkeit.",
    lead:
      "Diese Bedingungen regeln die Nutzung der Page 2 File Website, Chrome-Erweiterung und Dienste zur Konvertierung von Webseiten in PDF.",
    sections: [
      { heading: "Vereinbarung und Betreiber", body: "Mit dem Zugriff auf Page 2 File oder dessen Nutzung stimmen Sie diesen Bedingungen zu. Der Dienst wird von {{entityName}} mit Sitz in {{address}} betrieben. Wenn Sie den Dienst für eine Organisation nutzen, bestätigen Sie, dass Sie diese Bedingungen für sie annehmen dürfen." },
      { heading: "Begriffsbestimmungen", body: "„Dienst“ bezeichnet die Page 2 File Website, Chrome-Erweiterung und Konvertierungsfunktionen. „Quellinhalte“ sind Webseiten, Inhalte des aktiven Tabs oder anderes zur Konvertierung übermitteltes Material. „Ausgabe“ ist ein PDF, eine PDF-Datei, Vorschau oder ein anderes erzeugtes Ergebnis." },
      { heading: "Beschränkte Lizenz", body: "Wir gewähren Ihnen ein widerrufliches, nicht ausschließliches, nicht übertragbares und beschränktes Recht, den Dienst gemäß diesen Bedingungen zu nutzen. Eigentum an Software, Marke oder anderen geschützten Page 2 File Materialien wird nicht übertragen." },
      { heading: "Zulässige Quellen und Ihre Verantwortung", body: "Sie dürfen nur Quellinhalte konvertieren, auf die Sie rechtmäßig zugreifen und die Sie verarbeiten, vervielfältigen und herunterladen dürfen. Sie sind für übermittelte URLs und Tab-Inhalte, gewählte Einstellungen sowie Nutzung und Verbreitung jeder Ausgabe verantwortlich." },
      { heading: "Unzulässige Nutzung", body: "Sie dürfen den Dienst nicht für Rechtsverstöße, Verletzungen fremder Rechte, Umgehung von Bezahlschranken oder Zugriffskontrollen, Verbreitung von Schadsoftware, missbräuchliche oder rechtswidrige Inhalte, Prüfung privater Netzwerke, Störung von Sicherheitsmaßnahmen, Systemüberlastung, übermäßige Automatisierung, Reverse Engineering geschützter Teile oder irreführende Darstellung erzeugter Dateien verwenden." },
      { heading: "Quellinhalte und Rechte Dritter", body: "Sie behalten bestehende Rechte an Quellinhalten. Page 2 File gewährt keine Rechte an fremdem Material. Sie versichern, dass die Verarbeitung und Erstellung der Ausgabe keine Urheber-, Datenschutz-, Vertraulichkeits-, Vertrags- oder sonstigen Rechte verletzt." },
      { heading: "Temporäre Verarbeitung", body: "Der Dienst kann Quellinhalte, Einstellungen und erzeugte Dateien temporär verarbeiten, um Vorschau und Download bereitzustellen. Page 2 File bietet keinen kontobasierten Verlauf. Einzelheiten zu temporären Daten, Cookies und Anbietern enthält die Datenschutzerklärung." },
      { heading: "Grenzen von Ausgabe und Wiedergabetreue", body: "Webseiten können Skripte, Animationen, Videos, geschützte Medien, eigene Schriften, Canvas-Grafiken, dynamische Daten und komplexe Layouts enthalten, die in statischen PDF nicht exakt reproduziert werden können. Accurate copy priorisiert das Erscheinungsbild; Editable document rekonstruiert unterstützten Text, Bilder und Links. Prüfen Sie Vorschau und finale Ausgabe." },
      { heading: "Dienste und Links Dritter", body: "Der Dienst kann Websites und Dienste Dritter konvertieren oder verlinken. Page 2 File ist nicht für deren Verfügbarkeit, Inhalt, Richtigkeit, Rechtmäßigkeit, Sicherheit oder Datenschutz verantwortlich. Für die Nutzung eines Drittanbieters gelten dessen Bedingungen." },
      { heading: "Datenschutz und Cookies", body: "Unsere Datenschutzerklärung erläutert temporäre Konvertierungsverarbeitung, Analyse, Dienstleister und Cookies. Mit der Nutzung erkennen Sie an, dass die zur gewünschten Konvertierung erforderliche Verarbeitung wie dort beschrieben erfolgt." },
      { heading: "Geistiges Eigentum von Page 2 File", body: "Dienst, Software, Design, Texte, Logos und andere Page 2 File Materialien gehören {{entityName}} oder sind lizenziert und gesetzlich geschützt. Sie dürfen Eigentumshinweise nicht entfernen und den Dienst nicht kopieren, verkaufen, unterlizenzieren oder kommerziell verwerten, soweit das Gesetz dies nicht ausdrücklich erlaubt." },
      { heading: "Feedback", body: "Wenn Sie freiwillig Vorschläge oder Feedback geben, räumen Sie uns das weltweite, dauerhafte und vergütungsfreie Recht ein, dieses zur Verbesserung oder Entwicklung des Dienstes zu nutzen. Das Eigentum an Ihren Quellinhalten wird dadurch nicht übertragen." },
      { heading: "Änderungen, Aktualisierungen und Verfügbarkeit", body: "Wir können den Dienst oder Funktionen aktualisieren, beschränken, aussetzen oder einstellen und versprechen keine dauerhafte Verfügbarkeit. Für Sicherheit, Zuverlässigkeit oder faire Nutzung können technische Grenzen gelten. Wesentliche Änderungen werden nach Möglichkeit auf der Website angegeben." },
      { heading: "Sperrung und Beendigung", body: "Sie können die Nutzung jederzeit beenden. Wir können den Zugang sperren oder aussetzen, wenn wir vernünftigerweise einen Verstoß, eine Gefahr für den Dienst oder andere Systeme oder eine gesetzliche Pflicht annehmen. Bestimmungen, die fortgelten sollen, bleiben wirksam." },
      { heading: "Beschwerden zu Urheber- und anderen Rechten", body: "Wenn Sie glauben, dass über Page 2 File verfügbares Material Ihre Rechte verletzt, kontaktieren Sie {{contactEmail}} mit Angaben zum geschützten Werk, zum betreffenden Material oder zur URL, Ihren Kontaktdaten und einer Erläuterung der behaupteten Verletzung." },
      { heading: "Keine Gewährleistung", body: "Soweit gesetzlich zulässig, werden Dienst und Ausgaben „wie besehen“ und „wie verfügbar“ bereitgestellt. Wir garantieren weder ununterbrochenen Betrieb, fehlerfreie Konvertierung, vollständige Wiedergabetreue oder Verfügbarkeit fremder Seiten noch Eignung für einen bestimmten Zweck oder die Erfüllung aller Anforderungen." },
      { heading: "Haftungsbeschränkung", body: "Soweit gesetzlich zulässig, haftet {{entityName}} nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden, entgangenen Gewinn, Daten-, Geschäfts- oder Privatsphärenverluste oder Kosten durch Nutzung oder Nichtnutzbarkeit des Dienstes. Zwingende Rechte bleiben unberührt." },
      { heading: "Freistellung", body: "Soweit gesetzlich zulässig, verpflichten Sie sich, {{entityName}} gegen Ansprüche Dritter zu verteidigen und freizustellen, die aus übermittelten Quellinhalten, Nutzung oder Verbreitung einer Ausgabe, Verstößen gegen diese Bedingungen oder Verletzungen fremder Rechte entstehen." },
      { heading: "Salvatorische Klausel, Verzicht und gesamte Vereinbarung", body: "Ist eine Bestimmung unwirksam oder nicht durchsetzbar, bleiben die übrigen Bestimmungen wirksam und die betroffene wird ihrem Zweck möglichst nahe ausgelegt. Die Nichtdurchsetzung ist kein Verzicht. Diese Bedingungen und die Datenschutzerklärung bilden die Vereinbarung über den Dienst." },
      { heading: "Anwendbares Recht und Streitigkeiten", body: "Diese Bedingungen unterliegen dem Recht von {{jurisdiction}} ohne Kollisionsrecht. Vor einem förmlichen Verfahren versuchen Sie und {{entityName}}, Streitigkeiten nach schriftlicher Mitteilung nach Treu und Glauben zu lösen. Ungelöste Streitigkeiten können den zuständigen Gerichten von {{jurisdiction}} vorgelegt werden, sofern zwingendes Recht keinen anderen Gerichtsstand verlangt." },
      { heading: "Änderungen dieser Bedingungen", body: "Wir können diese Bedingungen an Änderungen des Dienstes, der Anbieter oder rechtlicher Anforderungen anpassen. Die neue Fassung wird mit aktualisiertem Datum veröffentlicht. Die weitere Nutzung nach dem Wirksamkeitsdatum gilt als Zustimmung; andernfalls müssen Sie die Nutzung beenden." },
      { heading: "Kontakt", body: "Fragen oder Mitteilungen zu diesen Bedingungen können an {{contactEmail}} oder an {{entityName}}, {{address}}, gesendet werden." },
    ],
    legal: true,
  },
};
