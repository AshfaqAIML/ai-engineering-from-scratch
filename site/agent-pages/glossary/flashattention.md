# What is FlashAttention?

Canonical page: https://aiengineeringfromscratch.com/glossary/flashattention
Category: Infrastructure & serving

An exact attention algorithm that tiles the computation to reduce transfers between accelerator memory levels while avoiding materialization of the full attention matrix in high-bandwidth memory.

## Why does FlashAttention matter?

Attention can be limited by memory movement rather than arithmetic, especially for long sequences, so an IO-aware kernel can improve usable speed and memory efficiency.

## What is the common confusion about FlashAttention?

FlashAttention changes how attention is computed, not the mathematical attention result it targets. It is separate from KV caching and quantization.

## FlashAttention in practice

Use a kernel supported by the model's shapes, masks, dtype, and hardware, verify numerical tolerance, and benchmark end-to-end latency rather than quoting a paper result as a fixed multiplier.

## Lessons

- [KV Cache, Flash Attention & Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F12-kv-cache-flash-attention) (Phase 07: Transformers Deep Dive)

## Related terms

- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Self-Attention](https://aiengineeringfromscratch.com/glossary/self-attention)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Mixed Precision](https://aiengineeringfromscratch.com/glossary/mixed-precision)

## Sources

- [FlashAttention](https://arxiv.org/abs/2205.14135)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
