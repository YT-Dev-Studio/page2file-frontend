import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { HomeExtensionPromo, HomeFinalCta } from "./home-extension-promo";
import { HomeHero } from "./home-hero";

describe("HomeHero", () => {
  test("disables unavailable extension install surfaces", () => {
    const { container } = render(
      <>
        <HomeHero locale="en" />
        <HomeExtensionPromo locale="en" />
        <HomeFinalCta locale="en" />
      </>,
    );

    const cta = screen.getByRole("button", { name: "Install Page 2 PDF" });
    expect((cta as HTMLButtonElement).disabled).toBe(true);
    expect(
      cta.closest("[data-extension-unavailable]")?.getAttribute("aria-label"),
    ).toBe(
      "Install Page 2 PDF. The extension will be available soon.",
    );
    expect(screen.queryByRole("link", { name: "Install Page 2 PDF" })).toBeNull();
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
    const banners = screen.getAllByRole("article", {
      name: "Export the open tab to PDF",
    });
    expect(banners).toHaveLength(2);
    expect(
      banners.every(
        (banner) =>
          banner
            .closest("[data-extension-unavailable]")
            ?.getAttribute("aria-disabled") === "true",
      ),
    ).toBe(true);
    expect(container.querySelectorAll('[role="tooltip"]')).toHaveLength(3);
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
    expect(
      screen
        .getByRole("link", { name: "View instructions" })
        .getAttribute("data-p2f-analytics-event"),
    ).toBe("tutorial_begin");
  });
});
