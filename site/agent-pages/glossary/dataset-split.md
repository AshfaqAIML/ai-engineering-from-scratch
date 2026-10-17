# What is Dataset Split?

Canonical page: https://aiengineeringfromscratch.com/glossary/dataset-split
Category: Data & representations

A documented partition of examples into separate subsets for fitting, development decisions, and final evaluation.

## Why does Dataset Split matter?

Separation prevents the evidence used to choose a system from also serving as independent proof that the chosen system generalizes.

## What is the common confusion about Dataset Split?

A random split is not automatically independent. Near duplicates, future observations, or records from the same entity can cross the boundary.

## Dataset Split in practice

Split by the real deployment unit, such as user, repository, organization, or time, rather than randomly dividing correlated rows.

## Related terms

- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Overfitting](https://aiengineeringfromscratch.com/glossary/overfitting)
- [Data Leakage](https://aiengineeringfromscratch.com/glossary/data-leakage)
- [Distribution Shift](https://aiengineeringfromscratch.com/glossary/distribution-shift)
- [Data Deduplication](https://aiengineeringfromscratch.com/glossary/data-deduplication)
- [Data Provenance](https://aiengineeringfromscratch.com/glossary/data-provenance)
- [Datasheet for Datasets](https://aiengineeringfromscratch.com/glossary/datasheet-for-datasets)
- [Model Card](https://aiengineeringfromscratch.com/glossary/model-card)

## Sources

- [Datasheets for Datasets](https://cacm.acm.org/research/datasheets-for-datasets/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
