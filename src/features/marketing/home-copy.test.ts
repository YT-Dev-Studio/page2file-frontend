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
    expect(getHomeCopy("ru").title).toContain("веб-страницу");
    expect(getHomeCopy("en").title).toBe(
      "Save any webpage as a useful file",
    );
  });

  test("uses English homepage copy for unreviewed locales", () => {
    expect(getHomeCopy("de")).toBe(getHomeCopy("en"));
  });

  test("keeps the four homepage articles in the approved order", () => {
    expect(
      getHomeCopy("en").blog.items.map((item): string => item.slug),
    ).toEqual(expectedBlogSlugs);
    expect(
      getHomeCopy("ru").blog.items.map((item): string => item.slug),
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
