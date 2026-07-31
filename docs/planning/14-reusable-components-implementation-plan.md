# Page2File: план реализации переиспользуемых компонентов

## Статус и назначение

Статус: готовый implementation handoff для последующей поэтапной реализации.

Цель документа — зафиксировать визуальный контракт, публичные API, границы
ответственности, доступность, валидацию и проверки для следующих компонентов:

1. `ProductAction`;
2. `TextField`;
3. `Select`;
4. `FormatBadge`;
5. `Card`;
6. `FileCard`;
7. `Dropzone`;
8. `Progress`;
9. локальные outline-иконки, необходимые этим компонентам.

Документ не разрешает заменять существующие элементы интерфейса одним большим
изменением. Каждый компонент сначала создаётся изолированно и проверяется, после
чего существующие продуктовые поверхности мигрируют отдельными небольшими
срезами.

## Источники и обозначения уверенности

### Источники

- Текстовый контракт из вложения
  `16b09b6a-d63a-4729-9fea-b8845d835858/pasted-text.txt`: свойства, варианты,
  размеры, поведение и требования к URL.
- 18 предоставленных изображений:
  - `TextField`: 2 документационных desktop-кадра с inspect-панелью и
    1 укрупнённая матрица состояний;
  - `Select`: 1 документационный desktop-кадр с inspect-панелью и
    1 укрупнённая матрица состояний;
  - `FormatBadge`: 1 документационный desktop-кадр с inspect-панелью и
    1 укрупнённая матрица;
  - `Card`: 2 документационных desktop-кадра с inspect-панелью и
    1 укрупнённая матрица;
  - `FileCard`: 1 документационный desktop-кадр с inspect-панелью и
    1 укрупнённая матрица;
  - `Dropzone`: 1 документационный desktop-кадр с inspect-панелью и
    1 укрупнённая матрица;
  - `Progress`: 2 документационных desktop-кадра с inspect-панелью и
    1 укрупнённая матрица;
  - `Icons`: 1 desktop-каталог из 8 outline-иконок.
- Утверждённые foundations:
  `src/shared/styles/foundations/{color,typography,dimensions,interaction}.css`.
- Утверждённые границы:
  `project/ui-architecture.md`, `project/styling-profile.md` и
  `project/stack-profile.md`.
- Текущая продуктовая реализация URL-проверки:
  `src/features/converter/url-validation.ts` и
  `src/features/converter/converter-form.tsx`.

Размеры самих desktop viewport на изображениях не предоставлены. Видимые
размеры выбранных компонентов считаются размерами Figma master/reference,
а не runtime-ограничениями контейнера.

### Обозначения

- **[S] source-provided** — значение явно указано в текстовом контракте или
  inspect-панели.
- **[R] repository-provided** — значение уже закреплено существующим foundation
  token или архитектурным правилом репозитория.
- **[I] screenshot-inferred** — значение выведено из видимого изображения, но
  не показано в inspect и не указано текстом.
- **[U] unknown** — источник не даёт точного значения; при реализации нельзя
  подменять его догадкой.

## Общие архитектурные решения

### Структура

Компоненты создаются в уже утверждённых каталогах:

```text
src/shared/ui/
|-- components/
|   |-- internal/
|   |   `-- field-frame/
|   |       |-- field-frame.tsx
|   |       `-- field-frame.module.css
|   |-- product-action/
|   |   |-- product-action.tsx
|   |   `-- product-action.module.css
|   |-- text-field/
|   |   |-- text-field.tsx
|   |   |-- text-field.module.css
|   |   `-- text-field.test.tsx
|   |-- select/
|   |   |-- select.tsx
|   |   |-- select.module.css
|   |   `-- select.test.tsx
|   |-- format-badge/
|   |-- card/
|   |-- file-card/
|   |-- dropzone/
|   `-- progress/
|-- types/
|   `-- product-format.ts
`-- utilities/
    `-- icons/
        |-- icon.tsx
        `-- glyphs/
            |-- arrow-right-icon.tsx
            |-- chevron-down-icon.tsx
            |-- upload-icon.tsx
            |-- file-icon.tsx
            |-- download-icon.tsx
            |-- check-icon.tsx
            |-- close-icon.tsx
            `-- spinner-icon.tsx
