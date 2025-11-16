# Claude Code - Configuration Guide

Complete guide to configuring Claude Code CLI for optimal performance.

---

## Configuration File Location

| Platform | Path |
|----------|------|
| **Windows** | `%APPDATA%\Claude\config.json` |
| **macOS** | `~/Library/Application Support/Claude/config.json` |
| **Linux** | `~/.config/claude/config.json` |

---

## Basic Configuration

### View Current Configuration

```bash
claude config show
```

### Edit Configuration

```bash
# Open in default editor
claude config edit

# Or edit manually
code ~/.config/claude/config.json  # macOS/Linux
code %APPDATA%\Claude\config.json  # Windows
```

---

## Configuration Options

### Example Configuration File

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "temperature": 0.7,
  "maxTokens": 4096,
  "editor": "code",
  "theme": "dark",
  "notifications": {
    "enabled": true,
    "channel": "terminal_bell"
  },
  "mcp": {
    "enabled": true,
    "configPath": "~/.config/claude/mcp_config.json"
  },
  "git": {
    "autoCommit": false,
    "defaultBranch": "main"
  },
  "dangerous": {
    "enabled": false
  }
}
```

---

## Configuration via CLI

### Set Individual Options

```bash
# Set model
claude config set model claude-3-5-sonnet-20241022

# Set temperature
claude config set temperature 0.7

# Set max tokens
claude config set maxTokens 4096

# Set editor
claude config set editor code

# Enable notifications
claude config set notifications.enabled true

# Set notification channel
claude config set notifications.channel terminal_bell
```

### Get Individual Options

```bash
# Get specific value
claude config get model
claude config get temperature
claude config get notifications.enabled
```

---

## Model Configuration

### Available Models

```bash
# Claude 3.5 Sonnet (Recommended)
claude config set model claude-3-5-sonnet-20241022

# Claude 3 Opus (Most capable)
claude config set model claude-3-opus-20240229

# Claude 3 Sonnet (Balanced)
claude config set model claude-3-sonnet-20240229

# Claude 3 Haiku (Fastest)
claude config set model claude-3-haiku-20240307
```

### Model Selection Guide

| Model | Speed | Quality | Cost | Use Case |
|-------|-------|---------|------|----------|
| **3.5 Sonnet** | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | $$ | Default choice |
| **3 Opus** | ⚡⚡ | ⭐⭐⭐⭐⭐ | $$$ | Complex tasks |
| **3 Sonnet** | ⚡⚡⚡ | ⭐⭐⭐⭐ | $$ | Balanced |
| **3 Haiku** | ⚡⚡⚡⚡⚡ | ⭐⭐⭐ | $ | Simple tasks |

---

## Editor Integration

### Configure Default Editor

```bash
# VS Code
claude config set editor code

# Vim
claude config set editor vim

# Neovim
claude config set editor nvim

# Emacs
claude config set editor emacs

# Nano
claude config set editor nano

# Custom
claude config set editor "/path/to/editor"
```

### Editor Flags

```json
{
  "editor": "code",
  "editorFlags": ["--wait", "--new-window"]
}
```

---

## Notification Settings

### Enable Sound Alerts

```bash
# Terminal bell
claude config set --global preferredNotifChannel terminal_bell

# Desktop notifications (macOS/Linux)
claude config set --global preferredNotifChannel desktop

# Disable
claude config set --global preferredNotifChannel none
```

### Custom Notification Commands

```json
{
  "notifications": {
    "enabled": true,
    "channel": "custom",
    "customCommand": "osascript -e 'display notification \"Task complete\" with title \"Claude Code\"'"
  }
}
```

---

## Git Integration

### Git Configuration

```json
{
  "git": {
    "autoCommit": false,
    "defaultBranch": "main",
    "commitPrefix": "feat:",
    "pushAfterCommit": false,
    "hooks": {
      "preCommit": true,
      "postCommit": false
    }
  }
}
```

### Git Commands

```bash
# Enable auto-commit
claude config set git.autoCommit true

# Set default branch
claude config set git.defaultBranch main

# Set commit prefix
claude config set git.commitPrefix "feat:"
```

---

## Dangerous Mode

### What is Dangerous Mode?

Dangerous mode allows Claude to execute commands without requiring approval for each one. **Use with caution!**

### Enable Dangerous Mode

```bash
# Enable
claude config set dangerous.enabled true

