import { describe, expect, test } from "vitest";
import { localeRegistry } from "@/shared/i18n/locales";
import {
  getChromeInstallLabel,
  getHomeCopy,
} from "./home-copy";

const expectedBlogSlugs = [
  "why-print-to-pdf-breaks",
  "visual-vs-editable",
  "preserve-clickable-links",
  "long-webpage-page-breaks",
];

describe("homepage copy", () => {
  test("provides reviewed Russian and English variants", () => {
    expect(getHomeCopy("ru").title).toBe(
      "Экспортируйте любую веб-страницу в PDF/PPTX",
    );
    expect(getHomeCopy("en").title).toBe(
      "Export any webpage to PDF/PPTX",
    );
  });

  test("provides the completed manual localization batches", () => {
    expect(getHomeCopy("de").title).toBe(
      "Jede Webseite als PDF/PPTX exportieren",
    );
    expect(getHomeCopy("fr").title).toBe(
      "Exportez n’importe quelle page web en PDF/PPTX",
    );
    expect(getHomeCopy("es").title).toBe(
      "Exporte cualquier página web a PDF/PPTX",
    );
    expect(getHomeCopy("nl").title).toBe(
      "Exporteer elke webpagina naar PDF/PPTX",
    );
    expect(getHomeCopy("pt").title).toBe(
      "Exporte qualquer página web para PDF/PPTX",
    );
    expect(getHomeCopy("it").title).toBe(
      "Esporta qualsiasi pagina web in PDF/PPTX",
    );
    expect(getHomeCopy("pl").title).toBe(
      "Eksportuj dowolną stronę internetową do PDF/PPTX",
    );
    expect(getHomeCopy("cs").title).toBe(
      "Exportujte libovolnou webovou stránku do PDF/PPTX",
    );
    expect(getHomeCopy("sv").title).toBe(
      "Exportera valfri webbsida till PDF/PPTX",
    );
    expect(getHomeCopy("no").title).toBe(
      "Eksporter en hvilken som helst nettside til PDF/PPTX",
    );
    expect(getHomeCopy("da").title).toBe(
      "Eksportér enhver webside til PDF/PPTX",
    );
    expect(getHomeCopy("fi").title).toBe(
      "Vie mikä tahansa verkkosivu PDF/PPTX-tiedostoksi",
    );
    expect(getHomeCopy("ro").title).toBe(
      "Exportați orice pagină web în PDF/PPTX",
    );
    expect(getHomeCopy("hu").title).toBe(
      "Exportáljon bármilyen weboldalt PDF/PPTX-fájlba",
    );
  });

  test("keeps the four homepage articles in the approved order", () => {
    expect(
      getHomeCopy("en").blog.items.map((item): string => item.slug),
    ).toEqual(expectedBlogSlugs);
    expect(
      getHomeCopy("ru").blog.items.map((item): string => item.slug),
    ).toEqual(expectedBlogSlugs);
    expect(
      getHomeCopy("de").blog.items.map((item): string => item.slug),
    ).toEqual(expectedBlogSlugs);
    expect(
      getHomeCopy("fr").blog.items.map((item): string => item.slug),
    ).toEqual(expectedBlogSlugs);
  });

  test("provides a translated Chrome badge for every locale", () => {
    const labels = localeRegistry.map(({ code }): string =>
      getChromeInstallLabel(code),
    );

    expect(labels).toHaveLength(localeRegistry.length);
    expect(labels.every((label): boolean => label.length > 0)).toBe(
      true,
    );
    expect(getChromeInstallLabel("en")).toBe("Install on Chrome");
    expect(getChromeInstallLabel("ru")).toBe("Установить в Chrome");
    expect(getChromeInstallLabel("de")).toBe(
      "In Chrome installieren",
    );
  });
});
