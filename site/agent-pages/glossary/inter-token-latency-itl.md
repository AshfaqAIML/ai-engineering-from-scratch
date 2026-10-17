# What is Inter-Token Latency (ITL)?

Canonical page: https://aiengineeringfromscratch.com/glossary/inter-token-latency-itl
Category: Infrastructure & serving

The elapsed time between two consecutive output-token arrival events for one request, calculated as `t_i - t_(i-1)` for an output token after the first.

## Why does Inter-Token Latency (ITL) matter?

Individual gaps expose decode stalls and streaming jitter that a per-request average can hide, especially under batching, preemption, or mixed workloads.

## What is the common confusion about Inter-Token Latency (ITL)?

ITL is one interval between consecutive tokens. Time per output token is a per-request average across those intervals, while time to first token covers the wait before streaming begins.

## Inter-Token Latency (ITL) in practice

Record each post-first-token interval with its request and token position, then report distributions by workload, output length, and concurrency without pooling away request boundaries.

## Lessons

- [Inference Metrics — TTFT, TPOT, ITL, Goodput, P99](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F08-inference-metrics-goodput) (Phase 17: Infrastructure & Production)

## Related terms

- [Time per Output Token (TPOT)](https://aiengineeringfromscratch.com/glossary/time-per-output-token-tpot)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)

## Sources

- [DistServe](https://arxiv.org/abs/2401.09670)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
