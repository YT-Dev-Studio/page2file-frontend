# Product scope и критерии результата

## Цель

Создать privacy-first сервис, который:

- превращает публичную веб-страницу в PDF или PPTX по URL;
- показывает preview до скачивания;
- предлагает `Visual` и `Editable & clickable` режимы;
- не требует регистрации;
- не хранит историю;
- привлекает трафик через SEO, GPTs и страницы Chrome-расширения;
- экспортирует приватные AI-чаты локально через расширение.

## Целевые пользовательские потоки

### URL → PDF

1. Пользователь открывает локализованную PDF converter page.
2. Вводит публичный URL.
3. Выбирает `Visual` или `Editable & clickable`.
4. Запускает preview.
5. Проверяет секции, предупреждения и разрывы.
6. Удаляет/переставляет/объединяет/разделяет секции в разрешенных пределах.
7. Запускает финальный render.
8. Скачивает PDF.
9. Job и артефакты удаляются по TTL.

### URL → PowerPoint

Поток тот же, но формат фиксирован как PPTX; preview отображает слайды.

### GPT Action

1. GPT отправляет разрешенный запрос в dedicated endpoint.
2. Backend создает job и возвращает короткий job reference.
3. GPT опрашивает статус с контролируемой частотой.
4. После готовности GPT показывает короткоживущую download URL.
5. Артефакт удаляется по TTL.

### Текущая вкладка и AI-чат

1. Пользователь явно активирует расширение.
2. Расширение получает временный `activeTab` access.
3. Локальный adapter извлекает страницу/чат.
4. Preview строится в расширении.
5. PDF/PPTX Blob создается локально.
6. Файл скачивается через browser download API.
7. История не сохраняется, содержимое не отправляется на backend.

## Функциональный scope

### Web

- Все публичные маршруты из route map.
- Две отдельные страницы конвертации.
- Converter form, job progress, preview editor, download state.
- Все обязательные empty/loading/success/error/expired/rate-limited states.
- Локализованные metadata, navigation и контент.
- Repo-based blog, updates и changelog.
- Consent UI, analytics integration boundary и UTM handling.
- Legal/security pages.
- Test content и test fixtures без заявления, что они production copy.

### Backend

- Versioned web/GPT/extension gateway routes.
- Internal job/worker/file routes.
- URL и HTML validation.
- Queue, idempotency, backpressure и retry policy.
- Visual preview/PDF/PPTX path.
- Editable document model и adaptive raster fallback.
- Temporary artifact storage.
- Crawler boundary для Web2PDF.
- HTML sandbox boundary для HTML2PDF.
- Security logging без содержимого документов.

### SEO/content

- Индексируемый server-rendered/static HTML.
- Canonical, hreflang, x-default, sitemap и robots.
- Уникальный intent для каждой landing page.
- Parent/child internal linking для GPT и AI-chat clusters.
- Не более 10 статей.
- Неиндексируемые job/preview/download/API routes.

## Out of scope для первой рабочей версии

- Пользовательские аккаунты, billing и subscriptions.
- История и повторное открытие старых jobs.
- Постоянное хранение документов.
- Public developer API.
- ZIP upload для HTML2PDF.
- Авторизованный crawl с передачей cookies.
- Универсальный crawling без same-origin и строгих лимитов.
- Макросы, видео, интерактивность и анимации внутри PPTX.
- Полная векторизация canvas/WebGL/video.
- Гарантия pixel-perfect editable для любого сайта.
- CMS и database-backed blog.

## Продуктовые ограничения

- Web и GPT обрабатывают только публично доступный контент, кроме строго sandboxed raw HTML input.
- Блокированные paywall/login pages не обходятся.
- Web2PDF ограничен same-origin crawl, depth и page count.
- Видео не встраивается; используется poster/placeholder/link в зависимости от режима.
- Внешние изображения могут быть пропущены, если их нельзя безопасно получить.
- Нелицензированные web fonts не встраиваются автоматически.
- Preview обязан показывать деградации до финального render.

## Acceptance criteria верхнего уровня

- `AC-001` — существует согласованная граница двух deployable-проектов без shared runtime.
- `AC-002` — route inventory покрывает все заявленные публичные страницы и locale variants.
- `AC-003` — PDF и PPTX имеют отдельные converter pages и общий выбор только из двух режимов.
- `AC-004` — preview flow специфицирован для обоих форматов, включая редактирование порядка секций.
- `AC-005` — нет аккаунтов, истории или постоянного хранения.
- `AC-006` — URL/GPT jobs имеют явные TTL и deletion policy.
- `AC-007` — API access model отдельно покрывает web, каждый GPT и extension.
- `AC-008` — security plan покрывает SSRF, redirects, DNS rebinding, sandbox, XSS, CSRF и injection.
- `AC-009` — SEO/i18n plan не индексирует непереведенный или технический контент.
- `AC-010` — consent и UTM flow не отправляет analytics до разрешенного consent state.
- `AC-011` — backend roadmap начинается с testable narrow slice и не обещает сразу полный editable engine.
- `AC-012` — frontend roadmap включает все страницы и состояния с test content.

## Статус реализации frontend на 2026-07-29

Frontend-объём `AC-002`, `AC-003`, `AC-004`, `AC-009`, `AC-010` и `AC-012`
реализован как работающий prototype. Все conversion results остаются явно
обозначенными sample-файлами; backend-ориентированные критерии остаются планом
следующего отдельного проекта.
