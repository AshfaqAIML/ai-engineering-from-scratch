# What is Hybrid Retrieval?

Canonical page: https://aiengineeringfromscratch.com/glossary/hybrid-retrieval
Category: Retrieval & generation

Retrieval that combines signals from different methods, commonly lexical matching and dense-vector similarity, before merging or reranking results.

## Why does Hybrid Retrieval matter?

Exact identifiers, rare terms, and semantic paraphrases behave differently, so one retrieval signal can miss useful evidence.

## What is the common confusion about Hybrid Retrieval?

Hybrid retrieval combines candidate signals. A reranker applies a second relevance model to candidates already retrieved.

## Hybrid Retrieval in practice

Retrieve candidates with both BM25-style keyword search and embeddings, merge their ranks, then rerank the combined set for the user query.

## Lessons

- [Advanced RAG (Chunking, Reranking, Hybrid Search)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F07-advanced-rag) (Phase 11: LLM Engineering)
- [Hybrid Retrieval with BM25 and Dense Embeddings](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F65-hybrid-retrieval-bm25-dense) (Phase 19: Capstone Projects)

## Related terms

- [Semantic Search](https://aiengineeringfromscratch.com/glossary/semantic-search)
- [Reranker](https://aiengineeringfromscratch.com/glossary/reranker)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [BM25](https://aiengineeringfromscratch.com/glossary/bm25)
- [Dense Retrieval](https://aiengineeringfromscratch.com/glossary/dense-retrieval)
- [Reciprocal Rank Fusion (RRF)](https://aiengineeringfromscratch.com/glossary/reciprocal-rank-fusion-rrf)
- [Vector Database](https://aiengineeringfromscratch.com/glossary/vector-database)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
