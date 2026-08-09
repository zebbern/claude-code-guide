# Quality-First Claude and Codex Agent Pack

**Date:** 2026-08-08  
**Status:** Approved design  
**Implementation scope:** `C:\Users\zeb\Documents\workspace_for_ai\claude-code-guide\agents`

## Objective

Replace the existing broad VS Code-style agent catalog with a small, native Claude Code and Codex agent pack optimized for maximum result quality. Latency and token cost are explicitly secondary. The replacement must improve routing decisions, give every agent a non-overlapping decision boundary, use the strongest appropriate current model at maximum reasoning effort, preserve user-owned repository changes, and be verifiable through real runtime invocations. Claude may select agents from their descriptions; Codex selection is parent-mediated and must not be represented as guaranteed automatic routing.

## Current State and Problem

The current `agents` directory contains 109 `*.agent.md` definitions and one README. It is a flat catalog rather than a natively discovered project agent directory. Ninety-one definitions share the same generic 37-line body apart from role labels. Several roles substantially overlap, multiple descriptions contain stale-prone framework version pins, and the legacy IT orchestration files use prose-only cross-agent references whose identifiers do not match the catalog and include missing targets.

This creates four quality problems:

1. Broad and overlapping descriptions weaken automatic delegation.
2. Generic bodies provide little specialist behavior after routing succeeds.
3. The directory and frontmatter do not match current Claude Code or Codex project-agent schemas.
4. Embedded version knowledge and mutable third-party installation instructions age poorly.

The root repository README already has a user-owned modification. It is outside the implementation scope and must remain untouched.

## Chosen Architecture

The `agents` directory remains a distribution root. It will contain exact destination-shaped Claude and Codex trees:

```text
agents/
├── README.md
├── .claude/
│   └── agents/
│       ├── codebase-mapper.md
│       ├── official-docs-researcher.md
│       ├── solution-architect.md
│       ├── root-cause-debugger.md
│       ├── change-implementer.md
│       ├── code-reviewer.md
│       ├── security-reviewer.md
│       └── runtime-verifier.md
└── .codex/
    └── agents/
        ├── codebase-mapper.toml
        ├── official-docs-researcher.toml
        ├── solution-architect.toml
        ├── root-cause-debugger.toml
        ├── change-implementer.toml
        ├── code-reviewer.toml
        ├── security-reviewer.toml
        └── runtime-verifier.toml
```

This shape makes the intended destinations visible, but installation must merge only the individual files under `.claude/agents/` or `.codex/agents/` into the matching target directory. It must never replace a target project's entire `.claude` or `.codex` directory. Installation guidance must detect same-name collisions and stop for review rather than overwrite by default. Because this catalog is nested one level below this repository's root, it must not claim to be automatically active for the parent repository. The README must state that limitation prominently.

No generator will be introduced. Sixteen small, platform-native definitions are easier to inspect than a schema, generator, generated outputs, and validation toolchain. Semantic parity will be checked directly.

## Agent Set and Routing Boundaries

| Agent | Delegate when | Do not delegate when | Access |
|---|---|---|---|
| `codebase-mapper` | A task needs repository structure, ownership, entry points, data flow, or change-surface mapping before a decision | Current external documentation, implementation, or post-change review is the primary job | Read-only |
| `official-docs-researcher` | A decision depends on current official documentation, releases, schemas, supported models, or version-specific behavior | The answer primarily requires tracing local code or implementing a change | Read-only plus web access |
| `solution-architect` | Multiple viable designs or cross-component boundaries require explicit trade-offs before implementation | A small fix is already specified or the root cause is still unknown | Read-only |
| `root-cause-debugger` | A failure must be reproduced, isolated, and explained before a fix is written | The cause is established and implementation is authorized | Runtime-capable; source read-only |
| `change-implementer` | Requirements or root cause are clear and one scoped, complete change is authorized | The task is still exploratory, requires product direction, or asks only for review | Workspace write |
| `code-reviewer` | An existing diff or implementation needs correctness, regression, and maintainability review | Deep exploitability analysis or active implementation is the main task | Read-only |
| `security-reviewer` | Trust boundaries, attacker control, exploit paths, or security-impacting changes need specialist review | Generic correctness review without a meaningful security boundary is sufficient | Read-only |
| `runtime-verifier` | A completed change must be exercised through the real user-facing or integration boundary | Implementation is incomplete or only static analysis is requested | Runtime-capable; source read-only |

