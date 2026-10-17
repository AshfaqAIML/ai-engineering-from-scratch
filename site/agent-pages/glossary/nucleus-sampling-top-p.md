# What is Nucleus Sampling (Top-p)?

Canonical page: https://aiengineeringfromscratch.com/glossary/nucleus-sampling-top-p
Category: Models & inference
Also called: Top-p sampling

A decoding method that samples from the smallest set of next-token candidates whose cumulative probability reaches a chosen threshold.

## Why does Nucleus Sampling (Top-p) matter?

The candidate-set size adapts to the distribution, retaining more options when uncertainty is broad and fewer when probability is concentrated.

## What is the common confusion about Nucleus Sampling (Top-p)?

Top-p is a probability-mass threshold, while top-k always keeps a fixed maximum number of candidates.

## Nucleus Sampling (Top-p) in practice

Evaluate the threshold with temperature and stop settings held constant, and record the complete decoding configuration with every result.

## Lessons

- [Sampling Methods](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F16-sampling-methods) (Phase 01: Math Foundations)

## Related terms

- [Top-k Sampling](https://aiengineeringfromscratch.com/glossary/top-k-sampling)
- [Temperature](https://aiengineeringfromscratch.com/glossary/temperature)
- [Decoding Strategy](https://aiengineeringfromscratch.com/glossary/decoding-strategy)
- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)

## Sources

- [The Curious Case of Neural Text Degeneration](https://arxiv.org/abs/1904.09751)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
