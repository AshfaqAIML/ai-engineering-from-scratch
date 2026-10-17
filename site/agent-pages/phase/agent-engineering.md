# Build AI Agents from Scratch: 54 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/agent-engineering

The core of modern AI engineering. Build agents from first principles.

## Lessons in Phase 14: Agent Engineering

01. [The Agent Loop: Observe, Think, Act](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F01-the-agent-loop): Every agent in 2026 is a variant of the ReAct loop from 2022 — Claude Code, Cursor, Devin, Operator included. Reasoning tokens interleave with tool calls and observations until a stop condition fires. (Build, Python, ~60 min)
02. [ReWOO and Plan-and-Execute: Decoupled Planning](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F02-rewoo-plan-and-execute): ReAct interleaves thought and action in one stream. ReWOO separates them: one big plan up front, then execute. 5x fewer tokens, +4% accuracy on HotpotQA, and you can distill the planner into a 7B… (Build, Python, ~60 min)
03. [Reflexion: Verbal Reinforcement Learning](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F03-reflexion-verbal-rl): Gradient-based RL needs thousands of trials and a GPU cluster to fix a failure mode. Reflexion (Shinn et al., NeurIPS 2023) does it in natural language: after each failed trial, the agent writes a… (Build, Python, ~60 min)
04. [Tree of Thoughts and LATS: Deliberate Search](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F04-tree-of-thoughts-lats): A single chain-of-thought trajectory has no room to backtrack. ToT (Yao et al., 2023) turns reasoning into a tree with self-evaluation on each node. (Build, Python, ~75 min)
05. [Self-Refine and CRITIC: Iterative Output Improvement](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F05-self-refine-and-critic): Self-Refine (Madaan et al., 2023) uses one LLM in three roles — generate, feedback, refine — in a loop. Average gain: +20 absolute on 7 tasks. (Build, Python, ~60 min)
06. [Tool Use and Function Calling](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F06-tool-use-and-function-calling): Toolformer (Schick et al., 2023) started self-supervised tool annotation. Berkeley Function Calling Leaderboard V4 (Patil et al., 2025) sets the 2026 bar: 40% agentic, 30% multi-turn, 10% live, 10%… (Build, Python, ~60 min)
07. [Agent Memory — Virtual Context and Memory Paging](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F07-memory-virtual-context-memgpt): Context windows are finite. Conversations, documents, and tool traces are not. The fix is OS virtual memory restated — main context is RAM, external store is disk, the agent pages between them. (Build, Python, ~75 min)
08. [Memory Blocks and Sleep-Time Compute](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F08-memory-blocks-sleep-time-compute): Discrete functional memory blocks the model can edit directly, and a sleep-time agent that consolidates memory asynchronously while the primary agent is idle. (Build, Python, ~75 min)
09. [Hybrid Memory: Vector + Graph + KV](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F09-hybrid-memory-mem0): Hybrid memory runs three stores in parallel — vector for semantic similarity, KV for fast fact lookup, graph for entity-relationship reasoning — with a scoring layer that fuses them on retrieval. (Build, Python, ~75 min)
10. [Skill Libraries and Lifelong Learning (Voyager)](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F10-skill-libraries-voyager): Voyager (Wang et al., TMLR 2024) treats executable code as a skill. Skills are named, retrievable, composable, and refined by environment feedback. (Build, Python, ~75 min)
11. [Planning with HTN and Evolutionary Search](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F11-planning-htn-and-evolutionary): Symbolic planning handles the cases where the plan is provably correct. Evolutionary code search handles the cases where the fitness function is machine-checkable. (Build, Python, ~75 min)
12. [Anthropic's Workflow Patterns: Simple Over Complex](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F12-anthropic-workflow-patterns): Schluntz and Zhang (Anthropic, Dec 2024) distinguish workflows (predefined paths) from agents (dynamic tool-use). Five workflow patterns cover most cases. Start with direct API calls. (Build, Python, ~60 min)
13. [Stateful Graph Orchestration — Durable Execution and Checkpoints](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F13-langgraph-stateful-graphs): Agent is a state machine; nodes are functions; edges are transitions; state is checkpointed after each node. Resume from any failure at the last successful checkpoint. (Build, Python, ~75 min)
14. [The Actor Model for Agents — Async Messages and Typed Runtimes](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F14-autogen-actor-model): Agents as actors: async message exchange, event-driven handlers, fault isolation, natural concurrency. AutoGen v0.4 (Microsoft Research, Jan 2025) redesigned agent orchestration around this model;… (Build, Python, ~75 min)
15. [Role-Based Agent Teams — Roles, Tasks, Processes](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F15-crewai-role-based-crews): Four primitives: Agent, Task, Crew, Process. Two top-level shapes: Crews (autonomous, role-based collaboration) and Flows (event-driven, deterministic). (Build, Python, ~75 min)
16. [OpenAI Agents SDK: Handoffs, Guardrails, Tracing](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F16-openai-agents-sdk): OpenAI Agents SDK is the lightweight multi-agent framework built on the Responses API. Five primitives: Agent, Handoff, Guardrail, Session, Tracing. Handoffs are tools named transferto . (Build, Python, ~75 min)
17. [The Harness as a Library — Subagents and Session Store](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F17-claude-agent-sdk): A harness you can import: built-in tools, subagents for context isolation, hooks, W3C trace propagation, session persistence. (Build, Python, ~75 min)
18. [Production Agent Runtimes — Fast Instantiation and Typed Workflows](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F18-agno-and-mastra-runtimes): A production agent runtime optimizes what prototyping frameworks ignore: instantiation cost, typed workflow surfaces, and a serving-ready backend. (Learn, Python, ~45 min)
19. [Benchmarks: SWE-bench, GAIA, AgentBench](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F19-benchmarks-swebench-gaia): Three benchmarks anchor agent evaluation in 2026. SWE-bench tests code patching. GAIA tests generalist tool use. AgentBench tests multi-environment reasoning. (Learn, Python, ~60 min)
20. [Benchmarks: WebArena and OSWorld](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F20-benchmarks-webarena-osworld): WebArena tests web-agent capability across four self-hosted apps. OSWorld tests desktop-agent capability across Ubuntu, Windows, macOS. (Learn, Python, ~60 min)
21. [Computer Use: Claude, OpenAI CUA, Gemini](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F21-computer-use-agents): Three production computer-use models in 2026. All three are vision-based. All three treat screenshots, DOM text, and tool outputs as untrusted input. Only direct user instructions count as permission. (Build, Python, ~60 min)
22. [Voice Agents: Pipecat and LiveKit](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F22-voice-agents-pipecat-livekit): Voice agents are a first-class production category in 2026. Pipecat gives you a Python frame-based pipeline (VAD → STT → LLM → TTS → transport). LiveKit Agents bridges AI models to users over WebRTC. (Build, Python, ~60 min)
23. [OpenTelemetry GenAI Semantic Conventions](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F23-otel-genai-conventions): OpenTelemetry's GenAI SIG (launched April 2024) defines the standard schema for agent telemetry. Span names, attributes, and content-capture rules converge across vendors so agent traces mean the… (Build, Python, ~60 min)
24. [Agent Observability: Langfuse, Phoenix, Opik](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F24-agent-observability-platforms): Three open-source agent observability platforms dominate 2026. Langfuse (MIT) — 6M+ installs/month, tracing + prompt management + evals + session replay. (Learn, Python, ~45 min)
25. [Multi-Agent Debate and Collaboration](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F25-multi-agent-debate): Du et al. (ICML 2024, "Society of Minds") run N model instances that independently propose answers, then iteratively critique each other over R rounds to converge. (Build, Python, ~60 min)
26. [Failure Modes: Why Agents Break](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F26-failure-modes-agentic): MASFT (Berkeley, 2025) catalogs 14 multi-agent failure modes in 3 categories. Microsoft's Taxonomy documents how existing AI failures amplify in agentic settings. (Build, Python, ~60 min)
27. [Prompt Injection and the PVE Defense](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F27-prompt-injection-defense): Greshake et al. (AISec 2023) established indirect prompt injection as the defining agent security problem. Attacker plants instructions in data the agent retrieves; on ingest, those instructions… (Build, Python, ~75 min)
28. [Orchestration Patterns: Supervisor, Swarm, Hierarchical](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F28-orchestration-patterns): Four orchestration patterns recur across 2026 frameworks: supervisor-worker, swarm / peer-to-peer, hierarchical, debate. (Build, Python, ~60 min)
29. [Production Runtimes: Queue, Event, Cron](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F29-production-runtimes): Production agents run on six runtime shapes: request-response, streaming, durable execution, queue-based background, event-driven, and scheduled. Pick the shape before you pick the framework. (Learn, Python, ~60 min)
30. [Eval-Driven Agent Development](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F30-eval-driven-agent-development): Anthropic's guidance: "start with simple prompts, optimize them with comprehensive evaluation, and add multi-step agentic systems only when needed." Evaluation is not the last step. (Build, Python, ~60 min)
31. [Agent Workbench Engineering: Why Capable Models Still Fail](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F31-agent-workbench-why-models-fail): A capable model is not enough. Reliable agents need a workbench: instructions, state, scope, feedback, verification, review, and handoff. (Learn, Python, ~45 min)
32. [The Minimal Agent Workbench](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F32-minimal-agent-workbench): The smallest useful workbench is three files: a root instructions router, a state file, and a task board. Everything else is layered on top. If a repo cannot carry these three, no model will save it. (Build, Python, ~45 min)
33. [Agent Instructions as Executable Constraints](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F33-instructions-as-executable-constraints): Instructions written as prose are wishes. Instructions written as constraints are tests. The workbench turns each rule into something an agent can check at runtime and a reviewer can verify after… (Build, Python, ~50 min)
34. [Repo Memory and Durable State](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F34-repo-memory-and-state): Chat history is volatile. The repo is durable. The workbench stores agent state in versioned files so the next session, the next agent, and the next reviewer all read from the same source of truth. (Build, Python, ~60 min)
35. [Initialization Scripts for Agents](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F35-initialization-scripts): Every session that starts cold pays a tax. The agent reads the same files, retries the same probes, and rediscovers the same paths. An init script pays the tax once and writes the answers into state. (Build, Python, ~45 min)
36. [Scope Contracts and Task Boundaries](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F36-scope-contracts): The model does not know where the work ends. A scope contract is a per-task file that says where the work begins, where it ends, and how to roll back if it spills. (Build, Python, ~50 min)
37. [Runtime Feedback Loops](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F37-runtime-feedback-loops): Agents that do not see real command output guess. A feedback runner captures stdout, stderr, exit code, and timing into a structured record the next turn can read. (Build, Python, ~50 min)
38. [Verification Gates](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F38-verification-gates): The agent does not get to mark its own work as done. A verification gate reads the scope contract, the feedback log, the rule report, and the diff, and answers a single question: is this task… (Build, Python, ~55 min)
39. [Reviewer Agent: Separate Builder from Marker](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F39-reviewer-agent): The agent that wrote the code cannot grade it. A reviewer is a second loop with a different system prompt, a different goal, and read-only access to everything the builder produced. (Build, Python, ~55 min)
40. [Multi-Session Handoff](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F40-multi-session-handoff): The session is going to end. The work is not. The handoff packet is the artifact that turns "the agent worked for an hour" into "the next session is productive in the first minute." Build it on… (Build, Python, ~50 min)
41. [The Workbench on a Real Repo](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F41-workbench-for-real-repos): Eleven lessons of surfaces are worth nothing if they do not survive contact with a real codebase. This lesson runs the same task twice on a small sample app: prompt-only versus workbench-guided. (Build, Python, ~60 min)
42. [Capstone: Ship a Reusable Agent Workbench Pack](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F42-agent-workbench-capstone): The mini-track ends with a pack you drop into any repo. Eleven lessons of surfaces compressed into a directory you can cp -r and have an agent working reliably the next morning. (Build, Python, ~75 min)
43. [Frame the Task Before the Agent Writes Code](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F43-frame-the-task-before-code): A coding agent can implement a clear task quickly. It can also implement an unclear task quickly. The speed is the same. The cost is not. Turn a request into a bounded task frame before editing. (Build, Python, ~60 min)
44. [Build an Evidence-Backed Execution Plan](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F44-plan-from-evidence): A plan is not a prettier to-do list. It is a dependency graph in which every change has a reason and every terminal node has proof. Convert a task frame into work items with evidence and proof. (Build, Python, ~65 min)
45. [Delegate Agent Work with Isolation and Merge Contracts](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F45-delegate-with-isolation): Parallel agents save wall time only when the work is independent. Otherwise they convert one clear task into a coordination problem with a faster failure rate. (Build, Python, ~70 min)
46. [Turn Every Agent Correction into a System Improvement](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F46-turn-feedback-into-system): A correction that lives only in chat fixes one run. A correction promoted into a test, boundary, example, or tool improves every later run. Convert agent corrections into durable controls. (Build, Python, ~65 min)
47. [Define the Outcome Before You Choose the Output](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F47-outcomes-before-output): Fast implementation increases the penalty for choosing the wrong problem. Shape the outcome first so speed points in the right direction. Write an outcome frame without naming a solution. (Build, Python, ~60 min)
48. [Discover the Workflow People Actually Perform](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F48-discover-the-real-workflow): Requirements are not waiting in a meeting to be collected. They are scattered across actions, workarounds, records, and disagreements. Model the current workflow as ordered actions with evidence. (Build, Python, ~70 min)
49. [Map Assumptions and Resolve the Riskiest One First](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F49-map-assumptions-and-risk): A roadmap hides uncertainty inside features. An assumption map exposes what must be true before those features deserve to exist. Convert proposed work into explicit assumptions. (Build, Python, ~65 min)
50. [Choose the Smallest Slice That Can Change the Decision](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F50-choose-the-smallest-testable-slice): Small is useful only when it proves something important. A tiny build that cannot change the next decision is merely incomplete. Define a slice by the assumptions it proves. (Build, Python, ~65 min)
51. [Write Specifications That Preserve Judgment](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F51-write-specifications-that-preserve-judgment): A useful specification fixes invariants and evidence while leaving reversible implementation choices open. It is a decision boundary, not a screenplay. (Build, Python, ~75 min)
52. [Design Success Metrics Before the Result Exists](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F52-design-success-metrics): Measurement should answer a decision, not decorate a dashboard. Start with the goal, derive questions, then choose the smallest metrics that answer them. (Build, Python, ~70 min)
53. [Choose Prototype, Pilot, or Production Deliberately](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F53-prototype-pilot-or-production): These are different learning environments, not levels of polish. Choose the stage that answers the current unknown with the least unnecessary consequence. (Build, Python, ~70 min)
54. [Build a Feedback Ratchet with Ownership and Retirement](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F54-build-the-feedback-ratchet): Shipping closes one build loop and opens the learning loop. Evidence must change the system or it becomes telemetry nobody owns. (Build, Python, ~75 min)

## Start

Run this command from the repository root:

```bash
python3 phases/14-agent-engineering/01-the-agent-loop/code/main.py
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Agent Harness](https://aiengineeringfromscratch.com/glossary/agent-harness)
- [Agent Memory](https://aiengineeringfromscratch.com/glossary/agent-memory)
- [Agent State](https://aiengineeringfromscratch.com/glossary/agent-state)
- [Approval Gate](https://aiengineeringfromscratch.com/glossary/approval-gate)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Feature](https://aiengineeringfromscratch.com/glossary/feature)
- [Function Calling](https://aiengineeringfromscratch.com/glossary/function-calling)
- [Guardrails](https://aiengineeringfromscratch.com/glossary/guardrails)
- [Hallucination](https://aiengineeringfromscratch.com/glossary/hallucination)
- [Handoff](https://aiengineeringfromscratch.com/glossary/handoff)
- [Human-in-the-Loop (HITL)](https://aiengineeringfromscratch.com/glossary/human-in-the-loop-hitl)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [LLM-as-a-Judge](https://aiengineeringfromscratch.com/glossary/llm-as-a-judge)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Orchestration](https://aiengineeringfromscratch.com/glossary/orchestration)
- [Patch](https://aiengineeringfromscratch.com/glossary/patch)
- [Planning](https://aiengineeringfromscratch.com/glossary/planning)
- [Progressive Disclosure](https://aiengineeringfromscratch.com/glossary/progressive-disclosure)
- [Prompt Engineering](https://aiengineeringfromscratch.com/glossary#prompt-engineering)
- [Prompt Injection](https://aiengineeringfromscratch.com/glossary/prompt-injection)
- [ReAct](https://aiengineeringfromscratch.com/glossary/react)
- [Regression Test](https://aiengineeringfromscratch.com/glossary/regression-test)
- [Repository Map](https://aiengineeringfromscratch.com/glossary/repository-map)
- [Reviewer Agent](https://aiengineeringfromscratch.com/glossary/reviewer-agent)
- [Rollback](https://aiengineeringfromscratch.com/glossary/rollback)
- [Sandbox](https://aiengineeringfromscratch.com/glossary/sandbox)
- [Scope Contract](https://aiengineeringfromscratch.com/glossary/scope-contract)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Swarm](https://aiengineeringfromscratch.com/glossary/swarm)
- [System Prompt](https://aiengineeringfromscratch.com/glossary/system-prompt)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Tool Contract](https://aiengineeringfromscratch.com/glossary/tool-contract)
- [Trace](https://aiengineeringfromscratch.com/glossary/trace)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Worktree](https://aiengineeringfromscratch.com/glossary/worktree)

## Frequently asked questions

### How many lessons are in Phase 14: Agent Engineering?

Phase 14 has 54 lessons: 48 Build lessons and 6 Learn lessons. The lesson code uses Python.

### What should I know before I start Phase 14?

The phase guide gives these prerequisites: Phase 11 LLM Engineering and Phase 13 Tools and Protocols. In the course roadmap, this phase builds on Phase 13: Tools & Protocols.

### Is Phase 14 free?

Yes. All 54 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 14 take?

The time estimates of all 54 lessons add up to about 57 hours.

### What comes after Phase 14?

Phase 15: Autonomous Systems and Phase 17: Infrastructure & Production build on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
