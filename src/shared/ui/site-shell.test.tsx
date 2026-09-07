import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

let pathname = "/en";

vi.mock("next/navigation", () => ({
  usePathname: (): string => pathname,
  useRouter: (): { push: ReturnType<typeof vi.fn> } => ({ push: vi.fn() }),
}));

import { SiteShell } from "./site-shell";

describe("site footer support link", (): void => {
  test.each([
    ["en", "Support"],
    ["ru", "Поддержка"],
  ] as const)(
    "shows the support page and email for %s",
    (locale, label): void => {
      pathname = `/${locale}`;
      render(<SiteShell locale={locale}>Content</SiteShell>);

      expect(
        screen.getByRole("link", { name: label }).getAttribute("href"),
      ).toBe(`/${locale}/support`);
      expect(
        screen.queryByRole("link", { name: "support@page2file.com" }),
      ).toBeNull();

      const installLinks = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(
          '[data-p2f-analytics-placement="header"]',
        ),
      );
      expect(installLinks).toHaveLength(2);
      installLinks.forEach((link): void => {
        const url = new URL(link.href);
        expect(url.searchParams.get("utm_source")).toBe("page2file.com");
        expect(url.searchParams.get("utm_medium")).toBe("referral");
        expect(url.searchParams.get("utm_campaign")).toBe(
          `${locale}_home_header`,
        );
        expect(link.target).toBe("_blank");
        expect(link.rel).toBe("noopener noreferrer");
      });
    },
  );
});
