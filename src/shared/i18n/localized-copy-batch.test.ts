import { describe, expect, it } from "vitest";
import { getContentCopy, formatContentDate } from "@/features/content/content-copy";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import { getMarketingCopy } from "@/features/marketing/marketing-copy";
import { getHomeCopy } from "@/features/marketing/home-copy";
import { getRealPreviewCopy } from "@/features/preview/real-preview-copy";
import { getSeoCopy } from "@/shared/seo/seo-copy";

describe("German and French localization batch", () => {
  it("returns localized marketing and extension guidance", () => {
    expect(getMarketingCopy("de").landing.stepsLabel).toBe(
      "So funktioniert es",
    );
    expect(getMarketingCopy("fr").landing.stepsLabel).toBe("Fonctionnement");
    expect(getExtensionCopy("de").stepLabel).toBe("SCHRITT");
    expect(getExtensionCopy("fr").stepLabel).toBe("ÉTAPE");
  });

  it("returns localized content and SEO copy", () => {
    expect(getContentCopy("de").readArticleLabel).toBe("Artikel lesen");
    expect(getContentCopy("fr").readArticleLabel).toBe("Lire l’article");
    expect(getSeoCopy("de", "notFound").title).toBe(
      "Page 2 File Seite nicht gefunden",
    );
    expect(getSeoCopy("fr", "notFound").title).toBe(
      "Page Page 2 File demandée introuvable",
    );
  });

  it("returns localized homepage and preview copy", () => {
    expect(getHomeCopy("de").howItWorks.stepLabels[0]).toBe("Schritt 1");
    expect(getHomeCopy("fr").howItWorks.stepLabels[0]).toBe("Étape 1");
    expect(getRealPreviewCopy("de").downloadFile).toBe(
      "Datei herunterladen",
    );
    expect(getRealPreviewCopy("fr").downloadFile).toBe(
      "Télécharger le fichier",
    );
  });

  it("formats dates with the selected locale", () => {
    expect(formatContentDate("de", "2026-08-04")).toContain("August");
    expect(formatContentDate("fr", "2026-08-04")).toContain("août");
  });

  it("keeps the English fallback for languages not translated yet", () => {
    expect(getMarketingCopy("es").landing.stepsLabel).toBe("How it works");
    expect(getContentCopy("es").readArticleLabel).toBe("Read article");
  });

});
