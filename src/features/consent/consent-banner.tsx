"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { gaMeasurementId } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import styles from "./consent.module.css";

export type ConsentState = "unknown" | "accepted" | "rejected";
export type AttributionKey =
  | "utm_source"
  | "utm_medium"
  | "utm_campaign"
  | "utm_term"
  | "utm_content";
export type Attribution = Partial<Record<AttributionKey, string>>;

declare global {
  interface Window {
    dataLayer?: Array<unknown>;
    gtag?: (...args: Array<unknown>) => void;
  }
}

const CONSENT_KEY = "page2file.analytics-consent";
const UTM_KEYS: ReadonlyArray<AttributionKey> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const readConsent = (): ConsentState => {
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : "unknown";
};

const sanitizeAttributionValue = (value: string): string =>
  value.replace(/[^\p{L}\p{N}._~ -]/gu, "").slice(0, 100);

const readAttribution = (): Attribution => {
  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};
  const addParameter = (key: AttributionKey): void => {
    const rawValue = params.get(key);
    if (rawValue) {
      const value = sanitizeAttributionValue(rawValue);
      if (value) {
        attribution[key] = value;
      }
    }
  };
  UTM_KEYS.forEach(addParameter);
  return attribution;
};

const setGoogleAnalyticsDisabled = (disabled: boolean): void => {
  if (!gaMeasurementId) {
    return;
  }
  const analyticsWindow = window as unknown as Record<string, unknown>;
  analyticsWindow[`ga-disable-${gaMeasurementId}`] = disabled;
};

const loadGoogleAnalytics = (attribution: Attribution): void => {
  if (!gaMeasurementId) {
    return;
  }
  setGoogleAnalyticsDisabled(false);
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: Array<unknown>): void => {
    window.dataLayer?.push(args);
  };
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", gaMeasurementId, {
    send_page_view: true,
    ...attribution,
  });

  if (document.querySelector("[data-page2file-ga]")) {
    return;
  }
  const script = document.createElement("script");
  script.async = true;
  script.dataset.page2fileGa = "true";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`;
  document.head.append(script);
};

const disableGoogleAnalytics = (): void => {
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  setGoogleAnalyticsDisabled(true);
  document.querySelector("[data-page2file-ga]")?.remove();
};

export const ConsentBanner = ({ locale }: { locale: Locale }): ReactNode => {
  const messages = getMessages(locale);
  const [consent, setConsent] = useState<ConsentState>("unknown");
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(function initializeConsent(): () => void {
    const timer = window.setTimeout(function synchronizeConsent(): void {
      const storedConsent = readConsent();
      setConsent(storedConsent);
      if (storedConsent === "accepted") {
        loadGoogleAnalytics(readAttribution());
      }
    }, 0);
    return (): void => window.clearTimeout(timer);
  }, []);

  const saveConsent = (nextConsent: ConsentState): void => {
    window.localStorage.setItem(CONSENT_KEY, nextConsent);
    setConsent(nextConsent);
    setPreferencesOpen(false);
    if (nextConsent === "accepted") {
      loadGoogleAnalytics(readAttribution());
    } else {
      disableGoogleAnalytics();
    }
  };

  const acceptAnalytics = (): void => saveConsent("accepted");
  const rejectAnalytics = (): void => saveConsent("rejected");
  const openPreferences = (): void => setPreferencesOpen(true);

  if (consent !== "unknown" && !preferencesOpen) {
    return (
      <button className={styles.preferences} onClick={openPreferences} type="button">
        {messages.actions.preferences}
      </button>
    );
  }

  return (
    <section aria-labelledby="consent-title" className={styles.banner}>
      <h2 id="consent-title">Optional analytics</h2>
      <p>
        Essential features work without analytics. Google Analytics loads only
        after you accept and only when the site owner configures a Measurement ID.
      </p>
      <div className={styles.actions}>
        <button className={styles.accept} onClick={acceptAnalytics} type="button">
          {messages.actions.accept}
        </button>
        <button className={styles.reject} onClick={rejectAnalytics} type="button">
          {messages.actions.reject}
        </button>
      </div>
      {consent !== "unknown" ? (
        <p className={styles.status}>Current choice: {consent}</p>
      ) : null}
    </section>
  );
};
