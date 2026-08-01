import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

export type LandingUiCopy = {
  legalDraft: string;
  openGuide: string;
  relatedPages: string;
  stepsLabel: string;
  tryPrototype: string;
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
      legalDraft:
        "Draft content — legal owner, jurisdiction and processor review are required before indexing.",
      openGuide: "Open the extension guide",
      relatedPages: "Related workflows",
      stepsLabel: "Workflow details",
      tryPrototype: "Open the web converter",
    },
    gptWorkflow: {
      detailsTitle: "A bounded path from instruction to file",
      mapLabel: "Instruction → reviewed file",
      stages: ["Provide the source", "Review the structure", "Create the file"],
      stageDescriptions: [
        "One explicit input and output contract.",
        "Warnings and boundaries stay visible.",
        "Download only after the preview.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Export only the conversation you can see",
      mapLabel: "Current tab → local preview",
      stages: ["Open the conversation", "Inspect locally", "Save the PDF"],
      stageDescriptions: [
        "Use the supported active chat tab.",
        "Check messages, code, links, and omissions.",
        "Choose the clean or visual document.",
      ],
    },
  },
  ru: {
    landing: {
      legalDraft:
        "Черновой текст — до индексации требуется проверка юридического владельца, юрисдикции и списка обработчиков данных.",
      openGuide: "Открыть руководство по расширению",
      relatedPages: "Связанные сценарии",
      stepsLabel: "Детали сценария",
      tryPrototype: "Открыть веб-конвертер",
    },
    gptWorkflow: {
      detailsTitle: "Контролируемый путь от инструкции до файла",
      mapLabel: "Инструкция → проверенный файл",
      stages: ["Укажите источник", "Проверьте структуру", "Создайте файл"],
      stageDescriptions: [
        "Один явный источник и выбранный формат.",
        "Предупреждения и ограничения остаются видимыми.",
        "Скачивание доступно после предпросмотра.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Экспортируйте только видимый разговор",
      mapLabel: "Текущая вкладка → локальный предпросмотр",
      stages: ["Откройте разговор", "Проверьте локально", "Сохраните PDF"],
      stageDescriptions: [
        "Используйте активную вкладку поддерживаемого чата.",
        "Проверьте сообщения, код, ссылки и пропуски.",
        "Выберите чистый или визуальный документ.",
      ],
    },
  },
};

export const getMarketingCopy = (locale: Locale): MarketingCopy =>
  marketingCopy[isPublishedLocale(locale) ? locale : "en"];
