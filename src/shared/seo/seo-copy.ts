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
        "Preview meaningful webpage sections, choose visual or editable output, and export a reviewed PDF or PowerPoint sample without creating an account.",
    },
    pdf: {
      title: "Convert one webpage to a reviewed PDF",
      description:
        "Enter a public HTTPS URL, choose visual or editable PDF output, and inspect page sections and conversion warnings before downloading a sample.",
    },
    powerpoint: {
      title: "Convert a webpage to PowerPoint slides",
      description:
        "Turn meaningful webpage sections into visual or editable 16:9 PowerPoint slides and review every fallback before downloading the sample deck.",
    },
    guide: {
      title: "How to use the Page2File Chrome extension",
      description:
        "Follow a step-by-step guide or accessible video transcript to export active webpages and supported AI chats locally to PDF or PowerPoint.",
    },
    preview: {
      title: "Private conversion preview workspace",
      description:
        "Temporary prototype preview for reviewing pages, slides, local operations and conversion warnings before creating a static sample file.",
    },
    download: {
      title: "Download a static Page2File sample",
      description:
        "Temporary noindex download page for a static PDF or PowerPoint demonstration file that contains no submitted URL or user document content.",
    },
    blog: {
      title: "Practical webpage export guides and notes",
      description:
        "Read ten focused guides about webpage fidelity, clickable links, page breaks, PowerPoint slides, private AI chats and safer HTML conversion.",
    },
    updates: {
      title: "Page2File product updates and decisions",
      description:
        "Follow human-readable Page2File prototype updates covering preview controls, local AI chat export, privacy boundaries and product limitations.",
    },
    changelog: {
      title: "Page2File technical prototype changelog",
      description:
        "Review versioned Page2File prototype changes for converters, preview operations, localized routes, consent-first analytics and security controls.",
    },
    notFound: {
      title: "Page2File page could not be found",
      description:
        "The requested Page2File route does not exist. Return to the converter, Chrome extension guide, practical blog or product updates.",
    },
  },
  ru: {
    home: {
      title: "Конвертация веб-страниц в PDF и PowerPoint",
      description:
        "Проверяйте смысловые секции веб-страницы, выбирайте визуальный или редактируемый режим и экспортируйте PDF либо PowerPoint без регистрации.",
    },
    pdf: {
      title: "Конвертация одной веб-страницы в PDF",
      description:
        "Введите общедоступный HTTPS URL, выберите визуальный или редактируемый PDF и проверьте секции и предупреждения до скачивания примера.",
    },
    powerpoint: {
      title: "Конвертация веб-страницы в PowerPoint",
      description:
        "Превратите смысловые секции веб-страницы в визуальные или редактируемые слайды 16:9 и проверьте каждую замену до скачивания презентации.",
    },
    guide: {
      title: "Как использовать расширение Page2File для Chrome",
      description:
        "Следуйте пошаговой инструкции или доступной расшифровке видео, чтобы локально экспортировать открытые страницы и AI-чаты в PDF или PowerPoint.",
    },
    preview: {
      title: "Закрытая рабочая область предпросмотра",
      description:
        "Временный noindex-предпросмотр страниц, слайдов, локальных операций и предупреждений перед созданием статического демонстрационного файла.",
    },
    download: {
      title: "Скачивание демонстрационного файла Page2File",
      description:
        "Временная noindex-страница скачивания статического PDF или PowerPoint, который не содержит введённый URL или пользовательский документ.",
    },
    blog: {
      title: "Руководства по экспорту веб-страниц",
      description:
        "Читайте десять практических статей о точности веб-страниц, кликабельных ссылках, разрывах PDF, слайдах, закрытых AI-чатах и безопасном HTML.",
    },
    updates: {
      title: "Обновления и продуктовые решения Page2File",
      description:
        "Следите за обновлениями прототипа Page2File: предпросмотром секций, локальным экспортом AI-чатов, конфиденциальностью и ограничениями.",
    },
    changelog: {
      title: "Техническая история версий Page2File",
      description:
        "Изучайте версии прототипа Page2File: конвертеры, операции предпросмотра, локализованные маршруты, consent-first аналитику и защитные меры.",
    },
    notFound: {
      title: "Страница Page2File не найдена",
      description:
        "Запрошенный маршрут Page2File не существует. Вернитесь к конвертеру, инструкции по расширению, практическому блогу или обновлениям продукта.",
    },
  },
};

export const getSeoCopy = (locale: Locale, key: SeoCopyKey): SeoCopy =>
  seoCopy[isPublishedLocale(locale) ? locale : "en"][key];
