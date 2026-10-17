# What is MoE (Mixture of Experts)?

Canonical page: https://aiengineeringfromscratch.com/glossary/moe-mixture-of-experts
Category: Models & inference

An architecture with multiple expert subnetworks and a learned router that selects a subset for each input unit, often each token. Sparse activation can increase total parameter capacity without using every expert on every forward pass.

What people say: "A large model that activates only part of its parameters for each token."

## Why does MoE (Mixture of Experts) matter?

Compute, memory, communication, routing balance, and quality depend on the specific architecture and serving system.

## What is the common confusion about MoE (Mixture of Experts)?

Product names do not prove an MoE architecture unless the model developer discloses it.

## Lessons

- [Mixture of Experts (MoE)](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F11-mixture-of-experts) (Phase 07: Transformers Deep Dive)
- [Open Models: Architecture Walkthroughs](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F14-open-models-architecture-walkthroughs) (Phase 10: LLMs from Scratch)
- [Disaggregated Prefill/Decode — NVIDIA Dynamo and llm-d](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F17-disaggregated-prefill-decode) (Phase 17: Infrastructure & Production)

## Related terms

- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Model Router](https://aiengineeringfromscratch.com/glossary/model-router)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Expert Parallelism](https://aiengineeringfromscratch.com/glossary/expert-parallelism)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
