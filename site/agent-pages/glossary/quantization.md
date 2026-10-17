# What is Quantization?

Canonical page: https://aiengineeringfromscratch.com/glossary/quantization
Category: Models & inference

Representing weights, activations, or caches with lower-precision formats to reduce memory, bandwidth, or compute cost. Methods differ in calibration, granularity, data type, and whether conversion happens before, during, or after training.

What people say: "Storing or computing model values with fewer bits."

## What is the common confusion about Quantization?

Moving from one nominal bit width to another does not guarantee the same end-to-end memory or speed ratio because metadata, kernels, caches, and hardware support also matter.

## Lessons

- [Quantization: Making Models Fit](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F11-quantization) (Phase 10: LLMs from Scratch)
- [Production Quantization — AWQ, GPTQ, GGUF K-quants, FP8, MXFP4/NVFP4](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F09-production-quantization) (Phase 17: Infrastructure & Production)
- [Neural Audio Codecs — EnCodec, SNAC, Mimi, DAC and the Semantic-Acoustic Split](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F13-neural-audio-codecs) (Phase 06: Speech & Audio)
- [Embeddings & Vector Representations](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F04-embeddings) (Phase 11: LLM Engineering)
- [Fine-Tuning with LoRA & QLoRA](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F08-fine-tuning-lora) (Phase 11: LLM Engineering)
- [Edge Inference — Apple Neural Engine, Qualcomm Hexagon, WebGPU/WebLLM, Jetson](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F12-edge-inference) (Phase 17: Infrastructure & Production)

## Related terms

- [QLoRA](https://aiengineeringfromscratch.com/glossary/qlora)
- [Mixed Precision](https://aiengineeringfromscratch.com/glossary/mixed-precision)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Knowledge Distillation](https://aiengineeringfromscratch.com/glossary/knowledge-distillation)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
