# Claude Code Guidelines - zebbern

> Production-ready practices for Claude Code (Feb 2026)

## Quick Reference

| Command | Description | Shortcut |
|---------|-------------|----------|
| `/fast` | Toggle Fast Mode (Opus 4.6, ↯ icon) | Lower latency |
| `/memory` | View/edit memory files | Persistent context |
| `/agents` | Manage subagents interactively | Delegation |
| `/hooks` | Manage hooks interactively | Automation |
| `/compact` | Trigger context compaction | When >50% full |
| `/init` | Bootstrap CLAUDE.md | New projects |
| `/clear` | Reset conversation context | Fresh start |
| `/debug` | Troubleshoot session | Diagnostics |
| `/insights` | Analyze session | Performance review |
| `/resume` | Continue previous session | Persistence |

**Models:** Opus 4.6 (complex) • Sonnet (balanced) • Haiku (fast)  
**Fast Mode Pricing:** $30/$150 MTok (<200K) • $60/$225 MTok (>200K)

---

## 1. Implementation Rules

### Before Coding (BP)
- **BP-1 (MUST)** Ask clarifying questions for ambiguous requests before coding
- **BP-2 (MUST)** Check existing patterns—match naming, structure, style
- **BP-3 (SHOULD)** Draft approach for complex work (>3 files) and confirm
- **BP-4 (SHOULD)** Use Context7 MCP to verify library APIs

### While Coding (C)
- **C-1 (MUST)** Follow TDD: failing test → implement → refactor → commit
- **C-2 (MUST)** Functions < 20 lines; refactor if > 40
- **C-3 (MUST)** No `any` types without justification
- **C-4 (MUST)** Validate all external inputs (zod)
- **C-5 (SHOULD)** Self-documenting code: `MILLISECONDS_PER_DAY` not `d = 86400000`
- **C-6 (SHOULD)** Fail fast—validate early, throw specific errors

### Testing (T)
- **T-1 (MUST)** Colocate tests: `*.spec.ts` or `*.test.ts` same directory
- **T-2 (MUST)** One assertion concept per test case
- **T-3 (MUST)** Critical business logic: 90%+ coverage
- **T-4 (SHOULD)** Integration tests for API endpoints
- **T-5 (SHOULD)** E2E tests (Playwright) for critical journeys

