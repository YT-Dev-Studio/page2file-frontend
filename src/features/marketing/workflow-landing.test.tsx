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

describe("WorkflowLanding converter CTA", () => {
  test("keeps PDF GPT workflows on the PDF converter", () => {
    render(
      <WorkflowLanding
        content={requireLanding("page2pdf-gpt")}
        family="gpt-workflow"
        locale="en"
      />,
    );

    expect(
      screen
        .getByRole("link", { name: "Open the Web 2 PDF converter" })
        .getAttribute("href"),
    ).toBe("/en/convert-webpage-to-pdf");
  });

  test("keeps Web2PowerPoint on the PowerPoint converter", () => {
    render(
      <WorkflowLanding
        content={requireLanding("web2powerpoint-gpt")}
        family="gpt-workflow"
        locale="en"
      />,
    );

    expect(
      screen
        .getByRole("link", {
          name: "Open the Web 2 PowerPoint converter",
        })
        .getAttribute("href"),
    ).toBe("/en/convert-webpage-to-powerpoint");
  });
});
