# What is Recall@K?

Canonical page: https://aiengineeringfromscratch.com/glossary/recall-k
Category: Retrieval & generation

For one query, Recall@K is `|relevant items intersecting the top k| / |relevant items|`. A dataset score aggregates those per-query values under a stated rule.

## Why does Recall@K matter?

It tells you whether a retrieval stage supplies downstream generation or reranking with enough relevant candidates.

## What is the common confusion about Recall@K?

High Recall@K does not mean the top result is good, the ranking is well ordered, or the final answer is grounded. Queries with no relevant items require an explicit exclusion or assigned-value policy because the denominator is zero.

## Recall@K in practice

Define relevance judgments, k, the aggregation method, and a policy for queries with no judged relevant items, then inspect queries with zero recalled evidence.

## Lessons

- [Image Retrieval & Metric Learning](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F20-image-retrieval-metric) (Phase 04: Computer Vision)
- [Multimodal Evaluation](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F63-multimodal-eval) (Phase 19: Capstone Projects)
- [Chunking Strategies, Compared](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F64-chunking-strategies-advanced) (Phase 19: Capstone Projects)
- [RAG Evaluation: Precision, Recall, MRR, nDCG, Faithfulness, Answer Relevance](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F68-rag-eval-precision-recall) (Phase 19: Capstone Projects)

## Related terms

- [Precision & Recall](https://aiengineeringfromscratch.com/glossary/precision-recall)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Reranker](https://aiengineeringfromscratch.com/glossary/reranker)
- [Approximate Nearest Neighbor (ANN)](https://aiengineeringfromscratch.com/glossary/approximate-nearest-neighbor-ann)
- [HNSW](https://aiengineeringfromscratch.com/glossary/hnsw)

## Sources

- [BEIR](https://openreview.net/forum?id=wCu6T5xFjeJ)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
