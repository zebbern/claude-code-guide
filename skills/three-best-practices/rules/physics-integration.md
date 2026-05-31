# Physics Integration

Guide to integrating physics engines with Three.js.

## Engine Comparison

| Engine | Language | Characteristics | Performance |
|--------|----------|-----------------|-------------|
| **Rapier** | Rust/WASM | Deterministic, modern | Very High |
| **Cannon-es** | JavaScript | Easy to use, maintained fork | High |
| **Ammo.js** | C++/WASM | Bullet port, softbody support | Medium-High |

## Rapier (Recommended for 2025+)

### Setup

```bash
npm install @dimforge/rapier3d
```

### Vite Configuration

```javascript
// vite.config.js
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default {
  plugins: [wasm(), topLevelAwait()]
};
```

### Basic Usage

```javascript
import RAPIER from '@dimforge/rapier3d';

await RAPIER.init();
const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });

// Create rigid body
const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
  .setTranslation(0, 5, 0);
const rigidBody = world.createRigidBody(rigidBodyDesc);

// Add collider
const colliderDesc = RAPIER.ColliderDesc.ball(0.5);
world.createCollider(colliderDesc, rigidBody);

// Sync with Three.js mesh
function animate() {
  world.step();

  const position = rigidBody.translation();
  const rotation = rigidBody.rotation();

  mesh.position.set(position.x, position.y, position.z);
  mesh.quaternion.set(rotation.x, rotation.y, rotation.z, rotation.w);
}
```

### Collider Shapes

```javascript
RAPIER.ColliderDesc.ball(radius)
RAPIER.ColliderDesc.cuboid(hx, hy, hz)
RAPIER.ColliderDesc.capsule(halfHeight, radius)
RAPIER.ColliderDesc.cylinder(halfHeight, radius)
RAPIER.ColliderDesc.cone(halfHeight, radius)
RAPIER.ColliderDesc.convexHull(vertices)
RAPIER.ColliderDesc.trimesh(vertices, indices)
```

## Cannon-es

### Setup

```bash
npm install cannon-es
```

### Basic Usage

```javascript
import * as CANNON from 'cannon-es';

const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

const sphereBody = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Sphere(0.5),
  position: new CANNON.Vec3(0, 5, 0)
});
world.addBody(sphereBody);

function animate() {
  world.step(1/60);
  mesh.position.copy(sphereBody.position);
  mesh.quaternion.copy(sphereBody.quaternion);
}
```

### Body Types

```javascript
// Dynamic (affected by forces)
new CANNON.Body({ mass: 1 })

// Static (immovable, mass = 0)
new CANNON.Body({ mass: 0 })

// Kinematic (controlled programmatically)
new CANNON.Body({
  mass: 0,
  type: CANNON.Body.KINEMATIC
})
```

### Shapes

```javascript
new CANNON.Sphere(radius)
new CANNON.Box(new CANNON.Vec3(hx, hy, hz))
new CANNON.Cylinder(radiusTop, radiusBottom, height, segments)
new CANNON.Plane()
new CANNON.ConvexPolyhedron({ vertices, faces })
new CANNON.Trimesh(vertices, indices)
```

## Sync Pattern

### BAD - Bidirectional sync

```javascript
// Physics affects mesh
mesh.position.copy(body.position);
// Mesh affects physics (creates feedback loop)
body.position.copy(mesh.position);
```

### GOOD - Physics -> Visual only

```javascript
function syncPhysicsToMesh(body, mesh) {
  mesh.position.copy(body.position);
  mesh.quaternion.copy(body.quaternion);
}

// For kinematic bodies controlled by Three.js
function syncMeshToKinematic(mesh, body) {
  body.position.copy(mesh.position);
  body.quaternion.copy(mesh.quaternion);
}
```

## Best Practices

1. **Simple Shapes**: Use simple colliders (box, sphere) even for complex meshes

2. **Fixed Timestep**: Use fixed timestep for physics (1/60)
   ```javascript
   world.step(1/60, deltaTime, 3); // Fixed step, max substeps
   ```

3. **Sleep**: Enable sleep for static bodies
   ```javascript
   body.allowSleep = true;
   body.sleepSpeedLimit = 0.1;
   ```

4. **Broad Phase**: Configure appropriate broad phase
   ```javascript
   world.broadphase = new CANNON.SAPBroadphase(world);
   ```

5. **Material Friction**: Define physics materials
   ```javascript
   const material = new CANNON.Material('default');
   const contact = new CANNON.ContactMaterial(material, material, {
     friction: 0.3,
     restitution: 0.3
   });
   world.addContactMaterial(contact);
   ```

6. **Sync Direction**: Always sync physics -> visual, not reverse

7. **Compound Shapes**: Use compound shapes for complex objects
   ```javascript
   const body = new CANNON.Body({ mass: 1 });
   body.addShape(new CANNON.Box(size1), offset1);
   body.addShape(new CANNON.Sphere(radius), offset2);
   ```

## Debug Visualization

```javascript
import CannonDebugger from 'cannon-es-debugger';

const cannonDebugger = CannonDebugger(scene, world);

function animate() {
  world.step(1/60);
  cannonDebugger.update();
}
```

## References

- [Rapier Documentation](https://rapier.rs/)
- [Cannon-es GitHub](https://github.com/pmndrs/cannon-es)
- [Three.js + Physics Examples](https://threejs.org/examples/?q=physics)
