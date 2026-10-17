# What is Self-Attention?

Canonical page: https://aiengineeringfromscratch.com/glossary/self-attention
Category: Models & inference

Attention in which queries, keys, and values are derived from the same sequence representation. Scaled similarity scores are normalized and used to combine values, subject to causal, padding, local, or other masks.

What people say: "Tokens deciding which other tokens matter."

## Why does Self-Attention matter?

It builds context-sensitive token representations, but the permitted attention pattern depends on the architecture.

## What is the common confusion about Self-Attention?

Not every token can always attend to every other token. Causal and sparse models intentionally restrict connections.

## Lessons

- [Self-Attention from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F02-self-attention-from-scratch) (Phase 07: Transformers Deep Dive)
- [Multi-Head Self-Attention](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F33-multihead-self-attention) (Phase 19: Capstone Projects)
- [Pre-Training a Mini GPT (124M Parameters)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F04-pre-training-mini-gpt) (Phase 10: LLMs from Scratch)
- [Vision Transformer Encoder](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F59-vit-transformer) (Phase 19: Capstone Projects)

## Related terms

- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Context Window](https://aiengineeringfromscratch.com/glossary/context-window)
- [Cross-Attention](https://aiengineeringfromscratch.com/glossary/cross-attention)
- [FlashAttention](https://aiengineeringfromscratch.com/glossary/flashattention)
- [Vision Transformer (ViT)](https://aiengineeringfromscratch.com/glossary/vision-transformer-vit)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
