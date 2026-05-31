# Asset Compression

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Proper asset compression is critical for web performance. Unoptimized assets are the #1 cause of slow 3D web experiences.

## Geometry Compression

### Draco Compression

Achieves 90-95% size reduction with Web Worker decompression.

```bash
gltf-transform draco model.glb compressed.glb --method edgebreaker
```

### Meshopt (Alternative to Draco)

Similar compression ratios with faster decompression. Consider Meshopt when decompression speed is critical.

### Setup Decoder Paths

```javascript
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
```

## Texture Compression

### Why KTX2?

PNG/JPEG decompress fully in GPU memory:
- 200KB PNG = 20MB+ VRAM

KTX2 stays compressed in GPU memory, dramatically reducing VRAM usage.

### UASTC vs ETC1S

| Format | Quality | Size | Use Case |
|--------|---------|------|----------|
| UASTC | Higher | Larger | Normal maps, hero textures |
| ETC1S | Lower | Smaller | Environment textures, backgrounds |

### KTX2 Setup

```javascript
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath('/basis/');
```

## CLI Optimization

### gltf-transform (Recommended)

```bash
gltf-transform optimize model.glb output.glb \
  --texture-compress ktx2 \
  --compress draco
```

### Visual Comparison Tool

Use [Shopify's gltf-compressor](https://github.com/Shopify/gltf-compressor) for interactive side-by-side compression preview (keyboard shortcut "C").

## Texture Atlasing

Combine multiple textures into atlases to reduce texture binds:

```javascript
// Update UV coordinates to reference atlas regions
mesh.geometry.attributes.uv.array = atlasUVs;
mesh.geometry.attributes.uv.needsUpdate = true;
```

## Level of Detail (LOD)

Can improve frame rates by 30-40%.

```javascript
const lod = new THREE.LOD();
lod.addLevel(highPolyMesh, 0);
lod.addLevel(mediumPolyMesh, 50);
lod.addLevel(lowPolyMesh, 100);
scene.add(lod);
```

## Summary Checklist

- [ ] Compress geometry with Draco or Meshopt
- [ ] Convert textures to KTX2
- [ ] Use UASTC for quality-critical textures
- [ ] Use ETC1S for secondary textures
- [ ] Atlas textures where possible
- [ ] Implement LOD for complex models
- [ ] Set up decoder paths correctly
