# What is Trace?

Canonical page: https://aiengineeringfromscratch.com/glossary/trace
Category: AI-native development

A correlated record of one request or task across model calls, retrieval, tools, state transitions, retries, approvals, and evaluations.

## Why does Trace matter?

It lets you reconstruct where time, cost, and failure entered a multi-step workflow.

## What is the common confusion about Trace?

A trace should record operational evidence, not expose hidden model reasoning, secrets, or unredacted sensitive content.

## Trace in practice

Propagate one trace identifier through the agent harness and attach redacted spans for each model and tool operation.

## Lessons

- [OpenTelemetry GenAI Semantic Conventions](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F23-otel-genai-conventions) (Phase 14: Agent Engineering)
- [Dynamic Analysis of Your Own Program: Debuggers, Traces, and Confirming Static Claims](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F42-dynamic-analysis-of-your-own-program) (Phase 13: Tools & Protocols)
- [Capstone: Stateless Tool Ecosystem](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F23-capstone-tool-ecosystem) (Phase 13: Tools & Protocols)
- [Recovering Data and Types: Structs, Arrays, C++ Objects, and DWARF](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F41-recovering-data-and-types) (Phase 13: Tools & Protocols)
- [The Harness as a Library — Subagents and Session Store](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F17-claude-agent-sdk) (Phase 14: Agent Engineering)
- [FinOps for LLMs — Unit Economics and Multi-Tenant Attribution](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F27-finops-llms) (Phase 17: Infrastructure & Production)

## Related terms

- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Audit Log](https://aiengineeringfromscratch.com/glossary/audit-log)
- [Shadow Traffic](https://aiengineeringfromscratch.com/glossary/shadow-traffic)

## Sources

- [OpenTelemetry traces](https://opentelemetry.io/docs/concepts/signals/traces/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
