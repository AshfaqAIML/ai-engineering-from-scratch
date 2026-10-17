# Learn Multimodal AI from Scratch: 25 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/multimodal-ai

Models that see, hear, read, and reason across modalities.

## Lessons in Phase 12: Multimodal AI

01. [Vision Transformers and the Patch-Token Primitive](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F01-vision-transformer-patch-tokens): Before anything multimodal, an image has to become a sequence of tokens a transformer can eat. The 2020 ViT paper answered this with 16x16 pixel patches, a linear projection, and a position embedding. (Learn, Python, ~120 min)
02. [CLIP and Contrastive Vision-Language Pretraining](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F02-clip-contrastive-pretraining): OpenAI's CLIP (2021) proved a single idea big enough to power the next five years: align an image encoder and a text encoder in the same vector space using only noisy web image-caption pairs and a… (Build, Python, ~180 min)
03. [From CLIP to BLIP-2 — Q-Former as Modality Bridge](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F03-blip2-qformer-bridge): CLIP aligns image and text but cannot generate captions, answer questions, or hold a conversation. BLIP-2 (Salesforce, 2023) solved that with a small trainable bridge: 32 learnable query vectors… (Build, Python, ~180 min)
04. [Flamingo and Gated Cross-Attention for Few-Shot VLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F04-flamingo-gated-cross-attention): DeepMind's Flamingo (2022) did two things before anyone else. It showed a single model could process arbitrarily interleaved sequences of images, videos, and text. (Learn, Python, ~120 min)
05. [LLaVA and Visual Instruction Tuning](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F05-llava-visual-instruction-tuning): LLaVA (April 2023) is the most copied multimodal architecture on the planet. It replaced BLIP-2's Q-Former with a 2-layer MLP, replaced Flamingo's gated cross-attention with naive token… (Build, Python, ~180 min)
06. [Any-Resolution Vision: Patch-n'-Pack and NaFlex](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F06-any-resolution-patch-n-pack): Real images are not 224x224 squares. A receipt is 9:16, a chart is 16:9, a medical scan might be 4096x4096, a mobile screenshot is 9:19.5. (Build, Python, ~120 min)
07. [Open-Weight VLM Recipes: What Actually Matters](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F07-open-weight-vlm-recipes): The 2024-2026 open-weight VLM literature is a forest of ablation tables. Apple's MM1 tested 13 combinations of image encoder, connector, and data mix. (Learn, Python, ~180 min)
08. [LLaVA-OneVision: Single-Image, Multi-Image, Video in One Model](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F08-llava-onevision-single-multi-video): Before LLaVA-OneVision (Li et al., August 2024) the open-VLM world had separate lineages: LLaVA-1.5 for single images, multi-image models like Mantis and VILA, video models like Video-LLaVA and… (Build, Python, ~180 min)
09. [Qwen-VL Family and Dynamic-FPS Video](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F09-qwen-vl-family-dynamic-fps): The Qwen-VL family — Qwen-VL (2023), Qwen2-VL (2024), Qwen2.5-VL (2025), Qwen3-VL (2025) — is the most influential open vision-language model lineage in 2026. (Learn, Python, ~120 min)
10. [InternVL3: Native Multimodal Pretraining](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F10-internvl3-native-multimodal): Every open VLM before InternVL3 followed the same three-step recipe: take a text LLM trained on trillions of text tokens, bolt on a vision encoder, then fine-tune the seams. (Learn, Python, ~120 min)
11. [Chameleon and Early-Fusion Token-Only Multimodal Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F11-chameleon-early-fusion-tokens): Every VLM we have seen so far keeps images and text separate. Visual tokens come from a vision encoder, flow into a projector, then meet text inside the LLM. (Build, Python, ~180 min)
12. [Emu3: Next-Token Prediction for Image and Video Generation](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F12-emu3-next-token-for-generation): BAAI's Emu3 (Wang et al., September 2024) is the 2024 result that should have ended the diffusion-versus-autoregressive debate. (Learn, Python, ~120 min)
13. [Transfusion: Autoregressive Text + Diffusion Image in One Transformer](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F13-transfusion-autoregressive-diffusion): Chameleon and Emu3 bet everything on discrete tokens. They work, but the quantization bottleneck is visible — the image quality plateaus below continuous-space diffusion models. (Build, Python, ~180 min)
14. [Show-o and Discrete-Diffusion Unified Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F14-show-o-discrete-diffusion-unified): Transfusion mixes continuous and discrete representations. Show-o (Xie et al., August 2024) goes the other way: text tokens use causal next-token prediction, image tokens use masked discrete… (Learn, Python, ~120 min)
15. [Janus-Pro: Decoupled Encoders for Unified Multimodal Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F15-janus-pro-decoupled-encoders): Unified multimodal models have an unavoidable tension. Understanding wants semantic features — SigLIP or DINOv2 output vectors rich with concept-level information. (Build, Python, ~120 min)
16. [MIO and Any-to-Any Streaming Multimodal Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F16-mio-any-to-any-streaming): GPT-4o ships a product most open models cannot replicate: an agent that hears voice, sees video, and speaks back in real time. (Learn, Python, ~120 min)
17. [Video-Language Models: Temporal Tokens and Grounding](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F17-video-language-temporal-grounding): Video is not a stack of photos. A 5-second clip has causal ordering, action verbs, and event timing that an image model cannot represent. (Build, Python, ~180 min)
18. [Long-Video Understanding at Million-Token Context](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F18-long-video-million-token): A 1-hour 4K video at 24 FPS, patched and embedded, produces on the order of 60 million tokens. A 2-hour podcast episode transcribed is 30,000 tokens. (Build, Python, ~180 min)
19. [Audio-Language Models: the Whisper to Audio Flamingo 3 Arc](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F19-audio-language-whisper-to-af3): Whisper (Radford et al., December 2022) settled speech recognition — 680k hours of weakly-supervised multilingual speech, a simple encoder-decoder transformer, a benchmark that made every subsequent… (Build, Python, ~180 min)
20. [Omni Models: Qwen2.5-Omni and the Thinker-Talker Split](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F20-omni-models-thinker-talker): GPT-4o's product demo in May 2024 was disruptive not because of the underlying model but because of the product shape — a voice interface where you talk, the model sees what the camera sees, and it… (Build, Python, ~180 min)
21. [Embodied VLAs: RT-2, OpenVLA, π0, GR00T](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F21-embodied-vlas-openvla-pi0-groot): The first time a model read a recipe off a website and executed it in a kitchen robot was RT-2 (Google DeepMind, July 2023). (Learn, Python, ~180 min)
22. [Document and Diagram Understanding](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F22-document-diagram-understanding): Documents are not photos. A PDF, scientific paper, invoice, or handwritten form has layout, tables, diagrams, footnotes, headers, and semantic structure that plain image understanding cannot capture. (Build, Python, ~180 min)
23. [ColPali and Vision-Native Document RAG](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F23-colpali-vision-native-rag): Traditional RAG parses PDFs into text, splits into chunks, embeds chunks, stores vectors. Every step loses signal: OCR drops chart data, chunking breaks table rows, text embeddings ignore figures. (Build, Python, ~180 min)
24. [Multimodal RAG and Cross-Modal Retrieval](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F24-multimodal-rag-cross-modal): Vision-native document RAG is one slice. Production multimodal RAG goes wider — retrieving across text, images, audio, and video for workflows like trip planning ("find me a quiet vegan brunch with… (Build, Python, ~180 min)
25. [Multimodal Agents and Computer-Use (Capstone)](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F25-multimodal-agents-computer-use): The 2026 frontier product is a multimodal agent that reads screenshots, clicks buttons, navigates web UIs, fills forms, and completes workflows end-to-end. (Build, Python, ~240 min)

## Start

Run this command from the repository root:

```bash
python3 phases/12-multimodal-ai/01-vision-transformer-patch-tokens/code/main.py
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Alignment](https://aiengineeringfromscratch.com/glossary/alignment)
- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Autoregressive](https://aiengineeringfromscratch.com/glossary/autoregressive)
- [Checkpoint](https://aiengineeringfromscratch.com/glossary/checkpoint)
- [Cross-Attention](https://aiengineeringfromscratch.com/glossary/cross-attention)
- [Dropout](https://aiengineeringfromscratch.com/glossary#dropout)
- [Early Fusion](https://aiengineeringfromscratch.com/glossary/early-fusion)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Encoder](https://aiengineeringfromscratch.com/glossary/encoder)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Feature](https://aiengineeringfromscratch.com/glossary/feature)
- [Few-Shot](https://aiengineeringfromscratch.com/glossary/few-shot)
- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [Modality](https://aiengineeringfromscratch.com/glossary/modality)
- [Multimodal Model](https://aiengineeringfromscratch.com/glossary/multimodal-model)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Patch](https://aiengineeringfromscratch.com/glossary/patch)
- [Patch Embedding](https://aiengineeringfromscratch.com/glossary/patch-embedding)
- [RAG (Retrieval-Augmented Generation)](https://aiengineeringfromscratch.com/glossary/rag-retrieval-augmented-generation)
- [Shared Embedding Space](https://aiengineeringfromscratch.com/glossary/shared-embedding-space)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Temperature](https://aiengineeringfromscratch.com/glossary/temperature)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Token Budget](https://aiengineeringfromscratch.com/glossary/token-budget)
- [Tokenization](https://aiengineeringfromscratch.com/glossary/tokenization)
- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Vision Transformer (ViT)](https://aiengineeringfromscratch.com/glossary/vision-transformer-vit)
- [Vision-Language Model (VLM)](https://aiengineeringfromscratch.com/glossary/vision-language-model-vlm)
- [Vocabulary](https://aiengineeringfromscratch.com/glossary/vocabulary)
- [Zero-Shot](https://aiengineeringfromscratch.com/glossary#zero-shot)

## Frequently asked questions

### How many lessons are in Phase 12: Multimodal AI?

Phase 12 has 25 lessons: 16 Build lessons and 9 Learn lessons. The lesson code uses Python.

### What should I know before I start Phase 12?

The phase guide gives these prerequisites: Phase 7 Transformers and Phase 4 Computer Vision. In the course roadmap, this phase builds on Phase 10: LLMs from Scratch.

### Is Phase 12 free?

Yes. All 25 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 12 take?

The time estimates of all 25 lessons add up to about 67 hours.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
