export type Locale =
  | "en"
  | "de"
  | "fr"
  | "es"
  | "nl"
  | "pt"
  | "it"
  | "pl"
  | "sv"
  | "no"
  | "da"
  | "fi"
  | "cs"
  | "ro"
  | "hu";

export type LocaleDefinition = {
  code: Locale;
  languageName: string;
  htmlLang: string;
  reviewed: boolean;
  indexable: boolean;
};

export const localeRegistry: ReadonlyArray<LocaleDefinition> = [
  { code: "en", languageName: "English", htmlLang: "en", reviewed: true, indexable: true },
  { code: "de", languageName: "Deutsch", htmlLang: "de", reviewed: false, indexable: false },
  { code: "fr", languageName: "Français", htmlLang: "fr", reviewed: false, indexable: false },
  { code: "es", languageName: "Español", htmlLang: "es", reviewed: false, indexable: false },
  { code: "nl", languageName: "Nederlands", htmlLang: "nl", reviewed: false, indexable: false },
  { code: "pt", languageName: "Português", htmlLang: "pt", reviewed: false, indexable: false },
  { code: "it", languageName: "Italiano", htmlLang: "it", reviewed: false, indexable: false },
  { code: "pl", languageName: "Polski", htmlLang: "pl", reviewed: false, indexable: false },
  { code: "sv", languageName: "Svenska", htmlLang: "sv", reviewed: false, indexable: false },
  { code: "no", languageName: "Norsk", htmlLang: "no", reviewed: false, indexable: false },
  { code: "da", languageName: "Dansk", htmlLang: "da", reviewed: false, indexable: false },
  { code: "fi", languageName: "Suomi", htmlLang: "fi", reviewed: false, indexable: false },
  { code: "cs", languageName: "Čeština", htmlLang: "cs", reviewed: false, indexable: false },
  { code: "ro", languageName: "Română", htmlLang: "ro", reviewed: false, indexable: false },
  { code: "hu", languageName: "Magyar", htmlLang: "hu", reviewed: false, indexable: false },
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
