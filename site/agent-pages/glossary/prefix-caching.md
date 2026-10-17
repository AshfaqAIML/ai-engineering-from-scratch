# What is Prefix Caching?

Canonical page: https://aiengineeringfromscratch.com/glossary/prefix-caching
Category: Infrastructure & serving

Reusing KV-cache blocks produced for an identical eligible token prefix across requests so the serving runtime can skip repeated prefix computation.

## Why does Prefix Caching matter?

Shared system instructions, templates, or documents can consume substantial prefill work, but reuse only helps when token sequences and cache eligibility match.

## What is the common confusion about Prefix Caching?

Prefix caching reuses runtime attention state for exact token prefixes. Prompt caching is a broader provider or application contract, while semantic caching reuses a prior result for a similar request.

## Prefix Caching in practice

Place stable tokens before request-specific content, include model and tokenizer versions in cache identity, isolate tenant-sensitive state, monitor hit rate, and treat eviction as normal.

## Lessons

- [Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F12-inference-optimization) (Phase 10: LLMs from Scratch)
- [Prompt Caching and Semantic Caching Economics](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F14-prompt-semantic-caching) (Phase 17: Infrastructure & Production)

## Related terms

- [Prompt Cache](https://aiengineeringfromscratch.com/glossary/prompt-cache)
- [Semantic Cache](https://aiengineeringfromscratch.com/glossary/semantic-cache)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Paged KV Cache](https://aiengineeringfromscratch.com/glossary/paged-kv-cache)

## Sources

- [SGLang](https://arxiv.org/abs/2312.07104)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
