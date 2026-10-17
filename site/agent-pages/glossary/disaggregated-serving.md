# What is Disaggregated Serving?

Canonical page: https://aiengineeringfromscratch.com/glossary/disaggregated-serving
Category: Infrastructure & serving

A serving architecture that runs prefill and decode work in separately provisioned worker pools and transfers the required attention state between them.

## Why does Disaggregated Serving matter?

Prefill and decode stress hardware differently, so independent pools can be sized and scheduled for their own bottlenecks instead of competing in one queue.

## What is the common confusion about Disaggregated Serving?

Disaggregation separates runtime stages. It does not split one model into tensor or pipeline-parallel shards within a stage.

## Disaggregated Serving in practice

Measure state-transfer cost, route requests through compatible model versions, scale each pool from its own demand signal, and test failure recovery between phases.

## Lessons

- [Disaggregated Prefill/Decode — NVIDIA Dynamo and llm-d](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F17-disaggregated-prefill-decode) (Phase 17: Infrastructure & Production)
- [Production Serving Stack — KV Offloading and Cache-Aware Routing](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F18-vllm-production-stack-lmcache) (Phase 17: Infrastructure & Production)

## Related terms

- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)
- [Goodput](https://aiengineeringfromscratch.com/glossary/goodput)

## Sources

- [DistServe](https://arxiv.org/abs/2401.09670)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