```

Для компонентов не создаются barrel-файлы `index.ts`. Импорты идут напрямую
из владельца модуля.

Общий `ProductFormat` нужен, потому что один и тот же discriminant используют
`ProductAction`, `FormatBadge`, `FileCard` и `Progress`:

```ts
export type ProductFormat = "master" | "pdf" | "pptx" | "slides";
```

Тип общий, но CSS-классы формата остаются в CSS Module каждого компонента:
компоненты не импортируют чужие CSS Modules.

### Политика токенов

- Реестр `--p2f-*` остаётся замороженным.
- Для каждого совпадающего значения используется существующий token.
- Новые, переименованные и component-specific custom properties не создаются.
- Если точное требуемое значение известно, но токена нет, оно задаётся
  hardcode непосредственно в CSS Module владельца.
- Если точное значение неизвестно, hardcode не придумывается: значение остаётся
  открытым вопросом до получения inspect или отдельного решения.

Основное соответствие:

| Назначение | Foundation |
|---|---|
| Surface | `--p2f-color-background-surface` |
| Subtle/selected surface | `--p2f-color-background-subtle`, `--p2f-color-background-selected` |
| Disabled surface | `--p2f-color-background-disabled` |
| Primary/secondary text | `--p2f-color-text-primary`, `--p2f-color-text-secondary` |
| Brand/link text | `--p2f-color-text-brand`, `--p2f-color-text-link` |
| Error text | `--p2f-color-text-error` |
| Default/strong/focus/error border | соответствующие `--p2f-color-border-*` |
| Control height | `--p2f-control-size-default` = `44px` |
| Control/card radius | `--p2f-radius-control`, `--p2f-radius-card` |
| Pill radius | `--p2f-radius-pill` |
| Card shadow | `--p2f-shadow-card` |
| Focus ring | `--p2f-interaction-focus-ring-*` |
| Format accents | `--p2f-color-format-{format}-{default|subtle}` |

### Типографика

Manrope подключается тем же способом, что и существующий `Button`. Компоненты
используют foundation typography и не задают новые локальные font-токены.

| Роль | Стиль | Уверенность |
|---|---|---|
| Control label | Label/Medium `14/20`, semibold, `0.2px` | [R], [I] |
| Control value | Body/Medium `16/24`, regular | [R], [I] |
| Helper/error | Caption/Regular `12/16`, regular | [R], [I] |
| Card/File title | Heading/H3 `20/28`, bold или Label/Large `16/20`, bold по иерархии | [R], [I] |
| Card body/meta | Body/Small `14/20`, regular | [R], [I] |
| Compact badge/value | Caption/Strong `12/16`, bold | [R], [I] |
| CTA/action label | Label/Medium `14/20`, semibold | [R], [I] |

Точные text-style inspect для новых кадров не предоставлены. Поэтому
соответствие существующим foundation-стилям должно быть подтверждено rendered
QA, а не превращено в новые токены.

### Состояния

- `hover`, `focus-visible` и `active/pressed` реализуются нативными
  псевдоклассами и не входят в публичный `state` prop.
- Постоянные продуктовые состояния передаются явно:
  `disabled`, `selected`, `error`.
- В dev showcase разрешён приватный preview-механизм для показа матрицы, но он
  не экспортируется из публичного API.
- `disabled`-селекторы располагаются после интерактивных и имеют приоритет.
- Focus ring не должен менять внешние размеры компонента.
- `prefers-reduced-motion` отключает spinner/transition motion, если они есть.

### Адаптивность

Mobile/tablet-кадры не предоставлены, поэтому следующие правила являются
**[I]**:

- `220px`, `280px`, `360px` и `520px` — reference width в документации, а не
  runtime `max-width`.
- Поля, карточки, progress и dropzone получают `width: 100%`; размер задаёт
  контейнер потребителя.
- Reference height используется как `min-height` только там, где контент может
  стать длиннее: `Card`, `FileCard`, `Dropzone`.
- Текст не должен выходить за границы. Filename сокращается ellipsis; обычный
  описательный текст переносится.
- На viewport около `375px` внутренние размеры не должны создавать page-level
  horizontal overflow.
- Badge и CTA остаются `fit-content` с `max-width: 100%`.

## Общий внутренний `FieldFrame`

### Ответственность

`FieldFrame` — приватная композиция для `TextField` и `Select`. Она отвечает
только за:

- видимый или visually-hidden label;
- helper/error;
- создание и связывание `id`;
- `aria-describedby`;
- `aria-invalid`;
- вертикальную структуру и общий ритм.

Она не хранит value, не валидирует URL и не знает о submit.

### Визуальный контракт

| Значение | Источник |
|---|---|
| Общая reference height с label и helper: `96px` | [S] |
| Вертикальный gap: `8px` | [S] |
| Label: Label/Medium | [R], [I] |
| Helper/error: Caption/Regular | [R], [I] |
| Error заменяет обычный helper, а не добавляет четвёртую строку | [I] |

Если `showLabel=false`, label остаётся доступным через visually-hidden текст,
если потребитель не передал отдельный `aria-label`. Если `showHelper=false`,
обычный helper не рендерится; error всё равно показывается и связывается с
control.

## 1. ProductAction

### Назначение и семантика

`ProductAction` — визуально главный CTA, связанный с одним `ProductFormat`.
Несмотря на слово «кнопка» в дизайн-описании, действующая архитектура проекта
разделяет семантику:

- нативные действия выполняет существующий `Button`;
- `ProductAction` выполняет навигацию и рендерит Next.js `Link` либо внешний
  `<a>`.

Компонент не получает одновременно `href` и `onClick` и не превращается в
полиморфный link/button. Для форматно окрашенной submit-кнопки потребуется
отдельное явное решение, а не скрытое нарушение семантики.

### API

```ts
type ProductActionProps = {
  label: ReactNode;
  href: string;
  external?: boolean;
  format?: ProductFormat;
  icon?: ReactNode;
  showIcon?: boolean;
  disabled?: boolean;
  className?: string;
  accessibleLabel?: string;
};
```

Defaults из Figma используются в showcase, но shared-компонент не хранит
английский продуктовый copy. `format="master"`, `showIcon=true`,
default icon — `DownloadIcon`.

### Размеры

| Значение | Источник |
|---|---|
| Height `44px` | [S] |
| Padding `12px 16px` | [S] |
| Gap `8px` | [S] |
| Radius `12px` | [S] |
| Width by content, max `100%` | [S] |
| Icon after label, `20px` wrapper | [S], [R] |
| Label/Medium | [R], [I] |

### Состояния и доступность

- Hover, focus-visible и pressed/active — CSS.
- В disabled-навигации `href` не должен оставаться активным. Рекомендуемый
  output — `<span aria-disabled="true">` с тем же layout, а не «мертвая»
  кликабельная ссылка.
- External link получает `target="_blank"` только по явному prop и всегда
  `rel="noopener noreferrer"`.
- Иконка рядом с текстом декоративная: wrapper `aria-hidden=true`.
- Слот и gap отсутствуют при `showIcon=false` или `icon=null`.

### Цвет

Default background берётся из
`--p2f-color-format-{format}-default`. Точные hover/pressed пары для четырёх
форматов на предоставленных изображениях не показаны **[U]**. Их нельзя
генерировать через opacity/filter или новые токены. До реализации полного
state-контракта нужны inspect-значения либо отдельное утверждение существующих
primitive ramps.

### Acceptance

- Link и anchor имеют одинаковую геометрию.
- Нет публичного transient `state`.
- Disabled не навигирует мышью или клавиатурой.
- Icon slot полностью исчезает.
- В одном consumer-контексте документируется правило одного format accent.

## 2. TextField

### Назначение

`TextField` — универсальный нативный `<input>` с доступной label/helper/error
структурой. URL-политика не встраивается в визуальный primitive: её предоставляет
feature-композиция `WebsiteUrlField`, описанная ниже.

### API

```ts
type TextFieldProps = Omit<
  ComponentPropsWithRef<"input">,
  "children" | "size"
