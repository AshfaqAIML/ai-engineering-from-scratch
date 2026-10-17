# What is Tensor Parallelism?

Canonical page: https://aiengineeringfromscratch.com/glossary/tensor-parallelism
Category: Infrastructure & serving

Partitioning tensor operations within a model layer across devices, with collective communication combining partial results during the layer computation.

## Why does Tensor Parallelism matter?

It lets one layer use memory and compute from several devices, but frequent communication can dominate when the interconnect or partition is unsuitable.

## What is the common confusion about Tensor Parallelism?

Tensor parallelism splits work inside layers. Pipeline parallelism places different layer groups on different devices.

## Tensor Parallelism in practice

Match partition dimensions to model shapes, benchmark collective traffic, keep ranks on a fast interconnect, and record the sharding layout with checkpoints and serving configuration.

## Lessons

- [Scaling: Distributed Training, FSDP, DeepSpeed](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F05-scaling-distributed) (Phase 10: LLMs from Scratch)

## Related terms

- [Tensor](https://aiengineeringfromscratch.com/glossary#tensor)
- [Pipeline Parallelism](https://aiengineeringfromscratch.com/glossary/pipeline-parallelism)
- [Expert Parallelism](https://aiengineeringfromscratch.com/glossary/expert-parallelism)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)

## Sources

- [Megatron-LM](https://arxiv.org/abs/1909.08053)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
