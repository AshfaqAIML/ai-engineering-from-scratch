# What is Gradient Accumulation?

Canonical page: https://aiengineeringfromscratch.com/glossary/gradient-accumulation
Category: Math & training

Summing or averaging gradients from several microbatches before performing one optimizer update.

## Why does Gradient Accumulation matter?

It lets you approximate a larger effective batch when one device cannot hold all examples and activations at once.

## What is the common confusion about Gradient Accumulation?

Gradient accumulation reduces per-step activation memory, but it does not reproduce every property of processing the full batch simultaneously.

## Gradient Accumulation in practice

Scale the loss consistently, call the optimizer only after the chosen number of microbatches, and measure whether normalization or distributed synchronization changes behavior.

## Lessons

- [Gradient Accumulation](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F46-gradient-accumulation) (Phase 19: Capstone Projects)

## Related terms

- [Batch Size](https://aiengineeringfromscratch.com/glossary/batch-size)
- [Mixed Precision](https://aiengineeringfromscratch.com/glossary/mixed-precision)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)
- [Backpropagation](https://aiengineeringfromscratch.com/glossary/backpropagation)

## Sources

- [PyTorch AMP examples: Gradient accumulation](https://docs.pytorch.org/docs/stable/notes/amp_examples.html#gradient-accumulation)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
