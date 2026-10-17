# What is Data Exfiltration?

Canonical page: https://aiengineeringfromscratch.com/glossary/data-exfiltration
Category: Security & governance

Unauthorized transfer of protected data from a system or trust zone to a person, tool, service, or storage location that is not permitted to receive it.

## Why does Data Exfiltration matter?

An agent can expose secrets through generated text, tool arguments, URLs, logs, or side effects even when the original data store remains intact.

## What is the common confusion about Data Exfiltration?

Exfiltration is about unauthorized movement or disclosure. Ordinary retrieval of data by an authorized component is not exfiltration, although later use can become one.

## Data Exfiltration in practice

Minimize readable data, allowlist destinations, inspect outbound tool calls, redact sensitive fields, and alert on unusual transfers across trust boundaries.

## Lessons

- [EchoLeak and the Emergence of CVEs for AI](https://aiengineeringfromscratch.com/lesson?path=phases%2F18-ethics-safety-alignment%2F25-echoleak-cves-for-ai) (Phase 18: Ethics, Safety & Alignment)

## Related terms

- [Trust Boundary](https://aiengineeringfromscratch.com/glossary/trust-boundary)
- [Least Privilege](https://aiengineeringfromscratch.com/glossary/least-privilege)
- [Indirect Prompt Injection](https://aiengineeringfromscratch.com/glossary/indirect-prompt-injection)
- [Audit Log](https://aiengineeringfromscratch.com/glossary/audit-log)

## Sources

- [NIST SP 800-53 Rev. 5: AC-4 Information Flow Enforcement](https://csrc.nist.gov/files/pubs/sp/800/53/r5/upd1/final/docs/sp800-53r5-controls.xlsx)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
