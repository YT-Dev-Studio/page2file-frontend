import { describe, expect, test } from "vitest";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import { localeRegistry } from "@/shared/i18n/locales";
import { getHomeMarketingCopy } from "./home-content";

describe("homepage extension copy", () => {
  test("uses the approved English positioning", () => {
    const copy = getExtensionCopy("en");

    expect(copy.homeTitle).toBe("Save webpages and browser chats as PDF");
    expect(copy.modes.map(({ title }) => title)).toEqual([
      "Accurate copy",
      "Editable document",
      "AI / Chat",
    ]);
    expect(copy.sources.join(" ")).toContain("Local HTML");
    expect(copy.sources.join(" ")).toContain("Google Docs, Sheets, and Slides");
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
