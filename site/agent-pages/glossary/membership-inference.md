# What is Membership Inference?

Canonical page: https://aiengineeringfromscratch.com/glossary/membership-inference
Category: Security & governance

An attack that estimates whether a particular record or example was included in a model's training data by observing model outputs or other accessible signals.

## Why does Membership Inference matter?

Even when the model does not reproduce a record verbatim, distinguishable behavior can reveal information about participation in a sensitive dataset.

## What is the common confusion about Membership Inference?

Membership inference asks whether a record participated in training. Model extraction tries to reproduce model behavior, while direct memorization tests whether content can be recovered.

## Membership Inference in practice

Test representative members and non-members under the real query interface, limit unnecessary confidence signals, reduce data exposure, and evaluate privacy defenses against utility requirements.

## Lessons

- [Differential Privacy for LLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F22-differential-privacy-for-llms) (Phase 18: Ethics, Safety & Alignment)

## Related terms

- [Data Leakage](https://aiengineeringfromscratch.com/glossary/data-leakage)
- [Data Minimization](https://aiengineeringfromscratch.com/glossary/data-minimization)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Data Classification](https://aiengineeringfromscratch.com/glossary/data-classification)

## Sources

- [Membership Inference Attacks Against Machine Learning Models](https://doi.org/10.1109/SP.2017.41)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
