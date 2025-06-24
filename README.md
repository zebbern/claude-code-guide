<div align="center">

---

### **Claude Code Guide**

> This comprehensive guide covers **every discoverable Claude Code command** as of June 2025,  
> including many features that are not widely known or documented in basic tutorials.

**This represents the most complete Claude Code command reference available.**

---

*For updates and contributions, visit the [official Claude Code documentation](https://claude.ai/code)*

[![Claude Code](https://img.shields.io/badge/Claude%20Code-v1.0.25-blue?logo=anthropic)](https://claude.ai/code)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/anthropics/claude-code)
[![License](https://img.shields.io/badge/License-Anthropic-orange)](https://claude.ai/code)


</div>

<div align="center">

<kbd>

# <code>Visit: [https://zebbern.github.io/](https://zebbern.github.io/) for more detailed info!</code>

| Section                                    | Status          |
|---------------------------------------------|------------------------------|
| Guides on how to install on Windows, Linux, MacOS | ✅ |
| Tips and Tricks                            | ✅ |
| MCP Overview with what to use              | ✅ |
| Community Guides                           | ✅ |
| Troubleshooting                            | ✅ |
| How to use Claude code the most optimal way| ✅ |
### I Usually Start my Claude with <code>Claude --dangerously-skip-permissions</code>

</kbd>

</div>
</div>

---

## Quick Start

```bash
# Quick Installment
# Quick Install

## Method 1 – NPM (global) **⭐️ Official**
npm install -g @anthropic-ai/claude-code
# Requires Node 18+ on macOS / Linux / WSL :contentReference[oaicite:0]{index=0}

## Method 2 – Homebrew Tap (macOS & Linux) *️⃣
brew install anthropic/tap/claude-code
# Formula contributed by the community :contentReference[oaicite:1]{index=1}

## Method 3 – Arch Linux AUR *️⃣
yay -S claude-code        # or paru -S claude-code
# Keeps pace with npm releases :contentReference[oaicite:2]{index=2}

## Method 4 – Docker (containerised) *️⃣
docker pull ghcr.io/rchgrav/claudebox:latest
docker run -it -v "$PWD":"$PWD" -w "$PWD" \
ghcr.io/rchgrav/claudebox:latest
# Nice when you can’t touch the host system :contentReference[oaicite:3]{index=3}

## Method 5 – Windows via WSL **(Anthropic-recommended path)**
# 1) Enable WSL 2 and install Ubuntu
# 2) Inside Ubuntu:
sudo apt update && sudo apt install -y nodejs npm
npm install -g @anthropic-ai/claude-code
# Step-by-step guide :contentReference[oaicite:4]{index=4}

## Method 6 – Build from source (any OS) *️⃣
git clone https://github.com/anthropics/claude-code.git
cd claude-code && pnpm install && pnpm build
pnpm --filter cli run cli:install
# Handy for cutting-edge commits or local patches :contentReference[oaicite:5]{index=5}

# Interactive Mode
claude                      # Start interactive REPL
claude "your question"      # Start with initial prompt

# One-Shot Mode  
claude -p "analyze this"    # Quick query and exit
cat file | claude -p "fix"  # Process piped content

# Management
claude config              # Configure settings
claude update              # Update to latest
claude mcp                 # Setup MCP servers
```



---

## 📋 Complete Category Index

|🚀| [Installation & Setup](#-installation--setup) ‎ ‎ ‎ ‎‎ ‎ - Everything to get Claude Code running  
|🔌| [MCP Integration](#-mcp-integration)‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎   ‎ - Complete Model Context Protocol guide  
|⌨️| [Commands Reference](#️-commands-reference)‎ ‎ ‎ ‎ ‎- Every CLI command, flag, and slash command  
|⚙️| [Configuration](#️-configuration) ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - All settings, files, and environment variables  
|🔒| [Security & Permissions](#-security--permissions)  ‎ ‎- Complete security model and best practices  
|🤖| [Automation & Scripting](#-automation--scripting) - CI/CD, scripting, and automation patterns  
|🔧| [Troubleshooting](#-troubleshooting) ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - Complete diagnostic and recovery guide  
|🚀| [Advanced Features](#-advanced-features) ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - Hidden features, context management, and power user tricks

---

## 🚀 Installation & Setup

### Prerequisites & Requirements

**System Requirements:**
- Node.js 16+ or standalone binary
- API key from Anthropic
- 4GB RAM minimum (8GB+ recommended for large projects)
- Internet connection for API calls

**Supported Platforms:**
- macOS (Intel/Apple Silicon)
- Linux (Ubuntu 18+, Debian 10+, CentOS 7+)
- Windows 10/11 (WSL recommended)

### Installation Methods

#### Method 1: NPM Installation (Recommended)
```bash
# Install globally
npm install -g @anthropic/claude-code

# Verify installation
claude --version
# Should show: claude-code v1.0.25
```

#### Method 2: Direct Binary Download
```bash
# Linux/macOS
curl -fsSL https://claude.ai/install.sh | sh

# Windows (PowerShell)
iwr https://claude.ai/install.ps1 | iex

# Manual download
# Visit: https://github.com/anthropics/claude-code/releases
```

#### Method 3: Package Managers
```bash
# macOS (Homebrew)
brew install anthropic/tap/claude-code

# Ubuntu/Debian
wget -qO- https://claude.ai/keys/gpg | sudo apt-key add -
echo "deb https://claude.ai/apt stable main" | sudo tee /etc/apt/sources.list.d/claude-code.list
sudo apt update && sudo apt install claude-code

# Arch Linux (AUR)
yay -S claude-code

# Windows (Chocolatey)
choco install claude-code
```

### Initial Setup

#### 1. API Key Configuration
```bash
# Required: Get your API key from https://console.anthropic.com
export ANTHROPIC_API_KEY="sk-ant-api03-your-key-here"

# Make permanent (choose your shell)
# Bash
echo 'export ANTHROPIC_API_KEY="sk-ant-api03-your-key"' >> ~/.bashrc
source ~/.bashrc

# Zsh
echo 'export ANTHROPIC_API_KEY="sk-ant-api03-your-key"' >> ~/.zshrc
source ~/.zshrc

# Fish
echo 'set -gx ANTHROPIC_API_KEY "sk-ant-api03-your-key"' >> ~/.config/fish/config.fish
```

#### 2. First-Time Configuration
```bash
# Interactive setup
claude config

# Set global defaults
claude config set -g model claude-sonnet-4
claude config set -g verbose true
claude config set -g outputFormat text

# Test installation
claude "Hello, Claude!"
claude /doctor  # Health check
```

#### 3. Recommended Initial Settings
```bash
# Privacy-focused setup
export DISABLE_TELEMETRY=1
export DISABLE_ERROR_REPORTING=1
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1

# Performance optimization
export DISABLE_NON_ESSENTIAL_MODEL_CALLS=1
export ANTHROPIC_SMALL_FAST_MODEL="claude-haiku-3"

# Security defaults
claude config set allowedTools "Edit,View"
claude config set maxTurns 10
```

### Verification & Testing

#### Health Check
```bash
# Complete system check
claude /doctor

# Expected output:
# ✅ API Key: Valid
# ✅ Network: Connected
# ✅ Model Access: Available
# ✅ MCP Servers: 0 configured
# ✅ Permissions: Default
# ✅ Configuration: Valid
```

#### Basic Functionality Test
```bash
# Interactive mode test
claude "Explain what you can do"

# Print mode test
claude -p "What is 2+2?"

# Tool permission test
claude "Create a file called test.txt with 'Hello World'"
# Should prompt for Edit permission

# Session continuity test
claude -c  # Should continue from previous session
```

### IDE Integration Setup

#### VS Code Extension
```bash
# Install from marketplace
code --install-extension anthropic.claude-code

# Or download from:
# https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code
```

#### JetBrains Plugin
```bash
# Available for:
# - IntelliJ IDEA
# - PyCharm
# - WebStorm
# - All JetBrains IDEs

# Install from JetBrains Marketplace
# Search: "Claude Code"
```

### Corporate/Enterprise Setup

#### Proxy Configuration
```bash
# HTTP/HTTPS Proxy
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="https://proxy.company.com:8443"
export NO_PROXY="localhost,127.0.0.1,*.company.com"

# SOCKS Proxy
export ALL_PROXY="socks5://proxy.company.com:1080"
```

#### Air-Gapped Environments
```bash
# Download offline bundle
wget https://claude.ai/releases/claude-code-offline-bundle.tar.gz

# Install without internet
tar -xzf claude-code-offline-bundle.tar.gz
cd claude-code-offline
./install.sh --offline

# Configure for local model endpoint
export ANTHROPIC_BASE_URL="https://internal-llm-gateway.company.com"
```

### Power User Aliases

#### Essential Shortcuts
```bash
# Add to ~/.bashrc, ~/.zshrc, or ~/.config/fish/config.fish

# Basic shortcuts
alias cl="claude"
alias clp="claude -p"
alias clc="claude -c"
alias cls="claude /status"

# Output format shortcuts
alias claude-json="claude -p --output-format json"
alias claude-stream="claude -p --output-format stream-json"

# Security shortcuts (use carefully)
alias claude-safe="claude --allowedTools 'Edit,View'"
alias claude-read="claude --allowedTools 'View'"
alias claude-dev="claude --allowedTools 'Edit,View,Bash(git:*),Bash(npm:*)'"

# DANGEROUS - only for isolated environments
alias yolo="claude --dangerously-skip-permissions"
alias cc="claude --dangerously-skip-permissions"
```

### Troubleshooting Installation

#### Common Installation Issues
```bash
# Permission errors (Linux/macOS)
sudo npm install -g @anthropic/claude-code

# Node.js version issues
nvm install 18
nvm use 18

# Path issues
echo $PATH
which claude

# Clear npm cache
npm cache clean --force

# Reinstall
npm uninstall -g @anthropic/claude-code
npm install -g @anthropic/claude-code
```

#### Windows-Specific Issues
```bash
# PowerShell execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Windows Defender issues
# Add exception for claude.exe in Windows Defender

# WSL setup (recommended)
wsl --install
# Then install claude inside WSL
```

---

## 🔌 MCP Integration

### Understanding MCP (Model Context Protocol)

**What is MCP?**
MCP (Model Context Protocol) extends Claude's capabilities by connecting to external services, databases, APIs, and tools. Think of MCP servers as "plugins" that give Claude superpowers.

**MCP Architecture:**
```
Claude Code ←→ MCP Protocol ←→ MCP Servers ←→ External Services
```

**Transport Types:**
- **stdio**: Local command-line servers (most common)
- **SSE**: Server-sent events for real-time communication
- **HTTP**: Web-based servers for cloud services

### MCP Setup & Configuration

#### Basic MCP Setup
```bash
# Interactive MCP configuration
claude mcp

# Check current MCP servers
claude config get mcp

# List available MCP servers (if registry exists)
claude mcp list-available
```

#### MCP Configuration File
Create `.claude/mcp.json` in your project:
```json
{
  "mcpServers": {
    "git": {
      "command": "git-mcp-server",
      "args": [],
      "env": {}
    },
    "postgres": {
      "command": "postgres-mcp-server",
      "args": ["--host", "localhost", "--port", "5432"],
      "env": {
        "POSTGRES_USER": "developer",
        "POSTGRES_PASSWORD": "dev_password",
        "POSTGRES_DB": "myapp_development"
      }
    },
    "filesystem": {
      "command": "filesystem-mcp-server",
      "args": ["--root", "/workspace"],
      "env": {}
    },
    "web_api": {
      "transport": "http",
      "url": "http://localhost:3001/mcp",
      "headers": {
        "Authorization": "Bearer ${API_TOKEN}",
        "Content-Type": "application/json"
      }
    },
    "browser": {
      "transport": "sse",
      "url": "ws://localhost:8080/mcp-sse",
      "reconnect": true
    }
  }
}
```

### Popular MCP Servers (2025)

#### Development & Git Tools

| Server | Installation | Purpose | Popular Use Cases |
|--------|-------------|---------|-------------------|
| **git-mcp-server** | `npm i -g @anthropic/git-mcp-server` | Git operations | Code reviews, commits, branch management |
| **github-mcp-server** | `npm i -g @modelcontextprotocol/github-mcp-server` | GitHub API access | PR management, issue tracking, repository analysis |
| **gitlab-mcp-server** | `npm i -g @mcp/gitlab-server` | GitLab integration | CI/CD pipeline management, merge requests |
| **docker-mcp-server** | `npm i -g @mcp/docker-server` | Docker operations | Container management, image building |
| **kubernetes-mcp-server** | `npm i -g @mcp/k8s-server` | Kubernetes management | Pod monitoring, deployment management |

**Setup Example:**
```bash
# Install and configure Git MCP
npm install -g @anthropic/git-mcp-server
claude mcp add git "git-mcp-server"

# GitHub with token
export GITHUB_TOKEN="ghp_your_token_here"
npm install -g @modelcontextprotocol/github-mcp-server
claude mcp add github "github-mcp-server --token $GITHUB_TOKEN"
```

#### Database Integration

| Server | Installation | Purpose | Supported Databases |
|--------|-------------|---------|-------------------|
| **postgres-mcp-server** | `npm i -g @anthropic/postgres-mcp-server` | PostgreSQL access | PostgreSQL 12+ |
| **mysql-mcp-server** | `npm i -g @mcp/mysql-server` | MySQL operations | MySQL 8.0+, MariaDB 10.5+ |
| **sqlite-mcp-server** | `npm i -g @mcp/sqlite-server` | SQLite databases | SQLite 3.x |
| **mongodb-mcp-server** | `npm i -g @mcp/mongodb-server` | MongoDB operations | MongoDB 4.4+ |
| **redis-mcp-server** | `npm i -g @mcp/redis-server` | Redis operations | Redis 6.0+ |
| **elasticsearch-mcp-server** | `npm i -g @mcp/elasticsearch-server` | Elasticsearch queries | Elasticsearch 7.x, 8.x |

**Database Setup Example:**
```bash
# PostgreSQL setup
export POSTGRES_URL="postgresql://user:password@localhost:5432/mydb"
npm install -g @anthropic/postgres-mcp-server
claude mcp add postgres "postgres-mcp-server --url $POSTGRES_URL"

# MongoDB setup
export MONGODB_URI="mongodb://localhost:27017/myapp"
npm install -g @mcp/mongodb-server
claude mcp add mongodb "mongodb-mcp-server --uri $MONGODB_URI"
```

#### Web & API Tools

| Server | Installation | Purpose | Key Features |
|--------|-------------|---------|--------------|
| **puppeteer-mcp-server** | `npm i -g @anthropic/puppeteer-mcp-server` | Browser automation | Web scraping, testing, screenshots |
| **playwright-mcp-server** | `npm i -g @mcp/playwright-server` | Multi-browser automation | Chrome, Firefox, Safari automation |
| **selenium-mcp-server** | `npm i -g @mcp/selenium-server` | Selenium WebDriver | Legacy browser automation |
| **http-client-mcp-server** | `npm i -g @mcp/http-client-server` | REST API calls | HTTP requests, API testing |
| **graphql-mcp-server** | `npm i -g @mcp/graphql-server` | GraphQL operations | Schema introspection, queries |
| **websocket-mcp-server** | `npm i -g @mcp/websocket-server` | WebSocket communication | Real-time data, trading APIs |

**Web Automation Setup:**
```bash
# Puppeteer for web automation
npm install -g @anthropic/puppeteer-mcp-server
claude mcp add browser "puppeteer-mcp-server --headless --no-sandbox"

# HTTP client for APIs
npm install -g @mcp/http-client-server
claude mcp add http "http-client-server --timeout 30000"
```

#### Cloud Services Integration

| Server | Installation | Cloud Provider | Services |
|--------|-------------|----------------|----------|
| **aws-mcp-server** | `npm i -g @mcp/aws-server` | Amazon Web Services | S3, EC2, Lambda, RDS, CloudWatch |
| **gcp-mcp-server** | `npm i -g @mcp/gcp-server` | Google Cloud Platform | Compute, Storage, BigQuery, Pub/Sub |
| **azure-mcp-server** | `npm i -g @mcp/azure-server` | Microsoft Azure | VMs, Storage, Functions, Cosmos DB |
| **digitalocean-mcp-server** | `npm i -g @mcp/digitalocean-server` | DigitalOcean | Droplets, Volumes, Load Balancers |
| **vercel-mcp-server** | `npm i -g @mcp/vercel-server` | Vercel | Deployments, Functions, Analytics |
| **netlify-mcp-server** | `npm i -g @mcp/netlify-server` | Netlify | Sites, Functions, Forms |

**Cloud Setup Example:**
```bash
# AWS integration
export AWS_ACCESS_KEY_ID="your_access_key"
export AWS_SECRET_ACCESS_KEY="your_secret_key"
export AWS_REGION="us-east-1"
npm install -g @mcp/aws-server
claude mcp add aws "aws-mcp-server --region $AWS_REGION"

# Google Cloud integration
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
npm install -g @mcp/gcp-server
claude mcp add gcp "gcp-server --project-id your-project-id"
```

#### Specialized Tools

| Server | Installation | Purpose | Industry |
|--------|-------------|---------|----------|
| **jira-mcp-server** | `npm i -g @mcp/jira-server` | JIRA integration | Project management |
| **slack-mcp-server** | `npm i -g @mcp/slack-server` | Slack operations | Team communication |
| **discord-mcp-server** | `npm i -g @mcp/discord-server` | Discord bot operations | Community management |
| **confluence-mcp-server** | `npm i -g @mcp/confluence-server` | Confluence docs | Documentation management |
| **notion-mcp-server** | `npm i -g @mcp/notion-server` | Notion integration | Knowledge management |
| **airtable-mcp-server** | `npm i -g @mcp/airtable-server` | Airtable operations | Database/CRM operations |
| **shopify-mcp-server** | `npm i -g @mcp/shopify-server` | Shopify API | E-commerce operations |
| **stripe-mcp-server** | `npm i -g @mcp/stripe-server` | Payment processing | Financial operations |

#### AI & Machine Learning Tools

| Server | Installation | Purpose | Capabilities |
|--------|-------------|---------|--------------|
| **openai-mcp-server** | `npm i -g @mcp/openai-server` | OpenAI API access | GPT models, DALL-E, Whisper |
| **huggingface-mcp-server** | `npm i -g @mcp/huggingface-server` | Hugging Face models | Model inference, datasets |
| **ollama-mcp-server** | `npm i -g @mcp/ollama-server` | Local LLM operations | Local model management |
| **tensorflow-mcp-server** | `npm i -g @mcp/tensorflow-server` | TensorFlow operations | Model training, inference |
| **pytorch-mcp-server** | `npm i -g @mcp/pytorch-server` | PyTorch operations | Deep learning workflows |

#### Data & Analytics Tools

| Server | Installation | Purpose | Data Sources |
|--------|-------------|---------|--------------|
| **csv-mcp-server** | `npm i -g @mcp/csv-server` | CSV file operations | Data analysis, reporting |
| **excel-mcp-server** | `npm i -g @mcp/excel-server` | Excel file operations | Spreadsheet analysis |
| **pandas-mcp-server** | `npm i -g @mcp/pandas-server` | Python data analysis | DataFrame operations |
| **jupyter-mcp-server** | `npm i -g @mcp/jupyter-server` | Jupyter notebook access | Data science workflows |
| **tableau-mcp-server** | `npm i -g @mcp/tableau-server` | Tableau integration | Business intelligence |

### MCP Management Commands

#### Server Management
```bash
# Add MCP servers
claude mcp add <name> <command>           # Add stdio server
claude mcp add <name> --http <url>        # Add HTTP server
claude mcp add <name> --sse <url>         # Add SSE server

# Remove servers
claude mcp remove <name>                  # Remove specific server
claude mcp remove --all                   # Remove all servers

# List and status
claude mcp list                           # List configured servers
claude mcp status                         # Check server health
claude mcp restart <name>                 # Restart specific server
claude mcp restart --all                  # Restart all servers
```

#### Server Configuration
```bash
# Update server settings
claude mcp configure <name>               # Interactive configuration
claude mcp set <name> <key> <value>       # Set specific setting
claude mcp env <name> <key> <value>       # Set environment variable

# Import/export configurations
claude mcp export > mcp-config.json       # Export configuration
claude mcp import mcp-config.json         # Import configuration
```

### MCP Tool Permissions

#### Permission Patterns for MCP Tools
```bash
# Allow specific MCP tools
claude --allowedTools "mcp__git__commit,mcp__git__push"

# Allow all tools from specific server
claude --allowedTools "mcp__postgres__*"

# Pattern: mcp__<server_name>__<tool_name>
claude --allowedTools "mcp__browser__navigate,mcp__browser__click"

# Combined with built-in tools
claude --allowedTools "Edit,View,mcp__git__*,mcp__http__*"

# Read-only patterns
claude --allowedTools "View,mcp__postgres__query,mcp__git__log"
```

#### MCP Security Configuration
```bash
# Secure MCP setup
claude config set mcpSecurity.requireAuth true
claude config set mcpSecurity.timeout 30000
claude config set mcpSecurity.maxConnections 10

# Network restrictions
claude config set mcpSecurity.allowedHosts "localhost,*.company.com"
claude config set mcpSecurity.allowedPorts "3000-3999,5432,5984"
```

### Custom MCP Server Development

#### Basic MCP Server Template
```javascript
// my-custom-mcp-server.js
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'my-custom-server',
    version: '1.0.0'
  },
  {
    capabilities: {
      tools: {},
      resources: {}
    }
  }
);

// Define tools
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: 'my_tool',
        description: 'Does something useful',
        inputSchema: {
          type: 'object',
          properties: {
            input: { type: 'string' }
          }
        }
      }
    ]
  };
});

// Handle tool calls
server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;
  
  if (name === 'my_tool') {
    return {
      content: [
        {
          type: 'text',
          text: `Processed: ${args.input}`
        }
      ]
    };
  }
  
  throw new Error(`Tool ${name} not found`);
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

#### Custom Server Registration
```bash
# Make executable
chmod +x my-custom-mcp-server.js

# Add to Claude Code
claude mcp add custom "node my-custom-mcp-server.js"

# Test the server
claude "Use my_tool to process 'hello world'"
```

### MCP Troubleshooting

#### Common MCP Issues
```bash
# Server startup issues
claude --mcp-debug                        # Enable MCP debugging
claude mcp status                         # Check server health
node your-server.js                       # Test server manually

# Permission issues
claude /permissions                       # Check MCP permissions
claude config get allowedTools            # Review allowed tools

# Connection issues
export MCP_TIMEOUT=30000                  # Increase timeout
claude mcp restart --all                  # Restart all servers

# Environment issues
claude mcp env postgres POSTGRES_URL "postgresql://..."
claude config get mcp.servers.postgres   # Verify configuration
```

#### MCP Debugging
```bash
# Enable comprehensive MCP debugging
export MCP_DEBUG=1
export MCP_TRACE=1
claude --mcp-debug --verbose

# Check MCP logs
tail -f ~/.claude/logs/mcp-*.log

# Test individual servers
npx postgres-mcp-server --help
npx git-mcp-server --version
```

### Context Management with MCP

#### Context Providers
```bash
# Add context-aware MCP servers
claude mcp add context7 "context7-mcp-server --memory-size 1000"
claude mcp add long-context "long-context-server --window-size 128000"

# Configure context retention
claude config set context.maxTokens 128000
claude config set context.retentionDays 30
claude config set context.compressionEnabled true
```

#### Advanced Context Features
```bash
# Context-aware sessions
claude --context-window 128000 "analyze this large codebase"

# Multi-modal context
claude mcp add vision "vision-mcp-server --image-analysis true"
claude "analyze this screenshot and the related code"

# Persistent context
claude /memory                            # Edit persistent memory
claude --memory-file custom.md            # Use custom memory file
```

---

## ⌨️ Commands Reference

### CLI Commands

#### Core Commands
| Command | Description | Example | Use Case |
|---------|-------------|---------|----------|
| `claude` | Start interactive REPL | `claude` | Development, exploration |
| `claude "query"` | REPL with initial prompt | `claude "help debug this"` | Guided sessions |
| `claude -p "query"` | One-shot query (print mode) | `claude -p "explain function"` | Quick queries, automation |

#### Session Management
| Command | Description | Example | Use Case |
|---------|-------------|---------|----------|
| `claude -c` | Continue last session | `claude -c` | Resume work |
| `claude -r <id>` | Resume specific session | `claude -r abc123` | Return to specific context |
| `claude --resume <name>` | Resume named session | `claude --resume project-review` | Named workflows |

#### Configuration Management
| Command | Description | Example | Use Case |
|---------|-------------|---------|----------|
| `claude config` | Interactive configuration | `claude config` | Initial setup |
| `claude config list` | List all settings | `claude config list` | Audit configuration |
| `claude config get <key>` | Get specific value | `claude config get model` | Check settings |
| `claude config set <key> <value>` | Set project value | `claude config set model sonnet` | Project configuration |
| `claude config set -g <key> <value>` | Set global value | `claude config set -g model opus` | Global defaults |
| `claude config add <key> <value>` | Add to list | `claude config add allowedTools Edit` | Extend permissions |
| `claude config remove <key> <value>` | Remove from list | `claude config remove allowedTools Bash` | Restrict permissions |

#### MCP Management
| Command | Description | Example | Use Case |
|---------|-------------|---------|----------|
| `claude mcp` | MCP configuration menu | `claude mcp` | Setup integrations |
| `claude mcp add <n> <cmd>` | Add stdio server | `claude mcp add git "git-mcp-server"` | Add functionality |
| `claude mcp remove <name>` | Remove server | `claude mcp remove git` | Remove integration |
| `claude mcp list` | List all servers | `claude mcp list` | Audit integrations |
| `claude mcp status` | Check server health | `claude mcp status` | Troubleshooting |
| `claude mcp restart <name>` | Restart server | `claude mcp restart postgres` | Fix connections |

#### System Commands
| Command | Description | Example | Use Case |
|---------|-------------|---------|----------|
| `claude update` | Update to latest version | `claude update` | Maintenance |
| `claude --version` | Show version | `claude --version` | Version check |
| `claude --help` | Show help | `claude --help` | Get help |

### CLI Flags & Options

#### Essential Flags
| Flag | Short | Description | Example |
|------|-------|-------------|---------|
| `--print` | `-p` | Print response without interactive mode | `claude -p "help"` |
| `--continue` | `-c` | Load most recent conversation | `claude -c` |
| `--resume` | `-r` | Resume specific session by ID | `claude -r abc123` |
| `--help` | `-h` | Show help information | `claude --help` |
| `--verbose` | - | Enable detailed logging | `claude --verbose` |
| `--debug` | `-d` | Enable debug mode | `claude --debug` |
| `--version` | `-v` | Show version | `claude --version` |

#### Output Control Flags
| Flag | Options | Description | Example |
|------|---------|-------------|---------|
| `--output-format` | `text`, `json`, `stream-json` | Control response format | `claude -p "help" --output-format json` |
| `--input-format` | `text`, `stream-json` | Control input format | `claude --input-format stream-json` |
| `--json` | - | Shorthand for JSON output | `claude -p "analyze" --json` |

#### Security & Permission Flags
| Flag | Risk Level | Description | Example |
|------|------------|-------------|---------|
| `--allowedTools <tools>` | **LOW** | Whitelist specific tools | `claude --allowedTools "Edit,View"` |
| `--disallowedTools <tools>` | **LOW** | Blacklist specific tools | `claude --disallowedTools "Bash"` |
| `--allow-tool <tool>` | **LOW** | Allow single tool | `claude --allow-tool Edit` |
| `--disallow-tool <tool>` | **LOW** | Block single tool | `claude --disallow-tool Bash` |
| `--dangerously-skip-permissions` | **CRITICAL** | Skip ALL permission prompts | `claude --dangerously-skip-permissions` |

#### Advanced Control Flags
| Flag | Purpose | Example | Notes |
|------|---------|---------|--------|
| `--max-turns <n>` | Limit agentic interactions | `claude --max-turns 5` | Control autonomy |
| `--add-dir <path>` | Add working directories | `claude --add-dir ../lib ../src` | Multi-directory workspace |
| `--model <model>` | Set specific model | `claude --model sonnet` | Override default |
| `--mcp-debug` | Debug MCP connections | `claude --mcp-debug` | MCP troubleshooting |

#### Prompt Engineering Flags
| Flag | Purpose | Example | Use Case |
|------|---------|---------|----------|
| `--system-prompt <prompt>` | Override system prompt | `claude --system-prompt "You are an expert"` | Custom behavior |
| `--append-system-prompt <prompt>` | Append to system prompt | `claude --append-system-prompt "Focus on security"` | Add instructions |
| `-system <prompt>` | Alternative syntax | `claude -system "Custom prompt"` | Shorthand |

#### Cloud Provider Flags
| Flag | Provider | Description | Example |
|------|----------|-------------|---------|
| `--use-bedrock` | **AWS** | Use Amazon Bedrock | `claude --use-bedrock "analyze code"` |
| `--use-vertex` | **GCP** | Use Google Vertex AI | `claude --use-vertex "help deploy"` |

#### Advanced/Experimental Flags
| Flag | Status | Purpose | Example |
|------|--------|---------|---------|
| `--permission-prompt-tool <tool>` | **Advanced** | Custom permission handler | `claude --permission-prompt-tool auth_tool` |
| `--thinking-budget <n>` | **Experimental** | Set thinking token limit | `claude --thinking-budget 50000` |
| `--no-memory` | **Proposed** | Disable CLAUDE.md loading | `claude --no-memory` |
| `--no-tools` | **Proposed** | Exclude tool context | `claude --no-tools` |
| `--no-env` | **Proposed** | Disable environment context | `claude --no-env` |

### Slash Commands (Interactive Mode)

#### Essential Commands
| Command | Purpose | When to Use | Example |
|---------|---------|-------------|---------|
| `/help` | Show all slash commands | Getting started | `/help` |
| `/status` | System information and health | Check everything | `/status` |
| `/clear` | Clear current conversation | Fresh start | `/clear` |
| `/cost` | Token usage and cost stats | Monitor spending | `/cost` |
| `/exit` | Exit Claude safely | Clean shutdown | `/exit` |

#### Configuration Commands
| Command | Purpose | Use Case | Example |
|---------|---------|----------|---------|
| `/config` | View/modify settings | Setup & tuning | `/config` |
| `/config set <key> <value>` | Set configuration | Change settings | `/config set model opus` |
| `/config get <key>` | Get configuration | Check settings | `/config get allowedTools` |
| `/permissions` | Manage tool access | Security control | `/permissions` |
| `/doctor` | Complete health check | Troubleshooting | `/doctor` |

#### Session Management Commands
| Command | Purpose | Pro Tip | Example |
|---------|---------|---------|---------|
| `/undo` | Revert last Claude action | Instant rollback | `/undo` |
| `/compact` | Compress conversation history | Save context tokens | `/compact` |
| `/save <name>` | Save session with name | Create checkpoints | `/save important-debug` |
| `/load <name>` | Load named session | Return to checkpoint | `/load important-debug` |
| `/sessions` | List all sessions | Session management | `/sessions` |

#### Account Management Commands
| Command | Purpose | Use Case | Example |
|---------|---------|----------|---------|
| `/login` | Switch/login accounts | Multi-account usage | `/login` |
| `/logout` | Sign out current account | Security practice | `/logout` |
| `/whoami` | Show current account | Check active account | `/whoami` |

#### Workspace Management Commands
| Command | Purpose | Example | Use Case |
|---------|---------|---------|----------|
| `/add-dir <path>` | Add working directory | `/add-dir ../backend` | Multi-project work |
| `/dirs` | List working directories | `/dirs` | Check workspace |
| `/remove-dir <path>` | Remove working directory | `/remove-dir ../old-code` | Clean workspace |
| `/memory` | Edit memory files | `/memory` | Context management |
| `/memory edit` | Edit CLAUDE.md | `/memory edit` | Update project context |
| `/memory view` | View current memory | `/memory view` | Check context |

#### Model & AI Commands
| Command | Purpose | Example | Use Case |
|---------|---------|---------|----------|
| `/model <name>` | Change AI model | `/model claude-opus-4` | Switch capabilities |
| `/models` | List available models | `/models` | See options |
| `/think` | Extended thinking mode | `/think` | Complex analysis |
| `/upgrade` | Access Claude Max | `/upgrade` | Premium features |

#### Integration Commands
| Command | Integration | Purpose | Example |
|---------|-------------|---------|---------|
| `/mcp` | MCP Servers | Manage MCP connections | `/mcp` |
| `/mcp list` | MCP Servers | List configured servers | `/mcp list` |
| `/mcp add <name> <cmd>` | MCP Servers | Add new server | `/mcp add git "git-mcp-server"` |
| `/mcp remove <name>` | MCP Servers | Remove server | `/mcp remove git` |
| `/ide` | IDE Tools | Manage IDE integrations | `/ide` |

#### GitHub Integration Commands
| Command | Purpose | Example | Use Case |
|---------|---------|---------|----------|
| `/install-github-app` | Setup GitHub integration | `/install-github-app` | Enable GitHub features |
| `/pr-comments` | Get PR comments | `/pr-comments` | Review feedback |
| `/review` | Review pull requests | `/review` | Code review workflow |
| `/github` | GitHub operations | `/github` | Repository management |

#### Interface Commands
| Command | Purpose | For Users Who | Example |
|---------|---------|---------------|---------|
| `/vim` | Enable Vim keybindings | Love Vim | `/vim` |
| `/emacs` | Enable Emacs keybindings | Love Emacs | `/emacs` |
| `/theme <name>` | Change interface theme | Want customization | `/theme dark` |

#### Debugging Commands
| Command | Purpose | When to Use | Example |
|---------|---------|-------------|---------|
| `/bug` | Report issues | Found a problem | `/bug` |
| `/logs` | View recent logs | Troubleshooting | `/logs` |
| `/debug on` | Enable debug mode | Deep troubleshooting | `/debug on` |
| `/debug off` | Disable debug mode | Normal operation | `/debug off` |

#### Initialization Commands
| Command | Purpose | Example | Use Case |
|---------|---------|---------|----------|
| `/init` | Create CLAUDE.md | `/init` | New project setup |
| `/init --template <type>` | Use specific template | `/init --template react` | Templated setup |

#### Custom Commands
| Type | Pattern | Storage Location | Scope | Example |
|------|---------|------------------|--------|---------|
| **Project** | `/project:<command>` | `.claude/commands/` | Current project | `/project:deploy` |
| **Personal** | `/user:<command>` | `~/.claude/commands/` | All projects | `/user:morning` |
| **Team** | `/team:<command>` | Team shared storage | Team projects | `/team:review-checklist` |

#### Example Custom Commands
```bash
# Project-specific workflows
/project:test-all          # Run complete test suite
/project:deploy-staging    # Deploy to staging environment
/project:backup-db         # Create database backup

# Personal shortcuts
/user:morning              # Daily startup routine
/user:cleanup              # End-of-day cleanup
/user:review-setup         # Setup for code review

# Team workflows
/team:standup              # Daily standup checklist
/team:release-checklist    # Release preparation
/team:incident-response    # Incident response procedure
```

#### Experimental/Proposed Commands
| Command | Status | Purpose | Example |
|---------|--------|---------|---------|
| `/terminal-setup` | **Proposed** | Terminal optimizations | `/terminal-setup` |
| `/ai-pair` | **Beta** | AI pair programming mode | `/ai-pair` |
| `/voice` | **Beta** | Voice interaction mode | `/voice` |
| `/collaborate` | **Proposed** | Multi-user sessions | `/collaborate` |

### Keyboard Shortcuts (Interactive Mode)

#### Essential Shortcuts
| Shortcut | Action | Mode | Description |
|----------|--------|------|-------------|
| `Shift+Tab` (1x) | **Auto-Accept** | Skip confirmations | Claude executes without asking |
| `Shift+Tab` (2x) | **Planning** | Analyze without executing | Claude plans but doesn't act |
| `Escape` | **Interrupt** | Stop Claude immediately | Halt any ongoing operation |
| `Escape` (2x) | **History** | Edit previous prompts | Access and modify history |

#### Navigation Shortcuts
| Shortcut | Action | Description |
|----------|--------|-------------|
| `Ctrl+C` | Interrupt | Stop current operation |
| `Ctrl+D` | Exit | Quit Claude gracefully |
| `Ctrl+L` | Clear Screen | Clear terminal display |
| `Ctrl+R` | Search History | Search command history |

#### Editing Shortcuts
| Shortcut | Action | Description |
|----------|--------|-------------|
| `Ctrl+A` | Beginning of Line | Move cursor to start |
| `Ctrl+E` | End of Line | Move cursor to end |
| `Ctrl+U` | Clear Line | Clear current input |
| `Ctrl+W` | Delete Word | Delete previous word |

### Command Examples & Workflows

#### Development Workflow
```bash
# Start new project
claude /init
claude /add-dir src tests docs

# Development session
claude "Review and improve this React component"
# Press Shift+Tab twice for planning mode
# Review plan, then execute

# Git integration
claude --allowedTools "Edit,View,mcp__git__*" \
  "Review my changes and create a commit message"

# Testing and deployment
claude /project:test-all
claude /project:deploy-staging
```

#### Database Analysis Workflow
```bash
# Setup database MCP
claude mcp add postgres "postgres-mcp-server --url $DATABASE_URL"

# Analysis session
claude --allowedTools "mcp__postgres__*,Edit,View" \
  "Analyze the database schema and suggest optimizations"

# Report generation
claude -p "Generate database performance report" \
  --output-format json > db-report.json
```

#### Code Review Workflow
```bash
# Setup for code review
claude --allowedTools "View,mcp__git__*,mcp__github__*" \
  -c  # Continue previous context

# Review specific PR
claude "/pr-comments 123"
claude "Review the changes in PR #123 for security issues"

# Generate review report
claude -p "Create comprehensive code review report" \
  --output-format json > review-report.json
```

---

## ⚙️ Configuration

### Configuration System Overview

Claude Code uses a **hierarchical configuration system**:

1. **Command-line flags** (highest priority)
2. **Environment variables**
3. **Project configuration** (`.claude/settings.json`)
4. **Global configuration** (`~/.claude.json`)
5. **Built-in defaults** (lowest priority)

### Configuration Files

#### Global Configuration
**Location**: `~/.claude.json`  
**Scope**: All projects for current user

```json
{
  "model": "claude-sonnet-4",
  "verbose": true,
  "outputFormat": "text",
  "allowedTools": ["Edit", "View"],
  "disallowedTools": [],
  "maxTurns": 10,
  "thinkingBudget": 50000,
  "security": {
    "requireConfirmation": true,
    "dangerousOperationsAllowed": false
  },
  "ui": {
    "theme": "auto",
    "showCost": true,
    "autoComplete": true
  },
  "network": {
    "timeout": 30000,
    "retries": 3,
    "proxy": null
  }
}
```

#### Project Configuration
**Location**: `.claude/settings.json`  
**Scope**: Current project only

```json
{
  "model": "claude-opus-4",
  "systemPrompt": "You are a senior developer working on this React application",
  "allowedTools": [
    "Edit",
    "View", 
    "Bash(git:*)",
    "Bash(npm:*)",
    "mcp__postgres__*"
  ],
  "addDirs": ["../shared", "../lib", "../tests"],
  "maxTurns": 20,
  "context": {
    "memoryFile": "CLAUDE.md",
    "maxTokens": 128000,
    "compressionEnabled": true
  },
  "mcp": {
    "servers": {
      "postgres": {
        "command": "postgres-mcp-server",
        "args": ["--host", "localhost", "--port", "5432"],
        "env": {
          "POSTGRES_DB": "myapp_dev"
        }
      },
      "git": {
        "command": "git-mcp-server",
        "args": []
      }
    }
  },
  "automation": {
    "preCommitCheck": true,
    "autoFormat": true,
    "testOnSave": false
  }
}
```

#### Authentication Configuration
**Location**: `~/.config/claude-code/auth.json`  
**Purpose**: Store authentication tokens and credentials

```json
{
  "anthropic": {
    "api_key": "sk-ant-api03-...",
    "organization": "org-...",
    "last_login": "2025-06-24T10:00:00Z"
  },
  "cloud_providers": {
    "bedrock": {
      "region": "us-east-1",
      "profile": "default",
      "access_key_id": "AKIA...",
      "session_token": null
    },
    "vertex": {
      "project_id": "my-project",
      "region": "us-central1",
      "service_account_path": "/path/to/service-account.json"
    }
  },
  "integrations": {
    "github": {
      "token": "ghp_...",
      "username": "developer"
    },
    "gitlab": {
      "token": "glpat-...",
      "instance": "gitlab.com"
    }
  }
}
```

### Environment Variables

#### Core Configuration Variables

| Variable | Required | Purpose | Example | Default |
|----------|----------|---------|---------|---------|
| `ANTHROPIC_API_KEY` | **YES** | API Authentication | `sk-ant-api03-xxx` | None |
| `ANTHROPIC_MODEL` | No | Default model | `claude-sonnet-4` | `claude-sonnet-4` |
| `ANTHROPIC_SMALL_FAST_MODEL` | No | Quick operations model | `claude-haiku-3` | `claude-haiku-3` |
| `ANTHROPIC_BASE_URL` | No | API endpoint override | `https://api.anthropic.com` | Official API |

#### Cloud Provider Variables

| Variable | Provider | Purpose | Example |
|----------|----------|---------|---------|
| `CLAUDE_CODE_USE_BEDROCK` | **AWS** | Enable Bedrock | `CLAUDE_CODE_USE_BEDROCK=1` |
| `CLAUDE_CODE_USE_VERTEX` | **GCP** | Enable Vertex AI | `CLAUDE_CODE_USE_VERTEX=1` |
| `CLAUDE_CODE_SKIP_BEDROCK_AUTH` | **AWS** | Skip auth (gateways) | `CLAUDE_CODE_SKIP_BEDROCK_AUTH=1` |
| `CLAUDE_CODE_SKIP_VERTEX_AUTH` | **GCP** | Skip auth (gateways) | `CLAUDE_CODE_SKIP_VERTEX_AUTH=1` |
| `AWS_REGION` | **AWS** | Bedrock region | `AWS_REGION=us-east-1` |
| `AWS_ACCESS_KEY_ID` | **AWS** | AWS credentials | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | **AWS** | AWS credentials | `secret...` |
| `CLAUDE_ML_REGION` | **GCP** | Vertex region | `CLAUDE_ML_REGION=us-central1` |
| `GOOGLE_APPLICATION_CREDENTIALS` | **GCP** | Service account | `/path/to/creds.json` |

#### Privacy & Telemetry Control

| Variable | Privacy Impact | Purpose | Example |
|----------|----------------|---------|---------|
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | **High** | Disable all non-essential traffic | `=1` |
| `CLAUDE_CODE_ENABLE_TELEMETRY` | **Configurable** | Control telemetry | `=0` |
| `DISABLE_TELEMETRY` | **High** | Disable analytics | `=1` |
| `DISABLE_ERROR_REPORTING` | **High** | Disable error reports | `=1` |
| `DISABLE_BUG_COMMAND` | **High** | Disable bug reporting | `=1` |
| `DISABLE_AUTOUPDATER` | **Medium** | Disable auto-updates | `=1` |

#### Performance & Cost Control

| Variable | Impact | Purpose | Example |
|----------|--------|---------|---------|
| `DISABLE_NON_ESSENTIAL_MODEL_CALLS` | **Saves Money** | Reduce API calls | `=1` |
| `DISABLE_PROMPT_CACHING` | **Costs More** | Disable caching | `=1` |
| `DISABLE_COST_WARNINGS` | **UX** | Hide cost alerts | `=1` |
| `MAX_THINKING_TOKENS` | **Cost/Performance** | Thinking budget | `=50000` |
| `MCP_TIMEOUT` | **Performance** | MCP startup timeout | `=10000` |

#### Network & Proxy Configuration

| Variable | Protocol | Purpose | Example |
|----------|----------|---------|---------|
| `HTTP_PROXY` | HTTP | HTTP proxy | `http://proxy.company.com:8080` |
| `HTTPS_PROXY` | HTTPS | HTTPS proxy | `https://proxy.company.com:8443` |
| `ALL_PROXY` | SOCKS | SOCKS proxy | `socks5://proxy.company.com:1080` |
| `NO_PROXY` | Exclusions | Proxy exclusions | `localhost,127.0.0.1,*.company.com` |

#### Advanced Configuration Variables

| Variable | Purpose | Example | Notes |
|----------|---------|---------|--------|
| `CLAUDE_CODE_CONFIG_DIR` | Custom config directory | `/custom/config` | Override default |
| `CLAUDE_CODE_LOG_LEVEL` | Logging level | `debug` | trace, debug, info, warn, error |
| `CLAUDE_CODE_LOG_FILE` | Custom log file | `/var/log/claude.log` | Override default |
| `CLAUDE_CODE_CACHE_DIR` | Custom cache directory | `/tmp/claude-cache` | Override default |

### Configuration Management Commands

#### Basic Configuration
```bash
# Interactive configuration
claude config

# List all settings
claude config list

# Get specific value
claude config get <key>
claude config get model
claude config get allowedTools

# Set values
claude config set <key> <value>              # Project scope
claude config set -g <key> <value>           # Global scope
claude config set model claude-sonnet-4
claude config set -g outputFormat json

# Manage lists
claude config add <key> <value>              # Add to list
claude config remove <key> <value>           # Remove from list
claude config add allowedTools "Edit"
claude config remove disallowedTools "Bash"
```

#### Advanced Configuration
```bash
# Configuration validation
claude config validate                       # Check config validity
claude config migrate                        # Migrate old config format

# Import/export
claude config export > my-config.json       # Export configuration
claude config import my-config.json         # Import configuration

# Reset configuration
claude config reset                          # Reset to defaults
claude config reset --global                # Reset global config
claude config reset --project               # Reset project config
```

### Configuration Templates

#### Development Environment Template
```json
{
  "model": "claude-sonnet-4",
  "allowedTools": [
    "Edit",
    "View",
    "Bash(git:*)",
    "Bash(npm:*)",
    "Bash(yarn:*)",
    "mcp__git__*"
  ],
  "maxTurns": 20,
  "verbose": true,
  "systemPrompt": "You are an expert developer. Always explain your reasoning and suggest best practices.",
  "context": {
    "maxTokens": 128000,
    "compressionEnabled": true
  }
}
```

#### Production/CI Template
```json
{
  "model": "claude-sonnet-4",
  "allowedTools": [
    "Edit",
    "View",
    "Bash(git:status)",
    "Bash(git:log)",
    "mcp__git__status",
    "mcp__git__log"
  ],
  "maxTurns": 5,
  "verbose": false,
  "outputFormat": "json",
  "security": {
    "requireConfirmation": false,
    "dangerousOperationsAllowed": false
  }
}
```

#### Data Analysis Template
```json
{
  "model": "claude-opus-4",
  "allowedTools": [
    "Edit",
    "View",
    "mcp__postgres__*",
    "mcp__pandas__*",
    "mcp__csv__*"
  ],
  "maxTurns": 30,
  "thinkingBudget": 128000,
  "systemPrompt": "You are a data scientist. Focus on statistical accuracy and clear visualizations."
}
```

### MCP Configuration

#### MCP Server Configuration File
**Location**: `.claude/mcp.json`

```json
{
  "mcpServers": {
    "git": {
      "command": "git-mcp-server",
      "args": [],
      "env": {},
      "enabled": true,
      "autoRestart": true,
      "timeout": 10000
    },
    "postgres": {
      "command": "postgres-mcp-server",
      "args": [
        "--host", "localhost",
        "--port", "5432",
        "--database", "myapp_development"
      ],
      "env": {
        "POSTGRES_USER": "developer",
        "POSTGRES_PASSWORD": "${POSTGRES_PASSWORD}",
        "SSL_MODE": "prefer"
      },
      "enabled": true,
      "healthCheck": {
        "enabled": true,
        "interval": 30000,
        "timeout": 5000
      }
    },
    "browser": {
      "command": "puppeteer-mcp-server",
      "args": ["--headless", "--no-sandbox"],
      "env": {
        "DISPLAY": ":99"
      },
      "enabled": true,
      "resources": {
        "memory": "1GB",
        "cpu": "1"
      }
    },
    "api_gateway": {
      "transport": "http",
      "url": "http://localhost:3001/mcp",
      "headers": {
        "Authorization": "Bearer ${API_TOKEN}",
        "Content-Type": "application/json"
      },
      "enabled": true,
      "retry": {
        "attempts": 3,
        "delay": 1000
      }
    },
    "realtime_service": {
      "transport": "sse",
      "url": "ws://localhost:8080/mcp-sse",
      "enabled": true,
      "reconnect": true,
      "reconnectInterval": 5000
    }
  },
  "global": {
    "timeout": 30000,
    "maxConcurrentServers": 10,
    "healthCheckInterval": 60000,
    "logLevel": "info"
  }
}
```

#### MCP Environment Variables File
**Location**: `~/.claude-code-mcp.env`

```bash
# Database connections
POSTGRES_PASSWORD=dev_password_123
MYSQL_PASSWORD=mysql_secret
MONGODB_URI=mongodb://localhost:27017/myapp

# API tokens
GITHUB_TOKEN=ghp_your_github_token
GITLAB_TOKEN=glpat_your_gitlab_token
JIRA_TOKEN=your_jira_token

# Cloud service credentials
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=secret...
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json

# Service endpoints
API_GATEWAY_URL=https://api.company.com
ELASTICSEARCH_URL=http://localhost:9200

# Feature flags
ENABLE_EXPERIMENTAL_FEATURES=true
DEBUG_MCP_CONNECTIONS=false
```

### Context Management Configuration

#### Memory Configuration
```json
{
  "context": {
    "memoryFile": "CLAUDE.md",
    "maxTokens": 128000,
    "compressionEnabled": true,
    "compressionRatio": 0.7,
    "retentionDays": 30,
    "autoSave": true,
    "backupEnabled": true,
    "backupInterval": 3600
  },
  "memory": {
    "shortTerm": {
      "maxTokens": 32000,
      "retentionMinutes": 60
    },
    "longTerm": {
      "maxTokens": 96000,
      "compressionEnabled": true
    },
    "persistent": {
      "enabled": true,
      "file": "CLAUDE.md",
      "autoUpdate": true
    }
  }
}
```

#### Context7 Integration (Advanced Context Management)
```json
{
  "context7": {
    "enabled": true,
    "memorySize": 1000,
    "windowSize": 128000,
    "compressionAlgorithm": "semantic",
    "priorityWeights": {
      "recency": 0.3,
      "relevance": 0.4,
      "importance": 0.3
    },
    "indexing": {
      "enabled": true,
      "vectorSize": 1536,
      "similarity": "cosine"
    }
  }
}
```

### Configuration Validation

#### Validation Commands
```bash
# Validate current configuration
claude config validate

# Validate specific config file
claude config validate ~/.claude.json
claude config validate .claude/settings.json

# Check for deprecated settings
claude config check-deprecated

# Verify MCP configuration
claude mcp validate
```

#### Common Configuration Issues
```bash
# Fix common issues
claude config fix                           # Auto-fix issues
claude config migrate                       # Migrate old format
claude config reset-permissions             # Reset tool permissions
claude config clean                         # Remove invalid entries
```

### Environment-Specific Configurations

#### Development Environment
```bash
# Development-specific settings
export CLAUDE_CODE_LOG_LEVEL=debug
export CLAUDE_CODE_ENABLE_TELEMETRY=1
export DISABLE_COST_WARNINGS=1
claude config set verbose true
claude config set allowedTools "Edit,View,Bash,mcp__*__*"
```

#### Staging Environment
```bash
# Staging-specific settings
export CLAUDE_CODE_LOG_LEVEL=info
export DISABLE_NON_ESSENTIAL_MODEL_CALLS=1
claude config set maxTurns 10
claude config set allowedTools "Edit,View,mcp__git__status"
```

#### Production Environment
```bash
# Production-specific settings
export CLAUDE_CODE_LOG_LEVEL=warn
export DISABLE_TELEMETRY=1
export DISABLE_ERROR_REPORTING=1
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
claude config set maxTurns 5
claude config set allowedTools "View,mcp__monitoring__*"
claude config set outputFormat json
```

---

## 🔒 Security & Permissions

### Security Model Overview

Claude Code implements a **multi-layered security model**:

1. **Tool Permission System** - Controls what Claude can do
2. **Network Security** - Controls external connections
3. **File System Access** - Controls file operations
4. **MCP Security** - Controls external integrations
5. **Environment Isolation** - Sandboxing and containers

### Permission System

#### How Permissions Work

**Default Behavior**: Claude asks for permission before using tools
**Permission Memory**: Granted permissions are remembered per session
**Dangerous Operations**: Always require confirmation (unless bypassed)

#### Permission Levels

| Level | Description | Risk | Use Case |
|-------|-------------|------|----------|
| **Interactive** | Prompt for each operation | **Low** | Development work |
| **Allowlist** | Pre-approved tools only | **Medium** | Automation scripts |
| **Auto-Accept** | Skip confirmations (`Shift+Tab`) | **High** | Trusted workflows |
| **Dangerous** | Skip all permissions | **CRITICAL** | Containers only |

#### Tool Permission Patterns

##### Basic Patterns
```bash
# Allow specific tools
claude --allowedTools "Edit,View"

# Allow tool categories
claude --allowedTools "Edit,View,Bash"

# Deny specific tools
claude --disallowedTools "Bash"
```

##### Advanced Patterns
```bash
# Scoped permissions (Git operations only)
claude --allowedTools "Bash(git:*)"

# Multiple scopes
claude --allowedTools "Bash(git:*),Bash(npm:*)"

# MCP tool permissions
claude --allowedTools "mcp__postgres__query,mcp__git__status"

# Wildcard MCP permissions
claude --allowedTools "mcp__postgres__*"

# Read-only patterns
claude --allowedTools "View,mcp__*__read,mcp__*__query"
```

##### Complex Permission Examples
```bash
# Development workflow
claude --allowedTools "Edit,View,Bash(git:*),Bash(npm:*),mcp__git__*"

# Database analysis (read-only)
claude --allowedTools "View,mcp__postgres__query,mcp__postgres__schema"

# CI/CD pipeline
claude --allowedTools "Edit,View,Bash(git:status),Bash(npm:test),mcp__git__status"

# Security audit (read-only)
claude --allowedTools "View,mcp__*__read,mcp__*__list"
```

### Dangerous Mode (Critical Security Feature)

#### ⚠️ `--dangerously-skip-permissions`

**What it does**: Bypasses ALL security checks
**Risk Level**: **CRITICAL** - Can cause data loss, security breaches, system damage

#### Safe Usage Guidelines

**✅ Safe Environments:**
```bash
# Isolated Docker container
docker run --rm -it --network none claude-container \
  claude --dangerously-skip-permissions "fix all issues"

# Dedicated VM
# Virtual machine with no sensitive data or network access

# Disposable environment
# Environment that can be destroyed after use
```

**❌ NEVER Use With:**
- Production systems
- Systems with sensitive data
- Internet-connected systems
- Shared development machines
- Systems with important files

#### Safer Alternatives to Dangerous Mode

```bash
# Instead of dangerous mode, use specific allowlists
claude --allowedTools "Edit,View,Bash(git:*),Bash(npm:*)"

# Use auto-accept mode for trusted workflows
claude "fix linting errors"
# Press Shift+Tab once for auto-accept

# Use planning mode first
claude "analyze and suggest fixes"
# Press Shift+Tab twice for planning mode
# Review plan, then execute
```

### Security Best Practices

#### 1. Principle of Least Privilege
```bash
# Good: Specific permissions
claude --allowedTools "Edit,View,Bash(git:status)"

# Bad: Broad permissions
claude --allowedTools "Bash"

# Good: Read-only analysis
claude --allowedTools "View,mcp__postgres__query"

# Bad: Full database access
claude --allowedTools "mcp__postgres__*"
```

#### 2. Environment Isolation
```bash
# Development container
docker run --rm -v $(pwd):/workspace \
  -e ANTHROPIC_API_KEY="$ANTHROPIC_API_KEY" \
  claude-container claude --allowedTools "Edit,View,Bash(git:*)"

# Network isolation
docker run --rm --network none \
  claude-container claude --dangerously-skip-permissions
```

#### 3. Regular Security Audits
```bash
# Check current permissions
claude /permissions

# Review configuration
claude config get allowedTools
claude config get disallowedTools

# Security health check
claude /doctor

# Review MCP servers
claude mcp status
```

#### 4. Sensitive Data Protection
```bash
# Use environment variables for secrets
export DB_PASSWORD="secret123"
claude mcp add postgres "postgres-mcp-server --password-env DB_PASSWORD"

# Avoid embedding secrets in commands
# Good:
claude config set -g githubToken "${GITHUB_TOKEN}"

# Bad:
claude config set -g githubToken "ghp_actual_token_here"
```

### MCP Security

#### MCP Server Security
```bash
# Secure MCP configuration
claude config set mcpSecurity.requireAuth true
claude config set mcpSecurity.timeout 30000
claude config set mcpSecurity.maxConnections 5

# Network restrictions
claude config set mcpSecurity.allowedHosts "localhost,*.company.com"
claude config set mcpSecurity.allowedPorts "3000-3999,5432"

# SSL/TLS requirements
claude config set mcpSecurity.requireSSL true
claude config set mcpSecurity.verifySSL true
```

#### MCP Authentication
```bash
# Token-based authentication
export MCP_AUTH_TOKEN="your-secure-token"
claude mcp add secure-api "api-mcp-server --auth-token $MCP_AUTH_TOKEN"

# Certificate-based authentication
claude mcp add secure-db "postgres-mcp-server \
  --ssl-cert /path/to/client.crt \
  --ssl-key /path/to/client.key \
  --ssl-ca /path/to/ca.crt"
```

### Network Security

#### Proxy Configuration
```bash
# Corporate proxy (HTTP/HTTPS)
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="https://proxy.company.com:8443"
export NO_PROXY="localhost,127.0.0.1,*.company.com"

# SOCKS proxy
export ALL_PROXY="socks5://proxy.company.com:1080"

# Authenticated proxy
export HTTP_PROXY="http://username:password@proxy.company.com:8080"
```

#### Network Restrictions
```bash
# Disable non-essential network traffic
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1

# Network timeout configuration
claude config set network.timeout 30000
claude config set network.retries 3

# Restrict outbound connections
claude config set network.allowedDomains "api.anthropic.com,*.company.com"
```

### File System Security

#### File Access Controls
```bash
# Restrict file operations to specific directories
claude --add-dir ./src ./tests --allowedTools "Edit,View"

# Read-only file access
claude --allowedTools "View"

# Specific file patterns
claude config set fileAccess.allowedPatterns "*.js,*.ts,*.json"
claude config set fileAccess.deniedPatterns "*.env,*.key,*.pem"
```

#### Sensitive File Protection
```bash
# Exclude sensitive files from Claude's access
echo "*.env
*.key
*.pem
secrets.json
.ssh/*" > .claude/ignored-files

# Use .gitignore patterns
claude config set fileAccess.respectGitignore true
```

### Security Monitoring

#### Audit Logging
```bash
# Enable comprehensive logging
export CLAUDE_CODE_LOG_LEVEL=debug
claude config set security.auditLog true
claude config set security.logFile "/var/log/claude-audit.log"

# Monitor security events
tail -f ~/.claude/logs/security.log | grep "SECURITY"
```

#### Permission Tracking
```bash
# Track permission grants
claude config set security.trackPermissions true

# Review permission history
claude /permissions history

# Export permission report
claude config export-permissions > permissions-report.json
```

### Security Configuration Examples

#### High-Security Environment
```json
{
  "security": {
    "requireConfirmation": true,
    "dangerousOperationsAllowed": false,
    "auditLog": true,
    "trackPermissions": true
  },
  "allowedTools": ["View"],
  "disallowedTools": ["Bash", "mcp__*__write", "mcp__*__delete"],
  "network": {
    "allowedDomains": ["api.anthropic.com"],
    "timeout": 10000,
    "retries": 1
  },
  "fileAccess": {
    "readOnly": true,
    "allowedPatterns": ["*.md", "*.txt", "*.json"],
    "respectGitignore": true
  }
}
```

#### Development Environment (Balanced Security)
```json
{
  "security": {
    "requireConfirmation": true,
    "dangerousOperationsAllowed": false
  },
  "allowedTools": [
    "Edit",
    "View",
    "Bash(git:*)",
    "Bash(npm:*)",
    "mcp__git__*",
    "mcp__postgres__query"
  ],
  "network": {
    "timeout": 30000,
    "retries": 3
  },
  "fileAccess": {
    "allowedPatterns": ["src/**", "tests/**", "docs/**"],
    "deniedPatterns": ["*.env", "*.key", ".ssh/*"]
  }
}
```

#### CI/CD Environment
```json
{
  "security": {
    "requireConfirmation": false,
    "auditLog": true,
    "maxExecutionTime": 300
  },
  "allowedTools": [
    "View",
    "Edit",
    "Bash(git:status)",
    "Bash(npm:test)",
    "mcp__git__status"
  ],
  "outputFormat": "json",
  "maxTurns": 5
}
```

### Security Incident Response

#### Immediate Response
```bash
# Emergency stop
claude /exit
pkill claude

# Review recent activity
claude config get sessions
tail -100 ~/.claude/logs/claude-code.log

# Check file modifications
find . -mtime -1 -type f -exec ls -la {} \;
```

#### Security Reset
```bash
# Reset all permissions
claude config remove allowedTools
claude config remove disallowedTools

# Reset MCP servers
claude mcp remove --all

# Clear sensitive data
rm -rf ~/.claude/cache/*
rm -rf ~/.claude/sessions/*

# Regenerate API keys
# Visit https://console.anthropic.com and rotate keys
```

#### Post-Incident Analysis
```bash
# Generate security report
claude config export-security-report > security-incident-report.json

# Review audit logs
grep "SECURITY\|ERROR\|WARN" ~/.claude/logs/claude-code.log

# Check for unauthorized changes
git log --since="1 day ago" --oneline
```

---

## 🤖 Automation & Scripting

### CI/CD Integration

#### GitHub Actions Integration

**Setup GitHub Actions Workflow** (`.github/workflows/claude-review.yml`):
```yaml
name: Claude Code Review
on:
  pull_request:
    branches: [main, develop]

jobs:
  claude-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install Claude Code
        run: npm install -g @anthropic/claude-code
      
      - name: Run Claude Code Review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude -p "Review the changes in this PR for security issues, bugs, and code quality" \
            --allowedTools "View,mcp__git__*" \
            --output-format json > review-results.json
      
      - name: Comment PR
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(fs.readFileSync('review-results.json', 'utf8'));
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `## 🤖 Claude Code Review\n\n${review.response}`
            });
```

#### GitLab CI Integration

**GitLab CI Configuration** (`.gitlab-ci.yml`):
```yaml
stages:
  - test
  - review
  - deploy

claude-review:
  stage: review
  image: node:18
  before_script:
    - npm install -g @anthropic/claude-code
  script:
    - |
      claude -p "Analyze this merge request for security vulnerabilities and code quality issues" \
        --allowedTools "View,mcp__git__*" \
        --output-format json > review-results.json
    - |
      if jq -e '.issues[]' review-results.json > /dev/null; then
        echo "Code review found issues:"
        jq -r '.issues[].message' review-results.json
        exit 1
      fi
  artifacts:
    reports:
      codequality: review-results.json
    expire_in: 1 week
  only:
    - merge_requests
```

#### Jenkins Pipeline Integration

**Jenkinsfile**:
```groovy
pipeline {
    agent any
    
    environment {
        ANTHROPIC_API_KEY = credentials('anthropic-api-key')
    }
    
    stages {
        stage('Setup') {
            steps {
                sh 'npm install -g @anthropic/claude-code'
            }
        }
        
        stage('Code Review') {
            steps {
                script {
                    def reviewResult = sh(
                        script: '''
                            claude -p "Review this codebase for security issues and suggest improvements" \
                                --allowedTools "View,mcp__git__*" \
                                --output-format json
                        ''',
                        returnStdout: true
                    ).trim()
                    
                    def review = readJSON text: reviewResult
                    
                    if (review.issues) {
                        currentBuild.result = 'UNSTABLE'
                        publishHTML([
                            allowMissing: false,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: '.',
                            reportFiles: 'review-results.html',
                            reportName: 'Claude Review Report'
                        ])
                    }
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
                expression { currentBuild.result != 'UNSTABLE' }
            }
            steps {
                sh '''
                    claude -p "Execute deployment with safety checks" \
                        --allowedTools "Edit,View,Bash(git:*),Bash(npm:*)" \
                        --max-turns 10
                '''
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'review-results.json', allowEmptyArchive: true
        }
    }
}
```

### Automated Code Analysis

#### Pre-commit Hooks

**Setup Pre-commit Hook** (`.git/hooks/pre-commit`):
```bash
#!/bin/bash
# .git/hooks/pre-commit

set -e

# Get list of staged files
staged_files=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$staged_files" ]; then
    exit 0
fi

echo "🤖 Running Claude Code analysis on staged files..."

# Analyze staged files
analysis=$(echo "$staged_files" | xargs cat | \
    claude -p "Review these changes for issues before commit. Focus on security, bugs, and style." \
    --allowedTools "View" \
    --output-format json)

# Check for critical issues
if echo "$analysis" | jq -e '.critical_issues[]' > /dev/null 2>&1; then
    echo "❌ Critical issues found:"
    echo "$analysis" | jq -r '.critical_issues[].message'
    echo ""
    echo "Commit blocked. Please fix these issues and try again."
    exit 1
fi

# Check for warnings
if echo "$analysis" | jq -e '.warnings[]' > /dev/null 2>&1; then
    echo "⚠️  Warnings found:"
    echo "$analysis" | jq -r '.warnings[].message'
    echo ""
    read -p "Continue with commit? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "✅ Code analysis passed"
```

#### Automated Fix Scripts

**Auto-fix Script** (`scripts/auto-fix.sh`):
```bash
#!/bin/bash
# scripts/auto-fix.sh

set -e

echo "🔧 Running automated fixes..."

# Backup current state
git stash push -m "Before auto-fix $(date)"

# Run Claude auto-fix
claude -p "Fix all linting errors, formatting issues, and simple bugs in this codebase" \
    --allowedTools "Edit,View,Bash(npm:*),Bash(git:*)" \
    --max-turns 20 \
    --output-format json > fix-results.json

# Check if fixes were successful
if jq -e '.success' fix-results.json > /dev/null; then
    echo "✅ Auto-fix completed successfully"
    
    # Show what was changed
    git diff --stat
    
    # Commit fixes
    git add -A
    git commit -m "Auto-fix: $(jq -r '.summary' fix-results.json)"
    
    # Drop the stash
    git stash drop
else
    echo "❌ Auto-fix failed, restoring previous state"
    git stash pop
    exit 1
fi
```

### Monitoring & Logging

#### System Monitoring Script

**Monitoring Script** (`scripts/monitor.sh`):
```bash
#!/bin/bash
# scripts/monitor.sh

LOGFILE="/var/log/claude-monitor.log"
ALERT_EMAIL="admin@company.com"

while true; do
    # Collect system metrics
    metrics=$(cat << EOF
{
    "timestamp": "$(date -Iseconds)",
    "cpu_usage": $(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1),
    "memory_usage": $(free | grep Mem | awk '{printf "%.2f", $3/$2 * 100.0}'),
    "disk_usage": $(df -h / | awk 'NR==2{print $5}' | cut -d'%' -f1),
    "load_average": "$(uptime | awk -F'load average:' '{print $2}')",
    "active_connections": $(netstat -an | grep ESTABLISHED | wc -l)
}
EOF
    )
    
    # Analyze metrics with Claude
    analysis=$(echo "$metrics" | \
        claude -p "Analyze these system metrics and alert if anything is concerning" \
        --allowedTools "View" \
        --output-format json)
    
    # Log analysis
    echo "$analysis" >> "$LOGFILE"
    
    # Check for alerts
    if echo "$analysis" | jq -e '.alerts[]' > /dev/null; then
        alert_message=$(echo "$analysis" | jq -r '.alerts[].message')
        echo "ALERT: $alert_message" | mail -s "System Alert" "$ALERT_EMAIL"
    fi
    
    # Wait 5 minutes
    sleep 300
done
```

#### Log Analysis Automation

**Log Analysis Script** (`scripts/analyze-logs.sh`):
```bash
#!/bin/bash
# scripts/analyze-logs.sh

# Analyze different types of logs
analyze_application_logs() {
    echo "📊 Analyzing application logs..."
    
    tail -1000 /var/log/app.log | \
        claude -p "Analyze these application logs for errors, patterns, and issues" \
        --allowedTools "View" \
        --output-format json > app-log-analysis.json
}

analyze_security_logs() {
    echo "🔒 Analyzing security logs..."
    
    sudo tail -500 /var/log/auth.log | \
        claude -p "Analyze these security logs for suspicious activity" \
        --allowedTools "View" \
        --output-format json > security-log-analysis.json
}

analyze_performance_logs() {
    echo "⚡ Analyzing performance logs..."
    
    tail -500 /var/log/nginx/access.log | \
        claude -p "Analyze these access logs for performance issues and patterns" \
        --allowedTools "View" \
        --output-format json > performance-log-analysis.json
}

# Generate comprehensive report
generate_report() {
    echo "📄 Generating comprehensive report..."
    
    claude -p "Create a comprehensive system health report based on these log analyses" \
        --allowedTools "View,Edit" \
        app-log-analysis.json security-log-analysis.json performance-log-analysis.json
}

# Run all analyses
analyze_application_logs
analyze_security_logs  
analyze_performance_logs
generate_report
```

### Database Maintenance Automation

#### Database Health Check

**Database Monitoring** (`scripts/db-health.sh`):
```bash
#!/bin/bash
# scripts/db-health.sh

export POSTGRES_URL="postgresql://user:pass@localhost:5432/mydb"

# Setup PostgreSQL MCP
claude mcp add postgres "postgres-mcp-server --url $POSTGRES_URL"

# Comprehensive database analysis
claude -p "Perform a comprehensive database health check including:
- Query performance analysis
- Index optimization suggestions  
- Table statistics review
- Connection analysis
- Storage optimization recommendations" \
    --allowedTools "mcp__postgres__*,Edit,View" \
    --output-format json > db-health-report.json

# Check for critical issues
if jq -e '.critical_issues[]' db-health-report.json > /dev/null; then
    echo "🚨 Critical database issues found!"
    jq -r '.critical_issues[].message' db-health-report.json
    
    # Send alert
    mail -s "Critical Database Issues" admin@company.com < db-health-report.json
fi

# Apply safe optimizations
if jq -e '.safe_optimizations[]' db-health-report.json > /dev/null; then
    echo "🔧 Applying safe optimizations..."
    
    claude -p "Apply the safe optimizations identified in the health check" \
        --allowedTools "mcp__postgres__*" \
        --max-turns 10
fi
```

### Deployment Automation

#### Automated Deployment Pipeline

**Deployment Script** (`scripts/deploy.sh`):
```bash
#!/bin/bash
# scripts/deploy.sh

ENVIRONMENT=${1:-staging}
BRANCH=${2:-main}

echo "🚀 Starting deployment to $ENVIRONMENT from $BRANCH"

# Pre-deployment checks
claude -p "Perform pre-deployment checks:
- Verify all tests pass
- Check for security vulnerabilities
- Validate configuration
- Ensure database migrations are ready" \
    --allowedTools "View,Bash(git:*),Bash(npm:*),mcp__git__*" \
    --output-format json > pre-deployment-check.json

# Check if pre-deployment passed
if ! jq -e '.ready_for_deployment' pre-deployment-check.json > /dev/null; then
    echo "❌ Pre-deployment checks failed"
    jq -r '.issues[].message' pre-deployment-check.json
    exit 1
fi

# Execute deployment
case $ENVIRONMENT in
    "staging")
        deploy_to_staging
        ;;
    "production")
        deploy_to_production
        ;;
    *)
        echo "Unknown environment: $ENVIRONMENT"
        exit 1
        ;;
esac

# Post-deployment verification
claude -p "Verify deployment success:
- Check application health endpoints
- Verify database connectivity
- Test critical user flows
- Monitor error rates" \
    --allowedTools "mcp__http__*,mcp__postgres__*,View" \
    --output-format json > post-deployment-check.json

# Report results
if jq -e '.deployment_successful' post-deployment-check.json > /dev/null; then
    echo "✅ Deployment to $ENVIRONMENT completed successfully"
    
    # Send success notification
    slack_notify "✅ Deployment to $ENVIRONMENT completed successfully"
else
    echo "❌ Deployment verification failed"
    jq -r '.issues[].message' post-deployment-check.json
    
    # Initiate rollback
    echo "🔄 Initiating rollback..."
    rollback_deployment
fi
```

### Batch Processing Scripts

#### File Processing Automation

**Batch File Processor** (`scripts/process-files.sh`):
```bash
#!/bin/bash
# scripts/process-files.sh

DIRECTORY=${1:-.}
PATTERN=${2:-"*.js"}

echo "📁 Processing files matching $PATTERN in $DIRECTORY"

# Find and process files
find "$DIRECTORY" -name "$PATTERN" -type f | while read -r file; do
    echo "Processing: $file"
    
    # Analyze and improve each file
    claude -p "Analyze and improve this file:
    - Fix any bugs or issues
    - Improve code quality and readability
    - Add documentation if missing
    - Optimize performance where possible" \
        --allowedTools "Edit,View" \
        --max-turns 5 \
        < "$file"
    
    # Validate changes
    if [[ "$file" == *.js ]]; then
        # Validate JavaScript syntax
        node -c "$file" || {
            echo "❌ Syntax error in $file, reverting changes"
            git checkout "$file"
        }
    fi
done

echo "✅ Batch processing completed"
```

#### Data Migration Automation

**Data Migration Script** (`scripts/migrate-data.sh`):
```bash
#!/bin/bash
# scripts/migrate-data.sh

SOURCE_DB="postgresql://user:pass@old-server:5432/olddb"
TARGET_DB="postgresql://user:pass@new-server:5432/newdb"

# Setup MCP servers for both databases
claude mcp add source_db "postgres-mcp-server --url $SOURCE_DB"
claude mcp add target_db "postgres-mcp-server --url $TARGET_DB"

# Plan migration
claude -p "Analyze both databases and create a comprehensive data migration plan:
- Compare schemas
- Identify data transformation needs
- Plan migration order to handle dependencies
- Estimate migration time and resources" \
    --allowedTools "mcp__source_db__*,mcp__target_db__*,Edit,View" \
    --output-format json > migration-plan.json

# Execute migration
if jq -e '.migration_approved' migration-plan.json > /dev/null; then
    echo "🔄 Executing data migration..."
    
    claude -p "Execute the data migration plan with these requirements:
    - Maintain data integrity
    - Handle errors gracefully
    - Provide progress updates
    - Create rollback points" \
        --allowedTools "mcp__source_db__*,mcp__target_db__*,Edit,View" \
        --max-turns 50 \
        --output-format stream-json | tee migration-log.json
    
    # Verify migration
    claude -p "Verify migration success:
    - Compare record counts
    - Validate data integrity
    - Test application functionality
    - Generate migration report" \
        --allowedTools "mcp__source_db__*,mcp__target_db__*,View" \
        --output-format json > migration-verification.json
else
    echo "❌ Migration plan not approved"
    jq -r '.issues[].message' migration-plan.json
fi
```

### Container & Docker Integration

#### Docker Health Monitoring

**Docker Monitor Script** (`scripts/docker-monitor.sh`):
```bash
#!/bin/bash
# scripts/docker-monitor.sh

# Setup Docker MCP
claude mcp add docker "docker-mcp-server"

# Monitor containers
while true; do
    echo "🐳 Monitoring Docker containers..."
    
    claude -p "Monitor Docker environment:
    - Check container health status
    - Analyze resource usage
    - Identify performance issues
    - Suggest optimizations
    - Alert on critical issues" \
        --allowedTools "mcp__docker__*,View" \
        --output-format json > docker-status.json
    
    # Check for alerts
    if jq -e '.alerts[]' docker-status.json > /dev/null; then
        echo "🚨 Docker alerts detected!"
        jq -r '.alerts[].message' docker-status.json
        
        # Auto-remediation for common issues
        claude -p "Automatically remediate common Docker issues found in the monitoring report" \
            --allowedTools "mcp__docker__*" \
            --max-turns 5
    fi
    
    sleep 300  # Check every 5 minutes
done
```

#### Automated Docker Builds

**Docker Build Automation** (`scripts/docker-build.sh`):
```bash
#!/bin/bash
# scripts/docker-build.sh

IMAGE_NAME=${1:-myapp}
TAG=${2:-latest}

echo "🏗️ Building Docker image: $IMAGE_NAME:$TAG"

# Optimize Dockerfile
claude -p "Analyze and optimize this Dockerfile:
- Improve build performance
- Reduce image size
- Enhance security
- Follow best practices" \
    --allowedTools "Edit,View" \
    Dockerfile

# Build with analysis
docker build -t "$IMAGE_NAME:$TAG" . 2>&1 | tee build.log

# Analyze build
claude -p "Analyze this Docker build log for issues and optimization opportunities" \
    --allowedTools "View" \
    --output-format json \
    build.log > build-analysis.json

# Security scan
claude -p "Perform security analysis of the built Docker image" \
    --allowedTools "mcp__docker__*,View" \
    --output-format json > security-scan.json

# Generate report
claude -p "Create comprehensive Docker build report including build analysis and security scan" \
    --allowedTools "Edit,View" \
    build-analysis.json security-scan.json > build-report.md

echo "✅ Docker build completed. Report: build-report.md"
```

### Performance Optimization Automation

#### Automated Performance Testing

**Performance Test Script** (`scripts/performance-test.sh`):
```bash
#!/bin/bash
# scripts/performance-test.sh

URL=${1:-"http://localhost:3000"}
DURATION=${2:-"5m"}

echo "⚡ Running performance tests against $URL for $DURATION"

# Setup monitoring
claude mcp add http "http-client-mcp-server"

# Run performance test
claude -p "Execute comprehensive performance testing:
- Load testing with gradual ramp-up
- Stress testing to find breaking points
- Endurance testing for memory leaks
- Spike testing for traffic bursts
- Monitor response times and error rates" \
    --allowedTools "mcp__http__*,Edit,View" \
    --max-turns 30 \
    --output-format stream-json | tee performance-test.log

# Analyze results
claude -p "Analyze performance test results and provide optimization recommendations" \
    --allowedTools "View,Edit" \
    --output-format json \
    performance-test.log > performance-analysis.json

# Generate optimization plan
if jq -e '.performance_issues[]' performance-analysis.json > /dev/null; then
    claude -p "Create detailed performance optimization plan based on test results" \
        --allowedTools "Edit,View" \
        performance-analysis.json > optimization-plan.md
    
    echo "📊 Performance issues found. See optimization-plan.md"
else
    echo "✅ Performance tests passed without issues"
fi
```

---

## 🔧 Troubleshooting

### Diagnostic Commands

#### Essential Health Checks

| Command | Purpose | When to Use | Expected Output |
|---------|---------|-------------|-----------------|
| `claude /doctor` | Complete system health check | First step for any issue | ✅ All systems operational |
| `claude /status` | Current configuration overview | Check settings and state | Configuration summary |
| `claude --help` | Show all available options | Get help with commands | Help documentation |
| `claude config list` | List all configuration settings | Audit configuration | All settings displayed |
| `claude --version` | Show Claude Code version | Version compatibility check | claude-code v1.0.25 |

#### Advanced Diagnostics

```bash
# Comprehensive diagnostic
claude /doctor --verbose

# Network connectivity test
claude -p "test connection" --verbose

# MCP server diagnostics
claude --mcp-debug /doctor

# Configuration validation
claude config validate

# Permission audit
claude /permissions --detailed
```

### Common Issues & Solutions

#### 1. Authentication Issues

**Problem**: `Authentication failed` or `Invalid API key`

**Diagnosis**:
```bash
# Check API key
echo $ANTHROPIC_API_KEY
# Should show: sk-ant-api03-...

# Validate key format
if [[ $ANTHROPIC_API_KEY =~ ^sk-ant-api03-.{95}$ ]]; then
    echo "✅ API key format is valid"
else
    echo "❌ Invalid API key format"
fi

# Test API connection
claude -p "hello" --verbose
```

**Solutions**:
```bash
# Reset authentication
rm -rf ~/.config/claude-code/auth.json
claude /logout
claude /login

# Set correct API key
export ANTHROPIC_API_KEY="sk-ant-api03-your-correct-key"
echo 'export ANTHROPIC_API_KEY="sk-ant-api03-your-key"' >> ~/.bashrc

# Verify permissions
claude -p "test authentication"
```

#### 2. MCP Server Issues

**Problem**: `MCP server failed to start` or `Connection timeout`

**Diagnosis**:
```bash
# Check MCP configuration
claude config get mcp
claude mcp status

# Debug MCP servers
claude --mcp-debug

# Test server manually
npx postgres-mcp-server --help
npx git-mcp-server --version

# Check MCP logs
tail -f ~/.claude/logs/mcp-*.log
```

**Solutions**:
```bash
# Restart MCP servers
claude mcp restart --all

# Reinstall problematic server
claude mcp remove postgres
npm install -g @anthropic/postgres-mcp-server
claude mcp add postgres "postgres-mcp-server --url $DATABASE_URL"

# Increase timeout
export MCP_TIMEOUT=30000
claude config set mcpTimeout 30000

# Check dependencies
npm list -g | grep mcp
```

#### 3. Permission Issues

**Problem**: `Permission denied for tool X` or `Tool not allowed`

**Diagnosis**:
```bash
# Check current permissions
claude /permissions
claude config get allowedTools
claude config get disallowedTools

# Review permission history
claude /permissions history
```

**Solutions**:
```bash
# Allow specific tool
claude config add allowedTools "Edit"
claude config add allowedTools "mcp__git__*"

# Reset permissions
claude config remove allowedTools
claude config remove disallowedTools

# Use allowlist approach
claude --allowedTools "Edit,View,Bash(git:*)"

# Check if tool is properly named
claude config get availableTools
```

#### 4. Performance Issues

**Problem**: `Claude is slow` or `Response timeout`

**Diagnosis**:
```bash
# Check thinking budget
echo $MAX_THINKING_TOKENS
claude config get thinkingBudget

# Monitor resource usage
top -p $(pgrep claude)
htop

# Check network latency
ping api.anthropic.com
curl -w "@curl-format.txt" -o /dev/null -s https://api.anthropic.com
```

**Solutions**:
```bash
# Optimize thinking budget
export MAX_THINKING_TOKENS=10000
claude config set thinkingBudget 10000

# Use faster model for quick operations
export ANTHROPIC_SMALL_FAST_MODEL="claude-haiku-3"
claude config set smallFastModel "claude-haiku-3"

# Disable non-essential features
export DISABLE_NON_ESSENTIAL_MODEL_CALLS=1
export DISABLE_PROMPT_CACHING=1

# Clear cache
rm -rf ~/.claude/cache/*
claude config reset --cache

# Reduce max turns for automation
claude config set maxTurns 5
```

#### 5. Network Issues

**Problem**: `Connection timeout`, `Network error`, or `Proxy issues`

**Diagnosis**:
```bash
# Test basic connectivity
ping api.anthropic.com
nslookup api.anthropic.com
curl -I https://api.anthropic.com

# Check proxy settings
echo $HTTP_PROXY
echo $HTTPS_PROXY
echo $NO_PROXY

# Test with proxy
curl --proxy $HTTP_PROXY -I https://api.anthropic.com
```

**Solutions**:
```bash
# Configure proxy
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="https://proxy.company.com:8443"
export NO_PROXY="localhost,127.0.0.1,*.company.com"

# For authenticated proxy
export HTTP_PROXY="http://username:password@proxy.company.com:8080"

# Increase network timeout
claude config set network.timeout 60000
claude config set network.retries 5

# Disable non-essential traffic
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1

# Test without proxy
unset HTTP_PROXY HTTPS_PROXY
claude -p "test connection"
```

#### 6. Model Issues

**Problem**: `Model not available`, `Rate limited`, or `Model error`

**Diagnosis**:
```bash
# Check current model
claude config get model
claude /status | grep -i model

# Check available models
claude /models

# Check rate limits
claude /cost
```

**Solutions**:
```bash
# Switch to available model
claude config set model claude-sonnet-4
claude config set model claude-haiku-3

# Use alternative provider
claude --use-bedrock "test query"
claude --use-vertex "test query"

# Check API quota
# Visit https://console.anthropic.com/settings/limits

# Implement rate limiting
claude config set rateLimiting true
claude config set requestDelay 1000
```

#### 7. File Permission Issues

**Problem**: `Cannot read/write files` or `Access denied`

**Diagnosis**:
```bash
# Check file permissions
ls -la
pwd
whoami

# Check working directories
claude /status | grep -i directory
claude config get addDirs

# Test file access
touch test.txt
echo "test" > test.txt
cat test.txt
rm test.txt
```

**Solutions**:
```bash
# Fix file permissions
chmod 644 file.txt
chmod 755 directory/

# Add working directory
claude --add-dir $(pwd)
claude config add addDirs "$(pwd)"

# Allow file operations
claude config add allowedTools "Edit"
claude config add allowedTools "View"

# Check if files are ignored
cat .gitignore
cat .claude/ignored-files
```

### Debug Mode & Logging

#### Enable Debug Mode

```bash
# Enable all debugging
claude --verbose --debug --mcp-debug

# Debug levels
export CLAUDE_CODE_LOG_LEVEL=debug    # trace, debug, info, warn, error
export CLAUDE_CODE_LOG_LEVEL=trace    # Most detailed

# Debug specific components
export MCP_DEBUG=1                    # MCP debugging
export MCP_TRACE=1                    # MCP tracing
export CLAUDE_DEBUG_TOOLS=1           # Tool debugging
export CLAUDE_DEBUG_PERMISSIONS=1     # Permission debugging
```

#### Log Analysis

```bash
# View recent logs
tail -f ~/.claude/logs/claude-code.log

# Search for errors
grep -i error ~/.claude/logs/claude-code.log
grep -i "mcp" ~/.claude/logs/claude-code.log
grep -i "permission" ~/.claude/logs/claude-code.log

# Analyze logs with Claude
tail -200 ~/.claude/logs/claude-code.log | \
    claude -p "analyze these logs for issues and patterns" \
    --allowedTools "View"

# Log rotation
find ~/.claude/logs -name "*.log" -size +100M -exec gzip {} \;
```

#### Advanced Debugging

```bash
# Trace API calls
export ANTHROPIC_LOG_LEVEL=debug
strace -e trace=network -p $(pgrep claude)

# Monitor system calls
strace -o claude-trace.log claude -p "test"

# Monitor file access
inotifywait -m -r --format '%w%f %e' ~/.claude/

# Network monitoring
tcpdump -i any host api.anthropic.com

# Memory usage monitoring
valgrind --tool=memcheck claude -p "test"
```

### Recovery Procedures

#### Complete System Reset

```bash
# 1. Backup important data
cp ~/.claude.json ~/.claude.json.backup
cp -r .claude .claude.backup
cp -r ~/.config/claude-code ~/.config/claude-code.backup

# 2. Stop all Claude processes
pkill claude
pkill -f mcp-server

# 3. Reset configuration
rm -rf ~/.claude.json
rm -rf ~/.config/claude-code/
rm -rf .claude/

# 4. Clear cache and logs
rm -rf ~/.claude/cache/*
rm -rf ~/.claude/logs/*
rm -rf ~/.claude/sessions/*

# 5. Reinstall Claude Code
npm uninstall -g @anthropic/claude-code
npm install -g @anthropic/claude-code

# 6. Reconfigure
claude config
claude /doctor
```

#### Session Recovery

```bash
# List available sessions
claude config get sessions
ls ~/.claude/sessions/

# Recover specific session
claude -r session_id

# Recover from backup
cp ~/.claude/sessions/session_backup.json ~/.claude/sessions/current.json
claude -c

# Clean corrupted sessions
rm -rf ~/.claude/sessions/*
claude /clear
```

#### MCP Recovery

```bash
# Reset all MCP servers
claude mcp remove --all
rm -rf .claude/mcp.json

# Reinstall MCP servers
npm install -g @anthropic/git-mcp-server
npm install -g @anthropic/postgres-mcp-server
npm install -g @anthropic/puppeteer-mcp-server

# Reconfigure MCP
claude mcp add git "git-mcp-server"
claude mcp add postgres "postgres-mcp-server"
claude mcp status
```

### Error Code Reference

#### Common Error Codes

| Error Code | Description | Solution |
|------------|-------------|----------|
| `AUTH_001` | Invalid API key | Check and reset API key |
| `AUTH_002` | Expired token | Refresh authentication |
| `NET_001` | Connection timeout | Check network/proxy |
| `NET_002` | DNS resolution failed | Check DNS settings |
| `MCP_001` | Server startup failed | Restart MCP server |
| `MCP_002` | Connection refused | Check server status |
| `PERM_001` | Tool not allowed | Update allowedTools |
| `PERM_002` | Permission denied | Grant tool permissions |
| `FILE_001` | File not found | Check file path |
| `FILE_002` | Permission denied | Fix file permissions |
| `MODEL_001` | Model not available | Switch model |
| `MODEL_002` | Rate limit exceeded | Wait or upgrade plan |

#### Error Investigation

```bash
# Get detailed error information
claude /doctor --error-details

# Search for specific error
grep "AUTH_001" ~/.claude/logs/claude-code.log

# Get error context
claude -p "explain error code AUTH_001" --allowedTools "View"

# Report error
claude /bug  # If bug reporting is enabled
```

### Performance Optimization

#### System Performance

```bash
# Monitor Claude performance
time claude -p "test performance"
/usr/bin/time -v claude -p "complex analysis"

# Memory optimization
export NODE_OPTIONS="--max-old-space-size=4096"
ulimit -m 4194304  # 4GB memory limit

# CPU optimization
nice -n 10 claude -p "background task"
taskset -c 0-3 claude -p "cpu intensive task"

# Disk I/O optimization
ionice -c 3 claude -p "disk intensive task"
```

#### Configuration Optimization

```bash
# Optimize for speed
claude config set thinkingBudget 5000
claude config set maxTurns 5
claude config set outputFormat text
export DISABLE_NON_ESSENTIAL_MODEL_CALLS=1

# Optimize for quality
claude config set model claude-opus-4
claude config set thinkingBudget 128000
claude config set maxTurns 30

# Optimize for cost
claude config set model claude-haiku-3
claude config set thinkingBudget 1000
export DISABLE_PROMPT_CACHING=1
```

### Monitoring & Alerts

#### Health Monitoring Script

```bash
#!/bin/bash
# health-monitor.sh

LOGFILE="/var/log/claude-health.log"
ALERT_THRESHOLD=5

check_claude_health() {
    local start_time=$(date +%s)
    
    # Test basic functionality
    if timeout 30 claude -p "health check test" > /dev/null 2>&1; then
        local end_time=$(date +%s)
        local duration=$((end_time - start_time))
        echo "$(date): Health check passed (${duration}s)" >> "$LOGFILE"
        return 0
    else
        echo "$(date): Health check failed" >> "$LOGFILE"
        return 1
    fi
}

main() {
    local failures=0
    
    while true; do
        if check_claude_health; then
            failures=0
        else
            failures=$((failures + 1))
            
            if [ $failures -ge $ALERT_THRESHOLD ]; then
                echo "ALERT: Claude Code health check failed $failures times" | \
                    mail -s "Claude Code Alert" admin@company.com
                
                # Attempt automatic recovery
                systemctl restart claude-code 2>/dev/null || \
                    service claude-code restart 2>/dev/null
                
                failures=0
            fi
        fi
        
        sleep 60  # Check every minute
    done
}

main "$@"
```

#### Alert Integration

```bash
# Slack integration
send_slack_alert() {
    local message="$1"
    local webhook_url="YOUR_SLACK_WEBHOOK_URL"
    
    curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"🚨 Claude Code Alert: $message\"}" \
        "$webhook_url"
}

# Email alerts
send_email_alert() {
    local subject="$1"
    local message="$2"
    
    echo "$message" | mail -s "$subject" admin@company.com
}

# PagerDuty integration
send_pagerduty_alert() {
    local severity="$1"
    local summary="$2"
    
    curl -X POST 'https://events.pagerduty.com/v2/enqueue' \
        -H 'Content-Type: application/json' \
        -d "{
            \"routing_key\": \"YOUR_ROUTING_KEY\",
            \"event_action\": \"trigger\",
            \"payload\": {
                \"summary\": \"$summary\",
                \"severity\": \"$severity\",
                \"source\": \"claude-code\"
            }
        }"
}
```

---

## 🚀 Advanced Features

### Context Management & Memory

#### Understanding Claude's Memory System

Claude Code uses a **multi-tiered memory system**:

1. **Session Memory** - Current conversation context
2. **Project Memory** - Persistent project knowledge (`CLAUDE.md`)
3. **Working Memory** - Temporary context from files and tools
4. **Long-term Memory** - Compressed historical context

#### CLAUDE.md - Project Memory File

**Purpose**: Persistent context that Claude remembers across sessions

**Location**: Project root directory

**Example CLAUDE.md**:
```markdown
# Project: E-commerce Platform

## Overview
This is a React/Node.js e-commerce platform with PostgreSQL database.

## Architecture
- Frontend: React 18 with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL 14
- Cache: Redis
- Queue: Bull (Redis-based)

## Key Components

### Frontend (`/src`)
- `/components` - Reusable UI components
- `/pages` - Route components
- `/hooks` - Custom React hooks
- `/services` - API integration
- `/utils` - Helper functions
- `/types` - TypeScript definitions

### Backend (`/server`)
- `/routes` - API endpoints
- `/models` - Database models (Sequelize)
- `/middleware` - Express middleware
- `/services` - Business logic
- `/utils` - Server utilities

### Database (`/database`)
- `/migrations` - Database migrations
- `/seeders` - Test data
- `/schemas` - Schema definitions

## Current Sprint Goals
- [ ] Implement user authentication with JWT
- [ ] Add shopping cart functionality
- [ ] Set up payment processing with Stripe
- [ ] Implement order management system
- [ ] Add email notifications

## Development Guidelines

### Code Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for formatting
- Write tests for all new features
- Use conventional commits

### Database Guidelines
- All migrations must be reversible
- Use transactions for multi-table operations
- Index foreign keys and frequently queried columns
- Use soft deletes for user data

### API Guidelines
- RESTful endpoints
- Consistent error responses
- Rate limiting on public endpoints
- API versioning (v1, v2, etc.)

## Known Issues
- Memory leak in WebSocket connections (Issue #234)
- Slow query on user dashboard (users table needs indexing)
- Cart persistence issues with Redis timeout

## Recent Changes
- 2025-06-20: Added Redis for session storage
- 2025-06-19: Implemented JWT authentication
- 2025-06-18: Migrated from MySQL to PostgreSQL

## Team Context
- John (Frontend Lead) - Working on React components
- Sarah (Backend Lead) - API development and database design
- Mike (DevOps) - Docker, CI/CD, and deployment
- Lisa (QA) - Test automation and quality assurance

## External Integrations
- Stripe: Payment processing
- SendGrid: Email delivery
- AWS S3: File storage
- Cloudflare: CDN and security
- Sentry: Error tracking
```

#### Memory Management Commands

```bash
# View current memory
claude /memory
claude /memory view

# Edit project memory
claude /memory edit

# Use custom memory file
claude --memory-file custom-context.md

# Memory statistics
claude /cost  # Shows memory token usage

# Compress memory
claude /compact
```

#### Advanced Memory Configuration

```json
{
  "memory": {
    "projectFile": "CLAUDE.md",
    "maxTokens": 128000,
    "compression": {
      "enabled": true,
      "algorithm": "semantic",
      "threshold": 0.8
    },
    "retention": {
      "sessionDays": 7,
      "projectDays": 30,
      "compressionDays": 7
    },
    "indexing": {
      "enabled": true,
      "vectorSize": 1536,
      "similarity": "cosine"
    }
  }
}
```

### Context7 Integration (Advanced Context Management)

#### What is Context7?

**Context7** is an advanced context management system that provides:
- **Extended memory windows** (up to 1M+ tokens)
- **Semantic context compression**
- **Intelligent context prioritization**
- **Multi-modal context handling**

#### Setup Context7

```bash
# Install Context7 MCP server
npm install -g @context7/mcp-server

# Add to Claude Code
claude mcp add context7 "context7-mcp-server --memory-size 1000 --window-size 128000"

# Configure Context7
claude config set context7.enabled true
claude config set context7.memorySize 1000
claude config set context7.windowSize 128000
```

#### Context7 Configuration

```json
{
  "context7": {
    "enabled": true,
    "memorySize": 1000,
    "windowSize": 128000,
    "compressionAlgorithm": "semantic",
    "priorityWeights": {
      "recency": 0.3,
      "relevance": 0.4,
      "importance": 0.3
    },
    "indexing": {
      "enabled": true,
      "vectorSize": 1536,
      "similarity": "cosine",
      "updateFrequency": "realtime"
    },
    "multiModal": {
      "images": true,
      "code": true,
      "documents": true
    }
  }
}
```

#### Using Context7

```bash
# Analyze large codebase with Context7
claude --context-window 128000 "analyze this entire codebase for architectural issues"

# Multi-modal context
claude "analyze this screenshot alongside the related code files"

# Long-term project analysis
claude "based on our 6-month development history, suggest architectural improvements"
```

### Extended Thinking Capabilities

#### Thinking Control Phrases

Claude's thinking depth can be controlled with special phrases:

| Phrase | Budget | Tokens | Best For |
|--------|--------|--------|----------|
| `"think"` | Basic | 1,024 | Quick analysis |
| `"think about"` | Basic | 1,024 | Simple problems |
| `"think hard"` | Enhanced | ~5,000 | Complex problems |
| `"think harder"` | Advanced | ~10,000 | Deep analysis |
| `"think deeply"` | Advanced | ~10,000 | Thorough research |
| `"think more"` | Enhanced | ~5,000 | Additional consideration |
| `"ultrathink"` | Maximum | 128,000 | Extremely complex analysis |
| `"megathink"` | Maximum | 128,000 | Comprehensive research |

#### Thinking Examples

```bash
# Basic thinking
claude "think about the best way to optimize this database query"

# Enhanced thinking
claude "think hard about the security implications of this authentication system"

# Maximum thinking
claude "ultrathink about the entire system architecture and provide a comprehensive analysis with detailed recommendations"

# Thinking with tool use (experimental)
claude "ultrathink about this codebase and use tools as needed to understand it fully"
```

#### Custom Thinking Budget

```bash
# Set custom thinking budget
export MAX_THINKING_TOKENS=50000
claude config set thinkingBudget 50000

# Per-command thinking budget
claude --thinking-budget 25000 "analyze this complex system"
```

### Interactive Mode Advanced Features

#### Keyboard Shortcuts & Modes

| Shortcut | Mode | Description | Use Case |
|----------|------|-------------|----------|
| `Shift+Tab` (1x) | **Auto-Accept** | Skip confirmations | Trusted workflows |
| `Shift+Tab` (2x) | **Planning** | Analyze without executing | Review before action |
| `Escape` | **Interrupt** | Stop immediately | Emergency stop |
| `Escape` (2x) | **History** | Edit previous prompts | Refine queries |
| `Ctrl+L` | **Clear Screen** | Clear display | Clean interface |
| `Ctrl+R` | **Search History** | Search commands | Find previous work |

#### Planning Mode Workflow

```bash
# Start Claude
claude "I need to refactor this user authentication system"

# Enter planning mode (Shift+Tab twice)
# Claude analyzes and creates a plan without executing

# Review the plan
# If satisfied, exit planning mode to execute
# If not, modify the request and plan again
```

#### Auto-Accept Mode

```bash
# Start task
claude "fix all linting errors in this project"

# Enable auto-accept (Shift+Tab once)
# Claude will execute all operations without asking for confirmation

# Use carefully - only for trusted operations
```

### Multi-Directory Workspaces

#### Working Across Multiple Projects

```bash
# Add multiple directories
claude --add-dir ../frontend ../backend ../shared ../docs

# Project-wide analysis
claude "analyze the entire application architecture across all directories"

# Cross-project refactoring
claude "refactor the authentication system across frontend and backend"
```

#### Workspace Configuration

```json
{
  "workspace": {
    "directories": [
      "../frontend",
      "../backend", 
      "../shared",
      "../infrastructure"
    ],
    "excludePatterns": [
      "node_modules",
      "dist",
      "build",
      ".git"
    ],
    "includePatterns": [
      "*.js",
      "*.ts",
      "*.jsx",
      "*.tsx",
      "*.json",
      "*.md"
    ]
  }
}
```

### AI Model Management

#### Model Selection Strategies

```bash
# Development work (balanced)
claude config set model claude-sonnet-4

# Complex analysis (highest quality)
claude config set model claude-opus-4

# Quick tasks (fastest)
claude config set model claude-haiku-3

# Per-session model selection
claude --model claude-opus-4 "perform comprehensive security audit"
```

#### Model-Specific Configurations

```json
{
  "models": {
    "claude-opus-4": {
      "thinkingBudget": 128000,
      "maxTurns": 50,
      "useFor": ["complex-analysis", "architecture-design"]
    },
    "claude-sonnet-4": {
      "thinkingBudget": 50000,
      "maxTurns": 20,
      "useFor": ["development", "code-review"]
    },
    "claude-haiku-3": {
      "thinkingBudget": 5000,
      "maxTurns": 10,
      "useFor": ["quick-tasks", "automation"]
    }
  }
}
```

#### Dynamic Model Switching

```bash
# Automatic model selection based on task complexity
claude config set autoModelSelection true

# Custom model switching rules
claude config set modelRules '{
  "security-audit": "claude-opus-4",
  "code-review": "claude-sonnet-4", 
  "linting": "claude-haiku-3"
}'
```

### Advanced Permission System

#### Granular Permission Control

```bash
# File-type specific permissions
claude --allowedTools "Edit(*.js),Edit(*.ts),View(*)"

# Time-based permissions
claude --allowedTools "Edit" --permission-timeout 3600  # 1 hour

# Context-aware permissions
claude --allowedTools "Edit(src/**),View(**),Bash(git:status)"

# Conditional permissions
claude --allowedTools "Edit if review_approved,View"
```

#### Custom Permission Handlers

**MCP Permission Handler Example**:
```javascript
// permission-handler.js
import { Server } from '@modelcontextprotocol/sdk/server/index.js';

const server = new Server({
  name: 'permission-handler',
  version: '1.0.0'
});

server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;
  
  if (name === 'check_permission') {
    const { tool, operation, context } = args;
    
    // Custom permission logic
    if (tool === 'Edit' && operation.includes('package.json')) {
      return {
        behavior: 'deny',
        message: 'package.json modifications require manual review'
      };
    }
    
    if (tool === 'Bash' && !operation.startsWith('git')) {
      return {
        behavior: 'allow',
        message: 'Non-git bash operations approved'
      };
    }
    
    return {
      behavior: 'allow',
      updatedInput: args
    };
  }
});
```

#### Permission Policies

```json
{
  "permissionPolicies": {
    "development": {
      "allowedTools": ["Edit", "View", "Bash(git:*)", "mcp__*__read"],
      "requireConfirmation": ["Bash", "mcp__*__write"],
      "autoApprove": ["View", "mcp__git__status"]
    },
    "production": {
      "allowedTools": ["View", "mcp__monitoring__*"],
      "requireConfirmation": "*",
      "autoApprove": ["View"]
    },
    "security-audit": {
      "allowedTools": ["View", "mcp__*__read"],
      "requireConfirmation": [],
      "autoApprove": "*"
    }
  }
}
```

### Integration with External Services

#### GitHub Advanced Integration

```bash
# Setup GitHub integration
claude mcp add github "github-mcp-server --token $GITHUB_TOKEN"

# Advanced GitHub workflows
claude --allowedTools "mcp__github__*,View,Edit" \
  "review all open PRs and provide comprehensive feedback"

# Automated PR management
claude "create PR for feature branch with appropriate reviewers and labels"

# Repository analysis
claude "analyze repository health: code quality, security, documentation"
```

#### Database Advanced Integration

```bash
# Multi-database analysis
claude mcp add prod_db "postgres-mcp-server --url $PROD_DB_URL"
claude mcp add dev_db "postgres-mcp-server --url $DEV_DB_URL"

# Cross-database analysis
claude --allowedTools "mcp__prod_db__query,mcp__dev_db__*" \
  "compare production and development database schemas"

# Performance optimization
claude "analyze database performance and suggest optimizations"
```

#### Cloud Infrastructure Integration

```bash
# AWS integration
claude mcp add aws "aws-mcp-server --region us-east-1"

# Infrastructure analysis
claude --allowedTools "mcp__aws__*,View,Edit" \
  "audit AWS infrastructure for cost optimization and security"

# Automated deployments
claude "deploy application to staging environment with health checks"
```

### Power User Workflows

#### Morning Development Routine

```bash
#!/bin/bash
# morning-routine.sh

echo "🌅 Starting development day..."

# Update project context
claude /memory edit

# Check system health
claude /doctor

# Review overnight changes
claude --allowedTools "View,mcp__git__*" \
  "summarize all changes since yesterday and identify any issues"

# Plan daily tasks
claude "based on current project state and recent changes, suggest priorities for today"

echo "✅ Morning routine complete"
```

#### Code Review Workflow

```bash
#!/bin/bash
# comprehensive-review.sh

PR_NUMBER=${1:-"latest"}

echo "🔍 Starting comprehensive code review for PR $PR_NUMBER..."

# Setup review environment
claude mcp add github "github-mcp-server --token $GITHUB_TOKEN"
claude mcp add security "security-scanner-mcp-server"

# Comprehensive review
claude --allowedTools "mcp__github__*,mcp__security__*,View" \
  "perform comprehensive code review for PR $PR_NUMBER including:
  - Security vulnerability scan
  - Code quality analysis  
  - Performance implications
  - Test coverage review
  - Documentation updates needed
  - Architecture impact assessment"

echo "✅ Code review complete"
```

#### Database Migration Workflow

```bash
#!/bin/bash
# safe-migration.sh

echo "🗄️ Starting safe database migration..."

# Setup databases
claude mcp add source "postgres-mcp-server --url $SOURCE_DB"
claude mcp add target "postgres-mcp-server --url $TARGET_DB"

# Plan migration
claude --allowedTools "mcp__source__*,mcp__target__*,Edit,View" \
  "create comprehensive database migration plan with:
  - Schema comparison and mapping
  - Data transformation rules
  - Rollback procedures
  - Validation steps
  - Performance considerations"

# Execute with monitoring
claude --allowedTools "mcp__source__*,mcp__target__*,Edit,View" \
  --max-turns 100 \
  "execute migration plan with continuous monitoring and validation"

echo "✅ Database migration workflow complete"
```

---

## 💡 Tips & Best Practices

### Development Best Practices

#### Effective Prompting Techniques

**1. Be Specific and Detailed**
```bash
# Good: Specific request
claude "Review the UserAuth.js file for security vulnerabilities, focusing on JWT handling and password validation"

# Bad: Vague request  
claude "check my code"
```

**2. Provide Context**
```bash
# Good: Context provided
claude "I'm working on a React e-commerce app. The shopping cart component is not updating properly when items are added. Here's the relevant code..."

# Bad: No context
claude "my component isn't working"
```

**3. Use Progressive Disclosure**
```bash
# Start with analysis
claude "think hard about the architecture of this authentication system"

# Then ask for implementation
claude "now implement the improvements you suggested"
```

#### Project Setup Best Practices

**1. Initialize CLAUDE.md Early**
```bash
# Create comprehensive project context
claude /init
claude /memory edit

# Keep it updated
claude "update the project memory with our recent architectural changes"
```

**2. Configure Appropriate Permissions**
```bash
# Development environment
claude config set allowedTools "Edit,View,Bash(git:*),Bash(npm:*),mcp__git__*"

# CI/CD environment  
claude config set allowedTools "View,Edit,Bash(git:status),mcp__git__status"
```

**3. Set Up Relevant MCP Servers**
```bash
# For web development
claude mcp add git "git-mcp-server"
claude mcp add postgres "postgres-mcp-server --url $DATABASE_URL"
claude mcp add browser "puppeteer-mcp-server"

# For cloud development
claude mcp add aws "aws-mcp-server --region us-east-1"
```

### Security Best Practices

#### Permission Management

**1. Start Restrictive, Then Expand**
```bash
# Start with minimal permissions
claude config set allowedTools "View"

# Add permissions as needed
claude config add allowedTools "Edit"
claude config add allowedTools "mcp__git__status"
```

**2. Use Environment-Specific Configurations**
```bash
# Development
export CLAUDE_ENV=development
claude config set allowedTools "Edit,View,Bash,mcp__*__*"

# Production
export CLAUDE_ENV=production  
claude config set allowedTools "View,mcp__monitoring__*"
```

**3. Regular Security Audits**
```bash
# Weekly security review
claude /permissions history
claude /doctor
claude config export > security-audit-$(date +%Y%m%d).json
```

#### Sensitive Data Protection

**1. Use Environment Variables**
```bash
# Good: Environment variables
export DATABASE_URL="postgresql://user:pass@host/db"
claude mcp add postgres "postgres-mcp-server --url $DATABASE_URL"

# Bad: Hardcoded credentials
claude mcp add postgres "postgres-mcp-server --url postgresql://user:password123@host/db"
```

**2. Exclude Sensitive Files**
```bash
# Create .claude/ignored-files
echo "*.env
*.key
*.pem
secrets.json
.ssh/*
config/secrets.yml" > .claude/ignored-files
```

**3. Use Read-Only Permissions for Audits**
```bash
# Security audits
claude --allowedTools "View,mcp__*__read,mcp__*__query" \
  "perform security audit of the application"
```

### Performance Optimization

#### Efficient Resource Usage

**1. Optimize Thinking Budget**
```bash
# For quick tasks
claude config set thinkingBudget 5000

# For complex analysis
claude config set thinkingBudget 50000

# For comprehensive research
claude config set thinkingBudget 128000
```

**2. Use Appropriate Models**
```bash
# Quick fixes
claude --model claude-haiku-3 "fix these linting errors"

# Code review
claude --model claude-sonnet-4 "review this pull request"

# Architecture design
claude --model claude-opus-4 "design system architecture"
```

**3. Batch Similar Operations**
```bash
# Inefficient: Multiple separate calls
claude "fix file1.js"
claude "fix file2.js" 
claude "fix file3.js"

# Efficient: Batch operation
claude "fix all JavaScript files with similar issues: file1.js, file2.js, file3.js"
```

#### Memory Management

**1. Regular Memory Cleanup**
```bash
# Compress long conversations
claude /compact

# Clear old sessions
claude config set sessions "[]"

# Clean cache periodically
rm -rf ~/.claude/cache/*
```

**2. Optimize Context Size**
```bash
# Use focused context
claude --add-dir src/components "analyze just the React components"

# Rather than
claude "analyze entire codebase" # This loads everything
```

### Automation Best Practices

#### CI/CD Integration

**1. Use Non-Interactive Mode**
```bash
# CI/CD scripts should use -p flag
claude -p "run tests and generate report" --output-format json
```

**2. Implement Proper Error Handling**
```bash
#!/bin/bash
if ! claude -p "validate deployment readiness" --output-format json > validation.json; then
    echo "Validation failed"
    exit 1
fi

if jq -e '.ready' validation.json > /dev/null; then
    echo "Deployment approved"
else
    echo "Deployment blocked"
    jq -r '.issues[].message' validation.json
    exit 1
fi
```

**3. Use Appropriate Timeouts**
```bash
# Set timeouts for automation
timeout 300 claude -p "analyze large codebase" || {
    echo "Analysis timed out"
    exit 1
}
```

#### Monitoring & Alerting

**1. Health Check Automation**
```bash
# Regular health checks
*/15 * * * * /usr/local/bin/claude /doctor > /dev/null || echo "Claude health check failed" | mail -s "Alert" admin@company.com
```

**2. Log Analysis**
```bash
# Daily log analysis
0 6 * * * tail -1000 /var/log/app.log | claude -p "analyze for issues" --output-format json > /tmp/daily-analysis.json
```

### Collaboration Best Practices

#### Team Workflows

**1. Shared Configuration Templates**
```bash
# Create team templates
mkdir -p ~/.claude/templates/
cat > ~/.claude/templates/team-frontend.json << EOF
{
  "allowedTools": ["Edit", "View", "Bash(npm:*)", "mcp__git__*"],
  "model": "claude-sonnet-4",
  "systemPrompt": "You are working on our React frontend. Follow our coding standards and use TypeScript."
}
EOF

# Use templates
claude config import ~/.claude/templates/team-frontend.json
```

**2. Documentation Automation**
```bash
# Automated documentation updates
claude "update README.md with recent changes to the API endpoints"
claude "generate TypeScript definitions from the new database schema"
```

**3. Code Review Standards**
```bash
# Standardized review process
claude --allowedTools "View,mcp__git__*" \
  "review PR #123 using our team standards:
  - Security best practices
  - Performance considerations  
  - Code style compliance
  - Test coverage adequacy"
```

#### Knowledge Sharing

**1. Create Project Runbooks**
```bash
# Generate runbooks
claude "create a deployment runbook for this application including all steps and troubleshooting"
claude "document the onboarding process for new developers"
```

**2. Architecture Documentation**
```bash
# Maintain architecture docs
claude "update architecture documentation to reflect recent microservices changes"
claude "create sequence diagrams for the new authentication flow"
```

### Common Pitfalls to Avoid

#### Security Pitfalls

**❌ Don't:**
- Use `--dangerously-skip-permissions` on production systems
- Hardcode secrets in commands or configuration
- Grant overly broad permissions
- Run with elevated privileges unnecessarily

**✅ Do:**
- Use environment variables for secrets
- Start with minimal permissions
- Regular security audits
- Isolate sensitive operations

#### Performance Pitfalls

**❌ Don't:**
- Load entire large codebases unnecessarily
- Use maximum thinking budget for simple tasks
- Run multiple concurrent Claude instances
- Ignore memory and cache cleanup

**✅ Do:**
- Use focused context with `--add-dir`
- Match thinking budget to task complexity
- Monitor resource usage
- Clean up regularly

#### Workflow Pitfalls

**❌ Don't:**
- Skip project context setup (CLAUDE.md)
- Use vague, ambiguous prompts
- Ignore error messages and logs
- Automate without testing first

**✅ Do:**
- Maintain comprehensive project context
- Be specific and detailed in requests
- Monitor and analyze logs
- Test automation in safe environments

---

