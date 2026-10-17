# What is Activation Checkpointing?

Canonical page: https://aiengineeringfromscratch.com/glossary/activation-checkpointing
Category: Math & training

A training-memory technique that saves only selected forward-pass activations and recomputes the omitted ones during backpropagation.

## Why does Activation Checkpointing matter?

It lets you train larger models or sequences within a fixed memory budget by trading additional computation for lower activation storage.

## What is the common confusion about Activation Checkpointing?

Activation checkpointing is not a durable training checkpoint. It helps one forward and backward pass fit in memory but cannot resume a crashed run.

## Activation Checkpointing in practice

Checkpoint the memory-heavy transformer blocks, measure the extra step time, and keep recovery checkpoints separate from activation-recomputation settings.

## Related terms

- [Autograd](https://aiengineeringfromscratch.com/glossary#autograd)
- [Backpropagation](https://aiengineeringfromscratch.com/glossary/backpropagation)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Mixed Precision](https://aiengineeringfromscratch.com/glossary/mixed-precision)

## Sources

- [Training Deep Nets with Sublinear Memory Cost](https://arxiv.org/abs/1604.06174)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
