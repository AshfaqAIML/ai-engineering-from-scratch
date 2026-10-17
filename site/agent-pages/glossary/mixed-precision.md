# What is Mixed Precision?

Canonical page: https://aiengineeringfromscratch.com/glossary/mixed-precision
Category: Math & training

A numerical strategy that uses different data types for different operations, often lower precision for many matrix operations and higher precision for values that need more range or stability.

What people say: "Using lower-precision arithmetic for speed and memory savings."

## What is the common confusion about Mixed Precision?

Speed, memory, and accuracy effects depend on hardware, data type, scaling method, kernels, and model. They are not a fixed multiplier.

## Lessons

- [Gradient Clipping and Mixed Precision](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F45-gradient-clipping-amp) (Phase 19: Capstone Projects)
- [Numerical Stability](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F13-numerical-stability) (Phase 01: Math Foundations)
- [Scaling: Distributed Training, FSDP, DeepSpeed](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F05-scaling-distributed) (Phase 10: LLMs from Scratch)

## Related terms

- [Tensor](https://aiengineeringfromscratch.com/glossary#tensor)
- [CUDA](https://aiengineeringfromscratch.com/glossary/cuda)
- [NaN (Not a Number)](https://aiengineeringfromscratch.com/glossary/nan-not-a-number)
- [Quantization](https://aiengineeringfromscratch.com/glossary/quantization)
- [Activation Checkpointing](https://aiengineeringfromscratch.com/glossary/activation-checkpointing)
- [FlashAttention](https://aiengineeringfromscratch.com/glossary/flashattention)
- [Gradient Accumulation](https://aiengineeringfromscratch.com/glossary/gradient-accumulation)
- [Gradient Clipping](https://aiengineeringfromscratch.com/glossary/gradient-clipping)
- [Normalization](https://aiengineeringfromscratch.com/glossary/normalization)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
