import { describe, expect, test } from "vitest";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import { localeRegistry } from "@/shared/i18n/locales";
import { getHomeMarketingCopy } from "./home-content";

describe("homepage extension copy", () => {
  test("uses the approved English positioning", () => {
    const copy = getExtensionCopy("en");
    const marketingCopy = getHomeMarketingCopy("en");

    expect(copy.homeTitle).toBe(
      "Save the current webpage or chat as PDF.",
    );
    expect(copy.homeLead).toContain(
      "Page 2 PDF is the Chrome extension from Page 2 File.",
    );
    expect(marketingCopy.faqItems.map(({ question }) => question)).toContain(
      "Can Page 2 PDF save a webpage that requires sign-in?",
    );
    expect(marketingCopy.faqItems.map(({ question }) => question)).toContain(
      "Does Page 2 PDF upload or store my webpage and chat content?",
    );
    expect(copy.modes.map(({ title }) => title)).toEqual([
      "Accurate copy",
      "Editable document",
      "AI / Chat",
    ]);
    expect(copy.sources.join(" ")).toContain("Authorized pages");
    expect(copy.sources.join(" ")).toContain("Google Docs, Sheets, and Slides");
    expect(copy.modes[1].body).not.toContain("Chromium");
    expect(copy.modes[1].bodyLink).toEqual({
      href: "/en/blog/preserve-webpage-links-forms-text",
      label: "project archive",
    });
  });

  test("uses the source-provided Russian positioning and localized modes", () => {
    const copy = getExtensionCopy("ru");
    const marketingCopy = getHomeMarketingCopy("ru");

    expect(copy.homeTitle).toBe("Сохраняйте текущую веб-страницу или чат в PDF.");
    expect(copy.homeLead).toContain(
      "Page 2 PDF — расширение Chrome от Page 2 File.",
    );
    expect(marketingCopy.faqItems.map(({ question }) => question)).toContain(
      "Может ли Page 2 PDF сохранить страницу после входа в аккаунт?",
    );
    expect(marketingCopy.faqItems.map(({ question }) => question)).toContain(
      "Загружает или хранит ли Page 2 PDF содержимое страниц и чатов?",
    );
    expect(copy.modes.map(({ title }) => title)).toEqual([
      "Точная копия",
      "Редактируемый документ",
      "AI / Чат",
    ]);
    expect(copy.sources[1]).toBe(
      "Авторизованные страницы, которые открыты в текущей вкладке браузера.",
    );
    expect(copy.steps[4].body).toBe(
      "Дождитесь загрузки доступного контента и подготовки предпросмотра, не закрывая исходную страницу и не переходя на другую страницу.",
    );
    expect(copy.privacyPoints[1]).toBe(
      "Временные данные предпросмотра удаляются после сессии. Оставшиеся данные старше двух часов очищаются при следующем запуске расширения.",
    );
  });

  test("provides complete localized homepage copy for every locale", () => {
    for (const { code } of localeRegistry) {
      const copy = getExtensionCopy(code);
      const marketingCopy = getHomeMarketingCopy(code);

      expect(copy.homeTitle.length).toBeGreaterThan(20);
      expect(copy.modes).toHaveLength(3);
      expect(copy.sources).toHaveLength(4);
      expect(copy.steps).toHaveLength(6);
      expect(copy.privacyPoints).toHaveLength(3);
      expect(marketingCopy.faqItems).toHaveLength(7);
      expect(marketingCopy.heroIllustrationAlt.length).toBeGreaterThan(20);
      if (code !== "en") {
        expect(copy.homeTitle).not.toBe(getExtensionCopy("en").homeTitle);
        expect(copy.homeLead).not.toBe(getExtensionCopy("en").homeLead);
        expect(marketingCopy.faqTitle).not.toBe(
          getHomeMarketingCopy("en").faqTitle,
        );
      }
    }
  });

  test("keeps unsupported promises out of the canonical copy", () => {
    const visibleCopy = JSON.stringify(getExtensionCopy("en"));

    expect(visibleCopy).not.toMatch(/PowerPoint|PPTX|merge|split|reorder|upload a URL/i);
    expect(visibleCopy).toContain("2,000");
    expect(visibleCopy).toContain("older than two hours");
    expect(visibleCopy).toContain("the next time the extension runs");
    expect(visibleCopy).not.toContain("within two hours");
  });
});
