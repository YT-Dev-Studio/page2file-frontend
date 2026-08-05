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
    "links %s to its configured destination without an extension guide action",
    (route) => {
      render(
        <WorkflowLanding
          content={requireLanding(route)}
          family="gpt-workflow"
          locale="en"
        />,
      );

      const expectedCta =
        route === "page2pdf-gpt"
          ? {
              href: "https://chatgpt.com/g/g-6a6911cbe52c819182c9cc66d9e68d01-web2file-webpage-to-pdf-converter",
              name: "Open GPT Webpage 2 PDF",
            }
          : {
              href: "https://chatgpt.com/gpts",
              name: "Browse GPTs",
            };

      expect(
        screen
          .getByRole("link", { name: expectedCta.name })
          .getAttribute("href"),
      ).toBe(expectedCta.href);
      expect(
        screen.queryByRole("link", { name: "Open the extension guide" }),
      ).toBeNull();

      if (route === "page2pdf-gpt") {
        expect(
          screen.getByRole("heading", { name: "Instructions for use" }),
        ).toBeTruthy();
        expect(screen.getByText("Send URLs")).toBeTruthy();
        expect(
          screen.getByText("Give the GPT App a working URL."),
        ).toBeTruthy();
      } else {
        expect(
          screen.getByRole("heading", {
            name: "Three steps from source to file",
          }),
        ).toBeTruthy();
        expect(screen.getByText("Provide the source")).toBeTruthy();
      }
    },
  );
});
