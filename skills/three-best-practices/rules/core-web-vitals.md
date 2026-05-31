# Core Web Vitals & Loading

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Optimize loading performance to improve LCP, FID, and CLS scores.

## Lazy Load 3D Content Below the Fold

Don't block page load with 3D content that's not visible.

```javascript
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadThreeJsScene();
    observer.disconnect();
  }
});

observer.observe(canvasContainer);
```

## Code-Split Three.js Modules

Dynamic imports reduce initial bundle size.

```javascript
// Load Three.js only when needed
const Three = await import('three');
const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
```

## Preload Critical Assets

Use `<link rel="preload">` for critical resources:

```html
<link rel="preload" href="/model.glb" as="fetch" crossorigin>
<link rel="preload" href="/texture.ktx2" as="fetch" crossorigin>
```

## Progressive Loading

Show low-res content immediately, upgrade when ready:

```javascript
// Show low-res immediately
const lowRes = await loadModel('low.glb');
scene.add(lowRes);

// Load and swap high-res in background
loadModel('high.glb').then(highRes => {
  scene.remove(lowRes);
  lowRes.traverse(child => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) child.material.dispose();
  });
  scene.add(highRes);
});
```

## Placeholder Geometry

Show loading state with placeholder geometry:

```javascript
const placeholder = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: true })
);
scene.add(placeholder);

loadModel().then(model => {
  scene.remove(placeholder);
  placeholder.geometry.dispose();
  placeholder.material.dispose();
  scene.add(model);
});
```

## Offload to Web Workers

Move CPU-intensive work off main thread:

```javascript
// main.js
const worker = new Worker('/physics-worker.js');
worker.postMessage({ positions, velocities });

worker.onmessage = (event) => {
  updatePositions(event.data.positions);
};

// physics-worker.js
self.onmessage = (event) => {
  const result = computePhysics(event.data);
  self.postMessage(result);
};
```

## Stream Large Scenes

Load chunks based on camera position:

```javascript
function updateVisibleChunks(cameraPosition) {
  const visibleChunks = getChunksNear(cameraPosition);

  visibleChunks.forEach(chunk => {
    if (!chunk.loaded) {
      loadChunk(chunk);
    }
  });

  // Unload distant chunks
  loadedChunks.forEach(chunk => {
    if (!visibleChunks.includes(chunk)) {
      unloadChunk(chunk);
    }
  });
}
```

## React Three Fiber: Suspense

```jsx
import { Suspense } from 'react';

function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
```

## Performance Budget

| Asset Type | Target |
|------------|--------|
| Initial JS bundle | < 150KB gzipped |
| Hero model | < 500KB compressed |
| Textures | < 1MB total (KTX2) |
| Time to interactive | < 3 seconds |

## Checklist

- [ ] Lazy load 3D content below the fold
- [ ] Code-split Three.js modules
- [ ] Preload critical assets
- [ ] Implement progressive loading
- [ ] Use placeholder geometry during load
- [ ] Offload physics to Web Workers
- [ ] Stream large scenes by chunks
- [ ] Use Suspense in React
