# Quality-First Claude and Codex Agent Pack

> **Installation required:** This nested `agents/` directory is a distribution pack. It is not automatically active for the parent repository. To try the Claude roles without installing them, start Claude Code from the repository root with `--add-dir agents`.

This pack provides eight narrow, platform-native roles for Claude Code and Codex. It optimizes for result quality, explicit routing boundaries, current evidence, single-writer implementation, and real runtime verification.

## Install

| Scope | Claude | Codex |
| --- | --- | --- |
| Project | `<project>/.claude/agents/*.md` | `<project>/.codex/agents/*.toml` |
| Personal | `~/.claude/agents/*.md` | `~/.codex/agents/*.toml` |

Merge the individual files from this pack's matching `.claude/agents/` or `.codex/agents/` source directory. Create only the destination `agents` directory, enumerate every destination file (subfolders included) whose file name or `name` value matches a pack agent, abort if any collision exists, and only then copy the individual files. Claude Code and Codex scan `agents` directories recursively and identify agents by `name`, so a same-named definition anywhere in the tree also collides. Never replace an entire destination `.claude` or `.codex` directory.

Run this project-scoped Claude example from the repository root after replacing the target-project placeholder:

```powershell
$packRoot = (Resolve-Path '.\agents').Path
$projectRoot = (Resolve-Path 'C:\path\to\target-project').Path
$source = Join-Path $packRoot '.claude\agents'
$destination = Join-Path $projectRoot '.claude\agents'
New-Item -ItemType Directory -Path $destination -Force | Out-Null
$nameOf = {
  param($path)
  $match = Select-String -LiteralPath $path -Pattern '^name\s*[:=]\s*["'']?([^"''\s]+)["'']?\s*$' | Select-Object -First 1
  if ($match) { $match.Matches[0].Groups[1].Value }
}
$sourceFiles = @(Get-ChildItem -LiteralPath $source -File)
$packNames = @($sourceFiles | ForEach-Object { & $nameOf $_.FullName })
$collisions = @(Get-ChildItem -LiteralPath $destination -File -Recurse | Where-Object {
  $_.Name -in $sourceFiles.Name -or (& $nameOf $_.FullName) -in $packNames
})
if ($collisions) {
  throw "Refusing to overwrite or shadow: $($collisions.FullName -join ', ')"
}
$sourceFiles | Copy-Item -Destination $destination
```

For Codex, apply the same procedure with `.codex\agents` as both source and destination suffixes. Use the same collision check for personal destinations; overwriting is never the default.

Claude Code watches only `agents` directories that existed when a session started, so restart any running session after installing into a new directory. Codex loads a project's `.codex/agents/` only when the project is trusted; for an untrusted project, trust it or install to `~/.codex/agents/` instead.

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

Claude can select agents from their descriptions, but naming a role in a prompt only suggests it. To guarantee a Claude role runs, @-mention it (type `@agent-codebase-mapper` or pick it from the `@` typeahead), or run the whole session as the role with `claude --agent <name>`. Codex custom-role selection is parent-mediated and must not be treated as guaranteed automatic routing. For high-stakes work, invoke the role explicitly and provide a self-contained target, goal, available evidence, constraints, success criteria, and required output.

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

## Model policy — 2026-10-29

- Claude Fable with maximum effort: `official-docs-researcher` and `solution-architect`.
- Claude Opus with maximum effort: `codebase-mapper`, `root-cause-debugger`, `change-implementer`, `code-reviewer`, `security-reviewer`, and `runtime-verifier`.
- Codex `gpt-6.1-sol` with maximum effort: every role. If your plan or workspace lacks GPT-6.1 Sol, set `model` in each `.codex/agents/*.toml` to a model you can use, and lower `model_reasoning_effort` if that model doesn't support `max`; Codex refuses to spawn a role whose effort its model doesn't support. If Codex reports that Daybreak is unavailable for the model, turn Daybreak off with `/daybreak` (or `-c daybreak=false`) for these runs, or pick a model that supports it.
- Parent orchestration may use Claude Code Ultracode or Codex Ultra for genuinely divisible work; custom workers do not.
- Frontmatter `model` and `effort` are defaults for Claude roles. A per-invocation model or effort, `CLAUDE_CODE_EFFORT_LEVEL`, a forced `CLAUDE_CODE_SUBAGENT_MODEL`, `maxEffortLevel`, or an organization effort cap can change what a role runs on; `/tasks` shows each running subagent's model and effort.

