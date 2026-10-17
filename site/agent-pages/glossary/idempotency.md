# What is Idempotency?

Canonical page: https://aiengineeringfromscratch.com/glossary/idempotency
Category: AI-native development

The property that repeating the same operation with the same identity does not create additional side effects beyond the first successful application.

## Why does Idempotency matter?

Retries are normal in distributed agent systems. Without idempotency, one uncertain response can duplicate payments, comments, deployments, or records.

## What is the common confusion about Idempotency?

Idempotency does not mean every response is byte-for-byte identical. It means the intended state change is not duplicated.

## Idempotency in practice

Attach an idempotency key to a tool request and persist the completed result so a retry returns that result instead of executing the write again.

## Lessons

- [Human-in-the-Loop: Propose-Then-Commit](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F15-propose-then-commit) (Phase 15: Autonomous Systems)
- [Checkpoints and Rollback](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F16-checkpoints-rollback) (Phase 15: Autonomous Systems)

## Related terms

- [Retry with Backoff](https://aiengineeringfromscratch.com/glossary/retry-with-backoff)
- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Compensating Action](https://aiengineeringfromscratch.com/glossary/compensating-action)
- [Stateless MCP](https://aiengineeringfromscratch.com/glossary/stateless-mcp)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)

## Sources

- [HTTP Semantics: idempotent methods](https://www.rfc-editor.org/rfc/rfc9110.html#name-idempotent-methods)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
