# What is Tokenization?

Canonical page: https://aiengineeringfromscratch.com/glossary/tokenization
Category: Data & representations

Converting an input representation into the ordered token identifiers a specific model or tokenizer accepts.

## Why does Tokenization matter?

Tokenization determines sequence length, vocabulary boundaries, cost accounting, truncation behavior, and how text or code is represented before embedding.

## What is the common confusion about Tokenization?

Tokenization is not always word splitting, and two models can assign different token counts and IDs to the same input.

## Tokenization in practice

Use the exact tokenizer for the target model, version it with artifacts, and test multilingual text, code, whitespace, and special tokens.

## Lessons

- [Text Processing — Tokenization, Stemming, Lemmatization](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F01-text-processing) (Phase 05: NLP: Foundations to Advanced)
- [Subword Tokenization — BPE, WordPiece, Unigram, SentencePiece](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F19-subword-tokenization) (Phase 05: NLP: Foundations to Advanced)
- [Multilingual NLP](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F18-multilingual-nlp) (Phase 05: NLP: Foundations to Advanced)
- [Embodied VLAs: RT-2, OpenVLA, π0, GR00T](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F21-embodied-vlas-openvla-pi0-groot) (Phase 12: Multimodal AI)

## Related terms

- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Vocabulary](https://aiengineeringfromscratch.com/glossary/vocabulary)
- [Byte Pair Encoding (BPE)](https://aiengineeringfromscratch.com/glossary/byte-pair-encoding-bpe)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Automatic Speech Recognition (ASR)](https://aiengineeringfromscratch.com/glossary/automatic-speech-recognition-asr)

## Sources

- [Neural Machine Translation of Rare Words with Subword Units](https://arxiv.org/abs/1508.07909)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
