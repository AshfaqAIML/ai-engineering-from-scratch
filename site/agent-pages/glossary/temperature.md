# What is Temperature?

Canonical page: https://aiengineeringfromscratch.com/glossary/temperature
Category: Models & inference

A decoding parameter that rescales logits before a probability distribution is formed. Higher positive values usually flatten the distribution; lower positive values sharpen it.

What people say: "A creativity setting."

## Why does Temperature matter?

Temperature changes sampling behavior, not the model's knowledge or factuality.

## What is the common confusion about Temperature?

A zero setting is often implemented as greedy decoding, but exact behavior and determinism depend on the provider, sampler, seed support, and serving system.

## Lessons

- [Sampling Methods](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F16-sampling-methods) (Phase 01: Math Foundations)
- [Prompt Engineering: Techniques & Patterns](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F01-prompt-engineering) (Phase 11: LLM Engineering)
- [CLIP and Contrastive Vision-Language Pretraining](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F02-clip-contrastive-pretraining) (Phase 12: Multimodal AI)
- [Emu3: Next-Token Prediction for Image and Video Generation](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F12-emu3-next-token-for-generation) (Phase 12: Multimodal AI)
- [GPT Model Assembly](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F35-gpt-model-assembly) (Phase 19: Capstone Projects)
- [Vision-Language Pretraining](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F62-vision-language-pretraining) (Phase 19: Capstone Projects)

## Related terms

- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Autoregressive](https://aiengineeringfromscratch.com/glossary/autoregressive)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Decoding Strategy](https://aiengineeringfromscratch.com/glossary/decoding-strategy)
- [Hyperparameter](https://aiengineeringfromscratch.com/glossary/hyperparameter)
- [Logits](https://aiengineeringfromscratch.com/glossary/logits)
- [Nucleus Sampling (Top-p)](https://aiengineeringfromscratch.com/glossary/nucleus-sampling-top-p)
- [Top-k Sampling](https://aiengineeringfromscratch.com/glossary/top-k-sampling)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
