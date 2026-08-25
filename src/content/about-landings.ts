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
        description: "Learn who operates Page 2 File, how its guides are researched and reviewed, which sources are used, and how to report a correction.",
        operatorHeading: "Who operates the service",
        operatorBody: "Page 2 File is operated by {{entityName}} from {{address}}. The service is independent of the websites, AI platforms and messaging services mentioned in its guides.",
        editorialHeading: "How guides are prepared",
        editorialBody: "Each guide starts with a specific user task. We check the described workflow against the current Page 2 File interface, state access and privacy limits before the call to action, and remove claims that cannot be verified.",
        sourcesHeading: "How sources are used",
        sourcesBody: "For product behavior outside Page 2 File, we prefer current documentation from the organization responsible for that product. Sources support factual claims; they do not replace a plain-language explanation or our own verification of Page 2 File.",
        correctionsHeading: "Corrections and contact",
        correctionsBody: "If a guide is unclear, outdated or incorrect, email {{contactEmail}} with the page URL and the passage in question. We review reproducible corrections and update the article date when the published meaning changes.",
    },
    ru: {
        title: "О Page 2 File и редакционных принципах",
        description: "Узнайте, кто управляет Page 2 File, как мы готовим и проверяем инструкции, выбираем источники и принимаем сообщения об ошибках.",
        operatorHeading: "Кто управляет сервисом",
        operatorBody: "Сервисом Page 2 File управляет {{entityName}}, адрес: {{address}}. Сервис не связан с сайтами, AI-платформами и мессенджерами, упомянутыми в инструкциях.",
        editorialHeading: "Как готовятся инструкции",
        editorialBody: "Каждая инструкция отвечает на конкретную задачу пользователя. Мы сверяем описанный порядок действий с текущим интерфейсом Page 2 File, заранее объясняем ограничения доступа и приватности и удаляем утверждения, которые нельзя проверить.",
        sourcesHeading: "Как мы используем источники",
        sourcesBody: "Для сведений о сторонних продуктах мы выбираем актуальную документацию их владельцев. Источники подтверждают факты, но не заменяют понятное объяснение и нашу собственную проверку Page 2 File.",
        correctionsHeading: "Исправления и связь",
        correctionsBody: "Если инструкция непонятна, устарела или содержит ошибку, напишите на {{contactEmail}}, укажите адрес страницы и спорный фрагмент. Мы проверяем воспроизводимые замечания и меняем дату статьи, когда обновляется её смысл.",
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
