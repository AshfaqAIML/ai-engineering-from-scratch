# What is Calibration?

Canonical page: https://aiengineeringfromscratch.com/glossary/calibration
Category: Evaluation & safety

The agreement between a system's stated confidence and the observed frequency with which predictions at that confidence are correct.

## Why does Calibration matter?

A system can be accurate on average yet dangerously overconfident on the cases where people rely on its score.

## What is the common confusion about Calibration?

Calibration measures confidence reliability, not overall accuracy, factuality, or reasoning quality.

## Calibration in practice

Bucket predictions by confidence, compare confidence with empirical accuracy, and recalibrate or abstain when the gap is unacceptable.

## Lessons

- [Perplexity and Calibration](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F73-perplexity-calibration) (Phase 19: Capstone Projects)
- [Production Quantization — AWQ, GPTQ, GGUF K-quants, FP8, MXFP4/NVFP4](https://aiengineeringfromscratch.com/lesson?path=phases%2F17-infrastructure-and-production%2F09-production-quantization) (Phase 17: Infrastructure & Production)
- [Sycophancy as RLHF Amplification](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F04-sycophancy-rlhf-amplification) (Phase 18: Ethics, Safety & Alignment)
- [EchoLeak and the Emergence of CVEs for AI](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F25-echoleak-cves-for-ai) (Phase 18: Ethics, Safety & Alignment)

## Related terms

- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Precision & Recall](https://aiengineeringfromscratch.com/glossary/precision-recall)
- [Logits](https://aiengineeringfromscratch.com/glossary/logits)

## Sources

- [On Calibration of Modern Neural Networks](https://proceedings.mlr.press/v70/guo17a.html)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
