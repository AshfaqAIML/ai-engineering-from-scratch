# What are Logits?

Canonical page: https://aiengineeringfromscratch.com/glossary/logits
Category: Models & inference

The model's unnormalized numeric scores for candidate outcomes before a normalization function or decoding rule converts them into selections.

## Why do Logits matter?

Temperature, softmax, top-k, and top-p operate on or derive from logits, so logits connect model computation to generated tokens.

## What is the common confusion about Logits?

Logits are not probabilities and are not comparable across unrelated positions, models, or tasks without a defined transformation.

## Logits in practice

Inspect logits or log probabilities when the API exposes them, apply masks before sampling, and avoid interpreting raw magnitude as calibrated confidence.

## Lessons

- [Image Classification](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F04-image-classification) (Phase 04: Computer Vision)

## Related terms

- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Temperature](https://aiengineeringfromscratch.com/glossary/temperature)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Cross-Entropy](https://aiengineeringfromscratch.com/glossary/cross-entropy)
- [Calibration](https://aiengineeringfromscratch.com/glossary/calibration)
- [Knowledge Distillation](https://aiengineeringfromscratch.com/glossary/knowledge-distillation)
- [Top-k Sampling](https://aiengineeringfromscratch.com/glossary/top-k-sampling)

## Sources

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
