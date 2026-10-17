# What is Decode Phase?

Canonical page: https://aiengineeringfromscratch.com/glossary/decode-phase
Category: Infrastructure & serving

The iterative stage of autoregressive inference that generates new tokens one step at a time after the input prefix has been processed.

## Why does Decode Phase matter?

Decode work has different compute, memory, and scheduling behavior from prefill, so one aggregate latency number can hide the actual serving bottleneck.

## What is the common confusion about Decode Phase?

Decode phase is not the decoder component of an encoder-decoder model. It names the runtime generation stage.

## Decode Phase in practice

Measure inter-token latency and output throughput separately, account for KV-cache occupancy, and test mixed workloads where active decodes share capacity with new prefills.

## Lessons

- [Disaggregated Prefill/Decode — NVIDIA Dynamo and llm-d](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F17-disaggregated-prefill-decode) (Phase 17: Infrastructure & Production)

## Related terms

- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Autoregressive](https://aiengineeringfromscratch.com/glossary/autoregressive)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Time per Output Token (TPOT)](https://aiengineeringfromscratch.com/glossary/time-per-output-token-tpot)
- [Chunked Prefill](https://aiengineeringfromscratch.com/glossary/chunked-prefill)
- [Continuous Batching](https://aiengineeringfromscratch.com/glossary/continuous-batching)
- [Disaggregated Serving](https://aiengineeringfromscratch.com/glossary/disaggregated-serving)
- [Inter-Token Latency (ITL)](https://aiengineeringfromscratch.com/glossary/inter-token-latency-itl)

## Sources

- [DistServe](https://arxiv.org/abs/2401.09670)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