## Permissions and live research

Child configuration expresses intent, not an absolute enforcement boundary. Claude Code always applies each role's `tools` list, but when the parent runs in `auto`, `acceptEdits`, or `bypassPermissions`, the role runs in the parent's mode and its `permissionMode` is ignored. Interactive terminal and VS Code sessions start in `auto` unless `--permission-mode` or `permissions.defaultMode` sets another mode. Codex roles always inherit the parent turn's sandbox and approval settings; Codex ignores `sandbox_mode` in a custom agent file.

Use a constrained parent for enforcement. For Claude, start with `--permission-mode default`; to have plan-mode roles prompt for shell commands instead of using the auto mode classifier, also set `"useAutoModeDuringPlan": false` in user or local settings. For Codex, use `--sandbox read-only` for read-only roles and `--sandbox workspace-write` for `change-implementer`, `root-cause-debugger`, and `runtime-verifier`. Inspect Git state and content state after every read-only invocation.

Codex documentation research requires live web search, and a custom agent file cannot turn it on: Codex roles inherit the parent's `web_search` mode, which defaults to `cached` in sandboxed sessions. Start the parent with `-c web_search=live` before delegating to `official-docs-researcher`. If managed policy or provider restrictions prevent live search, `official-docs-researcher` must return `STATUS: blocked` instead of relying on stale or cached information.

## Compatibility

VS Code and Copilot CLI can consume the Claude-format agents. GitHub.com cloud requires separate `.github/agents/*.agent.md` files; this pack intentionally does not duplicate the definitions there.

## Validate

Use the native diagnostics and an explicit invocation:

```powershell
claude doctor
claude plugin validate .claude\agents
claude --agent <name> -p "Perform the scoped task and return the ROLE and STATUS markers."
codex doctor --summary
codex exec --strict-config --sandbox read-only "Spawn the <name> custom agent and return its response verbatim."
```

Run a real smoke invocation for every role. Confirm its exact `ROLE:` marker, observable result, and side effects; after read-only work, confirm Git and content state are unchanged. Diagnostic success alone is not role-discovery or behavior proof.

- `claude doctor` checks installation and settings, not agent files. `claude plugin validate` reports agent files whose frontmatter doesn't parse, which Claude Code otherwise skips, logging the error only to the debug log. To find a misspelled field, run `claude --debug` and search the debug log for `does not recognize or apply`.
- A `claude -p` run without a permission mode denies tool calls that need approval. Pre-approve each role's smoke-test calls, for example `--allowedTools "WebSearch" "WebFetch"` for `official-docs-researcher`, or expect `STATUS: blocked`. Where Fable bills to usage credits, `claude -p` runs of the Fable roles bill without asking.
- Codex roles inherit the parent sandbox and search mode: smoke-test `change-implementer`, `root-cause-debugger`, and `runtime-verifier` with `--sandbox workspace-write`, and `official-docs-researcher` with `-c web_search=live`.

## Migration

The 109 generic or overlapping legacy personas, broken prose-only routing, stale version pins, and the third-party installer were removed deliberately. There are no compatibility aliases.

## Primary sources

- [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code permission modes](https://code.claude.com/docs/en/permission-modes)
- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)
- [Claude model selection](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model)
- [Claude Opus 5.5 prompting guidance](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5)
- [Claude Fable 5.1 prompting guidance](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1)
- [Codex custom agents](https://learn.chatgpt.com/docs/agent-configuration/subagents#custom-agents)
- [Codex configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference)
- [Codex models](https://learn.chatgpt.com/docs/models)
- [Codex best practices](https://learn.chatgpt.com/guides/best-practices)
- [VS Code custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [GitHub Copilot custom-agent configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration)
