# Raycasting Optimization

Efficient picking and intersection testing in Three.js.

## Basic Raycaster

```javascript
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function checkIntersections() {
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    const hit = intersects[0];
    console.log('Object:', hit.object.name);
    console.log('Point:', hit.point);
    console.log('Face:', hit.face);
    console.log('Distance:', hit.distance);
  }
}
```

## Layers for Filtering

```javascript
// Define layers
const LAYER_INTERACTIVE = 1;
const LAYER_DECORATIVE = 2;

// Assign objects to layers
interactiveObject.layers.set(LAYER_INTERACTIVE);
decorativeObject.layers.set(LAYER_DECORATIVE);

// Raycaster only checks specific layer
raycaster.layers.set(LAYER_INTERACTIVE);

// Multiple layers
raycaster.layers.enable(LAYER_INTERACTIVE);
raycaster.layers.enable(2);
```

## three-mesh-bvh (High Performance)

For complex meshes (80k+ polygons), use BVH acceleration:

```bash
npm install three-mesh-bvh
```

```javascript
import { MeshBVH, acceleratedRaycast } from 'three-mesh-bvh';

// Extend Mesh prototype
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// Generate BVH for mesh
mesh.geometry.boundsTree = new MeshBVH(mesh.geometry);

// Now raycasting is ~100x faster
const intersects = raycaster.intersectObject(mesh);

// Dispose when done
mesh.geometry.boundsTree = null;
```

### BVH Options

```javascript
mesh.geometry.boundsTree = new MeshBVH(mesh.geometry, {
  maxLeafTris: 10,        // Triangles per leaf node
  maxDepth: 40,           // Max tree depth
  strategy: CENTER        // SAH, CENTER, or AVERAGE
});
```

## Throttling

```javascript
// Don't raycast on every mousemove
let lastRaycast = 0;
const RAYCAST_INTERVAL = 50; // ms

function onPointerMove(event) {
  const now = performance.now();
  if (now - lastRaycast < RAYCAST_INTERVAL) return;
  lastRaycast = now;

  updatePointer(event);
  checkIntersections();
}
```

## Octree for Scenes

```javascript
import { Octree } from 'three/addons/math/Octree.js';

const octree = new Octree();

// Add meshes to octree
scene.traverse((object) => {
  if (object.isMesh) {
    octree.fromGraphNode(object);
  }
});

// Optimized raycast
const result = octree.rayIntersect(ray);

// Capsule collision (for character controllers)
const capsuleInfo = {
  radius: 0.5,
  segment: new THREE.Line3(
    new THREE.Vector3(0, 0.5, 0),
    new THREE.Vector3(0, 1.5, 0)
  )
};
const collision = octree.capsuleIntersect(capsuleInfo);
```

## GPU Picking

For skinned meshes or when BVH isn't enough:

```javascript
// Concept:
// 1. Render each object with unique color
// 2. Read pixel under mouse
// 3. Map color -> object

const pickingScene = new THREE.Scene();
const pickingTexture = new THREE.WebGLRenderTarget(1, 1);
const idToObject = new Map();

// Assign unique colors
let id = 1;
scene.traverse((object) => {
  if (object.isMesh) {
    const color = new THREE.Color(id);
    const pickingMaterial = new THREE.MeshBasicMaterial({
      color: color
    });
    const pickingMesh = object.clone();
    pickingMesh.material = pickingMaterial;
    pickingScene.add(pickingMesh);
    idToObject.set(id, object);
    id++;
  }
});

function gpuPick(x, y) {
  camera.setViewOffset(
    renderer.domElement.width, renderer.domElement.height,
    x, y, 1, 1
  );
  renderer.setRenderTarget(pickingTexture);
  renderer.render(pickingScene, camera);
  camera.clearViewOffset();

  const pixelBuffer = new Uint8Array(4);
  renderer.readRenderTargetPixels(pickingTexture, 0, 0, 1, 1, pixelBuffer);

  const id = (pixelBuffer[0] << 16) | (pixelBuffer[1] << 8) | pixelBuffer[2];
  return idToObject.get(id);
}
```

## Best Practices

1. **Layers**: Use layers to filter non-interactive objects

2. **BVH**: Use three-mesh-bvh for complex meshes

3. **Throttle**: Don't raycast on every mouse event

4. **Bounding Box**: Three.js already optimizes with bounding box/sphere checks

5. **Recursive**: Use `recursive=true` only when needed

6. **First Hit**: If you only need first hit, check `intersects[0]`

7. **Near/Far**: Set raycaster.near and raycaster.far to limit range
   ```javascript
   raycaster.near = 0.1;
   raycaster.far = 100;
   ```

## Spatial Partitioning Comparison

| Structure | Best For |
|-----------|----------|
| BVH | Ray-mesh intersection |
| Octree | Scene queries, collision |
| KD-Tree | Point queries |
| Grid | Uniform distribution |

## References

- [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)
- [Three.js Raycaster](https://threejs.org/docs/#api/en/core/Raycaster)
- [Three.js Octree](https://threejs.org/examples/?q=octree)
