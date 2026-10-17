# What is Agent State?

Canonical page: https://aiengineeringfromscratch.com/glossary/agent-state
Category: Agents & tools

The explicit data an agent carries across steps, such as the current objective, completed actions, tool results, open questions, budgets, approvals, and artifact references.

## Why does Agent State matter?

Explicit state makes long tasks resumable, inspectable, and less dependent on the model reconstructing progress from a transcript.

## What is the common confusion about Agent State?

State is not the same as conversation history. A transcript is evidence; state is the compact operational record used to decide what happens next.

## Agent State in practice

Store the selected issue, changed files, latest test result, and remaining checks in a typed object that is updated after each action.

## Lessons

- [Repo Memory and Durable State](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F34-repo-memory-and-state) (Phase 14: Agent Engineering)
- [Agent State Machines — Graphs, Nodes, Checkpoints](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F16-langgraph-state-machines) (Phase 11: LLM Engineering)

## Related terms

- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)
- [Context Engineering](https://aiengineeringfromscratch.com/glossary/context-engineering)
- [Handoff](https://aiengineeringfromscratch.com/glossary/handoff)
- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Agent Harness](https://aiengineeringfromscratch.com/glossary/agent-harness)
- [Agent Memory](https://aiengineeringfromscratch.com/glossary/agent-memory)
- [Context Window](https://aiengineeringfromscratch.com/glossary/context-window)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Planning](https://aiengineeringfromscratch.com/glossary/planning)
- [Swarm](https://aiengineeringfromscratch.com/glossary/swarm)
- [Trace](https://aiengineeringfromscratch.com/glossary/trace)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
