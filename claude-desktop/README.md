# Claude Desktop - Complete Guide

<div align="center">

![Claude Desktop](https://img.shields.io/badge/Claude-Desktop-orange)
[![Platform](https://img.shields.io/badge/Platform-Windows%20|%20macOS-blue)]()
[![MCP Support](https://img.shields.io/badge/MCP-Supported-brightgreen)]()

*The desktop application bringing Claude's AI capabilities directly to your computer with MCP integration*

</div>

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [MCP Integration](#mcp-integration)
- [Configuration](#configuration)
- [Features](#features)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Comparison with Web Version](#comparison-with-web-version)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

---

## Overview

**Claude Desktop** is the official desktop application from Anthropic that brings Claude's powerful AI capabilities directly to your computer. Unlike the web version, Claude Desktop supports **Model Context Protocol (MCP)** servers, allowing Claude to integrate with your local tools, files, and services.

### Why Claude Desktop?

- ✅ **MCP Integration** - Connect to local and remote tools
- ✅ **Native Performance** - Faster than web interface
- ✅ **Offline Configuration** - Set up MCP servers locally
- ✅ **Desktop Notifications** - Get alerts when tasks complete
- ✅ **Local File Access** - Work with your filesystem directly
- ✅ **Enterprise Deployment** - MSIX (Windows) and PKG (macOS) installers

---

## Installation

### Download

Visit **[claude.ai/download](https://claude.ai/download)** and select your operating system:

#### **Windows**
1. Download the Windows installer (MSIX)
2. Run the installer
3. Launch Claude Desktop from Start Menu

#### **macOS**
1. Download the macOS installer (PKG)
2. Open the PKG file
3. Follow installation prompts
4. Launch from Applications folder

### System Requirements

| Requirement | Minimum |
|------------|---------|
| **OS** | Windows 10/11 or macOS 11+ |
| **RAM** | 4GB (8GB recommended) |
| **Storage** | 500MB free space |
| **Network** | Internet connection required |

### Enterprise Deployment

Claude Desktop supports standard enterprise deployment:
- **Windows**: MSIX installers for enterprise distribution
- **macOS**: PKG installers for IT administrators

---

## MCP Integration

**Model Context Protocol (MCP)** is the key differentiator for Claude Desktop, enabling seamless integration between Claude and external tools.

### What is MCP?

MCP is an open protocol that enables:
- Integration with external data sources
- Access to local tools and services
- Standardized communication between AI and applications
- Extensibility through community-built servers

### Two Ways to Add MCP Servers

#### **1. Desktop Extensions (Recommended - 2025)**

The newest and easiest method:

1. Open **Settings > Extensions** in Claude Desktop
2. Click **"Browse extensions"**
3. View Anthropic-reviewed MCP servers
4. Click any tool to install with **one click**

**Benefits:**
- No JSON editing required
- No dependency management
- Automatic updates
- Vetted by Anthropic

#### **2. Manual Configuration (Advanced)**

For custom or unlisted servers:

1. Open **Settings** in Claude Desktop
2. Navigate to **Developer** tab
3. Click **"Edit Config"** to open `claude_desktop_config.json`
4. Add server configuration (see below)
5. **Quit Claude Desktop completely**
6. Restart the application

### Configuration File Location

| Platform | Path |
|----------|------|
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |

### Example MCP Configuration

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
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-brave-search"
      ],
      "env": {
        "BRAVE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Popular MCP Servers for Desktop

| Server | Purpose | Requires API Key |
|--------|---------|------------------|
| **filesystem** | Read/write local files | ❌ |
| **github** | GitHub integration | ✅ |
| **brave-search** | Web search | ✅ |
| **puppeteer** | Browser automation | ❌ |
| **postgres** | Database access | ❌ (credentials) |
| **slack** | Slack integration | ✅ |
| **memory** | Persistent memory | ❌ |
| **sequential-thinking** | Enhanced reasoning | ❌ |

> 💡 **Tip**: See [/shared/mcp-servers/](/shared/mcp-servers/) for a comprehensive list of MCP servers

---

## Configuration

### Prerequisites

Many MCP servers require **Node.js** to run:

**Install Node.js LTS:**
- Visit [nodejs.org](https://nodejs.org)
- Download LTS (Long Term Support) version
- Run installer
- Verify: `node --version` in terminal

### Configuring MCP Servers

After editing `claude_desktop_config.json`:

1. **Save the file**
2. **Completely quit Claude Desktop** (not just close window)
   - **macOS**: Cmd+Q or right-click dock icon > Quit
   - **Windows**: Right-click system tray > Exit
3. **Restart Claude Desktop**
4. Verify servers loaded in conversation

---

## Features

### Core Capabilities

- **Multi-turn Conversations** - Extended context with memory
- **File Uploads** - Analyze images, documents, code
- **Project Management** - Organize conversations by project
- **Search History** - Find past conversations quickly
- **Export Chats** - Save conversations as text/markdown

### MCP-Specific Features

When MCP servers are configured:

- **Tool Access** - Claude can use MCP tools with your permission
- **Local Integration** - Access filesystem, databases, APIs
- **Custom Workflows** - Build automated pipelines
- **Real-time Data** - Query live data sources

### Desktop-Only Features

- **Desktop Notifications** - Get alerts when tasks complete
- **Offline Config** - Set up MCP without internet
- **Native Performance** - Faster rendering and responses
- **System Integration** - Better OS-level integration

---

## Keyboard Shortcuts

### General

| Shortcut | Action |
|----------|--------|
| **Cmd/Ctrl + N** | New conversation |
| **Cmd/Ctrl + K** | Quick search |
| **Cmd/Ctrl + ,** | Open settings |
| **Cmd/Ctrl + Q** | Quit application (macOS) |
| **Cmd/Ctrl + W** | Close window |

### In Conversation

| Shortcut | Action |
|----------|--------|
| **Enter** | Send message |
| **Shift + Enter** | New line |
| **Cmd/Ctrl + /** | Show shortcuts |
| **Esc** | Cancel generation |

---

## Comparison with Web Version

| Feature | Claude Desktop | Claude.ai (Web) |
|---------|----------------|-----------------|
| **MCP Servers (Local)** | ✅ Full support | ❌ Not available |
| **MCP Servers (Remote)** | ✅ SSE protocol | ✅ Pro/Max/Team/Enterprise only |
| **File Uploads** | ✅ | ✅ |
| **Projects** | ✅ | ✅ |
| **API Access** | Via MCP | Via API directly |
| **Offline Config** | ✅ | ❌ |
| **Desktop Notifications** | ✅ | ❌ |
| **Native Performance** | ✅ Faster | ⚠️ Browser-dependent |
| **Auto-updates** | ✅ | N/A |

### When to Use Desktop vs Web

**Use Claude Desktop when:**
- You need local MCP server integration
- Working with local files/databases
- Want desktop notifications
- Prefer native app experience
- Need offline configuration

**Use Claude Web when:**
- Accessing from multiple devices
- No local tool integration needed
- Want remote MCP servers only (Pro/Max/Team)
- Prefer browser-based workflow

---

## Troubleshooting

### MCP Servers Not Loading

**Issue**: MCP servers don't appear after configuration

**Solutions:**
1. ✅ Verify JSON syntax in `claude_desktop_config.json`
2. ✅ Ensure Node.js is installed (`node --version`)
3. ✅ Completely quit Claude Desktop (Cmd+Q / Exit from tray)
4. ✅ Restart the application
5. ✅ Check Developer tab for error messages

### Configuration File Not Found

**Issue**: Can't locate `claude_desktop_config.json`

**Solutions:**
- **macOS**: `open ~/Library/Application\ Support/Claude/`
- **Windows**: `explorer %APPDATA%\Claude`
- Or use Settings > Developer > Edit Config

### Server Command Fails

**Issue**: MCP server shows "command not found" error

**Solutions:**
1. Install missing dependencies (usually `npm install -g package-name`)
2. Verify command paths in config
3. Check environment variables are set correctly
4. Test command manually in terminal first

### Authentication Errors

**Issue**: API key not working for MCP server

**Solutions:**
1. Regenerate API key from provider
2. Check for extra spaces in JSON
3. Use escape characters for special characters in keys
4. Test API key independently before adding to config

---

## Best Practices

### Security

- ❌ **Never commit** `claude_desktop_config.json` to version control
- ✅ **Use environment variables** for sensitive API keys
- ✅ **Regenerate exposed keys** immediately
- ✅ **Limit filesystem access** to specific directories
- ✅ **Review MCP permissions** before approving actions

### Performance

- Start with 2-3 MCP servers, add more as needed
- Use Desktop Extensions when available (faster, more reliable)
- Regularly clear old conversation history
- Keep Claude Desktop updated

### Organization

- Use **Projects** to organize conversations by topic
- Name MCP servers descriptively in config
- Document custom MCP servers in your team wiki
- Keep a backup of working `claude_desktop_config.json`

---

## Additional Resources

### Official Documentation
- [Claude Desktop Download](https://claude.ai/download)
- [MCP Documentation](https://modelcontextprotocol.io)
- [Anthropic Support](https://support.claude.com)

### Community Resources
- [MCP Server Directory](https://github.com/modelcontextprotocol/servers)
- [Claude Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions)
- [Shared MCP Configurations](/shared/mcp-servers/)

---

## Pro Tips

1. **Use Desktop Extensions First** - They're more stable than manual config
2. **Test MCP Commands Manually** - Run `npx` commands in terminal first
3. **Start Simple** - Begin with filesystem server, add complexity later
4. **Keep Configs Synced** - Backup your working config across devices
5. **Monitor Permissions** - Always review what tools Claude wants to use

---

**Next Steps:**
- [Configure MCP Servers](/claude-desktop/mcp-configuration/)
- [View Keyboard Shortcuts](/claude-desktop/keyboard-shortcuts/)
- [Compare with Claude Code](/comparisons/feature-matrix.md)

---

*Last updated: 2025-11-12*
