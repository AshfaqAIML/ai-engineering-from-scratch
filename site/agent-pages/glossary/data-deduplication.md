# What is Data Deduplication?

Canonical page: https://aiengineeringfromscratch.com/glossary/data-deduplication
Category: Data & representations

Detecting and removing exact and near-duplicate examples within or across datasets.

## Why does Data Deduplication matter?

Repetition can distort the training distribution, increase memorization, leak test material, and make evaluation appear stronger than it is.

## What is the common confusion about Data Deduplication?

Deduplication is not ordinary data cleaning. Two distinct records can legitimately share text, and two paraphrases can still carry the same leaked information.

## Data Deduplication in practice

Normalize content, use exact hashes and similarity methods, review borderline clusters, and record which version and rule removed each example.

## Related terms

- [Data Provenance](https://aiengineeringfromscratch.com/glossary/data-provenance)
- [Benchmark Contamination](https://aiengineeringfromscratch.com/glossary/benchmark-contamination)
- [Dataset Split](https://aiengineeringfromscratch.com/glossary/dataset-split)
- [Overfitting](https://aiengineeringfromscratch.com/glossary/overfitting)

## Sources

- [Deduplicating Training Data Makes Language Models Better](https://arxiv.org/abs/2107.06499)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
