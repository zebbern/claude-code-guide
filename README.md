<div align="center">
  
### **Claude Code Guide**

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
### I Usually Start my Claude with <code>Claude --dangerously-skip-permissions</code> only use this if you know exactly what ur doing!

</kbd>

</div>
</div>

---

## Quick Start

```bash
# Quick Installment

## Method 1 – NPM (global) ⭐️ Official
npm install -g @anthropic-ai/claude-code
# Requires Node 18+ on macOS / Linux / WSL :contentReference[oaicite:0]{index=0}

## Method 2 – Homebrew Tap (macOS & Linux) *️⃣
brew install anthropic/tap/claude-code
# Formula contributed by the community :contentReference[oaicite:1]{index=1}

## Method 3 – Arch Linux AUR *️⃣
yay -S claude-code        # or paru -S claude-code
# Keeps pace with npm releases :contentReference[oaicite:2]{index=2}

## Method 4 – Docker (containerised) *️⃣
docker pull ghcr.io/rchgrav/claudebox:latest
docker run -it -v "$PWD":"$PWD" -w "$PWD" \
ghcr.io/rchgrav/claudebox:latest
# Nice when you can’t touch the host system :contentReference[oaicite:3]{index=3}

## Method 5 – Windows via WSL (Anthropic-recommended path)
# 1) Enable WSL 2 and install Ubuntu
# 2) Inside Ubuntu:
sudo apt update && sudo apt install -y nodejs npm
npm install -g @anthropic-ai/claude-code
# Step-by-step guide :contentReference[oaicite:4]{index=4}

## Method 6 – Build from source (any OS) *️⃣
git clone https://github.com/anthropics/claude-code.git
cd claude-code && pnpm install && pnpm build
pnpm --filter cli run cli:install
# Handy for cutting-edge commits or local patches :contentReference[oaicite:5]{index=5}

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


## 🚀 Installation & Setup

**System Requirements:**
- Node.js 16+ or standalone binary
- API key from Anthropic
- 4GB RAM minimum (8GB+ recommended for large projects)
- Internet connection for API calls

**Supported Platforms:**
- macOS (Intel/Apple Silicon)
- Linux (Ubuntu 18+, Debian 10+, CentOS 7+)
- Windows 10/11 (WSL recommended)

### Installation Methods

#### Method 1: NPM Installation (Verified ✅)
```bash
# Install globally - CORRECT PACKAGE NAME
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version
```


### Initial Setup

#### 1. API Key Configuration (Verified ✅)
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

#### 2. Basic Configuration (Mostly Verified ✅)
```bash
# Interactive setup
claude config

# Set basic defaults 
claude config set -g model claude-sonnet-4
claude config set -g verbose true
claude config set -g outputFormat text

# Test installation
claude "Hello, Claude!"
claude /doctor  
```

#### 3. Settings i Turn Off
```bash
export DISABLE_TELEMETRY=1
export DISABLE_ERROR_REPORTING=1
export DISABLE_NON_ESSENTIAL_MODEL_CALLS=1


# Security defaults
claude config set allowedTools "Edit,View"
claude config set hasTrustDialogAccepted
claude config set hasCompletedProjectOnboarding 
claude config set ignorePatterns
claude config set --global
```

### Health Check & Testing
```bash
# Basic functionality test 
claude "Explain what you can do"

# Print mode test 
claude -p "What is 2+2?"

# Tool permission test
claude "Create a file called test.txt with 'Hello World'"
# Should prompt for Edit permission

# Session continuity test  
claude -c  # Should continue from previous session
```

# health check
```
claude /doctor
Expected output might include:
# ✅ API Key: Valid
# ✅ Network: Connected  
# ✅ Model Access: Available

