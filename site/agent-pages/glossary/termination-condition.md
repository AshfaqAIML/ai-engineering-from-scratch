# What is Termination Condition?

Canonical page: https://aiengineeringfromscratch.com/glossary/termination-condition
Category: Agents & tools

An explicit rule that ends or pauses an agent run when it succeeds, fails, exhausts a budget, reaches a safe boundary, or requires escalation.

## Why does Termination Condition matter?

Without a termination condition, an agent can loop, repeat side effects, waste budget, or claim completion without satisfying the goal.

## What is the common confusion about Termination Condition?

A stop sequence ends text generation; a termination condition decides whether the task or workflow should stop.

## Termination Condition in practice

Define success evidence, maximum steps and cost, non-retryable errors, and escalation states before starting the loop.

## Related terms

- [Agent Harness](https://aiengineeringfromscratch.com/glossary/agent-harness)
- [Token Budget](https://aiengineeringfromscratch.com/glossary/token-budget)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Stop Sequence](https://aiengineeringfromscratch.com/glossary/stop-sequence)

## Sources

- [AutoGen](https://arxiv.org/abs/2308.08155)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
