# What is Circuit Breaker?

Canonical page: https://aiengineeringfromscratch.com/glossary/circuit-breaker
Category: AI-native development

A reliability control that temporarily stops calls to a dependency after failures cross a threshold, then probes whether the dependency has recovered.

## Why does Circuit Breaker matter?

It prevents repeated model or tool failures from consuming latency, budget, and capacity across the rest of the system.

## What is the common confusion about Circuit Breaker?

A circuit breaker reacts to dependency health. A rate limit controls allowed request volume.

## Circuit Breaker in practice

Open the breaker after repeated provider timeouts, fail over or return a controlled response, then allow a limited health probe after a cooldown.

## Lessons

- [Kill Switches, Circuit Breakers, and Canary Tokens](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F14-kill-switches-canaries) (Phase 15: Autonomous Systems)
- [Caching, Rate Limiting & Cost Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F11-caching-cost) (Phase 11: LLM Engineering)
- [The Tool Interface — Why Agents Need Structured I/O](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F01-the-tool-interface) (Phase 13: Tools & Protocols)

## Related terms

- [Retry with Backoff](https://aiengineeringfromscratch.com/glossary/retry-with-backoff)
- [Rate Limit](https://aiengineeringfromscratch.com/glossary/rate-limit)
- [Model Router](https://aiengineeringfromscratch.com/glossary/model-router)
- [Backpressure](https://aiengineeringfromscratch.com/glossary/backpressure)
- [Graceful Degradation](https://aiengineeringfromscratch.com/glossary/graceful-degradation)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
