# VS Code AI Coding Extensions - Complete Guide

<div align="center">

![VS Code](https://img.shields.io/badge/Visual%20Studio-Code-blue)
[![Extensions](https://img.shields.io/badge/AI-Extensions-brightgreen)]()

*Comprehensive guide to AI coding assistants for Visual Studio Code*

**Official Extension Links:**
- **Claude Code**: [Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) | [Docs](https://docs.anthropic.com/en/docs/claude-code/ide-integrations)
- **Cline**: [GitHub](https://github.com/cline/cline) | [Website](https://cline.bot/)
- **Roo-Code**: [GitHub](https://github.com/RooCodeInc/Roo-Code) | [Website](https://roocode.com/)
- **Continue.dev**: [GitHub](https://github.com/continuedev/continue) | [Docs](https://docs.continue.dev/)
- **GitHub Copilot**: [Website](https://github.com/features/copilot)
- **Codeium**: [Website](https://codeium.com/)
- **Tabnine**: [Website](https://www.tabnine.com/)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Extensions Covered](#extensions-covered)
- [Comparison Matrix](#comparison-matrix)
- [Installation Guide](#installation-guide)
- [Which Extension to Choose](#which-extension-to-choose)
- [Using Multiple Extensions](#using-multiple-extensions)

---

## Overview

Visual Studio Code has become the platform of choice for AI-powered coding assistants. This guide covers the major AI coding extensions available for VS Code, their features, setup, and how to choose the right one for your needs.

---

## Extensions Covered

### 1. **Claude Code Extension** (by Anthropic)

Official extension from Anthropic bringing Claude Code directly into VS Code.

**Key Features:**
- Native VS Code integration
- Real-time inline diffs
- MCP server support
- Conversation history
- Multiple sessions
- Slash commands

**[Full Guide →](/vscode-extensions/claude/)**

---

### 2. **Cline** (Autonomous Agent)

Open-source autonomous coding agent for VS Code.

**Key Features:**
- Full autonomy with permission system
- File creation/editing
- Terminal command execution
- Browser integration
- Multi-step workflows
- Local model support

**[Full Guide →](/cline/)**

---

### 3. **Roo-Code** (Multi-Mode System)

AI dev team with specialized modes for different tasks.

**Key Features:**
- Multi-mode system (Code, Architect, Ask, Debug, Orchestrator)
- Different models for different modes
- Fast edits with smart diffs
- Codebase indexing
- Task tracking
- Checkpoints

**[Full Guide →](/roo-code/)**

---

### 4. **GitHub Copilot** (Code Completion)

Microsoft/GitHub's AI pair programmer.

**Key Features:**
- Inline code suggestions
- Chat interface
- Copilot Labs (experimental features)
- Context-aware completions
- Multiple language support

**Setup:**
1. Install from VS Code Marketplace
2. Sign in with GitHub account
3. Requires GitHub Copilot subscription ($10/mo)

**[More Info →](/vscode-extensions/copilot/)**

---

## Comparison Matrix

| Feature | Claude Code | Cline | Roo-Code | GitHub Copilot |
|---------|-------------|-------|----------|----------------|
| **Type** | Agent | Agent | Multi-Agent | Autocomplete + Chat |
| **Autonomy** | High | High | High | Low |
| **Multi-file Editing** | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Limited |
| **Terminal Access** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Browser Access** | ⚠️ Via MCP | ✅ Yes | ❌ No | ❌ No |
| **MCP Support** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Local Models** | ❌ No | ✅ Yes | ✅ Yes | ❌ No |
| **Permission System** | ✅ Yes | ✅ Yes | ✅ Yes | N/A |
| **Multi-Mode** | ❌ No | ❌ No | ✅ Yes (5 modes) | ❌ No |
| **Inline Suggestions** | ❌ No | ❌ No | ❌ No | ✅ Yes |
| **Open Source** | ❌ No | ✅ Yes | ✅ Yes | ❌ No |
| **Cost** | Pro/Max required | Free + API costs | Free + API costs | $10/mo subscription |
| **Best For** | Claude users | Full autonomy | Cost optimization | Code completion |

---

## Installation Guide

### General Process

All extensions follow similar installation:

1. **Open VS Code**
2. **Extensions View**: `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. **Search** for extension name
4. **Click Install**
5. **Configure** API keys/settings
6. **Reload** VS Code if prompted

### Specific Installation Links

- **Claude Code**: Search "Claude Code" by Anthropic
- **Cline**: Search "Cline"
- **Roo-Code**: Search "Roo-Code"
- **GitHub Copilot**: Search "GitHub Copilot"

---

## Which Extension to Choose?

### Choose **Claude Code** if:

- ✅ You have Claude Pro, Max, or Team subscription
- ✅ You want MCP server integration
- ✅ You prefer official Anthropic product
- ✅ You need enterprise support
- ✅ You want the latest Claude models

**Best Use Cases:**
- Professional development
- Team collaboration
- MCP-based workflows
- Enterprise environments

---

### Choose **Cline** if:

- ✅ You want full autonomy
- ✅ You need browser integration
- ✅ You want open-source
- ✅ You need multiple AI provider support
- ✅ You want local model support
- ✅ Budget-conscious (pay-per-use)

**Best Use Cases:**
- Independent developers
- Complex multi-step tasks
- Research and experimentation
- Privacy-focused work (local models)

---

### Choose **Roo-Code** if:

- ✅ You want to optimize costs by using different models for different tasks
- ✅ You need specialized modes (Architect, Debug, etc.)
- ✅ You want fast edit performance
- ✅ You prefer multi-model flexibility
- ✅ You want task tracking built-in

**Best Use Cases:**
- Cost-sensitive projects
- Complex architectures
- Teams using multiple AI providers
- Workflow optimization

---

### Choose **GitHub Copilot** if:

- ✅ You want inline code completions
- ✅ You prefer autocomplete over chat
- ✅ Simple monthly subscription model
- ✅ Integrated with GitHub ecosystem
- ✅ You want something familiar (most popular)

**Best Use Cases:**
- Traditional autocomplete-style assistance
- GitHub-centric workflows
- Beginners to AI coding
- Quick code suggestions

---

## Using Multiple Extensions

### Can You Use Multiple Extensions Together?

**Yes!** Many developers use combinations:

#### **Common Combinations:**

**1. Copilot + Cline**
- **Copilot**: Inline suggestions while typing
- **Cline**: Complex tasks and refactoring
- **Benefit**: Best of both worlds

**2. Copilot + Roo-Code**
- **Copilot**: Quick completions
- **Roo-Code**: Architecture and debugging
- **Benefit**: Speed + intelligence

**3. Claude Code + Copilot**
- **Copilot**: Autocomplete
- **Claude Code**: Complex reasoning
- **Benefit**: Different strengths

### Best Practices for Multiple Extensions:

1. **Assign roles**: Use each for what it's best at
2. **Disable conflicts**: Turn off overlapping features
3. **Keyboard shortcuts**: Set distinct shortcuts for each
4. **Monitor costs**: Track API usage across extensions
5. **Start with one**: Master one before adding more

### Potential Conflicts:

- **Keyboard shortcuts** - May overlap
- **Inline suggestions** - Can conflict if multiple provide them
- **Performance** - Multiple extensions use resources

**Solutions:**
- Customize keyboard shortcuts in VS Code settings
- Disable inline features on all but one extension
- Close unused extension panels when not needed

---

## Configuration Tips

### Workspace-Specific Settings

Configure different extensions for different projects:

**File**: `.vscode/settings.json` in project root

```json
{
  "claude-code.enabled": true,
  "cline.enabled": false,
  "roo-code.enabled": false
}
```

### User-Level Settings

Global preferences across all projects:

**File**: VS Code Settings (Ctrl+,)

### Extension-Specific Settings

Each extension has unique settings:

- **Claude Code**: MCP servers, model selection
- **Cline**: API providers, approval settings
- **Roo-Code**: Mode configuration, model mapping
- **Copilot**: Suggestion behavior, languages

---

## Performance Optimization

### Reduce Extension Load:

1. **Disable** unused extensions
2. **Lazy load** - Enable only when needed
3. **Workspace specific** - Different extensions per project
4. **Monitor** resource usage in VS Code

### Check Resource Usage:

```
Help > Toggle Developer Tools > Performance
```

---

## Cost Comparison

### Monthly Cost Estimates (Moderate Use)

| Extension | Base Cost | API Costs | Total/Month |
|-----------|-----------|-----------|-------------|
| **Claude Code** | $20 (Pro) or $60 (Max) | Included | $20-60 |
| **Cline** | Free | $10-30 | $10-30 |
| **Roo-Code** | Free | $10-40 | $10-40 |
| **Copilot** | $10/mo | Included | $10 |

**Notes:**
- API costs vary by usage
- Local models reduce costs (Cline, Roo-Code)
- Team/Enterprise plans differ

---

## Troubleshooting

### Extension Not Loading

**Solutions:**
```bash
1. Reload VS Code window
   Ctrl/Cmd + Shift + P > "Reload Window"

2. Check extension is enabled
   Extensions panel > Ensure not disabled

3. Check for conflicts
   Disable other AI extensions temporarily

4. Reinstall extension
   Uninstall > Reload > Reinstall
```

### API Key Issues

**Solutions:**
1. Verify key is correct (no spaces)
2. Check billing is active
3. Regenerate key from provider
4. Test key with provider's API directly

### Performance Issues

**Solutions:**
1. Disable unused extensions
2. Reduce file scanning scope
3. Clear extension cache
4. Update VS Code to latest version
5. Restart VS Code

---

## Additional Resources

### Official Documentation

- [Claude Code in VS Code](https://docs.anthropic.com/en/docs/claude-code/ide-integrations)
- [Cline GitHub](https://github.com/cline/cline)
- [Roo-Code Docs](https://docs.roocode.com/)
- [GitHub Copilot Docs](https://docs.github.com/copilot)

### Guides

- [Claude Code Extension Guide →](/vscode-extensions/claude/)
- [Cline Guide →](/cline/)
- [Roo-Code Guide →](/roo-code/)
- [Comparison Matrix →](/comparisons/feature-matrix.md)

---

## Pro Tips

1. **Try multiple extensions** - Most have free trials
2. **Start with Copilot** if you're new to AI coding
3. **Use Cline/Roo-Code** for complex tasks
4. **Configure shortcuts** to avoid conflicts
5. **Monitor costs** - Set budget alerts
6. **Use local models** for experimentation (Cline/Roo-Code)
7. **Combine strengths** - Different tools for different tasks
8. **Keep updated** - Extensions improve rapidly
9. **Join communities** - Discord, GitHub discussions
10. **Share workflows** - Learn from other developers

---

**Next Steps:**
- [Configure Claude Code Extension →](/vscode-extensions/claude/)
- [View Feature Comparison →](/comparisons/feature-matrix.md)
- [Explore MCP Servers →](/shared/mcp-servers/)

---

*Last updated: 2025-11-12*