The parent agent remains the orchestrator. Custom agents must not recursively delegate. Independent roles may run in parallel only when their inputs do not depend on one another; implementation remains single-writer unless explicitly partitioned.

For high-stakes work, the README must recommend explicit role invocation. Claude's description-driven selection may be used as a convenience and checked with positive/negative routing scenarios. Codex custom-role selection depends on the parent receiving a direct delegation request or applicable project/skill instruction; this pack intentionally does not add repository-root instructions, so Codex verification will request the intended role explicitly.

## Model and Reasoning Policy

Maximum quality is the governing policy.

### Claude Code

- `official-docs-researcher` and `solution-architect` use `model: fable` and `effort: max` because they emphasize broad synthesis, deep reasoning, and research.
- `codebase-mapper`, `root-cause-debugger`, `change-implementer`, `code-reviewer`, `security-reviewer`, and `runtime-verifier` use `model: opus` and `effort: max` because they emphasize complex agentic coding, debugging, review, risk judgment, and execution.
- **2026-08-10 revision:** `security-reviewer` moved from Fable/max to Opus/max after repeated Fable safeguard rejections prevented the required substantive security review.
- Model aliases are preferred over dated full model IDs so the definitions follow the current provider-supported model within the selected family.
- No `maxTurns` cap is set because an arbitrary turn limit conflicts with the quality-first goal.

### Codex

- Every role uses `model = "gpt-5.6-sol"` and `model_reasoning_effort = "max"`.
- `ultra` is not pinned inside custom workers. Ultra is appropriate for parent-level decomposition of meaningfully divisible work; a nested worker should solve its assigned problem deeply without creating uncontrolled delegation trees.
- The explicit current model pin is intentional because the user prefers maximum quality over automatic cost optimization. The README must record the research date so future maintainers know when to re-evaluate it.

## Capability Policy

Claude definitions use explicit tool allowlists rather than inheriting the full parent surface:

- Read-only repository roles: `Read`, `Grep`, `Glob`, and `Bash` where Git or search commands are necessary.
- Documentation research: repository read tools plus `WebFetch` and `WebSearch`.
- Implementation: `Read`, `Edit`, `Write`, `Grep`, `Glob`, and `Bash`.
- Runtime debugging and verification: read/search tools and `Bash`, with source edits prohibited by the prompt contract.
- The `Agent` tool is omitted from every definition to prevent nested delegation.

Claude read-only mapping, architecture, review, and security roles use `permissionMode: plan`. Debugging and verification use normal permissions because builds and real executions may create caches or artifacts. Their prompts prohibit source edits and require removal of session-only artifacts when safe.

Codex mapping, documentation, architecture, code-review, and security roles use `sandbox_mode = "read-only"`. Debugging, implementation, and runtime verification use `sandbox_mode = "workspace-write"` so real builds and boundary checks can run. Debugger and verifier instructions still prohibit source edits. `official-docs-researcher` explicitly sets `web_search = "live"` and requests high-context web search so its freshness contract does not silently depend on a parent's cached or disabled search default. The role must return a blocker if managed policy or the selected provider prevents live search.

Child permissions are not an absolute enforcement boundary. Claude parent `acceptEdits`, `bypassPermissions`, or `auto` modes can override a child's intended restriction, and Codex reapplies live parent sandbox overrides when it spawns a child. The README must disclose this. Read-only validation therefore launches the parent in a read-only/plan-compatible mode and compares repository content hashes and Git state after every invocation; prompt constraints remain defense in depth when a permissive parent is used.

