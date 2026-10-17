# What is Time to First Token (TTFT)?

Canonical page: https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft
Category: Models & inference
Also called: TTFT

The elapsed time from submitting a generation request until the client receives the first output token or content event under a defined measurement boundary.

## Why does Time to First Token (TTFT) matter?

TTFT strongly affects perceived responsiveness and can reveal queueing, prompt processing, cache, or network delays.

## What is the common confusion about Time to First Token (TTFT)?

TTFT is not tokens per second. One measures startup latency; the other measures generation throughput after output begins.

## Time to First Token (TTFT) in practice

Record client-side TTFT by model, prompt length, region, and cache status, then separate it from total completion time.

## Lessons

- [Inference Metrics — TTFT, TPOT, ITL, Goodput, P99](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F08-inference-metrics-goodput) (Phase 17: Infrastructure & Production)
- [Serving Engine Internals — PagedAttention, Continuous Batching, Chunked Prefill](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F04-vllm-serving-internals) (Phase 17: Infrastructure & Production)

## Related terms

- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Prompt Cache](https://aiengineeringfromscratch.com/glossary/prompt-cache)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Token Budget](https://aiengineeringfromscratch.com/glossary/token-budget)
- [Goodput](https://aiengineeringfromscratch.com/glossary/goodput)
- [Inter-Token Latency (ITL)](https://aiengineeringfromscratch.com/glossary/inter-token-latency-itl)
- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)
- [Time per Output Token (TPOT)](https://aiengineeringfromscratch.com/glossary/time-per-output-token-tpot)
- [Tokens per Second (TPS)](https://aiengineeringfromscratch.com/glossary/tokens-per-second-tps)
- [Trace](https://aiengineeringfromscratch.com/glossary/trace)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
