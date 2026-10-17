# What is Early Fusion?

Canonical page: https://aiengineeringfromscratch.com/glossary/early-fusion
Category: Multimodal systems

Combining raw or low-level representations from several modalities before most task-specific modeling occurs.

## Why does Early Fusion matter?

Early interaction can expose fine-grained cross-modal relationships, but it also requires compatible representations and careful handling of alignment and missing inputs.

## What is the common confusion about Early Fusion?

Early fusion describes where streams are combined in the architecture. It does not guarantee that the model learns useful alignment between them.

## Early Fusion in practice

Convert each modality into a declared token or feature representation, preserve source and position markers, fuse them before the shared backbone, and compare against single-modality and late-fusion baselines.

## Lessons

- [Chameleon and Early-Fusion Token-Only Multimodal Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F12-multimodal-ai%2F11-chameleon-early-fusion-tokens) (Phase 12: Multimodal AI)

## Related terms

- [Late Fusion](https://aiengineeringfromscratch.com/glossary/late-fusion)
- [Multimodal Fusion](https://aiengineeringfromscratch.com/glossary/multimodal-fusion)
- [Modality Alignment](https://aiengineeringfromscratch.com/glossary/modality-alignment)
- [Token](https://aiengineeringfromscratch.com/glossary/token)

## Sources

- [Chameleon: Mixed-Modal Early-Fusion Foundation Models](https://arxiv.org/abs/2405.09818)
- [Multimodal Machine Learning: A Survey and Taxonomy](https://arxiv.org/abs/1705.09406)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
