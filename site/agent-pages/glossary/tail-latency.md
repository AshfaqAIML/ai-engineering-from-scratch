# What is Tail Latency?

Canonical page: https://aiengineeringfromscratch.com/glossary/tail-latency
Category: Reliability & operations

The latency experienced by the slowest portion of requests, commonly summarized with a high percentile under a stated workload and time window.

## Why does Tail Latency matter?

Averages can look healthy while a meaningful group of users waits much longer because of queueing, contention, retries, or variable request cost.

## What is the common confusion about Tail Latency?

Tail latency is not the single slowest request and has no meaning without the percentile, population, and measurement boundary.

## Tail Latency in practice

Report several percentiles by route and workload, retain timeouts as censored or failed observations according to a documented rule, and trace slow requests across dependencies.

## Lessons

- [Inference Metrics — TTFT, TPOT, ITL, Goodput, P99](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F08-inference-metrics-goodput) (Phase 17: Infrastructure & Production)

## Related terms

- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Time per Output Token (TPOT)](https://aiengineeringfromscratch.com/glossary/time-per-output-token-tpot)
- [Saturation](https://aiengineeringfromscratch.com/glossary/saturation)
- [Goodput](https://aiengineeringfromscratch.com/glossary/goodput)
- [Chunked Prefill](https://aiengineeringfromscratch.com/glossary/chunked-prefill)
- [Deadline Propagation](https://aiengineeringfromscratch.com/glossary/deadline-propagation)
- [Dynamic Batching](https://aiengineeringfromscratch.com/glossary/dynamic-batching)
- [Inter-Token Latency (ITL)](https://aiengineeringfromscratch.com/glossary/inter-token-latency-itl)
- [Service Level Indicator (SLI)](https://aiengineeringfromscratch.com/glossary/service-level-indicator-sli)

## Sources

- [The Tail at Scale](https://research.google/pubs/the-tail-at-scale/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
