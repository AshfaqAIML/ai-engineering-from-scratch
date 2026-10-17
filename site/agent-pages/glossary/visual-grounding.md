# What is Visual Grounding?

Canonical page: https://aiengineeringfromscratch.com/glossary/visual-grounding
Category: Multimodal systems

Connecting a language expression to spatial evidence in an image or video, such as a region, object, mask, or tracked entity.

## Why does Visual Grounding matter?

A fluent visual answer can be unsupported, while grounding makes the claimed referent inspectable and enables region-level evaluation.

## What is the common confusion about Visual Grounding?

Visual grounding identifies where the referenced evidence is. General image captioning can describe a scene without localizing each claim.

## Visual Grounding in practice

Require a box, mask, or temporal segment with the answer, test ambiguous and absent referents, and score localization separately from language correctness.

## Lessons

- [Cross-Attention Fusion](https://aiengineeringfromscratch.com/lesson?path=phases%2F19-capstone-projects%2F61-cross-attention-fusion) (Phase 19: Capstone Projects)

## Related terms

- [Grounding](https://aiengineeringfromscratch.com/glossary/grounding)
- [Vision-Language Model (VLM)](https://aiengineeringfromscratch.com/glossary/vision-language-model-vlm)
- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)

## Sources

- [MDETR](https://arxiv.org/abs/2104.12763)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
