# What is Test Oracle?

Canonical page: https://aiengineeringfromscratch.com/glossary/test-oracle
Category: AI-native development

The mechanism, specification, reference, invariant, or human judgment used to decide whether observed program behavior is correct.

## Why does Test Oracle matter?

Generating test inputs is not enough; automated verification requires an independent basis for classifying each result.

## What is the common confusion about Test Oracle?

The model that wrote the code should not be treated as an independent oracle merely because you ask it whether its own output is correct.

## Test Oracle in practice

Prefer executable invariants, reference implementations, schemas, and deterministic expected outputs, then document where human judgment remains necessary.

## Related terms

- [Regression Test](https://aiengineeringfromscratch.com/glossary/regression-test)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Human-in-the-Loop (HITL)](https://aiengineeringfromscratch.com/glossary/human-in-the-loop-hitl)
- [Flaky Test](https://aiengineeringfromscratch.com/glossary/flaky-test)
- [Pass@k](https://aiengineeringfromscratch.com/glossary/pass-k)

## Sources

- [The Oracle Problem in Software Testing](https://www.computer.org/csdl/journal/ts/2015/05/06963470/13rRUx0geBw)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