> & {
  label: string;
  helper?: string;
  error?: string;
  showLabel?: boolean;
  showHelper?: boolean;
};
```

Компонент поддерживает controlled и uncontrolled native input без собственной
копии value. `aria-invalid` определяется `error`, а переданный consumer
`aria-describedby` объединяется с ids helper/error.

### Визуальный контракт

| Значение | Источник |
|---|---|
| Documentation width `220px`, runtime stretch | [S] |
| Control height `44px` | [S], [R] |
| Control padding `12px` по обеим осям inspect | [S] |
| Radius `12px` | [S], [R] |
| Border default `1px` inside | [S], [R] |
| Field stack gap `8px`, total reference height `96px` | [S] |
| Surface fill | [S], [R] |
| Default border = border/default | [S], [R] |
| Hover border = border/strong | [I], [R] |
| Focus border/ring = border/focus `2px` | [I], [R] |
| Error border = border/error; helper = text/error | [I], [R] |
| Disabled background = background/disabled | [I], [R] |
| Disabled content = Ink Navy 300 primitive | [I], [R] |

Control остаётся `box-sizing:border-box`; усиленный focus/error border не
изменяет высоту и соседний layout.

### WebsiteUrlField и URL-политика

Feature-композиция размещается рядом с converter:

```text
src/features/converter/website-url-field.tsx
src/features/converter/url-validation.ts
```

`WebsiteUrlField` использует `TextField`, но value и submit остаются у
`ConverterForm`.

```ts
type WebsiteUrlFieldProps = {
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  id: string;
  label: string;
  helper: string;
  required?: boolean;
};
```

`validatePublicUrl` остаётся единственным pure validator для blur, paste и
submit. Нельзя иметь отдельную упрощённую проверку внутри `TextField`.

### Изменение существующего валидатора

Текущая реализация расходится с утверждённым контрактом:

| Сейчас | Требуется |
|---|---|
| Принимается только `https:` | Принимаются `http:` и `https:` |
| `hash` удаляется | `path`, `query` и `hash` сохраняются |
| Возвращается сериализованный URL | Отображаемое значение пользователя не переписывается |

При реализации:

1. `trim()` используется только для удаления внешних пробелов.
2. Проверка выполняется через `new URL(trimmedValue)`.
3. Разрешены только `http:` и `https:`.
4. Сохраняются существующие проверки `2048` символов, credentials, localhost,
   `.local`, `.internal`, private/link-local/reserved IPv4 и IPv6: поле
   предназначено для публичного сайта, а не только для синтаксически валидного
   URL.
5. В input остаётся исходное пользовательское значение; компонент не добавляет
   scheme, slash и не заменяет Unicode hostname на punycode.
6. Для submit используется trimmed исходная строка, прошедшая parser и public
   host checks. Path/query/hash не вырезаются.
7. Client validation не заменяет server-side SSRF/redirect/DNS validation.

Допустимые примеры: абсолютные HTTP/HTTPS URL, subdomain, port, IDN, path,
query и hash. Отклоняются bare domain, другие protocol schemes, credentials и
непубличные hosts.

### Timing и ошибки

- Paste вызывает обычный input/change flow и немедленную проверку вставленного
  значения.
- Blur отмечает поле touched и показывает результат.
- Submit всегда повторяет pure validation независимо от touched.
- До blur/paste/submit обычный набор текста не обязан показывать ошибку на
  каждом символе.
- После исправления корректного URL error снимается.
- Empty required: `Enter a URL`.
- Остальные invalid cases:
  `Enter a valid URL starting with http:// or https://`.
