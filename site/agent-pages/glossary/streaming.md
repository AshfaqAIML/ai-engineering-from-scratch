# What is Streaming?

Canonical page: https://aiengineeringfromscratch.com/glossary/streaming
Category: Models & inference

Delivering incremental response events before the complete result is ready. A stream may contain token text, structured deltas, tool-call arguments, usage metadata, or status events depending on the API.

What people say: "Showing output as it is generated."

## Why does Streaming matter?

It improves perceived responsiveness, but it does not reduce the model's actual time to produce a complete answer.

## What is the common confusion about Streaming?

Network transport, event shape, and chunk boundaries are provider-specific and are not guaranteed to align with words or tokens.

## Lessons

- [Building a Production LLM Application](https://aiengineeringfromscratch.com/lesson?path=phases%2F11-llm-engineering%2F13-production-app) (Phase 11: LLM Engineering)
- [Streaming Speech-to-Speech — Moshi, Hibiki, and Full-Duplex Dialogue](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F15-streaming-speech-to-speech-moshi-hibiki) (Phase 06: Speech & Audio)
- [MIO and Any-to-Any Streaming Multimodal Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F16-mio-any-to-any-streaming) (Phase 12: Multimodal AI)
- [Parallel Tool Calls and Streaming with Tools](https://aiengineeringfromscratch.com/lesson?path=phases%2F13-tools-and-protocols%2F03-parallel-and-streaming-tool-calls) (Phase 13: Tools & Protocols)
- [Speech Recognition (ASR) — CTC, RNN-T, Attention](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F04-speech-recognition-asr) (Phase 06: Speech & Audio)
- [Real-Time Audio Processing](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F11-real-time-audio-processing) (Phase 06: Speech & Audio)
- [Build a Voice Assistant Pipeline — The Phase 6 Capstone](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F12-voice-assistant-pipeline) (Phase 06: Speech & Audio)
- [Audio Evaluation — WER, MOS, UTMOS, MMAU, FAD, and the Open Leaderboards](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F17-audio-evaluation-metrics) (Phase 06: Speech & Audio)
- [Omni Models: Qwen2.5-Omni and the Thinker-Talker Split](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F20-omni-models-thinker-talker) (Phase 12: Multimodal AI)

## Related terms

- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Autoregressive](https://aiengineeringfromscratch.com/glossary/autoregressive)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [Time per Output Token (TPOT)](https://aiengineeringfromscratch.com/glossary/time-per-output-token-tpot)
- [Tokens per Second (TPS)](https://aiengineeringfromscratch.com/glossary/tokens-per-second-tps)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
