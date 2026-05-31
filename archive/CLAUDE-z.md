# zebbern Guidelines

## 0 — Purpose
These are my coding standards. **MUST** = enforced. **SHOULD** = strongly recommended. **SHOULD NOT** = avoid.

---

## 1 — Before Coding

- **BP-1 (MUST)** Ask clarifying questions for ambiguous requests.
- **BP-2 (MUST)** Check existing code patterns—match naming, structure, style.
- **BP-3 (SHOULD)** Draft approach for complex work (≥3 files) before implementing.
- **BP-4 (SHOULD)** List pros/cons when ≥2 valid approaches exist.

---

## 2 — While Coding

- **C-1 (MUST)** TDD: failing test → implement → refactor.
- **C-2 (MUST)** Functions < 25 lines. Refactor if > 40.
- **C-3 (MUST)** No `any` types without explicit justification comment.
- **C-4 (MUST)** Validate all external inputs with zod or equivalent.
- **C-5 (MUST)** Use `import type { }` for type-only imports.
- **C-6 (SHOULD)** Self-documenting names: `MS_PER_DAY` not `d = 86400000`.
- **C-7 (SHOULD NOT)** Add comments unless they explain a non-obvious caveat.
- **C-8 (SHOULD NOT)** Extract functions unless reused or improves testability.
- **C-9 (SHOULD)** Prefer `type` over `interface` unless interface merging needed.
- **C-10 (SHOULD)** Fail fast—validate early, throw specific errors.

---

## 3 — Testing

- **T-1 (MUST)** Colocate tests: `*.spec.ts` or `*.test.ts` same directory.
- **T-2 (MUST)** One assertion concept per test.
- **T-3 (MUST)** Critical logic: 90%+ coverage.
- **T-4 (MUST)** Separate unit tests (pure) from integration tests (DB/API).
- **T-5 (SHOULD)** Prefer integration tests over heavy mocking.
- **T-6 (SHOULD)** Use `expect.any(...)` for variable IDs.
- **T-7 (SHOULD NOT)** Test conditions caught by type checker.
- **T-8 (SHOULD)** Test edge cases, boundaries, unexpected input.

---

## 4 — Git

- **G-1 (MUST)** Conventional commits: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`
- **G-2 (MUST)** Run before commit: `tsc --noEmit && npm test && npm run lint`
- **G-3 (MUST)** No secrets, `console.log`, or commented code in commits.
- **G-4 (SHOULD NOT)** Reference Claude or Anthropic in commit messages.

---

## 5 — Security

- **S-1 (MUST)** Secrets in env vars only.
- **S-2 (MUST)** Auth on all endpoints unless explicitly public.
- **S-3 (MUST)** Parameterized queries—never concatenate SQL.
- **S-4 (MUST)** Validate and sanitize all user input.

---

## 6 — Quality Gates

- **QG-1 (MUST)** `prettier --check` passes.
- **QG-2 (MUST)** `eslint` passes.
- **QG-3 (MUST)** `tsc --noEmit` passes (0 errors).

---

## 7 — Function Checklist

When you write or edit a function:

1. Can you read it and HONESTLY follow what it's doing?
2. Is cyclomatic complexity low (< 5 branches)?
3. Are there unused parameters?
4. Are unnecessary type casts present?
5. Is it testable without mocking core features?
6. Can the function name be improved? Brainstorm 3 alternatives.

**DO NOT** refactor out a function unless:
- It's reused elsewhere
- It enables unit testing otherwise impossible
- Original is extremely hard to follow

---

## 8 — Test Checklist

1. **SHOULD** parameterize inputs—no unexplained literals like `42` or `"foo"`.
2. **SHOULD NOT** add trivial tests that can't fail for real defects.
3. **SHOULD** ensure test description matches what `expect` verifies.
4. **SHOULD** use strong assertions: `toBe(1)` not `toBeGreaterThanOrEqual(1)`.
5. **SHOULD** test invariants/axioms with `fast-check` when practical.
6. **SHOULD** group tests under `describe(functionName, () => ...)`.

---

## 9 — Parallel Tasks

For features touching multiple areas:

| Task | Scope | Agent |
|------|-------|-------|
| T1 | Component | frontend |
| T2 | Styles | frontend |
| T3 | Tests | qa |
| T4 | Types | typescript |
| T5 | Hooks/utils | frontend |
| T6 | Integration | fullstack |
| T7 | Config/docs | general |

Track with:
```markdown
## Feature: [Name]
- [ ] T1: Component
- [ ] T2: Styles
- [ ] T3: Tests
- [ ] T4: Types
- [ ] T5: Hooks
- [ ] T6: Integration
- [ ] T7: Docs
```

---

## 10 — Shortcuts

### ZNEW
```
Read these guidelines. Confirm understanding of patterns and conventions.
```

### ZPLAN
```
Analyze request. Check existing patterns. Draft approach.
If ≥2 approaches exist, list pros/cons. Confirm before coding.
```

### ZCODE
```
Implement using TDD. Run: tsc --noEmit, npm test, npm run lint.
Functions < 25 lines. Match existing patterns.
```

### ZCHECK
```
For each major change, run:
1. Function checklist (Section 7)
2. Test checklist (Section 8)
3. Implementation rules (Section 2)
```

### ZDONE
```
1. tsc --noEmit (0 errors)
2. npm test (all pass)
3. npm run lint (0 warnings)
4. Conventional commit
5. Update docs if API changed
```

### ZFAST
```
Toggle fast mode: /fast
Use for rapid iteration and debugging.
```

---

## 11 — Imports

Add project-specific rules using imports:

```markdown
# Architecture
@docs/architecture.md

# API Patterns
@docs/api-conventions.md
```

---

*zebbern | v5.0 | Feb 2026*
