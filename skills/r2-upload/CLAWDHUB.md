# r2-upload - Cloudflare R2 / S3 Upload Skill

> Upload files to Cloudflare R2, AWS S3, or any S3-compatible storage and generate secure presigned download links with configurable expiration.

## Summary

A TypeScript-based MCP skill for ClawdBot that makes file sharing easy. Upload files to cloud storage and get secure, temporary download links in seconds. Built with the AWS SDK v3, it supports Cloudflare R2 (recommended), AWS S3, MinIO, and any S3-compatible storage.

**Key Features:**
- 🚀 Fast uploads with automatic content-type detection
- ⏱️ Secure presigned URLs (default: 5-minute expiration)
- 🔧 Interactive TypeScript onboarding
- 🗂️ Multi-bucket support
- 🎨 Clean, typed API with 4 tools

## Features

- 📤 Upload files to R2/S3 with presigned URLs
- ⏰ Configurable expiration (default: 5 minutes)
- 🔗 Support for multiple buckets
- 🌐 Custom domain support for public URLs
- 🔐 Secure presigned URL generation
- ✅ Works with Cloudflare R2, AWS S3, MinIO, or any S3-compatible storage

## Quick Start

```bash
cd ~/clawd/skills/r2-upload
pnpm install
pnpm run onboard
```

The interactive onboarding will guide you through:
- Setting up your Cloudflare R2 or S3 credentials
- Testing your connection
- Creating the configuration file

## Configuration

Creates `~/.r2-upload.yml`:

```yaml
default: my-bucket

buckets:
  my-bucket:
    endpoint: https://ACCOUNT_ID.r2.cloudflarestorage.com
    access_key_id: YOUR_ACCESS_KEY_ID
    secret_access_key: YOUR_SECRET_ACCESS_KEY
    bucket_name: my-bucket
    region: auto
    public_url: https://files.yourdomain.com  # Optional
```

## Tools Provided

### r2_upload
Upload a file and get a presigned download URL.

```
Arguments:
- file_path (required): Local path to file
- key (optional): Custom S3 key/path
- bucket (optional): Bucket name (uses default if not specified)
- expires (optional): Expiration time (e.g., "5m", "24h", "7d"). Default: 5m
- public (optional): Generate public URL (requires public bucket)
- content_type (optional): Override content type detection
```

### r2_list
List files in your bucket.

```
Arguments:
- bucket (optional): Bucket name
- prefix (optional): Filter by prefix
- max_keys (optional): Max files to list (default: 20)
```

### r2_delete
Delete a file from your bucket.

```
Arguments:
- key (required): S3 key/path to delete
- bucket (optional): Bucket name
```

### r2_generate_url
Generate a new presigned URL for an existing file.

```
Arguments:
- key (required): S3 key/path
- bucket (optional): Bucket name
- expires (optional): Expiration time. Default: 5m
```

## Cloudflare R2 Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → R2
2. Create a bucket
3. Go to R2 API Tokens: `https://dash.cloudflare.com/<ACCOUNT_ID>/r2/api-tokens`
4. Create API token:
   - **Apply to specific bucket** (important!)
   - Permissions: Object Read & Write
5. Copy Access Key ID and Secret Access Key
6. Run `pnpm run onboard` and follow prompts

## Example Usage

"Upload this file to R2"
"List files in my bucket"
"Delete old-file.pdf from R2"
"Generate a new download link for report.pdf"

## Requirements

- Node.js 18+
- pnpm or npm
- Cloudflare R2 account (or AWS S3, MinIO, etc.)

## License

MIT

## Author

Created for ClawdBot by the community.
