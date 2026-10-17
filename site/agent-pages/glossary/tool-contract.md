# What is Tool Contract?

Canonical page: https://aiengineeringfromscratch.com/glossary/tool-contract
Category: Agents & tools

The complete agreement for a tool boundary: purpose, typed inputs, outputs, validation, permissions, side effects, errors, timeouts, idempotency, and evidence returned to the caller.

## Why does Tool Contract matter?

A schema tells a model what fields exist; a contract tells the system when the tool is safe and how failures must be handled.

## What is the common confusion about Tool Contract?

A JSON Schema is part of a tool contract, not the whole contract.

## Tool Contract in practice

Define a file-write tool with an allowed root, expected base revision, maximum size, dry-run mode, explicit conflict errors, and a returned patch hash.

## Lessons

- [Tool Use and Function Calling](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F06-tool-use-and-function-calling) (Phase 14: Agent Engineering)
- [MCP Tool Contracts and Content](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F28-mcp-tool-contracts-and-content) (Phase 13: Tools & Protocols)

## Related terms

- [Function Calling](https://aiengineeringfromscratch.com/glossary/function-calling)
- [Structured Output](https://aiengineeringfromscratch.com/glossary/structured-output)
- [Least Privilege](https://aiengineeringfromscratch.com/glossary/least-privilege)
- [Idempotency](https://aiengineeringfromscratch.com/glossary/idempotency)
- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Agent Harness](https://aiengineeringfromscratch.com/glossary/agent-harness)
- [Instruction Hierarchy](https://aiengineeringfromscratch.com/glossary/instruction-hierarchy)
- [MCP (Model Context Protocol)](https://aiengineeringfromscratch.com/glossary/mcp-model-context-protocol)
- [Multi Round-Trip Request (MRTR)](https://aiengineeringfromscratch.com/glossary/multi-round-trip-request-mrtr)
- [Prompt Injection](https://aiengineeringfromscratch.com/glossary/prompt-injection)
- [Stateless MCP](https://aiengineeringfromscratch.com/glossary/stateless-mcp)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
