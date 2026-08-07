# Quality-First Claude and Codex Agent Pack

> **Installation required:** This nested `agents/` directory is a distribution pack. It is not automatically active for the parent repository.

This pack provides eight narrow, platform-native roles for Claude Code and Codex. It optimizes for result quality, explicit routing boundaries, current evidence, single-writer implementation, and real runtime verification.

## Install

| Scope | Claude | Codex |
| --- | --- | --- |
| Project | `<project>/.claude/agents/*.md` | `<project>/.codex/agents/*.toml` |
| Personal | `~/.claude/agents/*.md` | `~/.codex/agents/*.toml` |

Merge the individual files from this pack's matching `.claude/agents/` or `.codex/agents/` source directory. Create only the destination `agents` directory, enumerate every same-name target, abort if any collision exists, and only then copy the individual files. Never replace an entire destination `.claude` or `.codex` directory.

Run this project-scoped Claude example from the repository root after replacing the target-project placeholder:

```powershell
$packRoot = (Resolve-Path '.\agents').Path
$projectRoot = (Resolve-Path 'C:\path\to\target-project').Path
$source = Join-Path $packRoot '.claude\agents'
$destination = Join-Path $projectRoot '.claude\agents'
New-Item -ItemType Directory -Path $destination -Force | Out-Null
$sourceFiles = @(Get-ChildItem -LiteralPath $source -File)
$collisions = @($sourceFiles | Where-Object {
  Test-Path -LiteralPath (Join-Path $destination $_.Name)
})
if ($collisions) {
  throw "Refusing to overwrite: $($collisions.Name -join ', ')"
}
$sourceFiles | Copy-Item -Destination $destination
```

For Codex, apply the same procedure with `.codex\agents` as both source and destination suffixes. Use the same collision check for personal destinations; overwriting is never the default.

## Route work

| Agent | Delegate when | Do not delegate when | Access |
|---|---|---|---|
| `codebase-mapper` | A task needs repository structure, ownership, entry points, data flow, or change-surface mapping before a decision | Current external documentation, implementation, or post-change review is the primary job | Read-only |
| `official-docs-researcher` | A decision depends on current official documentation, releases, schemas, supported models, or version-specific behavior | The answer primarily requires tracing local code or implementing a change | Read-only plus web access |
| `solution-architect` | Multiple viable designs or cross-component boundaries require explicit trade-offs before implementation | A small fix is already specified or the root cause is still unknown | Read-only |
| `root-cause-debugger` | A failure must be reproduced, isolated, and explained before a fix is written | The cause is established and implementation is authorized | Runtime-capable; source read-only |
| `change-implementer` | Requirements or root cause are clear and one scoped, complete change is authorized | The task is still exploratory, requires product direction, or asks only for review | Workspace write |
| `code-reviewer` | An existing diff or implementation needs correctness, regression, and maintainability review | Deep exploitability analysis or active implementation is the main task | Read-only |
| `security-reviewer` | Trust boundaries, attacker control, exploit paths, or security-impacting changes need specialist review | Generic correctness review without a meaningful security boundary is sufficient | Read-only |
| `runtime-verifier` | A completed change must be exercised through the real user-facing or integration boundary | Implementation is incomplete or only static analysis is requested | Runtime-capable; source read-only |

## Invoke roles

Claude can select agents from their descriptions. Codex custom-role selection is parent-mediated and must not be treated as guaranteed automatic routing. For high-stakes work, name the role explicitly and provide a self-contained target, goal, available evidence, constraints, success criteria, and required output.

```powershell
claude --agent codebase-mapper -p "Map the request path for authentication. Do not edit files."
codex exec --strict-config --sandbox read-only "Spawn the codebase-mapper custom agent to map the authentication request path and return its response verbatim."
```

## Quality workflow

1. `codebase-mapper` and `official-docs-researcher` may run independently when their inputs do not depend on one another.
2. `solution-architect` follows established repository and platform evidence.
3. For an unknown failure, `root-cause-debugger` reproduces and explains it before implementation.
4. One `change-implementer` owns all writes unless work is explicitly partitioned into independent surfaces.
5. After a diff exists, `code-reviewer` and `security-reviewer` may run independently.
6. `runtime-verifier` runs last against the completed change and the real user-facing or integration boundary.

Keep dependent phases sequential. Parallelize only independent read-heavy work, and keep write-heavy work single-owner.

## Model policy — 2026-08-08

- Claude Fable with maximum effort: `official-docs-researcher`, `solution-architect`, and `security-reviewer`.
- Claude Opus with maximum effort: `codebase-mapper`, `root-cause-debugger`, `change-implementer`, `code-reviewer`, and `runtime-verifier`.
- Codex `gpt-5.6-sol` with maximum effort: every role.
- Parent orchestration may use Ultra for genuinely divisible work; custom workers do not.

## Permissions and live research

Child configuration expresses intent, not an absolute enforcement boundary. Parent Claude modes such as `acceptEdits`, `bypassPermissions`, and `auto`, and live Codex parent sandbox overrides, can override child restrictions. Use a constrained parent for enforcement, then inspect Git state and content state after every read-only invocation.

Codex documentation research requires live web search. If managed policy or provider restrictions prevent live search, `official-docs-researcher` must return `STATUS: blocked` instead of relying on stale or cached information.

## Compatibility

VS Code and Copilot CLI can consume the Claude-format agents. GitHub.com cloud requires separate `.github/agents/*.agent.md` files; this pack intentionally does not duplicate the definitions there.

## Validate

Use the native diagnostics and an explicit invocation:

```powershell
claude doctor
claude --agent <name> -p "Perform the scoped task and return the ROLE and STATUS markers."
codex doctor --summary
codex exec --strict-config --sandbox read-only "Spawn the <name> custom agent and return its response verbatim."
```

Run a real smoke invocation for every role. Confirm its exact `ROLE:` marker, observable result, and side effects; after read-only work, confirm Git and content state are unchanged. Diagnostic success alone is not role-discovery or behavior proof.

## Migration

The 109 generic or overlapping legacy personas, broken prose-only routing, stale version pins, and the third-party installer were removed deliberately. There are no compatibility aliases.

## Primary sources

- [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)
- [Claude model selection](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model)
- [Claude Opus 5 prompting guidance](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5)
- [Codex custom agents](https://learn.chatgpt.com/docs/agent-configuration/subagents#custom-agents)
- [Codex models](https://learn.chatgpt.com/docs/models)
- [Codex best practices](https://learn.chatgpt.com/guides/best-practices)
- [VS Code custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [GitHub Copilot custom-agent configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration)
