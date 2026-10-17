# What is Byte Pair Encoding (BPE)?

Canonical page: https://aiengineeringfromscratch.com/glossary/byte-pair-encoding-bpe
Category: Data & representations

A subword-tokenization method that repeatedly merges frequent adjacent units to construct a fixed vocabulary from training text.

## Why does Byte Pair Encoding (BPE) matter?

It balances vocabulary size with the ability to represent rare or unseen words as smaller units.

## What is the common confusion about Byte Pair Encoding (BPE)?

BPE is one tokenizer family, not a universal description of how every model creates tokens.

## Byte Pair Encoding (BPE) in practice

Train the tokenizer only on approved corpus splits, version its merge rules with the model, and inspect how it segments code, multilingual text, and whitespace.

## Lessons

- [Subword Tokenization — BPE, WordPiece, Unigram, SentencePiece](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F19-subword-tokenization) (Phase 05: NLP: Foundations to Advanced)
- [Tokenizers: BPE, WordPiece, SentencePiece](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F01-tokenizers) (Phase 10: LLMs from Scratch)
- [BPE Tokenizer From Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F30-bpe-tokenizer-from-scratch) (Phase 19: Capstone Projects)
- [GloVe, FastText, and Subword Embeddings](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F04-glove-fasttext-subword) (Phase 05: NLP: Foundations to Advanced)
- [Building a Tokenizer from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F02-building-a-tokenizer) (Phase 10: LLMs from Scratch)

## Related terms

- [Tokenization](https://aiengineeringfromscratch.com/glossary/tokenization)
- [Vocabulary](https://aiengineeringfromscratch.com/glossary/vocabulary)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)

## Sources

- [Neural Machine Translation of Rare Words with Subword Units](https://arxiv.org/abs/1508.07909)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
