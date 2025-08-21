<div align="center">
  
### **Claude Code Complete Guide**

---

*For updates and contributions, visit the [official Claude Code documentation](https://claude.ai/code)*

![Claude Code](https://img.shields.io/npm/v/@anthropic-ai/claude-code?label=Claude%20Code&logo=anthropic)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/anthropics/claude-code)
[![License](https://img.shields.io/badge/License-Anthropic-orange)](https://claude.ai/code)


</div>

<div align="center">

<kbd>

| Section                                    | Status          |
|---------------------------------------------|------------------------------|
| Guides on how to install on Windows, Linux, MacOS | ✅ |
| Tips and Tricks                            | ✅ |
| MCP Overview with what to use              | ✅ |
| Community Guides                           | ✅ |
| Troubleshooting                            | ✅ |
| How to use Claude code the most optimal way| ✅ |
#### I Usually Start my Claude with <code>Claude --dangerously-skip-permissions</code> only use this if you know exactly what ur doing!

</kbd>

###### For the latest claude code changelogs and news go to [Official Claude Code Latest News](https://github.com/zebbern/claude-code-guide/tree/main/Official%20Claude%20Releases) that checks and updates any new realeses or changelogs


</div>

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [System requirements](#system-requirements)
3. [Health Check & Error Fixes](#health-check)
4. [Sub Agents](#sub-agents)
5. [Claude Commands](#claude-commands)
6. [MCP Integration](#-mcp-integration)
7. [Configuration]( -configuration)
8. [Environment Variables](#environment-variables)
9. [Security & Permissions](#security--permissions)
10. [Claude CLI Configuration](#claude-cli-configuration)
11. [Claude ~/.claude.json Configuration Guide](#claude-claudejson-configuration-guide)
12. [Automation & Scripting](#automation--scripting-guide)
13. [Troubleshooting](#-troubleshooting)
14. [Advanced Features](#-advanced-features)
15. [Best Practices](#-best-practices)
16. [Hooks](#-hooks-reference)

---

## Quick Start

```bash
## NPM (global) ⭐️ Official
npm install -g @anthropic-ai/claude-code
# if only typing "claude" does not work try "npx claude"

## Windows 
npm install -g @anthropic-ai/claude-code
irm https://claude.ai/install.ps1 | iex

## WSL/GIT 
npm install -g @anthropic-ai/claude-code
curl -fsSL https://claude.ai/install.sh | bash

## MacOS
brew install node
npm install -g @anthropic-ai/claude-code
# issue with claude bot found? run export PATH="$PATH:$(npm bin -g)"

## Linux:
sudo apt update && sudo apt install -y nodejs npm
npm install -g @anthropic-ai/claude-code

curl -fsSL https://claude.ai/install.sh | bash

## Arch Linux AUR
yay -S claude-code 

## Docker (containerised)
mkdir -p ~/.docker/cli-plugins
curl -SL https://github.com/docker/buildx/releases/download/v0.11.2/buildx-v0.11.2.linux-amd64 -o ~/.docker/cli-plugins/docker-buildx
chmod +x ~/.docker/cli-plugins/docker-buildx
curl -O https://raw.githubusercontent.com/RchGrav/claudebox/main/claudebox
chmod +x claudebox
# Nice when you can't touch the host system

# You can also open claude code with ur entire project in vscode or cursor by following this:
# cd in the directory u want to work with then run the command
code .
# Have claude code extention installed!
# This also works if your using WSL

## check if claude is installed
which claude
claude --version


# Interactive Mode
claude                      # Start interactive REPL
claude "your question"      # Start with initial prompt

# One-Shot Mode  
claude -p "analyze this"    # Quick query and exit
cat file | claude -p "fix"  # Process piped content

# Management
claude config              # Configure settings
claude update              # Update to latest
claude mcp                 # Setup MCP servers
claude /agents             # Configure/Setup Subagents for different tasks 
```

## System requirements

```env
OS: macOS 10.15+, Ubuntu 20.04+/Debian 10+, or Windows 10/11 or WSL
Hardware: 4GB RAM minimum 8GB+ recommended
Software: Node.js 18+ or git 2.23+ (optional) & GitHub or GitLab CLI for PR workflows (optional)
Internett: Connection for API calls
```


## Initial Setup

#### 1. API Key Configuration 
```bash
# Required: Get your API key from https://console.anthropic.com
export ANTHROPIC_API_KEY="sk-your-key-here"

# Make permanent (choose your shell)
# Bash
echo 'export ANTHROPIC_API_KEY="sk-your-key-here"' >> ~/.bashrc
source ~/.bashrc

# Zsh
echo 'export ANTHROPIC_API_KEY="sk-your-key-here"' >> ~/.zshrc
source ~/.zshrc

# Fish
echo 'set -gx ANTHROPIC_API_KEY "sk-your-key-here"' >> ~/.config/fish/config.fish
```

#### 2. Basic Configuration
```bash
# Interactive setup
claude config

# Set basic defaults 
claude config set -g verbose true
claude config set -g outputFormat text

```

#### 3. Settings you should know about
```bash
# --- Environment toggles (put in ~/.bashrc or ~/.zshrc) ---
export DISABLE_TELEMETRY=1                  # Opt out of Statsig telemetry
export DISABLE_ERROR_REPORTING=1            # Opt out of Sentry error logs
export DISABLE_NON_ESSENTIAL_MODEL_CALLS=1  # Skip non-critical model calls
export DISABLE_COST_WARNINGS=1              # Hide cost warnings
export DISABLE_AUTOUPDATER=1                # Stop background auto-updates
export DISABLE_BUG_COMMAND=1                # Remove /bug command
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1  # One-switch privacy bundle
export HTTP_PROXY=                          # (optional) http://host:port
export HTTPS_PROXY=                         # (optional) http://host:port
export BASH_DEFAULT_TIMEOUT_MS=60000        # (optional) default bash timeout
export BASH_MAX_TIMEOUT_MS=300000           # (optional) max bash timeout
export BASH_MAX_OUTPUT_LENGTH=200000        # (optional) cap bash output
export MAX_THINKING_TOKENS=0                # (optional) cap planning tokens
export CLAUDE_CODE_MAX_OUTPUT_TOKENS=0      # (optional) cap output tokens
export MCP_TIMEOUT=20000                    # (optional) MCP startup timeout
export MCP_TOOL_TIMEOUT=60000               # (optional) MCP tool exec timeout
export CLAUDE_CODE_DISABLE_TERMINAL_TITLE=1 # (optional) don’t change term title

# --- Safer tool defaults ---
claude -p "…" --allowedTools "Read,Edit,Bash(git:*)"
claude -p "…" --disallowedTools "Write,WebFetch"


# --- Optional global QoL ---
claude config set -g verbose true            # Verbose logs
claude config set -g theme dark              # Dark theme
claude config set -g preferredNotifChannel terminal_bell  # Bell notifications
```

## Health Check
> Note: Change <you> to your own user without <> this is only used as an example...
```bash
claude                         # opens Claude UI (if on PATH)
where claude                   # shows path(s), e.g. C:\Users\<you>\AppData\Roaming\npm\claude.cmd
claude /doctor                 # opens diagnostic/debug window
"%USERPROFILE%\AppData\Roaming\npm\claude.cmd" --version   # e.g. 1.0.85 (Claude Code)
--------------------------------------------
# CANT RUN 'claude' BUT 'npx claude' WORKS? In most cases it's PATH that's broken/missing. try a quick temporary fix (current CMD only):
set PATH=%USERPROFILE%\AppData\Roaming\npm;C:\Program Files\nodejs;%PATH%
where claude
claude doctor
--------------------------------------------
# Permanent, safe fix (Windows GUI):
1. Start → type "Environment Variables" → Open "Edit the system environment variables" → Environment Variables…
2. Under "User variables for <you>" select Path → Edit → Add:
   C:\Users\<you>\AppData\Roaming\npm
   (optional: C:\Users\<you>\.claude\local\bin and C:\Users\<you>\.local\bin)
3. Remove duplicates, any entry containing %PATH% or stray quotes (") and click OK.
4. Open a NEW Command Prompt and verify:
   where claude
   claude doctor
--------------------------------------------
# If its still failing, run the shim directly:
npx claude doctor # If this does not work try the one under or find where you have your "npm" file

%USERPROFILE%\AppData\Roaming\npm\claude.cmd doctor
--------------------------------------------
# If none of these worked check if "npm" works in ur terminal if it does "npx claude" will also work then you know nothing is wrong with your node.js path try reinstalling claude code
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
--------------------------------------------
# If this did not work try completely reinstalling
npm uninstall -g @anthropic-ai/claude-code
# Remove any leftover shim files (delete if they exist)
Remove-Item -LiteralPath "$env:USERPROFILE\AppData\Roaming\npm\claude*" -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath "$env:USERPROFILE\AppData\Roaming\npm\node_modules\@anthropic-ai\claude-code" -Recurse -Force -ErrorAction SilentlyContinue

# Delete cached installer & installed native files
Remove-Item -LiteralPath "$env:USERPROFILE\.claude\downloads\*" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath "$env:USERPROFILE\.claude\local\bin\claude.exe" -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath "$env:USERPROFILE\.claude\local" -Recurse -Force -ErrorAction SilentlyContinue

# Remove config and project-local files
Remove-Item -LiteralPath "$env:USERPROFILE\.claude.json" -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath "$env:USERPROFILE\.claude" -Recurse -Force -ErrorAction SilentlyContinue

then try install claude code again if nothing works go on a vm or cloud pc temporarily..
npm i -g @anthropic-ai\claude-code

```

## Thinking Keywords

> Give Claude extra pre-answer planning time by adding ONE of these keywords to your prompt.
> Use exactly one of these four:


###### Order (lowest → highest):
```
1. think 
2. think hard  
3. think harder  
4. ultrathink
```
###### This makes Claude spend more time:
```
- planning the solution
- breaking down steps
- weighing alternatives/trade-offs
- checking constraints & edge cases
```

> How to use?
- Put the keyword anywhere in your prompt.
- If multiple appear, the strongest one wins.
- Keep your prompt specific about goals, constraints, and success criteria.

Examples
```
# Small boost
claude -p "Think. Outline a plan to refactor the auth module."
# Medium boost
claude -p "Think harder. Draft a migration plan from REST to gRPC."
# Max boost
claude -p "Ultrathink. Propose a step-by-step strategy to fix flaky payment tests and add guardrails."
```

> This is a **CLI behavior**, not a public API parameter; naming/effects may evolve.
> Higher levels usually increase **latency** and **token usage**—pick the smallest that works.

## Claude Commands

| Command                   | Purpose                                                                                                                                      |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `/add-dir`                | Add additional working directories                                                                                                           |
| `/agents`                 | Manage custom AI subagents for specialized tasks                                                                                             |
| `/bug`                    | Report bugs (sends conversation to Anthropic)                                                                                                |
| `/clear`                  | Clear conversation history                                                                                                                   |
| `/compact [instructions]` | Compact conversation with optional focus instructions                                                                                        |
| `/config`                 | View/modify configuration                                                                                                                    |
| `/cost`                   | Show token usage statistics (see [cost tracking guide](/en/docs/claude-code/costs#using-the-cost-command) for subscription-specific details) |
| `/doctor`                 | Checks the health of your Claude Code installation                                                                                           |
| `/help`                   | Get usage help                                                                                                                               |
| `/init`                   | Initialize project with CLAUDE.md guide                                                                                                      |
| `/login`                  | Switch Anthropic accounts                                                                                                                    |
| `/logout`                 | Sign out from your Anthropic account                                                                                                         |
| `/mcp`                    | Manage MCP server connections and OAuth authentication                                                                                       |
| `/memory`                 | Edit CLAUDE.md memory files                                                                                                                  |
| `/model`                  | Select or change the AI model                                                                                                                |
| `/permissions`            | View or update [permissions](/en/docs/claude-code/iam#configuring-permissions)                                                               |
| `/pr_comments`            | View pull request comments                                                                                                                   |
| `/review`                 | Request code review                                                                                                                          |
| `/status`                 | View account and system statuses                                                                                                             |
| `/terminal-setup`         | Install Shift+Enter key binding for newlines (iTerm2 and VSCode only)                                                                        |
| `/vim`                    | Enter vim mode for alternating insert and command modes                                                                                      |

### Claude -- Commands

| Flag                             | Description                                                                                                                                              | Example                                                     |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| `--add-dir`                      | Add additional working directories for Claude to access (validates each path exists as a directory)                                                      | `claude --add-dir ../apps ../lib`                           |
| `--allowedTools`                 | A list of tools that should be allowed without prompting the user for permission, in addition to [settings.json files](/en/docs/claude-code/settings)    | `"Bash(git log:*)" "Bash(git diff:*)" "Read"`               |
| `--disallowedTools`              | A list of tools that should be disallowed without prompting the user for permission, in addition to [settings.json files](/en/docs/claude-code/settings) | `"Bash(git log:*)" "Bash(git diff:*)" "Edit"`               |
| `--print`, `-p`                  | Print response without interactive mode (see [SDK documentation](/en/docs/claude-code/sdk) for programmatic usage details)                               | `claude -p "query"`                                         |
| `--append-system-prompt`         | Append to system prompt (only with `--print`)                                                                                                            | `claude --append-system-prompt "Custom instruction"`        |
| `--output-format`                | Specify output format for print mode (options: `text`, `json`, `stream-json`)                                                                            | `claude -p "query" --output-format json`                    |
| `--input-format`                 | Specify input format for print mode (options: `text`, `stream-json`)                                                                                     | `claude -p --output-format json --input-format stream-json` |
| `--verbose`                      | Enable verbose logging, shows full turn-by-turn output (helpful for debugging in both print and interactive modes)                                       | `claude --verbose`                                          |
| `--max-turns`                    | Limit the number of agentic turns in non-interactive mode                                                                                                | `claude -p --max-turns 3 "query"`                           |
| `--model`                        | Sets the model for the current session with an alias for the latest model (`sonnet` or `opus`) or a model's full name                                    | `claude --model claude-sonnet-4-20250514`                   |
| `--permission-mode`              | Begin in a specified [permission mode](iam#permission-modes)                                                                                             | `claude --permission-mode plan`                             |
| `--permission-prompt-tool`       | Specify an MCP tool to handle permission prompts in non-interactive mode                                                                                 | `claude -p --permission-prompt-tool mcp_auth_tool "query"`  |
| `--resume`                       | Resume a specific session by ID, or by choosing in interactive mode                                                                                      | `claude --resume abc123 "query"`                            |
| `--continue`                     | Load the most recent conversation in the current directory                                                                                               | `claude --continue`                                         |
| `--dangerously-skip-permissions` | Skip permission prompts (use with caution)                                                                                                               | `claude --dangerously-skip-permissions`                     |


> The `--output-format json` flag is particularly useful for scripting and
> automation, allowing you to parse Claude's responses programmatically.



### Claude Session Commands

| Command                            | Description                                    | Example                                                            |
| :--------------------------------- | :--------------------------------------------- | :----------------------------------------------------------------- |
| `claude`                           | Start interactive REPL                         | `claude`                                                           |
| `claude "query"`                   | Start REPL with initial prompt                 | `claude "explain this project"`                                    |
| `claude -p "query"`                | Query via SDK, then exit                       | `claude -p "explain this function"`                                |
| `cat file \| claude -p "query"`    | Process piped content                          | `cat logs.txt \| claude -p "explain"`                              |
| `claude -c`                        | Continue most recent conversation              | `claude -c`                                                        |
| `claude -c -p "query"`             | Continue via SDK                               | `claude -c -p "Check for type errors"`                             |
| `claude -r "<session-id>" "query"` | Resume session by ID                           | `claude -r "abc123" "Finish this PR"`                              |
| `claude update`                    | Update to latest version                       | `claude update`                                                    |
| `claude mcp`                       | Configure Model Context Protocol (MCP) servers | See the [Claude Code MCP documentation](/en/docs/claude-code/mcp). |

> Tip: For non-interactive runs, you can also pipe input:
> `cat logs.txt \| claude -p "explain"`

> Complete reference for keyboard shortcuts, input modes, and interactive features in Claude Code sessions.

## Keyboard shortcuts

### General controls

| Shortcut         | Description                        | Context                    |
| :--------------- | :--------------------------------- | :------------------------- |
| `Ctrl+C`         | Cancel current input or generation | Standard interrupt         |
| `Ctrl+D`         | Exit Claude Code session           | EOF signal                 |
| `Ctrl+L`         | Clear terminal screen              | Keeps conversation history |
| `Up/Down arrows` | Navigate command history           | Recall previous inputs     |
| `Esc` + `Esc`    | Edit previous message              | Double-escape to modify    |

### Multiline input

| Method           | Shortcut       | Context                           |
| :--------------- | :------------- | :-------------------------------- |
| Quick escape     | `\` + `Enter`  | Works in all terminals            |
| macOS default    | `Option+Enter` | Default on macOS                  |
| Terminal setup   | `Shift+Enter`  | After `/terminal-setup`           |
| Control sequence | `Ctrl+J`       | Line feed character for multiline |
| Paste mode       | Paste directly | For code blocks, logs             |

### Quick commands

| Shortcut     | Description                        | Notes                                                     |
| :----------- | :--------------------------------- | :-------------------------------------------------------- |
| `#` at start | Memory shortcut - add to CLAUDE.md | Prompts for file selection                                |
| `/` at start | Slash command                      | See [slash commands](/en/docs/claude-code/slash-commands) |

## Vim mode

Enable vim-style editing with `/vim` command or configure permanently via `/config`.

### Mode switching

| Command | Action                      | From mode |
| :------ | :-------------------------- | :-------- |
| `Esc`   | Enter NORMAL mode           | INSERT    |
| `i`     | Insert before cursor        | NORMAL    |
| `I`     | Insert at beginning of line | NORMAL    |
| `a`     | Insert after cursor         | NORMAL    |
| `A`     | Insert at end of line       | NORMAL    |
| `o`     | Open line below             | NORMAL    |
| `O`     | Open line above             | NORMAL    |

### Navigation (NORMAL mode)

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

### Editing (NORMAL mode)

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

<Tip>
  Configure your preferred line break behavior in terminal settings. Run `/terminal-setup` to install Shift+Enter binding for iTerm2 and VS Code terminals.
</Tip>

## Command history

Claude Code maintains command history for the current session:

* History is stored per working directory
* Cleared with `/clear` command
* Use Up/Down arrows to navigate (see keyboard shortcuts above)
* **Ctrl+R**: Reverse search through history (if supported by terminal)
* **Note**: History expansion (`!`) is disabled by default

### Subcommands:

| Subcommand                           | Description                   | Example                          |
| ------------------------------------ | ----------------------------- | -------------------------------- |
| `claude update`                      | Self-update to latest version | `claude update`                  |
| `claude mcp`                         | Launch MCP wizard             | `claude mcp`                     |
| `claude config`                      | Interactive config wizard     | `claude config`                  |
| `claude config list`                 | List all keys                 | `claude config list`             |
| `claude config get <key>`            | Get value                     | `claude config get theme`        |
| `claude config set <key> <val>`      | Set value                     | `claude config set theme dark`   |
| `claude config add <key> <vals…>`    | Append to array               | `claude config add env DEV=1`    |
| `claude config remove <key> <vals…>` | Remove items                  | `claude config remove env DEV=1` |


---

## Sub Agents
> Sub‑Agents are purpose‑built helpers with their **own prompts, tools, and isolated context windows**. Treat this like a “mixture‑of‑experts” you **compose** per repo.

**When to use them**
> - You need high signal responses (plans, reviews, diffs) without side quests.
> - You want version‑controlled prompts and tool policies alongside the codebase.
> - You work in PR‑driven teams and want scoped edits by role.

### Each Sub‑Agent Has Its Own Context
**Design rules for your lineup**
> - Define **one clear responsibility** per agent.
> - Keep the **minimum** tool set needed for that role.
> - Prefer **read‑only** agents for analysis/review tasks.
> - Give edit powers to as few agents as possible.

<img width="700" height="160" alt="image" src="https://github.com/user-attachments/assets/42767417-20aa-4bd4-aaf2-cfa0e515b54b" />

*Caption: Agents selection UI in the terminal.*

## How I Configure Agents
> Keep agents **in the project** so they’re versioned with the repo and evolve via PRs.

### Quick start
```bash
# Update CLI and open the agents panel
claude update
/agents
```

### Create your core agents
> - **planner** (read‑only): turns features/issues into small, testable tasks; outputs a task list or plan.md.
> - **codegen** (edit‑capable): implements tasks; limited to `src/` + `tests/`.
> - **tester** (read‑only or patch‑only): writes *one* failing test or a minimal repro.
> - **reviewer** (read‑only): leaves structured review comments; never edits.
> - **docs** (edit‑capable): updates `README.md`/`docs/` only.

> **Policy tip:** Prefer *patch output* for edit‑capable agents so changes land through your normal Git workflow.

<img width="700" height="173" alt="image" src="https://github.com/user-attachments/assets/84bc80de-35b8-4ef7-9b27-f74f7d4a51f9" />

*Caption: Choose only the tools an agent truly needs (e.g., advisory vs editing access).*

### Example prompts
> Keep prompts short, testable, and repo‑specific. Check them into `agents/`:

<img width="700" height="217" alt="image" src="https://github.com/user-attachments/assets/b4f92591-ff5c-4775-aec2-051f145b9616" />

*Caption: Example prompt for a **test‑coverage‑analyzer** agent.*

**tester.prompt.md (sample)**
```
Role: Write a single, focused failing test for the specific scenario I describe.
Scope: Only create/modify tests under tests/. Do not change src/.
Output: A brief rationale + a unified diff or patch.
If the scenario is unclear, ask exactly one clarifying question.
```

### Expected output
> Your tester agent should produce a small diff or patch plus a short rationale:

<img width="700" height="273" alt="image" src="https://github.com/user-attachments/assets/839151ce-02c9-4283-a53b-9dd105802ada" />

*Caption: Example response from the **test‑coverage‑analyzer** agent.*

**Acceptance checklist**
> - [ ] Output is a single change set.
> - [ ] Only files in allowed paths are touched.
> - [ ] Rationale explains intent and edge cases.
> - [ ] If blocked, the agent asked one clear question.

---

### Why This Shift Matters
**Operational benefits**
> - **Less context switching:** you stay in one mental mode; agents do the rest.
> - **Cleaner PRs:** narrow prompts + limited tools → smaller, reviewable diffs.
> - **Fewer regressions:** tester/reviewer agents catch gaps before merge.
> - **Repeatability:** prompts + policies live in the repo and travel with branches.

**Security & governance**
> - Limit write access by path (e.g., `src/`, `tests/`, `docs/`).
> - Favor read‑only analysis for high‑risk areas.
> - Log/commit assistant outputs as patches for auditability.

---

### A Mindset Shift
**Do**
> - Treat agents as teammates with job descriptions.
> - Start read‑only; grant write access *last*.
> - Keep prompts in version control and iterate via PR.

**Don’t**
> - Ask one agent to plan, code, and test in a single turn.
> - Give blanket write permissions.
> - Accept multi‑file diffs when you asked for one test.

### Cant find Subagents to look at?
- Start with these!
  - [Configurations, Agents, Mcps, Templates](https://www.aitmpl.com/)
  - [github-awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents?tab=readme-ov-file)
  - [medium-claude-code-subagents-examples-with-templates-you-can-use](https://freedium.cfd/https://medium.com/@joe.njenga/17-claude-code-subagents-examples-with-templates-you-can-use-immediately-c70ef5567308)



## 🔌 MCP Integration

### Understanding MCP (Model Context Protocol)

**What is MCP?**
MCP extends Claude's capabilities by connecting to external services, databases, APIs, and tools.

**MCP Architecture:**
```
Claude Code ←→ MCP Protocol ←→ MCP Servers ←→ External Services
```

### MCP Setup & Configuration

#### Basic MCP Commands
```bash
claude mcp                    # Interactive MCP configuration
claude mcp list              # List configured servers            
claude mcp add <name> <cmd>  # Add new server
claude mcp remove <name>     # Remove server
```

#### MCP Configuration File 
**Location**:`~/.claude.json` 

### Scope-Based Configuration Files

User/Global Scope:
Global MCP servers
Project Scope:
Project-scoped servers are stored in a `.mcp.json` file at your project's root directory

```json
{
  "mcpServers": {
    "git": {
      "command": "git-mcp-server",
      "args": [],
      "env": {}
    },
    "postgres": {
      "command": "postgres-mcp-server", 
      "args": ["--host", "localhost", "--port", "5432"],
      "env": {
        "POSTGRES_USER": "developer",
        "POSTGRES_PASSWORD": "dev_password",
        "POSTGRES_DB": "myapp_development"
      }
    }
  }
}
```

### MCP Servers

**Note**: The exact package names and installation commands below may not be accurate. Consult official MCP documentation for current server packages.

#### Development Tools
```bash
# npm install -g git-mcp-server         

# claude mcp add git "git-mcp-server"
# claude mcp add github "github-mcp-server --token $GITHUB_TOKEN"
```

#### Database Integration  
```bash
npm install -g postgres-mcp-server               
npm install -g mysql-mcp-server                  
npm install -g sqlite-mcp-server               

# Setup examples may look like this:
# export POSTGRES_URL="postgresql://user:password@localhost:5432/mydb"
# claude mcp add postgres "postgres-mcp-server --url $POSTGRES_URL"
```

### MCP Tool Permissions

```bash
# Allow specific MCP tools 
claude --allowedTools "mcp__git__commit,mcp__git__push"

# Allow all tools from specific server
claude --allowedTools "mcp__postgres__*"

# Combined with built-in tools
claude --allowedTools "Edit,View,mcp__git__*"
```

---

## ⚙️ Configuration

### System Overview

Claude Code uses a hierarchical configuration system:
1. **Command-line flags** (highest priority)
2. **Environment variables** 
3. **Project configuration** (location may vary)
4. **Global configuration** (likely `~/.claude.json`)
5. **Built-in defaults** (lowest priority)

### Configuration Files

#### Global Configuration
**Location**: `~/.claude.json`

```json
{
  "model": "claude-sonnet-4",
  "verbose": true,
  "outputFormat": "text", 
  "allowedTools": ["Edit", "View"],
  "disallowedTools": [],
}
```

#### Project Configuration
**Location**: `settings.json` OR similar 

```json
{
  "model": "claude-sonnet-4",
  "systemPrompt": "You are a senior developer working on this project",
  "allowedTools": [
    "Edit",
    "View",
    "Bash(git:*)",
    "Bash(npm:*)"
  ],
}
```

### Environment Variables

#### Core Variables
| Variable | Required | Purpose | Example |
|----------|----------|---------|---------|
| `ANTHROPIC_API_KEY` | **YES** | API Authentication | `sk-ant-api03-xxx` |
| `ANTHROPIC_MODEL` | No | Default model | `claude-sonnet-4` |
| `ANTHROPIC_BASE_URL` | No | API endpoint override | `https://api.anthropic.com` |

## Environment Variables

| Env Var                             | Default    | Example Value | Effect                                                                                       |
| ----------------------------------- | ---------- | ------------- | -------------------------------------------------------------------------------------------- |
| `DISABLE_NON_ESSENTIAL_MODEL_CALLS` | `0`        | `1`           | Skip auto‑summaries, background explanations & git diff scans ⇒ faster, cheaper.             |
| `MAX_THINKING_TOKENS`               | *≈30‑40 k* | `50000`       | Higher token budget for reading code, analyzing diffs & planning.                            |
| `DISABLE_TELEMETRY`                 | `0`        | `1`           | Block anonymous usage + error telemetry.                                                     |
| `CLAUDE_CODE_USE_BEDROCK`           | `0`        | `1`           | Route requests via **AWS Bedrock** (needs IAM creds; falls back if absent).                  |
| `CLAUDE_CODE_USE_VERTEX`            | `0`        | `1`           | Route requests via **Google Vertex AI** (needs service‑account creds; falls back if absent). |

![image](https://github.com/user-attachments/assets/d07be233-3322-4510-bb98-4165589d1924)

| Env Var       | Default               | Example Value                       | What It Does                                       |
| ------------- | --------------------- | ----------------------------------- | -------------------------------------------------- |
| `HTTP_PROXY`  | *(unset)*             | `http://proxy.company.com:8080`     | Routes **HTTP** requests through the given proxy.  |
| `HTTPS_PROXY` | *(unset)*             | `https://proxy.company.com:8443`    | Routes **HTTPS** requests through the given proxy. |
| `NO_PROXY`    | `localhost,127.0.0.1` | `localhost,127.0.0.1,*.company.com` | Comma‑separated hosts/IPs that bypass the proxy.   |

## How to Set

<details>
<summary><strong>Shell (temporary)</strong></summary>

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="https://proxy.company.com:8443"
export NO_PROXY="localhost,127.0.0.1,*.company.com"
claude "Test request via proxy"
```

</details>

<details>
<summary><strong>Shell Profile (persistent)</strong></summary>

```bash
# ~/.bashrc or ~/.zshenv
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="https://proxy.company.com:8443"
export NO_PROXY="localhost,127.0.0.1,*.company.com"
```

Reload with `source ~/.bashrc`.

</details>

<details>
<summary><strong>GitHub Actions</strong></summary>

```yaml
env:
  HTTP_PROXY:  "http://proxy.company.com:8080"
  HTTPS_PROXY: "https://proxy.company.com:8443"
  NO_PROXY:    "localhost,127.0.0.1,*.company.com"
```

</details>

---

## Security & Permissions

### Permission System

**How it works**:
> - Claude asks for permission before using tools
> - Permissions are remembered per session
> - Dangerous operations require confirmation

#### Permission Levels
| Level | Description | Risk | Use Case |
|-------|-------------|------|----------|
| **Interactive** | Prompt for each operation | **Low** | Development work |
| **Allowlist** | Pre-approved tools only | **Medium** | Automation scripts |
| **Dangerous** | Skip all permissions | **CRITICAL** | Containers only |

#### Tool Permission Patterns 
```bash
# Allow specific tools (read/edit files)
claude --allowedTools "Edit,Read"

# Allow tool categories incl. Bash (but still scoped below)
claude --allowedTools "Edit,Read,Bash"

# Scoped permissions (all git commands)
claude --allowedTools "Bash(git:*)"

# Multiple scopes (git + npm)
claude --allowedTools "Bash(git:*),Bash(npm:*)"
```

### Dangerous Mode (CRITICAL Security Feature)

```bash
# DANGEROUS - Can cause data loss
claude --dangerously-skip-permissions

# Only use in isolated environments:
# ✅ Safe: Isolated Docker container  
# ❌ NEVER: Production systems, shared machines, systems with important data
```

### Security Best Practices

#### 1. Start Restrictive
```bash
# Good: Specific permissions
claude --allowedTools "Edit,View,Bash(git:status)"

# Bad: Broad permissions  
claude --allowedTools "Bash"
```

#### 2. Protect Sensitive Data
```bash
# Good: Environment variables
export DATABASE_URL="postgresql://user:pass@host/db"

# Bad: Hardcoded credentials in commands
# claude "connect to postgresql://user:password123@host/db"
```

#### 3. Regular Security Audits
```bash
# Check current permissions
claude config get allowedTools
claude config get disallowedTools

# Review configuration
claude config list
```

---

### Claude CLI Configuration

> Configuration keys

---

## Prerequisites

1. **Authenticate first**

   ```bash
   # Option 1 – environment variable (recommended for scripts)
   export ANTHROPIC_API_KEY="sk-..."

   # Option 2 – interactive login inside Claude REPL
   claude /login
   ```
2. **Back‑up current config**

   ```bash
   cp ~/.claude/claude.json ~/.claude/claude.json.bak

   # This depends where your .json is installed it may also be at ~/.claude/local/package.json
   ```

If `apiKeyHelper` is mis‑configured or no API key is found, you'll see errors like:

```
Error getting API key from apiKeyHelper (in settings or ~/.claude.json):
```

Fix authentication before modifying other keys. ([docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code/settings))


*(omit `-g` to target the **current project** instead of global)*.

---


## Migrating to `settings.json`

Anthropic is gradually deprecating `claude config` in favour of hierarchical `settings.json` files:

```bash
# Global (user‑level) settings
vi ~/.claude/settings.json

# Project‑level (checked into git)
vi .claude/settings.json
```

---

## Claude `~/.claude.json` Configuration Guide

> **Purpose** — A concise, *fact‑checked* reference for safely editing your personal configuration file. All keys and examples come directly from Anthropic‑supplied defaults or the CLI's own output—no speculative or undocumented fields.

---

## 1 ▸ Back Up First

```bash
cp ~/.claude.json ~/.claude.json.backup
```

If anything breaks, restore with:

```bash
cp ~/.claude.json.backup ~/.claude.json
```

---

## 2 ▸ MCP Servers

`mcpServers` lets Claude Code interact with external tools (filesystem, web, GitHub, …). Each entry follows the **exact** schema below.

```jsonc
{
  "mcpServers": {
    "server-name": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "package-name"],
      "env": {}
    }
  }
}
```

### 2.1 Schema

| Field     | Required? | Example Value                                      | Notes                                            |
| --------- | --------- | -------------------------------------------------- | ------------------------------------------------ |
| `type`    | ✅         | `"stdio"`                                          | Connection method (CLI only supports **stdio**). |
| `command` | ✅         | `"npx"`                                            | Executable run by Claude Code.                   |
| `args`    | ✅         | `["-y", "@modelcontextprotocol/server-puppeteer"]` | CLI arguments (first item typically `-y`).       |
| `env`     | ✅         | `{ "API_KEY": "value" }`                           | Key‑value pairs exported to the child process.   |

### 2.2 Ready‑to‑Copy Examples

```jsonc
{
  "mcpServers": {
    "sequential-thinking": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"],
      "env": {}
    },
    "puppeteer": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"],
      "env": {}
    },
    "fetch": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@kazuph/mcp-fetch"],
      "env": {}
    }
  }
}
```

#### With API keys

```jsonc
{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "<your‑token>" }
    },
    "brave-search": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": { "BRAVE_API_KEY": "<your‑key>" }
    }
  }
}
```

#### More popular servers

```jsonc
{
  "mcpServers": {
    "filesystem": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"],
      "env": {}
    },
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {}
    }
  }
}
```

---

## 3 ▸ Feature Flags

All three flags below are safe to toggle. **Booleans only.**

| Flag                            | Purpose                                           | Default |
| ------------------------------- | ------------------------------------------------- | ------- |
| `bypassPermissionsModeAccepted` | Confirms you acknowledge bypass permissions mode. | `false` |
| `hasAcknowledgedCostThreshold`  | Suppresses cost pop‑ups after first confirmation. | `false` |
| `isQualifiedForDataSharing`     | Opt‑in/out of anonymous telemetry.                | `false` |

Example:

```jsonc
{
  "bypassPermissionsModeAccepted": true,
  "hasAcknowledgedCostThreshold": true,
  "isQualifiedForDataSharing": false
}
```

---

## 4 ▸ Reset Tips & Onboarding

```jsonc
{
  "tipsHistory": {
    "new-user-warmup": 0,
    "ide-hotkey": 0,
    "shift-enter": 0
  },
  "hasCompletedOnboarding": false
}
```

*Set counters to `0` or `hasCompletedOnboarding` to `false` to see onboarding screens again.*

---

## 5 ▸ What **Not** to Edit Manually

| Section                                                                            | Reason                                                 |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Authentication data** (`oauthAccount`, `primaryApiKey`, `customApiKeyResponses`) | Risk of lock‑out or leaked secrets.                    |
| **Application state** (`numStartups`, `cachedChangelog`, …)                        | Non‑functional; overwritten by the app.                |
| **Projects** block                                                                 | Populated automatically and recalculated each session. |

Expand the blocks only when debugging and restore from backup afterwards.

---

## 6 ▸ Validate & Reload

1. **Validate JSON**

   ```bash
   python -m json.tool ~/.claude.json
   # or
   jq . ~/.claude.json
   ```
2. **Restart Claude Code**

   ```bash
   claude
   ```

---

## 7 ▸ Common Tasks (Quick Checklist)

| Task                   | Steps                                                                 |
| ---------------------- | --------------------------------------------------------------------- |
| **Add new MCP server** | Backup → Insert server block → Validate → Restart → `/mcp` to confirm |
| **Change theme**       | Backup → Edit `"theme"` → Restart                                     |
| **Enable Vim mode**    | Backup → Set `"editorMode": "vim"` → Restart                          |

---

## 8 ▸ Security Tips

* Keep `~/.claude.json` private (`chmod 600`).
* Prefer environment variables for API keys over plain‑text.
* Never commit this file to source control.

---

# Automation & Scripting Guide

> **Goal** Show how to wire Claude Code into **CI/CD pipelines** and **local Git hooks** with verified, production‑tested snippets. All examples rely on Anthropic's public CLI (`@anthropic-ai/claude-code` 

---

## 1 ▸ CI/CD Integration

### 1.1 GitHub Actions

```yaml
name: Claude Code Review
on:
  pull_request:
    branches: [main, develop]

jobs:
  claude-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js 18
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Review PR
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude -p "Review changes for security issues and bugs" \
            --allowedTools "View" \
            --output-format json > review-results.json

      - name: Upload results artifact
        uses: actions/upload-artifact@v4
        with:
          name: claude-review
          path: review-results.json
```

#### Key Points

| Setting                     | Purpose                                                    |
| --------------------------- | ---------------------------------------------------------- |
| `actions/checkout@v4`       | Retrieves the pull‑request diff.                           |
| `@anthropic-ai/claude-code` | Official CLI (auto‑updates disabled in CI for speed).      |
| `ANTHROPIC_API_KEY`         | **Must** be stored as an encrypted repo secret.            |
| `--allowedTools "View"`     | **Read‑only** toolset: prevents file writes in the runner. |
| `--output-format json`      | Emits structured findings for downstream parsing.          |

> **Security tip:** Restrict the runner's permissions (e.g. `permissions: contents: read`) so the CLI cannot push code back.

---

## 2 ▸ Local Git Automation

### 2.1 Pre‑commit Hook

```bash
#!/usr/bin/env bash
# .git/hooks/pre-commit (chmod +x)

# Abort if nothing staged
staged=$(git diff --cached --name-only --diff-filter=ACM)
[ -z "$staged" ] && exit 0

# Aggregate staged file contents
payload=$(echo "$staged" | xargs cat)

analysis=$(echo "$payload" | \
  claude -p "Review these changes for issues before commit" \
    --allowedTools "View" \
    --output-format json)

# Block commit on critical issues
if echo "$analysis" | jq -e '.critical_issues[]' >/dev/null 2>&1; then
  echo "❌ Critical issues found – commit blocked"
  exit 1
fi

echo "✅ Claude analysis passed"
```

#### Why This Works

* **`git diff --cached`** targets only staged changes, avoiding noise.
* **`xargs cat`** concatenates those files for the prompt.
* **`jq`** checks the JSON for a non‑empty `critical_issues` array.
* Hook exits non‑zero to stop the commit on failures.

> ⚠️ **Performance note:** For large diffs (>15 kB) invoke Claude with `--stream` to reduce latency.

---

## 3 ▸ Common Patterns

| Use‑case                    | Flag combo                                        | Example                                               |
| --------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| **Security review**         | `--allowedTools "View"`                           | `claude -p "Audit for secrets" --allowedTools "View"` |
| **Auto‑fix (experimental)** | `--allowedTools "View,Write" --apply-patch`       | `claude -p "Fix lint" --apply-patch`                  |
| **Generate SBOM**           | `--allowedTools "View" --output-format cyclonedx` | `claude -p "Generate SBOM"`                           |

> ℹ The `--apply-patch` flag is **beta** as of CLI v1.8. Check release notes before enabling in CI.

---

## 4 ▸ Best Practices

1. **Rate limits** — The free Anthropic tier caps at 100 requests/day. Cache results or run only on large PRs.
2. **Timeouts** — Use `--timeout 120` to prevent hung CI jobs.
3. **Artifact retention** — Store `review-results.json` for traceability.
4. **Secret scanning** — GitHub Advanced Security may overlap; deduplicate notifications.

---

## 5 ▸ Troubleshooting

| Symptom                                  | Likely Cause                         | Fix                                                                                   |
| ---------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------- |
| `Error: Missing ANTHROPIC_API_KEY`       | Secret not set in repo or local env. | Define in **Settings → Secrets** or `export` locally.                                 |
| CLI exits `1` with `Rate limit exceeded` | Too many calls in 24h.               | Upgrade plan or throttle jobs.                                                        |
| Hook slow on binary files                | Large payload sent to Claude.        | Filter binary via `git diff --cached --name-only --diff-filter=ACM -- '*.js' '*.ts'`. |

---

## 🔧 Troubleshooting

### Diagnostic Commands

```bash
# Basic health checks
claude --version             
claude --help                   
claude config list                 
claude /doctor                  
```

### Common Issues & Solutions

#### 1. Authentication Issues
```bash
# Check API key
echo $ANTHROPIC_API_KEY

# Test connection
claude -p "test" --verbose

# Reset authentication 
```

#### 2. Installation Issues  
```bash
# Reinstall
npm uninstall -g @anthropic-ai/claude-code     
npm install -g @anthropic-ai/claude-code      

# Check Node.js version
node --version  # Should be 16+
```

#### 3. Permission Issues
```bash
# Check current permissions
claude config get allowedTools

# Reset permissions
claude config set allowedTools "[]"
claude config set allowedTools '["Edit", "View"]'
```

#### 4. MCP Issues
```bash
# Debug MCP 
claude --mcp-debug
claude mcp status  
claude mcp restart --all
```

### Debug Mode
```bash
# Enable verbose logging
claude --verbose

# Check logs (verify log location)
```

#### Memory Commands 
```bash
claude /memory           # Edit project memory
claude /memory view      # View current memory
```


## 💡 Best Practices

### Effective Prompting
```bash
# Good: Specific and detailed
claude "Review UserAuth.js for security vulnerabilities, focusing on JWT handling"

# Bad: Vague  
claude "check my code"
```

### Security Best Practices
1. **Start with minimal permissions**: `claude --allowedTools "View"`
2. **Use environment variables**: `export API_KEY="secret"`
3. **Regular audits**: `claude config get allowedTools`
4. **Avoid dangerous mode**: Only use `--dangerously-skip-permissions` in containers

### Performance Tips
1. **Use appropriate output formats**: `--output-format json` for automation
2. **Be specific in prompts**: Better results, faster execution
3. **Clean up regularly**: Remove old sessions and cache

---

#### Monitoring & Alerting

**1. Health Check Automation**
```bash
# Regular health checks
*/15 * * * * /usr/local/bin/claude /doctor > /dev/null || echo "Claude health check failed" | mail -s "Alert" admin@company.com
```

**2. Log Analysis**
```bash
# Daily log analysis
0 6 * * * tail -1000 /var/log/app.log | claude -p "analyze for issues" --output-format json > /tmp/daily-analysis.json
```

### Collaboration Best Practices

#### Team Workflows

**1. Shared Configuration Templates**
```bash
# Create team templates
mkdir -p ~/.claude/templates/
cat > ~/.claude/templates/team-frontend.json << EOF
{
  "allowedTools": ["Edit", "View", "Bash(npm:*)", "mcp__git__*"],
  "model": "claude-sonnet-4",
  "systemPrompt": "You are working on our React frontend. Follow our coding standards and use TypeScript."
}
EOF

# Use templates
claude config import ~/.claude/templates/team-frontend.json
```

**2. Documentation Automation**
```bash
# Automated documentation updates
claude "update README.md with recent changes to the API endpoints"
claude "generate TypeScript definitions from the new database schema"
```

**3. Code Review Standards**
```bash
# Standardized review process
claude --allowedTools "View,mcp__git__*" \
  "review PR #123 using our team standards:
  - Security best practices
  - Performance considerations  
  - Code style compliance
  - Test coverage adequacy"
```

#### Knowledge Sharing

**1. Create Project Runbooks**
```bash
# Generate runbooks
claude "create a deployment runbook for this application including all steps and troubleshooting"
claude "document the onboarding process for new developers"
```

**2. Architecture Documentation**
```bash
# Maintain architecture docs
claude "update architecture documentation to reflect recent microservices changes"
claude "create sequence diagrams for the new authentication flow"
```

### Common Pitfalls to Avoid

#### Security Pitfalls

**❌ Don't:**
- Use `--dangerously-skip-permissions` on production systems
- Hardcode secrets in commands or configuration
- Grant overly broad permissions
- Run with elevated privileges unnecessarily

**✅ Do:**
- Use environment variables for secrets
- Start with minimal permissions
- Regular security audits
- Isolate sensitive operations

#### Performance Pitfalls

**❌ Don't:**
- Load entire large codebases unnecessarily
- Use maximum thinking budget for simple tasks
- Run multiple concurrent Claude instances
- Ignore memory and cache cleanup

**✅ Do:**
- Use focused context with `--add-dir`
- Match thinking budget to task complexity
- Monitor resource usage
- Clean up regularly

#### Workflow Pitfalls

**❌ Don't:**
- Skip project context setup (CLAUDE.md)
- Use vague, ambiguous prompts
- Ignore error messages and logs
- Automate without testing first

**✅ Do:**
- Maintain comprehensive project context
- Be specific and detailed in requests
- Monitor and analyze logs
- Test automation in safe environments

---

## Hooks reference

> This page provides reference documentation for implementing hooks in Claude Code.

<Tip>
  For a quickstart guide with examples, see [Get started with Claude Code hooks](/en/docs/claude-code/hooks-guide).
</Tip>

## Configuration

Claude Code hooks are configured in your [settings files](/en/docs/claude-code/settings):

* `~/.claude/settings.json` - User settings
* `.claude/settings.json` - Project settings
* `.claude/settings.local.json` - Local project settings (not committed)
* Enterprise managed policy settings

### Structure

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
            "command": "your-command-here"
          }
        ]
      }
    ]
  }
}
```

* **matcher**: Pattern to match tool names, case-sensitive (only applicable for
  `PreToolUse` and `PostToolUse`)
  * Simple strings match exactly: `Write` matches only the Write tool
  * Supports regex: `Edit|Write` or `Notebook.*`
  * Use `*` to match all tools. You can also use empty string (`""`) or leave
    `matcher` blank.
* **hooks**: Array of commands to execute when the pattern matches
  * `type`: Currently only `"command"` is supported
  * `command`: The bash command to execute (can use `$CLAUDE_PROJECT_DIR`
    environment variable)
  * `timeout`: (Optional) How long a command should run, in seconds, before
    canceling that specific command.

For events like `UserPromptSubmit`, `Notification`, `Stop`, and `SubagentStop`
that don't use matchers, you can omit the matcher field:

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

### Project-Specific Hook Scripts

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
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/check-style.sh"
          }
        ]
      }
    ]
  }
}
```

## Hook Events

### PreToolUse

Runs after Claude creates tool parameters and before processing the tool call.

**Common matchers:**

* `Task` - Subagent tasks (see [subagents documentation](/en/docs/claude-code/sub-agents))
* `Bash` - Shell commands
* `Glob` - File pattern matching
* `Grep` - Content search
* `Read` - File reading
* `Edit`, `MultiEdit` - File editing
* `Write` - File writing
* `WebFetch`, `WebSearch` - Web operations

### PostToolUse

Runs immediately after a tool completes successfully.

Recognizes the same matcher values as PreToolUse.

### Notification

Runs when Claude Code sends notifications. Notifications are sent when:

1. Claude needs your permission to use a tool. Example: "Claude needs your
   permission to use Bash"
2. The prompt input has been idle for at least 60 seconds. "Claude is waiting
   for your input"

### UserPromptSubmit

Runs when the user submits a prompt, before Claude processes it. This allows you
to add additional context based on the prompt/conversation, validate prompts, or
block certain types of prompts.

### Stop

Runs when the main Claude Code agent has finished responding. Does not run if
the stoppage occurred due to a user interrupt.

### SubagentStop

Runs when a Claude Code subagent (Task tool call) has finished responding.

### PreCompact

Runs before Claude Code is about to run a compact operation.

**Matchers:**

* `manual` - Invoked from `/compact`
* `auto` - Invoked from auto-compact (due to full context window)

### SessionStart

Runs when Claude Code starts a new session or resumes an existing session (which
currently does start a new session under the hood). Useful for loading in
development context like existing issues or recent changes to your codebase.

**Matchers:**

* `startup` - Invoked from startup
* `resume` - Invoked from `--resume`, `--continue`, or `/resume`
* `clear` - Invoked from `/clear`

## Hook Input

Hooks receive JSON data via stdin containing session information and
event-specific data:

```typescript
{
  // Common fields
  session_id: string
  transcript_path: string  // Path to conversation JSON
  cwd: string              // The current working directory when the hook is invoked

  // Event-specific fields
  hook_event_name: string
  ...
}
```

### PreToolUse Input

The exact schema for `tool_input` depends on the tool.

```json
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "PreToolUse",
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.txt",
    "content": "file content"
  }
}
```

### PostToolUse Input

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

### Notification Input

```json
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "Notification",
  "message": "Task completed successfully"
}
```

### UserPromptSubmit Input

```json
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "UserPromptSubmit",
  "prompt": "Write a function to calculate the factorial of a number"
}
```

### Stop and SubagentStop Input

`stop_hook_active` is true when Claude Code is already continuing as a result of
a stop hook. Check this value or process the transcript to prevent Claude Code
from running indefinitely.

```json
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "Stop",
  "stop_hook_active": true
}
```

### PreCompact Input

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

### SessionStart Input

```json
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "SessionStart",
  "source": "startup"
}
```

## Hook Output

There are two ways for hooks to return output back to Claude Code. The output
communicates whether to block and any feedback that should be shown to Claude
and the user.

### Simple: Exit Code

Hooks communicate status through exit codes, stdout, and stderr:

* **Exit code 0**: Success. `stdout` is shown to the user in transcript mode
  (CTRL-R), except for `UserPromptSubmit` and `SessionStart`, where stdout is
  added to the context.
* **Exit code 2**: Blocking error. `stderr` is fed back to Claude to process
  automatically. See per-hook-event behavior below.
* **Other exit codes**: Non-blocking error. `stderr` is shown to the user and
  execution continues.

<Warning>
  Reminder: Claude Code does not see stdout if the exit code is 0, except for
  the `UserPromptSubmit` hook where stdout is injected as context.
</Warning>

#### Exit Code 2 Behavior

| Hook Event         | Behavior                                                           |
| ------------------ | ------------------------------------------------------------------ |
| `PreToolUse`       | Blocks the tool call, shows stderr to Claude                       |
| `PostToolUse`      | Shows stderr to Claude (tool already ran)                          |
| `Notification`     | N/A, shows stderr to user only                                     |
| `UserPromptSubmit` | Blocks prompt processing, erases prompt, shows stderr to user only |
| `Stop`             | Blocks stoppage, shows stderr to Claude                            |
| `SubagentStop`     | Blocks stoppage, shows stderr to Claude subagent                   |
| `PreCompact`       | N/A, shows stderr to user only                                     |
| `SessionStart`     | N/A, shows stderr to user only                                     |

### Advanced: JSON Output

Hooks can return structured JSON in `stdout` for more sophisticated control:

#### Common JSON Fields

All hook types can include these optional fields:

```json
{
  "continue": true, // Whether Claude should continue after hook execution (default: true)
  "stopReason": "string" // Message shown when continue is false
  "suppressOutput": true, // Hide stdout from transcript mode (default: false)
}
```

If `continue` is false, Claude stops processing after the hooks run.

* For `PreToolUse`, this is different from `"permissionDecision": "deny"`, which
  only blocks a specific tool call and provides automatic feedback to Claude.
* For `PostToolUse`, this is different from `"decision": "block"`, which
  provides automated feedback to Claude.
* For `UserPromptSubmit`, this prevents the prompt from being processed.
* For `Stop` and `SubagentStop`, this takes precedence over any
  `"decision": "block"` output.
* In all cases, `"continue" = false` takes precedence over any
  `"decision": "block"` output.

`stopReason` accompanies `continue` with a reason shown to the user, not shown
to Claude.

#### `PreToolUse` Decision Control

`PreToolUse` hooks can control whether a tool call proceeds.

* `"allow"` bypasses the permission system. `permissionDecisionReason` is shown
  to the user but not to Claude. (*Deprecated `"approve"` value + `reason` has
  the same behavior.*)
* `"deny"` prevents the tool call from executing. `permissionDecisionReason` is
  shown to Claude. (*`"block"` value + `reason` has the same behavior.*)
* `"ask"` asks the user to confirm the tool call in the UI.
  `permissionDecisionReason` is shown to the user but not to Claude.

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "allow" | "deny" | "ask",
    "permissionDecisionReason": "My reason here (shown to user)"
  },
  "decision": "approve" | "block" | undefined, // Deprecated for PreToolUse but still supported
  "reason": "Explanation for decision" // Deprecated for PreToolUse but still supported
}
```

#### `PostToolUse` Decision Control

`PostToolUse` hooks can control whether a tool call proceeds.

* `"block"` automatically prompts Claude with `reason`.
* `undefined` does nothing. `reason` is ignored.

```json
{
  "decision": "block" | undefined,
  "reason": "Explanation for decision"
}
```

#### `UserPromptSubmit` Decision Control

`UserPromptSubmit` hooks can control whether a user prompt is processed.

* `"block"` prevents the prompt from being processed. The submitted prompt is
  erased from context. `"reason"` is shown to the user but not added to context.
* `undefined` allows the prompt to proceed normally. `"reason"` is ignored.
* `"hookSpecificOutput.additionalContext"` adds the string to the context if not
  blocked.

```json
{
  "decision": "block" | undefined,
  "reason": "Explanation for decision",
  "hookSpecificOutput": {
    "hookEventName": "UserPromptSubmit",
    "additionalContext": "My additional context here"
  }
}
```

#### `Stop`/`SubagentStop` Decision Control

`Stop` and `SubagentStop` hooks can control whether Claude must continue.

* `"block"` prevents Claude from stopping. You must populate `reason` for Claude
  to know how to proceed.
* `undefined` allows Claude to stop. `reason` is ignored.

```json
{
  "decision": "block" | undefined,
  "reason": "Must be provided when Claude is blocked from stopping"
}
```

#### `SessionStart` Decision Control

`SessionStart` hooks allow you to load in context at the start of a session.

* `"hookSpecificOutput.additionalContext"` adds the string to the context.

```json
{
  "hookSpecificOutput": {
    "hookEventName": "SessionStart",
    "additionalContext": "My additional context here"
  }
}
```

#### Exit Code Example: Bash Command Validation

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
    sys.exit(1)

# Validate the command
issues = validate_command(command)

if issues:
    for message in issues:
        print(f"• {message}", file=sys.stderr)
    # Exit code 2 blocks tool call and shows stderr to Claude
    sys.exit(2)
```

#### JSON Output Example: UserPromptSubmit to Add Context and Validation

<Note>
  For `UserPromptSubmit` hooks, you can inject context using either method:

  * Exit code 0 with stdout: Claude sees the context (special case for `UserPromptSubmit`)
  * JSON output: Provides more control over the behavior
</Note>

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

#### JSON Output Example: PreToolUse with Approval

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

# Example: Auto-approve file reads for documentation files
if tool_name == "Read":
    file_path = tool_input.get("file_path", "")
    if file_path.endswith((".md", ".mdx", ".txt", ".json")):
        # Use JSON output to auto-approve the tool call
        output = {
            "decision": "approve",
            "reason": "Documentation file auto-approved",
            "suppressOutput": True  # Don't show in transcript mode
        }
        print(json.dumps(output))
        sys.exit(0)

# For other cases, let the normal permission flow proceed
sys.exit(0)
```

## Working with MCP Tools

Claude Code hooks work seamlessly with
[Model Context Protocol (MCP) tools](/en/docs/claude-code/mcp). When MCP servers
provide tools, they appear with a special naming pattern that you can match in
your hooks.

### MCP Tool Naming

MCP tools follow the pattern `mcp__<server>__<tool>`, for example:

* `mcp__memory__create_entities` - Memory server's create entities tool
* `mcp__filesystem__read_file` - Filesystem server's read file tool
* `mcp__github__search_repositories` - GitHub server's search tool

### Configuring Hooks for MCP Tools

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

## Examples

<Tip>
  For practical examples including code formatting, notifications, and file protection, see [More Examples](/en/docs/claude-code/hooks-guide#more-examples) in the get started guide.
</Tip>

## Security Considerations

### Disclaimer

**USE AT YOUR OWN RISK**: Claude Code hooks execute arbitrary shell commands on
your system automatically. By using hooks, you acknowledge that:

* You are solely responsible for the commands you configure
* Hooks can modify, delete, or access any files your user account can access
* Malicious or poorly written hooks can cause data loss or system damage
* Anthropic provides no warranty and assumes no liability for any damages
  resulting from hook usage
* You should thoroughly test hooks in a safe environment before production use

Always review and understand any hook commands before adding them to your
configuration.

### Security Best Practices

Here are some key practices for writing more secure hooks:

1. **Validate and sanitize inputs** - Never trust input data blindly
2. **Always quote shell variables** - Use `"$VAR"` not `$VAR`
3. **Block path traversal** - Check for `..` in file paths
4. **Use absolute paths** - Specify full paths for scripts (use
   `$CLAUDE_PROJECT_DIR` for the project path)
5. **Skip sensitive files** - Avoid `.env`, `.git/`, keys, etc.

### Configuration Safety

Direct edits to hooks in settings files don't take effect immediately. Claude
Code:

1. Captures a snapshot of hooks at startup
2. Uses this snapshot throughout the session
3. Warns if hooks are modified externally
4. Requires review in `/hooks` menu for changes to apply

This prevents malicious hook modifications from affecting your current session.

## Hook Execution Details

* **Timeout**: 60-second execution limit by default, configurable per command.
  * A timeout for an individual command does not affect the other commands.
* **Parallelization**: All matching hooks run in parallel
* **Environment**: Runs in current directory with Claude Code's environment
  * The `CLAUDE_PROJECT_DIR` environment variable is available and contains the
    absolute path to the project root directory
* **Input**: JSON via stdin
* **Output**:
  * PreToolUse/PostToolUse/Stop: Progress shown in transcript (Ctrl-R)
  * Notification: Logged to debug only (`--debug`)

## Debugging

### Basic Troubleshooting

If your hooks aren't working:

1. **Check configuration** - Run `/hooks` to see if your hook is registered
2. **Verify syntax** - Ensure your JSON settings are valid
3. **Test commands** - Run hook commands manually first
4. **Check permissions** - Make sure scripts are executable
5. **Review logs** - Use `claude --debug` to see hook execution details

Common issues:

* **Quotes not escaped** - Use `\"` inside JSON strings
* **Wrong matcher** - Check tool names match exactly (case-sensitive)
* **Command not found** - Use full paths for scripts

### Advanced Debugging

For complex hook issues:

1. **Inspect hook execution** - Use `claude --debug` to see detailed hook
   execution
2. **Validate JSON schemas** - Test hook input/output with external tools
3. **Check environment variables** - Verify Claude Code's environment is correct
4. **Test edge cases** - Try hooks with unusual file paths or inputs
5. **Monitor system resources** - Check for resource exhaustion during hook
   execution
6. **Use structured logging** - Implement logging in your hook scripts

### Debug Output Example

Use `claude --debug` to see hook execution details:

```
[DEBUG] Executing hooks for PostToolUse:Write
[DEBUG] Getting matching hook commands for PostToolUse with query: Write
[DEBUG] Found 1 hook matchers in settings
[DEBUG] Matched 1 hooks for query "Write"
[DEBUG] Found 1 hook commands to execute
[DEBUG] Executing hook command: <Your command> with timeout 60000ms
[DEBUG] Hook command completed with status 0: <Your stdout>
```

Progress messages appear in transcript mode (Ctrl-R) showing:

* Which hook is running
* Command being executed
* Success/failure status
* Output or error messages