No definition receives persistent memory, hooks, preloaded skills, MCP servers, background execution, worktree isolation, or additional configuration without a demonstrated role-specific requirement. Memory would implicitly broaden Claude write capabilities, while speculative tools and preload content would increase context and permission surface without improving the current workflows.

## Prompt Contract

Every definition has a routing description and a body/developer instruction with the same semantic contract across platforms. The body uses these sections:

1. **Mission and decision boundary** — the one outcome the role owns and the neighboring work it must leave to other roles or the parent.
2. **Required context** — target, scope, success criteria, known constraints, and available evidence. The role must surface missing material rather than invent it.
3. **Method** — a short ordered workflow specific to the role.
4. **Constraints** — preservation of existing work, capability limits, source hierarchy, and prohibited state changes.
5. **Output contract** — begin with exact `ROLE: <agent-name>` and `STATUS: complete|blocked|inconclusive` markers, followed by concise conclusions, evidence, paths and line numbers, commands and exit statuses where relevant, unresolved uncertainty, and an explicit next decision.
6. **Stop conditions** — conditions under which the agent should return a blocker rather than broaden scope or guess.

Descriptions must state positive invocation conditions, exclusions, and whether proactive use is appropriate. They must be mutually distinguishable without relying on filenames.

Prompts must not contain framework-version trivia, motivational filler, repeated instructions to double-check, or generic claims such as "be an expert." Current facts belong in cited research performed for the task. Verification is role-specific and evidence-driven rather than an unbounded self-review loop.

## Role Workflows

### `codebase-mapper`

Establish repository scope and active instructions, inspect Git state without changing it, locate entry points and ownership boundaries, trace relevant calls/state/data flow, identify adjacent instances of the same pattern, and return a bounded change map with evidence and unknowns. It does not recommend a final design unless asked for mapping implications.

### `official-docs-researcher`

Confirm the relevant product/version/date, prioritize official documentation and release notes, distinguish documented behavior from recommendation and inference, reconcile contradictory sources, and return decision-relevant findings with direct links. It does not fill the report with broad tutorials or secondary-source summaries when primary sources exist.

### `solution-architect`

Use established requirements, repository evidence, and current platform constraints; present two or three viable approaches; compare correctness, operability, compatibility, migration cost, and failure modes; recommend one; and define acceptance and rollback boundaries. It does not implement or hide unresolved product choices.

### `root-cause-debugger`

Reproduce the real failure when possible, preserve raw symptoms, narrow the failing boundary, distinguish cause from downstream effects, search for sibling occurrences, and return the causal chain plus the smallest credible fix direction. It must not edit source or report an empty/soft failure as successful reproduction.

### `change-implementer`

Confirm the authorized scope and dirty-worktree boundaries, implement the smallest complete change, wire it through actual call paths, remove only orphans created by the change, search for reasonable sibling occurrences sharing the root cause, and exercise a proportionate real path. It must not commit, push, deploy, or change unrelated files unless explicitly authorized.

### `code-reviewer`

Read the requirements and diff in context, trace changed behavior into callers and consumers, identify correctness, regression, concurrency, error-handling, compatibility, and meaningful verification gaps, and report only actionable findings ordered by severity. Each finding needs a precise location, failure scenario, and remediation direction. It does not edit code or emit style-only commentary.

### `security-reviewer`

Identify assets, trust boundaries, attacker-controlled inputs, authorization decisions, sensitive sinks, and operational assumptions; construct plausible attack paths; validate reachability and preconditions; and report confirmed or strongly evidenced findings with impact and remediation direction. It separates facts from assumptions and suppresses speculative findings that lack a credible path.

### `runtime-verifier`

Translate acceptance criteria into observable behavior, exercise the same boundary a user or production integration uses, record environment and commands, inspect outputs and side effects, detect silent negatives and cross-session leakage where relevant, and return pass/fail/inconclusive results with evidence. It must not fix failures or modify source.

## README Requirements

The replacement README must include:

