## <code>The website i made under includes a more comprehensive guide</code>

> Guides on how to install on Windows, Linux, MacOS ✅
> 
> Tips and Tricks ✅
> 
> MCP Overview with what to use ✅
> 
> Community Guides ✅
> 
> Troubleshooting ✅
> 
> How to use Claude code the most optimal way ✅

### https://zebbern.github.io



## Quick Start

```bash
# Install
npm install -g @anthropic-ai/claude-code

# Start
cd your-project
claude
```

## 📋 Installation & Setup

### System Requirements
- **OS**: macOS 10.15+, Ubuntu 20.04+, Windows (via WSL only)
- **Node.js**: 18+ (recommended: 20+)
- **Account**: Claude Max subscription OR Anthropic API key

### Installation Options

```bash
# Method 1: NPM (recommended)
npm install -g @anthropic-ai/claude-code

# Method 2: UV (Python users)
uv tool install @anthropic-ai/claude-code

# Method 3: Binary download from GitHub releases
```

### API Configuration

```bash
# Set API key
export ANTHROPIC_API_KEY=your_key_here

# Add to shell profile
echo 'export ANTHROPIC_API_KEY=your_key' >> ~/.bashrc
```

**Tip**: Claude Max subscription is more economical for regular users than pay-per-use API.

## 🎯 Core Usage

### Usage Modes

| Mode | Command | Use Case |
|------|---------|----------|
| **Interactive** | `claude` | Normal development |
| **One-shot** | `claude -p "question"` | Quick tasks |
| **Headless** | `claude -p "task" --output-format stream-json` | CI/Automation |
| **Planning** | `Shift+Tab Shift+Tab` | Plan without executing |

### Model Selection

```bash
claude --model claude-opus-4     # Most capable
claude --model claude-sonnet-4   # Balanced (default)
claude --model claude-haiku-3.5  # Fastest/cheapest
```

## 🔧 All Interactive Commands

| Command | Purpose | Example |
|---------|---------|---------|
| `/add-dir` | Add working directory | `/add-dir ~/projects` |
| `/bug` | Report issues | `/bug describe_problem` |
| `/clear` | Clear context (saves tokens) | `/clear` |
| `/compact` | Keep summary, clear context | `/compact [instructions]` |
| `/config` | Open config panel | `/config` |
| `/cost` | Show session cost | `/cost` |
| `/doctor` | Check installation health | `/doctor` |
| `/exit` | Exit REPL | `/exit` |
| `/help` | Show all commands | `/help` |
| `/ide` | Connect to IDE | `/ide` |
| `/init` | Generate CLAUDE.md docs | `/init` |
| `/install-github-app` | Setup GitHub Actions | `/install-github-app` |
| `/login` | Switch accounts | `/login` |
| `/logout` | Sign out | `/logout` |
| `/mcp` | Manage MCP servers | `/mcp` |
| `/memory` | Edit memory files | `/memory` |
| `/model` | Change AI model | `/model claude-opus-4` |
| `/permissions` | Manage tool permissions | `/permissions` |
| `/pr-comments` | Get PR comments | `/pr-comments 123` |
| `/release-notes` | View updates | `/release-notes` |
| `/resume` | Resume conversation | `/resume session_id` |
| `/review` | Review pull request | `/review 123` |
| `/status` | Show system status | `/status` |
| `/terminal-setup` | **Hidden**: Optimize terminal | `/terminal-setup` |
| `/upgrade` | Upgrade to Max plan | `/upgrade` |
| `/vim` | Toggle vim mode | `/vim` |

## 🔥 Hidden Power Features

### 1. Dangerous Mode (Automation)
```bash
# Skip all permission prompts
claude --dangerously-skip-permissions -p "fix all linting errors"

# Recommended: Use in Docker container
docker run --rm -v $(pwd):/workspace claude-container
```

### 2. Terminal Setup (Hidden Command)
```bash
/terminal-setup
# Enables: Shift+Enter for newlines, bell notifications, optimized settings
```

### 3. Pre-commit Hook Integration
```yaml
# .pre-commit-config.yaml
repos:
  - repo: local
    hooks:
      - id: claude-lint
        name: Claude Auto-lint
        entry: claude
        args: ["-p", "fix linting and formatting", "--dangerously-skip-permissions"]
        language: system
        files: \.(js|ts|py)$
```

