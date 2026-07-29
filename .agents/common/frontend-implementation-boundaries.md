# Frontend Implementation Boundaries

Use English instructions and Unix-style paths.

Use existing CSS variables only.

Create no new project tests unless the current user explicitly requests the named test scope. Maintain an existing directly affected test only when the approved task changed its confirmed behavior contract; follow `common/test-policy.md`.

Introduce no project-code loops except a named isolated utility when no practical alternative exists.

Split hard-to-read chains into named variables and helpers.

Name behavior-bearing functions.

Apply only the Open-Closed Principle from SOLID when adding variants or behavior branches.
