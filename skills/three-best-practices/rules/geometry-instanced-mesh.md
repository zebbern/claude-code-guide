# geometry-instanced-mesh

**Use InstancedMesh for many identical objects.**

## Why It Matters

Each mesh = 1 draw call. 10,000 meshes = 10,000 draw calls = terrible performance. InstancedMesh renders multiple copies in a single draw call while allowing individual transforms and colors.

## Bad Example

```javascript
// BAD - 10000 draw calls
for (let i = 0; i < 10000; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.random().multiplyScalar(100);
  scene.add(mesh);
}
```

This creates 10,000 separate objects, each requiring its own draw call.

## Good Example

```javascript
// GOOD - Single draw call for 10000 instances
const instancedMesh = new THREE.InstancedMesh(geometry, material, 10000);

const dummy = new THREE.Object3D();
const color = new THREE.Color();

for (let i = 0; i < 10000; i++) {
  // Set position
  dummy.position.random().multiplyScalar(100);
  dummy.rotation.random();
  dummy.scale.setScalar(0.5 + Math.random() * 0.5);
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(i, dummy.matrix);

  // Set color (optional)
  color.setHSL(Math.random(), 0.8, 0.5);
  instancedMesh.setColorAt(i, color);
}

instancedMesh.instanceMatrix.needsUpdate = true;
if (instancedMesh.instanceColor) {
  instancedMesh.instanceColor.needsUpdate = true;
}

scene.add(instancedMesh);
```

## Updating Instances

```javascript
// Update a single instance
function updateInstance(index, position, rotation, scale) {
  dummy.position.copy(position);
  dummy.rotation.copy(rotation);
  dummy.scale.copy(scale);
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(index, dummy.matrix);
  instancedMesh.instanceMatrix.needsUpdate = true;
}

// Update in animation loop
function animate() {
  for (let i = 0; i < 100; i++) {
    instancedMesh.getMatrixAt(i, dummy.matrix);
    dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
    dummy.rotation.y += 0.01;
    dummy.updateMatrix();
    instancedMesh.setMatrixAt(i, dummy.matrix);
  }
  instancedMesh.instanceMatrix.needsUpdate = true;

  renderer.render(scene, camera);
}
```

## Raycasting

```javascript
const raycaster = new THREE.Raycaster();

function onMouseClick(event) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(instancedMesh);

  if (intersects.length > 0) {
    const instanceId = intersects[0].instanceId;
    console.log('Clicked instance:', instanceId);

    // Change color of clicked instance
    instancedMesh.setColorAt(instanceId, new THREE.Color(0xff0000));
    instancedMesh.instanceColor.needsUpdate = true;
  }
}
```

## Performance Comparison

| Method | Objects | Draw Calls | Performance |
|--------|---------|------------|-------------|
| Individual Meshes | 10,000 | 10,000 | ~5 FPS |
| InstancedMesh | 10,000 | 1 | ~60 FPS |

## When NOT to Use

- Different geometries needed
- Different materials needed
- Complex per-object animations
- < 100 objects (overhead not worth it)

## References

- [Three.js InstancedMesh](https://threejs.org/docs/#api/en/objects/InstancedMesh)
- [Instancing Example](https://threejs.org/examples/#webgl_instancing_performance)
