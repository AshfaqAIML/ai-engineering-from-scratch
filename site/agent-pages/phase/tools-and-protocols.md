# Learn Tool Calling and MCP: 45 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/tools-and-protocols

The interfaces between AI and the real world.

This phase moves from function calls and tool schemas into interoperable protocols, Agent Skills, security, and production governance. Numeric order is useful for browsing.

## Lessons in Phase 13: Tools & Protocols

01. [The Tool Interface — Why Agents Need Structured I/O](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F01-the-tool-interface): A language model produces tokens. A program takes actions. The gap between those two is the tool interface: a contract that lets the model request an action and the host execute it. (Learn, Python, ~45 min)
02. [Function Calling Deep Dive — OpenAI, Anthropic, Gemini](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F02-function-calling-deep-dive): The three frontier providers converged on the same tool-call loop in 2024 and then diverged on everything else. OpenAI uses tools and toolcalls. Anthropic uses tooluse and toolresult blocks. (Build, Python, ~75 min)
03. [Parallel Tool Calls and Streaming with Tools](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F03-parallel-and-streaming-tool-calls): Three independent weather lookups serialized is three round trips. Run them in parallel and total time collapses to the slowest single call. (Build, Python, ~75 min)
04. [Structured Output — JSON Schema, Pydantic, Zod, Constrained Decoding](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F04-structured-output): "Ask the model nicely to return JSON" fails 5 to 15 percent of the time, even on frontier models. Structured outputs close that gap with constrained decoding: the model is literally prevented from… (Build, Python, ~75 min)
05. [Tool Schema Design — Naming, Descriptions, Parameter Constraints](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F05-tool-schema-design): A correct tool fails silently when the model cannot tell when to use it. Naming, descriptions, and parameter shapes drive 10 to 20 percentage-point swings in tool-selection accuracy on benchmarks… (Learn, Python, ~45 min)
06. [MCP Fundamentals: Stateless Requests and JSON-RPC](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F06-mcp-fundamentals): Modern MCP has no handshake and no protocol session. Each request must carry enough metadata to be understood, authorized, routed, and retried on its own. (Learn, Python, ~55 min)
07. [Building an MCP Server: Stateless Python and TypeScript](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F07-building-an-mcp-server): A modern MCP server does not remember a handshake. It validates the metadata on every request, runs one handler, and returns one typed result. Implement mandatory server/discover for MCP 2026-07-28. (Build, Python, TypeScript, ~85 min)
08. [Building an MCP Client: Discovery, Routing, and Dual-Era Fallback](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F08-building-an-mcp-client): A modern MCP client repeats its contract on every request. Its hardest compatibility decision is knowing when an old server is truly old and when a modern server is reporting a correctable error. (Build, Python, ~85 min)
09. [MCP Transports: stdio and Stateless Streamable HTTP](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F09-mcp-transports): Transport carries MCP messages. It does not supply missing protocol state. In 2026-07-28, local stdio and remote Streamable HTTP both carry self-describing requests. (Learn, Python, ~65 min)
10. [MCP Resources and Prompts: Addressable Context for Stateless Servers](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F10-mcp-resources-and-prompts): Tools perform operations. Resources expose addressable content. Prompts package user-selected message templates. A good MCP server keeps those contracts separate and predictable. (Build, Python, ~60 min)
11. [MCP Model Input: Sampling Migration and Stateless MRTR](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F11-mcp-sampling): MCP 2026-07-28 deprecates Sampling for new designs and removes the server-to-client request channel. If an existing workflow still needs the client's model, the server returns an inputrequired… (Build, Python, ~75 min)
12. [Explicit Scope and Stateless Elicitation](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F12-mcp-roots-and-elicitation): Roots are deprecated in MCP 2026-07-28 and were never a security sandbox. Put scope in visible tool arguments or resource URIs, authorize it on the server, and use MRTR when a tool genuinely needs… (Build, Python, ~60 min)
13. [MCP Tasks Extension: Durable Work on a Stateless Core](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F13-mcp-async-tasks): Stateless MCP does not mean every operation must finish in one request. The official Tasks extension gives long-running work an explicit durable handle. (Build, Python, ~90 min)
14. [MCP Apps on the Stateless Protocol](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F14-mcp-apps): An interactive result is still an MCP tool and resource exchange. The 2026-07-28 core makes that exchange self-contained, while the Apps extension adds the sandboxed browser surface. (Build, Python, ~75 min)
15. [MCP Security: Poisoned Metadata, Routing, and MRTR State](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F15-mcp-security-tool-poisoning): Stateless does not mean trustless. It means every request exposes the evidence a server and gateway need to validate the call independently. (Learn, Python, ~60 min)
16. [MCP Authorization: CIMD, Issuer Binding, PKCE, and Step-Up](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F16-mcp-security-oauth-2-1): A remote MCP request is stateless, but its authorization is not anonymous. Bind every credential to the issuer that created it and every token to the resource that receives it. (Build, Python, ~90 min)
17. [Stateless MCP Gateways and Registry Admission](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F17-mcp-gateways-and-registries): A gateway should make every route explicit. The 2026-07-28 protocol gives it method, name, version, capability, identity, cache, and trace boundaries without a transport session. (Learn, Python, ~75 min)
18. [MCP Auth in Production: Issuer-Bound Enrollment and Tokens](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F18-mcp-auth-production): Lesson 16 built the OAuth 2.1 state machine. This lesson hardens its production boundaries for MCP 2026-07-28: Client ID Metadata Documents first, deprecated dynamic registration only for… (Build, Python, ~90 min)
19. [A2A — Agent-to-Agent Protocol](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F19-a2a-protocol): MCP is agent-to-tool. A2A (Agent2Agent) is agent-to-agent — an open protocol for letting opaque agents built on different frameworks collaborate. (Build, Python, ~75 min)
20. [OpenTelemetry GenAI — Tracing Tool Calls End-to-End](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F20-opentelemetry-genai): An agent calls five tools, three MCP servers, and two sub-agents. You need one trace across all of it. The OpenTelemetry GenAI semantic conventions (stable attributes in v1.37 and up) are the 2026… (Build, Python, ~75 min)
21. [LLM Routing Layer — LiteLLM, OpenRouter, Portkey](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F21-llm-routing-layer): Provider lock-in is expensive. Different tool-calling workloads suit different models. Routing gateways give one API surface, retries, failover, cost tracking, and guardrails. (Learn, Python, ~45 min)
22. [Agent Skills: Portable Contract and Runtime Boundary](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F22-skills-and-agent-sdks): A skill is not a long prompt with a better filename. It is a discoverable package of instructions, resources, and executable helpers that enters an agent's context through a runtime contract. (Build, Python, ~90 min)
23. [Capstone: Stateless Tool Ecosystem](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F23-capstone-tool-ecosystem): A production agent system is a set of boundaries, not a pile of features. This capstone separates a readable in-process simulation from the protocol clients, authorization server, sandbox, and… (Build, Python, ~120 min)
24. [Skill Discovery and Progressive Disclosure](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F24-skill-discovery-and-progressive-disclosure): A skill becomes useful before its body is loaded. Its name and description earn a place in the catalog; its deeper files earn context only when the task reaches them. (Build, Python, ~105 min)
25. [Skill Invocation and Routing](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F25-skill-invocation-and-routing): Invocation is an authority decision followed by a relevance decision. A good description helps the model choose; a good policy decides whether that choice is allowed. (Build, Python, ~105 min)
26. [Skill Permissions, Sandboxes, and Trust](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F26-skill-permissions-sandboxes-and-trust): A skill can suggest an action. Only the host can authorize it, only an isolation boundary can contain it, and only verification can tell you whether it worked. (Build, Python, ~120 min)
27. [Skill Evals, Packaging, and Portability](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F27-skill-evals-packaging-and-portability): A skill is finished when its package survives linting, routes on the right requests, improves a measured task, stays inside policy, and degrades honestly on another host. (Build, Python, ~150 min)
28. [MCP Tool Contracts and Content](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F28-mcp-tool-contracts-and-content): A tool is safe to automate only when discovery, arguments, results, pagination, and transport metadata agree on one contract. Define tool inputs and outputs with JSON Schema 2020-12. (Build, Python, ~120 min)
29. [MCP Reliability, Cancellation, and Flow Control](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F29-mcp-reliability-cancellation-and-flow-control): A request ID correlates a message. It does not make a side effect safe, stop a worker, or protect a stream from a slow consumer. (Build, Python, ~120 min)
30. [MCP Registry Supply Chain: Admission, Drift, and Rollback](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F30-mcp-registry-supply-chain-and-drift): A registry entry tells you what a publisher declared. Production admission proves what you fetched, what you observed, what you approved, and what you can safely restore. (Build, Python, ~90 min)
31. [MCP Conformance Engineering: Versioning, Evidence, and Operations](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F31-mcp-conformance-versioning-and-operations): A server is not conformant because its happy path worked through one SDK. Conformance lives at the wire, at version boundaries, through intermediaries, and during rollback. (Build, Python, ~100 min)
32. [Program Anatomy: An ELF Reader From Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F32-program-anatomy-elf-from-scratch): A compiled program is a set of tables that point at each other. A reader you wrote gives output you can check byte by byte. (Build, Python, ~120 min)
33. [Disassembly and Control Flow: From Bytes to a Graph You Can Check](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F33-disassembly-and-control-flow): A disassembly listing is a claim about which bytes are instructions, and this lesson builds the decoder and graph that check the claim. (Build, Python, ~150 min)
34. [Lifting to Pseudocode: IR, SSA, and Structuring From Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F34-lifting-to-pseudocode): Decompiler output is a claim with a hidden derivation. When you build the derivation yourself, every line of that output becomes a thing you can check. (Build, Python, ~150 min)
35. [Evidence, Confidence, and Unknowns in Binary Analysis](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F35-evidence-confidence-and-unknowns): A finding about a compiled program is a record with a hash, a confidence, an authority, and a list of what it cannot show. (Build, Python, ~105 min)
36. [Rebuild and Prove Equal: Differential Tests, Byte Comparison, and the Evidence Loop](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F36-rebuild-and-prove-equal): Passing your tests proves agreement on your tests, so equality needs a grid that reaches every edge and bytes that match after relocation masking. (Build, Python, ~110 min)
37. [The Reverse Engineering Landscape: History, Tool Families, and How a Decompiler Is Built](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F37-the-reverse-engineering-landscape): Five tools read the same object and give four addresses, three block counts, and two answers for one switch, and this lesson builds the harness that shows which is which. (Build, Python, ~150 min)
38. [Calling Conventions and Stack Frames: System V, Windows x64, and AArch64](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F38-calling-conventions-and-stack-frames): A disassembly shows which registers a function reads. Only the ABI says what those registers mean, and the ABI is chosen by the object header, so this lesson reads the header first and then checks… (Build, Python, ~140 min)
39. [Compiler Idioms: What Optimization Does to Your Code and How to Read It Back](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F39-compiler-idioms-and-optimization): An optimizing compiler replaces source constructs with cheaper instruction shapes. Each shape has a derivation, and this lesson builds the recognizer that runs the derivation backwards and checks it… (Build, Python, ~150 min)
40. [Linking, Loading, and Stripped Binaries: PLT, GOT, Imports, Fixups, and Function Identification](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F40-linking-loading-and-stripped-binaries): A linked program calls functions it does not contain. This lesson reads the tables the link editor wrote for those calls in three formats, follows one call to the slot the loader fills, and finds… (Build, Python, ~160 min)
41. [Recovering Data and Types: Structs, Arrays, C++ Objects, and DWARF](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F41-recovering-data-and-types): A decompiler prints a->balance when it has a type table and (int )(param1 + 4) when it does not. This lesson builds the table from the accesses, reads the real one from DWARF 5, and shows where the… (Build, Python, ~140 min)
42. [Dynamic Analysis of Your Own Program: Debuggers, Traces, and Confirming Static Claims](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F42-dynamic-analysis-of-your-own-program): A breakpoint hit is an observation about one run of one build. This lesson builds the harness that turns those observations into confirmed, refuted, and not-observed verdicts on the claims the… (Build, Python, ~130 min)
43. [Beyond Native Code: Python, JVM, .NET, and WebAssembly Bytecode](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F43-bytecode-and-managed-formats): A bytecode file is a program plus the compiler's notes about it, and this lesson builds the readers that show which notes each container keeps. (Build, Python, ~150 min)
44. [Binary Diffing and Symbolic Execution: Matching Functions and Solving for Inputs](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F44-binary-diffing-and-symbolic-execution): A match between two functions is a claim made by one signature with one quality, and a solved input is one model of one path condition; this lesson builds both and checks them against radiff2,… (Build, Python, ~150 min)
45. [AI-Assisted Reverse Engineering: LLM Decompilers, Analysis Agents, and Ground Truth](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F45-ai-assisted-reverse-engineering): A model's reconstruction is a claim with a report attached, and this lesson builds the harness that scores both against bytes, runs, and DWARF you own. (Build, Python, ~140 min)

