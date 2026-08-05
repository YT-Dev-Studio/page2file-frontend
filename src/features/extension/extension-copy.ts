import type { Locale } from "@/shared/i18n/locales";

export type GuideStep = {
  number: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  imageHeight?: number;
  imageWidth?: number;
  points?: ReadonlyArray<string>;
};

type GuideChapter = {
  title: string;
  time: string;
};

type GuideArticleLink = {
  slug: string;
  label: string;
};

type ExtensionCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  formatLabel: string;
  stepsTab: string;
  videoTab: string;
  stepLabel: string;
  steps: ReadonlyArray<GuideStep>;
  videoPosterAlt: string;
  chapters: ReadonlyArray<GuideChapter>;
  transcriptTitle: string;
  transcript: ReadonlyArray<string>;
  breadcrumbLabel: string;
  homeLabel: string;
  extensionLabel: string;
  guideLabel: string;
  relatedArticlesLabel: string;
  relatedArticles: ReadonlyArray<GuideArticleLink>;
};

const extensionCopy: Record<Locale, ExtensionCopy> = {
  en: {
    eyebrow: "Extension guide",
    title: "From active tab to reviewed document",
    lead: "Choose a step-by-step walkthrough or an accessible video outline. Both instruction sets are present in the server-rendered page.",
    formatLabel: "Instruction format",
    stepsTab: "Step-by-step",
    videoTab: "Video",
    stepLabel: "STEP",
    steps: [
      {
        number: "01",
        title: "Open the source in your current tab",
        body: "Load the complete webpage or AI conversation. Expand collapsed material and scroll long virtualized chats so the content is present.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "A browser tab prepared for extension export",
      },
      {
        number: "02",
        title: "Configure the export and create a preview",
        body: "Use the Page 2 File panel in this order:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "The original Page 2 File panel with numbered callouts for format, output style, customization, and preview",
        imageCaption:
          "The Notion card identifies the webpage open in the current tab; it is not a separate Page 2 File integration.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Choose PDF for sharing and archiving or PowerPoint for presenting and editing.",
          "Choose Accurate copy to preserve the page appearance or Editable document for supported text and links.",
          "Optionally remove images, links, or styling in Customize.",
          "Select Preview PDF or Preview PowerPoint to open the temporary preview.",
        ],
      },
      {
        number: "03",
        title: "Review sections before download",
        body: "Inspect temporary preview thumbnails, reorder sections with drag or buttons, remove unwanted content and review every fallback warning.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "A temporary section preview with reordering controls",
      },
    ],
    videoPosterAlt:
      "Video poster showing webpage sections flowing into document pages",
    chapters: [
      { title: "Prepare the source", time: "00:00" },
      { title: "Choose format and mode", time: "00:42" },
      { title: "Edit the temporary preview", time: "01:28" },
      { title: "Download and verify", time: "02:14" },
    ],
    transcriptTitle: "Transcript",
    transcript: [
      "Open the page or conversation you want to export and make sure every required section is loaded.",
      "Activate Page 2 File from the toolbar. Choose PDF or PowerPoint, then choose Accurate copy for visual fidelity or Editable document for supported text and links.",
      "Review the temporary section rail. Move, split, merge or remove sections and read the warnings before downloading.",
    ],
    breadcrumbLabel: "Breadcrumbs",
    homeLabel: "Home",
    extensionLabel: "Chrome extension",
    guideLabel: "How to use",
    relatedArticlesLabel: "Related articles",
    relatedArticles: [
      {
        slug: "capture-full-webpage-as-pdf",
        label: "Capture a full webpage as PDF",
      },
      {
        slug: "save-authenticated-webpage-as-pdf",
        label: "Save a webpage behind a login",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Export AI chats privately",
      },
    ],
  },
  ru: {
    eyebrow: "Инструкция по расширению",
    title: "Из активной вкладки — в проверенный документ",
    lead: "Выберите пошаговую инструкцию или доступный текст видео. Оба варианта присутствуют в серверной HTML-разметке страницы.",
    formatLabel: "Формат инструкции",
    stepsTab: "Пошагово",
    videoTab: "Видео",
    stepLabel: "ШАГ",
    steps: [
      {
        number: "01",
        title: "Откройте источник в текущей вкладке",
        body: "Полностью загрузите веб-страницу или AI-диалог. Разверните скрытые блоки и прокрутите длинный виртуализированный чат, чтобы сообщения появились на странице.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Вкладка браузера, подготовленная к экспорту через расширение",
      },
      {
        number: "02",
        title: "Настройте экспорт и создайте предпросмотр",
        body: "Настройте Page 2 File по порядку:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Оригинальная панель Page 2 File с пронумерованными указателями на формат, стиль результата, настройки и предпросмотр",
        imageCaption:
          "Карточка Notion обозначает страницу, открытую в текущей вкладке, а не отдельную интеграцию Page 2 File.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Выберите PDF для передачи и архивирования или PowerPoint для презентации и редактирования.",
          "Выберите Accurate copy для сохранения внешнего вида либо Editable document для поддерживаемого текста и ссылок.",
          "При необходимости удалите изображения, ссылки или стили через Customize.",
          "Нажмите Preview PDF или Preview PowerPoint, чтобы открыть временный предпросмотр.",
        ],
      },
      {
        number: "03",
        title: "Проверьте секции перед скачиванием",
        body: "Просмотрите временные миниатюры, измените порядок секций перетаскиванием или кнопками, удалите лишнее и прочитайте предупреждения о заменах.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Временный предпросмотр секций с кнопками сортировки",
      },
    ],
    videoPosterAlt:
      "Постер видео: секции веб-страницы превращаются в страницы документа",
    chapters: [
      { title: "Подготовка источника", time: "00:00" },
      { title: "Выбор формата и режима", time: "00:42" },
      { title: "Редактирование предпросмотра", time: "01:28" },
      { title: "Скачивание и проверка", time: "02:14" },
    ],
    transcriptTitle: "Расшифровка",
    transcript: [
      "Откройте страницу или диалог для экспорта и убедитесь, что все нужные секции загружены.",
      "Запустите Page 2 File с панели инструментов. Выберите PDF или PowerPoint, затем Accurate copy для точного вида либо Editable document для поддерживаемых текста и ссылок.",
      "Проверьте временную ленту секций. Перемещайте, разделяйте, объединяйте или удаляйте блоки и прочитайте предупреждения перед скачиванием.",
    ],
    breadcrumbLabel: "Хлебные крошки",
    homeLabel: "Главная",
    extensionLabel: "Расширение Chrome",
    guideLabel: "Инструкция",
    relatedArticlesLabel: "Статьи по теме",
    relatedArticles: [
      {
        slug: "capture-full-webpage-as-pdf",
        label: "Как сохранить веб-страницу целиком в PDF",
      },
      {
        slug: "save-authenticated-webpage-as-pdf",
        label: "Как сохранить страницу после входа",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Как экспортировать AI-чаты с учётом приватности",
      },
    ],
  },
  de: {
    eyebrow: "Anleitung zur Erweiterung",
    title: "Vom aktiven Tab zum geprüften Dokument",
    lead: "Wählen Sie eine Schritt-für-Schritt-Anleitung oder eine barrierefreie Videoübersicht. Beide Anleitungen sind in der serverseitig gerenderten Seite enthalten.",
    formatLabel: "Anleitungsformat",
    stepsTab: "Schritt für Schritt",
    videoTab: "Video",
    stepLabel: "SCHRITT",
    steps: [
      {
        number: "01",
        title: "Quelle im aktuellen Tab öffnen",
        body: "Laden Sie die vollständige Webseite oder AI-Unterhaltung. Öffnen Sie eingeklappte Inhalte und scrollen Sie durch lange virtualisierte Chats, damit alle Inhalte vorhanden sind.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Ein für den Export mit der Erweiterung vorbereiteter Browser-Tab",
      },
      {
        number: "02",
        title: "Export konfigurieren und Vorschau erstellen",
        body: "Verwenden Sie das Page 2 File Panel in dieser Reihenfolge:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Das originale Page 2 File Panel mit nummerierten Hinweisen zu Format, Ausgabestil, Anpassungen und Vorschau",
        imageCaption:
          "Die Notion-Karte bezeichnet die im aktuellen Tab geöffnete Webseite und ist keine separate Page 2 File Integration.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Wählen Sie PDF zum Teilen und Archivieren oder PowerPoint zum Präsentieren und Bearbeiten.",
          "Wählen Sie Accurate copy für das ursprüngliche Erscheinungsbild oder Editable document für unterstützten Text und Links.",
          "Entfernen Sie bei Bedarf Bilder, Links oder Formatierungen unter Customize.",
          "Wählen Sie Preview PDF oder Preview PowerPoint, um die temporäre Vorschau zu öffnen.",
        ],
      },
      {
        number: "03",
        title: "Abschnitte vor dem Download prüfen",
        body: "Prüfen Sie die temporären Vorschaubilder, ordnen Sie Abschnitte per Ziehen oder Schaltflächen neu, entfernen Sie unerwünschte Inhalte und lesen Sie alle Warnungen zu Ersetzungen.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Temporäre Abschnittsvorschau mit Steuerelementen zum Sortieren",
      },
    ],
    videoPosterAlt:
      "Videovorschau, in der Webseitenabschnitte zu Dokumentseiten werden",
    chapters: [
      { title: "Quelle vorbereiten", time: "00:00" },
      { title: "Format und Modus wählen", time: "00:42" },
      { title: "Temporäre Vorschau bearbeiten", time: "01:28" },
      { title: "Herunterladen und prüfen", time: "02:14" },
    ],
    transcriptTitle: "Transkript",
    transcript: [
      "Öffnen Sie die zu exportierende Seite oder Unterhaltung und stellen Sie sicher, dass alle benötigten Abschnitte geladen sind.",
      "Aktivieren Sie Page 2 File über die Symbolleiste. Wählen Sie PDF oder PowerPoint und dann Accurate copy für visuelle Treue oder Editable document für unterstützten Text und Links.",
      "Prüfen Sie die temporäre Abschnittsleiste. Verschieben, teilen, verbinden oder entfernen Sie Abschnitte und lesen Sie vor dem Download die Warnungen.",
    ],
    breadcrumbLabel: "Brotkrümelnavigation",
    homeLabel: "Startseite",
    extensionLabel: "Chrome-Erweiterung",
    guideLabel: "Anleitung",
    relatedArticlesLabel: "Verwandte Artikel",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Eine vollständige Webseite als PDF erfassen" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Eine Webseite hinter einer Anmeldung speichern" },
      { slug: "export-ai-chats-privately", label: "AI-Chats privat exportieren" },
    ],
  },
  fr: {
    eyebrow: "Guide de l’extension",
    title: "De l’onglet actif au document vérifié",
    lead: "Choisissez un guide pas à pas ou un aperçu vidéo accessible. Les deux séries d’instructions figurent dans la page rendue côté serveur.",
    formatLabel: "Format des instructions",
    stepsTab: "Pas à pas",
    videoTab: "Vidéo",
    stepLabel: "ÉTAPE",
    steps: [
      {
        number: "01",
        title: "Ouvrez la source dans l’onglet actuel",
        body: "Chargez toute la page web ou la conversation AI. Dépliez les contenus masqués et faites défiler les longues conversations virtualisées afin que leur contenu soit présent.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Un onglet de navigateur préparé pour l’export avec l’extension",
      },
      {
        number: "02",
        title: "Configurez l’export et créez un aperçu",
        body: "Utilisez le panneau Page 2 File dans cet ordre :",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Le panneau Page 2 File original avec des repères numérotés pour le format, le style de sortie, les options et l’aperçu",
        imageCaption:
          "La carte Notion indique la page web ouverte dans l’onglet actuel ; il ne s’agit pas d’une intégration Page 2 File distincte.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Choisissez PDF pour le partage et l’archivage, ou PowerPoint pour la présentation et la modification.",
          "Choisissez Accurate copy pour préserver l’apparence de la page ou Editable document pour le texte et les liens pris en charge.",
          "Vous pouvez supprimer les images, les liens ou les styles dans Customize.",
          "Sélectionnez Preview PDF ou Preview PowerPoint pour ouvrir l’aperçu temporaire.",
        ],
      },
      {
        number: "03",
        title: "Vérifiez les sections avant le téléchargement",
        body: "Examinez les miniatures temporaires, réorganisez les sections par glisser-déposer ou avec les boutons, supprimez le contenu inutile et lisez chaque avertissement de remplacement.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Un aperçu temporaire des sections avec des commandes de réorganisation",
      },
    ],
    videoPosterAlt:
      "Affiche vidéo montrant des sections de page web transformées en pages de document",
    chapters: [
      { title: "Préparer la source", time: "00:00" },
      { title: "Choisir le format et le mode", time: "00:42" },
      { title: "Modifier l’aperçu temporaire", time: "01:28" },
      { title: "Télécharger et vérifier", time: "02:14" },
    ],
    transcriptTitle: "Transcription",
    transcript: [
      "Ouvrez la page ou la conversation à exporter et vérifiez que toutes les sections nécessaires sont chargées.",
      "Activez Page 2 File depuis la barre d’outils. Choisissez PDF ou PowerPoint, puis Accurate copy pour la fidélité visuelle ou Editable document pour le texte et les liens pris en charge.",
      "Vérifiez la liste temporaire des sections. Déplacez, scindez, fusionnez ou supprimez des sections, puis lisez les avertissements avant le téléchargement.",
    ],
    breadcrumbLabel: "Fil d’Ariane",
    homeLabel: "Accueil",
    extensionLabel: "Extension Chrome",
    guideLabel: "Guide d’utilisation",
    relatedArticlesLabel: "Articles associés",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Capturer une page web complète en PDF" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Enregistrer une page web après connexion" },
      { slug: "export-ai-chats-privately", label: "Exporter des conversations AI en toute confidentialité" },
    ],
  },
  es: {
    eyebrow: "Guía de la extensión",
    title: "De la pestaña activa al documento revisado",
    lead:
      "Elija una guía paso a paso o un esquema de vídeo accesible. Ambos conjuntos de instrucciones están presentes en la página renderizada en el servidor.",
    formatLabel: "Formato de las instrucciones",
    stepsTab: "Paso a paso",
    videoTab: "Vídeo",
    stepLabel: "PASO",
    steps: [
      {
        number: "01",
        title: "Abra la fuente en la pestaña actual",
        body:
          "Cargue la página web o la conversación AI completa. Expanda el contenido contraído y desplácese por los chats virtualizados largos para que el contenido esté presente.",
        image: "/demos/extension-step-source.svg",
        imageAlt:
          "Una pestaña del navegador preparada para exportar con la extensión",
      },
      {
        number: "02",
        title: "Configure la exportación y cree una vista previa",
        body: "Use el panel de Page 2 File en este orden:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "El panel original de Page 2 File con indicadores numerados para el formato, el estilo de salida, la personalización y la vista previa",
        imageCaption:
          "La tarjeta de Notion identifica la página web abierta en la pestaña actual; no es una integración independiente de Page 2 File.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Elija PDF para compartir y archivar o PowerPoint para presentar y editar.",
          "Elija Accurate copy para conservar la apariencia de la página o Editable document para el texto y los enlaces compatibles.",
          "Si lo desea, elimine imágenes, enlaces o estilos en Customize.",
          "Seleccione Preview PDF o Preview PowerPoint para abrir la vista previa temporal.",
        ],
      },
      {
        number: "03",
        title: "Revise las secciones antes de descargar",
        body:
          "Examine las miniaturas temporales, reordene las secciones arrastrándolas o con los botones, elimine el contenido no deseado y revise todas las advertencias de sustitución.",
        image: "/demos/extension-step-preview.svg",
        imageAlt:
          "Una vista previa temporal de secciones con controles para reordenar",
      },
    ],
    videoPosterAlt:
      "Cartel de vídeo que muestra secciones de una página web convertidas en páginas de documento",
    chapters: [
      { title: "Preparar la fuente", time: "00:00" },
      { title: "Elegir el formato y el modo", time: "00:42" },
      { title: "Editar la vista previa temporal", time: "01:28" },
      { title: "Descargar y verificar", time: "02:14" },
    ],
    transcriptTitle: "Transcripción",
    transcript: [
      "Abra la página o conversación que desea exportar y compruebe que todas las secciones necesarias estén cargadas.",
      "Active Page 2 File desde la barra de herramientas. Elija PDF o PowerPoint y después Accurate copy para fidelidad visual o Editable document para texto y enlaces compatibles.",
      "Revise la lista temporal de secciones. Mueva, divida, combine o elimine secciones y lea las advertencias antes de descargar.",
    ],
    breadcrumbLabel: "Migas de pan",
    homeLabel: "Inicio",
    extensionLabel: "Extensión de Chrome",
    guideLabel: "Cómo usarla",
    relatedArticlesLabel: "Artículos relacionados",
    relatedArticles: [
      {
        slug: "capture-full-webpage-as-pdf",
        label: "Capturar una página web completa como PDF",
      },
      {
        slug: "save-authenticated-webpage-as-pdf",
        label: "Guardar una página web después de iniciar sesión",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Exportar chats AI de forma privada",
      },
    ],
  },
  nl: {
    eyebrow: "Extensiehandleiding",
    title: "Van actief tabblad naar gecontroleerd document",
    lead:
      "Kies een stapsgewijze handleiding of een toegankelijke video-opzet. Beide instructiesets staan in de door de server gerenderde pagina.",
    formatLabel: "Instructie-indeling",
    stepsTab: "Stap voor stap",
    videoTab: "Video",
    stepLabel: "STAP",
    steps: [
      {
        number: "01",
        title: "Open de bron in uw huidige tabblad",
        body:
          "Laad de volledige webpagina of AI-conversatie. Klap verborgen materiaal uit en blader door lange gevirtualiseerde chats zodat de inhoud aanwezig is.",
        image: "/demos/extension-step-source.svg",
        imageAlt:
          "Een browsertabblad dat is voorbereid voor export met de extensie",
      },
      {
        number: "02",
        title: "Configureer de export en maak een voorbeeld",
        body: "Gebruik het Page 2 File-paneel in deze volgorde:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Het oorspronkelijke Page 2 File-paneel met genummerde aanwijzingen voor indeling, uitvoerstijl, aanpassingen en voorbeeld",
        imageCaption:
          "De Notion-kaart identificeert de webpagina die in het huidige tabblad is geopend; het is geen afzonderlijke Page 2 File-integratie.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Kies PDF voor delen en archiveren of PowerPoint voor presenteren en bewerken.",
          "Kies Accurate copy om de paginaweergave te behouden of Editable document voor ondersteunde tekst en links.",
          "Verwijder desgewenst afbeeldingen, links of opmaak in Customize.",
          "Selecteer Preview PDF of Preview PowerPoint om het tijdelijke voorbeeld te openen.",
        ],
      },
      {
        number: "03",
        title: "Controleer secties vóór het downloaden",
        body:
          "Bekijk de tijdelijke miniaturen, wijzig de volgorde met slepen of knoppen, verwijder ongewenste inhoud en lees alle waarschuwingen over vervangingen.",
        image: "/demos/extension-step-preview.svg",
        imageAlt:
          "Een tijdelijk sectievoorbeeld met bedieningselementen voor herschikking",
      },
    ],
    videoPosterAlt:
      "Videoposter waarop webpaginasecties in documentpagina's veranderen",
    chapters: [
      { title: "De bron voorbereiden", time: "00:00" },
      { title: "Indeling en modus kiezen", time: "00:42" },
      { title: "Het tijdelijke voorbeeld bewerken", time: "01:28" },
      { title: "Downloaden en controleren", time: "02:14" },
    ],
    transcriptTitle: "Transcript",
    transcript: [
      "Open de pagina of conversatie die u wilt exporteren en zorg dat alle vereiste secties zijn geladen.",
      "Activeer Page 2 File via de werkbalk. Kies PDF of PowerPoint en daarna Accurate copy voor visuele nauwkeurigheid of Editable document voor ondersteunde tekst en links.",
      "Controleer de tijdelijke sectielijst. Verplaats, splits, voeg samen of verwijder secties en lees de waarschuwingen vóór het downloaden.",
    ],
    breadcrumbLabel: "Broodkruimels",
    homeLabel: "Startpagina",
    extensionLabel: "Chrome-extensie",
    guideLabel: "Handleiding",
    relatedArticlesLabel: "Gerelateerde artikelen",
    relatedArticles: [
      {
        slug: "capture-full-webpage-as-pdf",
        label: "Een volledige webpagina als PDF vastleggen",
      },
      {
        slug: "save-authenticated-webpage-as-pdf",
        label: "Een webpagina achter een aanmelding opslaan",
      },
      {
        slug: "export-ai-chats-privately",
        label: "AI-chats privé exporteren",
      },
    ],
  },
  pt: {
    eyebrow: "Guia da extensão",
    title: "Do separador ativo ao documento revisto",
    lead:
      "Escolha um guia passo a passo ou um esquema de vídeo acessível. Ambos os conjuntos de instruções estão presentes na página renderizada pelo servidor.",
    formatLabel: "Formato das instruções",
    stepsTab: "Passo a passo",
    videoTab: "Vídeo",
    stepLabel: "PASSO",
    steps: [
      {
        number: "01",
        title: "Abra a origem no separador atual",
        body:
          "Carregue a página web ou a conversa AI completa. Expanda o conteúdo recolhido e percorra conversas virtualizadas longas para que todo o conteúdo esteja presente.",
        image: "/demos/extension-step-source.svg",
        imageAlt:
          "Um separador do navegador preparado para exportação com a extensão",
      },
      {
        number: "02",
        title: "Configure a exportação e crie uma pré-visualização",
        body: "Utilize o painel Page 2 File por esta ordem:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "O painel original do Page 2 File com chamadas numeradas para formato, estilo de saída, personalização e pré-visualização",
        imageCaption:
          "O cartão Notion identifica a página web aberta no separador atual; não é uma integração separada do Page 2 File.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Escolha PDF para partilhar e arquivar ou PowerPoint para apresentar e editar.",
          "Escolha Accurate copy para preservar a aparência da página ou Editable document para texto e ligações compatíveis.",
          "Opcionalmente, remova imagens, ligações ou estilos em Customize.",
          "Selecione Preview PDF ou Preview PowerPoint para abrir a pré-visualização temporária.",
        ],
      },
      {
        number: "03",
        title: "Reveja as secções antes da transferência",
        body:
          "Examine as miniaturas temporárias, reordene as secções por arrasto ou com os botões, remova conteúdo indesejado e leia todos os avisos de substituição.",
        image: "/demos/extension-step-preview.svg",
        imageAlt:
          "Uma pré-visualização temporária de secções com controlos de reordenação",
      },
    ],
    videoPosterAlt:
      "Cartaz de vídeo que mostra secções de uma página web transformadas em páginas de documento",
    chapters: [
      { title: "Preparar a origem", time: "00:00" },
      { title: "Escolher o formato e o modo", time: "00:42" },
      { title: "Editar a pré-visualização temporária", time: "01:28" },
      { title: "Transferir e verificar", time: "02:14" },
    ],
    transcriptTitle: "Transcrição",
    transcript: [
      "Abra a página ou conversa que pretende exportar e confirme que todas as secções necessárias estão carregadas.",
      "Ative o Page 2 File na barra de ferramentas. Escolha PDF ou PowerPoint e depois Accurate copy para fidelidade visual ou Editable document para texto e ligações compatíveis.",
      "Reveja a lista temporária de secções. Mova, divida, combine ou remova secções e leia os avisos antes da transferência.",
    ],
    breadcrumbLabel: "Navegação estrutural",
    homeLabel: "Início",
    extensionLabel: "Extensão do Chrome",
    guideLabel: "Como utilizar",
    relatedArticlesLabel: "Artigos relacionados",
    relatedArticles: [
      {
        slug: "capture-full-webpage-as-pdf",
        label: "Capturar uma página web completa como PDF",
      },
      {
        slug: "save-authenticated-webpage-as-pdf",
        label: "Guardar uma página web após iniciar sessão",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Exportar conversas AI de forma privada",
      },
    ],
  },
  it: {
    eyebrow: "Guida dell’estensione",
    title: "Dalla scheda attiva al documento verificato",
    lead:
      "Scegli una guida dettagliata o una scaletta video accessibile. Entrambi i set di istruzioni sono presenti nella pagina renderizzata dal server.",
    formatLabel: "Formato delle istruzioni",
    stepsTab: "Passo per passo",
    videoTab: "Video",
    stepLabel: "PASSAGGIO",
    steps: [
      {
        number: "01",
        title: "Apri la fonte nella scheda corrente",
        body:
          "Carica la pagina web o la conversazione AI completa. Espandi il contenuto compresso e scorri le chat virtualizzate lunghe affinché tutto il contenuto sia presente.",
        image: "/demos/extension-step-source.svg",
        imageAlt:
          "Una scheda del browser preparata per l’esportazione con l’estensione",
      },
      {
        number: "02",
        title: "Configura l’esportazione e crea un’anteprima",
        body: "Usa il pannello Page 2 File in questo ordine:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Il pannello originale di Page 2 File con indicatori numerati per formato, stile di output, personalizzazione e anteprima",
        imageCaption:
          "La scheda Notion identifica la pagina web aperta nella scheda corrente; non è un’integrazione separata di Page 2 File.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Scegli PDF per condividere e archiviare oppure PowerPoint per presentare e modificare.",
          "Scegli Accurate copy per conservare l’aspetto della pagina oppure Editable document per testo e link supportati.",
          "Se necessario, rimuovi immagini, link o stili in Customize.",
          "Seleziona Preview PDF o Preview PowerPoint per aprire l’anteprima temporanea.",
        ],
      },
      {
        number: "03",
        title: "Verifica le sezioni prima del download",
        body:
          "Esamina le miniature temporanee, riordina le sezioni trascinandole o con i pulsanti, rimuovi i contenuti indesiderati e leggi ogni avviso di sostituzione.",
        image: "/demos/extension-step-preview.svg",
        imageAlt:
          "Un’anteprima temporanea delle sezioni con controlli di riordinamento",
      },
    ],
    videoPosterAlt:
      "Poster video che mostra sezioni di una pagina web trasformate in pagine di documento",
    chapters: [
      { title: "Preparare la fonte", time: "00:00" },
      { title: "Scegliere formato e modalità", time: "00:42" },
      { title: "Modificare l’anteprima temporanea", time: "01:28" },
      { title: "Scaricare e verificare", time: "02:14" },
    ],
    transcriptTitle: "Trascrizione",
    transcript: [
      "Apri la pagina o conversazione da esportare e verifica che tutte le sezioni necessarie siano caricate.",
      "Attiva Page 2 File dalla barra degli strumenti. Scegli PDF o PowerPoint, quindi Accurate copy per la fedeltà visiva o Editable document per testo e link supportati.",
      "Verifica l’elenco temporaneo delle sezioni. Sposta, dividi, unisci o rimuovi le sezioni e leggi gli avvisi prima del download.",
    ],
    breadcrumbLabel: "Percorso di navigazione",
    homeLabel: "Home",
    extensionLabel: "Estensione Chrome",
    guideLabel: "Come si usa",
    relatedArticlesLabel: "Articoli correlati",
    relatedArticles: [
      {
        slug: "capture-full-webpage-as-pdf",
        label: "Acquisire una pagina web completa come PDF",
      },
      {
        slug: "save-authenticated-webpage-as-pdf",
        label: "Salvare una pagina web dopo l’accesso",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Esportare chat AI in modo privato",
      },
    ],
  },
  pl: {
    eyebrow: "Instrukcja rozszerzenia",
    title: "Od aktywnej karty do sprawdzonego dokumentu",
    lead:
      "Wybierz instrukcję krok po kroku lub dostępny opis filmu. Oba zestawy instrukcji znajdują się na stronie renderowanej przez serwer.",
    formatLabel: "Format instrukcji",
    stepsTab: "Krok po kroku",
    videoTab: "Film",
    stepLabel: "KROK",
    steps: [
      {
        number: "01",
        title: "Otwórz źródło w bieżącej karcie",
        body:
          "Wczytaj całą stronę lub rozmowę AI. Rozwiń zwinięte treści i przewiń długie wirtualizowane czaty, aby potrzebna zawartość była obecna.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Karta przeglądarki przygotowana do eksportu rozszerzeniem",
      },
      {
        number: "02",
        title: "Skonfiguruj eksport i utwórz podgląd",
        body: "Użyj panelu Page 2 File w tej kolejności:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Oryginalny panel Page 2 File z ponumerowanymi wskazaniami formatu, stylu wyjściowego, ustawień i podglądu",
        imageCaption:
          "Karta Notion wskazuje stronę otwartą w bieżącej karcie; nie jest osobną integracją Page 2 File.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Wybierz PDF do udostępniania i archiwizacji lub PowerPoint do prezentowania i edycji.",
          "Wybierz Accurate copy, aby zachować wygląd strony, albo Editable document dla obsługiwanego tekstu i łączy.",
          "Opcjonalnie usuń obrazy, łącza lub style w Customize.",
          "Wybierz Preview PDF lub Preview PowerPoint, aby otworzyć tymczasowy podgląd.",
        ],
      },
      {
        number: "03",
        title: "Sprawdź sekcje przed pobraniem",
        body:
          "Obejrzyj tymczasowe miniatury, zmień kolejność sekcji przeciąganiem lub przyciskami, usuń zbędne treści i przeczytaj wszystkie ostrzeżenia o zastąpieniach.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Tymczasowy podgląd sekcji z elementami zmiany kolejności",
      },
    ],
    videoPosterAlt:
      "Plansza filmu pokazująca sekcje strony zamieniane w strony dokumentu",
    chapters: [
      { title: "Przygotuj źródło", time: "00:00" },
      { title: "Wybierz format i tryb", time: "00:42" },
      { title: "Edytuj tymczasowy podgląd", time: "01:28" },
      { title: "Pobierz i sprawdź", time: "02:14" },
    ],
    transcriptTitle: "Transkrypcja",
    transcript: [
      "Otwórz stronę lub rozmowę do eksportu i upewnij się, że wszystkie potrzebne sekcje są wczytane.",
      "Uruchom Page 2 File z paska narzędzi. Wybierz PDF lub PowerPoint, a następnie Accurate copy dla wierności wizualnej albo Editable document dla obsługiwanego tekstu i łączy.",
      "Sprawdź tymczasową listę sekcji. Przenoś, dziel, łącz lub usuwaj sekcje i przeczytaj ostrzeżenia przed pobraniem.",
    ],
    breadcrumbLabel: "Okruszki nawigacyjne",
    homeLabel: "Strona główna",
    extensionLabel: "Rozszerzenie Chrome",
    guideLabel: "Instrukcja obsługi",
    relatedArticlesLabel: "Powiązane artykuły",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Przechwyć całą stronę internetową jako PDF" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Zapisz stronę po zalogowaniu" },
      { slug: "export-ai-chats-privately", label: "Eksportuj czaty AI prywatnie" },
    ],
  },
  cs: {
    eyebrow: "Návod k rozšíření",
    title: "Od aktivní karty ke zkontrolovanému dokumentu",
    lead:
      "Vyberte si podrobný návod nebo přístupnou osnovu videa. Obě sady pokynů jsou součástí stránky vykreslené serverem.",
    formatLabel: "Formát návodu",
    stepsTab: "Krok za krokem",
    videoTab: "Video",
    stepLabel: "KROK",
    steps: [
      {
        number: "01",
        title: "Otevřete zdroj v aktuální kartě",
        body:
          "Načtěte celou webovou stránku nebo AI konverzaci. Rozbalte skrytý obsah a projděte dlouhé virtualizované chaty, aby byl požadovaný obsah přítomen.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Karta prohlížeče připravená k exportu pomocí rozšíření",
      },
      {
        number: "02",
        title: "Nastavte export a vytvořte náhled",
        body: "Použijte panel Page 2 File v tomto pořadí:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Původní panel Page 2 File s očíslovanými ukazateli formátu, stylu výstupu, přizpůsobení a náhledu",
        imageCaption:
          "Karta Notion označuje webovou stránku otevřenou v aktuální kartě; nejde o samostatnou integraci Page 2 File.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Zvolte PDF pro sdílení a archivaci nebo PowerPoint pro prezentaci a úpravy.",
          "Zvolte Accurate copy pro zachování vzhledu stránky nebo Editable document pro podporovaný text a odkazy.",
          "Volitelně odstraňte obrázky, odkazy nebo styly v Customize.",
          "Vyberte Preview PDF nebo Preview PowerPoint a otevřete dočasný náhled.",
        ],
      },
      {
        number: "03",
        title: "Před stažením zkontrolujte části",
        body:
          "Prohlédněte si dočasné miniatury, změňte pořadí částí přetažením nebo tlačítky, odstraňte nepotřebný obsah a přečtěte všechna upozornění na náhrady.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Dočasný náhled částí s ovládáním změny pořadí",
      },
    ],
    videoPosterAlt:
      "Plakát videa zobrazující převod částí webové stránky na stránky dokumentu",
    chapters: [
      { title: "Připravit zdroj", time: "00:00" },
      { title: "Zvolit formát a režim", time: "00:42" },
      { title: "Upravit dočasný náhled", time: "01:28" },
      { title: "Stáhnout a zkontrolovat", time: "02:14" },
    ],
    transcriptTitle: "Přepis",
    transcript: [
      "Otevřete stránku nebo konverzaci k exportu a ověřte, že jsou načteny všechny potřebné části.",
      "Spusťte Page 2 File z panelu nástrojů. Zvolte PDF nebo PowerPoint a poté Accurate copy pro vizuální věrnost nebo Editable document pro podporovaný text a odkazy.",
      "Zkontrolujte dočasný seznam částí. Přesouvejte, rozdělujte, slučujte nebo odstraňujte části a před stažením si přečtěte upozornění.",
    ],
    breadcrumbLabel: "Drobečková navigace",
    homeLabel: "Domů",
    extensionLabel: "Rozšíření Chrome",
    guideLabel: "Návod k použití",
    relatedArticlesLabel: "Související články",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Zachytit celou webovou stránku jako PDF" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Uložit stránku po přihlášení" },
      { slug: "export-ai-chats-privately", label: "Exportovat AI chaty soukromě" },
    ],
  },
  sv: {
    eyebrow: "Guide för tillägget",
    title: "Från aktiv flik till granskat dokument",
    lead:
      "Välj en stegvis guide eller en tillgänglig videoöversikt. Båda instruktionerna finns på den serverrenderade sidan.",
    formatLabel: "Instruktionsformat",
    stepsTab: "Steg för steg",
    videoTab: "Video",
    stepLabel: "STEG",
    steps: [
      {
        number: "01",
        title: "Öppna källan i den aktuella fliken",
        body:
          "Läs in hela webbsidan eller AI-konversationen. Fäll ut dolt innehåll och rulla igenom långa virtualiserade chattar så att innehållet finns med.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "En webbläsarflik förberedd för export med tillägget",
      },
      {
        number: "02",
        title: "Konfigurera exporten och skapa en förhandsgranskning",
        body: "Använd panelen Page 2 File i den här ordningen:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Den ursprungliga Page 2 File-panelen med numrerade markeringar för format, utdatastil, anpassning och förhandsgranskning",
        imageCaption:
          "Notion-kortet identifierar webbsidan som är öppen i den aktuella fliken; det är inte en separat Page 2 File-integration.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Välj PDF för delning och arkivering eller PowerPoint för presentation och redigering.",
          "Välj Accurate copy för att bevara sidans utseende eller Editable document för text och länkar som stöds.",
          "Ta vid behov bort bilder, länkar eller formatering under Customize.",
          "Välj Preview PDF eller Preview PowerPoint för att öppna den tillfälliga förhandsgranskningen.",
        ],
      },
      {
        number: "03",
        title: "Granska avsnitten före hämtning",
        body:
          "Kontrollera de tillfälliga miniatyrerna, ändra ordningen genom att dra eller använda knapparna, ta bort onödigt innehåll och läs alla varningar om ersättningar.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "En tillfällig avsnittsförhandsgranskning med kontroller för ordning",
      },
    ],
    videoPosterAlt:
      "Videoaffisch som visar webbsidans avsnitt omvandlade till dokumentsidor",
    chapters: [
      { title: "Förbered källan", time: "00:00" },
      { title: "Välj format och läge", time: "00:42" },
      { title: "Redigera den tillfälliga förhandsgranskningen", time: "01:28" },
      { title: "Hämta och kontrollera", time: "02:14" },
    ],
    transcriptTitle: "Transkribering",
    transcript: [
      "Öppna sidan eller konversationen som ska exporteras och kontrollera att alla nödvändiga avsnitt är inlästa.",
      "Starta Page 2 File från verktygsfältet. Välj PDF eller PowerPoint och sedan Accurate copy för visuell trohet eller Editable document för text och länkar som stöds.",
      "Granska den tillfälliga avsnittslistan. Flytta, dela, slå samman eller ta bort avsnitt och läs varningarna före hämtning.",
    ],
    breadcrumbLabel: "Brödsmulor",
    homeLabel: "Startsida",
    extensionLabel: "Chrome-tillägg",
    guideLabel: "Användarguide",
    relatedArticlesLabel: "Relaterade artiklar",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Fånga en hel webbsida som PDF" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Spara en webbsida efter inloggning" },
      { slug: "export-ai-chats-privately", label: "Exportera AI-chattar privat" },
    ],
  },
  no: {
    eyebrow: "Veiledning for utvidelsen",
    title: "Fra aktiv fane til kontrollert dokument",
    lead:
      "Velg en trinnvis veiledning eller en tilgjengelig videooversikt. Begge instruksjonssettene finnes på den servergjengitte siden.",
    formatLabel: "Instruksjonsformat",
    stepsTab: "Trinn for trinn",
    videoTab: "Video",
    stepLabel: "TRINN",
    steps: [
      {
        number: "01",
        title: "Åpne kilden i gjeldende fane",
        body:
          "Last inn hele nettsiden eller AI-samtalen. Utvid skjult innhold og rull gjennom lange virtualiserte chatter slik at innholdet er til stede.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "En nettleserfane klargjort for eksport med utvidelsen",
      },
      {
        number: "02",
        title: "Konfigurer eksporten og opprett en forhåndsvisning",
        body: "Bruk Page 2 File-panelet i denne rekkefølgen:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Det opprinnelige Page 2 File-panelet med nummererte markeringer for format, utdatastil, tilpasning og forhåndsvisning",
        imageCaption:
          "Notion-kortet identifiserer nettsiden som er åpen i gjeldende fane; det er ikke en egen Page 2 File-integrasjon.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Velg PDF for deling og arkivering eller PowerPoint for presentasjon og redigering.",
          "Velg Accurate copy for å bevare sidens utseende eller Editable document for støttet tekst og lenker.",
          "Fjern eventuelt bilder, lenker eller formatering under Customize.",
          "Velg Preview PDF eller Preview PowerPoint for å åpne den midlertidige forhåndsvisningen.",
        ],
      },
      {
        number: "03",
        title: "Kontroller delene før nedlasting",
        body:
          "Se gjennom midlertidige miniatyrbilder, endre rekkefølgen ved å dra eller bruke knappene, fjern unødvendig innhold og les alle varsler om erstatninger.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "En midlertidig forhåndsvisning av deler med kontroller for rekkefølge",
      },
    ],
    videoPosterAlt:
      "Videoplakat som viser nettsidedeler omgjort til dokumentsider",
    chapters: [
      { title: "Forbered kilden", time: "00:00" },
      { title: "Velg format og modus", time: "00:42" },
      { title: "Rediger den midlertidige forhåndsvisningen", time: "01:28" },
      { title: "Last ned og kontroller", time: "02:14" },
    ],
    transcriptTitle: "Transkripsjon",
    transcript: [
      "Åpne siden eller samtalen som skal eksporteres, og kontroller at alle nødvendige deler er lastet inn.",
      "Start Page 2 File fra verktøylinjen. Velg PDF eller PowerPoint og deretter Accurate copy for visuell trohet eller Editable document for støttet tekst og lenker.",
      "Kontroller den midlertidige listen over deler. Flytt, del, slå sammen eller fjern deler, og les varslene før nedlasting.",
    ],
    breadcrumbLabel: "Brødsmuler",
    homeLabel: "Startside",
    extensionLabel: "Chrome-utvidelse",
    guideLabel: "Brukerveiledning",
    relatedArticlesLabel: "Relaterte artikler",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Fang en hel nettside som PDF" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Lagre en nettside etter pålogging" },
      { slug: "export-ai-chats-privately", label: "Eksporter AI-chatter privat" },
    ],
  },
  da: {
    eyebrow: "Vejledning til udvidelsen",
    title: "Fra aktiv fane til kontrolleret dokument",
    lead:
      "Vælg en trin-for-trin-vejledning eller en tilgængelig videooversigt. Begge instruktionssæt findes på den servergengivne side.",
    formatLabel: "Instruktionsformat",
    stepsTab: "Trin for trin",
    videoTab: "Video",
    stepLabel: "TRIN",
    steps: [
      {
        number: "01",
        title: "Åbn kilden i den aktuelle fane",
        body:
          "Indlæs hele websiden eller AI-samtalen. Udvid skjult indhold, og rul gennem lange virtualiserede chats, så indholdet er til stede.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "En browserfane klargjort til eksport med udvidelsen",
      },
      {
        number: "02",
        title: "Konfigurér eksporten, og opret en forhåndsvisning",
        body: "Brug Page 2 File-panelet i denne rækkefølge:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Det oprindelige Page 2 File-panel med nummererede markeringer for format, outputstil, tilpasning og forhåndsvisning",
        imageCaption:
          "Notion-kortet identificerer den webside, der er åben i den aktuelle fane; det er ikke en særskilt Page 2 File-integration.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Vælg PDF til deling og arkivering eller PowerPoint til præsentation og redigering.",
          "Vælg Accurate copy for at bevare sidens udseende eller Editable document for understøttet tekst og links.",
          "Fjern om nødvendigt billeder, links eller formatering under Customize.",
          "Vælg Preview PDF eller Preview PowerPoint for at åbne den midlertidige forhåndsvisning.",
        ],
      },
      {
        number: "03",
        title: "Kontrollér afsnittene før download",
        body:
          "Gennemgå midlertidige miniaturebilleder, skift rækkefølgen ved at trække eller bruge knapperne, fjern unødvendigt indhold, og læs alle advarsler om erstatninger.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "En midlertidig forhåndsvisning af afsnit med knapper til rækkefølge",
      },
    ],
    videoPosterAlt:
      "Videoplakat, der viser websideafsnit omdannet til dokumentsider",
    chapters: [
      { title: "Forbered kilden", time: "00:00" },
      { title: "Vælg format og tilstand", time: "00:42" },
      { title: "Redigér den midlertidige forhåndsvisning", time: "01:28" },
      { title: "Download og kontrollér", time: "02:14" },
    ],
    transcriptTitle: "Transskription",
    transcript: [
      "Åbn den side eller samtale, der skal eksporteres, og kontrollér, at alle nødvendige afsnit er indlæst.",
      "Start Page 2 File fra værktøjslinjen. Vælg PDF eller PowerPoint og derefter Accurate copy for visuel nøjagtighed eller Editable document for understøttet tekst og links.",
      "Kontrollér den midlertidige liste over afsnit. Flyt, opdel, flet eller fjern afsnit, og læs advarslerne før download.",
    ],
    breadcrumbLabel: "Brødkrummer",
    homeLabel: "Startside",
    extensionLabel: "Chrome-udvidelse",
    guideLabel: "Brugervejledning",
    relatedArticlesLabel: "Relaterede artikler",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Gem en hel webside som PDF" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Gem en webside efter login" },
      { slug: "export-ai-chats-privately", label: "Eksportér AI-chats privat" },
    ],
  },
  fi: {
    eyebrow: "Laajennuksen opas",
    title: "Aktiivisesta välilehdestä tarkistetuksi asiakirjaksi",
    lead:
      "Valitse vaiheittainen opas tai saavutettava videoyhteenveto. Molemmat ohjeet ovat saatavilla palvelimella renderöidyllä sivulla.",
    formatLabel: "Ohjeen muoto",
    stepsTab: "Vaihe vaiheelta",
    videoTab: "Video",
    stepLabel: "VAIHE",
    steps: [
      {
        number: "01",
        title: "Avaa lähde nykyisellä välilehdellä",
        body:
          "Lataa koko verkkosivu tai AI-keskustelu. Avaa piilotettu sisältö ja selaa pitkät virtualisoidut keskustelut läpi, jotta sisältö on mukana.",
        image: "/demos/extension-step-source.svg",
        imageAlt: "Laajennuksella vientiä varten valmisteltu selainvälilehti",
      },
      {
        number: "02",
        title: "Määritä vienti ja luo esikatselu",
        body: "Käytä Page 2 File -paneelia tässä järjestyksessä:",
        image: "/demos/extension-step-mode.svg",
        imageAlt:
          "Alkuperäinen Page 2 File -paneeli, jossa numeroidut merkinnät osoittavat muodon, tulostyylin, mukautuksen ja esikatselun",
        imageCaption:
          "Notion-kortti ilmaisee nykyisellä välilehdellä avoinna olevan verkkosivun; se ei ole erillinen Page 2 File -integraatio.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Valitse PDF jakamista ja arkistointia varten tai PowerPoint esittämistä ja muokkaamista varten.",
          "Valitse Accurate copy sivun ulkoasun säilyttämiseksi tai Editable document tuetulle tekstille ja linkeille.",
          "Poista tarvittaessa kuvat, linkit tai muotoilut Customize-kohdassa.",
          "Avaa väliaikainen esikatselu valitsemalla Preview PDF tai Preview PowerPoint.",
        ],
      },
      {
        number: "03",
        title: "Tarkista osiot ennen lataamista",
        body:
          "Tarkista väliaikaiset pienoiskuvat, muuta järjestystä vetämällä tai painikkeilla, poista tarpeeton sisältö ja lue kaikki korvauksia koskevat varoitukset.",
        image: "/demos/extension-step-preview.svg",
        imageAlt: "Väliaikainen osioiden esikatselu järjestyksen hallintapainikkeilla",
      },
    ],
    videoPosterAlt:
      "Videojuliste, jossa verkkosivun osiot muuttuvat asiakirjan sivuiksi",
    chapters: [
      { title: "Valmistele lähde", time: "00:00" },
      { title: "Valitse muoto ja tila", time: "00:42" },
      { title: "Muokkaa väliaikaista esikatselua", time: "01:28" },
      { title: "Lataa ja tarkista", time: "02:14" },
    ],
    transcriptTitle: "Tekstiversio",
    transcript: [
      "Avaa vietävä sivu tai keskustelu ja tarkista, että kaikki tarvittavat osiot ovat latautuneet.",
      "Käynnistä Page 2 File työkalupalkista. Valitse PDF tai PowerPoint ja sitten Accurate copy visuaalista tarkkuutta varten tai Editable document tuettua tekstiä ja linkkejä varten.",
      "Tarkista väliaikainen osioluettelo. Siirrä, jaa, yhdistä tai poista osioita ja lue varoitukset ennen lataamista.",
    ],
    breadcrumbLabel: "Murupolku",
    homeLabel: "Etusivu",
    extensionLabel: "Chrome-laajennus",
    guideLabel: "Käyttöopas",
    relatedArticlesLabel: "Aiheeseen liittyvät artikkelit",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Tallenna koko verkkosivu PDF-tiedostoksi" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Tallenna verkkosivu kirjautumisen jälkeen" },
      { slug: "export-ai-chats-privately", label: "Vie AI-keskustelut yksityisesti" },
    ],
  },
  ro: {
    eyebrow: "Ghidul extensiei",
    title: "De la fila activă la un document verificat",
    lead: "Alegeți ghidul pas cu pas sau prezentarea video accesibilă. Ambele seturi de instrucțiuni se află pe pagina randată pe server.",
    formatLabel: "Formatul instrucțiunilor",
    stepsTab: "Pas cu pas",
    videoTab: "Video",
    stepLabel: "PASUL",
    steps: [
      { number: "01", title: "Deschideți sursa în fila curentă", body: "Încărcați întreaga pagină web sau conversație AI. Extindeți conținutul ascuns și derulați conversațiile virtualizate lungi pentru ca tot conținutul să fie prezent.", image: "/demos/extension-step-source.svg", imageAlt: "O filă de browser pregătită pentru export cu extensia" },
      {
        number: "02",
        title: "Configurați exportul și creați o previzualizare",
        body: "Folosiți panoul Page 2 File în această ordine:",
        image: "/demos/extension-step-mode.svg",
        imageAlt: "Panoul original Page 2 File cu marcaje numerotate pentru format, stilul ieșirii, personalizare și previzualizare",
        imageCaption: "Cardul Notion identifică pagina web deschisă în fila curentă; nu este o integrare Page 2 File separată.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Alegeți PDF pentru partajare și arhivare sau PowerPoint pentru prezentare și editare.",
          "Alegeți Accurate copy pentru a păstra aspectul paginii sau Editable document pentru textul și linkurile acceptate.",
          "Eliminați opțional imaginile, linkurile sau formatarea din Customize.",
          "Alegeți Preview PDF sau Preview PowerPoint pentru a deschide previzualizarea temporară.",
        ],
      },
      { number: "03", title: "Verificați secțiunile înainte de descărcare", body: "Examinați miniaturile temporare, schimbați ordinea prin glisare sau cu butoanele, eliminați conținutul inutil și citiți toate avertismentele despre înlocuiri.", image: "/demos/extension-step-preview.svg", imageAlt: "O previzualizare temporară a secțiunilor cu controale pentru ordine" },
    ],
    videoPosterAlt: "Poster video care arată secțiuni ale paginii transformate în pagini de document",
    chapters: [
      { title: "Pregătiți sursa", time: "00:00" },
      { title: "Alegeți formatul și modul", time: "00:42" },
      { title: "Editați previzualizarea temporară", time: "01:28" },
      { title: "Descărcați și verificați", time: "02:14" },
    ],
    transcriptTitle: "Transcriere",
    transcript: [
      "Deschideți pagina sau conversația de exportat și verificați dacă toate secțiunile necesare sunt încărcate.",
      "Porniți Page 2 File din bara de instrumente. Alegeți PDF sau PowerPoint, apoi Accurate copy pentru fidelitate vizuală sau Editable document pentru textul și linkurile acceptate.",
      "Verificați lista temporară de secțiuni. Mutați, divizați, îmbinați sau eliminați secțiuni și citiți avertismentele înainte de descărcare.",
    ],
    breadcrumbLabel: "Traseu de navigare",
    homeLabel: "Pagina principală",
    extensionLabel: "Extensie Chrome",
    guideLabel: "Ghid de utilizare",
    relatedArticlesLabel: "Articole asociate",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Capturați o pagină web completă ca PDF" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Salvați o pagină web după autentificare" },
      { slug: "export-ai-chats-privately", label: "Exportați conversații AI în mod privat" },
    ],
  },
  hu: {
    eyebrow: "Bővítmény útmutató",
    title: "Az aktív laptól az ellenőrzött dokumentumig",
    lead: "Válassza a lépésenkénti útmutatót vagy az akadálymentes videó-összefoglalót. Mindkét útmutató megtalálható a szerveren renderelt oldalon.",
    formatLabel: "Útmutató formátuma",
    stepsTab: "Lépésről lépésre",
    videoTab: "Videó",
    stepLabel: "LÉPÉS",
    steps: [
      { number: "01", title: "Nyissa meg a forrást az aktuális lapon", body: "Töltse be a teljes weboldalt vagy AI-beszélgetést. Nyissa ki a rejtett tartalmat, és görgessen végig a hosszú virtualizált csevegéseken, hogy a tartalom jelen legyen.", image: "/demos/extension-step-source.svg", imageAlt: "Bővítményes exportálásra előkészített böngészőlap" },
      {
        number: "02",
        title: "Állítsa be az exportálást és hozzon létre előnézetet",
        body: "Használja a Page 2 File panelt ebben a sorrendben:",
        image: "/demos/extension-step-mode.svg",
        imageAlt: "Az eredeti Page 2 File panel számozott jelölésekkel a formátumhoz, kimeneti stílushoz, testreszabáshoz és előnézethez",
        imageCaption: "A Notion-kártya az aktuális lapon megnyitott weboldalt azonosítja; nem külön Page 2 File-integráció.",
        imageHeight: 900,
        imageWidth: 900,
        points: [
          "Válassza a PDF-et megosztáshoz és archiváláshoz, vagy a PowerPointot bemutatáshoz és szerkesztéshez.",
          "Válassza az Accurate copy módot az oldal megjelenésének megőrzéséhez, vagy az Editable document módot a támogatott szöveghez és hivatkozásokhoz.",
          "Szükség esetén távolítsa el a képeket, hivatkozásokat vagy formázást a Customize részben.",
          "Az ideiglenes előnézet megnyitásához válassza a Preview PDF vagy Preview PowerPoint lehetőséget.",
        ],
      },
      { number: "03", title: "Letöltés előtt ellenőrizze a szakaszokat", body: "Tekintse át az ideiglenes bélyegképeket, módosítsa a sorrendet húzással vagy a gombokkal, távolítsa el a felesleges tartalmat, és olvassa el a helyettesítésekről szóló figyelmeztetéseket.", image: "/demos/extension-step-preview.svg", imageAlt: "Szakaszok ideiglenes előnézete sorrendvezérlőkkel" },
    ],
    videoPosterAlt: "Videóposzter, amely a weboldalszakaszok dokumentumoldalakká alakítását mutatja",
    chapters: [
      { title: "A forrás előkészítése", time: "00:00" },
      { title: "Formátum és mód kiválasztása", time: "00:42" },
      { title: "Ideiglenes előnézet szerkesztése", time: "01:28" },
      { title: "Letöltés és ellenőrzés", time: "02:14" },
    ],
    transcriptTitle: "Átirat",
    transcript: [
      "Nyissa meg az exportálandó oldalt vagy beszélgetést, és ellenőrizze, hogy minden szükséges szakasz betöltődött.",
      "Indítsa el a Page 2 File-t az eszköztárról. Válassza a PDF-et vagy a PowerPointot, majd az Accurate copy módot a vizuális hűséghez vagy az Editable document módot a támogatott szöveghez és hivatkozásokhoz.",
      "Ellenőrizze az ideiglenes szakaszlistát. Mozgassa, ossza fel, egyesítse vagy távolítsa el a szakaszokat, és letöltés előtt olvassa el a figyelmeztetéseket.",
    ],
    breadcrumbLabel: "Morzsamenü",
    homeLabel: "Kezdőlap",
    extensionLabel: "Chrome-bővítmény",
    guideLabel: "Felhasználói útmutató",
    relatedArticlesLabel: "Kapcsolódó cikkek",
    relatedArticles: [
      { slug: "capture-full-webpage-as-pdf", label: "Teljes weboldal mentése PDF-ként" },
      { slug: "save-authenticated-webpage-as-pdf", label: "Bejelentkezés utáni weboldal mentése" },
      { slug: "export-ai-chats-privately", label: "AI-csevegések privát exportálása" },
    ],
  },
};

export const getExtensionCopy = (locale: Locale): ExtensionCopy =>
  extensionCopy[locale];
