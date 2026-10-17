# What is Canary Release?

Canonical page: https://aiengineeringfromscratch.com/glossary/canary-release
Category: Reliability & operations

A deployment strategy that exposes a new version to a limited slice of traffic or infrastructure before expanding the rollout.

## Why does Canary Release matter?

It limits the impact of defects and gives you production evidence before the new model, prompt, agent, or service reaches everyone.

## What is the common confusion about Canary Release?

A canary release limits exposure; it does not replace pre-deployment tests, approval, or rollback preparation.

## Canary Release in practice

Route a small eligible cohort to the release, compare quality and operational metrics with the control, and stop or roll back on predefined failures.

## Related terms

- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Rollback](https://aiengineeringfromscratch.com/glossary/rollback)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Shadow Traffic](https://aiengineeringfromscratch.com/glossary/shadow-traffic)

## Sources

- [Kubernetes Deployments: Canary Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#canary-deployment)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
