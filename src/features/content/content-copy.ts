import type { Locale } from "@/shared/i18n/locales";
import { getLocaleDefinition } from "@/shared/i18n/locales";

type ContentCopy = {
  allEntriesLabel: string;
  blog: {
    eyebrow: string;
    title: string;
    description: string;
  };
  guideLabel: string;
  updatedLabel: string;
  minuteLabel: (minutes: number) => string;
  readLabel: (minutes: number) => string;
  readArticleLabel: string;
  nextStepLabel: string;
  breadcrumbLabel: string;
  homeLabel: string;
  blogBreadcrumb: string;
};

const contentCopy: Record<Locale, ContentCopy> = {
  en: {
    allEntriesLabel: "All guides",
    blog: {
      eyebrow: "Page 2 PDF field guide",
      title: "Webpage and browser-chat export guides",
      description:
        "Choose the right PDF mode, preserve the current Chrome tab, and understand the limits before you export a webpage, AI conversation, or supported messenger thread.",
    },
    guideLabel: "Practical guide",
    updatedLabel: "Updated",
    minuteLabel: (minutes): string => `${minutes} min`,
    readLabel: (minutes): string => `${minutes} min read`,
    readArticleLabel: "Read",
    nextStepLabel: "Open the Page 2 PDF guide",
    breadcrumbLabel: "Breadcrumbs",
    homeLabel: "Home",
    blogBreadcrumb: "Blog",
  },
  ru: {
    allEntriesLabel: "Все руководства",
    blog: {
      eyebrow: "Практика Page 2 PDF",
      title: "Экспорт веб-страниц и переписок из браузера",
      description:
        "Как выбрать режим PDF, сохранить текущую вкладку Chrome и заранее учесть ограничения при экспорте страницы, AI-диалога или поддерживаемого мессенджера.",
    },
    guideLabel: "Практическое руководство",
    updatedLabel: "Обновлено",
    minuteLabel: (minutes): string => `${minutes} мин`,
    readLabel: (minutes): string => `${minutes} мин чтения`,
    readArticleLabel: "Читать",
    nextStepLabel: "Открыть инструкцию Page 2 PDF",
    breadcrumbLabel: "Навигационная цепочка",
    homeLabel: "Главная",
    blogBreadcrumb: "Блог",
  },
};

export const getContentCopy = (locale: Locale): ContentCopy =>
  contentCopy[locale];

export const formatContentDate = (locale: Locale, value: string): string =>
  new Intl.DateTimeFormat(getLocaleDefinition(locale).htmlLang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
