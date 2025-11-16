# Cline - Complete Guide

<div align="center">

![Cline](https://img.shields.io/badge/Cline-VS%20Code-blue)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green)]()
[![GitHub Stars](https://img.shields.io/github/stars/cline/cline)]()

*Autonomous coding agent right in your IDE*

[GitHub](https://github.com/cline/cline) · [Website](https://cline.bot/) · [Documentation](https://docs.cline.bot/) · [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Configuration](#configuration)
- [Features](#features)
- [How It Works](#how-it-works)
- [API Providers](#api-providers)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

**Cline** is an autonomous coding agent for VS Code, capable of creating/editing files, executing commands, using the browser, and more—all with your permission every step of the way.

Cline is not just a code completion tool; it's an **AI agent** that can:
- Create entire projects from scratch
- Debug complex issues
- Refactor codebases
- Execute terminal commands
- Browse documentation
- And much more

### Key Highlights

- ✅ **Fully Autonomous** - Can complete complex tasks end-to-end
- ✅ **Permission-Based** - You approve every action
- ✅ **Multi-Tool Access** - Files, CLI, browser, and more
- ✅ **Multiple AI Providers** - Anthropic, OpenAI, Google, and more
- ✅ **Local Model Support** - LM Studio, Ollama
- ✅ **Browser Integration** - Can browse docs and search
- ✅ **Open Source** - Community-driven development

---

## Installation

### Via VS Code Marketplace

1. Open **VS Code**
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for **"Cline"**
4. Click **Install**
5. Click the Cline icon in the sidebar

### Via Command Palette

1. `Ctrl+Shift+P` / `Cmd+Shift+P`
2. Type: `Extensions: Install Extensions`
3. Search: **"Cline"**
4. Install

### Verify Installation

You should see:
- Cline icon in the Activity Bar (sidebar)
- Cline panel when clicked
- Chat interface ready to use

---

## Configuration

### Initial Setup

On first launch, Cline will prompt you to configure an API provider.

#### **Step 1: Choose Provider**

Supported providers:
- **Anthropic** (Claude) - Recommended
- **OpenAI** (GPT)
- **Google** (Gemini)
- **AWS Bedrock**
- **Azure OpenAI**
- **GCP Vertex**
- **Cerebras**
- **Groq**
- **OpenRouter** - Access to 100+ models
- **LM Studio** - Local models
- **Ollama** - Local models

#### **Step 2: Get API Key**

**For Anthropic (Recommended):**
1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Navigate to **API Keys**
3. Click **Create Key**
4. Copy the key
5. Paste into Cline settings

**For OpenAI:**
1. Visit [platform.openai.com](https://platform.openai.com)
2. Go to **API Keys**
3. Create new secret key
4. Copy and paste into Cline

**For Local Models (Free):**
1. Install [LM Studio](https://lmstudio.ai/) or [Ollama](https://ollama.ai/)
2. Download a coding model (e.g., DeepSeek Coder, CodeLlama)
3. Start the local server
4. Configure Cline to use `http://localhost:1234`

#### **Step 3: Configure in Cline**

1. Open Cline settings (gear icon in Cline panel)
2. Select your provider
3. Enter API key
4. Choose default model
5. Save

---

## Features

### 1. **File Creation & Editing**

Cline can create and modify files with your permission.

```
You: Create a FastAPI server with CRUD endpoints for users
Cline: [Creates multiple files: main.py, models.py, routes.py, etc.]
```

**Capabilities:**
- Create new files
- Edit existing files
- Delete files (with confirmation)
- Rename/move files
- Full diff previews before applying

### 2. **Terminal Command Execution**

Cline can run terminal commands after you approve them.

```
You: Install FastAPI and run the server
Cline:
  Would you like me to run: pip install fastapi uvicorn?
  [Approve] [Deny]

  Would you like me to run: uvicorn main:app --reload?
  [Approve] [Deny]
```

**Use Cases:**
- Install dependencies
- Run tests
- Start servers
- Git operations
- Build processes
- Deploy applications

### 3. **Browser Integration**

Cline can browse the web to gather information.

```
You: Find the latest best practices for Next.js 14
Cline: [Browses documentation, searches, reads articles]
      Based on latest docs, here are the recommendations...
```

**Capabilities:**
- Search Google/Bing
- Read documentation
- Fetch API specifications
- Research libraries
- Check package versions

### 4. **Project Exploration**

Cline understands your codebase structure.

```
You: Where is the authentication logic?
Cline: Found authentication in:
       - src/auth/login.ts (JWT generation)
       - middleware/auth.ts (verification)
       - routes/protected.ts (usage)
```

**Features:**
- File search
- Code understanding
- Dependency analysis
- Architecture review

### 5. **Multi-Step Workflows**

Cline handles complex, multi-step tasks autonomously.

**Example Workflow:**
```
You: Set up a new React project with TypeScript, TailwindCSS, and deploy to Vercel

Cline:
1. ✅ Create project with Vite
2. ✅ Install dependencies
3. ✅ Configure TypeScript
4. ✅ Set up TailwindCSS
5. ✅ Create basic components
6. ✅ Initialize git repository
7. ✅ Deploy to Vercel

All done! Your app is live at https://yourapp.vercel.app
```

### 6. **Debugging & Error Fixing**

Cline can identify and fix bugs.

```
You: The app is crashing when I click submit
Cline:
  1. Let me run the app and reproduce the error
  2. Found the issue: undefined variable in handleSubmit
  3. Fixing...
  4. Fixed! Testing to confirm...
  5. ✅ Working now!
```

---

## How It Works

### The Cline Workflow

1. **You give a task** - Describe what you want
2. **Cline plans** - Breaks down into steps
3. **Cline acts** - Executes each step (with your approval)
4. **You review** - Approve or deny each action
5. **Cline iterates** - Adjusts based on feedback
6. **Task complete** - Final review and handoff

### Permission System

Cline asks for permission before:
- Creating/editing/deleting files
- Running terminal commands
- Installing packages
- Making network requests
- Accessing browser

**You control everything.**

### Approval Options

For each action:
- ✅ **Approve** - Execute this action
- ❌ **Deny** - Skip this action
- 🔄 **Edit** - Modify before executing
- ⏸️ **Pause** - Stop and review

---

## API Providers

### Anthropic (Recommended)

**Why:**
- Best coding performance
- Claude 3.5 Sonnet optimized for code
- Large context window (200K tokens)
- Great at following instructions

**Setup:**
```
Provider: Anthropic
Model: claude-3-5-sonnet-20241022
API Key: sk-ant-api03-...
```

**Cost:**
- $3 per 1M input tokens
- $15 per 1M output tokens

### OpenAI

**Good for:**
- GPT-4 Turbo performance
- Familiarity with OpenAI ecosystem

**Setup:**
```
Provider: OpenAI
Model: gpt-4-turbo
API Key: sk-proj-...
```

### OpenRouter (Best for Multi-Model)

**Why:**
- Access to 100+ models
- Single API key
- Competitive pricing
- Try different models easily

**Setup:**
```
Provider: OpenRouter
Model: anthropic/claude-3.5-sonnet
API Key: sk-or-v1-...
```

**Popular Models:**
- `anthropic/claude-3.5-sonnet`
- `openai/gpt-4-turbo`
- `google/gemini-pro-1.5`
- `meta-llama/llama-3-70b`

### Local Models (Free)

**Why:**
- Zero cost
- Privacy
- Offline capability

**Setup with Ollama:**
```bash
# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Download a coding model
ollama pull deepseek-coder:33b

# Start server (runs automatically)
```

**Configure Cline:**
```
Provider: Ollama
Model: deepseek-coder:33b
API Base: http://localhost:11434
```

**Recommended Local Models:**
- `deepseek-coder:33b` - Best for coding
- `codellama:34b` - Meta's coding model
- `phind-codellama:34b` - Optimized for code
- `wizard-vicuna:13b` - Good general model

---

## Best Practices

### Task Descriptions

**✅ Good:**
```
Create a RESTful API with Express.js for a blog:
- User authentication with JWT
- CRUD for posts and comments
- PostgreSQL database
- Input validation
- Error handling
- Unit tests
```

**❌ Bad:**
```
Make a blog API
```

### Iterative Approach

Start simple, then iterate:

```
1. You: Create a basic React component for a todo list
2. Cline: [Creates component]
3. You: Add ability to mark todos complete
4. Cline: [Adds feature]
5. You: Add local storage persistence
6. Cline: [Implements localStorage]
```

### Review Before Approve

- **Read diffs carefully** before approving file changes
- **Understand commands** before approving terminal execution
- **Test incrementally** after each approved change
- **Ask questions** if unclear about an action

### Use Browser Feature

Let Cline research:

```
You: Find the best React state management library for 2025 and implement it
Cline:
  1. [Browses latest articles and docs]
  2. Based on research, Zustand is recommended for 2025
  3. Installing and implementing...
```

---

## Troubleshooting

### API Key Not Working

**Issue**: "Invalid API key" error

**Solutions:**
1. Verify key is correct (check for spaces)
2. Confirm billing is active
3. Check provider status page
4. Regenerate API key
5. Try different provider temporarily

### Extension Not Responding

**Issue**: Cline doesn't respond to messages

**Solutions:**
```bash
# Reload VS Code window
Cmd/Ctrl + Shift + P > "Reload Window"

# Check extension logs
Help > Toggle Developer Tools > Console

# Reinstall extension
1. Uninstall Cline
2. Reload VS Code
3. Reinstall
4. Restart
```

### File Changes Not Applying

**Issue**: Cline shows changes but files don't update

**Solutions:**
1. Check file permissions
2. Ensure file isn't open in another editor
3. Check if file is in .gitignore or excluded
4. Try manual diff preview
5. Restart VS Code

### Terminal Commands Fail

**Issue**: Commands fail when executed by Cline

**Solutions:**
1. Verify command works manually first
2. Check current working directory
3. Ensure required tools are installed
4. Check PATH environment variable
5. Try running in integrated terminal manually

---

## Advanced Features

### Custom Instructions

Configure Cline with custom instructions:

```
Settings > Cline > Custom Instructions

Example:
"Always use TypeScript with strict mode.
Always write unit tests for new functions.
Follow Airbnb style guide.
Use functional components in React."
```

### Memory Between Sessions

Cline can remember context across sessions:

```
Settings > Cline > Enable Memory
```

This helps Cline:
- Understand your coding style
- Remember project structure
- Recall previous discussions
- Maintain consistency

### Keyboard Shortcuts

Set custom shortcuts:

```
File > Preferences > Keyboard Shortcuts

Search: "Cline"

Suggested:
- Ctrl/Cmd + Shift + L: Open Cline
- Ctrl/Cmd + Shift + K: New Cline conversation
```

---

## Additional Resources

### Official Documentation
- [Cline Website](https://cline.bot/)
- [GitHub Repository](https://github.com/cline/cline)
- [Wiki & Guides](https://github.com/cline/cline/wiki)

### Community Resources
- [Practical Guide to Cline](https://sider.ai/blog/ai-tools/how-to-use-cline-a-practical-guide-to-the-ai-coding-agent-in-vs-code)
- [Cline for Developers](https://garysvenson09.medium.com/cline-for-developers-your-ai-powered-coding-assistant-inside-vs-code-12a2902cea48)

---

## Comparison with Similar Tools

| Feature | Cline | Roo-Code | GitHub Copilot |
|---------|-------|----------|----------------|
| **Autonomy** | ✅ High | ✅ High | ❌ Low |
| **Multi-file editing** | ✅ Yes | ✅ Yes | ⚠️ Limited |
| **Terminal access** | ✅ Yes | ✅ Yes | ❌ No |
| **Browser integration** | ✅ Yes | ❌ No | ❌ No |
| **Permission system** | ✅ Yes | ✅ Yes | N/A |
| **Local models** | ✅ Yes | ✅ Yes | ❌ No |
| **Multi-mode system** | ❌ No | ✅ Yes | ❌ No |
| **Open source** | ✅ Yes | ✅ Yes | ❌ No |

---

## Pro Tips

1. **Start small** - Give simple tasks first to understand behavior
2. **Use browser feature** - Let Cline research solutions
3. **Review all changes** - Don't blindly approve
4. **Save checkpoints** - Commit to git before major changes
5. **Use local models** for experimentation (free!)
6. **Configure custom instructions** for consistency
7. **Enable memory** for better context
8. **Test incrementally** after each approved change
9. **Ask for explanations** when unclear
10. **Combine with other tools** (Copilot for autocomplete, Cline for tasks)

---

**Next Steps:**
- [Configure Advanced Settings](/cline/configuration/)
- [View Example Workflows](https://github.com/cline/cline/wiki)
- [Compare with Other Tools](/comparisons/feature-matrix.md)

---

*Last updated: 2025-11-12*
