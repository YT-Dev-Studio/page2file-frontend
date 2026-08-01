# Execution plan

| Slice | Outcome | Criteria | Commit |
| --- | --- | --- | --- |
| S-201 | Durable plan folder | AC-202, AC-210 | `docs: add page2file redesign execution plan` |
| S-202 | Route ownership and two-mode header | AC-201, AC-207 | `refactor: split public routes and navigation` |
| S-203 | Shared public composition | AC-202, AC-203 | `refactor: establish shared public page composition` |
| S-204 | Stable home and usable demo result | AC-204 | `refactor: stabilize home page experience` |
| S-205 | PDF/PPTX workbench redesign | AC-203, AC-204 | `feat: redesign web conversion pages` |
| S-206 | GPT and AI-chat workflow redesign | AC-202, AC-203 | `feat: redesign assistant workflow pages` |
| S-207 | Blog/article/update redesign | AC-202, AC-203 | `feat: redesign blog and update pages` |
| S-208 | Extension guide redesign | AC-202, AC-203 | `feat: redesign extension guide` |
| S-209 | Legal/security and Russian publication copy | AC-205 | `feat: publish russian legal and security content` |
| S-210 | Proven legacy cleanup and decision sync | AC-206, AC-208 | `refactor: remove superseded frontend code` |
| S-211 | Verification and convergence | AC-209, AC-210 | `fix: converge redesigned public pages` when needed |

Slices execute in order. A slice is committed only after its relevant lint,
typecheck, test, validator, route, and rendered checks have either passed or an
honest environment blocker has been recorded. No empty convergence commit is
created.
