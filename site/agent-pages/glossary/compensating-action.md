# What is Compensating Action?

Canonical page: https://aiengineeringfromscratch.com/glossary/compensating-action
Category: Agents & tools

A deliberate operation that semantically counteracts a completed side effect when the original operation cannot be rolled back atomically.

## Why does Compensating Action matter?

Multi-step agent workflows cross databases and external services where a later failure cannot undo earlier writes through one transaction.

## What is the common confusion about Compensating Action?

Compensation is a new business action, not time travel. It can fail and therefore needs idempotency, monitoring, and escalation.

## Compensating Action in practice

If a booking workflow charges a card but the reservation fails, issue a tracked refund and preserve both events rather than deleting history.

## Related terms

- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)
- [Idempotency](https://aiengineeringfromscratch.com/glossary/idempotency)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Approval Gate](https://aiengineeringfromscratch.com/glossary/approval-gate)

## Sources

- [Sagas](https://dl.acm.org/doi/10.1145/38713.38742)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
