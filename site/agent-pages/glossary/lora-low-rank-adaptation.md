# What is LoRA (Low-Rank Adaptation)?

Canonical page: https://aiengineeringfromscratch.com/glossary/lora-low-rank-adaptation
Category: Math & training

A method that keeps base weights frozen and learns low-rank update matrices for selected layers. It reduces the number of trainable parameters and can lower training memory relative to full-parameter fine-tuning.

What people say: "Parameter-efficient fine-tuning."

## What is the common confusion about LoRA (Low-Rank Adaptation)?

Actual memory and speed savings depend on rank, target modules, optimizer state, activation memory, quantization, and implementation.

## Lessons

- [Fine-Tuning with LoRA & QLoRA](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F08-fine-tuning-lora) (Phase 11: LLM Engineering)
- [ControlNet, LoRA & Conditioning](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F08-controlnet-lora-conditioning) (Phase 08: Generative AI)
- [Stable Diffusion — Architecture & Fine-Tuning](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F11-stable-diffusion) (Phase 04: Computer Vision)
- [Vision-Language Models — The ViT-MLP-LLM Pattern](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F25-vision-language-models) (Phase 04: Computer Vision)
- [Whisper — Architecture & Fine-Tuning](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F05-whisper-architecture-finetuning) (Phase 06: Speech & Audio)
- [Differential Privacy for LLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F22-differential-privacy-for-llms) (Phase 18: Ethics, Safety & Alignment)

## Related terms

- [Fine-tuning](https://aiengineeringfromscratch.com/glossary/fine-tuning)
- [QLoRA](https://aiengineeringfromscratch.com/glossary/qlora)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)

## Sources

- [LoRA paper](https://arxiv.org/abs/2106.09685)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
