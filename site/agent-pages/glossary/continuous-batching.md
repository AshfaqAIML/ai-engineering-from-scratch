# What is Continuous Batching?

Canonical page: https://aiengineeringfromscratch.com/glossary/continuous-batching
Category: Infrastructure & serving

A serving scheduler that adds and removes generation requests at iteration boundaries instead of waiting for every request in a fixed batch to finish.

## Why does Continuous Batching matter?

Autoregressive requests produce different output lengths, so continuous batching can keep accelerators utilized without forcing short requests to wait for the longest one.

## What is the common confusion about Continuous Batching?

Continuous batching is an inference scheduling policy, not gradient accumulation or a training batch-size technique.

## Continuous Batching in practice

Admit new requests when capacity becomes available, track per-request latency, and apply backpressure when the live batch or KV-cache budget is full.

## Lessons

- [Serving Engine Internals — PagedAttention, Continuous Batching, Chunked Prefill](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F04-vllm-serving-internals) (Phase 17: Infrastructure & Production)
- [KV Cache, Flash Attention & Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F12-kv-cache-flash-attention) (Phase 07: Transformers Deep Dive)
- [Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F12-inference-optimization) (Phase 10: LLMs from Scratch)

## Related terms

- [Dynamic Batching](https://aiengineeringfromscratch.com/glossary/dynamic-batching)
- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [Backpressure](https://aiengineeringfromscratch.com/glossary/backpressure)
- [Rate Limit](https://aiengineeringfromscratch.com/glossary/rate-limit)

## Sources

- [Orca](https://www.usenix.org/conference/osdi22/presentation/yu)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
