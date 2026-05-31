# R2/S3 Upload Skill

> Upload files to Cloudflare R2, AWS S3, or any S3-compatible storage and generate secure presigned download links with configurable expiration.

## Summary

A TypeScript-based MCP skill that lets you upload files to cloud storage and get shareable links. Perfect for quickly sharing files with temporary access. Features multi-bucket support, interactive onboarding, and 5-minute default expiration for security.

**Quick Example:**
- "Upload this report to R2" → Get a 5-minute download link
- "List files in my bucket" → See what's uploaded
- "Delete old-file.pdf" → Clean up storage

## Quick Setup

### Automated (Recommended)

```bash
cd skills/r2-upload
pnpm install
pnpm run onboard
```

This will:
- Install dependencies
- Guide you through credential setup
- Test your connection
- Create the config file

### Manual Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create config file:
```bash
cp example-config.yml ~/.r2-upload.yml
# Edit ~/.r2-upload.yml with your credentials
```

3. Build:
```bash
pnpm run build
```

## Usage

See `SKILL.md` for detailed documentation and examples.

## Cloudflare R2 Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → R2
2. Create a bucket
3. Go to R2 API Tokens: `https://dash.cloudflare.com/<ACCOUNT_ID>/r2/api-tokens`
4. Create a new API token
   - **Important:** Apply to specific bucket (select your bucket)
   - Permissions: Object Read & Write
5. Copy the Access Key ID and Secret Access Key
6. Note your Account ID from the R2 dashboard URL
7. Use endpoint: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`

## Custom Domain (Optional)

To use a custom domain for public URLs:

1. In Cloudflare R2, connect your bucket to a custom domain
2. Add the `public_url` field to your bucket config:
   ```yaml
   public_url: https://files.yourdomain.com
   ```

This allows you to generate clean public URLs instead of presigned ones.

## Security Considerations

⚠️ **Important Security Notes:**

### API Token Scope
When creating your R2 API token:
- ✅ **Apply to specific bucket only** (not account-wide)
- ✅ **Use minimum permissions:** Object Read & Write only
- ❌ **Avoid:** Admin permissions or account-wide access

### Current Protections
- ✅ Config file secured with 600 permissions (owner-only)
- ✅ Presigned URLs expire (default: 5 minutes)
- ✅ UUID prefixes prevent predictable file paths
- ✅ Credentials isolated in external config

### Known Limitations
- ⚠️ No file size limits (be careful with large files)
- ⚠️ No file type restrictions
- ⚠️ No rate limiting

### Best Practices
1. **Keep expiration short** - Default 5m is recommended
2. **Review uploads periodically** - Use `r2_list` to check your bucket
3. **Don't share presigned URLs publicly** unless intended
4. **Rotate credentials** if you suspect compromise
5. **Use different buckets** for different security levels

**See SECURITY.md for detailed security information and recommendations.**
