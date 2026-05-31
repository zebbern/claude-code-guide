# GLTF Loading & Optimization

Complete setup for loading and optimizing 3D models.

## Full Loader Setup

```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';

// DRACO decoder
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

// KTX2 transcoder
const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath('/basis/');
ktx2Loader.detectSupport(renderer);

// GLTF loader with all decoders
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.setMeshoptDecoder(MeshoptDecoder);
gltfLoader.setKTX2Loader(ktx2Loader);

// Load model
gltfLoader.load('model.glb', (gltf) => {
  scene.add(gltf.scene);

  // Setup animations
  const mixer = new THREE.AnimationMixer(gltf.scene);
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });
}, onProgress, onError);
```

## Progress Tracking

```javascript
function onProgress(xhr) {
  if (xhr.lengthComputable) {
    const percent = (xhr.loaded / xhr.total) * 100;
    console.log(`Loading: ${percent.toFixed(0)}%`);
  }
}

function onError(error) {
  console.error('Error loading model:', error);
}
```

## glTF-Transform CLI

### Installation

```bash
npm install -g @gltf-transform/cli
```

### Draco Compression

```bash
gltf-transform draco input.glb output.glb --method edgebreaker
```

### Meshopt Compression

```bash
gltf-transform meshopt input.glb output.glb --level medium
```

### Texture Compression

```bash
# WebP (25-35% reduction)
gltf-transform webp input.glb output.glb --quality 75

# KTX2/Basis (75-85% reduction)
gltf-transform ktx input.glb output.glb --slots baseColor
```

### Full Optimization Pipeline

```bash
gltf-transform optimize input.glb output.glb \
  --compress draco \
  --texture-compress webp \
  --texture-size 1024
```

## Compression Results

| Method | Typical Reduction |
|--------|-------------------|
| Draco | 70-90% geometry |
| Meshopt | 60-80% geometry + morph + animation |
| KTX2/Basis | 75-85% textures |
| WebP | 25-35% textures |

## Draco vs Meshopt

| Feature | Draco | Meshopt |
|---------|-------|---------|
| Compression | Higher | Lower |
| Decode Speed | Slower | Faster |
| Animation | No | Yes |
| Morph Targets | No | Yes |
| Recommendation | Static models | Animated models |

## Best Practices

1. **Format**: Prefer GLB over GLTF (binary, single file)

2. **Textures**: Keep 512x512 or 1024x1024 for mobile

3. **Power of Two**: Always use power-of-2 dimensions

4. **Compression**: DRACO for geometry, KTX2 for textures

5. **Host Decoders**: Host decoders locally or use reliable CDN

6. **Progress**: Always show loading progress

## CDN Decoder Paths

```javascript
// Google CDN
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

// jsDelivr
dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.182.0/examples/jsm/libs/draco/');
```

## Post-Load Processing

```javascript
gltfLoader.load('model.glb', (gltf) => {
  const model = gltf.scene;

  // Enable shadows
  model.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Fix materials (if needed)
  model.traverse((child) => {
    if (child.material) {
      child.material.envMapIntensity = 1;
    }
  });

  // Center model
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);

  scene.add(model);
});
```

## Loading Manager

```javascript
const manager = new THREE.LoadingManager();

manager.onStart = (url, loaded, total) => {
  console.log(`Loading: ${url}`);
};

manager.onProgress = (url, loaded, total) => {
  console.log(`Progress: ${loaded}/${total}`);
};

manager.onLoad = () => {
  console.log('All assets loaded');
  hideLoadingScreen();
};

manager.onError = (url) => {
  console.error(`Error loading: ${url}`);
};

const gltfLoader = new GLTFLoader(manager);
const textureLoader = new THREE.TextureLoader(manager);
```

## Lazy Loading

```javascript
// Load critical assets first
await loadCriticalAssets();
showScene();

// Load non-critical in background
loadBackgroundAssets();

async function loadCriticalAssets() {
  const hero = await gltfLoader.loadAsync('hero.glb');
  scene.add(hero.scene);
}

function loadBackgroundAssets() {
  gltfLoader.load('decorations.glb', (gltf) => {
    scene.add(gltf.scene);
  });
}
```

## References

- [glTF-Transform](https://gltf-transform.dev/)
- [Three.js GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
- [Draco Compression](https://google.github.io/draco/)