# Also check if everything is correct at
~/claude/local/package-lock.json
```

---

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
Global MCP servers are configured in `~/.claude-code/mcp/global.json`
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

# Setup examples
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

## ⌨️ Commands Reference

### CLI Commands

#### Core Commands
| Command | Description | Example | Status |
|---------|-------------|---------|--------|
| `claude` | Start interactive REPL | `claude` |
| `claude "query"` | REPL with initial prompt | `claude "help debug this"` |
| `claude -p "query"` | One-shot query (print mode) | `claude -p "explain function"` |

#### Session Management  
| Command | Description | Example | Status |
|---------|-------------|---------|--------|
| `claude -c` | Continue last session | `claude -c`  |
| `claude -r <id>` | Resume specific session | `claude -r abc123`  |
| `claude --resume <name>` | Resume named session | `claude --resume project-review` |

#### Configuration Management
| Command | Description | Example | Status |
|---------|-------------|---------|--------|
| `claude config` | Interactive configuration | `claude config`  |
| `claude config list` | List all settings | `claude config list`  |
| `claude config get <key>` | Get specific value | `claude config get model`  |
| `claude config set <key> <value>` | Set value | `claude config set model sonnet` |

### CLI Flags & Options

#### Essential Flags 
| Flag | Short | Description | Example |
|------|-------|-------------|---------|
| `--print` | `-p` | Print response without interactive mode | `claude -p "help"` |
| `--continue` | `-c` | Load most recent conversation | `claude -c` |
| `--help` | `-h` | Show help information | `claude --help` |
| `--version` | `-v` | Show version | `claude --version` |

#### Output Control Flags 
| Flag | Options | Description | Example |
|------|---------|-------------|---------|
| `--output-format` | `text`, `json`, `stream-json` | Control response format | `claude -p "help" --output-format json` |
| `--json` | - | Shorthand for JSON output | `claude -p "analyze" --json` |

#### Security & Permission Flags 
| Flag | Risk Level | Description | Example |
|------|------------|-------------|---------|
| `--allowedTools <tools>` | **LOW** | Whitelist specific tools | `claude --allowedTools "Edit,View"` |
| `--disallowedTools <tools>` | **LOW** | Blacklist specific tools | `claude --disallowedTools "Bash"` |
| `--dangerously-skip-permissions` | **CRITICAL** | Skip ALL permission prompts | `claude --dangerously-skip-permissions` |

#### Advanced Flags
| Flag | Purpose | Example | Notes |
|------|---------|---------|--------|
| `--add-dir <path>` | Add working directories | `claude --add-dir ../lib ../src` |
| `--model <model>` | Set specific model | `claude --model sonnet` | 
| `--verbose` | Enable detailed logging | `claude --verbose` | 

### Slash Commands (Interactive Mode)

#### Commands
| Command | Purpose | Status |
|---------|---------|--------|
| `/help` | Show all slash commands | 
| `/clear` | Clear current conversation |
| `/exit` | Exit Claude safely | 
| `/bug` | Report issues | 

#### Commands
```bash
/doctor        # Complete health check
/status        # System information  
/cost          # Token usage stats
/config        # Configuration menu
/permissions   # Manage tool access
/memory        # Edit memory files
/sessions      # List all sessions
```

---

## ⚙️ Configuration

### Configuration System Overview

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

#### Variables
```bash
export DISABLE_NON_ESSENTIAL_MODEL_CALLS=1  
export MAX_THINKING_TOKENS=50000
export DISABLE_TELEMETRY=1


# Cloud provider variables
export CLAUDE_CODE_USE_BEDROCK=1
export CLAUDE_CODE_USE_VERTEX=1
```
![image](https://github.com/user-attachments/assets/d07be233-3322-4510-bb98-4165589d1924)


#### Network & Proxy
```bash
# Standard proxy variables
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="https://proxy.company.com:8443"  
export NO_PROXY="localhost,127.0.0.1,*.company.com"
```

---

## Security & Permissions

### Permission System

**How it works**:
- Claude asks for permission before using tools
- Permissions are remembered per session
- Dangerous operations require confirmation

#### Permission Levels
| Level | Description | Risk | Use Case |
|-------|-------------|------|----------|
| **Interactive** | Prompt for each operation | **Low** | Development work |
| **Allowlist** | Pre-approved tools only | **Medium** | Automation scripts |
| **Dangerous** | Skip all permissions | **CRITICAL** | Containers only |

#### Tool Permission Patterns 
```bash
# Allow specific tools
claude --allowedTools "Edit,View"

# Allow tool categories  
claude --allowedTools "Edit,View,Bash"

# Scoped permissions (Git operations only)
claude --allowedTools "Bash(git:*)"

# Multiple scopes
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

# Claude Code Configuration Guide

> A practical guide for editing your `~/.claude.json` configuration file safely

