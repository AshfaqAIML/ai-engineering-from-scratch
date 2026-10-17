# What is Hallucination?

Canonical page: https://aiengineeringfromscratch.com/glossary/hallucination
Category: Evaluation & safety

Generated content that is false, unsupported by the available evidence, or inconsistent with the task's source of truth. It can arise even when the output is fluent and the model is not attempting to deceive.

What people say: "The model is lying."

## Why does Hallucination matter?

You usually cannot inspect whether a statement existed in training data, so production checks should focus on support, correctness, and traceability.

## What is the common confusion about Hallucination?

A hallucination is an output-quality failure, not a diagnosis of model intent.

## Hallucination in practice

Require cited evidence for factual answers and evaluate whether each citation actually supports the associated claim.

## Lessons

- [Failure Modes: Why Agents Break](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F26-failure-modes-agentic) (Phase 14: Agent Engineering)

## Related terms

- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
