# What is Stop Sequence?

Canonical page: https://aiengineeringfromscratch.com/glossary/stop-sequence
Category: Models & inference

An application-specified token or text pattern that causes generation to stop when the decoding system encounters it.

## Why does Stop Sequence matter?

Stop sequences bound output protocols and multi-part generation without waiting for the model to decide semantically that it is finished.

## What is the common confusion about Stop Sequence?

A stop sequence is a mechanical decoding condition, not proof that the answer is complete or that an agent goal is satisfied.

## Stop Sequence in practice

Choose unambiguous delimiters, test tokenization and partial streaming matches, and still enforce output length and schema validation.

## Related terms

- [Decoding Strategy](https://aiengineeringfromscratch.com/glossary/decoding-strategy)
- [Structured Output](https://aiengineeringfromscratch.com/glossary/structured-output)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Termination Condition](https://aiengineeringfromscratch.com/glossary/termination-condition)

## Sources

- [Transformers text-generation documentation](https://huggingface.co/docs/transformers/main/en/main_classes/text_generation)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
