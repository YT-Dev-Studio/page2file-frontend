import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { getExtensionSeoLanding } from "@/content/extension-seo-landings";
import { extensionSeoRoutes } from "@/shared/routes/routes";
import { ExtensionSeoLanding } from "./extension-seo-landing";

describe("ExtensionSeoLanding branding", () => {
  test("provides independent German copy for every extension SEO route", () => {
    for (const route of extensionSeoRoutes) {
      const english = getExtensionSeoLanding("en", route);
      const german = getExtensionSeoLanding("de", route);

      expect(german).not.toBeNull();
      expect(german?.title).not.toBe(english?.title);
      expect(german?.description).not.toBe(english?.description);
      expect(german?.heading).not.toBe(english?.heading);
      expect(getExtensionSeoLanding("ru", route)).toBeNull();
    }
  });

  test("uses Page 2 File as the site and Page 2 PDF as the product in breadcrumbs", () => {
    render(
      <ExtensionSeoLanding
        content={getExtensionSeoLanding("en", "chrome-extension/webpage-to-pdf")!}
        locale="en"
      />,
    );

    const breadcrumbs = screen.getByRole("navigation", {
      name: "Breadcrumb",
    });
    const links = Array.from(breadcrumbs.querySelectorAll("a"));

    expect(links.map((link) => link.textContent)).toEqual([
      "Page 2 File",
      "Page 2 PDF",
      "Save the webpage open in Chrome as PDF",
    ]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/en",
      "/en/chrome-extension/how-to-use",
      "/en/chrome-extension/webpage-to-pdf",
    ]);

    const installLink = screen.getByRole("link", {
      name: "Install Page 2 PDF",
    });
    const installUrl = new URL(installLink.getAttribute("href") ?? "");
    expect(installUrl.searchParams.get("utm_source")).toBe("page2file.com");
    expect(installUrl.searchParams.get("utm_medium")).toBe("referral");
    expect(installUrl.searchParams.get("utm_campaign")).toBe(
      "en_chrome_extension_webpage_to_pdf_hero",
    );
    expect(installLink.getAttribute("target")).toBe("_blank");
    expect(installLink.getAttribute("rel")).toBe("noopener noreferrer");
  });

  test("renders German extension SEO content without an English text fallback", () => {
    const content = getExtensionSeoLanding(
      "de",
      "chrome-extension/webpage-to-pdf",
    );
    expect(content?.title).toBe("Webseite als PDF in Chrome speichern");
    expect(
      getExtensionSeoLanding("ru", "chrome-extension/webpage-to-pdf"),
    ).toBeNull();

    render(<ExtensionSeoLanding content={content!} locale="de" />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Die geöffnete Webseite als PDF speichern",
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Page 2 PDF" }).getAttribute("href"),
    ).toBe("/de/chrome-extension/how-to-use");
  });
});
