# What is Rollback?

Canonical page: https://aiengineeringfromscratch.com/glossary/rollback
Category: Reliability & operations

Restoring a previously known deployment or configuration when the current release violates operational, quality, or safety criteria.

## Why does Rollback matter?

Agent and model changes can fail in production despite pre-deployment evaluation, so recovery must be designed before rollout.

## What is the common confusion about Rollback?

Code rollback does not automatically reverse database migrations, external side effects, cached outputs, or data written by the bad release.

## Rollback in practice

Retain versioned artifacts and configuration, define rollback triggers, rehearse the command and data implications, and verify service health after restoration.

## Lessons

- [MCP Registry Supply Chain: Admission, Drift, and Rollback](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F30-mcp-registry-supply-chain-and-drift) (Phase 13: Tools & Protocols)
- [Checkpoints and Rollback](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F16-checkpoints-rollback) (Phase 15: Autonomous Systems)
- [Building a Complete LLM Pipeline](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F13-building-complete-llm-pipeline) (Phase 10: LLMs from Scratch)
- [Speculative Decoding and EAGLE-3](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F15-speculative-decoding-eagle3) (Phase 10: LLMs from Scratch)
- [Scope Contracts and Task Boundaries](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F36-scope-contracts) (Phase 14: Agent Engineering)
- [Shadow Traffic, Canary Rollout, and Progressive Deployment for LLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F20-shadow-canary-progressive) (Phase 17: Infrastructure & Production)

## Related terms

- [Canary Release](https://aiengineeringfromscratch.com/glossary/canary-release)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Regression Test](https://aiengineeringfromscratch.com/glossary/regression-test)
- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)

## Sources

- [Kubernetes Deployments: Rolling Back](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
