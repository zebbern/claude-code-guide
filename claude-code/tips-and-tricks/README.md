# Claude Code - Tips & Tricks

Expert tips, workflows, and best practices for Claude Code CLI.

---

## Quick Tips

### 🚀 Productivity Boosters

1. **Use keyboard shortcuts** instead of typing commands
2. **Create aliases** for common workflows
3. **Enable sound alerts** to know when tasks complete
4. **Save successful sessions** as templates
5. **Use MCP servers** for powerful integrations

---

## Keyboard Shortcuts

### Default Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl+C** | Cancel current generation |
| **Ctrl+D** | Exit Claude Code |
| **↑** | Previous command |
| **↓** | Next command |
| **Tab** | Autocomplete (if enabled) |

### Custom Shortcuts

Create shell aliases:

```bash
# Add to ~/.bashrc or ~/.zshrc
alias cc='claude'
alias ccc='claude config'
alias ccl='claude logs'

# Quick start in project
alias ccp='cd ~/Projects && claude'
```

---

## Effective Prompting

### ✅ Good Prompts

**Be Specific:**
```
Good: "Create a FastAPI endpoint for user registration with email validation, password hashing, and JWT token generation"

Bad: "Make an API"
```

**Provide Context:**
```
Good: "Refactor the authentication module in src/auth.py to use async/await instead of callbacks"

Bad: "Improve auth"
```

**Include Requirements:**
```
Good: "Write unit tests for the UserService class using pytest. Include tests for create, read, update, and delete operations"

Bad: "Add tests"
```

### ❌ Avoid

- Vague requests
- Missing context
- Assuming Claude knows your project structure
- Expecting mind-reading

---

## Workflow Patterns

### Pattern 1: Feature Development

```bash
# 1. Start with planning
> Create a detailed plan for implementing a shopping cart feature with:
> - Add/remove items
> - Calculate totals
> - Apply discount codes
> - Persist to database

# 2. Implement incrementally
> Implement the Cart model first
> Now add the CartItem model
> Create the add_item method with validation
> Add unit tests for add_item

# 3. Test and refine
> Run the tests and fix any failures
> Optimize the total calculation for large carts
```

### Pattern 2: Debugging

```bash
# 1. Describe the issue
> The login function is throwing "AttributeError: 'NoneType' object has no attribute 'id'"
> when trying to authenticate users

# 2. Provide context
> Here's the error traceback: [paste traceback]

# 3. Let Claude investigate
> Can you identify the root cause and suggest a fix?

# 4. Apply and verify
> Apply that fix and run the tests to confirm it works
```

### Pattern 3: Refactoring

```bash
# 1. Explain current state
> The UserController class has grown to 500 lines and handles too many responsibilities

# 2. Define goals
> Refactor it following single responsibility principle:
> - Extract authentication logic
> - Create separate service layer
> - Improve testability

# 3. Review proposed changes
> Show me the refactored structure before applying changes

# 4. Apply incrementally
> Start by extracting the AuthService
> Now extract the UserValidation class
> Update tests for the refactored code
```

---

## Git Integration Tips

### Auto-Commit Workflow

```bash
# Enable auto-commit for project
claude config set --local git.autoCommit true

# Set commit prefix
claude config set --local git.commitPrefix "feat:"

# Example workflow:
> Create a new user registration endpoint
# Claude creates files and commits:
# "feat: Add user registration endpoint"

> Add input validation
# "feat: Add input validation to registration"
```

### Manual Commit Control

```bash
# Keep auto-commit off
claude config set git.autoCommit false

# Review changes first
git diff

# Commit when ready
> Create a commit for these changes with message "Add user authentication"
```

---

## MCP Server Workflows

### Filesystem + GitHub Workflow

```bash
# Create feature locally
> Create a new React component called UserProfile in src/components/

# Test it
> Read the component and suggest improvements

# Create PR
> Create a GitHub PR for this new component with:
> - Title: "Add UserProfile component"
> - Description: Summary of changes
> - Label: "enhancement"
```

