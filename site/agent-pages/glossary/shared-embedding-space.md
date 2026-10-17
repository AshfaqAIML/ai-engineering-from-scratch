# What is Shared Embedding Space?

Canonical page: https://aiengineeringfromscratch.com/glossary/shared-embedding-space
Category: Multimodal systems

A common vector space in which representations from different modalities can be compared with the same similarity function.

## Why does Shared Embedding Space matter?

It enables cross-modal retrieval and matching, such as finding images from text, without requiring both items to share a raw representation.

## What is the common confusion about Shared Embedding Space?

Sharing a vector dimension does not create a shared semantic space. The training objective and data must establish cross-modal comparability.

## Shared Embedding Space in practice

Train paired and unpaired negatives deliberately, normalize vectors when the objective requires it, evaluate both retrieval directions, and inspect subgroup and language performance.

## Lessons

- [CLIP and Contrastive Vision-Language Pretraining](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F02-clip-contrastive-pretraining) (Phase 12: Multimodal AI)

## Related terms

- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Cosine Similarity](https://aiengineeringfromscratch.com/glossary/cosine-similarity)
- [Modality Alignment](https://aiengineeringfromscratch.com/glossary/modality-alignment)
- [Semantic Search](https://aiengineeringfromscratch.com/glossary/semantic-search)

## Sources

- [Learning Transferable Visual Models From Natural Language Supervision](https://proceedings.mlr.press/v139/radford21a.html)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
