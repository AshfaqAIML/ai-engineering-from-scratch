# What is Shadow Traffic?

Canonical page: https://aiengineeringfromscratch.com/glossary/shadow-traffic
Category: Reliability & operations

A copy of live request traffic sent to a candidate system for observation while the candidate response remains outside the primary user response path. Because the copied request still executes, its side effects must be isolated.

## Why does Shadow Traffic matter?

It exposes the candidate to real input shapes and load while limiting user impact, which can reveal failures absent from synthetic tests.

## What is the common confusion about Shadow Traffic?

Keeping a candidate response off the primary path does not make execution side-effect-free. A canary release differs because it serves real users from the candidate for a controlled share of traffic.

## Shadow Traffic in practice

Remove or tokenize sensitive fields, route tools and dependencies to sandboxed or no-op targets, block writes at capability boundaries, preserve request correlation, and prevent shadow load from competing with user traffic.

## Lessons

- [Shadow Traffic, Canary Rollout, and Progressive Deployment for LLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F20-shadow-canary-progressive) (Phase 17: Infrastructure & Production)

## Related terms

- [Canary Release](https://aiengineeringfromscratch.com/glossary/canary-release)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Trace](https://aiengineeringfromscratch.com/glossary/trace)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)

## Sources

- [Istio Traffic Mirroring](https://istio.io/latest/docs/tasks/traffic-management/mirroring/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
