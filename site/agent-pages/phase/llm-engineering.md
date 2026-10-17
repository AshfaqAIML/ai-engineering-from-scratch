# Learn LLM Engineering: 17 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/llm-engineering

Put LLMs to work in production applications.

## Lessons in Phase 11: LLM Engineering

01. [Prompt Engineering: Techniques & Patterns](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F01-prompt-engineering): Most people write prompts like they are texting a friend. Then they wonder why a 200-billion parameter model gives mediocre answers. Prompt engineering is not about tricks. (Build, Python, ~90 min)
02. [Few-Shot, Chain-of-Thought, Tree-of-Thought](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F02-few-shot-cot): Telling a model what to do is prompting. Showing it how to think is engineering. The gap between 78% and 91% accuracy on the same model, same task, same data is not a better model. (Build, Python, ~45 min)
03. [Structured Outputs: JSON, Schema Validation, Constrained Decoding](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F03-structured-outputs): Your LLM returns a string. Your application needs JSON. That gap has crashed more production systems than any model hallucination. (Build, Python, ~90 min)
04. [Embeddings & Vector Representations](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F04-embeddings): Text is discrete. Math is continuous. Every time you ask an LLM to find "similar" documents, compare meanings, or search beyond keywords, you're relying on a bridge between these two worlds. (Build, Python, ~75 min)
05. [Context Engineering: Windows, Budgets, Memory, and Retrieval](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F05-context-engineering): Prompt engineering is a subset. Context engineering is the whole game. A prompt is a string you type. Context is everything that goes into the model's window: system instructions, retrieved… (Build, Python, ~90 min)
06. [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F06-rag): Your LLM knows everything up to its training cutoff. It knows nothing about your company's docs, your codebase, or last week's meeting notes. (Build, Python, ~90 min)
07. [Advanced RAG (Chunking, Reranking, Hybrid Search)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F07-advanced-rag): Basic RAG retrieves the top-k most similar chunks. That works for simple questions. It falls apart for multi-hop reasoning, ambiguous queries, and large corpora. (Build, Python, ~90 min)
08. [Fine-Tuning with LoRA & QLoRA](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F08-fine-tuning-lora): Full fine-tuning a 7B model requires 56GB of VRAM. You don't have that. Neither do most companies. LoRA lets you fine-tune the same model in 6GB by training less than 1% of the parameters. (Build, Python, ~75 min)
09. [Function Calling & Tool Use](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F09-function-calling): LLMs cannot do anything. They generate text. That is the entire capability. They cannot check the weather, query a database, send an email, run code, or read a file. (Build, Python, ~75 min)
10. [Evaluation & Testing LLM Applications](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F10-evaluation): You would never deploy a web app without tests. You would never ship a database migration without a rollback plan. But right now, most teams ship LLM applications by reading 10 outputs and saying… (Build, Python, ~45 min)
11. [Caching, Rate Limiting & Cost Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F11-caching-cost): Most AI startups do not die from bad models. They die from bad unit economics. A single GPT-4o call costs fractions of a cent. (Build, Python, ~45 min)
12. [Guardrails, Safety & Content Filtering](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F12-guardrails): Your LLM application will be attacked. Not might. Will. The first prompt injection attempt against your production system will come within 48 hours of launch. (Build, Python, ~45 min)
13. [Building a Production LLM Application](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F13-production-app): You have built prompts, embeddings, RAG pipelines, function calling, caching layers, and guardrails. Separately. In isolation. Like practicing guitar scales without ever playing a song. (Build, Python, ~120 min)
14. [Model Context Protocol (MCP)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F14-model-context-protocol): MCP gives an AI host one protocol for discovering and invoking tools, resources, and prompts. The 2026-07-28 revision makes that protocol stateless: capability and version context travels with every… (Build, Python, ~75 min)
15. [Prompt Caching and Context Caching](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F15-prompt-caching): Your system prompt is 4,000 tokens. Your RAG context is 20,000 tokens. You send both with every request. You also pay for both — every time. (Build, Python, ~60 min)
16. [Agent State Machines — Graphs, Nodes, Checkpoints](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F16-langgraph-state-machines): A ReAct loop written by hand is a while True. The same loop written as an explicit graph is something you can checkpoint, interrupt, branch, and time-travel through. The agent hasn't changed. (Build, Python, ~75 min)
17. [Agent Framework Tradeoffs — Graph, Role, and Actor Orchestration](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F17-agent-framework-tradeoffs): Every framework sells the same demo (research agent builds a report) and hides the same bug (state schema fights with the orchestration layer). (Learn, Python, ~45 min)

