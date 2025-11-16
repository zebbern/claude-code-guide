# Claude Code - MCP Setup Guide

Complete guide to setting up Model Context Protocol servers with Claude Code.

---

## 🚀 Quick Start: Project-Type-Based Setup

**New to MCP?** Choose your project type for optimized server configurations:

> **[📚 MCP Project Workflows Guide →](/shared/mcp-project-workflows/)**
>
> Get pre-configured MCP setups for:
> - **Greenfield** (new projects) - Spec Kit + Zen
> - **Brownfield** (existing codebases) - OpenSpec + Shrimp + Zen
> - **Legacy Modernization** - Spec Kit + Task Master + Shrimp + Zen + BMAD
> - **Bug Fixes** - Zen + Shrimp
> - **13 total project types** with cost estimates and setup times
>
> **[📋 Copy-Paste Templates →](/shared/mcp-project-workflows/templates.md)**

---

## What is MCP?

Model Context Protocol enables Claude Code to interact with external tools, data sources, and services through a standardized interface.

**Benefits:**
- Access local files and databases
- Integrate with GitHub, Slack, etc.
- Extend Claude's capabilities
- Reusable across MCP-compatible tools

**New Recommended Workflow:**
Instead of configuring servers one-by-one, choose a project-type-based configuration from the [MCP Project Workflows Guide](/shared/mcp-project-workflows/) that matches your development needs.

---

## Prerequisites

- **Node.js 18+**: Required for most MCP servers
- **Claude Code**: Installed and configured
- **API Keys**: For external services (GitHub, Brave Search, etc.)

### Install Node.js

```bash
# Check version
node --version  # Should be 18+

# macOS
brew install node

# Linux
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Windows
# Download from nodejs.org
```

---

## Configuration File

### Location

| Platform | Path |
|----------|------|
| **Windows** | `%APPDATA%\Claude\mcp_config.json` |
| **macOS** | `~/Library/Application Support/Claude/mcp_config.json` |
| **Linux** | `~/.config/claude/mcp_config.json` |

### Create Configuration

```bash
# Create file (macOS/Linux)
mkdir -p ~/.config/claude
touch ~/.config/claude/mcp_config.json

# Edit
code ~/.config/claude/mcp_config.json
```

---

## Basic MCP Server Setup

### Example Configuration

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Projects"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    }
  }
}
```

### Enable MCP in Claude Code

```bash
# Enable MCP
claude config set mcp.enabled true

# Set MCP config path (if non-standard)
claude config set mcp.configPath "~/custom/mcp_config.json"

# Restart Claude Code
```

---

## Popular MCP Servers

### 1. Filesystem Server

**Purpose**: Read/write local files

```json
{
  "filesystem": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      "/Users/username/Projects",
      "/Users/username/Documents"
    ]
  }
}
```

**Usage:**
```
> Read the contents of src/main.py
> Create a new file called README.md with project documentation
> Update package.json to add a new dependency
```

---

### 2. GitHub Server

**Purpose**: GitHub integration

**Get Token:** [github.com/settings/tokens](https://github.com/settings/tokens)

```json
{
  "github": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-github"],
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
    }
  }
}
```

**Usage:**
```
> Create an issue in my repo about the bug we just discussed
> Search for recent PRs in anthropics/claude-code
> Create a new branch called feature/add-logging
```

---

### 3. Brave Search Server

**Purpose**: Web search

**Get API Key:** [brave.com/search/api](https://brave.com/search/api)

```json
{
  "brave-search": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-brave-search"],
    "env": {
      "BRAVE_API_KEY": "BSA..."
    }
  }
}
```

**Usage:**
```
> Search for the latest TypeScript best practices
> Find recent security vulnerabilities in Express.js
> Look up the current weather in San Francisco
```

---

### 4. Sequential Thinking Server

**Purpose**: Enhanced reasoning

**No API Key Required!**

```json
{
  "sequential-thinking": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
  }
}
```

**Usage:**
Automatically improves problem-solving and step-by-step reasoning.

---

### 5. Memory Server

**Purpose**: Persistent memory across sessions

```json
{
  "memory": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-memory"],
    "env": {
      "MEMORY_FILE_PATH": "~/.claude/memory.json"
    }
  }
}
```

**Usage:**
```
> Remember that I prefer TypeScript over JavaScript
> What do you remember about my coding style?
> Forget the database credentials I shared earlier
```

---

### 6. Puppeteer Server

**Purpose**: Browser automation

```json
{
  "puppeteer": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-puppeteer",
      "--browser",
      "chrome"
    ]
  }
}
```

**Usage:**
```
> Take a screenshot of https://example.com
> Extract all the links from this page
> Fill out the form at this URL with test data
```

---

### 7. Postgres Server

**Purpose**: Database queries

```json
{
  "postgres": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-postgres",
      "postgresql://localhost:5432/mydb"
    ]
  }
}
```

**Usage:**
```
> Show me all users in the database
> Create a new table for storing blog posts
> Generate a report of sales from last month
```

---

### 8. Slack Server

**Purpose**: Slack integration

**Setup:**
1. Create Slack app: [api.slack.com/apps](https://api.slack.com/apps)
2. Add bot scopes: `chat:write`, `channels:read`, `channels:history`
3. Install to workspace
4. Copy bot token and team ID

```json
{
  "slack": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-slack"],
    "env": {
      "SLACK_BOT_TOKEN": "xoxb-...",
      "SLACK_TEAM_ID": "T..."
    }
  }
}
```

**Usage:**
```
> Send a message to #engineering channel
> Get the latest messages from #general
> Upload this file to Slack
```

---

## Complete Configuration Example

### Production Setup

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Projects"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      }
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {
        "MEMORY_FILE_PATH": "~/.claude/memory.json"
      }
    },
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://localhost:5432/production"
      ]
    }
  }
}
```

