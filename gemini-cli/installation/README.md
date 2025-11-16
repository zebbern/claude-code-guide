# Gemini CLI - Installation Guide

Complete installation instructions for Google's Gemini CLI.

> **Official Resources:**
> 📦 GitHub: https://github.com/google-gemini/gemini-cli
> 🌐 Website: https://google-gemini.github.io/gemini-cli/
> 📚 Documentation: https://google-gemini.github.io/gemini-cli/
> 🎓 Codelabs: https://codelabs.developers.google.com/gemini-cli-hands-on
> ⚖️ License: Apache 2.0 (Open Source)

---

## Prerequisites

- **Node.js 18+** (required)
- **Google Account** (personal for free tier with 60 req/min, 1000 req/day)

---

## Installation

### NPM Installation (Recommended)

```bash
npm install -g @google/gemini-cli
```

**Verify:**
```bash
gemini --version
```

---

## Platform-Specific Installation

### Windows

```powershell
# Via npm
npm install -g @google/gemini-cli

# Verify
gemini --version
```

### macOS

```bash
# Via npm
npm install -g @google/gemini-cli

# Verify
gemini --version
```

### Linux

```bash
# Via npm
npm install -g @google/gemini-cli

# Verify
gemini --version
```

---

## Authentication

### Option 1: Personal Google Account (FREE)

**Free Tier Includes:**
- ✅ Gemini 2.5 Pro model
- ✅ 1 million token context window
- ✅ 60 requests/minute
- ✅ 1,000 requests/day
- ✅ **No cost**

**Setup:**
```bash
# Start Gemini CLI
gemini

# Sign in with Google when prompted
# Follow browser authentication flow
```

---

### Option 2: API Key (Usage-Based Billing)

**Get API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create new API key
3. Copy and save securely

**Configure:**
```bash
# Set API key
export GEMINI_API_KEY="your-api-key-here"

# Start Gemini CLI
gemini
```

**Make Permanent:**

**macOS/Linux:**
```bash
echo 'export GEMINI_API_KEY="your-key"' >> ~/.bashrc
source ~/.bashrc
```

**Windows:**
```powershell
[Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your-key", "User")
```

---

## Post-Installation Setup

### 1. Verify Installation

```bash
# Check version
gemini --version

# Test basic functionality
gemini "Hello, test the installation"
```

### 2. Configure Settings

```bash
# View current config
gemini config show

# Set default model
gemini config set model gemini-2.5-pro

# Set temperature
gemini config set temperature 0.7
```

---

## Configuration File

### Location

| Platform | Path |
|----------|------|
| **macOS/Linux** | `~/.gemini/config.json` |
| **Windows** | `%USERPROFILE%\.gemini\config.json` |

### Example Configuration

```json
{
  "model": "gemini-2.5-pro",
  "temperature": 0.7,
  "maxOutputTokens": 8192,
  "safetySettings": {
    "HARM_CATEGORY_HARASSMENT": "BLOCK_NONE",
    "HARM_CATEGORY_HATE_SPEECH": "BLOCK_NONE"
  }
}
```

---

## Updating Gemini CLI

```bash
# Update to latest version
npm update -g @google/gemini-cli

# Verify new version
gemini --version
```

---

## Troubleshooting

### Command Not Found

**Solution:**
```bash
# Check npm global bin path
npm bin -g

# Add to PATH
export PATH="$PATH:$(npm bin -g)"

# Make permanent
echo 'export PATH="$PATH:$(npm bin -g)"' >> ~/.bashrc
```

### Node.js Version Issues

```bash
# Check version
node --version  # Should be 18+

# Update Node.js
# macOS
brew upgrade node

# Linux (nvm)
nvm install --lts
nvm use --lts

# Windows
# Download from nodejs.org
```

### Authentication Issues

**Free Tier:**
```bash
# Clear authentication cache
rm -rf ~/.gemini/auth

# Re-authenticate
gemini
```

**API Key:**
```bash
# Verify key is set
echo $GEMINI_API_KEY

# Test key
curl -H "Authorization: Bearer $GEMINI_API_KEY" \
  https://generativelanguage.googleapis.com/v1/models
```

### Rate Limit Exceeded

**Free Tier Limits:**
- 60 requests/minute
- 1,000 requests/day

**Solutions:**
1. Wait for quota reset (daily)
2. Upgrade to API key with billing
3. Reduce request frequency

---

## Uninstallation

```bash
# Remove Gemini CLI
npm uninstall -g @google/gemini-cli

# Remove config
rm -rf ~/.gemini
```

---

## Enterprise Installation

### System-Wide Deployment

**Linux:**
```bash
sudo npm install -g @google/gemini-cli --prefix /usr/local
```

**Windows (as Administrator):**
```powershell
npm install -g @google/gemini-cli --prefix "C:\Program Files\Google"
```

### Google Workspace Integration

For Google Workspace organizations:
- Use service accounts
- Configure OAuth 2.0
- Set up domain-wide delegation

---

## Next Steps

- **[Configure Settings →](/gemini-cli/configuration/)**
- **[View Main Guide →](/gemini-cli/)**
- **[Compare with Other CLIs →](/comparisons/feature-matrix.md)**

---

## Additional Resources

- [Official Documentation](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-cli)
- [GitHub Repository](https://github.com/google-gemini/gemini-cli)
- [Google AI Studio](https://makersuite.google.com/)

---

*Last updated: 2025-11-12*
