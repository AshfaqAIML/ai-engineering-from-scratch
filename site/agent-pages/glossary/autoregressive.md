# What is Autoregressive?

Canonical page: https://aiengineeringfromscratch.com/glossary/autoregressive
Category: Models & inference

A factorization in which each output token is predicted from the tokens that precede it. During generation, the selected token is appended to the sequence and becomes part of the next prediction's context.

What people say: "The model generates one word at a time."

## What is the common confusion about Autoregressive?

The unit is a token, not necessarily a word, and generation can use decoding methods other than always selecting the highest-probability token.

## Lessons

- [Visual Autoregressive Modeling (VAR): Next-Scale Prediction](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F19-visual-autoregressive-var) (Phase 08: Generative AI)
- [Transfusion: Autoregressive Text + Diffusion Image in One Transformer](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F13-transfusion-autoregressive-diffusion) (Phase 12: Multimodal AI)
- [Time Series Fundamentals](https://aiengineeringfromscratch.com/lesson?path=phases%2F02-ml-fundamentals%2F15-time-series) (Phase 02: ML Fundamentals)

## Related terms

- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Temperature](https://aiengineeringfromscratch.com/glossary/temperature)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [Decoder](https://aiengineeringfromscratch.com/glossary#decoder)
- [Decoding Strategy](https://aiengineeringfromscratch.com/glossary/decoding-strategy)
- [GPT](https://aiengineeringfromscratch.com/glossary#gpt)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [Speculative Decoding](https://aiengineeringfromscratch.com/glossary/speculative-decoding)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
