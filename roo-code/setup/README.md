# Roo-Code - Setup Guide

Complete setup guide for Roo-Code VS Code extension with multi-mode configuration.

> **Official Resources:**
> 📦 GitHub: https://github.com/RooCodeInc/Roo-Code
> 🌐 Website: https://roocode.com/
> 📚 Documentation: https://docs.roocode.com/
> 🛒 VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline
> ⚖️ License: Apache 2.0 (Open Source)

---

## 🚀 MCP Project Workflows

**Setting up MCP for Roo-Code?** Get optimized configurations:

> **[📚 MCP Project Workflows Guide →](/shared/mcp-project-workflows/)**
> **[📋 Ready-to-Use Templates →](/shared/mcp-project-workflows/templates.md)**
>
> Roo-Code's multi-mode system works great with MCP servers. Configure different servers for different modes!

---

## Installation

### Via VS Code Marketplace

1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for "Roo-Code"
4. Click "Install"
5. Look for 🦘 kangaroo icon in sidebar

---

## Initial Configuration

### 1. Choose API Providers

Roo-Code's unique feature: **assign different AI models to different modes**.

**Click** the 🦘 icon in sidebar to open Roo-Code panel, then configure providers.

---

## Supported Providers

### Anthropic (Claude)

**Setup:**
1. Get API key from [console.anthropic.com](https://console.anthropic.com)
2. In Roo-Code, select "Anthropic"
3. Paste API key

**Recommended Models:**
- `claude-3-5-sonnet-20241022` - Best for Code mode
- `claude-3-opus-20240229` - Best for Architect mode
- `claude-3-haiku-20240307` - Best for Ask mode (cheap)

---

### OpenAI

**Setup:**
1. Get API key from [platform.openai.com](https://platform.openai.com)
2. Select "OpenAI"
3. Paste API key

**Recommended Models:**
- `gpt-4-turbo` - Good for Code/Debug modes
- `gpt-3.5-turbo` - Cheap for Ask mode

---

### OpenRouter (Recommended for Multi-Model)

**Setup:**
1. Get API key from [openrouter.ai](https://openrouter.ai)
2. Select "OpenRouter"
3. Paste API key
4. Access 100+ models

**Benefits:**
- Single API key for all models
- Cost-effective
- Easy to try different models

---

### Google Gemini, AWS Bedrock, Azure, Groq

All supported - similar setup process.

---

### Local Models (LM Studio / Ollama)

#### **Ollama Setup**

1. Install [Ollama](https://ollama.ai/)
2. Pull models:
   ```bash
   ollama pull deepseek-coder:33b  # For Code mode
   ollama pull llama3:70b          # For Architect mode
   ollama pull llama3:8b           # For Ask mode (fast)
   ```
3. In Roo-Code, select "Ollama"
4. Base URL: `http://localhost:11434`

**Benefits:**
- ✅ 100% FREE
- ✅ Privacy
- ✅ Offline capability

---

## Multi-Mode Configuration

Roo-Code's **killer feature** is assigning different models to different modes.

### The 5 Modes

| Mode | Purpose | Best Model |
|------|---------|------------|
| **Code** | Writing/editing code | Claude 3.5 Sonnet, GPT-4 |
| **Architect** | System design, planning | Claude 3 Opus, GPT-4 |
| **Ask** | Quick questions | Claude 3 Haiku, GPT-3.5 (cheap!) |
| **Debug** | Bug fixing | Claude 3.5 Sonnet, GPT-4 |
| **Orchestrator** | Complex workflows | Claude 3 Opus, GPT-4 |

### Configure Modes

**Settings > Roo-Code > Mode Configuration**

---

## Example Configurations

### Cost-Optimized Setup

**Use cheap models for simple tasks, powerful for complex:**

```json
{
  "roo-code.modes": {
    "code": {
      "provider": "Anthropic",
      "model": "claude-3-5-sonnet-20241022"
    },
    "architect": {
      "provider": "Anthropic",
      "model": "claude-3-opus-20240229"
    },
    "ask": {
      "provider": "OpenAI",
      "model": "gpt-3.5-turbo"  // Cheap for questions!
    },
    "debug": {
      "provider": "Anthropic",
      "model": "claude-3-5-sonnet-20241022"
    },
    "orchestrator": {
      "provider": "Anthropic",
      "model": "claude-3-opus-20240229"
    }
  }
}
```

**Savings:** Using GPT-3.5 for Ask mode saves ~90% on simple questions!

---

### Free Local Setup

**100% free using Ollama:**

```json
{
  "roo-code.modes": {
    "code": {
      "provider": "Ollama",
      "model": "deepseek-coder:33b"
    },
    "architect": {
      "provider": "Ollama",
      "model": "llama3:70b"
    },
    "ask": {
      "provider": "Ollama",
      "model": "llama3:8b"  // Fast local model
    },
    "debug": {
      "provider": "Ollama",
      "model": "deepseek-coder:33b"
    },
    "orchestrator": {
      "provider": "Ollama",
      "model": "llama3:70b"
    }
  }
}
```

---

### Power User Setup (OpenRouter)

**Access all models with one API key:**

```json
{
  "roo-code.modes": {
    "code": {
      "provider": "OpenRouter",
      "model": "anthropic/claude-3.5-sonnet"
    },
    "architect": {
      "provider": "OpenRouter",
      "model": "anthropic/claude-3-opus"
    },
    "ask": {
      "provider": "OpenRouter",
      "model": "google/gemini-flash-1.5"  // Fast & cheap
    },
    "debug": {
      "provider": "OpenRouter",
      "model": "openai/gpt-4-turbo"
    },
    "orchestrator": {
      "provider": "OpenRouter",
      "model": "anthropic/claude-3-opus"
    }
  }
}
```

---

## Additional Settings

### Custom Prompts

**Settings > Roo-Code > Custom Prompts**

Define reusable prompts for common tasks:

**Example:**
```json
{
  "roo-code.customPrompts": {
    "api-endpoint": "Create a RESTful API endpoint with input validation, error handling, and TypeScript types",
    "test-suite": "Generate comprehensive unit tests with happy path, edge cases, and mocks"
  }
}
```

### Task Tracking

**Enable:**
```json
{
  "roo-code.taskTracking": true
}
```

**Benefits:**
- Visual progress on multi-step tasks
- Checklist-style completion
- Better organization

### Checkpoints

**Enable:**
```json
{
  "roo-code.checkpoints": true
}
```

**Benefits:**
- Save conversation states
- Experiment without losing progress
- Rollback to previous state

---

## Workspace Configuration

### Project-Specific Settings

Create `.vscode/settings.json`:

```json
{
  "roo-code.modes.code.model": "claude-3-opus-20240229",
  "roo-code.customPrompts": {
    "component": "Create a React component with TypeScript, props interface, and JSDoc"
  }
}
```

---

## Keyboard Shortcuts

### Set Custom Shortcuts

1. `Ctrl/Cmd + K, Ctrl/Cmd + S`
2. Search "Roo-Code"
3. Set bindings

**Suggested:**
- `Ctrl/Cmd + Shift + R` - Open Roo-Code
- `Ctrl/Cmd + K, C` - Switch to Code mode
- `Ctrl/Cmd + K, A` - Switch to Ask mode
- `Ctrl/Cmd + K, D` - Switch to Debug mode

---

## Performance Settings

### Fast Edits

**Enable:**
```json
{
  "roo-code.fastEdits": true,
  "roo-code.concurrentReads": true
}
```

### Codebase Indexing

**For large projects:**
```json
{
  "roo-code.indexing.enabled": true,
  "roo-code.indexing.maxFiles": 10000
}
```

---

## Cost Management

### Monitor Usage

Roo-Code shows token usage per interaction.

### Optimize Costs

**Strategies:**
1. **Use cheap models for Ask mode** (GPT-3.5, Gemini Flash)
2. **Enable caching** to reduce repeated context
3. **Use local models** for experimentation
4. **Limit file scanning** to relevant directories

**Example Savings:**
- Ask mode with GPT-3.5: $0.50/1M tokens
- Ask mode with Claude Opus: $15/1M tokens
- **Savings: 97%!**

---

## Troubleshooting

### API Key Not Working

1. Check for typos
2. Verify billing is active
3. Test key independently
4. Regenerate if needed

### Extension Not Loading

1. Reload window (`Ctrl/Cmd + Shift + P` > "Reload Window")
2. Check extension logs
3. Disable conflicting extensions
4. Reinstall Roo-Code

### Modes Not Switching

1. Check mode configuration is complete
2. Verify API keys for all providers
3. Restart VS Code

---

## Best Practices

### 1. Optimize Mode Usage

**Use the right mode for the job:**
- **Ask** - Quick questions ("How does this work?")
- **Code** - Writing features
- **Architect** - Planning architecture
- **Debug** - Fixing bugs
- **Orchestrator** - Complex multi-file changes

### 2. Leverage Cost Optimization

Use expensive models only when needed:
- Questions → Ask mode → GPT-3.5 (cheap)
- Complex features → Code mode → Claude 3.5
- Architecture → Architect mode → Claude Opus

### 3. Use Checkpoints

Save state before:
- Risky changes
- Major refactoring
- Experimental features

### 4. Enable Task Tracking

For complex features, task tracking helps:
- See progress visually
- Stay organized
- Track completion

---

## Next Steps

- **[View Features →](/roo-code/features/)**
- **[View Main Guide →](/roo-code/)**
- **[Compare with Other Extensions →](/vscode-extensions/)**

---

*Last updated: 2025-11-12*
