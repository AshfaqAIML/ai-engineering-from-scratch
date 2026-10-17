# What is Exact Match (EM)?

Canonical page: https://aiengineeringfromscratch.com/glossary/exact-match-em
Category: Evaluation & safety

A metric that counts an output as correct only when its normalized representation exactly equals an accepted reference answer.

## Why does Exact Match (EM) matter?

It is deterministic and easy to audit for tasks with one canonical answer, but it exposes no partial credit.

## What is the common confusion about Exact Match (EM)?

A low exact-match score can reflect harmless formatting differences, while a matching string can still be unsupported or unsafe in context.

## Exact Match (EM) in practice

Define normalization and all accepted references before evaluation, then pair exact match with task-specific checks when several outputs can be valid.

## Lessons

- [Multimodal Evaluation](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F63-multimodal-eval) (Phase 19: Capstone Projects)

## Related terms

- [ROUGE](https://aiengineeringfromscratch.com/glossary/rouge)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Structured Output](https://aiengineeringfromscratch.com/glossary/structured-output)
- [Pass@k](https://aiengineeringfromscratch.com/glossary/pass-k)
- [Benchmark Contamination](https://aiengineeringfromscratch.com/glossary/benchmark-contamination)

## Sources

- [SQuAD](https://aclanthology.org/D16-1264/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
