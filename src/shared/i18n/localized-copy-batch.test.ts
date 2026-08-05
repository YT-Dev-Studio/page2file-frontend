import { describe, expect, it } from "vitest";
import { getContentCopy, formatContentDate } from "@/features/content/content-copy";
import { getConversionRuntimeCopy } from "@/features/converter/conversion-runtime-copy";
import { getConverterCopy } from "@/features/converter/converter-copy";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import { getMarketingCopy } from "@/features/marketing/marketing-copy";
import { getHomeCopy } from "@/features/marketing/home-copy";
import { getRealPreviewCopy } from "@/features/preview/real-preview-copy";
import { localeRegistry } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
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

  it("returns localized Spanish and Dutch UI copy", () => {
    expect(getMarketingCopy("es").landing.stepsLabel).toBe("Cómo funciona");
    expect(getContentCopy("es").readArticleLabel).toBe("Leer artículo");
    expect(getMarketingCopy("nl").landing.stepsLabel).toBe("Hoe het werkt");
    expect(getContentCopy("nl").readArticleLabel).toBe("Artikel lezen");
  });

  it("returns localized Portuguese and Italian UI copy", () => {
    expect(getMarketingCopy("pt").landing.stepsLabel).toBe("Como funciona");
    expect(getContentCopy("pt").readArticleLabel).toBe("Ler artigo");
    expect(getExtensionCopy("pt").stepLabel).toBe("PASSO");
    expect(getRealPreviewCopy("pt").downloadFile).toBe(
      "Transferir ficheiro",
    );
    expect(getMarketingCopy("it").landing.stepsLabel).toBe("Come funziona");
    expect(getContentCopy("it").readArticleLabel).toBe("Leggi l’articolo");
    expect(getExtensionCopy("it").stepLabel).toBe("PASSAGGIO");
    expect(getRealPreviewCopy("it").downloadFile).toBe("Scarica file");
  });

  it("returns localized Polish and Czech UI copy", () => {
    expect(getMarketingCopy("pl").landing.stepsLabel).toBe("Jak to działa");
    expect(getContentCopy("pl").readArticleLabel).toBe("Czytaj artykuł");
    expect(getExtensionCopy("pl").stepLabel).toBe("KROK");
    expect(getRealPreviewCopy("pl").downloadFile).toBe("Pobierz plik");
    expect(getMarketingCopy("cs").landing.stepsLabel).toBe("Jak to funguje");
    expect(getContentCopy("cs").readArticleLabel).toBe("Číst článek");
    expect(getExtensionCopy("cs").stepLabel).toBe("KROK");
    expect(getRealPreviewCopy("cs").downloadFile).toBe("Stáhnout soubor");
  });

  it("returns localized Swedish and Norwegian UI copy", () => {
    expect(getMarketingCopy("sv").landing.stepsLabel).toBe("Så fungerar det");
    expect(getContentCopy("sv").readArticleLabel).toBe("Läs artikeln");
    expect(getExtensionCopy("sv").stepLabel).toBe("STEG");
    expect(getRealPreviewCopy("sv").downloadFile).toBe("Hämta fil");
    expect(getMarketingCopy("no").landing.stepsLabel).toBe("Slik fungerer det");
    expect(getContentCopy("no").readArticleLabel).toBe("Les artikkelen");
    expect(getExtensionCopy("no").stepLabel).toBe("TRINN");
    expect(getRealPreviewCopy("no").downloadFile).toBe("Last ned fil");
  });

  it("returns localized Danish and Finnish UI copy", () => {
    expect(getMarketingCopy("da").landing.stepsLabel).toBe("Sådan fungerer det");
    expect(getContentCopy("da").readArticleLabel).toBe("Læs artiklen");
    expect(getExtensionCopy("da").stepLabel).toBe("TRIN");
    expect(getRealPreviewCopy("da").downloadFile).toBe("Download fil");
    expect(getMarketingCopy("fi").landing.stepsLabel).toBe("Näin se toimii");
    expect(getContentCopy("fi").readArticleLabel).toBe("Lue artikkeli");
    expect(getExtensionCopy("fi").stepLabel).toBe("VAIHE");
    expect(getRealPreviewCopy("fi").downloadFile).toBe("Lataa tiedosto");
  });

  it("returns localized Romanian and Hungarian UI copy", () => {
    expect(getMarketingCopy("ro").landing.stepsLabel).toBe("Cum funcționează");
    expect(getContentCopy("ro").readArticleLabel).toBe("Citiți articolul");
    expect(getExtensionCopy("ro").stepLabel).toBe("PASUL");
    expect(getRealPreviewCopy("ro").downloadFile).toBe("Descarcă fișierul");
    expect(getMarketingCopy("hu").landing.stepsLabel).toBe("Hogyan működik");
    expect(getContentCopy("hu").readArticleLabel).toBe("Cikk olvasása");
    expect(getExtensionCopy("hu").stepLabel).toBe("LÉPÉS");
    expect(getRealPreviewCopy("hu").downloadFile).toBe("Fájl letöltése");
  });

  it("does not use English fallback for any completed locale dictionary", () => {
    const translatedLocales = localeRegistry
      .map(({ code }) => code)
      .filter((locale) => locale !== "en" && locale !== "ru");

    for (const locale of translatedLocales) {
      expect(getSiteCopy(locale).header.extensionAction).not.toBe(
        getSiteCopy("en").header.extensionAction,
      );
      expect(getConverterCopy(locale).formats.pdf.title).not.toBe(
        getConverterCopy("en").formats.pdf.title,
      );
      expect(getConversionRuntimeCopy(locale).submitPending).not.toBe(
        getConversionRuntimeCopy("en").submitPending,
      );
      expect(getMarketingCopy(locale).landing.stepsLabel).not.toBe(
        getMarketingCopy("en").landing.stepsLabel,
      );
      expect(getContentCopy(locale).readArticleLabel).not.toBe(
        getContentCopy("en").readArticleLabel,
      );
      expect(getExtensionCopy(locale).title).not.toBe(
        getExtensionCopy("en").title,
      );
      expect(getRealPreviewCopy(locale).downloadFile).not.toBe(
        getRealPreviewCopy("en").downloadFile,
      );
      expect(getSeoCopy(locale, "home").title).not.toBe(
        getSeoCopy("en", "home").title,
      );
      expect(getHomeCopy(locale).title).not.toBe(getHomeCopy("en").title);
    }
  });

});
