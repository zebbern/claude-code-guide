# memory-dispose-geometry

**Always dispose geometries when removing objects from scene.**

## Why It Matters

Three.js does NOT automatically garbage collect GPU resources. Geometries allocate GPU buffer memory that persists until explicitly freed. Failing to dispose causes memory leaks that eventually crash the browser.

## Bad Example

```javascript
// BAD - Memory leak
scene.remove(mesh);
mesh = null; // GPU buffers still allocated!
```

The JavaScript object is garbage collected, but the GPU memory remains allocated.

## Good Example

```javascript
// GOOD - Proper cleanup
scene.remove(mesh);
mesh.geometry.dispose();
mesh = null;
```

## Recursive Disposal

For complex hierarchies, use recursive disposal:

```javascript
function disposeObject(obj) {
  if (obj.geometry) {
    obj.geometry.dispose();
  }

  if (obj.material) {
    if (Array.isArray(obj.material)) {
      obj.material.forEach(disposeMaterial);
    } else {
      disposeMaterial(obj.material);
    }
  }

  if (obj.children) {
    obj.children.forEach(disposeObject);
  }
}

function disposeMaterial(material) {
  const textureKeys = [
    'map', 'lightMap', 'bumpMap', 'normalMap', 'specularMap',
    'envMap', 'alphaMap', 'aoMap', 'displacementMap',
    'emissiveMap', 'gradientMap', 'metalnessMap', 'roughnessMap'
  ];

  textureKeys.forEach(key => {
    if (material[key]) {
      material[key].dispose();
    }
  });

  material.dispose();
}

// Usage
disposeObject(complexModel);
scene.remove(complexModel);
```

## React Example

```jsx
useEffect(() => {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  return () => {
    scene.remove(mesh);
    geometry.dispose();
    material.dispose();
  };
}, []);
```

## References

- [Three.js Manual: Dispose](https://threejs.org/manual/#en/dispose)
