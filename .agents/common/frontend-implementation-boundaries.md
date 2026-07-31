# Frontend Implementation Boundaries

Use English instructions and Unix-style paths.

Use existing approved CSS variables for every reusable design value.

Treat an approved token registry as frozen during component, feature, layout,
bugfix, and refactor work. Do not add, rename, alias, or change tokens unless
the user explicitly requests a token-system change.

When no approved token matches a required value, hardcode the exact value
directly in the owning local stylesheet. Keep that hardcode local; do not create
a new custom property or promote it into the shared token registry.

Create no new project tests unless the current user explicitly requests the named test scope. Maintain an existing directly affected test only when the approved task changed its confirmed behavior contract; follow `common/test-policy.md`.

Introduce no project-code loops except a named isolated utility when no practical alternative exists.

Split hard-to-read chains into named variables and helpers.

Name behavior-bearing functions.

Apply only the Open-Closed Principle from SOLID when adding variants or behavior branches.
