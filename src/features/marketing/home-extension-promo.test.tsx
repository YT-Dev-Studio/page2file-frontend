import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { HomeHero } from "./home-hero";

describe("HomeHero", () => {
  test("uses the honest Chrome Web Store fallback", () => {
    render(<HomeHero locale="en" />);

    const cta = screen.getByRole("link", { name: "Browse Chrome extensions" });
    expect(cta.getAttribute("href")).toBe("https://chromewebstore.google.com/");
    expect(cta.getAttribute("target")).toBe("_blank");
    expect(cta.getAttribute("rel")).toBe("noopener noreferrer");
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Save webpages and browser chats as PDF",
    );
  });
});
