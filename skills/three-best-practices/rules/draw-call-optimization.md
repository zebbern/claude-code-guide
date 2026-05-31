# Draw Call Optimization

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Draw calls are the primary performance bottleneck in most Three.js applications.

## Target: Under 100 Draw Calls Per Frame

Most devices maintain 60fps below 100 draw calls. Check progress via:

```javascript
console.log('Draw calls:', renderer.info.render.calls);
console.log('Triangles:', renderer.info.render.triangles);
```

## Optimization Techniques

### 1. InstancedMesh (Identical Objects)

Reduces N draw calls to 1 for identical geometry.

```javascript
const mesh = new THREE.InstancedMesh(geometry, material, 1000);
const matrix = new THREE.Matrix4();

for (let i = 0; i < 1000; i++) {
  matrix.setPosition(positions[i]);
  mesh.setMatrixAt(i, matrix);
}
mesh.instanceMatrix.needsUpdate = true;
```

### 2. BatchedMesh (Varied Geometries)

Combines multiple geometries sharing materials into single draw call. Allows per-instance geometry variation.

```javascript
const batchedMesh = new THREE.BatchedMesh(
  maxGeometryCount,
  maxVertexCount,
  maxIndexCount,
  material
);

const geoId1 = batchedMesh.addGeometry(geometry1);
const geoId2 = batchedMesh.addGeometry(geometry2);

batchedMesh.addInstance(geoId1);
batchedMesh.addInstance(geoId2);
```

### 3. Merge Static Geometry

```javascript
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const merged = mergeGeometries([geo1, geo2, geo3]);
const mesh = new THREE.Mesh(merged, sharedMaterial);
```

### 4. Share Materials

```javascript
// BAD: Separate materials per mesh
meshes.forEach(m => {
  m.material = new MeshStandardMaterial({ color: 'red' });
});

// GOOD: Shared material
const sharedMaterial = new MeshStandardMaterial({ color: 'red' });
meshes.forEach(m => {
  m.material = sharedMaterial;
});
```

### 5. Array Textures (Modern Browsers)

Combine multiple textures into layers, accessed by index in shaders:

```javascript
const textureArray = new THREE.DataArrayTexture(data, width, height, depth);
```

### 6. Frustum Culling

Enabled by default. Understand how it works:

```javascript
const frustum = new THREE.Frustum();
const matrix = new THREE.Matrix4().multiplyMatrices(
  camera.projectionMatrix,
  camera.matrixWorldInverse
);
frustum.setFromProjectionMatrix(matrix);

if (frustum.intersectsObject(mesh)) {
  // Object is visible
}
```

## Decision Tree

```
Need to render many objects?
├── All identical geometry?
│   └── Use InstancedMesh
├── Different geometries, same material?
│   └── Use BatchedMesh
├── Static objects?
│   └── Merge with BufferGeometryUtils
└── Dynamic objects?
    └── Consider object pooling + visibility toggling
```

## Monitoring

```javascript
setInterval(() => {
  const info = renderer.info.render;
  console.log(`Calls: ${info.calls}, Tris: ${info.triangles}`);
}, 1000);
```
