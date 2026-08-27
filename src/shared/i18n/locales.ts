export type Locale = "en" | "ru";

export type LocaleDefinition = {
  code: Locale;
  languageName: string;
  htmlLang: string;
  openGraphLocale: string;
  reviewed: boolean;
  indexable: boolean;
};

export const localeRegistry: ReadonlyArray<LocaleDefinition> = [
  { code: "en", languageName: "English", htmlLang: "en", openGraphLocale: "en_US", reviewed: true, indexable: true },
  { code: "ru", languageName: "Русский", htmlLang: "ru", openGraphLocale: "ru_RU", reviewed: true, indexable: true },
];

const localeCodes = localeRegistry.map(
  (definition: LocaleDefinition): Locale => definition.code,
);

export const isLocale = (value: string): value is Locale => {
  const matchesValue = (locale: Locale): boolean => locale === value;
  return localeCodes.some(matchesValue);
};

export const getLocaleDefinition = (locale: Locale): LocaleDefinition => {
  const matchesLocale = (definition: LocaleDefinition): boolean =>
    definition.code === locale;
  const definition = localeRegistry.find(matchesLocale);
  return definition ?? localeRegistry[0];
};

export const replaceLocale = (
  pathname: string,
  nextLocale: Locale,
): string => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${nextLocale}`;
  }
  if (isLocale(segments[0])) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }
  return `/${segments.join("/")}`;
};
