import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

const gptRelatedRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "page2pdf-gpt", label: "One Page 2 PDF" },
  { route: "web2pdf-gpt", label: "Web 2 PDF" },
  { route: "html2pdf-gpt", label: "HTML 2 PDF" },
  { route: "one-page2powerpoint-gpt", label: "One Page 2 PowerPoint" },
  { route: "web2powerpoint-gpt", label: "Web 2 PowerPoint" },
];

const aiChatRelatedRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "export-ai-chat-to-pdf", label: "Все экспорты AI-чатов" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT в PDF" },
  { route: "export-claude-to-pdf", label: "Claude в PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini в PDF" },
  { route: "export-grok-to-pdf", label: "Grok в PDF" },
];

export const russianLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "GPT-приложение · один публичный URL",
    title: "Один публичный URL в один PDF через One Page 2 PDF",
    description: "One Page 2 PDF — GPT-приложение, которое отправляет один публичный URL на конвертацию и возвращает один PDF для этой веб-страницы.",
    lead:
      "Передайте GPT-приложению один публичный HTTPS-адрес. One Page 2 PDF отправит его в сервис конвертации Page 2 File и вернёт ссылку на один PDF для выбранной страницы.",
    sections: [
      { heading: "1. Передайте один публичный URL", body: "Вставьте точный HTTPS-адрес нужной страницы. Запрос относится к одной странице и не запускает поиск по всему сайту." },
      { heading: "2. Получите один PDF", body: "GPT-приложение вернёт ссылку на один PDF. Перед использованием проверьте текст, ссылки, изображения и разрывы страниц." },
      { heading: "3. Учитывайте границы функции", body: "One Page 2 PDF не открывает закрытые вкладки и не обходит контроль доступа. Для страницы после входа используйте расширение Page 2 File." },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "Открыть One Page 2 PDF GPT-приложение",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "Как сохранить веб-страницу в PDF" },
      { slug: "long-webpage-page-breaks", label: "Разрывы страниц на длинных сайтах" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "GPT-приложение · доступные страницы сайта",
    title: "Страницы сайта в отдельные PDF через Web 2 PDF",
    description: "Web 2 PDF — GPT-приложение, которое находит доступные страницы сайта, конвертирует выбранные URL и возвращает отдельный PDF для каждой.",
    lead:
      "Передайте Web 2 PDF публичный адрес сайта. GPT-приложение найдёт доступные страницы, отправит выбранные URL на конвертацию и вернёт несколько ссылок — отдельный PDF для каждой страницы.",
    sections: [
      { heading: "1. Передайте адрес сайта", body: "Укажите публичный начальный URL. GPT-приложение найдёт доступные страницы и покажет границы сайта до конвертации." },
      { heading: "2. Проверьте список страниц", body: "Подтвердите нужные страницы. Закрытые URL, заблокированные адреса и посторонние домены останутся за пределами результата." },
      { heading: "3. Скачайте отдельные PDF", body: "Каждая страница возвращается отдельным PDF. Web 2 PDF не обещает единый объединённый документ или структурированные данные парсинга." },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Открыть Web 2 PDF GPT-приложение",
    articleLinks: [
      { slug: "multi-page-website-to-pdf", label: "Как конвертировать многостраничный сайт" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Какие сайты можно экспортировать" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "GPT-приложение · загруженный HTML-файл",
    title: "Загруженный HTML-файл в PDF через HTML 2 PDF",
    description: "HTML 2 PDF — доступное только в GPT приложение: оно принимает загруженный HTML-файл и возвращает один аккуратный PDF с явными ограничениями.",
    lead:
      "Загрузите HTML-файл в GPT-приложение. HTML 2 PDF отправит документ на изолированный рендеринг и вернёт PDF; работа с исходным HTML-файлом доступна только в этом GPT-приложении.",
    sections: [
      { heading: "1. Загрузите HTML-файл", body: "Прикрепите HTML-документ, который вы вправе обрабатывать. Этот процесс начинается с файла, а не с публичного URL." },
      { heading: "2. Получите один PDF", body: "GPT-приложение вернёт один PDF. Удалённые ресурсы, скрипты, нестандартные шрифты и браузерные функции могут отображаться иначе." },
      { heading: "3. Считайте HTML недоверенным", body: "Безопасный рендеринг требует изоляции от приватных сетей, локальных файлов и скриптов. Это конвертация документа, а не запуск сайта." },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "Открыть HTML 2 PDF GPT-приложение",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "Как безопасно конвертировать HTML" },
      { slug: "webpage-capture-vs-web-scraping", label: "Захват страницы и парсинг" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt",
    eyebrow: "GPT-приложение · один публичный URL",
    title: "Один URL в один PPTX через One Page 2 PowerPoint",
    description: "One Page 2 PowerPoint — GPT-приложение, которое конвертирует один публичный URL и возвращает одну презентацию PPTX для этой страницы.",
    lead:
      "Передайте GPT-приложению один публичный HTTPS-адрес. One Page 2 PowerPoint отправит страницу на конвертацию и вернёт одну презентацию PPTX для выбранного URL.",
    sections: [
      { heading: "1. Передайте один публичный URL", body: "Вставьте точный адрес страницы. GPT-приложение обрабатывает одну страницу за запрос и не ищет остальные страницы сайта." },
      { heading: "2. Получите один PPTX", body: "Страница будет преобразована в одну презентацию PowerPoint. Проверьте границы слайдов и замены скриншотами или редактируемыми элементами." },
      { heading: "3. Оставьте закрытые вкладки в Chrome", body: "GPT-приложение для публичных URL не получает сессию браузера. Для страницы после входа используйте расширение Page 2 File." },
    ],
    externalLinkKey: "onePage2PowerpointGpt",
    primaryLabel: "Открыть One Page 2 PowerPoint GPT-приложение",
    articleLinks: [
      { slug: "webpage-to-powerpoint", label: "Как конвертировать страницу в PowerPoint" },
      { slug: "sections-to-slides", label: "Как секции становятся слайдами" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "GPT-приложение · доступные страницы сайта",
    title: "Страницы сайта в PPTX через Web 2 PowerPoint",
    description: "Web 2 PowerPoint — GPT-приложение, которое находит доступные страницы сайта и возвращает отдельную презентацию PPTX для каждой выбранной страницы.",
    lead:
      "Передайте Web 2 PowerPoint публичный адрес сайта. GPT-приложение найдёт доступные страницы, конвертирует выбранные URL и вернёт несколько ссылок — отдельный PPTX для каждой страницы.",
    sections: [
      { heading: "1. Передайте адрес сайта", body: "Укажите публичный начальный URL и сохраните понятные границы сайта. Внешние домены и закрытые страницы не добавляются автоматически." },
      { heading: "2. Подтвердите доступные страницы", body: "Проверьте найденный список. В сервис Page 2 File отправляются только выбранные и доступные страницы." },
      { heading: "3. Скачайте отдельные PPTX", body: "Каждая конвертированная страница возвращается отдельной презентацией PowerPoint. Web 2 PowerPoint не обещает один общий файл для сайта." },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Открыть Web 2 PowerPoint GPT-приложение",
    articleLinks: [
      { slug: "website-to-powerpoint", label: "Как конвертировать сайт в PowerPoint" },
      { slug: "screenshot-vs-editable-powerpoint", label: "Снимки или редактируемые слайды" },
    ],
    relatedRoutes: gptRelatedRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "Экспорт AI-чатов",
    title: "Экспортируйте разговор из активной вкладки",
    description:
      "Экспортируйте поддерживаемые разговоры ChatGPT, Claude, Gemini и Grok в PDF через расширение Page 2 File с временным предпросмотром и без истории конвертаций.",
    lead: "Сохраните исходный вид разговора или создайте чистый документ для чтения из активной вкладки браузера.",
    sections: [
      {
        heading: "Поддерживаемые AI-чаты",
        body: "Page 2 File поддерживает ChatGPT, Claude, Gemini и Grok, а для других браузерных чатов использует осторожный универсальный fallback.",
        points: ["ChatGPT", "Claude", "Gemini", "Grok"],
      },
      {
        heading: "Исходный вид",
        body: "Сохраняйте группировку сообщений, блоки кода, таблицы и видимые ссылки на источники.",
      },
      {
        heading: "Чистый документ",
        body: "Перекомпонуйте поддерживаемый текст для спокойного чтения, сохранив авторство и адреса ссылок.",
      },
      {
        heading: "Независимый продукт",
        body: "Page 2 File не связан, не одобрен и не управляется ни одной из поддерживаемых AI-платформ.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Установить расширение",
    articleLinks: [
      { slug: "export-ai-chats-privately", label: "Приватный экспорт AI-чатов" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Какие сайты можно экспортировать" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "Экспорт ChatGPT",
    title: "Экспортируйте длинные разговоры ChatGPT в PDF",
    description:
      "Экспортируйте видимые сообщения ChatGPT, код, таблицы, ссылки и длинные разговоры в проверяемый PDF через расширение для текущей вкладки.",
    lead: "Захватите разговор, видимый в активной вкладке, проверьте разрывы страниц и скачайте PDF без аккаунта Page 2 File.",
    sections: [
      {
        heading: "Что сохраняется",
        body: "Сообщения, порядок участников, блоки кода, таблицы и видимые ссылки попадают в предпросмотр.",
      },
      {
        heading: "Два стиля чтения",
        body: "Сохраните исходный визуальный ритм или выберите чистый документ для чтения и печати.",
      },
      {
        heading: "Ограничения платформы",
        body: "Скрытые ветки, незагруженные сообщения и контент вне DOM необходимо раскрыть или прокрутить до захвата.",
      },
      {
        heading: "Нет официальной связи",
        body: "Page 2 File — независимый инструмент экспорта, не одобренный и не связанный с OpenAI или ChatGPT.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Установить для ChatGPT",
    articleLinks: [
      { slug: "export-chatgpt-conversation-to-pdf", label: "Экспорт диалога ChatGPT в PDF" },
      { slug: "export-ai-chats-privately", label: "Приватность экспорта AI-чатов" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Экспорт Claude",
    title: "Сохраняйте разговоры Claude и видимые artifacts",
    description:
      "Экспортируйте видимые разговоры Claude, Markdown, код, цитаты и доступный контекст artifacts в проверяемый PDF из активной вкладки браузера.",
    lead: "Расширение читает активный разговор после явного нажатия и создаёт временный предпросмотр для проверки длинных ответов.",
    sections: [
      {
        heading: "Структура длинных ответов",
        body: "Заголовки, списки, цитаты и код сохраняют исходный порядок чтения.",
      },
      {
        heading: "Контекст artifacts",
        body: "Можно представить видимые названия и доступное содержимое artifacts, не заявляя доступ к скрытым данным.",
      },
      {
        heading: "Нет официальной связи",
        body: "Page 2 File — независимый инструмент экспорта и не одобрен Anthropic.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Установить для Claude",
    articleLinks: [
      { slug: "export-claude-chat-to-pdf", label: "Экспорт чата Claude в PDF" },
      { slug: "export-ai-chats-privately", label: "Приватность экспорта AI-чатов" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Экспорт Gemini",
    title: "Превратите разговор Gemini в удобный PDF",
    description:
      "Экспортируйте видимые сообщения Gemini, карточки источников, код, изображения и цитаты в проверяемый PDF из активной вкладки браузера.",
    lead:
      "Проверьте отображение карточек источников и видимых изображений перед созданием чистого документа или документа в режиме скриншотов.",
    sections: [
      {
        heading: "Источники остаются полезными",
        body:
          "Видимые цитаты и ссылки сохраняют кликабельность, если адрес проходит проверку безопасности.",
      },
      {
        heading: "Изображения следуют DOM",
        body:
          "Во временном предпросмотре появляются только медиа, доступные активной странице.",
      },
      {
        heading: "Нет официальной связи",
        body:
          "Page 2 File — независимый продукт и не является сервисом Google или Gemini.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Установить для Gemini",
    articleLinks: [
      { slug: "export-gemini-chat-to-pdf", label: "Экспорт чата Gemini в PDF" },
      { slug: "export-ai-chats-privately", label: "Приватность экспорта AI-чатов" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Экспорт Grok",
    title: "Экспортируйте ветки Grok с видимыми источниками",
    description:
      "Экспортируйте видимые разговоры Grok, ссылки X, цитируемые посты и источники в проверяемый PDF через расширение для текущей вкладки.",
    lead:
      "Захватите активную ветку, сохраните видимый контекст источников и выберите документ в режиме скриншотов либо чистый документ.",
    sections: [
      {
        heading: "Порядок чтения с учётом ветки",
        body:
          "Сообщения и контекст цитируемых постов остаются сгруппированными, а не превращаются в неразмеченный текст.",
      },
      {
        heading: "Видимые ссылки X",
        body:
          "Адреса постов и источников остаются кликабельными после проверки безопасности.",
      },
      {
        heading: "Нет официальной связи",
        body:
          "Page 2 File — независимый продукт, не одобренный xAI или X.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Установить для Grok",
    articleLinks: [
      { slug: "export-other-ai-chats-to-pdf", label: "Экспорт других AI-чатов в PDF" },
      { slug: "export-ai-chats-privately", label: "Приватность экспорта AI-чатов" },
    ],
    relatedRoutes: aiChatRelatedRoutes,
  },
  privacy: {
    route: "privacy",
    eyebrow: "Конфиденциальность и обработка данных",
    title: "Политика конфиденциальности",
    description:
      "Как Page 2 File обрабатывает временные задачи конвертации, короткоживущие файлы, автоматическую аналитику и запросы через сервис.",
    lead:
      "Политика описывает текущие границы продукта и поставщиков, участвующих в работе Page 2 File.",
    sections: [
      {
        heading: "Без аккаунтов и истории",
        body:
          "Сервис не создаёт профили и не хранит доступный пользователю список прошлых конвертаций.",
      },
      {
        heading: "Аналитика",
        body:
          "Google Analytics запускается автоматически при настроенном Measurement ID. UTM-значения не сохраняются в отдельном attribution cookie.",
      },
      {
        heading: "Временная серверная обработка",
        body:
          "Конвертация открытых URL использует временные данные задач и короткоживущие файлы результата. Срок хранения и удаление зависят от настроенной инфраструктуры конвертации.",
      },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Соглашение об использовании сервиса",
    title: "Условия использования",
    description:
      "Условия использования Page 2 File: допустимые источники, временная обработка и ограничения редактируемого результата.",
    lead:
      "Используя сервис, вы соглашаетесь отправлять только материалы, к которым имеете законный доступ и право на воспроизведение, и проверять созданные файлы.",
    sections: [
      {
        heading: "Статус self-hosted MVP",
        body:
          "Текущий сервис выполняет конвертацию через отдельно развёрнутый backend, но не является production-развёртыванием и не гарантирует полную точность.",
      },
      {
        heading: "Ответственность пользователя",
        body:
          "Конвертируйте только материалы, к которым у вас есть законный доступ и право на воспроизведение.",
      },
      {
        heading: "Без гарантии полной точности",
        body:
          "Редактируемый результат не сохраняет каждую функцию браузера. Ожидаемые изменения показываются в предпросмотре.",
      },
    ],
    legal: true,
  },
  "cookie-policy": {
    route: "cookie-policy",
    eyebrow: "Раскрытие информации об аналитике",
    title: "Политика cookies и аналитики",
    description:
      "Как автоматическая загрузка Google Analytics, cookies и UTM-атрибуция в памяти работают на публичных страницах Page 2 File.",
    lead:
      "Аналитика включается автоматически, если владелец сайта настроил корректный Measurement ID.",
    sections: [
      {
        heading: "Настройки аналитики",
        body:
          "Отдельное значение localStorage для выбора аналитики больше не используется.",
      },
      {
        heading: "Аналитика по умолчанию",
        body:
          "Google tag запрашивается автоматически на публичных страницах при наличии настроенного Measurement ID.",
      },
      {
        heading: "Атрибуция",
        body:
          "Разрешённые UTM-значения нормализуются в памяти и передаются вместе с аналитическим событием.",
      },
    ],
    legal: true,
  },
  security: {
    route: "security",
    eyebrow: "Граница безопасности self-hosted сервиса",
    title: "Что защищает Page 2 File и какие operational gates остаются",
    description:
      "Обзор реализованных frontend-, BFF- и backend-контролей self-hosted MVP Page 2 File и оставшихся условий безопасного production-запуска.",
    lead:
      "Страница описывает реализованные в коде меры. Production-развёртывание, внешний pentest и усиление инфраструктуры остаются отдельными условиями запуска.",
    sections: [
      {
        heading: "Frontend и BFF",
        body:
          "Браузер использует same-origin маршруты конвертации, анонимную HttpOnly-сессию, проверки Origin и CSRF, доверенный repo-local MDX, безопасные внешние ссылки и security headers.",
      },
      {
        heading: "Backend конвертации",
        body:
          "Отдельный backend проверяет подпись BFF и повторы запросов, защищает загрузку URL от SSRF, повторно проверяет redirect, изолирует Chromium, ограничивает очередь и шифрует временные файлы.",
      },
      {
        heading: "Остаётся до production-запуска",
        body:
          "Нужно настроить production-секреты, сетевые политики, мониторинг и резервирование, завершить юридическую проверку и независимый pentest для выбранной инфраструктуры.",
      },
    ],
    legal: true,
  },
  "acceptable-use": {
    route: "acceptable-use",
    eyebrow: "Ответственное использование",
    title: "Политика допустимого использования",
    description:
      "Правила ответственного использования конвертации веб-страниц и документов: доступ, нагрузка на системы, интеллектуальные права и законность источника.",
    lead:
      "Используйте Page 2 File только для источников, которые разрешено открывать, обрабатывать и воспроизводить.",
    sections: [
      {
        heading: "Не обходите ограничения доступа",
        body:
          "Сервис нельзя использовать для обхода paywall, авторизации или технических ограничений.",
      },
      {
        heading: "Уважайте людей и системы",
        body:
          "Не отправляйте вредоносный или оскорбительный контент и нагрузки, предназначенные для истощения другого сервиса.",
      },
      {
        heading: "Соблюдайте интеллектуальные права",
        body:
          "Вы отвечаете за разрешения, атрибуцию и распространение созданных документов.",
      },
    ],
    legal: true,
  },
};
