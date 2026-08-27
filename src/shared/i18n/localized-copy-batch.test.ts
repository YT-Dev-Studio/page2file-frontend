import { describe, expect, it } from "vitest";
import { getConversionRuntimeCopy } from "@/features/converter/conversion-runtime-copy";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import { getMarketingCopy } from "@/features/marketing/marketing-copy";
import { getRealPreviewCopy } from "@/features/preview/real-preview-copy";
import { localeRegistry } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { getSeoCopy } from "@/shared/seo/seo-copy";

describe("localized extension copy", () => {
  it("returns localized guidance for every indexed locale", () => {
    const english = getExtensionCopy("en");

    for (const { code } of localeRegistry) {
      const copy = getExtensionCopy(code);
      expect(copy.steps).toHaveLength(6);
      expect(copy.limits).toHaveLength(5);
      expect(copy.bannerActionLabel.length).toBeGreaterThan(10);
      expect(copy.supportedGroups).toHaveLength(3);

      if (code !== "en") {
        expect(copy.homeTitle).not.toBe(english.homeTitle);
        expect(copy.guideLead).not.toBe(english.guideLead);
        expect(copy.supportedGroups[0].body).not.toBe(english.supportedGroups[0].body);
      }
    }
  });

  it("keeps remaining shared and technical UI dictionaries localized", () => {
    expect(getSeoCopy("ru", "home").title).toBe(
      "Page 2 PDF — расширение Chrome для страниц и чатов",
    );

    for (const { code } of localeRegistry.filter(({ code }) => code !== "en")) {
      expect(getSiteCopy(code).header.extensionAction).not.toBe(
        getSiteCopy("en").header.extensionAction,
      );
      expect(getConversionRuntimeCopy(code).submitPending).not.toBe(
        getConversionRuntimeCopy("en").submitPending,
      );
      expect(getMarketingCopy(code).landing.stepsLabel).not.toBe(
        getMarketingCopy("en").landing.stepsLabel,
      );
      expect(getRealPreviewCopy(code).downloadFile).not.toBe(
        getRealPreviewCopy("en").downloadFile,
      );
      expect(getSeoCopy(code, "home").title).not.toBe(
        getSeoCopy("en", "home").title,
      );
      expect(getSeoCopy(code, "notFound").description).not.toBe(
        getSeoCopy("en", "notFound").description,
      );
    }
  });
});
