# What is Learning Rate Schedule?

Canonical page: https://aiengineeringfromscratch.com/glossary/learning-rate-schedule
Category: Math & training

A policy that changes the optimizer's learning rate as training progresses according to steps, epochs, metrics, or a predefined curve.

## Why does Learning Rate Schedule matter?

Different training stages can benefit from different update scales, so one constant rate may be unstable early or wasteful late.

## What is the common confusion about Learning Rate Schedule?

A scheduler controls the learning rate over time; it does not decide when an optimizer step occurs or guarantee convergence.

## Learning Rate Schedule in practice

Version the schedule with the optimizer configuration, log the actual rate at every step, and compare schedules under the same token or update budget.

## Lessons

- [Learning Rate Schedules and Warmup](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F09-learning-rate-schedules) (Phase 03: Deep Learning Core)
- [Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F08-optimization) (Phase 01: Math Foundations)

## Related terms

- [Learning Rate](https://aiengineeringfromscratch.com/glossary/learning-rate)
- [Warmup](https://aiengineeringfromscratch.com/glossary/warmup)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)
- [Epoch](https://aiengineeringfromscratch.com/glossary/epoch)

## Sources

- [SGDR](https://arxiv.org/abs/1608.03983)
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
