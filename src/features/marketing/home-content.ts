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
  de: {
    faqTitle: "Fragen zum Speichern von Webseiten und Chats als PDF",
    heroIllustrationAlt: "Drei Schritte: Browser-Tab, Erweiterungsschaltfläche und fertige PDF-Datei.",
    questions: [
      "Wie speichere ich eine Webseite in Chrome als PDF?",
      "Wie exportiere ich einen Chat aus ChatGPT, Claude oder Gemini als PDF?",
      "Kann ich einen Chat aus WhatsApp Web oder Telegram Web als PDF exportieren?",
      "Kann Page 2 File eine Webseite speichern, für die eine Anmeldung erforderlich ist?",
      "Was ist der Unterschied zwischen Accurate copy und Editable document?",
      "Wie erfasse ich eine lange Webseite, ohne Inhalte auszulassen?",
      "Lädt oder speichert Page 2 File Inhalte meiner Webseiten und Chats?",
    ],
  },
  fr: {
    faqTitle: "Questions sur l’enregistrement des pages web et des chats en PDF",
    heroIllustrationAlt: "Trois étapes : un onglet du navigateur, le bouton de l’extension et un PDF terminé.",
    questions: [
      "Comment enregistrer une page web en PDF dans Chrome ?",
      "Comment exporter une conversation ChatGPT, Claude ou Gemini en PDF ?",
      "Puis-je exporter une conversation WhatsApp Web ou Telegram Web en PDF ?",
      "Page 2 File peut-il enregistrer une page qui nécessite une connexion ?",
      "Quelle est la différence entre Accurate copy et Editable document ?",
      "Comment capturer une longue page web sans perdre de contenu ?",
      "Page 2 File téléverse-t-il ou conserve-t-il le contenu de mes pages et conversations ?",
    ],
  },
  es: {
    faqTitle: "Preguntas sobre cómo guardar páginas web y chats como PDF",
    heroIllustrationAlt: "Tres pasos: una pestaña del navegador, el botón de la extensión y un PDF terminado.",
    questions: [
      "¿Cómo guardo una página web como PDF en Chrome?",
      "¿Cómo exporto un chat de ChatGPT, Claude o Gemini a PDF?",
      "¿Puedo exportar un chat de WhatsApp Web o Telegram Web a PDF?",
      "¿Puede Page 2 File guardar una página que requiere iniciar sesión?",
      "¿Cuál es la diferencia entre Accurate copy y Editable document?",
      "¿Cómo capturo una página web larga sin perder contenido?",
      "¿Page 2 File sube o almacena el contenido de mis páginas y chats?",
    ],
  },
  nl: {
    faqTitle: "Vragen over webpagina’s en chats opslaan als PDF",
    heroIllustrationAlt: "Drie stappen: een browsertabblad, de extensieknop en een voltooide PDF.",
    questions: [
      "Hoe sla ik een webpagina in Chrome op als PDF?",
      "Hoe exporteer ik een ChatGPT-, Claude- of Gemini-chat naar PDF?",
      "Kan ik een WhatsApp Web- of Telegram Web-chat naar PDF exporteren?",
      "Kan Page 2 File een webpagina opslaan waarvoor ik moet inloggen?",
      "Wat is het verschil tussen Accurate copy en Editable document?",
      "Hoe leg ik een lange webpagina vast zonder inhoud te missen?",
      "Uploadt of bewaart Page 2 File de inhoud van mijn webpagina’s en chats?",
    ],
  },
  pt: {
    faqTitle: "Perguntas sobre guardar páginas web e conversas em PDF",
    heroIllustrationAlt: "Três passos: um separador do navegador, o botão da extensão e um PDF concluído.",
    questions: [
      "Como guardo uma página web em PDF no Chrome?",
      "Como exporto uma conversa do ChatGPT, Claude ou Gemini para PDF?",
      "Posso exportar uma conversa do WhatsApp Web ou Telegram Web para PDF?",
      "O Page 2 File consegue guardar uma página que exige início de sessão?",
      "Qual é a diferença entre Accurate copy e Editable document?",
      "Como capturo uma página web longa sem perder conteúdo?",
      "O Page 2 File envia ou guarda o conteúdo das minhas páginas e conversas?",
    ],
  },
  it: {
    faqTitle: "Domande sul salvataggio di pagine web e chat in PDF",
    heroIllustrationAlt: "Tre passaggi: una scheda del browser, il pulsante dell’estensione e un PDF completato.",
    questions: [
      "Come salvo una pagina web in PDF con Chrome?",
      "Come esporto una chat di ChatGPT, Claude o Gemini in PDF?",
      "Posso esportare una chat di WhatsApp Web o Telegram Web in PDF?",
      "Page 2 File può salvare una pagina che richiede l’accesso?",
      "Qual è la differenza tra Accurate copy e Editable document?",
      "Come acquisisco una pagina web lunga senza perdere contenuti?",
      "Page 2 File carica o conserva il contenuto delle mie pagine e chat?",
    ],
  },
  pl: {
    faqTitle: "Pytania o zapisywanie stron internetowych i czatów jako PDF",
    heroIllustrationAlt: "Trzy kroki: karta przeglądarki, przycisk rozszerzenia i gotowy plik PDF.",
    questions: [
      "Jak zapisać stronę internetową jako PDF w Chrome?",
      "Jak wyeksportować czat z ChatGPT, Claude lub Gemini do PDF?",
      "Czy mogę wyeksportować czat z WhatsApp Web lub Telegram Web do PDF?",
      "Czy Page 2 File zapisuje strony wymagające zalogowania?",
      "Czym różnią się tryby Accurate copy i Editable document?",
      "Jak przechwycić długą stronę internetową bez pomijania treści?",
      "Czy Page 2 File przesyła lub przechowuje zawartość stron i czatów?",
    ],
  },
  sv: {
    faqTitle: "Frågor om att spara webbsidor och chattar som PDF",
    heroIllustrationAlt: "Tre steg: en webbläsarflik, tilläggsknappen och en färdig PDF.",
    questions: [
      "Hur sparar jag en webbsida som PDF i Chrome?",
      "Hur exporterar jag en chatt från ChatGPT, Claude eller Gemini till PDF?",
      "Kan jag exportera en chatt från WhatsApp Web eller Telegram Web till PDF?",
      "Kan Page 2 File spara en webbsida som kräver inloggning?",
      "Vad är skillnaden mellan Accurate copy och Editable document?",
      "Hur fångar jag en lång webbsida utan att missa innehåll?",
      "Laddar Page 2 File upp eller sparar innehållet i mina webbsidor och chattar?",
    ],
  },
  no: {
    faqTitle: "Spørsmål om å lagre nettsider og chatter som PDF",
    heroIllustrationAlt: "Tre trinn: en nettleserfane, utvidelsesknappen og en ferdig PDF.",
    questions: [
      "Hvordan lagrer jeg en nettside som PDF i Chrome?",
      "Hvordan eksporterer jeg en chat fra ChatGPT, Claude eller Gemini til PDF?",
      "Kan jeg eksportere en chat fra WhatsApp Web eller Telegram Web til PDF?",
      "Kan Page 2 File lagre en nettside som krever innlogging?",
      "Hva er forskjellen mellom Accurate copy og Editable document?",
      "Hvordan fanger jeg en lang nettside uten å miste innhold?",
      "Laster Page 2 File opp eller lagrer innholdet i nettsidene og chattene mine?",
    ],
  },
  da: {
    faqTitle: "Spørgsmål om at gemme websider og chats som PDF",
    heroIllustrationAlt: "Tre trin: en browserfane, udvidelsesknappen og en færdig PDF.",
    questions: [
      "Hvordan gemmer jeg en webside som PDF i Chrome?",
      "Hvordan eksporterer jeg en chat fra ChatGPT, Claude eller Gemini til PDF?",
      "Kan jeg eksportere en chat fra WhatsApp Web eller Telegram Web til PDF?",
      "Kan Page 2 File gemme en webside, der kræver login?",
      "Hvad er forskellen på Accurate copy og Editable document?",
      "Hvordan gemmer jeg en lang webside uden at miste indhold?",
      "Uploader eller gemmer Page 2 File indholdet af mine websider og chats?",
    ],
  },
  fi: {
    faqTitle: "Kysymyksiä verkkosivujen ja keskustelujen tallentamisesta PDF-muotoon",
    heroIllustrationAlt: "Kolme vaihetta: selainvälilehti, laajennuspainike ja valmis PDF.",
    questions: [
      "Miten tallennan verkkosivun PDF-muotoon Chromessa?",
      "Miten vien ChatGPT-, Claude- tai Gemini-keskustelun PDF-muotoon?",
      "Voinko viedä WhatsApp Web- tai Telegram Web -keskustelun PDF-muotoon?",
      "Voiko Page 2 File tallentaa kirjautumista vaativan verkkosivun?",
      "Mitä eroa on Accurate copy- ja Editable document -tiloilla?",
      "Miten tallennan pitkän verkkosivun menettämättä sisältöä?",
      "Lähettääkö tai tallentaako Page 2 File verkkosivujeni ja keskustelujeni sisältöä?",
    ],
  },
  cs: {
    faqTitle: "Otázky k ukládání webových stránek a chatů do PDF",
    heroIllustrationAlt: "Tři kroky: karta prohlížeče, tlačítko rozšíření a hotové PDF.",
    questions: [
      "Jak uložím webovou stránku do PDF v Chromu?",
      "Jak exportuji chat z ChatGPT, Claude nebo Gemini do PDF?",
      "Mohu exportovat chat z WhatsApp Web nebo Telegram Web do PDF?",
      "Může Page 2 File uložit stránku, která vyžaduje přihlášení?",
      "Jaký je rozdíl mezi Accurate copy a Editable document?",
      "Jak zachytím dlouhou webovou stránku bez vynechání obsahu?",
      "Nahrává nebo ukládá Page 2 File obsah mých stránek a chatů?",
    ],
  },
  ro: {
    faqTitle: "Întrebări despre salvarea paginilor web și conversațiilor în PDF",
    heroIllustrationAlt: "Trei pași: o filă de browser, butonul extensiei și un PDF finalizat.",
    questions: [
      "Cum salvez o pagină web în format PDF în Chrome?",
      "Cum export o conversație ChatGPT, Claude sau Gemini în PDF?",
      "Pot exporta o conversație WhatsApp Web sau Telegram Web în PDF?",
      "Poate Page 2 File salva o pagină care necesită autentificare?",
      "Care este diferența dintre Accurate copy și Editable document?",
      "Cum capturez o pagină web lungă fără să pierd conținut?",
      "Page 2 File încarcă sau stochează conținutul paginilor și conversațiilor mele?",
    ],
  },
  hu: {
    faqTitle: "Kérdések weboldalak és beszélgetések PDF-be mentéséről",
    heroIllustrationAlt: "Három lépés: egy böngészőlap, a bővítmény gombja és egy kész PDF.",
    questions: [
      "Hogyan menthetek egy weboldalt PDF-ként a Chrome-ban?",
      "Hogyan exportálhatok ChatGPT-, Claude- vagy Gemini-beszélgetést PDF-be?",
      "Exportálhatok WhatsApp Web- vagy Telegram Web-beszélgetést PDF-be?",
      "El tud menteni a Page 2 File bejelentkezést igénylő weboldalt?",
      "Mi a különbség az Accurate copy és az Editable document között?",
      "Hogyan menthetek el egy hosszú weboldalt tartalomvesztés nélkül?",
      "Feltölti vagy tárolja a Page 2 File a weboldalaim és beszélgetéseim tartalmát?",
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
