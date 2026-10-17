# What is Paged KV Cache?

Canonical page: https://aiengineeringfromscratch.com/glossary/paged-kv-cache
Category: Infrastructure & serving

A KV-cache memory manager that stores attention state in fixed-size blocks and maps logical sequence positions to physical blocks instead of requiring one contiguous allocation per sequence.

## Why does Paged KV Cache matter?

Variable sequence lengths create fragmentation and unpredictable growth, so block-based allocation can improve usable memory and enable flexible sharing.

## What is the common confusion about Paged KV Cache?

Paged KV cache manages runtime attention-state memory. It does not move model parameters to disk or extend the model's trained context limit.

## Paged KV Cache in practice

Select block size from workload measurements, track allocation and eviction, isolate state between requests, and test cancellation and prefix sharing under memory pressure.

## Lessons

- [Serving Engine Internals — PagedAttention, Continuous Batching, Chunked Prefill](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F04-vllm-serving-internals) (Phase 17: Infrastructure & Production)

## Related terms

- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Prefix Caching](https://aiengineeringfromscratch.com/glossary/prefix-caching)
- [Context Window](https://aiengineeringfromscratch.com/glossary/context-window)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)

## Sources

- [Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
