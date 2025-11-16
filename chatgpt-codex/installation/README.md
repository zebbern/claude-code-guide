# OpenAI Codex - Installation Guide

Complete installation instructions for OpenAI Codex CLI.

> **Official Resources:**
> 📦 GitHub: https://github.com/openai/codex
> 🌐 Website: https://openai.com/codex/
> 📚 Documentation: https://developers.openai.com/codex/
> 💡 Help Center: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan

---

## Prerequisites

- **Node.js 18+** or **Homebrew** (macOS/Linux)
- **OpenAI Account**: ChatGPT Plus/Pro/Business/Edu/Enterprise (recommended) OR API key
- **Operating System**: Windows 10/11, macOS 11+, or Linux

---

## Installation Methods

### Method 1: NPM (Recommended - Cross-platform)

```bash
npm install -g @openai/codex
```

**Verify:**
```bash
codex --version
```

---

### Method 2: Homebrew (macOS/Linux)

```bash
brew install codex
```

**Verify:**
```bash
codex --version
```

---

### Method 3: Manual Binary Download

1. Visit [GitHub Releases](https://github.com/openai/codex/releases/latest)
2. Download for your platform:
   - **Windows**: `codex-windows-x64.exe`
   - **macOS Intel**: `codex-darwin-x64`
   - **macOS Apple Silicon**: `codex-darwin-arm64`
   - **Linux**: `codex-linux-x64`

3. Make executable (macOS/Linux):
   ```bash
   chmod +x codex-*
   sudo mv codex-* /usr/local/bin/codex
   ```

4. Verify:
   ```bash
   codex --version
   ```

---

## Platform-Specific Installation

### Windows

**Option A: NPM**
```powershell
npm install -g @openai/codex
```

**Option B: Manual**
1. Download `codex-windows-x64.exe`
2. Rename to `codex.exe`
3. Move to `C:\Program Files\OpenAI\`
4. Add to PATH:
   ```powershell
   $env:Path += ";C:\Program Files\OpenAI"
   [Environment]::SetEnvironmentVariable("Path", $env:Path, "User")
   ```

---

### macOS

**Option A: Homebrew**
```bash
brew install codex
```

**Option B: NPM**
```bash
npm install -g @openai/codex
```

**Option C: Manual**
```bash
# Download appropriate binary
curl -L -o codex https://github.com/openai/codex/releases/latest/download/codex-darwin-arm64

# Make executable
chmod +x codex

# Move to PATH
sudo mv codex /usr/local/bin/

# Verify
codex --version
```

---

### Linux

**Option A: NPM**
```bash
npm install -g @openai/codex
```

**Option B: Package Managers**

**Ubuntu/Debian:**
```bash
wget https://github.com/openai/codex/releases/latest/download/codex-linux-x64
chmod +x codex-linux-x64
sudo mv codex-linux-x64 /usr/local/bin/codex
```

**Arch Linux:**
```bash
yay -S openai-codex
```

---

## Authentication

### Option 1: ChatGPT Sign-In (Recommended)

```bash
# Start Codex
codex

# Select "Sign in with ChatGPT" when prompted
# Follow browser authentication flow
```

**Benefits:**
- No API usage charges (within plan limits)
- Automatic billing through ChatGPT subscription
- Access to latest models

**Requirements:**
- ChatGPT Plus ($20/mo)
- ChatGPT Pro ($200/mo)
- ChatGPT Business/Edu/Enterprise

---

### Option 2: API Key

```bash
# Set API key
export OPENAI_API_KEY="sk-proj-your-key-here"

# Start Codex
codex
```

**Get API Key:**
1. Visit [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Click "Create new secret key"
3. Copy and save securely

**Make Permanent:**

**macOS/Linux:**
```bash
echo 'export OPENAI_API_KEY="sk-proj-..."' >> ~/.bashrc
source ~/.bashrc
```

**Windows PowerShell:**
```powershell
[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "sk-proj-...", "User")
```

---

## Post-Installation Setup

### 1. Verify Installation

```bash
# Check version
codex --version

# Test basic functionality
codex
> Hello, test the installation
```

### 2. Configure Default Settings

```bash
# Set default model
codex config set model gpt-5-codex

# Set reasoning level
codex config set reasoning medium

# View configuration
codex config show
```

---

## Updating Codex

### NPM

```bash
npm update -g @openai/codex
```

### Homebrew

```bash
brew upgrade codex
```

### Manual

Re-download latest binary and replace existing installation.

---

## Troubleshooting

### Command Not Found

**Windows:**
```powershell
# Check PATH
$env:Path

# Add to PATH
$env:Path += ";C:\Users\YourUsername\AppData\Roaming\npm"
```

**macOS/Linux:**
```bash
# Check PATH
echo $PATH

# Add to PATH
export PATH="$PATH:$HOME/.npm-global/bin"

# Make permanent
echo 'export PATH="$PATH:$HOME/.npm-global/bin"' >> ~/.bashrc
```

### Node.js Version Issues

```bash
# Check version
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

### Authentication Failures

**ChatGPT Sign-In:**
- Ensure browser is not blocking popups
- Clear browser cache and try again
- Check ChatGPT subscription is active

**API Key:**
```bash
# Verify key is set
echo $OPENAI_API_KEY

# Test key
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

---

## Uninstallation

### NPM

```bash
npm uninstall -g @openai/codex
```

### Homebrew

```bash
brew uninstall codex
```

### Manual

```bash
# Remove binary
sudo rm /usr/local/bin/codex

# Remove config
rm -rf ~/.codex
```

---

## Enterprise Installation

### System-Wide Deployment

**Linux:**
```bash
sudo npm install -g @openai/codex --prefix /usr/local
```

**Windows (as Administrator):**
```powershell
npm install -g @openai/codex --prefix "C:\Program Files\OpenAI"
```

### Configuration Management

Store API keys securely using:
- Environment variables
- Secret management systems (Vault, AWS Secrets Manager)
- Enterprise SSO integration

---

## Next Steps

- **[Learn Commands →](/chatgpt-codex/commands/)**
- **[Configure MCP Servers →](/chatgpt-codex/integration-tips/)**
- **[View Main Guide →](/chatgpt-codex/)**

---

## Additional Resources

- [Official Documentation](https://developers.openai.com/codex/quickstart/)
- [GitHub Repository](https://github.com/openai/codex)
- [OpenAI Help Center](https://help.openai.com/codex)

---

*Last updated: 2025-11-12*