# Disable (recommended)
claude config set dangerous.enabled false
```

### Dangerous Mode Options

```json
{
  "dangerous": {
    "enabled": false,
    "allowedCommands": ["npm install", "npm test"],
    "blockedCommands": ["rm -rf", "sudo", "dd"],
    "autoApprove": {
      "read": true,
      "write": false,
      "execute": false
    }
  }
}
```

---

## API Configuration

### Using API Keys

```bash
# Set API key
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Verify
claude config get apiKey
```

### Alternative Providers (Bedrock/Vertex)

**AWS Bedrock:**
```json
{
  "provider": "bedrock",
  "bedrock": {
    "region": "us-east-1",
    "model": "anthropic.claude-3-5-sonnet-20241022-v2:0"
  }
}
```

**Google Vertex AI:**
```json
{
  "provider": "vertex",
  "vertex": {
    "project": "your-project-id",
    "region": "us-central1",
    "model": "claude-3-5-sonnet@20241022"
  }
}
```

---

## Performance Tuning

### Optimize for Speed

```json
{
  "model": "claude-3-haiku-20240307",
  "temperature": 0.5,
  "maxTokens": 2048,
  "streaming": true
}
```

### Optimize for Quality

```json
{
  "model": "claude-3-opus-20240229",
  "temperature": 0.8,
  "maxTokens": 8192,
  "streaming": false
}
```

### Balanced Configuration

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "temperature": 0.7,
  "maxTokens": 4096,
  "streaming": true
}
```

---

## Context Window Settings

```json
{
  "context": {
    "maxTokens": 200000,
    "includeSystemContext": true,
    "preserveHistory": true,
    "historyLimit": 50
  }
}
```

---

## Project-Specific Configuration

### Per-Project Settings

Create `.claude/config.json` in your project root:

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "mcp": {
    "enabled": true,
    "servers": ["filesystem", "github"]
  },
  "git": {
    "autoCommit": true,
    "commitPrefix": "feat(project):"
  }
}
```

### Workspace Settings

```bash
# Initialize project config
claude config init

# Set project-specific model
claude config set --local model claude-3-opus-20240229
```

---

## Environment Variables

### Supported Variables

```bash
# API Key
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Config path
export CLAUDE_CONFIG_PATH="$HOME/custom/claude/config.json"

# MCP config path
export CLAUDE_MCP_CONFIG="$HOME/custom/mcp_config.json"

# Log level
export CLAUDE_LOG_LEVEL="debug"  # debug, info, warn, error

# Disable telemetry
export CLAUDE_TELEMETRY_DISABLED="true"
```

---

## Logging Configuration

```json
{
  "logging": {
    "level": "info",
    "file": "~/.claude/logs/claude.log",
    "maxSize": "10MB",
    "maxFiles": 5,
    "console": true
  }
}
```

### View Logs

```bash
# View recent logs
claude logs

# Tail logs
claude logs --follow

# Filter by level
claude logs --level error
```

---

## Reset Configuration

### Reset to Defaults

```bash
# Reset all settings
claude config reset

# Reset specific setting
claude config reset model

# Reset and keep API key
claude config reset --keep-auth
```

---

## Example Configurations

### For Daily Development

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "temperature": 0.7,
  "maxTokens": 4096,
  "editor": "code",
  "notifications": {
    "enabled": true,
    "channel": "terminal_bell"
  },
  "git": {
    "autoCommit": false
  },
  "dangerous": {
    "enabled": false
  }
}
```

### For Quick Tasks

```json
{
  "model": "claude-3-haiku-20240307",
  "temperature": 0.5,
  "maxTokens": 2048,
  "streaming": true,
  "notifications": {
    "enabled": false
  }
}
```

### For Complex Projects

```json
{
  "model": "claude-3-opus-20240229",
  "temperature": 0.8,
  "maxTokens": 8192,
  "mcp": {
    "enabled": true
  },
  "git": {
    "autoCommit": true,
    "commitPrefix": "feat:"
  }
}
```

---

## Troubleshooting

### Config Not Loading

```bash
# Check config file exists
ls ~/.config/claude/config.json

# Validate JSON syntax
cat ~/.config/claude/config.json | jq

# Use default config
claude --use-defaults
```

### Permission Issues

```bash
# Fix permissions (macOS/Linux)
chmod 600 ~/.config/claude/config.json

# Windows: Right-click > Properties > Security
```

---

## Next Steps

- **[Set up MCP Servers →](/claude-code/mcp-setup/)**
- **[Learn Tips & Tricks →](/claude-code/tips-and-tricks/)**
- **[View Commands Reference →](/claude-code/)**

---

## Additional Resources

- [Official Configuration Docs](https://docs.anthropic.com/en/docs/claude-code/configuration)
- [Configuration Examples](https://github.com/anthropics/claude-code/tree/main/examples)
- [Environment Variables Reference](https://docs.anthropic.com/en/docs/claude-code/environment-variables)

---

*Last updated: 2025-11-12*
