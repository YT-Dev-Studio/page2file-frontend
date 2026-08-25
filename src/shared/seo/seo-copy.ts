import type { Locale } from "@/shared/i18n/locales";

type SeoCopy = { title: string; description: string };
export type SeoRouteKey = "home" | "guide" | "preview" | "download" | "notFound";

const home: Record<Locale, SeoCopy> = {
  en: { title: "Webpage to PDF Chrome Extension", description: "Save the current Chrome tab, a local HTML file, or a supported AI and messenger chat as PDF with selectable text or an accurate visual copy." },
  ru: { title: "Расширение Chrome для сохранения страниц в PDF", description: "Сохраняйте текущую вкладку Chrome, локальный HTML-файл или поддерживаемый AI-чат и веб-мессенджер в PDF с текстом либо точным внешним видом." },
};

const guide: Record<Locale, SeoCopy> = {
  en: { title: "How to Save a Webpage as PDF in Chrome", description: "Open a webpage, local HTML file, or supported chat, choose a Page 2 File mode, preview the PDF in Chrome, check it, and save it." },
  ru: { title: "Как сохранить веб-страницу в PDF в Chrome", description: "Откройте страницу, локальный HTML-файл или поддерживаемый чат, выберите режим Page 2 File, проверьте PDF в просмотрщике Chrome и сохраните его." },
};

const technical = (locale: Locale, key: "preview" | "download"): SeoCopy => ({
  title: key === "preview" ? "Page 2 File PDF preview" : "Page 2 File PDF download",
  description: `${home[locale].title}. Temporary technical page for a PDF created by the Chrome extension.`,
});

const notFound: Record<Locale, SeoCopy> = {
  en: {
    title: "Page 2 File — Page not found",
    description: "The requested page is not available. Return to the Page 2 File Chrome extension overview or open the instructions.",
  },
  ru: {
    title: "Page 2 File — Страница не найдена",
    description: "Запрошенная страница недоступна. Вернитесь к описанию расширения Page 2 File для Chrome или откройте инструкцию.",
  },
};

export const getSeoCopy = (locale: Locale, key: SeoRouteKey): SeoCopy => {
  if (key === "home") return home[locale];
  if (key === "guide") return guide[locale];
  if (key === "notFound") return notFound[locale];
  return technical(locale, key);
};
