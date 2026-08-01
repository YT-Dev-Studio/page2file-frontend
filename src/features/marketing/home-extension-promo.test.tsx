import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { HomeExtensionPromo } from "./home-extension-promo";

describe("HomeExtensionPromo", () => {
  test("uses one locale-aware extension link for the entire banner", () => {
    render(<HomeExtensionPromo locale="de" />);

    const promo = screen.getByRole("link", {
      name: /save the current tab.*in chrome installieren/i,
    });

    expect(promo.getAttribute("href")).toBe(
      "/de/chrome-extension/how-to-use",
    );
    expect(promo.getAttribute("target")).toBe("_blank");
    expect(promo.getAttribute("rel")).toBe("noopener noreferrer");
    expect(promo.querySelector("button")).toBeNull();
    expect(screen.getByText("In Chrome installieren")).not.toBeNull();
  });
});
