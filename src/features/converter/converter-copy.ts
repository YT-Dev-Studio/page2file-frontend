import type { ConversionFormat } from "@/entities/conversion/model";
import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";
import type { UrlValidationCode } from "./url-validation";

type FormatPageCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  asideTitle: string;
};

type ConverterCopy = {
  formats: Record<ConversionFormat, FormatPageCopy>;
  sourceTitle: string;
  sourceHint: string;
  reviewTitle: string;
  extensionTitle: string;
  extensionBody: string;
  visualTitle: string;
  visualText: string;
  editableTitle: string;
  editableText: string;
  warningsTitle: string;
  warningsText: string;
  privateQuestion: string;
  extensionLink: string;
  modeLegend: string;
  submit: Record<ConversionFormat, string>;
  validation: Record<UrlValidationCode, string>;
};

const converterCopy: LocalizedPublished<ConverterCopy> = {
  en: {
    formats: {
      pdf: {
        eyebrow: "Public URL → PDF",
        title: "Convert one webpage to PDF",
        lead:
          "Validate a public URL, choose a fidelity contract and review every page before the sample download.",
        asideTitle: "Preview before pagination",
      },
      pptx: {
        eyebrow: "Public URL → 16:9 slides",
        title: "Convert a webpage to PowerPoint",
        lead:
          "Map meaningful webpage sections to slides, choose visual or editable output and inspect every fallback.",
        asideTitle: "Preview before the deck",
      },
    },
    sourceTitle: "Set the source and output",
    sourceHint:
      "Start with one public URL. Review the generated structure before final rendering.",
    reviewTitle: "What you can verify",
    extensionTitle: "Need the page as it appears after sign-in?",
    extensionBody:
      "Capture the current signed-in tab with the extension, then review the result before downloading.",
    visualTitle: "Visual mode",
    visualText: "Highest layout fidelity through section images.",
    editableTitle: "Editable mode",
    editableText:
      "Supported text and links remain editable and clickable.",
    warningsTitle: "Honest warnings",
    warningsText:
      "Fonts, canvas, media and unsafe links show their fallback before download.",
    privateQuestion: "Signed-in or private page?",
    extensionLink: "Use the extension workflow",
    modeLegend: "Conversion mode",
    submit: {
      pdf: "Generate PDF preview",
      pptx: "Generate PowerPoint preview",
    },
    validation: {
      empty: "Enter a URL.",
      tooLong: "The URL is too long.",
      malformed: "Enter a valid URL starting with http:// or https://.",
      insecure: "Enter a valid URL starting with http:// or https://.",
      credentials: "URLs containing credentials are not accepted.",
      blockedHost: "Private, local and metadata hosts are blocked.",
    },
  },
  ru: {
    formats: {
      pdf: {
        eyebrow: "Открытый URL → PDF",
        title: "Конвертируйте одну веб-страницу в PDF",
        lead:
          "Проверьте общедоступный URL, выберите режим точности и просмотрите каждую страницу перед скачиванием примера.",
        asideTitle: "Предпросмотр до разбиения на страницы",
      },
      pptx: {
        eyebrow: "Открытый URL → слайды 16:9",
        title: "Конвертируйте веб-страницу в PowerPoint",
        lead:
          "Превратите значимые секции веб-страницы в слайды, выберите визуальный или редактируемый результат и проверьте каждую замену.",
        asideTitle: "Предпросмотр до создания презентации",
      },
    },
    sourceTitle: "Укажите источник и формат",
    sourceHint:
      "Начните с одного общедоступного URL. Проверьте структуру результата до финального рендеринга.",
    reviewTitle: "Что можно проверить",
    extensionTitle: "Нужна страница в том виде, как она выглядит после входа?",
    extensionBody:
      "Сохраните текущую вкладку через расширение Chrome и проверьте результат перед скачиванием.",
    visualTitle: "Визуальный режим",
    visualText: "Максимальная точность макета благодаря изображениям секций.",
    editableTitle: "Редактируемый режим",
    editableText:
      "Поддерживаемые текст и ссылки остаются редактируемыми и кликабельными.",
    warningsTitle: "Честные предупреждения",
    warningsText:
      "Замены шрифтов, canvas, медиа и небезопасных ссылок видны до скачивания.",
    privateQuestion: "Страница закрыта или требует входа?",
    extensionLink: "Используйте расширение",
    modeLegend: "Режим конвертации",
    submit: {
      pdf: "Создать предпросмотр PDF",
      pptx: "Создать предпросмотр PowerPoint",
    },
    validation: {
      empty: "Введите URL.",
      tooLong: "URL слишком длинный.",
      malformed:
        "Введите корректный URL, начинающийся с http:// или https://.",
      insecure:
        "Введите корректный URL, начинающийся с http:// или https://.",
      credentials: "URL с логином или паролем не принимаются.",
      blockedHost:
        "Локальные, частные и служебные адреса заблокированы.",
    },
  },
};

export const getConverterCopy = (locale: Locale): ConverterCopy =>
  converterCopy[isPublishedLocale(locale) ? locale : "en"];
