import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { HomeExtensionPromo, HomeFinalCta } from "./home-extension-promo";
import { HomeHero } from "./home-hero";

describe("HomeHero", () => {
  test("uses the honest Chrome Web Store fallback", () => {
    render(
      <>
        <HomeHero locale="en" />
        <HomeExtensionPromo locale="en" />
        <HomeFinalCta locale="en" />
      </>,
    );

    const cta = screen.getByRole("link", { name: "Install Page 2 PDF" });
    expect(cta.getAttribute("href")).toBe("https://chromewebstore.google.com/");
    expect(cta.getAttribute("target")).toBe("_blank");
    expect(cta.getAttribute("rel")).toBe("noopener noreferrer");
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Save the current webpage or chat as PDF.",
    );
    expect(
      screen.getByAltText(
        "A browser tab, the extension button, and a finished PDF connected in three steps.",
      ),
    ).toBeTruthy();
    expect(
      screen.getAllByRole("heading", { name: "Export the open tab to PDF" }),
    ).toHaveLength(2);
    expect(
      screen.getAllByText(
        "The website does not receive the tab content or store user data. Open any website in a new tab and run Page 2 PDF.",
      ),
    ).toHaveLength(2);
    expect(
      screen.getAllByRole("link", {
        name: "Export the open tab to PDF. Install extension",
      }),
    ).toHaveLength(2);
    expect(
      screen.getByText("PAGE 2 PDF · CHROME EXTENSION"),
    ).toBeTruthy();
    expect(
      screen.getByText("Page 2 PDF — Page 2 File"),
    ).toBeTruthy();
    expect(
      screen.queryByText("PAGE 2 FILE · CHROME EXTENSION"),
    ).toBeNull();
    expect(
      screen.getByRole("link", { name: "View instructions" }),
    ).toBeTruthy();
  });
});
