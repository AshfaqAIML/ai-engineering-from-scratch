# What is Eval Set?

Canonical page: https://aiengineeringfromscratch.com/glossary/eval-set
Category: Evaluation & safety
Also called: Evaluation set

A versioned collection of inputs, expected properties, scoring rules, and metadata used to measure an AI system against a defined capability or risk.

## Why does Eval Set matter?

A repeatable set turns vague quality claims into comparable evidence and catches regressions after prompts, models, tools, or retrieval change.

## What is the common confusion about Eval Set?

A development eval guides iteration, a final held-out test estimates performance after choices are fixed, and a standardized benchmark supports comparison under a shared protocol. Repeated tuning against any held-out set leaks test information and inflates results.

## Eval Set in practice

Keep representative support questions, adversarial instructions, expected citations, and failure labels in a reviewed dataset that is separate from development examples.

## Lessons

- [Eval-Driven Agent Development](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F30-eval-driven-agent-development) (Phase 14: Agent Engineering)

## Related terms

- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Regression Test](https://aiengineeringfromscratch.com/glossary/regression-test)
- [LLM-as-a-Judge](https://aiengineeringfromscratch.com/glossary/llm-as-a-judge)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Benchmark Contamination](https://aiengineeringfromscratch.com/glossary/benchmark-contamination)
- [Data Augmentation](https://aiengineeringfromscratch.com/glossary/data-augmentation)
- [Data Leakage](https://aiengineeringfromscratch.com/glossary/data-leakage)
- [Dataset Split](https://aiengineeringfromscratch.com/glossary/dataset-split)
- [Distribution Shift](https://aiengineeringfromscratch.com/glossary/distribution-shift)
- [Epoch](https://aiengineeringfromscratch.com/glossary/epoch)
- [Exact Match (EM)](https://aiengineeringfromscratch.com/glossary/exact-match-em)
- [Jailbreak](https://aiengineeringfromscratch.com/glossary/jailbreak)
- [Lost in the Middle](https://aiengineeringfromscratch.com/glossary/lost-in-the-middle)
- [Membership Inference](https://aiengineeringfromscratch.com/glossary/membership-inference)
- [Model Card](https://aiengineeringfromscratch.com/glossary/model-card)
- [Overfitting](https://aiengineeringfromscratch.com/glossary/overfitting)
- [Pass@k](https://aiengineeringfromscratch.com/glossary/pass-k)
- [Precision & Recall](https://aiengineeringfromscratch.com/glossary/precision-recall)
- [Prompt Sensitivity](https://aiengineeringfromscratch.com/glossary/prompt-sensitivity)
- [Recall@K](https://aiengineeringfromscratch.com/glossary/recall-k)
- [Red Teaming](https://aiengineeringfromscratch.com/glossary/red-teaming)
- [Test Oracle](https://aiengineeringfromscratch.com/glossary/test-oracle)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
