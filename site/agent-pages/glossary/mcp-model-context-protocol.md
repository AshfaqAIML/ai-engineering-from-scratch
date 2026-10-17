# What is MCP (Model Context Protocol)?

Canonical page: https://aiengineeringfromscratch.com/glossary/mcp-model-context-protocol
Category: Agents & tools

An open JSON-RPC protocol for a host to connect to servers that expose tools, resources, prompts, and extensions through defined request, result, discovery, and transport contracts. In revision 2026-07-28, every request carries its protocol version and client capabilities instead of relying on an initialization handshake or protocol session.

What people say: "A standard way for AI applications to connect to tools and context."

## What is the common confusion about MCP (Model Context Protocol)?

MCP standardizes discovery and exchange. It does not decide which tool is safe to call, grant permission, or forbid an application from using explicit state handles.

## Lessons

- [Model Context Protocol (MCP)](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F14-model-context-protocol) (Phase 11: LLM Engineering)
- [MCP Fundamentals: Stateless Requests and JSON-RPC](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F06-mcp-fundamentals) (Phase 13: Tools & Protocols)
- [Building an MCP Server: Stateless Python and TypeScript](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F07-building-an-mcp-server) (Phase 13: Tools & Protocols)
- [Building an MCP Client: Discovery, Routing, and Dual-Era Fallback](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F08-building-an-mcp-client) (Phase 13: Tools & Protocols)
- [MCP Transports: stdio and Stateless Streamable HTTP](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F09-mcp-transports) (Phase 13: Tools & Protocols)
- [MCP Resources and Prompts: Addressable Context for Stateless Servers](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F10-mcp-resources-and-prompts) (Phase 13: Tools & Protocols)
- [MCP Model Input: Sampling Migration and Stateless MRTR](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F11-mcp-sampling) (Phase 13: Tools & Protocols)
- [MCP Tasks Extension: Durable Work on a Stateless Core](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F13-mcp-async-tasks) (Phase 13: Tools & Protocols)
- [MCP Apps on the Stateless Protocol](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F14-mcp-apps) (Phase 13: Tools & Protocols)

## Related terms

- [Stateless MCP](https://aiengineeringfromscratch.com/glossary/stateless-mcp)
- [Multi Round-Trip Request (MRTR)](https://aiengineeringfromscratch.com/glossary/multi-round-trip-request-mrtr)
- [Function Calling](https://aiengineeringfromscratch.com/glossary/function-calling)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)
- [Least Privilege](https://aiengineeringfromscratch.com/glossary/least-privilege)
- [Agent Skill](https://aiengineeringfromscratch.com/glossary/agent-skill)

## Sources

- [MCP 2026-07-28 key changes](https://modelcontextprotocol.io/specification/2026-07-28/changelog)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
