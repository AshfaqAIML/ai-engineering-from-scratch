# What is Skill Discovery?

Canonical page: https://aiengineeringfromscratch.com/glossary/skill-discovery
Category: Agents & tools

A runtime pipeline that searches configured roots, identifies candidate skill directories, validates their package contract, attaches scope and provenance, resolves collisions, and publishes eligible catalog entries.

## Why does Skill Discovery matter?

Deterministic discovery makes missing, malformed, shadowed, and unsafe packages diagnosable before model routing begins.

## What is the common confusion about Skill Discovery?

Skill discovery is not an unrestricted recursive search for filenames called `SKILL.md`; installation locations and precedence are runtime policy.

## Skill Discovery in practice

Declare search scopes and duplicate behavior, decide how symlinks are handled, reject resource escapes, and log why each candidate was accepted or rejected.

## Lessons

- [Skill Discovery and Progressive Disclosure](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F24-skill-discovery-and-progressive-disclosure) (Phase 13: Tools & Protocols)

## Related terms

- [Skill Catalog](https://aiengineeringfromscratch.com/glossary/skill-catalog)
- [Skill Bundle](https://aiengineeringfromscratch.com/glossary/skill-bundle)
- [Progressive Disclosure](https://aiengineeringfromscratch.com/glossary/progressive-disclosure)
- [Trust Boundary](https://aiengineeringfromscratch.com/glossary/trust-boundary)

## Sources

- [Agent Skills client implementation guide](https://agentskills.io/client-implementation/adding-skills-support)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
