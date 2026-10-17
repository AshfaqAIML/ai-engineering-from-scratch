# What is Error Budget?

Canonical page: https://aiengineeringfromscratch.com/glossary/error-budget
Category: Reliability & operations

The amount of unsuccessful service allowed by a service-level objective over its measurement window before the objective is exhausted.

## Why does Error Budget matter?

It gives reliability and product work a shared decision boundary: teams can spend remaining budget on change while slowing risk when user-visible failure consumes it.

## What is the common confusion about Error Budget?

An error budget is not a quota for causing incidents. It is an operating policy derived from a user-facing reliability target.

## Error Budget in practice

Derive the budget from the SLO, track burn by cause and user segment, define release actions before exhaustion, and avoid resetting the accounting after an incident.

## Related terms

- [Service Level Objective (SLO)](https://aiengineeringfromscratch.com/glossary/service-level-objective-slo)
- [Service Level Indicator (SLI)](https://aiengineeringfromscratch.com/glossary/service-level-indicator-sli)
- [Availability](https://aiengineeringfromscratch.com/glossary/availability)
- [Incident Response](https://aiengineeringfromscratch.com/glossary/incident-response)
- [Retry Budget](https://aiengineeringfromscratch.com/glossary/retry-budget)

## Sources

- [Google SRE Workbook: Error Budget Policy](https://sre.google/workbook/error-budget-policy/)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
