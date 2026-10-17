# What is Provenance Attestation?

Canonical page: https://aiengineeringfromscratch.com/glossary/provenance-attestation
Category: Security & governance

Authenticated, machine-readable metadata that binds an artifact to claims about how, where, when, and from which inputs it was produced.

## Why does Provenance Attestation matter?

It lets automated policy and reviewers verify supply-chain claims instead of trusting an unsigned build note.

## What is the common confusion about Provenance Attestation?

A signature identifies the attester and protects integrity; it does not prove that every claim inside the attestation is true.

## Provenance Attestation in practice

Generate an attestation in the build system, bind it to artifact digests, sign it with a controlled identity, and verify it before release.

## Related terms

- [Data Provenance](https://aiengineeringfromscratch.com/glossary/data-provenance)
- [Reproducible Build](https://aiengineeringfromscratch.com/glossary/reproducible-build)
- [Audit Log](https://aiengineeringfromscratch.com/glossary/audit-log)
- [Verification Gate](https://aiengineeringfromscratch.com/glossary/verification-gate)
- [Content Provenance](https://aiengineeringfromscratch.com/glossary/content-provenance)
- [Skill Bundle](https://aiengineeringfromscratch.com/glossary/skill-bundle)
- [Software Bill of Materials (SBOM)](https://aiengineeringfromscratch.com/glossary/software-bill-of-materials-sbom)

## Sources

- [SLSA Software Attestations](https://slsa.dev/spec/v1.2/attestation-model)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
