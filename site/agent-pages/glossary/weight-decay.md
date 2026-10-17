# What is Weight Decay?

Canonical page: https://aiengineeringfromscratch.com/glossary/weight-decay
Category: Math & training

An update rule that reduces selected parameter magnitudes over training, often by multiplying weights by a shrinkage factor separate from the gradient update.

What people say: "Regularization that shrinks weights during optimization."

## Why does Weight Decay matter?

It can improve generalization, but the useful coefficient and excluded parameter groups depend on model, optimizer, schedule, and data.

## What is the common confusion about Weight Decay?

Decoupled weight decay is equivalent to an L2 loss penalty for some simple optimizers, but not generally for adaptive optimizers such as Adam.

## Lessons

- [Optimizers](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F06-optimizers) (Phase 03: Deep Learning Core)
- [Regularization](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F07-regularization) (Phase 03: Deep Learning Core)

## Related terms

- [AdamW](https://aiengineeringfromscratch.com/glossary/adamw)
- [Overfitting](https://aiengineeringfromscratch.com/glossary/overfitting)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)
- [Dropout](https://aiengineeringfromscratch.com/glossary#dropout)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
