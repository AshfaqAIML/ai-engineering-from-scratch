# What is Maximum Marginal Relevance (MMR)?

Canonical page: https://aiengineeringfromscratch.com/glossary/maximum-marginal-relevance-mmr
Category: Retrieval & generation

A selection rule that balances relevance to the query with novelty relative to items already selected.

## Why does Maximum Marginal Relevance (MMR) matter?

It can reduce redundant chunks so a limited context budget covers more distinct evidence.

## What is the common confusion about Maximum Marginal Relevance (MMR)?

MMR diversifies an existing candidate set; it does not retrieve missing evidence or prove that selected passages are correct.

## Maximum Marginal Relevance (MMR) in practice

Retrieve a candidate pool, select the next item using a documented relevance-diversity weight, and evaluate both answer quality and source coverage.

## Related terms

- [Reranker](https://aiengineeringfromscratch.com/glossary/reranker)
- [Chunking](https://aiengineeringfromscratch.com/glossary/chunking)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)

## Sources

- [The Use of MMR, Diversity-Based Reranking for Reordering Documents and Producing Summaries](https://www.cs.cmu.edu/~jgc/publication/MMR_DiversityBased_Reranking_SIGIR_1998.pdf)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
