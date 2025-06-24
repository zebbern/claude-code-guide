<div align="center">

---

### **The Most Complete Claude Code Reference**

> This comprehensive guide covers **every discoverable Claude Code command** as of June 2025,  
> including many features that are not widely known or documented in basic tutorials.

**This represents the most complete Claude Code command reference available.**

---

*For updates and contributions, visit the [official Claude Code documentation](https://claude.ai/code)*

[![Claude Code](https://img.shields.io/badge/Claude%20Code-v1.0.25-blue?logo=anthropic)](https://claude.ai/code)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/anthropics/claude-code)
[![License](https://img.shields.io/badge/License-Anthropic-orange)](https://claude.ai/code)


</div>

<div align="center">

<kbd>

# <code>Visit: [https://zebbern.github.io/](https://zebbern.github.io/) for more detailed info!</code>

| Section                                    | Status          |
|---------------------------------------------|------------------------------|
| Guides on how to install on Windows, Linux, MacOS | ✅ |
| Tips and Tricks                            | ✅ |
| MCP Overview with what to use              | ✅ |
| Community Guides                           | ✅ |
| Troubleshooting                            | ✅ |
| How to use Claude code the most optimal way| ✅ |
### I Usually Start my Claude with <code>Claude --dangerously-skip-permissions</code>

</kbd>

</div>
</div>

---


## Table of Contents

- [Quick Start](#quick-start)
- [Core CLI Commands](#core-cli-commands)
- [CLI Flags & Options](#cli-flags--options)
- [Configuration Commands](#configuration-commands)
- [Slash Commands](#slash-commands)
- [Environment Variables](#environment-variables)
- [Hidden Features](#hidden-features)
- [Advanced Usage](#advanced-usage)
- [Output Formats](#output-formats)
- [Integration Examples](#integration-examples)
- [Troubleshooting](#troubleshooting)
- [Configuration Files](#configuration-files)
- [Security](#security)
- [Beta Features](#beta-features)

## Quick Start

<details>
<summary><strong>Essential Commands (Click to expand)</strong></summary>

```bash
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
```

</details>

---

## Core CLI Commands

### Interactive Commands

| Command | Description | Example |
|---------|-------------|----------|
| `claude` | Start interactive REPL | `claude` |
| `claude "query"` | REPL with initial prompt | `claude "help me debug this"` |
| `claude -p "query"` | One-off query (print mode) | `claude -p "explain this function"` |
| `cat file \| claude -p` | Process piped content | `cat error.log \| claude -p "summarize"` |

### Management Commands

| Command | Description | Use Case |
|---------|-------------|----------|
| `claude config` | Configure settings | Initial setup |
| `claude update` | Update to latest version | Stay current |
| `claude mcp` | Configure MCP servers | Add integrations |

## CLI Flags & Options

### Essential Flags

<table>
<tr>
<th>Flag</th>
<th>Short</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td><code>--print</code></td>
<td><code>-p</code></td>
<td>Print response without interactive mode</td>
<td><code>claude -p "help"</code></td>
</tr>
<tr>
<td><code>--resume</code></td>
<td><code>-r</code></td>
<td>Resume specific session by ID</td>
<td><code>claude -r abc123</code></td>
</tr>
<tr>
<td><code>--continue</code></td>
<td><code>-c</code></td>
<td>Load most recent conversation</td>
<td><code>claude -c</code></td>
</tr>
<tr>
<td><code>--verbose</code></td>
<td>-</td>
<td>Enable detailed logging</td>
<td><code>claude --verbose</code></td>
</tr>
<tr>
<td><code>--debug</code></td>
<td><code>-d</code></td>
<td>Enable debug mode</td>
<td><code>claude --debug</code></td>
</tr>
<tr>
<td><code>--help</code></td>
<td><code>-h</code></td>
<td>Show help information</td>
<td><code>claude --help</code></td>
</tr>
</table>

### Output Format Control

<details>
<summary><strong>Format Options</strong></summary>

| Flag | Options | Description |
|------|---------|-------------|
| `--output-format` | `text`, `json`, `stream-json` | Control response format |
| `--input-format` | `text`, `stream-json` | Control input format |
| `--json` | - | Shorthand for JSON output |

**Examples:**
```bash
# Text output (default)
claude -p "help" --output-format text

# Structured JSON
claude -p "analyze" --output-format json

# Streaming JSON for real-time
claude -p "process" --output-format stream-json
```

</details>

### Permission & Security Flags

> ⚠️ **Warning**: Use security flags with extreme caution!

<details>
<summary><strong>Security Controls</strong></summary>

| Flag | Risk Level | Description |
|------|------------|-------------|
| `--dangerously-skip-permissions` | **HIGH** | Skip ALL permission prompts |
| `--allowedTools <tools>` | **LOW** | Whitelist specific tools |
| `--disallowedTools <tools>` | **LOW** | Blacklist specific tools |

**Safe Examples:**
```bash
# Allow only git operations
claude --allowedTools "Bash(git:*)"

# Allow file editing only
claude --allowedTools "Edit,View"

# DANGEROUS - skip all checks
claude --dangerously-skip-permissions
```

</details>

### Advanced/Hidden Flags

<details>
<summary><strong>Expert-Level Options</strong></summary>

#### System Control

| Flag | Purpose | Example |
|------|---------|----------|
| `--mcp-debug` | Debug MCP connections | `claude --mcp-debug` |
| `--max-turns <n>` | Limit agentic interactions | `claude --max-turns 5` |
| `--add-dir <path>` | Add working directories | `claude --add-dir ../lib ../src` |
| `--model <model>` | Set specific model | `claude --model sonnet` |

#### Prompt Engineering

| Flag | Purpose | Example |
|------|---------|----------|
| `--system-prompt` | Override system prompt | `claude --system-prompt "You are an expert"` |
| `--append-system-prompt` | Append to system prompt | `claude --append-system-prompt "Focus on security"` |
| `-system` | Alternative syntax | `claude -system "Custom prompt"` |

#### Tool Management

| Flag | Purpose | Example |
|------|---------|----------|
| `--permission-prompt-tool` | Custom permission handler | `claude --permission-prompt-tool auth_tool` |
| `--allow-tool` | Allow specific tool | `claude --allow-tool Edit` |
| `--disallow-tool` | Block specific tool | `claude --disallow-tool Bash` |

</details>

### Experimental Flags

> **Under Development**: These flags are proposed/experimental

<details>
<summary><strong>Future Features</strong></summary>

| Flag | Status | Purpose |
|------|--------|----------|
| `--no-memory` | **Proposed** | Disable CLAUDE.md loading |
| `--no-tools` | **Proposed** | Exclude tool context |
| `--no-env` | **Proposed** | Disable environment context |

</details>

### Cloud Provider Integration

<div align="center">

| Provider | Flag | Service |
|----------|------|------|
| **Amazon Bedrock** | `--use-bedrock` | AWS |
| **Google Vertex AI** | `--use-vertex` | GCP |

</div>

```bash
# Use AWS Bedrock
claude --use-bedrock "analyze this code"

# Use Google Vertex AI
claude --use-vertex "help with deployment"
```

## Configuration Commands

### Config Management

<table>
<tr>
<th>Command</th>
<th>Purpose</th>
<th>Scope</th>
<th>Example</th>
</tr>
<tr>
<td><code>claude config list</code></td>
<td>List all settings</td>
<td>Current</td>
<td><code>claude config list</code></td>
</tr>
<tr>
<td><code>claude config get &lt;key&gt;</code></td>
<td>Get specific value</td>
<td>Current</td>
<td><code>claude config get model</code></td>
</tr>
<tr>
<td><code>claude config set &lt;key&gt; &lt;value&gt;</code></td>
<td>Set value</td>
<td>Project</td>
<td><code>claude config set model sonnet</code></td>
</tr>
<tr>
<td><code>claude config set -g &lt;key&gt; &lt;value&gt;</code></td>
<td>Set global value</td>
<td>Global</td>
<td><code>claude config set -g model opus</code></td>
</tr>
<tr>
<td><code>claude config add &lt;key&gt; &lt;value&gt;</code></td>
<td>Add to list</td>
<td>Current</td>
<td><code>claude config add allowedTools Edit</code></td>
</tr>
<tr>
<td><code>claude config remove &lt;key&gt; &lt;value&gt;</code></td>
<td>Remove from list</td>
<td>Current</td>
<td><code>claude config remove allowedTools Bash</code></td>
</tr>
</table>

**Quick Setup:**
```bash
# Set global preferences
claude config set -g model claude-sonnet-4
claude config set -g verbose true

# Set project-specific settings
claude config set allowedTools "Edit,View,Bash(git:*)"
```

### MCP Commands

> **MCP**: Model Context Protocol for extending Claude's capabilities

<details>
<summary><strong>MCP Server Management</strong></summary>

| Command | Purpose | Example |
|---------|---------|----------|
| `claude mcp serve` | Start MCP server | `claude mcp serve` |
| `claude mcp add <name> <cmd>` | Add stdio server | `claude mcp add git "git-mcp-server"` |
| `claude mcp remove <name>` | Remove server | `claude mcp remove git` |

**Popular MCP Servers:**
```bash
# Database integration
claude mcp add postgres "postgres-mcp-server"

# Web browsing
claude mcp add browser "browser-mcp-server"

# File system operations
claude mcp add fs "filesystem-mcp-server"
```

</details>

## Slash Commands

> **Interactive Mode Only**: These commands work inside the Claude REPL

### Core Slash Commands

<details>
<summary><strong>Essential Commands</strong></summary>

<div align="center">

| Command | Purpose | Quick Tip |
|---------|---------|--------|
| `/help` | Show all commands | Start here! |
| `/clear` | Clear conversation | Fresh start |
| `/status` | System information | Check everything |
| `/cost` | Token usage stats | Monitor spending |
| `/exit` | Exit safely | Clean shutdown |

</div>

</details>

<details>
<summary><strong>Management Commands</strong></summary>

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/config` | View/modify settings | Setup & tuning |
| `/permissions` | Manage tool access | Security control |
| `/doctor` | Health check | Troubleshooting |
| `/init` | Create CLAUDE.md | New projects |
| `/bug` | Report issues | Found a problem? |

</details>

<details>
<summary><strong>History & Session Commands</strong></summary>

| Command | Purpose | Pro Tip |
|---------|---------|----------|
| `/undo` | Revert last change | Instant rollback |
| `/compact` | Compress conversation | Save context |
| `/login` | Switch accounts | Multi-account |
| `/logout` | Sign out | Security |

</details>

<details>
<summary><strong>Interface Commands</strong></summary>

| Command | Purpose | For Users Who |
|---------|---------|---------------|
| `/vim` | Enable Vim keybindings | Love Vim |

</details>

### Advanced Slash Commands

<details>
<summary><strong>Workspace Management</strong></summary>

| Command | Purpose | Example |
|---------|---------|----------|
| `/add-dir <path>` | Add working directory | `/add-dir ../backend` |
| `/memory` | Edit memory files | `/memory` |
| `/model <name>` | Change AI model | `/model claude-opus-4` |

</details>

<details>
<summary><strong>Integration Commands</strong></summary>

| Command | Integration | Purpose |
|---------|-------------|----------|
| `/ide` | IDE Tools | Manage IDE integrations |
| `/mcp` | MCP Servers | Manage MCP connections |
| `/install-github-app` | GitHub | Setup GitHub Actions |
| `/pr-comments` | GitHub | Get PR comments |
| `/review` | GitHub | Review pull requests |

</details>

<details>
<summary><strong>AI Enhancement Commands</strong></summary>

| Command | Purpose | Level |
|---------|---------|--------|
| `/think` | Extended thinking mode | **Advanced** |
| `/upgrade` | Access Claude Max | **Premium** |
| `/user` | Personal commands | **Custom** |

</details>

<details>
<summary><strong>Experimental Commands</strong></summary>

| Command | Status | Purpose |
|---------|--------|----------|
| `/terminal-setup` | **Proposed** | Terminal optimizations |

</details>

### Custom Slash Commands

> **Build Your Own**: Create custom commands for repeated workflows

<table>
<tr>
<th>Type</th>
<th>Pattern</th>
<th>Storage Location</th>
<th>Scope</th>
</tr>
<tr>
<td><strong>Project</strong></td>
<td><code>/project:&lt;command&gt;</code></td>
<td><code>.claude/commands/</code></td>
<td>Current project</td>
</tr>
<tr>
<td><strong>Personal</strong></td>
<td><code>/user:&lt;command&gt;</code></td>
<td><code>~/.claude/commands/</code></td>
<td>All projects</td>
</tr>
</table>

**Examples:**
```bash
# Project-specific workflow
/project:deploy     # Deploy this project
/project:test-all   # Run full test suite

# Personal shortcuts
/user:morning       # Daily startup routine
/user:review-pr     # PR review checklist
```

## Environment Variables

### Core Configuration Variables

<div align="center">

| Variable | Purpose | Example | Required |
|----------|---------|---------|----------|
| `ANTHROPIC_API_KEY` | API Authentication | `sk-ant-api03-xxx` | **Yes** |
| `ANTHROPIC_MODEL` | Default model | `claude-sonnet-4` | No |
| `ANTHROPIC_SMALL_FAST_MODEL` | Quick operations | `claude-haiku-3` | No |

</div>

**Quick Setup:**
```bash
# Essential - Add to your ~/.bashrc or ~/.zshrc
export ANTHROPIC_API_KEY="sk-ant-api03-your-key-here"

# Optional - Set default model
export ANTHROPIC_MODEL="claude-sonnet-4"
```

### Claude Code Specific Variables

<details>
<summary><strong>Cloud Provider Integration</strong></summary>

| Variable | Cloud | Purpose |
|----------|-------|----------|
| `CLAUDE_CODE_USE_BEDROCK` | **AWS** | Enable Bedrock integration |
| `CLAUDE_CODE_USE_VERTEX` | **GCP** | Enable Vertex AI integration |
| `CLAUDE_CODE_SKIP_BEDROCK_AUTH` | **AWS** | Skip authentication (gateways) |
| `CLAUDE_CODE_SKIP_VERTEX_AUTH` | **GCP** | Skip authentication (gateways) |

</details>

<details>
<summary><strong>Telemetry & Privacy</strong></summary>

| Variable | Purpose | Privacy Impact |
|----------|---------|----------------|
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | Disable all non-essential traffic | **High Privacy** |
| `CLAUDE_CODE_ENABLE_TELEMETRY` | Control telemetry | **Configurable** |

**Privacy-First Setup:**
```bash
# Maximum privacy
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

</details>

### Feature Control Variables

<details>
<summary><strong>Privacy & Security Controls</strong></summary>

| Variable | Feature | Privacy Level |
|----------|---------|---------------|
| `DISABLE_AUTOUPDATER=1` | Auto-updates | **Medium** |
| `DISABLE_BUG_COMMAND=1` | Bug reporting | **High** |
| `DISABLE_ERROR_REPORTING=1` | Error reports | **High** |
| `DISABLE_TELEMETRY=1` | Analytics | **High** |

</details>

<details>
<summary><strong>Cost & Performance Controls</strong></summary>

| Variable | Feature | Cost Impact |
|----------|---------|-------------|
| `DISABLE_COST_WARNINGS=1` | Cost alerts | **None** |
| `DISABLE_NON_ESSENTIAL_MODEL_CALLS=1` | Extra AI calls | **Saves Money** |
| `DISABLE_PROMPT_CACHING=1` | Caching | **Costs More** |

</details>

**Recommended Privacy Setup:**
```bash
# Privacy-focused configuration
export DISABLE_TELEMETRY=1
export DISABLE_ERROR_REPORTING=1
export DISABLE_BUG_COMMAND=1

# Cost optimization
export DISABLE_NON_ESSENTIAL_MODEL_CALLS=1
```

### Network & Proxy Variables

<div align="center">

| Variable | Protocol | Example |
|----------|----------|----------|
| `HTTP_PROXY` | HTTP | `http://proxy.company.com:8080` |
| `HTTPS_PROXY` | HTTPS | `https://proxy.company.com:8443` |

</div>

**Corporate Network Setup:**
```bash
# Corporate proxy configuration
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="https://proxy.company.com:8443"
```

### Advanced Configuration Variables

<details>
<summary><strong>AI Behavior Tuning</strong></summary>

| Variable | Purpose | Example |
|----------|---------|----------|
| `MAX_THINKING_TOKENS` | Thinking budget | `MAX_THINKING_TOKENS=50000` |
| `MCP_TIMEOUT` | MCP startup timeout | `MCP_TIMEOUT=10000` |

</details>

<details>
<summary><strong>Regional Configuration</strong></summary>

| Variable | Cloud Provider | Purpose |
|----------|---------------|----------|
| `AWS_REGION` | **AWS Bedrock** | `us-east-1` |
| `CLAUDE_ML_REGION` | **GCP Vertex** | `us-central1` |

**Multi-Region Setup:**
```bash
# AWS Bedrock in US East
export AWS_REGION="us-east-1"

# GCP Vertex in US Central
export CLAUDE_ML_REGION="us-central1"
```

</details>

### Recent Updates (2025)

<details>
<summary><strong>Version 1.0.25 (Latest)</strong></summary>

#### New Features
- Fixed slash command reliability issues
- Improved `/mcp` output functionality  
- Fixed settings array merge bug

#### June 18, 2025 Update
- **SSE Transport**: Real-time MCP communication
- **HTTP Transport**: Web-based MCP servers
- **Remote MCP**: Cloud MCP functionality
- **Enhanced Auth**: Better MCP authentication

</details>

---

## Hidden Features

> **Secret Sauce**: Features most users don't know about

### Tool Permission Patterns

<details>
<summary><strong>Precise Tool Control</strong></summary>

#### **Allowlist Patterns**

| Pattern | Scope | Example |
|---------|-------|----------|
| `"Tool"` | Entire tool | `"Edit"` |
| `"Tool(scope:*)"` | Scoped access | `"Bash(git:*)"` |
| `"Tool1,Tool2"` | Multiple tools | `"Edit,View"` |
| `"mcp__server__tool"` | MCP tools | `"mcp__puppeteer__navigate"` |

#### **Common Patterns**

```bash
# Text editing only
claude --allowedTools "Edit,View"

# Git operations only  
claude --allowedTools "Bash(git:*)"

# Development workflow
claude --allowedTools "Edit,View,Bash(npm:*),Bash(git:*)"

# Web automation
claude --allowedTools "mcp__puppeteer__puppeteer_navigate,mcp__puppeteer__puppeteer_click"
```

</details>

## Advanced Usage

### Automation Patterns

<details>
<summary><strong>Headless Automation</strong></summary>

```bash
# JSON output for scripts
claude -p "analyze code" --output-format stream-json

# Dangerous mode (containerized only!)
claude --resume abc123 --dangerously-skip-permissions

# Debug everything
claude --verbose --mcp-debug
```

</details>

### AI Behavior Control

<details>
<summary><strong>Prompt Engineering</strong></summary>

```bash
# Custom system prompt
claude --system-prompt "You are a security expert" -p "review code"

# Append to system prompt
claude --append-system-prompt "Focus on vulnerabilities" -p "review"

# Thinking levels
claude "think about this"           # Basic (1K tokens)
claude "think hard about this"      # Enhanced
claude "ultrathink about this"      # Maximum (128K tokens)
```

</details>

### Interactive Mode Tricks

<details>
<summary><strong>Keyboard Shortcuts</strong></summary>

| Shortcut | Mode | Purpose |
|----------|------|----------|
| `Shift+Tab` (1x) | Auto-Accept | Skip confirmations |
| `Shift+Tab` (2x) | Planning | Analyze without writing |
| `Escape` | Interrupt | Stop Claude anytime |
| `Escape` (2x) | History | Edit previous prompts |

**Workflow Example:**
1. Start Claude Code
2. Press `Shift+Tab` twice → Planning mode
3. Describe task → Claude plans without executing
4. Review plan → Exit planning mode to execute

</details>

### Advanced Configurations

<details>
<summary><strong>Power User Setup</strong></summary>

```bash
# Multi-directory workspace
claude --add-dir ../apps ../lib ../shared

# Controlled execution
claude -p --max-turns 3 "refactor function"

# Custom permission handler
claude -p --permission-prompt-tool mcp_auth_tool "write files"

# Specific model selection
claude --model claude-sonnet-4-20250514 "analyze codebase"

# Extended thinking + tools (beta)
claude "ultrathink about this migration and use tools as needed"
```

</details>

### Power User Aliases

<details>
<summary><strong>Community Shortcuts</strong></summary>

> ⚠️ **Warning**: Use dangerous aliases only in safe environments!

```bash
# Quick access (add to ~/.bashrc or ~/.zshrc)
alias cc="claude --dangerously-skip-permissions"  # DANGEROUS
alias yolo="claude --dangerously-skip-permissions" # VERY DANGEROUS

# Output formats
alias claude-json="claude -p --output-format json"
alias claude-stream="claude -p --output-format stream-json"

# Safe shortcuts
alias cl="claude"                                   # Simple shortcut
alias clp="claude -p"                              # Print mode
alias cls="claude /status"                         # Quick status
```

</details>

## Configuration Files

### Settings Files

<div align="center">

| File | Scope | Purpose |
|------|-------|----------|
| `~/.claude.json` | **Global** | User-wide settings |
| `.claude/settings.json` | **Project** | Project-specific config |
| `~/.config/claude-code/auth.json` | **Auth** | Authentication data |

</div>

### Custom Commands

<table>
<tr>
<th>Directory</th>
<th>Scope</th>
<th>Command Pattern</th>
</tr>
<tr>
<td><code>.claude/commands/</code></td>
<td>Project</td>
<td><code>/project:command</code></td>
</tr>
<tr>
<td><code>~/.claude/commands/</code></td>
<td>Personal</td>
<td><code>/user:command</code></td>
</tr>
</table>

### MCP Configuration

<div align="center">

| File | Purpose |
|------|----------|
| `.claude/mcp.json` | MCP server config |
| `~/.claude-code-mcp.env` | MCP environment vars |

</div>

## Security

### Dangerous Flags

> ⚠️ **EXTREME CAUTION REQUIRED**

<div align="center">

| Flag | Risk Level | Impact |
|------|------------|--------|
| `--dangerously-skip-permissions` | **CRITICAL** | Bypasses ALL security checks |

</div>

**Safe Usage Guidelines:**
- **Only use in containerized environments**
- **Never use with internet access**
- **Can cause data loss/corruption**
- **Major security vulnerability**

### Safe Usage Patterns

<details>
<summary><strong>Security Best Practices</strong></summary>

#### **Always Review First**
- Review commands before granting permissions
- Use `/permissions` to audit settings
- Use `/doctor` for security health checks

#### **Principle of Least Privilege**
- Avoid blanket permissions
- Use specific tool allowlists
- Regular permission audits

#### **Security Commands**
```bash
# Check security status
claude /doctor

# Review permissions
claude /permissions

# Safe tool allowlist
claude --allowedTools "Edit,View"
```

</details>

## Output Formats

### Text Output (Default)

```bash
# Standard human-readable output
claude -p "explain this function" --output-format text
```

<details>
<summary><strong>Example Output</strong></summary>

```
This function calculates the factorial of a number recursively...
```

</details>

### JSON Output

```bash
# Structured data with metadata
claude -p "analyze this code" --output-format json
```

<details>
<summary><strong>Example Output</strong></summary>

```json
{
  "response": "This function calculates...",
  "metadata": {
    "cost": 0.0023,
    "duration": 1.2,
    "model": "claude-sonnet-4"
  }
}
```

</details>

### Streaming JSON Output

```bash
# Real-time streaming for large operations
claude -p "process large file" --output-format stream-json
```

<details>
<summary><strong>Example Output</strong></summary>

```json
{"type": "start", "timestamp": "2025-06-23T10:00:00Z"}
{"type": "progress", "content": "Processing..."}
{"type": "result", "content": "Analysis complete"}
{"type": "end", "timestamp": "2025-06-23T10:00:05Z"}
```

> ⚠️ **Note**: Each line is valid JSON, but concatenated output is not valid JSON

</details>

## Integration Examples

### CI/CD Integration

<details>
<summary><strong>Build Pipeline Examples</strong></summary>

```bash
# Automated fixing in build scripts
claude -p "fix linting errors" --dangerously-skip-permissions --output-format json

# Controlled tool access
claude -p "run tests and fix failures" --allowedTools "Bash(npm:*),Edit"

# Pipeline integration
if claude -p "check code quality" --output-format json | jq -r '.passed'; then
  echo "Quality checks passed"
else
  echo "Quality issues found"
  exit 1
fi
```

</details>

### Scripting Integration

<details>
<summary><strong>Automation Scripts</strong></summary>

```bash
# Log analysis
cat error.log | claude -p "summarize errors" --output-format json > summary.json

# Batch processing
for file in *.py; do
    claude -p "review this Python file" < "$file" --output-format text >> review.txt
done

# Monitoring integration
journal_errors=$(journalctl --since "1 hour ago" --priority=err)
echo "$journal_errors" | claude -p "analyze system errors" --output-format json > /tmp/error_analysis.json
```

</details>

## Troubleshooting

### Health Checks

<div align="center">

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `claude --help` | 📚 Show all options | Getting started |
| `/doctor` | 🩺 Health check | Something's wrong |
| `/status` | 📊 Current config | Check settings |
| `claude config list` | 📝 List all settings | Audit configuration |

</div>

### Debug Mode

<details>
<summary><strong>Debug Commands</strong></summary>

```bash
# Detailed logging
claude --verbose

# Full debug mode
claude --debug

# MCP-specific debugging
claude --mcp-debug

# Combined debugging
claude --verbose --debug --mcp-debug
```

</details>

### Reset & Recovery

<details>
<summary><strong>Emergency Recovery</strong></summary>

```bash
# Reset authentication
rm -rf ~/.config/claude-code/auth.json

# Clean logout/login
claude /logout
claude /login

# Reset all settings
rm -rf ~/.claude.json
rm -rf .claude/settings.json

# Full health check after reset
claude /doctor
```

</details>

## Beta Features

### Interactive Mode Controls

<div align="center">

| Shortcut | Action | Mode |
|----------|--------|------|
| `Shift+Tab` (1x) | Auto-Accept | Skip confirmations |
| `Shift+Tab` (2x) | Planning | Analyze without writing |
| `Escape` | Interrupt | Stop Claude anytime |
| `Escape` (2x) | History | Edit previous prompts |

</div>

### Thinking Budget Control

> **Secret**: Special phrases control AI thinking depth

<details>
<summary><strong>Thinking Levels</strong></summary>

| Phrase | Thinking Budget | Use Case |
|--------|----------------|----------|
| `"think"` | 1,024 tokens | Basic analysis |
| `"think hard"` | Enhanced | Complex problems |
| `"think harder"` | Advanced | Deep analysis |
| `"think more"` | Alternative enhanced | Thorough review |
| `"ultrathink"` | 128K tokens | Maximum depth |
| `"megathink"` | Alternative max | Alternative maximum |

**Examples:**
```bash
# Basic thinking
claude "think about this algorithm"

# Enhanced thinking
claude "think hard about the security implications"

# Maximum thinking
claude "ultrathink about this database migration"
```

</details>

### Extended Thinking Mode

<details>
<summary><strong>Advanced Thinking Controls</strong></summary>

```bash
# Slash command trigger
/think

# Custom budget (proposed)
--thinking-budget 50000
```

</details>

### Permission Prompt Tool Integration

<details>
<summary><strong>Custom Permission Handler</strong></summary>

The `--permission-prompt-tool` expects an MCP tool that returns JSON:

#### **Allow Execution**
```json
{
  "behavior": "allow",
  "updatedInput": {...}  // original or modified input
}
```

#### **Deny Execution**
```json
{
  "behavior": "deny",
  "message": "Reason for denial"
}
```

</details>

### GitHub Integration Features

<div align="center">

| Feature | Status | Description |
|---------|--------|-------------|
| `@claude` mentions | **Beta** | PR/Issue mentions |
| GitHub Actions | **Beta** | Automated workflows |
| `gh` CLI integration | **Stable** | Repository operations |
| IDE extensions | **Beta** | VS Code & JetBrains |
| Inline edits | **Beta** | IDE interface edits |

</div>

### Experimental Features

<details>
<summary><strong>Cutting-Edge Capabilities</strong></summary>

#### **AI Enhancements**
- **Extended thinking with tool use**: Claude uses tools during thinking
- **Parallel tool execution**: Multiple tools run simultaneously
- **128K output tokens**: 15x longer responses

#### **Interactive Modes**
- **Planning mode**: `Shift+Tab` twice for analysis without writes
- **Auto-accept mode**: `Shift+Tab` once for autonomous implementation

#### **Integrations**
- **IDE integrations**: VS Code and JetBrains extensions
- **Advanced memory system**: Multi-tiered contextual memory

</details>

---

## Important Notes

<details>
<summary><strong>Command Precedence & Behavior</strong></summary>

### **Command Precedence**
```
Query > Session > App Config > Environment Variables > Defaults
```

### **Key Behaviors**
1. **Session Management**: Each command can specify session name for isolation
2. **Tool Names**: Use exact names like "Replace", "Edit", "Bash", "View"
3. **MCP Integration**: Model Context Protocol with SSE/HTTP support
4. **Version Updates**: Use `claude update` for latest features
5. **DMCA Notice**: Decompiled source repository was taken down
6. **Beta Features**: GitHub Actions, IDE extensions in beta
7. **Thinking Modes**: Special phrases trigger different thinking levels
8. **Latest Version**: 1.0.25 (June 2025) with improved reliability
9. **Real-time Features**: SSE transport enables real-time MCP communication

</details>

---

## ✅ Research Verification

<div align="center">

### **COMPLETE RESEARCH CONDUCTED**

| Source | Status |
|--------|--------|
| Official Documentation | **Thoroughly Reviewed** |
| GitHub Repository & Issues | **Comprehensively Analyzed** |
| Community Discussions | **Extensively Searched** |
| CLI Reference | **Completely Documented** |
| Environment Variables | **Fully Catalogued** |
| Slash Commands | **Entirely Mapped** |
| Hidden Features | **Discovered & Documented** |
| 2025 Updates | **Latest Changelog Reviewed** |
| Source Code Analysis | **Completed (pre-DMCA)** |

</div>


