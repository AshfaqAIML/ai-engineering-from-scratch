# Learn Autonomous AI Systems: 22 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/autonomous-systems

Agents that run without human intervention, safely.

## Lessons in Phase 15: Autonomous Systems

01. [The Shift from Chatbots to Long-Horizon Agents](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F01-long-horizon-agents): In 2023 a chatbot answered a question in one turn. In 2026 a frontier model routinely runs minutes to hours on a single task. (Learn, Python, ~45 min)
02. [STaR, V-STaR, Quiet-STaR — Self-Taught Reasoning](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F02-star-family-reasoning): The smallest possible self-improvement loop sits inside the rationale. A model generates a chain of thought, keeps the ones that land on correct answers, and fine-tunes on those. That is STaR. (Learn, Python, ~60 min)
03. [AlphaEvolve — Evolutionary Coding Agents](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F03-alphaevolve-evolutionary-coding): Pair a frontier coding model with an evolutionary loop and a machine-checkable evaluator. Let the loop run long enough. It discovers a 4x4 complex-matrix multiplication procedure that uses 48 scalar… (Learn, Python, ~60 min)
04. [Darwin Godel Machine — Open-Ended Self-Modifying Agents](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F04-darwin-godel-machine): Schmidhuber's 2003 Godel Machine required a formal proof that any self-modification was beneficial before accepting it. That proof is impossible in practice. (Learn, Python, ~60 min)
05. [AI Scientist v2 — Workshop-Level Autonomous Research](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F05-ai-scientist-v2): Sakana's AI Scientist v2 (Yamada et al., arXiv:2504.08066) runs the full research loop: hypothesis, code, experiments, figures, writeup, submission. (Learn, Python, ~60 min)
06. [Automated Alignment Research (Anthropic AAR)](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F06-automated-alignment-research): Anthropic ran parallel teams of Claude Opus 4.6 Autonomous Alignment Researchers in independent sandboxes, coordinating via a shared forum whose logs live outside any sandbox (so agents cannot… (Learn, Python, ~60 min)
07. [Recursive Self-Improvement — Capability vs Alignment](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F07-recursive-self-improvement): Recursive self-improvement (RSI) is no longer speculation. The ICLR 2026 RSI Workshop in Rio (April 23-27) framed it as an engineering problem with concrete tooling. (Learn, Python, ~60 min)
08. [Bounded Self-Improvement Designs](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F08-bounded-self-improvement): Research has converged on four primitives for bounding a self-improvement loop. Formal invariants that must hold across every edit. Alignment anchors that cannot be modified. (Learn, Python, ~60 min)
09. [The Autonomous Coding Agent Landscape (2026)](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F09-coding-agent-landscape): SWE-bench Verified went from 4% to 80.9% in under three years. Same Claude Sonnet 4.5 scored 43.2% on SWE-agent v1 and 59.8% on Cline autonomous — the scaffolding around the model now matters as… (Learn, Python, ~45 min)
10. [Permission Modes for Autonomous Agents](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F10-claude-code-permission-modes): A permission ladder — graduated levels of autonomy from review-every-action to approve-everything — is how a harness governs what an autonomous agent may do without asking. (Learn, Python, ~45 min)
11. [Browser Agents and Long-Horizon Web Tasks](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F11-browser-agents): ChatGPT agent (July 2025) merged Operator and deep research into one browser/terminal agent and set BrowseComp SOTA at 68.9%. (Learn, Python, ~45 min)
12. [Long-Running Background Agents: Durable Execution](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F12-durable-execution): Production long-horizon agents do not run in while True. Every LLM call becomes an activity with checkpoint, retry, and replay. Temporal's OpenAI Agents SDK integration went GA March 2026. (Learn, Python, ~60 min)
13. [Action Budgets, Iteration Caps, and Cost Governors](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F13-cost-governors): A mid-sized e-commerce agent's monthly LLM cost jumped from $1,200 to $4,800 after its team enabled the "order-tracking" skill. That is not a pricing bug. (Learn, Python, ~60 min)
14. [Kill Switches, Circuit Breakers, and Canary Tokens](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F14-kill-switches-canaries): A kill switch is a boolean held outside the agent's edit surface — a Redis key, a feature flag, a signed config — that disables the agent entirely. (Learn, Python, ~60 min)
15. [Human-in-the-Loop: Propose-Then-Commit](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F15-propose-then-commit): The 2026 consensus on HITL is specific. It is not "the agent asks, the user clicks Approve." It is propose-then-commit: the proposed action is persisted to a durable store with an idempotency key;… (Learn, Python, ~60 min)
16. [Checkpoints and Rollback](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F16-checkpoints-rollback): Every graph-state transition persists. When a worker crashes, its lease expires and another worker picks up at the latest checkpoint. Cloudflare Durable Objects hold state across hours or weeks. (Learn, Python, ~60 min)
17. [Constitutional AI and Rule Overrides](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F17-constitutional-ai): Anthropic's January 22, 2026 Claude Constitution runs 79 pages and is CC0. It moves from rule-based to reason-based alignment and establishes a four-tier priority hierarchy: (1) safety and… (Learn, Python, ~60 min)
18. [Llama Guard and Input/Output Classification](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F18-llama-guard): Llama Guard 3 (Meta, Llama-3.1-8B base, fine-tuned for content safety) classifies both LLM inputs and outputs against an MLCommons 13-hazard taxonomy across 8 languages. (Learn, Python, ~45 min)
19. [Anthropic Responsible Scaling Policy v3.0](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F19-anthropic-rsp): RSP v3.0 went into effect February 24, 2026, replacing the 2023 policy. Two-tier mitigation: what Anthropic will do unilaterally vs what is framed as an industry-wide recommendation (including RAND… (Learn, Python, ~45 min)
20. [OpenAI Preparedness Framework and DeepMind Frontier Safety Framework](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F20-openai-preparedness-deepmind-fsf): OpenAI Preparedness Framework v2 (April 2025) introduces Research Categories — Long-range Autonomy, Sandbagging, Autonomous Replication and Adaptation, Undermining Safeguards — distinct from Tracked… (Learn, Python, ~45 min)
21. [METR Time Horizons and External Capability Evaluation](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F21-metr-external-evaluation): METR (ex-ARC Evals) is an independent 501(c)(3) since December 2023. Their Time Horizon 1.1 benchmark (January 2026) fits a logistic curve to task-success probability vs log(expert human completion… (Learn, Python, ~60 min)
22. [CAIS, CAISI, and Societal-Scale Risk](https://aiengineeringfromscratch.com/lesson?path=phases%2F15-autonomous-systems%2F22-cais-caisi-societal-risk): The Center for AI Safety (CAIS, San Francisco, founded 2022 by Hendrycks and Zhang) publishes the four-risk framework — malicious use, AI races, organizational risks, rogue AIs — and the May 2023… (Learn, Python, ~45 min)

## Start

Run this command from the repository root:

```bash
python3 phases/15-autonomous-systems/01-long-horizon-agents/code/main.py
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Alignment](https://aiengineeringfromscratch.com/glossary/alignment)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Circuit Breaker](https://aiengineeringfromscratch.com/glossary/circuit-breaker)
- [Coding Agent](https://aiengineeringfromscratch.com/glossary/coding-agent)
- [DPO (Direct Preference Optimization)](https://aiengineeringfromscratch.com/glossary/dpo-direct-preference-optimization)
- [Durable Execution](https://aiengineeringfromscratch.com/glossary/durable-execution)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Guardrails](https://aiengineeringfromscratch.com/glossary/guardrails)
- [Human-in-the-Loop (HITL)](https://aiengineeringfromscratch.com/glossary/human-in-the-loop-hitl)
- [Idempotency](https://aiengineeringfromscratch.com/glossary/idempotency)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [Rollback](https://aiengineeringfromscratch.com/glossary/rollback)
- [Saturation](https://aiengineeringfromscratch.com/glossary/saturation)
- [Token](https://aiengineeringfromscratch.com/glossary/token)

## Frequently asked questions

### How many lessons are in Phase 15: Autonomous Systems?

Phase 15 has 22 lessons, all Learn lessons. The lesson code uses Python.

### What should I know before I start Phase 15?

The phase guide gives these prerequisites: Phase 14 Lesson 01, The Agent Loop. In the course roadmap, this phase builds on Phase 14: Agent Engineering.

### Is Phase 15 free?

Yes. All 22 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 15 take?

The time estimates of all 22 lessons add up to about 20 hours.

### What comes after Phase 15?

Phase 16: Multi-Agent & Swarms and Phase 18: Ethics, Safety & Alignment build on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
