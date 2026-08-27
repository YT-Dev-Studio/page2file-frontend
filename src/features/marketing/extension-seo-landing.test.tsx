import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { getExtensionSeoLanding } from "@/content/extension-seo-landings";
import { ExtensionSeoLanding } from "./extension-seo-landing";

describe("ExtensionSeoLanding branding", () => {
  test("uses Page 2 File as the site and Page 2 PDF as the product in breadcrumbs", () => {
    render(
      <ExtensionSeoLanding
        content={getExtensionSeoLanding("chrome-extension/webpage-to-pdf")}
      />,
    );

    const breadcrumbs = screen.getByRole("navigation", {
      name: "Breadcrumb",
    });
    const links = Array.from(breadcrumbs.querySelectorAll("a"));

    expect(links.map((link) => link.textContent)).toEqual([
      "Page 2 File",
      "Page 2 PDF",
      "Save the webpage open in Chrome as PDF",
    ]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/en",
      "/en/chrome-extension/how-to-use",
      "/en/chrome-extension/webpage-to-pdf",
    ]);
  });
});
