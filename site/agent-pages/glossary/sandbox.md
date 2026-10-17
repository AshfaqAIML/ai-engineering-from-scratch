# What is Sandbox?

Canonical page: https://aiengineeringfromscratch.com/glossary/sandbox
Category: Agents & tools

An isolated execution environment that restricts an agent's access to files, processes, network destinations, credentials, and host resources.

## Why does Sandbox matter?

Generated code and tool calls can be wrong or malicious. Isolation limits their reach and makes disposable verification practical.

## What is the common confusion about Sandbox?

A sandbox reduces impact. It does not establish that the code inside is correct or harmless.

## Sandbox in practice

Run tests in an ephemeral container with a read-only base, a scoped writable workspace, no production secrets, and an explicit network allowlist.

## Lessons

- [Production Runtimes: Queue, Event, Cron](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F29-production-runtimes) (Phase 14: Agent Engineering)
- [Skill Permissions, Sandboxes, and Trust](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F26-skill-permissions-sandboxes-and-trust) (Phase 13: Tools & Protocols)
- [Capstone Lesson 26: Sandbox Runner with Denylist and Path Jail](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F26-sandbox-runner-denylist) (Phase 19: Capstone Projects)
- [MCP Apps on the Stateless Protocol](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F14-mcp-apps) (Phase 13: Tools & Protocols)

## Related terms

- [Least Privilege](https://aiengineeringfromscratch.com/glossary/least-privilege)
- [Approval Gate](https://aiengineeringfromscratch.com/glossary/approval-gate)
- [Coding Agent](https://aiengineeringfromscratch.com/glossary/coding-agent)
- [Guardrails](https://aiengineeringfromscratch.com/glossary/guardrails)
- [Agent Harness](https://aiengineeringfromscratch.com/glossary/agent-harness)
- [Defense in Depth](https://aiengineeringfromscratch.com/glossary/defense-in-depth)
- [Prompt Injection](https://aiengineeringfromscratch.com/glossary/prompt-injection)
- [Skill Invocation](https://aiengineeringfromscratch.com/glossary/skill-invocation)
- [Threat Model](https://aiengineeringfromscratch.com/glossary/threat-model)
- [Trust Boundary](https://aiengineeringfromscratch.com/glossary/trust-boundary)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
