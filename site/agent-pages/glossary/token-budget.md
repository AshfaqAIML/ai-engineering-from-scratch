# What is Token Budget?

Canonical page: https://aiengineeringfromscratch.com/glossary/token-budget
Category: Prompting & context

An explicit allocation of token capacity across instructions, evidence, history, tool results, reasoning or working space, and output.

## Why does Token Budget matter?

Every included token competes for context capacity, latency, and cost. Budgeting forces you to preserve high-value evidence first.

## What is the common confusion about Token Budget?

A token budget is a planning constraint. It is not the same as the model's maximum context window.

## Token Budget in practice

Reserve output capacity, cap retrieved chunks, summarize old tool results into state, and stop or compact before the model limit is reached.

## Lessons

- [Context Engineering: Windows, Budgets, Memory, and Retrieval](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F05-context-engineering) (Phase 11: LLM Engineering)
- [Any-Resolution Vision: Patch-n'-Pack and NaFlex](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F06-any-resolution-patch-n-pack) (Phase 12: Multimodal AI)
- [LLaVA-OneVision: Single-Image, Multi-Image, Video in One Model](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F08-llava-onevision-single-multi-video) (Phase 12: Multimodal AI)

## Related terms

- [Context Window](https://aiengineeringfromscratch.com/glossary/context-window)
- [Context Engineering](https://aiengineeringfromscratch.com/glossary/context-engineering)
- [Progressive Disclosure](https://aiengineeringfromscratch.com/glossary/progressive-disclosure)
- [Cost per Successful Task](https://aiengineeringfromscratch.com/glossary/cost-per-successful-task)
- [Context Compression](https://aiengineeringfromscratch.com/glossary/context-compression)
- [Skill Catalog](https://aiengineeringfromscratch.com/glossary/skill-catalog)
- [Termination Condition](https://aiengineeringfromscratch.com/glossary/termination-condition)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Token](https://aiengineeringfromscratch.com/glossary/token)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
