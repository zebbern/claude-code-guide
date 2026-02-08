# CLAUDE.md Guides Collection

> **A collection of CLAUDE.md agent guides, workflow shortcuts, and specialized sub-agents for AI-assisted development.**

This repository contains curated guides and ready-to-use CLAUDE.md agent configurations that enhance your development workflow with Claude Code. Whether you're looking for personal workflow optimizations or specialized agents for specific frameworks, you'll find valuable resources here.

---

## Table of Contents

- [Directory Structure](#directory-structure)
- [How to Use These Agents](#how-to-use-these-agents)
- [Personal Guides Overview](#personal-guides-overview)
  - [Sabrina's Guide](#sabrinas-guide)
  - [zebbern's Guide](#zebberns-guide)
- [Agent Categories](#agent-categories)
  - [Optimizers](#optimizers)
  - [Orchestrators](#orchestrators)
  - [Universal](#universal)
  - [Framework-Specific](#framework-specific)
- [How to Create Your Own Agent](#how-to-create-your-own-agent)
- [Contributing](#contributing)
- [Credits](#credits)

---

## Directory Structure

```
guides/
├── readme.md                 (this file)
├── CLAUDE.md by Sabrina/     (workflow shortcuts & best practices guide)
│   ├── CLAUDE.md
│   └── readme.md
├── CLAUDE.md by zebbern/     (parallel task implementation system)
│   ├── CLAUDE.md             (AI-facing instructions)
│   └── README.md             (human documentation)
└── CLAUDE.md Collection/     (curated agent library)
    ├── optimizers/           (4 agents)
    │   ├── code-archaeologist.md
    │   ├── code-reviewer.md
    │   ├── documentation-specialist.md
    │   └── performance-optimizer.md
    ├── orchestrators/        (3 agents)
    │   ├── project-analyst.md
    │   ├── team-configurator.md
    │   └── tech-lead-orchestrator.md
    ├── universal/            (4 agents)
    │   ├── api-architect.md
    │   ├── backend-developer.md
    │   ├── frontend-developer.md
    │   └── tailwind-css-expert.md
    ├── react/                (2 agents)
    │   ├── react-component-architect.md
    │   └── react-nextjs-expert.md
    ├── vue/                  (3 agents)
    │   ├── vue-component-architect.md
    │   ├── vue-nuxt-expert.md
    │   └── vue-state-manager.md
    ├── django/               (3 agents)
    │   ├── django-api-developer.md
    │   ├── django-backend-expert.md
    │   └── django-orm-expert.md
    ├── laravel/              (2 agents)
    │   ├── laravel-backend-expert.md
    │   └── laravel-eloquent-expert.md
    ├── rails/                (3 agents)
    │   ├── rails-activerecord-expert.md
    │   ├── rails-api-developer.md
    │   └── rails-backend-expert.md
    ├── Python/               (1 agent)
    │   └── python-developer.md
    ├── testing/              (3 agents)
    │   ├── qa-engineer.md
    │   ├── e2e-tester.md
    │   └── test-architect.md
    ├── typescript/           (2 agents)
    │   ├── typescript-expert.md
    │   └── node-backend-expert.md
    └── security/             (2 agents)
        ├── security-auditor.md
        └── auth-specialist.md
```

**Total Agents Available:** 32 specialized agents across 12 categories

---

## How to Use These Agents

### Referencing Agents

In Claude Code, you can reference these agents using the `@` syntax:

```
@code-reviewer Review my latest changes for security issues
@tech-lead-orchestrator Plan the implementation for this new feature
@react-nextjs-expert Help me set up server components
```

### Invoking Agents

1. **Copy the agent file** to your project's `.claude/` directory or reference it directly
2. **Use the agent name** with the `@` prefix in your prompts
3. **Provide context** about what you need the agent to do

### Best Practices

- Use **orchestrators** for planning and coordination tasks
- Use **optimizers** for code quality and review tasks
- Use **framework-specific agents** when working within that ecosystem
- Combine agents by having orchestrators delegate to specialists

---

## Personal Guides Overview

### Sabrina's Guide

**Location:** `CLAUDE.md by Sabrina/`

Sabrina's guide focuses on **implementation best practices** and **workflow shortcuts** for maintaining code quality:

| Category | Key Rules |
|----------|-----------|
| **Before Coding** | Ask clarifying questions, draft approach for complex work |
| **While Coding** | Follow TDD, use domain vocabulary, prefer simple functions |
| **Testing** | Colocate unit tests, separate pure-logic from DB tests |
| **Database** | Type DB helpers for both transactions and instances |
| **Code Organization** | Place shared code only if used by 2+ packages |
| **Git** | Use Conventional Commits format |

**Key Principles:**
- `MUST` rules are enforced by CI
- `SHOULD` rules are strongly recommended
- `SHOULD NOT` rules indicate anti-patterns to avoid

### zebbern's Guide

**Location:** `CLAUDE.md by zebbern/`

zebbern's guide introduces the **7-Parallel-Task Feature Implementation System** for maximum development velocity:

| Task # | Focus Area |
|--------|------------|
| **1** | Component - Create main component file |
| **2** | Styles - Create component styles/CSS |
| **3** | Tests - Create test files |
| **4** | Types - Create type definitions |
| **5** | Hooks - Create custom hooks/utilities |
| **6** | Integration - Update routing, imports, exports |
| **7** | Remaining - Update docs, configs, package.json |
| **8** | Review - Coordinate, run tests, verify build |

**Key Principles:**
- **IMMEDIATE EXECUTION** - Launch parallel tasks immediately
- **NO CLARIFICATION** - Skip unless absolutely critical
- **PARALLEL BY DEFAULT** - Always use 7-parallel-Task method
- **MINIMAL CHANGES** - Preserve existing patterns and conventions

---

## Agent Categories

### Optimizers

*Focus: Code quality, performance, and documentation improvements*

| Agent | Purpose |
|-------|---------|
| `code-reviewer` | Security-aware review for PRs and features. Routes issues to specialists |
| `code-archaeologist` | Understands legacy code, documents tribal knowledge |
| `performance-optimizer` | Identifies bottlenecks, optimizes algorithms and queries |
| `documentation-specialist` | Generates and maintains comprehensive documentation |

### Orchestrators

*Focus: Project planning, team coordination, and workflow management*

| Agent | Purpose |
|-------|---------|
| `tech-lead-orchestrator` | High-level technical decisions and architecture planning |
| `project-analyst` | Requirements analysis, scope definition, feasibility assessment |
| `team-configurator` | Assembles optimal agent teams for specific tasks |

### Universal

*Focus: Core development tasks applicable across frameworks*

| Agent | Purpose |
|-------|---------|
| `backend-developer` | Server-side logic, APIs, database interactions |
| `frontend-developer` | UI components, state management, user experience |
| `api-architect` | API design, REST/GraphQL patterns, documentation |
| `tailwind-css-expert` | Tailwind CSS styling, responsive design, utilities |

### Framework-Specific

#### React (2 agents)
| Agent | Purpose |
|-------|---------|
| `react-component-architect` | Component design, composition patterns, hooks |
| `react-nextjs-expert` | Next.js App Router, SSR, RSC, API routes |

#### Vue (3 agents)
| Agent | Purpose |
|-------|---------|
| `vue-component-architect` | Vue 3 Composition API, component design |
| `vue-nuxt-expert` | Nuxt 3, SSR, auto-imports, modules |
| `vue-state-manager` | Pinia, Vuex, state management patterns |

#### Django (3 agents)
| Agent | Purpose |
|-------|---------|
| `django-backend-expert` | Django views, middleware, authentication |
| `django-api-developer` | Django REST Framework, serializers, viewsets |
| `django-orm-expert` | QuerySets, model optimization, migrations |

#### Laravel (2 agents)
| Agent | Purpose |
|-------|---------|
| `laravel-backend-expert` | Laravel architecture, services, middleware |
| `laravel-eloquent-expert` | Eloquent ORM, relationships, query optimization |

#### Rails (3 agents)
| Agent | Purpose |
|-------|---------|
| `rails-backend-expert` | Rails conventions, concerns, services |
| `rails-api-developer` | Rails API mode, serialization, versioning |
| `rails-activerecord-expert` | ActiveRecord patterns, scopes, associations |

#### Python (1 agent)
| Agent | Purpose |
|-------|---------|
| `python-developer` | Python best practices, typing, tooling |

### Testing (3 agents)
| Agent | Purpose |
|-------|---------|
| `qa-engineer` | Quality assurance, test planning, bug tracking |
| `e2e-tester` | End-to-end testing, Playwright, Cypress |
| `test-architect` | Test architecture, strategy, coverage optimization |

### TypeScript (2 agents)
| Agent | Purpose |
|-------|---------|
| `typescript-expert` | TypeScript best practices, advanced types, tooling |
| `node-backend-expert` | Node.js backend development, Express, Fastify |

### Security (2 agents)
| Agent | Purpose |
|-------|---------|
| `security-auditor` | Security audits, vulnerability assessment, OWASP |
| `auth-specialist` | Authentication, authorization, OAuth, JWT |

---

## How to Create Your Own Agent

### Agent File Template

Create a new `.md` file with the following structure:

```markdown
---
name: your-agent-name
description: Brief description of when to use this agent and what it does
tools: LS, Read, Grep, Glob, Bash, Write, Edit
model: opus (optional - defaults to default model)
---

# Agent Name - Tagline

## Mission

Describe the agent's primary purpose and goals.

## Workflow

1. **Step One**
   - Detail what the agent does first
   - Include specific actions

2. **Step Two**
   - Continue the workflow
   - Be specific about outputs

## Output Format

Describe the expected output format (markdown, code, reports, etc.)

## Delegation Rules

When to delegate to other agents:
- Condition → delegate to `other-agent`
- Condition → delegate to `another-agent`
```

### Available Tools

| Tool | Description |
|------|-------------|
| `LS` | List directory contents |
| `Read` | Read file contents |
| `Grep` | Search within files |
| `Glob` | Pattern matching for files |
| `Bash` | Execute shell commands |
| `Write` | Create new files |
| `Edit` | Modify existing files |

### Best Practices for Agent Creation

1. **Be specific** - Clearly define the agent's scope and boundaries
2. **Include workflows** - Step-by-step processes help the agent stay focused
3. **Define outputs** - Specify expected formats and structures
4. **Add delegation rules** - Know when to hand off to specialists
5. **Test thoroughly** - Verify the agent works for common use cases

---

## Contributing

We welcome contributions to expand this collection! Here's how to add new agents:

### Adding New Agents

1. **Choose the right category** - Place your agent in the appropriate folder
2. **Follow the template** - Use the frontmatter format shown above
3. **Write clear documentation** - Include mission, workflow, and output format
4. **Test your agent** - Ensure it works as expected
5. **Submit a PR** - Include a description of the agent's purpose

### Suggesting New Categories

If you have ideas for new agent categories (like `testing/`, `typescript/`, `security/`), please open an issue to discuss before implementing.

### Improving Existing Agents

Found ways to improve an existing agent? PRs welcome! Please include:
- What you changed
- Why the change improves the agent
- Any testing you've done

---

## Credits

This collection was created and maintained by:

- **[Sabrina](CLAUDE.md%20by%20Sabrina/)** - Best practices guide, workflow shortcuts, and quality standards
- **[zebbern](CLAUDE.md%20by%20zebbern/)** - Parallel task implementation system and feature guidelines

Special thanks to all contributors who help expand and improve this collection.

---

## License

See the [LICENSE](../LICENSE) file in the root directory.

---

<div align="center">

**[Back to Top](#claudemd-guides-collection)**

Made with love for the Claude Code community

</div>


