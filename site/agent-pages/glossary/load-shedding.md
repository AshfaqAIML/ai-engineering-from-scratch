# What is Load Shedding?

Canonical page: https://aiengineeringfromscratch.com/glossary/load-shedding
Category: Reliability & operations

Deliberately rejecting, dropping, or cancelling selected work at one or more overload boundaries when demand exceeds the capacity available to produce useful results.

## Why does Load Shedding matter?

Continuing to accept every request during overload can increase queueing until nearly all requests miss their deadlines and recovery becomes harder.

## What is the common confusion about Load Shedding?

Load shedding is not confined to work that has already been accepted. Admission control is specifically the pre-acceptance gate, while rate limiting can enforce a usage policy even when capacity remains.

## Load Shedding in practice

Shed at the earliest informed boundary, preserve high-priority and already-admitted work when possible, identify the overloaded scope, and mark a response retryable only when the condition is transient and the request remains within its retry budget.

## Related terms

- [Admission Control](https://aiengineeringfromscratch.com/glossary/admission-control)
- [Backpressure](https://aiengineeringfromscratch.com/glossary/backpressure)
- [Rate Limit](https://aiengineeringfromscratch.com/glossary/rate-limit)
- [Graceful Degradation](https://aiengineeringfromscratch.com/glossary/graceful-degradation)

## Sources

- [Google SRE: Handling Overload](https://sre.google/sre-book/handling-overload/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
