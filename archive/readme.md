# Archive

This directory keeps archived reference material for Claude Code workflows, historical `CLAUDE.md` examples, and the older curated agent collection. The current workspace agent source of truth is [.github/agents](../.github/agents/README.md).

Use these archived guides as inspiration or migration input. Use `.github/agents/*.agent.md` for active VS Code custom agents.

## Current Agent Recommendation

For active agents, use the workspace custom-agent format:

```yaml
---
name: example_agent
description: "Clear trigger-focused description of when this agent should be used."
user-invocable: true
argument-hint: "Describe the task, relevant files, constraints, and expected output."
---
```

Notes:

- Put active agents in `.github/agents/` with `snake_case.agent.md` filenames.
- Keep `name:` aligned with the filename stem.
- Do not add `tools:` globally; omit it unless a specific agent must be restricted.
- Avoid universal `model:` fields so future model routing and user defaults still work.
- Prefer updating `description:` when an agent is not discovered correctly.

## Directory Map

| Path | Status | Use For |
| ---- | ------ | ------- |
| [CLAUDE.md by Sabrina](CLAUDE.md%20by%20Sabrina/) | Reference | Personal workflow rules and quality practices. |
| [CLAUDE.md by zebbern](CLAUDE.md%20by%20zebbern/) | Reference | Parallel-task implementation guidance and project conventions. |
| [CLAUDE.md Collection](CLAUDE.md%20Collection/) | Migration source | Older specialist-agent prompts that can be merged into `.github/agents` when they fill a real gap. |

## Migration Status

The useful parts of the old collection should be handled in one of three ways:

| Decision | When To Use |
| -------- | ----------- |
| Keep as reference | The guide is personal, opinionated, or not directly reusable as a custom agent. |
| Merge into an existing agent | The collection prompt overlaps an agent already in `.github/agents`. |
| Add as a new `.agent.md` | The collection prompt covers a domain missing from the current workspace agents. |

Already covered by existing workspace agents:

- API design, backend, frontend, React, Next.js, Django, Laravel, Rails, Python, QA, security auditing, documentation, performance, and general code review.

Migrated as separate workspace agents because they fill clearer gaps:

- `auth_specialist`
- `code_archaeologist`
- `e2e_tester`
- `node_backend_expert`
- `project_analyst`
- `tailwind_css_expert`
- `test_architect`
- `typescript_expert`
- `vue_component_architect`
- `vue_nuxt_expert`
- `vue_state_manager`

## Legacy Collection Index

The older collection remains useful as source material:

| Category | Files |
| -------- | ----- |
| Optimizers | `code-archaeologist`, `code-reviewer`, `documentation-specialist`, `performance-optimizer` |
| Orchestrators | `project-analyst`, `team-configurator`, `tech-lead-orchestrator` |
| Universal | `api-architect`, `backend-developer`, `frontend-developer`, `tailwind-css-expert` |
| React | `react-component-architect`, `react-nextjs-expert` |
| Vue | `vue-component-architect`, `vue-nuxt-expert`, `vue-state-manager` |
| Django | `django-api-developer`, `django-backend-expert`, `django-orm-expert` |
| Laravel | `laravel-backend-expert`, `laravel-eloquent-expert` |
| Rails | `rails-activerecord-expert`, `rails-api-developer`, `rails-backend-expert` |
| Python | `python-developer` |
| Testing | `e2e-tester`, `qa-engineer`, `test-architect` |
| TypeScript | `node-backend-expert`, `typescript-expert` |
| Security | `auth-specialist`, `security-auditor` |

## Maintenance Checklist

- Keep this file focused on archive usage, not the full active agent index.
- Keep the active agent index in [.github/agents/README.md](../.github/agents/README.md).
- When migrating a guide prompt, prefer a concise `.agent.md` body over copying old frontmatter or stale tool lists.
- Remove or update legacy instructions that mention `.claude/`, `@agent` invocation, `tools:` defaults, or fixed `model: opus` routing.
