import { getExtensionCopy } from "@/features/extension/extension-copy";
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
};

const localizedCopy: Record<Locale, HomeLocalizedCopy> = {
  en: {
    faqTitle: "Questions about saving webpages and chats as PDF",
    heroIllustrationAlt: "A browser tab, the extension button, and a finished PDF connected in three steps.",
    questions: [
      "How do I save a webpage as a PDF in Chrome?",
      "How do I export a ChatGPT, Claude, or Gemini chat to PDF?",
      "Can I export a WhatsApp Web or Telegram Web chat to PDF?",
      "Can Page 2 File save a webpage that requires sign-in?",
      "What is the difference between Accurate copy and Editable document?",
      "How do I capture a long webpage without missing content?",
      "Does Page 2 File upload or store my webpage and chat content?",
    ],
  },
  ru: {
    faqTitle: "Вопросы о сохранении веб-страниц и чатов в PDF",
    heroIllustrationAlt: "Три шага: вкладка браузера, кнопка расширения и готовый PDF.",
    questions: [
      "Как сохранить веб-страницу в PDF через Chrome?",
      "Как экспортировать чат ChatGPT, Claude или Gemini в PDF?",
      "Можно ли экспортировать чат WhatsApp Web или Telegram Web в PDF?",
      "Может ли Page 2 File сохранить страницу после входа в аккаунт?",
      "Чем отличаются режимы Accurate copy и Editable document?",
      "Как сохранить длинную веб-страницу без пропущенного контента?",
      "Загружает или хранит ли Page 2 File содержимое страниц и чатов?",
    ],
  },
};

export const getHomeMarketingCopy = (locale: Locale): HomeMarketingCopy => {
  const extension = getExtensionCopy(locale);
  const { faqTitle, heroIllustrationAlt, questions } = localizedCopy[locale];

  return {
    faqTitle,
    heroIllustrationAlt,
    faqItems: [
      {
        question: questions[0],
        answer: `${extension.processBody} ${extension.steps[0].body} ${extension.steps[1].body} ${extension.steps[4].body} ${extension.steps[5].body}`,
      },
      {
        question: questions[1],
        answer: `${extension.modes[2].body} ${extension.supportedBody}`,
      },
      { question: questions[2], answer: extension.supportedBody },
      {
        question: questions[3],
        answer: `${extension.sourcesBody} ${extension.sources[0]}`,
      },
      {
        question: questions[4],
        answer: `${extension.modes[0].body} ${extension.modes[1].body}`,
      },
      {
        question: questions[5],
        answer: `${extension.limits[1]} ${extension.limits[4]}`,
      },
      {
        question: questions[6],
        answer: `${extension.privacyBody} ${extension.privacyPoints[0]} ${extension.privacyPoints[1]}`,
      },
    ],
  };
};
