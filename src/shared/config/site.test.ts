import { describe, expect, test } from "vitest";
import {
  extensionInstallAvailable,
  externalLinks,
  legalProfile,
} from "./site";

const CHROME_EXTENSION_URL =
  "https://chromewebstore.google.com/detail/page-to-pdf-%E2%80%94-webpages-ch/oahoffgoacbbmfhiejbjpghmcnngjlga";

describe("Chrome extension", () => {
  test("uses the live Chrome Web Store listing", () => {
    expect(extensionInstallAvailable).toBe(true);
    expect(externalLinks.chromeExtension).toEqual({
      href: CHROME_EXTENSION_URL,
      status: "live",
    });
  });
});

describe("legalProfile", () => {
  test("uses the support mailbox", () => {
    expect(legalProfile.contactEmail).toBe("support@page2file.com");
  });
});
