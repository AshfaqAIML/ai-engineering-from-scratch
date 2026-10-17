# What is Deadline Propagation?

Canonical page: https://aiengineeringfromscratch.com/glossary/deadline-propagation
Category: Reliability & operations

Passing the remaining end-to-end time budget to downstream calls so each dependency knows how long the original request can still usefully wait.

## Why does Deadline Propagation matter?

Independent timeouts can exceed the user's deadline and leave abandoned work consuming capacity after the result is no longer useful.

## What is the common confusion about Deadline Propagation?

A deadline is an absolute or remaining completion boundary. A retry delay controls when another attempt begins and must fit inside that same budget.

## Deadline Propagation in practice

Set one request deadline at ingress, subtract elapsed time for each downstream call, cancel expired work, and record which boundary exhausted the budget.

## Related terms

- [Retry with Backoff](https://aiengineeringfromscratch.com/glossary/retry-with-backoff)
- [Retry Budget](https://aiengineeringfromscratch.com/glossary/retry-budget)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)
- [Service Level Objective (SLO)](https://aiengineeringfromscratch.com/glossary/service-level-objective-slo)

## Sources

- [gRPC Deadlines](https://grpc.io/docs/guides/deadlines/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
