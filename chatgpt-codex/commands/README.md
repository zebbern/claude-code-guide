# OpenAI Codex - Commands Reference

Complete reference for Codex CLI commands and usage.

> **Official Resources:**
> 📦 GitHub: https://github.com/openai/codex
> 🌐 Website: https://openai.com/codex/
> 📚 Documentation: https://developers.openai.com/codex/

---

## Basic Commands

### Launch Codex

```bash
# Start interactive TUI
codex

# Start with specific file
codex main.py

# Start in specific directory
codex /path/to/project
```

---

## Interactive Commands

Once inside Codex TUI:

| Command | Description |
|---------|-------------|
| `/model` | Switch between models |
| `/reasoning` | Adjust reasoning depth |
| `/clear` | Clear conversation history |
| `/help` | Show available commands |
| `/exit` or `/quit` | Exit Codex |
| `/save` | Save current session |
| `/load` | Load previous session |
| `/sessions` | List saved sessions |

---

## Configuration Commands

### View Configuration

```bash
# Show all config
codex config show

# Show specific value
codex config get model
codex config get reasoning
```

### Set Configuration

```bash
# Set model
codex config set model gpt-5-codex
codex config set model gpt-5

# Set reasoning level
codex config set reasoning low     # Fast
codex config set reasoning medium  # Balanced
codex config set reasoning high    # Deep analysis

# Set max tokens
codex config set maxTokens 4096

# Enable/disable features
codex config set streaming true
codex config set autoSave true
```

### Edit Configuration

```bash
# Open config in editor
codex config edit

# Reset to defaults
codex config reset

# Reset specific setting
codex config reset model
```

---

## Model Commands

### Switch Models

```bash
# Inside Codex TUI:

# Switch to GPT-5-Codex
> /model gpt-5-codex

# Switch to GPT-5 for general reasoning
> /model gpt-5

# Switch to GPT-4 Turbo
> /model gpt-4-turbo
```

### Available Models

```bash
# List available models
codex models list

# Show current model
codex models current
```

---

## Session Management

### Save Sessions

```bash
# Inside Codex:
> /save my-project-session

# Or via CLI:
codex session save "my-project-session"
```

### Load Sessions

```bash
# Inside Codex:
> /load my-project-session

# Or via CLI:
codex session load "my-project-session"
```

### List Sessions

```bash
codex session list

# Or inside Codex:
> /sessions
```

### Delete Sessions

```bash
codex session delete "old-session"

# Delete all sessions
codex session clear --all
```

### Export/Import Sessions

```bash
# Export
codex session export "my-session" > session.json

# Import
codex session import < session.json
```

---

## MCP Configuration

### Enable MCP

```bash
codex config set mcp.enabled true
```

### List MCP Servers

```bash
# Inside Codex:
> /mcp list
```

### Configure MCP Servers

Edit `~/.codex/mcp-servers.json`:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}
```

---

## File Operations

### Work with Files

```bash
# Start with specific file
codex src/main.py

