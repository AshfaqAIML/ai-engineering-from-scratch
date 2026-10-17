# Learn NLP from Scratch: 29 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/nlp-foundations-to-advanced

Language is the interface to intelligence. Master every layer.

## Lessons in Phase 05: NLP: Foundations to Advanced

01. [Text Processing — Tokenization, Stemming, Lemmatization](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F01-text-processing): Language is continuous. Models are discrete. Preprocessing is the bridge. A model cannot read "The cats were running." It reads integers. Every NLP system opens with the same three questions. (Build, Python, ~45 min)
02. [Bag of Words, TF-IDF, and Text Representation](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F02-bag-of-words-tfidf): Count first, think later. TF-IDF still beats embeddings on well-defined tasks in 2026. The model needs numbers. You have strings. Every NLP pipeline has to answer the same question. (Build, Python, ~75 min)
03. [Word Embeddings — Word2Vec from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F03-word-embeddings-word2vec): A word is the company it keeps. Train a shallow net on that idea and geometry falls out. TF-IDF knows dog and puppy are different words. It does not know they mean nearly the same thing. (Build, Python, ~75 min)
04. [GloVe, FastText, and Subword Embeddings](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F04-glove-fasttext-subword): Word2Vec trained one embedding per word. GloVe factorized the co-occurrence matrix. FastText embedded the pieces. BPE bridged to transformers. Word2Vec left two open questions. (Build, Python, ~45 min)
05. [Sentiment Analysis](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F05-sentiment-analysis): The canonical NLP task. Most of what you need to know about classical text classification shows up here. "The food was not great." Positive or negative? Sentiment sounds simple. (Build, Python, ~75 min)
06. [Named Entity Recognition](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F06-named-entity-recognition): Pull the names out. Sounds easy until you deal with ambiguous boundaries, nested entities, and domain jargon. "Apple sued Google over its iPhone search deal in the US." Five entities: Apple (ORG),… (Build, Python, ~75 min)
07. [POS Tagging and Syntactic Parsing](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F07-pos-tagging-parsing): Grammar was unfashionable for a while. Then every LLM pipeline needed to validate structured extraction, and it came back. Lesson 01 promised that lemmatization needs a part-of-speech tag. (Build, Python, ~45 min)
08. [CNNs and RNNs for Text](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F08-cnns-rnns-for-text): Convolutions learn n-grams. Recurrences remember. Both are superseded by attention. Both still matter on constrained hardware. TF-IDF and Word2Vec produced flat vectors that ignored word order. (Build, Python, ~75 min)
09. [Sequence-to-Sequence Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F09-sequence-to-sequence): Two RNNs pretending to be a translator. The bottleneck they hit is the reason attention exists. Classification maps a variable-length sequence to a single label. (Build, Python, ~75 min)
10. [Attention Mechanism — The Breakthrough](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F10-attention-mechanism): The decoder stops squinting at a compressed summary and starts looking at the whole source. Everything after this is attention plus engineering. Lesson 09 ended on a measured failure. (Build, Python, ~45 min)
11. [Machine Translation](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F11-machine-translation): Translation is the task that paid for NLP research for thirty years and keeps paying now. A model reads a sentence in one language and produces a sentence in another. Length varies. Word order varies. (Build, Python, ~75 min)
12. [Text Summarization](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F12-text-summarization): Extractive systems tell you what the document said. Abstractive systems tell you what the author meant. Different tasks, different pitfalls. A 2,000-word news article lands in your feed. (Build, Python, ~75 min)
13. [Question Answering Systems](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F13-question-answering): Three systems shaped modern QA. Extractive found spans. Retrieval-augmented grounded them in documents. Generative produced answers. Every modern AI assistant is a mix of the three. (Build, Python, ~75 min)
14. [Information Retrieval and Search](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F14-information-retrieval-search): BM25 is precise but brittle. Dense casts a wide net but misses keywords. Hybrid is the 2026 default. Everything else is tuning. (Build, Python, ~75 min)
15. [Topic Modeling — LDA and BERTopic](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F15-topic-modeling): LDA: documents are mixtures of topics, topics are distributions over words. BERTopic: documents cluster in embedding space, clusters are topics. Same goal, different decompositions. (Build, Python, ~45 min)
16. [Text Generation Before Transformers — N-gram Language Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F16-text-generation-pre-transformer): If a word is surprising, the model is bad. Perplexity makes surprise a number. Smoothing keeps it finite. Before transformers, before RNNs, before word embeddings, a language model predicted the… (Build, Python, ~45 min)
17. [Chatbots — Rule-Based to Neural to LLM Agents](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F17-chatbots-rule-to-neural): ELIZA replied with pattern matches. DialogFlow mapped intents. GPT answered from weights. Claude runs tools and verifies. Each era solved the previous one's worst failure. (Build, Python, ~75 min)
18. [Multilingual NLP](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F18-multilingual-nlp): One model, 100+ languages, zero training data for most of them. Cross-lingual transfer is the practical miracle of the 2020s. English has billions of labeled examples. Urdu has thousands. (Build, Python, ~45 min)
19. [Subword Tokenization — BPE, WordPiece, Unigram, SentencePiece](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F19-subword-tokenization): Word tokenizers choke on unseen words. Character tokenizers blow up sequence length. Subword tokenizers split the difference. Every modern LLM ships on one. Your vocabulary has 50,000 words. (Learn, Python, ~60 min)
20. [Structured Outputs & Constrained Decoding](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F20-structured-outputs-constrained-decoding): Ask an LLM for JSON. Get JSON most of the time. In production, "most" is the problem. Constrained decoding turns "most" into "always" by editing the logits before sampling. (Build, Python, ~60 min)
21. [Natural Language Inference — Textual Entailment](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F21-nli-textual-entailment): "t entails h" means a human reading t would conclude h is true. NLI is the task of predicting entailment / contradiction / neutral. Boring on the surface, load-bearing in production. (Learn, Python, ~60 min)
22. [Embedding Models — The 2026 Deep Dive](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F22-embedding-models-deep-dive): Word2Vec gave you a vector per word. Modern embedding models give you a vector per passage, cross-lingual, with sparse, dense, and multi-vector views, sized to fit your index. (Learn, Python, ~60 min)
23. [Chunking Strategies for RAG](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F23-chunking-strategies-rag): Chunking configuration influences retrieval quality as much as the choice of embedding model (Vectara NAACL 2025). Get chunking wrong and no amount of reranking saves you. (Build, Python, ~60 min)
24. [Coreference Resolution](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F24-coreference-resolution): "She called him. He did not answer. The doctor was at lunch." Three references to two people and nobody is named. Coreference resolution figures out who is who. Extract every mention of Apple Inc. (Learn, Python, ~60 min)
25. [Entity Linking & Disambiguation](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F25-entity-linking): NER found "Paris." Entity linking decides: Paris, France? Paris Hilton? Paris, Texas? Paris (the Trojan prince)? Without linking, your knowledge graph stays ambiguous. (Build, Python, ~60 min)
26. [Relation Extraction & Knowledge Graph Construction](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F26-relation-extraction-kg): NER found the entities. Entity linking anchored them. Relation extraction finds the edges between them. A knowledge graph is the sum of nodes, edges, and their provenance. (Build, Python, ~60 min)
27. [LLM Evaluation — RAGAS, DeepEval, G-Eval](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F27-llm-evaluation-frameworks): Exact-match and F1 miss semantic equivalence. Human review does not scale. LLM-as-judge is the production answer — with enough calibration to trust the number. (Build, Python, ~75 min)
28. [Long-Context Evaluation — NIAH, RULER, LongBench, MRCR](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F28-long-context-evaluation): Gemini 3 Pro advertises 10M tokens of context. At 1M tokens, 8-needle MRCR drops to 26.3%. Advertised ≠ usable. Long-context evaluation tells you the actual capacity of the model you are shipping on. (Learn, Python, ~60 min)
29. [Dialogue State Tracking](https://aiengineeringfromscratch.com/lesson?path=phases%2F05-nlp-foundations-to-advanced%2F29-dialogue-state-tracking): "I want a cheap restaurant in the north... actually make it moderate... and add Italian." Three turns, three state updates. DST keeps the slot-value dict in sync so the booking works. (Build, Python, ~75 min)

## Start

Run this command from the repository root:

```bash
python3 phases/05-nlp-foundations-to-advanced/01-text-processing/code/main.py
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [BM25](https://aiengineeringfromscratch.com/glossary/bm25)
- [Byte Pair Encoding (BPE)](https://aiengineeringfromscratch.com/glossary/byte-pair-encoding-bpe)
- [Chunking](https://aiengineeringfromscratch.com/glossary/chunking)
- [CNN (Convolutional Neural Network)](https://aiengineeringfromscratch.com/glossary/cnn-convolutional-neural-network)
- [Decoder](https://aiengineeringfromscratch.com/glossary#decoder)
- [Dense Retrieval](https://aiengineeringfromscratch.com/glossary/dense-retrieval)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Encoder](https://aiengineeringfromscratch.com/glossary/encoder)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Feature](https://aiengineeringfromscratch.com/glossary/feature)
- [Few-Shot](https://aiengineeringfromscratch.com/glossary/few-shot)
- [Fine-tuning](https://aiengineeringfromscratch.com/glossary/fine-tuning)
- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [Perplexity](https://aiengineeringfromscratch.com/glossary/perplexity)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [Reciprocal Rank Fusion (RRF)](https://aiengineeringfromscratch.com/glossary/reciprocal-rank-fusion-rrf)
- [ROUGE](https://aiengineeringfromscratch.com/glossary/rouge)
- [Structured Output](https://aiengineeringfromscratch.com/glossary/structured-output)
- [Tokenization](https://aiengineeringfromscratch.com/glossary/tokenization)
- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Vocabulary](https://aiengineeringfromscratch.com/glossary/vocabulary)
- [Zero-Shot](https://aiengineeringfromscratch.com/glossary#zero-shot)

## Frequently asked questions

### How many lessons are in Phase 05: NLP: Foundations to Advanced?

Phase 05 has 29 lessons: 24 Build lessons and 5 Learn lessons. The lesson code uses Python.

### What should I know before I start Phase 05?

The phase guide gives these prerequisites: Phase 2 Lesson 14, Naive Bayes. Python 3.11+ is enough for the first lesson. In the course roadmap, this phase builds on Phase 03: Deep Learning Core.

### Is Phase 05 free?

Yes. All 29 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 05 take?

The time estimates of all 29 lessons add up to about 31 hours.

### What comes after Phase 05?

Phase 07: Transformers Deep Dive builds on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
