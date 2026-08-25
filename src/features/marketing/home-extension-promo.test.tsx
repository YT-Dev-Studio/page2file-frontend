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

    const cta = screen.getByRole("link", { name: "Browse Chrome extensions" });
    expect(cta.getAttribute("href")).toBe("https://chromewebstore.google.com/");
    expect(cta.getAttribute("target")).toBe("_blank");
    expect(cta.getAttribute("rel")).toBe("noopener noreferrer");
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Save the current webpage or browser chat as PDF",
    );
    expect(
      screen.getByAltText(
        "A browser tab, the extension button, and a finished PDF connected in three steps.",
      ),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "From the current tab to a PDF" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Processed in your browser" }),
    ).toBeTruthy();
    expect(
      screen.getAllByRole("link", { name: /Browse Chrome extensions/ }),
    ).toHaveLength(3);
  });
});
