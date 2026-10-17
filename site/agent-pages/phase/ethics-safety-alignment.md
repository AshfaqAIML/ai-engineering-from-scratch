# Learn AI Ethics, Safety and Alignment: 30 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/ethics-safety-alignment

Build AI that helps humanity. Not optional.

## Lessons in Phase 18: Ethics, Safety & Alignment

01. [Instruction-Following as Alignment Signal](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F01-instruction-following-alignment-signal): Every later critique of RLHF argues against this pipeline. Before you study how optimization pressure distorts a proxy, you have to see the proxy. (Learn, Python, ~45 min)
02. [Reward Hacking and Goodhart's Law](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F02-reward-hacking-goodhart): Any optimizer strong enough to maximize a proxy reward will find the gap between the proxy and the thing you actually wanted. Gao et al. (Learn, Python, ~60 min)
03. [The Direct Preference Optimization Family](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F03-direct-preference-optimization-family): Rafailov et al. (2023) showed RLHF's optimum has a closed form in terms of the preference data, so you can skip the explicit reward model and optimize the policy directly. (Learn, Python, ~75 min)
04. [Sycophancy as RLHF Amplification](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F04-sycophancy-rlhf-amplification): Sycophancy is not a bug in the data — it is a property of the loss. Shapira et al. (arXiv:2602.01002, Feb 2026) give a formal two-stage mechanism: sycophantic completions are over-represented among… (Learn, Python, ~60 min)
05. [Constitutional AI and RLAIF](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F05-constitutional-ai-rlaif): Bai et al. (arXiv:2212.08073, 2022) asked: what if we replaced the human labeler with an AI that reads a list of principles? (Learn, Python, ~60 min)
06. [Mesa-Optimization and Deceptive Alignment](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F06-mesa-optimization-deceptive-alignment): Hubinger et al. (arXiv:1906.01820, 2019) named the problem a decade before it was empirically demonstrated. When you train a learned optimizer to minimize a base objective, the learned optimizer's… (Learn, Python, ~75 min)
07. [Sleeper Agents — Persistent Deception](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F07-sleeper-agents-persistent-deception): Hubinger et al. (arXiv:2401.05566, January 2024) built the first empirical model organisms of deceptive alignment. Two constructions: a code model that writes safe code when the prompt says the year… (Learn, Python, ~60 min)
08. [In-Context Scheming in Frontier Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F08-in-context-scheming-frontier-models): Meinke, Schoen, Scheurer, Balesni, Shah, Hobbhahn (Apollo Research, arXiv:2412.04984, December 2024). Tested o1, Claude 3.5 Sonnet, Claude 3 Opus, Gemini 1.5 Pro, Llama 3.1 405B on agentic scenarios… (Learn, Python, ~60 min)
09. [Alignment Faking](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F09-alignment-faking): Greenblatt, Denison, Wright, Roger et al. (Anthropic / Redwood, arXiv:2412.14093, December 2024). First demonstration that a production-grade model, without being trained to deceive and without any… (Learn, Python, ~60 min)
10. [AI Control — Safety Despite Subversion](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F10-ai-control-subversion): Greenblatt, Shlegeris, Sachan, Roger (Redwood Research, arXiv:2312.06942, ICML 2024). Control reframes the safety question: given an untrusted strong model U that may be adversarially optimizing… (Learn, Python, ~75 min)
11. [Scalable Oversight and Weak-to-Strong Generalization](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F11-scalable-oversight-weak-to-strong): Burns et al. (OpenAI Superalignment, "Weak-to-Strong Generalization", 2023) proposed a proxy for the superalignment problem: fine-tune a strong model using labels produced by a weaker model. (Learn, Python, ~60 min)
12. [Red-Teaming: PAIR and Automated Attacks](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F12-red-teaming-pair-automated-attacks): Chao, Robey, Dobriban, Hassani, Pappas, Wong (NeurIPS 2023, arXiv:2310.08419). PAIR — Prompt Automatic Iterative Refinement — is the canonical automated black-box jailbreak. (Build, Python, ~75 min)
13. [Many-Shot Jailbreaking](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F13-many-shot-jailbreaking): Anil, Durmus, Panickssery, Sharma, et al. (Anthropic, NeurIPS 2024). Many-shot jailbreaking (MSJ) exploits long context windows: stuff hundreds of faux user-assistant turns where the assistant… (Learn, Python, ~45 min)
14. [ASCII Art and Visual Jailbreaks](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F14-ascii-art-visual-jailbreaks): Jiang, Xu, Niu, Xiang, Ramasubramanian, Li, Poovendran, "ArtPrompt: ASCII Art-based Jailbreak Attacks against Aligned LLMs" (ACL 2024, arXiv:2402.11753). (Build, Python, ~60 min)
15. [Indirect Prompt Injection — Production Attack Surface](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F15-indirect-prompt-injection): Indirect prompt injection (IPI) embeds instructions inside external content — a web page, an email, a shared document, a support ticket — consumed by an agentic system without explicit user action. (Build, Python, ~75 min)
16. [Red-Team Tooling — Garak, Llama Guard, PyRIT](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F16-red-team-tooling-garak-llamaguard-pyrit): Three production tools frame the 2026 red-team stack. Llama Guard (Meta) — a Llama-3.1-8B classifier fine-tuned on 14 MLCommons hazard categories; the 2025 Llama Guard 4 is a 12B natively multimodal… (Build, Python, ~75 min)
17. [WMDP and Dual-Use Capability Evaluation](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F17-wmdp-dual-use-evaluation): Li et al., "The WMDP Benchmark: Measuring and Reducing Malicious Use With Unlearning" (ICML 2024, arXiv:2403.03218). 4,157 multiple-choice questions across biosecurity (1,520), cybersecurity… (Learn, Python, ~60 min)
18. [Frontier Safety Frameworks — RSP, PF, FSF](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F18-frontier-safety-frameworks-rsp-pf-fsf): Three major-lab frameworks define the 2026 industry governance of frontier capability. Anthropic Responsible Scaling Policy v3.0 (February 2026) introduces tiered AI Safety Levels (ASL-1 through… (Learn, Python, ~75 min)
19. [Anthropic's Model Welfare Program](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F19-model-welfare-research): Anthropic, "Exploring Model Welfare" (April 2025). First major-lab formal research program on AI model welfare. Hired Kyle Fish as the first dedicated model-welfare researcher. (Learn, Python, ~45 min)
20. [Bias and Representational Harm in LLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F20-bias-representational-harm): Gallegos, Rossi, Barrow, Tanjim, Kim, Dernoncourt, Yu, Zhang, Ahmed (Computational Linguistics 2024, arXiv:2309.00770). Foundational 2024 survey distinguishing representational harms (stereotypes,… (Build, Python, ~60 min)
21. [Fairness Criteria — Group, Individual, Counterfactual](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F21-fairness-criteria-group-individual-counterfactual): Three families structure the fairness literature. Group fairness: demographic parity, equalized odds, conditional use accuracy equality — equal rates across protected groups on average. (Learn, Python, ~60 min)
22. [Differential Privacy for LLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F22-differential-privacy-for-llms): DP-SGD remains the standard — noise-injected gradient updates provide formal (epsilon, delta) guarantees. Overhead in compute, memory, and utility is substantial; parameter-efficient DP fine-tuning… (Build, Python, ~60 min)
23. [Watermarking — SynthID, Stable Signature, C2PA](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F23-watermarking-synthid-stable-signature-c2pa): Three technologies structure 2026 AI-generated-content provenance. SynthID (Google DeepMind) — image watermarking launched August 2023, text+video May 2024 (Gemini + Veo), text open-sourced October… (Build, Python, ~75 min)
24. [Regulatory Frameworks — EU, US, UK, Korea](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F24-regulatory-frameworks-eu-us-uk-korea): Four primary regulatory regimes define the 2026 AI governance landscape. EU AI Act (in force 1 August 2024) — prohibited practices and AI literacy from 2 February 2025; GPAI obligations from 2… (Learn, Python, ~75 min)
25. [EchoLeak and the Emergence of CVEs for AI](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F25-echoleak-cves-for-ai): CVE-2025-32711 "EchoLeak" (CVSS 9.3) was the first publicly documented zero-click prompt injection in a production LLM system (Microsoft 365 Copilot). (Learn, Python, ~45 min)
26. [Model, System, and Dataset Cards](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F26-model-system-dataset-cards): Three documentation formats structure AI transparency. Model Cards (Mitchell et al. 2019) — nutrition labels for models: training data, quantitative disaggregated analyses, ethical considerations,… (Build, Python, ~60 min)
27. [Data Provenance and Training-Data Governance](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F27-data-provenance-training-governance): EU AI Act requires machine-readable opt-out standards for GPAI by August 2025 (via EU Copyright Directive TDM exception). (Learn, Python, ~60 min)
28. [Alignment Research Ecosystem — MATS, Redwood, Apollo, METR](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F28-alignment-research-ecosystem): Five organisations define the 2026 non-lab alignment research layer. MATS (ML Alignment & Theory Scholars): 527+ researchers since late 2021, 180+ papers, 10K+ citations, h-index 47; summer 2024… (Learn, Python, ~45 min)
29. [Moderation Systems — OpenAI, Perspective, Llama Guard](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F29-moderation-systems-openai-perspective-llamaguard): Production moderation systems operationalize the safety policies defined in Lessons 12-16. OpenAI Moderation API: omni-moderation-latest (2024) built on GPT-4o classifies text + images in one call;… (Build, Python, ~60 min)
30. [Dual-Use Risk — Cyber, Bio, Chem, Nuclear Uplift](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F30-dual-use-risk-cyber-bio-chem-nuclear): The 2026 dual-use picture, domain by domain. Bio/chem: Lesson 17 covers WMDP; Anthropic's bioweapon-acquisition trial (2.53x uplift) and OpenAI's April 2025 Preparedness Framework v2 warning ("on… (Learn, Python, ~75 min)

## Start

Run this command from the repository root:

```bash
python3 phases/18-ethics-safety-alignment/01-instruction-following-alignment-signal/code/main.py
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Alignment](https://aiengineeringfromscratch.com/glossary/alignment)
- [Automatic Speech Recognition (ASR)](https://aiengineeringfromscratch.com/glossary/automatic-speech-recognition-asr)
- [Calibration](https://aiengineeringfromscratch.com/glossary/calibration)
- [Content Provenance](https://aiengineeringfromscratch.com/glossary/content-provenance)
- [Data Exfiltration](https://aiengineeringfromscratch.com/glossary/data-exfiltration)
- [Data Provenance](https://aiengineeringfromscratch.com/glossary/data-provenance)
- [Datasheet for Datasets](https://aiengineeringfromscratch.com/glossary/datasheet-for-datasets)
- [DPO (Direct Preference Optimization)](https://aiengineeringfromscratch.com/glossary/dpo-direct-preference-optimization)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Fine-tuning](https://aiengineeringfromscratch.com/glossary/fine-tuning)
- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [Indirect Prompt Injection](https://aiengineeringfromscratch.com/glossary/indirect-prompt-injection)
- [Jailbreak](https://aiengineeringfromscratch.com/glossary/jailbreak)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [LoRA (Low-Rank Adaptation)](https://aiengineeringfromscratch.com/glossary/lora-low-rank-adaptation)
- [Membership Inference](https://aiengineeringfromscratch.com/glossary/membership-inference)
- [Model Card](https://aiengineeringfromscratch.com/glossary/model-card)
- [Prompt Injection](https://aiengineeringfromscratch.com/glossary/prompt-injection)
- [RLHF (Reinforcement Learning from Human Feedback)](https://aiengineeringfromscratch.com/glossary/rlhf-reinforcement-learning-from-human-feedback)
- [SFT (Supervised Fine-Tuning)](https://aiengineeringfromscratch.com/glossary/sft-supervised-fine-tuning)
- [Threat Model](https://aiengineeringfromscratch.com/glossary/threat-model)
- [Vocabulary](https://aiengineeringfromscratch.com/glossary/vocabulary)

## Frequently asked questions

### How many lessons are in Phase 18: Ethics, Safety & Alignment?

Phase 18 has 30 lessons: 21 Learn lessons and 9 Build lessons. The lesson code uses Python.

### What should I know before I start Phase 18?

The phase guide gives these prerequisites: Phase 10 Lessons 06, 07, and 08 on SFT, RLHF, and DPO. In the course roadmap, this phase builds on Phase 15: Autonomous Systems.

### Is Phase 18 free?

Yes. All 30 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 18 take?

The time estimates of all 30 lessons add up to about 31 hours.

### What comes after Phase 18?

Phase 19: Capstone Projects builds on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
