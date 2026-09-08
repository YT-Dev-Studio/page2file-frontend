"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { gaMeasurementId } from "@/shared/config/site";
import { Button } from "@/shared/ui/components/button/button";
import { isLocale, type Locale } from "@/shared/i18n/locales";
import {
  ANALYTICS_COOKIE_LIFETIME_SECONDS,
  ANALYTICS_PREFERENCES_EVENT,
  hasGlobalPrivacyControl,
  openAnalyticsPreferences,
  readAnalyticsConsent,
  removeGoogleAnalyticsCookies,
  writeAnalyticsConsent,
  type AnalyticsConsentStatus,
} from "./analytics-consent";
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
    page2fileLastTrackedLocation?: string;
    page2filePreviousTrackedLocation?: string;
  }
}

const UTM_KEYS: ReadonlyArray<AttributionKey> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

type AnalyticsConsentCopy = {
  allow: string;
  close: string;
  deny: string;
  details: string;
  disabledMessage: string;
  enabledMessage: string;
  gpcMessage: string;
  initialMessage: string;
  settingsLabel: string;
  settingsTitle: string;
  title: string;
};

const consentCopy: Record<Locale, AnalyticsConsentCopy> = {
  en: {
    allow: "Allow analytics",
    close: "Close",
    deny: "Continue without analytics",
    details: "Read the Privacy Policy",
    disabledMessage:
      "Optional analytics is disabled. Page 2 File works without it.",
    enabledMessage:
      "Google Analytics is enabled on public pages. You can withdraw consent at any time.",
    gpcMessage:
      "Your browser sends a Global Privacy Control signal, so optional analytics stays disabled.",
    initialMessage:
      "With your permission, Google Analytics measures public page visits and product-link clicks. No data is sent to Google before you choose Allow analytics, and the site works if you decline.",
    settingsLabel: "Privacy settings",
    settingsTitle: "Analytics settings",
    title: "Optional analytics",
  },
  ru: {
    allow: "Разрешить аналитику",
    close: "Закрыть",
    deny: "Продолжить без аналитики",
    details: "Открыть Политику конфиденциальности",
    disabledMessage:
      "Необязательная аналитика отключена. Page 2 File работает без неё.",
    enabledMessage:
      "Google Analytics включён на публичных страницах. Согласие можно отозвать в любое время.",
    gpcMessage:
      "Браузер передаёт сигнал Global Privacy Control, поэтому необязательная аналитика остаётся отключённой.",
    initialMessage:
      "С вашего разрешения Google Analytics измеряет посещения публичных страниц и переходы по ссылкам продукта. До выбора «Разрешить аналитику» данные в Google не отправляются, а после отказа сайт продолжает работать.",
    settingsLabel: "Настройки конфиденциальности",
    settingsTitle: "Настройки аналитики",
    title: "Необязательная аналитика",
  },
  de: {
    allow: "Analytics erlauben",
    close: "Schließen",
    deny: "Ohne Analytics fortfahren",
    details: "Datenschutzerklärung lesen",
    disabledMessage:
      "Optionale Analytics sind deaktiviert. Page 2 File funktioniert auch ohne sie.",
    enabledMessage:
      "Google Analytics ist auf öffentlichen Seiten aktiviert. Sie können Ihre Einwilligung jederzeit widerrufen.",
    gpcMessage:
      "Ihr Browser sendet ein Global-Privacy-Control-Signal. Optionale Analytics bleiben deshalb deaktiviert.",
    initialMessage:
      "Mit Ihrer Einwilligung misst Google Analytics Besuche öffentlicher Seiten und Klicks auf Produktlinks. Vor der Auswahl „Analytics erlauben“ werden keine Daten an Google gesendet; bei Ablehnung funktioniert die Website weiterhin.",
    settingsLabel: "Datenschutzeinstellungen",
    settingsTitle: "Analytics-Einstellungen",
    title: "Optionale Analytics",
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

const getSanitizedUrl = (value: string): string => {
  try {
    const url = new URL(value, window.location.origin);
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return "";
  }
};

const getSanitizedReferrer = (value: string): string => {
  if (!value) {
    return "";
  }

  try {
    const url = new URL(value, window.location.origin);
    return url.origin === window.location.origin
      ? getSanitizedUrl(url.toString())
      : `${url.origin}/`;
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
  }

  window.gtag("consent", "update", {
    ad_personalization: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    analytics_storage: "granted",
  });

  if (!window.page2fileAnalyticsConfigured) {
    window.gtag("config", gaMeasurementId, {
      allow_ad_personalization_signals: false,
      allow_google_signals: false,
      cookie_domain: "none",
      cookie_expires: ANALYTICS_COOKIE_LIFETIME_SECONDS,
      cookie_prefix: "p2f",
      cookie_update: false,
      send_page_view: false,
    });
    window.page2fileAnalyticsConfigured = true;
  }

  window.page2fileAnalyticsConsent = "granted";
  return window.gtag;
};

const sendCurrentPageView = (): void => {
  const isLandingView = !window.page2fileLastTrackedLocation;
  const attribution = isLandingView ? readLandingAttribution() : {};
  const canonicalLocation = getSanitizedUrl(window.location.href);
  const pageLocation = canonicalLocation;

  if (
    !canonicalLocation ||
    !pageLocation ||
    window.page2fileLastTrackedLocation === canonicalLocation
  ) {
    return;
  }

  const pageReferrer = window.page2filePreviousTrackedLocation ??
    getSanitizedReferrer(document.referrer);
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

  if (!locale || !isLocale(locale)) {
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

type AnalyticsConsentPanelProps = {
  gpcActive: boolean;
  locale: Locale;
  onAllow: () => void;
  onClose: () => void;
  onDeny: () => void;
  status: AnalyticsConsentStatus;
};

const AnalyticsConsentPanel = ({
  gpcActive,
  locale,
  onAllow,
  onClose,
  onDeny,
  status,
}: AnalyticsConsentPanelProps): ReactNode => {
  const copy = consentCopy[locale];
  const message = gpcActive
    ? copy.gpcMessage
    : status === "granted"
      ? copy.enabledMessage
      : status === "denied"
        ? copy.disabledMessage
        : copy.initialMessage;
  const firstActionRef = useRef<HTMLButtonElement>(null);

  useEffect(function focusFirstAction(): void {
    firstActionRef.current?.focus();
  }, []);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
  ): void => {
    if (event.key !== "Escape") {
      return;
    }
    event.preventDefault();
    if (status === "unset") {
      onDeny();
    } else {
      onClose();
    }
  };

  return (
    <div
      aria-describedby="analytics-consent-description"
      aria-labelledby="analytics-consent-title"
      aria-modal="false"
      className={styles.notice}
      data-consent-status={status}
      onKeyDown={handleKeyDown}
      role="dialog"
    >
      <h2 id="analytics-consent-title">
        {status === "unset" ? copy.title : copy.settingsTitle}
      </h2>
      <p id="analytics-consent-description">{message}</p>
      <Link href={`/${locale}/privacy#cookies`}>{copy.details}</Link>
      <div className={styles.actions}>
        {gpcActive ? (
          <Button
            ref={firstActionRef}
            showIcon={false}
            size="small"
            type="button"
            variant="secondary"
            onClick={onClose}
          >
            {copy.close}
          </Button>
        ) : (
          <>
            <Button
              ref={firstActionRef}
              showIcon={false}
              size="small"
              type="button"
              variant="secondary"
              onClick={status === "denied" ? onClose : onDeny}
            >
              {status === "denied" ? copy.close : copy.deny}
            </Button>
            {status === "granted" ? (
              <Button
                showIcon={false}
                size="small"
                type="button"
                variant="secondary"
                onClick={onClose}
              >
                {copy.close}
              </Button>
            ) : (
              <Button
                showIcon={false}
                size="small"
                type="button"
                variant="secondary"
                onClick={onAllow}
              >
                {copy.allow}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export const AnalyticsSettingsButton = ({
  className,
  locale,
}: {
  className?: string;
  locale: Locale;
}): ReactNode => {
  if (!gaMeasurementId) {
    return null;
  }

  return (
    <button
      className={className}
      type="button"
      onClick={openAnalyticsPreferences}
    >
      {consentCopy[locale].settingsLabel}
    </button>
  );
};

export const AnalyticsBootstrap = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const pathname = usePathname();
  const [consentStatus, setConsentStatus] =
    useState<AnalyticsConsentStatus>("unset");
  const [gpcActive, setGpcActive] = useState(false);
  const [preferencesVisible, setPreferencesVisible] = useState(false);
  const [scriptEnabled, setScriptEnabled] = useState(false);

  const enableAnalytics = (): void => {
    if (hasGlobalPrivacyControl()) {
      return;
    }
    writeAnalyticsConsent("granted");
    setConsentStatus("granted");
    setPreferencesVisible(false);
    if (!isAnalyticsAllowedForCurrentPage()) {
      return;
    }
    setGoogleAnalyticsDisabled(false);
    sendCurrentPageView();
    setScriptEnabled(true);
  };

  const disableAnalytics = (): void => {
    writeAnalyticsConsent("denied");
    window.page2fileAnalyticsConsent = "denied";
    window.gtag?.("consent", "update", {
      ad_personalization: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      analytics_storage: "denied",
    });
    setGoogleAnalyticsDisabled(true);
    removeGoogleAnalyticsCookies();
    setConsentStatus("denied");
    setPreferencesVisible(false);
    setScriptEnabled(false);
  };

  useEffect(
    function initializeAnalytics(): () => void {
      const timer = window.setTimeout(function startAnalytics(): void {
        if (!isAnalyticsAllowedForCurrentPage()) {
          setGoogleAnalyticsDisabled(true);
          setPreferencesVisible(false);
          setScriptEnabled(false);
          return;
        }

        const globalPrivacyControl = hasGlobalPrivacyControl();
        if (globalPrivacyControl) {
          writeAnalyticsConsent("denied");
        }
        const storedConsent = readAnalyticsConsent();
        setGpcActive(globalPrivacyControl);
        setConsentStatus(storedConsent);

        if (storedConsent === "granted" && !globalPrivacyControl) {
          setGoogleAnalyticsDisabled(false);
          sendCurrentPageView();
          setScriptEnabled(true);
          setPreferencesVisible(false);
          return;
        }

        window.page2fileAnalyticsConsent = "denied";
        setGoogleAnalyticsDisabled(true);
        setScriptEnabled(false);
        setPreferencesVisible(storedConsent === "unset");
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

  useEffect(function listenForPreferenceRequests(): () => void {
    const handlePreferenceRequest = (): void => {
      setGpcActive(hasGlobalPrivacyControl());
      setConsentStatus(readAnalyticsConsent());
      setPreferencesVisible(true);
    };
    window.addEventListener(
      ANALYTICS_PREFERENCES_EVENT,
      handlePreferenceRequest,
    );
    return (): void =>
      window.removeEventListener(
        ANALYTICS_PREFERENCES_EVENT,
        handlePreferenceRequest,
      );
  }, []);

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
      {preferencesVisible ? (
        <AnalyticsConsentPanel
          gpcActive={gpcActive}
          locale={locale}
          status={consentStatus}
          onAllow={enableAnalytics}
          onClose={(): void => setPreferencesVisible(false)}
          onDeny={disableAnalytics}
        />
      ) : null}
    </>
  );
};
