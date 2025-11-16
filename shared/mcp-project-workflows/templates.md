# MCP Workspace Templates - Quick Copy-Paste

Ready-to-use configuration templates for all 13 project types. Simply copy the appropriate template and paste into your IDE's configuration file.

---

## Template Index

1. [Greenfield - Minimal](#1-greenfield---minimal)
2. [Greenfield - Optimal](#2-greenfield---optimal)
3. [Greenfield - Maximum](#3-greenfield---maximum)
4. [Brownfield - Minimal](#4-brownfield---minimal)
5. [Brownfield - Optimal](#5-brownfield---optimal)
6. [Maintenance - Minimal](#6-maintenance---minimal)
7. [Bug Fix - Minimal](#7-bug-fix---minimal)
8. [Enhancement - Optimal](#8-enhancement---optimal)
9. [Refactoring - Optimal](#9-refactoring---optimal)
10. [Integration - Optimal](#10-integration---optimal)
11. [Prototype - Minimal](#11-prototype---minimal)
12. [Legacy Modernization - Maximum](#12-legacy-modernization---maximum)
13. [Rewrite - Maximum](#13-rewrite---maximum)

---

## 1. Greenfield - Minimal

**Cost:** $0/month | **Setup:** 10min | **Servers:** Spec Kit + Zen

```json
{
  "mcpServers": {
    "spec-kit": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-spec-kit"],
      "env": {
        "SPEC_KIT_MODE": "constitutional"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "gemini-2.5-pro",
        "GOOGLE_API_KEY": "${GOOGLE_API_KEY}"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-spec-kit
npm install -g @modelcontextprotocol/server-zen
```

---

## 2. Greenfield - Optimal

**Cost:** $200-350/month | **Setup:** 30min | **Servers:** Spec Kit + Task Master + Zen

```json
{
  "mcpServers": {
    "spec-kit": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-spec-kit"],
      "env": {
        "SPEC_KIT_MODE": "constitutional",
        "SPEC_KIT_PRD_PARSING": "true"
      }
    },
    "taskmaster": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-taskmaster"],
      "env": {
        "TASKMASTER_MEMORY_ENABLED": "true",
        "TASKMASTER_EPIC_SHARDING": "auto"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-5-sonnet,gpt-4,gemini-2.5-pro",
        "ZEN_O3_ROUTING": "true",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}",
        "GOOGLE_API_KEY": "${GOOGLE_API_KEY}"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-spec-kit
npm install -g @modelcontextprotocol/server-taskmaster
npm install -g @modelcontextprotocol/server-zen
```

---

## 3. Greenfield - Maximum

**Cost:** $300-500/month | **Setup:** 45min | **Servers:** Spec Kit + Task Master + Shrimp + Zen

```json
{
  "mcpServers": {
    "spec-kit": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-spec-kit"],
      "env": {
        "SPEC_KIT_MODE": "constitutional",
        "SPEC_KIT_PRD_PARSING": "true",
        "SPEC_KIT_VALIDATION": "strict"
      }
    },
    "taskmaster": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-taskmaster"],
      "env": {
        "TASKMASTER_MEMORY_ENABLED": "true",
        "TASKMASTER_EPIC_SHARDING": "auto",
        "TASKMASTER_PHASES": "plan,execute,validate"
      }
    },
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_ANALYSIS_DEPTH": "deep",
        "SHRIMP_REVIEW_MODE": "proactive"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-opus,gpt-4,gemini-2.5-pro",
        "ZEN_O3_ROUTING": "true",
        "ZEN_CONSENSUS_REQUIRED": "true",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}",
        "GOOGLE_API_KEY": "${GOOGLE_API_KEY}"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-spec-kit
npm install -g @modelcontextprotocol/server-taskmaster
npm install -g @modelcontextprotocol/server-shrimp
npm install -g @modelcontextprotocol/server-zen
```

---

## 4. Brownfield - Minimal

**Cost:** $30-80/month | **Setup:** 15min | **Servers:** OpenSpec + Shrimp

```json
{
  "mcpServers": {
    "openspec": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-openspec", "${workspaceFolder}"],
      "env": {
        "OPENSPEC_TRACK_CHANGES": "true"
      }
    },
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_ANALYSIS_DEPTH": "moderate"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-openspec
npm install -g @modelcontextprotocol/server-shrimp
```

---

## 5. Brownfield - Optimal

**Cost:** $100-180/month | **Setup:** 20min | **Servers:** OpenSpec + Shrimp + Zen

```json
{
  "mcpServers": {
    "openspec": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-openspec", "${workspaceFolder}"],
      "env": {
        "OPENSPEC_TRACK_CHANGES": "true",
        "OPENSPEC_DELTA_MODE": "explicit"
      }
    },
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_ANALYSIS_DEPTH": "deep",
        "SHRIMP_REVIEW_MODE": "intelligent"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-5-sonnet,gpt-4",
        "ZEN_VALIDATION_MODE": "code-review",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-openspec
npm install -g @modelcontextprotocol/server-shrimp
npm install -g @modelcontextprotocol/server-zen
```

---

## 6. Maintenance - Minimal

**Cost:** $50-100/month | **Setup:** 15min | **Servers:** Zen + Shrimp

```json
{
  "mcpServers": {
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-5-sonnet,gpt-4",
        "ZEN_O3_ROUTING": "true",
        "ZEN_DEBUG_MODE": "true",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}"
      }
    },
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_ANALYSIS_DEPTH": "targeted",
        "SHRIMP_REVIEW_MODE": "fast"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-zen
npm install -g @modelcontextprotocol/server-shrimp
```

---

## 7. Bug Fix - Minimal

**Cost:** $30-80/month | **Setup:** 10min | **Servers:** Zen + Shrimp

```json
{
  "mcpServers": {
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-5-sonnet",
        "ZEN_O3_ROUTING": "true",
        "ZEN_DEBUG_MODE": "true",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}"
      }
    },
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_ANALYSIS_DEPTH": "targeted"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-zen
npm install -g @modelcontextprotocol/server-shrimp
```

---

## 8. Enhancement - Optimal

**Cost:** $100-200/month | **Setup:** 25min | **Servers:** Task Master + OpenSpec + Zen

```json
{
  "mcpServers": {
    "taskmaster": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-taskmaster"],
      "env": {
        "TASKMASTER_MEMORY_ENABLED": "true",
        "TASKMASTER_EPIC_SHARDING": "auto",
        "TASKMASTER_PRD_PARSING": "true"
      }
    },
    "openspec": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-openspec", "${workspaceFolder}"],
      "env": {
        "OPENSPEC_TRACK_CHANGES": "true",
        "OPENSPEC_INTEGRATION_ANALYSIS": "true"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-5-sonnet,gpt-4",
        "ZEN_VALIDATION_MODE": "feature",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-taskmaster
npm install -g @modelcontextprotocol/server-openspec
npm install -g @modelcontextprotocol/server-zen
```

---

## 9. Refactoring - Optimal

**Cost:** $100-200/month | **Setup:** 20min | **Servers:** Zen + Shrimp + Spec Kit

```json
{
  "mcpServers": {
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-5-sonnet,gpt-4",
        "ZEN_O3_ROUTING": "true",
        "ZEN_REFACTORING_MODE": "true",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}"
      }
    },
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_ANALYSIS_DEPTH": "deep",
        "SHRIMP_CRITIQUE_MODE": "challenge"
      }
    },
    "spec-kit": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-spec-kit"],
      "env": {
        "SPEC_KIT_MODE": "validation",
        "SPEC_KIT_REFLECTION": "true"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-zen
npm install -g @modelcontextprotocol/server-shrimp
npm install -g @modelcontextprotocol/server-spec-kit
```

---

## 10. Integration - Optimal

**Cost:** $120-220/month | **Setup:** 25min | **Servers:** OpenSpec + Task Master + Zen

```json
{
  "mcpServers": {
    "openspec": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-openspec", "${workspaceFolder}"],
      "env": {
        "OPENSPEC_INTEGRATION_MODE": "true",
        "OPENSPEC_API_MAPPING": "true"
      }
    },
    "taskmaster": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-taskmaster"],
      "env": {
        "TASKMASTER_API_ORCHESTRATION": "true",
        "TASKMASTER_WORKFLOW_MODE": "integration"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-5-sonnet,gpt-4",
        "ZEN_VALIDATION_MODE": "api",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-openspec
npm install -g @modelcontextprotocol/server-taskmaster
npm install -g @modelcontextprotocol/server-zen
```

---

## 11. Prototype - Minimal

**Cost:** $20-60/month | **Setup:** 10min | **Servers:** Shrimp + Zen

```json
{
  "mcpServers": {
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_RESEARCH_MODE": "true",
        "SHRIMP_BRAINSTORMING": "rapid"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-5-sonnet,gemini-2.5-pro",
        "ZEN_VALIDATION_MODE": "rapid",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "GOOGLE_API_KEY": "${GOOGLE_API_KEY}"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-shrimp
npm install -g @modelcontextprotocol/server-zen
```

---

## 12. Legacy Modernization - Maximum

**Cost:** $250-450/month | **Setup:** 50min | **Servers:** Spec Kit + Task Master + Shrimp + Zen + BMAD

```json
{
  "mcpServers": {
    "spec-kit": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-spec-kit"],
      "env": {
        "SPEC_KIT_MODE": "modernization",
        "SPEC_KIT_CONSTITUTIONAL": "true"
      }
    },
    "taskmaster": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-taskmaster"],
      "env": {
        "TASKMASTER_MEMORY_ENABLED": "true",
        "TASKMASTER_EPIC_SHARDING": "aggressive",
        "TASKMASTER_PHASES": "analyze,plan,execute,validate"
      }
    },
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_ANALYSIS_DEPTH": "comprehensive",
        "SHRIMP_LEGACY_MODE": "true"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-opus,gpt-4,gemini-2.5-pro",
        "ZEN_O3_ROUTING": "true",
        "ZEN_CONSENSUS_REQUIRED": "true",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}",
        "GOOGLE_API_KEY": "${GOOGLE_API_KEY}"
      }
    },
    "bmad": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-bmad"],
      "env": {
        "BMAD_EPIC_MODE": "true",
        "BMAD_PHASES": "break,make,analyze,decide",
        "BMAD_COMPLEXITY_THRESHOLD": "high"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-spec-kit
npm install -g @modelcontextprotocol/server-taskmaster
npm install -g @modelcontextprotocol/server-shrimp
npm install -g @modelcontextprotocol/server-zen
npm install -g @modelcontextprotocol/server-bmad
```

---

## 13. Rewrite - Maximum

**Cost:** $350-550/month | **Setup:** 55min | **Servers:** Spec Kit + Task Master + Shrimp + Zen + BMAD

```json
{
  "mcpServers": {
    "spec-kit": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-spec-kit"],
      "env": {
        "SPEC_KIT_MODE": "rewrite",
        "SPEC_KIT_CONSTITUTIONAL": "true",
        "SPEC_KIT_PRD_PARSING": "strict"
      }
    },
    "taskmaster": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-taskmaster"],
      "env": {
        "TASKMASTER_MEMORY_ENABLED": "true",
        "TASKMASTER_EPIC_SHARDING": "maximum",
        "TASKMASTER_PRD_PARSING": "true"
      }
    },
    "shrimp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-shrimp", "${workspaceFolder}"],
      "env": {
        "SHRIMP_ANALYSIS_DEPTH": "comprehensive",
        "SHRIMP_LEGACY_MODE": "true",
        "SHRIMP_COMPARISON_MODE": "true"
      }
    },
    "zen": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-zen"],
      "env": {
        "ZEN_MODELS": "claude-3-opus,gpt-4,gemini-2.5-pro",
        "ZEN_O3_ROUTING": "true",
        "ZEN_CONSENSUS_REQUIRED": "true",
        "ZEN_VALIDATION_MODE": "strict",
        "ANTHROPIC_API_KEY": "${ANTHROPIC_API_KEY}",
        "OPENAI_API_KEY": "${OPENAI_API_KEY}",
        "GOOGLE_API_KEY": "${GOOGLE_API_KEY}"
      }
    },
    "bmad": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-bmad"],
      "env": {
        "BMAD_EPIC_MODE": "true",
        "BMAD_PHASES": "break,make,analyze,decide",
        "BMAD_COMPLEXITY_THRESHOLD": "maximum"
      }
    }
  }
}
```

**Installation:**
```bash
npm install -g @modelcontextprotocol/server-spec-kit
npm install -g @modelcontextprotocol/server-taskmaster
npm install -g @modelcontextprotocol/server-shrimp
npm install -g @modelcontextprotocol/server-zen
npm install -g @modelcontextprotocol/server-bmad
```

---

## Where to Place These Configurations

### Claude Code
Place in: `.claude/config.json` in your project root

### Claude Desktop
Place in: `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
Or: `%APPDATA%\Claude\claude_desktop_config.json` (Windows)

### Gemini CLI
Place in: `~/.gemini/config.json`

### VS Code Extensions (Cline, Roo-Code)
Place in: `.vscode/settings.json` under `"cline.mcpServers"` or `"roocode.mcpServers"`

---

## Environment Variables Setup

Before using these templates, set your API keys:

**macOS/Linux (~/.bashrc or ~/.zshrc):**
```bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
export OPENAI_API_KEY="sk-proj-..."
export GOOGLE_API_KEY="AIza..."
```

**Windows (PowerShell Profile):**
```powershell
$env:ANTHROPIC_API_KEY="sk-ant-api03-..."
$env:OPENAI_API_KEY="sk-proj-..."
$env:GOOGLE_API_KEY="AIza..."
```

---

## Verification After Setup

After copying a template and restarting your IDE, verify:

```bash
# Claude Code
/mcp list

# Gemini CLI
gemini mcp list

# Check logs if servers don't appear
tail -f ~/.claude/logs/mcp.log
```

---

*For detailed explanations of each configuration, see the [Master Workflow Guide](./README.md)*