- Локализация copy остаётся в feature messages, не внутри shared component.
- Error связан через `aria-describedby`, input имеет `aria-invalid=true`;
  submit фокусирует input.

### Acceptance

- Все разрешённые и запрещённые примеры из контракта покрыты unit-тестами.
- Отдельно покрыты HTTP, HTTPS, IDN, port, path/query/hash, outer spaces,
  credentials и private hosts.
- Исправление ошибки не стирает value.
- Невалидный URL не вызывает preview API и не меняет route.

## 3. Select

### Назначение и API

Компонент использует нативный `<select>` и `FieldFrame`.

```ts
type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = Omit<
  ComponentPropsWithRef<"select">,
  "children" | "size"
> & {
  label: string;
  options: ReadonlyArray<SelectOption>;
  placeholder?: string;
  helper?: string;
  error?: string;
  showLabel?: boolean;
  showHelper?: boolean;
  icon?: ReactNode;
};
```

Value/state принадлежат consumer. Placeholder — option с пустым value; content
`Filled` выводится из выбранного value, а не из публичного variant prop.

### Визуальный контракт

Геометрия, label/helper/error и state borders совпадают с `TextField`:

| Значение | Источник |
|---|---|
| Reference width `220px`, runtime stretch | [S] |
| Height `44px` | [S], [R] |
| Padding `12px` | [S] |
| Gap field stack `8px`, reference total `96px` | [S] |
| Radius `12px` | [S], [R] |
| Default border `1px`; focus/error без layout shift | [S], [R], [I] |
| Chevron at right, `20px` wrapper | [S], [R] |

Native arrow скрывается через `appearance:none`; локальная иконка имеет
`pointer-events:none` и не является отдельным interactive control.

### Поведение и acceptance

