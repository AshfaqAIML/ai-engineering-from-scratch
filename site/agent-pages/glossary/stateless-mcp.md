# What is Stateless MCP?

Canonical page: https://aiengineeringfromscratch.com/glossary/stateless-mcp
Category: Agents & tools

The MCP 2026-07-28 request model in which every request carries the protocol version and client capabilities in `params._meta`, while results carry an explicit `resultType`; no protocol state is keyed by an initialization handshake, connection, or `Mcp-Session-Id`.

## Why does Stateless MCP matter?

Any worker can validate and process a request from its contents and authorization context, which avoids hidden connection affinity and makes horizontal routing easier to reason about.

## What is the common confusion about Stateless MCP?

Stateless MCP removes protocol sessions, not application state, transport connections, streaming responses, tasks, or explicit handles.

## Stateless MCP in practice

Implement `server/discover`, rebuild request metadata on every call, validate transport headers against the JSON-RPC body, and pass server-minted application handles as ordinary tool arguments when continuity is required.

## Lessons

- [MCP Fundamentals: Stateless Requests and JSON-RPC](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F06-mcp-fundamentals) (Phase 13: Tools & Protocols)
- [Stateless MCP Gateways and Registry Admission](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F17-mcp-gateways-and-registries) (Phase 13: Tools & Protocols)
- [Capstone 13: Stateless MCP Server with Registry and Governance](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F13-mcp-server-with-registry) (Phase 19: Capstone Projects)
- [MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F16-mcp-security-oauth-2-1) (Phase 13: Tools & Protocols)
- [Capstone: Stateless Tool Ecosystem](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F23-capstone-tool-ecosystem) (Phase 13: Tools & Protocols)

## Related terms

- [MCP (Model Context Protocol)](https://aiengineeringfromscratch.com/glossary/mcp-model-context-protocol)
- [Multi Round-Trip Request (MRTR)](https://aiengineeringfromscratch.com/glossary/multi-round-trip-request-mrtr)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)
- [Idempotency](https://aiengineeringfromscratch.com/glossary/idempotency)

## Sources

- [MCP 2026-07-28 key changes](https://modelcontextprotocol.io/specification/2026-07-28/changelog)
- [MCP Streamable HTTP](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
