import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";
import type { RailItem } from "@/shared/ui/page-rail";

type TrustItem = {
  label: string;
  text: string;
};

type ModeItem = {
  title: string;
  text: string;
};

type SourceItem = {
  title: string;
  text: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type HomeCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  productBoundariesLabel: string;
  trustItems: ReadonlyArray<TrustItem>;
  outputLabel: string;
  outputTitle: string;
  modes: ReadonlyArray<ModeItem>;
  sourceLabel: string;
  sourceTitle: string;
  sources: ReadonlyArray<SourceItem>;
  workflowsLabel: string;
  workflowsTitle: string;
  aiChatLink: string;
  blogLink: string;
  questionsLabel: string;
  questionsTitle: string;
  faq: ReadonlyArray<FaqItem>;
  railItems: ReadonlyArray<RailItem>;
};

export type LandingUiCopy = {
  legalDraft:
    string;
  tryPrototype: string;
  relatedPages: string;
};

type MarketingCopy = {
  home: HomeCopy;
  landing: LandingUiCopy;
};

const marketingCopy: LocalizedPublished<MarketingCopy> = {
  en: {
    home: {
      eyebrow: "Webpage → reviewed document",
      title: "Keep the page. Change the format.",
      lead:
        "Turn a public webpage into a PDF or a PowerPoint deck, inspect every section first, and choose whether fidelity or editability matters more.",
      productBoundariesLabel: "Product boundaries",
      trustItems: [
        { label: "NO ACCOUNT", text: "Start without registration" },
        { label: "NO HISTORY", text: "No saved conversion list" },
        { label: "2 MODES", text: "Visual or editable" },
        { label: "PREVIEW FIRST", text: "See degradation before download" },
      ],
      outputLabel: "Output contract",
      outputTitle:
        "Two modes because one promise cannot fit every webpage",
      modes: [
        {
          title: "Visual",
          text:
            "Capture each meaningful section with the strongest possible visual fidelity. Ideal when layout matters more than editing.",
        },
        {
          title: "Editable & clickable",
          text:
            "Rebuild supported text, buttons, images and links. Complex blocks fall back to images and remain visible in preview warnings.",
        },
      ],
      sourceLabel: "Choose the source",
      sourceTitle: "Public URL on the web. Private tab in the extension.",
      sources: [
        {
          title: "Public webpage",
          text:
            "The future server workflow will temporarily process a public HTTPS URL. This prototype demonstrates the complete review UI with mock jobs.",
        },
        {
          title: "Current tab or AI chat",
          text:
            "The extension flow is designed for content already visible in your browser and keeps chat export positioned as local processing.",
        },
      ],
      workflowsLabel: "Focused workflows",
      workflowsTitle: "Use the interface that already knows the output",
      aiChatLink: "Export AI chats locally",
      blogLink: "Read practical conversion guides",
      questionsLabel: "Questions",
      questionsTitle: "Clear boundaries before real conversion begins",
      faq: [
        {
          question: "Does this prototype fetch my URL?",
          answer:
            "No. It validates the shape locally and runs a deterministic mock job.",
        },
        {
          question: "Can every element stay editable?",
          answer:
            "No. The production design uses adaptive raster fallback and shows those decisions before download.",
        },
        {
          question: "Is conversion history stored?",
          answer:
            "No account or history feature exists. The browser stores only your optional analytics preference.",
        },
      ],
      railItems: [
        { index: "01", title: "Lead section", meta: "editable · links kept" },
        {
          index: "02",
          title: "Feature comparison",
          meta: "visual fallback",
        },
        { index: "03", title: "Article body", meta: "editable · 3 pages" },
        { index: "04", title: "Call to action", meta: "link verified" },
      ],
    },
    landing: {
      legalDraft:
        "Draft content — legal owner, jurisdiction and processor review are required before indexing.",
      tryPrototype: "Try the web prototype",
      relatedPages: "Related workflows",
    },
  },
  ru: {
    home: {
      eyebrow: "Веб-страница → проверенный документ",
      title: "Сохраните страницу. Измените формат.",
      lead:
        "Превратите общедоступную веб-страницу в PDF или презентацию PowerPoint, сначала проверьте каждую секцию и выберите, что важнее: точный вид или редактирование.",
      productBoundariesLabel: "Границы продукта",
      trustItems: [
        { label: "БЕЗ АККАУНТА", text: "Начните без регистрации" },
        { label: "БЕЗ ИСТОРИИ", text: "Нет списка прошлых конвертаций" },
        { label: "2 РЕЖИМА", text: "Визуальный или редактируемый" },
        {
          label: "СНАЧАЛА ПРОСМОТР",
          text: "Увидьте изменения до скачивания",
        },
      ],
      outputLabel: "Правила результата",
      outputTitle:
        "Два режима, потому что один подход не подходит каждой веб-странице",
      modes: [
        {
          title: "Визуальный",
          text:
            "Сохраняет каждую значимую секцию с максимальной точностью внешнего вида. Подходит, когда макет важнее редактирования.",
        },
        {
          title: "Редактируемый и кликабельный",
          text:
            "Воссоздаёт поддерживаемый текст, кнопки, изображения и ссылки. Сложные блоки становятся изображениями и отмечаются в предпросмотре.",
        },
      ],
      sourceLabel: "Выберите источник",
      sourceTitle:
        "Открытый URL — в веб-сервисе. Закрытая вкладка — в расширении.",
      sources: [
        {
          title: "Общедоступная веб-страница",
          text:
            "Будущий серверный процесс будет временно обрабатывать открытый HTTPS URL. Сейчас прототип показывает полный интерфейс проверки на детерминированных mock-задачах.",
        },
        {
          title: "Текущая вкладка или AI-чат",
          text:
            "Расширение предназначено для контента, уже открытого в браузере, а экспорт чатов позиционируется как локальная обработка.",
        },
      ],
      workflowsLabel: "Специализированные сценарии",
      workflowsTitle: "Выберите интерфейс, который уже знает нужный формат",
      aiChatLink: "Экспортировать AI-чаты локально",
      blogLink: "Читать практические руководства",
      questionsLabel: "Вопросы",
      questionsTitle: "Понятные границы до начала реальной конвертации",
      faq: [
        {
          question: "Прототип загружает введённый URL?",
          answer:
            "Нет. Он только проверяет формат адреса в браузере и запускает детерминированную mock-задачу.",
        },
        {
          question: "Каждый элемент останется редактируемым?",
          answer:
            "Нет. Будущая система будет переводить сложные блоки в изображения и заранее показывать это решение в предпросмотре.",
        },
        {
          question: "История конвертаций сохраняется?",
          answer:
            "Нет. Аккаунтов и истории нет. Браузер хранит только выбранную вами настройку аналитики.",
        },
      ],
      railItems: [
        {
          index: "01",
          title: "Вводная секция",
          meta: "редактируется · ссылки сохранены",
        },
        {
          index: "02",
          title: "Сравнение возможностей",
          meta: "визуальная замена",
        },
        {
          index: "03",
          title: "Текст статьи",
          meta: "редактируется · 3 страницы",
        },
        {
          index: "04",
          title: "Призыв к действию",
          meta: "ссылка проверена",
        },
      ],
    },
    landing: {
      legalDraft:
        "Черновой текст — до индексации требуется проверка юридического владельца, юрисдикции и списка обработчиков данных.",
      tryPrototype: "Открыть веб-прототип",
      relatedPages: "Связанные сценарии",
    },
  },
};

export const getMarketingCopy = (locale: Locale): MarketingCopy =>
  marketingCopy[isPublishedLocale(locale) ? locale : "en"];
