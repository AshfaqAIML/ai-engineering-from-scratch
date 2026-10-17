# What is Goodput?

Canonical page: https://aiengineeringfromscratch.com/glossary/goodput
Category: Infrastructure & serving

The rate of completed requests that satisfy defined service constraints, such as both time-to-first-token and per-token latency objectives, under a stated workload.

## Why does Goodput matter?

Raw throughput can rise while users experience more slow requests. Goodput counts only work that meets the service contract.

## What is the common confusion about Goodput?

Goodput is not all completed throughput and is not a universal property of a model. It depends on workload and success thresholds.

## Goodput in practice

Declare the request distribution and latency thresholds, count only compliant completions, report percentiles beside the aggregate rate, and avoid comparing systems under different objectives.

## Lessons

- [Inference Metrics — TTFT, TPOT, ITL, Goodput, P99](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F08-inference-metrics-goodput) (Phase 17: Infrastructure & Production)

## Related terms

- [Service Level Objective (SLO)](https://aiengineeringfromscratch.com/glossary/service-level-objective-slo)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Time per Output Token (TPOT)](https://aiengineeringfromscratch.com/glossary/time-per-output-token-tpot)
- [Cost per Successful Task](https://aiengineeringfromscratch.com/glossary/cost-per-successful-task)
- [Disaggregated Serving](https://aiengineeringfromscratch.com/glossary/disaggregated-serving)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)

## Sources

- [DistServe](https://arxiv.org/abs/2401.09670)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
