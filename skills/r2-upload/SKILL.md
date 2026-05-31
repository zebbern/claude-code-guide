---
name: r2-upload
description: "Upload files to Cloudflare R2, AWS S3, or any S3-compatible storage (like MinIO) and generate secure, time-limited presigned download links with configurable expiration, typically set to 5 minutes. Use when the user needs to upload a file to cloud storage and get a shareable link, or mentions R2, S3, presigned URLs, temporary links, or file uploads with expiration."
summary: TypeScript-based MCP skill for uploading files to cloud storage (R2, S3, MinIO) with secure, temporary download links. Features multi-bucket support, interactive onboarding, and 5-minute default expiration.
---

# Send Me My Files - R2 Upload with Short Lived Signed URLs

Upload files to Cloudflare R2 or any S3-compatible storage and generate presigned download links.

## Features

- Upload files to R2/S3 buckets
- Generate presigned download URLs (configurable expiration)
- Support for any S3-compatible storage (R2, AWS S3, MinIO, etc.)
- Multiple bucket configurations
- Automatic content-type detection

## Configuration

Create `~/.r2-upload.yml` (or set `R2_UPLOAD_CONFIG` env var):

```yaml
# Default bucket (used when no bucket specified)
default: my-bucket

# Bucket configurations
buckets:
  my-bucket:
    endpoint: https://abc123.r2.cloudflarestorage.com
    access_key_id: your_access_key
    secret_access_key: your_secret_key
    bucket_name: my-bucket
    public_url: https://files.example.com  # Optional: custom domain
    region: auto  # For R2, use "auto"

  # Additional buckets
  personal:
    endpoint: https://xyz789.r2.cloudflarestorage.com
    access_key_id: ...
    secret_access_key: ...
    bucket_name: personal-files
    region: auto
```

### Cloudflare R2 Setup

1. Go to Cloudflare Dashboard → R2
2. Create a bucket
3. Go to R2 API Tokens: `https://dash.cloudflare.com/<ACCOUNT_ID>/r2/api-tokens`
4. Create a new API token
   - **Important:** Apply to specific bucket (select your bucket)
   - Permissions: Object Read & Write
5. Copy the Access Key ID and Secret Access Key
6. Use endpoint format: `https://<account_id>.r2.cloudflarestorage.com`
7. Set `region: auto`

### AWS S3 Setup

```yaml
aws-bucket:
  endpoint: https://s3.us-east-1.amazonaws.com
  access_key_id: ...
  secret_access_key: ...
  bucket_name: my-aws-bucket
  region: us-east-1
```

## Usage

### Upload a file

```bash
r2-upload /path/to/file.pdf
# Returns: https://files.example.com/abc123/file.pdf?signature=...
```

### Upload with custom path

```bash
r2-upload /path/to/file.pdf --key uploads/2026/file.pdf
```

### Upload to specific bucket

```bash
r2-upload /path/to/file.pdf --bucket personal
```

### Custom expiration (default: 5 minutes)

```bash
r2-upload /path/to/file.pdf --expires 24h
r2-upload /path/to/file.pdf --expires 1d
r2-upload /path/to/file.pdf --expires 300  # seconds
```

### Public URL (no signature)

```bash
r2-upload /path/to/file.pdf --public
```

## Tools

- `r2_upload` - Upload file and get presigned URL
- `r2_list` - List recent uploads
- `r2_delete` - Delete a file

## Environment Variables

- `R2_UPLOAD_CONFIG` - Path to config file (default: `~/.r2-upload.yml`)
- `R2_DEFAULT_BUCKET` - Override default bucket
- `R2_DEFAULT_EXPIRES` - Default expiration in seconds (default: 300 = 5 minutes)

## Notes

- Uploaded files are stored with their original filename unless `--key` is specified
- Automatic UUID prefix added to prevent collisions (e.g., `abc123/file.pdf`)
- Content-Type automatically detected from file extension
- Presigned URLs expire after the configured duration
