# Toggle Visibility Instead of Remounting

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Toggle the `visible` prop instead of conditionally mounting/unmounting components.

## Why It Matters

Remounting a component:
1. Destroys the Three.js object
2. Triggers disposal (if configured)
3. Creates new geometry/material
4. Uploads new data to GPU
5. Recompiles shaders

Toggling visibility:
1. Sets `object.visible = false`
2. That's it - object stays in memory

## BAD: Conditional Mounting

```jsx
function Scene({ showModel }) {
  return (
    <>
      {showModel && <ExpensiveModel />}
    </>
  );
}
```

Every toggle destroys and recreates the entire model.

## GOOD: Visibility Toggle

```jsx
function Scene({ showModel }) {
  return (
    <ExpensiveModel visible={showModel} />
  );
}
```

Model stays in memory, just skipped during render.

## When to Use Each

### Use Visibility Toggle When:
- Frequent show/hide (e.g., UI state)
- Object is expensive to create
- Object is needed again soon
- Object count is manageable

### Use Conditional Mounting When:
- Object is rarely shown
- Memory is constrained
- Object is cheap to create
- Large number of potential objects

## With Refs

```jsx
function ToggleableModel() {
  const meshRef = useRef();
  const [visible, setVisible] = useState(true);

  // Direct mutation for animations
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.visible = shouldBeVisible;
    }
  });

  return <mesh ref={meshRef} visible={visible} />;
}
```

## Visibility vs Layers

For complex visibility logic, consider using Three.js layers:

```jsx
function SelectiveRendering() {
  const meshRef = useRef();

  useEffect(() => {
    // Set to layer 1 (not rendered by default camera)
    meshRef.current.layers.set(1);
  }, []);

  return <mesh ref={meshRef} />;
}
```

Layers allow camera-selective rendering without changing visibility.
