"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type ReactNode,
} from "react";
import { gaMeasurementId } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import {
  isAnalyticsAllowedForCurrentPage,
  trackAnalyticsEvent,
  type AnalyticsEvent,
  type AnalyticsPlacement,
} from "./analytics-events";
import styles from "./analytics.module.css";

export type AttributionKey =
  | "utm_source"
  | "utm_medium"
  | "utm_campaign"
  | "utm_term"
  | "utm_content";
export type Attribution = Partial<Record<AttributionKey, string>>;

declare global {
  interface Window {
    page2fileAnalyticsConfigured?: boolean;
    page2fileAnalyticsNoticeShown?: boolean;
    page2fileLastTrackedLocation?: string;
    page2filePreviousTrackedLocation?: string;
  }
}

const ANALYTICS_NOTICE_KEY = "page2file-analytics-notice-v1";
const NOTICE_DURATION_MS = 8_000;
const UTM_KEYS: ReadonlyArray<AttributionKey> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

const noticeCopy: Record<
  Locale,
  { details: string; message: string }
> = {
  en: {
    details: "Learn more",
    message:
      "Anonymous usage statistics via Google Analytics, without analytics cookies.",
  },
  ru: {
    details: "Подробнее",
    message:
      "Анонимная статистика: Google Analytics без аналитических cookies.",
  },
};

const sanitizeAttributionValue = (value: string): string =>
  value.replace(/[^\p{L}\p{N}._~ -]/gu, "").slice(0, 100);

