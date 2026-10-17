# What is Checkpoint?

Canonical page: https://aiengineeringfromscratch.com/glossary/checkpoint
Category: Agents & tools

A durable snapshot used to resume from a known boundary. In a workflow, it stores operational state and artifact references. In model training, it can store parameters, optimizer state, scheduler state, and the training position.

## Why does Checkpoint matter?

Long-running workflows and training runs can recover from interruption without replaying completed work or losing expensive progress.

## What is the common confusion about Checkpoint?

A workflow checkpoint and a model-training checkpoint serve the same recovery goal but preserve different state. Neither is merely a transcript or a weights file with no resume metadata.

## Checkpoint in practice

Save an agent's accepted patch and test evidence after a verified step, or save a training run's weights, optimizer state, random state, and data position before shutdown.

## Lessons

- [Checkpoint Save and Resume](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F47-checkpoint-save-resume) (Phase 19: Capstone Projects)
- [Repo Memory and Durable State](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F34-repo-memory-and-state) (Phase 14: Agent Engineering)
- [Agent State Machines — Graphs, Nodes, Checkpoints](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F16-langgraph-state-machines) (Phase 11: LLM Engineering)
- [Stateful Graph Orchestration — Durable Execution and Checkpoints](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F13-langgraph-stateful-graphs) (Phase 14: Agent Engineering)
- [Checkpoints and Rollback](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F16-checkpoints-rollback) (Phase 15: Autonomous Systems)
- [Production Scaling — Queues, Checkpoints, Durability](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F22-production-scaling-queues-checkpoints) (Phase 16: Multi-Agent & Swarms)
- [Sharded Checkpoint and Atomic Resume](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F80-checkpoint-sharded-resume) (Phase 19: Capstone Projects)
- [Gradient Checkpointing and Activation Recomputation](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F34-gradient-checkpointing) (Phase 10: LLMs from Scratch)
- [Show-o and Discrete-Diffusion Unified Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F14-show-o-discrete-diffusion-unified) (Phase 12: Multimodal AI)
- [Long-Running Background Agents: Durable Execution](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F12-durable-execution) (Phase 15: Autonomous Systems)

## Related terms

- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)
- [Activation Checkpointing](https://aiengineeringfromscratch.com/glossary/activation-checkpointing)
- [Agent Memory](https://aiengineeringfromscratch.com/glossary/agent-memory)
- [Compensating Action](https://aiengineeringfromscratch.com/glossary/compensating-action)
- [Handoff](https://aiengineeringfromscratch.com/glossary/handoff)
- [Idempotency](https://aiengineeringfromscratch.com/glossary/idempotency)
- [Rollback](https://aiengineeringfromscratch.com/glossary/rollback)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
