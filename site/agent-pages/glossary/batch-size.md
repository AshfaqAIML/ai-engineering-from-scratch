# What is Batch Size?

Canonical page: https://aiengineeringfromscratch.com/glossary/batch-size
Category: Math & training

The number of examples whose losses contribute to one gradient estimate before an optimizer update. Larger batches can improve hardware utilization and reduce gradient noise, but they require more memory and may need different learning-rate or scheduling choices.

What people say: "How many examples are processed at once."

## What is the common confusion about Batch Size?

There is no universal batch-size range or rule that says every batch increase should produce the same learning-rate increase.

## Related terms

- [Learning Rate](https://aiengineeringfromscratch.com/glossary/learning-rate)
- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)
- [Epoch](https://aiengineeringfromscratch.com/glossary/epoch)
- [Gradient Accumulation](https://aiengineeringfromscratch.com/glossary/gradient-accumulation)
- [Hyperparameter](https://aiengineeringfromscratch.com/glossary/hyperparameter)
- [Pipeline Parallelism](https://aiengineeringfromscratch.com/glossary/pipeline-parallelism)
- [Stochastic Gradient Descent (SGD)](https://aiengineeringfromscratch.com/glossary/stochastic-gradient-descent-sgd)
- [Warmup](https://aiengineeringfromscratch.com/glossary/warmup)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
