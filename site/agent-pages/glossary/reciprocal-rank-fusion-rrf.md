# What is Reciprocal Rank Fusion (RRF)?

Canonical page: https://aiengineeringfromscratch.com/glossary/reciprocal-rank-fusion-rrf
Category: Retrieval & generation

A rank-fusion method that combines several result lists by summing contributions that decrease with each item's rank in each list.

## Why does Reciprocal Rank Fusion (RRF) matter?

It can merge lexical, dense, or multi-query rankings without assuming their raw scores share the same scale.

## What is the common confusion about Reciprocal Rank Fusion (RRF)?

RRF combines ranks, not embeddings or relevance scores, and it cannot recover an item absent from every input list.

## Reciprocal Rank Fusion (RRF) in practice

Retrieve independent candidate lists, deduplicate by stable document identity, apply one versioned fusion constant, and evaluate against each individual retriever.

## Lessons

- [Information Retrieval and Search](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F14-information-retrieval-search) (Phase 05: NLP: Foundations to Advanced)
- [Advanced RAG (Chunking, Reranking, Hybrid Search)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F07-advanced-rag) (Phase 11: LLM Engineering)
- [Hybrid Retrieval with BM25 and Dense Embeddings](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F65-hybrid-retrieval-bm25-dense) (Phase 19: Capstone Projects)

## Related terms

- [Hybrid Retrieval](https://aiengineeringfromscratch.com/glossary/hybrid-retrieval)
- [BM25](https://aiengineeringfromscratch.com/glossary/bm25)
- [Dense Retrieval](https://aiengineeringfromscratch.com/glossary/dense-retrieval)
- [Reranker](https://aiengineeringfromscratch.com/glossary/reranker)

## Sources

- [Reciprocal Rank Fusion Outperforms Condorcet and Individual Rank Learning Methods](https://dl.acm.org/doi/10.1145/1571941.1572114)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
