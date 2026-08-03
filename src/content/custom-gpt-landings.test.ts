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

describe("GPT App landing content", () => {
  test.each(gptRoutes)(
    "keeps $route bound to its own CTA and result contract",
    ({ externalLinkKey, route, serviceName }) => {
      const english = getLandingContent("en", route);
      const russian = getLandingContent("ru", route);

      expect(english?.externalLinkKey).toBe(externalLinkKey);
      expect(russian?.externalLinkKey).toBe(externalLinkKey);
      expect(english?.primaryLabel).toBe(
        `Open ${serviceName} GPT App`,
      );
      expect(russian?.primaryLabel).toBe(
        `Открыть ${serviceName} GPT-приложение`,
      );
      expect(english?.sections).toHaveLength(3);
      expect(russian?.sections).toHaveLength(3);
      expect(english?.lead.length).toBeGreaterThan(120);
      expect(russian?.lead.length).toBeGreaterThan(120);
    },
  );
});
