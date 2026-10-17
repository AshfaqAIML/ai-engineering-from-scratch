# Learn Transformers from Scratch: 16 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/transformers-deep-dive

The architecture that changed everything. Understand every layer.

## Lessons in Phase 07: Transformers Deep Dive

01. [Why Transformers — The Problems with RNNs](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F01-why-transformers): RNNs process tokens one at a time. Transformers process all tokens at once. That single architectural bet changed every scaling curve in deep learning after 2017. (Learn, Python, ~45 min)
02. [Self-Attention from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F02-self-attention-from-scratch): Attention is a lookup table where every word asks "who matters to me?" - and learns the answer. Implement scaled dot-product self-attention from scratch using only NumPy, including query/key/value… (Build, Python, ~90 min)
03. [Multi-Head Attention](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F03-multi-head-attention): One attention head learns one relation at a time. Eight heads learn eight. Heads are free. Take more of them. A single self-attention head computes one attention matrix. (Build, Python, ~75 min)
04. [Positional Encoding — Sinusoidal, RoPE, ALiBi](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F04-positional-encoding): Attention is permutation-invariant. "The cat sat on the mat" and "mat the on sat cat the" produce the same output without positional signal. (Build, Python, ~45 min)
05. [The Full Transformer — Encoder + Decoder](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F05-full-transformer): Attention is the star. Everything else — residuals, normalization, feed-forward, cross-attention — is the scaffolding that lets you stack it deep. (Build, Python, ~75 min)
06. [BERT — Masked Language Modeling](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F06-bert-masked-language-modeling): GPT predicts the next word. BERT predicts a missing word. One sentence of difference — and half a decade of everything embedding-shaped. (Build, Python, ~45 min)
07. [GPT — Causal Language Modeling](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F07-gpt-causal-language-modeling): BERT sees both sides. GPT sees only the past. The triangle mask is the most consequential single line of code in modern AI. (Build, Python, ~75 min)
08. [T5, BART — Encoder-Decoder Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F08-t5-bart-encoder-decoder): Encoders understand. Decoders generate. Put them back together and you get a model built for input → output tasks: translate, summarize, rewrite, transcribe. (Learn, Python, ~45 min)
09. [Vision Transformers (ViT)](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F09-vision-transformers): An image is a grid of patches. A sentence is a grid of tokens. The same transformer eats both. Before 2020, computer vision meant convolutions. (Build, Python, ~45 min)
10. [Audio Transformers — Whisper Architecture](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F10-audio-transformers-whisper): Audio is an image of frequency over time. Whisper is a ViT that eats mel spectrograms and speaks back. Before Whisper (OpenAI, Radford et al. (Learn, Python, ~45 min)
11. [Mixture of Experts (MoE)](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F11-mixture-of-experts): A dense 70B transformer activates every parameter for every token. A 671B MoE activates only 37B per token and beats it on every benchmark. Sparsity is the most important scaling idea of the decade. (Build, Python, ~45 min)
12. [KV Cache, Flash Attention & Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F12-kv-cache-flash-attention): Training is parallel and FLOP-bound. Inference is serial and memory-bound. Different bottleneck, different tricks. A naive autoregressive decoder does O(N²) work to generate N tokens: at each step… (Build, Python, ~75 min)
13. [Scaling Laws](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F13-scaling-laws): The 2020 Kaplan paper said: bigger model, lower loss. The 2022 Hoffmann paper said: you were under-training. Compute goes into two buckets — parameters and tokens — and the split is not obvious. (Learn, Python, ~45 min)
14. [Build a Transformer from Scratch — The Capstone](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F14-build-a-transformer-capstone): Thirteen lessons. One model. No shortcuts. You've read every paper. You've implemented attention, multi-head splits, positional encodings, encoder and decoder blocks, BERT and GPT losses, MoE, KV… (Build, Python, ~120 min)
15. [Attention Variants — Sliding Window, Sparse, Differential](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F15-attention-variants): Full attention is a circle. Every token sees every token, and memory pays the price. Four variants bend the shape of the circle and recover half the cost. (Build, Python, ~60 min)
16. [Speculative Decoding — Draft, Verify, Repeat](https://aiengineeringfromscratch.com/lesson?path=phases%2F07-transformers-deep-dive%2F16-speculative-decoding): Autoregressive decoding is serial. Each token waits for the previous one. Speculative decoding breaks the chain: a cheap model drafts N tokens, the expensive model verifies all N in one forward pass. (Build, Python, ~60 min)

## Start

Run this command from the repository root:

```bash
python3 phases/07-transformers-deep-dive/01-why-transformers/code/main.py
```

## Glossary terms in this phase

- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Continuous Batching](https://aiengineeringfromscratch.com/glossary/continuous-batching)
- [Decoder](https://aiengineeringfromscratch.com/glossary#decoder)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Encoder](https://aiengineeringfromscratch.com/glossary/encoder)
- [Expert Parallelism](https://aiengineeringfromscratch.com/glossary/expert-parallelism)
- [FlashAttention](https://aiengineeringfromscratch.com/glossary/flashattention)
- [GPT](https://aiengineeringfromscratch.com/glossary#gpt)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [MoE (Mixture of Experts)](https://aiengineeringfromscratch.com/glossary/moe-mixture-of-experts)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Self-Attention](https://aiengineeringfromscratch.com/glossary/self-attention)
- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Speculative Decoding](https://aiengineeringfromscratch.com/glossary/speculative-decoding)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Vision Transformer (ViT)](https://aiengineeringfromscratch.com/glossary/vision-transformer-vit)
- [Weight](https://aiengineeringfromscratch.com/glossary/weight)

## Frequently asked questions

### How many lessons are in Phase 07: Transformers Deep Dive?

Phase 07 has 16 lessons: 12 Build lessons and 4 Learn lessons. The lesson code uses Python.

### What should I know before I start Phase 07?

The phase guide gives these prerequisites: Phase 3 Deep Learning Core, Phase 5 Lesson 09 on sequence-to-sequence models, and Phase 5 Lesson 10 on attention. In the course roadmap, this phase builds on Phase 05: NLP: Foundations to Advanced.

### Is Phase 07 free?

Yes. All 16 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 07 take?

The time estimates of all 16 lessons add up to about 17 hours.

### What comes after Phase 07?

Phase 08: Generative AI and Phase 10: LLMs from Scratch build on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
