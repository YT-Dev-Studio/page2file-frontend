import type { Locale } from "@/shared/i18n/locales";

export type ExtensionModeCopy = {
  body: string;
  title: "Accurate copy" | "Editable document" | "AI / Chat";
};

export type ExtensionStepCopy = {
  body: string;
  title: string;
};

export type ExtensionCopy = {
  homeTitle: string;
  homeLead: string;
  modesTitle: string;
  modesLead: string;
  modes: readonly [ExtensionModeCopy, ExtensionModeCopy, ExtensionModeCopy];
  sourcesTitle: string;
  sourcesBody: string;
  sources: readonly [string, string, string, string];
  processTitle: string;
  processBody: string;
  steps: readonly [
    ExtensionStepCopy,
    ExtensionStepCopy,
    ExtensionStepCopy,
    ExtensionStepCopy,
    ExtensionStepCopy,
    ExtensionStepCopy,
  ];
  privacyTitle: string;
  privacyBody: string;
  privacyPoints: readonly [string, string, string];
  guideTitle: string;
  guideLead: string;
  supportedTitle: string;
  supportedBody: string;
  limitsTitle: string;
  limits: readonly [string, string, string, string, string];
  breadcrumbLabel: string;
  homeLabel: string;
  guideLabel: string;
  browseChromeLabel: string;
};

const englishCopy: ExtensionCopy = {
  homeTitle: "Save webpages and browser chats as PDF",
  homeLead:
    "Page 2 File is a Chrome extension that turns the current tab into a PDF. Choose an accurate visual copy, a document with selectable text and links, or a clean export of a supported browser chat.",
  modesTitle: "Choose how the PDF should work",
  modesLead:
    "The three output styles serve different jobs. Pick the one that matters for this page before opening the preview.",
  modes: [
    {
      title: "Accurate copy",
      body: "Captures the rendered page as image-based PDF pages. Use it when preserving the page appearance matters more than selecting text or clicking links.",
    },
    {
      title: "Editable document",
      body: "Keeps supported text selectable and links clickable. You can also remove images, links, or page styling before creating the PDF.",
    },
    {
      title: "AI / Chat",
      body: "Builds a readable PDF from a supported conversation. Include all messages or replies only, and remove images or links when you do not need them.",
    },
  ],
  sourcesTitle: "Pages and chats you can save",
  sourcesBody:
    "The extension works with the page already open in the current Chrome tab. It does not ask for a separate URL and does not bypass a website's access rules.",
  sources: [
    "Public webpages and pages you are already signed in to view.",
    "Local HTML files opened in Chrome, when file URL access is allowed.",
    "Google Docs, Sheets, and Slides shown in the browser.",
    "Supported AI conversations and web messengers, including ChatGPT, Claude, Gemini, WhatsApp Web, and Telegram Web.",
  ],
  processTitle: "From the current tab to a PDF",
  processBody:
    "There is no upload form on this website. Open the source in Chrome and use the extension on that tab.",
  steps: [
    { title: "Open the source", body: "Load the webpage, local HTML file, or conversation you want to keep." },
    { title: "Open Page 2 File", body: "Click the extension icon while the source tab is active." },
    { title: "Choose an output style", body: "Select Accurate copy, Editable document, or AI / Chat." },
    { title: "Adjust the options", body: "Choose orientation or remove content that should not appear in the PDF." },
    { title: "Preview the PDF", body: "Let the extension prepare the file and open it in Chrome's PDF viewer." },
    { title: "Check and save", body: "Review the pages, then use the viewer's download or print controls." },
  ],
  privacyTitle: "Processed in your browser",
  privacyBody:
    "The extension creates the PDF locally. Conversion content is not uploaded to Page 2 File servers, and no Page 2 File account is required.",
  privacyPoints: [
    "The extension reads source content only from the tab where you launch it.",
    "The temporary PDF is deleted after the preview loads. If you never open it, data older than two hours is cleared the next time the extension runs.",
    "Website analytics, if enabled with consent, are separate from extension PDF processing.",
  ],
  guideTitle: "How to use the Page 2 File Chrome extension",
  guideLead:
    "Follow these steps to save a webpage, local HTML file, or supported browser conversation as PDF from the current tab.",
  supportedTitle: "Supported browser chats",
  supportedBody:
    "Dedicated adapters cover ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web, and Telegram Web. Other AI pages work only when Page 2 File can recognise their message structure.",
  limitsTitle: "Before you start",
  limits: [
    "Chrome blocks extensions on browser settings, the Chrome Web Store, and other protected pages.",
    "Expand hidden sections and load the messages you need; content that is not available to the tab cannot be included.",
    "AI / Chat export uses portrait pages and can include at most the latest 2,000 messages.",
    "Local HTML may require enabling file URL access for Page 2 File in Chrome's extension settings.",
    "Very tall pages, unavailable media, or a page that changes during export can prevent a complete result.",
  ],
  breadcrumbLabel: "Breadcrumbs",
  homeLabel: "Home",
  guideLabel: "Chrome extension guide",
  browseChromeLabel: "Browse Chrome extensions",
};

const russianCopy: ExtensionCopy = {
  homeTitle: "Сохраняйте веб-страницы и чаты из браузера в PDF",
  homeLead:
    "Page 2 File — расширение Chrome, которое превращает текущую вкладку в PDF. Можно сохранить точный внешний вид страницы, получить документ с выделяемым текстом и ссылками или аккуратно экспортировать поддерживаемый чат.",
  modesTitle: "Выберите подходящий вид PDF",
  modesLead:
    "Три режима решают разные задачи. Выберите нужный вариант до открытия предпросмотра.",
  modes: [
    {
      title: "Accurate copy",
      body: "Сохраняет отображённую страницу как набор изображений в PDF. Этот режим подходит, когда внешний вид важнее выделения текста и активных ссылок.",
    },
    {
      title: "Editable document",
      body: "Оставляет поддерживаемый текст выделяемым, а ссылки — активными. Перед созданием PDF можно убрать изображения, ссылки или оформление страницы.",
    },
    {
      title: "AI / Chat",
      body: "Собирает поддерживаемый диалог в удобный для чтения PDF. Можно включить все сообщения или только ответы, а также убрать изображения и ссылки.",
    },
  ],
  sourcesTitle: "Какие страницы и чаты можно сохранить",
  sourcesBody:
    "Расширение работает со страницей, уже открытой в текущей вкладке Chrome. Оно не просит отдельно вставлять URL и не обходит правила доступа сайта.",
  sources: [
    "Публичные страницы и страницы, которые уже открыты после входа в аккаунт.",
    "Локальные HTML-файлы, открытые в Chrome, если разрешён доступ к файловым URL.",
    "Google Docs, Sheets и Slides, открытые в браузере.",
    "Поддерживаемые AI-диалоги и веб-мессенджеры, включая ChatGPT, Claude, Gemini, WhatsApp Web и Telegram Web.",
  ],
  processTitle: "От текущей вкладки до PDF",
  processBody:
    "На этом сайте нет формы загрузки. Откройте нужный материал в Chrome и запустите расширение на этой вкладке.",
  steps: [
    { title: "Откройте материал", body: "Загрузите веб-страницу, локальный HTML-файл или нужный диалог." },
    { title: "Откройте Page 2 File", body: "Нажмите значок расширения, пока нужная вкладка активна." },
    { title: "Выберите режим", body: "Укажите Accurate copy, Editable document или AI / Chat." },
    { title: "Настройте результат", body: "Выберите ориентацию или уберите содержимое, которое не должно попасть в PDF." },
    { title: "Откройте предпросмотр", body: "Дождитесь подготовки файла и открытия PDF-просмотрщика Chrome." },
    { title: "Проверьте и сохраните", body: "Просмотрите страницы и воспользуйтесь кнопкой скачивания или печати." },
  ],
  privacyTitle: "Обработка выполняется в браузере",
  privacyBody:
    "Расширение создаёт PDF локально. Содержимое конвертации не загружается на серверы Page 2 File, а учётная запись Page 2 File не требуется.",
  privacyPoints: [
    "Расширение читает исходное содержимое только из вкладки, где вы его запускаете.",
    "Временный PDF удаляется после загрузки предпросмотра. Если его не открывать, данные старше двух часов очищаются при следующем запуске расширения.",
    "Аналитика сайта, если она включена с согласия, не относится к обработке PDF в расширении.",
  ],
  guideTitle: "Как пользоваться расширением Page 2 File для Chrome",
  guideLead:
    "Следуйте этим шагам, чтобы сохранить веб-страницу, локальный HTML-файл или поддерживаемый диалог из текущей вкладки в PDF.",
  supportedTitle: "Поддерживаемые чаты в браузере",
  supportedBody:
    "Отдельные адаптеры предусмотрены для ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web и Telegram Web. Другие AI-сайты работают только тогда, когда Page 2 File распознаёт структуру сообщений.",
  limitsTitle: "Что проверить перед началом",
  limits: [
    "Chrome запрещает расширениям работать на страницах настроек браузера, в Chrome Web Store и на других защищённых страницах.",
    "Раскройте скрытые блоки и загрузите нужные сообщения: недоступное вкладке содержимое нельзя включить в файл.",
    "Режим AI / Chat использует книжную ориентацию и сохраняет не более 2 000 последних сообщений.",
    "Для локального HTML может потребоваться разрешить Page 2 File доступ к файловым URL в настройках расширений Chrome.",
    "Очень длинная страница, недоступные изображения или изменение страницы во время экспорта могут помешать получить полный результат.",
  ],
  breadcrumbLabel: "Навигационная цепочка",
  homeLabel: "Главная",
  guideLabel: "Инструкция по расширению Chrome",
  browseChromeLabel: "Открыть каталог расширений Chrome",
};

const germanCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Webseiten und Browser-Chats als PDF speichern",
  homeLead: "Page 2 File ist eine Chrome-Erweiterung, die den aktuellen Tab in ein PDF umwandelt. Wählen Sie eine originalgetreue Ansicht, ein Dokument mit markierbarem Text und Links oder den übersichtlichen Export eines unterstützten Browser-Chats.",
  modesTitle: "Wählen Sie die passende PDF-Ausgabe",
  modesLead: "Die drei Ausgabestile erfüllen unterschiedliche Aufgaben. Wählen Sie den passenden Stil, bevor Sie die Vorschau öffnen.",
  modes: [
    { title: "Accurate copy", body: "Erfasst die dargestellte Seite als bildbasierte PDF-Seiten. Verwenden Sie diesen Modus, wenn das Erscheinungsbild wichtiger ist als markierbarer Text oder anklickbare Links." },
    { title: "Editable document", body: "Behält unterstützten Text markierbar und Links anklickbar. Vor der PDF-Erstellung können Sie Bilder, Links oder die Seitengestaltung entfernen." },
    { title: "AI / Chat", body: "Erstellt aus einer unterstützten Unterhaltung ein gut lesbares PDF. Sie können alle Nachrichten oder nur Antworten übernehmen und Bilder oder Links weglassen." },
  ],
  sourcesTitle: "Seiten und Chats, die Sie speichern können",
  sourcesBody: "Die Erweiterung arbeitet mit der Seite, die bereits im aktuellen Chrome-Tab geöffnet ist. Sie verlangt keine zusätzliche URL und umgeht keine Zugriffsregeln einer Website.",
  sources: [
    "Öffentliche Webseiten und Seiten, für die Sie bereits angemeldet sind.",
    "Lokale HTML-Dateien in Chrome, wenn der Zugriff auf Datei-URLs erlaubt ist.",
    "Google Docs, Sheets und Slides, die im Browser geöffnet sind.",
    "Unterstützte AI-Unterhaltungen und Web-Messenger, darunter ChatGPT, Claude, Gemini, WhatsApp Web und Telegram Web.",
  ],
  processTitle: "Vom aktuellen Tab zum PDF",
  processBody: "Auf dieser Website gibt es kein Upload-Formular. Öffnen Sie die Quelle in Chrome und verwenden Sie die Erweiterung in diesem Tab.",
  steps: [
    { title: "Quelle öffnen", body: "Laden Sie die Webseite, lokale HTML-Datei oder Unterhaltung, die Sie behalten möchten." },
    { title: "Page 2 File öffnen", body: "Klicken Sie auf das Erweiterungssymbol, während der Quell-Tab aktiv ist." },
    { title: "Ausgabestil wählen", body: "Wählen Sie Accurate copy, Editable document oder AI / Chat." },
    { title: "Optionen anpassen", body: "Wählen Sie die Ausrichtung oder entfernen Sie Inhalte, die nicht im PDF erscheinen sollen." },
    { title: "PDF-Vorschau öffnen", body: "Warten Sie, bis die Erweiterung die Datei vorbereitet und im PDF-Betrachter von Chrome öffnet." },
    { title: "Prüfen und speichern", body: "Kontrollieren Sie die Seiten und verwenden Sie dann die Download- oder Druckfunktion des Betrachters." },
  ],
  privacyTitle: "Verarbeitung in Ihrem Browser",
  privacyBody: "Die Erweiterung erstellt das PDF lokal. Konvertierungsinhalte werden nicht auf Page-2-File-Server hochgeladen, und ein Page-2-File-Konto ist nicht erforderlich.",
  privacyPoints: [
    "Die Erweiterung liest Quellinhalte nur aus dem Tab, in dem Sie sie starten.",
    "Das temporäre PDF wird gelöscht, sobald die Vorschau geladen ist. Wird sie nie geöffnet, werden Daten, die älter als zwei Stunden sind, beim nächsten Start der Erweiterung entfernt.",
    "Website-Analysen, sofern mit Einwilligung aktiviert, sind von der PDF-Verarbeitung der Erweiterung getrennt.",
  ],
  guideTitle: "So verwenden Sie die Page 2 File Chrome-Erweiterung",
  guideLead: "Mit diesen Schritten speichern Sie eine Webseite, lokale HTML-Datei oder unterstützte Browser-Unterhaltung aus dem aktuellen Tab als PDF.",
  supportedTitle: "Unterstützte Browser-Chats",
  supportedBody: "Eigene Adapter gibt es für ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web und Telegram Web. Andere AI-Seiten funktionieren nur, wenn Page 2 File ihre Nachrichtenstruktur erkennt.",
  limitsTitle: "Vor dem Start",
  limits: [
    "Chrome blockiert Erweiterungen auf Browser-Einstellungen, im Chrome Web Store und auf anderen geschützten Seiten.",
    "Öffnen Sie ausgeblendete Bereiche und laden Sie benötigte Nachrichten; Inhalte, die dem Tab nicht zur Verfügung stehen, können nicht übernommen werden.",
    "Der Modus AI / Chat verwendet Hochformat und kann höchstens die letzten 2.000 Nachrichten enthalten.",
    "Für lokales HTML müssen Sie Page 2 File eventuell den Zugriff auf Datei-URLs in den Chrome-Erweiterungseinstellungen erlauben.",
    "Sehr lange Seiten, nicht verfügbare Medien oder eine Seitenänderung während des Exports können ein vollständiges Ergebnis verhindern.",
  ],
  breadcrumbLabel: "Brotkrümelnavigation",
  homeLabel: "Startseite",
  guideLabel: "Anleitung zur Chrome-Erweiterung",
  browseChromeLabel: "Chrome-Erweiterungen durchsuchen",
};

const frenchCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Enregistrez des pages web et des chats en PDF",
  homeLead: "Page 2 File est une extension Chrome qui transforme l'onglet actuel en PDF. Choisissez une copie visuelle fidèle, un document avec texte sélectionnable et liens, ou l'export lisible d'une conversation compatible.",
  modesTitle: "Choisissez le type de PDF adapté",
  modesLead: "Les trois modes répondent à des besoins différents. Choisissez celui qui convient à la page avant d'ouvrir l'aperçu.",
  modes: [
    { title: "Accurate copy", body: "Capture la page affichée sous forme de pages PDF composées d'images. Ce mode convient lorsque l'apparence compte davantage que la sélection du texte ou les liens cliquables." },
    { title: "Editable document", body: "Conserve le texte pris en charge sélectionnable et les liens cliquables. Vous pouvez aussi retirer les images, les liens ou la mise en forme avant de créer le PDF." },
    { title: "AI / Chat", body: "Crée un PDF lisible à partir d'une conversation compatible. Incluez tous les messages ou seulement les réponses, avec ou sans images et liens." },
  ],
  sourcesTitle: "Pages et conversations que vous pouvez enregistrer",
  sourcesBody: "L'extension utilise la page déjà ouverte dans l'onglet Chrome actuel. Elle ne demande pas une seconde URL et ne contourne pas les règles d'accès du site.",
  sources: [
    "Pages web publiques et pages auxquelles vous êtes déjà connecté.",
    "Fichiers HTML locaux ouverts dans Chrome, si l'accès aux URL de fichiers est autorisé.",
    "Google Docs, Sheets et Slides affichés dans le navigateur.",
    "Conversations AI et messageries web compatibles, notamment ChatGPT, Claude, Gemini, WhatsApp Web et Telegram Web.",
  ],
  processTitle: "De l'onglet actuel au PDF",
  processBody: "Ce site ne contient pas de formulaire d'import. Ouvrez la source dans Chrome et utilisez l'extension dans cet onglet.",
  steps: [
    { title: "Ouvrez la source", body: "Chargez la page web, le fichier HTML local ou la conversation à conserver." },
    { title: "Ouvrez Page 2 File", body: "Cliquez sur l'icône de l'extension pendant que l'onglet source est actif." },
    { title: "Choisissez un mode", body: "Sélectionnez Accurate copy, Editable document ou AI / Chat." },
    { title: "Réglez les options", body: "Choisissez l'orientation ou retirez les éléments qui ne doivent pas figurer dans le PDF." },
    { title: "Prévisualisez le PDF", body: "Attendez que l'extension prépare le fichier et l'ouvre dans le lecteur PDF de Chrome." },
    { title: "Vérifiez et enregistrez", body: "Contrôlez les pages, puis utilisez les commandes de téléchargement ou d'impression du lecteur." },
  ],
  privacyTitle: "Traitement dans votre navigateur",
  privacyBody: "L'extension crée le PDF localement. Le contenu converti n'est pas envoyé aux serveurs de Page 2 File et aucun compte Page 2 File n'est requis.",
  privacyPoints: [
    "L'extension lit le contenu source uniquement dans l'onglet où vous la lancez.",
    "Le PDF temporaire est supprimé après le chargement de l'aperçu. Si vous ne l'ouvrez jamais, les données de plus de deux heures sont effacées au prochain lancement de l'extension.",
    "Les statistiques du site, si elles sont activées avec votre accord, sont distinctes du traitement PDF de l'extension.",
  ],
  guideTitle: "Comment utiliser l'extension Chrome Page 2 File",
  guideLead: "Suivez ces étapes pour enregistrer en PDF une page web, un fichier HTML local ou une conversation compatible depuis l'onglet actuel.",
  supportedTitle: "Chats compatibles dans le navigateur",
  supportedBody: "Des adaptateurs dédiés couvrent ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web et Telegram Web. Les autres sites AI ne fonctionnent que si Page 2 File reconnaît la structure de leurs messages.",
  limitsTitle: "Avant de commencer",
  limits: [
    "Chrome bloque les extensions dans les réglages du navigateur, le Chrome Web Store et les autres pages protégées.",
    "Déployez les sections masquées et chargez les messages nécessaires ; le contenu inaccessible à l'onglet ne peut pas être inclus.",
    "Le mode AI / Chat utilise le format portrait et peut inclure au maximum les 2 000 derniers messages.",
    "Pour un fichier HTML local, vous devrez peut-être autoriser Page 2 File à accéder aux URL de fichiers dans les réglages des extensions Chrome.",
    "Une page très longue, des médias indisponibles ou une page modifiée pendant l'export peuvent empêcher un résultat complet.",
  ],
  breadcrumbLabel: "Fil d'Ariane",
  homeLabel: "Accueil",
  guideLabel: "Guide de l'extension Chrome",
  browseChromeLabel: "Parcourir les extensions Chrome",
};

const spanishCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Guarda páginas web y chats del navegador en PDF",
  homeLead: "Page 2 File es una extensión de Chrome que convierte la pestaña actual en PDF. Elige una copia visual fiel, un documento con texto seleccionable y enlaces, o una exportación clara de un chat compatible.",
  modesTitle: "Elige cómo debe funcionar el PDF",
  modesLead: "Los tres modos sirven para tareas distintas. Elige el adecuado para la página antes de abrir la vista previa.",
  modes: [
    { title: "Accurate copy", body: "Captura la página mostrada como páginas PDF basadas en imágenes. Úsalo cuando conservar el aspecto sea más importante que seleccionar texto o abrir enlaces." },
    { title: "Editable document", body: "Mantiene seleccionable el texto compatible y permite abrir los enlaces. También puedes quitar imágenes, enlaces o el estilo de la página antes de crear el PDF." },
    { title: "AI / Chat", body: "Crea un PDF legible a partir de una conversación compatible. Incluye todos los mensajes o solo las respuestas y elimina imágenes o enlaces si no los necesitas." },
  ],
  sourcesTitle: "Páginas y chats que puedes guardar",
  sourcesBody: "La extensión trabaja con la página ya abierta en la pestaña actual de Chrome. No pide otra URL ni evita las normas de acceso del sitio.",
  sources: [
    "Páginas web públicas y páginas que ya puedes ver después de iniciar sesión.",
    "Archivos HTML locales abiertos en Chrome, si está permitido el acceso a URL de archivos.",
    "Google Docs, Sheets y Slides abiertos en el navegador.",
    "Conversaciones AI y mensajería web compatibles, como ChatGPT, Claude, Gemini, WhatsApp Web y Telegram Web.",
  ],
  processTitle: "De la pestaña actual al PDF",
  processBody: "Este sitio no tiene un formulario de carga. Abre el contenido en Chrome y usa la extensión en esa pestaña.",
  steps: [
    { title: "Abre el contenido", body: "Carga la página web, el archivo HTML local o la conversación que quieras conservar." },
    { title: "Abre Page 2 File", body: "Pulsa el icono de la extensión mientras la pestaña de origen esté activa." },
    { title: "Elige un modo", body: "Selecciona Accurate copy, Editable document o AI / Chat." },
    { title: "Ajusta las opciones", body: "Elige la orientación o quita el contenido que no deba aparecer en el PDF." },
    { title: "Previsualiza el PDF", body: "Espera a que la extensión prepare el archivo y lo abra en el visor PDF de Chrome." },
    { title: "Revisa y guarda", body: "Comprueba las páginas y usa los controles de descarga o impresión del visor." },
  ],
  privacyTitle: "Procesado en tu navegador",
  privacyBody: "La extensión crea el PDF localmente. El contenido de la conversión no se envía a los servidores de Page 2 File y no necesitas una cuenta de Page 2 File.",
  privacyPoints: [
    "La extensión solo lee el contenido de origen de la pestaña donde la inicias.",
    "El PDF temporal se elimina después de cargar la vista previa. Si nunca la abres, los datos con más de dos horas se borran la próxima vez que se ejecuta la extensión.",
    "La analítica del sitio, si se activa con consentimiento, es independiente del procesamiento de PDF de la extensión.",
  ],
  guideTitle: "Cómo usar la extensión Page 2 File para Chrome",
  guideLead: "Sigue estos pasos para guardar como PDF una página web, un archivo HTML local o una conversación compatible desde la pestaña actual.",
  supportedTitle: "Chats compatibles en el navegador",
  supportedBody: "Hay adaptadores específicos para ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web y Telegram Web. Otras páginas AI solo funcionan si Page 2 File reconoce la estructura de sus mensajes.",
  limitsTitle: "Antes de empezar",
  limits: [
    "Chrome bloquea las extensiones en la configuración del navegador, Chrome Web Store y otras páginas protegidas.",
    "Abre las secciones ocultas y carga los mensajes necesarios; el contenido que la pestaña no tenga disponible no se puede incluir.",
    "El modo AI / Chat usa páginas verticales y puede incluir como máximo los 2.000 mensajes más recientes.",
    "Para HTML local quizá debas permitir que Page 2 File acceda a URL de archivos en la configuración de extensiones de Chrome.",
    "Una página muy alta, contenido multimedia no disponible o un cambio durante la exportación pueden impedir un resultado completo.",
  ],
  breadcrumbLabel: "Ruta de navegación",
  homeLabel: "Inicio",
  guideLabel: "Guía de la extensión Chrome",
  browseChromeLabel: "Explorar extensiones de Chrome",
};

const dutchCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Webpagina's en browserchats opslaan als PDF",
  homeLead: "Page 2 File is een Chrome-extensie die het huidige tabblad omzet in PDF. Kies een nauwkeurige visuele kopie, een document met selecteerbare tekst en links, of een leesbare export van een ondersteunde browserchat.",
  modesTitle: "Kies hoe de PDF moet werken",
  modesLead: "De drie uitvoerstijlen zijn bedoeld voor verschillende taken. Kies de juiste stijl voordat je het voorbeeld opent.",
  modes: [
    { title: "Accurate copy", body: "Legt de weergegeven pagina vast als PDF-pagina's op basis van afbeeldingen. Gebruik dit wanneer de vormgeving belangrijker is dan tekstselectie of aanklikbare links." },
    { title: "Editable document", body: "Houdt ondersteunde tekst selecteerbaar en links aanklikbaar. Je kunt afbeeldingen, links of paginaopmaak verwijderen voordat de PDF wordt gemaakt." },
    { title: "AI / Chat", body: "Maakt van een ondersteund gesprek een goed leesbare PDF. Neem alle berichten of alleen antwoorden op en verwijder desgewenst afbeeldingen of links." },
  ],
  sourcesTitle: "Pagina's en chats die je kunt opslaan",
  sourcesBody: "De extensie gebruikt de pagina die al in het huidige Chrome-tabblad geopend is. Er is geen aparte URL nodig en toegangsregels van websites worden niet omzeild.",
  sources: [
    "Openbare webpagina's en pagina's die je na aanmelden al kunt bekijken.",
    "Lokale HTML-bestanden die in Chrome zijn geopend, als toegang tot bestands-URL's is toegestaan.",
    "Google Docs, Sheets en Slides die in de browser zijn geopend.",
    "Ondersteunde AI-gesprekken en webmessengers, waaronder ChatGPT, Claude, Gemini, WhatsApp Web en Telegram Web.",
  ],
  processTitle: "Van het huidige tabblad naar PDF",
  processBody: "Deze website heeft geen uploadformulier. Open de bron in Chrome en gebruik de extensie op dat tabblad.",
  steps: [
    { title: "Open de bron", body: "Laad de webpagina, het lokale HTML-bestand of het gesprek dat je wilt bewaren." },
    { title: "Open Page 2 File", body: "Klik op het extensiepictogram terwijl het brontabblad actief is." },
    { title: "Kies een uitvoerstijl", body: "Selecteer Accurate copy, Editable document of AI / Chat." },
    { title: "Pas de opties aan", body: "Kies de afdrukstand of verwijder inhoud die niet in de PDF moet staan." },
    { title: "Bekijk de PDF", body: "Wacht tot de extensie het bestand voorbereidt en in de PDF-viewer van Chrome opent." },
    { title: "Controleer en bewaar", body: "Controleer de pagina's en gebruik daarna de download- of afdrukknop van de viewer." },
  ],
  privacyTitle: "Verwerkt in je browser",
  privacyBody: "De extensie maakt de PDF lokaal. Conversie-inhoud wordt niet naar servers van Page 2 File geüpload en een Page 2 File-account is niet nodig.",
  privacyPoints: [
    "De extensie leest broninhoud alleen uit het tabblad waarin je haar start.",
    "De tijdelijke PDF wordt verwijderd nadat het voorbeeld is geladen. Open je het nooit, dan worden gegevens ouder dan twee uur gewist wanneer de extensie de volgende keer wordt uitgevoerd.",
    "Websiteanalyse, indien met toestemming ingeschakeld, staat los van de PDF-verwerking door de extensie.",
  ],
  guideTitle: "De Page 2 File Chrome-extensie gebruiken",
  guideLead: "Volg deze stappen om een webpagina, lokaal HTML-bestand of ondersteund browsergesprek vanuit het huidige tabblad als PDF op te slaan.",
  supportedTitle: "Ondersteunde browserchats",
  supportedBody: "Er zijn speciale adapters voor ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web en Telegram Web. Andere AI-pagina's werken alleen wanneer Page 2 File hun berichtstructuur herkent.",
  limitsTitle: "Voordat je begint",
  limits: [
    "Chrome blokkeert extensies op browserinstellingen, in de Chrome Web Store en op andere beveiligde pagina's.",
    "Vouw verborgen onderdelen uit en laad de benodigde berichten; inhoud die niet beschikbaar is voor het tabblad kan niet worden opgenomen.",
    "AI / Chat gebruikt staande pagina's en kan maximaal de laatste 2.000 berichten opnemen.",
    "Voor lokale HTML moet je Page 2 File mogelijk toegang tot bestands-URL's geven in de extensie-instellingen van Chrome.",
    "Een zeer lange pagina, niet-beschikbare media of een pagina die tijdens de export verandert, kan een volledig resultaat verhinderen.",
  ],
  breadcrumbLabel: "Kruimelpad",
  homeLabel: "Startpagina",
  guideLabel: "Handleiding voor de Chrome-extensie",
  browseChromeLabel: "Chrome-extensies bekijken",
};

const portugueseCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Guarde páginas web e conversas do navegador em PDF",
  homeLead: "O Page 2 File é uma extensão do Chrome que transforma o separador atual num PDF. Pode preservar o aspeto da página, criar um documento com texto selecionável e ligações, ou exportar uma conversa compatível de forma organizada.",
  modesTitle: "Escolha o tipo de PDF",
  modesLead: "Os três modos servem objetivos diferentes. Escolha o mais adequado antes de abrir a pré-visualização.",
  modes: [
    { title: "Accurate copy", body: "Captura a página apresentada como páginas PDF formadas por imagens. Use este modo quando o aspeto visual for mais importante do que selecionar texto ou abrir ligações." },
    { title: "Editable document", body: "Mantém selecionável o texto compatível e conserva ligações clicáveis. Também pode remover imagens, ligações ou a formatação da página antes de criar o PDF." },
    { title: "AI / Chat", body: "Cria um PDF legível a partir de uma conversa compatível. Inclua todas as mensagens ou apenas as respostas e, se quiser, remova imagens e ligações." },
  ],
  sourcesTitle: "Páginas e conversas que pode guardar",
  sourcesBody: "A extensão trabalha com a página já aberta no separador atual do Chrome. Não pede outro URL nem contorna as regras de acesso do site.",
  sources: [
    "Páginas públicas e páginas que já consegue ver depois de iniciar sessão.",
    "Ficheiros HTML locais abertos no Chrome, quando o acesso a URLs de ficheiro está autorizado.",
    "Google Docs, Sheets e Slides abertos no navegador.",
    "Conversas de IA e mensageiros web compatíveis, incluindo ChatGPT, Claude, Gemini, WhatsApp Web e Telegram Web.",
  ],
  processTitle: "Do separador atual para PDF",
  processBody: "Este site não tem um formulário de carregamento. Abra o conteúdo no Chrome e use a extensão nesse separador.",
  steps: [
    { title: "Abra o conteúdo", body: "Carregue a página web, o ficheiro HTML local ou a conversa que pretende guardar." },
    { title: "Abra o Page 2 File", body: "Clique no ícone da extensão enquanto o separador de origem está ativo." },
    { title: "Escolha um modo", body: "Selecione Accurate copy, Editable document ou AI / Chat." },
    { title: "Ajuste as opções", body: "Escolha a orientação ou remova o conteúdo que não deve aparecer no PDF." },
    { title: "Pré-visualize o PDF", body: "Aguarde enquanto a extensão prepara o ficheiro e o abre no leitor de PDF do Chrome." },
    { title: "Verifique e guarde", body: "Reveja as páginas e use os controlos de transferência ou impressão do leitor." },
  ],
  privacyTitle: "Processamento no seu navegador",
  privacyBody: "A extensão cria o PDF localmente. O conteúdo convertido não é enviado para servidores do Page 2 File e não é necessária uma conta.",
  privacyPoints: [
    "A extensão lê o conteúdo de origem apenas no separador em que é iniciada.",
    "O PDF temporário é eliminado depois de a pré-visualização carregar. Se nunca a abrir, os dados com mais de duas horas são limpos na próxima execução da extensão.",
    "A análise deste site, quando ativada com consentimento, é independente do processamento de PDF da extensão.",
  ],
  guideTitle: "Como usar a extensão Page 2 File para Chrome",
  guideLead: "Siga estes passos para guardar como PDF uma página web, um ficheiro HTML local ou uma conversa compatível a partir do separador atual.",
  supportedTitle: "Conversas compatíveis no navegador",
  supportedBody: "Existem adaptadores próprios para ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web e Telegram Web. Outras páginas de IA só funcionam quando o Page 2 File reconhece a estrutura das mensagens.",
  limitsTitle: "Antes de começar",
  limits: [
    "O Chrome bloqueia extensões nas definições do navegador, na Chrome Web Store e noutras páginas protegidas.",
    "Abra as secções ocultas e carregue as mensagens necessárias; o conteúdo indisponível no separador não pode ser incluído.",
    "O modo AI / Chat usa orientação vertical e inclui, no máximo, as 2 000 mensagens mais recentes.",
    "Para HTML local, pode ser necessário permitir ao Page 2 File o acesso a URLs de ficheiro nas definições de extensões do Chrome.",
    "Páginas muito longas, conteúdo multimédia indisponível ou alterações durante a exportação podem impedir um resultado completo.",
  ],
  breadcrumbLabel: "Navegação estrutural",
  homeLabel: "Início",
  guideLabel: "Guia da extensão Chrome",
  browseChromeLabel: "Explorar extensões do Chrome",
};

const italianCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Salva pagine web e chat del browser in PDF",
  homeLead: "Page 2 File è un'estensione Chrome che trasforma la scheda corrente in PDF. Puoi conservare fedelmente l'aspetto della pagina, creare un documento con testo selezionabile e link oppure esportare in modo ordinato una chat supportata.",
  modesTitle: "Scegli il tipo di PDF",
  modesLead: "I tre modi rispondono a esigenze diverse. Scegli quello adatto alla pagina prima di aprire l'anteprima.",
  modes: [
    { title: "Accurate copy", body: "Acquisisce la pagina visualizzata come pagine PDF basate su immagini. Usalo quando l'aspetto è più importante della selezione del testo o dei link cliccabili." },
    { title: "Editable document", body: "Mantiene selezionabile il testo supportato e cliccabili i link. Prima di creare il PDF puoi rimuovere immagini, link o formattazione della pagina." },
    { title: "AI / Chat", body: "Crea un PDF leggibile da una conversazione supportata. Puoi includere tutti i messaggi o solo le risposte e rimuovere immagini o link." },
  ],
  sourcesTitle: "Pagine e chat che puoi salvare",
  sourcesBody: "L'estensione usa la pagina già aperta nella scheda corrente di Chrome. Non richiede un altro URL e non aggira le regole di accesso del sito.",
  sources: [
    "Pagine web pubbliche e pagine che puoi già vedere dopo aver effettuato l'accesso.",
    "File HTML locali aperti in Chrome, se è consentito l'accesso agli URL di file.",
    "Google Docs, Sheets e Slides aperti nel browser.",
    "Conversazioni AI e servizi di messaggistica web supportati, tra cui ChatGPT, Claude, Gemini, WhatsApp Web e Telegram Web.",
  ],
  processTitle: "Dalla scheda corrente al PDF",
  processBody: "Questo sito non contiene un modulo di caricamento. Apri il contenuto in Chrome e usa l'estensione in quella scheda.",
  steps: [
    { title: "Apri il contenuto", body: "Carica la pagina web, il file HTML locale o la conversazione che vuoi conservare." },
    { title: "Apri Page 2 File", body: "Fai clic sull'icona dell'estensione mentre la scheda di origine è attiva." },
    { title: "Scegli un modo", body: "Seleziona Accurate copy, Editable document o AI / Chat." },
    { title: "Regola le opzioni", body: "Scegli l'orientamento o rimuovi i contenuti che non devono apparire nel PDF." },
    { title: "Visualizza l'anteprima", body: "Attendi che l'estensione prepari il file e lo apra nel visualizzatore PDF di Chrome." },
    { title: "Controlla e salva", body: "Verifica le pagine, quindi usa i comandi di download o stampa del visualizzatore." },
  ],
  privacyTitle: "Elaborazione nel browser",
  privacyBody: "L'estensione crea il PDF localmente. Il contenuto convertito non viene inviato ai server di Page 2 File e non serve un account.",
  privacyPoints: [
    "L'estensione legge il contenuto di origine solo dalla scheda in cui viene avviata.",
    "Il PDF temporaneo viene eliminato dopo il caricamento dell'anteprima. Se non la apri, i dati più vecchi di due ore vengono cancellati al successivo avvio dell'estensione.",
    "Le statistiche di questo sito, se attivate con il consenso, sono separate dall'elaborazione PDF dell'estensione.",
  ],
  guideTitle: "Come usare l'estensione Page 2 File per Chrome",
  guideLead: "Segui questi passaggi per salvare in PDF una pagina web, un file HTML locale o una conversazione supportata dalla scheda corrente.",
  supportedTitle: "Chat supportate nel browser",
  supportedBody: "Sono disponibili adattatori dedicati per ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web e Telegram Web. Le altre pagine AI funzionano solo se Page 2 File ne riconosce la struttura dei messaggi.",
  limitsTitle: "Prima di iniziare",
  limits: [
    "Chrome blocca le estensioni nelle impostazioni del browser, nel Chrome Web Store e nelle altre pagine protette.",
    "Espandi le sezioni nascoste e carica i messaggi necessari; ciò che non è disponibile nella scheda non può essere incluso.",
    "Il modo AI / Chat usa pagine verticali e può includere al massimo gli ultimi 2.000 messaggi.",
    "Per l'HTML locale può essere necessario consentire a Page 2 File l'accesso agli URL di file nelle impostazioni delle estensioni Chrome.",
    "Pagine molto lunghe, contenuti multimediali non disponibili o modifiche durante l'esportazione possono impedire un risultato completo.",
  ],
  breadcrumbLabel: "Percorso di navigazione",
  homeLabel: "Home",
  guideLabel: "Guida dell'estensione Chrome",
  browseChromeLabel: "Sfoglia le estensioni Chrome",
};

const polishCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Zapisuj strony internetowe i czaty z przeglądarki jako PDF",
  homeLead: "Page 2 File to rozszerzenie Chrome, które zamienia bieżącą kartę w PDF. Możesz zachować wygląd strony, utworzyć dokument z zaznaczalnym tekstem i linkami albo czytelnie wyeksportować obsługiwany czat.",
  modesTitle: "Wybierz rodzaj pliku PDF",
  modesLead: "Trzy tryby służą do różnych zadań. Przed otwarciem podglądu wybierz ten, który pasuje do strony.",
  modes: [
    { title: "Accurate copy", body: "Zapisuje widoczną stronę jako obrazowe strony PDF. Wybierz ten tryb, gdy wygląd jest ważniejszy niż zaznaczanie tekstu lub aktywne linki." },
    { title: "Editable document", body: "Zachowuje zaznaczalny tekst i klikalne linki tam, gdzie jest to możliwe. Przed utworzeniem PDF możesz usunąć obrazy, linki lub styl strony." },
    { title: "AI / Chat", body: "Tworzy czytelny PDF z obsługiwanej rozmowy. Dołącz wszystkie wiadomości albo tylko odpowiedzi oraz opcjonalnie usuń obrazy i linki." },
  ],
  sourcesTitle: "Strony i czaty, które możesz zapisać",
  sourcesBody: "Rozszerzenie działa na stronie otwartej w bieżącej karcie Chrome. Nie wymaga podania osobnego adresu URL i nie omija zasad dostępu witryny.",
  sources: [
    "Publiczne strony i strony, które możesz już wyświetlać po zalogowaniu.",
    "Lokalne pliki HTML otwarte w Chrome, jeśli zezwolono na dostęp do adresów plików.",
    "Google Docs, Sheets i Slides otwarte w przeglądarce.",
    "Obsługiwane rozmowy AI i komunikatory internetowe, w tym ChatGPT, Claude, Gemini, WhatsApp Web i Telegram Web.",
  ],
  processTitle: "Z bieżącej karty do PDF",
  processBody: "W tej witrynie nie ma formularza przesyłania. Otwórz materiał w Chrome i użyj rozszerzenia na tej karcie.",
  steps: [
    { title: "Otwórz materiał", body: "Wczytaj stronę, lokalny plik HTML lub rozmowę, którą chcesz zachować." },
    { title: "Otwórz Page 2 File", body: "Kliknij ikonę rozszerzenia, gdy karta źródłowa jest aktywna." },
    { title: "Wybierz tryb", body: "Wskaż Accurate copy, Editable document albo AI / Chat." },
    { title: "Dostosuj opcje", body: "Wybierz orientację lub usuń treści, które nie powinny znaleźć się w PDF." },
    { title: "Wyświetl podgląd", body: "Poczekaj, aż rozszerzenie przygotuje plik i otworzy go w przeglądarce PDF Chrome." },
    { title: "Sprawdź i zapisz", body: "Przejrzyj strony i użyj przycisku pobierania lub drukowania w przeglądarce PDF." },
  ],
  privacyTitle: "Przetwarzanie w przeglądarce",
  privacyBody: "Rozszerzenie tworzy PDF lokalnie. Konwertowana treść nie jest wysyłana na serwery Page 2 File i nie wymaga konta.",
  privacyPoints: [
    "Rozszerzenie odczytuje treść źródłową tylko z karty, na której je uruchomisz.",
    "Tymczasowy PDF jest usuwany po wczytaniu podglądu. Jeśli go nie otworzysz, dane starsze niż dwie godziny zostaną wyczyszczone przy następnym uruchomieniu rozszerzenia.",
    "Analityka tej witryny, jeśli włączona za zgodą, jest niezależna od przetwarzania PDF w rozszerzeniu.",
  ],
  guideTitle: "Jak używać rozszerzenia Page 2 File do Chrome",
  guideLead: "Wykonaj te kroki, aby zapisać jako PDF stronę, lokalny plik HTML lub obsługiwaną rozmowę z bieżącej karty.",
  supportedTitle: "Obsługiwane czaty w przeglądarce",
  supportedBody: "Osobne adaptery obsługują ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web i Telegram Web. Inne strony AI działają tylko wtedy, gdy Page 2 File rozpozna strukturę wiadomości.",
  limitsTitle: "Zanim zaczniesz",
  limits: [
    "Chrome blokuje rozszerzenia na stronach ustawień, w Chrome Web Store i na innych stronach chronionych.",
    "Rozwiń ukryte sekcje i wczytaj potrzebne wiadomości; treści niedostępnej na karcie nie można dołączyć.",
    "Tryb AI / Chat używa orientacji pionowej i obejmuje najwyżej 2 000 ostatnich wiadomości.",
    "Lokalny HTML może wymagać zezwolenia Page 2 File na dostęp do adresów plików w ustawieniach rozszerzeń Chrome.",
    "Bardzo długa strona, niedostępne multimedia lub zmiana strony podczas eksportu mogą uniemożliwić uzyskanie pełnego wyniku.",
  ],
  breadcrumbLabel: "Ścieżka nawigacji",
  homeLabel: "Strona główna",
  guideLabel: "Instrukcja rozszerzenia Chrome",
  browseChromeLabel: "Przeglądaj rozszerzenia Chrome",
};

const czechCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Ukládejte webové stránky a chaty z prohlížeče do PDF",
  homeLead: "Page 2 File je rozšíření pro Chrome, které převede aktuální kartu do PDF. Můžete zachovat vzhled stránky, vytvořit dokument s označitelným textem a odkazy nebo přehledně exportovat podporovaný chat.",
  modesTitle: "Zvolte podobu PDF",
  modesLead: "Tři režimy slouží různým účelům. Před otevřením náhledu vyberte ten, který se pro stránku hodí.",
  modes: [
    { title: "Accurate copy", body: "Zachytí zobrazenou stránku jako obrazové stránky PDF. Použijte jej, pokud je vzhled důležitější než výběr textu nebo aktivní odkazy." },
    { title: "Editable document", body: "Zachová podporovaný text označitelný a odkazy klikatelné. Před vytvořením PDF můžete odstranit obrázky, odkazy nebo styl stránky." },
    { title: "AI / Chat", body: "Vytvoří čitelné PDF z podporované konverzace. Zahrňte všechny zprávy nebo jen odpovědi a podle potřeby odeberte obrázky či odkazy." },
  ],
  sourcesTitle: "Stránky a chaty, které lze uložit",
  sourcesBody: "Rozšíření pracuje se stránkou již otevřenou v aktuální kartě Chromu. Nevyžaduje další URL a neobchází pravidla přístupu webu.",
  sources: [
    "Veřejné stránky a stránky, které už můžete zobrazit po přihlášení.",
    "Místní soubory HTML otevřené v Chromu, pokud je povolen přístup k adresám souborů.",
    "Google Docs, Sheets a Slides otevřené v prohlížeči.",
    "Podporované AI konverzace a webové komunikátory včetně ChatGPT, Claude, Gemini, WhatsApp Web a Telegram Web.",
  ],
  processTitle: "Z aktuální karty do PDF",
  processBody: "Na tomto webu není formulář pro nahrávání. Otevřete obsah v Chromu a použijte rozšíření na dané kartě.",
  steps: [
    { title: "Otevřete obsah", body: "Načtěte webovou stránku, místní soubor HTML nebo konverzaci, kterou chcete uchovat." },
    { title: "Otevřete Page 2 File", body: "Klikněte na ikonu rozšíření, když je zdrojová karta aktivní." },
    { title: "Vyberte režim", body: "Zvolte Accurate copy, Editable document nebo AI / Chat." },
    { title: "Upravte možnosti", body: "Vyberte orientaci nebo odeberte obsah, který nemá být v PDF." },
    { title: "Otevřete náhled", body: "Počkejte, až rozšíření připraví soubor a otevře jej v prohlížeči PDF v Chromu." },
    { title: "Zkontrolujte a uložte", body: "Projděte stránky a použijte ovládání pro stažení nebo tisk." },
  ],
  privacyTitle: "Zpracování v prohlížeči",
  privacyBody: "Rozšíření vytváří PDF místně. Převáděný obsah se neodesílá na servery Page 2 File a účet není potřeba.",
  privacyPoints: [
    "Rozšíření čte zdrojový obsah pouze z karty, na které je spustíte.",
    "Dočasné PDF se odstraní po načtení náhledu. Pokud jej nikdy neotevřete, data starší než dvě hodiny se vymažou při příštím spuštění rozšíření.",
    "Analytika tohoto webu, je-li zapnuta se souhlasem, je oddělená od zpracování PDF v rozšíření.",
  ],
  guideTitle: "Jak používat rozšíření Page 2 File pro Chrome",
  guideLead: "Pomocí těchto kroků uložíte webovou stránku, místní soubor HTML nebo podporovanou konverzaci z aktuální karty do PDF.",
  supportedTitle: "Podporované chaty v prohlížeči",
  supportedBody: "Samostatné adaptéry podporují ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web a Telegram Web. Jiné AI stránky fungují jen tehdy, když Page 2 File rozpozná strukturu zpráv.",
  limitsTitle: "Než začnete",
  limits: [
    "Chrome blokuje rozšíření v nastavení prohlížeče, v Chrome Web Store a na dalších chráněných stránkách.",
    "Rozbalte skryté části a načtěte potřebné zprávy; obsah nedostupný na kartě nelze zahrnout.",
    "Režim AI / Chat používá orientaci na výšku a zahrne nejvýše posledních 2 000 zpráv.",
    "Místní HTML může vyžadovat povolení přístupu Page 2 File k adresám souborů v nastavení rozšíření Chrome.",
    "Velmi dlouhá stránka, nedostupná média nebo změna stránky během exportu mohou zabránit úplnému výsledku.",
  ],
  breadcrumbLabel: "Drobečková navigace",
  homeLabel: "Domů",
  guideLabel: "Návod k rozšíření Chrome",
  browseChromeLabel: "Procházet rozšíření pro Chrome",
};

const swedishCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Spara webbsidor och webbläsarchattar som PDF",
  homeLead: "Page 2 File är ett Chrome-tillägg som gör om den aktuella fliken till PDF. Bevara sidans utseende, skapa ett dokument med markerbar text och länkar eller exportera en chatt som stöds i ett lättläst format.",
  modesTitle: "Välj vilken PDF du behöver",
  modesLead: "De tre lägena passar olika uppgifter. Välj rätt läge för sidan innan du öppnar förhandsgranskningen.",
  modes: [
    { title: "Accurate copy", body: "Fångar den visade sidan som bildbaserade PDF-sidor. Använd läget när utseendet är viktigare än markerbar text eller klickbara länkar." },
    { title: "Editable document", body: "Behåller text markerbar och länkar klickbara där det stöds. Du kan också ta bort bilder, länkar eller sidans formatering innan PDF-filen skapas." },
    { title: "AI / Chat", body: "Skapar en lättläst PDF av en chatt som stöds. Ta med alla meddelanden eller bara svaren och ta bort bilder eller länkar vid behov." },
  ],
  sourcesTitle: "Sidor och chattar som du kan spara",
  sourcesBody: "Tillägget arbetar med sidan som redan är öppen på den aktuella Chrome-fliken. Det kräver ingen separat webbadress och kringgår inte webbplatsens åtkomstregler.",
  sources: [
    "Offentliga webbsidor och sidor som du redan kan se efter inloggning.",
    "Lokala HTML-filer som öppnats i Chrome, om åtkomst till filadresser är tillåten.",
    "Google Docs, Sheets och Slides som är öppna i webbläsaren.",
    "AI-konversationer och webbmeddelanden som stöds, bland annat ChatGPT, Claude, Gemini, WhatsApp Web och Telegram Web.",
  ],
  processTitle: "Från aktuell flik till PDF",
  processBody: "Den här webbplatsen har inget uppladdningsformulär. Öppna innehållet i Chrome och använd tillägget på den fliken.",
  steps: [
    { title: "Öppna innehållet", body: "Läs in webbsidan, den lokala HTML-filen eller konversationen som du vill spara." },
    { title: "Öppna Page 2 File", body: "Klicka på tilläggets ikon medan källfliken är aktiv." },
    { title: "Välj läge", body: "Välj Accurate copy, Editable document eller AI / Chat." },
    { title: "Justera alternativen", body: "Välj orientering eller ta bort innehåll som inte ska finnas i PDF-filen." },
    { title: "Förhandsgranska PDF", body: "Vänta medan tillägget förbereder filen och öppnar den i Chromes PDF-läsare." },
    { title: "Kontrollera och spara", body: "Granska sidorna och använd sedan läsarens knappar för hämtning eller utskrift." },
  ],
  privacyTitle: "Bearbetas i webbläsaren",
  privacyBody: "Tillägget skapar PDF-filen lokalt. Innehållet skickas inte till Page 2 Files servrar och inget konto krävs.",
  privacyPoints: [
    "Tillägget läser bara källinnehåll från fliken där du startar det.",
    "Den tillfälliga PDF-filen tas bort när förhandsgranskningen har lästs in. Om du aldrig öppnar den rensas data som är äldre än två timmar nästa gång tillägget körs.",
    "Webbplatsanalys, om den aktiveras med samtycke, är skild från tilläggets PDF-bearbetning.",
  ],
  guideTitle: "Så använder du Chrome-tillägget Page 2 File",
  guideLead: "Följ stegen för att spara en webbsida, lokal HTML-fil eller konversation som stöds från den aktuella fliken som PDF.",
  supportedTitle: "Webbläsarchattar som stöds",
  supportedBody: "Särskilda anpassningar finns för ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web och Telegram Web. Andra AI-sidor fungerar bara om Page 2 File känner igen meddelandenas struktur.",
  limitsTitle: "Innan du börjar",
  limits: [
    "Chrome blockerar tillägg på webbläsarens inställningssidor, i Chrome Web Store och på andra skyddade sidor.",
    "Fäll ut dolda avsnitt och läs in de meddelanden du behöver; innehåll som fliken inte har tillgång till kan inte tas med.",
    "AI / Chat använder stående format och kan ta med högst de 2 000 senaste meddelandena.",
    "För lokal HTML kan du behöva tillåta Page 2 File åtkomst till filadresser i Chromes tilläggsinställningar.",
    "Mycket långa sidor, otillgängliga medier eller en sida som ändras under exporten kan hindra ett fullständigt resultat.",
  ],
  breadcrumbLabel: "Navigeringssökväg",
  homeLabel: "Startsida",
  guideLabel: "Guide till Chrome-tillägget",
  browseChromeLabel: "Bläddra bland Chrome-tillägg",
};

const norwegianCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Lagre nettsider og nettleserchatter som PDF",
  homeLead: "Page 2 File er en Chrome-utvidelse som gjør den aktive fanen om til PDF. Bevar sidens utseende, lag et dokument med markerbar tekst og lenker, eller eksporter en støttet chat i et ryddig format.",
  modesTitle: "Velg riktig PDF-type",
  modesLead: "De tre modusene passer til ulike oppgaver. Velg den som passer siden før du åpner forhåndsvisningen.",
  modes: [
    { title: "Accurate copy", body: "Fanger den viste siden som bildebaserte PDF-sider. Bruk modusen når utseendet er viktigere enn markerbar tekst eller klikkbare lenker." },
    { title: "Editable document", body: "Beholder tekst markerbar og lenker klikkbare der det støttes. Du kan også fjerne bilder, lenker eller sidestil før PDF-filen opprettes." },
    { title: "AI / Chat", body: "Lager en lettlest PDF fra en støttet samtale. Ta med alle meldinger eller bare svarene, og fjern bilder eller lenker ved behov." },
  ],
  sourcesTitle: "Sider og chatter du kan lagre",
  sourcesBody: "Utvidelsen bruker siden som allerede er åpen i den aktive Chrome-fanen. Den ber ikke om en egen nettadresse og omgår ikke nettstedets tilgangsregler.",
  sources: [
    "Offentlige nettsider og sider du allerede kan se etter innlogging.",
    "Lokale HTML-filer åpnet i Chrome, når tilgang til filadresser er tillatt.",
    "Google Docs, Sheets og Slides som er åpne i nettleseren.",
    "Støttede AI-samtaler og nettmeldinger, blant annet ChatGPT, Claude, Gemini, WhatsApp Web og Telegram Web.",
  ],
  processTitle: "Fra aktiv fane til PDF",
  processBody: "Dette nettstedet har ikke noe opplastingsskjema. Åpne innholdet i Chrome og bruk utvidelsen på den fanen.",
  steps: [
    { title: "Åpne innholdet", body: "Last inn nettsiden, den lokale HTML-filen eller samtalen du vil ta vare på." },
    { title: "Åpne Page 2 File", body: "Klikk på utvidelsesikonet mens kildefanen er aktiv." },
    { title: "Velg modus", body: "Velg Accurate copy, Editable document eller AI / Chat." },
    { title: "Juster valgene", body: "Velg retning eller fjern innhold som ikke skal være med i PDF-filen." },
    { title: "Forhåndsvis PDF", body: "Vent mens utvidelsen klargjør filen og åpner den i Chromes PDF-visning." },
    { title: "Kontroller og lagre", body: "Se gjennom sidene og bruk deretter visningens knapper for nedlasting eller utskrift." },
  ],
  privacyTitle: "Behandles i nettleseren",
  privacyBody: "Utvidelsen lager PDF-filen lokalt. Innholdet sendes ikke til Page 2 File-servere, og det kreves ingen konto.",
  privacyPoints: [
    "Utvidelsen leser bare kildeinnhold fra fanen der du starter den.",
    "Den midlertidige PDF-filen slettes etter at forhåndsvisningen er lastet. Hvis du aldri åpner den, fjernes data som er eldre enn to timer neste gang utvidelsen kjører.",
    "Nettstedsanalyse, hvis aktivert med samtykke, er adskilt fra utvidelsens PDF-behandling.",
  ],
  guideTitle: "Slik bruker du Chrome-utvidelsen Page 2 File",
  guideLead: "Følg disse trinnene for å lagre en nettside, lokal HTML-fil eller støttet samtale fra den aktive fanen som PDF.",
  supportedTitle: "Støttede nettleserchatter",
  supportedBody: "Egne tilpasninger finnes for ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web og Telegram Web. Andre AI-sider virker bare når Page 2 File gjenkjenner meldingsstrukturen.",
  limitsTitle: "Før du begynner",
  limits: [
    "Chrome blokkerer utvidelser på innstillingssider, i Chrome Web Store og på andre beskyttede sider.",
    "Åpne skjulte deler og last inn meldingene du trenger; innhold som fanen ikke har tilgang til, kan ikke tas med.",
    "AI / Chat bruker stående format og kan ta med høyst de 2 000 siste meldingene.",
    "For lokal HTML må du kanskje gi Page 2 File tilgang til filadresser i Chromes utvidelsesinnstillinger.",
    "Svært lange sider, utilgjengelige medier eller endringer under eksporten kan hindre et fullstendig resultat.",
  ],
  breadcrumbLabel: "Navigasjonssti",
  homeLabel: "Forside",
  guideLabel: "Veiledning for Chrome-utvidelsen",
  browseChromeLabel: "Se Chrome-utvidelser",
};

const danishCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Gem websider og browserchats som PDF",
  homeLead: "Page 2 File er en Chrome-udvidelse, der gør den aktuelle fane til en PDF. Bevar sidens udseende, opret et dokument med markerbar tekst og links, eller eksportér en understøttet chat i et overskueligt format.",
  modesTitle: "Vælg den rette type PDF",
  modesLead: "De tre tilstande passer til forskellige opgaver. Vælg den rette til siden, før du åbner forhåndsvisningen.",
  modes: [
    { title: "Accurate copy", body: "Gemmer den viste side som billedbaserede PDF-sider. Brug tilstanden, når udseendet er vigtigere end markerbar tekst eller aktive links." },
    { title: "Editable document", body: "Bevarer tekst som markerbar og links som klikbare, hvor det understøttes. Du kan også fjerne billeder, links eller sidens formatering før oprettelsen." },
    { title: "AI / Chat", body: "Opretter en læsevenlig PDF fra en understøttet samtale. Medtag alle beskeder eller kun svarene, og fjern billeder eller links efter behov." },
  ],
  sourcesTitle: "Sider og chats, du kan gemme",
  sourcesBody: "Udvidelsen arbejder med siden, der allerede er åben i den aktuelle Chrome-fane. Den beder ikke om en særskilt webadresse og omgår ikke webstedets adgangsregler.",
  sources: [
    "Offentlige websider og sider, som du allerede kan se efter login.",
    "Lokale HTML-filer åbnet i Chrome, når adgang til filwebadresser er tilladt.",
    "Google Docs, Sheets og Slides, der er åbne i browseren.",
    "Understøttede AI-samtaler og webbeskeder, herunder ChatGPT, Claude, Gemini, WhatsApp Web og Telegram Web.",
  ],
  processTitle: "Fra den aktuelle fane til PDF",
  processBody: "Dette websted har ingen uploadformular. Åbn indholdet i Chrome, og brug udvidelsen på den pågældende fane.",
  steps: [
    { title: "Åbn indholdet", body: "Indlæs websiden, den lokale HTML-fil eller samtalen, du vil gemme." },
    { title: "Åbn Page 2 File", body: "Klik på udvidelsesikonet, mens kildefanen er aktiv." },
    { title: "Vælg tilstand", body: "Vælg Accurate copy, Editable document eller AI / Chat." },
    { title: "Tilpas valgene", body: "Vælg retning, eller fjern indhold, der ikke skal med i PDF-filen." },
    { title: "Se PDF-eksemplet", body: "Vent, mens udvidelsen klargør filen og åbner den i Chromes PDF-fremviser." },
    { title: "Kontrollér og gem", body: "Gennemse siderne, og brug fremviserens knapper til download eller udskrivning." },
  ],
  privacyTitle: "Behandles i din browser",
  privacyBody: "Udvidelsen opretter PDF-filen lokalt. Indholdet sendes ikke til Page 2 Files servere, og der kræves ingen konto.",
  privacyPoints: [
    "Udvidelsen læser kun kildeindhold fra den fane, hvor du starter den.",
    "Den midlertidige PDF slettes, når forhåndsvisningen er indlæst. Hvis du aldrig åbner den, ryddes data, der er ældre end to timer, næste gang udvidelsen kører.",
    "Webstedsanalyse, hvis den aktiveres med samtykke, er adskilt fra udvidelsens PDF-behandling.",
  ],
  guideTitle: "Sådan bruger du Chrome-udvidelsen Page 2 File",
  guideLead: "Følg disse trin for at gemme en webside, lokal HTML-fil eller understøttet samtale fra den aktuelle fane som PDF.",
  supportedTitle: "Understøttede browserchats",
  supportedBody: "Der findes særlige tilpasninger til ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web og Telegram Web. Andre AI-sider virker kun, hvis Page 2 File genkender beskedstrukturen.",
  limitsTitle: "Før du begynder",
  limits: [
    "Chrome blokerer udvidelser på browserens indstillingssider, i Chrome Web Store og på andre beskyttede sider.",
    "Fold skjulte afsnit ud, og indlæs de nødvendige beskeder; indhold, som fanen ikke har adgang til, kan ikke medtages.",
    "AI / Chat bruger stående format og kan højst medtage de seneste 2.000 beskeder.",
    "For lokal HTML skal du muligvis give Page 2 File adgang til filwebadresser i Chromes udvidelsesindstillinger.",
    "Meget lange sider, utilgængelige medier eller ændringer under eksporten kan forhindre et fuldstændigt resultat.",
  ],
  breadcrumbLabel: "Brødkrummenavigation",
  homeLabel: "Forside",
  guideLabel: "Vejledning til Chrome-udvidelsen",
  browseChromeLabel: "Se Chrome-udvidelser",
};

const finnishCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Tallenna verkkosivut ja selainkeskustelut PDF-muotoon",
  homeLead: "Page 2 File on Chrome-laajennus, joka muuttaa nykyisen välilehden PDF-tiedostoksi. Voit säilyttää sivun ulkoasun, luoda valittavaa tekstiä ja linkkejä sisältävän asiakirjan tai viedä tuetun keskustelun selkeässä muodossa.",
  modesTitle: "Valitse sopiva PDF-tapa",
  modesLead: "Kolme tilaa on tarkoitettu eri tehtäviin. Valitse sivulle sopiva tila ennen esikatselun avaamista.",
  modes: [
    { title: "Accurate copy", body: "Tallentaa näkyvän sivun kuvapohjaisina PDF-sivuina. Käytä tilaa, kun ulkoasu on tärkeämpi kuin tekstin valinta tai toimivat linkit." },
    { title: "Editable document", body: "Säilyttää tuetun tekstin valittavana ja linkit napsautettavina. Voit myös poistaa kuvat, linkit tai sivun tyylit ennen PDF:n luomista." },
    { title: "AI / Chat", body: "Luo tuetusta keskustelusta helppolukuisen PDF:n. Sisällytä kaikki viestit tai vain vastaukset ja poista tarvittaessa kuvat tai linkit." },
  ],
  sourcesTitle: "Tallennettavat sivut ja keskustelut",
  sourcesBody: "Laajennus käyttää nykyisellä Chrome-välilehdellä jo avointa sivua. Se ei pyydä erillistä osoitetta eikä kierrä sivuston käyttöoikeuksia.",
  sources: [
    "Julkiset verkkosivut ja sivut, joita voit jo tarkastella kirjautuneena.",
    "Chromessa avatut paikalliset HTML-tiedostot, kun tiedosto-osoitteiden käyttö on sallittu.",
    "Selaimessa avatut Google Docs-, Sheets- ja Slides-sivut.",
    "Tuetut AI-keskustelut ja verkkoviestimet, kuten ChatGPT, Claude, Gemini, WhatsApp Web ja Telegram Web.",
  ],
  processTitle: "Nykyiseltä välilehdeltä PDF:ksi",
  processBody: "Tällä sivustolla ei ole latauslomaketta. Avaa sisältö Chromessa ja käytä laajennusta kyseisellä välilehdellä.",
  steps: [
    { title: "Avaa sisältö", body: "Lataa verkkosivu, paikallinen HTML-tiedosto tai keskustelu, jonka haluat säilyttää." },
    { title: "Avaa Page 2 File", body: "Napsauta laajennuksen kuvaketta lähdevälilehden ollessa aktiivinen." },
    { title: "Valitse tila", body: "Valitse Accurate copy, Editable document tai AI / Chat." },
    { title: "Säädä asetuksia", body: "Valitse suunta tai poista sisältö, jonka ei pidä näkyä PDF:ssä." },
    { title: "Esikatsele PDF", body: "Odota, että laajennus valmistelee tiedoston ja avaa sen Chromen PDF-katselussa." },
    { title: "Tarkista ja tallenna", body: "Tarkista sivut ja käytä katselun lataus- tai tulostuspainiketta." },
  ],
  privacyTitle: "Käsitellään selaimessasi",
  privacyBody: "Laajennus luo PDF:n paikallisesti. Sisältöä ei lähetetä Page 2 Filen palvelimille, eikä tiliä tarvita.",
  privacyPoints: [
    "Laajennus lukee lähdesisällön vain välilehdeltä, jolla käynnistät sen.",
    "Väliaikainen PDF poistetaan esikatselun latauduttua. Jos et koskaan avaa sitä, yli kaksi tuntia vanhat tiedot poistetaan, kun laajennus suoritetaan seuraavan kerran.",
    "Sivuston analytiikka, jos se otetaan käyttöön suostumuksella, on erillään laajennuksen PDF-käsittelystä.",
  ],
  guideTitle: "Page 2 File -Chrome-laajennuksen käyttö",
  guideLead: "Näillä vaiheilla tallennat verkkosivun, paikallisen HTML-tiedoston tai tuetun keskustelun nykyiseltä välilehdeltä PDF:ksi.",
  supportedTitle: "Tuetut selainkeskustelut",
  supportedBody: "Omat sovittimet ovat käytössä palveluille ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web ja Telegram Web. Muut AI-sivut toimivat vain, jos Page 2 File tunnistaa viestirakenteen.",
  limitsTitle: "Ennen aloittamista",
  limits: [
    "Chrome estää laajennukset selaimen asetussivuilla, Chrome Web Storessa ja muilla suojatuilla sivuilla.",
    "Avaa piilotetut osiot ja lataa tarvitsemasi viestit; välilehdelle saavuttamatonta sisältöä ei voi sisällyttää.",
    "AI / Chat käyttää pystysuuntaa ja voi sisältää enintään 2 000 uusinta viestiä.",
    "Paikallinen HTML voi vaatia Page 2 Filelle tiedosto-osoitteiden käyttöluvan Chromen laajennusasetuksissa.",
    "Hyvin pitkä sivu, puuttuva media tai sivun muuttuminen viennin aikana voi estää täydellisen tuloksen.",
  ],
  breadcrumbLabel: "Murupolku",
  homeLabel: "Etusivu",
  guideLabel: "Chrome-laajennuksen ohje",
  browseChromeLabel: "Selaa Chrome-laajennuksia",
};

const romanianCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Salvează pagini web și conversații din browser ca PDF",
  homeLead: "Page 2 File este o extensie Chrome care transformă fila curentă într-un PDF. Poți păstra aspectul paginii, crea un document cu text selectabil și linkuri sau exporta clar o conversație compatibilă.",
  modesTitle: "Alege tipul de PDF",
  modesLead: "Cele trei moduri sunt potrivite pentru sarcini diferite. Alege-l pe cel potrivit înainte de a deschide previzualizarea.",
  modes: [
    { title: "Accurate copy", body: "Capturează pagina afișată ca pagini PDF bazate pe imagini. Folosește modul când aspectul este mai important decât selectarea textului sau linkurile active." },
    { title: "Editable document", body: "Păstrează textul acceptat selectabil și linkurile accesibile. Înainte de creare poți elimina imaginile, linkurile sau formatarea paginii." },
    { title: "AI / Chat", body: "Creează un PDF ușor de citit dintr-o conversație compatibilă. Include toate mesajele sau doar răspunsurile și elimină imaginile ori linkurile dacă nu sunt necesare." },
  ],
  sourcesTitle: "Pagini și conversații pe care le poți salva",
  sourcesBody: "Extensia folosește pagina deja deschisă în fila curentă din Chrome. Nu solicită un URL separat și nu ocolește regulile de acces ale site-ului.",
  sources: [
    "Pagini publice și pagini pe care le poți vedea deja după autentificare.",
    "Fișiere HTML locale deschise în Chrome, dacă accesul la adresele de fișier este permis.",
    "Google Docs, Sheets și Slides deschise în browser.",
    "Conversații AI și servicii web de mesagerie compatibile, inclusiv ChatGPT, Claude, Gemini, WhatsApp Web și Telegram Web.",
  ],
  processTitle: "Din fila curentă în PDF",
  processBody: "Acest site nu are formular de încărcare. Deschide conținutul în Chrome și folosește extensia în fila respectivă.",
  steps: [
    { title: "Deschide conținutul", body: "Încarcă pagina web, fișierul HTML local sau conversația pe care vrei să o păstrezi." },
    { title: "Deschide Page 2 File", body: "Apasă pictograma extensiei cât timp fila sursă este activă." },
    { title: "Alege modul", body: "Selectează Accurate copy, Editable document sau AI / Chat." },
    { title: "Reglează opțiunile", body: "Alege orientarea sau elimină conținutul care nu trebuie să apară în PDF." },
    { title: "Previzualizează PDF-ul", body: "Așteaptă ca extensia să pregătească fișierul și să îl deschidă în vizualizatorul PDF din Chrome." },
    { title: "Verifică și salvează", body: "Examinează paginile, apoi folosește comenzile de descărcare sau imprimare." },
  ],
  privacyTitle: "Procesare în browser",
  privacyBody: "Extensia creează PDF-ul local. Conținutul nu este trimis la serverele Page 2 File și nu este necesar un cont.",
  privacyPoints: [
    "Extensia citește conținutul sursă numai din fila în care o pornești.",
    "PDF-ul temporar este șters după încărcarea previzualizării. Dacă nu îl deschizi, datele mai vechi de două ore sunt eliminate la următoarea rulare a extensiei.",
    "Analiza acestui site, dacă este activată cu acord, este separată de procesarea PDF din extensie.",
  ],
  guideTitle: "Cum folosești extensia Page 2 File pentru Chrome",
  guideLead: "Urmează acești pași pentru a salva ca PDF o pagină web, un fișier HTML local sau o conversație compatibilă din fila curentă.",
  supportedTitle: "Conversații compatibile în browser",
  supportedBody: "Există adaptoare dedicate pentru ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web și Telegram Web. Alte pagini AI funcționează doar dacă Page 2 File recunoaște structura mesajelor.",
  limitsTitle: "Înainte de a începe",
  limits: [
    "Chrome blochează extensiile în setările browserului, în Chrome Web Store și pe alte pagini protejate.",
    "Deschide secțiunile ascunse și încarcă mesajele necesare; conținutul indisponibil în filă nu poate fi inclus.",
    "Modul AI / Chat folosește orientarea portret și include cel mult cele mai recente 2.000 de mesaje.",
    "Pentru HTML local poate fi necesar să permiți accesul Page 2 File la adresele de fișier din setările extensiilor Chrome.",
    "Paginile foarte lungi, fișierele media indisponibile sau modificările din timpul exportului pot împiedica un rezultat complet.",
  ],
  breadcrumbLabel: "Traseu de navigare",
  homeLabel: "Acasă",
  guideLabel: "Ghidul extensiei Chrome",
  browseChromeLabel: "Explorează extensiile Chrome",
};

const hungarianCopy: ExtensionCopy = {
  ...englishCopy,
  homeTitle: "Weboldalak és böngészős csevegések mentése PDF-be",
  homeLead: "A Page 2 File egy Chrome-bővítmény, amely PDF-fé alakítja az aktuális lapot. Megőrizheti az oldal megjelenését, kijelölhető szöveget és hivatkozásokat tartalmazó dokumentumot készíthet, vagy áttekinthetően exportálhat egy támogatott csevegést.",
  modesTitle: "Válassza ki a megfelelő PDF-típust",
  modesLead: "A három mód eltérő feladatokra való. Az előnézet megnyitása előtt válassza ki az oldalhoz illőt.",
  modes: [
    { title: "Accurate copy", body: "A megjelenített oldalt képalapú PDF-oldalakként rögzíti. Akkor használja, ha a külső fontosabb a kijelölhető szövegnél vagy az aktív hivatkozásoknál." },
    { title: "Editable document", body: "A támogatott szöveget kijelölhetően, a hivatkozásokat kattinthatóan tartja meg. A PDF létrehozása előtt eltávolíthatja a képeket, hivatkozásokat vagy az oldal formázását." },
    { title: "AI / Chat", body: "Olvasható PDF-et készít egy támogatott beszélgetésből. Belefoglalhat minden üzenetet vagy csak a válaszokat, és eltávolíthatja a képeket vagy hivatkozásokat." },
  ],
  sourcesTitle: "Menthető oldalak és csevegések",
  sourcesBody: "A bővítmény az aktuális Chrome-lapon már megnyitott oldallal dolgozik. Nem kér külön webcímet, és nem kerüli meg a webhely hozzáférési szabályait.",
  sources: [
    "Nyilvános oldalak és olyan oldalak, amelyeket bejelentkezés után már meg tud nyitni.",
    "Chrome-ban megnyitott helyi HTML-fájlok, ha engedélyezett a fájlcímek elérése.",
    "A böngészőben megnyitott Google Docs-, Sheets- és Slides-oldalak.",
    "Támogatott AI-beszélgetések és webes üzenetküldők, például ChatGPT, Claude, Gemini, WhatsApp Web és Telegram Web.",
  ],
  processTitle: "Az aktuális laptól a PDF-ig",
  processBody: "Ezen a webhelyen nincs feltöltési űrlap. Nyissa meg a tartalmat a Chrome-ban, és használja a bővítményt azon a lapon.",
  steps: [
    { title: "Nyissa meg a tartalmat", body: "Töltse be a menteni kívánt weboldalt, helyi HTML-fájlt vagy beszélgetést." },
    { title: "Nyissa meg a Page 2 File-t", body: "Kattintson a bővítmény ikonjára, miközben a forráslap aktív." },
    { title: "Válasszon módot", body: "Válassza az Accurate copy, Editable document vagy AI / Chat lehetőséget." },
    { title: "Állítsa be a lehetőségeket", body: "Válasszon tájolást, vagy távolítsa el a PDF-be nem szükséges tartalmat." },
    { title: "Nézze meg az előnézetet", body: "Várja meg, amíg a bővítmény elkészíti a fájlt, és megnyitja a Chrome PDF-megjelenítőjében." },
    { title: "Ellenőrizze és mentse", body: "Tekintse át az oldalakat, majd használja a megjelenítő letöltési vagy nyomtatási gombját." },
  ],
  privacyTitle: "Feldolgozás a böngészőben",
  privacyBody: "A bővítmény helyben hozza létre a PDF-et. A tartalom nem kerül a Page 2 File szervereire, és nincs szükség fiókra.",
  privacyPoints: [
    "A bővítmény csak arról a lapról olvassa a forrástartalmat, amelyen elindítja.",
    "Az ideiglenes PDF az előnézet betöltése után törlődik. Ha soha nem nyitja meg, a két óránál régebbi adatok a bővítmény következő futtatásakor törlődnek.",
    "A webhely elemzése, ha hozzájárulással engedélyezett, elkülönül a bővítmény PDF-feldolgozásától.",
  ],
  guideTitle: "A Page 2 File Chrome-bővítmény használata",
  guideLead: "Ezekkel a lépésekkel PDF-be menthet egy weboldalt, helyi HTML-fájlt vagy támogatott beszélgetést az aktuális lapról.",
  supportedTitle: "Támogatott böngészős csevegések",
  supportedBody: "Külön illesztők támogatják a ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web és Telegram Web szolgáltatást. Más AI-oldalak csak akkor működnek, ha a Page 2 File felismeri az üzenetek szerkezetét.",
  limitsTitle: "Mielőtt elkezdi",
  limits: [
    "A Chrome letiltja a bővítményeket a böngésző beállításainál, a Chrome Web Store-ban és más védett oldalakon.",
    "Nyissa ki a rejtett részeket, és töltse be a szükséges üzeneteket; a lap számára nem elérhető tartalom nem vehető fel.",
    "Az AI / Chat álló tájolást használ, és legfeljebb a legutóbbi 2 000 üzenetet tartalmazhatja.",
    "Helyi HTML esetén a Chrome bővítménybeállításaiban engedélyezni kell a Page 2 File hozzáférését a fájlcímekhez.",
    "Nagyon hosszú oldalak, nem elérhető média vagy export közbeni változások megakadályozhatják a teljes eredményt.",
  ],
  breadcrumbLabel: "Morzsanavigáció",
  homeLabel: "Kezdőlap",
  guideLabel: "Chrome-bővítmény útmutató",
  browseChromeLabel: "Chrome-bővítmények böngészése",
};

const extensionCopy: Record<Locale, ExtensionCopy> = {
  en: englishCopy,
  ru: russianCopy,
  de: germanCopy,
  fr: frenchCopy,
  es: spanishCopy,
  nl: dutchCopy,
  pt: portugueseCopy,
  it: italianCopy,
  pl: polishCopy,
  cs: czechCopy,
  sv: swedishCopy,
  no: norwegianCopy,
  da: danishCopy,
  fi: finnishCopy,
  ro: romanianCopy,
  hu: hungarianCopy,
};

export const getExtensionCopy = (locale: Locale): ExtensionCopy =>
  extensionCopy[locale];
