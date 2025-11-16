# Cline - Configuration Guide

Complete configuration guide for Cline VS Code extension.

> **Official Resources:**
> 📦 GitHub: https://github.com/cline/cline
> 🌐 Website: https://cline.bot/
> 📚 Documentation: https://docs.cline.bot/
> 🛒 VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev
> ⚖️ License: Apache 2.0 (Open Source)

---

## 🚀 MCP Project Workflows

**Configuring MCP for Cline?** Use our project-type-based setups:

> **[📚 MCP Project Workflows Guide →](/shared/mcp-project-workflows/)**
> **[📋 Ready-to-Use Templates →](/shared/mcp-project-workflows/templates.md)**
>
> Configure `.vscode/settings.json` with MCP servers optimized for your project type.

---

## Initial Setup

### 1. Install Extension

1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for "Cline"
4. Click "Install"

### 2. Configure API Provider

On first use, Cline will prompt you to select an API provider.

---

## Supported Providers

### Anthropic (Claude) - Recommended

**Setup:**
1. Get API key from [console.anthropic.com](https://console.anthropic.com)
2. In Cline settings, select "Anthropic"
3. Paste API key
4. Choose model: `claude-3-5-sonnet-20241022`

**Cost:** ~$3/$15 per 1M tokens (input/output)

---

### OpenAI (GPT)

**Setup:**
1. Get API key from [platform.openai.com](https://platform.openai.com)
2. Select "OpenAI" in Cline
3. Paste API key
4. Choose model: `gpt-4-turbo` or `gpt-4`

**Cost:** ~$10/$30 per 1M tokens

---

### OpenRouter (Multi-Model Access)

**Setup:**
1. Get API key from [openrouter.ai](https://openrouter.ai)
2. Select "OpenRouter"
3. Paste API key
4. Choose from 100+ models

**Models:**
- `anthropic/claude-3.5-sonnet`
- `openai/gpt-4-turbo`
- `google/gemini-pro-1.5`
- `meta-llama/llama-3-70b`

**Cost:** Varies by model

---

### Google Gemini

**Setup:**
1. Get API key from [makersuite.google.com](https://makersuite.google.com)
2. Select "Google"
3. Paste API key
4. Choose model: `gemini-pro-1.5`

---

### AWS Bedrock

**Setup:**
1. Configure AWS credentials
2. Select "AWS Bedrock"
3. Enter region and model ID
4. Choose model: `anthropic.claude-3-5-sonnet-20241022-v2:0`

---

### Azure OpenAI

**Setup:**
1. Configure Azure deployment
2. Select "Azure OpenAI"
3. Enter endpoint and API key
4. Choose deployment

---

### Local Models (LM Studio / Ollama)

#### **LM Studio**

**Setup:**
1. Install [LM Studio](https://lmstudio.ai/)
2. Download a coding model (e.g., DeepSeek Coder)
3. Start LM Studio server
4. In Cline, select "OpenAI Compatible"
5. Set base URL: `http://localhost:1234`
6. Model: Name of loaded model

**Benefits:**
- ✅ 100% FREE
- ✅ Privacy (runs locally)
- ✅ Offline capability

#### **Ollama**

**Setup:**
1. Install [Ollama](https://ollama.ai/)
2. Pull model:
   ```bash
   ollama pull deepseek-coder:33b
   ollama pull codellama:34b
   ```
3. In Cline, select "OpenAI Compatible"
4. Set base URL: `http://localhost:11434`
5. Model: `deepseek-coder:33b`

---

## Configuration Settings

### Access Settings

1. Click Cline icon in sidebar
2. Click gear icon ⚙️
3. Configure options

---

## Key Settings

### Model Selection

**For Best Quality:**
- Claude 3.5 Sonnet
- GPT-4 Turbo
- Claude 3 Opus

**For Best Value:**
- Claude 3 Haiku
- GPT-3.5 Turbo
- Gemini Flash 1.5

**For Free/Local:**
- DeepSeek Coder (Ollama)
- CodeLlama (Ollama)
- Phind CodeLlama (Ollama)

---

### Custom Instructions

Set project-specific or personal instructions:

**Example:**
```
Always use TypeScript with strict mode.
Follow Airbnb style guide.
Write unit tests for new functions.
Use functional components in React.
```

**How to Set:**
1. Open Cline settings
2. Find "Custom Instructions"
3. Enter your preferences

---

### Memory Settings

**Enable Memory:**
```
Settings > Cline > Enable Memory
```

**Benefits:**
- Remembers your coding style
- Recalls project structure
- Maintains context across sessions

---

### Approval Settings

Configure what requires approval:

**Approval Modes:**
- **Auto-approve read operations** - Files reads don't need approval
- **Require approval for writes** - Always ask before modifying files
- **Require approval for commands** - Always ask before running terminal commands

**Recommended:**
```
✅ Auto-approve reads
✅ Require approval for writes
✅ Require approval for commands
```

---

## Keyboard Shortcuts

### Set Custom Shortcuts

1. `Ctrl/Cmd + K, Ctrl/Cmd + S` - Open Keyboard Shortcuts
2. Search "Cline"
3. Set custom bindings

**Suggested Shortcuts:**
- `Ctrl/Cmd + Shift + L` - Open Cline
- `Ctrl/Cmd + Shift + K` - New Cline conversation
- `Ctrl/Cmd + Shift + P` - Toggle Cline panel

---

## Project-Specific Configuration

### Workspace Settings

Create `.vscode/settings.json` in your project:

```json
{
  "cline.model": "claude-3-5-sonnet-20241022",
  "cline.temperature": 0.7,
  "cline.customInstructions": "This is a Next.js project using TypeScript and TailwindCSS. Follow Next.js 14 app router conventions.",
  "cline.enableMemory": true,
  "cline.autoApproveReads": true
}
```

---

## Environment Variables

For API keys in CI/CD or team environments:

```bash
# .env.local (add to .gitignore)
ANTHROPIC_API_KEY=sk-ant-api03-...
OPENAI_API_KEY=sk-proj-...
OPENROUTER_API_KEY=sk-or-v1-...
```

---

## Advanced Configuration

### Context Window

```json
{
  "cline.maxTokens": 200000,
  "cline.includeSystemContext": true
}
```

### File Exclusions

Exclude files from Cline's context:

```json
{
  "cline.excludedFiles": [
    "node_modules/**",
    "dist/**",
    "*.lock",
    ".git/**"
  ]
}
```

---

## Multi-Project Setup

### Different Configs for Different Projects

**Project A (Frontend):**
```.vscode/settings.json
{
  "cline.model": "claude-3-5-sonnet-20241022",
  "cline.customInstructions": "React + TypeScript project. Use functional components."
}
```

**Project B (Backend):**
```.vscode/settings.json
{
  "cline.model": "claude-3-opus-20240229",
  "cline.customInstructions": "Python + FastAPI project. Use type hints and async/await."
}
```

---

## Cost Management

### Track Usage

Cline shows token usage for each interaction:
- View in conversation panel
- Check total usage in extension logs

### Reduce Costs

**Tips:**
1. Use cheaper models for simple tasks
2. Limit context with file exclusions
3. Clear conversation history when switching topics
4. Use local models for experimentation

---

## Troubleshooting

### API Key Not Working

1. Verify key is correct (no extra spaces)
2. Check billing is active
3. Test key independently:
   ```bash
   curl https://api.anthropic.com/v1/messages \
     -H "x-api-key: $ANTHROPIC_API_KEY" \
     -H "anthropic-version: 2023-06-01"
   ```
4. Regenerate key if needed

### Extension Not Responding

1. Reload VS Code window (`Ctrl/Cmd + Shift + P` > "Reload Window")
2. Check extension logs (Help > Toggle Developer Tools > Console)
3. Disable other conflicting extensions
4. Reinstall Cline extension

### File Changes Not Applying

1. Check file isn't open in another editor
2. Verify file permissions
3. Check if file is in `.gitignore`
4. Review diff before approving

---

## Best Practices

### 1. Start with Clear Instructions

❌ **Bad:**
```
Add authentication
```

✅ **Good:**
```
Add JWT authentication to the API:
- Create login endpoint
- Generate tokens
- Add middleware for protected routes
- Include error handling
```

### 2. Review Before Approving

Always review:
- File modifications (check the diff)
- Terminal commands (especially `rm`, `sudo`, etc.)
- Package installations

### 3. Use Custom Instructions

Set project-specific guidelines once, reuse across sessions.

### 4. Enable Memory

Helps Cline remember your preferences and project structure.

---

## Example Configurations

### Minimal Setup (Free)

```json
{
  "cline.provider": "Ollama",
  "cline.model": "deepseek-coder:33b",
  "cline.baseUrl": "http://localhost:11434"
}
```

### Professional Setup

```json
{
  "cline.provider": "Anthropic",
  "cline.model": "claude-3-5-sonnet-20241022",
  "cline.temperature": 0.7,
  "cline.customInstructions": "Follow company coding standards...",
  "cline.enableMemory": true,
  "cline.autoApproveReads": true
}
```

### Cost-Optimized Setup

```json
{
  "cline.provider": "OpenRouter",
  "cline.model": "anthropic/claude-3-haiku",
  "cline.maxTokens": 100000,
  "cline.excludedFiles": ["node_modules/**", "dist/**"]
}
```

---

## Next Steps

- **[View Main Guide →](/cline/)**
- **[Compare with Other Extensions →](/vscode-extensions/)**
- **[View Feature Comparison →](/comparisons/feature-matrix.md)**

---

*Last updated: 2025-11-12*