---

## Using Environment Variables

### Secure API Key Management

**1. Create `.env` file:**

```bash
# .env (add to .gitignore!)
export GITHUB_TOKEN="ghp_your_token"
export BRAVE_API_KEY="BSA_your_key"
export SLACK_BOT_TOKEN="xoxb_your_token"
```

**2. Load environment variables:**

```bash
# Load before starting Claude Code
source .env
claude
```

**3. Reference in MCP config:**

```json
{
  "github": {
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
    }
  }
}
```

---

## Verifying MCP Setup

### Test Configuration

```bash
# Start Claude Code
claude

# In Claude Code, ask:
> List available MCP tools
> What MCP servers are configured?
```

### Check Logs

```bash
# View MCP connection logs
claude logs --mcp

# Debug mode
CLAUDE_LOG_LEVEL=debug claude
```

---

## Troubleshooting

### Server Not Loading

**Check Node.js:**
```bash
node --version  # Should be 18+
```

**Test server manually:**
```bash
npx -y @modelcontextprotocol/server-filesystem /tmp
```

**Check JSON syntax:**
```bash
cat ~/.config/claude/mcp_config.json | jq
```

### Permission Errors

**Filesystem access:**
```bash
# Ensure directories exist
ls /Users/username/Projects

# Check permissions
ls -la /Users/username/Projects
```

**API key errors:**
```bash
# Verify token is set
echo $GITHUB_TOKEN

# Test API key independently
curl -H "Authorization: token ${GITHUB_TOKEN}" https://api.github.com/user
```

### Server Command Fails

**Install dependencies:**
```bash
# Install server package globally
npm install -g @modelcontextprotocol/server-github

# Then use direct path in config
{
  "github": {
    "command": "mcp-server-github"
  }
}
```

---

## Security Best Practices

### 1. Limit Filesystem Access

```json
{
  "filesystem": {
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      "/Users/username/Projects/safe-project"  // Not entire home directory!
    ]
  }
}
```

### 2. Use Environment Variables

❌ **Bad:**
```json
{
  "env": {
    "API_KEY": "hardcoded_key_here"
  }
}
```

✅ **Good:**
```json
{
  "env": {
    "API_KEY": "${API_KEY}"
  }
}
```

### 3. Never Commit Secrets

```bash
# Add to .gitignore
echo "mcp_config.json" >> .gitignore
echo ".env" >> .gitignore
```

### 4. Use Read-Only Tokens

When possible, create API tokens with minimum required permissions.

### 5. Review MCP Actions

Always review what Claude wants to do with MCP tools before approving.

---

## Advanced Configuration

### Custom MCP Server

**Create custom server:**
```javascript
// my-custom-server.js
const { Server } = require('@modelcontextprotocol/sdk/server');
// ... implement custom server
```

**Configure:**
```json
{
  "custom-server": {
    "command": "node",
    "args": ["/path/to/my-custom-server.js"]
  }
}
```

### Docker-Based MCP Servers

```json
{
  "docker-server": {
    "command": "docker",
    "args": [
      "run",
      "--rm",
      "-i",
      "mcp/custom-server:latest"
    ]
  }
}
```

---

## MCP Server Directory

For a complete list of available MCP servers:

**[View MCP Server Directory →](/shared/mcp-servers/)**

---

## Next Steps

- **[View Tips & Tricks →](/claude-code/tips-and-tricks/)**
- **[MCP Server Directory →](/shared/mcp-servers/)**
- **[Configuration Guide →](/claude-code/configuration/)**

---

## Additional Resources

- [Official MCP Documentation](https://modelcontextprotocol.io/)
- [MCP Server Repository](https://github.com/modelcontextprotocol/servers)
- [Claude Code MCP Guide](https://docs.anthropic.com/en/docs/claude-code/mcp)

---

*Last updated: 2025-11-12*