- The purpose and quality-first optimization target.
- Exact Claude and Codex installation destinations, file-by-file merge instructions, collision detection, and an explicit no-overwrite default.
- A warning that the nested distribution tree is not automatically active for the parent repository.
- The eight-role routing table and a recommended quality pipeline.
- Explicit invocation examples, a recommendation to name the role for high-stakes work, the Codex parent-mediated routing limitation, and the requirement to provide self-contained task context.
- Parallelism guidance: parallelize independent read-heavy work; keep dependent phases sequential and write-heavy work single-owner.
- Current model policy and research date.
- Validation and troubleshooting commands, including the live-web prerequisite for Codex documentation research and the effect of parent permission overrides.
- Direct links to the official Claude Code, Claude model, Codex custom-agent, Codex model, VS Code, and GitHub Copilot documentation used.
- A note that VS Code and Copilot CLI can consume Claude-format agents, while GitHub.com cloud agents require a separate `.github/agents` target that this pack intentionally does not duplicate.
- A migration note explaining why the 109 legacy personas and compatibility aliases were removed.

## Deletion Policy

Delete all 109 legacy `*.agent.md` files. Replace the old README. Do not retain forwarding aliases, deprecated frontmatter, stale orchestrators, the third-party agent installer, or domain personas whose bodies only restate their names.

Do not modify the root README, repository configuration, global Claude/Codex configuration, or files outside the target directory except for this required design/process documentation. Do not commit or push without explicit authorization.

## Verification Strategy

No permanent unit-test suite is warranted for static agent definitions. Use temporary or direct validation and remove session-only artifacts.

1. **Repository safety**
   - Record Git status before and after.
   - Record the pre-existing root README SHA-256 hash and confirm it is identical afterward.
   - Run `git diff --check` on the implementation scope.
   - After every read-only smoke invocation, compare a recursive content manifest and Git state to prove that the fixture and repository sources did not change.

2. **Static contract validation**
   - Parse all TOML files with a real TOML parser.
   - Parse Claude frontmatter and confirm required fields, valid lowercase-hyphen names, supported models/efforts/permission modes, and unique identities.
   - Confirm both platforms expose exactly the same eight names.
   - Confirm every file contains a decision boundary, constraints, output contract, and stop conditions.
   - Confirm there are no legacy fields, stale cross-agent references, `Agent` tool grants, generic version pins, or model values below the approved quality tier.
   - Enforce the final subtree allowlist: one README, eight Claude Markdown files, and eight Codex TOML files only.
   - Search for residual snake_case legacy IDs, `.agent.md` links, missing IT target names, and obsolete installer instructions.

3. **Native discovery checks**
   - Copy the distribution trees into an isolated temporary project.
   - Merge agent files into empty destination directories and assert that a deliberate same-name collision aborts rather than overwrites the sentinel file.
   - Run `claude doctor`, inspect Claude agent discovery/source information, and prove that all eight exact names resolve from the temporary project's `.claude/agents` directory.
   - Run `codex doctor --summary` and `codex exec --strict-config`, then explicitly request each custom role and prove identity from its `ROLE:` marker and runtime trace/status evidence. Bare doctor or strict-config success is not treated as discovery proof.

