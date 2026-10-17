# What is AdamW?

Canonical page: https://aiengineeringfromscratch.com/glossary/adamw
Category: Math & training

An Adam variant that decouples weight decay from the gradient-based parameter update. That makes the shrinkage behavior easier to reason about than adding an L2 penalty inside Adam's adaptively scaled gradient.

What people say: "Adam with weight decay fixed."

## What is the common confusion about AdamW?

Decoupled weight decay does not make AdamW universally optimal. Model, data, and training scale still determine the best optimizer and schedule.

## Lessons

- [Optimizers](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F06-optimizers) (Phase 03: Deep Learning Core)
- [Training Loop and Evaluation](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F36-training-loop-eval) (Phase 19: Capstone Projects)

## Related terms

- [Adam (Optimizer)](https://aiengineeringfromscratch.com/glossary/adam-optimizer)
- [Weight Decay](https://aiengineeringfromscratch.com/glossary/weight-decay)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)
- [Warmup](https://aiengineeringfromscratch.com/glossary/warmup)

## Sources

- [Decoupled Weight Decay Regularization](https://arxiv.org/abs/1711.05101)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