- Одиночный выбор, native keyboard navigation и form submission.
- Disabled не открывается и не меняет value.
- Required placeholder на submit приводит к внешнему `error`.
- Error helper объясняет, что нужно выбрать.
- Нет custom listbox, portal, focus manager и новой dependency.
- Tests: placeholder, selected value, change, keyboard, disabled, required
  error wiring, custom/default icon.

## 4. FormatBadge

### API

```ts
type FormatBadgeProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children"
> & {
  format?: ProductFormat;
  style?: "solid" | "subtle";
};
```

Текст (`Master`, `PDF`, `PPTX`, `Slides`) выводится из `format`; ручной color
или произвольный label не поддерживаются.

### Визуальный контракт

| Значение | Источник |
|---|---|
| Height `24px` | [S] |
| Reference/min width `74px`, width adapts to label | [S] |
| Padding `4px 8px` | [S], [R] |
| Internal gap `4px` | [S], [R] |
| Radius `999px` | [S], [R] |
| Caption/Strong `12/16` | [R], [I] |

Mapping:

| Format | Solid background | Subtle background |
|---|---|---|
| Master | `format-master-default` | `format-master-subtle` |
| PDF | `format-pdf-default` | `format-pdf-subtle` |
| PPTX | `format-pptx-default` | `format-pptx-subtle` |
| Slides | `format-slides-default` | `format-slides-subtle` |

Solid foreground для Master/PDF/PPTX визуально navy **[I]**; Slides — inverse
**[I]**. Subtle foreground использует существующие dark primitive ramps
соответствующего формата, без новых semantic aliases.

### Acceptance

- 8 комбинаций имеют заранее заданную пару foreground/background.
- Нет `color`, `background` или arbitrary children props.
- Badge неинтерактивный и не получает button semantics.
- Label не обрезается при локализации названий форматов; `74px` — min/reference,
  не fixed width.

## 5. Card

### Семантика и API

`Card` остаётся presentational `<article>`. Наличие action не превращает весь
container в button и не создаёт nested interactive controls.

```ts
type CardAction = {
  label: string;
  href: string;
  external?: boolean;
  accessibleLabel?: string;
};

type CardProps = Omit<ComponentPropsWithoutRef<"article">, "children"> & {
  title: ReactNode;
  body: ReactNode;
  action?: CardAction;
  emphasis?: "default" | "accent";
  selected?: boolean;
  interactive?: boolean;
};
```

`selected` — controlled persistent state. `interactive` включает только
визуальный hover affordance; actual selection owner и keyboard control должны
находиться в consumer (например, radio/checkbox pattern), а не в article.

### Визуальный контракт

| Значение | Источник |
|---|---|
| Master/reference `360 × 196px` | [S] |
| Runtime width `100%`, `min-height:196px`, height auto | [I] |
| Padding `24px` | [S], [R] |
| Main gap `16px` | [S], [R] |
| Radius `16px` | [S], [R] |
| Shadow/Card | [S], [R] |
| Default surface + border/default `1px` | [S], [R] |
| Hover border/strong | [I], [R] |
| Selected surface/selected + focus border | [I], [R] |

Accent variant добавляет видимую вертикальную полосу слева. По скриншоту:
ширина около `4px` и gap до контента около `16px` **[I]**. Полоса рендерится
условно; у default не остаётся пустой column.

Action — текстовая ссылка с `ArrowRightIcon`; при отсутствии action ссылка и
связанный gap не рендерятся.

### Acceptance

- Long title/body увеличивают height и не обрезаются.
- Action получает понятное accessible name.
- Selected не используется как краткий active/pressed feedback.
- Article не получает `role=button` при наличии вложенной ссылки.
- 6 визуальных комбинаций из матрицы доступны в showcase.

## 6. FileCard

### API

```ts
type FileCardProps = Omit<
  ComponentPropsWithoutRef<"article">,
  "children"
> & {
  filename: string;
  meta: string;
  format?: ProductFormat;
  selected?: boolean;
  disabled?: boolean;
  showAction?: boolean;
  actionIcon?: ReactNode;
  onAction?: () => void;
  actionLabel: string;
};
```

Component получает готовые filename/meta/callback и не знает о job lifecycle,
API или download route.

### Визуальный контракт

| Значение | Источник |
|---|---|
| Master/reference `360 × 120px` | [S] |
| Runtime width `100%`, `min-height:120px`, height auto | [I] |
| Horizontal layout | [S] |
| Padding `16px` | [S], [R] |
| Main gap `12px` | [S], [R] |
| Radius `16px` | [S], [R] |
| Default surface + border/default | [S], [R] |
| Selected surface/selected + focus border `2px` | [I], [R] |
| Disabled muted appearance, action disabled | [S], [I] |
| File glyph `24px` in tinted format tile | [I], [R] |
| Format tile около `56 × 56px` | [I] |

