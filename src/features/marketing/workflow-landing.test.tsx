import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { getLandingContent } from "@/content/landings";
import { WorkflowLanding } from "./workflow-landing";

const requireLanding = (
  route: "page2pdf-gpt" | "web2powerpoint-gpt",
) => {
  const content = getLandingContent("en", route);
  if (!content) {
    throw new Error(`Missing test landing: ${route}`);
  }
  return content;
};

describe("WorkflowLanding calls to action", () => {
  test.each(["page2pdf-gpt", "web2powerpoint-gpt"] as const)(
    "links %s to the honest GPT catalog and extension guide",
    (route) => {
      render(
        <WorkflowLanding
          content={requireLanding(route)}
          family="gpt-workflow"
          locale="en"
        />,
      );

      expect(
        screen.getByRole("link", { name: "Browse GPTs" }).getAttribute("href"),
      ).toBe("https://chatgpt.com/gpts");
      expect(
        screen
          .getByRole("link", { name: "Open the extension guide" })
          .getAttribute("href"),
      ).toBe("/en/chrome-extension/how-to-use");
    },
  );
});
