# What is Readiness Probe?

Canonical page: https://aiengineeringfromscratch.com/glossary/readiness-probe
Category: Reliability & operations

A diagnostic that tells the traffic-routing layer whether a service instance is currently able to accept requests.

## Why does Readiness Probe matter?

A process can be alive while its model is unloaded, dependencies are unavailable, or warmup is incomplete, so sending traffic too early creates avoidable failures.

## What is the common confusion about Readiness Probe?

Readiness controls traffic eligibility. Liveness decides whether the process should be restarted, and neither proves that every model response will be correct.

## Readiness Probe in practice

Check the minimum dependencies required to serve, fail readiness during startup and draining, keep the probe inexpensive, and do not restart the process solely because readiness is false.

## Lessons

- [Building a Production LLM Application](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F13-production-app) (Phase 11: LLM Engineering)

## Related terms

- [Autoscaling](https://aiengineeringfromscratch.com/glossary/autoscaling)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)
- [Availability](https://aiengineeringfromscratch.com/glossary/availability)
- [Graceful Degradation](https://aiengineeringfromscratch.com/glossary/graceful-degradation)

## Sources

- [Kubernetes Liveness, Readiness, and Startup Probes](https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
