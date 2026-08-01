import { describe, expect, test } from "vitest";
import { getSiteCopy } from "./site-copy";

describe("site shell copy", () => {
  test("localizes the shared header and removes the reviews anchor", () => {
    const russianNavigation = getSiteCopy("ru").header.navigation;

    expect(russianNavigation.blog).toBe("Блог");
    expect(Object.values(russianNavigation)).not.toContain("Отзывы");
  });

  test("uses English shell copy for unreviewed locales", () => {
    expect(getSiteCopy("de")).toBe(getSiteCopy("en"));
  });
});
