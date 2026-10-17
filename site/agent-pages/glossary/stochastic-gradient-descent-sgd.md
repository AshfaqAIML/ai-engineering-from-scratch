# What is Stochastic Gradient Descent (SGD)?

Canonical page: https://aiengineeringfromscratch.com/glossary/stochastic-gradient-descent-sgd
Category: Math & training
Also called: SGD

An optimizer family that updates parameters from a gradient estimated on a sampled example or minibatch rather than the complete training dataset.

## Why does Stochastic Gradient Descent (SGD) matter?

It is the baseline for understanding gradient noise, momentum, batch scaling, and the adaptive optimizers used in modern training.

## What is the common confusion about Stochastic Gradient Descent (SGD)?

In current practice, SGD usually means minibatch SGD, and its useful learning rate does not follow one universal batch-scaling rule.

## Stochastic Gradient Descent (SGD) in practice

Record batch sampling, learning rate, momentum if used, and schedule, then compare validation behavior under equal update or token budgets.

## Lessons

- [Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F08-optimization) (Phase 01: Math Foundations)
- [Optimizers](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F06-optimizers) (Phase 03: Deep Learning Core)
- [Build Your Own Mini Framework](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F10-mini-framework) (Phase 03: Deep Learning Core)

## Related terms

- [Gradient Descent](https://aiengineeringfromscratch.com/glossary#gradient-descent)
- [Batch Size](https://aiengineeringfromscratch.com/glossary/batch-size)
- [Learning Rate](https://aiengineeringfromscratch.com/glossary/learning-rate)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)

## Sources

- [Optimization Methods for Large-Scale Machine Learning](https://arxiv.org/abs/1606.04838)
- [Accurate, Large Minibatch SGD](https://arxiv.org/abs/1706.02677)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
