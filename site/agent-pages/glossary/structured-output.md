# What is Structured Output?

Canonical page: https://aiengineeringfromscratch.com/glossary/structured-output
Category: Agents & tools

Model output constrained or validated against a machine-readable schema so application code can consume fields without parsing free-form prose.

## Why does Structured Output matter?

It reduces format ambiguity at the model-to-software boundary and enables field-level validation and retries.

## What is the common confusion about Structured Output?

Schema-valid output can still contain incorrect values. Structure is not factual verification.

## Structured Output in practice

Require an incident triage result with an allowed severity enum, evidence array, and nullable escalation reason, then reject any response that fails the schema.

## Lessons

- [Structured Outputs: JSON, Schema Validation, Constrained Decoding](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F03-structured-outputs) (Phase 11: LLM Engineering)
- [Structured Outputs & Constrained Decoding](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F20-structured-outputs-constrained-decoding) (Phase 05: NLP: Foundations to Advanced)
- [Structured Output — JSON Schema, Pydantic, Zod, Constrained Decoding](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F04-structured-output) (Phase 13: Tools & Protocols)
- [Dialogue State Tracking](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F29-dialogue-state-tracking) (Phase 05: NLP: Foundations to Advanced)
- [Function Calling & Tool Use](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F09-function-calling) (Phase 11: LLM Engineering)

## Related terms

- [Function Calling](https://aiengineeringfromscratch.com/glossary/function-calling)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Exact Match (EM)](https://aiengineeringfromscratch.com/glossary/exact-match-em)
- [Prompt Engineering](https://aiengineeringfromscratch.com/glossary#prompt-engineering)
- [Stop Sequence](https://aiengineeringfromscratch.com/glossary/stop-sequence)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
