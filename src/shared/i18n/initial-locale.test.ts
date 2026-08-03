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
    ).toBe("ru");
    expect(
      resolveInitialLocale({
        acceptLanguage: "fr-FR,en-GB;q=0.8,ru;q=0.5",
        countryCode: "FR",
      }),
    ).toBe("en");
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
        acceptLanguage: "de-DE,*;q=0.5",
        countryCode: "not-a-country",
      }),
    ).toBe("en");
  });
});