### 4. Permission Management
```bash
# Allow specific tools without prompts
/permissions add Edit
/permissions add "Bash(git commit:*)"
/permissions deny "Bash(rm*)"

# Session-specific permissions
claude --allowedTools Edit,Bash
```

### 5. Planning Mode
```bash
# Press Shift+Tab twice for planning mode (no file writes)
Shift+Tab Shift+Tab
```

## 🌐 Cross-Platform Setup

### Windows (WSL Required)

```bash
# 1. Install WSL2
wsl --install Ubuntu

# 2. Access Windows projects
cd /mnt/c/Users/YourUsername/Projects
cursor .  # or code .

# 3. Install Claude Code in WSL
npm install -g @anthropic-ai/claude-code
```

### macOS
```bash
# Use Homebrew
brew install node
npm install -g @anthropic-ai/claude-code

# For M1/M2 Macs
arch -arm64 npm install -g @anthropic-ai/claude-code
```

### Linux (Ubuntu/Debian)
```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Fix PATH if needed
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
```

## 🔌 IDE Integration

### VS Code
```bash
# Install extension
code --install-extension anthropic.claude-code

# Connect
/ide
```

### Cursor
```bash
cursor .  # Launch in project
# In integrated terminal: claude
```

### Universal Access
- **Shortcuts**: `Cmd+Esc` (Mac) / `Ctrl+Esc` (Windows/Linux)
- **Context sharing**: Open files, selections, linter errors
- **Visual diffs**: Apply changes directly in IDE

## 🛠️ MCP (Model Context Protocol) Setup

### Essential MCP Servers

```bash
# Quick install script
claude mcp add sequential-thinking -s user -- npx -y @modelcontextprotocol/server-sequential-thinking
claude mcp add filesystem -s user -- npx -y @modelcontextprotocol/server-filesystem ~/Projects
claude mcp add puppeteer -s user -- npx -y @modelcontextprotocol/server-puppeteer
claude mcp add fetch -s user -- npx -y @kazuph/mcp-fetch
```

### API-Based Servers
```bash
# GitHub (requires token)
claude mcp add github -s user -- env GITHUB_TOKEN=token npx -y @modelcontextprotocol/server-github

# Brave Search (requires API key)
claude mcp add brave-search -s user -- env BRAVE_API_KEY=key npx -y @modelcontextprotocol/server-brave-search
```

### Manual Configuration (Better Method)

Create `.claude.json`:
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "~/Projects"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {"GITHUB_TOKEN": "your_token"}
    }
  }
}
```

### MCP Scopes

| Scope | Location | Usage |
|-------|----------|-------|
| `local` | `./.claude.json` | Current directory only |
| `project` | `./.claude/settings.json` | Shareable with team |
| `user` | `~/.claude.json` | All your projects |

### Popular MCP Servers

| Server | Purpose | Package |
|--------|---------|---------|
| Sequential Thinking | Multi-step reasoning | `@modelcontextprotocol/server-sequential-thinking` |
| Filesystem | File operations | `@modelcontextprotocol/server-filesystem` |
| Puppeteer | Browser automation | `@modelcontextprotocol/server-puppeteer` |
| GitHub | Git operations | `@modelcontextprotocol/server-github` |
| Sentry | Error monitoring | `@sentry/mcp-server` |
| Linear | Project management | `@linear/mcp-server` |
| DigitalOcean | Cloud deployment | `@digitalocean/mcp` |

## 📝 Custom Commands & Templates

### Slash Commands

Create `.claude/commands/fix-issue.md`:
```markdown
Fix GitHub issue: $ARGUMENTS

Steps:
1. `gh issue view $ARGUMENTS`
2. Search codebase for relevant files
3. Implement fix
4. Write tests
5. Create PR
```

Usage: `/project:fix-issue 123`

### Personal Commands
Add to `~/.claude/commands/` for global availability.

## 💡 Pro Tips & Tricks

### 🎯 Workflow Hacks

```bash
# Error interruption
Esc  # Stop Claude immediately
> "Revert last changes and try different approach"