const readLandingAttribution = (): Attribution => {
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

const toCampaignParameters = (
  attribution: Attribution,
): Record<string, string> => {
  const campaignParameters: Record<string, string> = {};
  const parameterNames: Record<AttributionKey, string> = {
    utm_campaign: "campaign_name",
    utm_content: "campaign_content",
    utm_medium: "campaign_medium",
    utm_source: "campaign_source",
    utm_term: "campaign_term",
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

const getSanitizedUrl = (
  value: string,
  attribution: Attribution = {},
): string => {
  try {
    const url = new URL(value, window.location.origin);
    url.search = "";
    url.hash = "";
    const addAttributionParameter = (key: AttributionKey): void => {
      const parameter = attribution[key];
      if (parameter) {
        url.searchParams.set(key, parameter);
      }
    };
    UTM_KEYS.forEach(addAttributionParameter);
    return url.toString();
  } catch {
    return "";
  }
};

const setGoogleAnalyticsDisabled = (disabled: boolean): void => {
  if (!gaMeasurementId) {
    return;
  }

  const analyticsWindow = window as unknown as Record<string, unknown>;
  analyticsWindow[`ga-disable-${gaMeasurementId}`] = disabled;
};

const initializeGoogleAnalytics = (): NonNullable<Window["gtag"]> => {
  window.dataLayer = window.dataLayer ?? [];

  if (!window.gtag) {
    const gtag: NonNullable<Window["gtag"]> = function googleTag(): void {
      // Google tag commands use the native Arguments object, not a rest array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag = gtag;
    gtag("js", new Date());
  }

  if (!window.page2fileAnalyticsConfigured) {
    window.gtag("consent", "default", {
      ad_personalization: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      analytics_storage: "denied",
    });
    window.gtag("config", gaMeasurementId, {
      allow_ad_personalization_signals: false,
      allow_google_signals: false,
      send_page_view: false,
    });
    window.page2fileAnalyticsConfigured = true;
  }

  return window.gtag;
};

const sendCurrentPageView = (): void => {
  const isLandingView = !window.page2fileLastTrackedLocation;
  const attribution = isLandingView ? readLandingAttribution() : {};
  const canonicalLocation = getSanitizedUrl(window.location.href);
  const pageLocation = getSanitizedUrl(window.location.href, attribution);

  if (
    !canonicalLocation ||
    !pageLocation ||
    window.page2fileLastTrackedLocation === canonicalLocation
  ) {
    return;
  }

  const pageReferrer = window.page2filePreviousTrackedLocation ??
    getSanitizedUrl(document.referrer);
  const gtag = initializeGoogleAnalytics();
  gtag("event", "page_view", {
    page_location: pageLocation,
    page_referrer: pageReferrer,
    page_title: document.title,
    ...toCampaignParameters(attribution),
  });
  window.page2fileLastTrackedLocation = canonicalLocation;
  window.page2filePreviousTrackedLocation = canonicalLocation;
};

const isInstallPlacement = (
  value: string | undefined,
): value is AnalyticsPlacement =>
  value === "header" ||
  value === "home_hero" ||
  value === "home_promo" ||
  value === "home_final" ||
  value === "extension_seo" ||
  value === "workflow_hero";

const parseTrackedElement = (element: HTMLElement): AnalyticsEvent | null => {
  const { dataset } = element;
  const locale = dataset.p2fAnalyticsLocale;
  const name = dataset.p2fAnalyticsEvent;
  const placement = dataset.p2fAnalyticsPlacement;

  if (locale !== "en" && locale !== "ru") {
    return null;
  }
  if (name === "extension_install_click") {
    return isInstallPlacement(placement)
      ? { locale, name, placement }
      : null;
  }
  if (name === "tutorial_begin" && placement === "home_hero") {
    return { locale, name, placement };
  }
  if (name === "select_content") {
    const contentId = dataset.p2fAnalyticsContentId;
    const contentType = dataset.p2fAnalyticsContentType;
    if (
      contentId &&
      (contentType === "blog_post" || contentType === "gpt_tool") &&
      (placement === "blog_index" || placement === "workflow_hero")
    ) {
      return { contentId, contentType, locale, name, placement };
    }
  }
  return null;
};

const AnalyticsNotice = ({
  locale,
  onPauseChange,
}: {
  locale: Locale;
  onPauseChange: (paused: boolean) => void;
}): ReactNode => {
  const copy = noticeCopy[locale];
  const handleMouseEnter = (): void => {
    onPauseChange(true);
  };
  const handleMouseLeave = (): void => {
    onPauseChange(false);
  };
  const handleFocus = (): void => {
    onPauseChange(true);
  };
  const handleBlur = (event: FocusEvent<HTMLDivElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onPauseChange(false);
    }
  };

  return (
    <div
      className={styles.notice}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="note"
    >
      <p>
        {copy.message}{" "}
        <Link href={`/${locale}/privacy#cookies`}>{copy.details}</Link>
      </p>
    </div>
  );
};

export const AnalyticsBootstrap = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const pathname = usePathname();
  const [scriptEnabled, setScriptEnabled] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(false);
  const [noticePaused, setNoticePaused] = useState(false);
  const noticeTimerRef = useRef<number | null>(null);

  useEffect(
    function initializeAnalytics(): () => void {
      const timer = window.setTimeout(function startAnalytics(): void {
        if (!isAnalyticsAllowedForCurrentPage()) {
          setGoogleAnalyticsDisabled(true);
          setNoticeVisible(false);
          return;
        }

        setGoogleAnalyticsDisabled(false);
        initializeGoogleAnalytics();
        sendCurrentPageView();
        setScriptEnabled(true);

        let noticeAlreadyShown = window.page2fileAnalyticsNoticeShown === true;
        try {
          noticeAlreadyShown =
            noticeAlreadyShown ||
            window.sessionStorage.getItem(ANALYTICS_NOTICE_KEY) === "shown";
          if (!noticeAlreadyShown) {
            window.sessionStorage.setItem(ANALYTICS_NOTICE_KEY, "shown");
          }
        } catch {
          // The in-memory flag still prevents repeated notices in this tab.
        }
        if (!noticeAlreadyShown) {
          window.page2fileAnalyticsNoticeShown = true;
          setNoticeVisible(true);
        }
      }, 0);

      return (): void => window.clearTimeout(timer);
    },
    [pathname],
  );

  useEffect(function listenForTrackedClicks(): () => void {
    const handleTrackedClick = (event: globalThis.MouseEvent): void => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      const trackedElement = target.closest<HTMLElement>(
        "[data-p2f-analytics-event]",
      );
      if (!trackedElement) {
        return;
      }
      const analyticsEvent = parseTrackedElement(trackedElement);
      if (analyticsEvent) {
        trackAnalyticsEvent(analyticsEvent);
      }
    };

    document.addEventListener("click", handleTrackedClick);
    return (): void => document.removeEventListener("click", handleTrackedClick);
  }, []);

  useEffect(
    function manageNoticeTimer(): () => void {
      if (!noticeVisible || noticePaused) {
        return (): void => undefined;
      }

      noticeTimerRef.current = window.setTimeout((): void => {
        setNoticeVisible(false);
        noticeTimerRef.current = null;
      }, NOTICE_DURATION_MS);

      return (): void => {
        if (noticeTimerRef.current !== null) {
          window.clearTimeout(noticeTimerRef.current);
          noticeTimerRef.current = null;
        }
      };
    },
    [noticePaused, noticeVisible],
  );

  if (!gaMeasurementId) {
    return null;
  }

  return (
    <>
      {scriptEnabled ? (
        <Script
          async
          data-page2file-ga="true"
          src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`}
          strategy="afterInteractive"
        />
      ) : null}
      {noticeVisible ? (
        <AnalyticsNotice locale={locale} onPauseChange={setNoticePaused} />
      ) : null}
    </>
  );
};
