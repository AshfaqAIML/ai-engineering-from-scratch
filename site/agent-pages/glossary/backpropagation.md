# What is Backpropagation?

Canonical page: https://aiengineeringfromscratch.com/glossary/backpropagation
Category: Math & training

An efficient application of the chain rule that propagates derivatives from a scalar loss backward through a computation graph. It computes gradients; an optimizer uses those gradients to update parameters.

What people say: "How neural networks learn."

## What is the common confusion about Backpropagation?

Backpropagation calculates gradients. It does not choose the update rule or learning rate.

## Why is it called Backpropagation?

Derivative information moves backward from the loss toward earlier operations.

## Lessons

- [Backpropagation from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F03-backpropagation) (Phase 03: Deep Learning Core)

## Related terms

- [Autograd](https://aiengineeringfromscratch.com/glossary#autograd)
- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)
- [Activation Checkpointing](https://aiengineeringfromscratch.com/glossary/activation-checkpointing)
- [Activation Function](https://aiengineeringfromscratch.com/glossary#activation-function)
- [Gradient Accumulation](https://aiengineeringfromscratch.com/glossary/gradient-accumulation)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
