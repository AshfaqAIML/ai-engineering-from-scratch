# What is Software Bill of Materials (SBOM)?

Canonical page: https://aiengineeringfromscratch.com/glossary/software-bill-of-materials-sbom
Category: Security & governance
Also called: SBOM

A structured inventory of software components and relationships associated with a product or artifact, often including versions, suppliers, licenses, and identifiers.

## Why does Software Bill of Materials (SBOM) matter?

You need a component inventory to assess affected dependencies, license obligations, and supply-chain exposure when software changes or vulnerabilities emerge.

## What is the common confusion about Software Bill of Materials (SBOM)?

An SBOM is an inventory, not proof that components are secure, correctly licensed, or actually present unless generation and provenance are trustworthy.

## Software Bill of Materials (SBOM) in practice

Generate the SBOM during the trusted build, bind it to the release artifact, verify it in policy checks, and update it whenever dependencies or packaging change.

## Related terms

- [Provenance Attestation](https://aiengineeringfromscratch.com/glossary/provenance-attestation)
- [Reproducible Build](https://aiengineeringfromscratch.com/glossary/reproducible-build)
- [Data Provenance](https://aiengineeringfromscratch.com/glossary/data-provenance)
- [Audit Log](https://aiengineeringfromscratch.com/glossary/audit-log)

## Sources

- [SPDX 3.0.1 specification](https://spdx.github.io/spdx-spec/v3.0/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
