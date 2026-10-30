<div align="center">

<h2 id="claude-code-community-guide">Claude Code Guide</h2>

_For reference and contributions, visit the [official Claude Code documentation](https://code.claude.com/docs/en/overview)_

_Commands and provider model mappings change quickly; the linked official references remain authoritative._

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
| Commands & Usage                      | ✅   | 70+ [Skills](https://github.com/zebbern/claude-code-guide/tree/main/skills) & [Agent pack](https://github.com/zebbern/claude-code-guide/tree/main/agents)               |
| Interface & Input                     | ✅   | Goal Creator [SKILL.md](https://github.com/zebbern/skills)                          |
| Advanced Features                     | ✅   | 1,900+ Agent [Skills](https://github.com/zebbern/antigravity-awesome-skills)                              |
| Automation & Integration              | ✅   | No cost ai [resources](https://github.com/zebbern/no-cost-ai)                                           |
| Help & Troubleshooting                | ✅   | 240+ Mermaid [templates](https://github.com/zebbern/mermaid-templates)                                  |
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
| [Commands](#commands--usage) | [Slash Commands](#claude-commands) | [Command Line Flags](#command-line-flags), [CLI Quick Reference](#cheat-sheet) |
| [Interface](#interface--input) | [Keyboard Shortcuts](#keyboard-shortcuts) | [Vim Mode](#vim-mode) |
| [Advanced Features](#advanced-features) | [Plan Mode](#plan-mode), [Auto Mode](#auto-mode), [MCP](#mcp-integration) | [Sub Agents](#sub-agents), [Skills](#skills), [Hooks](#hooks-system) |
| [Security](#security--permissions) | [Security & Permissions](#security--permissions) | [Dangerous Mode](#dangerous-mode), [Best Practices](#security-best-practices-main) |
| [Automation](#automation--integration) | [Automation & Scripting](#automation--scripting-with-claude-code) | [PR Review](#auto-pr-review-inline-comments), [Issue Triage](#issue-triage-suggest-labels--severity) |
| [Help](#help--troubleshooting) | [Troubleshooting](#help--troubleshooting) | [Best Practices](#best-practices), [Monitoring](#monitoring--alerting) |
| [Third-Party Integrations](#third-party-integrations) | [DeepSeek Integration](#deepseek-integration) | [Provider Setup Examples](#provider-setup-examples), [Cloud Providers and Gateways](#cloud-providers-and-gateways) |

<details>
<summary>Full content map</summary>

- **[Getting Started](#getting-started)**
  - [Quick Start](#quick-start)
  - [System Requirements](#system-requirements)
  - [Initial Setup](#initial-setup)

- **[Configuration & Environment](#configuration--environment)**
  - [Environment Variables](#environment-variables)
  - [Global Config Options](#global-config-options)
  - [Configuration Files](#configuration-files)

- **[Commands & Usage](#commands--usage)**
  - [Slash Command Reference](#claude-commands)
  - [Command Line Flags](#command-line-flags)
  - [CLI Quick Reference](#cheat-sheet)

- **[Interface & Input](#interface--input)**
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [Vim Mode](#vim-mode)
  - [Command History](#command-history)

- **[Advanced Features](#advanced-features)**
  - [Thinking Mode](#thinking-keywords)
  - [Effort Levels](#effort-levels)
  - [Advisor Tool](#advisor-tool)
  - [Fast Mode](#fast-mode)
  - [Auto Mode](#auto-mode)
  - [Plan Mode](#plan-mode)
  - [Background Tasks](#background-tasks)
  - [Workflows & Scheduling](#workflows--scheduling)
  - [Cloud Sessions](#remote-sessions)
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
  - [Artifacts](#artifacts)
  - [MCP Integration](#mcp-integration)
  - [Hooks System](#hooks-system)

- **[Security & Permissions](#security--permissions)**
  - [Dangerous Mode](#dangerous-mode)
  - [Security Best Practices](#security-best-practices-main)

- **[Automation & Integration](#automation--integration)**
  - [Automation & Scripting](#automation--scripting-with-claude-code)
  - [Auto PR Review](#auto-pr-review-inline-comments)
  - [Security Review on Every PR](#security-review-on-every-pr)
  - [Issue Triage](#issue-triage-suggest-labels--severity)

- **[Help & Troubleshooting](#help--troubleshooting)**
  - [Debug Quick Commands](#debug-quick-commands)
  - [Path Temp Fix](#linuxpath)
  - [Windows Path Perm Fix](#windowspath)
  - [Installation Issues](#installation--nodejs-issues)
  - [Authentication Issues](#authentication-issues)
  - [Permission Issues](#permission--allowed-tools-issues)
  - [MCP Issues](#mcp-model-context-protocol-issues)
  - [Repair or Reinstall](#full-clean-reinstall-windows--powershell)
  - [One-Shot Health Check](#one-shot-health-check-copypaste)
  - [Useful Paths](#appendix-useful-paths)
  - [Best Practices](#best-practices)
  - [Effective Prompting](#effective-prompting)
  - [Performance Tips](#performance-tips)
  - [Monitoring & Alerting](#monitoring--alerting)
  - [Collaboration Best Practices](#collaboration-best-practices)
  - [Common Pitfalls to Avoid](#common-pitfalls-to-avoid)

- **[Third-Party Integrations](#third-party-integrations)**
  - [Provider Setup Examples](#provider-setup-examples)
  - [Cloud Providers and Gateways](#cloud-providers-and-gateways)
  - [DeepSeek Integration](#deepseek-integration)

</details>

---

<h1 id="getting-started">Getting Started</h1>

**Enable completion alerts:** Ghostty, Kitty, and iTerm2 (once its alert settings are on) show desktop notifications by default. Elsewhere, choose **Terminal bell** under `/config` → **Local notifications**, or set `"preferredNotifChannel": "terminal_bell"` in `~/.claude/settings.json`.

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
brew install --cask claude-code          # stable channel; claude-code@latest tracks latest
winget install Anthropic.ClaudeCode
```

npm distribution (supported; Node.js 22+ is required to install):

```bash
npm install -g @anthropic-ai/claude-code
```

> [!Warning]
> npm 12 skips Claude Code's postinstall step by default, leaving a placeholder `claude` that prints `Error: claude native binary not installed.` (on Windows, the shell can't run it at all). Use the native installer, or allow the step as shown in [Installation / Node.js Issues](#installation--nodejs-issues). The binary ships as an optional dependency, so don't use `--omit=optional` or `optional=false` in `.npmrc`.

Verify the installation, then start Claude Code:

```bash
claude --version
claude doctor
claude
```

Native installs update themselves. Homebrew, WinGet, and the signed `apt`, `dnf`, and `apk` repositories follow their package manager's update flow; set `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE=1` to let Claude Code run the Homebrew or WinGet upgrade itself. See the [official setup guide](https://code.claude.com/docs/en/setup) for channels, version pinning, Linux repository setup, and signature verification. For an npm install, upgrade with `npm install -g @anthropic-ai/claude-code@latest`; do not use `sudo npm install -g`.

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

> - Shell: Bash, Zsh, PowerShell, or CMD

> - Software: Git is optional on native Windows; without Git for Windows, Claude uses the PowerShell tool instead of Bash, and the Monitor tool is unavailable. Node.js 22+ is required only to install through npm; the installed CLI is a native binary.

> - Alpine/musl: run `apk add bash curl libgcc libstdc++ ripgrep` (ripgrep is in the community repository), then set `"USE_BUILTIN_RIPGREP": "0"` under `env` in `settings.json`.

> - Internet: Connection for API calls from an [Anthropic supported region](https://www.anthropic.com/legal/supported-regions)

---

<h2 id="initial-setup">Initial Setup</h2>

Claude Code requires a Pro, Max, Team, Enterprise, or Console account, or access through Amazon Bedrock, Google Cloud's Agent Platform (Vertex AI), or Microsoft Foundry; the free Claude.ai plan does not include Claude Code. The normal first-party flow is browser sign-in:

```bash
claude auth login             # Claude subscription
claude auth login --console   # Anthropic Console/API billing
claude auth status            # Verify the active login
```

At the `/login` prompt, Console users can pick **Sign in with your Console account** to skip creating an API key; Bedrock and Agent Platform users can pick **3rd-party platform** (or run `/setup-bedrock` / `/setup-vertex`) for a setup wizard.

For API automation or a provider/gateway deployment, inject credentials from an OS key store or secret manager instead of committing them:

```bash
export ANTHROPIC_API_KEY="$SECRET_FROM_YOUR_STORE" # bash/zsh: current process only
```

```powershell
$env:ANTHROPIC_API_KEY = $secretFromYourStore # PowerShell: current process only
```

To run CI or scripts on a Pro, Max, Team, or Enterprise subscription, run `claude setup-token` once and store the one-year token it prints (it is not saved) as `CLAUDE_CODE_OAUTH_TOKEN`. It only makes model requests (no Remote Control or claude.ai connectors), and `--bare` ignores it; see [Authentication CLI](#claude-auth).

> [!Important]
> `ANTHROPIC_AUTH_TOKEN`, an approved `ANTHROPIC_API_KEY`, `apiKeyHelper`, and `CLAUDE_CODE_OAUTH_TOKEN` take precedence over your `/login` sign-in. Interactive sessions ask once before using `ANTHROPIC_API_KEY` (change the answer with **Use custom API key** in `/config`); `-p` always uses it. While an API key, auth token, or credential helper is in use, subscription-only features such as Remote Control, `/schedule`, claude.ai MCP connectors, and notification preferences remain unavailable. [Authentication Issues](#authentication-issues) lists the full precedence order; run `/status` to see which credential is active. Do not commit credentials; use your platform's secret storage.

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
export ANTHROPIC_MODEL="sonnet" # Wins over the model setting and a saved /model choice
# export ANTHROPIC_DEFAULT_MODEL="sonnet" # Alternative: starting model only; any model setting or saved /model choice wins
export ANTHROPIC_DEFAULT_FABLE_MODEL="<provider-fable-model-id>"
export ANTHROPIC_DEFAULT_OPUS_MODEL="<provider-opus-model-id>"
export ANTHROPIC_DEFAULT_SONNET_MODEL="<provider-sonnet-model-id>"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="<provider-haiku-model-id>"

# Third-party provider selection (enable one deployment path; only Bedrock and Mantle combine)
# export CLAUDE_CODE_USE_BEDROCK=1
# export ANTHROPIC_BEDROCK_REGION_PREFIX=eu # Prefer eu/us/apac/jp/au/global cross-region inference on Bedrock
# export CLAUDE_CODE_USE_MANTLE=1 # Amazon Bedrock Mantle endpoint; may be combined with CLAUDE_CODE_USE_BEDROCK
# export CLAUDE_CODE_USE_ANTHROPIC_AWS=1 # Claude Platform on AWS; also set ANTHROPIC_AWS_WORKSPACE_ID and AWS_REGION
# export CLAUDE_CODE_USE_VERTEX=1 # Google Cloud's Agent Platform (formerly Vertex AI)
# export CLAUDE_CODE_USE_FOUNDRY=1
# export CLAUDE_CODE_MODEL_CATALOG=off # Cloud providers: don't fetch signed model settings from downloads.claude.ai
# export CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT=0 # Full system prompt on any model, including custom deployment names/ARNs

# Timeouts, retries, and output budgets, in milliseconds/tokens
export API_TIMEOUT_MS=1200000
export BASH_DEFAULT_TIMEOUT_MS=120000
export BASH_MAX_TIMEOUT_MS=600000
export MCP_TIMEOUT=30000
export MCP_TOOL_TIMEOUT=600000 # Overall MCP tool limit (default ~28h); above 60000 it also raises remote servers' 60 s per-request limit
export MAX_MCP_OUTPUT_TOKENS=25000
export MAX_THINKING_TOKENS=0 # 0 disables thinking on the Anthropic API, except Opus/Sonnet/Haiku 5.5 and Fable; adaptive models ignore a positive budget (use effort)
# export CLAUDE_CODE_RETRY_WATCHDOG=1 # Unattended runs (CI, workers): keep retrying 429/529 capacity errors
# export CLAUDE_CODE_RETRY_WATCHDOG_MAX_WAIT_MS=1800000 # Cap each request's 429/529 wait under the watchdog

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
export NODE_EXTRA_CA_CERTS="/path/to/corporate-ca.pem" # Only if a TLS-inspecting proxy's CA isn't in the OS trust store (or npm installs on Node < 22.15)

# Privacy/network reduction: these are presence-based; unset them to turn them off
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
export DISABLE_TELEMETRY=1
export DISABLE_ERROR_REPORTING=1
```

The block is a catalog, not a recommended profile—do not enable mutually exclusive provider variables together. Boolean variables usually accept `1`/`true` and `0`/`false`, but the three presence-based variables shown at the end treat any non-empty value, including `0`, as enabled. `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` and `DISABLE_TELEMETRY` also stop [feature-flag fetching](https://code.claude.com/docs/en/env-vars#features-that-need-feature-flag-fetching), which disables `/import`, the advisor tool, claude.ai skill and plugin sync, and idle compaction; the first also turns off Remote Control, auto-updates, and `/feedback`.

An `env` value in `settings.json` replaces the shell's value; set it to `""` to cancel a stale shell export (removing the key takes effect at the next launch). Most values from `.claude/settings.json` and `.claude/settings.local.json` apply only after you trust the workspace, and those files cannot set variables a repository shouldn't control, such as `CLAUDE_CONFIG_DIR`, `TMPDIR`, OpenTelemetry exporter variables, or `CLAUDE_AX_SCREEN_READER`; put those in your shell, user, or managed settings (`claude --debug` logs any it drops). Sessions launched by the Claude Desktop app keep the app's launch value for variables it sets.

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

Settings-file precedence is **managed policy → `--settings` → local → project → user**. Other flags and environment variables are not levels in this stack; each key decides whether they win (`--model` and `ANTHROPIC_MODEL` beat any `model` setting, even a managed one, which is only a starting default). List keys such as `permissions.allow` merge across files, so read [settings precedence](https://code.claude.com/docs/en/settings#settings-precedence) before relying on last-writer-wins behavior; [All settings](https://code.claude.com/docs/en/settings-reference) lists every key. With no permission mode configured, interactive sessions start in auto mode; `permissions.defaultMode` overrides that, but `auto` and `bypassPermissions` apply only from user or managed settings (or `--settings` / `--permission-mode`). `~/.claude.json` stores global state, session/trust data, and local/user MCP configuration; it is not the user settings file.

To hide all commit and PR attribution, set `"attribution": false`. Versions before v2.1.281 skip a settings file that contains it, so in files they also read use `"attribution": { "commit": "", "pr": "", "sessionUrl": false }`.

<h2 id="configuration-files">Configuration Files</h2>

Claude Code combines human-authored instructions from several locations:

| Memory Type                | Location                                                                                                                                                | Purpose                                             | Use Case Examples                                                    | Shared With                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------- |
| **Enterprise policy**      | macOS: `/Library/Application Support/ClaudeCode/CLAUDE.md`<br />Linux: `/etc/claude-code/CLAUDE.md`<br />Windows: `C:\Program Files\ClaudeCode\CLAUDE.md` | Organization-wide instructions managed by IT/DevOps | Company coding standards, security policies, compliance requirements | All users in organization       |
| **Project memory**         | `./CLAUDE.md` or `./.claude/CLAUDE.md`                                                                                                                  | Team-shared instructions for the project            | Project architecture, coding standards, common workflows             | Team members via source control |
| **User memory**            | `~/.claude/CLAUDE.md`                                                                                                                                   | Personal preferences for all projects               | Code styling preferences, personal tooling shortcuts                 | Just you (all projects)         |
| **Project memory (local)** | `./CLAUDE.local.md`                                                                                                                                     | Personal project preferences (add to `.gitignore`)  | Your sandbox URLs, preferred test data, personal overrides           | Just you (current project)      |
| **Project rules**          | `.claude/rules/**/*.md`                                                                                                                                 | Modular project rules (loaded alongside CLAUDE.md)  | Linting rules, API conventions, path-scoped standards                 | Team members via source control |
| **User rules**             | `~/.claude/rules/**/*.md`                                                                                                                               | Personal rules, loaded before project rules         | Preferred tools, personal workflow conventions                       | Just you (all projects)         |

> Instruction files are concatenated rather than overriding one another. User and ancestor-project files load at startup; `CLAUDE.md` files in subdirectories load lazily when Claude works there. In monorepos, skip other teams' or unrelated ancestor files with the `claudeMdExcludes` setting (glob patterns; a managed `CLAUDE.md` can't be excluded). `CLAUDE.md` is context, not an enforcement boundary. Run `/doctor prompt-audit` for a report of outdated, broken, or conflicting instructions; it edits nothing until you approve.

Use `@path` to import another file. When no `CLAUDE.md`, `.claude/CLAUDE.md`, or `CLAUDE.local.md` exists in the working directory or above it, Claude Code reads `AGENTS.md` instead; user and managed `CLAUDE.md` files and `.claude/rules/` still load. If any of those project files exists (even just `CLAUDE.local.md`), `AGENTS.md` is skipped: import it with `@AGENTS.md`, or set **Project instructions** to `claude-md-and-agents-md` in `/config` to load both.

#### `.claude/rules/` Directory

The `.claude/rules/` directory lets you break project instructions into separate Markdown files instead of one large `CLAUDE.md`. Markdown files are discovered recursively. Add `paths` frontmatter with glob patterns when a rule should load only for matching files. This is useful for:

- **Modular organization**: Separate concerns (e.g., `api-conventions.md`, `testing-rules.md`)
- **Per-directory scoping**: `paths`-scoped rules and rules in a subdirectory's `.claude/rules/` load on demand when Claude reads, writes, or edits files they cover, adding to other rules rather than overriding them
- **Team collaboration**: Different team members can own different rule files via PR review

#### Auto-Memory

Claude can save useful working context under `~/.claude/projects/<project>/memory/`. It loads the first 200 lines or 25 KB of `MEMORY.md`; use `/memory` to inspect, edit, disable, or remove saved memories. Auto-memory is machine-local and shared across worktrees for the same repository. Turn it off for one project with `"autoMemoryEnabled": false` in that project's settings, or everywhere with `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`; `autoMemoryDirectory` moves where it is stored.

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
| `/agents` | Explain how to create or edit subagents; hidden from the `/` menu, and the old interactive wizard was removed in v2.1.198 |
| `/artifacts` | List artifacts you own or that are shared with you; attach one to the session, open it, or copy its link |
| `/auto-mode-setup` | Draft `autoMode.environment` entries from your project and recent sessions, then review and save them to user settings |
| `/autocompact [auto\|tokens]` | Set the auto-compact window per model (e.g. `/autocompact 200k` if your gateway stops at 200K); `auto` restores the default |
| `/background [prompt]` | Detach the current conversation as a background session (`/bg` alias) |
| `/batch <instruction>` | Decompose a large change into worktree-isolated background units (bundled skill) |
| `/branch [name]` | Switch into a new branch of the current conversation while preserving the original |
| `/btw [question]` | Ask an ephemeral side question without adding it to conversation history |
| `/cd <path>` | Move the current session to another working directory; its project settings, hooks, skills, agents, and `.mcp.json` servers (after approval) apply immediately |
| `/clear [name]` | Start a new conversation with empty context while preserving project memory |
| `/code-review [level] [--fix] [--comment] [--max-findings n\|all\|default] [target]` | Run a local background review, or use level `ultra` for cloud review; levels run from `low` through `max`. `--comment` posts to a GitHub PR or GitLab MR; a `--max-findings` choice sticks until you pass `default` |
| `/compact [instructions]` | Summarize the conversation to free context |
| `/config [key=value ...]` | Open settings or update supported keys directly (`/settings` alias) |
| `/context [all]` | Visualize what is using the context window |
| `/copy [N]` | Copy the last (or Nth-latest) response; a picker selects single code blocks, and `w` writes to a file instead (useful over SSH) |
| `/diff` | Open the interactive current/per-turn diff viewer; in fullscreen mode, toggle a panel of uncommitted changes beside the conversation |
| `/doctor [prompt-audit [path]]` | Diagnose setup, configuration, hooks, memory, plugins, and MCP; can offer fixes (`/checkup` alias). `prompt-audit` checks CLAUDE.md, skills, agents, and commands for stale paths and prompting patterns written for older models |
| `/effort [level\|auto\|status\|ultracode [on\|off]]` | Set model-dependent effort (`low` to `xhigh` save per model; `max`, or `s` in the picker, is session-only). `status` prints the level; `ultracode [on\|off]` toggles ultracode at any effort level |
| `/fast [on\|off]` | Toggle fast mode where the selected Opus model and plan support it |
| `/focus` | Toggle focus view (fullscreen rendering only): your last prompt, a one-line tool summary, and the final response |
| `/fork [prompt]` | Copy this conversation into a worktree-isolated background session and keep working here |
| `/goal [condition\|clear]` | Keep working across turns until a completion condition is met |
| `/hooks` | Inspect configured hooks in the read-only hook browser |
| `/import [codex\|gemini\|cursor] [--dry-run] [--yes]` | Bring instruction files, MCP servers, commands, subagents, and skills over from OpenAI Codex, Gemini CLI, or Cursor; `--dry-run` previews and `--yes` skips the picker |
| `/init` | Generate a starter `CLAUDE.md` for the project |
| `/keybindings` | Open `~/.claude/keybindings.json` to customize shortcuts (see [Keyboard Shortcuts](#keyboard-shortcuts)) |
| `/loop [interval] [prompt]` | Run a prompt repeatedly while the session remains open |
| `/mcp [reconnect\|enable\|disable] [server\|all]` | Inspect, authenticate, enable, disable, or reconnect MCP servers; `/mcp reconnect all` retries every server that failed or needs authentication |
| `/memory` | Manage `CLAUDE.md`, rules, and auto-memory |
| `/model [model]` | Switch model and normally save it as the default; press `s` in the picker for session-only selection |
| `/output-style [style]` | List output styles or switch to one, such as `/output-style concise` |
| `/permissions` | Manage allow, ask, and deny rules (`/allowed-tools` alias) |
| `/plan [description]` | Enter plan mode, optionally with a task |
| `/plugin [subcommand]` | Discover, install, enable, disable, and manage plugins |
| `/reload-plugins [--force]` | Apply plugin changes without restarting when safe |
| `/remote-control [name]` | Expose this local session to claude.ai/code or the Claude mobile app |
| `/resume [session]` | Resume by ID/name or open the session picker |
| `/review ...` | Alias for `/code-review` as of v2.1.223 |
| `/rewind` | Restore or summarize code and conversation from a checkpoint; Bash edits such as `sed -i` are not checkpointed unless Claude already edited that file with its file tools (`/undo` alias) |
| `/sandbox` | View and configure OS-level filesystem/network sandboxing for Bash, PowerShell, and Monitor commands on supported platforms |
| `/schedule [description]` | Create, update, list, or run cloud scheduled tasks, formerly routines (`/routines` alias) |
| `/security-review` | Review the current branch diff for security vulnerabilities |
| `/simplify` | Review changed code for reuse, quality, and efficiency improvements |
| `/skill-doctor` | Show what each skill costs in context and how often it is used, so you can turn off unused ones |
| `/skills` | List skills; press `t` to sort by token cost and `Space`/`Enter` to change a skill's visibility |
| `/status` | Show version, model, account, and connectivity on the Settings Status tab; works while Claude is responding |
| `/statusline [description]` | Configure the status line from a description, or from your shell prompt when run without arguments |
| `/subtask [prompt]` | Run the former in-session fork behavior as a subagent that reports back here |
| `/tasks` | List the current session's background shells, subagents, and tool calls |
| `/teleport [session]` | Pull a cloud session's branch and conversation into this terminal (`/tp` alias) |
| `/tui [default\|fullscreen]` | Switch the terminal renderer and relaunch with the conversation intact; with no argument, print the active renderer |
| `/usage` | Show session cost and prompt-cache hits, plan usage limits, and activity stats, with one-line fixes for warnings (`/cost`, `/stats` aliases) |
| `/usage-credits` | Configure usage credits, or on Team/Enterprise request them from your admin, when you hit a limit (formerly `/extra-usage`) |
| `/verify` | Build, run, and observe your app to confirm a change works beyond tests and type checks (bundled skill; Claude runs it only when you invoke it) |
| `/voice [hold\|tap\|off]` | Toggle voice dictation or choose its mode; needs a Claude.ai login |
| `/workflows` | Inspect dynamic workflow runs and background orchestration |

<h2 id="command-line-flags">Command Line Flags</h2>

| Flag / Command                                       | Description                                                                                                                                                  | Example                                                                                |
| :--------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| `-d, --debug`                                        | Enable debug mode (shows detailed debug output).                                                                                                             | `claude -d -p "query"`                                                                 |
| `--include-partial-messages`                         | Include partial streaming events; requires print mode and `stream-json`.                                                                                     | `claude -p --output-format stream-json --verbose --include-partial-messages "query"`   |
| `--include-hook-events`                              | Include hook lifecycle events in `stream-json` output.                                                                                                       | `claude -p --output-format stream-json --verbose --include-hook-events "query"`        |
| `--forward-subagent-text`                            | Forward subagent text/thinking with `parent_tool_use_id` in `stream-json`.                                                                                   | `claude -p --output-format stream-json --verbose --forward-subagent-text "query"`      |
| `--verbose`                                          | Override verbose mode setting from config (shows expanded logging / turn-by-turn output).                                                                    | `claude --verbose`                                                                     |
| `-p, --print`                                        | Print response and exit (useful for piping output).                                                                                                          | `claude -p "query"`                                                                    |
| `--output-format <format>`                           | Output format (only works with `--print`): `text` (default), `json` (single result), or `stream-json` (realtime streaming; requires `--verbose`).            | `claude -p "query" --output-format json`                                               |
| `--input-format <format>`                            | Input format (only works with `--print`): `text` (default) or `stream-json` (realtime streaming input).                                                      | `claude -p --verbose --output-format stream-json --input-format stream-json`           |
| `--replay-user-messages`                             | Re-emit user messages from stdin back to stdout for acknowledgment — **only works with** print mode plus `stream-json` input and output.                    | `claude -p --verbose --input-format stream-json --output-format stream-json --replay-user-messages` |
| `--allowedTools`, `--allowed-tools <tools...>`       | Comma/space-separated permission rules to allow.                                                                                                              | `claude --allowed-tools "Bash(git *)" "Edit"`                                        |
| `--disallowedTools`, `--disallowed-tools <tools...>` | Comma/space-separated permission rules to deny.                                                                                                               | `claude --disallowed-tools "Edit"`                                                     |
| `--mcp-config <configs...>`                          | Load MCP servers from JSON files or strings (space-separated).                                                                                               | `claude --mcp-config ./mcp-servers.json`                                               |
| `--strict-mcp-config`                                | Only use MCP servers from `--mcp-config`, ignoring other MCP configurations; exits at startup if a `managed-mcp.json` is deployed.                                                                                 | `claude --mcp-config ./a.json --strict-mcp-config`                                     |
| `--append-system-prompt <prompt>`                    | Append a system prompt to the default system prompt (useful in print mode).                                                                                  | `claude -p --append-system-prompt "Do X then Y"`                                       |
| `--autocompact <auto\|tokens>`                       | Override the auto-compaction window for this session.                                                                                                        | `claude --autocompact 500k`                                                           |
| `--ax-screen-reader`                                 | Use a flat, screen-reader-friendly renderer without decorative borders or animations.                                                                         | `claude --ax-screen-reader`                                                           |
| `--bare`                                             | Minimal scripted mode: skip discovered hooks, skills, plugins, MCP, auto-memory, and `CLAUDE.md`.                                                             | `claude --bare -p "query"`                                                           |
| `--permission-mode <mode>`                           | Start in `default`/`manual`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, or `plan`.                                                               | `claude --permission-mode plan`                                                        |
| `--permission-prompt-tool <tool>`                    | Specify an MCP tool to handle permission prompts in non-interactive mode; pass the full `mcp__<server>__<tool>` name of a tool on an MCP server the run loads. | `claude -p --mcp-config ./mcp.json --permission-prompt-tool mcp__permissions__approve "query"` |
| `--permission-prompts <host\|none>`                  | Print mode: `host` (default) sends prompts to the SDK host or `--permission-prompt-tool`; `none` denies anything that would prompt, while the permission mode decides the rest. | `claude -p --permission-mode auto --permission-prompts none "query"`                   |
| `--fallback-model <models>`                          | Comma-separated fallback chain for when the primary model is overloaded or unavailable (interactive or print mode); the primary is retried each turn. Overrides `fallbackModel`. | `claude --fallback-model sonnet,haiku`                                                 |
| `--effort <level>`                                   | Set effort to `low`, `medium`, `high`, `xhigh`, or `max`; `ultracode` starts at `xhigh` with ultracode turned on.                                              | `claude --effort high`                                                                |
| `--model <model>`                                    | Model for the current session. Accepts aliases like `sonnet`/`opus` or a full model ID when pinning.                                                         | `claude --model sonnet`                                                                |
| `--advisor <model>`                                  | Set the experimental advisor for this session without changing `advisorModel`; intentionally omitted from `claude --help`.                                  | `claude --advisor opus`                                                                |
| `--settings <file-or-json>`                          | Load additional settings from a JSON file or a JSON string.                                                                                                  | `claude --settings ./settings.json`                                                    |
| `--add-dir <directories...>`                         | Additional directories to allow tool access to. Most network paths (UNC shares, `/net` automounts) are refused; on Windows, use a mapped drive letter.       | `claude --add-dir ../apps ../lib`                                                      |
| `--ide`                                              | Automatically connect to an IDE on startup if exactly one valid IDE is available.                                                                            | `claude --ide`                                                                         |
| `-c, --continue`                                     | Continue the most recent conversation in the current directory.                                                                                              | `claude --continue`                                                                    |
| `-r, --resume [id\|name]`                            | Resume by session ID, name, or `.jsonl` transcript path, or open the picker; resuming a still-running background session attaches to it.                     | `claude -r auth-refactor`                                                              |
| `--session-id <uuid>`                                | Use a specific session ID for the conversation (must be a valid UUID).                                                                                       | `claude --session-id 123e4567-e89b-12d3-a456-426614174000`                             |
| `--agents <json\|file>`                              | Define custom subagents dynamically via inline JSON or, with `-p`, a path to a JSON file (see subagent docs for format).                                     | `claude --agents '{"reviewer":{"description":"Reviews code","prompt":"..."}}'`         |
| `--agent <name>`                                     | Specify a specific agent for the current session.                                                                                                            | `claude --agent my-custom-agent`                                                       |
| `--bg`                                               | Start or continue work as a background session that can be viewed from `claude agents`.                                                                      | `claude --bg "fix failing tests"`                                                      |
| `--bg --exec <command>`                              | Run a shell command as an attachable background session.                                                                                                     | `claude --bg --exec "npm test"`                                                        |
| `-n, --name <name>`                                  | Set a display name for any session (prompt box, `/resume` picker, terminal title); resume it later with `claude --resume <name>`.                            | `claude -n auth-refactor`                                                              |
| `--chrome`                                           | Enable Chrome browser integration for web automation and testing.                                                                                            | `claude --chrome`                                                                      |
| `--no-chrome`                                        | Disable Chrome browser integration for this session.                                                                                                         | `claude --no-chrome`                                                                   |
| `--cloud [description\|session\|url]`               | Create a cloud session on claude.ai; with `-p` and a session ID or URL, queue a message into an existing one.                                                | `claude --cloud "Fix the login bug"`                                                   |
| `--remote`                                           | Deprecated alias for `--cloud`.                                                                                                                              | `claude --remote "Fix the login bug"`                                                  |
| `--remote-control`, `--rc`                           | Start an interactive local session that can also be controlled from claude.ai or the Claude app.                                                            | `claude --remote-control "My Project"`                                                 |
| `--teleport [session]`                               | Pull a cloud session into your local terminal; with no ID it opens a picker.                                                                                 | `claude --teleport <session-id>`                                                       |
| `--fork-session`                                     | When resuming, create a new session ID instead of reusing the original.                                                                                      | `claude --resume abc123 --fork-session`                                                |
| `--json-schema <schema>`                             | Get validated JSON output matching a JSON Schema after agent completes (print mode only).                                                                    | `claude -p --json-schema '{"type":"object",...}' "query"`                              |
| `--max-budget-usd <amount>`                          | Maximum dollar amount to spend on API calls before stopping (print mode only).                                                                               | `claude -p --max-budget-usd 5.00 "query"`                                              |
| `--max-turns <n>`                                    | Limit the number of agentic turns (print mode only). Exits with error when limit reached.                                                                    | `claude -p --max-turns 3 "query"`                                                      |
| `--betas <headers>`                                  | Beta headers to include in API requests (API key users only).                                                                                                | `claude --betas interleaved-thinking`                                                  |
| `--tools <tools>`                                    | Restrict which built-in tools Claude can use. Use "" to disable all, "default" for all, or specific tool names.                                              | `claude --tools "Bash,Edit,Read"`                                                      |
| `--system-prompt <prompt>`                           | Replace the entire system prompt with custom text (works in interactive and print modes).                                                                    | `claude --system-prompt "You are a Python expert"`                                     |
| `--system-prompt-file <file>`                        | Load a system prompt from a file, replacing the default in interactive or print mode.                                                                         | `claude --system-prompt-file ./custom-prompt.txt`                                      |
| `--append-system-prompt-file <file>`                 | Load additional system-prompt text from a file in interactive or print mode; can be combined with `--append-system-prompt` (the file's text comes first).    | `claude --append-system-prompt-file ./extra-rules.txt`                                 |
| `--system-prompt-snapshot <on\|off>`                 | `on` (default) reuses the prompt recorded on the first request, even after `--resume`/`--continue`, until compaction; `off` rebuilds it each request (for iterating on prompt flags). | `claude -c --append-system-prompt "Draft rules" --system-prompt-snapshot off`          |
| `--plugin-dir <path>`                                | Load a plugin directory, a `.zip`, or a folder of plugins (each child with a manifest loads) for this session only (repeatable).                             | `claude --plugin-dir ./my-plugin --plugin-dir ./other.zip`                             |
| `--plugin-url <url>`                                 | Fetch a plugin `.zip` URL for this session only (repeatable).                                                                                                 | `claude --plugin-url https://example.com/plugin.zip`                                  |
| `--setting-sources <sources>`                        | Comma-separated list of setting sources to load (user, project, local).                                                                                      | `claude --setting-sources user,project`                                                |
| `--no-session-persistence`                           | Disable session persistence so sessions are not saved to disk (print mode only).                                                                             | `claude -p --no-session-persistence "query"`                                           |
| `--disable-slash-commands`                           | Disable all skills and slash commands for this session.                                                                                                      | `claude --disable-slash-commands`                                                      |
| `--dangerously-skip-permissions`                     | Skip normal permission prompts, subject to non-bypassable safety checks and managed policy.                                                                  | `claude --dangerously-skip-permissions`                                                |
| `--allow-dangerously-skip-permissions`               | Add bypass mode to the `Shift+Tab` cycle without starting in it.                                                                                             | `claude --permission-mode plan --allow-dangerously-skip-permissions`                   |
| `--safe-mode`                                        | Disable customizations (CLAUDE.md, skills, plugins and installed mods, hooks, MCP servers, and more) for troubleshooting; authentication, models, built-in tools, permissions, and managed policy still apply.                       | `claude --safe-mode`                                                                  |
| `--restricted`                                       | Locked-down session (also `CLAUDE_CODE_RESTRICTED=1`): removes built-in tools that run commands or code, and WebFetch, unless named in `--tools`; confines file tools to the working directories; ignores user/project/local settings; refuses `bypassPermissions`. | `claude --restricted -p "query"`                                                       |
| `--worktree [name]`, `-w [name]`                     | Start in `<repo>/.claude/worktrees/<name>`; omit the name to generate one, or pass `#<number>` or a GitHub PR / GitLab MR URL to branch from it. Add `--tmux` for a tmux session. | `claude -w feature-auth`                                                               |
| `--from-pr [value]`                                  | Filter/resume sessions by PR number or GitHub/GitLab/Bitbucket PR/MR URL, or open the picker.                                                                | `claude --from-pr 123`                                                                |
| `--init`                                             | Run Setup hooks with the `init` matcher before a print-mode session.                                                                                         | `claude -p --init "query"`                                                            |
| `--init-only`                                        | Run Setup and `SessionStart` hooks, then exit without starting a conversation.                                                                               | `claude --init-only`                                                                   |
| `--maintenance`                                      | Run Setup hooks with the `maintenance` matcher before a print-mode session.                                                                                  | `claude -p --maintenance "query"`                                                     |
| `-v, --version`                                      | Show the installed `claude` CLI version.                                                                                                                     | `claude --version`                                                                     |
| `-h, --help`                                         | Display help / usage.                                                                                                                                        | `claude --help`                                                                        |

> This table highlights common and recently changed options; `claude --help` and the [live CLI reference](https://code.claude.com/docs/en/cli-reference) are authoritative. `--output-format json` is useful for one-shot automation; use `stream-json` for event-level integrations.

For programmatic integrations, the former **Claude Code SDK** is now the [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview): TypeScript uses `@anthropic-ai/claude-agent-sdk`, and Python uses `claude-agent-sdk` / `claude_agent_sdk`. Use `claude -p` for headless CLI calls; `--bare` removes discovered customization and keychain/OAuth access for low-overhead API/provider automation.

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
claude setup-token # Generate a long-lived OAuth token for CI and scripts (subscription)

# Background, cloud, and Remote Control sessions

claude agents # Open the live session dashboard: running, blocked, completed
claude agents --json # Scriptable JSON list of live/background sessions
claude --bg "run the integration suite and summarize failures" # Start a background session
claude --bg --exec "npm test" # Run a shell command as an attachable background session
claude attach <id|name> # Attach to a background session (part of its name works)
claude logs <id|name> # Print recent background-session output
claude stop <id> # Stop a background session
claude rm <id> # Remove it from agent view and delete its worktree; transcript remains resumable
claude remote-control # Serve local sessions to web/mobile while this process stays alive
claude --cloud "Fix the bug" # Start a cloud session on claude.ai
claude --teleport <session-id> # Pull a cloud session into this terminal

# Config essentials

/config # Interactive settings
/config model=sonnet # Set a supported key directly
/config theme=dark
/config --help # Show settable keys and values
# For shared or managed settings, edit the appropriate settings.json file.

# MCP essentials

claude mcp list # List configured MCP servers
claude mcp get <name> # Show details for a server
claude mcp add <name> -- <command> [args...] # Add local stdio server; `--` separates Claude's options from the server's
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
claude ultrareview 123 --trust-workspace --json # Non-interactive cloud review of PR 123; in scripts/CI, --trust-workspace trusts an untrusted folder for this run

# Slash shortcuts

claude --fork-session -r abc123 # Fork instead of reusing original
claude -w feature-auth "implement feature" # Start in an isolated git worktree
/rename auth-refactor # Name current session
/resume # Open session picker
/export output.md # Export conversation to file
/branch experiment-name # Branch the current conversation
/fork "investigate the flaky test" # Copy conversation into a background session
/subtask "trace the regression" # Fork a subagent that reports back here
/cd ../other-project # Move the current session to another directory, keeping the conversation
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
| `Ctrl+C`                     | Interrupt, or clear input          | Interrupts a running operation; when idle, clears the prompt (`Up` restores it), and a second press exits |
| `Ctrl+D`                     | Exit Claude Code session           | Press twice on an empty prompt; with text, deletes the next character |
| `Ctrl+G`                     | Open in default text editor        | Edit your prompt or custom response      |
| `Ctrl+L`                     | Redraw the screen                  | Keeps your input and conversation; `/clear` starts a new conversation |
| `Ctrl+O`                     | Toggle transcript viewer           | Shows detailed tool usage, timestamps, and model |
| `Ctrl+R`                     | Reverse search command history     | Search through previous commands         |
| `Ctrl+V` (`Cmd+V` in iTerm2); `Alt+V` on Windows/WSL | Paste image from clipboard | Inserts an image chip at the cursor |
| `Ctrl+B`                     | Background running tasks           | Backgrounds bash commands and agents     |
| `Ctrl+X`, then `Ctrl+K`      | Stop all background agents         | Press the chord twice within 3 seconds to confirm |
| `Ctrl+T`                     | Toggle task checklist              | Stays empty on models newer than Opus 4.7/Sonnet 4.6/Haiku 4.5 unless `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`; `/tasks` is the background-work view |
| `Ctrl+S`                     | Stash or restore the current prompt | Preserves text, cursor, and pasted content |
| `Ctrl+Enter` or `Ctrl+X Ctrl+S` | Send queued messages now           | Sends queued messages and your draft now; running shells and subagents move to the background, otherwise the turn is interrupted; use `Ctrl+X Ctrl+S` if `Ctrl+Enter` arrives as Enter |
| `Ctrl+Z`                     | Suspend Claude Code                | Unix only; `fg` resumes (undo is `Ctrl+_`) |
| `Up/Down arrows`             | Navigate command history           | Recall previous inputs                   |
| `Left/Right arrows`          | Cycle through dialog tabs          | Navigate between tabs in dialogs         |
| `←` on an empty prompt       | Open agent view                    | Backgrounds the session and opens `claude agents`; detaches an attached session |
| `Esc`                        | Interrupt Claude, or close a dialog | Stops the current response or tool call, keeping work so far; declines a permission prompt |
| `Esc` + `Esc`                | Clear the draft, or rewind         | With text, clears it (`Up` recalls it); on an empty prompt, opens the rewind menu to restore or summarize code and conversation |
| `Shift+Tab` (or `Alt+M`)     | Cycle enabled permission modes     | Includes Manual, Accept Edits, Plan, and enabled Auto/Bypass modes; `Alt+M` is a Windows fallback |
| `Option+P` (macOS) / `Alt+P` | Switch model                       | Switch models without clearing prompt    |
| `Option+T` (macOS) / `Alt+T` | Toggle extended thinking           | No effect on Opus 5.5, Sonnet 5.5, Haiku 5.5, or Fable models, which always think; works on macOS without Option as Meta |
| `Option+O` (macOS) / `Alt+O` | Toggle fast mode                   | Enable/disable supported fast mode       |

> [!Tip]
> **Custom shortcuts:** run `/keybindings` to open `~/.claude/keybindings.json`, whose `bindings` array holds blocks like `{ "context": "Chat", "bindings": { "ctrl+e": "chat:externalEditor", "ctrl+s": null } }` (`null` unbinds). Changes apply without a restart; `Ctrl+C`/`Ctrl+D` are reserved and vim keys can't be remapped.

> [!Note]
> **Fullscreen rendering** (flicker-free, with mouse support) is the default for most new installs. Switch with `/tui fullscreen` or `/tui default` (`/tui` alone shows the active renderer), or set `CLAUDE_CODE_NO_FLICKER=1`/`0` per launch. In its transcript viewer, `?` lists the extra keys.

<h3 id="text-editing">Text Editing</h3>

| Shortcut               | Description                  | Context                               |
| :--------------------- | :--------------------------- | :------------------------------------ |
| `Ctrl+K`               | Delete to end of line        | Stores deleted text for pasting       |
| `Ctrl+U`               | Delete to start of line      | Stores deleted text; repeat to clear across lines in multiline input |
| `Ctrl+W`               | Delete back to whitespace    | Removes a whole path or `--flag=value` in one press |
| `Ctrl+Y`               | Paste deleted text           | Pastes text last deleted with Ctrl+K/U/W or Alt+D |
| `Alt+Y` (after Ctrl+Y) | Cycle paste history          | Cycle through previously deleted text |
| `Alt+B`                | Move cursor back one word    | Requires Option as Meta on macOS      |
| `Alt+F`                | Move cursor forward one word | Stops at word end (`_`, `.`, `/` separate words); requires Option as Meta on macOS |
| `Alt+D`                | Delete to end of word        | Stores deleted text; requires Option as Meta on macOS |
| `Ctrl+_`               | Undo last input edit         | Also `Ctrl+Shift+-` |

<h3 id="multiline-input">Multiline Input</h3>

| Method           | Shortcut       | Context                           |
| :--------------- | :------------- | :-------------------------------- |
| Quick escape     | `\` + `Enter`  | Works in all terminals            |
| Option key       | `Option+Enter` | macOS, after enabling Option as Meta (see tip below) |
| Shift+Enter      | `Shift+Enter`  | Native in iTerm2, WezTerm, Ghostty, Kitty, Warp, Apple Terminal, and Windows Terminal; see tip below for others |
| Control sequence | `Ctrl+J`       | Line feed character for multiline |
| Paste mode       | Paste directly | For code blocks, logs             |

> [!Tip]
> Run `/terminal-setup` once for Shift+Enter in VS Code, Cursor, Zed, and Alacritty before 0.16 (foot, Alacritty 0.16+, and other kitty-protocol terminals work natively); gnome-terminal and JetBrains terminals have none, so use `Ctrl+J`. In tmux, add `set -s extended-keys on` and `set -as terminal-features 'xterm*:extkeys'` to `~/.tmux.conf`. `Option+` shortcuts on macOS need Option as Meta (Terminal.app: Settings → Profiles → Keyboard; iTerm2: Option keys to "Esc+"; VS Code: `"terminal.integrated.macOptionIsMeta": true`).

<h3 id="quick-commands">Quick Commands</h3>

| Shortcut     | Description       | Notes                                 |
| :----------- | :---------------- | :------------------------------------ |
| `/` at start | Command or skill  | See built-in commands and skills      |
| `!` at start | Shell mode        | Runs the command and Claude responds to its output; `"respondToBashCommands": false` only adds it to context |
| `@`          | File or session mention | Autocompletes file paths; after a letter, also suggests your other live sessions for Claude to message |
| `?` on empty input | Shortcut help     | Toggles the shortcut help panel |

> [!Tip]
> **PDF Page Ranges:** For PDFs over 10 pages, the Read tool takes one page or range per call in its `pages` parameter (e.g., `pages: "1-5"`, up to 20 pages; comma lists like `"6,9,15"` error). Page reads need `pdftoppm` (`brew install poppler` / `apt-get install poppler-utils`). Large PDFs (>10 pages) return a lightweight reference when @-mentioned instead of being inlined.

> [!Tip]
> **Voice and spelling:** `/voice` turns on dictation (hold `Space` to record, or `/voice tap` to tap to start and again to send); it needs a Claude.ai login and a local mic, so not API-key/Bedrock/Agent Platform/Foundry auth, SSH, or cloud sessions. `"spellcheck": { "enabled": true }` in `~/.claude/settings.json` underlines misspellings (needs `aspell`, `hunspell`, or `ispell`).

<h2 id="vim-mode">Vim Mode</h2>

> [!Note]
> Enable vim-style editing from `/config` -> Editor mode, or set `"editorMode": "vim"` in `~/.claude/settings.json`. Add `"vimInsertModeRemaps": { "jj": "<Esc>" }` to make a two-key INSERT sequence act as Escape (ignored in project settings).

<h3 id="vim-mode-switching">Vim Mode Switching</h3>

| Command | Action                      | From mode |
| :------ | :-------------------------- | :-------- |
| `Esc` or `Ctrl+[` | Enter NORMAL mode           | INSERT, VISUAL |
| `i`     | Insert before cursor        | NORMAL    |
| `I`     | Insert at beginning of line | NORMAL    |
| `a`     | Insert after cursor         | NORMAL    |
| `A`     | Insert at end of line       | NORMAL    |
| `o`     | Open line below             | NORMAL    |
| `O`     | Open line above             | NORMAL    |
| `v` / `V` | Visual selection (character / line); `d`, `y`, `c`, `p`, `>`/`<`, `~`/`u`/`U`, `J` act on it | NORMAL |

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
| `G`             | Beginning of last line    |
| `f`/`F`/`t`/`T` + char | Jump to, or just before/after, a character on the line; `;` / `,` repeat / reverse |
| `%`             | Matching `()`, `[]`, or `{}` bracket (also with `d`/`c`/`y`) |
| `/`             | Reverse history search (same as `Ctrl+R`) |

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
| `r{char}`, `s`/`S` | Replace character; substitute character/line |
| `yy`/`Y`, `yw`/`ye`/`yb` | Yank line, word/to end/back |
| `p` / `P`      | Paste after / before cursor |
| `>>` / `<<`, `J` | Indent / dedent line; join lines |
| `ciw`, `di"`, `ya(` … | Text objects: `i`/`a` + `w`, `W`, `"`, `'`, `(`, `[`, or `{`, with `d`/`c`/`y` |
| `u` / `.`      | Undo / repeat last change |

> [!Tip]
> Enter still submits your prompt in INSERT mode, unlike standard Vim. Use `o`/`O` in NORMAL mode, or `Ctrl+J`, to insert a newline.

<h2 id="command-history">Command History</h2>

Claude Code keeps a history of the prompts you type (in `~/.claude/history.jsonl`), and Up-arrow recall also reaches earlier sessions of the same project:

* History is stored per working directory
* `/clear` doesn't erase history; recall lists the new session's prompts first, then earlier ones
* Up/Down (or `Ctrl+P`/`Ctrl+N`) first move the cursor within a multiline prompt, then step through history
* **Ctrl+R** is built in and works in any terminal: the inline search covers all projects (`Ctrl+R` again for older matches, `Tab`/`Esc` to accept, `Enter` to accept and run). In fullscreen it opens a dialog where `Ctrl+S` cycles the scope (session, project, all projects)
* **Drafts cleared with `Ctrl+C`** come back with `Up`; the last ten, with pasted text and images, are kept until you exit
* History expansion with `!` is disabled by default

---

<h1 id="advanced-features">Advanced Features</h1>

<h2 id="thinking-keywords">Thinking Keywords</h2>

> [!Note]
> **`ultrathink` is the only documented prompt keyword for a one-turn request for deeper reasoning.** Phrases such as `think`, `think hard`, and `think harder` are ordinary prompt text; they are not graduated Claude Code controls.

Use `/effort` for an explicit session setting. `ultrathink` adds an in-context instruction for that turn without changing your saved effort level. Typed at the terminal prompt on Opus 5.5, Sonnet 5.5, Haiku 5.5, or Fable 5.1 through Anthropic's API (v2.1.311+), it can also raise that turn to `xhigh`; the word turns rainbow-colored when it can. Elsewhere, such as on Bedrock, set `/effort` instead.

```md
Ultrathink. Propose a step-by-step strategy to fix flaky payment tests and add guardrails.
```

<h2 id="effort-levels">Effort Levels</h2>

Use `/effort` to tune how much reasoning the selected model applies before answering. Higher effort levels are best for planning-heavy work, deep reviews, and long-context tasks.

```bash
/effort            # Slider: Enter saves for this model, s = this session only, Tab toggles Ultracode
/effort low        # Faster, lighter reasoning
/effort medium     # Balanced; default on Opus 5.5, Sonnet 5.5, and Haiku 5.5
/effort high       # Deeper planning and review; default on most other models
/effort xhigh      # Deeper reasoning at higher token spend; default on Opus 4.7
/effort max        # Session-only maximum; test for diminishing returns
/effort ultracode  # Workflow orchestration for this session at the current level ("off" to stop)
/effort auto       # Clear the saved level and return to the model's default
```

Available levels depend on the model. `/effort` saves a level per model (under `modelSettings`); the `effortLevel` setting accepts `low` through `xhigh` as the fallback for models without one, though a top-level `effortLevel` in user settings doesn't apply to Opus 5.5. `max` normally applies only to the current session, although `CLAUDE_CODE_EFFORT_LEVEL=max` can force it for sessions launched with that environment variable. `maxEffortLevel` caps effort on every provider. Ultracode is a toggle, not an effort level: with it on, Claude orchestrates dynamic workflows for substantive tasks at the session's current level. Set `"ultracode": true` in settings to start every session with it; `claude --effort ultracode` turns it on and also sets `xhigh`. It requires workflows and an xhigh-capable model. Prefer the lowest effort that reliably solves the task because higher effort increases latency and token use.

<h2 id="advisor-tool">Advisor Tool (Experimental)</h2>

The advisor pairs the main model with a second, at-least-as-capable model that Claude may consult at important planning, debugging, or completion decisions. Each consultation sends the full conversation, including tool calls and results; it counts toward subscription usage or is billed at the advisor model's API rates.

```bash
/advisor             # Open the picker and save the user default
/advisor opus        # Save Opus as the advisor
/advisor off         # Clear the saved advisorModel setting
claude --advisor opus # Use Opus for this session without changing the saved default
```

The feature runs through the first-party Anthropic API, for subscription or API-billed accounts; it is unavailable on Bedrock, Google Cloud's Agent Platform, and Microsoft Foundry, and opt-in on Claude Platform on AWS (v2.1.300+), where no advisor runs until you pick one. Claude decides when to consult it. `advisorModel` is the persistent settings key, while the intentionally hidden `--advisor` launch flag is session-only; `CLAUDE_CODE_DISABLE_ADVISOR_TOOL=1` turns the tool off entirely. With Fable access you can pick Fable as the advisor (the only advisor a Fable main model accepts); where Fable bills to usage credits, accept that once with `/model fable` first. See the [advisor guide](https://code.claude.com/docs/en/advisor) for supported main/advisor pairings.

<h2 id="fast-mode">Fast Mode</h2>

> [!Note]
> **Fast mode runs the same Opus model and capabilities up to 2.5× faster at a higher price per token, without trading model quality for speed. It is generally available on Opus 5.5 and in research preview on Opus 5 and Opus 4.8.**

```bash
/fast          # Space toggles, Enter confirms and saves your fastMode default
/fast on       # Turn it on directly (session-only in cloud sessions)
# Option+O on macOS or Alt+O on Windows/Linux also toggles it
```

Fast mode supports **Opus 5.5** (the default fast-mode model), **Opus 5**, and **Opus 4.8**, at \$8/\$40 per MTok input/output on Opus 5.5 and \$10/\$50 on the other two. It is unavailable for Sonnet, Haiku, and Opus 4.7, and on Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, and Claude Platform on AWS. VS Code has a **Toggle fast mode** command, and claude.ai/code has a Fast mode switch in the model menu. Subscription users need usage credits; Team and Enterprise also require Owner enablement. Use it for latency-sensitive interactive work, and standard mode for cost-sensitive or long autonomous tasks. Lower `/effort` is the separate control that may trade reasoning depth for speed.

<h2 id="auto-mode">Auto Mode</h2>

Auto mode lets Claude evaluate and approve lower-risk actions automatically while still blocking or asking on higher-risk operations. It is useful for trusted development loops where repeated permission prompts slow down work.

```bash
# Start in auto mode, or cycle to it with Shift+Tab
claude --permission-mode auto

# Inspect the built-in and effective classifier configuration
claude auto-mode defaults
claude auto-mode config
claude auto-mode critique    # AI feedback on your custom rules

# Remove a cached/custom classifier config and return to defaults
claude auto-mode reset       # Add --yes to skip confirmation
```

```json
{
  "autoMode": {
    "environment": [
      "$defaults",
      "Source control: github.example.com/acme-corp and all repos under it"
    ],
    "hard_deny": [
      "$defaults",
      "Never send repository contents to third-party code-review APIs"
    ]
  }
}
```

Key points:

- Auto mode is available on every supported provider (on Bedrock, Agent Platform, and Foundry only with Sonnet 5+, Opus 4.7+, Haiku 5.5, and Fable models); `CLAUDE_CODE_ENABLE_AUTO_MODE` is a no-op compatibility variable. With no mode configured, interactive terminal and VS Code sessions start in auto mode where it's available (otherwise Manual), while `claude -p` and Agent SDK runs start in `default` (Manual). Choose another starting mode with `--permission-mode` or `permissions.defaultMode`; `disableAutoMode: "disable"` in managed settings removes auto mode.
- The classifier trusts the working directory and current repository remotes by default. Add organization infrastructure under `autoMode.environment` only when needed; `/auto-mode-setup` drafts entries from your project and recent sessions, and `/permissions` has an **Auto mode** tab for viewing and editing rules.
- Put `autoMode` in user settings, managed settings, or `--settings`. Repository `.claude/settings.json` and `.claude/settings.local.json` cannot inject classifier policy.
- Include `"$defaults"` in `allow`, `soft_deny`, `hard_deny`, or `environment` to extend the built-in rules. An array without it replaces that section's built-in list, so an empty `hard_deny` drops the built-in data-exfiltration rule.
- Where supported, classifier checks run server-side at no extra charge (`/status` shows an **Auto mode server** row). Behind a gateway or proxy that blocks them, Claude Code makes its own classifier requests, which count toward usage; `CLAUDE_CODE_AUTO_MODE_SERVER=0` forces that.
- Explicit `permissions.deny` and content-scoped `permissions.ask` rules are evaluated before the classifier. Use those for non-negotiable blocks or human checkpoints.

<h2 id="plan-mode">Plan Mode</h2>

> [!Note]
> **Plan Mode tells Claude to research and propose changes without editing your source, and is designed for exploration, planning, and review. It permits read-only shell exploration; when auto mode is available and `useAutoModeDuringPlan` is on (the default), the classifier reviews other commands instead of prompting.**

Plan Mode is a workflow mode, not a hard isolation boundary. In interactive terminal sessions where bypass permissions is available (such as with `--dangerously-skip-permissions`), its blocks aren't enforced: Claude is still told not to edit, but edits and commands it attempts run without prompting (explicit ask rules and critical-path `rm`/`rmdir` removals still prompt). Use sandboxing plus explicit deny/ask rules or managed policy when command execution must be technically constrained.

When the plan is ready, choose **Yes, and use auto mode** (**Yes, auto-accept edits** without auto mode), **Yes, manually approve edits**, or **No, keep planning**; `Ctrl+G` opens it in your editor first.

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
| `/background` (`/bg`) | Detach this entire conversation and free the terminal |
| `←` on an empty prompt | Background this session and open agent view (`leftArrowOpensAgents` in `/config` turns this off) |
| `/fork` | Copy this conversation into a worktree-isolated background session while you stay here |
| `claude --bg` | Launch a new background Claude session; it cannot be combined with `-p` |
| `! <command>` in `claude agents` | Start an attachable background shell session from agent view |

**Key features:**

- Output is buffered and can be read from the persisted background output file path
- The Monitor tool lets Claude stream a background script's output line by line instead of polling with `sleep`
- In unattended sessions (`-p`, Agent SDK, CI, cloud), background shell commands stop at their `timeout` (default 30 minutes, or 10 in a `-p` run given a text prompt; max 2 hours); interactive sessions have no limit
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
# Remove run_in_background and Ctrl+B for shells and subagents
export CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1

# Also turn off background sessions: claude agents, --bg, /background
export CLAUDE_CODE_DISABLE_AGENT_VIEW=1   # or "disableAgentView": true in settings
```

---

<h2 id="workflows--scheduling">Workflows & Scheduling</h2>

Dynamic workflows coordinate many background agents for larger work than a single foreground turn can comfortably handle. Ask for one in your own words ("use a workflow to…") or include `ultracode` in your prompt, then use `/workflows` to inspect runs and status. `/deep-research <question>` is built in, and pressing `s` on a run in `/workflows` saves its script (to `.claude/workflows/` or `~/.claude/workflows/`) as a reusable `/<name>` command. On Pro, turn workflows on in `/config` first.

```bash
/workflows
/goal "the migration is implemented, tested, and documented"
/loop 15m "check the deployment dashboard and summarize any incidents"
```

| Feature      | Purpose                                                                                 |
| :----------- | :-------------------------------------------------------------------------------------- |
| `/workflows` | View workflow runs that orchestrate many agents in the background                       |
| `/goal`      | Give Claude a completion condition and let it continue across turns until it is reached |
| `/loop`      | Run a prompt or slash command on an interval, or omit it to let Claude self-pace        |
| `/schedule`  | Create and manage cloud scheduled tasks that run without your machine                   |

Use workflows for broad, decomposable efforts. Use `/goal` for a single outcome that may require several turns. Use `/loop` for monitoring within an open session; loops expire after 7 days, `Esc` stops a self-paced loop while it waits, and you ask Claude to cancel a fixed-interval one. Use `/schedule` or Desktop scheduled tasks for schedules that must run without an open session.

The default `workflowSizeGuideline` is **medium** (fewer than 10 agents), or **small** (fewer than 5) on Pro; `large` aims for fewer than 50, and `unrestricted` lets Claude decide. It is advice, not a cap; the runtime separately limits a run to 16 concurrent agents by default (`CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS`, 1–256) and 1,000 in total. Change it through `/config` only when the work genuinely benefits from a smaller or larger fan-out.

---

<h2 id="remote-sessions">Cloud Sessions</h2>

> [!Note]
> **For eligible subscribers: use `--cloud` to start a cloud session on claude.ai and `--teleport` to copy a cloud session into a local checkout. `--remote` remains only as a deprecated alias for `--cloud`.**

**Start a cloud session:**

```bash
# Create a new cloud session on claude.ai with task description
claude --cloud "Fix the login bug"
```

The cloud VM clones your GitHub remote at the current branch, not your local checkout, so push local commits first. With no git remote, or when the Claude GitHub App isn't installed on the GitHub repository, Claude Code uploads a bundle of your local repository instead (untracked files are left out; `CCR_FORCE_BUNDLE=1` forces a bundle, for example for a GitLab or Bitbucket repository). Queue a follow-up into a running cloud session with `claude -p "next step" --cloud <session-id>`. `--cloud` and `--teleport` need a claude.ai sign-in (`claude auth login`) and an organization that allows cloud sessions; they aren't available through Bedrock, Google Cloud's Agent Platform, or other third-party providers.

**Resume a cloud session locally:**

```bash
# Resume a cloud session in your local terminal (omit the ID for a session picker)
claude --teleport <session-id>

# Or, inside a running session, use the slash command (alias /tp)
/teleport
```

Teleport needs a clean working tree (it offers to stash), a checkout of the same repository (not a fork), the session's branch pushed to the remote, and the same claude.ai account. The terminal gets its own copy of the session: local work doesn't sync back, and a compacted cloud session arrives as its summary.

**Cloud environments and PR auto-fix:** each cloud session runs in a [cloud environment](https://code.claude.com/docs/en/cloud-environments) that sets its network access (default **Trusted**: package registries and other allowlisted domains only), environment variables, and a setup script that runs before Claude starts. If an install or WebFetch fails in a cloud session, check the network level first; `/remote-env` picks the default environment for `--cloud`. On a PR's branch, `/autofix-pr` starts a cloud session that watches the PR and pushes fixes for CI failures and review comments (needs `gh` and the Claude GitHub App on the repository).

Team and Enterprise organizations can also run cloud sessions on infrastructure they control (self-hosted environments, public beta, off by default). An Owner turns on **Allow self-hosted environments** on the claude.ai **Cloud environments** admin page and creates an environment, then starts a runner on a Linux or macOS host with `claude self-hosted-runner setup` (guided) or `claude self-hosted-runner --environment-secret-file <file> --base-dir <dir>`. Developers pick the environment in claude.ai/code or dispatch with `claude -p "your task" --environment ccpool_...`; see the [self-hosted environments guide](https://code.claude.com/docs/en/self-hosted-environments).

---

<h2 id="claude-in-chrome">Claude in Chrome</h2>

With the [Claude in Chrome extension](https://code.claude.com/docs/en/chrome), Claude Code can drive browser-based testing and UI verification from the CLI.

**Setup:**

```bash
claude --chrome                    # Launch with Chrome integration
/chrome                            # Status, reconnect, site permissions, browser choice, "Enabled by default"
```

**Capabilities:**

- Navigate to URLs, click elements, fill forms
- Take screenshots and analyze page content
- Execute JavaScript in the browser context
- Interact with web applications for testing
- Read console errors and DOM state for live debugging
- Upload local files to page upload fields (up to 10 MB per upload; files denied to `Read` are refused)
- Record interactions as GIFs and save screenshots to disk

> [!NOTE]
> Requires Chrome, Edge, or another Chromium browser (Brave, Arc, Vivaldi, Opera), the Claude in Chrome extension v1.0.36+, and a claude.ai subscription sign-in (API keys and `claude setup-token` tokens keep it off). It is unavailable through WSL and third-party model providers, and an organization admin can turn it off. Project settings files can't turn it on; use `--chrome` or **Enabled by default** in `/chrome`, a setting shared with the VS Code extension. Review the extension's site permissions before granting access; in auto mode, classifier-approved browser calls skip the extension's per-site check, so add permission deny rules for sites Claude must never act on.

---

<h2 id="desktop-and-ides">Desktop and IDEs</h2>

The Claude Desktop Code tab supports macOS, Windows (including sessions inside a WSL 2 distribution), and a Linux beta for Ubuntu/Debian. It provides parallel local or cloud sessions, worktrees, diffs, an editor, terminal, and browser; SSH execution is also available. Desktop and the CLI share CLAUDE.md files, settings, hooks, skills, and MCP servers from `~/.claude.json` and `.mcp.json`, but each keeps its own session list. Desktop's local Code tab sessions also load MCP servers from `claude_desktop_config.json`, which the CLI ignores; on macOS and WSL, `claude mcp add-from-claude-desktop` copies them into `~/.claude.json`. Agent teams are not supported in Desktop.

Run `/desktop` to move the current terminal session into the app, or `claude --desktop` (v2.1.285+) to open Desktop from your shell on the current directory, or on a session with `--continue` or `--resume <session-id>`. Both need macOS or x64 Windows and a Claude subscription sign-in.

**Computer use** (research preview, Pro and Max plans) lets Claude open native apps, click, type, and take screenshots when no MCP server, shell command, or Claude in Chrome can reach a tool. Turn it on in Desktop Settings (macOS and Windows) or, in the macOS CLI, enable the built-in `computer-use` server in `/mcp` and grant Accessibility and Screen Recording. Claude asks before controlling each app; it needs an interactive session and isn't available through third-party providers.

The VS Code extension requires VS Code 1.94+ and bundles a CLI for its panel; install the standalone CLI separately for terminal use. Cursor and compatible Open VSX forks are supported. Its Focus view hides tool calls, tool results, and thinking behind expandable rows (`Ctrl+Alt+F`, or `Ctrl+Option+F` on Mac). Its settings include **Enable Remote Control for all sessions**, and `claudeCode.attachSelection` and `claudeCode.attachOpenFile` control whether your editor selection and open file are added to messages. The JetBrains plugin (IntelliJ IDEA, PyCharm, WebStorm, GoLand, Android Studio, and others) doesn't bundle the CLI: install `claude` separately and run it in the IDE's integrated terminal, or connect from an external terminal with `/ide`. For JetBrains Remote Development, install the plugin on the remote host.

**Slack:** Team and Enterprise organizations bring @Claude into Slack channels with [Claude Tag](https://claude.com/docs/claude-tag/overview) (public beta), which works as the organization's shared identity with admin-configured access to repositories, connectors, and skills, under an organization spend limit. On Pro and Max, in a workspace no organization has connected to Claude Tag, the earlier [Claude Code in Slack](https://code.claude.com/docs/en/slack) app (`/install-slack-app`) turns @Claude coding requests into cloud sessions under your own account and plan limits.

See the current [Desktop](https://code.claude.com/docs/en/desktop), [VS Code](https://code.claude.com/docs/en/vs-code), [JetBrains](https://code.claude.com/docs/en/jetbrains), and [computer use](https://code.claude.com/docs/en/computer-use) documentation for platform-specific setup.

---

<h2 id="sandbox-mode">Sandbox Mode</h2>

Sandboxing is an OS-enforced boundary for the shell commands Claude runs (Bash, PowerShell, and Monitor) and the processes they start; Claude's file tools, MCP servers, and hooks run outside it, and it is separate from Claude Code's tool-permission rules. It is off by default: turn it on with `/sandbox` or `"sandbox": { "enabled": true }` in `~/.claude/settings.json`, then pick **auto-allow** (sandboxed commands run without prompting) or **regular permissions** on the `/sandbox` Mode tab. With default settings, sandboxed commands can write inside the working directory and temporary directories, read broadly except for denied paths, and reach the network only through a hostname-filtering proxy.

```bash
/sandbox # Inspect dependencies and configure filesystem/network isolation
```

Platform support:

- macOS uses Seatbelt.
- Linux and WSL 2 use bubblewrap plus socat (`sudo apt-get install bubblewrap socat` on Ubuntu/Debian). On Ubuntu 24.04+, if `sysctl kernel.apparmor_restrict_unprivileged_userns` returns `1`, AppArmor stops bubblewrap from creating user namespaces; add an AppArmor profile for `bwrap` (`/sandbox` and the startup warning explain how).
- Native Windows and WSL 1 do not support sandboxing.

Useful hardening settings include `sandbox.failIfUnavailable: true` to fail closed, `sandbox.allowUnsandboxedCommands: false` (**Strict sandbox mode** on the `/sandbox` Overrides tab) to remove the unsandboxed retry path, `sandbox.network.strictAllowlist: true` for an exact network allowlist, and credential rules with `mode: "deny"` or `mode: "mask"`. Commands you type at the `!` prompt run outside the sandbox even in strict mode, except in background sessions and Linux sessions with `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` set. Put tools that can't run sandboxed, such as `docker`, in `sandbox.excludedCommands` (for example `"docker compose *"`); they run with your full access, so keep patterns narrow. On Linux, `sandbox.allowNestedUserNamespaces: true` in `~/.claude/settings.json` (v2.1.305+) lets Chromium's or Electron's own sandbox, a nested bubblewrap, or `unshare` run inside the sandbox, but it turns off a security boundary; it isn't enough for rootless Podman or Buildah, which need `sandbox.excludedCommands` instead.

Masking credential files works on Linux and WSL 2; on macOS a masked file is blocked like `deny`. Every `mask` entry needs `sandbox.network.tlsTerminate`, or the placeholder reaches the server unchanged and authentication fails (`claude doctor` warns `TLS termination is unavailable`). Masks can also extract structured values, mask selected JWT claims, and re-sign AWS SigV4 requests. `mask` entries, `network.tlsTerminate`, `credentials.allowPlaintextInject`, `awsPairs`, and `sigv4` are honored only from user, managed, or `--settings` configuration, never from a repository's `.claude/settings.json` or `.claude/settings.local.json`. Sandboxing reduces the impact of shell commands; it is not a substitute for reviewing permissions and secrets exposure.

---

<h2 id="lsp-tool">LSP Tool (Language Server Protocol)</h2>

Claude Code integrates with language servers to provide IDE-level code intelligence:

- **Diagnostics after edits** — Type errors and warnings go back to Claude automatically after each file edit (`Found N new diagnostic issues`; Ctrl+O expands them)
- **Go to Definition** — Jump to where a symbol is defined
- **Find References** — Find all usages of a symbol across the codebase
- **Hover Information** — Get type information and documentation
- **Symbols and call hierarchy** — List file or workspace symbols, find implementations, and trace call hierarchies

LSP support is provided by plugins. Install the language-server binary separately, then install its LSP plugin from the official marketplace with `/plugin`; for TypeScript, run `npm install -g typescript-language-server typescript`, then `/plugin install typescript-lsp@claude-plugins-official`. A server merely being present on `PATH` is not enough, though Claude Code may then offer the matching plugin. This enables Claude to navigate codebases more precisely than text search alone. Plugin language servers don't start in cloud sessions, so the LSP tool is inactive there.

> Large tool results are saved to a file, and Claude gets a preview plus the path. This applies to successful Bash output over about 30,000 characters (adjustable up to 128,000 with the `bashOutputMaxChars` setting) and to MCP results over the limits described under [MCP Integration](#mcp-integration).

---

<h2 id="sub-agents">Sub Agents</h2>

> Sub‑Agents are purpose‑built helpers with their **own prompts, tools, and isolated context windows**. Treat this like a "mixture‑of‑experts" you **compose** per repo.

<h3 id="built-in-subagents">Built-in Subagents</h3>

Claude Code includes built-in subagents that Claude automatically uses when appropriate:

| Subagent | Model | Tools | Purpose |
| :------- | :---- | :---- | :------ |
| **Explore** | Inherits the parent model (Opus under a Fable parent, except on Bedrock, Agent Platform, Foundry, and similar providers) | Read-only | File discovery, code search, and codebase exploration |
| **Plan** | Inherits the parent model | Read-only | Planning complex changes without making edits |
| **General-purpose** | Inherits the parent model | Inherited | General task delegation |

> Claude delegates to **Explore** when it needs to search or understand a codebase without making changes, keeping exploration results out of your main conversation context.

Explore and Plan start without your `CLAUDE.md` files or git status and can't be resumed. Set `CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS=1` to remove both, or deny one with `Agent(Explore)` in `permissions.deny`.

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

Plugin subagents ignore `hooks`, `mcpServers`, and `permissionMode`; copy the file into `.claude/agents/` or `~/.claude/agents/` to use them.

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

With `-p`, `--agents` also takes a JSON file path: `claude -p --agents ./agents.json "Review my changes"`. In PowerShell, wrap inline JSON in a here-string (`@'` … `'@`) instead of single quotes.

<h3 id="create-your-core-agents">Create your core agents</h3>

> - **planner** (read‑only): turns features/issues into small, testable tasks; outputs a task list or plan.md.
> - **codegen** (edit‑capable): implements tasks; limited to `src/` + `tests/`.
> - **tester** (read‑only or patch‑only): writes _one_ failing test or a minimal repro.
> - **reviewer** (read‑only): leaves structured review comments; never edits.
> - **docs** (edit‑capable): updates `README.md`/`docs/` only.

**\*Policy** tip: Prefer **patch output** for edit‑capable agents so changes land through your normal Git workflow.\*

Grant each agent only the tools its role needs (`tools` is an allowlist, `disallowedTools` a denylist): `Read, Grep, Glob` for advisory agents, plus `Edit` and `Write` for editing ones.

<h3 id="example-prompts">Example prompts</h3>

> Keep prompts short, testable, and repo‑specific. Check them into `.claude/agents/`:

<img width="700" height="217" alt="image" src="https://github.com/user-attachments/assets/b4f92591-ff5c-4775-aec2-051f145b9616" />

_Caption: A plain request delegating to a **test‑coverage‑analyzer** agent; the `/agents` output at the top is from the since-removed wizard._

**.claude/agents/tester.md (sample)**

```markdown
---
name: tester
description: Writes one focused failing test for a scenario I describe. Use when a bug or feature needs a reproducing test.
tools: Read, Grep, Glob, Bash
---

Role: Write a single, focused failing test for the specific scenario I describe.
Scope: Only create/modify tests under tests/. Do not change src/.
Output: A brief rationale + a unified diff or patch.
If the scenario is unclear, stop and return exactly one clarifying question.
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
| `name`            | Yes      | Unique identifier such as `code-reviewer` (max 256 characters, no `:`, no leading `-`); needn't match the filename |
| `description`     | Yes      | When Claude should delegate to this subagent                        |
| `tools`           | No       | Tools the subagent can use (inherits all if omitted)                |
| `disallowedTools` | No       | Tools to deny, removed from inherited or specified list             |
| `model`           | No       | `sonnet`, `opus`, `haiku`, `fable`, a full model ID, or `inherit`; if omitted, see the model order below |
| `effort`          | No       | Model-dependent effort override for this subagent                   |
| `maxTurns`        | No       | Maximum agentic turns; hitting it returns partial output Claude can resume |
| `autoCompactWindow` | No     | Auto-compact earlier: plain integer `100000`–`1000000` (`200k` reads as 200); can lower, never raise, `CLAUDE_CODE_AUTO_COMPACT_WINDOW` |
| `permissionMode`  | No       | `default`/`manual`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, or `plan` |
| `skills`          | No       | Skills to preload into the subagent's context (max 32; the Skill tool can load others) |
| `hooks`           | No       | Lifecycle hooks scoped to this subagent                             |
| `mcpServers`      | No       | MCP servers available to this subagent                              |
| `memory`          | No       | Persistent memory scope: `user`, `project`, or `local`              |
| `omitClaudeMd`    | No       | `true` skips user, project, and local `CLAUDE.md` files (managed policy still loads) |
| `isolation`       | No       | Set to `worktree` to run the agent in an isolated git worktree, branched per [`worktree.baseRef`](#worktree-isolation) |
| `background`      | No       | `true` keeps it in the background even when Claude asks to wait for it |
| `color`           | No       | Display color in the task list and transcript: `red`, `blue`, `green`, `yellow`, `purple`, `orange`, `pink`, or `cyan` |
| `initialPrompt`   | No       | First user turn when this definition runs as the main session via `--agent` or the `agent` setting |
| `experimental`    | No       | Experimental options; `cacheTtl: 5m` or `1h` sets the prompt-cache TTL (agent files only) |

Field names are case-sensitive. Unknown fields are silently ignored and a file missing `name` or `description` is skipped; `claude --debug` logs unknown fields and most skip reasons.

**Model order:** a model Claude passes for one spawn, then the definition's `model`, then `CLAUDE_CODE_SUBAGENT_MODEL`, then the main model. That variable is only a default and doesn't move Explore or Plan; add `CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1` to apply it to every subagent, teammate, and workflow agent. Asking for an effort ("use a subagent at high effort") overrides `effort` for that spawn; `/tasks` shows each subagent's model and effort.

Organization model allowlists still apply to frontmatter. A restricted family alias steps down to the newest permitted model in that family where supported; when a workflow agent, forked skill/command, or resumed background agent must run on the parent model instead, Claude Code warns rather than silently implying the requested model was honored.

**Background by default:** subagents Claude spawns from the main conversation start in the background, with every MCP tool but only core built-in tools. Claude can still wait for one under `claude -p` and the Agent SDK, but in the terminal, desktop app, and VS Code only with fork mode off (`CLAUDE_CODE_FORK_SUBAGENT=0`, e.g. in the `settings.json` `env` block, then restart). `Ctrl+B` (**Run in background** in VS Code) backgrounds a waiting subagent. Ask Claude to resume a finished subagent to continue with its history.

**Forks:** a fork (`subagent_type: "fork"`) inherits the whole conversation, model, tools, prompt cache, and permission mode, so it can't leave plan mode. Fork mode is on by default except under `claude mcp serve`; start a fork yourself with `/subtask <task>`, or stop Claude forking with `Agent(fork)` in `permissions.deny` or `CLAUDE_CODE_FORK_SUBAGENT=0`.

Background and isolated agents can switch between Claude-managed worktrees with `EnterWorktree` when the session needs to move between related isolated checkouts.

Subagents can nest up to three layers below the main conversation by default, with at most 20 running concurrently. Claude Code v2.1.224 removed the former 200-spawn session cap. Tune the remaining limits with `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` and `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`; setting the depth to `1` disables nesting. These defaults have changed across releases, so check the [live subagent reference](https://code.claude.com/docs/en/sub-agents) before building automation around them.

<h3 id="why-this-shift-matters">Why This Shift Matters</h3>

**Operational benefits**

> - **Less context switching:** you stay in one mental mode; agents do the rest.
> - **Cleaner PRs:** narrow prompts + limited tools → smaller, reviewable diffs.
> - **Fewer regressions:** tester/reviewer agents catch gaps before merge.
> - **Repeatability:** prompts + policies live in the repo and travel with branches.

**Security & governance**

> - Limit write access by path (e.g., `src/`, `tests/`, `docs/`) with a frontmatter `PreToolUse` hook that exits `2` on out-of-scope files (a `disallowedTools` entry like `Edit(src/**)` removes the whole tool).
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

**Using Agent Teams:**

- Enabling teams makes any subagent Claude spawns with a `name` launch as a teammate, without asking (except forks and calls passing `isolation`); set the variable to `0` to revert. `claude -p` and the Agent SDK never spawn teammates.
- Ask in plain language (`Spawn three teammates to review PR #142: security, performance, and test coverage.`) or reuse a subagent definition (`Spawn a teammate using the security-reviewer agent type.`). Teammate models follow the [subagent model order](#subagent-frontmatter), ending with the lead's model.
- Teammates run in-process by default: select one in the agent panel and press Enter to message it, `x` to stop it, or Ctrl+T to toggle the task list. For split panes, set `"teammateMode": "auto"` in `~/.claude/settings.json` or run `claude --teammate-mode auto`; panes need tmux or iTerm2 (`it2` CLI) and don't work in VS Code's terminal, Windows Terminal, or Ghostty.
- Teammates start in the lead's permission mode (except `dontAsk`) and route permission prompts to the lead; gate their work with `TeammateIdle`, `TaskCreated`, and `TaskCompleted` [hooks](#hooks-system).
- Limits: one team per session, no nested teams, a fixed lead, and `/resume` or `/rewind` don't restore in-process teammates.

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

> Read the full case study: [Building a C Compiler with Parallel Claudes](https://www.anthropic.com/research/building-c-compiler)

---

<h2 id="skills">Skills (Custom Slash Commands)</h2>

> [!Note]
> **Skills extend what Claude can do. Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with `/skill-name`.**

<h3 id="skill-locations">Skill Locations</h3>

| Location                                 | Scope    | Description                                   |
| :--------------------------------------- | :------- | :-------------------------------------------- |
| `<managed-settings-dir>/.claude/skills/<skill-name>/SKILL.md` | Enterprise | All users where your organization deploys it |
| `~/.claude/skills/<skill-name>/SKILL.md` | Personal | All your projects                             |
| `.claude/skills/<skill-name>/SKILL.md`   | Project  | This project only (commit to version control) |
| `<subdir>/.claude/skills/<skill-name>/SKILL.md` | Nested | Sessions in or below `<subdir>`, or once Claude works on files there |
| `<add-dir>/.claude/skills/<skill-name>/SKILL.md` | Added dir | That session; `/<folder>:<name>` on a name clash |
| `<plugin>/skills/<skill-name>/SKILL.md`  | Plugin   | Where plugin is enabled                       |
| claude.ai account (`~/.claude/skills/synced/`) | Synced | Terminal sessions signed in with that account; opt out with `"syncClaudeAiSkills": false` |

> Enterprise-managed skills override personal skills, and personal skills override project skills with the same name. Plugin skills remain namespaced. Files in `.claude/commands/` remain compatible, but new commands should use the skill layout. Local skill folders named `synced`, and local skills or commands named `anthropic-skills`, don't load; those names are reserved for claude.ai sync.
> A directory under `~/.claude/skills/` or `.claude/skills/` is a plain skill when it contains `SKILL.md`. It becomes a skills-directory plugin only when it contains `.claude-plugin/plugin.json`. Skill edits there (and in `--add-dir` folders) apply live. Run `/reload-skills` after creating a top-level skills directory mid-session (and after each later change there, since it isn't watched yet), and `/reload-plugins` for a skills-directory plugin's hooks, `.mcp.json`, agents, or output styles.
> In `/skills`, press `Space` to cycle a skill's visibility (saved as `skillOverrides` in `.claude/settings.local.json`); `/skill-doctor` shows unused skills and their context cost. Your own skill named `verify` (or `simplify`) runs right before each commit, except docs- or tests-only changes, so put pre-commit checks there.

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
| `name`                     | No          | Command name shown in the `/` menu (uses directory name if omitted) |
| `description`              | Recommended | What the skill does and when to use it                      |
| `when_to_use`              | No          | Extra trigger phrases or examples, appended to `description` (1,536-character combined cap) |
| `argument-hint`            | No          | Hint shown during autocomplete (e.g., `[filename]`)         |
| `arguments`                | No          | Named positional arguments for `$name` substitution (e.g., `[issue, branch]`) |
| `disable-model-invocation` | No          | Set `true` to prevent Claude from auto-invoking             |
| `user-invocable`           | No          | Set `false` to hide from / menu                             |
| `allowed-tools`            | No          | Tools allowed without asking for the turn that invokes the skill. Not gated by workspace trust, so review it in cloned repos |
| `disallowed-tools`         | No          | Tools removed from the model while the skill is active      |
| `model`                    | No          | Model to use when this skill is active                      |
| `effort`                   | No          | Effort override while the skill is active                   |
| `context`                  | No          | Set to `fork` to run in a forked subagent context           |
| `agent`                    | No          | Which subagent to use when `context: fork` is set           |
| `background`               | No          | With `context: fork`, defaults to `true`; set `false` to wait for the result |
| `hooks`                    | No          | Hooks registered on invocation that stay active for the rest of the session (`once: true` removes a hook after its first successful run) |
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

Use `$0`, `$1`, ... (or `$ARGUMENTS[N]`) for positional arguments and `$name` for names declared in `arguments`. `${CLAUDE_SKILL_DIR}` (the skill's folder, for bundled scripts), `${CLAUDE_PROJECT_DIR}`, `${CLAUDE_SESSION_ID}`, and `${CLAUDE_EFFORT}` are also substituted.

<h3 id="skill-dynamic-context">Inject Dynamic Context</h3>

Use `` !`command` `` syntax to run shell commands before the skill content is sent to Claude:

```markdown
---
name: pr-summary
description: Summarize changes in a pull request
context: fork
agent: Explore
allowed-tools: Bash(gh *)
---

## Pull request context

- PR diff: !`gh pr diff`
- PR comments: !`gh pr view --comments`
- Changed files: !`gh pr diff --name-only`

## Your task

Summarize this pull request...
```

> Injected commands never prompt: one that isn't already allowed (by `allowed-tools`, an allow rule, or the read-only set) aborts the skill with `Shell command permission check failed`, hence `allowed-tools` above. Auto mode instead has Claude run it as a reviewed tool call, except in a forked skill that sets `agent`. For multi-line commands, open a fenced block with `` ```! ``.

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
> **Plugins package skills, agents, hooks, MCP and LSP servers, output styles, workflows, executables, and mods that change Claude Code's own behavior and interface. Experimental plugin components also include monitors and themes. The official marketplace is registered automatically unless policy disables it.**

**Key commands:**

```bash
claude plugin init my-plugin
/plugin                                      # Open the plugin manager
/plugin marketplace add <owner>/<repo>       # Or a git URL, local path, or marketplace.json URL
/plugin install code-review@claude-plugins-official   # Opens its details; pick a scope to install
/plugin install <plugin> --marketplace <source>       # Adds the marketplace first if needed
/plugin list
/plugin enable <plugin>@<marketplace>
/plugin disable <plugin>@<marketplace>
/plugin configure <plugin>@<marketplace>     # Set the plugin's options
/reload-plugins                              # Apply changes made outside the /plugin panel

# CLI equivalents for scripting and development
claude plugin marketplace add <source>
claude plugin install <plugin>@<marketplace> --scope project
claude plugin update <plugin>@<marketplace>
claude plugin configure <plugin>@<marketplace> --values-stdin < values.json
claude plugin validate ./my-plugin --strict  # --json for a machine-readable report
claude plugin eval ./my-plugin               # Run the plugin's eval suite
```

**Plugin structure:**

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json      # Optional manifest; name is required when present
├── agents/              # Custom agents (*.md frontmatter files)
├── skills/              # Custom skills (SKILL.md files)
├── hooks/
│   └── hooks.json       # Hooks under a top-level "hooks" key; a "modules" entry makes it a mod
├── commands/            # Legacy flat command format
├── output-styles/       # Output styles, listed as <plugin>:<name>
├── workflows/           # Workflow .js files
├── bin/                 # Executables on the Bash tool's PATH while enabled
├── settings.json        # Only agent and subagentStatusLine take effect
├── .mcp.json            # MCP server definitions
├── .lsp.json            # LSP server definitions
├── monitors/            # Experimental background monitors
└── themes/              # Experimental themes
```

**Plugin scopes:**

| Scope | Recorded in | Notes |
| :---- | :---------- | :---- |
| `--plugin-dir ./path` or `--plugin-url <zip-url>` | Session only | Development load as `<name>@inline`; not persisted |
| `user` | `~/.claude/settings.json` | Personal; default install scope |
| `project` | `.claude/settings.json` | Shared with the repository; collaborators still approve/install |
| `local` | `.claude/settings.local.json` | Private to this project |
| `managed` | Managed settings | Organization-controlled and read-only |

Plugins you or your organization turn on at claude.ai sync to terminal sessions signed in with that account as `<name>@synced`. Turn one off in `/plugin` (unless your organization requires it) or stop syncing with `"syncClaudeAiPlugins": false`.

Managed marketplace policy accepts `"owner/*"` entries in both `strictKnownMarketplaces` and `blockedMarketplaces` to allow or block every marketplace repository under a GitHub owner.

As of v2.1.224, marketplace entries can use an `archive` source to install a zip over HTTPS without git or npm. Add the optional 64-character `sha256` digest to pin the exact archive and make Claude Code reject a mismatched download. npm sources must be registry packages or `https` tarball links (git repositories and folders are refused) and are fetched with `npm pack --ignore-scripts`, so install scripts don't run.

**Plugin manifest (`.claude-plugin/plugin.json`):**

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "A Claude Code plugin",
  "defaultEnabled": false,
  "agents": ["./custom-agents/reviewer.md"],
  "skills": ["./extra-skills/"],
  "hooks": "./config/extra-hooks.json",
  "dependencies": ["required-plugin", { "name": "secrets-vault", "version": "~2.1.0" }]
}
```

The manifest is optional when all components use default locations; include it for metadata, dependencies, custom component paths, or default enablement. Add component keys only for non-default paths: `agents` lists `.md` files (not directories) and replaces the `agents/` scan, while `skills`, `hooks`, `mcpServers`, and `lspServers` add to their defaults. Project-declared plugins and skills-directory plugins are gated by workspace trust and user consent rather than silently installing executable components.

> Auto-update is on by default only for most official Anthropic marketplaces (such as `claude-plugins-official`) and marketplaces added from claude.ai; turn it on for community, third-party, and local marketplaces in `/plugin` → **Marketplaces**. Set `FORCE_AUTOUPDATE_PLUGINS=1` to force updates even when the main updater is disabled, or override with `CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS` for slow repos. Clones leave Git LFS files as pointers (`skipLfs` is no longer needed); run `git lfs pull` in the checkout if a plugin needs the real files.

Dependency behavior:

- `claude plugin enable` enables transitive dependencies automatically.
- `claude plugin disable` refuses when another enabled plugin depends on the target and reports the disable chain.
- `defaultEnabled: false` lets a plugin ship installed but disabled until the user explicitly enables it.

**Claude Mods:**

A mod is a plugin whose `hooks/hooks.json` lists a JavaScript or TypeScript module under `modules`. Its handlers run inside Claude Code, so a mod can draw panes and bands, add commands and tools, guard or rewrite tool calls (`tool.call`) and prompts (`prompt.submit`), and step in when agents spawn (`agent.spawn`). See the [mods docs](https://code.claude.com/docs/en/plugins/mods/overview).

- Ask Claude to build one: the built-in `plugin-authoring` skill writes it and, when you ask how to share it, gives the one command others run to install it. Test your own with `claude plugin test ./my-mod`.
- Before installing someone else's mod, run `claude plugin validate ./some-mod` to list the events it hooks and what it calls.
- The built-in **You should know** mod is a side agent that flags things you or Claude might miss. Turn it on with `/plugin enable cc-plugin-you-should-know@builtin` (first-party sessions with telemetry on).

> [!WARNING]
> Mods aren't sandboxed. They run with your permissions, can read your files and secrets, can see and rewrite prompts and tool calls, and can approve tool calls. Install them only from authors and marketplaces you trust. `claude --safe-mode` turns installed mods off for one session; `"disableAllHooks": true` in `~/.claude/settings.json` turns them off everywhere, along with your settings hooks.

---

<h2 id="worktree-isolation">Worktree Isolation</h2>

> [!Note]
> **The `--worktree` (`-w`) flag starts Claude in an isolated git worktree, allowing it to make changes in a separate branch without affecting your working directory.**

**Usage:**

```bash
# Start Claude in an isolated worktree
claude -w feature-auth

# Claude will:
# 1. Create .claude/worktrees/feature-auth/ on a new worktree-feature-auth branch from the configured base ref
# 2. Run in that isolated worktree
# 3. Keep edits and Bash commands isolated from the original checkout
# 4. On exit, offer to keep or remove it (clean worktrees of unnamed sessions are removed automatically)

# Branch from a PR: quote "#1234", or pass a GitHub PR or GitLab MR URL
claude -w "#1234"
```

Add `.claude/worktrees/` to `.gitignore`. A worktree is a fresh checkout, so list gitignored files it needs, such as `.env`, in a `.worktreeinclude` file (`.gitignore` syntax) at the project root to copy them in.

Choose the branch source in settings:

```json
{
  "worktree": {
    "baseRef": "fresh"
  }
}
```

`fresh` (the default) uses `origin/<default-branch>`; `head` uses the current local `HEAD`. Claude automatically removes a subagent worktree only when it made no changes. Background sessions commit **and** push completed work to preserve it, and create a draft PR only when the task explicitly calls for one; do not assume every worktree is automatically published or deleted.

For repositories where worktrees are impractical, `worktree.bgIsolation: "none"` lets background sessions edit the working copy directly without `EnterWorktree`. In large repositories, `worktree.symlinkDirectories` (for example `["node_modules", ".cache"]`) symlinks directories from the main checkout instead of duplicating them, and `worktree.sparsePaths` checks out only the listed directories (include `.claude` to keep project settings and rules).

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

> Subagents already run in the background by default; `background: true` keeps this one there even when Claude would wait for it. With `isolation: worktree`, multiple agents can work on separate features simultaneously.

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

Running `claude install` from an npm-based installation replaces it with the native build; the old `migrate-installer` command has been removed. Homebrew, WinGet, and the `apt`, `dnf`, and `apk` repositories update through their package managers. npm remains supported for compatibility, but Claude Code v2.1.198 and later require Node.js 22 or newer. If an npm 12 install leaves `claude` printing `Error: claude native binary not installed`, see [Installation / Node.js Issues](#installation--nodejs-issues).

See the [official setup guide](https://code.claude.com/docs/en/setup) for the current platform-specific installers.

---

<h2 id="claude-auth">Authentication CLI</h2>

> [!Note]
> **Manage authentication directly from the CLI without entering the REPL.**

```bash
# Log in to your Anthropic account
claude auth login

# Check current authentication status (JSON by default, --text for readable output; exits 1 when logged out)
claude auth status

# Log out
claude auth logout

# Print a one-year subscription OAuth token for CI and scripts (not saved)
claude setup-token
```

Supply the `setup-token` output as `CLAUDE_CODE_OAUTH_TOKEN`; [Initial Setup](#initial-setup) covers its plan requirements and limits.

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

# Start a prompt as a background session (in an untrusted folder it asks for trust, or exits if it can't ask)
claude --bg "review this branch and report the findings"

# Manage a background session by ID (attach and logs also accept part of its name)
claude attach <id|name>
claude logs <id|name>
claude stop <id>
claude respawn <id>
claude rm <id>

# Use a custom subagent definition for a foreground session
claude --agent code-reviewer "review the current branch"
```

`stop` keeps the conversation so it can be attached again. `rm` removes the session from agent view and deletes its worktree when that is safe; if the worktree has unpushed commits or can't be removed, `rm` refuses and prints the flag to pass on a second `rm`. The transcript stays on disk and resumable with `claude --resume`; use `claude purge [path]` (`--dry-run` to preview) only when you intend to delete a project's local transcripts and state; it doesn't touch anything stored by Anthropic. Options such as `--agent`, `--model`, `--effort`, and `--permission-mode` on `claude agents` set defaults for sessions dispatched from that view; inside it, `/model`, `/effort`, and `/fast` do the same.

Claude can use `ListAgents` and `SendMessage` to find and message your other sessions on the same machine (macOS, Linux including WSL 2, and Windows, with any provider). While connected to Remote Control, it can also start conversations with your Remote Control sessions on other machines and message your cloud sessions, which receive messages but can't reply; set `isolatePeerMachines: true` to approve each message before it leaves the machine. Without an explicit `crossSessionInbound` policy, same-class permission modes deliver automatically while messages between bypassed and non-bypassed sessions are held for approval; `dialogExpiry` controls when held dialogs expire.

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

# Bring back a session after stopping the server (works for about four hours)
claude remote-control --continue          # the session the server started with
claude remote-control --session-id <id>   # one session by ID

# Enable Remote Control on a normal interactive session
claude --remote-control

# Connect or disconnect the current interactive session
/remote-control
```

The server pre-creates a session and can accept multiple concurrent sessions. The default `same-dir` spawn mode shares the current checkout; use `--spawn worktree` when concurrent sessions need isolated files, or `--spawn session` for the classic single-session lifecycle. Pressing `w` while the server runs switches between `same-dir` and `worktree` and saves the choice as that folder's default. The local process must stay running.

Remote Control requires a claude.ai sign-in on a Pro, Max, Team, or Enterprise plan; on Team and Enterprise, an Owner must first enable it in admin settings. It is unavailable with API-key auth, Bedrock, Google Cloud's Agent Platform, Foundry, an `ANTHROPIC_BASE_URL` other than `api.anthropic.com`, a Claude apps gateway sign-in, or `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` or `DISABLE_GROWTHBOOK` set. In an untrusted folder, `claude remote-control` asks for trust before starting and exits with `Workspace not trusted` when it can't ask, so trust the folder first for unattended starts. `remoteControlAtStartup` can be enabled only in user or managed settings; project settings may disable it but cannot turn it on. See the [Remote Control guide](https://code.claude.com/docs/en/remote-control).

---

<h2 id="managed-settings">Managed Settings</h2>

> [!Note]
> **Enterprise administrators can enforce organization-wide settings through server-managed policy, MDM/registry policy, or a system-level `managed-settings.json`.**

**macOS (plist):**

Settings can be deployed via MDM profiles to `/Library/Managed Preferences/com.anthropic.claudecode.plist`.

**Windows (Registry):**

Settings can be deployed via Group Policy as JSON in a `REG_SZ` (or `REG_EXPAND_SZ`) value named `Settings` under `HKLM\SOFTWARE\Policies\ClaudeCode`. The same value under user-writable `HKCU\SOFTWARE\Policies\ClaudeCode` is only a fallback, ignored whenever an admin policy (HKLM or a managed settings file) is present, even an invalid one.

**Filesystem policy:**

- macOS: `/Library/Application Support/ClaudeCode/managed-settings.json`
- Linux/WSL: `/etc/claude-code/managed-settings.json`
- Windows: `C:\Program Files\ClaudeCode\managed-settings.json`

To split a file-based policy between teams, add `*.json` drop-ins to a `managed-settings.d/` directory beside it. Claude Code merges the main file first, then the drop-ins alphabetically (name them like `10-telemetry.json`): later single values win, lists combine, and nested blocks merge key by key. The legacy `C:\ProgramData\ClaudeCode\` path is not read.

Managed settings take precedence over command-line, local, project, and user settings and cannot be overridden by individual users. Machine-local policy environment variables merge per key with server-delivered settings rather than being discarded wholesale.

When several managed sources reach a machine, Claude Code by default (`managedSourcesBehavior: "first-wins"`) uses only the highest-ranked one that sets a policy key (remote settings from claude.ai or a Claude apps gateway, then MDM plist or HKLM, then `managed-settings.json` and drop-ins), apart from a few keys such as `env` that it reads from every source. Set `"managedSourcesBehavior": "merge"` in the top source to combine them; `/status` shows the source in use and any `Skipped sources`. A managed file, drop-in, plist, or HKLM value that isn't a valid JSON object stops Claude Code from starting, so validate policy JSON before you deploy it.

**Commonly enforced policy keys:**

- `allowedProviders` limits which API providers a machine may use, for example `["anthropic", "bedrock"]`.
- `deniedModels` blocks specific models even when `availableModels` allows them; `availableModelsMatch: "exact"` makes each `availableModels` ID allow only the version it names, so new releases stay blocked until listed (both managed-only).
- `modelPricing` makes cost figures in `/usage`, the status line, and telemetry use your contracted rates instead of list price.
- `managedMcpServers` gives every user a set of HTTP/SSE MCP servers alongside their own. `allowedMcpServers` now governs only servers users add, so a `managed-mcp.json` server it used to filter out loads after an upgrade; list it in `deniedMcpServers` to keep it off.

---

<h2 id="model-updates">Model Updates</h2>

### Model Guidance

> [!Note]
> **Prefer aliases for interactive work and pin a full provider model ID only when reproducibility matters. Alias mappings vary by account, organization policy, provider, region, and Claude Code version.**

| Alias | Current intent |
| :---- | :------------- |
| `default` | Account- and policy-appropriate default (currently Opus 5.5 everywhere except Microsoft Foundry, which uses Sonnet 4.5) |
| `best` | The model `fable` resolves to when Fable is available to you, otherwise the same model as `opus` |
| `fable` | Fable 5.1 (`claude-fable-5-1`); Fable 5 in Claude apps gateway sessions |
| `opus` | Newest allowed Opus (currently Opus 5.5 on the Anthropic API) |
| `sonnet` | Newest allowed Sonnet (currently Sonnet 5.5 on the Anthropic API) |
| `haiku` | Newest allowed Haiku (currently Haiku 5.5 on the Anthropic API) |
| `sonnet[1m]`, `opus[1m]` | 1M-context variants for models without a native 1M window; no effect on Sonnet 5+ or Opus 4.7+, which already have one |
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

# Try up to three fallbacks in order (works interactively too; persist a chain with the fallbackModel setting)
claude -p --model opus --fallback-model "sonnet,haiku" "review this diff"
```

Model selection tips:

- `/model` is the primary interactive selector; use its session-only option when you do not want to change the saved user default.
- `ANTHROPIC_MODEL` and the `model` setting provide non-interactive defaults. `ANTHROPIC_DEFAULT_MODEL` only sets the model new sessions start on, so `--model`, `ANTHROPIC_MODEL`, a `model` setting, or a saved `/model` pick overrides it. Provider deployments can map family aliases with `ANTHROPIC_DEFAULT_FABLE_MODEL`, `ANTHROPIC_DEFAULT_OPUS_MODEL`, `ANTHROPIC_DEFAULT_SONNET_MODEL`, and `ANTHROPIC_DEFAULT_HAIKU_MODEL`; `ANTHROPIC_SMALL_FAST_MODEL` is deprecated.
- Set `CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1` only when a compatible gateway exposes `/v1/models`; discovery can expose provider-prefixed IDs, and `CLAUDE_CODE_GATEWAY_MODEL_DISCOVERY_TIMEOUT_MS` extends its 3-second timeout. In `modelOverrides`, keys must be canonical Anthropic model IDs and provider/upstream IDs belong on the value side—non-Anthropic keys are ignored.
- Fast mode is a separate latency/cost toggle and currently supports Opus 5.5 (the default), Opus 5, and Opus 4.8 (the last two in research preview); auto mode is a separate permission mode and no longer needs an opt-in environment variable.
- `availableModels` restricts which models users can select; `modelPicker` (user or managed settings) adds labeled entries, such as provider-specific IDs, to the `/model` picker or replaces its lineup. See [Managed Settings](#managed-settings) for managed-only model controls.

Check the [official model configuration reference](https://code.claude.com/docs/en/model-config) before pinning a provider-specific ID.

---

<h2 id="theming--customization">Theming & Customization</h2>

Claude Code supports built-in themes, custom named themes, and session accent colors.

```bash
/theme          # Pick a theme or create a custom one
/color          # Pick a random session accent color
/color purple   # red, blue, green, yellow, purple, orange, pink, or cyan
/color default  # Reset to the theme's color
```

Custom themes can be edited as JSON under `~/.claude/themes/`, and plugins can ship themes for teams. The `Auto (match terminal)` theme follows terminal light/dark mode where supported.

**Output styles** set Claude's tone, response format, and working style for a session. `/output-style` lists them and `/output-style concise` switches (also under `/config`); the choice is saved to `.claude/settings.local.json`. Built-ins are Proactive, Concise, Explanatory, and Learning; custom styles are Markdown files in `~/.claude/output-styles/` or `.claude/output-styles/`, and plugins can ship them. `maxProseWidth` caps prose width in wide terminals while tables and code blocks keep the full width.

**Status line:** `/statusline show model, git branch and context % as a bar` has Claude Code write a script under `~/.claude/` and add it to your settings; with no argument it builds one from your shell prompt. To configure it yourself:

```json
{
  "statusLine": { "type": "command", "command": "~/.claude/statusline.sh", "padding": 2 }
}
```

The command receives session JSON on stdin, such as `model.display_name`, `context_window.used_percentage`, `cost.total_cost_usd`, `rate_limits`, and `prompt_cache`, and prints the line to show. A custom status line hides most footer hints, including `esc to interrupt`, and stays blank until you trust the folder. See [Customize your status line](https://code.claude.com/docs/en/statusline).

---

<h2 id="code-review">Code Review</h2>

Claude Code has separate review paths for correctness, cleanup, and broader branch-level review.

| Command | Behavior |
| :------ | :--------------- |
| `/code-review [level] [--fix] [--comment] [--max-findings <n>\|all\|default] [target]` | Background correctness review of the current diff, or of a PR number, branch, or path; remembers the last level and `--max-findings` choice |
| `/review ...` | Alias of `/code-review` |
| `/code-review --fix` | Applies review findings to the working tree, including reuse/simplification/efficiency suggestions |
| `/code-review --comment` | Posts findings as inline comments on the GitHub PR, or as a single note on a GitLab merge request through `glab` |
| `/simplify` | Cleanup-only review for reuse, simplification, efficiency, and altitude |
| `/code-review ultra [target]` or `/ultrareview [target]` | Cloud review in which a fleet of agents finds and independently verifies bugs; needs a claude.ai login; 3 one-time free runs on Pro and Max, then usage credits (typically \$5 to \$25 per review) |
| `claude ultrareview [target]` | Non-interactive CI/script entrypoint; waits for findings (`--timeout`, default 45 minutes) and supports `--json` and `--post` (one comment on a github.com PR). Requires workspace trust: in CI, append `--trust-workspace` after any PR number or base branch |

Use `/code-review` for local correctness review, `/simplify` for cleanup, and `/ultrareview` when you want a broader cloud review of a branch or PR.

For automatic GitHub PR reviews, Team and Enterprise organizations can use the managed [Code Review](https://code.claude.com/docs/en/code-review) service: an Owner installs the Claude GitHub App and sets when reviews run and the review level (Quick, Standard, or Deep, optionally per repository). Findings arrive as inline comments with a check run; put review-only guidance in `REVIEW.md`. Anyone with write access can comment `@claude review` (one review), `@claude review always` (also review later pushes), or `@claude review stop`.

---

<h2 id="insights">Claude Code Insights</h2>

> [!Note]
> **The `/insights` command generates an interactive HTML report analyzing your recent Claude Code sessions on this machine.**

**Run Insights:**

```bash
# In Claude Code terminal
/insights

# Open the generated report
start ~/.claude/usage-data/report.html     # Windows
open ~/.claude/usage-data/report.html      # Mac
xdg-open ~/.claude/usage-data/report.html  # Linux
```

Each run analyzes up to 200 sessions it hasn't seen before (skipping very short ones), keeps a timestamped copy beside `report.html`, and uses your usual provider and account, so it counts against your plan or API usage. Reports are deleted after `cleanupPeriodDays` (30 days by default). Not available in cloud sessions.

**How It Works:**

1. **Session Collection** - Pulls session logs from `~/.claude/projects/`, filters agent sub-sessions and short sessions
2. **Metadata Extraction** - Extracts duration, token usage, tools used, languages detected, git activity
3. **Facet Extraction** - Uses Claude (the default Opus model, or the session model where the account can't reach it) to analyze transcripts and identify goals, satisfaction signals, friction points
4. **Report Generation** - Creates interactive HTML report with personalized suggestions

**Report Sections:**

| Section               | Description                                                 |
| :-------------------- | :---------------------------------------------------------- |
| **What's Working**    | Your strengths and successful patterns                      |
| **What's Hindering**  | Where Claude struggled or where you caused friction         |
| **Friction Analysis** | Breakdown of problem areas with specific examples           |
| **Stats Dashboard**   | Tool usage, language breakdown, coding time distribution    |
| **Quick Wins**        | Copy-paste suggestions for CLAUDE.md improvements           |
| **Features to Try**   | Personalized recommendations (skills, hooks, headless mode), plus an estimate of permission prompts auto mode could have handled |

> Source transcripts and the generated report remain stored locally, but transcript-derived material sent to the model leaves the machine and follows the active provider and account's data-use and retention policy.

---

<h2 id="artifacts">Artifacts</h2>

> [!Note]
> **Artifacts turn session output, such as annotated diffs, dashboards, side-by-side options, or progress checklists, into a live page on claude.ai that updates as the session continues.**

Claude may publish one on its own when a page suits the output, or you can ask: `Make an artifact that walks through this PR with the diff annotated inline.`

- A new artifact is private to you. Share it from the page header with specific people or your whole organization (Team/Enterprise), or as a public link (on Team/Enterprise only after an Owner enables public sharing).
- `/artifacts` lists the artifacts you own or that are shared with you; `Ctrl+]` reopens the session's most recent one. Set `CLAUDE_CODE_ARTIFACT_AUTO_OPEN=0` to stop the browser opening on publish.
- Requires a Pro, Max, Team, or Enterprise plan, a claude.ai `/login`, and the Anthropic API (not Bedrock, Google Cloud's Agent Platform, or Foundry). Off by default with `claude -p`, in the Agent SDK and GitHub Action, and when `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` is set. To turn it off yourself, set `"enableArtifact": false` or `CLAUDE_CODE_DISABLE_ARTIFACT=1`.

> [!Warning]
> Claude builds the page from anything the session can read, including files and MCP connector data. Check what a page shows before you share it. See the [artifacts guide](https://code.claude.com/docs/en/artifacts).

---

<h2 id="mcp-integration">MCP Integration</h2>

<h3 id="understanding-mcp-model-context-protocol">Understanding MCP (Model Context Protocol)</h3>

#### What is MCP?

> MCP extends Claude Code with tools and resources exposed by trusted local processes or remote services.

MCP behavior to know:

- **HTTP** is the recommended transport for remote servers and falls back to the deprecated **SSE** transport for servers that only speak it. **stdio** is for local processes. WebSocket (`ws`) is added only as JSON (`.mcp.json` or `claude mcp add-json`) and supports header auth, not OAuth.
- MCP servers are available in `claude -p` workflows, including servers passed with `--mcp-config`; `--strict-mcp-config` ignores every other MCP source. A `-p` run shows no trust or approval prompt and connects a repository's `.mcp.json` servers even in an untrusted folder, so in repositories you don't control use `--bare` (only servers named on the command line) or `disabledMcpjsonServers`. It can't complete OAuth either; run `claude mcp login <name>` first.
- Use `/mcp` to inspect status, approve project servers, authenticate, disable servers, and reconnect after configuration changes.
- Tool names follow the `mcp__server__tool` pattern in permissions and hooks. Plugin-bundled servers use `mcp__plugin_<plugin>_<server>__<tool>`; rules and matchers written for the bare server name don't match them.
- **Tool search** is on by default, including behind a custom `ANTHROPIC_BASE_URL`: only tool names and server instructions load at startup, and Claude fetches a tool's full definition when needed (`ENABLE_TOOL_SEARCH=false` loads everything upfront). Text results over 50,000 characters (a server can raise one tool's limit to 500,000 with `_meta["anthropic/maxResultSizeChars"]`) or over `MAX_MCP_OUTPUT_TOKENS` (default 25,000) are saved to a file. Each enabled server still adds overhead, so enable only what a session needs.

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

Connectors load only with a claude.ai subscription login (not an API key, `apiKeyHelper`, Bedrock/Agent Platform/Foundry, or a `claude setup-token` token); check `/status` if one is missing. `"disableClaudeAiConnectors": true` in any settings file turns them off persistently; `/mcp` toggles one connector for the current project.

#### Channels (research preview)

A channel is an MCP server, installed as a plugin, that pushes events (chat messages, CI results, alerts) into an already running session so Claude can react and reply while you're away. The preview ships Telegram, Discord, and iMessage plugins (they need [Bun](https://bun.sh)). A channel delivers only when named at launch, e.g. `claude --channels plugin:telegram@claude-plugins-official`; being in `.mcp.json` isn't enough. Channels need claude.ai or Console API-key auth, aren't available on Bedrock/Agent Platform/Foundry, and Team/Enterprise admins must enable them (`channelsEnabled`). See [channels](https://code.claude.com/docs/en/channels).

<h3 id="mcp-setup--configuration">MCP Setup & Configuration</h3>

###### Basic MCP Commands

```bash
claude mcp list                         # List and health-check configured servers
claude mcp get <name>                   # Show one server's configuration/status
claude mcp add <name> -- <cmd> [args]   # Add a local stdio server
claude mcp add --transport http <name> <url>
claude mcp add-json <name> '<json>'     # Add one server entry as JSON (e.g. a WebSocket server)
claude mcp login <name>                 # Authenticate HTTP/SSE/claude.ai server
claude mcp logout <name>                # Clear its stored OAuth credentials
claude mcp remove <name>                # Add -s <scope> if the name exists in several scopes
```

###### MCP Configuration File Location

| Scope | CLI | Storage and visibility |
| :---- | :-- | :--------------------- |
| Local (default) | `-s local` | Current project only; stored under that project's entry in `~/.claude.json` |
| User | `-s user` | All projects for the current user; stored in `~/.claude.json` |
| Project | `-s project` | Shared in the repository root's `.mcp.json`; interactive sessions ask for approval (`claude -p` doesn't) |

## MCP Quick Start

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
# Basic syntax (everything after -- is the server command)
claude mcp add [options] <name> -- <command> [args...]

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

- Every remote entry needs a `type` (`http`, `sse`, or `ws`; `streamable-http` is an alias for `http`); without one, a `url` entry is skipped with a `has a "url" but no "type"` error.
- Use `${VAR}` or `${VAR:-default}` for secrets and machine-specific paths in `command`, `args`, `env`, `url`, or `headers`, e.g. `"Authorization": "Bearer ${MY_SERVICE_TOKEN}"`. Claude Code's own credential variables, such as `ANTHROPIC_API_KEY`, read as empty in a remote server's `url` and `headers`.
- `"alwaysLoad": true` keeps a server's tools out of tool search (startup waits up to 5 seconds for them); `false` defers all of them, even tools the server marks to load upfront.

**3. Restart Claude Code, then approve the server.** `.mcp.json` is read at session start; approve a new project server at the startup prompt or later in `/mcp`. If it still doesn't appear, `claude mcp list` shows a parse warning naming the malformed field.

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

### 4. Managed Scope (Organization)

- Deployed by administrators: `managed-mcp.json` takes exclusive control of MCP, while the `managedMcpServers` setting adds remote HTTP/SSE servers alongside users' own
- `allowedMcpServers` filters servers that users, plugins, and claude.ai add (the organization's own managed servers skip it); `deniedMcpServers` blocks a server from any source
- See [Control MCP server access](https://code.claude.com/docs/en/managed-mcp) for the available policies

**Precedence**: when a server is defined in several places, Claude Code uses the whole entry from the highest source, without merging fields: `managedMcpServers`, then local, project, user, plugin-provided servers, and claude.ai connectors. A plugin or connector pointing at an already configured URL or command counts as a duplicate.

## Practical MCP Server Recommendations

Choose servers from providers you trust and prefer vendor-hosted HTTP endpoints with OAuth over copying tokens into local stdio configuration. Claude Code already has built-in file, shell, search, and web tools, so add an MCP server only when it exposes a service or capability you do not already have.

Before installing a package-backed stdio server, verify its current publisher, source repository, release activity, permissions, and transitive install behavior. Several early `@modelcontextprotocol/server-*` examples found in old tutorials are archived or no longer the vendor-recommended integration.

## Common Errors and Solutions

### Error 1: Tool Name Too Long or Invalid

```
Tool "mcp__<server>__<tool>" is not sent to Claude: its name has <N> characters and the API accepts at most 128
```

**Solution**:

- The full tool name `mcp__<server>__<tool>` must fit in 128 characters; Claude Code leaves a longer tool out (the message above is in the `--debug` log) and keeps the server's other tools
- Give the server a shorter name, such as `db` instead of `analytics-database`, then update permission rules and hook matchers that used the old name
- Server names added with `claude mcp` can contain only letters, numbers, underscores, and hyphens; `claude mcp add` rejects reserved names such as `workspace`, `claude-in-chrome`, and `computer-use`, and a config entry that uses one is skipped with a warning

### Error 2: MCP Server Not Found

```
MCP server 'my-server' not found
```

**Solution**:

1. Check if scope settings are correct
2. Run `claude mcp list` to confirm server has been added
3. Ensure you're in the correct directory (for local scope)
4. Open `/mcp` to approve a project server or reconnect it

### Error 3: Server Fails After a Protocol Update

```
This server (Java MCP SDK 0.17.0 or older) rejected Claude Code's elicitation capability
```

**Solution**: Claude Code's v2 MCP client negotiates protocol revision 2026-07-28 by default. If an older server stops connecting or lists no tools after an update:

1. Run `claude update` and retry
2. Set `MCP_PROTOCOL_NEGOTIATION=legacy` to keep servers on the earlier handshake, or `MCP_SDK_GENERATION=v1` to use the older client (it skips the OAuth issuer check)
3. For the elicitation error above, add `"bareElicitationCapability": true` to that server's entry and restart, or upgrade the server to Java MCP SDK 0.17.1+
4. Report the failure to the server's maintainer; these are temporary workarounds

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

`/mcp reconnect all` retries every server that failed to connect or needs authentication.

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
4. **Review project servers before approval**: `.mcp.json` can launch local processes after a user trusts it, and `claude -p` connects them without asking; use `--bare` in repositories you don't control.
5. **Remove stale servers**: run `claude mcp logout <name>` before `claude mcp remove <name>` so OAuth tokens are revoked where the provider supports it (`remove` only deletes the local copy); use `claude mcp reset-project-choices` when approvals need to be reviewed again.

## Advanced Techniques

Use the current [Model Context Protocol SDKs](https://modelcontextprotocol.io/docs/sdk) when you need a custom server; the SDK APIs and transport recommendations have changed since the early `Server#setRequestHandler` examples. Prefer remote Streamable HTTP for deployed servers and stdio for a process Claude Code launches locally. To scaffold one, run `/plugin install mcp-server-dev@claude-plugins-official`, then `/mcp-server-dev:build-mcp-server`. Claude Code cuts server instructions and upfront tool descriptions at 4,096 characters, and descriptions loaded through tool search at 16,384.

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
- Plugin `hooks/hooks.json`, while the plugin is enabled
- Subagent frontmatter, only while that subagent runs (a `Stop` hook there becomes `SubagentStop`)
- Skill frontmatter, from when the skill is invoked until the session ends (`once: true` removes a skill hook after its first successful run)

> [!NOTE]
> A plugin that registers in-process JavaScript hooks is a [mod](https://code.claude.com/docs/en/plugins/mods/overview) (see [React to events](https://code.claude.com/docs/en/plugins/mods/events)). The hooks on this page keep working alongside mods, but unless the machine has managed settings or the session uses Team or Enterprise `/login` credentials, a mod can approve a call your `PreToolUse` hook blocked.

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

HTTP hooks receive the same JSON as a POST body and return the normal JSON output schema. Five handler types are supported: `command`, `http`, `mcp_tool`, `prompt`, and experimental `agent`. All matching handlers run in parallel, though concurrent `prompt` and `agent` handlers are capped per session (see [Hook Execution Details](#hook-execution-details)). The same handler defined in several settings files runs once; a plugin's or skill's copy runs separately.

`matcher` filters a field determined by the event. Tool events match tool names; other examples include session source, notification type, subagent type, config source, compaction trigger, target model (`PreModelSwitch`/`PostModelSwitch`, for example `claude-opus-5-5` or `.*opus.*`), and MCP server. Exact alternatives use `Edit|Write`; values containing other characters are JavaScript regular expressions, so `mcp__memory__.*` matches a server's tools. `*`, an empty string, or an omitted matcher matches every occurrence. Events such as `UserPromptSubmit`, `PostToolBatch`, `Stop`, `TaskCreated`, and `TaskCompleted` do not support matchers.

On tool events (`PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest`, `PermissionDenied`), a handler-level `if` can further filter the full tool call with one permission rule, for example `"Bash(git *)"` or `"Edit(*.ts)"` (no `&&`/`||`); on any other event, a handler with `if` set never runs. A handler also supports `timeout` and `statusMessage`; command handlers support `command` plus optional exec-form `args` and `shell` (`"bash"` or `"powershell"`). `command` and `http` handlers accept `"onFailure": "block"` to fail closed (see [Hook Output](#hook-output)). Use `/hooks` to inspect the merged configuration and its source; the menu is read-only, but the VS Code extension's Hooks dialog can also edit user, project, and local hooks.

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

You can use `${CLAUDE_PROJECT_DIR}` (the project root where the session started)
to reference scripts stored in your project, ensuring they work regardless of
Claude's current directory. It does not follow Claude into a worktree or after a
`cd`; read the input's `cwd` field when a hook needs Claude's current directory:

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
| Model | `PreModelSwitch`, `PostModelSwitch` |
| MCP interaction | `Elicitation`, `ElicitationResult` |

Important behavior:

- `PreToolUse` runs after tool arguments are formed but before execution and can allow, deny, ask, or rewrite supported inputs. `PostToolUse` and `PostToolUseFailure` cannot undo an operation that already ran.
- `PermissionRequest` runs when Claude Code is about to ask for permission, and also where no prompt can be shown (background subagents, or `-p` runs outside `dontAsk` mode); there, a call no hook decides is denied. Answer with the [`decision` object](#permissionrequest-decision-control), not exit code `2`, from a `command` or `http` handler (`agent` handlers don't run on this event). `PermissionDenied` fires when auto mode denies a call; return `hookSpecificOutput.retry: true` to tell the model it may retry (ignored when the classifier gave no verdict).
- `TaskCreated` refers to task-list creation and `TaskCompleted` to marking a task complete; they are not generic background-process completion events. The task tools are on by default only on Opus 4.7, Sonnet 4.6, Haiku 4.5, and earlier models (plus background and cloud sessions), so with current models such as Opus 5.5 `TaskCreated` doesn't fire in a regular session unless you opt in, for example with `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`.
- `WorktreeCreate` replaces the default creation behavior when configured, and any non-zero command-hook exit aborts creation. `WorktreeRemove` fires only when Claude Code removes a worktree a `WorktreeCreate` hook made (exiting a worktree session, `ExitWorktree`, deleting a background session, `claude remote-control` cleanup). It does not fire when a subagent or workflow agent finishes: those worktrees are kept, and Claude Code never deletes a hook-created branch, so clean them up yourself.
- `UserPromptSubmit` runs before a skill or custom slash command expands, so blocking the prompt also stops that command's embedded `!` shell commands. To target one command, use `UserPromptExpansion`, which matches on the command name.
- `PreModelSwitch` runs before a requested model switch (such as `/model`, `/config`, fast mode, or an SDK `set_model`) and can allow, deny, or ask via `hookSpecificOutput.permissionDecision`; exit `2`, `decision: "block"`, or a timeout (default 30 seconds) cancels it, and `ask` counts as a refusal outside an interactive `/model`. `PostModelSwitch` runs after any model change, including automatic fallback; it can't block, but its plain stdout or `additionalContext` reaches Claude with the next request. Both receive `from_model` and `to_model`.
- Exit code `2` is the blocking status for most blockable command-hook events; exit code `1` and HTTP error statuses are non-blocking unless `"onFailure": "block"` is set (see [Hook Output](#hook-output)).

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
  "message": "Claude needs your permission",
  "title": "Permission needed",
  "notification_type": "permission_prompt"
}
```

`title` is optional; matchers filter on `notification_type` (for example `permission_prompt`, `idle_prompt`, or `agent_needs_input`). Notification hooks can't block, and their `systemMessage` and `continue` are discarded, but a returned `terminalSequence` is still emitted.

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
from running indefinitely. As a backstop, Claude Code ends the turn after 8
consecutive stop-hook continuations with no tool call in between
(`CLAUDE_CODE_STOP_HOOK_BLOCK_CAP` changes the cap; `0` disables it). The input
also includes `background_tasks` and `session_crons`, so a hook can tell a
finished session from one waiting on background work.

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

For `manual`, `custom_instructions` is what the user passes into `/compact`, or
`null` when they pass nothing. For `auto` (which includes idle compaction),
`custom_instructions` is `null`.

```json
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "PreCompact",
  "trigger": "manual",
  "custom_instructions": null
}
```

#### SessionStart Input

`source` is `startup`, `resume`, `clear`, `compact`, or `fork`; optional fields include `model`, `agent_type` (with `--agent`), and `session_title`. Resuming or forking a transcript that already has a response adds staleness and cost fields (`seconds_since_last_response`, `context_tokens`, `prompt_cache_likely_expired`, `estimated_cache_write_usd`), so a hook can warn before an expensive re-cache.

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

- **Exit code 0**: success. If stdout is a JSON object, Claude Code parses it as structured output; malformed `{...}` stdout is reported as a hook error. Plain stdout is normally debug-only; for `UserPromptSubmit`, `UserPromptExpansion`, `SessionStart`, and `PostModelSwitch`, it is added to Claude's context.
- **Exit code 2**: blocking status for events that can still be blocked, with stderr as the reason. JSON on stdout is still read but can't override the block.
- **Other exit codes**: normally a non-blocking hook error; the action continues. If stdout is valid JSON, the JSON decides instead (unless `onFailure: "block"` is set). `WorktreeCreate` (any non-zero exit aborts creation) and `WorktreeRemove` (non-zero fails removal if the directory remains) are exceptions.

> [!WARNING]
> By default, a conventional `exit 1`, a missing script, a crash, a timeout, invalid JSON, or an HTTP hook's connection failure or non-2xx status does not enforce policy for most events: the action goes ahead. Use exit `2` or exit `0` with the event's structured JSON decision, and set `"onFailure": "block"` on `command` or `http` policy hooks (v2.1.295+) so any such failure acts like exit `2` (on `PermissionRequest`, it denies). It has no effect on `Stop`, `SubagentStop`, `TaskCompleted`, `TeammateIdle`, or `async`/`asyncRewake` hooks.

##### Exit Code 2 Behavior

| Event class | Exit-code-2 behavior |
| :---------- | :------------------- |
| `PreToolUse` | Blocks the tool call |
| `PermissionRequest` | Not honored (stderr is discarded); deny through the `decision` object instead |
| `PreModelSwitch` | Cancels the model switch and shows stderr to the user |
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
  "systemMessage": "Visible warning for the user"
}
```

`continue` defaults to `true`. `stopReason` is shown to the user when `continue` is false and stays in the conversation, so Claude sees it if work continues. `suppressOutput` is accepted but has no effect.

If `continue` is false, Claude stops processing after the hooks run.

- For `PreToolUse`, this is different from `"permissionDecision": "deny"`, which
  only blocks a specific tool call and provides automatic feedback to Claude.
- For `PostToolUse`, this is different from `"decision": "block"`, which
  provides automated feedback to Claude.
- For `UserPromptSubmit`, this prevents the prompt from being processed.
- For `Stop` and `SubagentStop`, this takes precedence over any
  `"decision": "block"` output.
- Wherever an event honors it, `"continue" = false` takes precedence over any
  `"decision": "block"` output. Some events ignore it, including `TaskCreated`,
  `ConfigChange`, `PreCompact`, `WorktreeRemove`, and side-effect events such
  as `Notification`.

##### `PreToolUse` Decision Control

`PreToolUse` hooks can control whether a tool call proceeds.

- `"allow"` skips the permission prompt, not the permission system: deny and ask
  rules (including managed ones) still apply, and some calls, such as
  network-path reads and plan-mode writes, are handled as if no hook ran. `permissionDecisionReason`
  goes only to the debug log. (_Deprecated `"approve"` maps to `"allow"`._)
- `"deny"` prevents the tool call from executing. `permissionDecisionReason` is
  shown to Claude. (_`"block"` value + `reason` has the same behavior._)
- `"ask"` asks the user to confirm the tool call in the UI.
  `permissionDecisionReason` is shown to the user but not to Claude.
- `"defer"` preserves the pending call for a later `-p --resume` round trip; it is honored only in non-interactive print mode.
- When hooks disagree, precedence is `deny` > `defer` > `ask` > `allow`.
- `updatedInput` replaces the complete tool input before execution; include every unchanged field. It works with `"allow"` or `"ask"`; permission rules check the rewritten input, unknown keys are dropped, and input the tool rejects denies the call. `additionalContext` adds context alongside the result.

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "My reason here",
    "additionalContext": "Optional context for Claude"
  }
}
```

The old top-level `decision: "approve"|"block"` and `reason` fields remain compatibility aliases for `PreToolUse` but are deprecated.

##### `PermissionRequest` Decision Control

`PermissionRequest` hooks answer the permission prompt through a `decision` object inside `hookSpecificOutput` (exit code `2` is not honored here).

- `behavior` is `"allow"` or `"deny"`; `"allow"` doesn't override a matching deny or ask rule.
- With `"allow"`, `updatedInput` replaces the whole tool input, and `updatedPermissions` applies updates such as `addRules`, `setMode`, or `addDirectories` to a `destination` (`session`, `localSettings`, `projectSettings`, or `userSettings`).
- With `"deny"`, `message` tells Claude why, and `interrupt: true` stops Claude.

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PermissionRequest",
    "decision": {
      "behavior": "allow",
      "updatedInput": { "command": "npm run lint" }
    }
  }
}
```

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

Tools from a plugin-bundled server are named `mcp__plugin_<plugin>_<server>__<tool>`, so a matcher written for the bare server name doesn't catch them.

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

#### Workspace Trust

Interactive sessions hold back hooks from every settings file, even `~/.claude/settings.json`, until you accept the folder's workspace trust dialog. `-p` and SDK runs (CI jobs included) never show the dialog, yet a repository's committed `.claude/settings.json` hooks still run (its `permissions.allow` rules don't; see [Security & Permissions](#security--permissions)). Before you script `claude -p` over a repository you didn't write, review its `.claude/` settings, start with `--bare`, or pass `--settings '{"disableAllHooks": true}'`.

<h3 id="hooks-security">Hooks Security Considerations</h3>

Here are some key practices for writing more secure hooks:

1. **Treat hook input as untrusted data** - Parse JSON and validate by type and intent; a substring check for `..` is not a complete path-boundary check.
2. **Prefer exec-form arguments** - Keep executable and arguments separate; otherwise quote every shell expansion.
3. **Resolve and constrain paths** - Compare canonical paths against an explicit allowed root, and use `${CLAUDE_PROJECT_DIR}` for project scripts.
4. **Keep secrets out of config and output** - Use secret managers and a handler's HTTP `allowedEnvVars`; administrators can narrow the global ceiling with `httpHookAllowedEnvVars`. Hook stdout can enter logs or model context.
5. **Apply managed controls where needed** - Administrators can restrict hook sources with `allowManagedHooksOnly` and allowlist HTTP hook URLs/environment variables.

#### Configuration Safety

Direct settings edits are normally picked up by the file watcher. `/hooks` is a read-only browser for the merged configuration and its source; edit the originating settings, plugin, skill, or agent file to change it. Project subagent hooks do not run until the workspace that supplied the agent definition has been trusted; a `-p` run doesn't count as accepting trust.

To pause every hook without deleting it, set `"disableAllHooks": true`. Normal precedence applies (a project's `false` overrides your user-level `true`; `--settings` wins for one run), and only managed settings can disable managed hooks.

<h3 id="hook-execution-details">Hook Execution Details</h3>

- **Timeouts**: default 600 seconds for `command`, `http`, and `mcp_tool` (30 on `UserPromptSubmit` and the model-switch events, 10 on `MessageDisplay`); 30 seconds for `prompt`; 60 seconds for `agent`. `SessionEnd` hooks share a 1.5-second budget unless a per-hook `timeout` raises it (up to 60 seconds).
  - A timed-out hook is canceled and its output discarded; see the warning under [Hook Output](#hook-output) to make timeouts block.
  - A handler timeout does not cancel other parallel handlers.
- **Parallelization**: Matching hooks run in parallel, but `prompt` and `agent` hooks are throttled per session (24 at once, subagents included, plus up to 12 that have waited past their event's timeout); a queued hook's `timeout` starts when it starts.
- **Background hooks**: `"async": true` (command hooks only) runs the hook without blocking Claude; it can't block the action, and its output reaches Claude on the next turn. With `"asyncRewake": true`, exit `2` also wakes Claude with the hook's stderr.
- **Environment**: Runs in current directory with Claude Code's environment
  - `${CLAUDE_PROJECT_DIR}` is the project root where the session started; it doesn't follow Claude into a worktree or after `cd` (read the input's `cwd` for that).
  - `SessionStart`, `Setup`, `CwdChanged`, and `FileChanged` hooks can append `export` lines to `$CLAUDE_ENV_FILE` to set variables for later Bash commands.
- **Input**: JSON via stdin for command hooks or an HTTP POST body for HTTP hooks
- **Output**: stdout counts as JSON only when it is a single JSON object with nothing around it; see [Hook Output](#hook-output) for how it combines with exit codes. HTTP hooks need a 2xx response with an empty or JSON-object body.
  - `additionalContext`, `systemMessage`, and plain stdout are capped at 10,000 characters each; Claude gets longer output as a file path plus a 2,000-character preview.

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
- **JSON silently ignored** - Text printed before the JSON (often a shell-profile `echo`) or a misplaced field (`permissionDecision` outside `hookSpecificOutput`); search the debug log for `Hook output does not start with {` or `Hook JSON output had unrecognized keys`
- **Skill hooks missing from `/hooks`** - Frontmatter hooks register only after the skill is invoked
- **Windows: `blocking because Git Bash wasn't found`** - Without Git Bash, a failing `PreToolUse` or `PermissionRequest` command hook blocks the call; install Git for Windows (or set `CLAUDE_CODE_GIT_BASH_PATH`), or set `"onFailure": "continue"` to let calls through

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

`claude --debug` (or `--debug='hooks'`) writes to `~/.claude/debug/<session-id>.txt`, not to the terminal; use `claude --debug-file ./claude-hooks.log` and `tail -f` to watch live, or `/debug` to turn logging on mid-session. Log wording is not a stable API and varies by release. A `PostToolUse` hook on `Write` that prints `hook-ran` logs entries like:

```
2026-07-19T02:03:24.382Z [DEBUG] Hook output does not start with {, treating as plain text
2026-07-19T02:03:24.382Z [DEBUG] "Hook PostToolUse:Write (PostToolUse) success:\nhook-ran"
```

Command hooks on most events also log a `Hooks:` line with command, outcome, and duration, such as `Hooks: PostToolUse:Write [.claude/hooks/log-write.sh] finished with status 0 (31ms)`; search for these to find a slow or timed-out hook. `CLAUDE_CODE_DEBUG_LOG_LEVEL=verbose` adds matcher counts.

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

# Bare "Bash" pre-approves EVERY shell command; prefer the scoped rules below
claude --allowed-tools "Read" "Edit" "Bash"

# Scoped permissions (all git commands)
claude --allowed-tools "Bash(git *)"

# Multiple scopes (git + npm)
claude --allowed-tools "Bash(git *)" "Bash(npm *)"

# Allow rules only skip prompts; --tools limits which built-in tools exist at all
claude --tools "Read,Edit,Bash"
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

- `Edit(path)` covers built-in file-editing tools and `Read(path)` covers built-in readers; path-qualified `Write`, `NotebookEdit`, `Glob`, or `MultiEdit` rules never match. A `Read` deny also blocks Edit and Write (not NotebookEdit) on that path.
- A single leading `/` anchors at the settings source: the working directory for project and local settings, `~/.claude/` for user settings. Use `//` for absolute paths.
- Bash and PowerShell compound commands are parsed by subcommand, and every subcommand must be allowed. Put `*` after the subcommand: `Bash(git * main)` also matches every subcommand and inserted options such as `-c` (Claude Code warns at startup).
- Project `permissions.allow` rules and `additionalDirectories` wait for the interactive workspace trust dialog, so `claude -p` and SDK runs in a never-trusted checkout (such as CI) ignore them with a `this workspace has not been trusted` warning; pass rules with `--allowedTools` or `--settings` there. Deny and ask rules always apply.
- Auto mode sets aside allow rules that amount to arbitrary code execution (bare `Bash`/`Bash(*)`, `PowerShell(*)`, interpreter wildcards like `Bash(python*)`, package-manager runs like `Bash(npm run *)`, `Agent`, `Monitor`) until you leave it; narrow rules like `Bash(npm test)` still apply.

Permission rules are an application boundary for built-in tools, not an OS boundary for arbitrary scripts—use the sandbox for process-level filesystem/network enforcement. `permissions.blockReadsOutsideWorkingDirectories: true` makes the file tools refuse reads outside the working directories in every mode, bypass included.

Permission modes are `manual`/`default`, `acceptEdits`, `plan`, `auto`, `dontAsk`, and `bypassPermissions`. Auto mode classifies tool calls in the background; `dontAsk` denies anything not pre-approved. With no mode configured, interactive terminal and VS Code sessions start in `auto`; `claude -p` and Agent SDK runs start in `default` and deny any call that needs approval unless an allow rule, hook, `canUseTool` callback, or `--permission-prompt-tool` approves it. Set the mode with `--permission-mode` or `permissions.defaultMode` (a repository's `.claude/` settings can't select `auto` or `bypassPermissions`). See the [permissions reference](https://code.claude.com/docs/en/permissions) for current rule matching and mode details.

<h2 id="dangerous-mode">Dangerous Mode</h2>

> [!Warning]
> Use bypass mode only in an isolated container or VM whose credentials, network, mounts, and data are intentionally disposable. It skips normal permission prompts, including writes to protected paths.
>
> `claude --dangerously-skip-permissions`

Deny rules still apply; allow rules have no effect. Explicit `ask` rules, organization-gated connector tools, `AskUserQuestion`, and MCP tools marked as requiring user interaction still prompt, as does `rm`/`rmdir` on a critical path such as `/`, a top-level directory or drive root, your home directory, or the working directory and its parents. Unanswered, the terminal prompt denies after two minutes with a safer-rewrite hint (launch with `CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT=1` to remove the limit); VS Code and the Desktop app deny at once.

On Linux and macOS, bypass mode refuses to start as root or under `sudo` outside a recognized sandbox, so run containers as a non-root user. `--allow-dangerously-skip-permissions` adds bypass to the Shift+Tab cycle without starting in it. Administrators can block bypass and auto modes by setting `permissions.disableBypassPermissionsMode` and `permissions.disableAutoMode` to `"disable"` in managed settings.

<h1 id="automation--integration">Automation & Integration</h1>

<h2 id="automation--scripting-with-claude-code">Automation & Scripting with Claude Code</h2>

> GitHub Actions you can copy/paste :p

1. Run `/install-github-app` for guided setup (github.com only; needs repo admin access and `gh auth login`). To set up manually, install the [Claude GitHub App](https://github.com/apps/claude); the Claude Code Action authenticates as it unless you pass `github_token`, hence `id-token: write`.
2. In your repo, add a secret **`ANTHROPIC_API_KEY`** (a Claude Console API key) under Settings → Secrets and variables → Actions → New repository secret. The Claude Code Action can use a subscription token from `claude setup-token` instead (secret `CLAUDE_CODE_OAUTH_TOKEN`, input `claude_code_oauth_token`); the other two workflows need the API key.
3. Copy the workflows below into **`.github/workflows/`**.
4. Open a **test PR** (or a new issue) to see them run.

> [!NOTE]
> These workflows are GitHub Actions only. On GitLab, use the GitLab-maintained [Claude Code GitLab CI/CD](https://code.claude.com/docs/en/gitlab-ci-cd) integration (beta).

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
> The dedicated security-review Action is not hardened against prompt injection. Run it only on trusted PRs and turn on **Require approval for all external contributors**. Public repositories withhold secrets from fork PR runs, so the job reviews only same-repository branches; on private repositories, leave **Send secrets to workflows from pull requests** off.

> [!TIP]
> No workflow needed: `/security-review` checks the current branch, the `security-guidance` plugin reviews Claude's edits in-session, the `claude-security` plugin runs a multi-agent scan with patches (`/plugin install <name>@claude-plugins-official`), and managed [Code Review](#code-review) (Team/Enterprise) reviews PRs for correctness and security.

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
          # Set explicitly: the action's default (claude-opus-4-1-20250805) is retired
          claude-model: "claude-opus-5-5"
          # Optional:
          # exclude-directories: "docs,examples"
          # claudecode-timeout: "20"
          # run-every-commit: "true"   # default reviews each PR only once
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
      CLAUDE_MODEL: claude-sonnet-5-5
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
              max_tokens: 16000,
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
          # Current models can return a thinking block before the text block
          jq -r '.content[]? | select(.type == "text") | .text' out.json > triage.json || echo '{}' > triage.json
          # Validate JSON to avoid posting garbage
          jq -e . triage.json >/dev/null 2>&1 || echo '{"labels":[],"severity":"low","duplicate_url":"","comment_markdown":"(triage failed to parse)"}' > triage.json

      - name: Apply labels (optional)
        if: ${{ false }} # flip to `true` to auto-apply labels
        uses: actions/github-script@v9
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
        uses: actions/github-script@v9
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
> - **Model selection**: the triage workflow and the security-review Action's `claude-model` need a Claude API model ID such as `claude-sonnet-5-5` (or `claude-haiku-5-5` for cheaper triage), not Claude Code aliases like `sonnet`. Current models think by default and thinking counts toward `max_tokens`, hence the 16000 limit and reading the `text` block.
> - **Secrets**: `ANTHROPIC_API_KEY` is required (the Claude Code Action can use `claude_code_oauth_token` instead). The built‑in `GITHUB_TOKEN` is sufficient for posting comments and applying labels.
> - **Permissions**: each workflow declares the privileges it needs (`pull-requests: write` and/or `issues: write`, plus `id-token: write` for the Claude Code Action's GitHub App authentication). Adjust only if your org requires stricter policies.
> - **Scope**: use `paths:` filters on triggers to limit when workflows run (e.g., only for `/src` or exclude `/docs`).
>
> ### Troubleshooting
>
> Check the **Actions logs** first—most issues are missing secrets/permissions or a mis‑indented YAML block.
>
> - **No comments appear on PRs**: Verify the Claude GitHub App is installed and the workflow has `pull-requests: write` permission.
> - **Auto review fails for some PRs**: the Claude Code Action rejects triggering users without write access (set `allowed_non_write_users` and pass your own `github_token`) and bots such as Dependabot unless listed in `allowed_bots`. Fork PRs on public repositories get no secrets, so they always fail.
> - **403 when applying labels**: Ensure the job or step has `issues: write`. The default `GITHUB_TOKEN` must have access to this repo.
> - **Anthropic API errors**: Confirm `ANTHROPIC_API_KEY` is set at repository (or org) level and not expired.
> - **“YAML not well‑formed”**: Validate spacing—two spaces per nesting level; no tabs.

---

<h1 id="help--troubleshooting">Help & Troubleshooting</h1>

> [!TIP]
> **Q: `claude` is installed but the command is not found. What should I check?**
>
> > **A:** Open a new terminal, locate every installation with `Get-Command claude -All` (PowerShell) or `which -a claude` (Bash/Zsh), and ensure the native launcher directory is on `PATH`. See [`Windows`](#windowspath) or [`macOS/Linux`](#linuxpath).
>
> **Q:** **Which Node.js version do I need?**
>
> > **A:** Native, Homebrew, WinGet, apt, dnf, and apk installations do not need Node.js. The npm installation requires **Node.js 22+** as of Claude Code v2.1.198, and npm 12 needs one extra step (see [Installation / Node.js Issues](#installation--nodejs-issues)).
>
> **Q: Where do I see diagnostics and logs?**
>
> > **A:** Run `claude doctor` for a read-only health report, `/doctor` inside a session for a checkup that can offer fixes, and `/status` for the active login and settings sources. Debug logging is off by default: launch with `claude --debug` or `claude --debug-file <path>`, or run `/debug [issue]` mid-session to start logging and have Claude diagnose from the log. Look up exact messages in the [error reference](https://code.claude.com/docs/en/errors); when CLAUDE.md, settings, hooks, MCP servers, or skills don't take effect, follow [Debug your configuration](https://code.claude.com/docs/en/debug-your-config). [Debug Quick Commands](#debug-quick-commands) also covers safe mode and `/feedback`.
>
> **Q: Do I need to reboot after editing PATH?**
>
> > **A: No reboot required, but you <mark>must</mark> open a <mark>new</mark> terminal window.** A terminal inside an editor such as VS Code or a JetBrains IDE takes its PATH from the editor, so quit and reopen the editor itself.

<table><td>

<h2 id="debug-quick-commands">Debug Quick Commands</h2>

_`claude doctor` checks the install, auto-updates, settings files, and Remote Control eligibility. Debug logs go to `~/.claude/debug/<session-id>.txt` (or the `--debug-file` path), and only while debug logging is on._

> [!Note]
>
> ```bash
> claude                  # Open Claude UI (if on PATH)
> claude --version        # Show the installed CLI version
> claude update           # Native installer: check for and install an update
>
> claude doctor           # Read-only install and settings diagnostics
> /doctor                 # Full checkup from an interactive session
> /status                 # Active login and settings sources
>
> claude --debug          # Launch with diagnostic logging
> claude --debug-file ./claude-debug.log
> /debug [issue]          # Start logging mid-session; Claude reads the log
> claude --safe-mode      # Start with your customizations disabled
> /feedback               # Report a problem to Anthropic
>
> Get-Command claude -All # Windows PowerShell: find conflicting installs
> where.exe claude        # Windows CMD/PowerShell
> which -a claude         # macOS/Linux (bash/zsh)
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
> which -a claude
> claude doctor
> ```

For an npm installation only, the launcher is under the global npm prefix. Prefer migrating with `claude install` (`claude install stable` also moves auto-updates to the stable channel); otherwise inspect the prefix with `npm prefix -g` and add its executable directory to `PATH`.

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
>
> The `.cmd` launcher also sidesteps `running scripts is disabled on this system` (`PSSecurityException`) for `claude.ps1` or `npm.ps1`. To allow npm's `.ps1` shims instead, run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`.
>
> > **`'claude' is not recognized` right after an update (native install):**
>
> If `%USERPROFILE%\.local\bin` is on `PATH` but has no `claude.exe`, a failed update may have left only a `claude.exe.old.<timestamp>` backup. Restore the newest backup, or rerun `irm https://claude.ai/install.ps1 | iex` if there is none:
>
> ```powershell
> Get-ChildItem "$env:USERPROFILE\.local\bin\claude.exe.old.*" | Sort-Object Name | Select-Object -Last 1 | Rename-Item -NewName claude.exe
> claude --version
> ```

</td></table>

<table><td>

<h3 id="installation--nodejs-issues">Installation / Node.js Issues</h3>

**Native repair (recommended; no Node.js required)**

```bash
claude doctor
claude install --force stable
```

The channel you pass also becomes your auto-update channel. `latest` is the default; a newly launched model can need a newer version than `stable` serves.

**Package-manager installs**

```bash
brew upgrade claude-code          # or claude-code@latest
winget upgrade Anthropic.ClaudeCode
sudo apt update && sudo apt upgrade claude-code   # Debian/Ubuntu
sudo dnf upgrade claude-code                      # Fedora/RHEL
apk update && apk upgrade claude-code             # Alpine
```

**npm install (Node.js 22+)**

```bash
node --version
npm --version
npm install -g @anthropic-ai/claude-code@latest
```

> [!Warning]
> **npm 12 skips Claude Code's postinstall step by default**, so `claude` stays a placeholder that prints `Error: claude native binary not installed.` (on Windows the shell can't run it). Switch to the native installer and run `npm uninstall -g @anthropic-ai/claude-code`, or allow the step for your user and reinstall (update npm 12.0.x to 12.1+ first):
>
> ```bash
> npm config get allow-scripts   # add any packages listed here to the next command's list
> npm config set "allow-scripts=@anthropic-ai/claude-code" --location=user
> npm install -g @anthropic-ai/claude-code@latest
> ```
>
> The same error appears when optional dependencies are skipped (`--omit=optional`, or `optional=false` in `.npmrc`), because the native binary ships as one.

Do not use `sudo npm install -g`. If two installations conflict, locate both before removing the one you no longer want.

</td></table>

<table><td>

<h3 id="authentication-issues">Authentication Issues</h3>
> Subscription users should authenticate through the browser flow. API keys and third-party provider credentials are separate deployment paths.

```bash
claude auth status
claude auth login
claude auth login --console  # Console/API billing instead of subscription login
claude auth logout           # Then log in again to reset a broken login
```

If a subscription login unexpectedly behaves like API billing, another credential is outranking it. Claude Code uses the first it finds: a cloud provider (`CLAUDE_CODE_USE_BEDROCK`, `CLAUDE_CODE_USE_VERTEX`, or `CLAUDE_CODE_USE_FOUNDRY`), `ANTHROPIC_AUTH_TOKEN`, an approved `ANTHROPIC_API_KEY` (always used with `-p`; toggle **Use custom API key** in `/config`), `apiKeyHelper`, `CLAUDE_CODE_OAUTH_TOKEN`, a profile named in `ANTHROPIC_PROFILE` or federation credentials, and only then your `/login`. A signed-in Claude apps gateway session outranks all of them. `/status` (or `authMethod` in `claude auth status`) shows which one is active. Do not print secret values into logs. While API-key or provider auth is active, the subscription-only features listed under [Initial Setup](#initial-setup) stay unavailable.

If the browser doesn't open or ends on a failed `localhost` page (WSL2, SSH, containers), press `c` at the login prompt to copy the URL, open it on your local machine, and paste the code it shows at `Paste code here`; if pasting does nothing, use `claude auth login`, which reads the code from standard input. On macOS, if `claude doctor` warns `macOS Keychain is not writable`, run `security unlock-keychain ~/Library/Keychains/login.keychain-db`.

Use `claude --debug-file ./claude-auth-debug.log` for a reproducible error report, then remove credentials from that log before sharing it.

</td></table>

<table><td>

<h3 id="permission--allowed-tools-issues">Permission / Allowed Tools Issues</h3>

**Inspect permissions**

```bash
/permissions
```

The UI shows each allow/ask/deny rule and its source, and also opens mid-turn (changes apply from Claude's next tool call). In auto mode, **Recently denied** lists blocked actions (`r` retries one with manual approval), and the **Auto mode** tab edits the classifier rules. To reset a scope, edit the originating `settings.json` and remove the rules or set empty arrays:

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

Start with `/mcp`: it shows each server's status, approves `.mcp.json` servers whose approval prompt was dismissed, and offers **Reconnect** for a server that connects but lists no tools. A server that fails to start often has a relative path in `command` or `args`, which resolves against your launch directory; use absolute paths.

```bash
claude --debug='mcp'
claude --debug-file ./claude-mcp-debug.log
```

> **List & remove MCP servers**

```bash
claude mcp list
claude mcp get <server-name>
claude mcp login <server-name>
claude mcp logout <server-name>
claude mcp remove <server-name>
```

</td></table>

<table><td>

<h2 id="full-clean-reinstall-windows--powershell">Repair or Reinstall (Windows / PowerShell)</h2>

Start with a non-destructive repair. This preserves settings, MCP configuration, credentials, sessions, and project history:

```powershell
claude doctor
claude install --force stable   # or latest; this also sets your auto-update channel
Get-Command claude -All
claude --version
```

If `claude` itself won't start, rerun the installer with `irm https://claude.ai/install.ps1 | iex`. For WinGet, use `winget upgrade Anthropic.ClaudeCode` or reinstall that package. For npm, use Node.js 22+ and `npm install -g @anthropic-ai/claude-code@latest`; on npm 12, follow the [npm 12 warning](#installation--nodejs-issues) first.

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
which -a claude
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
- **Claude state, sessions, and caches:** `~/.claude/` (`CLAUDE_CONFIG_DIR` relocates it together with `~/.claude.json`)
- **Credentials:** macOS Keychain; Linux and Windows `~/.claude/.credentials.json` (also the macOS fallback when the Keychain rejects writes)
- **Debug logs:** `~/.claude/debug/<session-id>.txt` while debug logging is on, unless `--debug-file` sets a path
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
   - `--allowed-tools` only pre-approves tools. To remove tools, use `--tools` (built-in tools) or `--disallowed-tools` (also MCP tools, e.g. `"mcp__*"`).

   ```bash
   # Pre-approve only what this run needs; everything else follows the permission mode
   claude --allowed-tools "Read" "Edit" "Bash(npm run test *)"
   # Make only these built-in tools available
   claude --tools "Read,Edit,Bash"
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

   New interactive terminal and VS Code sessions start in **auto mode** unless `permissions.defaultMode` or `--permission-mode` says otherwise: a classifier approves or blocks actions instead of prompting you, and broad allow rules that permit arbitrary code execution (such as `Bash(*)` or wildcarded interpreters) are set aside. Put every "never" rule in `permissions.deny` or a hook. To approve each action yourself, use `"defaultMode": "default"` or `--permission-mode manual`; `claude -p` runs with no configured mode already start in Manual mode.

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
   - For unattended runs, restrict tools with `--tools`, pre-approve narrowly with `--allowed-tools`, and add `--permission-mode dontAsk` so anything else is refused; keep deny rules and the sandbox in place where supported.
   - Run scripted, CI, and cron jobs as `claude --bare -p ...`: without `--bare`, `-p` runs the repository's hooks and `.mcp.json` servers with no workspace-trust dialog. Bare mode skips them and never reads your claude.ai login or keychain, so supply `ANTHROPIC_API_KEY`, an `apiKeyHelper` via `--settings`, or cloud-provider credentials.

---

<h2 id="performance-tips">Performance Tips</h2>

1. **Use machine‑readable output in automations**

   ```bash
   claude -p "summarize this error log" --output-format json
   # valid: text | json | stream-json
   ```

2. **Bound non‑interactive work**

   ```bash
   claude -p "run type checks and summarize failures" --effort low --max-turns 3 --max-budget-usd 1.00
   ```

   Effort is the main control for how long Claude thinks; adaptive-reasoning models (such as Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable) ignore positive `MAX_THINKING_TOKENS` values.

3. **Keep sessions tidy**

   In `~/.claude/settings.json`:

   ```json
   {
     "cleanupPeriodDays": 20
   }
   ```

4. **Limit context scope**

   ```bash
   # Focus on one package: start Claude there (loads that subtree plus ancestor CLAUDE.md files)
   cd packages/api && claude
   # --add-dir grants access to more directories; use it only when the task spans them
   claude --add-dir ../shared
   ```

   From a monorepo root, `claudeMdExcludes` skips CLAUDE.md files for packages you never work in. See the [large codebases guide](https://code.claude.com/docs/en/large-codebases).

5. **Pick the right model and effort**
  - CLI aliases: `--model opus` (Opus 5.5 on the Anthropic API), `sonnet`, `haiku`, `fable`, `best`, or `opusplan`.
  - Opus 5.5, Sonnet 5.5, and Haiku 5.5 default to `medium` effort: use `/effort high` or `xhigh` for tricky work, save `max` for hard problems (it tends to overthink ordinary tasks), and select `fable` (Fable 5.1) explicitly for the hardest, longest-running tasks.
  - For reproducibility in settings, pin a full model ID only when automatic family upgrades are undesirable.

6. **Use rendering and accessibility controls deliberately**
  - Use `--ax-screen-reader` for flat screen-reader-friendly output and `/config` for theme, motion, and terminal behavior instead of copying undocumented environment toggles.

7. **Inspect usage by source**

  ```bash
  /usage
  ```

  On Pro, Max, Team, and Enterprise plans, `/usage` breaks down recent usage by skills, subagents, plugins, MCP servers, and your heaviest `/loop` tasks, and flags costly patterns such as max effort or always-on context; press `f` to apply its fixes. When a claude.ai usage limit resets, a waiting session continues automatically unless you turn off "Continue automatically at usage limit" in `/config`.

8. **Keep the prompt cache working for you**
  - A 200K+ token terminal conversation left idle for about 54 minutes is compacted before its one-hour cache expires, so your next message doesn't reprocess it all. Turn this off with `Idle compaction` in `/config` (or `"idleCompaction": false`); `CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS` changes the threshold.
  - API-key and cloud-provider sessions cache for 5 minutes by default; `"promptCacheTtl": "1h"` keeps the main conversation cached through longer breaks (1-hour cache writes cost more), and `subagentPromptCacheTtl` does the same for subagents.

---

<h2 id="monitoring--alerting">Monitoring & Alerting</h2>

**1) Health checks**
Use the built‑in **doctor** command to verify installation and environment.

```bash
# Every 15 minutes (a crontab entry must stay on one line)
*/15 * * * * "$HOME/.local/bin/claude" doctor >/dev/null 2>&1 || mail -s "Claude Code doctor failed" admin@company.com </dev/null
```

**2) Log analysis batch job**

```bash
#!/usr/bin/env bash
# daily-analysis.sh; crontab entry: 0 6 * * * /path/to/daily-analysis.sh
# --bare needs ANTHROPIC_API_KEY (or provider credentials); --json-schema output lands in .structured_output
tail -1000 /var/log/app.log |
  claude --bare -p "Analyze errors, regressions, and suspect patterns." \
    --output-format json \
    --json-schema '{"type":"object","properties":{"findings":{"type":"array","items":{"type":"string"}}},"required":["findings"]}' |
  jq '.structured_output' > /tmp/daily-analysis.json
```

**3) Telemetry (optional)**
Claude Code emits OpenTelemetry metrics/events that you can ship to your observability stack (Datadog, Honeycomb, Prometheus/Grafana, etc.):

```bash
export CLAUDE_CODE_ENABLE_TELEMETRY=1          # required
export OTEL_METRICS_EXPORTER=otlp              # otlp | prometheus | console | none
export OTEL_LOGS_EXPORTER=otlp                 # otlp | console | none
export OTEL_EXPORTER_OTLP_PROTOCOL=grpc
export OTEL_EXPORTER_OTLP_ENDPOINT=http://collector.example.com:4317
```

Set these in your shell, the `env` block of `~/.claude/settings.json`, managed settings, or a `--settings` file; Claude Code ignores them in a repository's `.claude/settings.json` and `.claude/settings.local.json` (`/status` and `claude doctor` list ignored variables). The `claude_code.session.count` metric confirms export works, and `tool_decision` events record permission and auto-mode decisions (`classifier_verdict`, `permission_mode`). Prompts stay redacted unless `OTEL_LOG_USER_PROMPTS=1`; if you enable it, mask `prompt_text` wherever you mask `prompt`. `OTEL_METRICS_INCLUDE_REPOSITORY=true` tags metrics and events with the repository. See [monitoring usage](https://code.claude.com/docs/en/monitoring-usage).

**4) Alert and runbook links**
A `claude-cli://open?repo=<owner/name>&q=<url-encoded prompt>` link in an alert, dashboard, or runbook opens Claude Code in your local clone of that repository with the investigation prompt filled in, unsent until you press Enter. The link handler registers once you send a prompt in an interactive session on that machine; GitHub Markdown strips such links. See [Launch sessions from links](https://code.claude.com/docs/en/deep-links).

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

Committed `deny` rules apply right away; committed `allow` rules and hooks wait until each teammate accepts the workspace-trust dialog (a `-p` run without `--bare` runs the hooks without asking, but skips those allow rules in a folder never trusted on that machine, such as a CI checkout). Claude Code ignores `autoMode` and OpenTelemetry exporter variables in project settings, so keep them out of this file.

A family alias such as `sonnet` tracks the newest model on the Anthropic API; on cloud providers it resolves to a built-in default that can lag (Sonnet 4.5 on Bedrock), so pin `ANTHROPIC_DEFAULT_*_MODEL` or a full model ID there or whenever reproducibility matters (see [Cloud Providers and Gateways](#cloud-providers-and-gateways)).

**2) Documentation automation**

```bash
# Update docs with explicit tasks
claude "Update README.md to reflect the latest API endpoints and examples."
claude "Generate TypeScript types from schema.prisma and write to /types."
```

**3) Code review standards**

```bash
# Review a local diff with constrained tools. Put the prompt first: multi-value options
# (--tools, --allowed-tools, --add-dir) would swallow a prompt placed after them.
git fetch origin main
git diff origin/main...HEAD > /tmp/diff.patch
claude "Review /tmp/diff.patch using team standards:
   - Security best practices
   - Performance considerations
   - Code style compliance
   - Test coverage adequacy" \
  --tools "Read,Grep,Bash" \
  --allowed-tools "Read" "Grep" "Bash(git diff *)" "Bash(git log *)"
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
- Use `max` effort or unbounded turns/spend for simple tasks
- Ignore session cleanup

**✅ Do**

- Start `claude` in the package you need; use `--add-dir` only to grant extra directories
- Right‑size with `--effort`, `--max-turns`, and `--max-budget-usd`
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
4. Launch `claude` and run `/status` to confirm the provider, base URL, and proxy the session is using.

<h3 id="cloud-providers-and-gateways">Cloud Providers and Gateways</h3>

| Provider | Setup |
| --- | --- |
| Amazon Bedrock | Pick **3rd-party platform** → **Amazon Bedrock** at the login prompt, or run `/setup-bedrock`. Manual: `CLAUDE_CODE_USE_BEDROCK=1` (plus `AWS_REGION` if your AWS profile sets none). |
| Google Cloud's Agent Platform (formerly Vertex AI) | Same login-prompt wizard, or `/setup-vertex`. Manual: `CLAUDE_CODE_USE_VERTEX=1`, `CLOUD_ML_REGION=global`, `ANTHROPIC_VERTEX_PROJECT_ID`. |
| Claude Platform on AWS | `CLAUDE_CODE_USE_ANTHROPIC_AWS=1`, `ANTHROPIC_AWS_WORKSPACE_ID`, `AWS_REGION`, plus AWS credentials or `ANTHROPIC_AWS_API_KEY`. |
| Microsoft Foundry | `CLAUDE_CODE_USE_FOUNDRY=1` and `ANTHROPIC_FOUNDRY_RESOURCE` (no wizard). |
| Claude apps gateway | Set `forceLoginMethod: "gateway"` and `forceLoginGatewayUrl` in managed settings (or in `~/.claude/settings.json` on a machine without managed settings), then run `/login`. |

On the four cloud providers above, aliases resolve to built-in defaults that can lag the newest release, so pin `ANTHROPIC_DEFAULT_FABLE_MODEL`, `ANTHROPIC_DEFAULT_OPUS_MODEL`, `ANTHROPIC_DEFAULT_SONNET_MODEL`, and `ANTHROPIC_DEFAULT_HAIKU_MODEL`. See the [enterprise deployment overview](https://code.claude.com/docs/en/third-party-integrations).

Behind a custom `ANTHROPIC_BASE_URL`:

- Models with a 1M context window (Opus 4.7+, Sonnet 5+, Haiku 5.5, Fable) use it. If the gateway stops at 200K, run `/autocompact 200k` (saved per model) or set `CLAUDE_CODE_DISABLE_1M_CONTEXT=1`.
- Tool search is on; if the gateway rejects it, Claude Code retries without it. `ENABLE_TOOL_SEARCH=false` loads all tools upfront instead.
- If session titles, memory recall, or prompt hooks fail because the gateway rejects structured outputs, set `CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS=1`.

> [!Note]
> Anthropic doesn't support routing Claude Code to non-Claude models. Features such as effort levels and extended thinking depend on recognizing Claude model IDs, so with providers like DeepSeek some may behave differently or not work; report problems to the provider.

<h3 id="deepseek-integration">DeepSeek Integration</h3>

1. ###### Install Claude Code with the native installer

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

2. ###### Configure the current DeepSeek Anthropic-compatible endpoint

```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN="$DEEPSEEK_API_KEY"
export ANTHROPIC_MODEL='deepseek-flash[1m]'
export ANTHROPIC_DEFAULT_OPUS_MODEL='deepseek-flash[1m]'   # or 'deepseek-v4-pro[1m]' (billed at V4 Pro prices)
export ANTHROPIC_DEFAULT_SONNET_MODEL='deepseek-flash[1m]'
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432
```

3. ###### Launch `claude`

The provider credentials and base URL select DeepSeek billing and disable Claude.ai subscription-only features for that process. Use `deepseek-flash`: `deepseek-chat` and `deepseek-reasoner` were retired in July 2026, and `deepseek-v4-flash` is only a compatibility name routed to V4.1 Flash. An agent's own `model:` (such as `opus`) overrides `CLAUDE_CODE_SUBAGENT_MODEL` unless you also set `CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1`. Re-check the [official DeepSeek Claude Code integration guide](https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code/) before pinning model names.
