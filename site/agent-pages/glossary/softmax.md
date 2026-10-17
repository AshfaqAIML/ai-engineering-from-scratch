# What is Softmax?

Canonical page: https://aiengineeringfromscratch.com/glossary/softmax
Category: Math & training

A function defined by `softmax(x_i) = exp(x_i) / sum(exp(x_j))`, implemented with numerical stabilization. Its outputs are positive and sum to one, so they can parameterize a categorical distribution.

What people say: "A function that turns logits into normalized positive values."

## What is the common confusion about Softmax?

Softmax values are not automatically calibrated probabilities about real-world correctness.

## Lessons

- [Probability and Distributions](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F06-probability-and-distributions) (Phase 01: Math Foundations)
- [Numerical Stability](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F13-numerical-stability) (Phase 01: Math Foundations)
- [Logistic Regression](https://aiengineeringfromscratch.com/lesson?path=phases%2F02-ml-fundamentals%2F03-logistic-regression) (Phase 02: ML Fundamentals)
- [Activation Functions](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F04-activation-functions) (Phase 03: Deep Learning Core)
- [Loss Functions](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F05-loss-functions) (Phase 03: Deep Learning Core)
- [Image Classification](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F04-image-classification) (Phase 04: Computer Vision)
- [Self-Attention from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F02-self-attention-from-scratch) (Phase 07: Transformers Deep Dive)
- [KV Cache, Flash Attention & Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F12-kv-cache-flash-attention) (Phase 07: Transformers Deep Dive)

## Related terms

- [Temperature](https://aiengineeringfromscratch.com/glossary/temperature)
- [Cross-Entropy](https://aiengineeringfromscratch.com/glossary/cross-entropy)
- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Calibration](https://aiengineeringfromscratch.com/glossary/calibration)
- [Logits](https://aiengineeringfromscratch.com/glossary/logits)
- [Nucleus Sampling (Top-p)](https://aiengineeringfromscratch.com/glossary/nucleus-sampling-top-p)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
