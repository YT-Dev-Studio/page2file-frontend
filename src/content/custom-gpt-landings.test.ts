import { describe, expect, test } from "vitest";
import type { ExternalLinkKey } from "@/shared/config/site";
import { localeRegistry } from "@/shared/i18n/locales";
import type { StaticRoute } from "@/shared/routes/routes";
import { getLandingContent } from "./landings";

const gptRoutes: ReadonlyArray<{
  externalLinkKey: ExternalLinkKey;
  route: StaticRoute;
  serviceName: string;
}> = [
  {
    externalLinkKey: "page2pdfGpt",
    route: "page2pdf-gpt",
    serviceName: "Webpage to PDF Converter — Web2File",
  },
  {
    externalLinkKey: "web2pdfGpt",
    route: "web2pdf-gpt",
    serviceName: "Web 2 PDF",
  },
  {
    externalLinkKey: "html2pdfGpt",
    route: "html2pdf-gpt",
    serviceName: "HTML 2 PDF",
  },
  {
    externalLinkKey: "onePage2PowerpointGpt",
    route: "one-page2powerpoint-gpt",
    serviceName: "One Page 2 PowerPoint",
  },
  {
    externalLinkKey: "web2powerpointGpt",
    route: "web2powerpoint-gpt",
    serviceName: "Web 2 PowerPoint",
  },
];

const localizedLandingRoutes: ReadonlyArray<StaticRoute> = [
  "page2pdf-gpt",
  "web2pdf-gpt",
  "html2pdf-gpt",
  "one-page2powerpoint-gpt",
  "web2powerpoint-gpt",
  "export-ai-chat-to-pdf",
  "export-chatgpt-to-pdf",
  "export-claude-to-pdf",
  "export-gemini-to-pdf",
  "export-grok-to-pdf",
  "privacy",
  "terms",
];

