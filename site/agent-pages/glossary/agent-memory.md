# What is Agent Memory?

Canonical page: https://aiengineeringfromscratch.com/glossary/agent-memory
Category: Agents & tools

Information stored outside the model and selected for use in later agent steps, such as prior decisions, user preferences, task episodes, or verified facts.

## Why does Agent Memory matter?

It gives an agent continuity beyond one context window without forcing every past event into every prompt.

## What is the common confusion about Agent Memory?

Agent memory is not the same as agent state. State tracks the current run; memory preserves selected information for possible future runs.

## Agent Memory in practice

Store a compact task outcome with provenance, retrieve it only when relevant, and let the user inspect or correct durable personal information.

## Lessons

- [Agent Memory — Virtual Context and Memory Paging](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F07-memory-virtual-context-memgpt) (Phase 14: Agent Engineering)

## Related terms

- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Context Engineering](https://aiengineeringfromscratch.com/glossary/context-engineering)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Semantic Cache](https://aiengineeringfromscratch.com/glossary/semantic-cache)

## Sources

- [Generative Agents](https://arxiv.org/abs/2304.03442)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
