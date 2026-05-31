#!/usr/bin/env tsx
/**
 * R2/S3 Upload Skill Onboarding
 */

import { createInterface } from 'readline/promises';
import { stdin, stdout } from 'process';
import { writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import yaml from 'js-yaml';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const colors = {
  red: '\x1b[0;31m',
  green: '\x1b[0;32m',
  yellow: '\x1b[1;33m',
  blue: '\x1b[0;34m',
  reset: '\x1b[0m',
};

const rl = createInterface({ input: stdin, output: stdout });

async function prompt(question: string): Promise<string> {
  return await rl.question(question);
}

async function main() {
  console.log(`${colors.blue}╔════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.blue}║   R2/S3 Upload Skill Setup                ║${colors.reset}`);
  console.log(`${colors.blue}╚════════════════════════════════════════════╝${colors.reset}`);
  console.log('');

  const configFile = join(homedir(), '.r2-upload.yml');

  // Check if config exists
  if (existsSync(configFile)) {
    console.log(`${colors.yellow}⚠️  Config file already exists: ${configFile}${colors.reset}`);
    const overwrite = await prompt('Do you want to overwrite it? (y/N): ');
    if (!overwrite.match(/^[Yy]$/)) {
      console.log(`${colors.green}✓ Keeping existing config${colors.reset}`);
      rl.close();
      return;
    }
  }

  // Ask storage type
  console.log(`${colors.blue}What type of storage do you want to configure?${colors.reset}`);
  console.log('1) Cloudflare R2 (recommended)');
  console.log('2) AWS S3');
  console.log('3) MinIO / Self-hosted S3');
  console.log('4) Skip setup (manual configuration)');
  console.log('');

  const storageType = await prompt('Choose option (1-4): ');

  if (storageType === '4') {
    console.log(`${colors.yellow}Skipping automated setup${colors.reset}`);
    console.log(`Copy example-config.yml to ${configFile}`);
    rl.close();
    return;
  }

  let config: any = {
    default: '',
    buckets: {},
  };

  if (storageType === '1') {
    // Cloudflare R2
    console.log('');
    console.log(`${colors.blue}═══ Cloudflare R2 Setup ═══${colors.reset}`);
    console.log('');
    console.log(`${colors.blue}You'll need:${colors.reset}`);
    console.log('  1. Cloudflare Account ID (from dashboard URL)');
    console.log('  2. R2 Bucket name');
    console.log('  3. R2 API Token (Access Key ID + Secret Access Key)');
    console.log('');
    console.log(`${colors.yellow}Get these from:${colors.reset}`);
    console.log('  1. Create bucket: https://dash.cloudflare.com → R2');
    console.log('  2. Get Account ID from URL: https://dash.cloudflare.com/<ACCOUNT_ID>/r2');
    console.log('  3. Create API token: https://dash.cloudflare.com/<ACCOUNT_ID>/r2/api-tokens');
    console.log(`     ${colors.yellow}→ Apply to specific bucket!${colors.reset}`);
    console.log('');

    const accountId = await prompt('Account ID: ');
    const bucketName = await prompt('Bucket name: ');
    const accessKeyId = await prompt('Access Key ID: ');
    const secretAccessKey = await prompt('Secret Access Key: ');
    const publicUrl = await prompt('Custom domain (optional, press Enter to skip): ');

    config.default = bucketName;
    config.buckets[bucketName] = {
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      access_key_id: accessKeyId,
      secret_access_key: secretAccessKey,
      bucket_name: bucketName,
      region: 'auto',
    };

    if (publicUrl) {
      config.buckets[bucketName].public_url = publicUrl;
    }
  } else if (storageType === '2') {
    // AWS S3
    console.log('');
    console.log(`${colors.blue}═══ AWS S3 Setup ═══${colors.reset}`);
    console.log('');

    const bucketName = await prompt('Bucket name: ');
    const region = await prompt('AWS Region (default: us-east-1): ') || 'us-east-1';
    const accessKeyId = await prompt('Access Key ID: ');
    const secretAccessKey = await prompt('Secret Access Key: ');

    config.default = bucketName;
    config.buckets[bucketName] = {
      endpoint: `https://s3.${region}.amazonaws.com`,
      access_key_id: accessKeyId,
      secret_access_key: secretAccessKey,
      bucket_name: bucketName,
      region,
    };
  } else if (storageType === '3') {
    // MinIO / Self-hosted
    console.log('');
    console.log(`${colors.blue}═══ MinIO / Self-hosted S3 Setup ═══${colors.reset}`);
    console.log('');

    const endpoint = await prompt('Endpoint URL (e.g., https://minio.example.com): ');
    const bucketName = await prompt('Bucket name: ');
    const accessKeyId = await prompt('Access Key ID: ');
    const secretAccessKey = await prompt('Secret Access Key: ');
    const region = await prompt('Region (default: us-east-1): ') || 'us-east-1';

    config.default = bucketName;
    config.buckets[bucketName] = {
      endpoint,
      access_key_id: accessKeyId,
      secret_access_key: secretAccessKey,
      bucket_name: bucketName,
      region,
    };
  }

  // Save config
  const yamlContent = yaml.dump(config, { indent: 2 });
  await writeFile(configFile, yamlContent, { mode: 0o600 });
  console.log('');
  console.log(`${colors.green}✓ Configuration saved to: ${configFile}${colors.reset}`);

  // Test connection
  console.log('');
  console.log(`${colors.blue}Testing connection...${colors.reset}`);

  try {
    const bucketConfig = config.buckets[config.default];
    const s3 = new S3Client({
      endpoint: bucketConfig.endpoint,
      region: bucketConfig.region,
      credentials: {
        accessKeyId: bucketConfig.access_key_id,
        secretAccessKey: bucketConfig.secret_access_key,
      },
    });

    await s3.send(
      new ListObjectsV2Command({
        Bucket: bucketConfig.bucket_name,
        MaxKeys: 1,
      })
    );

    console.log(`${colors.green}✅ Successfully connected to bucket '${config.default}'${colors.reset}`);
    console.log('');
    console.log(`${colors.green}╔════════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.green}║   Setup Complete! ✓                       ║${colors.reset}`);
    console.log(`${colors.green}╚════════════════════════════════════════════╝${colors.reset}`);
    console.log('');
    console.log('Next steps:');
    console.log('  1. Build the skill: pnpm run build');
    console.log('  2. The skill is now ready to use!');
    console.log('');
    console.log('Default expiration: 5 minutes');
    console.log('To change: use --expires flag (e.g., --expires 24h)');
  } catch (error) {
    console.log(`${colors.red}❌ Connection failed: ${error}${colors.reset}`);
    console.log('');
    console.log('Please check your credentials and try again.');
    console.log(`Config file: ${configFile}`);
  }

  rl.close();
}

main().catch(console.error);
