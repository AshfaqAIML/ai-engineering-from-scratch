# What is HNSW?

Canonical page: https://aiengineeringfromscratch.com/glossary/hnsw
Category: Retrieval & generation
Also called: Hierarchical Navigable Small World

An approximate-nearest-neighbor index that organizes vectors in layered proximity graphs and searches from coarse upper layers toward detailed lower layers.

## Why does HNSW matter?

It is a common way to make high-recall vector search practical at scales where exhaustive comparison is too slow.

## What is the common confusion about HNSW?

HNSW is an index algorithm, not a similarity metric, embedding model, or complete vector database.

## HNSW in practice

Tune construction and query parameters against latency, memory, and Recall@K targets, then rebuild the index when embedding versions change.

## Lessons

- [Embeddings & Vector Representations](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F04-embeddings) (Phase 11: LLM Engineering)

## Related terms

- [Approximate Nearest Neighbor (ANN)](https://aiengineeringfromscratch.com/glossary/approximate-nearest-neighbor-ann)
- [Vector Database](https://aiengineeringfromscratch.com/glossary/vector-database)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Recall@K](https://aiengineeringfromscratch.com/glossary/recall-k)

## Sources

- [Efficient and Robust Approximate Nearest Neighbor Search Using HNSW](https://dl.acm.org/doi/10.1109/TPAMI.2018.2889473)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
