import { isLocale, type Locale } from "./locales";

type InitialLocaleSignals = {
  acceptLanguage?: string | null;
  countryCode?: string | null;
};

type WeightedLocale = {
  index: number;
  locale: Locale;
  weight: number;
};

const ENGLISH_COUNTRIES = new Set(["AU", "CA", "GB", "IE", "NZ", "US"]);
const RUSSIAN_DEFAULT_COUNTRIES = new Set(["BY", "KG", "KZ"]);
const UNKNOWN_COUNTRY_CODES = new Set(["T1", "XX"]);

const normalizeCountryCode = (
  countryCode: string | null | undefined,
): string | null => {
  const normalizedCode = countryCode?.trim().toUpperCase() ?? "";
  if (
    !/^[A-Z]{2}$/.test(normalizedCode) ||
    UNKNOWN_COUNTRY_CODES.has(normalizedCode)
  ) {
    return null;
  }
  return normalizedCode;
};

const parseWeight = (parameters: ReadonlyArray<string>): number | null => {
  const weightParameter = parameters.find((parameter: string): boolean =>
    /^q=/i.test(parameter.trim()),
  );
  if (!weightParameter) {
    return 1;
  }

  const weight = Number(weightParameter.trim().slice(2));
  if (!Number.isFinite(weight) || weight < 0 || weight > 1) {
    return null;
  }
  return weight;
};

const parseSupportedLocale = (languageTag: string): Locale | null => {
  const primaryLanguage = languageTag.trim().toLowerCase().split("-")[0];
  return isLocale(primaryLanguage) ? primaryLanguage : null;
};

const preferredHeaderLocale = (
  acceptLanguage: string | null | undefined,
): Locale | null => {
  if (!acceptLanguage?.trim()) {
    return null;
  }

  const weightedLocales: WeightedLocale[] = [];
  acceptLanguage.split(",").forEach(
    (entry: string, index: number): void => {
      const [languageTag = "", ...parameters] = entry.split(";");
      const locale = parseSupportedLocale(languageTag);
      const weight = parseWeight(parameters);
      if (!locale || weight === null || weight === 0) {
        return;
      }
      weightedLocales.push({ index, locale, weight });
    },
  );

  weightedLocales.sort(
    (left: WeightedLocale, right: WeightedLocale): number =>
      right.weight - left.weight || left.index - right.index,
  );
  return weightedLocales[0]?.locale ?? null;
};

export const resolveInitialLocale = ({
  acceptLanguage,
  countryCode,
}: InitialLocaleSignals): Locale => {
  const normalizedCountryCode = normalizeCountryCode(countryCode);
  const headerLocale = preferredHeaderLocale(acceptLanguage);

  if (normalizedCountryCode === "RU") {
    return "ru";
  }
  if (
    normalizedCountryCode &&
    RUSSIAN_DEFAULT_COUNTRIES.has(normalizedCountryCode)
  ) {
    return headerLocale ?? "ru";
  }
  if (
    normalizedCountryCode &&
    ENGLISH_COUNTRIES.has(normalizedCountryCode)
  ) {
    return "en";
  }
  return headerLocale ?? "en";
};
