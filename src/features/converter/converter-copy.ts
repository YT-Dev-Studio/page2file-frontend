import type { ConversionFormat } from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import type { UrlValidationCode } from "./url-validation";

type FormatPageCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  asideTitle: string;
};

type ConverterCopy = {
  formats: Record<ConversionFormat, FormatPageCopy>;
  sourceTitle: string;
  sourceHint: string;
  reviewTitle: string;
  extensionTitle: string;
  extensionBody: string;
  visualText: string;
  editableTitle: string;
  editableText: string;
  warningsText: string;
  privateQuestion: string;
  extensionLink: string;
  modeLegend: string;
  submit: Record<ConversionFormat, string>;
  validation: Record<UrlValidationCode, string>;
};

const converterCopy: Record<
  "en" | "ru" | "de" | "fr",
  ConverterCopy
> = {
  en: {
    formats: {
      pdf: {
        eyebrow: "Public URL → PDF",
        title: "Convert one webpage to PDF",
        lead:
          "Validate a public URL, choose a fidelity contract and review every page before the sample download.",
        asideTitle: "Preview before pagination",
      },
      pptx: {
        eyebrow: "Public URL → 16:9 slides",
        title: "Convert a webpage to PowerPoint",
        lead:
          "Map meaningful webpage sections to slides, choose screenshot or editable output and inspect every fallback.",
        asideTitle: "Preview before the deck",
      },
    },
    sourceTitle: "Set the source and output",
    sourceHint:
      "Start with one public URL. Review the generated structure before final rendering.",
    reviewTitle: "What you can verify",
    extensionTitle: "Need the page as it appears after sign-in?",
    extensionBody:
      "Capture the current signed-in tab with the extension, then review the result before downloading.",
    visualText: "Highest layout fidelity through section images.",
    editableTitle: "Editable mode",
    editableText:
      "Supported text and links remain editable and clickable.",
    warningsText:
      "Fonts, canvas, media and unsafe links show their fallback before download.",
    privateQuestion: "Signed-in or private page?",
    extensionLink: "Use the extension workflow",
    modeLegend: "Conversion mode",
    submit: {
      pdf: "Generate PDF preview",
      pptx: "Generate PowerPoint preview",
    },
    validation: {
      empty: "Enter a URL.",
      tooLong: "The URL is too long.",
      malformed: "Enter a valid URL starting with http:// or https://.",
      insecure: "Enter a valid URL starting with http:// or https://.",
      credentials: "URLs containing credentials are not accepted.",
      blockedHost: "Private, local and metadata hosts are blocked.",
    },
  },
  ru: {
    formats: {
      pdf: {
        eyebrow: "Открытый URL → PDF",
        title: "Конвертируйте одну веб-страницу в PDF",
        lead:
          "Проверьте общедоступный URL, выберите режим точности и просмотрите каждую страницу перед скачиванием примера.",
        asideTitle: "Предпросмотр до разбиения на страницы",
      },
      pptx: {
        eyebrow: "Открытый URL → слайды 16:9",
        title: "Конвертируйте веб-страницу в PowerPoint",
        lead:
          "Превратите значимые секции веб-страницы в слайды, выберите режим скриншотов или редактируемый результат и проверьте каждую замену.",
        asideTitle: "Предпросмотр до создания презентации",
      },
    },
    sourceTitle: "Укажите источник и формат",
    sourceHint:
      "Начните с одного общедоступного URL. Проверьте структуру результата до финального рендеринга.",
    reviewTitle: "Что можно проверить",
    extensionTitle: "Нужна страница в том виде, как она выглядит после входа?",
    extensionBody:
      "Сохраните текущую вкладку через расширение Chrome и проверьте результат перед скачиванием.",
    visualText: "Максимальная точность макета благодаря изображениям секций.",
    editableTitle: "Редактируемый режим",
    editableText:
      "Поддерживаемые текст и ссылки остаются редактируемыми и кликабельными.",
    warningsText:
      "Замены шрифтов, canvas, медиа и небезопасных ссылок видны до скачивания.",
    privateQuestion: "Страница закрыта или требует входа?",
    extensionLink: "Используйте расширение",
    modeLegend: "Режим конвертации",
    submit: {
      pdf: "Создать предпросмотр PDF",
      pptx: "Создать предпросмотр PowerPoint",
    },
    validation: {
      empty: "Введите URL.",
      tooLong: "URL слишком длинный.",
      malformed:
        "Введите корректный URL, начинающийся с http:// или https://.",
      insecure:
        "Введите корректный URL, начинающийся с http:// или https://.",
      credentials: "URL с логином или паролем не принимаются.",
      blockedHost:
        "Локальные, частные и служебные адреса заблокированы.",
    },
  },
  de: {
    formats: {
      pdf: {
        eyebrow: "Öffentliche URL → PDF",
        title: "Eine Webseite in PDF umwandeln",
        lead:
          "Prüfen Sie eine öffentliche URL, wählen Sie den gewünschten Ausgabemodus und kontrollieren Sie jede Seite vor dem Beispieldownload.",
        asideTitle: "Vorschau vor der Seiteneinteilung",
      },
      pptx: {
        eyebrow: "Öffentliche URL → 16:9-Folien",
        title: "Eine Webseite in PowerPoint umwandeln",
        lead:
          "Ordnen Sie aussagekräftige Webseitenabschnitte Folien zu, wählen Sie eine originalgetreue oder bearbeitbare Ausgabe und prüfen Sie alle Ersatzdarstellungen.",
        asideTitle: "Vorschau vor der Präsentation",
      },
    },
    sourceTitle: "Quelle und Ausgabe festlegen",
    sourceHint:
      "Beginnen Sie mit einer öffentlichen URL. Prüfen Sie die erzeugte Struktur vor der endgültigen Ausgabe.",
    reviewTitle: "Was Sie prüfen können",
    extensionTitle:
      "Benötigen Sie die Seite so, wie sie nach der Anmeldung erscheint?",
    extensionBody:
      "Erfassen Sie den aktuell angemeldeten Tab mit der Erweiterung und prüfen Sie das Ergebnis vor dem Herunterladen.",
    visualText:
      "Höchste Layouttreue durch Bilder der einzelnen Abschnitte.",
    editableTitle: "Bearbeitbares Dokument",
    editableText:
      "Unterstützte Texte und Links bleiben bearbeitbar und anklickbar.",
    warningsText:
      "Ersetzte Schriftarten, Canvas-Inhalte, Medien und unsichere Links werden vor dem Download angezeigt.",
    privateQuestion: "Angemeldete oder private Seite?",
    extensionLink: "Erweiterungsablauf verwenden",
    modeLegend: "Konvertierungsmodus",
    submit: {
      pdf: "PDF-Vorschau erstellen",
      pptx: "PowerPoint-Vorschau erstellen",
    },
    validation: {
      empty: "Geben Sie eine URL ein.",
      tooLong: "Die URL ist zu lang.",
      malformed:
        "Geben Sie eine gültige URL ein, die mit http:// oder https:// beginnt.",
      insecure:
        "Geben Sie eine gültige URL ein, die mit http:// oder https:// beginnt.",
      credentials: "URLs mit Zugangsdaten werden nicht akzeptiert.",
      blockedHost:
        "Private, lokale und interne Infrastrukturadressen sind gesperrt.",
    },
  },
  fr: {
    formats: {
      pdf: {
        eyebrow: "URL publique → PDF",
        title: "Convertir une page web en PDF",
        lead:
          "Validez une URL publique, choisissez le mode de sortie et vérifiez chaque page avant de télécharger l’exemple.",
        asideTitle: "Aperçu avant la pagination",
      },
      pptx: {
        eyebrow: "URL publique → diapositives 16:9",
        title: "Convertir une page web en PowerPoint",
        lead:
          "Associez les sections pertinentes de la page aux diapositives, choisissez une sortie fidèle ou modifiable et examinez chaque remplacement.",
        asideTitle: "Aperçu avant la présentation",
      },
    },
    sourceTitle: "Définir la source et le résultat",
    sourceHint:
      "Commencez avec une URL publique. Vérifiez la structure générée avant le rendu final.",
    reviewTitle: "Ce que vous pouvez vérifier",
    extensionTitle:
      "Besoin de la page telle qu’elle apparaît après connexion ?",
    extensionBody:
      "Capturez l’onglet connecté avec l’extension, puis vérifiez le résultat avant de le télécharger.",
    visualText:
      "Fidélité maximale de la mise en page grâce aux images des sections.",
    editableTitle: "Document modifiable",
    editableText:
      "Les textes et liens pris en charge restent modifiables et cliquables.",
    warningsText:
      "Les substitutions de polices, les canvas, les médias et les liens non sûrs sont signalés avant le téléchargement.",
    privateQuestion: "Page privée ou nécessitant une connexion ?",
    extensionLink: "Utiliser le processus de l’extension",
    modeLegend: "Mode de conversion",
    submit: {
      pdf: "Générer l’aperçu PDF",
      pptx: "Générer l’aperçu PowerPoint",
    },
    validation: {
      empty: "Saisissez une URL.",
      tooLong: "L’URL est trop longue.",
      malformed:
        "Saisissez une URL valide commençant par http:// ou https://.",
      insecure:
        "Saisissez une URL valide commençant par http:// ou https://.",
      credentials:
        "Les URL contenant des identifiants ne sont pas acceptées.",
      blockedHost:
        "Les adresses privées, locales et d’infrastructure sont bloquées.",
    },
  },
};

const hasConverterCopy = (
  locale: Locale,
): locale is keyof typeof converterCopy => locale in converterCopy;

export const getConverterCopy = (locale: Locale): ConverterCopy =>
  converterCopy[hasConverterCopy(locale) ? locale : "en"];
