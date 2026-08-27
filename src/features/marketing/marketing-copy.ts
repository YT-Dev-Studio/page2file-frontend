import type { Locale } from "@/shared/i18n/locales";

export type LandingUiCopy = {
  browseChromeExtensions: string;
  browseGpts: string;
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

const marketingCopy: Record<Locale, MarketingCopy> = {
  en: {
    landing: {
      browseChromeExtensions: "Browse Chrome extensions",
      browseGpts: "Browse GPTs",
      openGuide: "Open the extension guide",
      previousScenario: "Previous related page",
      nextScenario: "Next related page",
      relatedPages: "Related pages",
      stepsLabel: "How it works",
    },
    gptWorkflow: {
      detailsTitle: "Three steps from page to file",
      mapLabel: "Page or file → review → download",
      stages: ["Provide the page or file", "Review the result", "Download the file"],
      stageDescriptions: [
        "Give the GPT App a supported page or file.",
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
        "Choose all messages or replies only and remove media or links if needed.",
        "Keep the tab being exported open, then check and save the PDF preview.",
      ],
    },
  },
  ru: {
    landing: {
      browseChromeExtensions: "Каталог расширений Chrome",
      browseGpts: "Каталог GPTs",
      openGuide: "Открыть инструкцию по расширению",
      previousScenario: "Предыдущая связанная страница",
      nextScenario: "Следующая связанная страница",
      relatedPages: "Связанные страницы",
      stepsLabel: "Как это работает",
    },
    gptWorkflow: {
      detailsTitle: "Три шага от страницы до файла",
      mapLabel: "Страница или файл → проверка → скачивание",
      stages: ["Передайте страницу или файл", "Проверьте результат", "Скачайте файл"],
      stageDescriptions: [
        "Передайте GPT-приложению поддерживаемую страницу или файл.",
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
        "Выберите все сообщения или только ответы и при необходимости уберите медиа или ссылки.",
        "Не закрывайте исходную вкладку, затем проверьте и сохраните предпросмотр PDF.",
      ],
    },
  },
};

export const getMarketingCopy = (locale: Locale): MarketingCopy =>
  marketingCopy[locale];
