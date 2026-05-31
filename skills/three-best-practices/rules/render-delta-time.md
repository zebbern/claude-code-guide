# render-delta-time

**Use delta time for frame-rate independent animation.**

## Why It Matters

Without delta time, animations run faster on high refresh rate displays (144Hz) and slower on low frame rate devices. Delta time ensures consistent animation speed regardless of frame rate.

## Bad Example

```javascript
// BAD - Animation speed varies with frame rate
function animate() {
  requestAnimationFrame(animate);
  object.rotation.y += 0.01; // Fast on 144hz, slow on 30hz
  renderer.render(scene, camera);
}
```

At 60fps: rotates ~0.6 rad/sec
At 144fps: rotates ~1.44 rad/sec
At 30fps: rotates ~0.3 rad/sec

## Good Example

```javascript
// GOOD - Consistent speed regardless of frame rate
const clock = new THREE.Clock();

function animate() {
  const delta = clock.getDelta(); // Time since last frame in seconds

  object.rotation.y += 1.0 * delta; // 1 radian per second, always
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
```

Now the rotation is always 1 radian per second, regardless of frame rate.

## Common Patterns

### Movement

```javascript
const speed = 5; // units per second

function animate() {
  const delta = clock.getDelta();

  object.position.x += speed * delta;
}
```

### Lerp with Delta

```javascript
function animate() {
  const delta = clock.getDelta();
  const lerpFactor = 1 - Math.pow(0.001, delta); // Smooth, frame-rate independent

  camera.position.lerp(targetPosition, lerpFactor);
}
```

### Time-based Effects

```javascript
function animate() {
  const elapsed = clock.getElapsedTime(); // Total time since start

  object.position.y = Math.sin(elapsed * 2) * 2; // Oscillate at 2 Hz
}
```

## References

- [Three.js Clock](https://threejs.org/docs/#api/en/core/Clock)
