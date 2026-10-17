# What is Automatic Speech Recognition (ASR)?

Canonical page: https://aiengineeringfromscratch.com/glossary/automatic-speech-recognition-asr
Category: Multimodal systems

The task and system pipeline that maps a speech signal to a transcription, often with optional token or segment timing and confidence information.

## Why does Automatic Speech Recognition (ASR) matter?

Speech interfaces depend on more than language modeling. Acoustic variation, segmentation, decoding, vocabulary, and domain conditions all affect the final transcript.

## What is the common confusion about Automatic Speech Recognition (ASR)?

ASR transcribes what was said. Determining who spoke requires diarization or speaker recognition, while translation and intent understanding are separate tasks.

## Automatic Speech Recognition (ASR) in practice

Evaluate word or character errors by language, speaker, noise, and domain, retain timestamps when downstream grounding needs them, and test the exact audio preprocessing used in production.

## Lessons

- [Speech Recognition (ASR) — CTC, RNN-T, Attention](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F04-speech-recognition-asr) (Phase 06: Speech & Audio)
- [Capstone 03 — Real-Time Voice Assistant (ASR to LLM to TTS)](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F03-realtime-voice-assistant) (Phase 19: Capstone Projects)
- [Real-Time Audio Processing](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F11-real-time-audio-processing) (Phase 06: Speech & Audio)
- [Audio Evaluation — WER, MOS, UTMOS, MMAU, FAD, and the Open Leaderboards](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F17-audio-evaluation-metrics) (Phase 06: Speech & Audio)
- [Many-Shot Jailbreaking](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F13-many-shot-jailbreaking) (Phase 18: Ethics, Safety & Alignment)

## Related terms

- [Audio Token](https://aiengineeringfromscratch.com/glossary/audio-token)
- [Encoder](https://aiengineeringfromscratch.com/glossary/encoder)
- [Tokenization](https://aiengineeringfromscratch.com/glossary/tokenization)
- [Multimodal Model](https://aiengineeringfromscratch.com/glossary/multimodal-model)

## Sources

- [Connectionist Temporal Classification](https://www.cs.toronto.edu/~graves/icml_2006.pdf)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
