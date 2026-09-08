export type AnalyticsConsentStatus = "denied" | "granted" | "unset";

type StoredAnalyticsConsent = {
  decidedAt: string;
  expiresAt: string;
  status: Exclude<AnalyticsConsentStatus, "unset">;
  version: 2;
};

export const ANALYTICS_CONSENT_STORAGE_KEY =
  "page2file-analytics-consent-v2";
export const ANALYTICS_PREFERENCES_EVENT =
  "page2file:open-analytics-preferences";
export const ANALYTICS_CONSENT_LIFETIME_MS = 180 * 24 * 60 * 60 * 1_000;
export const ANALYTICS_COOKIE_LIFETIME_SECONDS = 180 * 24 * 60 * 60;

const isStoredConsent = (value: unknown): value is StoredAnalyticsConsent => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Partial<StoredAnalyticsConsent>;
  return (
    candidate.version === 2 &&
    (candidate.status === "denied" || candidate.status === "granted") &&
    typeof candidate.decidedAt === "string" &&
    typeof candidate.expiresAt === "string"
  );
};

export const hasGlobalPrivacyControl = (): boolean => {
  if (typeof navigator === "undefined") {
    return false;
  }

  return (
    navigator as Navigator & { globalPrivacyControl?: boolean }
  ).globalPrivacyControl === true;
};

export const readAnalyticsConsent = (): AnalyticsConsentStatus => {
  if (typeof window === "undefined") {
    return "unset";
  }
  if (hasGlobalPrivacyControl()) {
    return "denied";
  }

  try {
    const rawValue = window.localStorage.getItem(
      ANALYTICS_CONSENT_STORAGE_KEY,
    );
    if (!rawValue) {
      return "unset";
    }

    const consent = JSON.parse(rawValue) as unknown;
    const expiresAt = isStoredConsent(consent)
      ? Date.parse(consent.expiresAt)
      : Number.NaN;
    if (
      !isStoredConsent(consent) ||
      !Number.isFinite(expiresAt) ||
      expiresAt <= Date.now()
    ) {
      window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY);
      return "unset";
    }
    return consent.status;
  } catch {
    return "unset";
  }
};

export const writeAnalyticsConsent = (
  status: Exclude<AnalyticsConsentStatus, "unset">,
): void => {
  if (typeof window === "undefined") {
    return;
  }

  const decidedAt = new Date();
  const consent: StoredAnalyticsConsent = {
    decidedAt: decidedAt.toISOString(),
    expiresAt: new Date(
      decidedAt.getTime() + ANALYTICS_CONSENT_LIFETIME_MS,
    ).toISOString(),
    status,
    version: 2,
  };

  try {
    window.localStorage.setItem(
      ANALYTICS_CONSENT_STORAGE_KEY,
      JSON.stringify(consent),
    );
  } catch {
    // The current page can still honor the choice when storage is unavailable.
  }
};

export const openAnalyticsPreferences = (): void => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(ANALYTICS_PREFERENCES_EVENT));
  }
};

export const removeGoogleAnalyticsCookies = (): void => {
  if (typeof document === "undefined") {
    return;
  }

  const cookieNames = document.cookie
    .split(";")
    .map((cookie): string => cookie.split("=")[0]?.trim() ?? "")
    .filter((name): boolean => name === "p2f_ga" || name.startsWith("p2f_ga_"));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
  }
};
