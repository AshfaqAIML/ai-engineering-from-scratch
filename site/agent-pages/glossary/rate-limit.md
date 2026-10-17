# What is Rate Limit?

Canonical page: https://aiengineeringfromscratch.com/glossary/rate-limit
Category: AI-native development

A policy that caps requests, tokens, concurrent work, or another resource within a defined time or capacity window.

## Why does Rate Limit matter?

It protects providers and your own system from overload, uncontrolled spend, and unfair resource use.

## What is the common confusion about Rate Limit?

A rate limit controls allowed usage. Backpressure propagates downstream capacity constraints through a system.

## Rate Limit in practice

Enforce per-tenant token and concurrency limits, read provider retry metadata, and queue or reject excess work predictably.

## Lessons

- [Stateless MCP Gateways and Registry Admission](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F17-mcp-gateways-and-registries) (Phase 13: Tools & Protocols)
- [LLM Routing Layer — LiteLLM, OpenRouter, Portkey](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F21-llm-routing-layer) (Phase 13: Tools & Protocols)

## Related terms

- [Backpressure](https://aiengineeringfromscratch.com/glossary/backpressure)
- [Retry with Backoff](https://aiengineeringfromscratch.com/glossary/retry-with-backoff)
- [Circuit Breaker](https://aiengineeringfromscratch.com/glossary/circuit-breaker)
- [Admission Control](https://aiengineeringfromscratch.com/glossary/admission-control)
- [Continuous Batching](https://aiengineeringfromscratch.com/glossary/continuous-batching)
- [Load Shedding](https://aiengineeringfromscratch.com/glossary/load-shedding)
- [Model Router](https://aiengineeringfromscratch.com/glossary/model-router)
- [Retry Budget](https://aiengineeringfromscratch.com/glossary/retry-budget)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
