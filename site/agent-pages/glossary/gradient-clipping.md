# What is Gradient Clipping?

Canonical page: https://aiengineeringfromscratch.com/glossary/gradient-clipping
Category: Math & training

Limiting gradient values or their combined norm before an optimizer update when they exceed a chosen threshold.

## Why does Gradient Clipping matter?

It can prevent an unusually large gradient from destabilizing a training step and producing non-finite values.

## What is the common confusion about Gradient Clipping?

Clipping controls update magnitude; it does not repair invalid data, a broken loss, or a consistently unsuitable learning rate.

## Gradient Clipping in practice

Log unclipped norms, clip after unscaling mixed-precision gradients, and investigate repeated clipping instead of treating it as a substitute for diagnosing instability.

## Lessons

- [Gradient Clipping and Mixed Precision](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F45-gradient-clipping-amp) (Phase 19: Capstone Projects)
- [Numerical Stability](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F13-numerical-stability) (Phase 01: Math Foundations)

## Related terms

- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [NaN (Not a Number)](https://aiengineeringfromscratch.com/glossary/nan-not-a-number)
- [Mixed Precision](https://aiengineeringfromscratch.com/glossary/mixed-precision)
- [Learning Rate](https://aiengineeringfromscratch.com/glossary/learning-rate)

## Sources

- [On the difficulty of training recurrent neural networks](https://arxiv.org/abs/1211.5063)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
