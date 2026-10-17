# What is Chunked Prefill?

Canonical page: https://aiengineeringfromscratch.com/glossary/chunked-prefill
Category: Infrastructure & serving

A serving technique that divides a long prompt's prefill work into smaller schedulable pieces so prompt processing can interleave with decode work from other requests.

## Why does Chunked Prefill matter?

One long prompt can otherwise occupy the accelerator and delay active generations, producing poor tail latency even when total throughput looks healthy.

## What is the common confusion about Chunked Prefill?

Chunked prefill changes how prompt computation is scheduled. It does not split the user's context into independent semantic chunks or change the model's context window.

## Chunked Prefill in practice

Choose a chunk policy from measured workloads, account for scheduling overhead, and compare prefill completion, decode latency, and goodput under mixed prompt lengths.

## Lessons

- [Serving Engine Internals — PagedAttention, Continuous Batching, Chunked Prefill](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F04-vllm-serving-internals) (Phase 17: Infrastructure & Production)

## Related terms

- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [Dynamic Batching](https://aiengineeringfromscratch.com/glossary/dynamic-batching)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)

## Sources

- [Sarathi-Serve](https://arxiv.org/abs/2403.02310)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
