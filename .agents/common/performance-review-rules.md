# Performance Review Rules

Purpose: focus frontend performance review on evidence and user-visible risk.

## Rules

- Prioritize render-blocking work, excessive client bundles, repeated expensive
  renders, layout shift, image misuse, unnecessary network waterfalls, and
  avoidable hydration or route-load cost.
- Prefer existing project metrics, browser evidence, and framework build output
  over speculative optimization.
- Do not add caching, memoization, virtualization, build tooling, or dependencies
  without evidence and approval.
- Label speculative opportunities as optional improvements, not required fixes.
