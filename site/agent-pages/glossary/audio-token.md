# What is Audio Token?

Canonical page: https://aiengineeringfromscratch.com/glossary/audio-token
Category: Multimodal systems

A discrete identifier produced by an audio codec or tokenizer for a short segment or feature of an audio signal, sometimes across several codebooks.

## Why does Audio Token matter?

Discrete audio representations let sequence models process, predict, store, or generate sound using token-oriented architectures.

## What is the common confusion about Audio Token?

An audio token is not a fixed duration, phoneme, or word. Its meaning and time span depend on the tokenizer and codebook design.

## Audio Token in practice

Version the codec with the model, preserve sample-rate and codebook metadata, measure reconstruction quality, and distinguish semantic audio tokens from waveform-compression tokens.

## Lessons

- [Neural Audio Codecs — EnCodec, SNAC, Mimi, DAC and the Semantic-Acoustic Split](https://aiengineeringfromscratch.com/lesson?path=phases%2F06-speech-and-audio%2F13-neural-audio-codecs) (Phase 06: Speech & Audio)
- [Audio Generation](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F11-audio-generation) (Phase 08: Generative AI)

## Related terms

- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Automatic Speech Recognition (ASR)](https://aiengineeringfromscratch.com/glossary/automatic-speech-recognition-asr)
- [Multimodal Model](https://aiengineeringfromscratch.com/glossary/multimodal-model)

## Sources

- [SoundStream](https://arxiv.org/abs/2107.03312)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
