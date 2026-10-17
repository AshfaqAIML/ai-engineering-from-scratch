# What is Vocabulary?

Canonical page: https://aiengineeringfromscratch.com/glossary/vocabulary
Category: Data & representations

The finite mapping between token identifiers and the units a tokenizer can emit, including ordinary, byte-level, and special control tokens.

## Why does Vocabulary matter?

Vocabulary design affects sequence length, multilingual coverage, code representation, embedding size, and compatibility between tokenizers and model weights.

## What is the common confusion about Vocabulary?

A model vocabulary is not a dictionary of human words; many entries are fragments, bytes, whitespace patterns, or control symbols.

## Vocabulary in practice

Version the vocabulary and special-token assignments with the model, test encode-decode round trips, and never substitute a tokenizer with merely similar token names.

## Lessons

- [Docker for AI](https://aiengineeringfromscratch.com/lesson?path=phases%2F00-setup-and-tooling%2F07-docker-for-ai) (Phase 00: Setup & Tooling)
- [Bag of Words, TF-IDF, and Text Representation](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F02-bag-of-words-tfidf) (Phase 05: NLP: Foundations to Advanced)
- [GloVe, FastText, and Subword Embeddings](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F04-glove-fasttext-subword) (Phase 05: NLP: Foundations to Advanced)
- [Tokenizers: BPE, WordPiece, SentencePiece](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F01-tokenizers) (Phase 10: LLMs from Scratch)
- [Chameleon and Early-Fusion Token-Only Multimodal Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F11-chameleon-early-fusion-tokens) (Phase 12: Multimodal AI)
- [Mesa-Optimization and Deceptive Alignment](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F06-mesa-optimization-deceptive-alignment) (Phase 18: Ethics, Safety & Alignment)

## Related terms

- [Tokenization](https://aiengineeringfromscratch.com/glossary/tokenization)
- [Byte Pair Encoding (BPE)](https://aiengineeringfromscratch.com/glossary/byte-pair-encoding-bpe)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)

## Sources

- [Neural Machine Translation of Rare Words with Subword Units](https://arxiv.org/abs/1508.07909)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
