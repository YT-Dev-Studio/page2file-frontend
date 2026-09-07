import { describe, expect, test } from "vitest";
import { externalLinks } from "@/shared/config/site";
import { getExtensionLink } from "./extension-link";

describe("getExtensionLink", () => {
  test("adds page and placement attribution to the store URL", () => {
    const link = getExtensionLink("en", {
      page: "/en/chrome-extension/webpage-to-pdf",
      placement: "hero",
    });
    const url = new URL(link.href);

    expect(link.external).toBe(true);
    expect(link.placeholder).toBe(false);
    expect(url.searchParams.get("utm_source")).toBe("page2file.com");
    expect(url.searchParams.get("utm_medium")).toBe("referral");
    expect(url.searchParams.get("utm_campaign")).toBe(
      "en_chrome_extension_webpage_to_pdf_hero",
    );
  });

  test("keeps existing store parameters and replaces stale attribution", () => {
    const originalLink = { ...externalLinks.chromeExtension };

    try {
      externalLinks.chromeExtension.href = `${originalLink.href}?hl=en&utm_source=old`;
      const link = getExtensionLink("en", {
        page: "home",
        placement: "promo",
      });
      const url = new URL(link.href);

      expect(url.searchParams.get("hl")).toBe("en");
      expect(url.searchParams.get("utm_source")).toBe("page2file.com");
      expect(url.searchParams.get("utm_campaign")).toBe("en_home_promo");
    } finally {
      Object.assign(externalLinks.chromeExtension, originalLink);
    }
  });

  test("uses an untagged locale-aware fallback when no store URL exists", () => {
    const originalLink = { ...externalLinks.chromeExtension };

    try {
      externalLinks.chromeExtension.href = "";

      expect(
        getExtensionLink("ru", {
          page: "/ru/about",
          placement: "header",
        }),
      ).toEqual({
        external: false,
        href: "/ru/chrome-extension/how-to-use",
        placeholder: false,
      });
    } finally {
      Object.assign(externalLinks.chromeExtension, originalLink);
    }
  });
});