## Start

Run this command from the repository root:

```bash
python3 phases/11-llm-engineering/01-prompt-engineering/code/prompt_engineering.py
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [BM25](https://aiengineeringfromscratch.com/glossary/bm25)
- [Chain of Thought (CoT)](https://aiengineeringfromscratch.com/glossary/chain-of-thought-cot)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Chunking](https://aiengineeringfromscratch.com/glossary/chunking)
- [Circuit Breaker](https://aiengineeringfromscratch.com/glossary/circuit-breaker)
- [Context Compression](https://aiengineeringfromscratch.com/glossary/context-compression)
- [Context Engineering](https://aiengineeringfromscratch.com/glossary/context-engineering)
- [Context Window](https://aiengineeringfromscratch.com/glossary/context-window)
- [Cosine Similarity](https://aiengineeringfromscratch.com/glossary/cosine-similarity)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Few-Shot](https://aiengineeringfromscratch.com/glossary/few-shot)
- [Fine-tuning](https://aiengineeringfromscratch.com/glossary/fine-tuning)
- [Function Calling](https://aiengineeringfromscratch.com/glossary/function-calling)
- [Graceful Degradation](https://aiengineeringfromscratch.com/glossary/graceful-degradation)
- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)
- [Guardrails](https://aiengineeringfromscratch.com/glossary/guardrails)
- [HNSW](https://aiengineeringfromscratch.com/glossary/hnsw)
- [Human-in-the-Loop (HITL)](https://aiengineeringfromscratch.com/glossary/human-in-the-loop-hitl)
- [Hybrid Retrieval](https://aiengineeringfromscratch.com/glossary/hybrid-retrieval)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [LoRA (Low-Rank Adaptation)](https://aiengineeringfromscratch.com/glossary/lora-low-rank-adaptation)
- [MCP (Model Context Protocol)](https://aiengineeringfromscratch.com/glossary/mcp-model-context-protocol)
- [Model Router](https://aiengineeringfromscratch.com/glossary/model-router)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Orchestration](https://aiengineeringfromscratch.com/glossary/orchestration)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Prompt Cache](https://aiengineeringfromscratch.com/glossary/prompt-cache)
- [Prompt Engineering](https://aiengineeringfromscratch.com/glossary#prompt-engineering)
- [QLoRA](https://aiengineeringfromscratch.com/glossary/qlora)
- [Quantization](https://aiengineeringfromscratch.com/glossary/quantization)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [ReAct](https://aiengineeringfromscratch.com/glossary/react)
- [Readiness Probe](https://aiengineeringfromscratch.com/glossary/readiness-probe)
- [Reciprocal Rank Fusion (RRF)](https://aiengineeringfromscratch.com/glossary/reciprocal-rank-fusion-rrf)
- [Reranker](https://aiengineeringfromscratch.com/glossary/reranker)
- [Semantic Cache](https://aiengineeringfromscratch.com/glossary/semantic-cache)
- [Semantic Search](https://aiengineeringfromscratch.com/glossary/semantic-search)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Structured Output](https://aiengineeringfromscratch.com/glossary/structured-output)
- [Temperature](https://aiengineeringfromscratch.com/glossary/temperature)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Token Budget](https://aiengineeringfromscratch.com/glossary/token-budget)
- [Vector Database](https://aiengineeringfromscratch.com/glossary/vector-database)
- [Weight](https://aiengineeringfromscratch.com/glossary/weight)
- [Zero-Shot](https://aiengineeringfromscratch.com/glossary#zero-shot)

## Frequently asked questions

### How many lessons are in Phase 11: LLM Engineering?

Phase 11 has 17 lessons: 16 Build lessons and 1 Learn lesson. The lesson code uses Python.

### What should I know before I start Phase 11?

The phase guide gives these prerequisites: Phase 10 Lessons 01 through 05, or equivalent knowledge of tokenization, data pipelines, pretraining, and scaling. In the course roadmap, this phase builds on Phase 10: LLMs from Scratch.

### Is Phase 11 free?

Yes. All 17 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 11 take?

The time estimates of all 17 lessons add up to about 21 hours.

### What comes after Phase 11?

Phase 13: Tools & Protocols builds on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
