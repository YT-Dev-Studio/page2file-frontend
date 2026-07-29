# Portable Skill Core Contract

Purpose: define skill content that can be emitted across runtime targets without
depending on source graph metadata or client-specific installation behavior.

## Portable Requirements

Every distributed skill must include:

- `SKILL.md`;
- YAML frontmatter containing `name` and `description`;
- trigger-oriented `description`;
- plain Markdown workflow instructions;
- relative references that exist in the package or are clearly external project
  overlays;
- no host-project facts;
- no platform-specific install commands in the shared workflow.

## Source Versus Target

Source `SKILL.md` files may include `.agents` graph metadata after `name` and
`description`.

Generated target `SKILL.md` files must keep only portable frontmatter keys
unless a target validator explicitly permits more.
