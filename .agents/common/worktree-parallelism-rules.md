# Worktree Parallelism Rules

Purpose: define safe optional use of multiple agents or branches without file ownership conflicts.

Parallel work is host-dependent and never required for ordinary WebDev Agent Kit tasks.

## When To Consider Parallelism

Use parallel branches, worktrees, or agents only when:

- the task is deep or explicitly experimental;
- the work can be split into independent scopes;
- each agent owns different files, routes, or hypotheses;
- merge and review strategy is defined before work starts;
- the user approved the added complexity or the host workflow already provides it.

## When Not To Use Parallelism

Do not use parallelism for:

- Fast Lookup;
- lightweight fixes;
- one component edit;
- shared-file changes without ownership boundaries;
- package, build, or config edits that would conflict easily;
- tasks where review cost is higher than implementation cost.

## Required Contract

Before parallel work starts, define:

```text
branch or worktree names
owner for each scope
files or surfaces each agent may change
verification for each branch
merge order
reviewer or judge
conflict handling plan
```

## Validation Gate

Parallel work is valid only when isolated scopes and a final comparison or review step are explicit.