Структура: format tile, `minmax(0,1fr)` content column, optional icon-only action.
`FormatBadge style="subtle"` переиспользуется внутри.

### Filename и action

- Filename — одна строка с ellipsis.
- Полное имя доступно через `title` и входит в accessible action label.
- Action — нативный icon-only `<button>`, не декоративный span.
- Default action icon — `DownloadIcon`.
- `showAction=false` удаляет button и slot.
- Disabled отключает action и не вызывает callback.

### Acceptance

- 12 комбинаций (4 format × default/selected/disabled) совпадают с матрицей.
- Длинный filename не сдвигает action за границу.
- Нет imports из `features/**`, `entities/**` и API.
- Вложенный `FormatBadge` не дублирует format color mapping вручную.

## 7. Dropzone

### Ответственность

`Dropzone` — минимальная client boundary. Она обрабатывает file input,
drag-enter/leave/drop и локальное active состояние, но:

- не загружает файлы;
- не вызывает BFF/API;
- не хранит product job;
- сообщает accepted/rejected files consumer через callbacks.

### API

```ts
type RejectedFile = {
  file: File;
  reason: "unsupported-type" | "too-large";
};

type DropzoneProps = {
  title: string;
  description: string;
  actionLabel?: string;
  showAction?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  error?: string;
  accept: ReadonlyArray<string>;
  maxBytes?: number;
  multiple?: boolean;
  onFilesAccepted: (files: ReadonlyArray<File>) => void;
  onFilesRejected: (files: ReadonlyArray<RejectedFile>) => void;
};
```

Copy передаётся consumer и локализуется вне shared component.

### Визуальный контракт

| Значение | Источник |
|---|---|
| Master/reference `520 × 240px` | [S] |
| Runtime width `100%`, `min-height:240px` | [I] |
| Padding `32px` | [S], [R] |
| Vertical gap `12px` | [S], [R] |
| Radius `16px` | [S], [R] |
| Centered content | [S] |
| Default surface + dashed border/default | [I], [R] |
| Hover dashed border/strong | [I], [R] |
| Active selected surface + solid focus border | [I], [R] |
| Error surface + dashed border/error/text-error | [I], [R] |
| Disabled background/disabled + muted content | [I], [R] |
| Upload glyph `24px` in tinted tile | [I], [R] |

### Input и keyboard pattern

Рекомендуемая структура — реальный `<input type="file">`, растянутый на
surface и визуально скрытый через opacity, но остающийся interactive/focusable.
Текст `Browse files` — стилизованный span внутри поверхности, а не вложенная
button. Это даёт один interactive owner без nested controls.

Focus input отображается через `:focus-within`. Drag state принадлежит
Dropzone; error/disabled приходят props.

### Проверка файлов

- Drag/drop и file dialog используют одну pure validation function.
- Max size по контракту — `25 MB`.
- Для реализации предлагается явно зафиксировать decimal
  `25_000_000` bytes; если продукт подразумевает MiB, решение нужно изменить до
  кодирования.
- Проверяются и MIME, и extension, потому что browser MIME может отсутствовать.
- Конкретная матрица допустимых MIME/extensions для `Slides` не предоставлена
  **[U]**. `.gslides` — pointer, а не обычный документ; добавлять его без
  продуктового решения нельзя.
- Error copy содержит filename и конкретную причину; region получает
  `role=alert`.

### Acceptance

- Click, Enter/Space, drag/drop приводят к одному pipeline.
- Disabled блокирует все три способа.
- Rejected file никогда не попадает в accepted callback.
- Active state снимается после leave/drop и не залипает на child boundaries.
- `showAction=false` удаляет action text и gap.
- Размер/тип проверяются unit-тестами без настоящей загрузки.

## 8. Progress

### Семантика и API

Используется нативный `<progress>`, а не div с одним `role=progressbar`.

```ts
type ProgressProps = Omit<
  ComponentPropsWithoutRef<"progress">,
  "children" | "max" | "value"
> & {
  label: string;
  value?: number;
  showValue?: boolean;
  format?: ProductFormat;
};
```

- `value` в диапазоне `0..100` — determinate.
- `value=undefined` — indeterminate, как требует существующая UI architecture.
- Showcase использует значения `25`, `50`, `75`, `100`.
- Невалидный number не должен молча менять продуктовый state: в development
  выдаётся invariant/warning, а consumer обязан передать допустимое значение.

