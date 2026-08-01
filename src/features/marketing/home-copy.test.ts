import { describe, expect, test } from "vitest";
import { getHomeCopy } from "./home-copy";

const expectedBlogSlugs = [
  "why-print-to-pdf-breaks",
  "visual-vs-editable",
  "preserve-clickable-links",
  "long-webpage-page-breaks",
  "webpage-to-powerpoint",
  "export-ai-chats-privately",
];

describe("homepage copy", () => {
  test("provides reviewed Russian and English variants", () => {
    expect(getHomeCopy("ru").title).toContain("веб-страницу");
    expect(getHomeCopy("en").title).toBe(
      "Save any webpage as a useful file",
    );
  });

  test("uses English homepage copy for draft locales", () => {
    expect(getHomeCopy("de")).toBe(getHomeCopy("en"));
  });

  test("keeps the six homepage articles in the approved order", () => {
    expect(
      getHomeCopy("en").blog.items.map((item): string => item.slug),
    ).toEqual(expectedBlogSlugs);
    expect(
      getHomeCopy("ru").blog.items.map((item): string => item.slug),
    ).toEqual(expectedBlogSlugs);
  });
});
