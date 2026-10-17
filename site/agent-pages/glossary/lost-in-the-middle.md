# What is Lost in the Middle?

Canonical page: https://aiengineeringfromscratch.com/glossary/lost-in-the-middle
Category: Prompting & context

A long-context failure pattern in which model performance changes with evidence position and can degrade when relevant information sits between the beginning and end.

## Why does Lost in the Middle matter?

Fitting evidence inside the context window does not guarantee that the model will use every position with equal reliability.

## What is the common confusion about Lost in the Middle?

It is an observed behavior pattern, not a fixed law that affects every model, task, or position identically.

## Lost in the Middle in practice

Test several evidence positions, reduce distractors, place decision-critical constraints where they remain salient, and verify answers against the source.

## Related terms

- [Context Window](https://aiengineeringfromscratch.com/glossary/context-window)
- [Context Engineering](https://aiengineeringfromscratch.com/glossary/context-engineering)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)

## Sources

- [Lost in the Middle](https://aclanthology.org/2024.tacl-1.9/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
