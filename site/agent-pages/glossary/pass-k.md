# What is Pass@k?

Canonical page: https://aiengineeringfromscratch.com/glossary/pass-k
Category: Evaluation & safety

Across a task set, the fraction of tasks for which at least one of k sampled candidates passes a defined correctness test.

## Why does Pass@k matter?

It measures the value of sampling several attempts for tasks such as code generation where an automatic verifier can check each candidate.

## What is the common confusion about Pass@k?

Pass@k is not single-attempt accuracy, and a higher score can reflect a larger attempt budget rather than a better first answer.

## Pass@k in practice

Generate candidates independently under a fixed configuration, run the same isolated tests on each, and report k with the sampling and estimator details.

## Related terms

- [Coding Agent](https://aiengineeringfromscratch.com/glossary/coding-agent)
- [Regression Test](https://aiengineeringfromscratch.com/glossary/regression-test)
- [Eval Set](https://aiengineeringfromscratch.com/glossary/eval-set)
- [Test Oracle](https://aiengineeringfromscratch.com/glossary/test-oracle)
- [Exact Match (EM)](https://aiengineeringfromscratch.com/glossary/exact-match-em)

## Sources

- [Evaluating Large Language Models Trained on Code](https://arxiv.org/abs/2107.03374)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
