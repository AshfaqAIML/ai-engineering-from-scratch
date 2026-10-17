# What is Image Token?

Canonical page: https://aiengineeringfromscratch.com/glossary/image-token
Category: Multimodal systems

A model-specific visual unit represented as a vector or discrete code, commonly derived from an image patch, region, or learned visual-codebook entry.

## Why does Image Token matter?

Turning visual input into a sequence lets transformer-style components process images together with text or other tokenized modalities.

## What is the common confusion about Image Token?

An image token is not necessarily one pixel, one object, or one fixed physical area. Its scope follows the visual encoder or tokenizer.

## Image Token in practice

Document whether tokens are continuous patches or discrete codes, preserve spatial position, test resolution and aspect-ratio changes, and count visual tokens in the model's input budget.

## Lessons

- [Vision-Language Models — The ViT-MLP-LLM Pattern](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F25-vision-language-models) (Phase 04: Computer Vision)

## Related terms

- [Patch Embedding](https://aiengineeringfromscratch.com/glossary/patch-embedding)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [VAE (Variational Autoencoder)](https://aiengineeringfromscratch.com/glossary/vae-variational-autoencoder)
- [Vision Transformer (ViT)](https://aiengineeringfromscratch.com/glossary/vision-transformer-vit)

## Sources

- [Vision Transformer](https://arxiv.org/abs/2010.11929)
- [VQ-VAE](https://arxiv.org/abs/1711.00937)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
