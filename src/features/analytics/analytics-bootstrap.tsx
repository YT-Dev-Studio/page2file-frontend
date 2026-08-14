"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, type ReactNode } from "react";
import { gaMeasurementId } from "@/shared/config/site";

export type AttributionKey =
  "utm_source" | "utm_medium" | "utm_campaign" | "utm_term" | "utm_content";
export type Attribution = Partial<Record<AttributionKey, string>>;

declare global {
  interface Window {
    dataLayer?: Array<unknown>;
    gtag?: (...args: Array<unknown>) => void;
    page2fileAttribution?: Attribution;
  }
}

const LOCAL_ANALYTICS_HOSTS: ReadonlySet<string> = new Set([
  "0.0.0.0",
  "127.0.0.1",
  "::1",
  "[::1]",
  "localhost",
]);
const UTM_KEYS: ReadonlyArray<AttributionKey> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const sanitizeAttributionValue = (value: string): string =>
  value.replace(/[^\p{L}\p{N}._~ -]/gu, "").slice(0, 100);

const readAttribution = (): Attribution => {
  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};
  const addParameter = (key: AttributionKey): void => {
    const rawValue = params.get(key);

    if (!rawValue) {
      return;
    }

    const value = sanitizeAttributionValue(rawValue);

    if (value) {
      attribution[key] = value;
    }
  };

  UTM_KEYS.forEach(addParameter);
  return attribution;
};

const captureAttribution = (): Attribution => {
  const currentAttribution = readAttribution();

  if (Object.keys(currentAttribution).length > 0) {
    window.page2fileAttribution = currentAttribution;
  }

  return window.page2fileAttribution ?? {};
};

const isAnalyticsAllowedForCurrentHost = (): boolean => {
  const hostname = window.location.hostname.toLowerCase();
  const technicalConversionRoute = /^\/[^/]+\/(?:preview|download)\//.test(
    window.location.pathname,
  );

  return (
    !LOCAL_ANALYTICS_HOSTS.has(hostname) &&
    !hostname.endsWith(".localhost") &&
    !technicalConversionRoute
  );
};

const toCampaignParameters = (
  attribution: Attribution,
): Record<string, string> => {
  const campaignParameters: Record<string, string> = {};
  const parameterNames: Record<AttributionKey, string> = {
    utm_source: "campaign_source",
    utm_medium: "campaign_medium",
    utm_campaign: "campaign_name",
    utm_term: "campaign_term",
    utm_content: "campaign_content",
  };
  const addCampaignParameter = (key: AttributionKey): void => {
    const value = attribution[key];

    if (value) {
      campaignParameters[parameterNames[key]] = value;
    }
  };

  UTM_KEYS.forEach(addCampaignParameter);
  return campaignParameters;
};

const getAnalyticsPageLocation = (attribution: Attribution): string => {
  const pageLocation = new URL(window.location.href);

  pageLocation.search = "";
  pageLocation.hash = "";

  const addAttributionParameter = (key: AttributionKey): void => {
    const value = attribution[key];

    if (value) {
      pageLocation.searchParams.set(key, value);
    }
  };

  UTM_KEYS.forEach(addAttributionParameter);
  return pageLocation.toString();
};

const setGoogleAnalyticsDisabled = (disabled: boolean): void => {
  if (!gaMeasurementId) {
    return;
  }

  const analyticsWindow = window as unknown as Record<string, unknown>;

  analyticsWindow[`ga-disable-${gaMeasurementId}`] = disabled;
};

const initializeGoogleTagQueue = (): NonNullable<Window["gtag"]> => {
  window.dataLayer = window.dataLayer ?? [];

  if (window.gtag) {
    return window.gtag;
  }

  const gtag = (...args: Array<unknown>): void => {
    window.dataLayer?.push(args);
  };
  window.gtag = gtag;
  gtag("js", new Date());

  return gtag;
};

const loadGoogleAnalytics = (attribution: Attribution): void => {
  if (!gaMeasurementId || !isAnalyticsAllowedForCurrentHost()) {
    setGoogleAnalyticsDisabled(true);
    return;
  }

  setGoogleAnalyticsDisabled(false);
  const gtag = initializeGoogleTagQueue();
  gtag("consent", "default", { analytics_storage: "granted" });
  gtag("config", gaMeasurementId, {
    send_page_view: true,
    page_location: getAnalyticsPageLocation(attribution),
    ...toCampaignParameters(attribution),
  });
};

export const AnalyticsBootstrap = (): ReactNode => {
  const pathname = usePathname();

  useEffect(
    function initializeAnalytics(): () => void {
      const timer = window.setTimeout(function startAnalytics(): void {
        loadGoogleAnalytics(captureAttribution());
      }, 0);

      return (): void => window.clearTimeout(timer);
    },
    [pathname],
  );

  if (!gaMeasurementId) {
    return null;
  }

  return (
    <>
      <Script id="page2file-google-tag-bootstrap" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
if (!window.gtag) {
  window.gtag = function gtag(){window.dataLayer.push(arguments);};
  window.gtag('js', new Date());
}`}
      </Script>
      <Script
        async
        data-page2file-ga="true"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`}
        strategy="afterInteractive"
      />
    </>
  );
};
