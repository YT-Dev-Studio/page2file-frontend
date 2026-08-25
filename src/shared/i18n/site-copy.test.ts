import { describe, expect, test } from "vitest";
import { getSiteCopy } from "./site-copy";

describe("site shell copy", () => {
  test("contains only copy used by the reduced site shell", () => {
    const russianCopy = getSiteCopy("ru");

    expect(russianCopy.header).not.toHaveProperty("navigation");
    expect(russianCopy.footer).not.toHaveProperty("brandDescription");
    expect(Object.keys(russianCopy.footer.links).sort()).toEqual([
      "cookiePolicy",
      "extension",
      "privacy",
      "terms",
    ]);
  });

  test("keeps English and Russian shell copy localized", () => {
    expect(getSiteCopy("en").header.extensionAction).toBe("Open Page 2 PDF");
    expect(getSiteCopy("ru").footer.links.privacy).toBe(
      "Политика конфиденциальности",
    );
  });
});
