# What is KV Cache?

Canonical page: https://aiengineeringfromscratch.com/glossary/kv-cache
Category: Models & inference

Stored key and value tensors from earlier positions in autoregressive generation. Reusing them avoids recomputing attention projections for the unchanged prefix at every decoding step.

What people say: "A cache that makes token generation faster."

## Why does KV Cache matter?

It reduces repeated computation but consumes memory that grows with sequence length, layers, batch, and model configuration.

## What is the common confusion about KV Cache?

A KV cache is runtime attention state for a sequence. Prefix caching reuses eligible KV state across requests, while prompt caching is a broader provider or application reuse contract.

## Lessons

- [KV Cache, Flash Attention & Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F12-kv-cache-flash-attention) (Phase 07: Transformers Deep Dive)
- [Multi-Region LLM Serving and KV Cache Locality](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F11-multi-region-kv-locality) (Phase 17: Infrastructure & Production)
- [Attention Variants — Sliding Window, Sparse, Differential](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F15-attention-variants) (Phase 07: Transformers Deep Dive)
- [Speculative Decoding — Draft, Verify, Repeat](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F16-speculative-decoding) (Phase 07: Transformers Deep Dive)
- [Pre-Training a Mini GPT (124M Parameters)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F04-pre-training-mini-gpt) (Phase 10: LLMs from Scratch)
- [Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F12-inference-optimization) (Phase 10: LLMs from Scratch)
- [Open Models: Architecture Walkthroughs](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F14-open-models-architecture-walkthroughs) (Phase 10: LLMs from Scratch)
- [Speculative Decoding and EAGLE-3](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F15-speculative-decoding-eagle3) (Phase 10: LLMs from Scratch)
- [Hardware-Specialized Inference Compilation — FP8 and NVFP4 on Blackwell](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F07-tensorrt-llm-blackwell) (Phase 17: Infrastructure & Production)

## Related terms

- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Autoregressive](https://aiengineeringfromscratch.com/glossary/autoregressive)
- [Prefix Caching](https://aiengineeringfromscratch.com/glossary/prefix-caching)
- [Prompt Cache](https://aiengineeringfromscratch.com/glossary/prompt-cache)
- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [FlashAttention](https://aiengineeringfromscratch.com/glossary/flashattention)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [Paged KV Cache](https://aiengineeringfromscratch.com/glossary/paged-kv-cache)
- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Speculative Decoding](https://aiengineeringfromscratch.com/glossary/speculative-decoding)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
