---
name: caching
description: Caching strategies — invalidation, TTL guidelines, cache keys, cache layers, and when not to cache. Use when implementing or reviewing caching logic.
---
## WHEN_TO_USE

- When implementing a cache layer (in-memory, Redis, CDN) for an API or service.
- When choosing TTL values or invalidation strategies for cached data.
- When designing cache key schemas to avoid collisions or stale-data bugs.
- When reviewing code that reads from or writes to any cache.
- When debugging stale data, cache stampedes, or inconsistent responses.
- When configuring TanStack Query `staleTime`/`gcTime` for client-side caching.

## INVALIDATION

- [P0-MUST] Define an invalidation strategy for every cache. Stale data is worse than no cache.
- [P0-MUST] Invalidate caches when the underlying data changes — do not rely solely on TTL expiry.
- [P1-SHOULD] Prefer event-driven invalidation (on write/update/delete) over time-based expiry alone.
- [P1-SHOULD] Use cache versioning (include a version key) when data schemas change.

## TTL_GUIDELINES

- [P1-SHOULD] Set TTLs based on data volatility: static config (hours/days), user profiles (minutes), real-time data (seconds or no cache).
- [P1-SHOULD] Use stale-while-revalidate: serve stale data immediately while refreshing in the background.
- [P2-MAY] Use shorter TTLs in development and longer TTLs in production.

## CACHE_KEYS

- [P0-MUST] Include all query parameters that affect the result in the cache key.
- [P1-SHOULD] Use a consistent key format: `<entity>:<id>:<variant>` (e.g., `user:123:profile`, `products:list:page=2`).
- [P1-SHOULD] Namespace keys by service or module to prevent collisions.
- [P2-MAY] Hash long or complex keys to keep storage efficient.

## CACHE_LAYERS

- [P1-SHOULD] Use the appropriate cache layer for the use case:

| Layer | Best For | TTL Range |
|-------|----------|-----------|
| In-memory (Map, LRU) | Hot data, single-instance apps | Seconds to minutes |
| Redis / Memcached | Shared cache across instances, sessions | Minutes to hours |
| CDN / Edge | Static assets, public API responses | Hours to days |
| HTTP cache headers | Browser caching, API responses | Varies by resource |

- [P1-SHOULD] Layer caches: check memory → Redis → origin. Write-through on miss.

## WHEN_NOT_TO_CACHE

- [P0-MUST] Do not cache user-specific sensitive data (auth tokens, payment info) in shared caches.
- [P1-SHOULD] Do not cache rapidly changing data where staleness causes incorrect behavior (inventory counts, real-time pricing).
- [P1-SHOULD] Do not cache error responses — use short TTL or skip caching on failure.
- [P2-MAY] Avoid caching when the computation is cheap and the data set is small.

## CODE_EXAMPLES

### In-memory LRU cache with TTL

```ts
const cache = new Map<string, { value: unknown; expires: number }>();
const MAX_SIZE = 500;

export function getOrSet<T>(key: string, ttlMs: number, compute: () => T): T {
  const entry = cache.get(key);
  if (entry && entry.expires > Date.now()) return entry.value as T;

  const value = compute();
  if (cache.size >= MAX_SIZE) {
    // Evict oldest entry (first inserted)
    const oldest = cache.keys().next().value!;
    cache.delete(oldest);
  }
  cache.set(key, { value, expires: Date.now() + ttlMs });
  return value;
}
```

### Redis stale-while-revalidate with ioredis

```ts
import Redis from "ioredis";
const redis = new Redis(process.env.REDIS_URL);

export async function swr<T>(
  key: string,
  freshSec: number,
  staleSec: number,
  fetcher: () => Promise<T>,
): Promise<T> {
  const raw = await redis.get(key);
  if (raw) {
    const { value, createdAt } = JSON.parse(raw) as { value: T; createdAt: number };
    const ageMs = Date.now() - createdAt;
    if (ageMs < freshSec * 1000) return value; // Fresh — return immediately
    if (ageMs < staleSec * 1000) {
      // Stale — return cached, refresh in background
      fetcher().then((v) =>
        redis.set(key, JSON.stringify({ value: v, createdAt: Date.now() }), "EX", staleSec),
      );
      return value;
    }
  }
  const value = await fetcher();
  await redis.set(key, JSON.stringify({ value, createdAt: Date.now() }), "EX", staleSec);
  return value;
}
```

### HTTP cache headers in Express/Hono

```ts
// Immutable assets (hashed filenames)
app.use("/assets", (_, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  next();
});

// API responses — short cache with revalidation
app.get("/api/products", (_, res) => {
  res.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
  res.json(products);
});
```

### TanStack Query cache configuration

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Data fresh for 5 minutes
      gcTime: 30 * 60 * 1000,   // Garbage-collect after 30 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// Usage in a component
const { data } = useQuery({
  queryKey: ["products", { page, category }], // Cache key includes params
  queryFn: () => fetchProducts({ page, category }),
});
```

## ANTI_PATTERNS

- **Cache-and-forget** — Caching data with no invalidation strategy. Data goes stale permanently.
  - Instead: define explicit invalidation (event-driven on write, or bounded TTL) for every cache key.

- **Uniform TTL** — Using the same TTL (e.g., 1 hour) for all data regardless of volatility.
  - Instead: match TTL to data change frequency — seconds for prices, minutes for profiles, hours for configs.

- **Missing key parameters** — Cache key omits user ID, locale, or query params, serving wrong data.
  - Instead: include every parameter that affects the result: `products:list:page=2:locale=en`.

- **Caching errors** — Storing error responses (500s, timeouts) with long TTLs.
  - Instead: skip caching on failure, or use a very short TTL (5-10 seconds) to allow fast retry.

- **Cache stampede** — All instances hit the origin simultaneously when a popular key expires.
  - Instead: use stale-while-revalidate, jittered TTLs, or a mutex lock to let one instance refresh.
