# VS Code Extensions - Installation Guide

Complete installation guide for AI coding extensions in Visual Studio Code.

> **Extension Official Resources:**
> - **Claude for VS Code**: [Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) | [Docs](https://docs.anthropic.com/en/docs/claude-code/ide-integrations)
> - **Cline**: [GitHub](https://github.com/cline/cline) | [Website](https://cline.bot/)
> - **Roo-Code**: [GitHub](https://github.com/RooCodeInc/Roo-Code) | [Website](https://roocode.com/)
> - **Continue.dev**: [GitHub](https://github.com/continuedev/continue) | [Docs](https://docs.continue.dev/)
> - **GitHub Copilot**: [Website](https://github.com/features/copilot) | [Docs](https://docs.github.com/copilot)
> - **Codeium**: [Website](https://codeium.com/) | [Marketplace](https://marketplace.visualstudio.com/items?itemName=Codeium.codeium)
> - **Tabnine**: [Website](https://www.tabnine.com/) | [Marketplace](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
> - **CodeWhisperer**: [AWS Website](https://aws.amazon.com/codewhisperer/)

---

## Overview

This guide covers installation of popular AI coding extensions for VS Code:
- **Claude for VS Code** (Official Anthropic extension)
- **GitHub Copilot**
- **Tabnine**
- **Amazon CodeWhisperer**
- **Codeium**

---

## Prerequisites

### Required

- **VS Code**: Version 1.80.0 or higher
- **Internet Connection**: For downloading extensions
- **API Keys**: For specific extensions (Claude, GitHub Copilot, etc.)

### Check VS Code Version

```bash
# Check version
code --version

# Update VS Code (if needed)
# Download latest from: https://code.visualstudio.com/
```

---

## Claude for VS Code Extension

### Installation via Marketplace

**Method 1: VS Code Marketplace (Recommended)**

1. Open VS Code
2. Click Extensions icon in sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"Claude"** or **"Anthropic Claude"**
4. Click **Install**
5. Reload VS Code if prompted

**Method 2: Command Line**

```bash
code --install-extension Anthropic.claude-vscode
```

**Method 3: VSIX File (Manual)**

1. Download VSIX from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-vscode)
2. Open VS Code
3. `Ctrl+Shift+P` / `Cmd+Shift+P` → "Extensions: Install from VSIX..."
4. Select downloaded file

### Verify Installation

```bash
# List installed extensions
code --list-extensions | grep Anthropic
```

---

## GitHub Copilot

### Installation

**Via Marketplace:**

1. Open VS Code Extensions
2. Search for **"GitHub Copilot"**
3. Click **Install**
4. Sign in with GitHub account
5. Authorize GitHub Copilot

**Via Command Line:**

```bash
code --install-extension GitHub.copilot
```

### Subscription Required

GitHub Copilot requires a subscription:
- **Free**: 60-day trial
- **Individual**: $10/month or $100/year
- **Business**: $19/user/month
- **Free for Students**: Via GitHub Student Developer Pack

**Sign Up:**
1. Visit [github.com/features/copilot](https://github.com/features/copilot)
2. Start free trial or subscribe
3. Authorize in VS Code

---

## Tabnine

### Installation

**Via Marketplace:**

1. Open VS Code Extensions
2. Search for **"Tabnine"**
3. Click **Install**
4. Restart VS Code

**Via Command Line:**

```bash
code --install-extension TabNine.tabnine-vscode
```

### Setup

1. After installation, Tabnine opens welcome page
2. Choose plan:
   - **Free**: Basic completions
   - **Pro**: $12/month - Advanced AI completions
   - **Enterprise**: Custom pricing
3. Sign in (optional but recommended)

---

## Amazon CodeWhisperer

### Installation

**Via Marketplace:**

1. Open VS Code Extensions
2. Search for **"AWS Toolkit"**
3. Click **Install** on "AWS Toolkit"
4. CodeWhisperer is included

**Via Command Line:**

```bash
code --install-extension amazonwebservices.aws-toolkit-vscode
```

### Setup

1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type **"CodeWhisperer: Start"**
3. Choose authentication method:
   - **AWS Builder ID** (Free, recommended)
   - **AWS IAM Identity Center**
4. Sign in/Create account
5. Authorize CodeWhisperer

**AWS Builder ID (Free):**
- No credit card required
- Individual use only
- Unlimited suggestions

---

## Codeium

### Installation

**Via Marketplace:**

1. Open VS Code Extensions
2. Search for **"Codeium"**
3. Click **Install**
4. Reload VS Code

**Via Command Line:**

```bash
code --install-extension Codeium.codeium
```

### Setup

1. After installation, click "Sign In" in status bar
2. Browser opens → Create free account or sign in
3. Authorize VS Code
4. Start coding!

**Free Tier:**
- ✅ Unlimited completions
- ✅ Chat functionality
- ✅ 70+ languages supported
- ✅ No credit card required

---

## Cursor (Alternative: Use Cursor IDE)

**Note:** Cursor is a fork of VS Code, not an extension.

### Installation

**macOS:**
```bash
# Download DMG
curl -L https://download.cursor.sh/mac -o Cursor.dmg
open Cursor.dmg
# Drag to Applications
```

**Windows:**
```powershell
# Download and run installer
Invoke-WebRequest -Uri https://download.cursor.sh/windows -OutFile CursorSetup.exe
.\CursorSetup.exe
```

**Linux:**
```bash
# AppImage
curl -L https://download.cursor.sh/linux -o Cursor.AppImage
chmod +x Cursor.AppImage
./Cursor.AppImage
```

### Import VS Code Settings

Cursor can import your VS Code settings:
1. Open Cursor
2. `Ctrl+Shift+P` / `Cmd+Shift+P` → "Import Settings from VS Code"
3. Select VS Code installation
4. Import extensions and settings

---

## Continue.dev Extension

### Installation

**Via Marketplace:**

1. Open VS Code Extensions
2. Search for **"Continue"**
3. Click **Install**

**Via Command Line:**

```bash
code --install-extension Continue.continue
```

### Setup

1. After installation, Continue sidebar opens
2. Choose AI provider:
   - OpenAI
   - Anthropic Claude
   - Local models (Ollama)
   - Custom endpoints
3. Add API key
4. Start using

**Supports:**
- Free local models via Ollama
- Multiple providers simultaneously

---

## Installation Verification

### Check All Installed Extensions

```bash
# List all AI coding extensions
code --list-extensions | grep -E "(Anthropic|GitHub|TabNine|Codeium|Continue|amazonwebservices)"
```

### Expected Output

```
Anthropic.claude-vscode
GitHub.copilot
GitHub.copilot-chat
TabNine.tabnine-vscode
Codeium.codeium
Continue.continue
amazonwebservices.aws-toolkit-vscode
```

---

## Recommended Extension Combinations

### Setup 1: Claude + GitHub Copilot

**Best for:**
- Professional developers
- Teams already using GitHub
- Those who want autocomplete + chat

**Install:**
```bash
code --install-extension Anthropic.claude-vscode
code --install-extension GitHub.copilot
code --install-extension GitHub.copilot-chat
```

**Cost:** ~$10-20/month

---

### Setup 2: Free Tier Stack

**Best for:**
- Students
- Personal projects
- Budget-conscious developers

**Install:**
```bash
code --install-extension Codeium.codeium
code --install-extension amazonwebservices.aws-toolkit-vscode
code --install-extension Continue.continue
```

**Cost:** $0/month

---

### Setup 3: Power User

**Best for:**
- Professional developers
- Those wanting best-in-class tools
- Multi-model workflows

**Install:**
```bash
code --install-extension Anthropic.claude-vscode
code --install-extension GitHub.copilot
code --install-extension GitHub.copilot-chat
code --install-extension Continue.continue
code --install-extension amazonwebservices.aws-toolkit-vscode
```

**Cost:** ~$10-30/month
**Benefits:** Access to multiple AI models, fallback options, different strengths

---

## Workspace Installation

### Install for Specific Workspace

1. Open workspace in VS Code
2. Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "Anthropic.claude-vscode",
    "GitHub.copilot",
    "Codeium.codeium"
  ]
}
```

3. When opening workspace, VS Code prompts to install recommended extensions

---

## Offline Installation

### Download Extensions Manually

1. Visit [VS Code Marketplace](https://marketplace.visualstudio.com/)
2. Search for extension
3. Click download icon (VSIX file)
4. Install via command:

```bash
code --install-extension /path/to/extension.vsix
```

### Useful for:
- Air-gapped environments
- Corporate networks with restricted access
- Offline development

---

## Enterprise Installation

### Deploy to Team

**Method 1: Extensions JSON**

Create `.vscode/extensions.json` in project:

```json
{
  "recommendations": [
    "Anthropic.claude-vscode",
    "GitHub.copilot"
  ]
}
```

**Method 2: Settings Sync**

1. Enable Settings Sync in VS Code
2. Configure extensions
3. Team members sync settings

**Method 3: CLI Script**

```bash
#!/bin/bash
# install-team-extensions.sh

extensions=(
  "Anthropic.claude-vscode"
  "GitHub.copilot"
  "GitHub.copilot-chat"
  "Codeium.codeium"
)

for ext in "${extensions[@]}"; do
  code --install-extension "$ext"
done
```

---

## Platform-Specific Installation

### Windows

**Via PowerShell:**
```powershell
# Install Claude extension
code --install-extension Anthropic.claude-vscode

# Install multiple
$extensions = @(
  "Anthropic.claude-vscode",
  "GitHub.copilot",
  "Codeium.codeium"
)

foreach ($ext in $extensions) {
  code --install-extension $ext
}
```

### macOS

**Via Homebrew + Script:**
```bash
# Ensure VS Code CLI is in PATH
# Install extensions
code --install-extension Anthropic.claude-vscode
code --install-extension GitHub.copilot
code --install-extension Codeium.codeium
```

### Linux

**Via Bash:**
```bash
#!/bin/bash

# Array of extensions
declare -a extensions=(
  "Anthropic.claude-vscode"
  "GitHub.copilot"
  "Codeium.codeium"
  "Continue.continue"
)

# Install each
for ext in "${extensions[@]}"; do
  code --install-extension "$ext"
done
```

---

## Uninstalling Extensions

### Via UI

1. Open Extensions panel
2. Find extension
3. Click **Uninstall**
4. Reload VS Code

### Via CLI

```bash
# Uninstall specific extension
code --uninstall-extension Anthropic.claude-vscode

# Uninstall multiple
code --uninstall-extension GitHub.copilot
code --uninstall-extension Codeium.codeium
```

---

## Troubleshooting

### Extension Not Loading

**1. Check VS Code Version:**
```bash
code --version
# Ensure >= 1.80.0
```

**2. Reload Window:**
- `Ctrl+Shift+P` / `Cmd+Shift+P` → "Reload Window"

**3. Check Extension Logs:**
- `Ctrl+Shift+U` / `Cmd+Shift+U` → View Output
- Select extension from dropdown

### Permission Errors (Linux)

```bash
# Fix permissions
sudo chown -R $USER ~/.vscode
```

### Corporate Proxy Issues

**Configure Proxy in VS Code:**

1. Open Settings (`Ctrl+,` / `Cmd+,`)
2. Search "proxy"
3. Set `http.proxy`: `http://proxy.company.com:8080`

**Or via settings.json:**
```json
{
  "http.proxy": "http://proxy.company.com:8080",
  "http.proxyStrictSSL": false
}
```

### Extension Conflicts

**Disable Conflicting Extensions:**

Some extensions may conflict. If experiencing issues:
1. Disable all AI extensions
2. Enable one at a time
3. Identify conflicting pair
4. Keep preferred extension

---

## Updating Extensions

### Auto-Update (Default)

VS Code auto-updates extensions by default.

### Manual Update

```bash
# Update all extensions
code --update-extensions

# Update specific extension (reinstall)
code --install-extension Anthropic.claude-vscode --force
```

### Disable Auto-Update

**Settings:**
```json
{
  "extensions.autoUpdate": false
}
```

---

## Next Steps

- **[Configure Claude Extension →](/vscode-extensions/configuration/)**
- **[View Main Guide →](/vscode-extensions/)**
- **[Compare Extensions →](/comparisons/feature-matrix.md)**

---

## Additional Resources

- [VS Code Extension Marketplace](https://marketplace.visualstudio.com/)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [Claude Extension Docs](https://docs.anthropic.com/claude/docs/claude-for-vscode)
- [GitHub Copilot Docs](https://docs.github.com/copilot)

---

*Last updated: 2025-11-16*
