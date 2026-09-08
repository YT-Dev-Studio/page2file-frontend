import { act, fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps, ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  openAnalyticsPreferences,
  writeAnalyticsConsent,
} from "./analytics-consent";
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
  const actual = await importOriginal<typeof import("./analytics-events")>();
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
  delete window.page2fileAnalyticsConsent;
  delete window.page2fileLastTrackedLocation;
  delete window.page2filePreviousTrackedLocation;
  window.localStorage.clear();
  window.history.replaceState({}, "", "/en");
  document.title = "Page 2 File";
  Object.defineProperty(navigator, "globalPrivacyControl", {
    configurable: true,
    value: false,
  });
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
  test("sends nothing before consent and configures GA only after opt-in", async (): Promise<void> => {
    window.history.replaceState(
      {},
      "",
      "/en?utm_source=launch&utm_medium=email&private=value#section",
    );

    render(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
    });

    expect(screen.getByRole("dialog")).toBeTruthy();
    expect(screen.queryByTestId("google-tag")).toBeNull();
    expect(queuedCommands()).toHaveLength(0);

    fireEvent.click(screen.getByRole("button", { name: "Allow analytics" }));

    const commands = queuedCommands();
    const consentDefaultIndex = commands.findIndex(
      ([command, action]) => command === "consent" && action === "default",
    );
    const consentUpdateIndex = commands.findIndex(
      ([command, action]) => command === "consent" && action === "update",
    );
    const configIndex = commands.findIndex(([command]) => command === "config");
    const pageViewIndex = commands.findIndex(
      ([command, eventName]) =>
        command === "event" && eventName === "page_view",
    );

    expect(consentDefaultIndex).toBeGreaterThanOrEqual(0);
    expect(consentUpdateIndex).toBeGreaterThan(consentDefaultIndex);
    expect(configIndex).toBeGreaterThan(consentUpdateIndex);
    expect(pageViewIndex).toBeGreaterThan(configIndex);
    expect(commands[consentDefaultIndex]?.[2]).toMatchObject({
      ad_personalization: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      analytics_storage: "denied",
    });
    expect(commands[consentUpdateIndex]?.[2]).toMatchObject({
      analytics_storage: "granted",
    });
    expect(commands[configIndex]?.[2]).toMatchObject({
      allow_ad_personalization_signals: false,
      allow_google_signals: false,
      cookie_domain: "none",
      cookie_expires: 15_552_000,
      cookie_prefix: "p2f",
      cookie_update: false,
      send_page_view: false,
    });

    const pageView = commands[pageViewIndex]?.[2] as Record<string, string>;
    expect(pageView.page_location).toBe("http://localhost:3000/en");
    expect(pageView.page_location).not.toContain("private=value");
    expect(pageView.campaign_source).toBe("launch");
    expect(pageView.campaign_medium).toBe("email");
    expect(screen.getByTestId("google-tag").getAttribute("data-src")).toContain(
      "G-TEST123",
    );
  });

  test("honors a stored opt-in and sends one page view per SPA pathname", async (): Promise<void> => {
    writeAnalyticsConsent("granted");
    const view = render(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
    });

    view.rerender(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
    });

    pathname = "/en/blog";
    window.history.pushState({}, "", pathname);
    document.title = "Blog | Page 2 File";
    view.rerender(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
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

  test("stores an equally accessible refusal without loading Google", async (): Promise<void> => {
    render(<AnalyticsBootstrap locale="ru" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Продолжить без аналитики" }),
    );

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.queryByTestId("google-tag")).toBeNull();
    expect(queuedCommands()).toHaveLength(0);
    expect(
      JSON.parse(
        window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY) ?? "{}",
      ),
    ).toMatchObject({ status: "denied", version: 2 });
  });

  test("honors Global Privacy Control and does not offer opt-in", async (): Promise<void> => {
    Object.defineProperty(navigator, "globalPrivacyControl", {
      configurable: true,
      value: true,
    });
    render(<AnalyticsBootstrap locale="de" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
    });

    expect(screen.queryByRole("dialog")).toBeNull();
    act((): void => openAnalyticsPreferences());
    expect(screen.getByRole("dialog").textContent).toContain(
      "Global-Privacy-Control-Signal",
    );
    expect(
      screen.queryByRole("button", { name: "Analytics erlauben" }),
    ).toBeNull();
    expect(screen.queryByTestId("google-tag")).toBeNull();
  });

  test("allows consent withdrawal and removes the Google script", async (): Promise<void> => {
    writeAnalyticsConsent("granted");
    render(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
    });
    expect(screen.getByTestId("google-tag")).toBeTruthy();

    act((): void => openAnalyticsPreferences());
    fireEvent.click(
      screen.getByRole("button", { name: "Continue without analytics" }),
    );

    expect(screen.queryByTestId("google-tag")).toBeNull();
    expect(window.page2fileAnalyticsConsent).toBe("denied");
    expect(
      JSON.parse(
        window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY) ?? "{}",
      ),
    ).toMatchObject({ status: "denied", version: 2 });
  });

  test("does not load or request consent on blocked pages", async (): Promise<void> => {
    analyticsAllowed = false;
    render(<AnalyticsBootstrap locale="en" />);
    await act(async (): Promise<void> => {
      await vi.runOnlyPendingTimersAsync();
    });

    expect(screen.queryByTestId("google-tag")).toBeNull();
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(queuedCommands()).toHaveLength(0);
  });
});
