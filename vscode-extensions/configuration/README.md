# VS Code Extensions - Configuration Guide

Complete configuration guide for AI coding extensions in Visual Studio Code.

> **Extension Official Resources:**
> - **Claude for VS Code**: [Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) | [Docs](https://docs.anthropic.com/en/docs/claude-code/ide-integrations)
> - **Cline**: [GitHub](https://github.com/cline/cline) | [Docs](https://docs.cline.bot/)
> - **Roo-Code**: [GitHub](https://github.com/RooCodeInc/Roo-Code) | [Docs](https://docs.roocode.com/)
> - **Continue.dev**: [GitHub](https://github.com/continuedev/continue) | [Docs](https://docs.continue.dev/)
> - **GitHub Copilot**: [Docs](https://docs.github.com/copilot)
> - **Codeium**: [Docs](https://codeium.com/docs)
> - **Tabnine**: [Docs](https://www.tabnine.com/docs)

---

## 🚀 MCP Project Workflows for VS Code

**Configuring MCP servers in VS Code?** Get optimized setups:

> **[📚 MCP Project Workflows Guide →](/shared/mcp-project-workflows/)**
> **[📋 Ready-to-Use Templates →](/shared/mcp-project-workflows/templates.md)**
>
> Configure MCP servers in `.vscode/settings.json` based on your project type:
> - 13 project type configurations
> - Cost estimates and setup times
> - Workspace-specific configurations

---

## Claude for VS Code Configuration

### Initial Setup

**1. Add API Key:**

1. Open VS Code
2. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Type **"Claude: Set API Key"**
4. Paste your Anthropic API key
5. Press Enter

**Get API Key:** [console.anthropic.com](https://console.anthropic.com)

**Alternative: Settings.json:**

```json
{
  "claude.apiKey": "sk-ant-api03-..."
}
```

⚠️ **Security Warning:** Don't commit API keys to version control!

---

### Claude Extension Settings

**Access Settings:**
- `Ctrl+,` / `Cmd+,` → Search "Claude"

**Or edit `settings.json`:**

```json
{
  "claude.apiKey": "${ANTHROPIC_API_KEY}",
  "claude.model": "claude-3-5-sonnet-20241022",
  "claude.maxTokens": 4096,
  "claude.temperature": 0.7,
  "claude.autoSave": true,
  "claude.streamResponses": true,
  "claude.codeActions": true,
  "claude.inlineCompletions": true,
  "claude.chatHistory": true,
  "claude.contextWindow": 200000
}
```

---

### Model Selection

**Available Models:**

```json
{
  "claude.model": "claude-3-5-sonnet-20241022"  // Recommended (default)
  // "claude.model": "claude-3-opus-20240229"   // Most capable
  // "claude.model": "claude-3-sonnet-20240229" // Balanced
  // "claude.model": "claude-3-haiku-20240307"  // Fastest
}
```

**Model Comparison:**

| Model | Speed | Quality | Cost | Context Window |
|-------|-------|---------|------|----------------|
| **3.5 Sonnet** | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | $$ | 200K tokens |
| **3 Opus** | ⚡⚡ | ⭐⭐⭐⭐⭐ | $$$ | 200K tokens |
| **3 Haiku** | ⚡⚡⚡⚡⚡ | ⭐⭐⭐ | $ | 200K tokens |

---

### Workspace-Specific Settings

**Create `.vscode/settings.json` in project:**

```json
{
  "claude.model": "claude-3-opus-20240229",
  "claude.temperature": 0.8,
  "claude.customInstructions": "This is a TypeScript React project. Always use functional components and hooks."
}
```

---

### Custom Instructions

**Global Custom Instructions:**

```json
{
  "claude.customInstructions": "Always write comprehensive JSDoc comments. Prefer TypeScript over JavaScript. Use functional programming patterns."
}
```

**Project-Specific Instructions:**

```json
{
  "claude.customInstructions": "This is a NestJS backend project:\n- Use dependency injection\n- Follow SOLID principles\n- Write unit tests with Jest\n- Use TypeORM for database\n- Follow our code style guide"
}
```

---

### Keyboard Shortcuts

**Default Shortcuts:**

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+Space` / `Cmd+Shift+Space` | Open Claude Chat |
| `Ctrl+K Ctrl+C` / `Cmd+K Cmd+C` | Send selection to Claude |
| `Ctrl+K Ctrl+I` / `Cmd+K Cmd+I` | Inline Claude suggestion |

**Customize Shortcuts:**

1. `Ctrl+K Ctrl+S` / `Cmd+K Cmd+S` → Open Keyboard Shortcuts
2. Search "Claude"
3. Click pencil icon to edit
4. Set new shortcut

**Example Custom Shortcuts:**

```json
{
  "key": "ctrl+shift+a",
  "command": "claude.openChat",
  "when": "editorTextFocus"
},
{
  "key": "ctrl+shift+e",
  "command": "claude.explainCode",
  "when": "editorHasSelection"
}
```

---

## GitHub Copilot Configuration

### Initial Setup

**1. Sign In:**

1. Open Command Palette
2. Type **"GitHub Copilot: Sign In"**
3. Authorize GitHub
4. Authorize Copilot

**2. Verify Setup:**
- Look for Copilot icon in status bar (bottom right)
- Icon should be active (not crossed out)

---

### Copilot Settings

```json
{
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "markdown": true
  },
  "github.copilot.editor.enableAutoCompletions": true,
  "github.copilot.editor.enableCodeActions": true,
  "editor.inlineSuggest.enabled": true,
  "github.copilot.advanced": {
    "debug.overrideEngine": "copilot-codex",
    "debug.testOverrideProxyUrl": "",
    "debug.overrideProxyUrl": ""
  }
}
```

---

### Copilot Chat Settings

```json
{
  "github.copilot.chat.enable": true,
  "github.copilot.chat.localeOverride": "en",
  "github.copilot.chat.scopeSelection": true
}
```

---

### Keyboard Shortcuts (Copilot)

**Default:**

| Shortcut | Action |
|----------|--------|
| `Ctrl+I` / `Cmd+I` | Inline Chat |
| `Tab` | Accept suggestion |
| `Esc` | Dismiss suggestion |
| `Alt+]` / `Option+]` | Next suggestion |
| `Alt+[` / `Option+[` | Previous suggestion |

---

## Codeium Configuration

### Initial Setup

**1. Sign In:**

After installation, click "Sign In" in status bar or:
1. Command Palette → "Codeium: Sign In"
2. Browser opens → Sign in/Create account
3. Authorize VS Code

---

### Codeium Settings

```json
{
  "codeium.enableCodeLens": true,
  "codeium.enableSearch": true,
  "codeium.enableConfig": {
    "*": true,
    "json": true,
    "yaml": true
  },
  "codeium.chatEnabled": true,
  "codeium.aggressiveMode": false
}
```

---

### Language-Specific Settings

```json
{
  "codeium.enableConfig": {
    "python": true,
    "javascript": true,
    "typescript": true,
    "go": true,
    "rust": true,
    "java": true,
    "cpp": true,
    "plaintext": false,
    "log": false
  }
}
```

---

## Tabnine Configuration

### Initial Setup

**1. Sign In (Optional):**
- Command Palette → "Tabnine: Sign In"

**2. Choose Plan:**
- Free: Basic completions
- Pro ($12/mo): AI completions

---

### Tabnine Settings

```json
{
  "tabnine.experimentalAutoImports": true,
  "tabnine.disable_line_suggestion_when_focused": false,
  "tabnine.disableLineRegex": [],
  "tabnine.receiveBetaChannelUpdates": false
}
```

---

## Amazon CodeWhisperer Configuration

### Initial Setup

**1. Sign In with AWS Builder ID:**

1. Command Palette → "AWS: Sign in with AWS Builder ID"
2. Browser opens → Create Builder ID (free)
3. Verify email
4. Authorize VS Code

**2. Start CodeWhisperer:**
- Command Palette → "CodeWhisperer: Start"

---

### CodeWhisperer Settings

```json
{
  "aws.codeWhisperer.shareCodeWhispererContentWithAWS": true,
  "aws.codeWhisperer.includeSuggestionsWithCodeReferences": true,
  "aws.codeWhisperer.importRecommendationForInlineCompletion": true
}
```

---

## Continue.dev Configuration

### Initial Setup

**1. Configure AI Provider:**

1. Click Continue icon in sidebar
2. Click "Configure"
3. Select provider (OpenAI, Anthropic, etc.)
4. Add API key

**Or edit config file:**

**Location:**
- macOS/Linux: `~/.continue/config.json`
- Windows: `%USERPROFILE%\.continue\config.json`

---

### Continue Configuration

```json
{
  "models": [
    {
      "title": "Claude 3.5 Sonnet",
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022",
      "apiKey": "${ANTHROPIC_API_KEY}"
    },
    {
      "title": "GPT-4",
      "provider": "openai",
      "model": "gpt-4-turbo",
      "apiKey": "${OPENAI_API_KEY}"
    },
    {
      "title": "Local Llama",
      "provider": "ollama",
      "model": "llama3:70b"
    }
  ],
  "customCommands": [
    {
      "name": "test",
      "prompt": "Write unit tests for the selected code"
    }
  ],
  "contextProviders": [
    {
      "name": "code",
      "params": {}
    },
    {
      "name": "docs",
      "params": {}
    }
  ]
}
```

---

### Local Models with Continue + Ollama

**1. Install Ollama:**
```bash
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.ai/install.sh | sh

# Windows: Download from ollama.ai
```

**2. Pull Models:**
```bash
ollama pull llama3:70b
ollama pull deepseek-coder:33b
ollama pull codellama:34b
```

**3. Configure Continue:**
```json
{
  "models": [
    {
      "title": "DeepSeek Coder",
      "provider": "ollama",
      "model": "deepseek-coder:33b"
    }
  ]
}
```

---

## Multi-Extension Setup

### Recommended Configuration

**Scenario: Use Claude for chat, Copilot for autocomplete**

```json
{
  // Claude for chat/complex tasks
  "claude.apiKey": "${ANTHROPIC_API_KEY}",
  "claude.model": "claude-3-5-sonnet-20241022",

  // Copilot for inline suggestions
  "github.copilot.enable": {
    "*": true
  },
  "editor.inlineSuggest.enabled": true,

  // Disable Claude inline to avoid conflicts
  "claude.inlineCompletions": false
}
```

---

### Scenario: Free Tier Only

```json
{
  // Codeium for autocomplete (free)
  "codeium.enableCodeLens": true,

  // CodeWhisperer for chat (free)
  "aws.codeWhisperer.shareCodeWhispererContentWithAWS": true,

  // Continue with local Ollama (free)
  // Configure in ~/.continue/config.json
}
```

---

## Security & Privacy Settings

### Disable Telemetry

**Claude:**
```json
{
  "claude.telemetry": false
}
```

**Copilot:**
```json
{
  "github.copilot.advanced": {
    "debug.filterLogCategories": []
  }
}
```

**Codeium:**
```json
{
  "codeium.telemetry": false
}
```

---

### Exclude Sensitive Files

**Configure `.gitignore` and `.vscodeignore`:**

```gitignore
# Don't send to AI
.env
.env.local
secrets/
credentials.json
*.key
*.pem
```

**VS Code Settings:**

```json
{
  "claude.excludePatterns": [
    "**/.env",
    "**/.env.*",
    "**/secrets/**",
    "**/*.key",
    "**/*.pem"
  ],
  "github.copilot.advanced": {
    "debug.excludeDirectories": [
      ".env",
      "secrets"
    ]
  }
}
```

---

## Performance Tuning

### Reduce Latency

```json
{
  "claude.streamResponses": true,
  "claude.maxTokens": 2048,
  "github.copilot.editor.enableAutoCompletions": true,
  "codeium.aggressiveMode": true
}
```

---

### Reduce Resource Usage

```json
{
  "claude.chatHistory": false,
  "claude.maxTokens": 1024,
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "json": false,
    "markdown": false
  }
}
```

---

## Project-Specific Configuration

### Frontend Project (React/TypeScript)

**.vscode/settings.json:**

```json
{
  "claude.model": "claude-3-5-sonnet-20241022",
  "claude.customInstructions": "TypeScript React project. Use functional components, hooks, and modern React patterns. Follow our component structure.",
  "github.copilot.enable": {
    "*": true
  },
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

### Backend Project (Python/Django)

**.vscode/settings.json:**

```json
{
  "claude.model": "claude-3-opus-20240229",
  "claude.customInstructions": "Django Python backend. Follow Django best practices, use class-based views, write comprehensive docstrings.",
  "python.linting.enabled": true,
  "python.formatting.provider": "black",
  "codeium.enableConfig": {
    "python": true
  }
}
```

---

### Machine Learning Project

**.vscode/settings.json:**

```json
{
  "claude.model": "claude-3-opus-20240229",
  "claude.customInstructions": "Machine learning project using PyTorch and Jupyter notebooks. Explain mathematical concepts clearly.",
  "jupyter.askForKernelRestart": false,
  "python.dataScience.enabled": true
}
```

---

## Troubleshooting

### API Key Not Working

**Check API Key:**
```bash
# Test API key independently
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "content-type: application/json" \
  -d '{"model":"claude-3-5-sonnet-20241022","max_tokens":10,"messages":[{"role":"user","content":"Hi"}]}'
```

**Reload VS Code:**
- Command Palette → "Reload Window"

---

### Extension Conflicts

**Disable Other AI Extensions Temporarily:**

1. Open Extensions panel
2. Disable all AI extensions except one
3. Test functionality
4. Re-enable one at a time

**Common Conflicts:**
- Multiple inline completion providers
- Overlapping keyboard shortcuts

---

### Performance Issues

**Reduce Extension Load:**

```json
{
  "claude.chatHistory": false,
  "claude.maxTokens": 2048,
  "github.copilot.enable": {
    "markdown": false,
    "plaintext": false
  }
}
```

**Check Extension Host:**
- Command Palette → "Developer: Show Running Extensions"
- Look for high CPU/memory usage

---

## Environment Variables

### Secure API Key Management

**Use environment variables instead of hardcoding:**

**macOS/Linux (~/.bashrc or ~/.zshrc):**

```bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
export OPENAI_API_KEY="sk-proj-..."
```

**Windows (PowerShell):**

```powershell
$env:ANTHROPIC_API_KEY="sk-ant-api03-..."
$env:OPENAI_API_KEY="sk-proj-..."
```

**VS Code Settings:**

```json
{
  "claude.apiKey": "${ANTHROPIC_API_KEY}",
  "continue.models": [
    {
      "apiKey": "${OPENAI_API_KEY}"
    }
  ]
}
```

---

## Team Configuration

### Share Settings with Team

**1. Create `.vscode/settings.json` in repo:**

```json
{
  "claude.model": "claude-3-5-sonnet-20241022",
  "claude.customInstructions": "Follow our team coding standards...",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

**2. Commit to version control**

**3. Add to .gitignore (optional):**

```gitignore
# Keep team settings
# .vscode/settings.json

# Ignore personal settings
.vscode/settings.local.json
```

---

## Advanced Configuration

### Proxy Configuration

**Corporate Proxy:**

```json
{
  "http.proxy": "http://proxy.company.com:8080",
  "http.proxyStrictSSL": false,
  "http.proxyAuthorization": null
}
```

---

### Custom Model Endpoints

**Continue.dev with custom endpoint:**

```json
{
  "models": [
    {
      "title": "Custom Claude",
      "provider": "openai",
      "model": "claude-3-5-sonnet-20241022",
      "apiBase": "https://custom-proxy.company.com/v1",
      "apiKey": "${API_KEY}"
    }
  ]
}
```

---

## Next Steps

- **[View Installation Guide →](/vscode-extensions/installation/)**
- **[View Main Guide →](/vscode-extensions/)**
- **[Compare Extensions →](/comparisons/feature-matrix.md)**

---

## Additional Resources

- [Claude Extension Settings Reference](https://docs.anthropic.com/claude/docs/claude-for-vscode)
- [GitHub Copilot Documentation](https://docs.github.com/copilot)
- [VS Code Settings Documentation](https://code.visualstudio.com/docs/getstarted/settings)
- [Continue.dev Configuration](https://continue.dev/docs/reference/config)

---

*Last updated: 2025-11-16*