### Brave Search + Filesystem

```bash
# Research and implement
> Search for the latest best practices for React hooks in 2025

> Based on those results, refactor our useAuth hook to follow best practices

> Create documentation in docs/hooks.md explaining the new pattern
```

---

## Session Management

### Save Successful Sessions

```bash
# After completing a task
claude session save "user-auth-implementation"

# List saved sessions
claude session list

# Load and continue
claude session load "user-auth-implementation"

# Export session
claude session export "user-auth-implementation" > user-auth.json
```

### Share Sessions

```bash
# Export for teammate
claude session export "feature-implementation" > feature.json

# Teammate imports
claude session import < feature.json
```

---

## Performance Optimization

### Speed Up Responses

```bash
# Use faster model for simple tasks
claude config set model claude-3-haiku-20240307

# Reduce max tokens
claude config set maxTokens 2048

# Enable streaming
claude config set streaming true
```

### Optimize for Quality

```bash
# Use best model
claude config set model claude-3-opus-20240229

# Increase tokens
claude config set maxTokens 8192

# Higher temperature for creativity
claude config set temperature 0.8
```

---

## Multi-Project Setup

### Project-Specific Configs

```bash
# Project A (Frontend)
cd ~/Projects/frontend-app
claude config init
claude config set --local model claude-3-5-sonnet-20241022
claude config set --local git.commitPrefix "feat(ui):"

# Project B (Backend)
cd ~/Projects/backend-api
claude config init
claude config set --local model claude-3-opus-20240229
claude config set --local git.commitPrefix "feat(api):"
```

### Quick Project Switching

```bash
# Create aliases
alias cfront='cd ~/Projects/frontend-app && claude'
alias cback='cd ~/Projects/backend-api && claude'

# Use
cfront
> Create a new dashboard component

cback
> Add user authentication endpoint
```

---

## Testing Workflows

### TDD with Claude

```bash
# 1. Write failing test first
> Create a unit test for a function that calculates compound interest
> The function doesn't exist yet

# 2. Implement to pass test
> Now implement the calculateCompoundInterest function to make the test pass

# 3. Refactor
> Refactor the function for better readability while keeping tests passing

# 4. Add more tests
> Add edge case tests for negative values and zero amounts
```

### Test Generation

```bash
# Generate comprehensive tests
> Generate unit tests for the UserService class with:
> - Happy path tests
> - Error handling tests
> - Edge cases
> - Mock external dependencies
> - Aim for 90%+ coverage
```

---

## Documentation Workflows

### Auto-Documentation

```bash
# Generate README
> Create a README.md for this project with:
> - Overview
> - Installation instructions
> - Usage examples
> - API documentation
> - Contributing guidelines

# Generate API docs
> Generate OpenAPI/Swagger documentation for all endpoints in src/routes/

# Generate inline docs
> Add comprehensive JSDoc comments to all functions in src/utils/
```

---

## Debugging Tips

### Use Verbose Mode

```bash
# Enable debug logging
CLAUDE_LOG_LEVEL=debug claude

# Check logs
claude logs --follow
```

### Iterative Debugging

```bash
> The app crashes when clicking the submit button

> Here's the error: [paste error]

> Can you add console.log statements to help debug?

> Run the app and show me the console output

> Based on that output, what's the issue?

> Fix the issue and remove the debug logging
```

---

## Code Review Workflow

### Self-Review with Claude

```bash
# Before committing
> Review the changes in src/ for:
> - Code quality issues
> - Security vulnerabilities
> - Performance problems
> - Missing tests
> - Documentation gaps

> Apply any critical fixes you found

> Create a summary of the changes for the PR description
```

---

## Automation Scripts

### Common Task Automation

```bash
# Create script: ~/bin/claude-new-feature
#!/bin/bash
cd $1
claude << EOF
Create a new feature following our project structure:
1. Create component in src/components/
2. Add tests in tests/
3. Update documentation
4. Create example usage
EOF

# Use:
chmod +x ~/bin/claude-new-feature
claude-new-feature ~/Projects/my-app
```