describe("GPT App landing content", () => {
  test.each(gptRoutes)(
    "keeps $route bound to its own CTA and result contract",
    ({ externalLinkKey, route, serviceName }) => {
      const english = getLandingContent("en", route);
      const russian = getLandingContent("ru", route);
      const german = getLandingContent("de", route);
      const french = getLandingContent("fr", route);
      const spanish = getLandingContent("es", route);
      const dutch = getLandingContent("nl", route);
      const portuguese = getLandingContent("pt", route);
      const italian = getLandingContent("it", route);

      expect(english?.externalLinkKey).toBe(externalLinkKey);
      expect(russian?.externalLinkKey).toBe(externalLinkKey);
      expect(german?.externalLinkKey).toBe(externalLinkKey);
      expect(french?.externalLinkKey).toBe(externalLinkKey);
      expect(spanish?.externalLinkKey).toBe(externalLinkKey);
      expect(dutch?.externalLinkKey).toBe(externalLinkKey);
      expect(portuguese?.externalLinkKey).toBe(externalLinkKey);
      expect(italian?.externalLinkKey).toBe(externalLinkKey);
      const ctaName =
        route === "page2pdf-gpt"
          ? "GPT Webpage 2 PDF"
          : route === "html2pdf-gpt"
            ? "GPT HTML 2 PDF"
            : serviceName;
      expect(english?.primaryLabel).toContain(ctaName);
      expect(russian?.primaryLabel).toContain(ctaName);
      expect(german?.primaryLabel).toContain(ctaName);
      expect(french?.primaryLabel).toContain(ctaName);
      expect(spanish?.primaryLabel).toContain(ctaName);
      expect(dutch?.primaryLabel).toContain(ctaName);
      expect(portuguese?.primaryLabel).toContain(ctaName);
      expect(italian?.primaryLabel).toContain(ctaName);
      const sectionCount =
        route === "page2pdf-gpt" || route === "html2pdf-gpt" ? 5 : 3;
      expect(english?.sections).toHaveLength(sectionCount);
      expect(russian?.sections).toHaveLength(sectionCount);
      expect(german?.sections).toHaveLength(sectionCount);
      expect(french?.sections).toHaveLength(sectionCount);
      expect(spanish?.sections).toHaveLength(sectionCount);
      expect(dutch?.sections).toHaveLength(sectionCount);
      expect(portuguese?.sections).toHaveLength(sectionCount);
      expect(italian?.sections).toHaveLength(sectionCount);
      expect(english?.lead.length).toBeGreaterThan(120);
      expect(russian?.lead.length).toBeGreaterThan(120);
      expect(german?.lead.length).toBeGreaterThan(120);
      expect(french?.lead.length).toBeGreaterThan(120);
      expect(spanish?.lead.length).toBeGreaterThan(120);
      expect(dutch?.lead.length).toBeGreaterThan(120);
      expect(portuguese?.lead.length).toBeGreaterThan(120);
      expect(italian?.lead.length).toBeGreaterThan(120);
    },
  );

  test("keeps the renamed webpage converter contract aligned in every locale", () => {
    for (const { code } of localeRegistry) {
      const content = getLandingContent(code, "page2pdf-gpt");
      const visibleCopy = [
        content?.displayTitle,
        content?.title,
        content?.description,
        content?.lead,
        content?.primaryLabel,
        content?.workflowOverride?.detailsTitle,
        content?.workflowOverride?.firstStageDescription,
        content?.workflowOverride?.firstStageLabel,
        ...content?.sections.flatMap(({ body, heading }) => [heading, body]) ?? [],
      ].join(" ");

      expect(content?.sections).toHaveLength(5);
      expect(content?.title).toBe(
        "Webpage to PDF Converter — Web2File",
      );
      expect(content?.displayTitle).toBe("GPT: Webpage 2 PDF");
      expect(content?.primaryLabel).toContain("GPT Webpage 2 PDF");
      expect(content?.sections[0]?.heading).toContain("URL");
      expect(content?.workflowOverride?.detailsTitle.length).toBeGreaterThan(5);
      expect(
        content?.workflowOverride?.firstStageDescription.length,
      ).toBeGreaterThan(10);
      expect(
        content?.workflowOverride?.firstStageLabel.length,
      ).toBeGreaterThan(3);
      expect(visibleCopy).toContain("Webpage to PDF Converter — Web2File");
      expect(visibleCopy).toContain("Visual PDF");
      expect(visibleCopy).toContain("Interactive PDF");
      expect(visibleCopy).not.toContain("One Page 2 PDF");
    }
  });

  test("uses the requested English and Russian workflow copy", () => {
    const english = getLandingContent("en", "page2pdf-gpt");
    const russian = getLandingContent("ru", "page2pdf-gpt");

    expect(english?.workflowOverride).toEqual({
      detailsTitle: "Instructions for use",
      firstStageDescription: "Give the GPT App a working URL.",
      firstStageLabel: "Send URLs",
    });
    expect(russian?.workflowOverride).toEqual({
      detailsTitle: "Инструкция по использованию",
      firstStageDescription: "Передайте GPT-приложению рабочий URL.",
      firstStageLabel: "Отправьте URL",
    });
    expect(russian?.primaryLabel).toBe("Открыть GPT Webpage 2 PDF");
    expect(russian?.sections[0]?.heading).toBe(
      "1. Укажите один или несколько URL",
    );
  });

  test("keeps the HTML converter contract aligned in every locale", () => {
    for (const { code } of localeRegistry) {
      const content = getLandingContent(code, "html2pdf-gpt");
      const visibleCopy = [
        content?.displayTitle,
        content?.description,
        content?.lead,
        content?.primaryLabel,
        content?.workflowOverride?.detailsTitle,
        content?.workflowOverride?.firstStageDescription,
        content?.workflowOverride?.firstStageLabel,
        ...content?.sections.flatMap(({ body, heading }) => [heading, body]) ?? [],
      ].join(" ");

      expect(content?.title).toBe("HTML to PDF Converter — Web2File");
      expect(content?.displayTitle).toBe("GPT: HTML 2 PDF");
      expect(content?.description.length).toBeGreaterThanOrEqual(100);
      expect(content?.description.length).toBeLessThanOrEqual(170);
      expect(content?.primaryLabel).toContain("GPT HTML 2 PDF");
      expect(content?.sections).toHaveLength(5);
      expect(content?.sections[0]?.heading).toContain("HTML");
      expect(content?.workflowOverride?.detailsTitle.length).toBeGreaterThan(5);
      expect(
        content?.workflowOverride?.firstStageDescription.length,
      ).toBeGreaterThan(10);
      expect(
        content?.workflowOverride?.firstStageLabel.length,
      ).toBeGreaterThan(3);
      expect(visibleCopy).toContain("HTML");
      expect(visibleCopy).toContain("CSS");
      expect(visibleCopy).toContain("PDF");
      expect(visibleCopy).not.toContain("page2file.com");
      expect(visibleCopy).not.toContain("Code Interpreter");
    }
  });
});

