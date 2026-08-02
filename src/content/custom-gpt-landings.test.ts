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
    serviceName: "Page2PDF",
  },
  {
    externalLinkKey: "web2pdfGpt",
    route: "web2pdf-gpt",
    serviceName: "Web2PDF",
  },
  {
    externalLinkKey: "html2pdfGpt",
    route: "html2pdf-gpt",
    serviceName: "HTML2PDF",
  },
  {
    externalLinkKey: "web2powerpointGpt",
    route: "web2powerpoint-gpt",
    serviceName: "Web2PowerPoint",
  },
];

describe("Custom GPT landing content", () => {
  test.each(gptRoutes)(
    "keeps $route bound to its own CTA and service copy",
    ({ externalLinkKey, route, serviceName }) => {
      const english = getLandingContent("en", route);
      const russian = getLandingContent("ru", route);

      expect(english?.externalLinkKey).toBe(externalLinkKey);
      expect(russian?.externalLinkKey).toBe(externalLinkKey);
      expect(english?.primaryLabel).toBe(
        `Open ${serviceName} in ChatGPT`,
      );
      expect(russian?.primaryLabel).toBe(
        `Открыть ${serviceName} в ChatGPT`,
      );
      expect(english?.lead.length).toBeGreaterThan(120);
      expect(russian?.lead.length).toBeGreaterThan(120);
    },
  );
});