### Визуальный контракт

| Значение | Источник |
|---|---|
| Reference overall `280 × 40px` | [S] |
| Track width `280px`, runtime `100%` | [S], [I] |
| Track height `8px` | [S], [R] |
| Info-to-track gap `8px` | [S], [R] |
| Track radius `999px` | [S], [R] |
| Track background/disabled | [S], [R] |
| Fill = format/default | [S], [R] |
| Label left, numeric value right | [S] |

Inspect `140 × 8px` на втором progress-кадре относится к `50%` fill внутри
`280px` track, а не к отдельному размеру компонента **[S]**.

### Доступность

- Visible label программно связывается с progress.
- Native element передаёт min/max/value; для explicit acceptance также
  проверяются вычисленные `aria-valuenow`, `aria-valuemin=0`,
  `aria-valuemax=100`.
- При `showValue=false` скрывается только процентный текст.
- `100%` имеет завершённое состояние без изменения размеров.
- Indeterminate visual не показан **[U]**; его brand animation нельзя
  придумывать. До отдельного visual contract допустим нативный semantic
  indeterminate с минимальным reduced-motion-safe styling.

### Acceptance

- Любое значение `0..100` имеет пропорциональный fill; примеры 25/50/75/100
  совпадают с reference.
- 4 format цвета используют existing format tokens.
- Изменение value не двигает label и внешний layout.
- Native progress остаётся доступным во всех поддерживаемых браузерах.

## 9. Icon utilities

### Каталог

Планируется 8 локальных outline glyphs:

1. Arrow Right;
2. Chevron Down;
3. Upload;
4. File;
5. Download;
6. Check;
7. Close;
8. Spinner.

### Контракт

- Reference size `24px` **[S]**.
- Outline family, rounded/consistent stroke около `2px` **[I]**.
- SVG uses `viewBox`, `fill="none"`, `stroke="currentColor"`.
- Wrapper sizes используют existing `16/20/24px` icon tokens.
- Decorative icons получают `aria-hidden=true` и `focusable=false`.
- Informative standalone icon требует accessible label.
- Icon-only action получает name от button, а не от SVG.
- Spinner — единственная animated icon; при reduced motion вращение
  отключается или заменяется статичным glyph.
- Новая icon dependency и SVG loader не нужны.

Точные path coordinates для семи новых glyphs не показаны inspect-панелью
**[U]**. Реализация должна воспроизвести простую геометрию с каталога и пройти
rendered QA; нельзя смешивать другую icon family.

## Showcase и проверки

### Dev showcase

Добавить dev-only маршрут:

```text
src/app/(root)/component-showcase/page.tsx
src/app/(root)/component-showcase/component-showcase.module.css
```

В production маршрут вызывает `notFound()`. Showcase содержит:

- все предоставленные state/format combinations;
- controls с placeholder и filled content;
- label/helper hidden combinations;
- длинный label, filename и body;
- узкий контейнер около `343px`;
- error и disabled;
- безиконные варианты;
- URL validation examples;
- Dropzone file-validation result examples;
- Progress values и indeterminate semantic example.

Transient state previews реализуются приватными preview class/data attributes,
сгруппированными с настоящими pseudoclasses. Public component API не получает
`state`.

### Unit tests

Существующая инфраструктура Vitest/Testing Library переиспользуется; новые
пакеты не нужны.

Минимальные test owners:

```text
src/shared/ui/components/product-action/product-action.test.tsx
src/shared/ui/components/text-field/text-field.test.tsx
src/shared/ui/components/select/select.test.tsx
src/shared/ui/components/format-badge/format-badge.test.tsx
src/shared/ui/components/card/card.test.tsx
src/shared/ui/components/file-card/file-card.test.tsx
src/shared/ui/components/dropzone/dropzone.test.tsx
src/shared/ui/components/progress/progress.test.tsx
src/features/converter/url-validation.test.ts
```

Проверяются native semantics, refs/attributes, keyboard, accessible
relationships, disabled suppression, slot removal, callback contracts,
format/state classes и URL/file validation.

### Project verification

Для каждого implementation slice:

1. `npm run lint`;
2. `npm run typecheck`;
3. `npm run test`;
4. `npm run validate:content`;
5. `npm run validate:routes`;
6. `npm run validate:backend-contract`;
7. `npm run build`;
8. rendered QA showcase на desktop и около `375px`.

