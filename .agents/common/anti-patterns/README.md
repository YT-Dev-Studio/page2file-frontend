# Anti-Pattern Templates

Purpose: provide small, loadable anti-pattern files with code examples. Load only the files relevant to the current task.

## Templates

- `no-as-const-variables.md` - do not create variables by casting values with `as const`.
- `no-anonymous-functions.md` - use named components, handlers, and helpers.
- `no-use-callback-by-default.md` - do not use `useCallback` unless the local code proves it is needed.
- `no-render-functions.md` - do not create JSX-returning helpers named `renderXxx`, `xxxRender`, or similar.
- `no-nested-array-pipelines.md` - avoid unreadable nested maps, filters, reduces, and inline transformations.
- `no-component-loops.md` - avoid imperative render preparation and unclear orchestration; allow clear local iteration.
- `no-unapproved-test-infrastructure.md` - use relevant project tests without introducing unapproved test tooling or broad suites.

## Use Rule

A skill should read `common/anti-patterns.md` first, then load only the concrete template that matches the current code risk.
