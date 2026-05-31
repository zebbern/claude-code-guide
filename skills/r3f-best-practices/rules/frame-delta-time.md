# frame-delta-time

**Always use delta for frame-rate independent animation.**

## Why It Matters

Without delta time, animations run faster on 144Hz displays and slower on 30fps mobile devices. Delta time ensures consistent animation speed regardless of frame rate.

## Bad Example

```jsx
// BAD - Speed varies with frame rate
function BadAnimation() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01; // Fast on 144hz, slow on 30hz
  });

  return <mesh ref={meshRef} />;
}
```

## Good Example

```jsx
// GOOD - Consistent speed on all devices
function GoodAnimation() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += 1 * delta; // 1 radian per second, always
  });

  return <mesh ref={meshRef} />;
}
```

## Using Clock for Time-based Effects

```jsx
function TimeBasedAnimation() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Oscillate at consistent frequency
    meshRef.current.position.y = Math.sin(t * 2) * 2; // 2 Hz oscillation
    meshRef.current.position.x = Math.cos(t) * 3;
  });

  return <mesh ref={meshRef} />;
}
```

## Frame-rate Independent Lerp

```jsx
function SmoothFollow({ target }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    // Frame-rate independent smooth interpolation
    const lerpFactor = 1 - Math.pow(0.001, delta);
    meshRef.current.position.lerp(target, lerpFactor);
  });

  return <mesh ref={meshRef} />;
}
```

## Movement with Speed

```jsx
function MovingObject() {
  const meshRef = useRef();
  const speed = 5; // units per second
  const direction = useRef(new THREE.Vector3(1, 0, 0));

  useFrame((state, delta) => {
    meshRef.current.position.addScaledVector(direction.current, speed * delta);
  });

  return <mesh ref={meshRef} />;
}
```

## Combining Delta and Elapsed Time

```jsx
function ComplexAnimation() {
  const meshRef = useRef();

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    // Position based on elapsed time (consistent patterns)
    meshRef.current.position.x = Math.sin(t) * 3;
    meshRef.current.position.z = Math.cos(t) * 3;

    // Rotation based on delta (consistent speed)
    meshRef.current.rotation.y += 0.5 * delta;
  });

  return <mesh ref={meshRef} />;
}
```

## State Destructuring

```jsx
useFrame(({ clock, camera, pointer, viewport }, delta) => {
  // clock.elapsedTime - total time since start
  // clock.getDelta() - same as delta parameter
  // camera - the default camera
  // pointer - normalized mouse position (-1 to 1)
  // viewport - { width, height, factor }
});
```

## References

- [R3F useFrame](https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe)
