# What is Context Compression?

Canonical page: https://aiengineeringfromscratch.com/glossary/context-compression
Category: Prompting & context

Reducing the token footprint of source material while attempting to preserve the information required for a later model decision.

## Why does Context Compression matter?

Compression can make long tasks fit within budget, but every omitted detail creates a risk that the model loses evidence, constraints, or unresolved state.

## What is the common confusion about Context Compression?

Compression is lossy unless it retains the full original. A shorter summary is not automatically an equivalent context.

## Context Compression in practice

Preserve authoritative facts and identifiers verbatim, summarize redundant history, attach source pointers, and test the compressed context on representative tasks.

## Lessons

- [Context Engineering: Windows, Budgets, Memory, and Retrieval](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F05-context-engineering) (Phase 11: LLM Engineering)

## Related terms

- [Token Budget](https://aiengineeringfromscratch.com/glossary/token-budget)
- [Context Engineering](https://aiengineeringfromscratch.com/glossary/context-engineering)
- [Progressive Disclosure](https://aiengineeringfromscratch.com/glossary/progressive-disclosure)
- [Handoff](https://aiengineeringfromscratch.com/glossary/handoff)

## Sources

- [LLMLingua](https://arxiv.org/abs/2310.05736)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
