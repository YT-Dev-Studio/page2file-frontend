# Verification and loop contract

## Per-slice loop

- Implement the smallest coherent slice.
- Run the smallest existing checks that cover it.
- Classify failures as related, pre-existing, or environment/tool blocked.
- Retry related failures at most three times.
- Every retry changes the hypothesis or implementation strategy.
- Stop before adding a package, changing a BFF contract, weakening TypeScript or
  accessibility rules, or expanding into an unapproved surface.

## Final verification

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run test
npm.cmd run build
```

Run the existing content, public-route, BFF-route, and backend-contract
validators exposed by project scripts. Inspect the production output for
route-family isolation.

Rendered QA covers representative routes for every changed family at 375, 768,
and 1440 px, including navigation, overflow, keyboard focus, form
idle/loading/error/ready states, and blocking console errors. If the configured
Browser/Playwright capability is unavailable, rendered QA is blocked rather
than substituted with an unapproved local dependency.

## Commit rules

- One local commit per completed slice using the message in
  `05-execution-plan.md`.
- Review staged changes before committing.
- Do not amend unrelated history, push, open a PR, deploy, or create empty
  commits.
- Preserve unrelated user changes and stop if they overlap a required edit.

## Independent review

The final review evaluates AC-201 through AC-210 against the diff, command
output, route behavior, and rendered evidence. Blocking/high findings return to
the affected slice for one bounded convergence pass.
