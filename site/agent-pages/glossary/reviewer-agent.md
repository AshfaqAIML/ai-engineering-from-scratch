# What is Reviewer Agent?

Canonical page: https://aiengineeringfromscratch.com/glossary/reviewer-agent
Category: AI-native development

An agent assigned to inspect another agent's artifact or decision against explicit criteria and return findings or a verdict.

## Why does Reviewer Agent matter?

Separation of roles can catch omissions, but it only helps when the reviewer receives independent evidence and a concrete rubric.

## What is the common confusion about Reviewer Agent?

A second model call is not automatically independent or correct. Shared context, model bias, and vague criteria can reproduce the same mistake.

## Reviewer Agent in practice

After one agent produces a patch, give a separate reviewer the diff, scope contract, repository rules, and test output, then require line-specific findings.

## Lessons

- [Reviewer Agent: Separate Builder from Marker](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F39-reviewer-agent) (Phase 14: Agent Engineering)

## Related terms

- [Coding Agent](https://aiengineeringfromscratch.com/glossary/coding-agent)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Scope Contract](https://aiengineeringfromscratch.com/glossary/scope-contract)
- [LLM-as-a-Judge](https://aiengineeringfromscratch.com/glossary/llm-as-a-judge)
- [Delegation](https://aiengineeringfromscratch.com/glossary/delegation)
- [Separation of Duties](https://aiengineeringfromscratch.com/glossary/separation-of-duties)
- [Swarm](https://aiengineeringfromscratch.com/glossary/swarm)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
