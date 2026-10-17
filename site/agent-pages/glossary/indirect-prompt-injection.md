# What is Indirect Prompt Injection?

Canonical page: https://aiengineeringfromscratch.com/glossary/indirect-prompt-injection
Category: Security & governance

A prompt-injection attack delivered through content the system retrieves or observes, such as a webpage, document, email, image text, or tool result, rather than directly through the user's instruction.

## Why does Indirect Prompt Injection matter?

An agent can encounter attacker-controlled instructions while performing an authorized task and mistake that content for authority-bearing guidance.

## What is the common confusion about Indirect Prompt Injection?

Indirect describes the delivery path, not a weaker attack. A hidden instruction in retrieved content can be as consequential as a direct user prompt.

## Indirect Prompt Injection in practice

Label external content as untrusted data, separate it from instructions, minimize tool permissions, require approval for consequential actions, and include malicious retrieved content in regression tests.

## Lessons

- [Indirect Prompt Injection — Production Attack Surface](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F15-indirect-prompt-injection) (Phase 18: Ethics, Safety & Alignment)

## Related terms

- [Prompt Injection](https://aiengineeringfromscratch.com/glossary/prompt-injection)
- [Instruction Hierarchy](https://aiengineeringfromscratch.com/glossary/instruction-hierarchy)
- [Trust Boundary](https://aiengineeringfromscratch.com/glossary/trust-boundary)
- [Data Exfiltration](https://aiengineeringfromscratch.com/glossary/data-exfiltration)

## Sources

- [Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection](https://arxiv.org/abs/2302.12173)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
