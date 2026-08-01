import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

export type LandingUiCopy = {
  legalDraft: string;
  relatedPages: string;
  tryPrototype: string;
};

type MarketingCopy = {
  landing: LandingUiCopy;
};

const marketingCopy: LocalizedPublished<MarketingCopy> = {
  en: {
    landing: {
      legalDraft:
        "Draft content — legal owner, jurisdiction and processor review are required before indexing.",
      relatedPages: "Related workflows",
      tryPrototype: "Open the web converter",
    },
  },
  ru: {
    landing: {
      legalDraft:
        "Черновой текст — до индексации требуется проверка юридического владельца, юрисдикции и списка обработчиков данных.",
      relatedPages: "Связанные сценарии",
      tryPrototype: "Открыть веб-конвертер",
    },
  },
};

export const getMarketingCopy = (locale: Locale): MarketingCopy =>
  marketingCopy[isPublishedLocale(locale) ? locale : "en"];