[![Claude Code](https://img.shields.io/badge/Claude%20Code-v1.0.38+-blue)](https://claude.ai/code)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Table of Contents

- [Overview](#overview)
- [File Location](#file-location)
- [What You Can Safely Edit](#what-you-can-safely-edit)
  - [Theme Settings](#1-theme-settings)
  - [Editor Mode](#2-editor-mode)
  - [Auto Updates](#3-auto-updates)
  - [Global MCP Servers](#4-global-mcp-servers)
  - [Feature Flags](#5-feature-flags)
  - [Resetting Tips and Onboarding](#6-resetting-tips-and-onboarding)
- [What NOT to Edit](#what-you-should-not-edit)
- [How to Make Changes Safely](#how-to-make-changes-safely)
- [Common Editing Tasks](#common-editing-tasks)
- [Troubleshooting](#troubleshooting)
- [Security Notes](#security-notes)
- [Contributing](#contributing)

## Overview

This guide shows you what you can safely edit in your `~/.claude.json` configuration file based on real, working configurations. **Always backup your file before making changes.**

## File Location

| Operating System | File Path |
|-----------------|-----------|
| **Linux/macOS** | `~/.claude.json` |
| **Windows** | `%USERPROFILE%\.claude.json` |

## What You Can Safely Edit

### 1. Theme Settings

```json
{
  "theme": "dark-daltonized"
}
```

**Known working themes** (based on actual configurations):
- `"dark-daltonized"` - Dark theme optimized for colorblind users
- `"dark"` - Standard dark theme
- `"light"` - Light theme

### 2. Editor Mode

```json
{
  "editorMode": "vim"
}
```

**Options:**
- `"vim"` - Vim keybindings
- `"emacs"` - Default mode

### 3. Auto Updates

```json
{
  "autoUpdates": true
}
```

**Options:**
- `true` - Enable automatic updates
- `false` - Disable automatic updates

### 4. Global MCP Servers

This is the most commonly edited section. Add new MCP servers to extend Claude's capabilities:

```json
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

#### MCP Server Structure

| Field | Description | Example |
|-------|-------------|---------|
| `type` | Connection type | `"stdio"` (most common) |
| `command` | Executable command | `"npx"` for npm packages |
| `args` | Command arguments | `["-y", "package-name"]` |
| `env` | Environment variables | `{"API_KEY": "value"}` |

#### Adding MCP Servers with API Keys

```json
{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-github-token-here"
      }
    },
    "brave-search": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-brave-api-key-here"
      }
    }
  }
}
```

#### Popular MCP Servers You Can Add

```json
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

### 5. Feature Flags

Based on actual configurations, these can be safely modified:

```json
{
  "bypassPermissionsModeAccepted": true,
  "hasAcknowledgedCostThreshold": true,
  "isQualifiedForDataSharing": false
}
```

| Flag | Description |
|------|-------------|
| `bypassPermissionsModeAccepted` | Whether you've accepted bypass permissions mode |
| `hasAcknowledgedCostThreshold` | Cost warning acknowledgment |
| `isQualifiedForDataSharing` | Data sharing preferences |

### 6. Resetting Tips and Onboarding

If you want to see tips again or restart onboarding:

```json
{
  "tipsHistory": {
    "new-user-warmup": 0,
    "ide-hotkey": 0,
    "shift-enter": 0
  },
  "hasCompletedOnboarding": false
}
```

💡 **Tip**: Set tip counters to `0` to see them again, or set `hasCompletedOnboarding` to `false` to restart onboarding.

## What You Should NOT Edit

> ⚠️ **Warning**: Don't manually edit these sections unless you know exactly what you're doing:

<details>
<summary>Authentication Data (Click to expand)</summary>

```json
{
  "oauthAccount": { ... },
  "primaryApiKey": "sk-ant-api03-...",
  "customApiKeyResponses": { ... }
}
```
</details>

<details>
<summary>Application State (Click to expand)</summary>

```json
{
  "numStartups": 45,
  "userID": "...",
  "firstStartTime": "...",
  "autoUpdaterStatus": "...",
  "cachedChangelog": "..."
}
```
</details>

<details>
<summary>Project-Specific Data (Click to expand)</summary>

```json
{
  "projects": {
    "/path/to/project": {
      "lastCost": 0.11092260000000002,
      "lastTotalInputTokens": 40329,
      "lastSessionId": "..."
    }
  }
}
```
</details>

## How to Make Changes Safely

### 1. Always Backup First

```bash
cp ~/.claude.json ~/.claude.json.backup
```

### 2. Validate JSON After Editing

```bash
# Check if your JSON is valid
python -m json.tool ~/.claude.json

# or if you have jq installed
jq . ~/.claude.json
```

### 3. Restart Claude Code

After making changes, restart Claude Code for them to take effect:

```bash
# If Claude is running, exit it first
# Then restart
claude
```

## Common Editing Tasks

### Adding a New MCP Server

1. **Backup** your config
2. **Add** your server to the `mcpServers` object
3. **Validate** JSON syntax
4. **Restart** Claude Code
5. **Check** with `/mcp` command that it loaded

### Changing Theme

1. **Backup** your config
2. **Change** the `"theme"` value
3. **Restart** Claude Code

### ⌨️ Enabling Vim Mode

1. **Backup** your config  
2. **Set** `"editorMode": "vim"`
3. **Restart** Claude Code

## Troubleshooting

### 🚫 If Claude Won't Start After Editing

```bash
# Restore your backup
cp ~/.claude.json.backup ~/.claude.json
```

1. Check JSON syntax with validator
2. Look for missing commas, quotes, or brackets

### 🔧 If MCP Server Won't Load

1. Check the `/mcp` command in Claude Code
2. Verify the package name and spelling
3. Check that environment variables are set correctly
4. Try running the server manually: `npx -y package-name`

### Reset Everything

If you want to start fresh:

```bash
# Backup first
cp ~/.claude.json ~/.claude.json.backup

# Remove config (will be recreated)
rm ~/.claude.json

# Restart Claude Code
claude
```

## JSON Structure Reference

Here's the basic structure you should maintain:

```json
{
  "theme": "dark-daltonized",
  "editorMode": "vim",
  "autoUpdates": true,
  "mcpServers": {
    "server-name": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "package-name"],
      "env": {}
    }
  },
  "bypassPermissionsModeAccepted": true,
  "hasCompletedOnboarding": true,
  "projects": { },
  "oauthAccount": { },
  "primaryApiKey": "..."
}
```

## Security Notes

🔒 **Important Security Guidelines:**

- **Never share your `~/.claude.json` file** - it contains your API keys and personal data
- **Use environment variables for sensitive data** instead of putting API keys directly in the file
- **Set proper file permissions**: `chmod 600 ~/.claude.json` on Unix systems


### Guidelines

- Only include configuration options that have been verified to work
- Always include examples from real configurations
- Add safety warnings for potentially dangerous changes

---

**Disclaimer**: This is an unofficial community guide based on real Claude Code configurations (version 1.0.38+). Only edit what you understand and always backup first.

## 🤖 Automation & Scripting

### CI/CD Integration

#### GitHub Actions Example
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
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code
      - name: Run Review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude -p "Review changes for security issues and bugs" \
            --allowedTools "View" \
            --output-format json > review-results.json
```

### Automation Scripts

#### Pre-commit Hook Example
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Get staged files
staged_files=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$staged_files" ]; then
    exit 0
fi

# Analyze with Claude
analysis=$(echo "$staged_files" | xargs cat | \
    claude -p "Review these changes for issues before commit" \
    --allowedTools "View" \
    --output-format json)

# Check for critical issues
if echo "$analysis" | jq -e '.critical_issues[]' > /dev/null 2>&1; then
    echo "❌ Critical issues found - commit blocked"
    exit 1
fi

echo "✅ Code analysis passed"
```

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

---

## 🚀 Advanced Features

### Context Management

#### CLAUDE.md - Project Memory
**Purpose**: Store persistent project information that Claude remembers

**Location**: Project root directory

```markdown
# Project: My Application

## Overview
This is a React/Node.js application with PostgreSQL database.

## Architecture
- Frontend: React 18 with TypeScript
- Backend: Node.js with Express  
- Database: PostgreSQL 14

## Current Goals
- [ ] Implement authentication
- [ ] Add API documentation
- [ ] Set up CI/CD pipeline

## Development Guidelines
- Use TypeScript for all new code
- Follow ESLint configuration
- Write tests for new features
```

#### Memory Commands 
```bash
claude /memory           # Edit project memory
claude /memory view      # View current memory
```

### Advanced Thinking
```bash
# These "thinking" phrases may work:
claude "think hard about the security implications of this code"
claude "analyze this thoroughly and provide detailed recommendations"

```

### Multi-Directory Workspaces
```bash
# Add multiple directories
claude --add-dir ../frontend ../backend ../shared

# Project-wide analysis
claude "analyze the entire application architecture"
```

---

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

## Getting Help

- **Official Documentation**: https://docs.anthropic.com/en/docs/claude-code/overview
- **Report Issues**: Use `/bug` command (if it works) or file GitHub issues
- **Test First**: Always test commands in safe environments before relying on them

---

**Last Updated**: Based on package version 1.0.38 and available documentation. Many features require verification in your specific installation.

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

