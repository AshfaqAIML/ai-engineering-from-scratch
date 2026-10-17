# What is Vision Transformer (ViT)?

Canonical page: https://aiengineeringfromscratch.com/glossary/vision-transformer-vit
Category: Multimodal systems

A vision architecture that represents an image as a sequence of patch embeddings with position information and processes that sequence with transformer encoder blocks.

## Why does Vision Transformer (ViT) matter?

It provides a sequence-model interface for visual data, but performance and compute depend on patch size, resolution, pretraining, and inductive biases.

## What is the common confusion about Vision Transformer (ViT)?

ViT is an architecture family, not every transformer that accepts images, and its patches are not inherently semantic objects.

## Vision Transformer (ViT) in practice

Keep patching and normalization consistent with training, account for position-embedding behavior at new resolutions, and compare against a suitable visual baseline on the target dataset.

## Lessons

- [Vision Transformers (ViT)](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F14-vision-transformers) (Phase 04: Computer Vision)
- [Vision Transformers (ViT)](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F09-vision-transformers) (Phase 07: Transformers Deep Dive)
- [Vision Transformers and the Patch-Token Primitive](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F01-vision-transformer-patch-tokens) (Phase 12: Multimodal AI)
- [Vision Transformer Encoder](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F59-vit-transformer) (Phase 19: Capstone Projects)

## Related terms

- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Patch Embedding](https://aiengineeringfromscratch.com/glossary/patch-embedding)
- [Self-Attention](https://aiengineeringfromscratch.com/glossary/self-attention)
- [Encoder](https://aiengineeringfromscratch.com/glossary/encoder)
- [Image Token](https://aiengineeringfromscratch.com/glossary/image-token)
- [Vision-Language Model (VLM)](https://aiengineeringfromscratch.com/glossary/vision-language-model-vlm)

## Sources

- [An Image is Worth 16x16 Words](https://arxiv.org/abs/2010.11929)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
