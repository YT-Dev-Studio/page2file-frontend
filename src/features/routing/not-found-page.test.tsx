import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { NotFoundPage } from "./not-found-page";

let pathname = "/en/unknown";

vi.mock("next/navigation", () => ({
  usePathname: (): string => pathname,
}));

describe("NotFoundPage", (): void => {
  beforeEach((): void => {
    pathname = "/en/unknown";
  });

  test("renders the English recovery actions for an English path", (): void => {
    render(<NotFoundPage />);

    expect(
      screen.getByRole("heading", { name: "This page wandered off" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Return home" }).getAttribute("href"),
    ).toBe("/en");
    expect(
      screen
        .getByRole("link", { name: "Open the extension guide" })
        .getAttribute("href"),
    ).toBe("/en/chrome-extension/how-to-use");
  });

  test("renders Russian copy and actions for a Russian path", (): void => {
    pathname = "/ru/unknown";
    render(<NotFoundPage />);

    expect(
      screen.getByRole("heading", { name: "Эта страница потерялась" }),
    ).toBeTruthy();
    expect(
      screen
        .getByRole("link", { name: "Вернуться на главную" })
        .getAttribute("href"),
    ).toBe("/ru");
  });

  test("uses an explicit locale for the global fallback", (): void => {
    pathname = "/unknown";
    render(<NotFoundPage locale="en" />);

    expect(
      screen.getByRole("link", { name: "Return home" }).getAttribute("href"),
    ).toBe("/en");
  });
});
