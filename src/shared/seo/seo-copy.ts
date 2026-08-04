import type { Locale } from "@/shared/i18n/locales";

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

const seoCopy: Record<
  "en" | "ru" | "de" | "fr",
  Record<SeoCopyKey, SeoCopy>
> = {
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
  de: {
    home: {
      title: "Webseiten in PDF oder PowerPoint umwandeln",
      description:
        "Prüfen Sie Webseitenabschnitte, wählen Sie Seitenaufnahmen oder eine bearbeitbare Ausgabe und exportieren Sie PDF oder PowerPoint ohne Konto.",
    },
    pdf: {
      title: "Eine Webseite in ein geprüftes PDF umwandeln",
      description:
        "Geben Sie eine öffentliche HTTPS-URL ein, wählen Sie Seitenaufnahmen oder eine bearbeitbare PDF-Ausgabe und prüfen Sie Abschnitte sowie Warnungen vor dem Download.",
    },
    powerpoint: {
      title: "Eine Webseite in PowerPoint-Folien umwandeln",
      description:
        "Wandeln Sie sinnvolle Webseitenabschnitte in 16:9-PowerPoint-Folien als Seitenaufnahmen oder bearbeitbare Inhalte um und prüfen Sie jede Ersetzung vor dem Download.",
    },
    guide: {
      title: "So verwenden Sie die Page 2 File Chrome-Erweiterung",
      description:
        "Folgen Sie der Schritt-für-Schritt-Anleitung oder dem barrierefreien Videotranskript, um aktive Webseiten und unterstützte AI-Chats in PDF oder PowerPoint zu exportieren.",
    },
    preview: {
      title: "Privater Arbeitsbereich für die Konvertierungsvorschau",
      description:
        "Temporäre Vorschau zum Prüfen von Seiten, Folien, Vorschauaktionen und Konvertierungswarnungen vor der Erstellung einer Beispieldatei.",
    },
    download: {
      title: "Eine Page 2 File Beispieldatei herunterladen",
      description:
        "Temporäre noindex-Downloadseite für eine statische PDF- oder PowerPoint-Demodatei ohne übermittelte URL oder Inhalte aus Benutzerdokumenten.",
    },
    blog: {
      title: "Praktische Anleitungen und Hinweise zum Webseitenexport",
      description:
        "Lesen Sie praktische Anleitungen zu Webseitentreue, PDF- und PowerPoint-Ausgabe, privaten AI-Chats, Browser-Messengern und sicherer HTML-Konvertierung.",
    },
    updates: {
      title: "Page 2 File Produktupdates und Entscheidungen",
      description:
        "Nach der ersten öffentlichen Veröffentlichung erscheinen hier kurze Hinweise zu ausgelieferten Änderungen und Produktentscheidungen.",
    },
    changelog: {
      title: "Technischer Changelog des Page 2 File Prototyps",
      description:
        "Prüfen Sie versionierte Änderungen an Konvertern, Vorschauaktionen, lokalisierten Routen, zustimmungsbasierter Analyse und Sicherheitskontrollen.",
    },
    notFound: {
      title: "Page 2 File Seite nicht gefunden",
      description:
        "Die angeforderte Page 2 File Route existiert nicht. Kehren Sie zum Konverter, zur Erweiterungsanleitung, zum Blog oder zu den Produktupdates zurück.",
    },
  },
  fr: {
    home: {
      title: "Convertir des pages web en PDF ou PowerPoint",
      description:
        "Prévisualisez les sections pertinentes, choisissez des captures de page ou une sortie modifiable, puis exportez un exemple PDF ou PowerPoint vérifié sans créer de compte.",
    },
    pdf: {
      title: "Convertir une page web en PDF vérifié",
      description:
        "Saisissez une URL HTTPS publique, choisissez des captures de page ou une sortie PDF modifiable, puis vérifiez les sections et les avertissements avant le téléchargement.",
    },
    powerpoint: {
      title: "Convertir une page web en diapositives PowerPoint",
      description:
        "Transformez les sections pertinentes d’une page web en diapositives PowerPoint 16:9 sous forme de captures ou d’éléments modifiables, puis vérifiez chaque remplacement.",
    },
    guide: {
      title: "Comment utiliser l’extension Chrome Page 2 File",
      description:
        "Suivez le guide pas à pas ou la transcription vidéo accessible pour exporter les pages actives et les conversations AI prises en charge vers PDF ou PowerPoint.",
    },
    preview: {
      title: "Espace privé de prévisualisation de conversion",
      description:
        "Aperçu temporaire permettant de vérifier les pages, les diapositives, les opérations et les avertissements avant de créer un fichier d’exemple.",
    },
    download: {
      title: "Télécharger un exemple Page 2 File",
      description:
        "Page de téléchargement temporaire noindex pour un fichier de démonstration PDF ou PowerPoint statique, sans URL soumise ni contenu de document utilisateur.",
    },
    blog: {
      title: "Guides pratiques et conseils pour exporter des pages web",
      description:
        "Consultez des guides sur la fidélité des pages, les sorties PDF et PowerPoint, les conversations AI privées, les messageries web et la conversion HTML sécurisée.",
    },
    updates: {
      title: "Mises à jour et décisions produit de Page 2 File",
      description:
        "Après la première version publique, de brèves notes présenteront ici les changements livrés et les décisions produit.",
    },
    changelog: {
      title: "Journal technique du prototype Page 2 File",
      description:
        "Consultez les changements versionnés des convertisseurs, opérations d’aperçu, routes localisées, analyses fondées sur le consentement et contrôles de sécurité.",
    },
    notFound: {
      title: "Page Page 2 File demandée introuvable",
      description:
        "La route Page 2 File demandée n’existe pas. Revenez au convertisseur, au guide de l’extension, au blog pratique ou aux mises à jour du produit.",
    },
  },
};

const hasSeoCopy = (locale: Locale): locale is keyof typeof seoCopy =>
  locale in seoCopy;

export const getSeoCopy = (locale: Locale, key: SeoCopyKey): SeoCopy =>
  seoCopy[hasSeoCopy(locale) ? locale : "en"][key];
