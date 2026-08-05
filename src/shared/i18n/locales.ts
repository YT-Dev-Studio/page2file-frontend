export type Locale =
  | "en"
  | "ru"
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
  openGraphLocale: string;
  reviewed: boolean;
  indexable: boolean;
};

export const localeRegistry: ReadonlyArray<LocaleDefinition> = [
  { code: "en", languageName: "English", htmlLang: "en", openGraphLocale: "en_US", reviewed: true, indexable: true },
  { code: "ru", languageName: "Русский", htmlLang: "ru", openGraphLocale: "ru_RU", reviewed: true, indexable: true },
  { code: "de", languageName: "Deutsch", htmlLang: "de", openGraphLocale: "de_DE", reviewed: true, indexable: true },
  { code: "fr", languageName: "Français", htmlLang: "fr", openGraphLocale: "fr_FR", reviewed: true, indexable: true },
  { code: "es", languageName: "Español", htmlLang: "es", openGraphLocale: "es_ES", reviewed: true, indexable: true },
  { code: "nl", languageName: "Nederlands", htmlLang: "nl", openGraphLocale: "nl_NL", reviewed: true, indexable: true },
  { code: "pt", languageName: "Português", htmlLang: "pt", openGraphLocale: "pt_PT", reviewed: true, indexable: true },
  { code: "it", languageName: "Italiano", htmlLang: "it", openGraphLocale: "it_IT", reviewed: true, indexable: true },
  { code: "pl", languageName: "Polski", htmlLang: "pl", openGraphLocale: "pl_PL", reviewed: true, indexable: true },
  { code: "sv", languageName: "Svenska", htmlLang: "sv", openGraphLocale: "sv_SE", reviewed: true, indexable: true },
  { code: "no", languageName: "Norsk", htmlLang: "no", openGraphLocale: "nb_NO", reviewed: true, indexable: true },
  { code: "da", languageName: "Dansk", htmlLang: "da", openGraphLocale: "da_DK", reviewed: true, indexable: true },
  { code: "fi", languageName: "Suomi", htmlLang: "fi", openGraphLocale: "fi_FI", reviewed: true, indexable: true },
  { code: "cs", languageName: "Čeština", htmlLang: "cs", openGraphLocale: "cs_CZ", reviewed: true, indexable: true },
  { code: "ro", languageName: "Română", htmlLang: "ro", openGraphLocale: "ro_RO", reviewed: true, indexable: true },
  { code: "hu", languageName: "Magyar", htmlLang: "hu", openGraphLocale: "hu_HU", reviewed: true, indexable: true },
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
