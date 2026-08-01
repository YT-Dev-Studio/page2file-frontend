import { describe, expect, test } from "vitest";
import { externalLinks } from "@/shared/config/site";
import { getExtensionLink } from "./extension-link";

describe("getExtensionLink", () => {
  test("uses the locale-aware internal fallback when no store URL exists", () => {
    if (externalLinks.chromeExtension) {
      expect(getExtensionLink("de")).toEqual({
        external: true,
        href: externalLinks.chromeExtension,
      });
      return;
    }

    expect(getExtensionLink("de")).toEqual({
      external: false,
      href: "/de/chrome-extension/how-to-use",
    });
  });
});
