# Learn Generative AI from Scratch: 15 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/generative-ai

Create images, video, audio, 3D, and more.

## Lessons in Phase 08: Generative AI

01. [Generative Models — Taxonomy & History](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F01-generative-models-taxonomy-history): Every image model, text model, video model, and 3D model fits in one of five buckets. Pick the wrong bucket and you will fight the math for weeks. (Learn, Python, ~45 min)
02. [Autoencoders & Variational Autoencoders (VAE)](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F02-autoencoders-vae): A plain autoencoder compresses then reconstructs. It memorizes. It does not generate. Add one trick — force the code to look Gaussian — and you get a sampler. (Build, Python, ~75 min)
03. [GANs — Generator vs Discriminator](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F03-gans-generator-discriminator): Goodfellow's trick in 2014 was to skip density entirely. Two networks. One makes fakes. One catches them. They fight until the fakes are indistinguishable from real. It shouldn't work. (Build, Python, ~75 min)
04. [Conditional GANs & Pix2Pix](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F04-conditional-gans-pix2pix): The first big unlock of 2014-2017 was controlling what a GAN makes. Attach a label, or an image, or a sentence. Pix2Pix did the image version and it still beats every generic text-to-image model on… (Build, Python, ~75 min)
05. [StyleGAN](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F05-stylegan): Most generators stir z into every layer at the same time. StyleGAN split it apart: first map z to an intermediate w, then inject w at every resolution level through AdaIN. (Build, Python, ~45 min)
06. [Diffusion Models — DDPM from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F06-diffusion-ddpm-from-scratch): Ho, Jain, Abbeel (2020) gave the field a recipe it could not quit. Destroy the data with noise over a thousand small steps. Train one neural net to predict the noise. Reverse the process at inference. (Build, Python, ~75 min)
07. [Latent Diffusion & Stable Diffusion](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F07-latent-diffusion-stable-diffusion): Pixel-space diffusion on 512×512 images is a computational war crime. Rombach et al. (2022) noticed that you do not need all 786k dimensions to generate an image — you need enough to capture… (Build, Python, ~75 min)
08. [ControlNet, LoRA & Conditioning](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F08-controlnet-lora-conditioning): Text alone is a clumsy control signal. ControlNet lets you clone a pretrained diffusion model and steer it with a depth map, pose skeleton, scribble, or edge image. (Build, Python, ~75 min)
09. [Inpainting, Outpainting & Image Editing](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F09-inpainting-outpainting-editing): Text-to-image makes new things. Inpainting fixes old ones. In production, 70% of billable image work is editing — swap a background, remove a logo, extend the canvas, regenerate a hand. (Build, Python, ~75 min)
10. [Video Generation](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F10-video-generation): An image is a 2-D tensor. A video is a 3-D one. The theory is the same; the compute is 10-100x harder. OpenAI's Sora (Feb 2024) proved it was possible. (Build, Python, ~45 min)
11. [Audio Generation](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F11-audio-generation): Audio is a 1-D signal at 16-48 kHz. A five-second clip is 80-240k samples. No transformer attends to that sequence directly. (Build, Python, ~45 min)
12. [3D Generation](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F12-3d-generation): 3D is the modality where 2D-to-3D leverage is strongest. The 2023 breakthrough was 3D Gaussian Splatting. The 2024-2026 generative push layers multi-view diffusion + 3D reconstruction on top to… (Build, Python, ~45 min)
13. [Flow Matching & Rectified Flows](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F13-flow-matching-rectified-flows): Diffusion models take 20-50 sampling steps because they walk a curved path from noise to data. Flow matching (Lipman et al., 2023) and rectified flow (Liu et al., 2022) trained straight paths. (Build, Python, ~45 min)
14. [Evaluation — FID, CLIP Score, Human Preference](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F14-evaluation-fid-clip-score): Every generative model leaderboard cites FID, CLIP score, and a win rate from a human-preference arena. Each number has a failure mode a determined researcher can game. (Build, Python, ~45 min)
19. [Visual Autoregressive Modeling (VAR): Next-Scale Prediction](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F19-visual-autoregressive-var): Diffusion models sample iteratively in time (denoising steps). VAR samples iteratively in scale — it predicts a 1x1 token, then 2x2, then 4x4, up to the final resolution, each scale conditioning on… (Build, Python, ~90 min)

## Start

Run this command from the repository root:

```bash
python3 phases/08-generative-ai/01-generative-models-taxonomy-history/code/main.py
```

## Glossary terms in this phase

- [Audio Token](https://aiengineeringfromscratch.com/glossary/audio-token)
- [Autoregressive](https://aiengineeringfromscratch.com/glossary/autoregressive)
- [Decoder](https://aiengineeringfromscratch.com/glossary#decoder)
- [Diffusion Model](https://aiengineeringfromscratch.com/glossary/diffusion-model)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Encoder](https://aiengineeringfromscratch.com/glossary/encoder)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [GAN (Generative Adversarial Network)](https://aiengineeringfromscratch.com/glossary#gan-generative-adversarial-network)
- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [Gradient Descent](https://aiengineeringfromscratch.com/glossary#gradient-descent)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [LoRA (Low-Rank Adaptation)](https://aiengineeringfromscratch.com/glossary/lora-low-rank-adaptation)
- [Normalization](https://aiengineeringfromscratch.com/glossary/normalization)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [VAE (Variational Autoencoder)](https://aiengineeringfromscratch.com/glossary/vae-variational-autoencoder)

## Frequently asked questions

### How many lessons are in Phase 08: Generative AI?

Phase 08 has 15 lessons: 14 Build lessons and 1 Learn lesson. The lesson code uses Python.

### What should I know before I start Phase 08?

The phase guide gives these prerequisites: Phase 2 ML Fundamentals, Phase 3 Deep Learning Core, and Phase 7 Lesson 14, Build a Transformer from Scratch. In the course roadmap, this phase builds on Phase 07: Transformers Deep Dive.

### Is Phase 08 free?

Yes. All 15 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 08 take?

The time estimates of all 15 lessons add up to about 16 hours.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
