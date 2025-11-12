# OpenCode - Complete Guide

<div align="center">

![OpenCode](https://img.shields.io/badge/OpenCode-Terminal-orange)
[![Platform](https://img.shields.io/badge/Platform-Windows%20|%20macOS%20|%20Linux-blue)]()
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green)]()
[![MCP Support](https://img.shields.io/badge/MCP-Supported-brightgreen)]()

*The AI coding agent built for the terminal*

[Website](https://opencode.ai/) · [GitHub](https://github.com/sst/opencode) · [Documentation](https://opencode.ai/docs/)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Features](#features)
- [Getting Started](#getting-started)
- [MCP Integration](#mcp-integration)
- [Configuration](#configuration)
- [Agents System](#agents-system)
- [IDE Integration](#ide-integration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

**OpenCode** is a powerful terminal-based AI coding assistant built with Go. It brings AI assistance directly to your terminal with a beautiful TUI (Terminal User Interface), supporting multiple AI providers and extensible through MCP (Model Context Protocol).

### Key Highlights

- ✅ **Beautiful TUI** - Built with Bubble Tea for smooth terminal experience
- ✅ **Multiple AI Providers** - OpenAI, Anthropic, Google, AWS, Azure, Groq, OpenRouter
- ✅ **Session Management** - Save and resume conversations
- ✅ **Tool Integration** - Execute commands, search files, modify code
- ✅ **Vim-like Editor** - Integrated text editor
- ✅ **MCP Support** - Extend capabilities with Model Context Protocol
- ✅ **Language Server Protocol** - Code intelligence across languages
- ✅ **IDE Integration** - Works with VS Code, Cursor, and any IDE with terminal
- ✅ **Written in Go** - Fast, lightweight, cross-platform

---

## Installation

### Quick Install (Recommended)

**Install Script:**
```bash
curl -fsSL https://opencode.ai/install | bash
```

The script auto-detects your platform and installs to:
1. `$OPENCODE_INSTALL_DIR` (if set)
2. `$XDG_BIN_DIR` (XDG-compliant)
3. `$HOME/bin` (fallback)

### Package Managers

#### **NPM (Cross-platform)**
```bash
npm i -g opencode-ai@latest
```

#### **Homebrew (macOS / Linux)**
```bash
brew install opencode
```

#### **Scoop (Windows)**
```bash
scoop install extras/opencode
```

#### **Chocolatey (Windows)**
```bash
choco install opencode
```

#### **Paru (Arch Linux)**
```bash
paru -S opencode-bin
```

### Verify Installation

```bash
opencode --version
```

---

## Features

### 1. **Interactive Terminal UI**

Beautiful, responsive TUI built with Bubble Tea:
- Syntax highlighting
- Code formatting
- Markdown rendering
- Real-time streaming
- Keyboard navigation

### 2. **Multiple AI Providers**

Switch between providers seamlessly:

| Provider | Models | Notes |
|----------|--------|-------|
| **OpenAI** | GPT-4, GPT-4 Turbo, GPT-3.5 | Fast, reliable |
| **Anthropic** | Claude 3.5 Sonnet, Opus | Best for coding |
| **Google** | Gemini Pro, Flash | 1M context |
| **AWS Bedrock** | Various models | Enterprise |
| **Azure OpenAI** | GPT models | Microsoft ecosystem |
| **Groq** | LLaMA, Mixtral | Fast inference |
| **OpenRouter** | 100+ models | Multi-provider access |

### 3. **Session Management**

Save and restore conversations:

```bash
# Save current session
Ctrl+S (in TUI)

# List sessions
opencode list

# Load session
opencode resume <session-name>
```

**Use Cases:**
- Continue complex projects
- Save successful workflows
- Share sessions with team
- Build template libraries

### 4. **Tool Integration**

OpenCode can execute tools with your permission:

**Execute Commands:**
```
You: Run npm test
OpenCode: [Executes: npm test]
         [Shows output]
```

**Search Files:**
```
You: Find all API routes
OpenCode: [Searches codebase]
         Found 12 API routes in:
         - src/routes/api/users.ts
         - src/routes/api/posts.ts
         ...
```

**Modify Code:**
```
You: Refactor the auth module
OpenCode: [Analyzes code]
         [Proposes changes]
         [Applies with approval]
```

### 5. **Language Server Protocol (LSP)**

Code intelligence features:
- Auto-completion
- Go to definition
- Find references
- Type information
- Diagnostics
- Code actions

**Supported Languages:**
- JavaScript/TypeScript
- Python
- Go
- Rust
- Java
- C/C++
- And more via LSP

### 6. **Vim-like Editor**

Integrated text editor with:
- Modal editing
- Syntax highlighting
- Line numbers
- Search and replace
- Multiple files

**Shortcuts:**
- `i` - Insert mode
- `Esc` - Normal mode
- `:w` - Write file
- `:q` - Quit
- `:wq` - Write and quit

### 7. **MCP Integration**

Extend OpenCode with external tools via Model Context Protocol:
- Custom integrations
- Database access
- API connections
- File systems
- And more

---

## Getting Started

### Launch OpenCode

```bash
# Start in current directory
opencode

# Start in specific directory
opencode /path/to/project

# Resume session
opencode resume my-project

# Start with specific provider
opencode --provider anthropic
```

### First Interaction

```bash
$ opencode

╔════════════════════════════════════╗
║   OpenCode - AI Coding Assistant   ║
╚════════════════════════════════════╝

Provider: Anthropic (Claude 3.5 Sonnet)
Session: new-session-20251112

> Create a Python script for CSV data analysis

[OpenCode generates code]

> Add error handling and logging

[OpenCode improves code]

> Write unit tests

[OpenCode creates tests]
```

### TUI Navigation

| Key | Action |
|-----|--------|
| **Enter** | Send message |
| **Shift+Enter** | New line in input |
| **↑/↓** | Scroll history |
| **Tab** | Autocomplete |
| **Ctrl+S** | Save session |
| **Ctrl+L** | Clear screen |
| **Ctrl+C** | Cancel / Exit |
| **Ctrl+D** | Exit |

---

## MCP Integration

OpenCode implements Model Context Protocol for extensibility.

### Enable MCP

Create `~/.opencode/mcp-config.json`:

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

### Restart OpenCode

```bash
# Exit current session
Ctrl+D

# Restart to load MCP servers
opencode
```

### Verify MCP Servers

```
> /mcp list
```

### Popular MCP Servers

| Server | Purpose | Configuration |
|--------|---------|---------------|
| **filesystem** | File operations | Directory paths |
| **github** | GitHub integration | PAT token |
| **postgres** | Database queries | Connection string |
| **puppeteer** | Browser automation | No config needed |
| **slack** | Slack integration | Bot token |
| **brave-search** | Web search | API key |

> See [/shared/mcp-servers/](/shared/mcp-servers/) for complete list

---

## Configuration

### Configuration File

OpenCode stores settings in `~/.opencode/config.toml`

| Platform | Path |
|----------|------|
| **macOS/Linux** | `~/.opencode/config.toml` |
| **Windows** | `%USERPROFILE%\.opencode\config.toml` |

### Example Configuration

```toml
[provider]
default = "anthropic"  # anthropic, openai, google, etc.

[anthropic]
api_key = "sk-ant-api03-..."
model = "claude-3-5-sonnet-20241022"

[openai]
api_key = "sk-proj-..."
model = "gpt-4-turbo"

[google]
api_key = "AIza..."
model = "gemini-pro-1.5"

[openrouter]
api_key = "sk-or-v1-..."
model = "anthropic/claude-3.5-sonnet"

[session]
auto_save = true
save_dir = "~/.opencode/sessions"

[editor]
theme = "dracula"
line_numbers = true
tab_width = 2

[mcp]
enabled = true
config_file = "~/.opencode/mcp-config.json"

[lsp]
enabled = true
```

### Configuration via CLI

```bash
# Set default provider
opencode config set provider anthropic

# Set API key
opencode config set anthropic.api_key "your-key"

# Set model
opencode config set anthropic.model claude-3-5-sonnet-20241022

# View config
opencode config show

# Edit config
opencode config edit
```

---

## Agents System

OpenCode supports specialized agents for different tasks:

### Available Agents

#### **Code Agent** (Default)

For writing and editing code:
```bash
opencode --agent code
```

**Best for:**
- Code generation
- Refactoring
- Bug fixes
- Code reviews

#### **Debug Agent**

For debugging and troubleshooting:
```bash
opencode --agent debug
```

**Best for:**
- Error analysis
- Stack trace interpretation
- Performance debugging
- Memory leaks

#### **Architect Agent**

For system design and planning:
```bash
opencode --agent architect
```

**Best for:**
- Architecture decisions
- Database schema design
- API design
- System planning

#### **Test Agent**

For test generation:
```bash
opencode --agent test
```

**Best for:**
- Unit test generation
- Integration tests
- Test coverage analysis
- Test debugging

---

## IDE Integration

OpenCode integrates with VS Code, Cursor, and other IDEs through the terminal.

### VS Code Integration

**Setup:**
1. Open VS Code
2. Open integrated terminal (Ctrl+`)
3. Run: `opencode`
4. OpenCode TUI appears in terminal

**Benefits:**
- Side-by-side editor and AI
- Direct file access
- Git integration
- LSP features

### Cursor Integration

Same as VS Code - Cursor has built-in terminal support.

### Any IDE with Terminal

OpenCode works in any IDE that supports a terminal:
- JetBrains IDEs (IntelliJ, WebStorm, PyCharm)
- Sublime Text (with terminal plugin)
- Emacs
- Vim/Neovim (with terminal)

---

## Best Practices

### Effective Prompts

**✅ Good:**
```
Create a RESTful API with Express.js:
- User authentication (JWT)
- CRUD for blog posts
- Input validation
- Error handling middleware
- TypeScript types
```

**❌ Bad:**
```
Make an API
```

### Session Organization

```bash
# Name sessions descriptively
opencode # Auto-generates: project-20251112
Ctrl+S > "user-auth-api"  # Rename to meaningful name

# Organize by project
~/.opencode/sessions/
  ├── myapp-auth/
  ├── myapp-frontend/
  └── myapp-deployment/
```

### Security

- ❌ **Never paste** API keys or secrets into prompts
- ✅ **Use environment variables** for sensitive data
- ✅ **Review commands** before approving execution
- ✅ **Limit MCP access** to necessary directories
- ✅ **Add .opencode/** to `.gitignore`

### Performance

- Clear old sessions: `opencode clean-sessions`
- Use appropriate models (GPT-3.5 for simple tasks)
- Limit MCP servers to what you need
- Close unused sessions

---

## Troubleshooting

### API Key Issues

**Issue**: "Invalid API key" error

**Solutions:**
```bash
# Verify key is set
opencode config show

# Set/update key
opencode config set anthropic.api_key "your-key"

# Test connection
opencode --provider anthropic --debug
```

### Installation Problems

**Issue**: `command not found: opencode`

**Solutions:**
```bash
# Check installation path
which opencode

# Add to PATH (Linux/macOS)
export PATH="$PATH:$HOME/bin"

# Reinstall
curl -fsSL https://opencode.ai/install | bash

# Or via npm
npm i -g opencode-ai@latest
```

### TUI Not Rendering

**Issue**: Terminal UI looks broken

**Solutions:**
1. Ensure terminal supports 256 colors
2. Try different terminal (iTerm2, Windows Terminal)
3. Update terminal emulator
4. Check `TERM` environment variable: `echo $TERM`
5. Set: `export TERM=xterm-256color`

### MCP Servers Not Loading

**Issue**: MCP servers don't appear

**Solutions:**
```bash
# Check config file exists
ls ~/.opencode/mcp-config.json

# Validate JSON syntax
cat ~/.opencode/mcp-config.json | jq

# Test MCP server manually
npx -y @modelcontextprotocol/server-filesystem /tmp

# Check logs
cat ~/.opencode/logs/latest.log
```

---

## Advanced Features

### Custom Themes

Create custom themes in `~/.opencode/themes/`:

```toml
# ~/.opencode/themes/my-theme.toml
[colors]
background = "#1e1e1e"
foreground = "#d4d4d4"
accent = "#007acc"
error = "#f48771"
success = "#89d185"
```

Load theme:
```bash
opencode --theme my-theme
```

### Keyboard Shortcuts Customization

Edit `~/.opencode/keybindings.toml`:

```toml
[keybindings]
send = "Enter"
newline = "Shift+Enter"
save = "Ctrl+S"
clear = "Ctrl+L"
exit = "Ctrl+D"
```

### Plugins System

OpenCode supports plugins (coming soon):

```bash
# Install plugin
opencode plugin install code-review

# List plugins
opencode plugin list

# Enable plugin
opencode plugin enable code-review
```

---

## Additional Resources

### Official Documentation
- [OpenCode Website](https://opencode.ai/)
- [Documentation](https://opencode.ai/docs/)
- [GitHub Repository](https://github.com/sst/opencode)
- [Agents Guide](https://opencode.ai/docs/agents/)

### Community Resources
- [Integration Tutorial](https://www.freecodecamp.org/news/integrate-ai-into-your-terminal-using-opencode/)
- [Example Workflows](https://github.com/sst/opencode/tree/main/examples)
- [MCP Server Directory](/shared/mcp-servers/)

---

## Comparison with Other CLIs

| Feature | OpenCode | Claude Code | Codex |
|---------|----------|-------------|-------|
| **Terminal UI** | ✅ Beautiful TUI | ✅ TUI | ✅ TUI |
| **Multiple Providers** | ✅ 7+ providers | ⚠️ Claude only | ⚠️ OpenAI only |
| **Session Management** | ✅ Yes | ✅ Yes | ✅ Yes |
| **MCP Support** | ✅ Yes | ✅ Yes | ✅ Yes |
| **LSP Integration** | ✅ Yes | ⚠️ Limited | ⚠️ Limited |
| **Vim Editor** | ✅ Built-in | ❌ No | ❌ No |
| **Open Source** | ✅ Yes | ❌ No | ❌ No |
| **IDE Integration** | ✅ Any terminal | ✅ VS Code | ✅ Yes |
| **Agents System** | ✅ Yes | ✅ Sub-agents | ❌ No |

---

## Pro Tips

1. **Use OpenRouter** for access to multiple models
2. **Save successful workflows** as sessions
3. **Configure LSP** for code intelligence
4. **Use agents** for specialized tasks
5. **Combine with MCP** for custom integrations
6. **Learn vim shortcuts** for faster editing
7. **Customize themes** for better readability
8. **Run in IDE terminal** for best experience
9. **Use config presets** for different projects
10. **Contribute to open source** - it's actively maintained!

---

**Next Steps:**
- [Configure Agents](/opencode/setup/)
- [View Example Workflows](https://github.com/sst/opencode/tree/main/examples)
- [Compare with Other Tools](/comparisons/feature-matrix.md)

---

*Last updated: 2025-11-12*