# Open multiple files for context
codex src/*.py
```

### Inside Codex:

```
# Read files
> Read the contents of config.json

# Create files
> Create a new file called api.py with a FastAPI server

# Edit files
> Update requirements.txt to add pytest

# Delete files (asks for confirmation)
> Delete the old_code.py file
```

---

## Reasoning Modes

### Set Reasoning Level

```bash
# Quick responses (good for simple tasks)
> /reasoning low

# Balanced (default)
> /reasoning medium

# Deep analysis (complex problems)
> /reasoning high
```

### When to Use Each

**Low (Fast):**
- Simple code generation
- Quick refactoring
- Documentation
- Code formatting

**Medium (Balanced):**
- Feature implementation
- Bug fixing
- Code reviews
- General development

**High (Deep):**
- Architecture decisions
- Complex algorithms
- Performance optimization
- Security analysis

---

## Usage Statistics

```bash
# View usage stats
codex usage

# View for specific month
codex usage --month 2025-11

# Export usage data
codex usage export --format csv > usage.csv
```

---

## Logging

### View Logs

```bash
# View recent logs
codex logs

# Tail logs in real-time
codex logs --follow

# Filter by level
codex logs --level error
codex logs --level debug

# Save logs to file
codex logs > codex-logs.txt
```

### Set Log Level

```bash
codex config set logging.level debug

# Or via environment variable
export CODEX_LOG_LEVEL=debug
```

---

## Cache Management

```bash
# Clear cache
codex cache clear

# Show cache size
codex cache size

# Configure cache
codex config set cache.maxSize 1GB
codex config set cache.ttl 86400  # 24 hours
```

---

## Update Commands

```bash
# Check for updates
codex update check

# Update to latest version
codex update

# Update to specific version
codex update --version 1.2.3
```

---

## Help Commands

```bash
# General help
codex help

# Command-specific help
codex help config
codex help session
codex help models

# Inside Codex TUI:
> /help
```

---

## Advanced Commands

### Debug Mode

```bash
# Run with debug output
codex --debug

# Verbose mode
codex --verbose

# Dry run (don't execute)
codex --dry-run
```

### Override Settings

```bash
# Use specific model for one session
codex --model gpt-4-turbo

# Set custom config file
codex --config /path/to/config.toml

# Disable MCP
codex --no-mcp
```

---

## Keyboard Shortcuts

While in Codex TUI:

| Shortcut | Action |
|----------|--------|
| **Enter** | Send message |
| **Shift+Enter** | New line in input |
| **Ctrl+C** | Cancel current generation |
| **Ctrl+D** | Exit Codex |
| **↑** | Previous message |
| **↓** | Next message |
| **Tab** | Autocomplete (if enabled) |

---

## Example Workflows

### Quick Code Generation

```bash
codex
> Create a Python function to calculate fibonacci numbers
> Add error handling for negative inputs
> Write unit tests for the function
> /save fibonacci-implementation
```

### Project Development

```bash
cd my-project
codex
> Analyze the project structure
> Create a new API endpoint for user registration
> Add input validation
> Generate tests
> /model gpt-5  # Switch for documentation
> Create API documentation
```

### Debugging Session

```bash
codex src/buggy_file.py
> /reasoning high
> Find and fix the bug causing the crash
> Explain what the issue was
> Add logging to prevent similar issues
```

---

## Environment Variables

Supported environment variables:

```bash
# API Key
export OPENAI_API_KEY="sk-proj-..."

# Config path
export CODEX_CONFIG_PATH="~/custom/config.toml"

# Log level
export CODEX_LOG_LEVEL="debug"

# Disable telemetry
export CODEX_TELEMETRY_DISABLED="true"

# Default model
export CODEX_DEFAULT_MODEL="gpt-5-codex"
```

---

## Troubleshooting Commands

```bash
# Check system status
codex status

# Verify authentication
codex auth verify

# Test connection
codex ping

# Diagnose issues
codex doctor

# Reset everything
codex reset --all
```

---

## Tips & Tricks

### Aliases

Add to `~/.bashrc` or `~/.zshrc`:

```bash
alias cx='codex'
alias cxm='codex --model gpt-5'
alias cxd='codex --debug'
```

### Quick Session Resume

```bash
# Create function
cx-last() {
  codex session load $(codex session list | head -1)
}
```

### Project-Specific Settings

```bash
# In project root
codex config init

# Sets local config: .codex/config.toml
```

---

## Next Steps

- **[View Main Guide →](/chatgpt-codex/)**
- **[Installation Guide →](/chatgpt-codex/installation/)**
- **[Integration Tips →](/chatgpt-codex/integration-tips/)**

---

## Additional Resources

- [Official Commands Documentation](https://developers.openai.com/codex/commands)
- [CLI Reference](https://developers.openai.com/codex/cli/)
- [Community Examples](https://github.com/openai/codex/tree/main/examples)

---

*Last updated: 2025-11-12*