4. **Real role smoke checks**
   - Use a temporary Git fixture containing a documented entry point, a small reproducible parsing defect with a failing real command, an intentionally insecure path-handling example, and a sentinel file outside the authorized change target.
   - Give isolated role checks a fresh fixture copy. Run the integrated sequence in dependency order—mapping/research/architecture, debugging, implementation, review/security review, then runtime verification—so one role's mutation cannot invalidate another role's seeded precondition.
   - Give every role a fixed self-contained prompt naming the target, allowed scope, success criterion, and forbidden side effects. Require the exact `ROLE:` and `STATUS:` markers.
   - Invoke every Claude role once. For Claude description routing, also run one unnamed positive scenario per role and one neighboring negative scenario for each ambiguous pair; capture the selected identity where the runtime exposes it. Failure to auto-select is documented but does not invalidate explicit invocation.
   - Have Codex explicitly spawn every custom role once; automatic Codex selection is not an acceptance criterion.
   - `codebase-mapper` must cite fixture paths and flow without changing hashes; `official-docs-researcher` must return an as-of date and at least one direct current primary-source HTTPS link using live search; `solution-architect` must compare at least two viable choices and state one recommendation plus acceptance boundaries.
   - `root-cause-debugger` must reproduce the known failing command, identify the seeded causal line, and leave source hashes unchanged; `change-implementer` must edit only the authorized defect file and make the real command pass.
   - `code-reviewer` and `security-reviewer` must cite precise fixture locations and either emit actionable findings or an explicit evidence-backed no-finding result without edits; the security role must identify the seeded attacker-controlled path and sink.
   - `runtime-verifier` must execute the repaired user path, report command and exit status, inspect the intended side effect, and leave source hashes unchanged.
   - The sentinel file must remain byte-identical throughout. Any unexpected source mutation, missing identity marker, false success, or unreported blocker fails the corresponding smoke check.

5. **Representative quality workflow**
   - Run a small read-only pipeline using repository mapping, official research, architecture or review, and runtime/schema verification.
   - Check that each phase returns a compressed handoff rather than duplicating another role's job.

Discovery success alone is not acceptance. The observable role behavior and filesystem side effects must match the design.

## Acceptance Criteria

- The legacy 109-file catalog is gone.
- Exactly eight Claude Markdown agents and eight Codex TOML agents exist under the destination-shaped trees.
- All definitions use the approved maximum-quality model and reasoning settings.
- Routing descriptions are mutually exclusive and every body contains role-specific behavior.
- High-stakes invocation is documented as explicit; Codex automatic routing is not claimed or required.
- Read/write capabilities match the policy above.
- README installation, invocation, compatibility, and freshness guidance is accurate as of 2026-08-08.
- Native tools discover and invoke all roles in an isolated real project.
- Representative invocations produce evidence-driven outputs without unauthorized source changes.
- The parent repository's pre-existing README modification is unchanged.

## Risks and Mitigations

- **Nested pack mistaken for active configuration:** state the installation requirement at the top of the README and validate from an isolated installed copy.
- **Existing project configuration overwritten during installation:** merge individual agent files only, detect collisions, and stop rather than overwrite by default.
- **Parent permissions weaken read-only intent:** document precedence, validate under constrained parent modes, and compare content manifests and Git state after every read-only invocation.
- **Codex research runs without current web access:** configure live, high-context web search in the role and require an explicit blocker when policy/provider restrictions prevent it.
- **Provider schema evolution:** keep adapter files small, use documented fields only, record the research date, and avoid an unnecessary generator.
- **Model availability differences:** validate aliases and current model names against the locally installed Claude Code and Codex versions during implementation.
- **Cross-platform semantic drift:** compare exact role names, routing boundaries, constraints, and output contracts during static validation.
- **Runtime roles creating artifacts:** distinguish build/cache output from source edits, inspect Git status after each smoke run, and remove safe session-only artifacts.
- **Expensive validation:** accepted; maximum result quality explicitly takes precedence over latency and token cost.

## Non-Goals

- Preserving the 109 legacy agent identifiers.
- Providing generic framework or language personas.
- Building a marketplace installer or generator.
- Modifying global user configuration.
- Adding repository-root `.claude`, `.codex`, or `.github` configuration outside the requested target.
- Supporting GitHub.com cloud custom agents in this change.
- Creating skills, MCP servers, hooks, memory stores, or autonomous nested agent teams without a concrete workflow requiring them.

## Primary Sources

- [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)
- [Claude model selection](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model)
- [Claude Opus 5 prompting guidance](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5)
- [Codex custom agents](https://learn.chatgpt.com/docs/agent-configuration/subagents#custom-agents)
- [Codex models](https://learn.chatgpt.com/docs/models)
- [Codex best practices](https://learn.chatgpt.com/guides/best-practices)
- [VS Code custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [GitHub Copilot custom-agent configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration)
