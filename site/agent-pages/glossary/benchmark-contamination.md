# What is Benchmark Contamination?

Canonical page: https://aiengineeringfromscratch.com/glossary/benchmark-contamination
Category: Evaluation & safety

Overlap or information leakage between evaluation examples and data used to pretrain, tune, prompt, select, or otherwise improve the evaluated system.

## Why does Benchmark Contamination matter?

Contamination can make a benchmark score reflect prior exposure rather than the ability to generalize to unseen tasks.

## What is the common confusion about Benchmark Contamination?

Contamination is broader than exact copying. Paraphrases, answer keys, benchmark metadata, and repeated prompt tuning can also leak evaluation information.

## Benchmark Contamination in practice

Track dataset provenance, search training sources for exact and near duplicates, hold back private test cases, and refresh public evals with newly authored examples.

## Related terms

- [Data Leakage](https://aiengineeringfromscratch.com/glossary/data-leakage)
- [Data Deduplication](https://aiengineeringfromscratch.com/glossary/data-deduplication)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Exact Match (EM)](https://aiengineeringfromscratch.com/glossary/exact-match-em)

## Sources

- [Investigating Data Contamination in Modern Benchmarks for Large Language Models](https://arxiv.org/abs/2311.09783)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
