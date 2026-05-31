# Migration Checklist

Breaking changes and migration guide for Three.js versions.

## Recent Changes (r180-r183)

### r182 → r183

- Shadow quality improved in WebGPURenderer; reduce/remove bias values
- RoomEnvironment scene position updated; lighting may differ
- Sky/SkyMesh legacy gamma correction removed
- MeshPostProcessingMaterial removed

### r181 → r182

- `PCFSoftShadowMap` deprecated with WebGLRenderer; use `PCFShadowMap`
- WebGPURenderer: `colorBufferType` → `outputBufferType`
- VOXLoader.load() restructured

### r180 → r181

- Indirect specular light computation improved for PBR
- Rough PBR materials now appear brighter
- `renderAsync()`/`computeAsync()` deprecated; use sync versions
- TSL: `PI2` → `TWO_PI`
- New JSDoc-based API documentation

## Import Changes (r170+)

### BAD - Deprecated

```javascript
import { WebGPURenderer } from 'three/addons/renderers/webgpu/WebGPURenderer.js';
import { MeshStandardNodeMaterial } from 'three/addons/nodes/materials/...';
```

### GOOD - Current

```javascript
import * as THREE from 'three/webgpu';  // WebGPURenderer and NodeMaterials
import { ... } from 'three/tsl';         // TSL functions
```

## Color Management (r151+)

### BAD - Old API

```javascript
renderer.outputEncoding = THREE.sRGBEncoding;
texture.encoding = THREE.sRGBEncoding;
```

### GOOD - Current API

```javascript
renderer.outputColorSpace = THREE.SRGBColorSpace;
texture.colorSpace = THREE.SRGBColorSpace;
// ColorManagement.enabled = true by default
```

## Geometry Changes (r125+)

### Removed

```javascript
// REMOVED - use BufferGeometry
const geometry = new THREE.Geometry();
```

### Aliases Removed

```javascript
// These no longer exist
BoxBufferGeometry → BoxGeometry
SphereBufferGeometry → SphereGeometry
PlaneBufferGeometry → PlaneGeometry
// Just use BoxGeometry, SphereGeometry, etc.
```

## Light Decay (r147+)

```javascript
// Default decay is now 2 (physically correct)
const light = new THREE.PointLight(0xffffff, 1);
light.decay = 2; // DEFAULT

// To restore old behavior:
light.decay = 1;
```

## Material Changes (r147+)

```javascript
// vertexColors is now boolean
material.vertexColors = true;  // CORRECT

// OLD:
// material.vertexColors = THREE.VertexColors; // REMOVED
```

## Renderer Changes

### setAnimationLoop

```javascript
// GOOD - Modern way
renderer.setAnimationLoop(animate);

// OLD - Still works but less preferred
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

### XR Animation Loop

```javascript
// For WebXR, MUST use setAnimationLoop
renderer.xr.enabled = true;
renderer.setAnimationLoop(animate);
```

## Version Check

```javascript
console.log('Three.js version:', THREE.REVISION);

// Example: "182"
if (parseInt(THREE.REVISION) < 170) {
  console.warn('Please update Three.js to r170+');
}
```

## Common Migration Issues

### Issue: "X is not a constructor"

```javascript
// Check import path
// OLD:
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// NEW:
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
```

### Issue: Colors look different

```javascript
// Color management is now enabled by default
// If colors look washed out:
THREE.ColorManagement.enabled = false; // Revert to old behavior (not recommended)

// Better: Fix your color values for linear workflow
```

### Issue: Materials appear different

```javascript
// PBR materials changed in r180+
// Rough surfaces are now brighter
// Adjust roughness values if needed
material.roughness = 0.6; // May need to increase
```

### Issue: Shadows look wrong

```javascript
// Shadow bias may need adjustment
light.shadow.bias = -0.0001; // r183+ may need smaller values
```

## Quick Migration Checklist

- [ ] Update import paths (`addons/` instead of `examples/jsm/`)
- [ ] Replace `encoding` with `colorSpace`
- [ ] Remove BufferGeometry suffix (BoxGeometry, not BoxBufferGeometry)
- [ ] Check light decay values
- [ ] Update vertexColors to boolean
- [ ] For WebGPU: use `three/webgpu` and `three/tsl` imports
- [ ] Test shadows and adjust bias if needed
- [ ] Verify PBR material appearance

## References

- [Three.js Migration Guide](https://github.com/mrdoob/three.js/wiki/Migration-Guide)
- [Three.js Releases](https://github.com/mrdoob/three.js/releases)
