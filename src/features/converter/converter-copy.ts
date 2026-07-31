import type {
  ConversionFormat,
  MockScenario,
} from "@/entities/conversion/model";
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
  prototypeNotice: string;
  visualTitle: string;
  visualText: string;
  editableTitle: string;
  editableText: string;
  warningsTitle: string;
  warningsText: string;
  privateQuestion: string;
  extensionLink: string;
  modeLegend: string;
  demoState: string;
  demoHint: string;
  submit: Record<ConversionFormat, string>;
  scenarios: Record<MockScenario, string>;
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
    prototypeNotice:
      "This prototype never fetches the entered URL. It demonstrates the intended review flow with deterministic sample data.",
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
    demoState: "DEMO STATE",
    demoHint:
      "Select a deterministic state without contacting the entered URL.",
    submit: {
      pdf: "Generate PDF preview",
      pptx: "Generate PowerPoint preview",
    },
    scenarios: {
      happy: "Happy path",
      "partial-warning": "Partial fallback warning",
      "human-verification": "Human verification",
      "rate-limited": "Rate limited",
      "source-blocked": "Source blocked / auth required",
      "page-too-large": "Page too large",
      timeout: "Timeout",
      expired: "Expired",
      failed: "Recoverable failure",
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
    prototypeNotice:
      "Прототип не загружает введённый URL. Он показывает будущий процесс проверки на детерминированных демонстрационных данных.",
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
    demoState: "ДЕМО-СОСТОЯНИЕ",
    demoHint:
      "Выберите детерминированное состояние без обращения к введённому URL.",
    submit: {
      pdf: "Создать предпросмотр PDF",
      pptx: "Создать предпросмотр PowerPoint",
    },
    scenarios: {
      happy: "Успешный сценарий",
      "partial-warning": "Частичная визуальная замена",
      "human-verification": "Проверка пользователя",
      "rate-limited": "Превышен лимит",
      "source-blocked": "Источник закрыт / требуется вход",
      "page-too-large": "Страница слишком большая",
      timeout: "Истекло время ожидания",
      expired: "Предпросмотр истёк",
      failed: "Восстанавливаемая ошибка",
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
