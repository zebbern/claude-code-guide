#!/usr/bin/env node
/**
 * R2/S3 Upload MCP Server
 * Upload files to Cloudflare R2 or any S3-compatible storage
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { S3Client, ListObjectsV2Command, DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { readFile } from 'fs/promises';
import { readFileSync, existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import yaml from 'js-yaml';
import mime from 'mime-types';
import { randomUUID } from 'crypto';

interface BucketConfig {
  endpoint: string;
  access_key_id: string;
  secret_access_key: string;
  bucket_name: string;
  region?: string;
  public_url?: string;
}

interface Config {
  default?: string;
  buckets: Record<string, BucketConfig>;
}

function loadConfig(): Config {
  const configPath = process.env.R2_UPLOAD_CONFIG || join(homedir(), '.r2-upload.yml');

  if (!existsSync(configPath)) {
    return { buckets: {} };
  }

  const configContent = readFileSync(configPath, 'utf-8');
  return yaml.load(configContent) as Config;
}

function getS3Client(bucketConfig: BucketConfig): S3Client {
  return new S3Client({
    endpoint: bucketConfig.endpoint,
    region: bucketConfig.region || 'auto',
    credentials: {
      accessKeyId: bucketConfig.access_key_id,
      secretAccessKey: bucketConfig.secret_access_key,
    },
  });
}

function parseExpires(expiresStr: string): number {
  if (/^\d+$/.test(expiresStr)) {
    return parseInt(expiresStr, 10);
  }

  const multipliers: Record<string, number> = {
    s: 1,
    m: 60,
    h: 3600,
    d: 86400,
    w: 604800,
  };

  const match = expiresStr.match(/^(\d+)([smhdw])$/);
  if (match) {
    const value = parseInt(match[1], 10);
    const unit = match[2];
    return value * multipliers[unit];
  }

  return parseInt(expiresStr, 10);
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

const server = new Server(
  {
    name: 'r2-upload',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'r2_upload',
        description: 'Upload a file to R2/S3 and return a presigned download URL',
        inputSchema: {
          type: 'object',
          properties: {
            file_path: {
              type: 'string',
              description: 'Local path to file to upload',
            },
            key: {
              type: 'string',
              description: 'Optional S3 key (path in bucket). If not provided, uses filename with UUID prefix',
            },
            bucket: {
              type: 'string',
              description: 'Bucket name (uses default if not specified)',
            },
            expires: {
              type: 'string',
              description: 'Expiration time (e.g., "24h", "1d", "300"). Default: 5m',
              default: '5m',
            },
            public: {
              type: 'boolean',
              description: 'If true, generate public URL without signature (requires public bucket)',
              default: false,
            },
            content_type: {
              type: 'string',
              description: 'Override content type detection',
            },
          },
          required: ['file_path'],
        },
      },
      {
        name: 'r2_list',
        description: 'List files in R2/S3 bucket',
        inputSchema: {
          type: 'object',
          properties: {
            bucket: {
              type: 'string',
              description: 'Bucket name (uses default if not specified)',
            },
            prefix: {
              type: 'string',
              description: 'Filter by prefix (e.g., "uploads/2026/")',
            },
            max_keys: {
              type: 'number',
              description: 'Maximum number of files to list',
              default: 20,
            },
          },
        },
      },
      {
        name: 'r2_delete',
        description: 'Delete a file from R2/S3 bucket',
        inputSchema: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'S3 key (path) of file to delete',
            },
            bucket: {
              type: 'string',
              description: 'Bucket name (uses default if not specified)',
            },
          },
          required: ['key'],
        },
      },
      {
        name: 'r2_generate_url',
        description: 'Generate a presigned download URL for an existing file',
        inputSchema: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'S3 key (path) of file',
            },
            bucket: {
              type: 'string',
              description: 'Bucket name (uses default if not specified)',
            },
            expires: {
              type: 'string',
              description: 'Expiration time (e.g., "24h", "1d", "300"). Default: 5m',
              default: '5m',
            },
          },
          required: ['key'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  const config = loadConfig();

  // Check if config exists
  if (!config.buckets || Object.keys(config.buckets).length === 0) {
    return {
      content: [
        {
          type: 'text',
          text: `Error: No R2/S3 configuration found.

Please run the onboarding script to set up your credentials:
  cd ~/clawd/skills/r2-upload
  npm run onboard

Or manually create ~/.r2-upload.yml with your bucket configuration.
See skills/r2-upload/example-config.yml for a template.`,
        },
      ],
    };
  }

  try {
    switch (name) {
      case 'r2_upload': {
        const { file_path, key, bucket, expires = '5m', public: isPublic = false, content_type } = args as any;

        const bucketName = bucket || process.env.R2_DEFAULT_BUCKET || config.default;
        if (!bucketName) {
          throw new Error('No bucket specified and no default configured in ~/.r2-upload.yml');
        }

        const bucketConfig = config.buckets[bucketName];
        if (!bucketConfig) {
          throw new Error(`Bucket '${bucketName}' not found in config`);
        }

        if (!existsSync(file_path)) {
          throw new Error(`File not found: ${file_path}`);
        }

        const fileContent = await readFile(file_path);
        const fileName = file_path.split('/').pop() || 'file';
        const objectKey = key || `${randomUUID().substring(0, 8)}/${fileName}`;
        const contentType = content_type || mime.lookup(fileName) || 'application/octet-stream';

        const s3 = getS3Client(bucketConfig);

        await s3.send(
          new PutObjectCommand({
            Bucket: bucketConfig.bucket_name,
            Key: objectKey,
            Body: fileContent,
            ContentType: contentType,
          })
        );

        let url: string;
        if (isPublic && bucketConfig.public_url) {
          url = `${bucketConfig.public_url.replace(/\/$/, '')}/${objectKey}`;
        } else if (isPublic) {
          url = `${bucketConfig.endpoint.replace(/\/$/, '')}/${bucketConfig.bucket_name}/${objectKey}`;
        } else {
          const command = new GetObjectCommand({
            Bucket: bucketConfig.bucket_name,
            Key: objectKey,
          });
          url = await getSignedUrl(s3, command, { expiresIn: parseExpires(expires) });
        }

        return {
          content: [
            {
              type: 'text',
              text: `✅ Uploaded: ${fileName}\n📦 Bucket: ${bucketName}\n🔑 Key: ${objectKey}\n🔗 URL: ${url}\n⏰ Expires: ${isPublic ? 'Never (public)' : expires}`,
            },
          ],
        };
      }

      case 'r2_list': {
        const { bucket, prefix, max_keys = 20 } = args as any;

        const bucketName = bucket || process.env.R2_DEFAULT_BUCKET || config.default;
        if (!bucketName) {
          throw new Error('No bucket specified and no default configured in ~/.r2-upload.yml');
        }

        const bucketConfig = config.buckets[bucketName];
        if (!bucketConfig) {
          throw new Error(`Bucket '${bucketName}' not found in config`);
        }

        const s3 = getS3Client(bucketConfig);
        const response = await s3.send(
          new ListObjectsV2Command({
            Bucket: bucketConfig.bucket_name,
            Prefix: prefix,
            MaxKeys: max_keys,
          })
        );

        if (!response.Contents || response.Contents.length === 0) {
          return {
            content: [{ type: 'text', text: `No files found in bucket '${bucketName}'` }],
          };
        }

        const lines = [`📦 Bucket: ${bucketName}\n`];
        for (const obj of response.Contents) {
          const size = formatSize(obj.Size || 0);
          const modified = obj.LastModified?.toISOString().replace('T', ' ').substring(0, 19) || 'unknown';
          lines.push(`  ${obj.Key}`);
          lines.push(`    Size: ${size} | Modified: ${modified}`);
        }

        if (response.IsTruncated) {
          lines.push(`\n... and more files (showing ${max_keys})`);
        }

        return {
          content: [{ type: 'text', text: lines.join('\n') }],
        };
      }

      case 'r2_delete': {
        const { key, bucket } = args as any;

        const bucketName = bucket || process.env.R2_DEFAULT_BUCKET || config.default;
        if (!bucketName) {
          throw new Error('No bucket specified and no default configured in ~/.r2-upload.yml');
        }

        const bucketConfig = config.buckets[bucketName];
        if (!bucketConfig) {
          throw new Error(`Bucket '${bucketName}' not found in config`);
        }

        const s3 = getS3Client(bucketConfig);
        await s3.send(
          new DeleteObjectCommand({
            Bucket: bucketConfig.bucket_name,
            Key: key,
          })
        );

        return {
          content: [{ type: 'text', text: `✅ Deleted: ${key} from bucket '${bucketName}'` }],
        };
      }

      case 'r2_generate_url': {
        const { key, bucket, expires = '5m' } = args as any;

        const bucketName = bucket || process.env.R2_DEFAULT_BUCKET || config.default;
        if (!bucketName) {
          throw new Error('No bucket specified and no default configured in ~/.r2-upload.yml');
        }

        const bucketConfig = config.buckets[bucketName];
        if (!bucketConfig) {
          throw new Error(`Bucket '${bucketName}' not found in config`);
        }

        const s3 = getS3Client(bucketConfig);
        const command = new GetObjectCommand({
          Bucket: bucketConfig.bucket_name,
          Key: key,
        });
        const url = await getSignedUrl(s3, command, { expiresIn: parseExpires(expires) });

        return {
          content: [{ type: 'text', text: `🔗 URL: ${url}\n⏰ Expires: ${expires}` }],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('R2 Upload MCP server running on stdio');
}

main().catch(console.error);
