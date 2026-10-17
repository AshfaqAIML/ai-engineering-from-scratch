# What is Instruction Hierarchy?

Canonical page: https://aiengineeringfromscratch.com/glossary/instruction-hierarchy
Category: Prompting & context

A rule set for resolving conflicts among instructions from sources with different authority, such as application policy, users, and untrusted retrieved content.

## Why does Instruction Hierarchy matter?

Agent systems mix trusted goals with external text, so the model and harness need a defined response when lower-authority content conflicts with higher-authority constraints.

## What is the common confusion about Instruction Hierarchy?

An instruction hierarchy can improve behavior but is not a security boundary; least privilege and approval controls still limit consequences.

## Instruction Hierarchy in practice

Label untrusted tool output as data, preserve higher-priority constraints outside that content, and test direct and indirect conflict cases.

## Related terms

- [System Prompt](https://aiengineeringfromscratch.com/glossary/system-prompt)
- [Prompt Injection](https://aiengineeringfromscratch.com/glossary/prompt-injection)
- [Least Privilege](https://aiengineeringfromscratch.com/glossary/least-privilege)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)
- [Indirect Prompt Injection](https://aiengineeringfromscratch.com/glossary/indirect-prompt-injection)
- [Instruction Following](https://aiengineeringfromscratch.com/glossary/instruction-following)

## Sources

- [The Instruction Hierarchy](https://arxiv.org/abs/2404.13208)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
