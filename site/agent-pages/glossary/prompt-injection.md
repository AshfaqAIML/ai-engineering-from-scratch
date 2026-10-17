# What is Prompt Injection?

Canonical page: https://aiengineeringfromscratch.com/glossary/prompt-injection
Category: Evaluation & safety

An attack or failure mode in which untrusted content influences a model to disregard intended instructions, expose data, misuse tools, or take actions outside the user's goal. The content can arrive directly from a user or indirectly through retrieved pages, files, messages, or tool output.

What people say: "An adversarial instruction that redirects a model."

## Why does Prompt Injection matter?

Models process instructions and data through the same language channel, so input filtering alone cannot reliably separate every malicious instruction from legitimate content.

## What is the common confusion about Prompt Injection?

Prompt injection is not technically the same mechanism as SQL injection, and a stronger system prompt is not a complete defense.

## Prompt Injection in practice

Treat external content as untrusted, isolate it from authority-bearing instructions, minimize tool permissions, require approval for consequential writes, and verify outputs and actions.

## Lessons

- [Prompt Injection and the PVE Defense](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F27-prompt-injection-defense) (Phase 14: Agent Engineering)
- [Indirect Prompt Injection — Production Attack Surface](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F15-indirect-prompt-injection) (Phase 18: Ethics, Safety & Alignment)
- [Capstone 83 — Prompt Injection Detector](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F83-prompt-injection-detector) (Phase 19: Capstone Projects)

## Related terms

- [Least Privilege](https://aiengineeringfromscratch.com/glossary/least-privilege)
- [Sandbox](https://aiengineeringfromscratch.com/glossary/sandbox)
- [Approval Gate](https://aiengineeringfromscratch.com/glossary/approval-gate)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)
- [Indirect Prompt Injection](https://aiengineeringfromscratch.com/glossary/indirect-prompt-injection)
- [Instruction Hierarchy](https://aiengineeringfromscratch.com/glossary/instruction-hierarchy)
- [Jailbreak](https://aiengineeringfromscratch.com/glossary/jailbreak)
- [Red Teaming](https://aiengineeringfromscratch.com/glossary/red-teaming)
- [System Prompt](https://aiengineeringfromscratch.com/glossary/system-prompt)
- [Threat Model](https://aiengineeringfromscratch.com/glossary/threat-model)

## Sources

- [OWASP prompt injection guidance](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
