import type { Locale } from "@/shared/i18n/locales";
import { gaMeasurementId } from "@/shared/config/site";

export type AnalyticsPlacement =
  | "header"
  | "home_hero"
  | "home_promo"
  | "home_final"
  | "extension_seo"
  | "workflow_hero";

export type AnalyticsEvent =
  | {
      locale: Locale;
      name: "extension_install_click";
      placement: AnalyticsPlacement;
    }
  | {
      locale: Locale;
      name: "tutorial_begin";
      placement: "home_hero";
    }
  | {
      contentId: string;
      contentType: "blog_post" | "gpt_tool";
      locale: Locale;
      name: "select_content";
      placement: "blog_index" | "workflow_hero";
    }
  | {
      locale: Locale;
      name: "support_feedback_submit";
    };

export type AnalyticsDataAttributes = {
  "data-p2f-analytics-content-id"?: string;
  "data-p2f-analytics-content-type"?: string;
  "data-p2f-analytics-event": AnalyticsEvent["name"];
  "data-p2f-analytics-locale": Locale;
  "data-p2f-analytics-placement"?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<unknown>;
    gtag?: (...args: Array<unknown>) => void;
  }
}

const LOCAL_ANALYTICS_HOSTS: ReadonlySet<string> = new Set([
  "0.0.0.0",
  "127.0.0.1",
  "::1",
  "[::1]",
  "localhost",
]);

const sanitizeEventValue = (value: string): string =>
  value.replace(/[^a-zA-Z0-9._~-]/g, "").slice(0, 100);

export const isAnalyticsAllowedForCurrentPage = (): boolean => {
  if (typeof window === "undefined" || !gaMeasurementId) {
    return false;
  }

  const hostname = window.location.hostname.toLowerCase();
  const technicalConversionRoute = /^\/[^/]+\/(?:preview|download)(?:\/|$)/.test(
    window.location.pathname,
  );

  return (
    !LOCAL_ANALYTICS_HOSTS.has(hostname) &&
    !hostname.startsWith("127.") &&
    !hostname.endsWith(".localhost") &&
    !technicalConversionRoute
  );
};

export const analyticsDataAttributes = (
  event: AnalyticsEvent,
): AnalyticsDataAttributes => {
  if (event.name === "select_content") {
    return {
      "data-p2f-analytics-content-id": event.contentId,
      "data-p2f-analytics-content-type": event.contentType,
      "data-p2f-analytics-event": event.name,
      "data-p2f-analytics-locale": event.locale,
      "data-p2f-analytics-placement": event.placement,
    };
  }

  if (event.name === "support_feedback_submit") {
    return {
      "data-p2f-analytics-event": event.name,
      "data-p2f-analytics-locale": event.locale,
    };
  }

  return {
    "data-p2f-analytics-event": event.name,
    "data-p2f-analytics-locale": event.locale,
    "data-p2f-analytics-placement": event.placement,
  };
};

const toEventParameters = (
  event: AnalyticsEvent,
): Record<string, string> => {
  const parameters: Record<string, string> = { locale: event.locale };

  if ("placement" in event) {
    parameters.placement = event.placement;
  }
  if (event.name === "select_content") {
    parameters.content_type = event.contentType;
    parameters.content_id = sanitizeEventValue(event.contentId);
  }

  return parameters;
};

export const trackAnalyticsEvent = (event: AnalyticsEvent): void => {
  if (!isAnalyticsAllowedForCurrentPage() || !window.gtag) {
    return;
  }

  window.gtag("event", event.name, toEventParameters(event));
};
