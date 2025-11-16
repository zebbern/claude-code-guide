# Roo-Code - Complete Guide

<div align="center">

![Roo-Code](https://img.shields.io/badge/Roo-Code-purple)
[![Platform](https://img.shields.io/badge/Platform-VS%20Code-blue)]()
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green)]()
[![License](https://img.shields.io/badge/License-Apache%202.0-blue)]()

*A whole dev team of AI agents in your code editor*

[GitHub](https://github.com/RooCodeInc/Roo-Code) · [Website](https://roocode.com/) · [Documentation](https://docs.roocode.com/) · [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Configuration](#configuration)
- [Features](#features)
- [Multi-Mode System](#multi-mode-system)
- [Model Configuration](#model-configuration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

**Roo-Code** (previously Roo Cline) is an open-source AI coding assistant that works as a VS Code extension. It gives you a whole dev team of AI agents with multi-mode capabilities, allowing you to assign different AI models to different tasks.

### Key Highlights

- ✅ **Multi-Mode System** - Code, Architect, Ask, Debug, Orchestrator modes
- ✅ **Model Flexibility** - Use different models for different modes
- ✅ **Fast Edits** - Lightning-fast code modifications
- ✅ **Concurrent File Reads** - Read multiple files simultaneously
- ✅ **Codebase Indexing** - Semantic search across entire codebase
- ✅ **Task Management** - Track progress on complex multi-step tasks
- ✅ **Checkpoints** - Save and restore conversation states

---

## Installation

### Via VS Code Marketplace

1. Open **VS Code**
2. Click **Extensions** icon (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for **"Roo-Code"**
4. Click **Install**
5. Look for the **kangaroo icon** in sidebar

### Via Command Palette

1. Open Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Type `Extensions: Install Extensions`
3. Search **"Roo-Code"**
4. Install

### Verify Installation

After installation, you should see:
- 🦘 Kangaroo icon in the sidebar
- Roo-Code panel when you click the icon
- Access via Command Palette: `Roo-Code: Open`

---

## Configuration

### Initial Setup

1. Click the **🦘 kangaroo icon** in VS Code sidebar
2. Choose your **AI provider**:
   - Anthropic (Claude)
   - OpenAI (GPT)
   - Google (Gemini)
   - OpenRouter
   - AWS Bedrock
   - Azure OpenAI
   - GCP Vertex AI
   - Cerebras
   - Groq
   - Local (LM Studio / Ollama)

3. Enter your **API key** for the chosen provider
4. Configure **models for each mode** (optional)

### API Providers

#### **Anthropic (Recommended)**

```
Provider: Anthropic
API Key: sk-ant-api03-...
Models: Claude 3.5 Sonnet, Claude 3 Opus
```

**Get API Key:**
- Visit [console.anthropic.com](https://console.anthropic.com)
- Navigate to API Keys
- Create new key
- $5 in credits for new users

#### **OpenAI**

```
Provider: OpenAI
API Key: sk-proj-...
Models: GPT-4, GPT-3.5 Turbo
```

**Get API Key:**
- Visit [platform.openai.com](https://platform.openai.com)
- API Keys section
- Create new secret key

#### **OpenRouter (Multi-Model)**

```
Provider: OpenRouter
API Key: sk-or-v1-...
Models: Any model from OpenRouter catalog
```

**Get API Key:**
- Visit [openrouter.ai](https://openrouter.ai)
- Sign up and get API key
- Access to 100+ models

#### **Local Models (Free)**

```
Provider: LM Studio or Ollama
Server: http://localhost:1234
Models: Any locally-run model
```

**Setup:**
1. Install [LM Studio](https://lmstudio.ai/) or [Ollama](https://ollama.ai/)
2. Download models (e.g., CodeLlama, DeepSeek Coder)
3. Start local server
4. Configure Roo-Code to use local endpoint

---

## Features

### 1. **Fast Edits**

Lightning-fast code modifications with intelligent diff application.

```
User: Refactor this function to use async/await
Roo-Code: [Instantly shows diff and applies changes]
```

**Benefits:**
- Near-instant code updates
- Smart diff algorithms
- Minimal context switching
- Undo/redo support

### 2. **Concurrent File Reads**

Read multiple files simultaneously for better context understanding.

```
User: Analyze the authentication flow across these files
Roo-Code: [Reads auth.ts, middleware.ts, config.ts in parallel]
```

### 3. **Code Actions**

Quick fixes and refactoring suggestions directly in the editor.

**Accessible via:**
- Right-click context menu
- Lightbulb icon
- Command Palette

**Examples:**
- Extract function
- Rename symbol
- Add type annotations
- Generate tests

### 4. **Diagnostics Integration**

Real-time error detection and resolution.

```
Roo-Code: I see 3 TypeScript errors. Want me to fix them?
User: Yes
Roo-Code: [Fixes errors and shows diffs]
```

### 5. **Codebase Indexing**

Semantic search across your entire codebase.

```
User: Where is the user authentication logic?
Roo-Code: Found in 3 locations:
- src/auth/authenticate.ts:45
- src/middleware/auth-check.ts:12
- src/api/login.ts:89
```

**Features:**
- Full-text search
- Semantic understanding
- Cross-file navigation
- Symbol references

### 6. **Enhanced Prompts**

Automatically improve your prompts for better results.

```
User: make api
Roo-Code Enhanced: Create a RESTful API with Express.js including:
- CRUD endpoints for user management
- Error handling middleware
- Input validation
- TypeScript types
```

### 7. **Suggested Responses**

Context-aware follow-up suggestions.

After completing a task, Roo-Code suggests:
- "Add error handling?"
- "Generate unit tests?"
- "Create documentation?"

### 8. **Task Todo List**

Track progress on complex multi-step tasks.

```
✅ Create API endpoints
✅ Add authentication
🔄 Write unit tests
⏳ Deploy to production
```

### 9. **Checkpoints**

Save and restore conversation states.

**Use Cases:**
- Save successful workflows
- Experiment with different approaches
- Rollback to previous states
- Share working sessions with team

---

## Multi-Mode System

Roo-Code's killer feature: **assign different AI models to different modes**.

### Available Modes

#### **1. Code Mode** (Primary)

For actual code generation and editing.

**Best Models:**
- Claude 3.5 Sonnet
- GPT-4
- DeepSeek Coder

**Use For:**
- Writing new code
- Refactoring
- Bug fixes
- Code reviews

#### **2. Architect Mode**

For system design and high-level planning.

**Best Models:**
- Claude 3 Opus
- GPT-4
- Gemini Pro

**Use For:**
- Architecture decisions
- Database schema design
- API design
- System planning

#### **3. Ask Mode**

For questions and explanations.

**Best Models:**
- GPT-3.5 Turbo (fast & cheap)
- Claude 3 Haiku
- Gemini Flash

**Use For:**
- Quick questions
- Code explanations
- Documentation lookups
- Learning

#### **4. Debug Mode**

For identifying and fixing bugs.

**Best Models:**
- Claude 3.5 Sonnet
- GPT-4
- DeepSeek Coder

**Use For:**
- Error analysis
- Stack trace interpretation
- Performance debugging
- Memory leak detection

#### **5. Orchestrator Mode**

For coordinating complex multi-agent workflows.

**Best Models:**
- Claude 3 Opus
- GPT-4

**Use For:**
- Complex projects
- Multi-file changes
- Coordinating agents
- Workflow automation

---

## Model Configuration

### Example: Cost-Optimized Setup

```json
{
  "modes": {
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
      "model": "gpt-3.5-turbo"  // Cheap for quick questions
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

### Example: Free Local Setup

```json
{
  "modes": {
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
      "model": "llama3:8b"  // Fast for questions
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

### Example: Power User Setup

```json
{
  "modes": {
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
      "model": "google/gemini-flash-1.5"
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

## Best Practices

### Mode Selection

**Code Mode:**
- Use for all coding tasks
- Best for file edits
- Optimized for speed

**Architect Mode:**
- Start complex projects here
- Design database schemas
- Plan API structures

**Ask Mode:**
- Quick questions
- Documentation lookups
- Learning new concepts

**Debug Mode:**
- Analyzing errors
- Performance issues
- Stack trace interpretation

**Orchestrator Mode:**
- Multi-file refactoring
- Large-scale changes
- Complex workflows

### Cost Optimization

1. **Use cheaper models for Ask mode** (GPT-3.5 Turbo, Claude Haiku)
2. **Reserve expensive models** for Code and Architect modes
3. **Use local models** for experimentation
4. **Set token limits** to prevent runaway costs
5. **Monitor usage** through provider dashboards

### Performance Tips

- **Clear context** when switching projects
- **Use checkpoints** for experimental changes
- **Enable codebase indexing** for large projects
- **Limit concurrent file reads** if performance degrades
- **Restart VS Code** if Roo-Code becomes slow

### Security

- ❌ **Never commit** API keys to version control
- ✅ **Use environment variables** for API keys
- ✅ **Review generated code** before committing
- ✅ **Limit file access** in settings
- ✅ **Use .gitignore** for sensitive files

---

## Troubleshooting

### API Key Issues

**Issue**: "Invalid API key" error

**Solutions:**
1. Verify API key is correct (no extra spaces)
2. Check key hasn't expired
3. Confirm billing is active (OpenAI, Anthropic)
4. Try regenerating key
5. Check provider status page

### Extension Not Loading

**Issue**: Kangaroo icon missing or not clickable

**Solutions:**
```bash
# Reload VS Code
Cmd/Ctrl + Shift + P > "Reload Window"

# Reinstall extension
1. Uninstall Roo-Code
2. Reload VS Code
3. Reinstall Roo-Code
4. Restart VS Code
```

### Slow Performance

**Issue**: Roo-Code responds slowly

**Solutions:**
1. Reduce file scanning scope in settings
2. Disable codebase indexing temporarily
3. Clear conversation history
4. Use faster models for Code mode
5. Check internet connection
6. Restart VS Code

### Mode Not Working

**Issue**: Specific mode fails or doesn't work

**Solutions:**
1. Check model configuration for that mode
2. Verify API key for provider
3. Test with different model
4. Check provider rate limits
5. Review extension logs (Help > Toggle Developer Tools)

---

## Advanced Features

### Custom Prompts

Define reusable prompts for common tasks:

```
Settings > Roo-Code > Custom Prompts

Example:
Name: "API Endpoint"
Prompt: "Create a RESTful API endpoint with:
- Input validation
- Error handling
- TypeScript types
- Unit tests"
```

### Keyboard Shortcuts

Set custom shortcuts:

```
Cmd/Ctrl + K, Cmd/Ctrl + R: Open Roo-Code
Cmd/Ctrl + K, Cmd/Ctrl + C: Code Mode
Cmd/Ctrl + K, Cmd/Ctrl + A: Ask Mode
Cmd/Ctrl + K, Cmd/Ctrl + D: Debug Mode
```

### Integration with Git

Roo-Code integrates with VS Code's Git:
- Generates commit messages
- Reviews changes before commit
- Explains git diffs
- Suggests branch names

---

## Additional Resources

### Official Documentation
- [Roo-Code Documentation](https://docs.roocode.com/)
- [GitHub Repository](https://github.com/RooCodeInc/Roo-Code)
- [Features Guide](https://docs.roocode.com/features/)

### Community Resources
- [Tutorial: Setup Roo Code with Free LLMs](https://medium.com/four-nine-digital/free-ai-coding-assistant-setup-up-roo-code-with-free-llm-models-04beca21793d)
- [Practical Examples](https://www.datacamp.com/tutorial/roo-code)

---

## Pro Tips

1. **Start with Architect mode** for new projects
2. **Use Ask mode** for quick questions (saves money)
3. **Configure local models** for experimentation
4. **Save checkpoints** before risky changes
5. **Use suggested responses** to speed up workflow
6. **Enable codebase indexing** for large projects
7. **Assign GPT-3.5 to Ask mode** for cost savings
8. **Use Claude 3.5 Sonnet** for Code mode (best quality)

---

**Next Steps:**
- [Configure Models for Each Mode](/roo-code/setup/)
- [View Advanced Features](/roo-code/features/)
- [Compare with Other Extensions](/comparisons/feature-matrix.md)

---

*Last updated: 2025-11-12*
