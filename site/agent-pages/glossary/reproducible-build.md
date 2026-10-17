# What is Reproducible Build?

Canonical page: https://aiengineeringfromscratch.com/glossary/reproducible-build
Category: AI-native development

A build whose declared source, environment, and instructions can be independently rerun to produce bit-for-bit identical specified artifacts.

## Why does Reproducible Build matter?

It makes an artifact verifiable beyond the machine or agent that originally produced it and exposes hidden build inputs.

## What is the common confusion about Reproducible Build?

A build that succeeds twice is repeatable evidence, but reproducibility requires the declared independent conditions and identical outputs.

## Reproducible Build in practice

Pin toolchains and dependencies, remove timestamps and unstable ordering, capture the environment, then compare independently rebuilt artifact digests.

## Related terms

- [Repository Instructions](https://aiengineeringfromscratch.com/glossary/repository-instructions)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Provenance Attestation](https://aiengineeringfromscratch.com/glossary/provenance-attestation)
- [Software Bill of Materials (SBOM)](https://aiengineeringfromscratch.com/glossary/software-bill-of-materials-sbom)
- [Skill Bundle](https://aiengineeringfromscratch.com/glossary/skill-bundle)

## Sources

- [Reproducible Builds definition](https://reproducible-builds.org/docs/definition/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
