const createScene = (en, ru, overrides = {}) => {
  const { arrow, pageTarget = "primary", ...sceneOverrides } = overrides;
  return {
    en,
    ru,
    sourceMode: "current",
    format: "pdf",
    style: "accurate",
    conceptual: false,
    outcome: "source",
    ...sceneOverrides,
    callout:
      arrow === undefined
        ? { surface: "page", target: pageTarget }
        : { surface: "popup", target: arrow },
  };
};

const article = ({
  slug,
  kind,
  title,
  domain,
  accent,
  steps,
}) => ({
  slug,
  kind,
  title,
  domain,
  accent,
  steps: steps.map((step, index) => ({
    ...step,
    number: index + 1,
  })),
});

export const instructionArticles = [
  article({
    slug: "save-webpage-as-pdf",
    kind: "article",
    title: "Field Notes: Designing Clear Product Pages",
    domain: "journal.example",
    accent: "#2f7df4",
    steps: [
      createScene(
        "Open the webpage and load the article, images, and references you need.",
        "Откройте веб-страницу и загрузите нужную статью, изображения и ссылки.",
        { outcome: "prepared" },
      ),
      createScene(
        "For a public page, choose By URL and paste the complete HTTPS address.",
        "Для открытой страницы выберите By URL и вставьте полный HTTPS-адрес.",
        { sourceMode: "url", arrow: "by-url" },
      ),
      createScene(
        "Choose PDF as the output format.",
        "Выберите PDF в качестве формата результата.",
        { sourceMode: "url", arrow: "pdf" },
      ),
      createScene(
        "Choose Accurate copy for appearance or Editable document for supported text and links.",
        "Выберите Accurate copy для точного вида или Editable document для текста и ссылок.",
        { sourceMode: "url", style: "editable", arrow: "editable" },
      ),
      createScene(
        "Select Preview PDF and inspect the generated pages before download.",
        "Нажмите Preview PDF и проверьте созданные страницы до скачивания.",
        { sourceMode: "url", style: "editable", arrow: "preview", outcome: "pdf-pages" },
      ),
    ],
  }),
  article({
    slug: "why-print-to-pdf-breaks",
    kind: "dashboard",
    title: "Quarterly Operations Dashboard",
    domain: "dashboard.example",
    accent: "#6b5be7",
    steps: [
      createScene(
        "Open browser Print Preview and note which dashboard regions disappear.",
        "Откройте предпросмотр печати браузера и отметьте исчезнувшие области dashboard.",
        { outcome: "print-preview" },
      ),
      createScene(
        "Compare the print result with the screen and identify missing charts and backgrounds.",
        "Сравните печать с экраном и найдите потерянные графики и фоны.",
        { outcome: "print-loss" },
      ),
      createScene(
        "Use By URL for the same public page when no signed-in state is required.",
        "Используйте By URL для той же открытой страницы без авторизации.",
        { sourceMode: "url", arrow: "by-url" },
      ),
      createScene(
        "Choose Accurate copy when the displayed composition is the evidence.",
        "Выберите Accurate copy, когда важна отображаемая композиция.",
        { sourceMode: "url", arrow: "accurate" },
      ),
      createScene(
        "Choose Editable document when reading order, selection, and links matter.",
        "Выберите Editable document, когда важны порядок чтения, выделение и ссылки.",
        { sourceMode: "url", style: "editable", arrow: "editable" },
      ),
      createScene(
        "Compare both Page 2 File previews with browser Print before deciding.",
        "Сравните оба предпросмотра Page 2 File с печатью браузера.",
        { sourceMode: "url", arrow: "preview", outcome: "comparison" },
      ),
    ],
  }),
  article({
    slug: "capture-full-webpage-as-pdf",
    kind: "long-article",
    title: "Complete Research Report",
    domain: "research.example",
    accent: "#167d6b",
    steps: [
      createScene(
        "Load the full scrolling page and define a clear beginning and end.",
        "Загрузите длинную страницу и определите точное начало и окончание.",
        { outcome: "long-range" },
      ),
      createScene(
        "Expand required sections and trigger lazy-loaded content before capture.",
        "Раскройте нужные секции и загрузите отложенный контент до захвата.",
        { outcome: "lazy-loaded" },
      ),
      createScene(
        "Choose Current tab so the popup uses the page already open in the browser.",
        "Выберите Current tab, чтобы использовать уже открытую страницу.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF and the output style that matches the review goal.",
        "Выберите PDF и подходящий для проверки output style.",
        { arrow: "pdf" },
      ),
      createScene(
        "Preview the complete range and verify the first, last, and boundary sections.",
        "Проверьте в preview начало, окончание и границы всех секций.",
        { arrow: "preview", outcome: "full-preview" },
      ),
    ],
  }),
  article({
    slug: "long-webpage-page-breaks",
    kind: "long-article",
    title: "Annual Sustainability Review",
    domain: "reports.example",
    accent: "#0d8f72",
    steps: [
      createScene(
        "Map the long article into headings, figures, tables, and protected content units.",
        "Разделите длинную статью на заголовки, рисунки, таблицы и цельные блоки.",
        { outcome: "section-map" },
      ),
      createScene(
        "Scroll deliberately until lazy sections remain loaded.",
        "Прокрутите страницу, пока отложенные секции не останутся загруженными.",
        { outcome: "lazy-loaded" },
      ),
      createScene(
        "Choose PDF with Accurate copy when the original layout must remain intact.",
        "Выберите PDF и Accurate copy, если нужно сохранить исходный макет.",
        { arrow: "accurate" },
      ),
      createScene(
        "Open Preview PDF and inspect headings, tables, and captions at page boundaries.",
        "Откройте Preview PDF и проверьте заголовки, таблицы и подписи у разрывов.",
        { arrow: "preview", outcome: "broken-breaks" },
      ),
      createScene(
        "Return to the source, adjust one condition, and confirm corrected page breaks.",
        "Вернитесь к источнику, измените одно условие и проверьте исправленные разрывы.",
        { outcome: "fixed-breaks" },
      ),
    ],
  }),
  article({
    slug: "preserve-clickable-links",
    kind: "docs",
    title: "Developer Documentation",
    domain: "docs.example",
    accent: "#2956b2",
    steps: [
      createScene(
        "Open documentation with meaningful visible links and known destinations.",
        "Откройте документацию с понятными видимыми ссылками и известными адресами.",
        { outcome: "links" },
      ),
      createScene(
        "Choose PDF for a stable reading document.",
        "Выберите PDF для стабильного документа для чтения.",
        { arrow: "pdf" },
      ),
      createScene(
        "Choose Editable document to preserve supported safe link targets.",
        "Выберите Editable document для сохранения поддерживаемых безопасных ссылок.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Keep Remove links unchecked when destinations must remain available.",
        "Оставьте Remove links выключенным, если адреса должны сохраниться.",
        { style: "editable", arrow: "remove-links" },
      ),
      createScene(
        "Preview the PDF and test representative saved and intentionally removed links.",
        "Проверьте в PDF сохранённые и намеренно удалённые ссылки.",
        { style: "editable", arrow: "preview", outcome: "link-audit" },
      ),
    ],
  }),
  article({
    slug: "visual-vs-editable",
    kind: "landing",
    title: "Studio Product Launch",
    domain: "studio.example",
    accent: "#e34c67",
    steps: [
      createScene(
        "Open a page with layered layout, typography, images, and calls to action.",
        "Откройте страницу со сложным макетом, типографикой, изображениями и CTA.",
        { outcome: "complex-layout" },
      ),
      createScene(
        "Choose Accurate copy to preserve the rendered composition.",
        "Выберите Accurate copy для сохранения отображаемой композиции.",
        { arrow: "accurate" },
      ),
      createScene(
        "Choose Editable document when supported content must be selected or revised.",
        "Выберите Editable document, если поддерживаемый контент нужно выделять или менять.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Compare visual fidelity, selectable text, links, and complex fallbacks.",
        "Сравните визуальную точность, выделяемый текст, ссылки и сложные замены.",
        { style: "editable", outcome: "comparison" },
      ),
      createScene(
        "Select the result that matches the reader's actual task.",
        "Выберите результат, который соответствует реальной задаче читателя.",
        { outcome: "decision" },
      ),
    ],
  }),
  article({
    slug: "html-to-pdf-safely",
    kind: "html",
    title: "Rendered HTML Reference",
    domain: "preview.example",
    accent: "#e85b34",
    steps: [
      createScene(
        "Render the HTML as a browser page before treating it as a document source.",
        "Сначала отрисуйте HTML как браузерную страницу.",
        { outcome: "html-rendered" },
      ),
      createScene(
        "Use Current tab for rendered local content or By URL for an allowed public page.",
        "Используйте Current tab для открытого HTML или By URL для разрешённой публичной страницы.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF and an output style after the page is visibly stable.",
        "После стабилизации страницы выберите PDF и output style.",
        { arrow: "pdf" },
      ),
      createScene(
        "Treat script, network, and file access as a separate renderer security boundary.",
        "Считайте доступ скриптов, сети и файлов отдельной границей безопасности renderer.",
        { conceptual: true, outcome: "sandbox" },
      ),
      createScene(
        "Review the fixed PDF pages and record missing or blocked dependencies.",
        "Проверьте страницы PDF и зафиксируйте отсутствующие или заблокированные зависимости.",
        { arrow: "preview", outcome: "pdf-pages" },
      ),
    ],
  }),
  article({
    slug: "multi-page-website-to-pdf",
    kind: "site-map",
    title: "Product Documentation",
    domain: "docs.example",
    accent: "#2d68c4",
    steps: [
      createScene(
        "Build a bounded inventory of the website pages that belong to the job.",
        "Составьте ограниченный список страниц сайта для задачи.",
        { outcome: "site-map" },
      ),
      createScene(
        "Open the first approved page with By URL.",
        "Откройте первую разрешённую страницу через By URL.",
        { sourceMode: "url", arrow: "by-url" },
      ),
      createScene(
        "Choose PDF and one consistent output policy.",
        "Выберите PDF и единую политику результата.",
        { sourceMode: "url", arrow: "pdf" },
      ),
      createScene(
        "Repeat the same one-page conversion for each approved address.",
        "Повторите конвертацию одной страницы для каждого разрешённого адреса.",
        { sourceMode: "url", outcome: "sequence" },
      ),
      createScene(
        "Keep the resulting PDFs separate and name them from their source paths.",
        "Храните PDF отдельно и называйте их по исходным путям.",
        { outcome: "separate-files" },
      ),
      createScene(
        "Reconcile the files with a manifest and record exclusions or failures.",
        "Сверьте файлы с manifest и запишите исключения или ошибки.",
        { conceptual: true, outcome: "manifest" },
      ),
    ],
  }),
  article({
    slug: "webpage-to-powerpoint",
    kind: "report",
    title: "Product Strategy Report",
    domain: "strategy.example",
    accent: "#ef7f22",
    steps: [
      createScene(
        "Identify the page hierarchy and the story that belongs in the deck.",
        "Определите иерархию страницы и историю для презентации.",
        { outcome: "section-map" },
      ),
      createScene(
        "Choose PowerPoint as the output format.",
        "Выберите PowerPoint в качестве формата результата.",
        { format: "pptx", arrow: "powerpoint" },
      ),
      createScene(
        "Choose Accurate copy or Editable document for the presentation task.",
        "Выберите Accurate copy или Editable document для задачи презентации.",
        { format: "pptx", style: "editable", arrow: "editable" },
      ),
      createScene(
        "Select Preview PowerPoint and inspect every proposed slide boundary.",
        "Нажмите Preview PowerPoint и проверьте границы каждого слайда.",
        { format: "pptx", style: "editable", arrow: "preview", outcome: "slides" },
      ),
      createScene(
        "Open the 16:9 deck and verify type, links, image quality, and object bounds.",
        "Откройте презентацию 16:9 и проверьте текст, ссылки, изображения и границы объектов.",
        { format: "pptx", outcome: "ppt-result" },
      ),
    ],
  }),
  article({
    slug: "website-to-powerpoint",
    kind: "site-map",
    title: "Company Resource Center",
    domain: "resources.example",
    accent: "#ed7a24",
    steps: [
      createScene(
        "Inventory only the accessible website pages needed for the presentation collection.",
        "Составьте список только доступных страниц сайта для набора презентаций.",
        { outcome: "site-map" },
      ),
      createScene(
        "Use By URL for each selected public page.",
        "Используйте By URL для каждой выбранной публичной страницы.",
        { sourceMode: "url", format: "pptx", arrow: "by-url" },
      ),
      createScene(
        "Choose PowerPoint and apply one consistent output policy.",
        "Выберите PowerPoint и применяйте единую политику результата.",
        { sourceMode: "url", format: "pptx", arrow: "powerpoint" },
      ),
      createScene(
        "Review one separate PPTX for every accepted source page.",
        "Проверьте отдельный PPTX для каждой принятой исходной страницы.",
        { format: "pptx", outcome: "separate-decks" },
      ),
      createScene(
        "Maintain a source manifest beside the downloaded decks.",
        "Храните source manifest рядом со скачанными презентациями.",
        { conceptual: true, format: "pptx", outcome: "manifest" },
      ),
      createScene(
        "Combine selected slides later as a separate editorial task, not an extension button.",
        "Объединяйте выбранные слайды позже как отдельную редакционную задачу.",
        { conceptual: true, format: "pptx", outcome: "combined-deck" },
      ),
    ],
  }),
  article({
    slug: "html-to-powerpoint",
    kind: "html",
    title: "Rendered HTML Presentation Source",
    domain: "preview.example",
    accent: "#f08328",
    steps: [
      createScene(
        "Render and stabilize the HTML before mapping it to slides.",
        "Отрисуйте и стабилизируйте HTML до преобразования в слайды.",
        { outcome: "html-rendered" },
      ),
      createScene(
        "Use the open tab or a public URL as the supported source surface.",
        "Используйте открытую вкладку или публичный URL как поддерживаемый источник.",
        { format: "pptx", arrow: "current-tab" },
      ),
      createScene(
        "Choose PowerPoint.",
        "Выберите PowerPoint.",
        { format: "pptx", arrow: "powerpoint" },
      ),
      createScene(
        "Choose Editable document for supported objects or Accurate copy for composition.",
        "Выберите Editable document для объектов или Accurate copy для композиции.",
        { format: "pptx", style: "editable", arrow: "editable" },
      ),
      createScene(
        "Review 16:9 slides and inspect complex HTML fallbacks.",
        "Проверьте слайды 16:9 и замены сложных HTML-элементов.",
        { format: "pptx", style: "editable", arrow: "preview", outcome: "slides" },
      ),
    ],
  }),
  article({
    slug: "sections-to-slides",
    kind: "report",
    title: "Market Analysis Report",
    domain: "analysis.example",
    accent: "#db7628",
    steps: [
      createScene(
        "Mark meaningful report sections before conversion.",
        "Отметьте смысловые секции отчёта до конвертации.",
        { outcome: "section-map" },
      ),
      createScene(
        "Choose PowerPoint.",
        "Выберите PowerPoint.",
        { format: "pptx", arrow: "powerpoint" },
      ),
      createScene(
        "Choose the output style that matches evidence or editing needs.",
        "Выберите output style по требованиям к точности или редактированию.",
        { format: "pptx", style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview the sequence and verify that each slide keeps its heading and context.",
        "Проверьте последовательность и контекст каждого слайда.",
        { format: "pptx", arrow: "preview", outcome: "slides" },
      ),
      createScene(
        "Split a tall section across slides with repeated context.",
        "Разделите длинную секцию между слайдами с повторением контекста.",
        { format: "pptx", outcome: "continued-slides" },
      ),
    ],
  }),
  article({
    slug: "screenshot-vs-editable-powerpoint",
    kind: "landing",
    title: "Campaign Performance Story",
    domain: "campaign.example",
    accent: "#d76b2b",
    steps: [
      createScene(
        "Open a webpage with typography, charts, and layered visual sections.",
        "Откройте страницу с типографикой, графиками и сложными визуальными секциями.",
        { format: "pptx", outcome: "complex-layout" },
      ),
      createScene(
        "Choose Accurate copy for screenshot-style slides.",
        "Выберите Accurate copy для слайдов в виде точной визуальной копии.",
        { format: "pptx", arrow: "accurate" },
      ),
      createScene(
        "Choose Editable document for supported PowerPoint objects.",
        "Выберите Editable document для поддерживаемых объектов PowerPoint.",
        { format: "pptx", style: "editable", arrow: "editable" },
      ),
      createScene(
        "Compare visual fidelity, selectable content, links, and fallbacks.",
        "Сравните визуальную точность, выделяемый контент, ссылки и замены.",
        { format: "pptx", style: "editable", outcome: "comparison" },
      ),
      createScene(
        "Test a real edit by changing a heading, image, and link.",
        "Проверьте реальное редактирование заголовка, изображения и ссылки.",
        { format: "pptx", style: "editable", outcome: "edit-test" },
      ),
    ],
  }),
  article({
    slug: "save-authenticated-webpage-as-pdf",
    kind: "dashboard",
    title: "Signed-in Account Report",
    domain: "app.example",
    accent: "#5b55c8",
    steps: [
      createScene(
        "Open the exact authorized dashboard state in the signed-in browser tab.",
        "Откройте нужное разрешённое состояние dashboard во вкладке после входа.",
        { outcome: "authenticated" },
      ),
      createScene(
        "Choose Current tab; the card identifies the page already open in Chrome.",
        "Выберите Current tab: карточка показывает уже открытую страницу Chrome.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF and the output style appropriate for the report.",
        "Выберите PDF и подходящий для отчёта output style.",
        { arrow: "pdf" },
      ),
      createScene(
        "Inspect profile menus, notification previews, adjacent records, and signed links.",
        "Проверьте меню профиля, уведомления, соседние записи и подписанные ссылки.",
        { outcome: "privacy-scan" },
      ),
      createScene(
        "Preview the PDF, remove unrelated private context, and verify the final file.",
        "Проверьте PDF, уберите лишний приватный контекст и сверьте итоговый файл.",
        { arrow: "preview", outcome: "pdf-pages" },
      ),
    ],
  }),
  article({
    slug: "website-types-to-pdf-or-powerpoint",
    kind: "article",
    title: "Website Export Examples",
    domain: "examples.example",
    accent: "#2878ce",
    steps: [
      createScene(
        "For articles and documentation, prioritize readable text, references, and links.",
        "Для статей и документации отдавайте приоритет читаемому тексту, ссылкам и источникам.",
        { kind: "article", outcome: "links" },
      ),
      createScene(
        "For dashboards, set filters and capture the exact displayed state.",
        "Для dashboard настройте фильтры и сохраните точное отображаемое состояние.",
        { kind: "dashboard", outcome: "dashboard-state" },
      ),
      createScene(
        "For shops and learning pages, load required products, lessons, and media.",
        "Для магазинов и учебных страниц загрузите нужные товары, уроки и медиа.",
        { kind: "ecommerce", outcome: "catalog" },
      ),
      createScene(
        "For AI chats and browser messengers, define one visible conversation range.",
        "Для AI-чатов и браузерных мессенджеров задайте один видимый диапазон.",
        { kind: "ai-chat", outcome: "chat-range" },
      ),
      createScene(
        "Match PDF or PowerPoint and the output style to the reader's job.",
        "Сопоставьте PDF или PowerPoint и output style с задачей читателя.",
        { arrow: "accurate", outcome: "format-matrix" },
      ),
      createScene(
        "Use another system for native apps, structured extraction, monitoring, or crawling.",
        "Используйте другую систему для native apps, structured extraction, monitoring или crawling.",
        { conceptual: true, outcome: "limits" },
      ),
    ],
  }),
  article({
    slug: "webpage-capture-vs-web-scraping",
    kind: "catalog",
    title: "Public Product Directory",
    domain: "catalog.example",
    accent: "#3874bf",
    steps: [
      createScene(
        "Open a representative source page and define the required output contract.",
        "Откройте типичную исходную страницу и определите контракт результата.",
        { outcome: "source-contract" },
      ),
      createScene(
        "Use Current tab or By URL when the deliverable is a human-readable document.",
        "Используйте Current tab или By URL для читаемого человеком документа.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose the output style according to fidelity, search, and link requirements.",
        "Выберите output style по требованиям к точности, поиску и ссылкам.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Review the PDF or PPTX as a rendered communication artifact.",
        "Проверьте PDF или PPTX как визуальный документ для передачи.",
        { style: "editable", arrow: "preview", outcome: "document-output" },
      ),
      createScene(
        "Use an authorized data system when the deliverable is structured records.",
        "Используйте разрешённую data-систему для структурированных записей.",
        { conceptual: true, outcome: "structured-data" },
      ),
      createScene(
        "Do not treat Page 2 File as a crawler, monitoring service, or hidden-data API.",
        "Не считайте Page 2 File crawler, monitoring-сервисом или API скрытых данных.",
        { conceptual: true, outcome: "limits" },
      ),
    ],
  }),
  article({
    slug: "export-ai-chats-privately",
    kind: "ai-chat",
    title: "Research Assistant Conversation",
    domain: "assistant.example",
    accent: "#765ad8",
    steps: [
      createScene(
        "Load the required early messages, expanded branches, code, tables, and sources.",
        "Загрузите ранние сообщения, нужные ветки, код, таблицы и источники.",
        { outcome: "chat-loaded" },
      ),
      createScene(
        "Define one visible conversation boundary and record intentional omissions.",
        "Определите один видимый диапазон разговора и отметьте исключения.",
        { outcome: "chat-range" },
      ),
      createScene(
        "Choose Current tab and confirm that its card matches the open conversation.",
        "Выберите Current tab и убедитесь, что карточка совпадает с открытым разговором.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF.",
        "Выберите PDF.",
        { arrow: "pdf" },
      ),
      createScene(
        "Choose Accurate copy for interface grouping or Editable document for supported content.",
        "Выберите Accurate copy для структуры интерфейса или Editable document для поддерживаемого контента.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview message order, code, tables, sources, private links, and the final handoff.",
        "Проверьте порядок сообщений, код, таблицы, источники, приватные ссылки и итоговую передачу.",
        { style: "editable", arrow: "preview", outcome: "chat-preview" },
      ),
    ],
  }),
  article({
    slug: "export-chatgpt-conversation-to-pdf",
    kind: "chatgpt",
    title: "Product Planning Conversation",
    domain: "chatgpt.com",
    accent: "#16856b",
    steps: [
      createScene(
        "Load the required messages and expand code, tables, and source panels.",
        "Загрузите нужные сообщения и раскройте код, таблицы и панели источников.",
        { outcome: "chat-loaded" },
      ),
      createScene(
        "Choose Current tab and confirm the ChatGPT conversation card.",
        "Выберите Current tab и проверьте карточку разговора ChatGPT.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF.",
        "Выберите PDF.",
        { arrow: "pdf" },
      ),
      createScene(
        "Choose the output style based on layout fidelity or supported reusable text.",
        "Выберите output style по требованиям к макету или повторному использованию текста.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview message order, code wrapping, tables, citations, and the selected branch.",
        "Проверьте порядок сообщений, перенос кода, таблицы, источники и выбранную ветку.",
        { style: "editable", arrow: "preview", outcome: "chat-preview" },
      ),
    ],
  }),
  article({
    slug: "export-claude-chat-to-pdf",
    kind: "claude",
    title: "Architecture Review Conversation",
    domain: "claude.ai",
    accent: "#b16f4e",
    steps: [
      createScene(
        "Load the full response range and open the artifact view that belongs in the record.",
        "Загрузите весь диапазон ответов и откройте нужный artifact.",
        { outcome: "artifact-open" },
      ),
      createScene(
        "Choose Current tab and confirm the Claude conversation card.",
        "Выберите Current tab и проверьте карточку разговора Claude.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF.",
        "Выберите PDF.",
        { arrow: "pdf" },
      ),
      createScene(
        "Choose Accurate copy for artifact context or Editable document for supported text.",
        "Выберите Accurate copy для контекста artifact или Editable document для текста.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview messages, citations, code, and the visible artifact boundary.",
        "Проверьте сообщения, источники, код и видимую границу artifact.",
        { style: "editable", arrow: "preview", outcome: "artifact-preview" },
      ),
    ],
  }),
  article({
    slug: "export-gemini-chat-to-pdf",
    kind: "gemini",
    title: "Market Research Conversation",
    domain: "gemini.google.com",
    accent: "#4c6fe8",
    steps: [
      createScene(
        "Load the required Gemini messages, images, and source cards.",
        "Загрузите нужные сообщения Gemini, изображения и карточки источников.",
        { outcome: "sources-open" },
      ),
      createScene(
        "Choose Current tab and confirm the Gemini conversation card.",
        "Выберите Current tab и проверьте карточку разговора Gemini.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF.",
        "Выберите PDF.",
        { arrow: "pdf" },
      ),
      createScene(
        "Choose the output style for displayed cards or supported searchable content.",
        "Выберите output style для карточек или поддерживаемого доступного для поиска контента.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview citations, images, message order, and the declared conversation range.",
        "Проверьте источники, изображения, порядок сообщений и заданный диапазон.",
        { style: "editable", arrow: "preview", outcome: "sources-preview" },
      ),
    ],
  }),
  article({
    slug: "export-other-ai-chats-to-pdf",
    kind: "ai-multi",
    title: "Browser AI Research Thread",
    domain: "assistant.example",
    accent: "#5367c9",
    steps: [
      createScene(
        "Open one Grok, DeepSeek, Perplexity, or Copilot thread in its browser tab.",
        "Откройте один разговор Grok, DeepSeek, Perplexity или Copilot в браузере.",
        { outcome: "chat-loaded" },
      ),
      createScene(
        "Load visible sources, code, tables, formulas, and generated media.",
        "Загрузите видимые источники, код, таблицы, формулы и созданные медиа.",
        { outcome: "sources-open" },
      ),
      createScene(
        "Choose Current tab and verify the selected conversation.",
        "Выберите Current tab и проверьте выбранный разговор.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF and the output style appropriate for the platform structure.",
        "Выберите PDF и output style, подходящий структуре платформы.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview complex cards, links, generated media, and the exact thread boundary.",
        "Проверьте сложные карточки, ссылки, медиа и точную границу разговора.",
        { style: "editable", arrow: "preview", outcome: "chat-preview" },
      ),
    ],
  }),
  article({
    slug: "export-whatsapp-chat-to-pdf",
    kind: "whatsapp",
    title: "Project Group Chat",
    domain: "web.whatsapp.com",
    accent: "#1ca977",
    steps: [
      createScene(
        "Open WhatsApp Web and load the exact message range, replies, and media.",
        "Откройте WhatsApp Web и загрузите точный диапазон, ответы и медиа.",
        { outcome: "chat-loaded" },
      ),
      createScene(
        "Confirm the first and last required messages and visible participant context.",
        "Проверьте первое и последнее сообщение и видимый контекст участников.",
        { outcome: "chat-range" },
      ),
      createScene(
        "Choose Current tab and confirm the WhatsApp Web conversation card.",
        "Выберите Current tab и проверьте карточку разговора WhatsApp Web.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF and the output style for bubbles or supported searchable text.",
        "Выберите PDF и output style для пузырей или доступного для поиска текста.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview participants, dates, replies, media thumbnails, and page boundaries.",
        "Проверьте участников, даты, ответы, миниатюры медиа и границы страниц.",
        { style: "editable", arrow: "preview", outcome: "message-preview" },
      ),
    ],
  }),
  article({
    slug: "export-telegram-chat-to-pdf",
    kind: "telegram",
    title: "Research Channel",
    domain: "web.telegram.org",
    accent: "#279bd6",
    steps: [
      createScene(
        "Open one Telegram Web chat or channel and load the required history.",
        "Откройте один чат или канал Telegram Web и загрузите нужную историю.",
        { outcome: "chat-loaded" },
      ),
      createScene(
        "Expand required replies and load visible media and link previews.",
        "Раскройте нужные ответы и загрузите медиа и предпросмотры ссылок.",
        { outcome: "sources-open" },
      ),
      createScene(
        "Choose Current tab and confirm the Telegram Web card.",
        "Выберите Current tab и проверьте карточку Telegram Web.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose PDF and the output style for message grouping or supported text.",
        "Выберите PDF и output style для группировки сообщений или поддерживаемого текста.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview order, replies, media, visible links, and the declared boundary.",
        "Проверьте порядок, ответы, медиа, видимые ссылки и заданную границу.",
        { style: "editable", arrow: "preview", outcome: "message-preview" },
      ),
    ],
  }),
  article({
    slug: "export-browser-messenger-chats-to-pdf",
    kind: "messenger",
    title: "Browser Messenger Workspace",
    domain: "workspace.example",
    accent: "#665ec7",
    steps: [
      createScene(
        "For a community thread, load posts, replies, embeds, and attribution.",
        "Для community thread загрузите сообщения, ответы, embeds и авторство.",
        { kind: "discord", outcome: "thread" },
      ),
      createScene(
        "For Slack or Teams, isolate one authorized channel or conversation.",
        "Для Slack или Teams выделите один разрешённый канал или разговор.",
        { kind: "workspace", outcome: "channel" },
      ),
      createScene(
        "For browser DMs, load reactions, shared posts, and the intended range.",
        "Для browser DMs загрузите реакции, общие публикации и нужный диапазон.",
        { kind: "messenger", outcome: "chat-range" },
      ),
      createScene(
        "Choose Current tab and verify the exact open browser conversation.",
        "Выберите Current tab и проверьте точный открытый разговор.",
        { arrow: "current-tab" },
      ),
      createScene(
        "Choose the output style for visual grouping or supported reusable content.",
        "Выберите output style для визуальной группировки или поддерживаемого контента.",
        { style: "editable", arrow: "editable" },
      ),
      createScene(
        "Preview rich content, sender context, page boundaries, private links, and side panels.",
        "Проверьте rich content, отправителей, границы страниц, приватные ссылки и боковые панели.",
        { style: "editable", arrow: "preview", outcome: "message-preview" },
      ),
    ],
  }),
];

export const expectedSceneCount = instructionArticles.reduce(
  (total, entry) => total + entry.steps.length,
  0,
);
