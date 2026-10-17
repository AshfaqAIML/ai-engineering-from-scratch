# Learn Speech and Audio AI from Scratch: 17 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/speech-and-audio

The other half of human communication. Hear, understand, speak.

## Lessons in Phase 06: Speech & Audio

01. [Audio Fundamentals — Waveforms, Sampling, Fourier Transform](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F01-audio-fundamentals): Waveforms are the raw signal. Spectrograms are the representation. Mel features are the ML-friendly form. Every modern ASR and TTS pipeline walks this ladder, and the first rung is understanding… (Learn, Python, ~45 min)
02. [Spectrograms, Mel Scale & Audio Features](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F02-spectrograms-mel-features): Neural nets do not consume raw waveforms well. They consume spectrograms. They consume mel spectrograms even better. Every ASR, TTS, and audio classifier in 2026 lives or dies by this single… (Build, Python, ~45 min)
03. [Audio Classification — From k-NN on MFCCs to AST and BEATs](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F03-audio-classification): Everything from "dog barking vs siren" to "which language is this" is audio classification. The features are mels. The architecture moves each decade. (Build, Python, ~75 min)
04. [Speech Recognition (ASR) — CTC, RNN-T, Attention](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F04-speech-recognition-asr): Speech recognition is audio classification at every timestep, glued together by a sequence model that knows English and silence. CTC, RNN-T, and attention are the three ways to do it. (Build, Python, ~45 min)
05. [Whisper — Architecture & Fine-Tuning](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F05-whisper-architecture-finetuning): Whisper is a 30-second-window transformer encoder-decoder, trained on 680k hours of multilingual weakly-supervised audio-text pairs. One architecture, multiple tasks, robust across 99 languages. (Build, Python, ~75 min)
06. [Speaker Recognition & Verification](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F06-speaker-recognition-verification): ASR asks "what did they say?" Speaker recognition asks "who said it?" The math looks the same — embeddings plus cosine — but every production decision hinges on a single EER number. (Build, Python, ~45 min)
07. [Text-to-Speech (TTS) — From Tacotron to F5 and Kokoro](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F07-text-to-speech): ASR inverts speech to text; TTS inverts text to speech. The 2026 stack is three parts: text → tokens, tokens → mel, mel → waveform. Each part has a default model that fits in a laptop. (Build, Python, ~75 min)
08. [Voice Cloning & Voice Conversion](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F08-voice-cloning-conversion): Voice cloning reads your text in someone else's voice. Voice conversion rewrites your voice into someone else's while preserving what you said. (Build, Python, ~75 min)
09. [Music Generation — MusicGen, Stable Audio, Suno, and the Licensing Earthquake](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F09-music-generation): 2026 music generation: Suno v5 and Udio v4 dominate commercial; MusicGen, Stable Audio Open, and ACE-Step lead open-source. The technical problem is mostly solved. (Build, Python, ~75 min)
10. [Audio-Language Models — Qwen2.5-Omni, Audio Flamingo, GPT-4o Audio](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F10-audio-language-models): 2026 audio-language models reason over speech + environmental sound + music. Qwen2.5-Omni-7B matches GPT-4o Audio on MMAU-Pro. Audio Flamingo Next beats Gemini 2.5 Pro on LongAudioBench. (Build, Python, ~45 min)
11. [Real-Time Audio Processing](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F11-real-time-audio-processing): Batch pipelines process a file. Real-time pipelines process the next 20 milliseconds before the next 20 arrive. Every conversational AI, broadcast studio, and telephony bot lives and dies by this… (Build, Python, ~75 min)
12. [Build a Voice Assistant Pipeline — The Phase 6 Capstone](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F12-voice-assistant-pipeline): Everything from lessons 01-11, stitched together. Build a voice assistant that listens, reasons, and talks back. In 2026 that is a solved engineering problem, not a research problem — but the… (Build, Python, ~120 min)
13. [Neural Audio Codecs — EnCodec, SNAC, Mimi, DAC and the Semantic-Acoustic Split](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F13-neural-audio-codecs): 2026 audio generation is almost all tokens. EnCodec, SNAC, Mimi, and DAC turn continuous waveforms into discrete sequences that a transformer can predict. (Learn, Python, ~60 min)
14. [Voice Activity Detection & Turn-Taking — Silero, Cobra, and the Flush Trick](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F14-voice-activity-detection-turn-taking): Every voice agent lives or dies on two decisions: is the user speaking now, and are they done? VAD answers the first. Turn-detection (VAD + silence-hangover + semantic endpoint model) answers the… (Build, Python, ~45 min)
15. [Streaming Speech-to-Speech — Moshi, Hibiki, and Full-Duplex Dialogue](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F15-streaming-speech-to-speech-moshi-hibiki): 2024-2026 redefined voice AI. Moshi ships a single model that listens and speaks simultaneously at 200 ms latency. Hibiki does speech-to-speech translation chunk-by-chunk. (Learn, Python, ~75 min)
16. [Voice Anti-Spoofing & Audio Watermarking — ASVspoof 5, AudioSeal, WaveVerify](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F16-anti-spoofing-audio-watermarking): Voice cloning shipped faster than defenses. 2026 production voice systems need two things: a detector (AASIST, RawNet2) that classifies real vs fake speech, and a watermark (AudioSeal) that survives… (Build, Python, ~75 min)
17. [Audio Evaluation — WER, MOS, UTMOS, MMAU, FAD, and the Open Leaderboards](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F17-audio-evaluation-metrics): You cannot ship what you cannot measure. This lesson names the 2026 metrics for every audio task: ASR (WER, CER, RTFx), TTS (MOS, UTMOS, SECS, WER-on-ASR-round-trip), audio-language (MMAU,… (Learn, Python, ~60 min)

## Start

Run this command from the repository root:

```bash
python3 phases/06-speech-and-audio/01-audio-fundamentals/code/main.py
```

## Glossary terms in this phase

- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Audio Token](https://aiengineeringfromscratch.com/glossary/audio-token)
- [Automatic Speech Recognition (ASR)](https://aiengineeringfromscratch.com/glossary/automatic-speech-recognition-asr)
- [Chunking](https://aiengineeringfromscratch.com/glossary/chunking)
- [CNN (Convolutional Neural Network)](https://aiengineeringfromscratch.com/glossary/cnn-convolutional-neural-network)
- [Cosine Similarity](https://aiengineeringfromscratch.com/glossary/cosine-similarity)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Feature](https://aiengineeringfromscratch.com/glossary/feature)
- [Fine-tuning](https://aiengineeringfromscratch.com/glossary/fine-tuning)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [LoRA (Low-Rank Adaptation)](https://aiengineeringfromscratch.com/glossary/lora-low-rank-adaptation)
- [Normalization](https://aiengineeringfromscratch.com/glossary/normalization)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Quantization](https://aiengineeringfromscratch.com/glossary/quantization)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Zero-Shot](https://aiengineeringfromscratch.com/glossary#zero-shot)

## Frequently asked questions

### How many lessons are in Phase 06: Speech & Audio?

Phase 06 has 17 lessons: 13 Build lessons and 4 Learn lessons. The lesson code uses Python.

### What should I know before I start Phase 06?

The phase guide gives these prerequisites: Phase 1 vectors, matrices, and probability. The first demo uses only the Python standard library. In the course roadmap, this phase builds on Phase 03: Deep Learning Core.

### Is Phase 06 free?

Yes. All 17 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 06 take?

The time estimates of all 17 lessons add up to about 19 hours.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
