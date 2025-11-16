# Claude Desktop - MCP Configuration Guide

Complete guide to setting up Model Context Protocol servers in Claude Desktop.

---

## 🚀 Quick Start: Project-Type-Based Setup

**Need MCP servers for your project?** Get optimized configurations:

> **[📚 MCP Project Workflows Guide →](/shared/mcp-project-workflows/)**
>
> Pre-configured MCP setups for 13 project types:
> - **Greenfield** - $0-500/month - Spec Kit + Zen
> - **Brownfield** - $30-280/month - OpenSpec + Shrimp + Zen
> - **Maintenance** - $50-220/month - Zen + Shrimp
> - **Legacy Modernization** - $180-450/month - Full Stack
> - And 9 more...
>
> **[📋 Copy-Paste Templates →](/shared/mcp-project-workflows/templates.md)**
>
> Each template includes:
> ✅ Exact configuration JSON
> ✅ Installation commands
> ✅ Cost estimates
> ✅ Setup time

---

## Two Ways to Add MCP Servers

### Method 1: Desktop Extensions (Recommended - 2025)

**Easiest method - One-click installation**

1. Open **Claude Desktop**
2. Click **Settings** (gear icon)
3. Navigate to **Extensions** tab
4. Click **"Browse extensions"**
5. **Select** MCP servers you want
6. Click **Install** for each

**Benefits:**
- ✅ No manual configuration
- ✅ No dependency management
- ✅ Automatic updates
- ✅ Anthropic-reviewed servers
- ✅ No JSON editing

**Available Extensions:**
- Filesystem (local file access)
- GitHub
- Brave Search
- Memory
- Puppeteer
- And more...

---

### Method 2: Manual Configuration (Advanced)

**For custom or unlisted MCP servers**

#### Configuration File Location

| Platform | Path |
|----------|------|
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |

#### Steps

1. **Open Settings** in Claude Desktop
2. Go to **Developer** tab
3. Click **"Edit Config"**
4. Add your MCP server configuration (JSON)
5. **Save** the file
6. **Quit Claude Desktop completely** (Cmd+Q / Exit from tray)
7. **Restart** Claude Desktop

---

## Example Configurations

### Basic Setup (No API Keys Required)

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
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
}
```

### Complete Setup (With API Keys)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Documents",
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
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {
        "MEMORY_FILE_PATH": "/Users/username/.claude/memory.json"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-...",
        "SLACK_TEAM_ID": "T..."
      }
    }
  }
}
```

---

## Popular MCP Servers

### 1. Filesystem Server

**Purpose**: Access local files and directories

**Configuration:**
```json
{
  "filesystem": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      "/Users/username/Projects"
    ]
  }
}
```

**Usage in Claude:**
```
Read the contents of Projects/my-app/README.md
Create a new file called todo.txt
List all files in the Projects directory
```

---

### 2. GitHub Server

**Purpose**: GitHub integration

