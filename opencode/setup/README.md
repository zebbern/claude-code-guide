# OpenCode - Setup Guide

Complete setup guide for OpenCode terminal AI coding agent.

> **Official Resources:**
> 📦 GitHub: https://github.com/sst/opencode
> 🌐 Website: https://opencode.ai/
> 📚 Documentation: https://opencode.ai/docs/
> ⚖️ License: MIT (Open Source)

---

## 🚀 Quick Start: MCP Project Workflows

**Need MCP configuration for your project?**

> **[📚 MCP Project Workflows Guide →](/shared/mcp-project-workflows/)**
> **[📋 Ready-to-Use Templates →](/shared/mcp-project-workflows/templates.md)**
>
> Get optimized MCP setups for 13 project types with cost estimates and setup times.

---

## Installation

See [OpenCode Main Guide](/opencode/#installation) for detailed installation instructions.

**Quick Install:**
```bash
curl -fsSL https://opencode.ai/install | bash
# or
npm i -g opencode-ai@latest
```

---

## Initial Configuration

### 1. Choose AI Provider

OpenCode supports multiple providers. Configure your preferred one:

#### **Anthropic (Claude)**

```bash
# Set provider
opencode config set provider anthropic

# Set API key
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Set model
opencode config set anthropic.model claude-3-5-sonnet-20241022
```

#### **OpenAI**

```bash
opencode config set provider openai
export OPENAI_API_KEY="sk-proj-..."
opencode config set openai.model gpt-4-turbo
```

#### **Google (Gemini)**

```bash
opencode config set provider google
export GOOGLE_API_KEY="AIza..."
opencode config set google.model gemini-pro-1.5
```

#### **OpenRouter (Multi-Model Access)**

```bash
opencode config set provider openrouter
export OPENROUTER_API_KEY="sk-or-v1-..."
opencode config set openrouter.model anthropic/claude-3.5-sonnet
```

#### **Local Models (Ollama)**

```bash
# Install Ollama first: ollama.ai

# Pull model
ollama pull deepseek-coder:33b

# Configure OpenCode
opencode config set provider ollama
opencode config set ollama.model deepseek-coder:33b
opencode config set ollama.baseUrl http://localhost:11434
```

---

## Configuration File

### Location

| Platform | Path |
|----------|------|
| **macOS/Linux** | `~/.opencode/config.toml` |
| **Windows** | `%USERPROFILE%\.opencode\config.toml` |

### Example Configuration

```toml
[provider]
default = "anthropic"

[anthropic]
api_key = "sk-ant-api03-..."
model = "claude-3-5-sonnet-20241022"

[openai]
api_key = "sk-proj-..."
model = "gpt-4-turbo"

[openrouter]
api_key = "sk-or-v1-..."
model = "anthropic/claude-3.5-sonnet"

[ollama]
model = "deepseek-coder:33b"
base_url = "http://localhost:11434"

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

---

## Agent Configuration

OpenCode supports specialized agents for different tasks:

```toml
[agents]
code = "anthropic/claude-3-5-sonnet-20241022"
debug = "openai/gpt-4-turbo"
architect = "anthropic/claude-3-opus-20240229"
test = "openai/gpt-4-turbo"
```

### Use Agents

```bash
# Start with specific agent
opencode --agent code
opencode --agent debug
opencode --agent architect
opencode --agent test
```

---

## MCP Server Setup

### Enable MCP

```bash
opencode config set mcp.enabled true
```

### Configure MCP Servers

Create `~/.opencode/mcp-config.json`:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/projects"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    }
  }
}
```

---

## LSP Configuration

OpenCode integrates with Language Server Protocol for code intelligence:

```toml
[lsp]
enabled = true

# Specific language servers
[lsp.typescript]
command = "typescript-language-server"
args = ["--stdio"]

[lsp.python]
command = "pyright-langserver"
args = ["--stdio"]

[lsp.go]
command = "gopls"
```

---

## Theme Customization

### Built-in Themes

```bash
# Set theme
opencode config set editor.theme dracula
opencode config set editor.theme monokai
opencode config set editor.theme solarized-dark
```

### Custom Theme

Create `~/.opencode/themes/my-theme.toml`:

```toml
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

---

## Keyboard Shortcuts

### Default Shortcuts

Edit `~/.opencode/keybindings.toml`:

```toml
[keybindings]
send = "Enter"
newline = "Shift+Enter"
save = "Ctrl+S"
clear = "Ctrl+L"
exit = "Ctrl+D"
switch_agent = "Ctrl+A"
```

---

## Environment Variables

```bash
# API Keys
export ANTHROPIC_API_KEY="sk-ant-api03-..."
export OPENAI_API_KEY="sk-proj-..."
export OPENROUTER_API_KEY="sk-or-v1-..."

# Config path
export OPENCODE_CONFIG_PATH="~/.opencode/config.toml"

# Log level
export OPENCODE_LOG_LEVEL="debug"  # debug, info, warn, error

# Disable telemetry
export OPENCODE_TELEMETRY_DISABLED="true"
```

---

## Project-Specific Configuration

Create `.opencode/config.toml` in your project root:

```toml
[provider]
default = "anthropic"

[anthropic]
model = "claude-3-opus-20240229"  # Use more powerful model for this project

[mcp]
enabled = true

[lsp]
enabled = true
```

---

## Quick Start Workflow

### 1. Install and Configure

```bash
# Install
npm i -g opencode-ai@latest

# Set provider and API key
export ANTHROPIC_API_KEY="sk-ant-..."
opencode config set provider anthropic

# Verify
opencode --version
```

### 2. Start OpenCode

```bash
# Start in current directory
opencode

# Start in specific project
opencode /path/to/project

# Start with specific agent
opencode --agent code
```

### 3. Use OpenCode

```
> Create a FastAPI server with user authentication
> Add unit tests
> Generate API documentation
```

---

## Tips & Tricks

### 1. Multi-Provider Setup

Configure all providers and switch as needed:

```toml
[provider]
default = "anthropic"

# Configure all providers in config.toml
# Switch with:
```

```bash
opencode --provider openai
opencode --provider anthropic
```

### 2. Cost Optimization

```toml
# Use Haiku for simple tasks
[agents]
code = "anthropic/claude-3-haiku-20240307"
```

### 3. Offline Development

```bash
# Use local Ollama models
ollama pull deepseek-coder:33b
opencode --provider ollama
```

---

## Troubleshooting

### Configuration Not Loading

```bash
# Check config exists
ls ~/.opencode/config.toml

# Validate TOML syntax
cat ~/.opencode/config.toml

# Reset to defaults
opencode config reset
```

### LSP Not Working

```bash
# Ensure language servers installed
npm install -g typescript-language-server pyright

# Enable in config
opencode config set lsp.enabled true

# Check logs
opencode logs --lsp
```

---

## Next Steps

- **[View Main Guide →](/opencode/)**
- **[Configure Agents →](/opencode/)**
- **[Compare with Other Tools →](/comparisons/feature-matrix.md)**

---

*Last updated: 2025-11-12*
