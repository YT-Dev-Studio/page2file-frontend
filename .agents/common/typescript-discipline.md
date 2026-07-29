# TypeScript Discipline

Purpose: preserve type safety and local readability during frontend fixes, refactors, and reviews.

## Rules

- Preserve the project's TypeScript strictness.
- Prefer narrowing, discriminated unions, and explicit types over casts.
- Avoid `any` unless the project already uses it and no safer narrow type is available.
- Do not use forced casts to hide design errors.
- Use arrow functions for new or changed functions unless local runtime semantics require otherwise.
- Add explicit return types to new or changed exported functions, helpers, callbacks, predicates, mappers, selectors, adapters, hooks, handlers, and non-trivial local functions.
- Type component props and public helpers explicitly when they cross file boundaries.
- Prefer object destructuring for named fields when it improves clarity and does not hide nullability.
- Model one lifecycle or async state with one typed status discriminant, not parallel boolean flags.
- Keep public types stable during refactors unless the behavior change is approved.
- Align with local `tsconfig` and nearby patterns before generic advice.

## Status Modeling

Use one status field for mutually exclusive states.

```ts
type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

type RequestState = {
  status: RequestStatus;
};
```

Use a discriminated union when each status carries different data.

```ts
type LoadState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };
```