Проверка существующих страниц выполняется только после конкретной миграции
consumer, а не при создании изолированного компонента.

## Последовательность реализации

### Slice 0 — shared discriminants и icons

- Добавить `ProductFormat`.
- Расширить icon utilities.
- Проверить `currentColor`, decorative/informative semantics и размеры.
- Не мигрировать consumers.

### Slice 1 — FieldFrame, TextField и WebsiteUrlField

- Создать приватный `FieldFrame`.
- Реализовать `TextField`.
- Обновить pure URL validator под HTTP/HTTPS и сохранение hash.
- Создать feature-композицию `WebsiteUrlField`.
- Мигрировать только URL input в `ConverterForm`.
- Проверить, что невалидное значение не вызывает API/navigation.

### Slice 2 — Select

- Реализовать нативный `Select` поверх `FieldFrame`.
- Добавить options/placeholder/error API.
- Мигрировать один существующий select consumer после изолированной QA.

### Slice 3 — FormatBadge и Progress

- Реализовать format mapping один раз на уровне shared type/contract.
- Создать `FormatBadge`.
- Создать native `Progress`.
- Проверить все 4 format accents и значения 25/50/75/100.

### Slice 4 — ProductAction

- Реализовать только navigation semantics.
- Подтвердить недостающие hover/pressed цвета форматов до финального visual
  acceptance.
- Не заменять нативные submit buttons.

### Slice 5 — Card

- Реализовать article, action link и controlled selected appearance.
- Проверить accent rail и отсутствие пустого slot.
- Не превращать article с action link в nested button.

### Slice 6 — FileCard

- Скомпоновать `FormatBadge`, `FileIcon`, metadata и icon action.
- Проверить ellipsis/accessibility и disabled callback suppression.
- Подключать к preview/download feature только отдельным consumer change.

### Slice 7 — Dropzone

- Зафиксировать MIME/extensions и трактовку 25 MB.
- Реализовать client-only input/drag boundary и pure file validation.
- Проверить keyboard, drag transitions и callbacks.
- API/upload logic остаётся у feature.

### Slice 8 — полная showcase QA и постепенная миграция

- Собрать общую матрицу.
- Выполнить desktop/375 rendered pass.
- Мигрировать существующие элементы по одному owner за изменение.
- Удалять старые стили только после отсутствия imports и отдельной проверки.

## Риски и открытые решения

1. **ProductAction state colors [U].** Нет точных hover/pressed значений для
   каждого format. Нельзя завершать visual acceptance через догадку.
2. **Dropzone Slides type [U].** Нужен список MIME/extensions или решение, что
   Dropzone принимает только PDF/PPTX.
3. **25 MB [U].** План предполагает decimal `25_000_000` bytes; MiB требует
   явного изменения.
4. **Mobile visuals [U].** Mobile screenshots отсутствуют; описано только
   консервативное reflow-поведение.
5. **Typography inspect [I].** Стили сопоставлены с существующими foundations,
   но текущие кадры не показывают выбранные text style properties.
6. **Card selection semantics.** Presentational `Card` не должен скрыто владеть
   выбором; consumer обязан предоставить radio/checkbox/route semantics.
7. **HTTP acceptance.** Новый контракт явно разрешает HTTP и меняет текущее
   HTTPS-only поведение. Backend всё равно обязан повторно проверять URL,
   redirects и resolved addresses.
8. **Indeterminate Progress [U].** Семантика утверждена архитектурой, но
   отдельного визуального кадра нет.

## Definition of Done для всего набора

- Все public APIs типизированы, не имеют transient `state` props и не смешивают
  link/button semantics.
- Shared UI не содержит localized product copy, API calls или conversion
  lifecycle.
- URL validation едина для paste/blur/submit, принимает только публичные
  absolute HTTP/HTTPS URL и сохраняет пользовательские path/query/hash.
- Tokens frozen; новых `--p2f-*` нет.
- Каждый matching style использует существующий token; известный missing value
  остаётся локальным hardcode; неизвестный value не придумывается.
- Label, helper, error, focus, disabled, keyboard и accessible names проверены.
- Все state/format combinations представлены в dev showcase.
- Unit tests и `npm run check` проходят.
- Desktop и `375px` rendered QA не показывают layout shift, clipping,
  page-level overflow или пустые hidden slots.
- Existing consumers заменяются только отдельными миграционными срезами после
  готовности соответствующего компонента.
