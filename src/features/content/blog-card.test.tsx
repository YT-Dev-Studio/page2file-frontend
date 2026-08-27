import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, test } from "vitest";
import type { ContentEntry } from "@/content/content-registry";
import { BlogCard } from "./blog-card";

const TestArticle = (): ReactNode => null;

const createEntry = (locale: "en" | "ru"): ContentEntry => ({
  kind: "blog",
  locale,
  slug: "test-entry",
  image: "/blog/mocks/choose-webpage-pdf-mode.webp",
  imageAlt: "Test cover",
  title: locale === "ru" ? "Тестовая статья" : "Test article",
  description: locale === "ru" ? "Описание статьи" : "Article description",
  author: "Page 2 File editorial team",
  publishedAt: "2026-08-27",
  updatedAt: "2026-08-27",
  readingMinutes: 3,
  component: TestArticle,
});

describe("BlogCard", () => {
  test.each([
    ["en", "Read", "Test article"],
    ["ru", "Читать", "Тестовая статья"],
  ] as const)(
    "uses the short %s reading action",
    (locale, action, title) => {
      render(<BlogCard entry={createEntry(locale)} locale={locale} />);

      expect(screen.getByText(action)).toBeTruthy();
      expect(screen.getByRole("link", { name: `${action}: ${title}` })).toBeTruthy();
    },
  );
});
