# What is Chain of Thought (CoT)?

Canonical page: https://aiengineeringfromscratch.com/glossary/chain-of-thought-cot
Category: Prompting & context

Intermediate reasoning used to decompose a task before producing an answer. A prompt can request a visible rationale, while some systems use internal reasoning that is not returned to the user.

What people say: "Asking the model to show every step of its thinking."

## Why does Chain of Thought (CoT) matter?

Decomposition can help on multi-step tasks, but a fluent rationale is not proof that the answer is correct or that the text faithfully represents the model's internal computation.

## What is the common confusion about Chain of Thought (CoT)?

Chain of thought is not a substitute for tools, tests, or external verification.

## Chain of Thought (CoT) in practice

Ask for a concise plan, independently check the result, and request verifiable calculations or citations instead of relying on a long reasoning transcript.

## Lessons

- [Few-Shot, Chain-of-Thought, Tree-of-Thought](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F02-few-shot-cot) (Phase 11: LLM Engineering)

## Related terms

- [Prompt Engineering](https://aiengineeringfromscratch.com/glossary#prompt-engineering)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
