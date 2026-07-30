import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

type IndexCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type ContentCopy = {
  prototypeSamples: string;
  articleSample: string;
  fallbackArticle: string;
  blog: IndexCopy;
  updates: IndexCopy;
  changelog: IndexCopy;
  changelogLink: string;
  guideLabel: string;
  updateLabel: string;
  updatedLabel: string;
  minuteLabel: (minutes: number) => string;
  readLabel: (minutes: number) => string;
  openPdf: string;
  seeChangelog: string;
  added: string;
  improved: string;
  fixed: string;
  relatedUpdate: string;
  breadcrumbLabel: string;
  homeLabel: string;
  blogBreadcrumb: string;
  updatesBreadcrumb: string;
};

const contentCopy: LocalizedPublished<ContentCopy> = {
  en: {
    prototypeSamples:
      "Prototype editorial samples — verify before the production release.",
    articleSample:
      "Prototype editorial sample — verify before the production release.",
    fallbackArticle:
      "English fallback article — this locale is not indexed.",
    blog: {
      eyebrow: "Conversion field notes",
      title: "Practical webpage export guides",
      description:
        "Ten focused articles about fidelity, links, page breaks, slides, private chats and safe HTML.",
    },
    updates: {
      eyebrow: "Product updates",
      title: "What changed and why",
      description:
        "Human-readable prototype changes, each connected to the technical changelog.",
    },
    changelog: {
      eyebrow: "Technical history",
      title: "Changelog",
      description:
        "Versioned prototype changes. Sample entries are clearly labelled and link back to product updates.",
    },
    changelogLink: "Open the technical changelog →",
    guideLabel: "Guide",
    updateLabel: "Product update",
    updatedLabel: "Updated",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min read`,
    openPdf: "Open the PDF prototype →",
    seeChangelog: "See the technical changelog →",
    added: "Added",
    improved: "Improved",
    fixed: "Fixed",
    relatedUpdate: "Read the related update →",
    breadcrumbLabel: "Breadcrumbs",
    homeLabel: "Home",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Updates",
  },
  ru: {
    prototypeSamples:
      "Демонстрационные редакционные материалы — проверьте перед production-релизом.",
    articleSample:
      "Демонстрационный редакционный материал — проверьте перед production-релизом.",
    fallbackArticle:
      "Статья доступна на английском — эта черновая локаль не индексируется.",
    blog: {
      eyebrow: "Практика конвертации",
      title: "Руководства по экспорту веб-страниц",
      description:
        "Десять статей о точности, ссылках, разрывах страниц, слайдах, закрытых чатах и безопасном HTML.",
    },
    updates: {
      eyebrow: "Обновления продукта",
      title: "Что изменилось и почему",
      description:
        "Понятное описание изменений прототипа со ссылками на техническую историю версий.",
    },
    changelog: {
      eyebrow: "Техническая история",
      title: "История изменений",
      description:
        "Версии прототипа с понятными тестовыми записями и ссылками на связанные обновления продукта.",
    },
    changelogLink: "Открыть техническую историю изменений →",
    guideLabel: "Руководство",
    updateLabel: "Обновление продукта",
    updatedLabel: "Обновлено",
    minuteLabel: (minutes: number): string => `${minutes} мин`,
    readLabel: (minutes: number): string => {
      const lastDigit = minutes % 10;
      const lastTwoDigits = minutes % 100;
      const noun =
        lastDigit === 1 && lastTwoDigits !== 11
          ? "минута чтения"
          : lastDigit >= 2 &&
              lastDigit <= 4 &&
              (lastTwoDigits < 12 || lastTwoDigits > 14)
            ? "минуты чтения"
            : "минут чтения";
      return `${minutes} ${noun}`;
    },
    openPdf: "Открыть прототип PDF →",
    seeChangelog: "Смотреть техническую историю изменений →",
    added: "Добавлено",
    improved: "Улучшено",
    fixed: "Исправлено",
    relatedUpdate: "Читать связанное обновление →",
    breadcrumbLabel: "Хлебные крошки",
    homeLabel: "Главная",
    blogBreadcrumb: "Блог",
    updatesBreadcrumb: "Обновления",
  },
};

export const getContentCopy = (locale: Locale): ContentCopy =>
  contentCopy[isPublishedLocale(locale) ? locale : "en"];

export const formatContentDate = (locale: Locale, value: string): string => {
  const languageTag = locale === "ru" ? "ru-RU" : "en-US";
  return new Intl.DateTimeFormat(languageTag, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
};
