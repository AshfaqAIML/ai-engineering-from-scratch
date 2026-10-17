# What is Approximate Nearest Neighbor (ANN)?

Canonical page: https://aiengineeringfromscratch.com/glossary/approximate-nearest-neighbor-ann
Category: Retrieval & generation

A search method that returns vectors likely to be among the nearest to a query without exhaustively comparing the query with every stored vector.

## Why does Approximate Nearest Neighbor (ANN) matter?

Approximation makes large vector indexes practical, but it introduces a measurable tradeoff between search speed, memory, and retrieval recall.

## What is the common confusion about Approximate Nearest Neighbor (ANN)?

ANN describes a search objective and tradeoff, while HNSW is one particular index algorithm that can implement it.

## Approximate Nearest Neighbor (ANN) in practice

Tune index and search parameters against a held-out query set, then report latency together with Recall@K instead of assuming every true neighbor is found.

## Related terms

- [Vector Database](https://aiengineeringfromscratch.com/glossary/vector-database)
- [HNSW](https://aiengineeringfromscratch.com/glossary/hnsw)
- [Cosine Similarity](https://aiengineeringfromscratch.com/glossary/cosine-similarity)
- [Recall@K](https://aiengineeringfromscratch.com/glossary/recall-k)

## Sources

- [Efficient and Robust Approximate Nearest Neighbor Search Using HNSW](https://dl.acm.org/doi/10.1109/TPAMI.2018.2889473)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
