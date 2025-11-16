# Claude Desktop - Installation Guide

Complete installation instructions for Claude Desktop across all platforms.

---

## Download

Visit **[claude.ai/download](https://claude.ai/download)** and select your operating system.

---

## Windows Installation

### System Requirements

- **OS**: Windows 10 (version 1809+) or Windows 11
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 500MB free space
- **Network**: Internet connection required

### Installation Steps

1. **Download** the Windows installer (MSIX)
2. **Run** the installer (double-click the .msix file)
3. **Follow** the installation wizard
4. **Launch** from Start Menu or Desktop shortcut

### Enterprise Deployment

For IT administrators deploying Claude Desktop across organization:

```powershell
# Silent installation
msiexec /i ClaudeDesktop.msi /quiet /norestart

# Install for all users
msiexec /i ClaudeDesktop.msi ALLUSERS=1
```

---

## macOS Installation

### System Requirements

- **OS**: macOS 11 (Big Sur) or later
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 500MB free space
- **Chip**: Intel or Apple Silicon (Universal binary)

### Installation Steps

1. **Download** the macOS installer (PKG)
2. **Open** the .pkg file
3. **Follow** installation prompts
4. **Move** to Applications folder if prompted
5. **Launch** from Applications or Spotlight

### Package Manager Installation

```bash
# Via Homebrew (community maintained)
brew install --cask claude-desktop
```

### Enterprise Deployment

```bash
# Silent installation
sudo installer -pkg ClaudeDesktop.pkg -target /

# For all users
sudo installer -pkg ClaudeDesktop.pkg -target / -allowUntrusted
```

---

## Verification

### First Launch

1. **Open** Claude Desktop
2. **Sign in** with your Claude account
3. **Verify** your subscription (Pro/Max/Team/Enterprise)
4. **Test** with a simple query

### Check Version

- **Windows**: Settings > About
- **macOS**: Claude Desktop > About Claude Desktop

---

## Post-Installation Setup

### 1. Configure MCP Servers (Optional)

See [MCP Configuration Guide](/claude-desktop/mcp-configuration/)

### 2. Set Up Desktop Extensions (Recommended)

1. Open **Settings**
2. Navigate to **Extensions**
3. Click **"Browse extensions"**
4. Install recommended MCP servers with one click

### 3. Configure Keyboard Shortcuts

- **Settings > Keyboard Shortcuts**
- Customize as needed

---

## Troubleshooting

### Windows Installation Issues

**Issue**: "This app can't run on your PC"

**Solution:**
- Ensure Windows 10 version 1809 or later
- Check system architecture (64-bit required)
- Download correct installer version

**Issue**: Installation fails with error code

**Solution:**
```powershell
# Check Windows Installer service
Get-Service msiserver

# Restart if needed
Restart-Service msiserver

# Try installation again
```

### macOS Installation Issues

**Issue**: "Claude Desktop" can't be opened

**Solution:**
```bash
# Remove quarantine attribute
xattr -cr /Applications/Claude\ Desktop.app

# Or via System Settings
# System Settings > Privacy & Security > Allow apps from App Store and identified developers
```

**Issue**: Permission denied

**Solution:**
```bash
# Fix permissions
sudo chown -R $(whoami) /Applications/Claude\ Desktop.app
```

---

## Updating Claude Desktop

### Automatic Updates

Claude Desktop checks for updates automatically. You'll be prompted when an update is available.

### Manual Update

1. **Download** latest version from claude.ai/download
2. **Install** over existing installation
3. **Restart** application
4. **Verify** new version in About

---

## Uninstallation

### Windows

**Method 1: Settings**
1. Settings > Apps > Apps & features
2. Find "Claude Desktop"
3. Click Uninstall

**Method 2: Control Panel**
1. Control Panel > Programs > Programs and Features
2. Right-click "Claude Desktop"
3. Uninstall

**Method 3: PowerShell**
```powershell
Get-AppxPackage *Claude* | Remove-AppxPackage
```

### macOS

**Method 1: Finder**
1. Open Applications folder
2. Drag Claude Desktop to Trash
3. Empty Trash

**Method 2: Terminal**
```bash
sudo rm -rf /Applications/Claude\ Desktop.app
rm -rf ~/Library/Application\ Support/Claude
```

---

## Enterprise Features

### System-Wide Configuration

**Windows:**
- Deploy config via Group Policy
- Store in `C:\ProgramData\Claude\`

**macOS:**
- Use MDM (Jamf, Intune)
- Store in `/Library/Application Support/Claude/`

### License Management

Contact Anthropic for enterprise licensing:
- Team plans (5+ seats)
- Enterprise plans (custom)
- Volume licensing
- SSO integration

---

## Next Steps

- **[Configure MCP Servers →](/claude-desktop/mcp-configuration/)**
- **[Learn Keyboard Shortcuts →](/claude-desktop/keyboard-shortcuts/)**
- **[Compare with Web Version →](/claude-desktop/#comparison-with-web-version)**

---

*Last updated: 2025-11-12*
