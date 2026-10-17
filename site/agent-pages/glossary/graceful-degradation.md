# What is Graceful Degradation?

Canonical page: https://aiengineeringfromscratch.com/glossary/graceful-degradation
Category: Reliability & operations

Preserving a bounded core service when capacity or dependencies are impaired by reducing optional quality, features, freshness, or workload instead of failing every request.

## Why does Graceful Degradation matter?

AI systems often depend on several slow or fallible components, so an explicit reduced mode can protect essential user outcomes during partial failure.

## What is the common confusion about Graceful Degradation?

Graceful degradation is not silently returning a worse answer as if nothing happened. Operators always need visibility; users need disclosure when the reduced mode materially changes the result or service contract.

## Graceful Degradation in practice

Predefine which capabilities may be disabled, keep the reduced mode visible to operators, protect safety checks, test the fallback under dependency failure, and restore full service deliberately. Tell users when correctness, safety, freshness, or a promised contract materially changes.

## Lessons

- [Building a Production LLM Application](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F13-production-app) (Phase 11: LLM Engineering)

## Related terms

- [Circuit Breaker](https://aiengineeringfromscratch.com/glossary/circuit-breaker)
- [Load Shedding](https://aiengineeringfromscratch.com/glossary/load-shedding)
- [Model Router](https://aiengineeringfromscratch.com/glossary/model-router)
- [Availability](https://aiengineeringfromscratch.com/glossary/availability)
- [Readiness Probe](https://aiengineeringfromscratch.com/glossary/readiness-probe)

## Sources

- [Google SRE: Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
