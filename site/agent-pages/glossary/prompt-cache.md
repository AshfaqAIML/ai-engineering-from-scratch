# What is Prompt Cache?

Canonical page: https://aiengineeringfromscratch.com/glossary/prompt-cache
Category: Prompting & context

Reuse of provider-side or application-side computation for an identical or eligible prompt prefix so repeated inference avoids some preprocessing work.

## Why does Prompt Cache matter?

Stable instructions and large shared documents can become cheaper or faster across repeated calls when the provider's cache contract is satisfied.

## What is the common confusion about Prompt Cache?

A prompt cache is a provider or application reuse contract and may use prefix caching internally. Prefix caching specifically reuses eligible exact-token KV state, while semantic caching reuses a prior result for a sufficiently similar request.

## Prompt Cache in practice

Place stable policy text before request-specific content, monitor cache-hit metadata, and treat misses as normal because eligibility and lifetime vary by provider.

## Lessons

- [Prompt Caching and Context Caching](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F15-prompt-caching) (Phase 11: LLM Engineering)

## Related terms

- [Semantic Cache](https://aiengineeringfromscratch.com/glossary/semantic-cache)
- [Prefix Caching](https://aiengineeringfromscratch.com/glossary/prefix-caching)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Context Window](https://aiengineeringfromscratch.com/glossary/context-window)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
