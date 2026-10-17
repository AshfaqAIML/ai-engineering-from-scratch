# What is Attention?

Canonical page: https://aiengineeringfromscratch.com/glossary/attention
Category: Models & inference

A mechanism that forms contextual representations by comparing query vectors with key vectors, normalizing the resulting scores, and using them to combine value vectors. Masks, position rules, or sparse patterns can restrict which positions participate.

What people say: "How a model focuses on important tokens."

## Why does Attention matter?

Attention lets a model route information between sequence positions, but it does not by itself explain or prove what the model understood.

## What is the common confusion about Attention?

Attention weights are computation coefficients, not a faithful explanation of model reasoning.

## Lessons

- [Self-Attention from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F02-self-attention-from-scratch) (Phase 07: Transformers Deep Dive)
- [Attention Mechanism — The Breakthrough](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F10-attention-mechanism) (Phase 05: NLP: Foundations to Advanced)
- [Speech Recognition (ASR) — CTC, RNN-T, Attention](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F04-speech-recognition-asr) (Phase 06: Speech & Audio)
- [Multi-Head Attention](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F03-multi-head-attention) (Phase 07: Transformers Deep Dive)
- [KV Cache, Flash Attention & Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F12-kv-cache-flash-attention) (Phase 07: Transformers Deep Dive)
- [Attention Variants — Sliding Window, Sparse, Differential](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F15-attention-variants) (Phase 07: Transformers Deep Dive)
- [Differential Attention (V2)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F16-differential-attention-v2) (Phase 10: LLMs from Scratch)
- [Native Sparse Attention (DeepSeek NSA)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F17-native-sparse-attention) (Phase 10: LLMs from Scratch)
- [Tensor Operations](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F12-tensor-operations) (Phase 01: Math Foundations)

## Related terms

- [Self-Attention](https://aiengineeringfromscratch.com/glossary/self-attention)
- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Cross-Attention](https://aiengineeringfromscratch.com/glossary/cross-attention)
- [FlashAttention](https://aiengineeringfromscratch.com/glossary/flashattention)
- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Visual Grounding](https://aiengineeringfromscratch.com/glossary/visual-grounding)

## Sources

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
