import { describe, expect, test } from "vitest";
import { getSiteCopy } from "./site-copy";

describe("site shell copy", () => {
  test("localizes the shared header and removes the reviews anchor", () => {
    const russianNavigation = getSiteCopy("ru").header.navigation;

    expect(russianNavigation.blog).toBe("Блог");
    expect(Object.values(russianNavigation)).not.toContain("Отзывы");
  });

  test("localizes shell copy independently from indexing review state", () => {
    expect(getSiteCopy("de").header.extensionAction).toBe(
      "Jetzt installieren",
    );
    expect(getSiteCopy("fr").footer.links.privacy).toBe(
      "Confidentialité",
    );
    expect(getSiteCopy("es")).toBe(getSiteCopy("en"));
  });
});
