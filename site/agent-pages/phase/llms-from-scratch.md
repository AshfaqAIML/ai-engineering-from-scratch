# Build an LLM from Scratch: 24 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/llms-from-scratch

Build, train, and understand large language models.

## Lessons in Phase 10: LLMs from Scratch

01. [Tokenizers: BPE, WordPiece, SentencePiece](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F01-tokenizers): Your LLM does not read English. It reads integers. The tokenizer decides whether those integers carry meaning or waste it. (Build, Python, Rust, ~90 min)
02. [Building a Tokenizer from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F02-building-a-tokenizer): Lesson 01 gave you a toy. This lesson gives you a weapon. Build a production-grade BPE tokenizer that handles Unicode, whitespace normalization, and special tokens. (Build, Python, ~90 min)
03. [Data Pipelines for Pre-Training](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F03-data-pipelines): The model is a mirror. It reflects whatever data you feed it. Feed it garbage, it reflects garbage with perfect fluency. (Build, Python, ~90 min)
04. [Pre-Training a Mini GPT (124M Parameters)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F04-pre-training-mini-gpt): GPT-2 Small has 124 million parameters. That's 12 transformer layers, 12 attention heads, and 768-dimensional embeddings. You can train it from scratch on a single GPU in a few hours. (Build, Python, ~120 min)
05. [Scaling: Distributed Training, FSDP, DeepSpeed](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F05-scaling-distributed): Your 124M model trained on one GPU. Now try 7 billion parameters. The model doesn't fit in memory. The data takes weeks on a single machine. Distributed training isn't optional at scale. (Build, Python, ~120 min)
06. [Instruction Tuning (SFT)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F06-instruction-tuning-sft): A base model predicts the next token. That's it. It doesn't follow instructions, answer questions, or refuse harmful requests. SFT is the bridge between a token predictor and a useful assistant. (Build, Python, ~90 min)
07. [RLHF: Reward Model + PPO](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F07-rlhf): SFT teaches the model to follow instructions. But it doesn't teach the model which response is BETTER. Two grammatically correct, factually accurate answers can differ enormously in helpfulness. (Build, Python, ~90 min)
08. [DPO: Direct Preference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F08-dpo): RLHF works. It also requires training three models (SFT, reward model, policy), managing PPO's instability, and tuning a KL penalty. DPO asks: what if you could skip all of that? (Build, Python, ~90 min)
09. [Constitutional AI and Self-Improvement](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F09-constitutional-ai-self-improvement): RLHF needs humans in the loop. Constitutional AI replaces most of them with the model itself. Write a list of principles, have the model critique its own outputs against those principles, and train… (Build, Python, ~45 min)
10. [Evaluation: Benchmarks, Evals, LM Harness](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F10-evaluation): Goodhart's Law: when a measure becomes a target, it ceases to be a good measure. Every frontier lab games benchmarks. MMLU scores go up while models still can't reliably count the number of R's in… (Build, Python, ~90 min)
11. [Quantization: Making Models Fit](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F11-quantization): A 70B model in FP16 needs 140GB. Two A100s just for weights. Quantize to FP8: one 80GB GPU. INT4: a MacBook. Implement symmetric and asymmetric quantization from FP16 to INT8 and INT4, including… (Build, Python, ~120 min)
12. [Inference Optimization](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F12-inference-optimization): Two phases define LLM inference. Prefill processes your prompt in parallel -- compute-bound. Decode generates tokens one at a time -- memory-bound. Every optimization targets one or both. (Build, Python, ~120 min)
13. [Building a Complete LLM Pipeline](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F13-building-complete-llm-pipeline): Everything from Lessons 01 to 12 is one stage of one pipeline. This lesson is the scaffold that turns those stages into a single end-to-end run: tokenize, pre-train, scale, SFT, align, evaluate,… (Build, Python, ~120 min)
14. [Open Models: Architecture Walkthroughs](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F14-open-models-architecture-walkthroughs): You built a GPT-2 Small from scratch in Lesson 04. Frontier open models in 2026 are the same family with five or six concrete changes. RMSNorm instead of LayerNorm. SwiGLU instead of GELU. (Learn, Python, ~45 min)
15. [Speculative Decoding and EAGLE-3](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F15-speculative-decoding-eagle3): Phase 7 · Lesson 16 proved the math: the Leviathan rejection rule preserves the verifier's distribution exactly. This lesson is the training-stack view of 2026 production speculative decoding. (Build, Python, ~75 min)
16. [Differential Attention (V2)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F16-differential-attention-v2): Softmax attention spreads a small amount of probability over every non-matching token. Over 100k tokens that noise adds up and drowns the signal. (Build, Python, ~60 min)
17. [Native Sparse Attention (DeepSeek NSA)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F17-native-sparse-attention): At 64k tokens, attention eats 70-80% of decode latency. Every open-model lab has a plan to fix it. DeepSeek's NSA (ACL 2025 best paper) is the one that stuck: three parallel attention branches —… (Build, Python, ~60 min)
18. [Multi-Token Prediction (MTP)](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F18-multi-token-prediction): Every autoregressive LLM from GPT-2 to Llama 3 trains on one loss per position: predict the next token. DeepSeek-V3 added a second loss per position: predict the token after that. (Build, Python, ~60 min)
19. [DualPipe Parallelism](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F19-dualpipe-parallelism): DeepSeek-V3 was trained on 2,048 H800 GPUs with MoE experts scattered across nodes. Cross-node expert all-to-all communication cost 1 GPU-hour of comm for every 1 GPU-hour of compute. (Learn, Python, ~60 min)
20. [DeepSeek-V3 Architecture Walkthrough](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F20-deepseek-v3-walkthrough): Phase 10 · Lesson 14 named the six architectural knobs every open model turns. DeepSeek-V3 (December 2024, 671B parameters total, 37B active) turns all six and adds four more: Multi-Head Latent… (Learn, Python, ~75 min)
21. [Jamba — Hybrid SSM-Transformer](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F21-jamba-hybrid-ssm-transformer): State space models (SSMs) and transformers want different things. Transformers buy quality via attention at quadratic cost. (Learn, Python, ~60 min)
22. [Async and Hogwild! Inference](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F22-async-hogwild-inference): Speculative decoding (Phase 10 · 15) parallelizes tokens within one sequence. Multi-agent frameworks parallelize across whole sequences but force explicit coordination (voting, sub-task splitting). (Build, Python, ~60 min)
25. [Speculative Decoding and EAGLE](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F25-speculative-decoding): A frontier LLM generating one token requires a full forward pass over billions of parameters. That forward pass is massively over-provisioned: most of the time a much smaller model can guess the… (Build, Python, ~75 min)
34. [Gradient Checkpointing and Activation Recomputation](https://aiengineeringfromscratch.com/lesson?path=phases%2F10-llms-from-scratch%2F34-gradient-checkpointing): Backprop keeps every intermediate activation. At 70B parameters and 128K context that is 3 TB of activations per rank. Checkpointing trades FLOPs for memory: recompute instead of save. (Build, Python, ~70 min)

## Start

Run this command from the repository root:

```bash
python3 phases/10-llms-from-scratch/01-tokenizers/code/main.py
```

## Glossary terms in this phase

- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Byte Pair Encoding (BPE)](https://aiengineeringfromscratch.com/glossary/byte-pair-encoding-bpe)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Continuous Batching](https://aiengineeringfromscratch.com/glossary/continuous-batching)
- [Cross-Entropy](https://aiengineeringfromscratch.com/glossary/cross-entropy)
- [DPO (Direct Preference Optimization)](https://aiengineeringfromscratch.com/glossary/dpo-direct-preference-optimization)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Feature](https://aiengineeringfromscratch.com/glossary/feature)
- [GPT](https://aiengineeringfromscratch.com/glossary#gpt)
- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [Hyperparameter](https://aiengineeringfromscratch.com/glossary/hyperparameter)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [Mixed Precision](https://aiengineeringfromscratch.com/glossary/mixed-precision)
- [MoE (Mixture of Experts)](https://aiengineeringfromscratch.com/glossary/moe-mixture-of-experts)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Perplexity](https://aiengineeringfromscratch.com/glossary/perplexity)
- [Pipeline Parallelism](https://aiengineeringfromscratch.com/glossary/pipeline-parallelism)
- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Prefix Caching](https://aiengineeringfromscratch.com/glossary/prefix-caching)
- [Quantization](https://aiengineeringfromscratch.com/glossary/quantization)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [RLHF (Reinforcement Learning from Human Feedback)](https://aiengineeringfromscratch.com/glossary/rlhf-reinforcement-learning-from-human-feedback)
- [Rollback](https://aiengineeringfromscratch.com/glossary/rollback)
- [Self-Attention](https://aiengineeringfromscratch.com/glossary/self-attention)
- [SFT (Supervised Fine-Tuning)](https://aiengineeringfromscratch.com/glossary/sft-supervised-fine-tuning)
- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Speculative Decoding](https://aiengineeringfromscratch.com/glossary/speculative-decoding)
- [Tensor](https://aiengineeringfromscratch.com/glossary#tensor)
- [Tensor Parallelism](https://aiengineeringfromscratch.com/glossary/tensor-parallelism)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Vocabulary](https://aiengineeringfromscratch.com/glossary/vocabulary)

## Frequently asked questions

### How many lessons are in Phase 10: LLMs from Scratch?

Phase 10 has 24 lessons: 20 Build lessons and 4 Learn lessons. The lesson code uses Python and Rust.

### What should I know before I start Phase 10?

The phase guide gives these prerequisites: Phase 5 NLP Foundations. Phase 7 Transformers is strongly recommended before the model-building lessons. In the course roadmap, this phase builds on Phase 07: Transformers Deep Dive.

### Is Phase 10 free?

Yes. All 24 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 10 take?

The time estimates of all 24 lessons add up to about 33 hours.

### What comes after Phase 10?

Phase 11: LLM Engineering and Phase 12: Multimodal AI build on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
