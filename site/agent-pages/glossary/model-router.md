# What is Model Router?

Canonical page: https://aiengineeringfromscratch.com/glossary/model-router
Category: AI-native development

A component that selects a model or provider for a request using requirements such as capability, latency, cost, context size, policy, and current availability.

## Why does Model Router matter?

Different tasks and failure conditions justify different models, and routing can improve outcome quality without sending every request to the largest option.

## What is the common confusion about Model Router?

Routing is a policy decision. Random load balancing only distributes traffic.

## Model Router in practice

Send low-risk extraction to a fast model, complex code review to a stronger model, and fail over only to providers that satisfy the same data policy.

## Lessons

- [Caching, Rate Limiting & Cost Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F11-caching-cost) (Phase 11: LLM Engineering)

## Related terms

- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Circuit Breaker](https://aiengineeringfromscratch.com/glossary/circuit-breaker)
- [Rate Limit](https://aiengineeringfromscratch.com/glossary/rate-limit)
- [Cost per Successful Task](https://aiengineeringfromscratch.com/glossary/cost-per-successful-task)
- [Graceful Degradation](https://aiengineeringfromscratch.com/glossary/graceful-degradation)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)
- [MoE (Mixture of Experts)](https://aiengineeringfromscratch.com/glossary/moe-mixture-of-experts)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
