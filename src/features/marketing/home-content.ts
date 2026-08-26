import type { Locale } from "@/shared/i18n/locales";

type HomeFaqItem = {
  answer: string;
  question: string;
};

export type HomeMarketingCopy = {
  faqItems: ReadonlyArray<HomeFaqItem>;
  faqTitle: string;
  heroIllustrationAlt: string;
};

type HomeLocalizedCopy = {
  faqTitle: string;
  heroIllustrationAlt: string;
  questions: readonly [string, string, string, string, string, string, string];
  answers: readonly [string, string, string, string, string, string, string];
};

const localizedCopy: Record<Locale, HomeLocalizedCopy> = {
  en: {
    faqTitle: "Questions about saving webpages and chats as PDF",
    heroIllustrationAlt: "A browser tab, the extension button, and a finished PDF connected in three steps.",
    questions: [
      "How do I save a webpage as a PDF?",
      "How do I export a ChatGPT, Claude, or Gemini chat to PDF?",
      "Can I export a WhatsApp Web or Telegram Web chat to PDF?",
      "Can Page 2 File save a webpage that requires sign-in?",
      "What is the difference between Accurate copy and Editable document?",
      "How do I capture a long webpage without missing content?",
      "Does Page 2 File upload or store my webpage and chat content?",
    ],
    answers: [
      "Open the source page in your browser, run Page 2 PDF on the active tab, and choose Accurate copy or Editable document. Keep the source page open until the PDF preview appears, then check it before downloading.",
      "Open the conversation you need and choose AI / Chat. Dedicated adapters are implemented for ChatGPT, Claude, Gemini, Grok, Perplexity, Microsoft Copilot, and Manus; export is limited to the current conversation and at most the latest 2,000 retrievable messages.",
      "Yes. Page 2 PDF can format the current WhatsApp Web conversation or Telegram Web chat or channel. It does not create an account-wide backup or export every thread at once.",
      "Yes, when the page is already available in the active browser tab and the extension is allowed to read it. Page 2 PDF does not receive your password or bypass the website's access controls.",
      "Accurate copy produces image-based pages that prioritize the rendered appearance. Editable document creates selectable text and safe links, with options for screen or print layout and supported content removal.",
      "Accurate copy prepares the main scroll area and performs a bounded pass to load available lazy content before capture. Virtualized lists, protected frames, unavailable media, or pages that keep changing can still produce an incomplete result.",
      "The extension creates its document without uploading page or conversation content to Page 2 File servers. Temporary preview data is removed after the session, and remaining data older than two hours is cleared the next time the extension runs.",
    ],
  },
  ru: {
    faqTitle: "Вопросы о сохранении веб-страниц и чатов в PDF",
    heroIllustrationAlt: "Три шага: вкладка браузера, кнопка расширения и готовый PDF.",
    questions: [
      "Как сохранить веб-страницу в PDF?",
      "Как экспортировать чат ChatGPT, Claude или Gemini в PDF?",
      "Можно ли экспортировать чат WhatsApp Web или Telegram Web в PDF?",
      "Может ли Page 2 File сохранить страницу после входа в аккаунт?",
      "Чем отличаются режимы «Точная копия» и «Редактируемый документ»?",
      "Как сохранить длинную веб-страницу без пропущенного контента?",
      "Загружает или хранит ли Page 2 File содержимое страниц и чатов?",
    ],
    answers: [
      "Откройте исходную страницу в браузере, запустите Page 2 PDF на активной вкладке и выберите «Точная копия» или «Редактируемый документ». Не закрывайте исходную страницу до появления предпросмотра и проверьте PDF перед скачиванием.",
      "Откройте нужный диалог и выберите «AI / Чат». Отдельные адаптеры реализованы для ChatGPT, Claude, Gemini, Grok, Perplexity, Microsoft Copilot и Manus; экспортируется только текущая переписка и не более 2 000 последних доступных сообщений.",
      "Да. Page 2 PDF форматирует текущую переписку WhatsApp Web либо чат или канал Telegram Web. Расширение не создаёт резервную копию аккаунта и не экспортирует все диалоги одновременно.",
      "Да, если страница уже доступна в активной вкладке браузера и расширению разрешено её читать. Page 2 PDF не получает ваш пароль и не обходит ограничения доступа сайта.",
      "«Точная копия» создаёт страницы-изображения и отдаёт приоритет внешнему виду. «Редактируемый документ» сохраняет выделяемый текст и безопасные ссылки, позволяет выбрать экранный или печатный вид и убрать поддерживаемый контент.",
      "«Точная копия» подготавливает основную прокручиваемую область и в пределах заданного времени загружает доступный отложенный контент. Виртуальные списки, защищённые фреймы, недоступные медиа и постоянно меняющиеся страницы могут привести к неполному результату.",
      "Расширение создаёт документ без загрузки содержимого исходной страницы или переписки на серверы Page 2 File. Временные данные предпросмотра удаляются после сессии. Оставшиеся данные старше двух часов очищаются при следующем запуске расширения.",
    ],
  },
};

export const getHomeMarketingCopy = (locale: Locale): HomeMarketingCopy => {
  const { faqTitle, heroIllustrationAlt, questions, answers } = localizedCopy[locale];

  return {
    faqTitle,
    heroIllustrationAlt,
    faqItems: [
      {
        question: questions[0],
        answer: answers[0],
      },
      {
        question: questions[1],
        answer: answers[1],
      },
      { question: questions[2], answer: answers[2] },
      {
        question: questions[3],
        answer: answers[3],
      },
      {
        question: questions[4],
        answer: answers[4],
      },
      {
        question: questions[5],
        answer: answers[5],
      },
      {
        question: questions[6],
        answer: answers[6],
      },
    ],
  };
};
