# What is Context Window?

Canonical page: https://aiengineeringfromscratch.com/glossary/context-window
Category: Prompting & context

The maximum token capacity available to one model inference under a specific model and API contract. The capacity may include system instructions, messages, retrieved content, tool exchanges, and generated output, with provider-specific accounting and output limits.

What people say: "How much the model remembers."

## Why does Context Window matter?

Conversation history is only available when the application sends or reconstructs it. A large window does not guarantee that every included detail will be used reliably.

## What is the common confusion about Context Window?

Context is temporary input to an inference. Durable memory is stored outside the model and selected back into later context.

## Lessons

- [Context Engineering: Windows, Budgets, Memory, and Retrieval](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F05-context-engineering) (Phase 11: LLM Engineering)
- [Prompt Engineering: Techniques & Patterns](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F01-prompt-engineering) (Phase 11: LLM Engineering)

## Related terms

- [Token Budget](https://aiengineeringfromscratch.com/glossary/token-budget)
- [Context Engineering](https://aiengineeringfromscratch.com/glossary/context-engineering)
- [Prompt Cache](https://aiengineeringfromscratch.com/glossary/prompt-cache)
- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Few-Shot](https://aiengineeringfromscratch.com/glossary/few-shot)
- [In-Context Learning](https://aiengineeringfromscratch.com/glossary/in-context-learning)
- [Lost in the Middle](https://aiengineeringfromscratch.com/glossary/lost-in-the-middle)
- [Paged KV Cache](https://aiengineeringfromscratch.com/glossary/paged-kv-cache)
- [Self-Attention](https://aiengineeringfromscratch.com/glossary/self-attention)
- [Token](https://aiengineeringfromscratch.com/glossary/token)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