## Start

Run this command from the repository root:

```bash
python3 phases/13-tools-and-protocols/01-the-tool-interface/code/main.py
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Agent Skill](https://aiengineeringfromscratch.com/glossary/agent-skill)
- [Circuit Breaker](https://aiengineeringfromscratch.com/glossary/circuit-breaker)
- [Coding Agent](https://aiengineeringfromscratch.com/glossary/coding-agent)
- [Decoder](https://aiengineeringfromscratch.com/glossary#decoder)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Feature](https://aiengineeringfromscratch.com/glossary/feature)
- [Function Calling](https://aiengineeringfromscratch.com/glossary/function-calling)
- [Guardrails](https://aiengineeringfromscratch.com/glossary/guardrails)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [MCP (Model Context Protocol)](https://aiengineeringfromscratch.com/glossary/mcp-model-context-protocol)
- [Multi Round-Trip Request (MRTR)](https://aiengineeringfromscratch.com/glossary/multi-round-trip-request-mrtr)
- [Orchestration](https://aiengineeringfromscratch.com/glossary/orchestration)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Progressive Disclosure](https://aiengineeringfromscratch.com/glossary/progressive-disclosure)
- [Rate Limit](https://aiengineeringfromscratch.com/glossary/rate-limit)
- [Repository Instructions](https://aiengineeringfromscratch.com/glossary/repository-instructions)
- [Rollback](https://aiengineeringfromscratch.com/glossary/rollback)
- [Sandbox](https://aiengineeringfromscratch.com/glossary/sandbox)
- [Skill Bundle](https://aiengineeringfromscratch.com/glossary/skill-bundle)
- [Skill Catalog](https://aiengineeringfromscratch.com/glossary/skill-catalog)
- [Skill Discovery](https://aiengineeringfromscratch.com/glossary/skill-discovery)
- [Skill Invocation](https://aiengineeringfromscratch.com/glossary/skill-invocation)
- [Stateless MCP](https://aiengineeringfromscratch.com/glossary/stateless-mcp)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Structured Output](https://aiengineeringfromscratch.com/glossary/structured-output)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)
- [Trace](https://aiengineeringfromscratch.com/glossary/trace)
- [Trust Boundary](https://aiengineeringfromscratch.com/glossary/trust-boundary)

## Frequently asked questions

### How many lessons are in Phase 13: Tools & Protocols?

Phase 13 has 45 lessons: 38 Build lessons and 7 Learn lessons. The lesson code uses Python and TypeScript.

### What should I know before I start Phase 13?

The phase guide gives these prerequisites: Phase 11 LLM completion APIs. In the course roadmap, this phase builds on Phase 11: LLM Engineering.

### Is Phase 13 free?

Yes. All 45 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 13 take?

The time estimates of all 45 lessons add up to about 76 hours.

### What comes after Phase 13?

Phase 14: Agent Engineering builds on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
