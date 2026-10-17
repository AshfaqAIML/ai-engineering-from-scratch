# What is Backpressure?

Canonical page: https://aiengineeringfromscratch.com/glossary/backpressure
Category: AI-native development

A flow-control mechanism that slows or rejects upstream work when a downstream component cannot process it safely at the current rate.

## Why does Backpressure matter?

Without backpressure, queued agent runs, tool calls, or streamed events can exhaust memory, exceed rate limits, and amplify retries.

## What is the common confusion about Backpressure?

Backpressure protects capacity before failure. A circuit breaker stops calls after failures show a dependency is unhealthy.

## Backpressure in practice

When the evaluator queue reaches its limit, pause new agent jobs or return a retryable response instead of accepting unbounded work.

## Related terms

- [Rate Limit](https://aiengineeringfromscratch.com/glossary/rate-limit)
- [Retry with Backoff](https://aiengineeringfromscratch.com/glossary/retry-with-backoff)
- [Circuit Breaker](https://aiengineeringfromscratch.com/glossary/circuit-breaker)
- [Admission Control](https://aiengineeringfromscratch.com/glossary/admission-control)
- [Autoscaling](https://aiengineeringfromscratch.com/glossary/autoscaling)
- [Continuous Batching](https://aiengineeringfromscratch.com/glossary/continuous-batching)
- [Load Shedding](https://aiengineeringfromscratch.com/glossary/load-shedding)
- [Saturation](https://aiengineeringfromscratch.com/glossary/saturation)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
