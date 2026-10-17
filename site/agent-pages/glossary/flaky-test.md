# What is Flaky Test?

Canonical page: https://aiengineeringfromscratch.com/glossary/flaky-test
Category: AI-native development

A test that can pass and fail across equivalent runs without a relevant change to the code or intended test environment.

## Why does Flaky Test matter?

Flakiness weakens verification gates and can train people or agents to ignore real failures or retry until they obtain a false pass.

## What is the common confusion about Flaky Test?

A test that consistently exposes an intermittent product bug is valuable evidence, not necessarily a flaky test.

## Flaky Test in practice

Preserve the failing seed and environment, quarantine only with an owner and deadline, then fix uncontrolled time, concurrency, network, order, or shared-state dependencies.

## Related terms

- [Regression Test](https://aiengineeringfromscratch.com/glossary/regression-test)
- [Test Oracle](https://aiengineeringfromscratch.com/glossary/test-oracle)
- [Retry with Backoff](https://aiengineeringfromscratch.com/glossary/retry-with-backoff)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)

## Sources

- [De-Flake Your Tests](https://conferences.computer.org/icsme/pdfs/ICSME2020-1oOutvkGTwF4GyVvNtr3Mm/561900a736/561900a736.pdf)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
