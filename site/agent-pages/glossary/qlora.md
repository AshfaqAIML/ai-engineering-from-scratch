# What is QLoRA?

Canonical page: https://aiengineeringfromscratch.com/glossary/qlora
Category: Math & training

A parameter-efficient fine-tuning method that keeps a pretrained base model frozen in a low-bit quantized representation while training LoRA adapters with higher-precision computation where needed.

What people say: "LoRA with a quantized base model."

## Why does QLoRA matter?

It can reduce the memory needed to adapt large models, but savings and quality depend on model, rank, optimizer, sequence length, hardware, and implementation.

## What is the common confusion about QLoRA?

QLoRA does not guarantee a particular memory footprint or a fixed quality gap from full fine-tuning.

## Lessons

- [Fine-Tuning with LoRA & QLoRA](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F08-fine-tuning-lora) (Phase 11: LLM Engineering)
- [Vision-Language Models — The ViT-MLP-LLM Pattern](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F25-vision-language-models) (Phase 04: Computer Vision)

## Related terms

- [LoRA (Low-Rank Adaptation)](https://aiengineeringfromscratch.com/glossary/lora-low-rank-adaptation)
- [Quantization](https://aiengineeringfromscratch.com/glossary/quantization)
- [Fine-tuning](https://aiengineeringfromscratch.com/glossary/fine-tuning)

## Sources

- [QLoRA paper](https://arxiv.org/abs/2305.14314)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
