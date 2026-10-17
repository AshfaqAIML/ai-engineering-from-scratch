# What is Context Engineering?

Canonical page: https://aiengineeringfromscratch.com/glossary/context-engineering
Category: Prompting & context

Designing the full information environment supplied to a model at each step, including instructions, selected files, retrieved evidence, tool results, examples, state, and output constraints.

## Why does Context Engineering matter?

Model performance often fails because relevant evidence is missing, stale, badly ordered, or overwhelmed by noise.

## What is the common confusion about Context Engineering?

Prompt engineering focuses on instruction wording. Context engineering also decides what evidence and state enter the model's working context.

## Context Engineering in practice

Build a compact task packet with the goal, repository rules, relevant interfaces, recent tool output, and unresolved decisions, then update it as state changes.

## Lessons

- [Context Engineering: Windows, Budgets, Memory, and Retrieval](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F05-context-engineering) (Phase 11: LLM Engineering)

## Related terms

- [Context Window](https://aiengineeringfromscratch.com/glossary/context-window)
- [Progressive Disclosure](https://aiengineeringfromscratch.com/glossary/progressive-disclosure)
- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Repository Map](https://aiengineeringfromscratch.com/glossary/repository-map)
- [Agent Memory](https://aiengineeringfromscratch.com/glossary/agent-memory)
- [Context Compression](https://aiengineeringfromscratch.com/glossary/context-compression)
- [Data Minimization](https://aiengineeringfromscratch.com/glossary/data-minimization)
- [Lost in the Middle](https://aiengineeringfromscratch.com/glossary/lost-in-the-middle)
- [Prompt Engineering](https://aiengineeringfromscratch.com/glossary#prompt-engineering)
- [System Prompt](https://aiengineeringfromscratch.com/glossary/system-prompt)
- [Token Budget](https://aiengineeringfromscratch.com/glossary/token-budget)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
