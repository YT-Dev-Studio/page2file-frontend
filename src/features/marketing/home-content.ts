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
      "Can Page 2 PDF save a webpage that requires sign-in?",
      "What is the difference between Accurate copy and Editable document?",
      "How do I capture a long webpage without missing content?",
      "Does Page 2 PDF upload or store my webpage and chat content?",
    ],
    answers: [
      "Open the original page in your browser, run Page 2 PDF on the active tab, and choose Accurate copy or Editable document. Keep that page open until the PDF preview appears, then check it before downloading.",
      "Open the conversation you need and choose AI / Chat. Dedicated adapters are implemented for ChatGPT, Claude, Gemini, Grok, Perplexity, Microsoft Copilot, and Manus; export is limited to the current conversation and the history limit shown by the installed version or plan.",
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
      "Может ли Page 2 PDF сохранить страницу после входа в аккаунт?",
      "Чем отличаются режимы «Точная копия» и «Редактируемый документ»?",
      "Как сохранить длинную веб-страницу без пропущенного контента?",
      "Загружает или хранит ли Page 2 PDF содержимое страниц и чатов?",
    ],
    answers: [
      "Откройте исходную страницу в браузере, запустите Page 2 PDF на активной вкладке и выберите «Точная копия» или «Редактируемый документ». Не закрывайте исходную страницу до появления предпросмотра и проверьте PDF перед скачиванием.",
      "Откройте нужный диалог и выберите «AI / Чат». Отдельные адаптеры реализованы для ChatGPT, Claude, Gemini, Grok, Perplexity, Microsoft Copilot и Manus; экспортируется только текущая переписка с пределом истории для установленной версии или тарифа.",
      "Да. Page 2 PDF форматирует текущую переписку WhatsApp Web либо чат или канал Telegram Web. Расширение не создает резервную копию аккаунта и не экспортирует все диалоги одновременно.",
      "Да, если страница уже доступна в активной вкладке браузера и расширению разрешено ее читать. Page 2 PDF не получает ваш пароль и не обходит ограничения доступа сайта.",
      "«Точная копия» создает страницы-изображения и отдает приоритет внешнему виду. «Редактируемый документ» сохраняет выделяемый текст и безопасные ссылки, позволяет выбрать экранный или печатный вид и убрать поддерживаемый контент.",
      "«Точная копия» подготавливает основную прокручиваемую область и в пределах заданного времени загружает доступный отложенный контент. Виртуальные списки, защищенные фреймы, недоступные медиа и постоянно меняющиеся страницы могут привести к неполному результату.",
      "Расширение создает документ без загрузки содержимого исходной страницы или переписки на серверы Page 2 File. Временные данные предпросмотра удаляются после сессии. Оставшиеся данные старше двух часов очищаются при следующем запуске расширения.",
    ],
  },
  de: {
    faqTitle: "Fragen zum Speichern von Webseiten und Chats als PDF",
    heroIllustrationAlt:
      "Ein Browser-Tab, die Schaltfläche der Erweiterung und ein fertiges PDF in drei Schritten.",
    questions: [
      "Wie speichere ich eine Webseite als PDF?",
      "Wie exportiere ich einen Chat aus ChatGPT, Claude oder Gemini als PDF?",
      "Kann ich einen Chat aus WhatsApp Web oder Telegram Web als PDF exportieren?",
      "Kann Page 2 PDF eine Webseite nach der Anmeldung speichern?",
      "Was unterscheidet Accurate copy von Editable document?",
      "Wie erfasse ich eine lange Webseite, ohne Inhalte auszulassen?",
      "Lädt oder speichert Page 2 PDF den Inhalt meiner Webseite oder meines Chats?",
    ],
    answers: [
      "Öffnen Sie die Originalseite im Browser, starten Sie Page 2 PDF im aktiven Tab und wählen Sie Accurate copy oder Editable document. Lassen Sie die Seite geöffnet, bis die PDF-Vorschau erscheint, und prüfen Sie sie vor dem Herunterladen.",
      "Öffnen Sie den gewünschten Dialog und wählen Sie AI / Chat. Eigene Adapter gibt es für ChatGPT, Claude, Gemini, Grok, Perplexity, Microsoft Copilot und Manus. Exportiert wird nur der aktuelle Dialog bis zu der in der installierten Version oder im Tarif angegebenen Verlaufsgrenze.",
      "Ja. Page 2 PDF kann den aktuellen Dialog aus WhatsApp Web sowie einen Chat oder Kanal aus Telegram Web formatieren. Es erstellt keine Sicherung des gesamten Kontos und exportiert nicht alle Unterhaltungen auf einmal.",
      "Ja, wenn die Seite bereits im aktiven Browser-Tab zugänglich ist und die Erweiterung sie lesen darf. Page 2 PDF erhält Ihr Passwort nicht und umgeht keine Zugriffskontrollen der Website.",
      "Accurate copy erzeugt bildbasierte Seiten und priorisiert das sichtbare Erscheinungsbild. Editable document erstellt auswählbaren Text und sichere Links und bietet Einstellungen für Bildschirm- oder Drucklayout sowie das Entfernen unterstützter Inhalte.",
      "Accurate copy bereitet den Haupt-Scrollbereich vor und versucht innerhalb eines begrenzten Zeitfensters, verfügbare verzögert geladene Inhalte zu laden. Virtuelle Listen, geschützte Frames, nicht verfügbare Medien oder ständig wechselnde Seiten können trotzdem unvollständig bleiben.",
      "Die Erweiterung erstellt das Dokument, ohne Seiten- oder Chatinhalte auf Server von Page 2 File hochzuladen. Temporäre Vorschaudaten werden nach der Sitzung entfernt; verbleibende Daten, die älter als zwei Stunden sind, werden beim nächsten Start der Erweiterung gelöscht.",
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
