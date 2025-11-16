# Gemini CLI - Configuration Guide

Complete configuration reference for Gemini CLI.

> **Official Resources:**
> 📦 GitHub: https://github.com/google-gemini/gemini-cli
> 🌐 Website: https://google-gemini.github.io/gemini-cli/
> 📚 Documentation: https://google-gemini.github.io/gemini-cli/
> ⚖️ License: Apache 2.0 (Open Source)

---

## 🚀 Quick Start: Project-Type-Based MCP Setup

**Setting up MCP servers?** Use our optimized configurations:

> **[📚 MCP Project Workflows Guide →](/shared/mcp-project-workflows/)**
>
> Get FREE or low-cost MCP setups optimized for Gemini CLI's free tier:
> - **Greenfield Minimal** - **$0/month** - Spec Kit + Zen (Gemini only)
> - **Prototype** - **$20-60/month** - Shrimp + Zen
> - **Bug Fixes** - **$30-80/month** - Zen + Shrimp
> - **13 project types** with Gemini-optimized configs
>
> **[📋 Copy-Paste Templates →](/shared/mcp-project-workflows/templates.md)**
>
> Gemini CLI Benefits:
> ✅ **Free tier**: 60 req/min, 1000 req/day
> ✅ **1M token context** window
> ✅ Perfect for Zen multi-model validation

---

## Configuration File

### Location

| Platform | Path |
|----------|------|
| **macOS/Linux** | `~/.gemini/config.json` |
| **Windows** | `%USERPROFILE%\.gemini\config.json` |

---

## Basic Configuration

### View Configuration

```bash
gemini config show
```

### Edit Configuration

```bash
gemini config edit
```

---

## Configuration Options

### Example Configuration File

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

---

## Model Configuration

### Available Models

```bash
# Gemini 2.5 Pro (Default - Best)
gemini config set model gemini-2.5-pro

# Gemini Pro 1.5 (Fallback)
gemini config set model gemini-pro-1.5

# Gemini Flash 1.5 (Fastest)
gemini config set model gemini-flash-1.5
```

---

## Parameter Settings

### Temperature

```bash
# More creative (0.8-1.0)
gemini config set temperature 0.9

# Balanced (0.7) - Default
gemini config set temperature 0.7

# More focused (0.5-0.6)
gemini config set temperature 0.5

# Deterministic (0.0)
gemini config set temperature 0.0
```

### Max Output Tokens

```bash
# Default
gemini config set maxOutputTokens 8192

# Short responses
gemini config set maxOutputTokens 2048

# Long responses
gemini config set maxOutputTokens 16384
```

---

## Safety Settings

### Configure Safety Filters

```json
{
  "safetySettings": {
    "HARM_CATEGORY_HARASSMENT": "BLOCK_MEDIUM_AND_ABOVE",
    "HARM_CATEGORY_HATE_SPEECH": "BLOCK_MEDIUM_AND_ABOVE",
    "HARM_CATEGORY_SEXUALLY_EXPLICIT": "BLOCK_MEDIUM_AND_ABOVE",
    "HARM_CATEGORY_DANGEROUS_CONTENT": "BLOCK_MEDIUM_AND_ABOVE"
  }
}
```

**Options:**
- `BLOCK_NONE` - No filtering
- `BLOCK_ONLY_HIGH` - Block only high probability content
- `BLOCK_MEDIUM_AND_ABOVE` - Block medium and high (default)
- `BLOCK_LOW_AND_ABOVE` - Most restrictive

---

## System Instructions

### Custom System Prompt

```json
{
  "systemInstruction": "You are an expert Python developer specializing in data science. Always include type hints and docstrings."
}
```

### Via CLI

```bash
gemini --system "You are a helpful coding assistant specializing in JavaScript"
```

---

## MCP Configuration

### Enable MCP

```bash
gemini config set mcpEnabled true
```

### Configure MCP Servers

Create `~/.gemini/mcp-config.json`:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}
```

---

## CLI Arguments

### Override Config

```bash
# Specify model
gemini --model gemini-pro-1.5

# Set temperature
gemini --temperature 0.9

# Set max tokens
gemini --max-tokens 4096

# Disable safety filters
gemini --safety-settings BLOCK_NONE

# Use specific config file
gemini --config /path/to/config.json
```

---

## Session Configuration

### Auto-Save Sessions

```json
{
  "session": {
    "autoSave": true,
    "saveDir": "~/.gemini/sessions"
  }
}
```

---

## Example Configurations

### For Daily Development

```json
{
  "model": "gemini-2.5-pro",
  "temperature": 0.7,
  "maxOutputTokens": 8192,
  "systemInstruction": "You are a helpful coding assistant.",
  "mcpEnabled": true
}
```

### For Quick Tasks

```json
{
  "model": "gemini-flash-1.5",
  "temperature": 0.5,
  "maxOutputTokens": 2048,
  "systemInstruction": "Provide concise, direct answers."
}
```

### For Creative Writing

```json
{
  "model": "gemini-2.5-pro",
  "temperature": 0.9,
  "maxOutputTokens": 16384,
  "systemInstruction": "You are a creative writing assistant."
}
```

---

## Environment Variables

```bash
# API Key
export GEMINI_API_KEY="your-api-key"

# Config path
export GEMINI_CONFIG_PATH="~/custom/config.json"

# Model
export GEMINI_MODEL="gemini-2.5-pro"

# Log level
export GEMINI_LOG_LEVEL="debug"
```

---

## Reset Configuration

```bash
# Reset to defaults
gemini config reset

# Reset specific setting
gemini config reset temperature
```

---

## Next Steps

- **[View Main Guide →](/gemini-cli/)**
- **[Installation Guide →](/gemini-cli/installation/)**
- **[Compare with Other CLIs →](/comparisons/feature-matrix.md)**

---

*Last updated: 2025-11-12*
