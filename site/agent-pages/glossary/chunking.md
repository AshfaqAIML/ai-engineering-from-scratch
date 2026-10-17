# What is Chunking?

Canonical page: https://aiengineeringfromscratch.com/glossary/chunking
Category: Retrieval & generation

Dividing source material into retrievable units before indexing. Chunk boundaries, overlap, metadata, and document structure determine whether retrieval returns enough context without flooding the prompt.

What people say: "Splitting documents into pieces."

## Why does Chunking matter?

The right chunking strategy depends on document shape, query type, embedding model, and evaluation results. There is no universal token size or overlap percentage.

## Chunking in practice

Keep headings and code blocks intact, attach source metadata, then measure retrieval quality on real questions before tuning size.

## Lessons

- [Chunking Strategies for RAG](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F23-chunking-strategies-rag) (Phase 05: NLP: Foundations to Advanced)
- [Advanced RAG (Chunking, Reranking, Hybrid Search)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F07-advanced-rag) (Phase 11: LLM Engineering)
- [Chunking Strategies, Compared](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F64-chunking-strategies-advanced) (Phase 19: Capstone Projects)
- [Build a Voice Assistant Pipeline — The Phase 6 Capstone](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F12-voice-assistant-pipeline) (Phase 06: Speech & Audio)
- [Embeddings & Vector Representations](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F04-embeddings) (Phase 11: LLM Engineering)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F06-rag) (Phase 11: LLM Engineering)

## Related terms

- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [Reranker](https://aiengineeringfromscratch.com/glossary/reranker)
- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)
- [Maximum Marginal Relevance (MMR)](https://aiengineeringfromscratch.com/glossary/maximum-marginal-relevance-mmr)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
