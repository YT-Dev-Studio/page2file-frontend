import type { Locale } from "@/shared/i18n/locales";
import { getLocaleDefinition } from "@/shared/i18n/locales";

type IndexCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type ContentCopy = {
  featuredLabel: string;
  allEntriesLabel: string;
  emptyTitle: string;
  emptyBody: string;
  blog: IndexCopy;
  updates: IndexCopy;
  changelog: IndexCopy;
  changelogLink: string;
  guideLabel: string;
  updateLabel: string;
  updatedLabel: string;
  minuteLabel: (minutes: number) => string;
  readLabel: (minutes: number) => string;
  readArticleLabel: string;
  openPdf: string;
  seeChangelog: string;
  added: string;
  improved: string;
  fixed: string;
  breadcrumbLabel: string;
  homeLabel: string;
  blogBreadcrumb: string;
  updatesBreadcrumb: string;
};

const contentCopy: Record<"en" | "ru" | "de" | "fr", ContentCopy> = {
  en: {
    featuredLabel: "Start here",
    allEntriesLabel: "All field notes",
    emptyTitle: "No published updates yet",
    emptyBody:
      "The technical changelog remains available while product updates are being prepared.",
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
        "Product updates will appear here after the first release.",
    },
    changelog: {
      eyebrow: "Technical history",
      title: "Changelog",
      description:
        "Versioned prototype changes with clearly labelled sample entries.",
    },
    changelogLink: "Open the technical changelog →",
    guideLabel: "Guide",
    updateLabel: "Product update",
    updatedLabel: "Updated",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min read`,
    readArticleLabel: "Read article",
    openPdf: "Open the PDF prototype →",
    seeChangelog: "See the technical changelog →",
    added: "Added",
    improved: "Improved",
    fixed: "Fixed",
    breadcrumbLabel: "Breadcrumbs",
    homeLabel: "Home",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Updates",
  },
  ru: {
    featuredLabel: "Начните отсюда",
    allEntriesLabel: "Все материалы",
    emptyTitle: "Опубликованных обновлений пока нет",
    emptyBody:
      "Пока обновления продукта готовятся, доступна техническая история изменений.",
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
        "Обновления продукта появятся здесь после первого релиза.",
    },
    changelog: {
      eyebrow: "Техническая история",
      title: "История изменений",
      description:
        "Версии прототипа с понятными тестовыми записями.",
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
    readArticleLabel: "Читать статью",
    openPdf: "Открыть прототип PDF →",
    seeChangelog: "Смотреть техническую историю изменений →",
    added: "Добавлено",
    improved: "Улучшено",
    fixed: "Исправлено",
    breadcrumbLabel: "Хлебные крошки",
    homeLabel: "Главная",
    blogBreadcrumb: "Блог",
    updatesBreadcrumb: "Обновления",
  },
  de: {
    featuredLabel: "Hier beginnen",
    allEntriesLabel: "Alle Praxisartikel",
    emptyTitle: "Noch keine veröffentlichten Updates",
    emptyBody:
      "Der technische Changelog bleibt verfügbar, während Produktupdates vorbereitet werden.",
    blog: {
      eyebrow: "Praxiswissen zur Konvertierung",
      title: "Praktische Anleitungen zum Export von Webseiten",
      description:
        "Praxisnahe Artikel über Darstellungsgenauigkeit, Links, Seitenumbrüche, Folien, private Chats und sicheres HTML.",
    },
    updates: {
      eyebrow: "Produktupdates",
      title: "Was sich geändert hat und warum",
      description:
        "Produktupdates erscheinen hier nach der ersten Veröffentlichung.",
    },
    changelog: {
      eyebrow: "Technischer Verlauf",
      title: "Changelog",
      description:
        "Versionierte Änderungen am Prototyp mit klar gekennzeichneten Beispieleinträgen.",
    },
    changelogLink: "Technischen Changelog öffnen →",
    guideLabel: "Anleitung",
    updateLabel: "Produktupdate",
    updatedLabel: "Aktualisiert",
    minuteLabel: (minutes: number): string => `${minutes} Min.`,
    readLabel: (minutes: number): string => `${minutes} Min. Lesezeit`,
    readArticleLabel: "Artikel lesen",
    openPdf: "PDF-Prototyp öffnen →",
    seeChangelog: "Technischen Changelog ansehen →",
    added: "Hinzugefügt",
    improved: "Verbessert",
    fixed: "Behoben",
    breadcrumbLabel: "Brotkrümelnavigation",
    homeLabel: "Startseite",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Updates",
  },
  fr: {
    featuredLabel: "Commencer ici",
    allEntriesLabel: "Tous les guides pratiques",
    emptyTitle: "Aucune mise à jour publiée pour le moment",
    emptyBody:
      "Le journal des modifications techniques reste disponible pendant la préparation des mises à jour du produit.",
    blog: {
      eyebrow: "Conseils pratiques de conversion",
      title: "Guides pratiques pour exporter des pages web",
      description:
        "Des articles pratiques sur la fidélité, les liens, les sauts de page, les diapositives, les conversations privées et le HTML sécurisé.",
    },
    updates: {
      eyebrow: "Mises à jour du produit",
      title: "Ce qui a changé et pourquoi",
      description:
        "Les mises à jour du produit apparaîtront ici après la première version.",
    },
    changelog: {
      eyebrow: "Historique technique",
      title: "Journal des modifications",
      description:
        "Modifications versionnées du prototype avec des entrées d’exemple clairement identifiées.",
    },
    changelogLink: "Ouvrir le journal des modifications techniques →",
    guideLabel: "Guide",
    updateLabel: "Mise à jour du produit",
    updatedLabel: "Mis à jour",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min de lecture`,
    readArticleLabel: "Lire l’article",
    openPdf: "Ouvrir le prototype PDF →",
    seeChangelog: "Voir le journal des modifications techniques →",
    added: "Ajouté",
    improved: "Amélioré",
    fixed: "Corrigé",
    breadcrumbLabel: "Fil d’Ariane",
    homeLabel: "Accueil",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Mises à jour",
  },
};

const hasContentCopy = (
  locale: Locale,
): locale is keyof typeof contentCopy => locale in contentCopy;

export const getContentCopy = (locale: Locale): ContentCopy =>
  contentCopy[hasContentCopy(locale) ? locale : "en"];

export const formatContentDate = (locale: Locale, value: string): string => {
  const languageTag = getLocaleDefinition(locale).htmlLang;
  return new Intl.DateTimeFormat(languageTag, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
};
