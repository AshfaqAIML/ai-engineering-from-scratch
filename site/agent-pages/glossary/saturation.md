# What is Saturation?

Canonical page: https://aiengineeringfromscratch.com/glossary/saturation
Category: Reliability & operations

The degree to which a constrained resource or service has exhausted its capacity, including queued work that cannot begin promptly.

## Why does Saturation matter?

Utilization alone can appear acceptable while memory, accelerator slots, queue depth, or a downstream quota is already limiting useful throughput.

## What is the common confusion about Saturation?

Saturation is not one universal percentage. The limiting resource and its queueing behavior depend on the workload and architecture.

## Saturation in practice

Identify each critical resource, measure active and waiting work, relate saturation to tail latency and errors, and alert before the queue enters an unstable growth regime.

## Lessons

- [The Autonomous Coding Agent Landscape (2026)](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F09-coding-agent-landscape) (Phase 15: Autonomous Systems)

## Related terms

- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Autoscaling](https://aiengineeringfromscratch.com/glossary/autoscaling)
- [Backpressure](https://aiengineeringfromscratch.com/glossary/backpressure)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)
- [Admission Control](https://aiengineeringfromscratch.com/glossary/admission-control)
- [Dynamic Batching](https://aiengineeringfromscratch.com/glossary/dynamic-batching)

## Sources

- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
