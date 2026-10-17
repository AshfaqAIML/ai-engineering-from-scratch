# What is Pipeline Parallelism?

Canonical page: https://aiengineeringfromscratch.com/glossary/pipeline-parallelism
Category: Infrastructure & serving

Partitioning sequential groups of model layers across devices and moving microbatches or requests through those stages as a pipeline.

## Why does Pipeline Parallelism matter?

It lets models exceed one device's memory, but stage imbalance, pipeline bubbles, activation transfers, and failure coordination affect usable performance.

## What is the common confusion about Pipeline Parallelism?

Pipeline parallelism divides layers by depth. Tensor parallelism divides tensor operations within a layer.

## Pipeline Parallelism in practice

Balance stage cost, choose a microbatch schedule, measure idle time and interconnect traffic, and keep model and checkpoint partition metadata versioned.

## Lessons

- [Scaling: Distributed Training, FSDP, DeepSpeed](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F05-scaling-distributed) (Phase 10: LLMs from Scratch)
- [DualPipe Parallelism](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F19-dualpipe-parallelism) (Phase 10: LLMs from Scratch)

## Related terms

- [Tensor Parallelism](https://aiengineeringfromscratch.com/glossary/tensor-parallelism)
- [Expert Parallelism](https://aiengineeringfromscratch.com/glossary/expert-parallelism)
- [Batch Size](https://aiengineeringfromscratch.com/glossary/batch-size)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)

## Sources

- [GPipe](https://arxiv.org/abs/1811.06965)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
