# What is Durable Execution?

Canonical page: https://aiengineeringfromscratch.com/glossary/durable-execution
Category: Agents & tools

Running a workflow so its state and completed steps survive process crashes, restarts, or long waits without redoing confirmed side effects.

## Why does Durable Execution matter?

Agent tasks often span model calls, tools, approvals, and external systems. A transient process should not be the only record of progress.

## What is the common confusion about Durable Execution?

Durable execution does not make every operation safe automatically. Side effects still need idempotency and compensation rules.

## Durable Execution in practice

Persist each workflow transition, use idempotency keys for external writes, and resume from the latest checkpoint after a worker restarts.

## Lessons

- [Stateful Graph Orchestration — Durable Execution and Checkpoints](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F13-langgraph-stateful-graphs) (Phase 14: Agent Engineering)
- [Long-Running Background Agents: Durable Execution](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F12-durable-execution) (Phase 15: Autonomous Systems)
- [Production Runtimes: Queue, Event, Cron](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F29-production-runtimes) (Phase 14: Agent Engineering)
- [Production Scaling — Queues, Checkpoints, Durability](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F22-production-scaling-queues-checkpoints) (Phase 16: Multi-Agent & Swarms)

## Related terms

- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Idempotency](https://aiengineeringfromscratch.com/glossary/idempotency)
- [Approval Gate](https://aiengineeringfromscratch.com/glossary/approval-gate)
- [Compensating Action](https://aiengineeringfromscratch.com/glossary/compensating-action)
- [Orchestration](https://aiengineeringfromscratch.com/glossary/orchestration)
- [Rollback](https://aiengineeringfromscratch.com/glossary/rollback)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
