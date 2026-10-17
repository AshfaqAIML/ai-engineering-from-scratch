# Learn Multi-Agent Systems: 25 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/multi-agent-and-swarms

Coordination, emergence, and collective intelligence.

## Lessons in Phase 16: Multi-Agent & Swarms

01. [Why Multi-Agent?](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F01-why-multi-agent): One agent hits a wall. The smart move is not a bigger agent - it is more agents. Identify the single-agent ceiling (context overflow, mixed expertise, sequential bottleneck) and explain when… (Learn, TypeScript, ~60 min)
02. [Heritage of FIPA-ACL and Speech Acts](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F02-fipa-acl-heritage): Before MCP, before A2A, there was FIPA-ACL. In 2000 the IEEE Foundation for Intelligent Physical Agents ratified an agent communication language with twenty performatives, two content languages, and… (Learn, Python, ~60 min)
03. [Communication Protocols](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F03-communication-protocols): Agents that can't speak the same language aren't a team. They're strangers shouting into the void. Implement MCP tool discovery and invocation so agents can use tools exposed by external servers. (Build, TypeScript, ~120 min)
04. [The Multi-Agent Primitive Model](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F04-primitive-model): Four primitives, nothing more — the agent, the handoff, the shared state, the orchestrator — span a four-dimensional design space, and the major multi-agent frameworks shipping in 2026 (AutoGen,… (Learn, Python, ~60 min)
05. [Supervisor / Orchestrator-Worker Pattern](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F05-supervisor-orchestrator-pattern): One lead agent plans and delegates; specialized workers execute in parallel contexts and report back. This is the pattern behind Anthropic's Research system (Claude Opus 4 as lead, Sonnet 4 as… (Build, Python, ~75 min)
06. [Hierarchical Architecture and Its Failure Mode](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F06-hierarchical-architecture): Hierarchical is supervisor nested. Manager agents over sub-managers over workers. CrewAI Process.hierarchical is the textbook version: a managerllm dynamically delegates tasks and validates outputs. (Learn, Python, ~60 min)
07. [Society of Mind and Multi-Agent Debate](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F07-society-of-mind-debate): Minsky's 1986 premise — intelligence is a society of specialists — gets rediscovered every decade. In 2023 Du et al. turned it into a concrete algorithm: multiple LLM instances propose answers, read… (Build, Python, ~60 min)
08. [Role Specialization — Planner, Critic, Executor, Verifier](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F08-role-specialization): The most common multi-agent decomposition in 2026: one agent plans, one executes, one critiques or verifies. MetaGPT (arXiv:2308.00352) formalizes this as SOPs encoded into role prompts — Product… (Build, Python, ~60 min)
09. [Parallel / Swarm / Networked Architectures](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F09-parallel-swarm-networks): Contrast with supervisor: no central decider. Agents read a shared event bus, pick up work asynchronously, write results back. (Build, Python, ~75 min)
10. [Group Chat and Speaker Selection](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F10-group-chat-speaker-selection): Shared-conversation orchestration puts N agents in one conversation; a selector function (LLM, round-robin, or custom) picks who speaks next. (Build, Python, ~60 min)
11. [Handoffs and Routines — Stateless Orchestration](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F11-handoffs-and-routines): OpenAI's Swarm (October 2024) distilled multi-agent orchestration to two primitives: routines (instructions + tools as a system prompt) and handoffs (a tool that returns another Agent). (Build, Python, ~60 min)
12. [A2A — The Agent-to-Agent Protocol](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F12-a2a-protocol): Google announced A2A in April 2025; by April 2026 the spec is at https://a2a-protocol.org/latest/specification/ and 150+ organizations back it. (Build, Python, ~75 min)
13. [Shared Memory and Blackboard Patterns](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F13-shared-memory-blackboard): Two approaches coexist in 2026 multi-agent systems: the message pool (everyone sees everyone's messages, as in AutoGen GroupChat or MetaGPT) and the blackboard with subscription (agents subscribe to… (Build, Python, ~75 min)
14. [Consensus and Byzantine Fault Tolerance for Agents](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F14-consensus-and-bft): Classical distributed-systems BFT meets stochastic LLMs. In 2025-2026 three research directions emerged: CP-WBFT (arXiv:2511.10400) weighs each vote by a confidence probe; DecentLLMs… (Build, Python, ~75 min)
15. [Voting, Self-Consistency, and Debate Topology](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F15-voting-debate-topology): The cheapest aggregation: sample N independent agents, majority-vote. Wang et al. 2022 self-consistency did this with one model sampled N times. (Build, Python, ~75 min)
16. [Negotiation and Bargaining](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F16-negotiation-bargaining): Agents negotiate resources, prices, task allocations, and terms. The 2026 benchmark set is clear: NegotiationArena (arXiv:2402.05863) shows LLMs can improve payoffs 20% via persona manipulation… (Build, Python, ~75 min)
17. [Generative Agents and Emergent Simulation](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F17-generative-agents-simulation): Park et al. 2023 (UIST '23, arXiv:2304.03442) populated Smallville, a sandbox of 25 agents, with a three-part architecture: memory stream (natural-language log), reflection (higher-level syntheses… (Build, Python, ~75 min)
18. [Theory of Mind and Emergent Coordination](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F18-theory-of-mind-coordination): Li et al. (arXiv:2310.10701) showed that LLM agents in a cooperative text game exhibit emergent high-order Theory of Mind (ToM) — reasoning about what another agent believes about a third agent's… (Build, Python, ~75 min)
19. [Swarm Optimization for LLMs (PSO, ACO)](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F19-swarm-optimization-pso-aco): Bio-inspired optimization is making an LLM comeback. LMPSO (arXiv:2504.09247) uses PSO where each particle's velocity is a prompt and the LLM generates the next candidate; works well on… (Build, Python, ~75 min)
20. [MARL — MADDPG, QMIX, MAPPO](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F20-marl-maddpg-qmix-mappo): The reinforcement-learning heritage of multi-agent coordination, which still informs LLM-agent systems in 2026. MADDPG (Lowe et al., NeurIPS 2017, arXiv:1706.02275) introduced Centralized Training,… (Learn, Python, ~90 min)
21. [Agent Economies, Token Incentives, Reputation](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F21-agent-economies): Long-horizon autonomous agents (METR's 1-hour to 8-hour work-curve) need economic agency. The emerging 5-layer stack is: DePIN (physical compute) → Identity (W3C DIDs + reputation capital) →… (Learn, Python, ~75 min)
22. [Production Scaling — Queues, Checkpoints, Durability](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F22-production-scaling-queues-checkpoints): Scaling multi-agent systems to thousands of concurrent runs requires durable execution — work queues plus checkpoints, so any worker can resume any run after any crash, provided lease handling,… (Build, Python, ~75 min)
23. [Failure Modes — MAST, Groupthink, Monoculture, Cascading Errors](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F23-failure-modes-mast-groupthink): The reference taxonomy for 2026 is MAST (Cemri et al., NeurIPS 2025, arXiv:2503.13657), derived from 1642 execution traces across 7 state-of-the-art open-source MAS showing 41–86.7% failure rate. (Learn, Python, ~75 min)
24. [Evaluation and Coordination Benchmarks](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F24-evaluation-coordination-benchmarks): Five 2025-2026 benchmarks cover the multi-agent evaluation space. MultiAgentBench / MARBLE (ACL 2025, arXiv:2503.01935) evaluates star/chain/tree/graph topologies with milestone KPIs; graph is best… (Learn, Python, ~75 min)
25. [Case Studies and the 2026 State of the Art](https://aiengineeringfromscratch.com/lesson?path=phases%2F16-multi-agent-and-swarms%2F25-case-studies-2026-sota): Three production-grade references to study end-to-end, each illustrating a different slice of multi-agent engineering. Anthropic's Research system (orchestrator-worker, 15x tokens, +90.2% over… (Learn, Python, ~90 min)

## Start

Run this command from the repository root:

```bash
npx --yes tsx phases/16-multi-agent-and-swarms/01-why-multi-agent/code/single_vs_multi.ts
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Handoff](https://aiengineeringfromscratch.com/glossary/handoff)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [MCP (Model Context Protocol)](https://aiengineeringfromscratch.com/glossary/mcp-model-context-protocol)
- [Orchestration](https://aiengineeringfromscratch.com/glossary/orchestration)
- [Swarm](https://aiengineeringfromscratch.com/glossary/swarm)
- [Token](https://aiengineeringfromscratch.com/glossary/token)

## Frequently asked questions

### How many lessons are in Phase 16: Multi-Agent & Swarms?

Phase 16 has 25 lessons: 16 Build lessons and 9 Learn lessons. The lesson code uses Python and TypeScript.

### What should I know before I start Phase 16?

The phase guide gives these prerequisites: Phase 14 Agent Engineering. Node.js 20+ and npx are needed for the first TypeScript demo. In the course roadmap, this phase builds on Phase 15: Autonomous Systems.

### Is Phase 16 free?

Yes. All 25 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 16 take?

The time estimates of all 25 lessons add up to about 31 hours.

### What comes after Phase 16?

Phase 19: Capstone Projects builds on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
