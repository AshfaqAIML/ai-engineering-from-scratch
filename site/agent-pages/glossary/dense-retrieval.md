# What is Dense Retrieval?

Canonical page: https://aiengineeringfromscratch.com/glossary/dense-retrieval
Category: Retrieval & generation

First-stage retrieval that embeds queries and candidates into vector representations and ranks candidates by a similarity function.

## Why does Dense Retrieval matter?

It can retrieve paraphrases and semantic matches that share few exact words, complementing lexical methods such as BM25.

## What is the common confusion about Dense Retrieval?

Dense retrieval is not a reranker. It searches the collection, while a reranker rescores a smaller candidate set.

## Dense Retrieval in practice

Train or select an embedding model for the domain, index candidate vectors, and evaluate retrieval recall before connecting the results to generation.

## Lessons

- [Information Retrieval and Search](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F14-information-retrieval-search) (Phase 05: NLP: Foundations to Advanced)
- [Hybrid Retrieval with BM25 and Dense Embeddings](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F65-hybrid-retrieval-bm25-dense) (Phase 19: Capstone Projects)

## Related terms

- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Semantic Search](https://aiengineeringfromscratch.com/glossary/semantic-search)
- [BM25](https://aiengineeringfromscratch.com/glossary/bm25)
- [Hybrid Retrieval](https://aiengineeringfromscratch.com/glossary/hybrid-retrieval)
- [Reciprocal Rank Fusion (RRF)](https://aiengineeringfromscratch.com/glossary/reciprocal-rank-fusion-rrf)

## Sources

- [Dense Passage Retrieval](https://aclanthology.org/2020.emnlp-main.550/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
