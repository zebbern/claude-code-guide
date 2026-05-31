# Mobile Optimization

Essential optimizations for Three.js on mobile devices.

## Device Detection

```javascript
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const isLowEnd = navigator.hardwareConcurrency <= 4;
const hasLimitedMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
```

## Renderer Configuration

```javascript
const renderer = new THREE.WebGLRenderer({
  antialias: !isMobile,              // Disable AA on mobile
  powerPreference: 'high-performance',
  precision: isMobile ? 'mediump' : 'highp'
});

// Limit pixel ratio (CRITICAL)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
```

## Material Hierarchy (Fast to Slow)

```javascript
// 1. MeshBasicMaterial (no lighting) - FASTEST
const basic = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// 2. MeshLambertMaterial (per-vertex lighting)
const lambert = new THREE.MeshLambertMaterial({ color: 0xff0000 });

// 3. MeshPhongMaterial (per-pixel lighting)
const phong = new THREE.MeshPhongMaterial({ color: 0xff0000 });

// 4. MeshStandardMaterial (PBR) - SLOWEST
const standard = new THREE.MeshStandardMaterial({ color: 0xff0000 });
```

> On iOS, Phong can drop FPS from 60 to 15. Prefer Lambert or Basic for mobile.

## Texture Optimization

```javascript
// Max recommended: 1024x1024 for mobile, ideal: 512x512
texture.minFilter = THREE.LinearFilter; // Avoid mipmaps if not needed
texture.generateMipmaps = false;

// Use compressed formats - KTX2/Basis reduces memory 75%+
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath('/basis/');
ktx2Loader.detectSupport(renderer);
```

## Shader Optimization

### BAD - Multiple passes

```javascript
composer.addPass(bloomPass);
composer.addPass(filmPass);
composer.addPass(colorPass);
// 3 draw calls, 3 framebuffer switches
```

### GOOD - Combined SuperShader

```javascript
const superShader = {
  uniforms: { /* all uniforms combined */ },
  fragmentShader: `
    // Combine all effects in single shader
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      color = applyBloom(color);
      color = applyFilm(color);
      color = applyColorGrade(color);
      gl_FragColor = color;
    }
  `
};
// 1 draw call, 1 framebuffer switch
```

## Memory Management

```javascript
// Pre-allocate everything at init
const tempVec3 = new THREE.Vector3();
const tempMatrix = new THREE.Matrix4();

// NEVER allocate in render loop
function animate() {
  // BAD: new THREE.Vector3() here
  // GOOD: tempVec3.set(x, y, z)
}

// Dispose aggressively
texture.dispose();
geometry.dispose();
material.dispose();

// Monitor memory
console.log(renderer.info.memory);
```

## Draw Calls

```javascript
// Check draw calls
console.log(renderer.info.render.calls);

// Target: < 100 draw calls on mobile

// Reduce with:
// - InstancedMesh for repeated objects
// - Merged geometries for static objects
// - Texture atlases
// - Material sharing
```

## Shadows on Mobile

```javascript
// Option 1: Disable shadows entirely
renderer.shadowMap.enabled = false;

// Option 2: Baked shadows (texture on ground plane)
const shadowTexture = textureLoader.load('baked-shadow.png');
const shadowMaterial = new THREE.MeshBasicMaterial({
  map: shadowTexture,
  transparent: true
});

// Option 3: Simple shadow map (if needed)
renderer.shadowMap.type = THREE.BasicShadowMap;
light.shadow.mapSize.set(512, 512); // Lower resolution
```

## Level of Detail

```javascript
const lod = new THREE.LOD();

// High detail (close)
lod.addLevel(highDetailMesh, 0);

// Medium detail
lod.addLevel(mediumDetailMesh, 10);

// Low detail (far)
lod.addLevel(lowDetailMesh, 30);

// Mobile distances
if (isMobile) {
  lod.levels[0].distance = 5;  // Switch sooner
  lod.levels[1].distance = 15;
}
```

## Mobile Checklist

- [ ] Pixel ratio ≤ 1.5
- [ ] Textures ≤ 1024px
- [ ] No antialiasing (or FXAA)
- [ ] Simple materials (Basic/Lambert)
- [ ] Post-processing minimal or combined
- [ ] Dispose aggressively
- [ ] Draw calls < 100
- [ ] No shadows or baked shadows
- [ ] LOD for complex models
- [ ] Precision mediump

## Performance Profiles

```javascript
const profiles = {
  high: {
    pixelRatio: 2,
    textureSize: 2048,
    shadows: true,
    postprocessing: true,
    antialias: true
  },
  medium: {
    pixelRatio: 1.5,
    textureSize: 1024,
    shadows: true,
    postprocessing: false,
    antialias: false
  },
  low: {
    pixelRatio: 1,
    textureSize: 512,
    shadows: false,
    postprocessing: false,
    antialias: false
  }
};

const profile = isMobile ?
  (isLowEnd ? profiles.low : profiles.medium) :
  profiles.high;

applyProfile(profile);
```

## Touch Controls

```javascript
// OrbitControls works on touch by default
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Disable zoom pinch if needed
controls.enableZoom = false;

// Touch-friendly hit areas
// Make interactive elements at least 44x44 CSS pixels
```

## References

- [Three.js Mobile Optimization](https://threejs.org/manual/#en/optimize-lots-of-objects)
- [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)
