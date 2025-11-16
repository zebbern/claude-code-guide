# ChatGPT Codex CLI - Complete Guide

<div align="center">

![OpenAI Codex](https://img.shields.io/badge/OpenAI-Codex-brightgreen)
[![Platform](https://img.shields.io/badge/Platform-Windows%20|%20macOS%20|%20Linux-blue)]()
[![MCP Support](https://img.shields.io/badge/MCP-Supported-brightgreen)]()

*OpenAI's official command-line coding agent with GPT-5-Codex*

[GitHub](https://github.com/openai/codex) · [Website](https://openai.com/codex/) · [Documentation](https://developers.openai.com/codex/) · [Help Center](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Authentication](#authentication)
- [Commands & Usage](#commands--usage)
- [Configuration](#configuration)
- [Features](#features)
- [MCP Integration](#mcp-integration)
- [Models](#models)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

**OpenAI Codex CLI** is OpenAI's first official command-line tool for developers, launched in April 2025. It's a lightweight coding agent that runs locally in your terminal, powered by GPT-5-Codex.

### Key Highlights

- ✅ **Interactive TUI** - Terminal user interface for coding
- ✅ **Multi-modal Inputs** - Text, screenshots, diagrams
- ✅ **MCP Support** - Integrate external tools and data
- ✅ **Model Selection** - Switch between GPT-5-Codex and GPT-5
- ✅ **Reasoning Modes** - Adjust thinking depth on the fly
- ✅ **ChatGPT Integration** - Sign in with ChatGPT account

---

## Installation

### Prerequisites

- **Node.js 18+** or **Homebrew** (macOS/Linux)
- ChatGPT Plus, Pro, Business, Edu, or Enterprise account (recommended)
- OR OpenAI API key

### Installation Methods

#### **1. NPM (Recommended - Cross-platform)**

```bash
npm install -g @openai/codex
```

#### **2. Homebrew (macOS/Linux)**

```bash
brew install codex
```

#### **3. Manual Binary Download**

1. Visit [GitHub Releases](https://github.com/openai/codex/releases/latest)
2. Download binary for your platform:
   - **Windows**: `codex-windows-x64.exe`
   - **macOS**: `codex-darwin-arm64` (Apple Silicon) or `codex-darwin-x64` (Intel)
   - **Linux**: `codex-linux-x64`
3. Make executable: `chmod +x codex-*`
4. Move to PATH: `mv codex-* /usr/local/bin/codex`

### Verify Installation

```bash
codex --version
```

---

## Authentication

Codex supports two authentication methods:

### **1. ChatGPT Account (Recommended)**

Best for ChatGPT Plus/Pro/Business/Edu/Enterprise users:

```bash
codex
```

When prompted, select **"Sign in with ChatGPT"**

**Benefits:**
- Fastest setup
- No API usage charges (within plan limits)
- Access to latest models
- Integrated billing

### **2. API Key**

For fine-grained control or API-only users:

```bash
export OPENAI_API_KEY="sk-your-api-key-here"
codex
```

**Get API Key:**
1. Visit [platform.openai.com](https://platform.openai.com)
2. Navigate to API Keys section
3. Create new secret key
4. Copy and save securely

**Benefits:**
- Usage-based billing
- Programmatic control
- Organization-level access
- Fine-tuned rate limits

---

## Commands & Usage

### Starting Codex

```bash
# Launch interactive TUI
codex

# Start with specific file
codex main.py

# Start in specific directory
codex /path/to/project
```

### Interactive Commands

Once inside Codex TUI:

| Command | Description |
|---------|-------------|
| `/model` | Switch between GPT-5-Codex and GPT-5 |
| `/reasoning` | Adjust reasoning depth (low/medium/high) |
| `/clear` | Clear conversation history |
| `/help` | Show available commands |
| `/exit` | Exit Codex (or Ctrl+C) |
| `/save` | Save current session |
| `/load` | Load previous session |

### Example Workflow

```bash
# Start Codex
codex

# Inside Codex TUI:
> Create a Python script that fetches weather data from OpenWeather API

# Codex generates code, you can then:
> Add error handling for network failures
> Write unit tests for this
> Create a CLI interface using argparse
```

---

## Configuration

Codex stores preferences in `~/.codex/config.toml`

### Configuration File Location

| Platform | Path |
|----------|------|
| **macOS/Linux** | `~/.codex/config.toml` |
| **Windows** | `%USERPROFILE%\.codex\config.toml` |

### Example Configuration

```toml
[model]
default = "gpt-5-codex"  # Default model
reasoning_level = "medium"  # low, medium, high

[editor]
default_editor = "code"  # vs code, vim, nano, etc.
syntax_highlighting = true

[mcp]
enabled = true
servers_path = "~/.codex/mcp-servers.json"

[appearance]
theme = "dark"  # dark, light, auto
show_token_count = true

[behavior]
auto_save_sessions = true
max_context_tokens = 128000
```

### Edit Configuration

```bash
# Open config in default editor
codex config edit

# View current config
codex config show

# Reset to defaults
codex config reset
```

---

## Features

### Multi-modal Inputs

Codex accepts various input types:

**Text**
```bash
> Explain this code: [paste code]
```

**Screenshots**
```bash
> Implement this design: [drag and drop image]
```

**Diagrams**
```bash
> Create code based on this architecture diagram: [attach file]
```

### Model Switching

Switch models mid-conversation:

```bash
# Switch to GPT-5 for general reasoning
> /model gpt-5

# Switch back to GPT-5-Codex for coding
> /model gpt-5-codex
```

### Reasoning Levels

Adjust how deeply Codex thinks:

```bash
# Quick responses
> /reasoning low

# Balanced (default)
> /reasoning medium

# Deep analysis
> /reasoning high
```

### File Operations

Codex can interact with your filesystem:

```bash
> Create a new file called api.py with a FastAPI server
> Read the contents of config.json and explain it
> Update requirements.txt to include pytest
```

---

## MCP Integration

Codex supports **Model Context Protocol (MCP)** for extending capabilities.

### Enabling MCP

Edit `~/.codex/config.toml`:

```toml
[mcp]
enabled = true
servers_path = "~/.codex/mcp-servers.json"
```

### Configuring MCP Servers

Create `~/.codex/mcp-servers.json`:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Projects"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token"
      }
    }
  }
}
```

### Restart Codex

```bash
# Exit and restart for MCP to load
codex
```

### Verify MCP Servers

```bash
> /mcp list
```

---

## Models

### Available Models

| Model | Purpose | Context | Speed |
|-------|---------|---------|-------|
| **GPT-5-Codex** | Coding tasks | 128K tokens | Fast |
| **GPT-5** | General reasoning | 128K tokens | Fast |
| **GPT-4 Turbo** | Legacy support | 128K tokens | Medium |

### When to Use Each Model

**GPT-5-Codex:**
- Writing new code
- Debugging
- Code reviews
- Refactoring
- Test generation

**GPT-5:**
- Architecture planning
- Documentation writing
- Explaining complex concepts
- Non-coding tasks
- Business logic design

### Switch Models

```bash
# In Codex TUI
> /model gpt-5-codex
> /model gpt-5
```

---

## Best Practices

### Effective Prompting

**✅ Be Specific**
```
Good: Create a FastAPI endpoint for user registration with email validation
Bad: Make an API
```

**✅ Provide Context**
```
Good: Add error handling to the existing login function in auth.py
Bad: Add error handling
```

**✅ Iterate**
```
1. Generate initial code
2. Request improvements
3. Add edge case handling
4. Generate tests
```

### Session Management

```bash
# Save important sessions
> /save project-setup

# Load previous session
> /load project-setup

# List saved sessions
> /sessions
```

### Security

- ❌ **Never paste** API keys or credentials into prompts
- ✅ **Use environment variables** for secrets
- ✅ **Review generated code** before running
- ✅ **Limit MCP filesystem access** to specific directories

### Performance

- Use `/reasoning low` for simple tasks (faster responses)
- Clear context when switching topics: `/clear`
- Use MCP for large file operations (more efficient)
- Save sessions before experimenting with major changes

---

## Troubleshooting

### Authentication Issues

**Issue**: "Invalid API key" error

**Solutions:**
1. Verify API key is correct: `echo $OPENAI_API_KEY`
2. Check for extra spaces or quotes
3. Regenerate key from platform.openai.com
4. Try ChatGPT sign-in instead

### Installation Problems

**Issue**: `command not found: codex`

**Solutions:**
```bash
# Verify Node.js installed
node --version

# Reinstall globally
npm install -g @openai/codex

# Check PATH
echo $PATH

# Add to PATH (macOS/Linux)
export PATH="$PATH:/usr/local/bin"
```

### MCP Servers Not Loading

**Issue**: MCP servers don't appear

**Solutions:**
1. Check `config.toml` has `mcp.enabled = true`
2. Verify `mcp-servers.json` syntax
3. Test MCP commands manually: `npx -y @modelcontextprotocol/server-filesystem`
4. Restart Codex completely
5. Check logs: `cat ~/.codex/logs/latest.log`

### Rate Limits

**Issue**: "Rate limit exceeded" error

**Solutions:**
- **ChatGPT users**: Check plan limits in account settings
- **API users**: Increase rate limits or wait
- Switch to lower reasoning level: `/reasoning low`

---

## Configuration Examples

### Minimal Setup

```toml
[model]
default = "gpt-5-codex"
```

### Power User Setup

```toml
[model]
default = "gpt-5-codex"
reasoning_level = "high"

[editor]
default_editor = "code"
syntax_highlighting = true

[mcp]
enabled = true
servers_path = "~/.codex/mcp-servers.json"

[appearance]
theme = "dark"
show_token_count = true
show_cost_estimates = true

[behavior]
auto_save_sessions = true
max_context_tokens = 128000
confirm_file_operations = true
```

---

## Additional Resources

### Official Documentation
- [Codex CLI Quickstart](https://developers.openai.com/codex/quickstart/)
- [OpenAI Help Center](https://help.openai.com/codex)
- [GitHub Repository](https://github.com/openai/codex)
- [MCP Integration Guide](https://developers.openai.com/codex/mcp/)

### Community Resources
- [Codex Examples](https://github.com/openai/codex/tree/main/examples)
- [MCP Server Directory](/shared/mcp-servers/)
- [Community Tutorials](https://community.openai.com/c/codex)

---

## Pro Tips

1. **Start with ChatGPT sign-in** - Easiest setup path
2. **Use `/model` frequently** - Switch models for different tasks
3. **Save successful sessions** - Build a library of working prompts
4. **Combine with MCP** - Extend capabilities with external tools
5. **Adjust reasoning level** - Trade speed for quality as needed
6. **Review before executing** - Always check generated commands
7. **Use multi-modal inputs** - Screenshots and diagrams accelerate development

---

**Next Steps:**
- [View Commands Reference](/chatgpt-codex/commands/)
- [Configure MCP Servers](/chatgpt-codex/integration-tips/)
- [Compare with Other Tools](/comparisons/feature-matrix.md)

---

*Last updated: 2025-11-12*
