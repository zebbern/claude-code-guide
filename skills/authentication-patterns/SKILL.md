---
name: authentication-patterns
description: "Authentication patterns: session vs JWT vs OAuth comparison, provider selection (NextAuth, Clerk, Supabase Auth), security checklist, and common mistakes. Use when implementing auth, reviewing auth flows, or choosing auth providers."
---

# Authentication Patterns Skill

Reference for implementing secure, production-ready authentication.

## WHEN_TO_USE

Apply this skill when implementing authentication in a project, reviewing existing auth flows for security issues, choosing between auth providers, or migrating between auth strategies. Use the security checklist before shipping any auth-related change.

## AUTH_APPROACHES

| Approach | How It Works | Best For | Drawbacks |
|----------|-------------|----------|-----------|
| Session-based | Server stores session in DB/Redis, client holds session ID cookie | Traditional server-rendered apps, apps needing instant revocation | Requires server-side storage, harder to scale horizontally without shared store |
| JWT (stateless) | Server signs token, client sends it on each request | API-first apps, microservices, mobile clients | Cannot revoke without blocklist, token size grows with claims |
| OAuth 2.0 / OIDC | Delegates auth to external provider (Google, GitHub, etc.) | Social login, enterprise SSO, reducing auth responsibility | More complex flow, depends on external provider availability |
| Passkeys / WebAuthn | Cryptographic key pair, no passwords | High-security apps, passwordless UX | Limited browser support legacy, user education needed |

### Decision Guide

- **Server-rendered app with simple needs** → Session-based
- **SPA or mobile app calling APIs** → JWT with refresh token rotation
- **Want social login or SSO** → OAuth 2.0 / OIDC
- **Greenfield with modern UX goals** → Passkeys + OAuth fallback

## JWT_BEST_PRACTICES

### Token Lifecycle

```
Login → Access Token (short-lived) + Refresh Token (long-lived, rotated)
  │
  ├─ Access Token: 15 min expiry, sent via httpOnly cookie or Authorization header
  │
  └─ Refresh Token: 7-30 day expiry, stored in httpOnly secure cookie
       │
       └─ On use: issue new access + new refresh token, invalidate old refresh token
```

### Rules

- [P0-MUST] Set short expiry on access tokens (15 minutes or less).
- [P0-MUST] Store tokens in `httpOnly`, `Secure`, `SameSite=Lax` cookies — never in `localStorage` or `sessionStorage`.
- [P0-MUST] Implement refresh token rotation — each refresh token is single-use.
- [P0-MUST] Maintain a server-side blocklist for revoked refresh tokens.
- [P1-SHOULD] Include only essential claims in JWT payload (sub, iat, exp, role). Keep it small.
- [P1-SHOULD] Use asymmetric signing (RS256 or ES256) for distributed systems; symmetric (HS256) for single-service only.
- [P1-SHOULD] Validate `iss`, `aud`, and `exp` claims on every request.
- [P2-MAY] Use JWE (encrypted JWT) when token payload contains sensitive data.

### Token Storage Comparison

| Storage | XSS Safe | CSRF Safe | Recommendation |
|---------|----------|-----------|----------------|
| `httpOnly` cookie | Yes | No (needs CSRF token) | Recommended |
| `localStorage` | No | Yes | Never use for auth tokens |
| `sessionStorage` | No | Yes | Never use for auth tokens |
| In-memory (JS variable) | Yes | Yes | OK for SPAs, lost on refresh |

## PROVIDER_PATTERNS

### Comparison

| Provider | Type | Best For | Pricing | Key Features |
|----------|------|----------|---------|-------------|
| NextAuth / Auth.js | OSS library | Next.js apps wanting full control | Free | 80+ providers, DB adapters, self-hosted |
| Clerk | Managed service | Fast launch, pre-built UI, user management | Free tier, then per-MAU | Drop-in components, user dashboard, org support |
| Supabase Auth | Managed (part of Supabase) | Apps already using Supabase for DB/storage | Free tier, then per-MAU | Row-level security integration, magic links, SSO |
| Lucia | OSS library | Full control, minimal abstraction | Free | Session-based, framework-agnostic, type-safe |

### When to Use Each

- **NextAuth / Auth.js**: You want provider flexibility, self-hosting, and database session control. Best when you need custom flows.
- **Clerk**: You want auth done fast with pre-built UI components. Best for MVPs and teams that don't want to build auth UI.
- **Supabase Auth**: You're already using Supabase. Auth integrates with RLS policies for row-level security.
- **Lucia**: You want a minimal, type-safe session library without framework lock-in.

### NextAuth.js Setup Pattern

```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
```

## SECURITY_CHECKLIST

### Before Shipping Auth

- [ ] **Rate limiting**: Login endpoint limited to 5-10 attempts per minute per IP.
- [ ] **CSRF protection**: Anti-CSRF tokens on all state-changing requests (or use `SameSite=Lax` cookies).
- [ ] **Password hashing**: Using bcrypt (cost 12+) or argon2id — never MD5, SHA-1, or plain SHA-256.
- [ ] **HTTPS only**: All auth endpoints served over TLS. Cookies have `Secure` flag.
- [ ] **Input validation**: Email format, password length (min 8, max 128), no SQL/NoSQL injection vectors.
- [ ] **Account enumeration**: Login and registration return the same response whether account exists or not.
- [ ] **Session invalidation**: Logout invalidates server-side session/refresh token, not just client cookie.
- [ ] **MFA support**: TOTP (authenticator app) or WebAuthn as second factor for sensitive accounts.
- [ ] **Password reset**: Time-limited tokens (1 hour), single-use, sent over secure channel.
- [ ] **Audit logging**: Log auth events (login, logout, failed attempts, password changes) with timestamp and IP.

### Password Hashing

```typescript
// Using bcrypt
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
```

```typescript
// Using argon2 (preferred for new projects)
import argon2 from "argon2";

async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, { type: argon2.argon2id });
}

async function verifyPassword(hash: string, password: string): Promise<boolean> {
  return argon2.verify(hash, password);
}
```

## COMMON_MISTAKES

| Mistake | Risk | Fix |
|---------|------|-----|
| Storing JWT in `localStorage` | XSS can steal tokens | Use `httpOnly` cookies |
| Long-lived JWTs (days/weeks) | Stolen token is valid for extended period | 15 min access token + refresh rotation |
| Missing CSRF protection | Attackers can forge requests from other sites | `SameSite=Lax` cookies + CSRF token |
| Weak password requirements | Brute force and credential stuffing | Min 8 chars, check against breached password lists |
| Exposing user existence on login | Account enumeration | Generic "Invalid credentials" message |
| Not rotating refresh tokens | Stolen refresh token grants indefinite access | Single-use refresh tokens with rotation |
| Hardcoding secrets in source | Credential leak via git history | Use environment variables, never commit secrets |
| Missing rate limiting on login | Brute force attacks | 5-10 attempts/min per IP, exponential backoff |
| Rolling your own crypto | Subtle vulnerabilities | Use established libraries (bcrypt, argon2, jose) |
| Not validating JWT claims | Token misuse across services | Always verify `iss`, `aud`, `exp` |
