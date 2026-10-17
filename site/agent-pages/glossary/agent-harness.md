# What is Agent Harness?

Canonical page: https://aiengineeringfromscratch.com/glossary/agent-harness
Category: Agents & tools

The runtime around a model that assembles context, exposes tools, manages state, enforces limits, records traces, and decides when the agent should continue, retry, ask, or stop.

## Why does Agent Harness matter?

Two systems using the same model can perform very differently because their harnesses provide different context, tools, feedback, and safety boundaries.

## What is the common confusion about Agent Harness?

A harness is broader than a prompt template and narrower than the complete product.

## Agent Harness in practice

Your harness can limit an agent to five tool calls, persist a checkpoint after each accepted patch, and require a passing test command before completion.

## Lessons

- [The Minimal Agent Workbench](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F32-minimal-agent-workbench) (Phase 14: Agent Engineering)
- [Agent Harness Loop Contract](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F20-agent-harness-loop-contract) (Phase 19: Capstone Projects)

## Related terms

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)
- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Sandbox](https://aiengineeringfromscratch.com/glossary/sandbox)
- [Coding Agent](https://aiengineeringfromscratch.com/glossary/coding-agent)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [Orchestration](https://aiengineeringfromscratch.com/glossary/orchestration)
- [Termination Condition](https://aiengineeringfromscratch.com/glossary/termination-condition)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
