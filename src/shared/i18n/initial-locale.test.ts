import { describe, expect, test } from "vitest";
import { resolveInitialLocale } from "./initial-locale";

describe("resolveInitialLocale", (): void => {
  test("uses Russian for Russia regardless of the browser header", (): void => {
    expect(
      resolveInitialLocale({
        acceptLanguage: "en-US,en;q=0.9",
        countryCode: "ru",
      }),
    ).toBe("ru");
  });

  test("uses English for the supported English-country group", (): void => {
    for (const countryCode of ["US", "GB", "IE", "CA", "AU", "NZ"]) {
      expect(
        resolveInitialLocale({
          acceptLanguage: "ru-RU,ru;q=0.9",
          countryCode,
        }),
      ).toBe("en");
    }
  });

  test("uses the weighted header for multilingual Russian-default countries", (): void => {
    for (const countryCode of ["BY", "KZ", "KG"]) {
      expect(
        resolveInitialLocale({
          acceptLanguage: "ru-RU;q=0.6,en-US;q=0.9",
          countryCode,
        }),
      ).toBe("en");
      expect(
        resolveInitialLocale({
          acceptLanguage: "en-US;q=0.4,ru-RU;q=0.8",
          countryCode,
        }),
      ).toBe("ru");
      expect(resolveInitialLocale({ countryCode })).toBe("ru");
    }
  });

  test("uses the first highest-weight supported browser language elsewhere", (): void => {
    expect(
      resolveInitialLocale({
        acceptLanguage: "de-DE,ru-RU;q=0.8,en-US;q=0.5",
        countryCode: "DE",
      }),
    ).toBe("de");
    expect(
      resolveInitialLocale({
        acceptLanguage: "fr-FR,en-GB;q=0.8,ru;q=0.5",
        countryCode: "FR",
      }),
    ).toBe("fr");
  });

  test("recognizes every supported locale from Accept-Language", (): void => {
    const localeTags = {
      cs: "cs-CZ",
      da: "da-DK",
      de: "de-DE",
      en: "en-US",
      es: "es-ES",
      fi: "fi-FI",
      fr: "fr-FR",
      hu: "hu-HU",
      it: "it-IT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sv: "sv-SE",
    } as const;

    for (const [locale, languageTag] of Object.entries(localeTags)) {
      expect(
        resolveInitialLocale({
          acceptLanguage: `${languageTag},en;q=0.5`,
          countryCode: "XX",
        }),
      ).toBe(locale);
    }
  });

  test("ignores wildcard, zero-weight and invalid quality values", (): void => {
    expect(
      resolveInitialLocale({
        acceptLanguage: "ru;q=0,*;q=1,en;q=0.7",
        countryCode: "XX",
      }),
    ).toBe("en");
    expect(
      resolveInitialLocale({
        acceptLanguage: "ru;q=2,en;q=0",
        countryCode: "T1",
      }),
    ).toBe("en");
  });

  test("defaults to English without a usable signal", (): void => {
    expect(resolveInitialLocale({})).toBe("en");
    expect(
      resolveInitialLocale({
        acceptLanguage: "ja-JP,*;q=0.5",
        countryCode: "not-a-country",
      }),
    ).toBe("en");
  });
});
