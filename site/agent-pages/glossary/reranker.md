# What is Reranker?

Canonical page: https://aiengineeringfromscratch.com/glossary/reranker
Category: Retrieval & generation

A second-stage model or scoring function that reorders a small candidate set using a richer comparison between the query and each candidate.

## Why does Reranker matter?

Fast first-stage retrieval maximizes candidate coverage, while reranking can improve which evidence reaches the limited context window.

## What is the common confusion about Reranker?

A reranker does not search the entire corpus. It only reorders candidates that retrieval already found.

## Reranker in practice

Retrieve 50 candidates with hybrid search, score each query-document pair with a cross-encoder, and pass the top 5 supported chunks to generation.

## Lessons

- [Cross-Encoder Reranker](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F66-reranker-cross-encoder) (Phase 19: Capstone Projects)
- [Advanced RAG (Chunking, Reranking, Hybrid Search)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F07-advanced-rag) (Phase 11: LLM Engineering)

## Related terms

- [Hybrid Retrieval](https://aiengineeringfromscratch.com/glossary/hybrid-retrieval)
- [Semantic Search](https://aiengineeringfromscratch.com/glossary/semantic-search)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [BM25](https://aiengineeringfromscratch.com/glossary/bm25)
- [Chunking](https://aiengineeringfromscratch.com/glossary/chunking)
- [Cosine Similarity](https://aiengineeringfromscratch.com/glossary/cosine-similarity)
- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)
- [Maximum Marginal Relevance (MMR)](https://aiengineeringfromscratch.com/glossary/maximum-marginal-relevance-mmr)
- [Recall@K](https://aiengineeringfromscratch.com/glossary/recall-k)
- [Reciprocal Rank Fusion (RRF)](https://aiengineeringfromscratch.com/glossary/reciprocal-rank-fusion-rrf)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
