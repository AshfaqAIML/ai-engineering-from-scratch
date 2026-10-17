# What is Multi Round-Trip Request (MRTR)?

Canonical page: https://aiengineeringfromscratch.com/glossary/multi-round-trip-request-mrtr
Category: Agents & tools
Also called: MRTR

An MCP request pattern in which an operation returns `resultType: input_required` with one or more `inputRequests`, then the client retries the original method with `inputResponses` and the exact returned `requestState`.

## Why does Multi Round-Trip Request (MRTR) matter?

It lets a stateless server request user, model, or root input without opening a server-initiated JSON-RPC exchange or storing protocol session state.

## What is the common confusion about Multi Round-Trip Request (MRTR)?

`requestState` is untrusted round-trip data. Integrity-protect it before using it for authorization or business decisions, and do not treat it as a server-side session identifier.

## Multi Round-Trip Request (MRTR) in practice

Return an input request from `tools/call`, collect the authorized response in the host, and retry that same tool call with a new JSON-RPC id.

## Lessons

- [Explicit Scope and Stateless Elicitation](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F12-mcp-roots-and-elicitation) (Phase 13: Tools & Protocols)
- [MCP Model Input: Sampling Migration and Stateless MRTR](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F11-mcp-sampling) (Phase 13: Tools & Protocols)
- [MCP Security: Poisoned Metadata, Routing, and MRTR State](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F15-mcp-security-tool-poisoning) (Phase 13: Tools & Protocols)
- [Stateless MCP Gateways and Registry Admission](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F17-mcp-gateways-and-registries) (Phase 13: Tools & Protocols)

## Related terms

- [Stateless MCP](https://aiengineeringfromscratch.com/glossary/stateless-mcp)
- [MCP (Model Context Protocol)](https://aiengineeringfromscratch.com/glossary/mcp-model-context-protocol)
- [Human-in-the-Loop (HITL)](https://aiengineeringfromscratch.com/glossary/human-in-the-loop-hitl)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)

## Sources

- [MCP Multi Round-Trip Requests](https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/mrtr)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
