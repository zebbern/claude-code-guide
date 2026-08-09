<div align="center">

<h2 id="claude-code-community-guide">Claude Code Guide</h2>

_For reference and contributions, visit the [official Claude Code documentation](https://code.claude.com/docs/en/overview)_

_Verified against **Claude Code v2.1.224** and this repository's changelog through **v2.1.223** (checked 2026-08-08). Commands and provider model mappings change quickly; the linked official references remain authoritative._

![Claude Code](https://img.shields.io/npm/v/@anthropic-ai/claude-code?label=Claude%20Code&logo=anthropic)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/anthropics/claude-code)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

</div>

<div align="center">

<kbd>

| Section                               | Status | Other Resources                                                                                         |
| ------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| Getting Started                       | ✅   | **Claude-Code** [Docs](https://code.claude.com/docs/en/overview)                                    |
| Configuration & Environment Variables | ✅   | **Claude-Code via** [**Discord**](https://github.com/zebbern/claude-code-discord)                       |
| Commands & Usage                      | ✅   | Security Agents [SKILL.md](https://github.com/zebbern/claude-code-guide/tree/main/skills)               |
| Interface & Input                     | ✅   | Let Agent Create [SKILL.md](https://github.com/zebbern/agent-skills-authoring)                          |
| Advanced Features                     | ✅   | 954+ Agent [Skills](https://github.com/zebbern/antigravity-awesome-skills)                              |
| Automation & Integration              | ✅   | No cost ai [resources](https://github.com/zebbern/no-cost-ai)                                           |
| Help & Troubleshooting                | ✅   | 250+ Mermaid [templates](https://github.com/zebbern/mermaid-templates)                                  |
| Third-Party Integrations              | ✅   | Discord Communication [MCP](https://github.com/zebbern/discord-mcp-agent)                               |


</kbd>

</div>

---

<h3 id="content">Contents</h3>

**Fast paths:** [Install](#quick-start) · [Commands](#claude-commands) · [Config](#configuration--environment) · [MCP](#mcp-integration) · [Agents](#sub-agents) · [Troubleshoot](#help--troubleshooting)

| Area | Start here | Also useful |
| --- | --- | --- |
| [Getting Started](#getting-started) | [Quick Start](#quick-start) | [Initial Setup](#initial-setup), [System Requirements](#system-requirements) |
| [Configuration](#configuration--environment) | [Environment Variables](#environment-variables) | [Configuration Files](#configuration-files) |
| [Commands](#commands--usage) | [Slash Commands](#claude-commands) | [CLI Quick Reference](#cheat-sheet) |
| [Interface](#interface--input) | [Keyboard Shortcuts](#keyboard-shortcuts) | [Vim Mode](#vim-mode) |
| [Advanced Features](#advanced-features) | [Plan Mode](#plan-mode), [Auto Mode](#auto-mode), [MCP](#mcp-integration) | [Sub Agents](#sub-agents), [Skills](#skills), [Hooks](#hooks-system) |
| [Security](#security--permissions) | [Security & Permissions](#security--permissions) | [Dangerous Mode](#dangerous-mode), [Best Practices](#security-best-practices-main) |
| [Automation](#automation--integration) | [Automation & Scripting](#automation--scripting-with-claude-code) | [PR Review](#auto-pr-review-inline-comments), [Issue Triage](#issue-triage-suggest-labels--severity) |
| [Help](#help--troubleshooting) | [Troubleshooting](#help--troubleshooting) | [Best Practices](#best-practices), [Monitoring](#monitoring--alerting) |
| [Third-Party Integrations](#third-party-integrations) | [DeepSeek Integration](#deepseek-integration) | [Provider Setup Examples](#provider-setup-examples) |

<details>
<summary>Full content map</summary>

- **[Getting Started](#getting-started)**
  - [Quick Start](#quick-start)
  - [System Requirements](#system-requirements)
  - [Initial Setup](#initial-setup)

- **[Configuration & Environment](#configuration--environment)**
  - [Environment Variables](#environment-variables)
  - [Configuration Files](#configuration-files)

- **[Commands & Usage](#commands--usage)**
  - [Slash Command Reference](#claude-commands)
  - [CLI Quick Reference](#cheat-sheet)

- **[Interface & Input](#interface--input)**
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [Vim Mode](#vim-mode)

- **[Advanced Features](#advanced-features)**
  - [Thinking Mode](#thinking-keywords)
  - [Effort Levels](#effort-levels)
  - [Advisor Tool](#advisor-tool)
  - [Fast Mode](#fast-mode)
  - [Auto Mode](#auto-mode)
  - [Plan Mode](#plan-mode)
  - [Background Tasks](#background-tasks)
  - [Workflows & Scheduling](#workflows--scheduling)
  - [Remote Sessions](#remote-sessions)
  - [Claude in Chrome](#claude-in-chrome)
  - [Desktop and IDEs](#desktop-and-ides)
  - [Sandbox Mode](#sandbox-mode)
  - [LSP Tool](#lsp-tool)
  - [Sub Agents](#sub-agents)
  - [Agent Teams](#agent-teams)
  - [Skills](#skills)
  - [Plugin System](#plugin-system)
  - [Worktree Isolation](#worktree-isolation)
  - [Native Installer](#native-installer)
  - [Authentication CLI](#claude-auth)
  - [Agent Management CLI](#claude-agents-cli)
  - [Remote Control](#remote-control)
  - [Managed Settings](#managed-settings)
  - [Model Updates](#model-updates)
  - [Theming & Customization](#theming--customization)
  - [Code Review](#code-review)
  - [Insights](#insights)
  - [MCP Integration](#mcp-integration)
  - [Hooks System](#hooks-system)

- **[Security & Permissions](#security--permissions)**
  - [Dangerous Mode](#dangerous-mode)
  - [Security Best Practices](#security-best-practices-main)

- **[Automation & Integration](#automation--integration)**
  - [Automation & Scripting](#automation--scripting-with-claude-code)
  - [Auto PR Review](#auto-pr-review-inline-comments)
  - [Issue Triage](#issue-triage-suggest-labels--severity)

- **[Help & Troubleshooting](#help--troubleshooting)**
  - [Installation Issues](#installation--nodejs-issues)
  - [MCP Issues](#mcp-model-context-protocol-issues)
  - [Best Practices](#best-practices)
  - [Monitoring & Alerting](#monitoring--alerting)

- **[Third-Party Integrations](#third-party-integrations)**
  - [Provider Setup Examples](#provider-setup-examples)
  - [DeepSeek Integration](#deepseek-integration)

</details>

---

<h1 id="getting-started">Getting Started</h1>

**Enable completion alerts:** run `/config` inside Claude Code and choose a notification channel such as **Terminal bell**.

<h2 id="quick-start">Quick Start</h2>

> [!TIP]
> **Run <mark>claude</mark> in a project directory to start the interface.**
>
> **Go to [Help & Troubleshooting](#help--troubleshooting) to fix issues...**

**Native installer (recommended; no Node.js required)**

macOS, Linux, or WSL:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell:

```powershell
irm https://claude.ai/install.ps1 | iex
```

Windows CMD:

```bat
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

Supported package managers (manual updates by default):

```bash
brew install --cask claude-code
winget install Anthropic.ClaudeCode
```

npm distribution (supported; Node.js 22+ is required to install):

```bash
npm install -g @anthropic-ai/claude-code
```

Verify the installation, then start Claude Code:

```bash
claude --version
claude doctor
claude
```

Native installs update themselves. Homebrew, WinGet, and the signed `apt`, `dnf`, and `apk` repositories follow their package manager's update flow. See the [official setup guide](https://code.claude.com/docs/en/setup) for channels, version pinning, Linux repository setup, and signature verification. For an npm install, upgrade with `npm install -g @anthropic-ai/claude-code@latest`; do not use `sudo npm install -g`.

---

> [!Tip]
> <ins>**Open Project Via Terminal Into VS Code / Cursor**</ins>
>
> ### $ - <kbd>cd /path/to/project</kbd>
>
> ### $ - <kbd>code .</kbd>
>
> **Make sure you have the <mark>(Claude Code extension)</mark> installed in your VS Code / Cursor**

---

<h2 id="system-requirements">System Requirements</h2>

> - OS: macOS 13+, Windows 10 1809+/Windows Server 2019+, Ubuntu 20.04+, Debian 10+, or Alpine Linux 3.19+. Native Windows, WSL 1, and WSL 2 are supported.

> - Hardware: 4 GB+ RAM and an x64 or ARM64 processor

> - Software: Git is optional on native Windows; without Git for Windows, Claude uses the PowerShell tool instead of Bash. Node.js 22+ is required only to install through npm; the installed CLI is a native binary.

> - Internet: Connection for API calls

---

<h2 id="initial-setup">Initial Setup</h2>

Claude Code requires a Pro, Max, Team, Enterprise, or Console account; the free Claude.ai plan does not include Claude Code. The normal first-party flow is browser sign-in:

```bash
claude auth login             # Claude subscription
claude auth login --console   # Anthropic Console/API billing
claude auth status            # Verify the active login
```

For API automation or a provider/gateway deployment, inject credentials from an OS key store or secret manager instead of committing them:

```bash
export ANTHROPIC_API_KEY="$SECRET_FROM_YOUR_STORE" # bash/zsh: current process only
```

```powershell
$env:ANTHROPIC_API_KEY = $secretFromYourStore # PowerShell: current process only
```

> [!Important]
> A persistent `ANTHROPIC_API_KEY`, `ANTHROPIC_AUTH_TOKEN`, or credential helper selects API/provider authentication even if you are logged in. Subscription-only features such as Remote Control, cloud sessions, claude.ai MCP connectors, and notification preferences then remain unavailable. Do not commit credentials; use your platform's secret storage.

---

<h1 id="configuration--environment">Configuration & Environment</h1>

<h2 id="environment-variables">Environment Variables</h2>

> **Environment values can also be stored as strings under the `env` key in a `settings.json` file. The [official environment-variable reference](https://code.claude.com/docs/en/env-vars) is the exhaustive source.**

> [!Important]
> **On PowerShell, use `$env:NAME = "value"` for the current process. Persist secrets through an OS key store or secret manager, not a checked-in settings file.**

```bash
# Authentication and routing: set only when API/provider billing is intentional
export ANTHROPIC_API_KEY="$SECRET_FROM_YOUR_STORE"
export ANTHROPIC_AUTH_TOKEN="$TOKEN_FROM_YOUR_STORE"
export ANTHROPIC_BASE_URL="https://gateway.example.com"
export ANTHROPIC_CUSTOM_HEADERS="X-Trace-Id: 12345"

# Model selection and provider alias overrides
export ANTHROPIC_MODEL="sonnet"
export ANTHROPIC_DEFAULT_FABLE_MODEL="<provider-fable-model-id>"
export ANTHROPIC_DEFAULT_OPUS_MODEL="<provider-opus-model-id>"
export ANTHROPIC_DEFAULT_SONNET_MODEL="<provider-sonnet-model-id>"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="<provider-haiku-model-id>"

# Third-party provider selection (enable only one deployment path)
# export CLAUDE_CODE_USE_BEDROCK=1
# export ANTHROPIC_BEDROCK_REGION_PREFIX=eu # Prefer eu/us/apac/jp/au/global cross-region inference on Bedrock
# export CLAUDE_CODE_USE_VERTEX=1
# export CLAUDE_CODE_USE_FOUNDRY=1

# Timeouts and output budgets, in milliseconds/tokens
export API_TIMEOUT_MS=1200000
export BASH_DEFAULT_TIMEOUT_MS=120000
export BASH_MAX_TIMEOUT_MS=600000
export MCP_TIMEOUT=30000
export MCP_TOOL_TIMEOUT=60000
export MAX_MCP_OUTPUT_TOKENS=25000
export MAX_THINKING_TOKENS=0 # 0 disables fixed thinking where supported; positive values set a budget

# Session, context, agents, and accessibility
# export CLAUDE_CODE_SIMPLE=1
# export CLAUDE_CODE_SAFE_MODE=1
export CLAUDE_CODE_DISABLE_1M_CONTEXT=1 # Clamp native-1M models to 200K via autocompaction; warns if the clamp is not enforced
export CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 # Opt out of enforcing the assumed context window for unknown model IDs
export CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS=20
export CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=3
export CLAUDE_CODE_FORWARD_SUBAGENT_TEXT=1
export CLAUDE_AX_SCREEN_READER=1

# Feature and administration controls
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
export CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1
export CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1
export CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE=1
export ENABLE_CLAUDEAI_MCP_SERVERS=false

# Network routing
export HTTP_PROXY="http://proxy.example.com:8080"
export HTTPS_PROXY="http://proxy.example.com:8080"
export NO_PROXY="localhost,127.0.0.1"

# Privacy/network reduction: these are presence-based; unset them to turn them off
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
export DISABLE_TELEMETRY=1
export DISABLE_ERROR_REPORTING=1
```

The block is a catalog, not a recommended profile—do not enable mutually exclusive provider variables together. Boolean variables usually accept `1`/`true` and `0`/`false`, but the three presence-based variables shown at the end treat any non-empty value, including `0`, as enabled. Environment values in `settings.json` override the shell value at startup and when the file changes.

<h2 id="global-config-options">Global Config Options</h2>

Use `/config` for interactive settings, or pass one or more `key=value` pairs. Run `/config --help` for the keys supported by your installed build.

```bash
/config                         # Open the settings UI
/config theme=dark model=sonnet # Update supported keys directly
```

For version-controlled or managed configuration, edit JSON settings files directly:

| Scope | File |
| :---- | :--- |
| User | `~/.claude/settings.json` |
| Project (shared) | `.claude/settings.json` |
| Project (private) | `.claude/settings.local.json` |
| Managed | macOS: `/Library/Application Support/ClaudeCode/`<br />Linux/WSL: `/etc/claude-code/`<br />Windows: `C:\Program Files\ClaudeCode\` |

```json
{
  "model": "sonnet",
  "theme": "dark",
  "autoUpdatesChannel": "stable",
  "permissions": {
    "defaultMode": "default"
  }
}
```

Settings precedence is **managed policy → CLI arguments/`--settings` → local → project → user**. Permission arrays have their own merge rules, so read the [settings reference](https://code.claude.com/docs/en/settings) before relying on ordinary last-writer-wins behavior. `~/.claude.json` stores global state, session/trust data, and local/user MCP configuration; it is not the user settings file.

<h2 id="configuration-files">Configuration Files</h2>

Claude Code combines human-authored instructions from several locations:

| Memory Type                | Location                                                                                                                                                | Purpose                                             | Use Case Examples                                                    | Shared With                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------- |
| **Enterprise policy**      | macOS: `/Library/Application Support/ClaudeCode/CLAUDE.md`<br />Linux: `/etc/claude-code/CLAUDE.md`<br />Windows: `C:\Program Files\ClaudeCode\CLAUDE.md` | Organization-wide instructions managed by IT/DevOps | Company coding standards, security policies, compliance requirements | All users in organization       |
| **Project memory**         | `./CLAUDE.md` or `./.claude/CLAUDE.md`                                                                                                                  | Team-shared instructions for the project            | Project architecture, coding standards, common workflows             | Team members via source control |
| **User memory**            | `~/.claude/CLAUDE.md`                                                                                                                                   | Personal preferences for all projects               | Code styling preferences, personal tooling shortcuts                 | Just you (all projects)         |
| **Project memory (local)** | `./CLAUDE.local.md`                                                                                                                                     | Personal project-specific preferences (git-ignored) | Your sandbox URLs, preferred test data, personal overrides           | Just you (current project)      |
| **Project rules**          | `.claude/rules/**/*.md`                                                                                                                                 | Modular project rules (loaded alongside CLAUDE.md)  | Linting rules, API conventions, path-scoped standards                 | Team members via source control |

> Instruction files are concatenated rather than overriding one another. User and ancestor-project files load at startup; `CLAUDE.md` files in subdirectories load lazily when Claude works there. `CLAUDE.md` is context, not an enforcement boundary.

Use `@path` to import another file. Claude Code does not load `AGENTS.md` automatically; add `@AGENTS.md` to `CLAUDE.md` (or use a symlink where portable) when you want to share those instructions.

#### `.claude/rules/` Directory

The `.claude/rules/` directory lets you break project instructions into separate Markdown files instead of one large `CLAUDE.md`. Markdown files are discovered recursively. Add `paths` frontmatter with glob patterns when a rule should load only for matching files. This is useful for:

- **Modular organization**: Separate concerns (e.g., `api-conventions.md`, `testing-rules.md`)
- **Per-directory overrides**: Nested `rules/` directories can apply scoped rules
- **Team collaboration**: Different team members can own different rule files via PR review

#### Auto-Memory

Claude can save useful working context under `~/.claude/projects/<project>/memory/`. It loads the first 200 lines or 25 KB of `MEMORY.md`; use `/memory` to inspect, edit, disable, or remove saved memories. Auto-memory is machine-local and shared across worktrees for the same repository.

Auto-memory is most useful for context you would otherwise repeat across sessions:

- Preferred build, test, and lint commands
- Local conventions that are not obvious from code alone
- Architecture decisions that influence future edits
- Team preferences that should shape how Claude proposes changes

Keep durable team rules in `CLAUDE.md` or `.claude/rules/`. Treat auto-memory as helpful working context, not as the only source of truth.

---

<h1 id="commands--usage">Commands & Usage</h1>

<h2 id="claude-commands">Slash Command Reference</h2>

Type `/` to see what your installed build, plan, platform, plugins, MCP servers, and skills actually provide. The table below is a high-value snapshot; use the [official command reference](https://code.claude.com/docs/en/commands) for the live list.

| Command | Purpose |
| :------ | :------ |
| `/add-dir <path>` | Grant this session access to another working directory |
| `/advisor [model\|off]` | Configure the experimental second-model advisor, save the selection, or turn it off |
| `/agents` | Explain how to create or edit subagents; the old interactive agent wizard was removed in v2.1.198 |
| `/background [prompt]` | Detach the current conversation as a background session (`/bg` alias) |
| `/batch <instruction>` | Decompose a large change into worktree-isolated background units (bundled skill) |
| `/branch [name]` | Switch into a new branch of the current conversation while preserving the original |
| `/btw [question]` | Ask an ephemeral side question without adding it to conversation history |
| `/cd <path>` | Move the current session to another working directory |
| `/clear [name]` | Start a new conversation with empty context while preserving project memory |
| `/code-review [level] [--fix] [--comment] [target]` | Run a local background review, or use level `ultra` for cloud review; levels run from `low` through `max` |
| `/compact [instructions]` | Summarize the conversation to free context |
| `/config [key=value ...]` | Open settings or update supported keys directly (`/settings` alias) |
| `/context [all]` | Visualize what is using the context window |
| `/diff` | Open the interactive current/per-turn diff viewer |
| `/doctor` | Diagnose setup, configuration, hooks, memory, plugins, and MCP; can offer fixes (`/checkup` alias) |
| `/effort [level|auto]` | Set model-dependent effort: `low`, `medium`, `high`, `xhigh`, `max`, or `ultracode` |
| `/fast [on|off]` | Toggle fast mode where the selected Opus model and plan support it |
| `/fork [prompt]` | Copy this conversation into a worktree-isolated background session and keep working here |
| `/goal [condition|clear]` | Keep working across turns until a completion condition is met |
| `/hooks` | Inspect configured hooks in the read-only hook browser |
| `/import [codex|gemini]` | Preview or migrate supported configuration from another coding agent |
| `/init` | Generate a starter `CLAUDE.md` for the project |
| `/loop [interval] [prompt]` | Run a prompt repeatedly while the session remains open |
| `/mcp` | Inspect, authenticate, enable, disable, or reconnect MCP servers |
| `/memory` | Manage `CLAUDE.md`, rules, and auto-memory |
| `/model [model]` | Switch model and normally save it as the default; press `s` in the picker for session-only selection |
| `/permissions` | Manage allow, ask, and deny rules (`/allowed-tools` alias) |
| `/plan [description]` | Enter plan mode, optionally with a task |
| `/plugin [subcommand]` | Discover, install, enable, disable, and manage plugins |
| `/reload-plugins [--force]` | Apply plugin changes without restarting when safe |
| `/remote-control [name]` | Expose this local session to claude.ai/code or the Claude mobile app |
| `/resume [session]` | Resume by ID/name or open the session picker |
| `/review ...` | Alias for `/code-review` as of v2.1.223 |
| `/rewind` | Restore or summarize code and conversation from a checkpoint |
| `/sandbox` | View and configure Bash filesystem/network sandboxing on supported platforms |
| `/security-review` | Review the current branch diff for security vulnerabilities |
| `/simplify` | Review changed code for reuse, quality, and efficiency improvements |
| `/subtask [prompt]` | Run the former in-session fork behavior as a subagent that reports back here |
| `/tasks` | List the current session's background shells, subagents, and tool calls |
| `/teleport [session]` | Copy a Claude Code web session into the local terminal |
| `/usage` | Show subscription usage and rate-limit status |
| `/workflows` | Inspect dynamic workflow runs and background orchestration |

<h2 id="command-line-flags">Command Line Flags</h2>

| Flag / Command                                       | Description                                                                                                                                                  | Example                                                                                |
| :--------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| `-d, --debug`                                        | Enable debug mode (shows detailed debug output).                                                                                                             | `claude -d -p "query"`                                                                 |
| `--include-partial-messages`                         | Include partial streaming events; requires print mode and `stream-json`.                                                                                     | `claude -p --output-format stream-json --include-partial-messages "query"`             |
| `--include-hook-events`                              | Include hook lifecycle events in `stream-json` output.                                                                                                        | `claude -p --output-format stream-json --include-hook-events "query"`                  |
| `--forward-subagent-text`                            | Forward subagent text/thinking with `parent_tool_use_id` in `stream-json`.                                                                                    | `claude -p --output-format stream-json --forward-subagent-text "query"`                |
| `--verbose`                                          | Override verbose mode setting from config (shows expanded logging / turn-by-turn output).                                                                    | `claude --verbose`                                                                     |
| `-p, --print`                                        | Print response and exit (useful for piping output).                                                                                                          | `claude -p "query"`                                                                    |
| `--output-format <format>`                           | Output format (only works with `--print`): `text` (default), `json` (single result), or `stream-json` (realtime streaming).                                  | `claude -p "query" --output-format json`                                               |
| `--input-format <format>`                            | Input format (only works with `--print`): `text` (default) or `stream-json` (realtime streaming input).                                                      | `claude -p --output-format stream-json --input-format stream-json`                     |
| `--replay-user-messages`                             | Re-emit user messages from stdin back to stdout for acknowledgment — **only works with** print mode plus `stream-json` input and output.                    | `claude -p --verbose --input-format stream-json --output-format stream-json --replay-user-messages` |
| `--allowedTools`, `--allowed-tools <tools...>`       | Comma/space-separated permission rules to allow.                                                                                                              | `claude --allowed-tools "Bash(git *)" "Edit"`                                        |
| `--disallowedTools`, `--disallowed-tools <tools...>` | Comma/space-separated permission rules to deny.                                                                                                               | `claude --disallowed-tools "Edit"`                                                     |
| `--mcp-config <configs...>`                          | Load MCP servers from JSON files or strings (space-separated).                                                                                               | `claude --mcp-config ./mcp-servers.json`                                               |
| `--strict-mcp-config`                                | Only use MCP servers from `--mcp-config`, ignoring other MCP configurations.                                                                                 | `claude --mcp-config ./a.json --strict-mcp-config`                                     |
| `--append-system-prompt <prompt>`                    | Append a system prompt to the default system prompt (useful in print mode).                                                                                  | `claude -p --append-system-prompt "Do X then Y"`                                       |
| `--autocompact <auto\|tokens>`                       | Override the auto-compaction window for this session.                                                                                                        | `claude --autocompact 500k`                                                           |
| `--ax-screen-reader`                                 | Use a flat, screen-reader-friendly renderer without decorative borders or animations.                                                                         | `claude --ax-screen-reader`                                                           |
| `--bare`                                             | Minimal scripted mode: skip discovered hooks, skills, plugins, MCP, auto-memory, and `CLAUDE.md`.                                                             | `claude --bare -p "query"`                                                           |
| `--permission-mode <mode>`                           | Start in `default`/`manual`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, or `plan`.                                                               | `claude --permission-mode plan`                                                        |
| `--permission-prompt-tool <tool>`                    | Specify an MCP tool to handle permission prompts in non-interactive mode.                                                                                    | `claude -p --permission-prompt-tool mcp_auth_tool "query"`                             |
| `--fallback-model <models>`                          | In print mode, try a comma-separated fallback chain when the primary model is unavailable.                                                                   | `claude -p --fallback-model sonnet,haiku "query"`                                    |
| `--effort <level>`                                   | Set effort to `low`, `medium`, `high`, `xhigh`, or `max`, or start session-only `ultracode` mode where supported.                                              | `claude --effort high`                                                                |
| `--model <model>`                                    | Model for the current session. Accepts aliases like `sonnet`/`opus` or a full model ID when pinning.                                                         | `claude --model sonnet`                                                                |
| `--advisor <model>`                                  | Set the experimental advisor for this session without changing `advisorModel`; intentionally omitted from `claude --help`.                                  | `claude --advisor opus`                                                                |
| `--settings <file-or-json>`                          | Load additional settings from a JSON file or a JSON string.                                                                                                  | `claude --settings ./settings.json`                                                    |
| `--add-dir <directories...>`                         | Additional directories to allow tool access to.                                                                                                              | `claude --add-dir ../apps ../lib`                                                      |
| `--ide`                                              | Automatically connect to an IDE on startup if exactly one valid IDE is available.                                                                            | `claude --ide`                                                                         |
| `-c, --continue`                                     | Continue the most recent conversation in the current directory.                                                                                              | `claude --continue`                                                                    |
| `-r, --resume [sessionId]`                           | Resume a conversation; provide a session ID or interactively select one.                                                                                     | `claude -r "abc123"`                                                                   |
| `--session-id <uuid>`                                | Use a specific session ID for the conversation (must be a valid UUID).                                                                                       | `claude --session-id 123e4567-e89b-12d3-a456-426614174000`                             |
| `--agents <json>`                                    | Define custom subagents dynamically via JSON (see subagent docs for format).                                                                                 | `claude --agents '{"reviewer":{"description":"Reviews code","prompt":"..."}}'`         |
| `--agent <name>`                                     | Specify a specific agent for the current session.                                                                                                            | `claude --agent my-custom-agent`                                                       |
| `--bg`                                               | Start or continue work as a background session that can be viewed from `claude agents`.                                                                      | `claude --bg "fix failing tests"`                                                      |
| `--bg --exec <command>`                              | Run a shell command as an attachable background session.                                                                                                     | `claude --bg --exec "npm test"`                                                        |
| `--name <label>`                                     | Name a background or remote session for easier identification.                                                                                               | `claude --bg --name nightly-check "run checks"`                                       |
| `--chrome`                                           | Enable Chrome browser integration for web automation and testing.                                                                                            | `claude --chrome`                                                                      |
| `--no-chrome`                                        | Disable Chrome browser integration for this session.                                                                                                         | `claude --no-chrome`                                                                   |
| `--cloud [description\|session\|url]`               | Create or attach to a Claude Code web session on claude.ai.                                                                                                  | `claude --cloud "Fix the login bug"`                                                   |
| `--remote`                                           | Deprecated alias for `--cloud`.                                                                                                                              | `claude --remote "Fix the login bug"`                                                  |
| `--remote-control`, `--rc`                           | Start an interactive local session that can also be controlled from claude.ai or the Claude app.                                                            | `claude --remote-control "My Project"`                                                 |
| `--teleport [session]`                               | Resume a web session in your local terminal.                                                                                                                 | `claude --teleport <session-id>`                                                       |
| `--fork-session`                                     | When resuming, create a new session ID instead of reusing the original.                                                                                      | `claude --resume abc123 --fork-session`                                                |
| `--json-schema <schema>`                             | Get validated JSON output matching a JSON Schema after agent completes (print mode only).                                                                    | `claude -p --json-schema '{"type":"object",...}' "query"`                              |
| `--max-budget-usd <amount>`                          | Maximum dollar amount to spend on API calls before stopping (print mode only).                                                                               | `claude -p --max-budget-usd 5.00 "query"`                                              |
| `--max-turns <n>`                                    | Limit the number of agentic turns (print mode only). Exits with error when limit reached.                                                                    | `claude -p --max-turns 3 "query"`                                                      |
| `--betas <headers>`                                  | Beta headers to include in API requests (API key users only).                                                                                                | `claude --betas interleaved-thinking`                                                  |
| `--tools <tools>`                                    | Restrict which built-in tools Claude can use. Use "" to disable all, "default" for all, or specific tool names.                                              | `claude --tools "Bash,Edit,Read"`                                                      |
| `--system-prompt <prompt>`                           | Replace the entire system prompt with custom text (works in interactive and print modes).                                                                    | `claude --system-prompt "You are a Python expert"`                                     |
| `--system-prompt-file <file>`                        | Load a system prompt from a file, replacing the default in interactive or print mode.                                                                         | `claude --system-prompt-file ./custom-prompt.txt`                                      |
| `--append-system-prompt-file <file>`                 | Load additional system-prompt text from a file in interactive or print mode.                                                                                  | `claude --append-system-prompt-file ./extra-rules.txt`                                 |
| `--plugin-dir <path>`                                | Load a plugin directory or `.zip` for this session only (repeatable).                                                                                         | `claude --plugin-dir ./my-plugin --plugin-dir ./other.zip`                            |
| `--plugin-url <url>`                                 | Fetch a plugin `.zip` URL for this session only (repeatable).                                                                                                 | `claude --plugin-url https://example.com/plugin.zip`                                  |
| `--setting-sources <sources>`                        | Comma-separated list of setting sources to load (user, project, local).                                                                                      | `claude --setting-sources user,project`                                                |
| `--no-session-persistence`                           | Disable session persistence so sessions are not saved to disk (print mode only).                                                                             | `claude -p --no-session-persistence "query"`                                           |
| `--disable-slash-commands`                           | Disable all skills and slash commands for this session.                                                                                                      | `claude --disable-slash-commands`                                                      |
| `--dangerously-skip-permissions`                     | Skip normal permission prompts, subject to non-bypassable safety checks and managed policy.                                                                  | `claude --dangerously-skip-permissions`                                                |
| `--safe-mode`                                        | Disable user/project customizations for configuration troubleshooting while retaining authentication, models, tools, and permissions.                       | `claude --safe-mode`                                                                  |
| `--worktree [name]`, `-w [name]`                     | Start in `<repo>/.claude/worktrees/<name>`; omit the name to generate one.                                                                                   | `claude -w feature-auth`                                                              |
| `--from-pr [value]`                                  | Filter/resume sessions by PR number or GitHub/GitLab/Bitbucket PR/MR URL, or open the picker.                                                                | `claude --from-pr 123`                                                                |
| `--init`                                             | Run Setup hooks with the `init` matcher before a print-mode session.                                                                                         | `claude -p --init "query"`                                                            |
| `--init-only`                                        | Run Setup hooks and exit.                                                                                                                                    | `claude --init-only`                                                                   |
| `--maintenance`                                      | Run Setup hooks with the `maintenance` matcher before a print-mode session.                                                                                  | `claude -p --maintenance "query"`                                                     |
| `-v, --version`                                      | Show the installed `claude` CLI version.                                                                                                                     | `claude --version`                                                                     |
| `-h, --help`                                         | Display help / usage.                                                                                                                                        | `claude --help`                                                                        |

> This table highlights common and recently changed options; `claude --help` and the [live CLI reference](https://code.claude.com/docs/en/cli-reference) are authoritative. `--output-format json` is useful for one-shot automation; use `stream-json` for event-level integrations.

For programmatic integrations, the former **Claude Code SDK** is now the [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview): TypeScript uses `@anthropic-ai/claude-agent-sdk`, and Python uses `claude-agent-sdk` / `claude_agent_sdk`. Use `claude -p` for headless CLI calls; `--bare` removes discovered customization and keychain/OAuth access for low-overhead API/provider automation.

<h2 id="cheat-sheet">CLI Quick Reference & Configuration Examples</h2>

```md
## Claude Cheat Sheet

# Start and resume

claude # Start interactive REPL
claude "explain this project" # Start REPL seeded with a prompt
claude -p "summarize README.md" # Non-interactive headless print mode
cat logs.txt | claude -p "explain" # Pipe input to Claude and exit
claude -c # Continue most recent conversation
claude -r "<session-id>" "finish this" # Resume by ID or name
claude --model sonnet # Pick the Sonnet alias for this run
claude --model opus # Pick the Opus alias for harder tasks

# Install, update, and auth

claude update # Manually update Claude Code
claude doctor # Diagnose install/version & setup
claude install stable # Install/reinstall the native binary on the stable channel
claude auth login # Log in to your Anthropic account
claude auth status # Check authentication status
claude auth logout # Log out

# Background and remote sessions

claude agents # Open the live session dashboard: running, blocked, completed
claude agents --json # Scriptable JSON list of live/background sessions
claude --bg "run the integration suite and summarize failures" # Start a background session
claude --bg --exec "npm test" # Run a shell command as an attachable background session
claude attach <id> # Attach to a background session
claude logs <id> # Print recent background-session output
claude stop <id> # Stop a background session
claude rm <id> # Remove it from agent view and delete its worktree; transcript remains resumable
claude remote-control # Serve local sessions to web/mobile while this process stays alive
claude --cloud "Fix the bug" # Create a web session on claude.ai
claude --teleport <session-id> # Copy a web session into this terminal

# Config essentials

/config # Interactive settings
/config model=sonnet # Set a supported key directly
/config theme=dark
/config --help # Show settable keys and values
# For shared or managed settings, edit the appropriate settings.json file.

# MCP essentials

claude mcp list # List configured MCP servers
claude mcp get <name> # Show details for a server
claude mcp add <name> <command> [args...] # Add local stdio server
claude mcp add --transport http <name> <url> # Add remote HTTP server
claude mcp login <name> # Complete OAuth without opening /mcp
claude mcp logout <name> # Clear saved OAuth credentials
claude mcp reset-project-choices # Reset approvals for project .mcp.json servers
claude mcp serve # Run Claude Code itself as an MCP stdio server

# High-value flags

claude --add-dir ../apps ../lib # Add additional working directories
claude --allowed-tools "Bash(git log *)" "Read" # Allow listed tools without permission prompts
claude --disallowed-tools "Edit" # Deny listed tools
claude -p "query" --output-format json # Structured one-shot output
claude --verbose # Verbose logging (turn-by-turn)
claude --dangerously-skip-permissions # Skip permission prompts (use with caution)
claude --permission-mode plan # Start in plan mode without source edits
claude --effort high # Set reasoning effort for this session
claude --bare -p "query" # Fast scripted call without discovered customization
claude --safe-mode # Troubleshoot with user/project customization disabled
claude --ax-screen-reader # Use the accessible flat-text renderer
claude --max-turns 3 -p "query" # Limit agentic turns (print mode only)
claude --json-schema '{"type":"object"}' -p "query" # Get validated JSON output
claude --chrome # Enable Chrome browser integration
claude --agent code-reviewer # Run this session with a named agent
claude ultrareview 123 --json # Non-interactive comprehensive review for PR/target 123

# Slash shortcuts

claude --fork-session -r abc123 # Fork instead of reusing original
claude -w feature-auth "implement feature" # Start in an isolated git worktree
/rename auth-refactor # Name current session
/resume # Open session picker
/export output.md # Export conversation to file
/branch experiment-name # Branch the current conversation
/fork "investigate the flaky test" # Copy conversation into a background session
/subtask "trace the regression" # Fork a subagent that reports back here
/cd ../other-project # Move the current session without losing its cache
/review high --fix # Run /code-review via its current alias
/goal "all tests pass and README is updated" # Keep working until the completion condition is met
/loop 30m "check deploy health and summarize anomalies" # Schedule recurring work
/workflows # View dynamic workflows and background orchestration

# Settings precedence: managed policy > CLI/--settings > local > project > user.
```

---

<h1 id="interface--input">Interface & Input</h1>

<h2 id="keyboard-shortcuts">Keyboard Shortcuts</h2>

| Shortcut                     | Description                        | Context                                  |
| :--------------------------- | :--------------------------------- | :--------------------------------------- |
| `Ctrl+C`                     | Cancel current input or generation | Standard interrupt                       |
| `Ctrl+D`                     | Exit Claude Code session           | EOF signal                               |
| `Ctrl+G`                     | Open in default text editor        | Edit your prompt or custom response      |
| `Ctrl+L`                     | Redraw the terminal                | Press twice in fullscreen mode to run `/clear` |
| `Ctrl+O`                     | Toggle transcript viewer           | Shows detailed tool usage, timestamps, and model |
| `Ctrl+R`                     | Reverse search command history     | Search through previous commands         |
| `Ctrl+V`/`Cmd+V`; `Alt+V` on Windows/WSL | Paste image from clipboard | Inserts an image chip at the cursor |
| `Ctrl+B`                     | Background running tasks           | Backgrounds bash commands and agents     |
| `Ctrl+X`, then `Ctrl+K`      | Stop all background agents         | Two-key confirmation sequence            |
| `Ctrl+T`                     | Toggle task checklist              | `/tasks` remains the background-work view |
| `Ctrl+S`                     | Stash or restore the current prompt | Preserves text, cursor, and pasted content |
| `Up/Down arrows`             | Navigate command history           | Recall previous inputs                   |
| `Left/Right arrows`          | Cycle through dialog tabs          | Navigate between tabs in dialogs         |
| `Esc` + `Esc`                | Rewind the code/conversation       | Restore to a previous point              |
| `Shift+Tab` or `Alt+M`       | Cycle enabled permission modes     | Includes Manual, Accept Edits, Plan, and enabled Auto/Bypass modes |
| `Option+P` (macOS) / `Alt+P` | Switch model                       | Switch models without clearing prompt    |
| `Option+T` (macOS) / `Alt+T` | Toggle extended thinking           | Enable/disable extended thinking mode    |
| `Option+O` (macOS) / `Alt+O` | Toggle fast mode                   | Enable/disable supported fast mode       |

<h3 id="text-editing">Text Editing</h3>

| Shortcut               | Description                  | Context                               |
| :--------------------- | :--------------------------- | :------------------------------------ |
| `Ctrl+K`               | Delete to end of line        | Stores deleted text for pasting       |
| `Ctrl+U`               | Delete entire line           | Stores deleted text for pasting       |
| `Ctrl+Y`               | Paste deleted text           | Paste text deleted with Ctrl+K/U      |
| `Alt+Y` (after Ctrl+Y) | Cycle paste history          | Cycle through previously deleted text |
| `Alt+B`                | Move cursor back one word    | Requires Option as Meta on macOS      |
| `Alt+F`                | Move cursor forward one word | Requires Option as Meta on macOS      |

<h3 id="multiline-input">Multiline Input</h3>

| Method           | Shortcut       | Context                           |
| :--------------- | :------------- | :-------------------------------- |
| Quick escape     | `\` + `Enter`  | Works in all terminals            |
| macOS default    | `Option+Enter` | Default on macOS                  |
| Shift+Enter      | `Shift+Enter`  | Native in most modern terminals; use `/terminal-setup` where needed |
| Control sequence | `Ctrl+J`       | Line feed character for multiline |
| Paste mode       | Paste directly | For code blocks, logs             |

<h3 id="quick-commands">Quick Commands</h3>

| Shortcut     | Description       | Notes                                 |
| :----------- | :---------------- | :------------------------------------ |
| `/` at start | Command or skill  | See built-in commands and skills      |
| `!` at start | Bash mode         | Run commands directly, add to context |
| `@`          | File path mention | Trigger file path autocomplete        |

> [!Tip]
> **PDF Page Ranges:** Use the `pages` parameter with the Read tool for PDFs (e.g., `pages: "1-5"`). Large PDFs (>10 pages) return a lightweight reference when @-mentioned instead of being inlined.

<h2 id="vim-mode">Vim Mode</h2>

> [!Note]
> Enable vim-style editing from `/config` -> Editor mode.

<h3 id="vim-mode-switching">Vim Mode Switching</h3>

| Command | Action                      | From mode |
| :------ | :-------------------------- | :-------- |
| `Esc`   | Enter NORMAL mode           | INSERT    |
| `i`     | Insert before cursor        | NORMAL    |
| `I`     | Insert at beginning of line | NORMAL    |
| `a`     | Insert after cursor         | NORMAL    |
| `A`     | Insert at end of line       | NORMAL    |
| `o`     | Open line below             | NORMAL    |
| `O`     | Open line above             | NORMAL    |

<h3 id="vim-navigation">Vim Navigation</h3>

| Command         | Action                    |
| :-------------- | :------------------------ |
| `h`/`j`/`k`/`l` | Move left/down/up/right   |
| `w`             | Next word                 |
| `e`             | End of word               |
| `b`             | Previous word             |
| `0`             | Beginning of line         |
| `$`             | End of line               |
| `^`             | First non-blank character |
| `gg`            | Beginning of input        |
| `G`             | End of input              |

<h3 id="vim-editing">Vim Editing</h3>

| Command        | Action                  |
| :------------- | :---------------------- |
| `x`            | Delete character        |
| `dd`           | Delete line             |
| `D`            | Delete to end of line   |
| `dw`/`de`/`db` | Delete word/to end/back |
| `cc`           | Change line             |
| `C`            | Change to end of line   |
| `cw`/`ce`/`cb` | Change word/to end/back |
| `.`            | Repeat last change      |

> [!Tip]
> Configure your preferred line break behavior in terminal settings. Run `/terminal-setup` to install Shift+Enter binding for iTerm2, VS Code, Kitty, Alacritty, Zed, Warp, and WezTerm.

<h2 id="command-history">Command History</h2>

> Claude Code maintains command history for the current session:

```
* History is stored per working directory
* Cleared with `/clear` command
* Use Up/Down arrows to navigate (see keyboard shortcuts above)
* **Ctrl+R**: Reverse search through history (if supported by terminal)
* **Note**: History expansion (`!`) is disabled by default
```

---

<h1 id="advanced-features">Advanced Features</h1>

<h2 id="thinking-keywords">Thinking Keywords</h2>

> [!Note]
> **`ultrathink` is the only documented prompt keyword for a one-turn request for deeper reasoning.** Phrases such as `think`, `think hard`, and `think harder` are ordinary prompt text; they are not graduated Claude Code controls.

Use `/effort` for an explicit session setting. `ultrathink` adds an in-context instruction for that turn without changing the effort value sent to the API.

```md
Ultrathink. Propose a step-by-step strategy to fix flaky payment tests and add guardrails.
```

<h2 id="effort-levels">Effort Levels</h2>

Use `/effort` to tune how much reasoning the selected model applies before answering. Higher effort levels are best for planning-heavy work, deep reviews, and long-context tasks.

```bash
/effort            # Open the effort picker
/effort low        # Faster, lighter reasoning
/effort medium     # Balanced default for many tasks
/effort high       # Deeper planning and review
/effort xhigh      # Strong default for difficult coding and agentic work where supported
/effort max        # Session-only maximum; test for diminishing returns
/effort ultracode  # Session-only xhigh plus dynamic workflow orchestration, where available
/effort auto       # Return to the selected model's default
```

Available levels depend on the model. The saved `effortLevel` setting accepts `low` through `xhigh`; `max` normally applies only to the current session, although `CLAUDE_CODE_EFFORT_LEVEL=max` can force it for sessions launched with that environment variable. `ultracode` is a separate session-only mode that combines `xhigh` with standing dynamic-workflow orchestration, so it requires workflows and an xhigh-capable model. Prefer the lowest effort that reliably solves the task because higher effort increases latency and token use.

<h2 id="advisor-tool">Advisor Tool (Experimental)</h2>

The advisor pairs the main model with a second, at-least-as-capable model that Claude may consult at important planning, debugging, or completion decisions. Each consultation sends the full conversation, including tool calls and results; it counts toward subscription usage or is billed at the advisor model's API rates.

```bash
/advisor             # Open the picker and save the user default
/advisor opus        # Save Opus as the advisor
/advisor off         # Clear the saved advisorModel setting
claude --advisor opus # Use Opus for this session without changing the saved default
```

The feature runs only through the first-party Anthropic API, for subscription or API-billed accounts; it is unavailable on Bedrock, Claude Platform on AWS, Google Cloud's Agent Platform, and Microsoft Foundry. Claude decides when to consult it. `advisorModel` is the persistent settings key, while the intentionally hidden `--advisor` launch flag is session-only. Fable 5 is not currently selectable as an advisor. See the [advisor guide](https://code.claude.com/docs/en/advisor) for supported main/advisor pairings.

<h2 id="fast-mode">Fast Mode</h2>

> [!Note]
> **Fast mode is a research preview that runs the same Opus model and capabilities up to 2.5× faster at a higher price per token. It does not trade model quality for speed.**

```bash
/fast          # Toggle in the CLI
# Option+O on macOS or Alt+O on Windows/Linux also toggles it
```

Fast mode currently supports **Opus 5 and Opus 4.8**. It is unavailable for Sonnet, Haiku, Opus 4.7, third-party providers, and the VS Code extension. Subscription users need usage credits; Team and Enterprise also require Owner enablement. Use it for latency-sensitive interactive work, and standard mode for cost-sensitive or long autonomous tasks. Lower `/effort` is the separate control that may trade reasoning depth for speed.

<h2 id="auto-mode">Auto Mode</h2>

Auto mode lets Claude evaluate and approve lower-risk actions automatically while still blocking or asking on higher-risk operations. It is useful for trusted development loops where repeated permission prompts slow down work.

```bash
# Start in auto mode, or cycle to it with Shift+Tab
claude --permission-mode auto

# Inspect the built-in and effective classifier configuration
claude auto-mode defaults
claude auto-mode config

# Remove a cached/custom classifier config and return to defaults
claude auto-mode reset       # Add --yes to skip confirmation
```

```json
{
  "autoMode": {
    "allow": ["$defaults"],
    "soft_deny": ["$defaults"],
    "hard_deny": []
  }
}
```

Key points:

- Auto mode is available by default on every supported provider; `CLAUDE_CODE_ENABLE_AUTO_MODE` is now a no-op compatibility variable.
- The classifier trusts the working directory and current repository remotes by default. Add organization infrastructure under `autoMode.environment` only when needed.
- Put `autoMode` in user settings, managed settings, or `--settings`. Repository `.claude/settings.json` and `.claude/settings.local.json` cannot inject classifier policy.
- Use `"$defaults"` to extend built-in `allow`, `soft_deny`, `hard_deny`, or `environment` rules instead of replacing them.
- Explicit `permissions.deny` and content-scoped `permissions.ask` rules are evaluated before the classifier. Use those for non-negotiable blocks or human checkpoints.

<h2 id="plan-mode">Plan Mode</h2>

> [!Note]
> **Plan Mode prevents source edits and is designed for exploration, planning, and review. It permits read-only shell exploration; when auto mode is available, classifier-approved commands can also run.**

Plan Mode is a workflow mode, not a hard isolation boundary. Use sandboxing plus explicit deny/ask rules or managed policy when command execution must be technically constrained.

**When to use Plan Mode:**

- **Multi-step implementation**: When your feature requires making edits to many files
- **Code exploration**: When you want to research the codebase thoroughly before changing anything
- **Interactive development**: When you want to iterate on the direction with Claude

**How to enable Plan Mode:**

```bash
# Start a new session in Plan Mode
claude --permission-mode plan

# Or toggle during session with Shift+Tab
# (cycles through Manual, Accept Edits, Plan, and any other enabled modes)

# Enter plan mode from the prompt
/plan

# Run headless queries in Plan Mode
claude --permission-mode plan -p "Analyze the authentication system and suggest improvements"
```

**Configure Plan Mode as default:**

In `.claude/settings.json`:

```json
{
  "permissions": {
    "defaultMode": "plan"
  }
}
```

---

<h2 id="background-tasks">Background Tasks</h2>

> [!Note]
> **Claude Code supports background commands and full background sessions, allowing you to continue working while long-running processes or agents execute.**

**How to use background tasks:**

| Method | Description |
| :----- | :---------- |
| Prompt Claude | Ask Claude to run a shell command or subagent in the background |
| `Ctrl+B` | Move a running Bash tool invocation or agent to the background (tmux users press twice) |
| `/background` | Detach this entire conversation and free the terminal |
| `/fork` | Copy this conversation into a worktree-isolated background session while you stay here |
| `claude --bg` | Launch a new background Claude session; it cannot be combined with `-p` |
| `! <command>` in `claude agents` | Start an attachable background shell session from agent view |

**Key features:**

- Output is buffered and can be read from the persisted background output file path
- Background tasks have unique IDs for tracking and output retrieval
- `/tasks` shows background shells, subagents, and long-running tool calls owned by the current session
- Background sessions appear in `/resume` and the `claude agents` dashboard, marked with `bg`; use `claude attach/logs/stop/rm/respawn <id>` to manage them
- Use `claude agents --json` for scripts, status bars, session pickers, and tmux integrations
- Background sessions preserve completed work with commits/pushes, and open a draft PR only when the task calls for one

**Common backgrounded commands:**

- Build tools (webpack, vite, make)
- Package managers (npm, yarn, pnpm)
- Test runners (jest, pytest)
- Development servers
- Long-running processes (docker, terraform)

**Bash mode with `!` prefix:**

```bash
# Run bash commands directly without Claude interpretation
! npm test
! git status
! ls -la

# Run a command as an attachable background session
claude --bg --exec "npm test"

# Name a background session
claude --bg --name nightly-check "run the full verification suite"

# Detach or copy the current conversation
/background "finish the verification and report back"
/fork "investigate the flaky integration test" # Runs in its own worktree
```

**Disable background tasks:**

```bash
export CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1
```

---

<h2 id="workflows--scheduling">Workflows & Scheduling</h2>

Dynamic workflows coordinate many background agents for larger work than a single foreground turn can comfortably handle. Ask Claude to create a workflow, then use `/workflows` to inspect runs and status.

```bash
/workflows
/goal "the migration is implemented, tested, and documented"
/loop 15m "check the deployment dashboard and summarize any incidents"
```

| Feature      | Purpose                                                                                 |
| :----------- | :-------------------------------------------------------------------------------------- |
| `/workflows` | View workflow runs that orchestrate many agents in the background                       |
| `/goal`      | Give Claude a completion condition and let it continue across turns until it is reached |
| `/loop`      | Run a prompt or slash command on a recurring interval                                   |

Use workflows for broad, decomposable efforts. Use `/goal` for a single outcome that may require several turns. Use `/loop` for monitoring and scheduled checks.

The default `workflowSizeGuideline` is **medium**, which aims to stay below 15 agents. Change it through `/config` only when the work genuinely benefits from a smaller or larger fan-out.

---

<h2 id="remote-sessions">Remote Sessions</h2>

> [!Note]
> **For eligible subscribers: use `--cloud` to start work on claude.ai and `--teleport` to copy a web session into a local checkout. `--remote` remains only as a deprecated alias for `--cloud`.**

**Start a remote session:**

```bash
# Create a new web session on claude.ai with task description
claude --cloud "Fix the login bug"
```

**Resume a remote session:**

```bash
# Resume a web session in your local terminal
claude --teleport <session-id>

# Or use the slash command
/teleport
```

Team and Enterprise organizations can also run cloud sessions on infrastructure they control. Register a machine or container with `claude self-hosted-runner`, then route a new task to the registered pool with `claude -p --environment ccpool_... "your task"`; see the [self-hosted environments guide](https://code.claude.com/docs/en/self-hosted-environments).

---

<h2 id="claude-in-chrome">Claude in Chrome</h2>

With the [Claude in Chrome extension](https://code.claude.com/docs/en/chrome), Claude Code can drive browser-based testing and UI verification from the CLI.

**Setup:**

```bash
claude --chrome                    # Launch with Chrome integration
```

**Capabilities:**

- Navigate to URLs, click elements, fill forms
- Take screenshots and analyze page content
- Execute JavaScript in the browser context
- Interact with web applications for testing

> [!NOTE]
> Requires a supported Chromium browser, the Claude in Chrome extension, and subscription authentication. It is unavailable through WSL and third-party model providers. Review the extension's site permissions before granting access.

---

<h2 id="desktop-and-ides">Desktop and IDEs</h2>

The Claude Desktop Code tab supports macOS, Windows, and a Linux beta for Ubuntu/Debian. It provides parallel local or cloud sessions, worktrees, diffs, an editor, terminal, and browser; SSH execution is also available. Desktop and the CLI share Claude Code settings and state, but Desktop Chat's `claude_desktop_config.json` MCP configuration is separate. Agent teams are not supported in Desktop.

The VS Code extension requires VS Code 1.94+ and bundles a CLI for its panel; install the standalone CLI separately for terminal use. Cursor and compatible Open VSX forks are supported. VS Code Focus view hides tool activity behind a per-turn summary and toggles with `Ctrl+Alt+F`; its settings also include **Enable Remote Control for all sessions**. JetBrains integrations require a separately installed CLI and connect through `/ide`.

See the current [Desktop](https://code.claude.com/docs/en/desktop) and [IDE integration](https://code.claude.com/docs/en/ide-integrations) documentation for platform-specific setup.

---

<h2 id="sandbox-mode">Sandbox Mode</h2>

Sandboxing is an OS-enforced boundary for the Bash tool and its child processes; it is separate from Claude Code's tool-permission rules and does not wrap every built-in tool. By default, sandboxed commands can write inside the working directory and temporary directories, read broadly except for denied paths, and reach the network only through a hostname-filtering proxy.

```bash
/sandbox # Inspect dependencies and configure filesystem/network isolation
```

Platform support:

- macOS uses Seatbelt.
- Linux and WSL 2 use bubblewrap plus socat.
- Native Windows and WSL 1 do not support sandboxing.

Useful hardening settings include `sandbox.failIfUnavailable: true` to fail closed, `allowUnsandboxedCommands: false` to remove the unsandboxed retry path, `sandbox.network.strictAllowlist: true` for an exact network allowlist, and credential rules with `mode: "deny"` or `mode: "mask"`. Credential masking is supported on Linux/WSL; macOS falls back to denying access. In v2.1.224+, masking can extract structured values, mask selected JWT claims, and re-sign AWS SigV4 requests; those options require `network.tlsTerminate` and are honored only from user, managed, or `--settings` configuration. Sandboxing reduces the impact of shell commands; it is not a substitute for reviewing permissions and secrets exposure.

---

<h2 id="lsp-tool">LSP Tool (Language Server Protocol)</h2>

Claude Code integrates with language servers to provide IDE-level code intelligence:

- **Go to Definition** — Jump to where a symbol is defined
- **Find References** — Find all usages of a symbol across the codebase
- **Hover Information** — Get type information and documentation

LSP support is provided by plugins. Install the language-server binary separately, then install its LSP plugin from the official marketplace with `/plugin`; a server merely being present on `PATH` is not enough. This enables Claude to navigate codebases more precisely than text search alone.

> Tool results exceeding 50,000 characters are automatically persisted to disk to manage context efficiently.

---

<h2 id="sub-agents">Sub Agents</h2>

> Sub‑Agents are purpose‑built helpers with their **own prompts, tools, and isolated context windows**. Treat this like a "mixture‑of‑experts" you **compose** per repo.

<h3 id="built-in-subagents">Built-in Subagents</h3>

Claude Code includes built-in subagents that Claude automatically uses when appropriate:

| Subagent | Model | Tools | Purpose |
| :------- | :---- | :---- | :------ |
| **Explore** | Inherits the parent model, capped at Opus | Read-only | File discovery, code search, and codebase exploration |
| **Plan** | Inherits the parent model | Read-only | Planning complex changes without making edits |
| **General-purpose** | Inherits the parent model | Inherited | General task delegation |

> Claude delegates to **Explore** when it needs to search or understand a codebase without making changes, keeping exploration results out of your main conversation context.

**When to use subagents:**

> - You need high signal responses (plans, reviews, diffs) without side quests.
> - You want version‑controlled prompts and tool policies alongside the codebase.
> - You work in PR‑driven teams and want scoped edits by role.
> - The task produces verbose output you don't need in your main context.

<h3 id="each-sub-agent-has-its-own-context">Each Sub‑Agent Has Its Own Context</h3>

**Design rules for your lineup**

> - Define **one clear responsibility** per agent.
> - Keep the **minimum** tool set needed for that role.
> - Prefer **read‑only** agents for analysis/review tasks.
> - Give edit powers to as few agents as possible.

<img width="700" height="160" alt="image" src="https://github.com/user-attachments/assets/42767417-20aa-4bd4-aaf2-cfa0e515b54b" />

_Caption: Agents selection UI in the terminal._

<h3 id="configure-agents">Configure Agents</h3>

> Keep agents **in the project** so they're versioned with the repo and evolve via PRs.

<h3 id="agents-quick-start">Quick start</h3>

> Ask Claude to create an agent, mention one with `@agent-name`, or edit its Markdown definition directly. `/agents` now prints this guidance; it no longer opens the old wizard.

```bash
claude update
# Project agent: .claude/agents/<name>.md
# Personal agent: ~/.claude/agents/<name>.md

claude --agent code-reviewer "review the current branch"
```

`claude agents` is a separate agent-view dashboard for running, blocked, completed, and background **sessions**. It does not list or configure subagent definitions.

<h3 id="agent-scopes">Subagent Scopes</h3>

| Location | Scope | Priority |
| :------- | :---- | :------- |
| Managed policy agents | Organization | 1 (highest) |
| `--agents` CLI flag | Current session only | 2 |
| `.claude/agents/` | Current project | 3 |
| `~/.claude/agents/` | All your projects | 4 |
| Plugin's `agents/` directory | Where plugin is enabled | 5 (lowest) |

Dispatched sessions honor the `agent` field in `settings.json`. Pass `--agent <name>` to override the configured default for a specific run.

<h3 id="define-agents-via-cli">Define Agents via CLI</h3>

```bash
# Define custom subagents dynamically via JSON
claude --agents '{
  "code-reviewer": {
    "description": "Expert code reviewer. Use proactively after code changes.",
    "prompt": "You are a senior code reviewer. Focus on code quality, security, and best practices.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  },
  "debugger": {
    "description": "Debugging specialist for errors and test failures.",
    "prompt": "You are an expert debugger. Analyze errors, identify root causes, and provide fixes."
  },
  "background-impl": {
    "description": "Implements features in an isolated worktree in the background.",
    "prompt": "Implement the requested feature. Commit when done.",
    "isolation": "worktree",
    "background": true
  }
}'
```

<h3 id="create-your-core-agents">Create your core agents</h3>

> - **planner** (read‑only): turns features/issues into small, testable tasks; outputs a task list or plan.md.
> - **codegen** (edit‑capable): implements tasks; limited to `src/` + `tests/`.
> - **tester** (read‑only or patch‑only): writes _one_ failing test or a minimal repro.
> - **reviewer** (read‑only): leaves structured review comments; never edits.
> - **docs** (edit‑capable): updates `README.md`/`docs/` only.

**\*Policy** tip: Prefer **patch output** for edit‑capable agents so changes land through your normal Git workflow.\*

<img width="700" height="173" alt="image" src="https://github.com/user-attachments/assets/84bc80de-35b8-4ef7-9b27-f74f7d4a51f9" />

_Caption: Choose only the tools an agent truly needs (e.g., advisory vs editing access)._

<h3 id="example-prompts">Example prompts</h3>

> Keep prompts short, testable, and repo‑specific. Check them into `agents/`:

<img width="700" height="217" alt="image" src="https://github.com/user-attachments/assets/b4f92591-ff5c-4775-aec2-051f145b9616" />

_Caption: Example prompt for a **test‑coverage‑analyzer** agent._

**tester.prompt.md (sample)**

```
Role: Write a single, focused failing test for the specific scenario I describe.
Scope: Only create/modify tests under tests/. Do not change src/.
Output: A brief rationale + a unified diff or patch.
If the scenario is unclear, ask exactly one clarifying question.
```

<h3 id="expected-output">Expected output</h3>

> Your tester agent should produce a small diff or patch plus a short rationale:

<img width="700" height="273" alt="image" src="https://github.com/user-attachments/assets/839151ce-02c9-4283-a53b-9dd105802ada" />

_Caption: Example response from the **test‑coverage‑analyzer** agent._

<h3 id="subagent-frontmatter">Subagent Frontmatter Fields</h3>

Subagent files use YAML frontmatter for configuration:

```markdown
---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
disallowedTools: Write, Edit
model: sonnet
permissionMode: default
skills:
  - api-conventions
---

You are a code reviewer. Analyze the code and provide feedback.
```

| Field             | Required | Description                                                         |
| :---------------- | :------- | :------------------------------------------------------------------ |
| `name`            | Yes      | Unique identifier (lowercase, hyphens)                              |
| `description`     | Yes      | When Claude should delegate to this subagent                        |
| `tools`           | No       | Tools the subagent can use (inherits all if omitted)                |
| `disallowedTools` | No       | Tools to deny, removed from inherited or specified list             |
| `model`           | No       | Model alias/full ID, or `inherit` (the default)                     |
| `effort`          | No       | Model-dependent effort override for this subagent                   |
| `maxTurns`        | No       | Maximum agentic turns before the subagent stops                     |
| `permissionMode`  | No       | `default`/`manual`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, or `plan` |
| `skills`          | No       | Skills to preload into the subagent's context                       |
| `hooks`           | No       | Lifecycle hooks scoped to this subagent                             |
| `mcpServers`      | No       | MCP servers available to this subagent                              |
| `memory`          | No       | Persistent memory scope: `user`, `project`, or `local`              |
| `isolation`       | No       | Set to `worktree` to run the agent in an isolated git worktree      |
| `background`      | No       | Set `true` to force background execution; otherwise Claude chooses (background by default as of v2.1.198) |
| `color`           | No       | Display color for the subagent in the transcript                    |
| `initialPrompt`   | No       | First user turn when this definition runs as the main session via `--agent` or the `agent` setting |

Organization model allowlists still apply to frontmatter. A restricted family alias steps down to the newest permitted model in that family where supported; when a workflow agent, forked skill/command, or resumed background agent must run on the parent model instead, Claude Code warns rather than silently implying the requested model was honored.

Background and isolated agents can switch between Claude-managed worktrees with `EnterWorktree` when the session needs to move between related isolated checkouts.

Subagents can nest up to three layers below the main conversation by default, with at most 20 running concurrently. Claude Code v2.1.224 removed the former 200-spawn session cap. Tune the remaining limits with `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` and `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`; setting the depth to `1` disables nesting. These defaults have changed across releases, so check the [live subagent reference](https://code.claude.com/docs/en/sub-agents) before building automation around them.

<h3 id="why-this-shift-matters">Why This Shift Matters</h3>

**Operational benefits**

> - **Less context switching:** you stay in one mental mode; agents do the rest.
> - **Cleaner PRs:** narrow prompts + limited tools → smaller, reviewable diffs.
> - **Fewer regressions:** tester/reviewer agents catch gaps before merge.
> - **Repeatability:** prompts + policies live in the repo and travel with branches.

**Security & governance**

> - Limit write access by path (e.g., `src/`, `tests/`, `docs/`).
> - Favor read‑only analysis for high‑risk areas.
> - Log/commit assistant outputs as patches for auditability.

<h3 id="a-mindset-shift">A Mindset Shift</h3>

**Do**

> - Treat agents as teammates with job descriptions.
> - Start read‑only; grant write access _last_.
> - Keep prompts in version control and iterate via PR.

**Don't**

> - Ask one agent to plan, code, and test in a single turn.
> - Give blanket write permissions.
> - Accept multi‑file diffs when you asked for one test.

---

<h2 id="agent-teams">Agent Teams (Research Preview)</h2>

> [!Note]
> **Agent Teams is an experimental feature enabling multiple Claude instances to work in parallel on a shared codebase autonomously.**

**Enable Agent Teams:**

```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
```

**Key Concepts:**

- A lead session coordinates separate teammate sessions through a shared task list and direct messages.
- Teammates can specialize in independent work such as debugging, documentation, and testing.
- Agent teams coordinate through Claude Code messaging, not git synchronization.
- Teammates do not receive automatic worktree isolation. Partition files carefully or explicitly create worktrees to avoid conflicting edits.
- Teams cost substantially more tokens than subagents; start with three to five teammates and use them only for genuinely parallel work.

**Case Study: C Compiler Built by Agent Teams**

Anthropic's research team demonstrated agent teams by tasking 16 parallel Claude instances to build a C compiler from scratch. Key results:

| Metric              | Value                                  |
| :------------------ | :------------------------------------- |
| **Claude Sessions** | ~2,000                                 |
| **API Cost**        | ~$20,000                               |
| **Lines of Code**   | 100,000                                |
| **Capability**      | Compiled Linux 6.9 on x86, ARM, RISC-V |
| **Test Pass Rate**  | 99% on GCC torture test suite          |

**Lessons for Agent Teams:**

1. **Write high-quality tests** - The task verifier must be nearly perfect
2. **Design for parallelism** - Agents should be able to work independently without blocking each other
3. **Specialize agents** - Dedicate agents to specific roles (code quality, documentation, performance)
4. **Maintain context files** - Keep READMEs and progress files updated for agent orientation

> Read the full case study: [Building a C Compiler with Parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler)

---

<h2 id="skills">Skills (Custom Slash Commands)</h2>

> [!Note]
> **Skills extend what Claude can do. Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with `/skill-name`.**

<h3 id="skill-locations">Skill Locations</h3>

| Location                                 | Scope    | Description                                   |
| :--------------------------------------- | :------- | :-------------------------------------------- |
| `~/.claude/skills/<skill-name>/SKILL.md` | Personal | All your projects                             |
| `.claude/skills/<skill-name>/SKILL.md`   | Project  | This project only (commit to version control) |
| `<plugin>/skills/<skill-name>/SKILL.md`  | Plugin   | Where plugin is enabled                       |

> Enterprise-managed skills override personal skills, and personal skills override project skills with the same name. Plugin skills remain namespaced. Files in `.claude/commands/` remain compatible, but new commands should use the skill layout.
> A directory under `~/.claude/skills/` or `.claude/skills/` is a plain skill when it contains `SKILL.md`. It becomes a skills-directory plugin only when it contains `.claude-plugin/plugin.json`. Use `/reload-skills` to re-scan plain skills; use `/reload-plugins` for plugin component changes.

<h3 id="create-skill">Create a Skill</h3>

```bash
# Create skill directory
mkdir -p ~/.claude/skills/explain-code

# Optional: scaffold a personal skills-directory plugin (a separate layout)
claude plugin init explain-tools --with skills
```

`claude plugin init` writes under `~/.claude/skills/<name>/` and adds a plugin manifest; it does not scaffold in the current project.

Create `~/.claude/skills/explain-code/SKILL.md`:

```markdown
---
name: explain-code
description: Explains code with visual diagrams and analogies. Use when explaining how code works.
---

When explaining code, always include:

1. **Start with an analogy**: Compare the code to something from everyday life
2. **Draw a diagram**: Use ASCII art to show the flow, structure, or relationships
3. **Walk through the code**: Explain step-by-step what happens
4. **Highlight a gotcha**: What's a common mistake or misconception?
```

**Use the skill:**

```bash
# Let Claude invoke automatically
How does this code work?

# Or invoke directly
/explain-code src/auth/login.ts
```

<h3 id="skill-frontmatter">Skill Frontmatter Fields</h3>

| Field                      | Required    | Description                                                 |
| :------------------------- | :---------- | :---------------------------------------------------------- |
| `name`                     | No          | Display name for the skill (uses directory name if omitted) |
| `description`              | Recommended | What the skill does and when to use it                      |
| `argument-hint`            | No          | Hint shown during autocomplete (e.g., `[filename]`)         |
| `disable-model-invocation` | No          | Set `true` to prevent Claude from auto-invoking             |
| `user-invocable`           | No          | Set `false` to hide from / menu                             |
| `allowed-tools`            | No          | Tools Claude can use without asking permission              |
| `disallowed-tools`         | No          | Tools removed from the model while the skill is active      |
| `model`                    | No          | Model to use when this skill is active                      |
| `effort`                   | No          | Effort override while the skill is active                   |
| `context`                  | No          | Set to `fork` to run in a forked subagent context           |
| `agent`                    | No          | Which subagent to use when `context: fork` is set           |
| `background`               | No          | With `context: fork`, defaults to `true`; set `false` to wait for the result |
| `hooks`                    | No          | Hooks scoped to this skill's lifecycle                      |
| `paths`                    | No          | Glob patterns limiting automatic activation to matching files |
| `shell`                    | No          | `bash` (default) or `powershell` for dynamic shell context  |

<h3 id="skill-arguments">Pass Arguments to Skills</h3>

Use `$ARGUMENTS` placeholder to receive arguments:

```markdown
---
name: fix-issue
description: Fix a GitHub issue
disable-model-invocation: true
---

Fix GitHub issue $ARGUMENTS following our coding standards.

1. Read the issue description
2. Implement the fix
3. Write tests
4. Create a commit
```

**Usage:** `/fix-issue 123`

<h3 id="skill-dynamic-context">Inject Dynamic Context</h3>

Use `` !`command` `` syntax to run shell commands before the skill content is sent to Claude:

```markdown
---
name: pr-summary
description: Summarize changes in a pull request
context: fork
agent: Explore
---

## Pull request context

- PR diff: !`gh pr diff`
- PR comments: !`gh pr view --comments`
- Changed files: !`gh pr diff --name-only`

## Your task

Summarize this pull request...
```

<h3 id="skill-subagent">Run Skills in a Subagent</h3>

Add `context: fork` to run a skill in isolation:

```markdown
---
name: deep-research
description: Research a topic thoroughly
context: fork
agent: Explore
---

Research $ARGUMENTS thoroughly:

1. Find relevant files using Glob and Grep
2. Read and analyze the code
3. Summarize findings with specific file references
```

> The `agent` field can be `Explore`, `Plan`, `general-purpose`, or any custom subagent from `.claude/agents/`.
> Forked skills run in the background by default as of v2.1.218. Add `background: false` when the invoking turn must wait or the skill needs a foreground-only tool.

---

<h2 id="plugin-system">Plugin System</h2>

> [!Note]
> **Plugins package skills, agents, hooks, MCP servers, and LSP servers. Experimental plugin components also include monitors and themes. The official marketplace is registered automatically unless policy disables it.**

**Key commands:**

```bash
claude plugin init my-plugin
/plugin                                      # Open the plugin manager
/plugin install code-review@claude-plugins-official
/plugin list
/plugin enable <plugin>@<marketplace>
/plugin disable <plugin>@<marketplace>
/reload-plugins

# CLI equivalents for scripting and development
claude plugin install <plugin>@<marketplace> --scope project
claude plugin validate ./my-plugin --strict
```

**Plugin structure:**

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json      # Optional manifest; name is required when present
├── agents/              # Custom agents (*.md frontmatter files)
├── skills/              # Custom skills (SKILL.md files)
├── hooks/               # Hook scripts
├── commands/            # Legacy flat command format
├── .mcp.json            # MCP server definitions
├── .lsp.json            # LSP server definitions
├── monitors/            # Experimental background monitors
└── themes/              # Experimental themes
```

**Plugin scopes:**

| Scope | Recorded in | Notes |
| :---- | :---------- | :---- |
| `--plugin-dir ./path` | Session only | Development load; not persisted |
| `user` | `~/.claude/settings.json` | Personal; default install scope |
| `project` | `.claude/settings.json` | Shared with the repository; collaborators still approve/install |
| `local` | `.claude/settings.local.json` | Private to this project |
| `managed` | Managed settings | Organization-controlled and read-only |

Managed marketplace policy accepts `"owner/*"` entries in both `strictKnownMarketplaces` and `blockedMarketplaces` to allow or block every marketplace repository under a GitHub owner.

As of v2.1.224, marketplace entries can use an `archive` source to install a zip over HTTPS without git or npm. Add the optional 64-character `sha256` digest to pin the exact archive and make Claude Code reject a mismatched download.

**Plugin manifest (`.claude-plugin/plugin.json`):**

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "A Claude Code plugin",
  "defaultEnabled": false,
  "agents": ["./agents/"],
  "skills": ["./skills/"],
  "hooks": "./hooks/hooks.json",
  "mcpServers": "./.mcp.json",
  "lspServers": "./.lsp.json",
  "dependencies": ["required-plugin"]
}
```

The manifest is optional when all components use default locations; include it for metadata, dependencies, custom component paths, or default enablement. Project-declared plugins and skills-directory plugins are gated by workspace trust and user consent rather than silently installing executable components.

> Plugins auto-update by default. Set `FORCE_AUTOUPDATE_PLUGINS=1` to force updates even when the main updater is disabled, or override with `CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS` for slow repos. Git/GitHub marketplace sources can use `skipLfs` to skip Git LFS downloads during clone and update.

Dependency behavior:

- `claude plugin enable` enables transitive dependencies automatically.
- `claude plugin disable` refuses when another enabled plugin depends on the target and reports the disable chain.
- `defaultEnabled: false` lets a plugin ship installed but disabled until the user explicitly enables it.

---

<h2 id="worktree-isolation">Worktree Isolation</h2>

> [!Note]
> **The `--worktree` (`-w`) flag starts Claude in an isolated git worktree, allowing it to make changes in a separate branch without affecting your working directory.**

**Usage:**

```bash
# Start Claude in an isolated worktree
claude -w feature-auth

# Claude will:
# 1. Create a temporary git worktree from the configured base ref
# 2. Run in that isolated worktree
# 3. Keep edits and Bash commands isolated from the original checkout
```

Choose the branch source in settings:

```json
{
  "worktree": {
    "baseRef": "fresh"
  }
}
```

`fresh` (the default) uses `origin/<default-branch>`; `head` uses the current local `HEAD`. Claude automatically removes a subagent worktree only when it made no changes. Background sessions commit **and** push completed work to preserve it, and create a draft PR only when the task explicitly calls for one; do not assume every worktree is automatically published or deleted.

For repositories where worktrees are impractical, `worktree.bgIsolation: "none"` lets background sessions edit the working copy directly without `EnterWorktree`.

**Agent-level worktree isolation:**

```markdown
---
name: background-coder
description: Implements features in isolation
isolation: worktree
background: true
---

Implement the requested feature in this isolated worktree.
```

> Worktree isolation is especially powerful combined with `background: true` for agents, enabling parallel development workflows where multiple agents work on separate features simultaneously.

---

<h2 id="native-installer">Native Installer</h2>

> [!Note]
> **The native installer is the recommended installation path. It starts faster, updates itself, and does not depend on Node.js being on your PATH.**

```bash
# Install the stable native build from an existing Claude Code installation
claude install stable

# Other supported targets
claude install latest
claude install <version>

# Check for and install an update
claude update
```

Running `claude install` from an npm-based installation replaces it with the native build; the old `migrate-installer` command has been removed. Homebrew and WinGet installations update through their package managers. npm remains supported for compatibility, but Claude Code v2.1.198 and later require Node.js 22 or newer.

See the [official setup guide](https://code.claude.com/docs/en/setup) for the current platform-specific installers.

---

<h2 id="claude-auth">Authentication CLI</h2>

> [!Note]
> **Manage authentication directly from the CLI without entering the REPL.**

```bash
# Log in to your Anthropic account
claude auth login

# Check current authentication status
claude auth status

# Log out
claude auth logout
```

---

<h2 id="claude-agents-cli">Agent Management CLI</h2>

> [!Note]
> **`claude agents` manages live interactive and background sessions. It does not list the Markdown subagent definitions in `.claude/agents/`.**

```bash
# Open the interactive background-agent view
claude agents

# Script active sessions; include completed sessions with --all
claude agents --json
claude agents --json --all

# Start a prompt as a background session
claude --bg "review this branch and report the findings"

# Manage a background session by ID
claude attach <id>
claude logs <id>
claude stop <id>
claude respawn <id>
claude rm <id>

# Use a custom subagent definition for a foreground session
claude --agent code-reviewer "review the current branch"
```

`stop` keeps the conversation so it can be attached again. `rm` removes the session from agent view and deletes its worktree, but leaves the transcript on disk and resumable with `claude --resume`; use `claude project purge` only when you intend to delete local transcripts and project state. Options such as `--agent`, `--model`, `--effort`, and `--permission-mode` on `claude agents` set defaults for sessions dispatched from that view.

On macOS and Linux, Claude can use `ListAgents` and `SendMessage` to discover and initiate messages to sessions on the same machine; Remote Control exposes other-machine and web sessions for replies only. Without an explicit `crossSessionInbound` policy, same-class permission modes deliver automatically while messages between bypassed and non-bypassed sessions are held for approval; `dialogExpiry` controls when held dialogs expire.

---

<h2 id="remote-control">Remote Control</h2>

> [!Note]
> **Remote Control lets claude.ai/code or the Claude mobile app control Claude Code processes that continue running on your machine. It is not a headless SDK or CI transport.**

```bash
# Start a persistent local Remote Control server in this directory
claude remote-control

# Give the server a recognizable name
claude remote-control --name my-workstation

# Isolate on-demand sessions in git worktrees
claude remote-control --spawn worktree

# Enable Remote Control on a normal interactive session
claude --remote-control

# Connect or disconnect the current interactive session
/remote-control
```

The server pre-creates a session and can accept multiple concurrent sessions. The default `same-dir` spawn mode shares the current checkout; use `--spawn worktree` when concurrent sessions need isolated files, or `--spawn session` for the classic single-session lifecycle. The local process must stay running.

Remote Control requires direct Anthropic subscription authentication and is unavailable with API-key auth, `ANTHROPIC_BASE_URL`, Bedrock, Vertex AI, or Foundry. Run `claude` once to accept workspace trust before starting the server. `remoteControlAtStartup` can be enabled only in user or managed settings; project settings may disable it but cannot turn it on. See the [Remote Control guide](https://code.claude.com/docs/en/remote-control).

---

<h2 id="managed-settings">Managed Settings</h2>

> [!Note]
> **Enterprise administrators can enforce organization-wide settings through server-managed policy, MDM/registry policy, or a system-level `managed-settings.json`.**

**macOS (plist):**

Settings can be deployed via MDM profiles to `/Library/Managed Preferences/com.anthropic.claudecode.plist`.

**Windows (Registry):**

Settings can be deployed via Group Policy to `HKLM\SOFTWARE\Policies\ClaudeCode`.

**Filesystem policy:**

- macOS: `/Library/Application Support/ClaudeCode/managed-settings.json`
- Linux/WSL: `/etc/claude-code/managed-settings.json`
- Windows: `C:\Program Files\ClaudeCode\managed-settings.json`

Managed settings take precedence over command-line, local, project, and user settings and cannot be overridden by individual users. Machine-local policy environment variables merge per key with server-delivered settings rather than being discarded wholesale.

---

<h2 id="model-updates">Model Updates</h2>

### Model Guidance

> [!Note]
> **Prefer aliases for interactive work and pin a full provider model ID only when reproducibility matters. Alias mappings vary by account, organization policy, provider, region, and Claude Code version.**

| Alias | Current intent |
| :---- | :------------- |
| `default` | Account- and policy-appropriate default |
| `best` | Fable 5 when available, otherwise the newest allowed Opus |
| `fable` | Fable 5 |
| `opus` | Newest allowed Opus (currently Opus 5 on the Anthropic API) |
| `sonnet` | Newest allowed Sonnet (currently Sonnet 5 on the Anthropic API) |
| `haiku` | Newest allowed Haiku |
| `sonnet[1m]`, `opus[1m]` | Explicit 1M-context variants where supported |
| `opusplan` | Opus for planning, then Sonnet for execution |

**Use in Claude Code:**

```bash
# Select for this launch
claude --model sonnet
claude --model opus

# Inside a session; normally also saves the user default
/model sonnet

# Set a default from the prompt
/config model=sonnet

# Pin only when you need exact reproducibility
claude --model <full-model-id>

# Print mode can try up to three fallbacks in order
claude -p --model opus --fallback-model "sonnet,haiku" "review this diff"
```

Model selection tips:

- `/model` is the primary interactive selector; use its session-only option when you do not want to change the saved user default.
- `ANTHROPIC_MODEL` and the `model` setting provide non-interactive defaults. Provider deployments can map family aliases with `ANTHROPIC_DEFAULT_FABLE_MODEL`, `ANTHROPIC_DEFAULT_OPUS_MODEL`, `ANTHROPIC_DEFAULT_SONNET_MODEL`, and `ANTHROPIC_DEFAULT_HAIKU_MODEL`; `ANTHROPIC_SMALL_FAST_MODEL` is deprecated.
- Set `CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1` only when a compatible gateway exposes `/v1/models`; discovery can expose provider-prefixed IDs. In `modelOverrides`, keys must be canonical Anthropic model IDs and provider/upstream IDs belong on the value side—non-Anthropic keys are ignored.
- Fast mode is a separate latency/cost toggle and currently supports Opus 5 and Opus 4.8; auto mode is a separate permission mode and no longer needs an opt-in environment variable.

Check the [official model configuration reference](https://code.claude.com/docs/en/model-config) before pinning a provider-specific ID.

---

<h2 id="theming--customization">Theming & Customization</h2>

Claude Code supports built-in themes, custom named themes, and session accent colors.

```bash
/theme          # Pick a theme or create a custom one
/color          # Pick a session accent color
/color random   # Randomize session accent color
```

Custom themes can be edited as JSON under `~/.claude/themes/`, and plugins can ship themes for teams. The `Auto (match terminal)` theme follows terminal light/dark mode where supported.

---

<h2 id="code-review">Code Review</h2>

Claude Code has separate review paths for correctness, cleanup, and broader branch-level review.

| Command | Behavior |
| :------ | :--------------- |
| `/code-review [level] [PR#]` | Background correctness review of the current diff or a PR; remembers the last selected level |
| `/review ...` | Alias of `/code-review` |
| `/code-review --fix` | Applies review findings to the working tree, including reuse/simplification/efficiency suggestions |
| `/code-review --comment` | Posts inline GitHub PR comments where supported |
| `/simplify` | Cleanup-only review for reuse, simplification, efficiency, and altitude |
| `/code-review ultra [target]` or `/ultrareview [target]` | Cloud review using parallel multi-agent analysis and critique |
| `claude ultrareview [target]` | Non-interactive CI/script entrypoint; supports JSON output |

Use `/code-review` for local correctness review, `/simplify` for cleanup, and `/ultrareview` when you want a broader cloud review of a branch or PR.

---

<h2 id="insights">Claude Code Insights</h2>

> [!Note]
> **The `/insights` command generates an interactive HTML report analyzing your coding habits from the past 30 days.**

**Run Insights:**

```bash
# In Claude Code terminal
/insights

# Open the generated report
start ~/.claude/usage-data/report.html     # Windows
open ~/.claude/usage-data/report.html      # Mac
xdg-open ~/.claude/usage-data/report.html  # Linux
```

**How It Works:**

1. **Session Collection** - Pulls session logs from `~/.claude/projects/`, filters agent sub-sessions and short sessions
2. **Metadata Extraction** - Extracts duration, token usage, tools used, languages detected, git activity
3. **Facet Extraction** - Uses Haiku model to analyze transcripts and identify goals, satisfaction signals, friction points
4. **Report Generation** - Creates interactive HTML report with personalized suggestions

**Report Sections:**

| Section               | Description                                                 |
| :-------------------- | :---------------------------------------------------------- |
| **What's Working**    | Your strengths and successful patterns                      |
| **What's Hindering**  | Where Claude struggled or where you caused friction         |
| **Friction Analysis** | Breakdown of problem areas with specific examples           |
| **Stats Dashboard**   | Tool usage, language breakdown, coding time distribution    |
| **Quick Wins**        | Copy-paste suggestions for CLAUDE.md improvements           |
| **Features to Try**   | Personalized recommendations (skills, hooks, headless mode) |

> Source transcripts and the generated report remain stored locally, but transcript-derived material sent to the model leaves the machine and follows the active provider and account's data-use and retention policy.

---

<h2 id="mcp-integration">MCP Integration</h2>

<h3 id="understanding-mcp-model-context-protocol">Understanding MCP (Model Context Protocol)</h3>

#### What is MCP?

> MCP extends Claude Code with tools and resources exposed by trusted local processes or remote services.

MCP behavior to know:

- **HTTP** is the recommended transport for remote servers. **SSE** remains available for legacy servers, **stdio** is for local processes, and WebSocket is config-only and does not support OAuth.
- MCP servers are available in `claude -p` workflows, including servers passed with `--mcp-config`; `--strict-mcp-config` ignores every other MCP source.
- Use `/mcp` to inspect status, approve project servers, authenticate, disable servers, and reconnect after configuration changes.
- Tool names follow the `mcp__server__tool` pattern in permissions and hooks. Large tool responses can consume substantial context, so enable only the servers needed for a session.

###### **MCP Architecture:**

```
Claude Code ←→ MCP Protocol ←→ MCP Servers ←→ External Services
```

<h3 id="claudeai-mcp-connectors">claude.ai MCP Connectors</h3>

Claude Code can use MCP servers configured in your claude.ai account, bringing cloud-hosted tools to your CLI workflow.

```bash
# Enabled by default — to opt out:
export ENABLE_CLAUDEAI_MCP_SERVERS=false
```

This allows you to access the same MCP tool integrations available in claude.ai directly from the command line, without local MCP server configuration.

<h3 id="mcp-setup--configuration">MCP Setup & Configuration</h3>

###### Basic MCP Commands

```bash
claude mcp list                         # List and health-check configured servers
claude mcp get <name>                   # Show one server's configuration/status
claude mcp add <name> -- <cmd> [args]   # Add a local stdio server
claude mcp add --transport http <name> <url>
claude mcp login <name>                 # Authenticate HTTP/SSE/claude.ai server
claude mcp logout <name>                # Clear its stored OAuth credentials
claude mcp remove <name>
```

###### MCP Configuration File Location

| Scope | CLI | Storage and visibility |
| :---- | :-- | :--------------------- |
| Local (default) | `-s local` | Current project only; stored under that project's entry in `~/.claude.json` |
| User | `-s user` | All projects for the current user; stored in `~/.claude.json` |
| Project | `-s project` | Shared in the repository root's `.mcp.json`; requires explicit trust/approval |

## Quick Start

> **For a remote HTTP server, add the URL and complete OAuth separately:**

```bash
claude mcp add --transport http -s user sentry https://mcp.sentry.dev/mcp
claude mcp login sentry

# Verify connection and tool discovery
claude mcp list
```

For a local stdio server, put its executable and arguments after `--` so Claude Code flags cannot consume server flags. Replace the paths with a server you have reviewed and installed:

```bash
claude mcp add -s local local-tools -- /absolute/path/to/mcp-server --workspace "$PWD"
```

## Additional Methods:

<table><td>

### 1. Command Line Addition

> **Claude Code provides simple command line tools to add MCP servers:**

```bash
# Basic syntax
claude mcp add <name> <command> [parameters...]

# Local stdio server skeleton
claude mcp add local-tools -- /absolute/path/to/mcp-server --workspace "$PWD"

# Example with an environment variable supplied to the child process
claude mcp add api-server -e API_KEY="$API_KEY" -- /path/to/server
```

**OAuth for MCP Servers:**

```bash
# Add an HTTP server whose OAuth provider needs a pre-registered client
claude mcp add --transport http --client-id <client-id> --client-secret --callback-port 8080 <name> <url>
claude mcp login <name>
```

`--client-secret` prompts with masked input; for automation, set `MCP_CLIENT_SECRET` through a secret manager while keeping the flag. Use a callback port registered by the provider. Do not put long-lived credentials in `.mcp.json` or commit them to a repository.

</td></table>

<table><td>

### 2. Direct Configuration File Editing

> Prefer `claude mcp add` because it writes the correct scope and transport schema. The example below is a shared project configuration.

**1. Choose the scope and file:**

- Shared project: `<project>/.mcp.json` (the format shown below)
- User and local scopes: stored in `~/.claude.json` (macOS/Linux) or `%USERPROFILE%\.claude.json` (Windows); use `claude mcp add -s user` or `-s local` because local entries live under project metadata

**2. Edit the project's `.mcp.json`:**

```json
{
  "mcpServers": {
    "local-tools": {
      "type": "stdio",
      "command": "/absolute/path/to/mcp-server",
      "args": [
        "--workspace",
        "/path/to/project"
      ],
      "env": {}
    },
    "remote-api": {
      "type": "http",
      "url": "https://mcp.example.com/mcp"
    }
  }
}
```

**3. Open `/mcp` to approve or reconnect the server.** Project `.mcp.json` changes are watched; a full Claude Code restart is normally unnecessary.

</td></table>
<table><td>

### 3. Project-level Configuration (Recommended for team collaboration)

> If you want team members to all use the same MCP configuration:

```bash
# Add project-level MCP server
claude mcp add shared-tools -s project -- npx -y @your-team/mcp-tools
```

**This will create a `.mcp.json` file in the project root directory:**

```json
{
  "mcpServers": {
    "shared-tools": {
      "command": "npx",
      "args": ["-y", "@your-team/mcp-tools"],
      "env": {}
    }
  }
}
```

</td></table>

## MCP Server Scope Detailed

Understanding scope is crucial to avoid "server not found" errors:

### 1. Local Scope (Default)

- Only available in current directory
- Configuration stored in the projects section of `~/.claude.json`
- Suitable for: Personal project-specific tools

### 2. User Scope (Global)

- Available in all projects
- Configure with the `-s user` flag
- Suitable for: Common tools like file systems, database clients

### 3. Project Scope (Team shared)

- Shared through `.mcp.json` file
- Configure with the `-s project` flag
- Suitable for: Team-shared project-specific tools

## Practical MCP Server Recommendations

Choose servers from providers you trust and prefer vendor-hosted HTTP endpoints with OAuth over copying tokens into local stdio configuration. Claude Code already has built-in file, shell, search, and web tools, so add an MCP server only when it exposes a service or capability you do not already have.

Before installing a package-backed stdio server, verify its current publisher, source repository, release activity, permissions, and transitive install behavior. Several early `@modelcontextprotocol/server-*` examples found in old tutorials are archived or no longer the vendor-recommended integration.

## Common Errors and Solutions

### Error 1: Tool Name Validation Failed

```
API Error 400: "tools.11.custom.name: String should match pattern '^[a-zA-Z0-9_-]{1,64}$'"
```

**Solution**:

- Ensure server name only contains letters, numbers, underscores and hyphens
- Name length should not exceed 64 characters
- Don't use special characters or spaces

### Error 2: MCP Server Not Found

```
MCP server 'my-server' not found
```

**Solution**:

1. Check if scope settings are correct
2. Run `claude mcp list` to confirm server has been added
3. Ensure you're in the correct directory (for local scope)
4. Open `/mcp` to approve a project server or reconnect it

### Error 3: Protocol Version Error

```
"protocolVersion": "Required"
```

**Solution**: If the server response is missing a protocol version, try these checks:

1. Use wrapper scripts
2. Ensure MCP server returns correct protocol version
3. Run `claude update` and retry

### Error 4: Windows Path Issues

```
Error: Cannot find module 'C:UsersusernameDocuments'
```

**Solution**: Quote the path for the shell you are using, and escape backslashes only in JSON:

```powershell
# PowerShell: backslashes are literal inside the quoted argument
claude mcp add local-tools -- C:\tools\mcp-server.exe --workspace "C:\Users\username\Documents"
```

```bash
# Git Bash: forward slashes avoid backslash escaping
claude mcp add local-tools -- /c/tools/mcp-server.exe --workspace "C:/Users/username/Documents"
```

In JSON, the same Windows path is written as `"C:\\Users\\username\\Documents"`.

### Error 5: Permission Issues

```
Permission denied
```

**Solution**:

1. Run the configured stdio command directly and inspect its error output
2. Grant only the filesystem or service access that process actually needs
3. Keep user-level servers and credentials in user-owned locations; do not fix routine failures by running Claude Code as root or Administrator

## Debugging Techniques

When encountering problems, these debugging methods can help you quickly locate issues:

### 1. Enable Debug Mode

```bash
claude --debug='mcp'
claude --debug-file ./claude-mcp-debug.log
```

### 2. View MCP Status

In Claude Code, enter:

```
/mcp
```

### 3. Inspect One Server

```bash
claude mcp get <name>
```

### 4. Manually Test a stdio Server

```bash
# Directly run server command to see if there's output
/absolute/path/to/mcp-server --workspace "$PWD"
```

## Paths and Proxies

Quote paths that contain spaces or non-ASCII characters and keep the server command after `--`. For stdio servers launched through npm, configure the proxy/registry for npm itself; for remote HTTP servers, use the proxy environment supported by your Claude Code deployment and server. Do not rewrite valid Unicode paths merely to work around incorrect shell quoting.

## Best Practice Recommendations

1. **Add only what a workflow needs**: every enabled tool increases discovery/context overhead and attack surface.
2. **Use the narrowest scope**: local for one checkout, project only for reviewed team configuration, user only for genuinely global services.
3. **Prefer OAuth**: use `claude mcp login`; keep secrets out of command history, `.mcp.json`, and source control.
4. **Review project servers before approval**: `.mcp.json` can launch local processes after a user trusts it.
5. **Remove stale servers**: use `claude mcp remove <name>` and `claude mcp reset-project-choices` when approvals need to be reviewed again.

## Advanced Techniques

Use the current [Model Context Protocol SDKs](https://modelcontextprotocol.io/docs/sdk) when you need a custom server; the SDK APIs and transport recommendations have changed since the early `Server#setRequestHandler` examples. Prefer remote Streamable HTTP for deployed servers and stdio for a process Claude Code launches locally.

#### MCP Tool Permissions

```bash
# Allow specific MCP tools
claude --allowed-tools "mcp__git__commit" "mcp__git__push"

# Allow all tools from specific server
claude --allowed-tools "mcp__postgres__*"

# Combined with built-in tools
claude --allowed-tools "Read" "Edit" "mcp__git__*"
```

See the [official Claude Code MCP reference](https://code.claude.com/docs/en/mcp) for transport JSON, OAuth callbacks, tool search, output limits, managed configuration, and SDK embedding.

<h2 id="hooks-system">Hooks System</h2>

Hooks run deterministic handlers at Claude Code lifecycle points. They execute with the user's privileges, so review project and plugin hooks as carefully as build scripts.

> [!TIP]
> Use the [hooks reference](https://code.claude.com/docs/en/hooks) for exact event schemas and the [hooks guide](https://code.claude.com/docs/en/hooks-guide) for worked examples.

<h3 id="hooks-configuration">Configuration</h3>

Claude Code hooks are configured in [settings files](https://code.claude.com/docs/en/settings):

- `~/.claude/settings.json` - User settings
- `.claude/settings.json` - Project settings
- `.claude/settings.local.json` - Local project settings (not committed)
- Enterprise managed policy settings
- Plugin `hooks/hooks.json`, or skill/subagent frontmatter while that component is active

#### Structure

Hooks are organized by matchers, where each matcher can have multiple hooks:

```json
{
  "hooks": {
    "EventName": [
      {
        "matcher": "ToolPattern",
        "hooks": [
          {
            "type": "command",
            "command": "your-command-here",
            "args": ["--flag", "value"]
          }
        ]
      }
    ]
  }
}
```

#### HTTP Hooks

In addition to shell commands, hooks can POST JSON to a URL and receive a JSON response:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "http",
            "url": "https://hooks.example.com/validate",
            "timeout": 10
          }
        ]
      }
    ]
  }
}
```

HTTP hooks receive the same JSON as a POST body and return the normal JSON output schema. Five handler types are supported: `command`, `http`, `mcp_tool`, `prompt`, and experimental `agent`. All matching handlers run in parallel; identical handlers merged from multiple settings files are deduplicated.

`matcher` filters a field determined by the event. Tool events match tool names; other examples include session source, notification type, subagent type, config source, compaction trigger, and MCP server. Exact alternatives use `Edit|Write`; values containing other characters are JavaScript regular expressions, so `mcp__memory__.*` matches a server's tools. `*`, an empty string, or an omitted matcher matches every occurrence. Events such as `UserPromptSubmit`, `PostToolBatch`, `Stop`, `TaskCreated`, and `TaskCompleted` do not support matchers.

On tool events, a handler-level `if` can further filter the full tool call with permission-rule syntax, for example `"Bash(git *)"` or `"Edit(*.ts)"`. A handler also supports `timeout` and `statusMessage`; command handlers support `command` plus optional exec-form `args`. Use `/hooks` to inspect the merged configuration and its source; the menu is read-only.

For events that do not support matchers, omit the field:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/prompt-validator.py"
          }
        ]
      }
    ]
  }
}
```

#### Project-Specific Hook Scripts

You can use the environment variable `CLAUDE_PROJECT_DIR` (only available when
Claude Code spawns the hook command) to reference scripts stored in your project,
ensuring they work regardless of Claude's current directory:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/check-style.sh",
            "args": []
          }
        ]
      }
    ]
  }
}
```

<h3 id="hook-events">Hook Events</h3>

The event surface is broader than tool pre/post processing. This is the current lifecycle map; consult the hooks reference for each event's matcher, input, and decision schema.

| Lifecycle area | Events |
| :------------- | :----- |
| Session and setup | `Setup`, `SessionStart`, `SessionEnd`, `InstructionsLoaded` |
| User and display | `UserPromptSubmit`, `UserPromptExpansion`, `MessageDisplay`, `Notification` |
| Tools and permissions | `PreToolUse`, `PermissionRequest`, `PermissionDenied`, `PostToolUse`, `PostToolUseFailure`, `PostToolBatch` |
| Agents and tasks | `SubagentStart`, `SubagentStop`, `TaskCreated`, `TaskCompleted`, `TeammateIdle` |
| Turn completion | `Stop`, `StopFailure` |
| Workspace and config | `ConfigChange`, `CwdChanged`, `DirectoryAdded`, `FileChanged`, `WorktreeCreate`, `WorktreeRemove` |
| Context | `PreCompact`, `PostCompact` |
| MCP interaction | `Elicitation`, `ElicitationResult` |

Important behavior:

- `PreToolUse` runs after tool arguments are formed but before execution and can allow, deny, ask, or rewrite supported inputs. `PostToolUse` and `PostToolUseFailure` cannot undo an operation that already ran.
- `PermissionRequest` runs when an interactive permission decision is needed. `PermissionDenied` is specific to an auto-mode classifier denial; return `hookSpecificOutput.retry: true` to let the model retry.
- `TaskCreated` refers to task-list creation and `TaskCompleted` to marking a task complete; they are not generic background-process completion events.
- `WorktreeCreate` replaces the default creation behavior when configured, and any non-zero command-hook exit aborts creation. `WorktreeRemove` performs cleanup when a session, subagent, or background worktree is removed.
- Exit code `2` is the blocking status for most blockable command-hook events; exit code `1` is usually only a non-blocking hook error. HTTP hooks must return a 2xx JSON decision to block because HTTP error statuses are non-blocking.

<h3 id="hook-input">Hook Input</h3>

Command hooks receive JSON on stdin; HTTP hooks receive the same object as the POST body. These are the common fields plus representative optional fields—each event adds its own schema:

```typescript
{
  session_id: string;
  prompt_id?: string;
  transcript_path: string; // May lag the in-memory conversation
  cwd: string;
  permission_mode?: "default" | "plan" | "acceptEdits" | "auto" | "dontAsk" | "bypassPermissions";
  effort?: { level: "low" | "medium" | "high" | "xhigh" | "max" };
  hook_event_name: string;
  agent_id?: string;
  agent_type?: string;
}
```

#### PreToolUse Input

The exact schema for `tool_input` depends on the tool.

```json
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "permission_mode": "default",
  "hook_event_name": "PreToolUse",
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.txt",
    "content": "file content"
  },
  "tool_use_id": "toolu_01ABC123"
}
```

#### PostToolUse Input

The exact schema for `tool_input` and `tool_response` depends on the tool.

```json
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "PostToolUse",
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.txt",
    "content": "file content"
  },
  "tool_response": {
    "filePath": "/path/to/file.txt",
    "success": true
  }
}
```

#### Notification Input

```json
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "Notification",
  "message": "Task completed successfully"
}
```

#### UserPromptSubmit Input

```json
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "UserPromptSubmit",
  "prompt": "Write a function to calculate the factorial of a number"
}
```

#### Stop and SubagentStop Input

`stop_hook_active` is true when Claude Code is already continuing as a result of
a stop hook. Check this value or process the transcript to prevent Claude Code
from running indefinitely.

```json
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "Stop",
  "stop_hook_active": true,
  "last_assistant_message": "I've completed all the requested changes."
}
```

> The `last_assistant_message` field contains the final text Claude produced before stopping. Useful for validating completeness or logging outcomes.

#### PreCompact Input

For `manual`, `custom_instructions` comes from what the user passes into
`/compact`. For `auto`, `custom_instructions` is empty.

```json
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "PreCompact",
  "trigger": "manual",
  "custom_instructions": ""
}
```

#### SessionStart Input

```json
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "SessionStart",
  "source": "startup"
}
```

<h3 id="hook-output">Hook Output</h3>

There are two ways for hooks to return output back to Claude Code. The output
communicates whether to block and any feedback that should be shown to Claude
and the user.

#### Simple: Exit Code

Hooks communicate status through exit codes, stdout, and stderr:

- **Exit code 0**: success. If stdout is JSON, Claude Code parses it as structured output. Plain stdout is normally debug-only; for `UserPromptSubmit`, `UserPromptExpansion`, and `SessionStart`, it is added to Claude's context.
- **Exit code 2**: blocking status for events that can still be blocked. JSON on stdout is ignored and stderr supplies the reason.
- **Other exit codes**: normally a non-blocking hook error; the action continues. `WorktreeCreate` is the notable exception: any non-zero exit aborts creation.

> [!WARNING]
> A conventional `exit 1` does not enforce policy for most events. Use exit `2`, or exit `0` with the event's structured JSON decision. HTTP failures and non-2xx responses are also non-blocking; an HTTP hook must return a 2xx JSON decision to block.

##### Exit Code 2 Behavior

| Event class | Exit-code-2 behavior |
| :---------- | :------------------- |
| `PreToolUse`, `PermissionRequest` | Blocks the tool or denies permission |
| `UserPromptSubmit`, `UserPromptExpansion` | Blocks the prompt or expansion |
| `Stop`, `SubagentStop`, `TeammateIdle` | Prevents stopping/idle so work can continue |
| `TaskCreated`, `TaskCompleted`, `ConfigChange`, `PostToolBatch`, `PreCompact` | Blocks or rolls back the pending transition |
| `Elicitation`, `ElicitationResult` | Denies the request or changes the response to decline |
| `PostToolUse`, `PostToolUseFailure` | Cannot undo the call; sends stderr to Claude |
| Non-blocking lifecycle events | Shows/logs the error but allows the lifecycle event |

`StopFailure` ignores hook output. `PermissionDenied` has already happened and reads only `hookSpecificOutput.retry`. Refer to the official per-event table before relying on blocking semantics.

#### Advanced: JSON Output

Hooks can return structured JSON in `stdout` for more sophisticated control:

##### Common JSON Fields

All hook types can include these optional fields:

```json
{
  "continue": true,
  "stopReason": "Reason shown when continue is false",
  "suppressOutput": true,
  "systemMessage": "Visible warning for the user"
}
```

`continue` and `suppressOutput` default to `true` and `false`, respectively. `stopReason` is shown when `continue` is false.

If `continue` is false, Claude stops processing after the hooks run.

- For `PreToolUse`, this is different from `"permissionDecision": "deny"`, which
  only blocks a specific tool call and provides automatic feedback to Claude.
- For `PostToolUse`, this is different from `"decision": "block"`, which
  provides automated feedback to Claude.
- For `UserPromptSubmit`, this prevents the prompt from being processed.
- For `Stop` and `SubagentStop`, this takes precedence over any
  `"decision": "block"` output.
- In all cases, `"continue" = false` takes precedence over any
  `"decision": "block"` output.

`stopReason` accompanies `continue` with a reason shown to the user, not shown
to Claude.

##### `PreToolUse` Decision Control

`PreToolUse` hooks can control whether a tool call proceeds.

- `"allow"` bypasses the permission system. `permissionDecisionReason` is shown
  to the user but not to Claude. (_Deprecated `"approve"` value + `reason` has
  the same behavior._)
- `"deny"` prevents the tool call from executing. `permissionDecisionReason` is
  shown to Claude. (_`"block"` value + `reason` has the same behavior._)
- `"ask"` asks the user to confirm the tool call in the UI.
  `permissionDecisionReason` is shown to the user but not to Claude.
- `"defer"` preserves the pending call for a later `-p --resume` round trip; it is honored only in non-interactive print mode.
- `updatedInput` replaces the complete tool input before execution; include every unchanged field. `additionalContext` adds context alongside the result.

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "My reason here",
    "updatedInput": {},
    "additionalContext": "Optional context for Claude"
  }
}
```

The old top-level `decision: "approve"|"block"` and `reason` fields remain compatibility aliases for `PreToolUse` but are deprecated.

##### `PostToolUse` Decision Control

`PostToolUse` hooks can provide feedback or stop the turn after a successful tool call; they cannot undo the call.

- `"block"` automatically prompts Claude with `reason`.
- `undefined` does nothing. `reason` is ignored.

```json
{
  "decision": "block",
  "reason": "Explanation for decision"
}
```

##### `UserPromptSubmit` Decision Control

`UserPromptSubmit` hooks can control whether a user prompt is processed.

- `"block"` prevents the prompt from being processed. The submitted prompt is
  erased from context. `"reason"` is shown to the user but not added to context.
- `undefined` allows the prompt to proceed normally. `"reason"` is ignored.
- `"hookSpecificOutput.additionalContext"` adds the string to the context if not
  blocked.

```json
{
  "decision": "block",
  "reason": "Explanation for decision",
  "hookSpecificOutput": {
    "hookEventName": "UserPromptSubmit",
    "additionalContext": "My additional context here"
  }
}
```

##### `Stop`/`SubagentStop` Decision Control

`Stop` and `SubagentStop` hooks can control whether Claude must continue.

- `"block"` prevents Claude from stopping. You must populate `reason` for Claude
  to know how to proceed.
- `undefined` allows Claude to stop. `reason` is ignored.

```json
{
  "decision": "block",
  "reason": "Must be provided when Claude is blocked from stopping"
}
```

##### `SessionStart` Decision Control

`SessionStart` hooks allow you to load in context at the start of a session.

- `"hookSpecificOutput.additionalContext"` adds the string to the context.
- `"hookSpecificOutput.sessionTitle"` sets the session title on startup/resume.
- `"reloadSkills": true` re-scans skill directories after the hook finishes.

```json
{
  "reloadSkills": true,
  "hookSpecificOutput": {
    "hookEventName": "SessionStart",
    "additionalContext": "My additional context here",
    "sessionTitle": "Focused refactor"
  }
}
```

##### Terminal Sequence Output

Hooks can return `terminalSequence` to emit desktop notifications, window titles, or bells without needing direct terminal access.

##### Exit Code Example: Bash Command Validation

```python
#!/usr/bin/env python3
import json
import re
import sys

# Define validation rules as a list of (regex pattern, message) tuples
VALIDATION_RULES = [
    (
        r"\bgrep\b(?!.*\|)",
        "Use 'rg' (ripgrep) instead of 'grep' for better performance and features",
    ),
    (
        r"\bfind\s+\S+\s+-name\b",
        "Use 'rg --files | rg pattern' or 'rg --files -g pattern' instead of 'find -name' for better performance",
    ),
]


def validate_command(command: str) -> list[str]:
    issues = []
    for pattern, message in VALIDATION_RULES:
        if re.search(pattern, command):
            issues.append(message)
    return issues


try:
    input_data = json.load(sys.stdin)
except json.JSONDecodeError as e:
    print(f"Error: Invalid JSON input: {e}", file=sys.stderr)
    sys.exit(1)

tool_name = input_data.get("tool_name", "")
tool_input = input_data.get("tool_input", {})
command = tool_input.get("command", "")

if tool_name != "Bash" or not command:
    sys.exit(0)

# Validate the command
issues = validate_command(command)

if issues:
    for message in issues:
        print(f"• {message}", file=sys.stderr)
    # Exit code 2 blocks tool call and shows stderr to Claude
    sys.exit(2)
```

##### JSON Output Example: UserPromptSubmit to Add Context and Validation

> [!NOTE]
> For `UserPromptSubmit` hooks, you can inject context using either method:
>
> - Exit code 0 with stdout: Claude sees the context (special case for `UserPromptSubmit`)
> - JSON output: Provides more control over the behavior

```python
#!/usr/bin/env python3
import json
import sys
import re
import datetime

# Load input from stdin
try:
    input_data = json.load(sys.stdin)
except json.JSONDecodeError as e:
    print(f"Error: Invalid JSON input: {e}", file=sys.stderr)
    sys.exit(1)

prompt = input_data.get("prompt", "")

# Check for sensitive patterns
sensitive_patterns = [
    (r"(?i)\b(password|secret|key|token)\s*[:=]", "Prompt contains potential secrets"),
]

for pattern, message in sensitive_patterns:
    if re.search(pattern, prompt):
        # Use JSON output to block with a specific reason
        output = {
            "decision": "block",
            "reason": f"Security policy violation: {message}. Please rephrase your request without sensitive information."
        }
        print(json.dumps(output))
        sys.exit(0)

# Add current time to context
context = f"Current time: {datetime.datetime.now()}"
print(context)

"""
The following is also equivalent:
print(json.dumps({
  "hookSpecificOutput": {
    "hookEventName": "UserPromptSubmit",
    "additionalContext": context,
  },
}))
"""

# Allow the prompt to proceed with the additional context
sys.exit(0)
```

##### JSON Output Example: PreToolUse with Approval

```python
#!/usr/bin/env python3
import json
import sys

# Load input from stdin
try:
    input_data = json.load(sys.stdin)
except json.JSONDecodeError as e:
    print(f"Error: Invalid JSON input: {e}", file=sys.stderr)
    sys.exit(1)

tool_name = input_data.get("tool_name", "")
tool_input = input_data.get("tool_input", {})

# Example: Auto-approve reads of plain-text documentation files
if tool_name == "Read":
    file_path = tool_input.get("file_path", "")
    if file_path.endswith((".md", ".mdx", ".txt")):
        # Use the current PreToolUse schema to auto-approve the tool call
        output = {
            "suppressOutput": True,
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "allow",
                "permissionDecisionReason": "Plain-text documentation file auto-approved",
            },
        }
        print(json.dumps(output))
        sys.exit(0)

# For other cases, let the normal permission flow proceed
sys.exit(0)
```

<h3 id="working-with-mcp-tools">Working with MCP Tools</h3>

Claude Code hooks work seamlessly with
[Model Context Protocol (MCP) tools](https://code.claude.com/docs/en/mcp). When MCP servers
provide tools, they appear with a special naming pattern that you can match in
your hooks.

#### MCP Tool Naming

MCP tools follow the pattern `mcp__<server>__<tool>`, for example:

- `mcp__memory__create_entities` - Memory server's create entities tool
- `mcp__filesystem__read_file` - Filesystem server's read file tool
- `mcp__github__search_repositories` - GitHub server's search tool

#### Configuring Hooks for MCP Tools

You can target specific MCP tools or entire MCP servers:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "mcp__memory__.*",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Memory operation initiated' >> ~/mcp-operations.log"
          }
        ]
      },
      {
        "matcher": "mcp__.*__write.*",
        "hooks": [
          {
            "type": "command",
            "command": "/home/user/scripts/validate-mcp-write.py"
          }
        ]
      }
    ]
  }
}
```

<h3 id="hooks-examples">Examples</h3>

> [!TIP]
> For practical examples including code formatting, notifications, and file protection, see the [hooks guide](https://code.claude.com/docs/en/hooks-guide).

<h3 id="security-considerations">Security Considerations</h3>

#### Disclaimer

Command hooks execute arbitrary processes with the same user privileges as Claude Code; HTTP and MCP-tool hooks can send event data to external services. Review project, plugin, skill, and agent hooks before trusting their source. A hook is not sandboxed merely because the Bash tool is sandboxed.

<h3 id="hooks-security">Hooks Security Considerations</h3>

Here are some key practices for writing more secure hooks:

1. **Treat hook input as untrusted data** - Parse JSON and validate by type and intent; a substring check for `..` is not a complete path-boundary check.
2. **Prefer exec-form arguments** - Keep executable and arguments separate; otherwise quote every shell expansion.
3. **Resolve and constrain paths** - Compare canonical paths against an explicit allowed root, and use `${CLAUDE_PROJECT_DIR}` for project scripts.
4. **Keep secrets out of config and output** - Use secret managers and a handler's HTTP `allowedEnvVars`; administrators can narrow the global ceiling with `httpHookAllowedEnvVars`. Hook stdout can enter logs or model context.
5. **Apply managed controls where needed** - Administrators can restrict hook sources with `allowManagedHooksOnly` and allowlist HTTP hook URLs/environment variables.

#### Configuration Safety

Direct settings edits are normally picked up by the file watcher. `/hooks` is a read-only browser for the merged configuration and its source; edit the originating settings, plugin, skill, or agent file to change it. Project subagent hooks do not run until the workspace that supplied the agent definition has been trusted.

<h3 id="hook-execution-details">Hook Execution Details</h3>

- **Timeouts**: default 600 seconds for `command`, `http`, and `mcp_tool`; 30 seconds for `prompt`; 60 seconds for `agent`. Some events impose shorter budgets.
  - A handler timeout does not cancel other parallel handlers.
- **Parallelization**: All matching hooks run in parallel
- **Environment**: Runs in current directory with Claude Code's environment
  - The `${CLAUDE_PROJECT_DIR}` placeholder points to the
    absolute path to the project root directory
- **Input**: JSON via stdin for command hooks or an HTTP POST body for HTTP hooks
- **Output**: structured JSON is parsed only on successful command exit or a 2xx HTTP response; other output is event-dependent and normally debug-only

<h3 id="hooks-debugging">Debugging</h3>

#### Basic Troubleshooting

If your hooks aren't working:

1. **Check configuration** - Run `/hooks` to see if your hook is registered
2. **Verify syntax** - Ensure your JSON settings are valid
3. **Test commands** - Run hook commands manually first
4. **Check permissions** - Make sure scripts are executable
5. **Review logs** - Use `claude --debug='hooks'` or `claude --debug-file ./claude-hooks.log`

Common issues:

- **Quotes not escaped** - Use `\"` inside JSON strings
- **Wrong matcher** - Check tool names match exactly (case-sensitive)
- **Command not found** - Use full paths for scripts

#### Advanced Debugging

For complex hook issues:

1. **Inspect hook execution** - Use `claude --debug='hooks'` to see detailed hook
   execution
2. **Validate JSON schemas** - Test hook input/output with external tools
3. **Check environment variables** - Verify Claude Code's environment is correct
4. **Test edge cases** - Try hooks with unusual file paths or inputs
5. **Monitor system resources** - Check for resource exhaustion during hook
   execution
6. **Use structured logging** - Implement logging in your hook scripts

#### Debug Output Example

Use `claude --debug='hooks'` to see hook execution details. Log wording is not a stable API, so expect it to vary by release:

```
[DEBUG] Executing hooks for PostToolUse:Write
[DEBUG] Getting matching hook commands for PostToolUse with query: Write
[DEBUG] Found 1 hook matchers in settings
[DEBUG] Matched 1 hooks for query "Write"
[DEBUG] Found 1 hook commands to execute
[DEBUG] Executing hook command: <Your command> with timeout 60000ms
[DEBUG] Hook command completed with status 0: <Your stdout>
```

The interactive transcript may show handler status, but use the debug log for complete stdout/stderr and schema errors:

- Which hook is running
- Command being executed
- Success/failure status
- Output or error messages

---

<h1 id="security--permissions">Security & Permissions</h1>

Use `/permissions` to inspect the merged rules and the settings file each rule came from. Rules are evaluated in fixed order—**deny**, then **ask**, then **allow**—so a narrower allow rule cannot override a broader matching deny or ask rule. Instructions in prompts or `CLAUDE.md` influence model behavior but do not grant permissions.

#### Tool Permission Patterns

```bash
# Allow specific tools (read/edit files)
claude --allowed-tools "Read" "Edit"

# Allow tool categories incl. Bash (but still scoped below)
claude --allowed-tools "Read" "Edit" "Bash"

# Scoped permissions (all git commands)
claude --allowed-tools "Bash(git *)"

# Multiple scopes (git + npm)
claude --allowed-tools "Bash(git *)" "Bash(npm *)"
```

Persistent settings use `Tool` or `Tool(specifier)` rules:

```json
{
  "permissions": {
    "allow": ["Bash(npm run *)", "Edit(/src/**)"],
    "ask": ["Bash(git push *)"],
    "deny": ["Read(//**/.env)", "Bash(rm *)"]
  }
}
```

`Edit(path)` covers built-in file-editing tools and `Read(path)` covers built-in readers; path-qualified `Write`, `MultiEdit`, or `Glob` rules are not consulted by current file permission checks. Bash and PowerShell compound commands are parsed by subcommand, and every subcommand must be allowed. Permission rules are an application boundary for built-in tools, not an OS boundary for arbitrary scripts—use the sandbox for process-level filesystem/network enforcement.

Permission modes are `manual`/`default`, `acceptEdits`, `plan`, `auto`, `dontAsk`, and `bypassPermissions`. Auto mode classifies tool calls in the background; `dontAsk` denies anything not pre-approved. See the [permissions reference](https://code.claude.com/docs/en/permissions) for current rule matching and mode details.

<h2 id="dangerous-mode">Dangerous Mode</h2>

> [!Warning]
> Use bypass mode only in an isolated container or VM whose credentials, network, mounts, and data are intentionally disposable. It skips normal permission prompts, including writes to protected paths.
>
> `claude --dangerously-skip-permissions`

Explicit `ask` rules, organization-gated connector tools, and MCP tools marked as requiring user interaction still prompt. Root/home removal commands also retain a catastrophic-operation circuit breaker. Administrators can disable bypass and auto modes through managed settings.

<h1 id="automation--integration">Automation & Integration</h1>

<h2 id="automation--scripting-with-claude-code">Automation & Scripting with Claude Code</h2>

> GitHub Actions you can copy/paste :p

1. Run `/install-github-app` for the guided setup, or configure the action manually with the built-in `GITHUB_TOKEN` and the least workflow permissions shown below.
2. In your repo, add a secret **`ANTHROPIC_API_KEY`** Settings → Secrets and variables → Actions → New repository secret
3. Copy the workflows below into **`.github/workflows/`**.
4. Open a **test PR** (or a new issue) to see them run.

> [!TIP]
> Tags such as `@v1` and `@main` are convenient but mutable. A reviewed full-length commit SHA is the only immutable Action reference; replace the example tags below with verified SHAs for production or high-assurance workflows.

<h2 id="auto-pr-review-inline-comments">Auto PR Review (inline comments)</h2>

> **Creates a structured review (with inline comments) as soon as a PR opens or updates.**

**File:** `.github/workflows/claude-pr-auto-review.yml`

```yaml
name: Auto review PRs
on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]

permissions:
  contents: read
  pull-requests: write
  id-token: write

jobs:
  auto-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 1

      - name: Claude PR review
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          # Claude will fetch the diff and leave inline comments
          prompt: |
            REPO: ${{ github.repository }}
            PR NUMBER: ${{ github.event.pull_request.number }}
            Review this pull request’s diff for correctness, readability, testing, performance, and DX.
            Prefer specific, actionable suggestions. Use inline comments where relevant.
          claude_args: |
            --allowedTools "mcp__github_inline_comment__create_inline_comment,Bash(gh pr comment:*),Bash(gh pr diff:*),Bash(gh pr view:*)"
```

<h2 id="security-review-on-every-pr">Security Review on Every PR</h2>

> **Runs a focused security scan and comments findings directly on the PR.**

> [!WARNING]
> The dedicated security-review Action is not hardened against prompt injection. Run it only on trusted PRs, and configure GitHub to **Require approval for all external contributors** before their workflows can access the job and its API key.

**File:** `.github/workflows/claude-security-review.yml`

```yaml
name: Security Review
on:
  pull_request:

permissions:
  contents: read
  pull-requests: write

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
        with:
          ref: ${{ github.event.pull_request.head.sha || github.sha }}
          fetch-depth: 2

      - name: Claude Code Security Review
        uses: anthropics/claude-code-security-review@main
        with:
          claude-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
          comment-pr: true
          # Optional:
          # exclude-directories: "docs,examples"
          # claudecode-timeout: "20"
          # claude-model: "sonnet"
```

<h2 id="issue-triage-suggest-labels--severity">Issue Triage (suggest labels & severity)</h2>

> **When an issue opens, Claude proposes labels/severity and posts a tidy triage comment. You can enable **auto‑apply labels** by flipping a single flag**

**File:** `.github/workflows/claude-issue-triage.yml`

```yaml
name: Claude Issue Triage
on:
  issues:
    types: [opened, edited, reopened]

permissions:
  contents: read
  issues: write

jobs:
  triage:
    runs-on: ubuntu-latest
    env:
      CLAUDE_MODEL: claude-sonnet-5
    steps:
      - name: Collect context & similar issues
        id: gather
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          ISSUE_TITLE: ${{ github.event.issue.title }}
          ISSUE_BODY: ${{ github.event.issue.body }}
        run: |
          # naive similar search by title words
          Q=$(printf '%s' "$ISSUE_TITLE" | tr -dc '[:alnum:] ' | awk '{print $1" "$2" "$3" "$4}')
          gh api -X GET search/issues -f q="repo:${{ github.repository }} is:issue $Q" -f per_page=5 > similars.json
          printf '%s' "$ISSUE_TITLE" > title.txt
          printf '%s' "$ISSUE_BODY" > body.txt

      - name: Ask Claude for triage JSON
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          jq -n \
            --arg model "$CLAUDE_MODEL" \
            --arg title "$(cat title.txt)" \
            --arg body "$(cat body.txt)" \
            --arg sims "$(cat similars.json)" \
            '{
              model: $model,
              max_tokens: 1500,
              system: "You are a pragmatic triage engineer. Be specific and cautious with duplicates.",
              messages: [{
                role: "user",
                content: [{
                  type: "text",
                  text: ("Given the issue and similar candidates, produce STRICT JSON with keys: labels (array of strings), severity (one of: low, medium, high, critical), duplicate_url (string or empty), comment_markdown (brief string). Do not include extra keys.\n\nIssue title:\n" + $title + "\n\nIssue body:\n" + $body + "\n\nSimilar issues (JSON):\n" + $sims)
                }]
              }]
            }' > payload.final.json

          curl -s https://api.anthropic.com/v1/messages \
            -H "x-api-key: $ANTHROPIC_API_KEY" \
            -H "anthropic-version: 2023-06-01" \
            -H "content-type: application/json" \
            -d @payload.final.json > out.json
          jq -r '.content[0].text' out.json > triage.json || echo '{}' > triage.json
          # Validate JSON to avoid posting garbage
          jq -e . triage.json >/dev/null 2>&1 || echo '{"labels":[],"severity":"low","duplicate_url":"","comment_markdown":"(triage failed to parse)"}' > triage.json

      - name: Apply labels (optional)
        if: ${{ false }} # flip to `true` to auto-apply labels
        uses: actions/github-script@v7
        with:
          script: |
            const triage = JSON.parse(require('fs').readFileSync('triage.json','utf8'))
            if (triage.labels?.length) {
              await github.rest.issues.addLabels({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: context.issue.number,
                labels: triage.labels
              })
            }

      - name: Post triage comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs')
            const triage = JSON.parse(fs.readFileSync('triage.json','utf8'))
            const md = `### 🤖 Triage
            - **Suggested labels:** ${triage.labels?.join(', ') || '—'}
            - **Severity:** ${triage.severity || '—'}
            ${triage.duplicate_url ? `- **Possible duplicate:** ${triage.duplicate_url}\n` : ''}
            ---
            ${triage.comment_markdown || ''}`
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body: md
            })
```

> [!NOTE]
> The triage workflow posts a **suggestion comment** by default. Flip the `Apply labels` step to `true` if you want labels applied automatically.
>
> ### Configuration & Customization
>
> - **Model selection**: the direct Messages API workflow requires a Claude API model ID such as `claude-sonnet-5`; bare Claude Code family aliases such as `sonnet` and `opus` are not API IDs.
> - **Secrets**: `ANTHROPIC_API_KEY` is required. The built‑in `GITHUB_TOKEN` is sufficient for posting comments and applying labels.
> - **Permissions**: each workflow declares the privileges it needs (`pull-requests: write` and/or `issues: write`, plus `id-token: write` for the Claude Code Action's GitHub App authentication). Adjust only if your org requires stricter policies.
> - **Scope**: use `paths:` filters on triggers to limit when workflows run (e.g., only for `/src` or exclude `/docs`).
>
> ### Troubleshooting
>
> Check the **Actions logs** first—most issues are missing secrets/permissions or a mis‑indented YAML block.
>
> - **No comments appear on PRs**: Verify the Claude GitHub App is installed and the workflow has `pull-requests: write` permission.
> - **403 when applying labels**: Ensure the job or step has `issues: write`. The default `GITHUB_TOKEN` must have access to this repo.
> - **Anthropic API errors**: Confirm `ANTHROPIC_API_KEY` is set at repository (or org) level and not expired.
> - **“YAML not well‑formed”**: Validate spacing—two spaces per nesting level; no tabs.

---

<h1 id="help--troubleshooting">Help & Troubleshooting</h1>

> [!TIP]
> **Q: `claude` is installed but the command is not found. What should I check?**
>
> > **A:** Open a new terminal, locate every installation with `Get-Command claude -All` (PowerShell) or `command -v -a claude` (Bash/Zsh), and ensure the native launcher directory is on `PATH`. See [`Windows`](#windowspath) or [`macOS/Linux`](#linuxpath).
>
> **Q:** **Which Node.js version do I need?**
>
> > **A:** Native, Homebrew, WinGet, apt, dnf, and apk installations do not need Node.js. The npm installation requires **Node.js 22+** as of Claude Code v2.1.198.
>
> **Q: Where do I see diagnostics and logs?**
>
> > **A:** Run `claude doctor` for a read-only health report, `/doctor` inside a session for a checkup that can offer fixes, or launch with `claude --debug-file <path>` to capture diagnostics.
>
> **Q: Do I need to reboot after editing PATH?**
>
> > **A: No reboot required, but you <mark>must</mark> open a <mark>new</mark> terminal window.**

<table><td>

<h2 id="debug-quick-commands">Debug Quick Commands</h2>

_Check the output of `claude doctor` for log locations and environment checks._

> [!Note]
>
> ```bash
> claude                  # Open Claude UI (if on PATH)
> claude --version        # Show the installed CLI version
> claude update           # Native installer: check for and install an update
>
> claude doctor           # Read-only install and settings diagnostics
> /doctor                 # Full checkup from an interactive session
>
> claude --debug          # Launch with diagnostic logging
> claude --debug-file ./claude-debug.log
>
> Get-Command claude -All # Windows PowerShell: find conflicting installs
> where.exe claude        # Windows CMD/PowerShell
> command -v -a claude    # macOS/Linux (bash/zsh)
> ```

</td></table>

<table><td>

<h2 id="linuxpath">Path Temp Fix</h2>

**The native launcher normally lives in `.local/bin`. Add that directory for the current shell, then reinstall if the launcher is absent.**

> [!Note]
>
> #### Windows (CMD):
>
> ```bash
> set PATH=%USERPROFILE%\.local\bin;%PATH%
> where.exe claude
> claude --version
> ```
>
> #### Windows (PowerShell):
>
> ```powershell
> $env:Path = "$env:USERPROFILE\.local\bin;$env:Path"
> Get-Command claude -All
> claude --version
> ```
>
> #### Linux/MacOS (bash/zsh)
>
> ```bash
> export PATH="$HOME/.local/bin:$PATH"
> command -v -a claude
> claude doctor
> ```

For an npm installation only, the launcher is under the global npm prefix. Prefer migrating with `claude install stable`; otherwise inspect the prefix with `npm prefix -g` and add its executable directory to `PATH`.

</td></table>

<table><td>

<h2 id="windowspath">Windows Path Perm Fix</h2>

**Replace `<you>` with your own Windows username (without the angle brackets)**

- **Start → type: <kbd>Environment Variables</kbd>**
- **Open <kbd>Edit the system environment variables</kbd> → <kbd>Environment Variables</kbd>**
- **Under <kbd>User variables for</kbd> `<you>`, select `Path` → `Edit` → `New`, then add:**

```path
C:\Users\<you>\.local\bin
```

> **npm installation only:**

```path
C:\Users\<you>\AppData\Roaming\npm
```

- **Remove duplicates, any entry containing `%PATH%`, and stray quotes (`"`). Click `OK`.**
- **Open a `new` Command Prompt/PowerShell and verify:**

```C
where.exe claude
claude doctor
```

> [!Tip]
>
> ### Optional Run directly (when PATH is broken)
>
> > **Windows (PowerShell/cmd)**
>
> ```powershell
> & "$env:USERPROFILE\.local\bin\claude.exe" --version
> & "$env:USERPROFILE\.local\bin\claude.exe" doctor
> ```
>
> > **npm installation:**
>
> ```powershell
> & "$env:APPDATA\npm\claude.cmd" doctor
> ```

</td></table>

<table><td>

<h3 id="installation--nodejs-issues">Installation / Node.js Issues</h3>

**Native repair (recommended; no Node.js required)**

```bash
claude doctor
claude install stable
```

**Package-manager installs**

```bash
brew upgrade claude-code          # or claude-code@latest
winget upgrade Anthropic.ClaudeCode
```

**npm install (Node.js 22+)**

```bash
node --version
npm install -g @anthropic-ai/claude-code@latest
```

Do not use `sudo npm install -g`. If two installations conflict, locate both before removing the one you no longer want.

</td></table>

<table><td>

<h3 id="authentication-issues">Authentication Issues</h3>
> Subscription users should authenticate through the browser flow. API keys and third-party provider credentials are separate deployment paths.

```bash
claude auth status
claude auth login
claude auth login --console  # Console/API billing instead of subscription login
```

If a subscription login unexpectedly behaves like API billing, check whether `ANTHROPIC_API_KEY`, `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_BASE_URL`, or an `apiKeyHelper` is selecting provider authentication. Do not print secret values into logs. Persistent API/provider auth also disables subscription-only features such as Remote Control, cloud sessions, claude.ai connectors, and notification preferences.

Use `claude --debug-file ./claude-auth-debug.log` for a reproducible error report, then remove credentials from that log before sharing it.

</td></table>

<table><td>

<h3 id="permission--allowed-tools-issues">Permission / Allowed Tools Issues</h3>

**Inspect permissions**

```bash
/permissions
```

The UI shows each allow/ask/deny rule and its source. To reset a scope, edit the originating `settings.json` and remove the rules or set empty arrays:

```json
{
  "permissions": {
    "allow": [],
    "ask": [],
    "deny": []
  }
}
```

</td></table>

<table><td>

<h3 id="mcp-model-context-protocol-issues">MCP (Model Context Protocol) Issues</h3>

> **Debug MCP servers**

```bash
claude --debug='mcp'
claude --debug-file ./claude-mcp-debug.log
```

> **List & remove MCP servers**

```bash
claude mcp list
claude mcp get <server-name>
claude mcp login <server-name>
claude mcp remove <server-name>
```

</td></table>

<table><td>

<h2 id="full-clean-reinstall-windows--powershell">Repair or Reinstall (Windows / PowerShell)</h2>

Start with a non-destructive repair. This preserves settings, MCP configuration, credentials, sessions, and project history:

```powershell
claude doctor
claude install --force stable
Get-Command claude -All
claude --version
```

For WinGet, use `winget upgrade Anthropic.ClaudeCode` or reinstall that package. For npm, use Node.js 22+ and `npm install -g @anthropic-ai/claude-code@latest`.

> [!Caution]
> Do not delete `~/.claude`, `~/.claude.json`, project `.claude/`, or `.mcp.json` as a routine installation fix. Those paths contain settings, credentials, MCP configuration, trust decisions, session history, and data shared by the CLI, IDE integrations, and Desktop. Follow the [official uninstall instructions](https://code.claude.com/docs/en/setup#uninstall-claude-code) and back up anything you need before intentionally removing user data.

</td></table>

<table><td>

<h2 id="one-shot-health-check-copypaste">One‑Shot Health Check (copy/paste)</h2>

**Windows (PowerShell):**

```powershell
Get-Command claude -All
claude --version
claude doctor
claude auth status
```

**macOS/Linux (bash/zsh):**

```bash
command -v -a claude
claude --version
claude doctor
claude auth status
```

</td></table>

---

<table><td>

<h2 id="appendix-useful-paths">Appendix: Useful Paths</h2>

- **Native launcher:** Windows `%USERPROFILE%\.local\bin\claude.exe`; macOS/Linux/WSL `~/.local/bin/claude`
- **Native versions:** `%USERPROFILE%\.local\share\claude\` or `~/.local/share/claude/versions/`
- **User settings:** `~/.claude/settings.json`
- **Claude state, sessions, credentials, and caches:** `~/.claude/`
- **Global state and user/local MCP data:** `~/.claude.json` (not the user settings file)
- **Project settings:** `.claude/settings.json` and private `.claude/settings.local.json`
- **Shared project MCP:** `.mcp.json`
- **npm bin:** Windows `%APPDATA%\npm`; macOS/Linux `$(npm prefix -g)/bin`

</td></table>

<h2 id="best-practices">Best Practices</h2>

> Curated guidance for safe, fast, and correct use of the Claude Code CLI and interactive REPL.

<h2 id="effective-prompting">Effective Prompting</h2>

```bash
# Good: Specific and detailed
claude "Review UserAuth.js for security vulnerabilities, focusing on JWT handling"

# Bad: Vague
claude "check my code"
```

Tip: `claude "query"` starts the interactive REPL pre-seeded with your prompt; `claude -p "query"` runs **print mode** (non‑interactive) and exits.

---

<h2 id="security-best-practices-main">Security Best Practices</h2>

1. **Start with minimal permissions**
   - Prefer explicit allows and denies, either on the CLI or in settings files.

   ```bash
   # Allow only what you need for this run
   claude --allowed-tools "Read" "Edit" "Bash(npm run test *)"
   ```

   Or commit a project policy at `.claude/settings.json`:

   ```json
   {
     "permissions": {
       "allow": ["Read", "Edit", "Bash(npm run test *)"],
       "deny": [
         "WebFetch",
         "Bash(curl *)",
         "Read(./.env)",
         "Read(./secrets/**)"
       ]
     }
   }
   ```

2. **Handle secrets correctly**
   - Use a secret manager to inject environment variables for Agent SDK/automation flows; do not put literal keys in commands, settings, shell history, or repositories.
   - In the interactive REPL, prefer `/login` instead of configuring an API key unless API/provider billing is intentional.
   - Deny access to sensitive files in settings (replaces older `ignorePatterns`):

   ```json
   {
     "permissions": {
       "deny": ["Read(./.env)", "Read(./.env.*)", "Read(./secrets/**)"]
     }
   }
   ```

3. **Audit permissions regularly**

   ```bash
   /permissions
   ```

   The browser shows merged allow/ask/deny rules and their user, project, local, plugin, or managed source.

4. **Avoid bypass modes in production**
   - Do **not** use `--dangerously-skip-permissions` outside isolated/dev sandboxes.
   - For unattended runs, combine narrow `--allowed-tools` with `--disallowed-tools`, project policy, and the sandbox where supported.

---

<h2 id="performance-tips">Performance Tips</h2>

1. **Use machine‑readable output in automations**

   ```bash
   claude -p "summarize this error log" --output-format json
   # valid: text | json | stream-json
   ```

2. **Bound non‑interactive work**

   ```bash
   claude -p "run type checks and summarize failures" --max-turns 3
   # optionally also bound thinking:
   export MAX_THINKING_TOKENS=20000
   ```

3. **Keep sessions tidy**

   In `~/.claude/settings.json`:

   ```json
   {
     "cleanupPeriodDays": 20
   }
   ```

4. **Limit context scope**

   ```bash
   # Grant access only to relevant paths to reduce scanning/noise
   claude --add-dir ./services/api ./packages/ui
   ```

5. **Pick the right model**
  - CLI aliases: `--model sonnet` or `--model opus` (family alias selected by Claude Code).
  - Use Opus 5 plus `/effort xhigh` or `max` for the hardest planning and review tasks when your account/provider supports it.
  - For reproducibility in settings, pin a full model ID only when automatic family upgrades are undesirable.

6. **Use rendering and accessibility controls deliberately**
  - Use `--ax-screen-reader` for flat screen-reader-friendly output and `/config` for theme, motion, and terminal behavior instead of copying undocumented environment toggles.

7. **Inspect usage by source**

  ```bash
  /usage
  ```

  Use `/usage` to break down plan usage by categories such as skills, subagents, plugins, and MCP servers.

---

<h2 id="monitoring--alerting">Monitoring & Alerting</h2>

**1) Health checks**
Use the built‑in **doctor** command to verify installation and environment.

```bash
# Every 15 minutes
*/15 * * * * "$HOME/.local/bin/claude" doctor >/dev/null 2>&1 || \
mail -s "Claude Code doctor failed" admin@company.com </dev/null
```

**2) Log analysis batch job**

```bash
# Daily analysis with non-interactive JSON output (print mode)
0 6 * * * tail -1000 /var/log/app.log | \
claude -p "Analyze errors, regressions, and suspect patterns; output JSON." \
--output-format json > /tmp/daily-analysis.json
```

**3) Telemetry (optional)**
Claude Code emits OpenTelemetry metrics/events. Set exporters in settings/env (e.g., OTLP) and ship to your observability stack (Datadog, Honeycomb, Prometheus/Grafana, etc.).

---

<h2 id="collaboration-best-practices">Collaboration Best Practices</h2>

<h3 id="team-workflows">Team Workflows</h3>

**1) Share versioned configuration**

`.claude/settings.json` (checked into the repository):

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Edit",
      "Bash(npm run lint)",
      "Bash(npm run test *)"
    ],
    "deny": [
      "WebFetch",
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  },
  "model": "sonnet"
}
```

Use a family alias for automatic upgrades, or pin a full provider model ID only when reproducibility is more important.

**2) Documentation automation**

```bash
# Update docs with explicit tasks
claude "Update README.md to reflect the latest API endpoints and examples."
claude "Generate TypeScript types from schema.prisma and write to /types."
```

**3) Code review standards**

```bash
# Review a local diff with constrained tools
git fetch origin main
git diff origin/main...HEAD > /tmp/diff.patch
claude --allowed-tools "Read" "Grep" "Bash(git *)" \
  "Review /tmp/diff.patch using team standards:
   - Security best practices
   - Performance considerations
   - Code style compliance
   - Test coverage adequacy"
```

<h3 id="knowledge-sharing">Knowledge Sharing</h3>

**1) Project runbooks**

```bash
claude "Create a deployment runbook for this app: steps, checks, rollback."
claude "Document onboarding for new developers: setup, commands, conventions."
```

**2) Architecture docs**

```bash
claude "Update architecture docs to reflect new microservices."
claude "Create sequence diagrams for the authentication flow."
```

> Tip: Keep durable context in **CLAUDE.md** at the project root. In the REPL, use `/memory` to manage it and `@path` to import file content into prompts.

---

<h2 id="common-pitfalls-to-avoid">Common Pitfalls to Avoid</h2>

<h3 id="security-pitfalls">Security</h3>

**❌ Don’t**

- Use `--dangerously-skip-permissions` on production systems
- Hard‑code secrets in commands/config
- Grant overly broad permissions (e.g., `Bash(*)`)
- Run with elevated privileges unnecessarily

**✅ Do**

- Store secrets in env vars and credential helpers
- Start from minimal `permissions.allow` and expand gradually
- Audit with `/permissions` and review the originating settings files
- Isolate risky operations in containers/VMs

<h3 id="performance-pitfalls">Performance</h3>

**❌ Don’t**

- Load an entire monorepo when you only need a package
- Max out thinking/turn budgets for simple tasks
- Ignore session cleanup

**✅ Do**

- Use `--add-dir` for focused context
- Right‑size with `--max-turns` and `MAX_THINKING_TOKENS`
- Set `cleanupPeriodDays` to prune old sessions

<h3 id="workflow-pitfalls">Workflow</h3>

**❌ Don’t**

- Skip project context (`CLAUDE.md`)
- Use vague prompts
- Ignore errors/logs
- Automate without testing

**✅ Do**

- Maintain and update `CLAUDE.md`
- Be specific and goal‑oriented in prompts
- Monitor via logs/OTel as appropriate
- Test automation in safe environments first

---

<h1 id="third-party-integrations">Third-Party Integrations</h1>

<h2 id="provider-setup-examples">Provider Setup Examples</h2>

Use provider setup examples when connecting Claude Code to Anthropic-compatible gateways or third-party model providers. The pattern is usually:

1. Install Claude Code.
2. Set the provider base URL and authentication token.
3. Select the provider model names Claude Code should use.
4. Launch `claude` and verify the session starts with the expected provider.

<h3 id="deepseek-integration">DeepSeek Integration</h3>

1. ###### Install Claude Code with the native installer

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

2. ###### Configure the current DeepSeek Anthropic-compatible endpoint

```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN="$DEEPSEEK_API_KEY"
export ANTHROPIC_MODEL='deepseek-v4-pro[1m]'
export ANTHROPIC_DEFAULT_OPUS_MODEL='deepseek-v4-pro[1m]'
export ANTHROPIC_DEFAULT_SONNET_MODEL='deepseek-v4-pro[1m]'
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-v4-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
```

3. ###### Launch `claude`

The provider credentials and base URL select DeepSeek billing and disable Claude.ai subscription-only features for that process. `deepseek-chat` and `deepseek-reasoner` were retired in July 2026; use the current names above and re-check the [official DeepSeek Claude Code integration guide](https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code/) before pinning them.
