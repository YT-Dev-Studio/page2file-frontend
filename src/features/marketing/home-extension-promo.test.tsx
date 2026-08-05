import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { HomeExtensionPromo } from "./home-extension-promo";

describe("HomeExtensionPromo", () => {
  test("uses the honest Chrome Web Store placeholder for the banner", () => {
    render(<HomeExtensionPromo locale="de" />);

    const promo = screen.getByRole("link", {
      name: /aktuellen tab exportieren.*chrome-erweiterungen durchsuchen/i,
    });

    expect(promo.getAttribute("href")).toBe(
      "https://chromewebstore.google.com/",
    );
    expect(promo.getAttribute("target")).toBe("_blank");
    expect(promo.getAttribute("rel")).toBe("noopener noreferrer");
    expect(promo.querySelector("button")).toBeNull();
    expect(screen.getByText("Chrome-Erweiterungen durchsuchen")).not.toBeNull();
  });
});