**Get Token:** [github.com/settings/tokens](https://github.com/settings/tokens)

**Configuration:**
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
Create an issue in my-username/my-repo
List recent PRs
Search for files containing "authentication"
```

---

### 3. Brave Search

**Purpose**: Web search

**Get API Key:** [brave.com/search/api](https://brave.com/search/api)

**Configuration:**
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
Search for the latest TypeScript best practices
Find recent news about AI coding tools
Look up the weather in San Francisco
```

---

## Prerequisites

### Install Node.js

Most MCP servers require Node.js 18+:

**macOS:**
```bash
brew install node
```

**Windows:**
Download from [nodejs.org](https://nodejs.org)

**Verify:**
```bash
node --version  # Should be 18+
```

---

## Troubleshooting

### MCP Servers Not Loading

**Issue**: Added config but servers don't appear

**Solutions:**

1. **Verify Node.js installed:**
   ```bash
   node --version
   ```

2. **Check JSON syntax:**
   - Use a JSON validator
   - Look for missing commas, quotes, brackets

3. **Completely quit Claude Desktop:**
   - **macOS**: Cmd+Q (not just close window)
   - **Windows**: Right-click system tray > Exit

4. **Restart Claude Desktop**

5. **Check Developer tab for errors:**
   - Settings > Developer > View Logs

---

### Command Not Found Errors

**Issue**: `command not found: npx`

**Solution:**
```bash
# Install Node.js (includes npx)
# macOS
brew install node

# Windows
# Download from nodejs.org

# Verify
npx --version
```

---

### Permission Denied

**Issue**: MCP server can't access files

**Solution:**

**macOS:**
```bash
# Grant permissions in System Settings
# Privacy & Security > Files and Folders
```

**Windows:**
```powershell
# Run as administrator
# Or adjust folder permissions
```

---

### API Key Errors

**Issue**: "Invalid API key" or authentication failures

**Solutions:**

1. **Check for typos** in the API key
2. **Remove extra spaces** around the key
3. **Regenerate key** from the provider
4. **Check billing** is active (if applicable)
5. **Test key independently:**

```bash
# Test GitHub token
curl -H "Authorization: token ghp_..." https://api.github.com/user

# Test Brave Search
curl -H "X-Subscription-Token: BSA..." "https://api.search.brave.com/res/v1/web/search?q=test"
```

---

## Security Best Practices

### 1. Limit Filesystem Access

❌ **Bad** (too broad):
```json
{
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username"]
}
```

✅ **Good** (specific):
```json
{
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Projects"]
}
```

### 2. Use Environment Variables

**Create `.env` file:**
```bash
# .env (add to .gitignore!)
export GITHUB_TOKEN="ghp_..."
export BRAVE_API_KEY="BSA..."
```

**Load before starting:**
```bash
source .env
open -a "Claude Desktop"
```

**Reference in config:**
```json
{
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
  }
}
```

### 3. Never Commit Config with Secrets

```bash
# Add to .gitignore
echo "claude_desktop_config.json" >> .gitignore
```

### 4. Review MCP Actions

Always review what Claude wants to do before approving MCP tool usage.

---

## Advanced Configuration

### Docker-Based MCP Servers

```json
{
  "docker-filesystem": {
    "command": "docker",
    "args": [
      "run",
      "--rm",
      "-i",
      "-v",
      "/Users/username/Projects:/data",
      "mcp/filesystem:latest",
      "/data"
    ]
  }
}
```

### Custom MCP Server

```json
{
  "custom-server": {
    "command": "node",
    "args": ["/path/to/my-custom-server.js"]
  }
}
```

---

## Testing MCP Setup

### Verify Servers Loaded

1. Start a new conversation in Claude Desktop
2. Ask:
   ```
   What MCP servers are available?
   List the MCP tools you have access to
   ```

3. Claude should list your configured servers

### Test Each Server

**Filesystem:**
```
List files in my Projects directory
```

**GitHub:**
```
List my repositories
```

**Brave Search:**
```
Search for the latest news
```

---

## Example Use Cases

### Development Workflow

**Servers needed:**
- filesystem
- github
- brave-search

**Workflow:**
```
1. "Search for best practices for React hooks"
2. "Read my current useAuth.js hook"
3. "Refactor it based on the best practices we found"
4. "Create a PR for this change"
```

### Research & Documentation

**Servers needed:**
- filesystem
- brave-search
- memory

**Workflow:**
```
1. "Search for information about GraphQL vs REST"
2. "Save a summary to my notes"
3. "Remember my preference for GraphQL"
4. "Create documentation comparing both approaches"
```

---

## Complete MCP Server List

For all available MCP servers and configurations:

**[View Complete MCP Server Directory →](/shared/mcp-servers/)**

---

## Next Steps

- **[View Keyboard Shortcuts →](/claude-desktop/keyboard-shortcuts/)**
- **[Browse Desktop Extensions →](claude.ai/desktop)** (in-app)
- **[Compare with Claude Code CLI →](/comparisons/feature-matrix.md)**

---

## Additional Resources

- [Official MCP Documentation](https://modelcontextprotocol.io/)
- [Desktop Extensions Announcement](https://www.anthropic.com/engineering/desktop-extensions)
- [MCP Server Repository](https://github.com/modelcontextprotocol/servers)

---

*Last updated: 2025-11-12*
