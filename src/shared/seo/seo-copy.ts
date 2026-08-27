import type { Locale } from "@/shared/i18n/locales";

type SeoCopy = { title: string; description: string };
export type SeoRouteKey = "home" | "guide" | "preview" | "download" | "notFound";

const home: Record<Locale, SeoCopy> = {
  en: { title: "Page 2 PDF Chrome Extension for Pages and Chats", description: "Use Page 2 PDF on the active Chrome tab to create a visual full-page PDF, a selectable document, or a structured AI and messenger transcript." },
  ru: { title: "Page 2 PDF — расширение Chrome для страниц и чатов", description: "Запустите Page 2 PDF на активной вкладке Chrome и получите визуальную копию всей страницы, документ с текстом или расшифровку поддерживаемого чата." },
};

const guide: Record<Locale, SeoCopy> = {
  en: { title: "How to Save a Webpage as PDF in Chrome", description: "Open the original page in Chrome, choose the Page 2 PDF capture mode, keep the tab open during preparation, then check and download the PDF preview." },
  ru: { title: "Как сохранить веб-страницу в PDF в Chrome", description: "Откройте исходную страницу в Chrome, выберите режим Page 2 PDF, не закрывайте вкладку во время подготовки, затем проверьте и скачайте готовый PDF." },
};

const preview: Record<Locale, SeoCopy> = {
  en: {
    title: "Page 2 File temporary PDF preview",
    description: "Review the temporary Page 2 File conversion, its sections, warnings, and current revision before requesting the final downloadable file.",
  },
  ru: {
    title: "Временный предпросмотр PDF в Page 2 File",
    description: "Проверьте временную конвертацию Page 2 File, её разделы, предупреждения и текущую ревизию перед созданием итогового файла.",
  },
};

const download: Record<Locale, SeoCopy> = {
  en: {
    title: "Page 2 File temporary PDF download",
    description: "Download the temporary file created from the reviewed Page 2 File conversion before its protected download window expires.",
  },
  ru: {
    title: "Скачивание временного файла Page 2 File",
    description: "Скачайте временный файл, созданный из проверенной конвертации Page 2 File, до окончания защищённого периода загрузки.",
  },
};

const notFound: Record<Locale, SeoCopy> = {
  en: {
    title: "Page 2 File — Page not found",
    description: "The requested page is not available. Return to the Page 2 PDF extension overview on Page 2 File or open the current instructions.",
  },
  ru: {
    title: "Page 2 File — Страница не найдена",
    description: "Запрошенная страница недоступна. Вернитесь к описанию расширения Page 2 PDF на сайте Page 2 File или откройте актуальную инструкцию.",
  },
};

export const getSeoCopy = (locale: Locale, key: SeoRouteKey): SeoCopy => {
  if (key === "home") return home[locale];
  if (key === "guide") return guide[locale];
  if (key === "notFound") return notFound[locale];
  return key === "preview" ? preview[locale] : download[locale];
};
