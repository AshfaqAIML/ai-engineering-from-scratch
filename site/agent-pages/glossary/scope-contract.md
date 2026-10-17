# What is Scope Contract?

Canonical page: https://aiengineeringfromscratch.com/glossary/scope-contract
Category: AI-native development

A concrete agreement that defines a task's goal, allowed and forbidden surfaces, expected artifacts, verification requirements, and stopping conditions.

## Why does Scope Contract matter?

It prevents an agent from turning a narrow fix into an unreviewable refactor or from claiming completion without evidence.

## What is the common confusion about Scope Contract?

A task description says what you want. A scope contract also defines boundaries and proof.

## Scope Contract in practice

State that only the parser module and its tests may change, public APIs must remain compatible, and the named test suite must pass.

## Lessons

- [Scope Contracts and Task Boundaries](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F36-scope-contracts) (Phase 14: Agent Engineering)

## Related terms

- [Coding Agent](https://aiengineeringfromscratch.com/glossary/coding-agent)
- [Patch](https://aiengineeringfromscratch.com/glossary/patch)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Handoff](https://aiengineeringfromscratch.com/glossary/handoff)
- [Delegation](https://aiengineeringfromscratch.com/glossary/delegation)
- [Repository Instructions](https://aiengineeringfromscratch.com/glossary/repository-instructions)
- [Repository Map](https://aiengineeringfromscratch.com/glossary/repository-map)
- [Reviewer Agent](https://aiengineeringfromscratch.com/glossary/reviewer-agent)
- [Worktree](https://aiengineeringfromscratch.com/glossary/worktree)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
