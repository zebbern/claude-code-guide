# Factory AI & Void - Complete Guide

<div align="center">

![Factory AI](https://img.shields.io/badge/Factory-AI-blue)
![Void](https://img.shields.io/badge/Void-Editor-purple)

*Factory AI Droids and Void Editor - Modern AI-powered development platforms*

[Factory AI](https://factory.ai/) · [Void Editor](https://voideditor.com/)

</div>

---

## Overview

This guide covers two separate but related AI coding tools:

1. **Factory AI** - AI coding platform with "Droids" (autonomous agents)
2. **Void** - Open-source AI code editor (Cursor alternative)

---

## Factory AI

<div align="center">

*AI-powered coding platform with autonomous "Droids"*

[Website](https://factory.ai/) · [Factory IDE](https://factory.ai/product/ide)

</div>

### What is Factory AI?

Factory AI is a comprehensive AI coding platform that features autonomous AI agents called "Droids" that can code alongside you across multiple interfaces:
- Web application
- IDE extensions (VS Code, JetBrains)
- Terminal/CLI
- Factory Bridge (local repository access)

### Key Features

- ✅ **Droids** - Autonomous AI coding agents
- ✅ **Multiple Interfaces** - Web, IDE, CLI
- ✅ **GitHub Integration** - Direct repository access
- ✅ **Local Development** - Factory Bridge for local repos
- ✅ **Collaboration** - Team-based development
- ✅ **Full-Stack** - Frontend, backend, databases

### Installation

#### **CLI Installation**

```bash
curl -fsSL https://app.factory.ai/cli | sh
```

#### **VS Code Extension**

1. Open VS Code
2. Search for "Factory AI" in Extensions
3. Install and configure

#### **JetBrains Plugin**

1. Open JetBrains IDE (IntelliJ, PyCharm, etc.)
2. Go to Plugins
3. Search for "Factory AI"
4. Install and configure

### Getting Started

#### **1. Web Interface**

1. Visit [factory.ai](https://factory.ai/)
2. Sign up for account
3. Connect GitHub repository or use Factory Bridge
4. Start chatting with Droids

#### **2. CLI Usage**

```bash
# Navigate to your project
cd /path/to/project

# Start a Droid
droid

# Interact with the Droid
> Create a REST API with Express.js
```

#### **3. IDE Extension**

1. Open project in VS Code/JetBrains
2. Click Factory AI icon
3. Start Droid session
4. Give instructions

### Factory Droids

**What are Droids?**

Droids are autonomous AI agents that can:
- Write code across your entire project
- Understand your codebase architecture
- Make multi-file changes
- Run tests and deploy
- Collaborate with you in real-time

**Droid Capabilities:**
- Full repository access
- Multi-file refactoring
- Automated testing
- Deployment automation
- Code review
- Documentation generation

### Factory Bridge

**For Local Repositories:**

Factory Bridge allows Factory AI Droids to access your local repositories:

1. **Download** Factory Bridge app
2. **Install** on your development machine
3. **Connect** to Factory AI account
4. **Grant access** to local repositories
5. **Use Droids** on local code via web interface

**Benefits:**
- Work on local, private code
- No need to push to GitHub
- Secure local connection
- Web interface convenience

### Pricing

Visit [factory.ai](https://factory.ai/) for current pricing (typically subscription-based).

### Best Use Cases

- **Team Development** - Collaborative coding
- **Full-Stack Projects** - End-to-end development
- **Rapid Prototyping** - Quick project setup
- **Legacy Code** - Understanding and refactoring
- **Documentation** - Auto-generated docs

---

## Void Editor

<div align="center">

*Open-source AI code editor - Cursor alternative*

[Website](https://voideditor.com/) · [GitHub](https://github.com/voideditor/void)

</div>

### What is Void?

Void is an open-source AI code editor and a fork of VS Code. It's positioned as an alternative to Cursor with full AI capabilities built-in.

### Key Features

- ✅ **Open Source** - Free and transparent
- ✅ **VS Code Fork** - Familiar interface
- ✅ **Built-in AI** - No extensions needed
- ✅ **Local Models** - Ollama integration
- ✅ **Cloud Models** - OpenAI, Anthropic, etc.
- ✅ **One-Click Migration** - Transfer VS Code settings
- ✅ **Tab Autocomplete** - Inline AI suggestions
- ✅ **Chat Interface** - AI conversation panel
- ✅ **Inline Edits** - Edit code with AI

### Installation

#### **Download Void**

1. Visit [voideditor.com](https://voideditor.com/)
2. Download for your platform:
   - **Windows**: .exe installer
   - **macOS**: .dmg installer
   - **Linux**: .AppImage or .deb

3. Install and launch

#### **Migrate from VS Code**

Void offers one-click migration:

1. **Launch Void** for the first time
2. Click **"Import from VS Code"**
3. **Transfers**:
   - All extensions
   - Themes and color schemes
   - Keyboard shortcuts
   - Settings and preferences
   - Workspace configurations

### Setup AI Models

#### **1. Cloud Models (Recommended for Beginners)**

**OpenAI:**
```
Settings > Void > AI Provider > OpenAI
API Key: sk-proj-...
Model: gpt-4-turbo
```

**Anthropic:**
```
Settings > Void > AI Provider > Anthropic
API Key: sk-ant-api03-...
Model: claude-3-5-sonnet-20241022
```

**Google:**
```
Settings > Void > AI Provider > Google
API Key: AIza...
Model: gemini-pro-1.5
```

#### **2. Local Models (Free with Ollama)**

**Install Ollama:**
```bash
# macOS/Linux
curl -fsSL https://ollama.ai/install.sh | sh

# Windows
# Download from ollama.ai
```

**Download Models:**
```bash
# Best for coding
ollama pull deepseek-coder:33b

# Alternative
ollama pull codellama:34b
ollama pull phind-codellama:34b
```

**Configure Void:**
```
Settings > Void > AI Provider > Ollama
Server: http://localhost:11434
Model: deepseek-coder:33b
```

### Features

#### **Tab Autocomplete**

As you type, Void suggests completions:
- Press **Tab** to accept
- Press **Esc** to dismiss
- Suggestions appear inline

#### **Chat Interface**

Open chat panel (Ctrl+Cmd+L / Ctrl+L):
```
> Refactor this component to use hooks
> Add error handling to the API calls
> Generate unit tests for this function
```

#### **Inline Edits**

Select code + keyboard shortcut (Ctrl+Cmd+K / Ctrl+K):
```
Selected: function without error handling
Prompt: Add try-catch error handling
Result: Updated function with errors handled
```

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Tab** | Accept autocomplete |
| **Esc** | Dismiss suggestion |
| **Ctrl/Cmd+L** | Open chat |
| **Ctrl/Cmd+K** | Inline edit |
| **Ctrl/Cmd+Shift+L** | New chat |

### Comparison: Void vs Cursor vs VS Code

| Feature | Void | Cursor | VS Code |
|---------|------|--------|---------|
| **Cost** | Free (open-source) | $20/mo | Free |
| **AI Built-in** | ✅ Yes | ✅ Yes | ⚠️ Via extensions |
| **Local Models** | ✅ Yes (Ollama) | ⚠️ Limited | ⚠️ Via extensions |
| **Cloud Models** | ✅ Multiple providers | ✅ Multiple providers | ⚠️ Via extensions |
| **Open Source** | ✅ Yes | ❌ No | ✅ Yes (core) |
| **VS Code Compatible** | ✅ Yes (fork) | ✅ Yes (fork) | N/A |
| **Extension Support** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Tab Autocomplete** | ✅ Yes | ✅ Yes | ⚠️ Via extensions |
| **Inline Edits** | ✅ Yes | ✅ Yes | ⚠️ Via extensions |
| **Chat Interface** | ✅ Yes | ✅ Yes | ⚠️ Via extensions |

### Best Use Cases

**Use Void if:**
- ✅ Want free, open-source alternative to Cursor
- ✅ Prefer local models (privacy, cost)
- ✅ Want built-in AI without extensions
- ✅ Comfortable with early-stage software
- ✅ Want to contribute to open-source

**Use Cursor if:**
- ✅ Want most polished experience
- ✅ Happy to pay subscription
- ✅ Need enterprise support
- ✅ Want latest features first

**Use VS Code if:**
- ✅ Prefer choosing your own extensions
- ✅ Want maximum stability
- ✅ Need specific extension ecosystem
- ✅ Happy with extension-based AI

### Troubleshooting Void

#### **AI Not Working**

**Solutions:**
1. Check API key is correct
2. Verify internet connection (cloud models)
3. Ensure Ollama is running (local models)
4. Restart Void
5. Check Void logs (Help > Toggle Developer Tools)

#### **Slow Performance**

**Solutions:**
1. Switch to lighter model (e.g., GPT-3.5)
2. Use local models
3. Reduce context window size in settings
4. Close unused tabs and editors
5. Disable unnecessary extensions

#### **Model Not Found (Ollama)**

**Solutions:**
```bash
# List downloaded models
ollama list

# Pull model if not present
ollama pull deepseek-coder:33b

# Check Ollama is running
curl http://localhost:11434
```

---

## Comparison: Factory AI vs Void

| Feature | Factory AI | Void |
|---------|------------|------|
| **Type** | Platform + Agents | Editor |
| **Interface** | Web, CLI, IDE | Editor only |
| **AI Agents** | Droids (autonomous) | Built-in AI assistant |
| **Collaboration** | Team-based | Individual |
| **Cost** | Subscription | Free (+ API costs) |
| **Local Development** | Via Bridge | Native |
| **Open Source** | ❌ No | ✅ Yes |
| **Best For** | Teams, full projects | Solo developers |

---

## Additional Resources

### Factory AI
- [Factory AI Website](https://factory.ai/)
- [Factory IDE](https://factory.ai/product/ide)
- [Setup Guide](https://ai4students.xyz/blog/factory-ai-droid-setup-guide.html)
- [Factory AI Guide](https://www.siddharthbharath.com/factory-ai-guide/)

### Void
- [Void Editor Website](https://voideditor.com/)
- [GitHub Repository](https://github.com/voideditor/void)
- [Void + Ollama Setup](https://dev.to/nodeshiftcloud/void-ollama-llms-how-i-turned-my-code-editor-into-a-full-blown-ai-workbench-eop)

---

## Pro Tips

### Factory AI
1. **Use Factory Bridge** for private/local repos
2. **Start with web interface** to understand Droids
3. **Leverage GitHub integration** for existing projects
4. **Use CLI** for terminal-based workflows
5. **Collaborate with team** via shared Droids

### Void
1. **Start with cloud models** (easier setup)
2. **Migrate settings** from VS Code in one click
3. **Try local models** (DeepSeek Coder) for privacy
4. **Customize shortcuts** to match your workflow
5. **Join community** for tips and troubleshooting
6. **Keep updated** - active development
7. **Contribute** if you find bugs (open-source!)

---

**Next Steps:**
- [Compare All Tools →](/comparisons/feature-matrix.md)
- [Explore MCP Servers →](/shared/mcp-servers/)
- [Back to Main Guide →](/README.md)

---

*Last updated: 2025-11-12*
