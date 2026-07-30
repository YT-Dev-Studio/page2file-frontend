# Page2File: пакет проектной документации

Статус на 2026-07-30: frontend и self-hosted backend MVP реализованы. Полная
container/E2E-проверка ожидает установленный Docker Desktop.

Этот каталог фиксирует согласованную продуктовую и техническую архитектуру для двух независимых проектов:

- `page2file-web` — текущий Next.js frontend-репозиторий: маркетинговые и
  SEO-страницы, локализованный контент, converter/preview UI, secure same-origin
  BFF и localhost/test mock adapter;
- `page2file-backend` — отдельный Git/npm-проект
  `C:\Users\yt\Desktop\DEV\page2file-backend`: Fastify API, BullMQ/Redis,
  Chromium workers, preview, PDF/PPTX, crawler, HTML sandbox и временные
  encrypted artifacts.

Chrome-расширение считается отдельным внешним клиентом системы. Его исходники не должны находиться в Next.js-проекте. Если расширение будет разрабатываться в этом же продукте, для него нужен третий самостоятельный репозиторий.

## Порядок чтения

1. [00-context-and-decisions.md](./00-context-and-decisions.md) — что принято из истории чата и какие формулировки уточнены.
2. [01-product-scope.md](./01-product-scope.md) — продуктовая область, пользователи, режимы и критерии.
3. [02-system-architecture.md](./02-system-architecture.md) — границы двух проектов и общая схема.
4. [03-nextjs-frontend-plan.md](./03-nextjs-frontend-plan.md) — подробная структура Next.js.
5. [04-backend-conversion-plan.md](./04-backend-conversion-plan.md) — подробная структура backend и conversion engine.
6. [05-api-and-access-security.md](./05-api-and-access-security.md) — API-контракты и защита каналов web/GPT/extension.
7. [06-preview-and-job-lifecycle.md](./06-preview-and-job-lifecycle.md) — preview, job state machine, TTL и удаление.
8. [07-routes-content-seo-i18n.md](./07-routes-content-seo-i18n.md) — маршруты, контент, локализация и индексация.
9. [08-privacy-analytics-legal-security.md](./08-privacy-analytics-legal-security.md) — privacy-first, consent, UTM и security controls.
10. [09-quality-performance-operations.md](./09-quality-performance-operations.md) — проверки, SLO, нагрузка и наблюдаемость.
11. [10-delivery-roadmap.md](./10-delivery-roadmap.md) — последовательность реализации и acceptance gates.
12. [11-open-questions-and-approvals.md](./11-open-questions-and-approvals.md) — решения, которые нельзя скрыто принять при кодировании.
13. [12-source-register.md](./12-source-register.md) — первичные документы, на которых основан план.
14. [13-implementation-convergence.md](./13-implementation-convergence.md) —
    фактическое состояние реализации, проверки и внешние gates.

## Главные ограничения

- Браузер не обращается к пользовательскому URL напрямую; запрос проходит через
  same-origin BFF и отдельный backend.
- Backend credential существует только в server runtime Next.js и не имеет
  `NEXT_PUBLIC_` префикса.
- Нет регистрации, аккаунтов и истории конвертаций.
- Результаты и preview существуют только в рамках короткого TTL.
- Текущая вкладка и AI-чаты должны обрабатываться локально расширением.
- Публичный URL обрабатывается сервером временно; нельзя заявлять, что такой файл «никогда не касается серверов».
- Web и backend — разные проекты и разные deployments.
- Все версии страниц можно индексировать только после полноценного перевода и контентной проверки.
- Self-hosted MVP не означает production deployment, внешний pentest или
  юридическое утверждение.
