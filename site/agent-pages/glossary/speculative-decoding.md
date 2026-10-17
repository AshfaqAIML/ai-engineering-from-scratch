# What is Speculative Decoding?

Canonical page: https://aiengineeringfromscratch.com/glossary/speculative-decoding
Category: Models & inference

An inference method in which a cheaper draft process proposes several tokens and the target model scores those draft positions in parallel. In exact sampling variants, an acceptance and correction rule preserves the target model's output distribution.

## Why does Speculative Decoding matter?

It can reduce serial target-model decoding work when drafts are accepted, without requiring a change to the target model's trained weights.

## What is the common confusion about Speculative Decoding?

Speculative decoding is not ordinary model routing or unverified autocomplete. Exact variants preserve the target distribution through acceptance and correction, while approximate variants may trade that guarantee for speed.

## Speculative Decoding in practice

Measure acceptance rate and end-to-end latency on real prompts, include draft-model overhead, and verify that the implementation preserves the intended decoding distribution.

## Lessons

- [Speculative Decoding — Draft, Verify, Repeat](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F16-speculative-decoding) (Phase 07: Transformers Deep Dive)
- [Speculative Decoding and EAGLE-3](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F15-speculative-decoding-eagle3) (Phase 10: LLMs from Scratch)
- [Speculative Decoding and EAGLE](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F25-speculative-decoding) (Phase 10: LLMs from Scratch)
- [EAGLE-3 Speculative Decoding in Production](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F05-eagle3-speculative-decoding) (Phase 17: Infrastructure & Production)
- [KV Cache, Flash Attention & Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F12-kv-cache-flash-attention) (Phase 07: Transformers Deep Dive)
- [Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F12-inference-optimization) (Phase 10: LLMs from Scratch)

## Related terms

- [Autoregressive](https://aiengineeringfromscratch.com/glossary/autoregressive)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Decoding Strategy](https://aiengineeringfromscratch.com/glossary/decoding-strategy)
- [Tokens per Second (TPS)](https://aiengineeringfromscratch.com/glossary/tokens-per-second-tps)

## Sources

- [Fast Inference from Transformers via Speculative Decoding](https://proceedings.mlr.press/v202/leviathan23a.html)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
