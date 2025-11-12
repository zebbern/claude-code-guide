# MCP Servers - Complete Guide

<div align="center">

![MCP](https://img.shields.io/badge/Model%20Context-Protocol-brightgreen)

*Comprehensive guide to Model Context Protocol servers for AI coding agents*

[MCP Documentation](https://modelcontextprotocol.io/) · [Server Directory](https://github.com/modelcontextprotocol/servers)

</div>

---

## Table of Contents

- [What is MCP?](#what-is-mcp)
- [Compatible Tools](#compatible-tools)
- [Web-Compatible Servers](#web-compatible-servers)
- [Local-Only Servers](#local-only-servers)
- [Popular MCP Servers](#popular-mcp-servers)
- [Configuration Examples](#configuration-examples)
- [Troubleshooting](#troubleshooting)

---

## What is MCP?

**Model Context Protocol (MCP)** is an open protocol that enables seamless integration between LLM applications and external data sources and tools.

### Why MCP?

- ✅ **Standardized** - One protocol for all integrations
- ✅ **Extensible** - Add custom capabilities easily
- ✅ **Reusable** - Same server works across tools
- ✅ **Open Source** - Community-driven development
- ✅ **Secure** - Permission-based access control

### How MCP Works

```
AI Tool (Claude, OpenCode, etc.)
        ↓
MCP Client (built into tool)
        ↓
MCP Protocol
        ↓
MCP Server (filesystem, github, etc.)
        ↓
External Resource (files, APIs, databases)
```

---

## Compatible Tools

### ✅ Full MCP Support

| Tool | Local Servers | Remote Servers | Notes |
|------|---------------|----------------|-------|
| **Claude Desktop** | ✅ Yes | ✅ Yes (SSE) | Best support |
| **Claude Code CLI** | ✅ Yes | ✅ Yes | Full integration |
| **Claude Code Web** | ❌ No | ✅ Yes (Pro/Max/Team) | Remote only |
| **OpenAI Codex** | ✅ Yes | ✅ Yes | Via config |
| **Gemini CLI** | ✅ Yes | ⚠️ Limited | Experimental |
| **OpenCode** | ✅ Yes | ⚠️ Limited | Via config |

### ⚠️ No Native MCP Support

- Cline (uses own tool system)
- Roo-Code (uses own tool system)
- GitHub Copilot (closed ecosystem)
- Most VS Code extensions (except Claude Code)

---

## Web-Compatible Servers

These servers work in **web-based** environments (Claude.ai, Claude Code web, etc.):

### API-Based Servers (No Local Dependencies)

| Server | Purpose | API Key Required |
|--------|---------|------------------|
| **better-thinking** | Enhanced reasoning | ❌ No |
| **sequential-thinking** | Step-by-step reasoning | ❌ No |
| **brave-search** | Web search | ✅ Yes |
| **exa** | AI-powered search | ✅ Yes |
| **github** | GitHub integration | ✅ Yes (PAT) |
| **ref-tools** | Reference docs | ✅ Yes |
| **supabase** | Supabase integration | ✅ Yes |
| **linear** | Linear project management | ✅ Yes (via SSE) |
| **zapier** | Zapier automation | ✅ Yes (via SSE) |
| **context7** | Context management | ✅ Yes (Upstash) |

### Configuration for Web Tools

```json
{
  "mcpServers": {
    "better-thinking": {
      "command": "npx",
      "args": ["-y", "--force", "better-thinking-mcp@latest"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your_api_key_here"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
```

---

## Local-Only Servers

These require local resources and work only with **desktop/CLI tools**:

### Filesystem & File Operations

| Server | Purpose | Configuration |
|--------|---------|---------------|
| **filesystem** | Read/write local files | Directory paths |
| **anthropic-filesystem** | Enhanced filesystem (Docker) | Volume mounts |

**Example:**
```json
{
  "filesystem": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      "/Users/username/Documents",
      "/Users/username/Projects"
    ]
  }
}
```

### Databases

| Server | Purpose | Configuration |
|--------|---------|---------------|
| **postgres** | PostgreSQL queries | Connection string |
| **sqlite** | SQLite queries | Database file path |

**Example:**
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

### Browser Automation

| Server | Purpose | Configuration |
|--------|---------|---------------|
| **puppeteer** | Browser automation | Output directory |
| **playwright** | Browser automation | Output + browser settings |

**Example:**
```json
{
  "puppeteer": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
  }
}
```

### Development Tools

| Server | Purpose | Configuration |
|--------|---------|---------------|
| **docker** | Docker operations | No config needed |
| **kubernetes** | K8s management | Kubeconfig path |
| **git** | Git operations | Repository path |

---

## Popular MCP Servers

### 1. **Filesystem Server**

**Purpose**: Read, write, and organize local files

**Installation:**
```json
{
  "filesystem": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      "/path/to/allowed/directory"
    ]
  }
}
```

**Capabilities:**
- Read file contents
- Write new files
- Update existing files
- List directories
- Search files

**Security**: Limited to specified directories only

---

### 2. **GitHub Server**

**Purpose**: Interact with GitHub repositories

**Installation:**
```json
{
  "github": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-github"],
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token"
    }
  }
}
```

**Get Token:** [github.com/settings/tokens](https://github.com/settings/tokens)

**Capabilities:**
- Create issues
- Create/update PRs
- Search repositories
- Read file contents
- Create branches
- Manage labels

---

### 3. **Brave Search**

**Purpose**: Web search grounding

**Installation:**
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

**Get API Key:** [brave.com/search/api](https://brave.com/search/api)

**Capabilities:**
- Web search
- News search
- Real-time information
- Image search (limited)

---

### 4. **Sequential Thinking**

**Purpose**: Enhanced step-by-step reasoning

**Installation:**
```json
{
  "sequential-thinking": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
  }
}
```

**No API Key Required** ✅

**Benefits:**
- Better problem-solving
- Step-by-step breakdowns
- Improved accuracy
- Transparent reasoning

---

### 5. **Memory Server**

**Purpose**: Persistent memory across sessions

**Installation:**
```json
{
  "memory": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-memory"],
    "env": {
      "MEMORY_FILE_PATH": "/path/to/memory.json"
    }
  }
}
```

**Capabilities:**
- Store information long-term
- Recall past conversations
- Remember preferences
- Context persistence

---

### 6. **Slack Server**

**Purpose**: Slack integration

**Installation:**
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

**Setup:**
1. Create Slack app at [api.slack.com/apps](https://api.slack.com/apps)
2. Add bot token scopes
3. Install to workspace
4. Copy bot token and team ID

**Capabilities:**
- Send messages
- Read channels
- Upload files
- Manage threads

---

### 7. **Puppeteer Server**

**Purpose**: Browser automation

**Installation:**
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

**Local Only** - Requires Chrome/Chromium

**Capabilities:**
- Navigate web pages
- Take screenshots
- Fill forms
- Click elements
- Extract data

---

## Configuration Examples

### Minimal Setup (No API Keys)

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
    "better-thinking": {
      "command": "npx",
      "args": ["-y", "--force", "better-thinking-mcp@latest"]
    }
  }
}
```

### Power User Setup

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
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "BSA..."
      }
    },
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://localhost/mydb"
      ]
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-...",
        "SLACK_TEAM_ID": "T..."
      }
    },
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

### Development Setup

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "./src", "./tests"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    },
    "docker": {
      "command": "npx",
      "args": ["-y", "mcp-server-docker"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/dev_db"]
    }
  }
}
```

---

## Troubleshooting

### Server Not Loading

**Symptoms**: MCP server doesn't appear in tool

**Solutions:**
1. ✅ Check JSON syntax is valid
2. ✅ Verify `npx` is installed (`node --version`)
3. ✅ Test server manually: `npx -y @modelcontextprotocol/server-filesystem /tmp`
4. ✅ Restart the tool completely
5. ✅ Check tool's developer logs

### API Key Errors

**Symptoms**: "Invalid API key" or authentication errors

**Solutions:**
1. ✅ Remove extra spaces from API key
2. ✅ Regenerate API key from provider
3. ✅ Check key hasn't expired
4. ✅ Verify billing is active (if applicable)
5. ✅ Test key independently via provider's API

### Permission Denied

**Symptoms**: "Permission denied" when accessing files/directories

**Solutions:**
1. ✅ Check directory paths exist
2. ✅ Verify user has read/write permissions
3. ✅ Use absolute paths (not relative)
4. ✅ Check filesystem restrictions (sandboxing)

### Node.js Issues

**Symptoms**: "command not found: npx"

**Solutions:**
```bash
# Install Node.js LTS
# Visit nodejs.org

# Verify installation
node --version  # Should be 18+
npm --version

# Reinstall if needed
```

---

## Security Best Practices

### 1. **Limit Filesystem Access**

Only grant access to necessary directories:

```json
{
  "filesystem": {
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      "/Users/username/Projects/specific-project"  // Not /Users/username/
    ]
  }
}
```

### 2. **Use Environment Variables**

Don't hardcode API keys:

```bash
# .env file (add to .gitignore)
export GITHUB_TOKEN="ghp_..."
export BRAVE_API_KEY="BSA..."
```

```json
{
  "github": {
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
    }
  }
}
```

### 3. **Review Permissions**

Always review what MCP servers can do before approving actions.

### 4. **Rotate Keys Regularly**

Regenerate API keys periodically, especially if:
- Key may have been exposed
- Leaving a project/team
- Best practice (every 90 days)

### 5. **Minimum Necessary Access**

Only enable MCP servers you actively need.

---

## Additional Resources

### Official Documentation
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [MCP Server Directory](https://github.com/modelcontextprotocol/servers)
- [MCP Specification](https://spec.modelcontextprotocol.io/)

### Tool-Specific Guides
- [Claude Desktop MCP Setup](/claude-desktop/mcp-configuration/)
- [Claude Code MCP Integration](/claude-code/mcp-setup/)
- [OpenCode MCP Configuration](/opencode/)
- [Gemini CLI MCP Setup](/gemini-cli/)

---

## Pro Tips

1. **Start simple** - Add 1-2 servers first
2. **Test independently** - Run MCP commands manually before configuring
3. **Use Desktop Extensions** (Claude Desktop) - Easier than manual config
4. **Document your setup** - Keep notes on which servers you use and why
5. **Share configs** - Team members can benefit from your setup
6. **Check compatibility** - Not all servers work in all environments
7. **Monitor usage** - Some servers have rate limits/costs
8. **Keep updated** - MCP ecosystem evolves rapidly

---

*Last updated: 2025-11-12*
