# What is Autoscaling?

Canonical page: https://aiengineeringfromscratch.com/glossary/autoscaling
Category: Infrastructure & serving

A control loop that changes the number or capacity of serving workers from observed demand, resource use, or application metrics within configured bounds.

## Why does Autoscaling matter?

AI workloads can change faster than manual provisioning, but scaling decisions must account for model-load time, accelerator availability, queueing, and request cost.

## What is the common confusion about Autoscaling?

Autoscaling adds or removes capacity. It does not make an overloaded dependency faster or guarantee that enough hardware can be acquired in time.

## Autoscaling in practice

Scale from a demand signal tied to useful work, set minimum warm capacity, bound scale-down churn, and verify that new replicas pass readiness checks before receiving traffic.

## Lessons

- [GPU Autoscaling on Kubernetes — Karpenter, KAI Scheduler, Gang Scheduling](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F03-gpu-autoscaling-kubernetes) (Phase 17: Infrastructure & Production)

## Related terms

- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)
- [Saturation](https://aiengineeringfromscratch.com/glossary/saturation)
- [Readiness Probe](https://aiengineeringfromscratch.com/glossary/readiness-probe)
- [Backpressure](https://aiengineeringfromscratch.com/glossary/backpressure)

## Sources

- [Kubernetes Horizontal Pod Autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
