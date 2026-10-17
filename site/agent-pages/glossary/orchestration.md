# What is Orchestration?

Canonical page: https://aiengineeringfromscratch.com/glossary/orchestration
Category: Agents & tools

The control logic that sequences, branches, delegates, retries, pauses, resumes, and terminates work across model and tool steps.

## Why does Orchestration matter?

Reliable agent behavior depends on explicit workflow decisions outside the model, especially when tasks have dependencies or consequential side effects.

## What is the common confusion about Orchestration?

Orchestration is not synonymous with autonomy or multi-agent systems; one agent can be orchestrated through a deterministic workflow.

## Orchestration in practice

Encode stable steps as a workflow or state machine, expose bounded decisions to the model, and persist transitions before external writes.

## Lessons

- [Agent Framework Tradeoffs — Graph, Role, and Actor Orchestration](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F17-agent-framework-tradeoffs) (Phase 11: LLM Engineering)
- [Stateful Graph Orchestration — Durable Execution and Checkpoints](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F13-langgraph-stateful-graphs) (Phase 14: Agent Engineering)
- [Orchestration Patterns: Supervisor, Swarm, Hierarchical](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F28-orchestration-patterns) (Phase 14: Agent Engineering)
- [Handoffs and Routines — Stateless Orchestration](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F11-handoffs-and-routines) (Phase 16: Multi-Agent & Swarms)
- [Skill Invocation and Routing](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F25-skill-invocation-and-routing) (Phase 13: Tools & Protocols)

## Related terms

- [Agent Harness](https://aiengineeringfromscratch.com/glossary/agent-harness)
- [Planning](https://aiengineeringfromscratch.com/glossary/planning)
- [Delegation](https://aiengineeringfromscratch.com/glossary/delegation)
- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)

## Sources

- [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
