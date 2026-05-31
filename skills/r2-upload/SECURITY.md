# Security Considerations for r2-upload

## Current Security Measures ✅

### 1. Config File Permissions
- ✅ `~/.r2-upload.yml` is created with `0600` permissions (owner read/write only)
- ✅ Prevents other users from reading your credentials

### 2. Presigned URLs
- ✅ Default expiration: 5 minutes (configurable)
- ✅ URLs expire automatically
- ✅ No permanent public access unless explicitly configured

### 3. UUID Prefixes
- ✅ Randomized key prefixes prevent filename collisions
- ✅ Makes guessing file URLs harder

### 4. Credential Isolation
- ✅ Credentials stored locally, not in code
- ✅ Environment variable override option (`R2_UPLOAD_CONFIG`)

## Security Recommendations ⚠️

### 1. **R2 API Token Scope** (IMPORTANT)
When creating your R2 API token:
- ✅ **Apply to specific bucket only** (not account-wide)
- ✅ **Use minimum permissions:** Object Read & Write only
- ❌ **Avoid:** Admin permissions, account-wide access

**Why:** Limits blast radius if credentials are compromised.

### 2. **File Size Limits** (Not Currently Implemented)
Consider adding to `index.ts`:
```typescript
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB
const stats = await stat(file_path);
if (stats.size > MAX_FILE_SIZE) {
  throw new Error('File too large');
}
```

**Why:** Prevents accidental upload of huge files or DoS.

### 3. **Path Traversal Protection** (Partially Protected)
Current protection:
- ✅ UUID prefix prevents predictable paths
- ⚠️ User can still specify custom `key` parameter

Consider sanitizing custom keys:
```typescript
if (key && (key.includes('..') || key.startsWith('/'))) {
  throw new Error('Invalid key: path traversal detected');
}
```

### 4. **File Type Restrictions** (Not Currently Implemented)
Consider allowlist/blocklist:
```typescript
const BLOCKED_EXTENSIONS = ['.exe', '.sh', '.bat', '.cmd'];
const ext = path.extname(file_path).toLowerCase();
if (BLOCKED_EXTENSIONS.includes(ext)) {
  throw new Error('File type not allowed');
}
```

**Why:** Prevent malicious executable uploads.

### 5. **Audit Logging** (Not Currently Implemented)
Log all uploads for security auditing:
```typescript
console.error(`[AUDIT] Upload: ${file_path} -> ${bucket}/${key} by user`);
```

### 6. **Rate Limiting** (Not Currently Implemented)
Consider tracking upload frequency to prevent abuse.

## Best Practices for Users

### ✅ DO:
1. **Use bucket-specific API tokens** with minimal permissions
2. **Keep config file secure** (`~/.r2-upload.yml` should be 600)
3. **Use short expiration times** for presigned URLs (default: 5m is good)
4. **Review uploaded files** periodically with `r2_list`
5. **Rotate credentials** if you suspect compromise
6. **Use different buckets** for different security levels (public vs private)

### ❌ DON'T:
1. **Don't share presigned URLs publicly** unless intended
2. **Don't commit config file** to git (already in .gitignore)
3. **Don't use admin/root R2 tokens** - create limited tokens
4. **Don't upload sensitive files** without encryption
5. **Don't set long expirations** (>24h) unless necessary

## Threat Model

### What we protect against:
- ✅ Config file read by other users (file permissions)
- ✅ Permanent unauthorized access (expiring URLs)
- ✅ Predictable file paths (UUID prefixes)
- ✅ Credential exposure in code (external config)

### What we don't protect against:
- ⚠️ Large file uploads (no size limits)
- ⚠️ Malicious file types (no validation)
- ⚠️ Path traversal in custom keys
- ⚠️ Rate limiting / abuse
- ⚠️ File content scanning

## Recommended: Enhanced Security Version

For production use, consider:

```typescript
// Add to index.ts
const SECURITY_CONFIG = {
  maxFileSize: 100 * 1024 * 1024, // 100 MB
  maxExpiration: 24 * 3600, // 24 hours
  allowedExtensions: ['.pdf', '.jpg', '.png', '.gif', '.zip', '.tar.gz'],
  blockedExtensions: ['.exe', '.sh', '.bat', '.cmd', '.dll'],
  requirePathSanitization: true,
  auditLog: true,
};
```

## Incident Response

If credentials are compromised:

1. **Immediately revoke** the R2 API token in Cloudflare dashboard
2. **Generate new credentials**
3. **Update** `~/.r2-upload.yml`
4. **Review bucket contents** for unauthorized uploads
5. **Delete** any suspicious files
6. **Check** Cloudflare R2 audit logs

## Reporting Security Issues

Found a security issue? Please report responsibly:
1. **Don't** open a public GitHub issue
2. **Do** contact the maintainer privately
3. Allow time for a fix before disclosure

## Compliance Notes

- **GDPR/Privacy:** Don't upload personal data without proper legal basis
- **Encryption:** Files are encrypted at rest by R2, but not end-to-end
- **Access logs:** R2 provides access logs - enable for compliance
- **Data residency:** R2 uses Cloudflare's global network

## Updates

- **2026-01-09:** Initial security review - v1.0.0
