# What is Late Fusion?

Canonical page: https://aiengineeringfromscratch.com/glossary/late-fusion
Category: Multimodal systems

Processing modalities through separate encoders or predictors and combining their high-level representations, scores, or decisions near the task output.

## Why does Late Fusion matter?

Separate branches can use modality-specific architectures and tolerate missing inputs, though they may miss fine-grained interactions available to earlier fusion.

## What is the common confusion about Late Fusion?

Late fusion describes the position of combination. It does not mean simple averaging or guarantee that the modalities contribute equally.

## Late Fusion in practice

Calibrate each branch, define how missing modalities affect the merge, compare score-level and feature-level combinations, and evaluate each branch alone as an ablation.

## Lessons

- [Cross-Attention Fusion](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F61-cross-attention-fusion) (Phase 19: Capstone Projects)

## Related terms

- [Early Fusion](https://aiengineeringfromscratch.com/glossary/early-fusion)
- [Multimodal Fusion](https://aiengineeringfromscratch.com/glossary/multimodal-fusion)
- [Modality](https://aiengineeringfromscratch.com/glossary/modality)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)

## Sources

- [Multimodal Deep Learning](https://ai.stanford.edu/~ang/papers/icml11-MultimodalDeepLearning.pdf)
- [Multimodal Machine Learning: A Survey and Taxonomy](https://arxiv.org/abs/1705.09406)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