### Git (G)
- **G-1 (MUST)** Conventional commits: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`
- **G-2 (MUST)** Run `tsc --noEmit && npm test && npm run lint` before commit
- **G-3 (MUST)** No secrets, console.logs, or commented code in commits
- **G-4 (SHOULD)** Stage selectively, verify with `git status`

### Security (S)
- **S-1 (MUST)** Secrets in env vars only; use typed validation
- **S-2 (MUST)** Auth on all endpoints unless explicitly public
- **S-3 (MUST)** Parameterized queries—no raw SQL concatenation

---

## 2. Parallel Task System

For features, use 7-parallel tasks with focused subagents:

| Task | Scope | Mode |
|------|-------|------|
| T1 | Component/feature | domain |
| T2 | Styles/CSS | frontend |
| T3 | Tests | qa |
| T4 | Types | typescript |
| T5 | Hooks/utils | frontend |
| T6 | Integration | fullstack |
| T7 | Config/docs | general |
| T8 | Review/verify | coordinator |

```markdown
## Feature: [Name]
- [ ] T1: Component created
- [ ] T2: Styles applied  
- [ ] T3: Tests written
- [ ] T4: Types defined
- [ ] T5: Hooks created
- [ ] T6: Integration done
- [ ] T7: Docs updated
- [ ] T8: Build verified
```

**Agent Teams** (experimental): Set `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` for multi-agent parallel collaboration with `TeammateIdle` and `TaskCompleted` hook events.

---

## 3. Memory Configuration

### CLAUDE.md Hierarchy (load order)
```
1. /Library/Application Support/ClaudeCode/CLAUDE.md  (org policy)
2. ./CLAUDE.md or ./.claude/CLAUDE.md                 (project)
3. ./.claude/rules/*.md                               (modular rules)
4. ~/.claude/CLAUDE.md                                (user global)
5. ./CLAUDE.local.md                                  (gitignored local)
```

**Imports:** Use `@path/to/file` syntax to include other files.

### Auto Memory (NEW 2026)
Claude saves learnings to `~/.claude/projects/<project>/memory/`:
- `MEMORY.md` — entrypoint (first 200 lines auto-loaded)
- Topic files (`debugging.md`, `patterns.md`) — loaded on demand
- Enable with: `CLAUDE_CODE_DISABLE_AUTO_MEMORY=0`
- View/edit with `/memory` command

---

## 4. Subagent Configuration

### Frontmatter Reference
```yaml
---
name: code-reviewer           # Required
description: Reviews code     # Required
model: sonnet                 # opus, sonnet, haiku, inherit
permissionMode: acceptEdits   # See modes below
maxTurns: 10
tools:
  - Read
  - Grep
  - Glob
disallowedTools:
  - WebFetch
skills:
  - typescript-patterns       # Preload into context
mcpServers:
  - context7
memory: project               # user, project, local (persistent)
hooks:
  PostToolUse:
    - command: "npm run lint"
      pattern: "Write|Edit"
---
```

### Permission Modes
| Mode | Description |
|------|-------------|
| `default` | Ask for permissions normally |
| `acceptEdits` | Auto-accept file edits |
| `dontAsk` | Skip all permission prompts |
| `delegate` | Inherit caller's permissions |
| `bypassPermissions` | No restrictions (dangerous) |
| `plan` | Read-only planning mode |

### Built-in Subagents
- **Explore** — Fast Haiku, read-only, codebase search
- **Plan** — Planning mode, no writes
- **General-purpose** — Default delegation target

---

## 5. Hooks Reference

### Hook Events (2026)
| Event | Trigger | Use Case |
|-------|---------|----------|
| `SessionStart` | startup, resume, clear, compact | Init setup |
| `UserPromptSubmit` | Before processing prompt | Validation |
| `PreToolUse` | Before tool executes | Block with exit 2 |
| `PostToolUse` | After tool completes | Format, lint |
| `PermissionRequest` | Permission asked | Custom approval |
| `Notification` | Notification sent | Alerts |
| `SubagentStart` | Subagent spawns | Logging |
| `SubagentStop` | Subagent completes | Cleanup |
| `Stop` | Session ends | Finalization |
| `TeammateIdle` | Agent idle (teams) | Coordination |
| `TaskCompleted` | Task done (teams) | Progress tracking |
| `PreCompact` | Before compaction | Save context |
| `SessionEnd` | Session terminates | Cleanup |

### Example: Auto-format after edits
```yaml
# .claude/hooks.yaml
PostToolUse:
  - pattern: "Write|MultiEdit"
    command: "npx prettier --write $CLAUDE_FILE"
    workingDirectory: "."

PreToolUse:
  - pattern: "Bash"
    command: "scripts/validate-command.sh"
    # Exit 2 to block the tool
```

### Example: Pre-commit validation
```yaml
PreToolUse:
  - pattern: "GitCommit"
    command: |
      npm run lint
      npm test
      tsc --noEmit
```

---

## 6. Shortcuts

### ZNEW
```
Start fresh. Read CLAUDE.md guidelines.
Confirm project structure and conventions understood.
```

### ZPLAN
```
Analyze request. Create task plan.
Check existing patterns. Use Context7 for APIs.
Confirm approach before coding.
```

### ZCODE
```
Implement plan. Follow TDD.
Run: tsc --noEmit, npm test, npm run lint.
Functions < 20 lines. Match patterns.
```

### ZCHECK
```
Review: no any types, no console.logs
Tests cover critical paths
Inputs validated, errors handled
```

### ZPARALLEL
```
Activate 7-task mode. Create task checklist.
Assign subagents by specialty.
Enable CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 for teams.
```

### ZDONE
```
1. Run full test suite
2. tsc --noEmit (0 errors)
3. lint (0 warnings)
4. git commit (conventional)
5. Update docs if needed
```

### ZDEBUG
```
1. Read full error + stack trace
2. Check basics: npm install? env vars? db?
3. Isolate and test in isolation
4. One fix at a time, verify each
```

### ZFAST
```
Toggle Fast Mode: /fast
Uses Opus 4.6 with lower latency
Shows ↯ icon when active
Best for rapid iteration, live debugging
```

---

## 7. Checklists

### Function Quality
- [ ] Single responsibility
- [ ] < 20 lines
- [ ] Descriptive name
- [ ] Return type declared
- [ ] Inputs validated
- [ ] Specific errors
- [ ] Testable in isolation

### Test Quality
- [ ] One concept per test
- [ ] Tests behavior not implementation
- [ ] Edge cases covered
- [ ] Errors tested
- [ ] Async properly awaited
- [ ] No flaky timing

### Pre-Commit
```
□ tsc --noEmit (0 errors)
□ npm test (all pass)
□ npm run lint (0 warnings)
□ No console.log/secrets
□ Docs updated if API changed
```
