# What is Distribution Shift?

Canonical page: https://aiengineeringfromscratch.com/glossary/distribution-shift
Category: Evaluation & safety

A difference between the data distribution used to build or evaluate a system and the distribution it encounters after deployment.

## Why does Distribution Shift matter?

A model can pass held-out tests yet fail when users, tasks, language, tools, or operating conditions change.

## What is the common confusion about Distribution Shift?

Distribution shift is not always model drift. The model may be unchanged while its environment or user population changes.

## Distribution Shift in practice

Define expected deployment slices, monitor performance and input characteristics by slice, and add new failures to a versioned eval set.

## Related terms

- [Dataset Split](https://aiengineeringfromscratch.com/glossary/dataset-split)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Overfitting](https://aiengineeringfromscratch.com/glossary/overfitting)
- [Model Card](https://aiengineeringfromscratch.com/glossary/model-card)

## Sources

- [WILDS](https://proceedings.mlr.press/v139/koh21a.html)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
