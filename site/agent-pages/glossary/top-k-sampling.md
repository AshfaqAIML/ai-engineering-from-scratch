# What is Top-k Sampling?

Canonical page: https://aiengineeringfromscratch.com/glossary/top-k-sampling
Category: Models & inference

A decoding method that restricts the next-token distribution to the k highest-scoring candidates, renormalizes their probabilities, and samples from that set.

## Why does Top-k Sampling matter?

It removes the long low-probability tail from sampling while keeping a fixed maximum candidate count.

## What is the common confusion about Top-k Sampling?

Top-k uses a fixed candidate count, while top-p uses a probability-mass threshold whose candidate count changes by step.

## Top-k Sampling in practice

Evaluate k together with temperature, top-p, and stop settings, and record the complete sampler configuration with generated results.

## Lessons

- [Sampling Methods](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F16-sampling-methods) (Phase 01: Math Foundations)

## Related terms

- [Nucleus Sampling (Top-p)](https://aiengineeringfromscratch.com/glossary/nucleus-sampling-top-p)
- [Temperature](https://aiengineeringfromscratch.com/glossary/temperature)
- [Decoding Strategy](https://aiengineeringfromscratch.com/glossary/decoding-strategy)
- [Logits](https://aiengineeringfromscratch.com/glossary/logits)

## Sources

- [The Curious Case of Neural Text Degeneration](https://arxiv.org/abs/1904.09751)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
