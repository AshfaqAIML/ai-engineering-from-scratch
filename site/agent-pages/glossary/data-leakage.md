# What is Data Leakage?

Canonical page: https://aiengineeringfromscratch.com/glossary/data-leakage
Category: Data & representations

Unintended use of information during training or feature construction that would not be available at the real prediction point or belongs to a held-out evaluation boundary.

## Why does Data Leakage matter?

Leakage produces optimistic metrics that collapse when the system encounters genuinely unseen inputs.

## What is the common confusion about Data Leakage?

Leakage is not limited to duplicate rows. Global normalization statistics, timestamps, target-derived features, and repeated test-driven prompt edits can all leak information.

## Data Leakage in practice

Split data before fitting preprocessors, keep future information out of historical features, and isolate test labels and benchmark answers from prompts and tuning loops.

## Lessons

- [ML Pipelines](https://aiengineeringfromscratch.com/lesson?path=phases%2F02-ml-fundamentals%2F13-ml-pipelines) (Phase 02: ML Fundamentals)

## Related terms

- [Dataset Split](https://aiengineeringfromscratch.com/glossary/dataset-split)
- [Benchmark Contamination](https://aiengineeringfromscratch.com/glossary/benchmark-contamination)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Data Provenance](https://aiengineeringfromscratch.com/glossary/data-provenance)
- [Membership Inference](https://aiengineeringfromscratch.com/glossary/membership-inference)

## Sources

- [scikit-learn: Data leakage](https://scikit-learn.org/stable/common_pitfalls.html#data-leakage)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
