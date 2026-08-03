import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

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

const marketingCopy: LocalizedPublished<MarketingCopy> = {
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
};

export const getMarketingCopy = (locale: Locale): MarketingCopy =>
  marketingCopy[isPublishedLocale(locale) ? locale : "en"];
