# What is Model Serving?

Canonical page: https://aiengineeringfromscratch.com/glossary/model-serving
Category: Infrastructure & serving

The runtime and API layer that loads versioned model artifacts, accepts inference requests, schedules execution, manages resources, and returns results under an operational contract.

## Why does Model Serving matter?

A capable model can still produce an unreliable product when queueing, batching, placement, versioning, cancellation, and response boundaries are not engineered explicitly.

## What is the common confusion about Model Serving?

Model serving is broader than calling inference once and narrower than the complete application, which may also include retrieval, tools, policy, and user state.

## Model Serving in practice

Pin model and tokenizer versions, validate request limits, expose readiness and latency signals, control concurrency, and test rollback before routing production traffic.

## Lessons

- [Self-Hosted Serving Selection — Matching Engine to Hardware and Scale](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F28-self-hosted-serving-selection) (Phase 17: Infrastructure & Production)

## Related terms

- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [Model Router](https://aiengineeringfromscratch.com/glossary/model-router)
- [Autoscaling](https://aiengineeringfromscratch.com/glossary/autoscaling)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Disaggregated Serving](https://aiengineeringfromscratch.com/glossary/disaggregated-serving)
- [Expert Parallelism](https://aiengineeringfromscratch.com/glossary/expert-parallelism)
- [Paged KV Cache](https://aiengineeringfromscratch.com/glossary/paged-kv-cache)
- [Pipeline Parallelism](https://aiengineeringfromscratch.com/glossary/pipeline-parallelism)
- [Readiness Probe](https://aiengineeringfromscratch.com/glossary/readiness-probe)
- [Shadow Traffic](https://aiengineeringfromscratch.com/glossary/shadow-traffic)

## Sources

- [Clipper](https://arxiv.org/abs/1612.03079)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
