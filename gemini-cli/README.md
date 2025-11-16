# Gemini CLI - Complete Guide

<div align="center">

![Google Gemini](https://img.shields.io/badge/Google-Gemini%20CLI-blue)
[![Platform](https://img.shields.io/badge/Platform-Windows%20|%20macOS%20|%20Linux-blue)]()
[![MCP Support](https://img.shields.io/badge/MCP-Supported-brightgreen)]()
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green)]()

*Google's open-source AI agent for your terminal*

[GitHub](https://github.com/google-gemini/gemini-cli) · [Website](https://google-gemini.github.io/gemini-cli/) · [Documentation](https://google-gemini.github.io/gemini-cli/) · [Codelabs](https://codelabs.developers.google.com/gemini-cli-hands-on) · [Blog Post](https://blog.google/technology/developers/introducing-gemini-cli-github-actions/)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Authentication](#authentication)
- [Getting Started](#getting-started)
- [Features](#features)
- [MCP Integration](#mcp-integration)
- [Configuration](#configuration)
- [Commands](#commands)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

**Gemini CLI** is Google's open-source AI agent that brings the power of Gemini 2.5 Pro directly into your terminal. Announced in July 2025, it provides lightweight, direct access to Gemini with a massive **1 million token context window**.

### Key Highlights

- ✅ **Gemini 2.5 Pro** - Latest model with 1M token context
- ✅ **Free Tier** - Personal Google account = free access
- ✅ **MCP Support** - Extensible via Model Context Protocol
- ✅ **Built-in Tools** - Search, files, shell, web fetching
- ✅ **Open Source** - Community-driven development
- ✅ **Fast & Lightweight** - Most direct path to Gemini

---

## Installation

### Prerequisites

- **Node.js 18+** is required
- Google account (personal or Google Cloud)

### Installation Command

```bash
npm install -g @google/gemini-cli
```

### Verify Installation

```bash
gemini --version
```

### Alternative Installation (From Source)

```bash
# Clone repository
git clone https://github.com/google-gemini/gemini-cli.git
cd gemini-cli

# Install dependencies
npm install

# Link globally
npm link
```

---

## Authentication

Gemini CLI offers two authentication methods:

### **1. Personal Google Account (Free - Recommended)**

Best for individual developers:

```bash
gemini
```

On first run, you'll be prompted to sign in with your Google account.

**Free Tier Includes:**
- ✅ **Gemini 2.5 Pro** access
- ✅ **1 million token** context window
- ✅ **60 requests/minute** rate limit
- ✅ **1,000 requests/day** quota
- ✅ **No cost** - completely free

**Perfect for:**
- Personal projects
- Learning and experimentation
- Small-scale development
- Prototyping

### **2. API Key (Usage-Based Billing)**

For production or higher limits:

```bash
export GEMINI_API_KEY="your-api-key-here"
gemini
```

**Get API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create new API key
3. Copy and save securely

**API Key Benefits:**
- Higher rate limits
- Production-ready
- Usage-based pricing
- Organization-level billing

---

## Getting Started

### Launch Gemini CLI

```bash
# Start interactive session
gemini

# Start with a prompt
gemini "Explain how async/await works in JavaScript"

# Start in specific directory
gemini --cwd /path/to/project
```

### Your First Interaction

```bash
$ gemini

Gemini CLI v1.0.0
Connected to Gemini 2.5 Pro (1M context)

> Help me create a Python script that reads CSV files

[Gemini generates code]

> Add error handling for missing files

[Gemini updates code]

> Write unit tests for this

[Gemini creates tests]
```

---

## Features

### 1. **Massive Context Window**

Gemini 2.5 Pro supports **1 million tokens**:
- Analyze entire codebases
- Process large documents
- Maintain long conversations
- Deep contextual understanding

**Example:**
```bash
> Read all Python files in this directory and suggest improvements
```

### 2. **Built-in Tools**

Gemini CLI includes powerful built-in capabilities:

#### **Google Search Grounding**
```bash
> Search for the latest best practices for React 19
```

#### **File Operations**
```bash
> Create a new file called server.py with a Flask API
> Read the contents of package.json
> Update README.md with installation instructions
```

#### **Shell Commands**
```bash
> Run npm test and explain any failures
> Check if Docker is installed
> List all git branches
```

#### **Web Fetching**
```bash
> Fetch the documentation from https://example.com/api/docs
> Summarize this article: [URL]
```

### 3. **MCP Extensibility**

Extend Gemini CLI with Model Context Protocol servers for custom integrations (see [MCP Integration](#mcp-integration))

---

## MCP Integration

Gemini CLI supports **Model Context Protocol** for extending capabilities with external tools.

### Enable MCP

Create `~/.gemini/mcp-config.json`:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token"
      }
    },
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://localhost/mydb"
      ]
    }
  }
}
```

### Popular MCP Servers for Gemini CLI

| Server | Purpose | Configuration |
|--------|---------|---------------|
| **filesystem** | Local file access | Directory paths |
| **github** | GitHub integration | Personal access token |
| **postgres** | Database queries | Connection string |
| **slack** | Slack integration | Bot token |
| **puppeteer** | Browser automation | No API key needed |

> See [/shared/mcp-servers/](/shared/mcp-servers/) for complete MCP server list

### Restart to Load MCP

```bash
# Exit Gemini CLI (Ctrl+D or /exit)
# Restart to load MCP configuration
gemini
```

---

## Configuration

### Configuration File

Gemini CLI stores settings in `~/.gemini/config.json`

| Platform | Path |
|----------|------|
| **macOS/Linux** | `~/.gemini/config.json` |
| **Windows** | `%USERPROFILE%\.gemini\config.json` |

### Example Configuration

```json
{
  "model": "gemini-2.5-pro",
  "temperature": 0.7,
  "maxOutputTokens": 8192,
  "safetySettings": {
    "HARM_CATEGORY_HARASSMENT": "BLOCK_NONE",
    "HARM_CATEGORY_HATE_SPEECH": "BLOCK_NONE",
    "HARM_CATEGORY_SEXUALLY_EXPLICIT": "BLOCK_NONE",
    "HARM_CATEGORY_DANGEROUS_CONTENT": "BLOCK_NONE"
  },
  "systemInstruction": "You are a helpful coding assistant.",
  "mcpEnabled": true
}
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `model` | Gemini model version | `gemini-2.5-pro` |
| `temperature` | Creativity (0.0-1.0) | `0.7` |
| `maxOutputTokens` | Max response length | `8192` |
| `safetySettings` | Content filtering | Moderate |
| `mcpEnabled` | Enable MCP servers | `false` |

---

## Commands

### Interactive Commands

Once inside Gemini CLI:

| Command | Description |
|---------|-------------|
| `/help` | Show available commands |
| `/clear` | Clear conversation history |
| `/exit` or `/quit` | Exit Gemini CLI |
| `/history` | Show conversation history |
| `/save <name>` | Save current session |
| `/load <name>` | Load saved session |
| `/mcp list` | List MCP servers |
| `/config` | Show current configuration |

### CLI Arguments

```bash
# Specify model
gemini --model gemini-2.5-pro

# Set working directory
gemini --cwd /path/to/project

# Load saved session
gemini --session my-project

# One-shot prompt
gemini "Create a Dockerfile for a Node.js app"

# Debug mode
gemini --debug

# Specify config file
gemini --config /path/to/config.json
```

---

## Best Practices

### Leverage the 1M Context

Gemini's massive context window enables:

```bash
# Analyze entire codebase
> Read all files in src/ and suggest architectural improvements

# Process large documents
> Summarize this 500-page PDF

# Long conversations
> Let's build a full-stack app, step by step
```

### Use Built-in Tools

Take advantage of native capabilities:

```bash
# Google Search grounding for current info
> What are the latest security best practices for JWT tokens?

# Shell commands for automation
> Run the test suite and fix any failures you find

# File operations for direct changes
> Create a .gitignore file with Node.js defaults
```

### Session Management

```bash
# Save successful workflows
> /save flask-api-setup

# Resume later
> /load flask-api-setup

# Build a library of templates
> /save react-component-template
```

### Security

- ❌ **Never paste secrets** into prompts
- ✅ **Use environment variables** for API keys
- ✅ **Review generated shell commands** before approving
- ✅ **Limit MCP access** to necessary directories

---

## Troubleshooting

### Authentication Issues

**Issue**: "Authentication failed"

**Solutions:**
```bash
# Clear authentication cache
rm -rf ~/.gemini/auth

# Re-authenticate
gemini

# Or use API key instead
export GEMINI_API_KEY="your-key"
gemini
```

### Rate Limit Exceeded

**Issue**: "Rate limit exceeded" or "Quota exhausted"

**Free Tier Limits:**
- 60 requests/minute
- 1,000 requests/day

**Solutions:**
1. Wait for quota reset (daily)
2. Upgrade to API key with billing
3. Reduce request frequency
4. Cache responses locally

### MCP Servers Not Loading

**Issue**: MCP servers don't appear

**Solutions:**
1. Verify `~/.gemini/mcp-config.json` exists
2. Check JSON syntax is valid
3. Ensure MCP packages are installed (`npx` will auto-install)
4. Restart Gemini CLI
5. Check logs: `cat ~/.gemini/logs/latest.log`

### Installation Problems

**Issue**: `command not found: gemini`

**Solutions:**
```bash
# Verify Node.js version
node --version  # Should be 18+

# Reinstall
npm install -g @google/gemini-cli

# Check global npm bin location
npm bin -g

# Add to PATH if needed (macOS/Linux)
export PATH="$PATH:$(npm bin -g)"
```

---

## Advanced Features

### Custom System Instructions

Edit `~/.gemini/config.json`:

```json
{
  "systemInstruction": "You are an expert Python developer specializing in data science. Always include type hints and docstrings."
}
```

### Multi-turn Workflows

Gemini CLI maintains context across turns:

```bash
> Create a REST API with FastAPI
[Gemini creates API]

> Add authentication with JWT
[Gemini adds auth]

> Add database integration with PostgreSQL
[Gemini adds database]

> Write tests for all endpoints
[Gemini creates tests]
```

### Code Review Workflow

```bash
> Review the code in src/api/auth.py for security issues
> Check if there are any performance bottlenecks
> Suggest refactoring opportunities
> Generate comprehensive documentation
```

---

## Additional Resources

### Official Documentation
- [Gemini CLI Documentation](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-cli)
- [GitHub Repository](https://github.com/google-gemini/gemini-cli)
- [Google AI Studio](https://makersuite.google.com/)
- [Official Blog Announcement](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)

### Community Resources
- [Tutorial Series](https://medium.com/google-cloud/gemini-cli-tutorial-series-77da7d494718)
- [Example Workflows](https://github.com/google-gemini/gemini-cli/tree/main/examples)
- [MCP Server Directory](/shared/mcp-servers/)

---

## Comparison with Other CLIs

| Feature | Gemini CLI | Claude Code | OpenAI Codex |
|---------|------------|-------------|--------------|
| **Context Window** | 1M tokens | 200K tokens | 128K tokens |
| **Free Tier** | ✅ Yes (1K req/day) | ❌ No | ❌ No |
| **MCP Support** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Built-in Search** | ✅ Google Search | ❌ Via MCP | ❌ Via MCP |
| **Open Source** | ✅ Yes | ❌ No | ❌ No |
| **Model** | Gemini 2.5 Pro | Claude 3.5 Sonnet | GPT-5-Codex |

---

## Pro Tips

1. **Use the free tier** - Perfect for most use cases
2. **Leverage 1M context** - Analyze entire projects at once
3. **Built-in search** - Get current information without MCP
4. **Save sessions** - Build reusable workflows
5. **Open source** - Contribute features you need
6. **Combine with MCP** - Extend for custom integrations
7. **Use shell tools** - Automate development tasks

---

**Next Steps:**
- [Configure MCP Servers](/gemini-cli/configuration/)
- [View Example Workflows](https://github.com/google-gemini/gemini-cli/tree/main/examples)
- [Compare with Other Tools](/comparisons/feature-matrix.md)

---

*Last updated: 2025-11-12*
