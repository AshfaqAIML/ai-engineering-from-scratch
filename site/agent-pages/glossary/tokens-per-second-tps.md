# What is Tokens per Second (TPS)?

Canonical page: https://aiengineeringfromscratch.com/glossary/tokens-per-second-tps
Category: Infrastructure & serving
Also called: TPS, output token throughput

A throughput measure reporting how many output tokens a serving system produces per unit time under a stated scope and workload.

## Why does Tokens per Second (TPS) matter?

It complements startup latency by showing how quickly generation proceeds after output begins and how serving behaves under load.

## What is the common confusion about Tokens per Second (TPS)?

TPS is not directly comparable across different tokenizers, workloads, quality settings, or measurement boundaries.

## Tokens per Second (TPS) in practice

State whether TPS is per request or aggregate, exclude or identify prefill, and report batch, concurrency, sequence lengths, hardware, and percentile latency.

## Related terms

- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Speculative Decoding](https://aiengineeringfromscratch.com/glossary/speculative-decoding)

## Sources

- [Sarathi-Serve](https://www.usenix.org/system/files/osdi24-agrawal.pdf)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
