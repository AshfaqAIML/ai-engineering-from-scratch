# What is Prefill?

Canonical page: https://aiengineeringfromscratch.com/glossary/prefill
Category: Infrastructure & serving
Also called: Prefill Phase

The initial inference stage that processes all supplied input tokens to produce their representations and the attention state required for subsequent autoregressive generation.

## Why does Prefill matter?

Prompt shape, queueing, and cache reuse affect prefill cost, and prefill competes differently for compute than decode, so it strongly influences startup latency and serving schedules.

## What is the common confusion about Prefill?

Prefill is the runtime prompt-processing stage, not the first generated token itself. The first token appears only after prefill and any queueing complete.

## Prefill in practice

Record prompt tokens and prefill latency, separate queue time from execution time, compare cached and uncached prefixes, and test long prompts beside active decode traffic.

## Lessons

- [Disaggregated Prefill/Decode — NVIDIA Dynamo and llm-d](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F17-disaggregated-prefill-decode) (Phase 17: Infrastructure & Production)
- [Serving Engine Internals — PagedAttention, Continuous Batching, Chunked Prefill](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F04-vllm-serving-internals) (Phase 17: Infrastructure & Production)
- [Pre-Training a Mini GPT (124M Parameters)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F04-pre-training-mini-gpt) (Phase 10: LLMs from Scratch)
- [Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F12-inference-optimization) (Phase 10: LLMs from Scratch)
- [Prompt Engineering: Techniques & Patterns](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F01-prompt-engineering) (Phase 11: LLM Engineering)
- [GPU Autoscaling on Kubernetes — Karpenter, KAI Scheduler, Gang Scheduling](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F03-gpu-autoscaling-kubernetes) (Phase 17: Infrastructure & Production)

## Related terms

- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Chunked Prefill](https://aiengineeringfromscratch.com/glossary/chunked-prefill)
- [Disaggregated Serving](https://aiengineeringfromscratch.com/glossary/disaggregated-serving)
- [Tokens per Second (TPS)](https://aiengineeringfromscratch.com/glossary/tokens-per-second-tps)

## Sources

- [Sarathi-Serve](https://www.usenix.org/system/files/osdi24-agrawal.pdf)
- [DistServe](https://arxiv.org/abs/2401.09670)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
