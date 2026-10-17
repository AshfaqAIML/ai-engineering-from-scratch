# What is LLM-as-a-Judge?

Canonical page: https://aiengineeringfromscratch.com/glossary/llm-as-a-judge
Category: Evaluation & safety

Using a language model to score, compare, classify, or critique another system's output against a rubric.

## Why does LLM-as-a-Judge matter?

It can scale evaluation of qualities that are difficult to express as exact-match tests, such as clarity or instruction adherence.

## What is the common confusion about LLM-as-a-Judge?

A judge model is not ground truth. It can be biased by order, verbosity, style, prompt wording, or shared model failures.

## LLM-as-a-Judge in practice

Give a separate evaluator model the task, candidate answer, reference evidence, and a structured rubric, then calibrate its scores against human-reviewed examples.

## Lessons

- [Eval-Driven Agent Development](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F30-eval-driven-agent-development) (Phase 14: Agent Engineering)

## Related terms

- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Precision & Recall](https://aiengineeringfromscratch.com/glossary/precision-recall)
- [Reviewer Agent](https://aiengineeringfromscratch.com/glossary/reviewer-agent)
- [ROUGE](https://aiengineeringfromscratch.com/glossary/rouge)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
