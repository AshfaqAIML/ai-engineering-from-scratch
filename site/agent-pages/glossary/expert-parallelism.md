# What is Expert Parallelism?

Canonical page: https://aiengineeringfromscratch.com/glossary/expert-parallelism
Category: Infrastructure & serving

Distributing mixture-of-experts subnetworks across devices and routing each token's activations to the devices that host its selected experts.

## Why does Expert Parallelism matter?

Sparse experts increase model capacity without executing every expert for every token, but routing introduces communication, load-balance, and placement constraints.

## What is the common confusion about Expert Parallelism?

Expert parallelism partitions experts selected by a router. Tensor parallelism partitions the tensor operations inside layers.

## Expert Parallelism in practice

Measure token distribution by expert, provision communication bandwidth, cap or route overflow deliberately, and test quality when traffic produces uneven expert demand.

## Lessons

- [Mixture of Experts (MoE)](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F11-mixture-of-experts) (Phase 07: Transformers Deep Dive)

## Related terms

- [MoE (Mixture of Experts)](https://aiengineeringfromscratch.com/glossary/moe-mixture-of-experts)
- [Tensor Parallelism](https://aiengineeringfromscratch.com/glossary/tensor-parallelism)
- [Pipeline Parallelism](https://aiengineeringfromscratch.com/glossary/pipeline-parallelism)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)

## Sources

- [GShard](https://arxiv.org/abs/2006.16668)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