---

## Security Best Practices

### 1. Never Include Secrets in Prompts

❌ **Bad:**
```
> Connect to database at postgresql://admin:password123@localhost/mydb
```

✅ **Good:**
```
> Connect to database using connection string from environment variable DATABASE_URL
```

### 2. Review Generated Code

Always review code for:
- SQL injection vulnerabilities
- XSS vulnerabilities
- Insecure dependencies
- Exposed credentials
- Weak encryption

### 3. Use Dangerous Mode Carefully

```bash
# Safer: Keep disabled
claude config set dangerous.enabled false

# If needed, allow specific commands only
claude config set dangerous.allowedCommands '["npm install", "npm test"]'
```

---

## Cost Optimization

### Minimize Token Usage

```bash
# Use shorter prompts
Bad:  "Can you please help me create a function..."
Good: "Create a function that..."

# Use Haiku for simple tasks
claude config set model claude-3-haiku-20240307

# Reduce max tokens
claude config set maxTokens 2048
```

### Track Usage

```bash
# View usage stats
claude usage

# Set spending limits (if using API)
claude config set usage.monthlyLimit 100
```

---

## Collaboration Tips

### Team Standards

```bash
# Share team config
cat ~/.config/claude/config.json > team-claude-config.json

# Team members import
cp team-claude-config.json ~/.config/claude/config.json
```

### Pair Programming

```bash
# Screen sharing workflow
> Let's work on the authentication module together
> I'll describe what I want, you implement
> Show me each change before applying
```

---

## Advanced Techniques

### Chain Multiple Tasks

```bash
> Complete these tasks in order:
> 1. Create UserModel with validation
> 2. Create UserService with CRUD operations
> 3. Create UserController with REST endpoints
> 4. Generate unit tests for all three
> 5. Create integration tests
> 6. Generate API documentation
```

### Context Management

```bash
# Large codebase? Provide context:
> For context, this is a NestJS app with:
> - TypeORM for database
> - JWT for auth
> - Jest for testing
>
> Now create a new resource for blog posts
```

---

## Troubleshooting Tips

### Claude Not Responding

```bash
# Check connection
claude status

# Restart
claude restart

# Clear cache
claude cache clear
```

### Unexpected Behavior

```bash
# Reset to defaults
claude config reset

# Try different model
claude config set model claude-3-opus-20240229

# Check for updates
claude update
```

---

## Pro Tips

1. **Start conversations with context** - Describe your project first
2. **Be iterative** - Build incrementally, not all at once
3. **Review before accepting** - Always check generated code
4. **Use MCP for file operations** - More reliable than copy/paste
5. **Save successful prompts** - Build a library of effective prompts
6. **Combine with other tools** - Use GitHub Copilot for autocomplete, Claude for complex tasks
7. **Learn from mistakes** - If something doesn't work, refine your prompt
8. **Read the diffs** - Understand what's changing before applying
9. **Use version control** - Easy to revert if needed
10. **Provide examples** - Show Claude what you want

---

## Example Workflows

### Complete Feature Implementation

```bash
# 1. Planning
> Let's implement a user profile feature. First, create a detailed plan.

# 2. Models
> Implement the UserProfile model in src/models/

# 3. Services
> Create UserProfileService with CRUD operations

# 4. Controllers
> Add REST endpoints in src/controllers/

# 5. Tests
> Generate comprehensive tests

# 6. Documentation
> Update API docs and create usage examples

# 7. Review
> Review all changes for issues

# 8. Commit
> Create commits with conventional commit messages
```

---

## Next Steps

- **[View Configuration Guide →](/claude-code/configuration/)**
- **[Explore MCP Servers →](/claude-code/mcp-setup/)**
- **[Compare with Other Tools →](/comparisons/feature-matrix.md)**

---

*Last updated: 2025-11-12*
