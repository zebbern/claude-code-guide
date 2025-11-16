# Claude Code - Installation Guide

Complete installation instructions for Claude Code CLI across all platforms.

---

## Prerequisites

- **Claude Account**: Pro ($20/mo), Max ($60/mo), Team, or Enterprise subscription
- **Node.js 18+**: Required for MCP servers (optional but recommended)
- **Operating System**: Windows 10/11, macOS 11+, or Linux

---

## Installation Methods

### Windows

#### Method 1: PowerShell (Recommended)

```powershell
irm https://claude.ai/install.ps1 | iex
```

#### Method 2: npm

```powershell
npm install -g @anthropic-ai/claude-code
```

#### Method 3: Manual Download

1. Download from [claude.ai/code](https://claude.ai/code)
2. Run installer
3. Follow installation wizard

**Verify Installation:**
```powershell
claude --version
```

---

### macOS

#### Method 1: Install Script (Recommended)

```bash
curl -fsSL https://claude.ai/install.sh | sh
```

#### Method 2: Homebrew

```bash
brew install claude-code
```

#### Method 3: npm

```bash
npm install -g @anthropic-ai/claude-code
```

**Verify Installation:**
```bash
claude --version
```

---

### Linux

#### Method 1: Install Script (Recommended)

```bash
curl -fsSL https://claude.ai/install.sh | sh
```

#### Method 2: npm

```bash
npm install -g @anthropic-ai/claude-code
```

#### Method 3: Package Managers

**Debian/Ubuntu:**
```bash
wget https://claude.ai/downloads/claude-code_latest_amd64.deb
sudo dpkg -i claude-code_latest_amd64.deb
```

**Fedora/RHEL:**
```bash
sudo dnf install https://claude.ai/downloads/claude-code-latest.rpm
```

**Arch Linux:**
```bash
yay -S claude-code
```

**Verify Installation:**
```bash
claude --version
```

---

## Post-Installation Setup

### 1. Authentication

**Option A: Interactive Login**
```bash
claude
```
Follow prompts to log in with your Claude account.

**Option B: API Key**
```bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
claude
```

### 2. Verify Installation

```bash
# Check version
claude --version

# Check configuration
claude config show

# Test basic functionality
claude "Hello, can you help me test the installation?"
```

---

## Troubleshooting

### Command Not Found

**Windows:**
```powershell
# Add to PATH
$env:Path += ";C:\Users\YourUsername\AppData\Local\Programs\Claude"

# Permanent (restart terminal after)
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Users\YourUsername\AppData\Local\Programs\Claude", "User")
```

**macOS/Linux:**
```bash
# Add to PATH
export PATH="$PATH:$HOME/.claude/bin"

# Make permanent (add to ~/.bashrc or ~/.zshrc)
echo 'export PATH="$PATH:$HOME/.claude/bin"' >> ~/.bashrc
source ~/.bashrc
```

### Permission Denied (Linux/macOS)

```bash
# If installed via script
chmod +x ~/.claude/bin/claude

# If using npm globally without sudo
npm config set prefix ~/.npm-global
export PATH="$PATH:$HOME/.npm-global/bin"
```

### Node.js Version Issues

```bash
# Check Node version
node --version  # Should be 18+

# Update Node.js
# macOS
brew upgrade node

# Linux (using nvm)
nvm install --lts
nvm use --lts

# Windows
# Download from nodejs.org
```

### Installation Hangs

```bash
# Clear npm cache
npm cache clean --force

# Try with verbose logging
npm install -g @anthropic-ai/claude-code --verbose

# Use alternative registry
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmjs.org/
```

---

## Updating Claude Code

### Automatic Updates

Claude Code checks for updates automatically. You'll be prompted to update when a new version is available.

### Manual Update

**npm:**
```bash
npm update -g @anthropic-ai/claude-code
```

**Homebrew:**
```bash
brew upgrade claude-code
```

**Install Script:**
```bash
# Re-run install script
curl -fsSL https://claude.ai/install.sh | sh
```

---

## Uninstallation

### Windows

**PowerShell:**
```powershell
npm uninstall -g @anthropic-ai/claude-code

# Or via Programs and Features
# Control Panel > Programs > Uninstall a program > Claude Code
```

### macOS

```bash
# npm
npm uninstall -g @anthropic-ai/claude-code

# Homebrew
brew uninstall claude-code

# Remove config
rm -rf ~/.claude
```

### Linux

```bash
# npm
npm uninstall -g @anthropic-ai/claude-code

# Package manager (Debian/Ubuntu)
sudo apt remove claude-code

# Remove config
rm -rf ~/.claude
```

---

## Enterprise Installation

### System-Wide Installation (Windows)

```powershell
# Run as Administrator
npm install -g @anthropic-ai/claude-code --prefix="C:\Program Files\Claude"

# Add to system PATH
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\Claude", "Machine")
```

### System-Wide Installation (Linux)

```bash
# Install to /usr/local
sudo npm install -g @anthropic-ai/claude-code

# Or use package manager
sudo dpkg -i claude-code_latest_amd64.deb
```

### Offline Installation

1. Download offline package from [claude.ai/downloads](https://claude.ai/downloads)
2. Transfer to target machine
3. Install:

**Windows:**
```powershell
msiexec /i claude-code-offline.msi
```

**Linux:**
```bash
sudo dpkg -i claude-code-offline.deb
# or
sudo rpm -i claude-code-offline.rpm
```

---

## Next Steps

After installation:

1. **[Configure Claude Code →](/claude-code/configuration/)**
2. **[Set up MCP Servers →](/claude-code/mcp-setup/)**
3. **[Learn Tips & Tricks →](/claude-code/tips-and-tricks/)**

---

## Additional Resources

- [Official Installation Docs](https://docs.anthropic.com/en/docs/claude-code/installation)
- [Troubleshooting Guide](/claude-code/troubleshooting/)
- [GitHub Issues](https://github.com/anthropics/claude-code/issues)

---

*Last updated: 2025-11-12*
