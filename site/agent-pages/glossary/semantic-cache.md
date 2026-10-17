# What is Semantic Cache?

Canonical page: https://aiengineeringfromscratch.com/glossary/semantic-cache
Category: AI-native development

A cache that reuses a previous result when a new request is judged sufficiently similar under a chosen representation and threshold.

## Why does Semantic Cache matter?

It can reduce latency and cost for repeated intents, but an incorrect match can return stale or user-inappropriate output.

## What is the common confusion about Semantic Cache?

Semantic similarity does not guarantee that two requests have the same correct answer. A semantic cache reuses a prior result, while prefix caching reuses exact-token KV state and prompt caching follows provider or application eligibility rules.

## Semantic Cache in practice

Cache low-risk FAQ answers by normalized intent, include tenant and policy version in the key, and bypass the cache for personalized or time-sensitive requests.

## Lessons

- [Caching, Rate Limiting & Cost Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F11-caching-cost) (Phase 11: LLM Engineering)
- [Building a Production LLM Application](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F13-production-app) (Phase 11: LLM Engineering)

## Related terms

- [Prompt Cache](https://aiengineeringfromscratch.com/glossary/prompt-cache)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Cost per Successful Task](https://aiengineeringfromscratch.com/glossary/cost-per-successful-task)
- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)
- [Agent Memory](https://aiengineeringfromscratch.com/glossary/agent-memory)
- [Prefix Caching](https://aiengineeringfromscratch.com/glossary/prefix-caching)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
