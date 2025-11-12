# AI Coding Tools - Complete Comparison Matrix

<div align="center">

*Comprehensive side-by-side comparison of all major AI coding agents and tools*

Last updated: 2025-11-12

</div>

---

## Quick Navigation

- [CLI Tools](#cli-tools-comparison)
- [VS Code Extensions](#vs-code-extensions-comparison)
- [Desktop Apps](#desktop-apps-comparison)
- [Feature Deep Dive](#feature-deep-dive)
- [Cost Comparison](#cost-comparison)
- [Decision Guide](#decision-guide)

---

## CLI Tools Comparison

| Feature | Claude Code | OpenAI Codex | Gemini CLI | OpenCode |
|---------|-------------|--------------|------------|----------|
| **Platform** | Windows/Mac/Linux | Windows/Mac/Linux | Windows/Mac/Linux | Windows/Mac/Linux |
| **Open Source** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Primary Model** | Claude 3.5 Sonnet | GPT-5-Codex | Gemini 2.5 Pro | Multi-provider |
| **Context Window** | 200K tokens | 128K tokens | 1M tokens 🏆 | Varies by model |
| **TUI** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **MCP Support** | ✅ Full | ✅ Yes | ✅ Experimental | ✅ Yes |
| **Session Management** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Built-in Search** | ⚠️ Via MCP | ⚠️ Via MCP | ✅ Google Search 🏆 | ⚠️ Via MCP |
| **Multi-Provider** | ❌ Claude only | ❌ OpenAI only | ❌ Google only | ✅ Yes 🏆 |
| **Local Models** | ❌ No | ❌ No | ❌ No | ⚠️ Limited |
| **LSP Integration** | ⚠️ Limited | ⚠️ Limited | ❌ No | ✅ Yes 🏆 |
| **Vim Editor** | ❌ No | ❌ No | ❌ No | ✅ Yes 🏆 |
| **Agents System** | ✅ Sub-agents | ❌ No | ❌ No | ✅ Yes |
| **Free Tier** | ❌ No | ❌ No | ✅ Yes 🏆 | ✅ Via providers |
| **Cost** | $20-60/mo | API usage | Free (1K/day) | API usage |
| **Best For** | Claude fans | OpenAI users | Free tier users | Multi-provider flexibility |

---

## VS Code Extensions Comparison

| Feature | Claude Code Ext | Cline | Roo-Code | GitHub Copilot | Void Editor |
|---------|----------------|-------|----------|----------------|-------------|
| **Type** | Agent | Agent | Multi-Agent | Autocomplete + Chat | Editor (Fork) |
| **Autonomy Level** | High | High | High | Low | Medium |
| **Multi-file Editing** | ✅ Yes | ✅ Yes | ✅ Yes | ⚠️ Limited | ✅ Yes |
| **Terminal Access** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ⚠️ Basic |
| **Browser Integration** | ⚠️ Via MCP | ✅ Yes 🏆 | ❌ No | ❌ No | ❌ No |
| **MCP Support** | ✅ Yes 🏆 | ❌ No | ❌ No | ❌ No | ❌ No |
| **Local Models** | ❌ No | ✅ Yes 🏆 | ✅ Yes 🏆 | ❌ No | ✅ Yes 🏆 |
| **Multi-Provider** | ❌ Claude only | ✅ Yes | ✅ Yes | ❌ GitHub only | ✅ Yes |
| **Multi-Mode System** | ❌ No | ❌ No | ✅ Yes (5 modes) 🏆 | ❌ No | ❌ No |
| **Inline Suggestions** | ❌ No | ❌ No | ❌ No | ✅ Yes 🏆 | ✅ Yes 🏆 |
| **Permission System** | ✅ Yes | ✅ Yes | ✅ Yes | N/A | ⚠️ Basic |
| **Open Source** | ❌ No | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes 🏆 |
| **Task Tracking** | ✅ Yes | ⚠️ Basic | ✅ Yes 🏆 | ❌ No | ❌ No |
| **Checkpoints** | ✅ Yes | ⚠️ Basic | ✅ Yes | ❌ No | ❌ No |
| **Cost** | $20-60/mo | API usage | API usage | $10/mo | Free + API |
| **Best For** | Claude Pro users | Full autonomy | Cost optimization | Autocomplete | Open-source fans |

---

## Desktop Apps Comparison

| Feature | Claude Desktop | Factory AI | Cursor | VS Code |
|---------|----------------|------------|--------|---------|
| **Type** | Chat + MCP | Agent Platform | AI Editor | Standard Editor |
| **MCP Support** | ✅ Full 🏆 | ❌ No | ❌ No | ⚠️ Via extensions |
| **Desktop Extensions** | ✅ One-click install 🏆 | ❌ No | ❌ No | ⚠️ Manual install |
| **AI Built-in** | ✅ Claude | ✅ Droids | ✅ Multi-model | ⚠️ Via extensions |
| **Autonomous Agents** | ⚠️ Via MCP | ✅ Droids 🏆 | ⚠️ Limited | ⚠️ Via extensions |
| **Web Interface** | ❌ No | ✅ Yes 🏆 | ❌ No | ❌ No |
| **CLI Interface** | ❌ No | ✅ Yes | ❌ No | ⚠️ Integrated terminal |
| **Team Collaboration** | ⚠️ Limited | ✅ Yes 🏆 | ⚠️ Limited | ✅ Yes |
| **Local File Access** | ✅ Yes | ✅ Via Bridge | ✅ Yes | ✅ Yes |
| **GitHub Integration** | ✅ Via MCP | ✅ Native 🏆 | ✅ Yes | ✅ Yes |
| **Open Source** | ❌ No | ❌ No | ❌ No | ✅ Yes 🏆 |
| **Platform** | Windows/macOS | Web/Windows/Mac/Linux 🏆 | Windows/macOS/Linux | All platforms 🏆 |
| **Cost** | Pro/Max required | Subscription | $20/mo | Free |
| **Best For** | MCP workflows | Teams | Polished AI editor | Extensibility |

---

## Feature Deep Dive

### Context Window Sizes

| Tool | Context Window | Rank |
|------|----------------|------|
| **Gemini CLI** | 1,000,000 tokens | 🥇 1st |
| **Claude Code** | 200,000 tokens | 🥈 2nd |
| **OpenAI Codex** | 128,000 tokens | 🥉 3rd |
| **OpenCode** | Varies (up to 200K) | 4th |
| **Cline/Roo-Code** | Varies by provider | 4th |

### MCP Ecosystem Support

| Tool | Local MCP | Remote MCP | Desktop Extensions | Rating |
|------|-----------|------------|-------------------|--------|
| **Claude Desktop** | ✅ Full | ✅ SSE | ✅ Yes | ⭐⭐⭐⭐⭐ |
| **Claude Code CLI** | ✅ Full | ✅ Yes | ❌ N/A | ⭐⭐⭐⭐⭐ |
| **Claude Code Web** | ❌ No | ✅ Pro+ only | ❌ N/A | ⭐⭐⭐ |
| **OpenAI Codex** | ✅ Yes | ⚠️ Limited | ❌ No | ⭐⭐⭐⭐ |
| **Gemini CLI** | ✅ Experimental | ❌ No | ❌ No | ⭐⭐⭐ |
| **OpenCode** | ✅ Yes | ⚠️ Limited | ❌ No | ⭐⭐⭐⭐ |
| **Cline** | ❌ No | ❌ No | ❌ N/A | ⭐ |
| **Roo-Code** | ❌ No | ❌ No | ❌ N/A | ⭐ |

### Multi-Provider Support

| Tool | Providers | Switch Models | Local Models |
|------|-----------|---------------|--------------|
| **OpenCode** | 7+ providers | ✅ Yes | ⚠️ Limited |
| **Cline** | 8+ providers | ✅ Yes | ✅ Yes |
| **Roo-Code** | 8+ providers | ✅ Per mode | ✅ Yes |
| **Void** | 5+ providers | ✅ Yes | ✅ Ollama |
| **Claude Code** | Claude only | ⚠️ Model versions | ❌ No |
| **Codex** | OpenAI only | ⚠️ GPT-4/GPT-5 | ❌ No |
| **Gemini CLI** | Google only | ⚠️ Gemini versions | ❌ No |

### Autonomy & Task Execution

| Tool | Autonomy | File Operations | Terminal | Browser |
|------|----------|-----------------|----------|---------|
| **Cline** | ⭐⭐⭐⭐⭐ | ✅ Full | ✅ Full | ✅ Yes |
| **Claude Code** | ⭐⭐⭐⭐⭐ | ✅ Full | ✅ Full | ⚠️ Via MCP |
| **Roo-Code** | ⭐⭐⭐⭐⭐ | ✅ Full | ✅ Full | ❌ No |
| **Factory AI** | ⭐⭐⭐⭐⭐ | ✅ Full | ✅ Full | ⚠️ Limited |
| **OpenCode** | ⭐⭐⭐⭐ | ✅ Yes | ✅ Yes | ⚠️ Via MCP |
| **Codex** | ⭐⭐⭐⭐ | ✅ Yes | ✅ Yes | ⚠️ Via MCP |
| **Gemini CLI** | ⭐⭐⭐⭐ | ✅ Built-in | ✅ Built-in | ✅ Built-in |
| **Copilot** | ⭐⭐ | ⚠️ Limited | ❌ No | ❌ No |

---

## Cost Comparison

### Subscription-Based

| Tool | Free Tier | Basic | Pro | Team/Enterprise |
|------|-----------|-------|-----|-----------------|
| **Claude Desktop** | ❌ | ❌ | $20/mo | $60/mo |
| **GitHub Copilot** | ❌ | $10/mo | ❌ | $19/user/mo |
| **Cursor** | Limited | $20/mo | ❌ | Custom |
| **Factory AI** | Trial | TBD | TBD | Custom |

### Pay-Per-Use (API)

| Tool | Model | Input (per 1M tokens) | Output (per 1M tokens) |
|------|-------|-----------------------|------------------------|
| **Claude Code** (API) | Claude 3.5 Sonnet | $3 | $15 |
| **OpenAI Codex** | GPT-4 Turbo | $10 | $30 |
| **OpenAI Codex** | GPT-3.5 Turbo | $0.50 | $1.50 |
| **Gemini CLI** (Free) | Gemini 2.5 Pro | Free (1K/day) | Free (1K/day) |
| **Gemini CLI** (API) | Gemini 2.5 Pro | $1.25 | $5 |

### Free Options

| Tool | Truly Free? | Limitations |
|------|-------------|-------------|
| **Gemini CLI** | ✅ Yes | 1,000 requests/day |
| **OpenCode** | ✅ Yes | Requires API keys |
| **Cline** | ✅ Yes | Requires API keys |
| **Roo-Code** | ✅ Yes | Requires API keys |
| **Void** | ✅ Yes | Requires API keys or local models |

### Cost-Effective Setups

**Most Budget-Friendly:**
1. **Gemini CLI** - Free tier (1K req/day)
2. **Cline + Ollama** - 100% free with local models
3. **Roo-Code + GPT-3.5** - $0.50-1.50 per 1M tokens for Ask mode

**Best Value for Heavy Users:**
1. **Claude Pro** ($20/mo) - Unlimited Claude 3.5 Sonnet
2. **GitHub Copilot** ($10/mo) - Unlimited autocomplete
3. **OpenRouter** - Access to 100+ models, pay-per-use

---

## Decision Guide

### Choose **Claude Code CLI** if:
- ✅ You need best-in-class coding performance
- ✅ You want MCP integration
- ✅ You have Claude Pro/Max subscription
- ✅ You prefer terminal-based workflow
- ✅ You need enterprise support

### Choose **OpenAI Codex** if:
- ✅ You're invested in OpenAI ecosystem
- ✅ You want GPT-5-Codex performance
- ✅ You need ChatGPT integration
- ✅ You prefer OpenAI's multimodal features
- ✅ You have existing OpenAI API credits

### Choose **Gemini CLI** if:
- ✅ You want 1M token context window
- ✅ You need free tier (1K requests/day)
- ✅ You want built-in Google Search
- ✅ You're budget-conscious
- ✅ You want open-source

### Choose **OpenCode** if:
- ✅ You want multi-provider flexibility
- ✅ You need LSP integration
- ✅ You prefer vim-style editing
- ✅ You want beautiful TUI
- ✅ You value open-source

### Choose **Cline** (VS Code) if:
- ✅ You want maximum autonomy
- ✅ You need browser integration
- ✅ You want local model support
- ✅ You prefer VS Code environment
- ✅ You want open-source

### Choose **Roo-Code** (VS Code) if:
- ✅ You want to optimize costs with different models per mode
- ✅ You need specialized agents (Architect, Debug)
- ✅ You prefer multi-mode system
- ✅ You want task tracking built-in
- ✅ You use multiple AI providers

### Choose **GitHub Copilot** if:
- ✅ You want traditional autocomplete
- ✅ You prefer simple subscription ($10/mo)
- ✅ You're new to AI coding
- ✅ You value familiarity (most popular)
- ✅ You use GitHub heavily

### Choose **Claude Desktop** if:
- ✅ You want desktop app experience
- ✅ You need MCP with Desktop Extensions (easiest setup)
- ✅ You prefer chat-based interaction
- ✅ You have Claude Pro/Max
- ✅ You don't need terminal

### Choose **Factory AI** if:
- ✅ You need team collaboration
- ✅ You want web + IDE + CLI access
- ✅ You prefer autonomous Droids
- ✅ You work on full-stack projects
- ✅ You need GitHub integration

### Choose **Void** if:
- ✅ You want free Cursor alternative
- ✅ You prefer local models (Ollama)
- ✅ You value open-source
- ✅ You want to migrate from VS Code easily
- ✅ You need built-in AI without extensions

---

## Combination Strategies

### Popular Combinations

#### **1. Copilot + Cline**
- **Copilot**: Quick autocomplete while typing
- **Cline**: Complex refactoring and autonomous tasks
- **Total Cost**: $10/mo + API usage
- **Best For**: Daily coding with occasional complex tasks

#### **2. Claude Desktop + Claude Code CLI**
- **Desktop**: Research, planning, MCP experimentation
- **CLI**: Actual coding work
- **Total Cost**: $20-60/mo (shared subscription)
- **Best For**: Claude power users

#### **3. Gemini CLI + Roo-Code**
- **Gemini**: Free tier for simple tasks
- **Roo-Code**: Complex tasks with Claude/GPT
- **Total Cost**: Free + API usage
- **Best For**: Budget-conscious developers

#### **4. Void + Local Models**
- **Void**: Editor with built-in AI
- **Ollama**: Free local models (DeepSeek Coder)
- **Total Cost**: 100% FREE
- **Best For**: Privacy-focused or offline work

---

## Summary Table

| Category | Best Choice | Runner-Up | Budget Option |
|----------|-------------|-----------|---------------|
| **CLI** | Claude Code | OpenAI Codex | Gemini CLI (free) |
| **VS Code** | Claude Code Ext | Cline | Roo-Code |
| **Autocomplete** | GitHub Copilot | Void | Roo-Code + local |
| **Autonomy** | Cline | Claude Code | Roo-Code |
| **MCP Support** | Claude Desktop | Claude Code | OpenCode |
| **Free Option** | Gemini CLI | Void + Ollama | Cline + Ollama |
| **Team Use** | Factory AI | Claude Team | GitHub Copilot Team |
| **Open Source** | OpenCode / Void | Cline | Roo-Code |
| **Best Value** | Gemini CLI (free) | Claude Pro ($20) | Copilot ($10) |

---

## Additional Resources

### Tool-Specific Guides
- [Claude Code →](/claude-code/)
- [Claude Desktop →](/claude-desktop/)
- [OpenAI Codex →](/chatgpt-codex/)
- [Gemini CLI →](/gemini-cli/)
- [OpenCode →](/opencode/)
- [Cline →](/cline/)
- [Roo-Code →](/roo-code/)
- [VS Code Extensions →](/vscode-extensions/)
- [Factory AI & Void →](/devoid-factory-ai/)

### Configuration Resources
- [MCP Servers Guide →](/shared/mcp-servers/)
- [Migration Guides →](/comparisons/migration-guides/)

---

*This comparison is maintained by the community. Contributions welcome!*

*Last updated: 2025-11-12*
