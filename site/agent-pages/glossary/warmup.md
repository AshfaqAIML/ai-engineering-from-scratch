# What is Warmup?

Canonical page: https://aiengineeringfromscratch.com/glossary/warmup
Category: Math & training

An initial training phase in which the learning rate rises from a smaller value toward the main schedule's target value.

## Why does Warmup matter?

Early gradients and optimizer statistics can be unstable, especially in large-batch or transformer training, so abrupt full-size updates may damage optimization.

## What is the common confusion about Warmup?

Warmup is not required for every model and does not make an otherwise unsuitable learning rate safe.

## Warmup in practice

Define warmup in steps or processed tokens, log the realized curve, and tune it with the batch, optimizer, and total training budget held visible.

## Lessons

- [Learning Rate Schedules and Warmup](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F09-learning-rate-schedules) (Phase 03: Deep Learning Core)
- [Cosine LR with Linear Warmup](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F44-cosine-lr-warmup) (Phase 19: Capstone Projects)
- [Training Loop and Evaluation](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F36-training-loop-eval) (Phase 19: Capstone Projects)

## Related terms

- [Learning Rate Schedule](https://aiengineeringfromscratch.com/glossary/learning-rate-schedule)
- [Learning Rate](https://aiengineeringfromscratch.com/glossary/learning-rate)
- [Batch Size](https://aiengineeringfromscratch.com/glossary/batch-size)
- [AdamW](https://aiengineeringfromscratch.com/glossary/adamw)

## Sources

- [Accurate, Large Minibatch SGD](https://arxiv.org/abs/1706.02677)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
