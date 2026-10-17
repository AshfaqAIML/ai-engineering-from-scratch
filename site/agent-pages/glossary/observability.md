# What is Observability?

Canonical page: https://aiengineeringfromscratch.com/glossary/observability
Category: AI-native development

The ability to understand an AI system's behavior from recorded inputs, outputs, state transitions, tool calls, timings, costs, errors, and evaluation signals.

## Why does Observability matter?

AI failures often span model, retrieval, tools, and orchestration. You need correlated evidence to locate the failing boundary.

## What is the common confusion about Observability?

Logging collects events. Observability makes those events structured and connected enough to answer operational questions.

## Observability in practice

Record a trace ID across retrieval, model calls, tool execution, approvals, and final scoring while applying redaction and access controls.

## Lessons

- [Agent Observability: Langfuse, Phoenix, Opik](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F24-agent-observability-platforms) (Phase 14: Agent Engineering)
- [LLM Observability Stack Selection](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F13-llm-observability) (Phase 17: Infrastructure & Production)
- [Capstone 11 — LLM Observability & Eval Dashboard](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F11-llm-observability-dashboard) (Phase 19: Capstone Projects)
- [Capstone Lesson 28: Observability with OTel GenAI Spans and Prometheus Metrics](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F28-observability-otel-traces) (Phase 19: Capstone Projects)
- [Building a Production LLM Application](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F13-production-app) (Phase 11: LLM Engineering)
- [Agent Framework Tradeoffs — Graph, Role, and Actor Orchestration](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F17-agent-framework-tradeoffs) (Phase 11: LLM Engineering)
- [The Actor Model for Agents — Async Messages and Typed Runtimes](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F14-autogen-actor-model) (Phase 14: Agent Engineering)
- [Production Runtimes: Queue, Event, Cron](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F29-production-runtimes) (Phase 14: Agent Engineering)
- [AI Gateways — LiteLLM, Portkey, Kong AI Gateway, Bifrost](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F19-ai-gateways) (Phase 17: Infrastructure & Production)

## Related terms

- [Trace](https://aiengineeringfromscratch.com/glossary/trace)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Audit Log](https://aiengineeringfromscratch.com/glossary/audit-log)
- [Canary Release](https://aiengineeringfromscratch.com/glossary/canary-release)
- [Incident Response](https://aiengineeringfromscratch.com/glossary/incident-response)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)
- [Postmortem](https://aiengineeringfromscratch.com/glossary/postmortem)
- [Saturation](https://aiengineeringfromscratch.com/glossary/saturation)
- [Service Level Indicator (SLI)](https://aiengineeringfromscratch.com/glossary/service-level-indicator-sli)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Tokens per Second (TPS)](https://aiengineeringfromscratch.com/glossary/tokens-per-second-tps)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
