# What is Prompt Sensitivity?

Canonical page: https://aiengineeringfromscratch.com/glossary/prompt-sensitivity
Category: Prompting & context

Variation in model output or measured performance caused by changes to prompt wording, order, formatting, or examples that preserve the intended task.

## Why does Prompt Sensitivity matter?

A system that succeeds under one convenient phrasing may be unreliable for real users or misleading in evaluation.

## What is the common confusion about Prompt Sensitivity?

Sensitivity is not always a prompt defect; it can reveal ambiguity, weak model robustness, unstable decoding, or an inadequate scoring rule.

## Prompt Sensitivity in practice

Create semantically equivalent prompt variants, measure variance by case, and keep variants in regression tests instead of optimizing one prompt against one eval set.

## Related terms

- [Prompt Engineering](https://aiengineeringfromscratch.com/glossary#prompt-engineering)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Regression Test](https://aiengineeringfromscratch.com/glossary/regression-test)
- [Few-Shot](https://aiengineeringfromscratch.com/glossary/few-shot)

## Sources

- [ProSA](https://aclanthology.org/2024.findings-emnlp.108/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
