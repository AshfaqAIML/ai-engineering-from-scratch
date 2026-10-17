# What is Decoding Strategy?

Canonical page: https://aiengineeringfromscratch.com/glossary/decoding-strategy
Category: Models & inference

The algorithm that converts a model's sequence of next-token scores into selected tokens and a completed output.

## Why does Decoding Strategy matter?

Greedy selection, sampling, truncation, and search can produce different quality, diversity, latency, and repeatability from the same logits.

## What is the common confusion about Decoding Strategy?

Decoding changes how outputs are selected; it does not change the model's trained parameters or add knowledge.

## Decoding Strategy in practice

Define the task's decoding settings, stop rules, and seed behavior in the eval configuration so results can be compared fairly.

## Related terms

- [Autoregressive](https://aiengineeringfromscratch.com/glossary/autoregressive)
- [Temperature](https://aiengineeringfromscratch.com/glossary/temperature)
- [Top-k Sampling](https://aiengineeringfromscratch.com/glossary/top-k-sampling)
- [Nucleus Sampling (Top-p)](https://aiengineeringfromscratch.com/glossary/nucleus-sampling-top-p)
- [Speculative Decoding](https://aiengineeringfromscratch.com/glossary/speculative-decoding)
- [Stop Sequence](https://aiengineeringfromscratch.com/glossary/stop-sequence)

## Sources

- [The Curious Case of Neural Text Degeneration](https://arxiv.org/abs/1904.09751)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
