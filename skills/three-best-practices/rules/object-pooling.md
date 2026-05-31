# Object Pooling

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Object pooling prevents garbage collection pauses by reusing objects instead of creating/destroying them.

## When to Use

- Bullets, particles, projectiles
- Spawned enemies/NPCs
- Collectibles
- Any frequently created/destroyed objects

## Implementation

```javascript
class ObjectPool {
  constructor(factory, reset, initialSize = 20) {
    this.factory = factory;
    this.reset = reset;
    this.pool = [];

    // Pre-warm the pool
    for (let i = 0; i < initialSize; i++) {
      const obj = factory();
      obj.visible = false;
      this.pool.push(obj);
    }
  }

  acquire() {
    const obj = this.pool.pop() || this.factory();
    obj.visible = true;
    return obj;
  }

  release(obj) {
    this.reset(obj);
    obj.visible = false;
    this.pool.push(obj);
  }
}
```

## Example: Bullet Pool

```javascript
const bulletGeometry = new THREE.SphereGeometry(0.1);
const bulletMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

const bulletPool = new ObjectPool(
  // Factory: create new bullet
  () => {
    const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
    scene.add(bullet);
    return bullet;
  },
  // Reset: return bullet to initial state
  (bullet) => {
    bullet.position.set(0, 0, 0);
    bullet.userData.velocity = null;
  },
  50 // Initial pool size
);

// Spawn bullet
function fireBullet(position, direction) {
  const bullet = bulletPool.acquire();
  bullet.position.copy(position);
  bullet.userData.velocity = direction.clone().multiplyScalar(10);
  activeBullets.add(bullet);
}

// Despawn bullet
function removeBullet(bullet) {
  activeBullets.delete(bullet);
  bulletPool.release(bullet);
}

// Update loop
function updateBullets(delta) {
  for (const bullet of activeBullets) {
    bullet.position.add(
      bullet.userData.velocity.clone().multiplyScalar(delta)
    );

    // Check bounds
    if (bullet.position.length() > 100) {
      removeBullet(bullet);
    }
  }
}
```

## Key Benefits

1. **No GC pauses** - Objects are reused, not collected
2. **Predictable memory** - Pool size is bounded
3. **Faster spawning** - No allocation overhead

## Best Practices

1. **Pre-warm pools** - Create objects during loading, not gameplay
2. **Share geometry/material** - All pooled objects use same resources
3. **Reset completely** - Clear all state when releasing
4. **Size appropriately** - Match pool size to max concurrent objects
5. **Use visibility** - Toggle `visible` instead of add/remove from scene

## Anti-Pattern

```javascript
// BAD: Creates garbage every frame
function spawnParticle() {
  const particle = new THREE.Mesh(
    new THREE.SphereGeometry(0.1), // New geometry!
    new THREE.MeshBasicMaterial() // New material!
  );
  scene.add(particle);

  setTimeout(() => {
    scene.remove(particle);
    // Memory leak: geometry/material not disposed
  }, 1000);
}
```
