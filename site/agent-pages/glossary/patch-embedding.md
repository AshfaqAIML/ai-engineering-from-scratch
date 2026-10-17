# What is Patch Embedding?

Canonical page: https://aiengineeringfromscratch.com/glossary/patch-embedding
Category: Multimodal systems

A learned projection that converts an image patch into a fixed-width vector used as one element of a transformer input sequence.

## Why does Patch Embedding matter?

It creates the interface between a spatial image grid and a sequence model, with patch size controlling token count and retained local detail.

## What is the common confusion about Patch Embedding?

A patch embedding is the vector representation of a patch, not a semantic object detector or a guarantee that patch boundaries match visual entities.

## Patch Embedding in practice

Record patch and image dimensions, handle padding or resizing explicitly, add position information, and measure how resolution changes affect both accuracy and token cost.

## Lessons

- [Vision Transformers and the Patch-Token Primitive](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F01-vision-transformer-patch-tokens) (Phase 12: Multimodal AI)
- [Vision Transformers (ViT)](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F14-vision-transformers) (Phase 04: Computer Vision)

## Related terms

- [Vision Transformer (ViT)](https://aiengineeringfromscratch.com/glossary/vision-transformer-vit)
- [Image Token](https://aiengineeringfromscratch.com/glossary/image-token)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Token](https://aiengineeringfromscratch.com/glossary/token)

## Sources

- [An Image is Worth 16x16 Words](https://arxiv.org/abs/2010.11929)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
