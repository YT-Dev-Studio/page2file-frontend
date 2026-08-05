import { describe, expect, test } from "vitest";
import type { ExternalLinkKey } from "@/shared/config/site";
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
    serviceName: "One Page 2 PDF",
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
      expect(english?.primaryLabel).toBe(
        `Open ${serviceName} GPT App`,
      );
      expect(russian?.primaryLabel).toBe(
        `Открыть ${serviceName} GPT-приложение`,
      );
      expect(german?.primaryLabel).toContain(serviceName);
      expect(french?.primaryLabel).toContain(serviceName);
      expect(spanish?.primaryLabel).toContain(serviceName);
      expect(dutch?.primaryLabel).toContain(serviceName);
      expect(portuguese?.primaryLabel).toContain(serviceName);
      expect(italian?.primaryLabel).toContain(serviceName);
      expect(english?.sections).toHaveLength(3);
      expect(russian?.sections).toHaveLength(3);
      expect(german?.sections).toHaveLength(3);
      expect(french?.sections).toHaveLength(3);
      expect(spanish?.sections).toHaveLength(3);
      expect(dutch?.sections).toHaveLength(3);
      expect(portuguese?.sections).toHaveLength(3);
      expect(italian?.sections).toHaveLength(3);
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

        expect(localized?.title).not.toBe(english?.title);
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
