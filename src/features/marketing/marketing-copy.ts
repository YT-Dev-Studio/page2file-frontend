import type { Locale } from "@/shared/i18n/locales";

export type LandingUiCopy = {
  openGuide: string;
  previousScenario: string;
  nextScenario: string;
  relatedPages: string;
  stepsLabel: string;
};

type MarketingCopy = {
  chatWorkflow: {
    detailsTitle: string;
    mapLabel: string;
    stageDescriptions: readonly [string, string, string];
    stages: readonly [string, string, string];
  };
  gptWorkflow: {
    detailsTitle: string;
    mapLabel: string;
    stageDescriptions: readonly [string, string, string];
    stages: readonly [string, string, string];
  };
  landing: LandingUiCopy;
};

const marketingCopy: Record<"en" | "ru" | "de" | "fr", MarketingCopy> = {
  en: {
    landing: {
      openGuide: "Open the extension guide",
      previousScenario: "Previous related page",
      nextScenario: "Next related page",
      relatedPages: "Related pages",
      stepsLabel: "How it works",
    },
    gptWorkflow: {
      detailsTitle: "Three steps from source to file",
      mapLabel: "Source → review → file",
      stages: ["Provide the source", "Review the result", "Download the file"],
      stageDescriptions: [
        "Give the GPT App the supported source.",
        "Check the pages, slides, and visible limits.",
        "Download the files returned for this request.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Export the conversation visible in your browser",
      mapLabel: "Active tab → temporary preview",
      stages: ["Open the conversation", "Review the preview", "Save the PDF"],
      stageDescriptions: [
        "Load the messages you want in the active tab.",
        "Check text, media, links, and omissions.",
        "Choose screenshot or editable PDF output.",
      ],
    },
  },
  ru: {
    landing: {
      openGuide: "Открыть инструкцию по расширению",
      previousScenario: "Предыдущая связанная страница",
      nextScenario: "Следующая связанная страница",
      relatedPages: "Связанные страницы",
      stepsLabel: "Как это работает",
    },
    gptWorkflow: {
      detailsTitle: "Три шага от источника до файла",
      mapLabel: "Источник → проверка → файл",
      stages: ["Передайте источник", "Проверьте результат", "Скачайте файл"],
      stageDescriptions: [
        "Передайте GPT-приложению поддерживаемый источник.",
        "Проверьте страницы, слайды и видимые ограничения.",
        "Скачайте файлы, созданные для этого запроса.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Экспортируйте диалог, открытый в браузере",
      mapLabel: "Активная вкладка → временный предпросмотр",
      stages: ["Откройте диалог", "Проверьте предпросмотр", "Сохраните PDF"],
      stageDescriptions: [
        "Загрузите нужные сообщения в активной вкладке.",
        "Проверьте текст, медиа, ссылки и пропуски.",
        "Выберите PDF в режиме скриншотов или редактируемом режиме.",
      ],
    },
  },
  de: {
    landing: {
      openGuide: "Anleitung zur Erweiterung öffnen",
      previousScenario: "Vorherige verwandte Seite",
      nextScenario: "Nächste verwandte Seite",
      relatedPages: "Verwandte Seiten",
      stepsLabel: "So funktioniert es",
    },
    gptWorkflow: {
      detailsTitle: "In drei Schritten von der Quelle zur Datei",
      mapLabel: "Quelle → Prüfung → Datei",
      stages: ["Quelle angeben", "Ergebnis prüfen", "Datei herunterladen"],
      stageDescriptions: [
        "Übergeben Sie der GPT-App eine unterstützte Quelle.",
        "Prüfen Sie Seiten, Folien und sichtbare Einschränkungen.",
        "Laden Sie die für diese Anfrage erstellten Dateien herunter.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Im Browser sichtbare Unterhaltung exportieren",
      mapLabel: "Aktiver Tab → temporäre Vorschau",
      stages: ["Unterhaltung öffnen", "Vorschau prüfen", "PDF speichern"],
      stageDescriptions: [
        "Laden Sie die gewünschten Nachrichten im aktiven Tab.",
        "Prüfen Sie Text, Medien, Links und Auslassungen.",
        "Wählen Sie eine PDF-Ausgabe als Seitenaufnahme oder bearbeitbares Dokument.",
      ],
    },
  },
  fr: {
    landing: {
      openGuide: "Ouvrir le guide de l’extension",
      previousScenario: "Page associée précédente",
      nextScenario: "Page associée suivante",
      relatedPages: "Pages associées",
      stepsLabel: "Fonctionnement",
    },
    gptWorkflow: {
      detailsTitle: "Trois étapes de la source au fichier",
      mapLabel: "Source → vérification → fichier",
      stages: ["Fournir la source", "Vérifier le résultat", "Télécharger le fichier"],
      stageDescriptions: [
        "Fournissez à l’application GPT une source prise en charge.",
        "Vérifiez les pages, les diapositives et les limites visibles.",
        "Téléchargez les fichiers créés pour cette demande.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Exporter la conversation visible dans votre navigateur",
      mapLabel: "Onglet actif → aperçu temporaire",
      stages: ["Ouvrir la conversation", "Vérifier l’aperçu", "Enregistrer le PDF"],
      stageDescriptions: [
        "Chargez les messages souhaités dans l’onglet actif.",
        "Vérifiez le texte, les médias, les liens et les omissions.",
        "Choisissez une sortie PDF en captures de page ou en document modifiable.",
      ],
    },
  },
};

const hasMarketingCopy = (
  locale: Locale,
): locale is keyof typeof marketingCopy => locale in marketingCopy;

export const getMarketingCopy = (locale: Locale): MarketingCopy =>
  marketingCopy[hasMarketingCopy(locale) ? locale : "en"];