# Context management
/clear    # Between major tasks (saves tokens)
/compact  # Keep summary, reduce context

# UV package manager fix (Claude struggles with uv)
> "Use uv add, not pip install. Always use uv commands."
```

### 🚀 Rapid Development Pattern

1. Describe project in natural language
2. Let Claude create plan (8-12 steps typical)
3. Use `/clear` between major sections
4. Press `↑` + "continue" for next steps
5. 30-45 minutes for most projects regardless of complexity

### 📚 Documentation Before Code
```bash
# Best practice for new frameworks
> "Read the Next.js 14 docs at https://nextjs.org/docs then create project with latest best practices"
```

### 🎨 CLAUDE.md Personalization
```markdown
# Custom CLAUDE.md
## Team
- Lead: [Your Name/Nickname] 
- Package Manager: uv (NOT pip!)
- Test Runner: pytest

## Project Notes
- Ask [Your Name] for deployment access
- Always use feature branches
```

## 🔧 Advanced Configuration

### User Config (`~/.claude.json`)
```json
{
  "defaultModel": "claude-sonnet-4",
  "permissions": {
    "allowedTools": ["Edit", "Bash(git*)"],
    "deniedTools": ["Bash(rm*)"]
  },
  "preferences": {
    "autoCompact": true,
    "compactThreshold": 50000
  }
}
```

### Environment Variables
```bash
export ANTHROPIC_API_KEY=your_key
export CLAUDE_MODEL=claude-sonnet-4
export MCP_DEBUG=true
export CLAUDE_DEBUG=true
```

## 🏢 Enterprise Features

### Amazon Bedrock
```bash
export AWS_PROFILE=your-profile
claude --provider bedrock --model anthropic.claude-3-5-sonnet
```

### Google Vertex AI
```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
claude --provider vertex --model claude-3-5-sonnet
```

## 🐛 Common Issues & Fixes

### Installation Problems
```bash
# Command not found
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Permission denied (don't use sudo!)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```

### WSL Issues
```bash
# Wrong npm (using Windows instead of WSL)
which npm  # Should show /usr/bin/npm

# Performance issues
# Edit %USERPROFILE%\.wslconfig
[wsl2]
memory=8GB
processors=4
```

### MCP Debugging
```bash
claude --mcp-debug  # Debug MCP issues
/mcp               # Check server status
claude mcp list    # List configured servers
```

### Rate Limiting
```bash
/cost      # Check usage
/clear     # Clear context to save tokens
/upgrade   # Get Claude Max for higher limits
```

## 🎥 Quick Commands Reference

```bash
# Project setup
claude /init                           # Generate docs
claude /ide                            # Connect to IDE

# Development
claude -p "fix all TypeScript errors"  # Quick fixes
claude -p "add tests for auth module"  # Add functionality
claude -p "optimize this component"    # Improvements

# Git workflows
claude -p "review this PR and suggest improvements"
claude -p "create commit message for current changes"
claude -p "resolve merge conflicts"

# Automation
claude --dangerously-skip-permissions -p "lint and format all files"
```

## 📚 Resources

- **Docs**: https://docs.anthropic.com/claude-code
- **GitHub**: https://github.com/anthropics/claude-code  
- **NPM**: https://www.npmjs.com/package/@anthropic-ai/claude-code
- **Best Practices**: https://www.anthropic.com/engineering/claude-code-best-practices

### Community Guides
- [Harper Reed's Workflow](https://harper.blog/2025/05/08/basic-claude-code/)
- [Philipp Spiess's Tips](https://spiess.dev/blog/how-i-use-claude-code)
- [MCP Setup Guide](https://scottspence.com/posts/configuring-mcp-tools-in-claude-code)

---

## 🎯 The Claude Code Mindset

1. **Think conversations, not commands** - Use natural language
2. **Iterate rapidly** - First attempt won't be perfect
3. **Context is king** - Be specific, clear frequently  
4. **Monitor & interrupt** - Use `Esc` when things go wrong
5. **Document everything** - Future you will thank you

**Need help?** Use `/bug` in Claude Code or join community discussions. Happy coding! 🚀
