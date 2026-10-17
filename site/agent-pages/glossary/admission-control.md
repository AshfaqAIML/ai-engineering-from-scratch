# What is Admission Control?

Canonical page: https://aiengineeringfromscratch.com/glossary/admission-control
Category: Reliability & operations

A pre-acceptance gate that decides whether a request may enter a bounded queue or service under the system's current capacity, priority, and policy.

## Why does Admission Control matter?

Rejecting excess work at a controlled boundary protects admitted requests from queue growth, timeout cascades, and resource exhaustion.

## What is the common confusion about Admission Control?

Admission control acts before acceptance. Load shedding can reject or remove work at ingress, in queues, at dependencies, or at other overload boundaries.

## Admission Control in practice

Estimate the request's cost, check tenant and system capacity, reserve the required budget atomically, and identify the overloaded scope when rejecting. Give retry guidance only when the condition is transient and the caller's retry budget permits another attempt.

## Related terms

- [Load Shedding](https://aiengineeringfromscratch.com/glossary/load-shedding)
- [Backpressure](https://aiengineeringfromscratch.com/glossary/backpressure)
- [Rate Limit](https://aiengineeringfromscratch.com/glossary/rate-limit)
- [Saturation](https://aiengineeringfromscratch.com/glossary/saturation)
- [Dynamic Batching](https://aiengineeringfromscratch.com/glossary/dynamic-batching)
- [Retry Budget](https://aiengineeringfromscratch.com/glossary/retry-budget)

## Sources

- [Google SRE: Handling Overload](https://sre.google/sre-book/handling-overload/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
