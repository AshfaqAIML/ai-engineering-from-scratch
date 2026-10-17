# Learn LLM Serving and AI Infrastructure: 29 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/infrastructure-and-production

Ship AI to the real world. Scale, monitor, optimize.

## Lessons in Phase 17: Infrastructure & Production

01. [Managed LLM Platforms — Bedrock, Vertex AI, Azure OpenAI](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F01-managed-llm-platforms): Three hyperscalers, three distinct strategies. AWS Bedrock is a model marketplace — Claude, Llama, Titan, Stability, Cohere behind one API. (Learn, Python, ~60 min)
02. [Inference Platform Economics — Fireworks, Together, Baseten, Modal, Replicate, Anyscale](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F02-inference-platform-economics): The 2026 inference market is no longer GPU time rental. It bifurcates into custom silicon (Groq, Cerebras, SambaNova), GPU platforms (Baseten, Together, Fireworks, Modal), and API-first marketplaces… (Learn, Python, ~60 min)
03. [GPU Autoscaling on Kubernetes — Karpenter, KAI Scheduler, Gang Scheduling](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F03-gpu-autoscaling-kubernetes): Three layers, not one. Karpenter provisions nodes dynamically (under one minute, 40% faster than Cluster Autoscaler). KAI Scheduler handles gang scheduling, topology awareness, and hierarchical… (Learn, Python, ~75 min)
04. [Serving Engine Internals — PagedAttention, Continuous Batching, Chunked Prefill](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F04-vllm-serving-internals): Modern serving-engine throughput rests on three compounding defaults, not a single trick. PagedAttention is always on. Continuous batching injects new requests into the active batch between decode… (Learn, Python, ~75 min)
05. [EAGLE-3 Speculative Decoding in Production](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F05-eagle3-speculative-decoding): Speculative decoding pairs a fast draft model with the target model. The draft proposes K tokens; the target verifies in a single forward; accepted tokens are free. (Learn, Python, ~60 min)
06. [Prefix-Cache Serving — RadixAttention and KV Reuse](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F06-sglang-radixattention): Treat the KV cache as a first-class, reusable resource stored in a radix tree, and scheduling changes with it: instead of FCFS (first-come, first-served) as vLLM schedules, a cache-aware scheduler… (Learn, Python, ~75 min)
07. [Hardware-Specialized Inference Compilation — FP8 and NVFP4 on Blackwell](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F07-tensorrt-llm-blackwell): Hardware-specialized inference compilation trades portability for throughput, and TensorRT-LLM — NVIDIA-only, tuned for Blackwell — is the clearest example of the trade paying off. (Learn, Python, ~75 min)
08. [Inference Metrics — TTFT, TPOT, ITL, Goodput, P99](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F08-inference-metrics-goodput): Four metrics decide whether an inference deployment is working. TTFT is prefill plus queue plus network. TPOT (equivalently ITL) is the memory-bound decode cost per token. (Learn, Python, ~60 min)
09. [Production Quantization — AWQ, GPTQ, GGUF K-quants, FP8, MXFP4/NVFP4](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F09-production-quantization): Quantization format is not a universal choice — it is a function of hardware, serving engine, and workload. GGUF Q4KM or Q5KM owns CPU and edge, delivered through llama.cpp and Ollama. (Learn, Python, ~75 min)
10. [Cold Start Mitigation for Serverless LLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F10-cold-start-mitigation): A 20 GB model image takes 5-10 minutes (7B) to 20+ minutes (70B) to go from cold to serving. In a true serverless world, that is not a warm-up — it is an outage. (Learn, Python, ~60 min)
11. [Multi-Region LLM Serving and KV Cache Locality](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F11-multi-region-kv-locality): Round-robin load balancing is actively harmful for cached LLM inference. A request that does not land on the node holding its prefix pays full prefill cost — roughly 800 ms at P50 on a long prompt… (Learn, Python, ~60 min)
12. [Edge Inference — Apple Neural Engine, Qualcomm Hexagon, WebGPU/WebLLM, Jetson](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F12-edge-inference): The core edge constraint is memory bandwidth, not compute. Mobile DRAM sits at 50-90 GB/s; datacenter HBM3 clears 2-3 TB/s — a 30-50x gap. Decode is memory-bound so the gap is decisive. (Learn, Python, ~60 min)
13. [LLM Observability Stack Selection](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F13-llm-observability): The 2026 observability market splits into two categories. Development platforms (LangSmith, Langfuse, Comet Opik) bundle monitoring with evals, prompt management, session replays. (Learn, Python, ~60 min)
14. [Prompt Caching and Semantic Caching Economics](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F14-prompt-semantic-caching): Pricing snapshot dated 2026-04. Numeric claims below reflect vendor rate cards captured at this lesson's publication; verify against the linked docs before quoting them downstream. (Learn, Python, ~60 min)
15. [Batch APIs — the 50% Discount as Industry Standard](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F15-batch-apis): Every major provider ships an async batch API with a 50% discount and 24-hour turnaround. OpenAI, Anthropic, Google, and most of the inference platforms (Fireworks batch tier, Together batch)… (Learn, Python, ~45 min)
16. [Model Routing as a Cost-Reduction Primitive](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F16-model-routing): A dynamic broker evaluates every request (task type, token length, embedding similarity, confidence) and sends simple queries to a cheap model, escalating complex ones to a frontier model. (Learn, Python, ~60 min)
17. [Disaggregated Prefill/Decode — NVIDIA Dynamo and llm-d](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F17-disaggregated-prefill-decode): Prefill is compute-bound; decode is memory-bound. Running both on the same GPU wastes one resource. Disaggregation splits them onto separate pools and transfers KV cache between them over NIXL… (Learn, Python, ~75 min)
18. [Production Serving Stack — KV Offloading and Cache-Aware Routing](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F18-vllm-production-stack-lmcache): A production serving stack wires router, engines, and observability into one Kubernetes deployment — and treats KV cache as a resource that can leave the GPU. (Learn, Python, ~60 min)
19. [AI Gateways — LiteLLM, Portkey, Kong AI Gateway, Bifrost](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F19-ai-gateways): A gateway sits between your apps and model providers. Core features are provider routing, fallback, retries, rate limiting, secret references, observability, guardrails. (Learn, Python, ~60 min)
20. [Shadow Traffic, Canary Rollout, and Progressive Deployment for LLMs](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F20-shadow-canary-progressive): LLM rollouts combine the hardest parts of software deployment: no unit tests, diffuse failure modes, delayed signals. The sequence is (1) shadow mode — duplicate prod requests to candidate model,… (Learn, Python, ~60 min)
21. [A/B Testing LLM Features — GrowthBook, Statsig, and the Vibes Problem](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F21-ab-testing-llm-features): Traditional A/B testing was not built for non-deterministic LLMs. The critical distinction: evals answer "can the model do the job?" A/B tests answer "do users care?" Both are required; shipping on… (Learn, Python, ~60 min)
22. [Load Testing LLM APIs — Why k6 and Locust Lie](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F22-load-testing-llm-apis): Traditional load testers were not designed for streaming responses, variable output lengths, token-level metrics, or GPU saturation. Two traps bite most teams. (Build, Python, ~75 min)
23. [SRE for AI — Multi-Agent Incident Response, Runbooks, Predictive Detection](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F23-sre-for-ai): AI SRE uses LLMs grounded in infrastructure data (logs, runbooks, service topology) via RAG to automate investigation, documentation, and coordination phases. (Learn, Python, ~60 min)
24. [Chaos Engineering for LLM Production](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F24-chaos-engineering-llm): Chaos engineering for LLMs is its own discipline in 2026. Prerequisites before running experiments in production: defined SLI/SLO, trace+metric+log observability, automated rollback, runbooks,… (Learn, Python, ~60 min)
25. [Security — Secrets, API Key Rotation, Audit Logs, Guardrails](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F25-security-secrets-audit): Eliminate secret sprawl via centralized vaults (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault). Never store credentials in config files, env files in VCS, spreadsheets. (Learn, Python, ~60 min)
26. [Compliance — SOC 2, HIPAA, GDPR, PCI-DSS, EU AI Act, ISO 42001](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F26-compliance-frameworks): Multi-framework coverage is table stakes for 2026 enterprise deals. EU AI Act: in force since August 1, 2024. Most high-risk requirements enforce August 2, 2026. (Learn, Python, ~60 min)
27. [FinOps for LLMs — Unit Economics and Multi-Tenant Attribution](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F27-finops-llms): Traditional FinOps breaks on LLM spend. Costs are token-transactions, not resource-uptime. Tags don't map — an API call is a transaction, not an asset. (Learn, Python, ~60 min)
28. [Self-Hosted Serving Selection — Matching Engine to Hardware and Scale](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F28-self-hosted-serving-selection): Engine selection is a function of hardware, scale, and ecosystem — not a leaderboard read. Four engines dominate self-hosted inference in 2026: llama.cpp, Ollama, vLLM, SGLang, with TGI trailing in… (Learn, Python, ~45 min)
29. [Model Demo Interfaces — From a Function to a Shareable App](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F29-model-demo-interfaces): A model demo has one contract: an input, a model call, and an output. Put a limit on each part before you share the link. (Build, Python, ~90 min)

