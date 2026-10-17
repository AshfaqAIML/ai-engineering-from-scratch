# What is ReAct?

Canonical page: https://aiengineeringfromscratch.com/glossary/react
Category: Agents & tools

An agent pattern that interleaves task reasoning, a concrete action, and an observation returned by the environment before deciding the next step.

## Why does ReAct matter?

Environment feedback can correct assumptions and ground later decisions instead of forcing the model to complete the entire task from internal generation alone.

## What is the common confusion about ReAct?

ReAct is a prompting and control pattern, not a guarantee of autonomy, correctness, or safe tool use.

## ReAct in practice

Expose a small set of typed tools, return concise observations, cap the loop, and verify the final artifact rather than storing private reasoning traces.

## Lessons

- [Few-Shot, Chain-of-Thought, Tree-of-Thought](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F02-few-shot-cot) (Phase 11: LLM Engineering)
- [Agent State Machines — Graphs, Nodes, Checkpoints](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F16-langgraph-state-machines) (Phase 11: LLM Engineering)
- [The Agent Loop: Observe, Think, Act](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F01-the-agent-loop) (Phase 14: Agent Engineering)

## Related terms

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Function Calling](https://aiengineeringfromscratch.com/glossary/function-calling)
- [Planning](https://aiengineeringfromscratch.com/glossary/planning)
- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)

## Sources

- [ReAct](https://arxiv.org/abs/2210.03629)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
