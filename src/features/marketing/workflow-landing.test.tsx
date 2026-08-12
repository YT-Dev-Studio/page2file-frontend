import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { getLandingContent } from "@/content/landings";
import { WorkflowLanding } from "./workflow-landing";

const requireLanding = (
  route: "page2pdf-gpt" | "html2pdf-gpt",
) => {
  const content = getLandingContent("en", route);
  if (!content) {
    throw new Error(`Missing test landing: ${route}`);
  }
  return content;
};

describe("WorkflowLanding calls to action", () => {
  test.each(["page2pdf-gpt", "html2pdf-gpt"] as const)(
    "links %s to its configured destination without an extension guide action",
    (route) => {
      render(
        <WorkflowLanding
          content={requireLanding(route)}
          family="gpt-workflow"
          locale="en"
        />,
      );

      const expectedCta = route === "page2pdf-gpt"
        ? {
              href: "https://chatgpt.com/g/g-6a6911cbe52c819182c9cc66d9e68d01-web2file-webpage-to-pdf-converter",
              name: "Open GPT Webpage 2 PDF",
            }
        : route === "html2pdf-gpt"
          ? {
              href: "https://chatgpt.com/g/g-6a7227252b1081918497653732efb3a8-web2file-html-to-pdf-converter",
              name: "Open GPT HTML 2 PDF",
            }
          : {
              href: "https://chatgpt.com/g/g-6a7227252b1081918497653732efb3a8-web2file-html-to-pdf-converter",
              name: "Open GPT HTML 2 PDF",
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
          screen.getByRole("heading", { name: "GPT: Webpage 2 PDF", level: 1 }),
        ).toBeTruthy();
        expect(
          screen.getByRole("heading", { name: "Instructions for use" }),
        ).toBeTruthy();
        expect(screen.getByText("Send URLs")).toBeTruthy();
        expect(
          screen.getByText("Give the GPT App a working URL."),
        ).toBeTruthy();
      } else if (route === "html2pdf-gpt") {
        expect(
          screen.getByRole("heading", { name: "GPT: HTML 2 PDF", level: 1 }),
        ).toBeTruthy();
        expect(
          screen.getByRole("heading", {
            name: "Five steps from HTML to PDF",
          }),
        ).toBeTruthy();
        expect(screen.getByText("Upload HTML")).toBeTruthy();
        expect(
          screen.getByText("Give the GPT App one HTML file."),
        ).toBeTruthy();
      }
    },
  );
});