## Start

Run this command from the repository root:

```bash
python3 phases/17-infrastructure-and-production/01-managed-llm-platforms/code/main.py
```

## Glossary terms in this phase

- [Audit Log](https://aiengineeringfromscratch.com/glossary/audit-log)
- [Autoscaling](https://aiengineeringfromscratch.com/glossary/autoscaling)
- [Calibration](https://aiengineeringfromscratch.com/glossary/calibration)
- [Chunked Prefill](https://aiengineeringfromscratch.com/glossary/chunked-prefill)
- [Continuous Batching](https://aiengineeringfromscratch.com/glossary/continuous-batching)
- [Decode Phase](https://aiengineeringfromscratch.com/glossary/decode-phase)
- [Disaggregated Serving](https://aiengineeringfromscratch.com/glossary/disaggregated-serving)
- [Dynamic Batching](https://aiengineeringfromscratch.com/glossary/dynamic-batching)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Feature](https://aiengineeringfromscratch.com/glossary/feature)
- [Goodput](https://aiengineeringfromscratch.com/glossary/goodput)
- [Guardrails](https://aiengineeringfromscratch.com/glossary/guardrails)
- [Incident Response](https://aiengineeringfromscratch.com/glossary/incident-response)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [Inter-Token Latency (ITL)](https://aiengineeringfromscratch.com/glossary/inter-token-latency-itl)
- [KV Cache](https://aiengineeringfromscratch.com/glossary/kv-cache)
- [LLM (Large Language Model)](https://aiengineeringfromscratch.com/glossary/llm-large-language-model)
- [Model Serving](https://aiengineeringfromscratch.com/glossary/model-serving)
- [MoE (Mixture of Experts)](https://aiengineeringfromscratch.com/glossary/moe-mixture-of-experts)
- [Observability](https://aiengineeringfromscratch.com/glossary/observability)
- [Paged KV Cache](https://aiengineeringfromscratch.com/glossary/paged-kv-cache)
- [Prefill](https://aiengineeringfromscratch.com/glossary/prefill)
- [Prefix Caching](https://aiengineeringfromscratch.com/glossary/prefix-caching)
- [Quantization](https://aiengineeringfromscratch.com/glossary/quantization)
- [Rollback](https://aiengineeringfromscratch.com/glossary/rollback)
- [Service Level Objective (SLO)](https://aiengineeringfromscratch.com/glossary/service-level-objective-slo)
- [Shadow Traffic](https://aiengineeringfromscratch.com/glossary/shadow-traffic)
- [Speculative Decoding](https://aiengineeringfromscratch.com/glossary/speculative-decoding)
- [Streaming](https://aiengineeringfromscratch.com/glossary/streaming)
- [Tail Latency](https://aiengineeringfromscratch.com/glossary/tail-latency)
- [Time per Output Token (TPOT)](https://aiengineeringfromscratch.com/glossary/time-per-output-token-tpot)
- [Time to First Token (TTFT)](https://aiengineeringfromscratch.com/glossary/time-to-first-token-ttft)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Trace](https://aiengineeringfromscratch.com/glossary/trace)
- [Zero Trust](https://aiengineeringfromscratch.com/glossary/zero-trust)

## Frequently asked questions

### How many lessons are in Phase 17: Infrastructure & Production?

Phase 17 has 29 lessons: 27 Learn lessons and 2 Build lessons. The lesson code uses Python.

### What should I know before I start Phase 17?

The phase guide gives these prerequisites: Phase 11 LLM Engineering and Phase 13 Tools and Protocols. In the course roadmap, this phase builds on Phase 14: Agent Engineering.

### Is Phase 17 free?

Yes. All 29 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 17 take?

The time estimates of all 29 lessons add up to about 31 hours.

### What comes after Phase 17?

Phase 19: Capstone Projects builds on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
