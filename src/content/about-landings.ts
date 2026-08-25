import type { Locale } from "@/shared/i18n/locales";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import type { LandingContent } from "./landings";
type AboutCopy = {
    title: string;
    description: string;
    operatorHeading: string;
    operatorBody: string;
    editorialHeading: string;
    editorialBody: string;
    sourcesHeading: string;
    sourcesBody: string;
    correctionsHeading: string;
    correctionsBody: string;
};
const aboutCopy: Record<Locale, AboutCopy> = {
    en: {
        title: "About Page 2 File",
        description: "See who operates Page 2 File, how extension claims and guides are checked, which evidence is accepted, and how to report a correction.",
        operatorHeading: "Who operates the service",
        operatorBody: "Page 2 File is operated by {{entityName}} from {{address}}. The service is independent of the websites, AI platforms and messaging services mentioned in its guides.",
        editorialHeading: "How guides are prepared",
        editorialBody: "Each guide owns one user task. We check Page 2 PDF behavior against the extension code, tests, release evidence, and a reproducible sample; access, privacy, and fidelity limits appear before the call to action. A platform name is not treated as proof of current compatibility by itself.",
        sourcesHeading: "How sources are used",
        sourcesBody: "For Chrome and third-party platforms, we prefer current first-party documentation and direct release checks. Competitor pages may reveal useful UX or search patterns, but their claims, metrics, and supported features are never copied as Page 2 File facts.",
        correctionsHeading: "Corrections and contact",
        correctionsBody: "If a guide is unclear, outdated, or incorrect, email {{contactEmail}} with the page URL, the disputed passage, and reproduction details when available. We check the report against the current product and update published copy when the evidence changes.",
    },
    ru: {
        title: "О Page 2 File и редакционных принципах",
        description: "Узнайте, кто управляет Page 2 File, как проверяются возможности расширения и инструкции, какие доказательства принимаются и как сообщить об ошибке.",
        operatorHeading: "Кто управляет сервисом",
        operatorBody: "Сервисом Page 2 File управляет {{entityName}}, адрес: {{address}}. Сервис не связан с сайтами, AI-платформами и мессенджерами, упомянутыми в инструкциях.",
        editorialHeading: "Как готовятся инструкции",
        editorialBody: "Каждая инструкция отвечает на одну задачу. Поведение Page 2 PDF сверяется с кодом расширения, тестами, релизными проверками и воспроизводимым образцом; ограничения доступа, приватности и точности указываются до призыва к действию. Само упоминание платформы не считается доказательством актуальной совместимости.",
        sourcesHeading: "Как мы используем источники",
        sourcesBody: "Для Chrome и сторонних платформ мы выбираем актуальную документацию владельца и прямую релизную проверку. Страницы конкурентов помогают заметить UX- и поисковые паттерны, но их обещания, метрики и функции не переносятся в описание Page 2 File.",
        correctionsHeading: "Исправления и связь",
        correctionsBody: "Если инструкция непонятна, устарела или содержит ошибку, напишите на {{contactEmail}}, укажите адрес страницы, спорный фрагмент и шаги воспроизведения, если они есть. Мы сверим сообщение с текущим продуктом и обновим опубликованный текст, когда изменятся доказательства.",
    },
};
export const aboutLandingContent = (Object.keys(aboutCopy) as ReadonlyArray<Locale>).reduce<Record<Locale, LandingContent>>((result, locale) => {
    const copy = aboutCopy[locale];
    result[locale] = {
        route: "about",
        eyebrow: "Page 2 File",
        title: copy.title,
        description: copy.description,
        lead: getExtensionCopy(locale).homeLead,
        sections: [
            { heading: copy.operatorHeading, body: copy.operatorBody },
            { heading: copy.editorialHeading, body: copy.editorialBody },
            { heading: copy.sourcesHeading, body: copy.sourcesBody },
            { heading: copy.correctionsHeading, body: copy.correctionsBody },
        ],
        legal: false,
    };
    return result;
}, {} as Record<Locale, LandingContent>);
