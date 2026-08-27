import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

vi.mock("next/navigation", () => ({
  usePathname: (): string => "/en",
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
      render(<SiteShell locale={locale}>Content</SiteShell>);

      expect(
        screen.getByRole("link", { name: label }).getAttribute("href"),
      ).toBe(`/${locale}/support`);
      expect(
        screen.queryByRole("link", { name: "support@page2file.com" }),
      ).toBeNull();
    },
  );
});
