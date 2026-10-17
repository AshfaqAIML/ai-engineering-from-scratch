# What is Worktree?

Canonical page: https://aiengineeringfromscratch.com/glossary/worktree
Category: AI-native development

In Git, a working directory attached to a repository and branch or commit, with shared object storage but its own checked-out files and index.

## Why does Worktree matter?

Separate worktrees let people and agents work concurrently without constantly switching or overwriting one checkout.

## What is the common confusion about Worktree?

A worktree isolates checked-out files, not every process, port, cache, database, or secret on the machine.

## Worktree in practice

Give each coding agent a named feature branch and exact worktree path, then review and integrate patches through normal Git history.

## Lessons

- [The Workbench on a Real Repo](https://aiengineeringfromscratch.com/lesson?path=phases%2F14-agent-engineering%2F41-workbench-for-real-repos) (Phase 14: Agent Engineering)

## Related terms

- [Coding Agent](https://aiengineeringfromscratch.com/glossary/coding-agent)
- [Patch](https://aiengineeringfromscratch.com/glossary/patch)
- [Scope Contract](https://aiengineeringfromscratch.com/glossary/scope-contract)
- [Handoff](https://aiengineeringfromscratch.com/glossary/handoff)

## Sources

- [git-worktree documentation](https://git-scm.com/docs/git-worktree)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
