# What is Dynamic Batching?

Canonical page: https://aiengineeringfromscratch.com/glossary/dynamic-batching
Category: Infrastructure & serving

A runtime policy that forms inference batches from queued requests according to compatible shapes, maximum size, priority, and allowed queue delay.

## Why does Dynamic Batching matter?

Grouping requests can improve hardware utilization, but waiting for a batch can make latency worse when traffic is sparse or requests differ sharply.

## What is the common confusion about Dynamic Batching?

Dynamic batching assembles batches from queued work. Continuous batching changes membership while autoregressive generation is already running.

## Dynamic Batching in practice

Set queue-delay and batch limits from measured latency objectives, separate incompatible request shapes, and compare throughput with tail latency at realistic arrival rates.

## Lessons

- [Serving Engine Internals — PagedAttention, Continuous Batching, Chunked Prefill](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F04-vllm-serving-internals) (Phase 17: Infrastructure & Production)

## Related terms

- [Admission Control](https://aiengineeringfromscratch.com/glossary/admission-control)
- [Continuous Batching](https://aiengineeringfromscratch.com/glossary/continuous-batching)
- [Saturation](https://aiengineeringfromscratch.com/glossary/saturation)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)
- [Chunked Prefill](https://aiengineeringfromscratch.com/glossary/chunked-prefill)

## Sources

- [NVIDIA Triton: Models and Schedulers](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/model_configuration.html#scheduling-and-batching)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
