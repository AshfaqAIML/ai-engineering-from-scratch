# What is Retry Budget?

Canonical page: https://aiengineeringfromscratch.com/glossary/retry-budget
Category: Reliability & operations

A bound on retry traffic, usually expressed relative to original requests or over a time window, that prevents retries from consuming unbounded capacity.

## Why does Retry Budget matter?

When a dependency slows or fails, unrestricted retries multiply load exactly when the system has the least spare capacity.

## What is the common confusion about Retry Budget?

A retry budget limits extra attempts. An error budget measures user-visible unreliability allowed by an SLO.

## Retry Budget in practice

Count retries separately from first attempts, cap them by service and tenant, honor deadlines, use jittered backoff, and stop retrying non-transient or non-idempotent failures.

## Related terms

- [Retry with Backoff](https://aiengineeringfromscratch.com/glossary/retry-with-backoff)
- [Error Budget](https://aiengineeringfromscratch.com/glossary/error-budget)
- [Rate Limit](https://aiengineeringfromscratch.com/glossary/rate-limit)
- [Admission Control](https://aiengineeringfromscratch.com/glossary/admission-control)
- [Deadline Propagation](https://aiengineeringfromscratch.com/glossary/deadline-propagation)

## Sources

- [Google SRE: Addressing Cascading Failures](https://sre.google/sre-book/addressing-cascading-failures/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
