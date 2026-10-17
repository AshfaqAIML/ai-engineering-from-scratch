# What is Time per Output Token (TPOT)?

Canonical page: https://aiengineeringfromscratch.com/glossary/time-per-output-token-tpot
Category: Infrastructure & serving

For one request with `N > 1` output tokens, the average post-first-token interval: `(t_N - t_1) / (N - 1)`. System distributions then aggregate those per-request averages.

## Why does Time per Output Token (TPOT) matter?

Users can receive the first token quickly while the rest of the answer streams slowly, so startup latency alone does not describe generation responsiveness.

## What is the common confusion about Time per Output Token (TPOT)?

TPOT is a per-request average. An individual inter-token latency is one gap between consecutive tokens, while time to first token includes the wait before output starts.

## Time per Output Token (TPOT) in practice

Compute TPOT separately for each request, report percentiles across requests by output length and concurrency, and avoid pooling all token intervals or comparing systems with different tokenizers and measurement boundaries.

## Lessons

- [Inference Metrics — TTFT, TPOT, ITL, Goodput, P99](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F08-inference-metrics-goodput) (Phase 17: Infrastructure & Production)

## Related terms

- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Goodput](https://aiengineeringfromscratch.com/glossary/goodput)
- [Inter-Token Latency (ITL)](https://aiengineeringfromscratch.com/glossary/inter-token-latency-itl)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)

## Sources

- [DistServe](https://arxiv.org/abs/2401.09670)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