describe("Spanish and Dutch legal content", () => {
  test.each(["privacy", "terms"] as const)(
    "provides complete localized %s documents",
    (route) => {
      const english = getLandingContent("en", route);

      for (const locale of ["es", "nl"] as const) {
        const localized = getLandingContent(locale, route);

        expect(localized?.legal).toBe(true);
        expect(localized?.title).not.toBe(english?.title);
        expect(localized?.sections.length).toBe(
          english?.sections.length,
        );
        expect(localized?.sections.some(({ id }) => id === "cookies")).toBe(
          route === "privacy",
        );
      }
    },
  );
});

describe("Portuguese and Italian legal content", () => {
  test.each(["privacy", "terms"] as const)(
    "provides complete localized %s documents",
    (route) => {
      const english = getLandingContent("en", route);

      for (const locale of ["pt", "it"] as const) {
        const localized = getLandingContent(locale, route);

        expect(localized?.legal).toBe(true);
        expect(localized?.title).not.toBe(english?.title);
        expect(localized?.sections.length).toBe(
          english?.sections.length,
        );
        expect(localized?.sections.some(({ id }) => id === "cookies")).toBe(
          route === "privacy",
        );
      }
    },
  );
});

describe("Polish and Czech legal content", () => {
  test.each(["privacy", "terms"] as const)(
    "provides complete localized %s documents",
    (route) => {
      const english = getLandingContent("en", route);

      for (const locale of ["pl", "cs"] as const) {
        const localized = getLandingContent(locale, route);

        expect(localized?.legal).toBe(true);
        expect(localized?.sections.length).toBe(
          english?.sections.length,
        );
        expect(localized?.sections.some(({ id }) => id === "cookies")).toBe(
          route === "privacy",
        );
      }
    },
  );
});

describe("completed landing localization batches", () => {
  test.each(["es", "nl", "pt", "it", "pl", "cs", "sv", "no", "da", "fi", "ro", "hu"] as const)(
    "does not fall back to English for %s",
    (locale) => {
      for (const route of localizedLandingRoutes) {
        const english = getLandingContent("en", route);
        const localized = getLandingContent(locale, route);

        if (route === "page2pdf-gpt") {
          expect(localized?.title).toBe(
            "Webpage to PDF Converter — Web2File",
          );
        } else if (route === "html2pdf-gpt") {
          expect(localized?.title).toBe(
            "HTML to PDF Converter — Web2File",
          );
        } else {
          expect(localized?.title).not.toBe(english?.title);
        }
        expect(localized?.description).not.toBe(english?.description);
        expect(localized?.lead).not.toBe(english?.lead);
      }
    },
  );
});

describe("Swedish and Norwegian legal content", () => {
  test.each(["privacy", "terms"] as const)(
    "provides complete localized %s documents",
    (route) => {
      const english = getLandingContent("en", route);

      for (const locale of ["sv", "no"] as const) {
        const localized = getLandingContent(locale, route);

        expect(localized?.legal).toBe(true);
        expect(localized?.sections.length).toBe(
          english?.sections.length,
        );
        expect(localized?.sections.some(({ id }) => id === "cookies")).toBe(
          route === "privacy",
        );
      }
    },
  );
});

describe("Danish and Finnish legal content", () => {
  test.each(["privacy", "terms"] as const)(
    "provides complete localized %s documents",
    (route) => {
      const english = getLandingContent("en", route);

      for (const locale of ["da", "fi"] as const) {
        const localized = getLandingContent(locale, route);

        expect(localized?.legal).toBe(true);
        expect(localized?.sections.length).toBe(
          english?.sections.length,
        );
        expect(localized?.sections.some(({ id }) => id === "cookies")).toBe(
          route === "privacy",
        );
      }
    },
  );
});

describe("Romanian and Hungarian legal content", () => {
  test.each(["privacy", "terms"] as const)(
    "provides complete localized %s documents",
    (route) => {
      const english = getLandingContent("en", route);

      for (const locale of ["ro", "hu"] as const) {
        const localized = getLandingContent(locale, route);

        expect(localized?.legal).toBe(true);
        expect(localized?.sections.length).toBe(
          english?.sections.length,
        );
        expect(localized?.sections.some(({ id }) => id === "cookies")).toBe(
          route === "privacy",
        );
      }
    },
  );
});
