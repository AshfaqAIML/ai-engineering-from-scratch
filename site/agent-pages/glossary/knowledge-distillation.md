# What is Knowledge Distillation?

Canonical page: https://aiengineeringfromscratch.com/glossary/knowledge-distillation
Category: Math & training

Training a student model to reproduce selected behavior or output distributions from a more capable teacher, often alongside ordinary target labels.

## Why does Knowledge Distillation matter?

It can transfer useful behavior into a smaller or cheaper model when serving the teacher directly is impractical.

## What is the common confusion about Knowledge Distillation?

Distillation transfers behavior on the training distribution; it does not copy every capability, fact, or safety property of the teacher.

## Knowledge Distillation in practice

Define teacher outputs, temperature, student loss, and a held-out eval set, then compare the student with both the teacher and a label-only baseline.

## Related terms

- [Fine-tuning](https://aiengineeringfromscratch.com/glossary/fine-tuning)
- [Loss Function](https://aiengineeringfromscratch.com/glossary/loss-function)
- [Logits](https://aiengineeringfromscratch.com/glossary/logits)
- [Quantization](https://aiengineeringfromscratch.com/glossary/quantization)

## Sources

- [Distilling the Knowledge in a Neural Network](https://arxiv.org/abs/1503.02531)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
