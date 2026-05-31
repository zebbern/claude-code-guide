# WebGPU Renderer

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

WebGPU is the next-generation graphics API. Three.js provides zero-config WebGPU with automatic WebGL 2 fallback.

## Setup

```javascript
import { WebGPURenderer } from 'three/webgpu';

const renderer = new WebGPURenderer();
await renderer.init(); // Required before first render

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
```

## Browser Support Matrix

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome/Edge | v113+ | Full support |
| Firefox | v141+ (Windows), v145+ (macOS ARM) | Requires flags in older versions |
| Safari | v26+ (September 2025) | WebKit support |

## Key Tips

### 1. Use `renderAsync` for Compute-Heavy Scenes

```javascript
async function animate() {
  await renderer.renderAsync(scene, camera);
  requestAnimationFrame(animate);
}
```

Ensures compute passes complete before dependent render passes.

### 2. Force WebGL for Testing

```javascript
const renderer = new WebGPURenderer({ forceWebGL: true });
```

Useful for testing fallback behavior and debugging shader differences.

### 3. Feature Detection

```javascript
const adapter = await navigator.gpu?.requestAdapter();
if (!adapter) return; // Fallback to WebGL

const hasFloat32Filtering = adapter.features.has('float32-filterable');
const hasTimestamps = adapter.features.has('timestamp-query');
```

### 4. GPU-Persistent Buffers with `instancedArray`

```javascript
import { instancedArray } from 'three/tsl';

const positions = instancedArray(particleCount, 'vec3');
const velocities = instancedArray(particleCount, 'vec3');
```

CPU-based particle updates plateau around 50,000 particles; compute shaders enable millions.

### 5. Storage Textures for Read-Write Compute

```javascript
import { storageTexture, textureStore, uvec2 } from 'three/tsl';

const outputTexture = new StorageTexture(width, height);
const store = textureStore(outputTexture, uvec2(x, y), computedColor);
```

### 6. Workgroup Shared Memory

```javascript
import { workgroupArray, workgroupBarrier } from 'three/tsl';

const sharedData = workgroupArray('float', 256);
sharedData.element(localIndex).assign(inputData);
workgroupBarrier();
```

Shared memory operates 10-100x faster than global memory.

### 7. Indirect Draws for GPU-Driven Rendering

Let GPU determine what renders based on compute shader output, enabling frustum culling on GPU.

## When to Migrate to WebGPU

Prioritize migration when hitting performance walls in:
- Draw-call-heavy scenes
- Complex particle systems (>50k particles)
- Compute-intensive effects
- Complex shader pipelines

Expect 2-10x performance gains in these specific scenarios.

## Best Practices

1. **Minimize buffer updates per frame** - Batch multiple small updates into single operations
2. **Group frequently-updated uniforms** - WebGPU batches resources into bind groups; separate static from dynamic data
3. **Use compute shaders for physics** - Move CPU-bound physics to GPU compute
4. **Debug with Chrome WebGPU DevTools** - Enable "WebGPU Developer Features" in chrome://flags
