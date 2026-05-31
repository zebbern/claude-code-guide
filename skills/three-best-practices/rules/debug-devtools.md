# Debug & DevTools

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Comprehensive debugging toolkit for Three.js applications.

## stats-gl (WebGL/WebGPU)

Modern performance monitor that works with both renderers:

```javascript
import Stats from 'stats-gl';

const stats = new Stats();
document.body.appendChild(stats.dom);

function animate() {
  stats.begin();
  // ... render
  stats.end();
  requestAnimationFrame(animate);
}
```

## lil-gui for Live Tweaking

```javascript
import GUI from 'lil-gui';

const gui = new GUI();

gui.add(camera.position, 'x', -10, 10);
gui.add(camera.position, 'y', -10, 10);
gui.add(camera.position, 'z', -10, 10);
gui.add(light, 'intensity', 0, 2);
gui.addColor(material, 'color');

// Folders for organization
const folder = gui.addFolder('Material');
folder.add(material, 'metalness', 0, 1);
folder.add(material, 'roughness', 0, 1);
```

## renderer.info

Monitor GPU memory and draw calls:

```javascript
setInterval(() => {
  console.log('Calls:', renderer.info.render.calls);
  console.log('Triangles:', renderer.info.render.triangles);
  console.log('Geometries:', renderer.info.memory.geometries);
  console.log('Textures:', renderer.info.memory.textures);
}, 1000);
```

## Spector.js for WebGL Profiling

Browser extension that captures WebGL frames with draw call visualization.

1. Install Spector.js extension
2. Click extension icon on any WebGL page
3. Click red record button
4. Inspect individual draw calls, shaders, state

## three-mesh-bvh for Fast Raycasting

```javascript
import { MeshBVH, acceleratedRaycast } from 'three-mesh-bvh';

// Build BVH for mesh
mesh.geometry.boundsTree = new MeshBVH(mesh.geometry);

// Replace default raycast with accelerated version
mesh.raycast = acceleratedRaycast;

// Now raycasting is much faster
raycaster.intersectObject(mesh);
```

## GPU Timing Queries (WebGPU)

```javascript
const adapter = await navigator.gpu.requestAdapter();
const hasTimestamps = adapter.features.has('timestamp-query');

if (hasTimestamps) {
  const device = await adapter.requestDevice({
    requiredFeatures: ['timestamp-query']
  });
  // Use timestamp queries for GPU profiling
}
```

## Profile Animation Loop

```javascript
function animate() {
  const t0 = performance.now();

  physics.update();
  const t1 = performance.now();

  controls.update();
  const t2 = performance.now();

  renderer.render(scene, camera);
  const t3 = performance.now();

  console.log(
    `Physics: ${(t1-t0).toFixed(2)}ms`,
    `Controls: ${(t2-t1).toFixed(2)}ms`,
    `Render: ${(t3-t2).toFixed(2)}ms`
  );

  requestAnimationFrame(animate);
}
```

## Context Lost Handling

```javascript
renderer.domElement.addEventListener('webglcontextlost', (event) => {
  event.preventDefault();
  console.warn('WebGL context lost');
  // Stop animation loop
  cancelAnimationFrame(animationId);
});

renderer.domElement.addEventListener('webglcontextrestored', () => {
  console.log('WebGL context restored');
  // Reinitialize and restart
  init();
  animate();
});
```

## Chrome WebGPU DevTools

Enable "WebGPU Developer Features" in `chrome://flags` for:
- Shader compilation error tracking
- Resource inspection
- Performance profiling

## Browser DevTools Performance Tab

Profile real sessions to identify:
- Frame timing issues
- Garbage collection pauses
- JavaScript bottlenecks
- Layout thrashing

## r3f-perf (React Three Fiber)

```jsx
import { Perf } from 'r3f-perf';

<Canvas>
  <Perf position="top-left" />
  <Scene />
</Canvas>
```

## Debug Helpers

```javascript
// Axes helper
scene.add(new THREE.AxesHelper(5));

// Grid helper
scene.add(new THREE.GridHelper(10, 10));

// Box helper for bounds
const box = new THREE.BoxHelper(mesh, 0xffff00);
scene.add(box);

// Skeleton helper
const skeleton = new THREE.SkeletonHelper(skinnedMesh);
scene.add(skeleton);

// Light helpers
const lightHelper = new THREE.DirectionalLightHelper(light, 5);
scene.add(lightHelper);
const shadowHelper = new THREE.CameraHelper(light.shadow.camera);
scene.add(shadowHelper);
```

## Clean Render Loop

Use `setAnimationLoop` for cleaner code:

```javascript
renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);
});

// Stop when needed
renderer.setAnimationLoop(null);
```

## Debug Checklist

- [ ] Add stats-gl for FPS monitoring
- [ ] Use lil-gui for parameter tweaking
- [ ] Check renderer.info for draw calls
- [ ] Profile with Spector.js
- [ ] Use three-mesh-bvh for raycasting
- [ ] Handle context loss gracefully
- [ ] Use r3f-perf for React apps
- [ ] Remove debug code in production
