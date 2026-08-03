import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";

export type SeoCopy = {
  title: string;
  description: string;
};

export type SeoCopyKey =
  | "home"
  | "pdf"
  | "powerpoint"
  | "guide"
  | "preview"
  | "download"
  | "blog"
  | "updates"
  | "changelog"
  | "notFound";

const seoCopy: LocalizedPublished<Record<SeoCopyKey, SeoCopy>> = {
  en: {
    home: {
      title: "Convert webpages to PDF or PowerPoint",
      description:
        "Preview meaningful webpage sections, choose screenshot or editable output, and export a reviewed PDF or PowerPoint sample without creating an account.",
    },
    pdf: {
      title: "Convert one webpage to a reviewed PDF",
      description:
        "Enter a public HTTPS URL, choose screenshot or editable PDF output, and inspect page sections and conversion warnings before downloading a sample.",
    },
    powerpoint: {
      title: "Convert a webpage to PowerPoint slides",
      description:
        "Turn meaningful webpage sections into screenshot or editable 16:9 PowerPoint slides and review every fallback before downloading the sample deck.",
    },
    guide: {
      title: "How to use the Page 2 File Chrome extension",
      description:
        "Follow a step-by-step guide or accessible video transcript to export active webpages and supported AI chats to PDF or PowerPoint.",
    },
    preview: {
      title: "Private conversion preview workspace",
      description:
        "Temporary prototype preview for reviewing pages, slides, preview operations and conversion warnings before creating a static sample file.",
    },
    download: {
      title: "Download a static Page 2 File sample",
      description:
        "Temporary noindex download page for a static PDF or PowerPoint demonstration file that contains no submitted URL or user document content.",
    },
    blog: {
      title: "Practical webpage export guides and notes",
      description:
        "Read practical guides about webpage fidelity, PDF and PowerPoint output, private AI chats, browser messengers and safer HTML conversion.",
    },
    updates: {
      title: "Page 2 File product updates and decisions",
      description:
        "Page 2 File product updates will be published here after the first public release, with concise notes about shipped changes and decisions.",
    },
    changelog: {
      title: "Page 2 File technical prototype changelog",
      description:
        "Review versioned Page 2 File prototype changes for converters, preview operations, localized routes, consent-first analytics and security controls.",
    },
    notFound: {
      title: "Page 2 File page could not be found",
      description:
        "The requested Page 2 File route does not exist. Return to the converter, Chrome extension guide, practical blog or product updates.",
    },
  },
  ru: {
    home: {
      title: "Конвертация веб-страниц в PDF и PowerPoint",
      description:
        "Проверяйте смысловые секции веб-страницы, выбирайте режим скриншотов или редактируемый режим и экспортируйте PDF либо PowerPoint без регистрации.",
    },
    pdf: {
      title: "Конвертация одной веб-страницы в PDF",
      description:
        "Введите общедоступный HTTPS URL, выберите PDF в режиме скриншотов или редактируемом режиме и проверьте секции и предупреждения до скачивания примера.",
    },
    powerpoint: {
      title: "Конвертация веб-страницы в PowerPoint",
      description:
        "Превратите смысловые секции веб-страницы в слайды-скриншоты или редактируемые слайды 16:9 и проверьте каждую замену до скачивания презентации.",
    },
    guide: {
      title: "Как использовать расширение Page 2 File для Chrome",
      description:
        "Следуйте пошаговой инструкции или доступной расшифровке видео, чтобы экспортировать открытые страницы и AI-чаты в PDF или PowerPoint.",
    },
    preview: {
      title: "Закрытая рабочая область предпросмотра",
      description:
        "Временный noindex-предпросмотр страниц, слайдов, локальных операций и предупреждений перед созданием итогового файла.",
    },
    download: {
      title: "Скачивание готового файла Page 2 File",
      description:
        "Временная noindex-страница скачивания готового PDF или PowerPoint после успешной обработки; ссылка относится только к конкретной временной задаче.",
    },
    blog: {
      title: "Руководства по экспорту веб-страниц",
      description:
        "Читайте практические статьи о точности веб-страниц, PDF и PowerPoint, приватных AI-чатах, браузерных мессенджерах и безопасном HTML.",
    },
    updates: {
      title: "Обновления и продуктовые решения Page 2 File",
      description:
        "Обновления продукта Page 2 File появятся здесь после первого публичного релиза с краткими описаниями выпущенных изменений и решений.",
    },
    changelog: {
      title: "Техническая история версий Page 2 File",
      description:
        "Изучайте версии прототипа Page 2 File: конвертеры, операции предпросмотра, локализованные маршруты, consent-first аналитику и защитные меры.",
    },
    notFound: {
      title: "Страница Page 2 File не найдена",
      description:
        "Запрошенный маршрут Page 2 File не существует. Вернитесь к конвертеру, инструкции по расширению, практическому блогу или обновлениям продукта.",
    },
  },
};

export const getSeoCopy = (locale: Locale, key: SeoCopyKey): SeoCopy =>
  seoCopy[isPublishedLocale(locale) ? locale : "en"][key];
