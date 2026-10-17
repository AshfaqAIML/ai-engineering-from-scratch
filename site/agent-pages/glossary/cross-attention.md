# What is Cross-Attention?

Canonical page: https://aiengineeringfromscratch.com/glossary/cross-attention
Category: Multimodal systems

Attention in which the query representation comes from one sequence or representation while keys and values come from another.

## Why does Cross-Attention matter?

It gives one stream a learnable way to retrieve information from another, such as language tokens attending to visual features.

## What is the common confusion about Cross-Attention?

Cross-attention is not intrinsically multimodal. It can connect two text sequences or other representations; self-attention instead derives queries, keys, and values from the same sequence representation.

## Cross-Attention in practice

State which stream supplies queries, keys, and values, apply masks for missing or invalid positions, and inspect whether the model still performs when one modality is ablated.

## Lessons

- [Flamingo and Gated Cross-Attention for Few-Shot VLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F04-flamingo-gated-cross-attention) (Phase 12: Multimodal AI)
- [Cross-Attention Fusion](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F61-cross-attention-fusion) (Phase 19: Capstone Projects)
- [From CLIP to BLIP-2 — Q-Former as Modality Bridge](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F03-blip2-qformer-bridge) (Phase 12: Multimodal AI)

## Related terms

- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Self-Attention](https://aiengineeringfromscratch.com/glossary/self-attention)
- [Vision-Language Model (VLM)](https://aiengineeringfromscratch.com/glossary/vision-language-model-vlm)
- [Multimodal Fusion](https://aiengineeringfromscratch.com/glossary/multimodal-fusion)

## Sources

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
