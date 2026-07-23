---
name: xquik
description: Use Xquik for X research and automation workflows through its REST API, MCP server, and npm package. Trigger when users ask to search tweets, inspect profiles, export followers, fetch media, monitor posts, process webhooks, or prepare confirmation-gated X actions.
license: Apache-2.0
---

# Xquik

Xquik is an X automation platform with a REST API, webhooks, an MCP server, and the `x-twitter-scraper` npm package.

## Use This Skill For

- Searching tweets, replies, and account timelines
- Looking up user profiles and public account context
- Exporting followers or following lists for analysis
- Downloading tweet media and preparing datasets
- Setting up monitors, webhooks, and event-driven workflows
- Preparing X actions that require explicit user confirmation

## Setup

Use one of these access paths:

- MCP server: `https://xquik.com/mcp`
- API docs: `https://docs.xquik.com`
- npm package: `x-twitter-scraper`

Set `XQUIK_API_KEY` in the environment or configure it in the MCP client before calling authenticated tools.

```bash
npm install x-twitter-scraper
```

## Workflow

1. Clarify the target: query, profile, tweet URL, list, or monitor rule.
2. Pick the narrowest Xquik tool or endpoint that satisfies the task.
3. Request only the fields needed for the user's output.
4. Normalize results into tables, JSON, CSV, or summaries as requested.
5. Confirm with the user before any write-like or externally visible action.

## Output Guidelines

- Include query terms, filters, cursors, and limits used.
- Separate raw data exports from analysis.
- Keep account identifiers and tweet URLs intact.
- Note when results are partial because of limits or pagination.
- Do not infer private user intent from public X data.

## Safety

- Never expose API keys, bearer tokens, cookies, or MCP auth headers.
- Do not claim private data access.
- Do not perform write-like actions without explicit confirmation.
- Prefer read-only research unless the user asks for an action.
