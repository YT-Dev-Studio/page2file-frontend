import { act, fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps, ReactNode } from "react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import { AnalyticsBootstrap } from "./analytics-bootstrap";

let analyticsAllowed = true;
let pathname = "/en";

vi.mock("@/shared/config/site", () => ({
  gaMeasurementId: "G-TEST123",
}));

vi.mock("next/navigation", () => ({
  usePathname: (): string => pathname,
}));

vi.mock("next/script", () => ({
  default: ({ src }: ComponentProps<"script">): ReactNode => (
    <div data-src={src} data-testid="google-tag" />
  ),
}));

vi.mock("./analytics-events", async (importOriginal) => {
  const actual = await importOriginal<
    typeof import("./analytics-events")
  >();
  return {
    ...actual,
    isAnalyticsAllowedForCurrentPage: (): boolean => analyticsAllowed,
  };
});

const isArrayLikeCommand = (value: unknown): value is ArrayLike<unknown> =>
  typeof value === "object" &&
  value !== null &&
  "length" in value &&
  typeof value.length === "number";

const queuedCommands = (): Array<Array<unknown>> =>
  (window.dataLayer ?? [])
    .filter(isArrayLikeCommand)
    .map((command): Array<unknown> => Array.from(command));

const resetAnalyticsWindow = (): void => {
  window.dataLayer = [];
  delete window.gtag;
  delete window.page2fileAnalyticsConfigured;
  delete window.page2fileAnalyticsNoticeShown;
  delete window.page2fileLastTrackedLocation;
  delete window.page2filePreviousTrackedLocation;
  window.sessionStorage.clear();
  window.history.replaceState({}, "", "/en");
  document.title = "Page 2 File";
};

beforeEach((): void => {
  vi.useFakeTimers();
  analyticsAllowed = true;
  pathname = "/en";
  resetAnalyticsWindow();
});

afterEach((): void => {
  vi.useRealTimers();
});

describe("AnalyticsBootstrap", (): void => {
  test("sets cookieless consent before config and the first page view", async (): Promise<void> => {
    window.history.replaceState(
      {},
      "",
      "/en?utm_source=launch&utm_medium=email&private=value#section",
    );

    render(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
    });

    const commands = queuedCommands();
    expect(Array.isArray(window.dataLayer?.[0])).toBe(false);
    expect(Object.prototype.toString.call(window.dataLayer?.[0])).toBe(
      "[object Arguments]",
    );
    const consentIndex = commands.findIndex(
      ([command, action]) => command === "consent" && action === "default",
    );
    const configIndex = commands.findIndex(
      ([command]) => command === "config",
    );
    const pageViewIndex = commands.findIndex(
      ([command, eventName]) =>
        command === "event" && eventName === "page_view",
    );
    expect(consentIndex).toBeGreaterThanOrEqual(0);
    expect(configIndex).toBeGreaterThan(consentIndex);
    expect(pageViewIndex).toBeGreaterThan(configIndex);
    expect(commands[consentIndex]?.[2]).toMatchObject({
      ad_personalization: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      analytics_storage: "denied",
    });
    expect(commands[configIndex]?.[2]).toMatchObject({ send_page_view: false });

    const pageView = commands[pageViewIndex]?.[2] as Record<string, string>;
    expect(pageView.page_location).toContain("utm_source=launch");
    expect(pageView.page_location).toContain("utm_medium=email");
    expect(pageView.page_location).not.toContain("private=value");
    expect(pageView.page_location).not.toContain("#section");
    expect(screen.getByTestId("google-tag").getAttribute("data-src")).toContain(
      "G-TEST123",
    );
  });

  test("sends one page view for each distinct SPA pathname", async (): Promise<void> => {
    const view = render(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.advanceTimersByTimeAsync(0);
    });

    view.rerender(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.advanceTimersByTimeAsync(0);
    });

    pathname = "/en/blog";
    window.history.pushState({}, "", pathname);
    document.title = "Blog | Page 2 File";
    view.rerender(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.advanceTimersByTimeAsync(0);
    });

    const pageViews = queuedCommands().filter(
      ([command, eventName]) =>
        command === "event" && eventName === "page_view",
    );
    expect(pageViews).toHaveLength(2);
    expect(pageViews[1]?.[2]).toMatchObject({
      page_location: "http://localhost:3000/en/blog",
      page_referrer: "http://localhost:3000/en",
      page_title: "Blog | Page 2 File",
    });
  });

  test("does not load or disclose analytics on blocked pages", async (): Promise<void> => {
    analyticsAllowed = false;
    render(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.advanceTimersByTimeAsync(0);
    });

    expect(screen.queryByTestId("google-tag")).toBeNull();
    expect(screen.queryByRole("note")).toBeNull();
    expect(queuedCommands()).toHaveLength(0);
  });

  test("shows a non-interactive notice once per session and pauses while focused", async (): Promise<void> => {
    render(<AnalyticsBootstrap locale="ru" />);
    await act(async (): Promise<void> => {
      await vi.advanceTimersByTimeAsync(0);
    });

    const notice = screen.getByRole("note");
    expect(notice.textContent).toContain(
      "Google Analytics без аналитических cookies",
    );
    expect(screen.queryByRole("button")).toBeNull();
    const details = screen.getByRole("link", { name: "Подробнее" });
    fireEvent.focus(details);
    await act(async (): Promise<void> => {
      await vi.advanceTimersByTimeAsync(8_000);
    });
    expect(screen.getByRole("note")).toBeTruthy();

    fireEvent.blur(details);
    await act(async (): Promise<void> => {
      await vi.advanceTimersByTimeAsync(8_000);
    });
    expect(screen.queryByRole("note")).toBeNull();
    expect(window.sessionStorage.getItem("page2file-analytics-notice-v1")).toBe(
      "shown",
    );
  });
});
