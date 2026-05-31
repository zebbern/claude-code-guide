# perf-zustand-selectors

**Use Zustand selectors to minimize re-renders.**

## Why It Matters

Subscribing to the entire Zustand store means your component re-renders whenever ANY value changes. Selectors let you subscribe to specific slices, so components only re-render when their specific data changes.

## Bad Example

```jsx
// BAD - Re-renders on ANY store change
function BadComponent() {
  const store = useGameStore(); // Subscribes to entire store
  return <mesh position-x={store.playerX} />;
}
```

If `score`, `health`, or any other value changes, this component re-renders even though it only uses `playerX`.

## Good Example

```jsx
// GOOD - Re-renders only when playerX changes
function GoodComponent() {
  const playerX = useGameStore(state => state.playerX);
  return <mesh position-x={playerX} />;
}
```

## Multiple Values with Shallow

```jsx
import { shallow } from 'zustand/shallow';

// GOOD - Re-renders only when x, y, or z changes
function PositionComponent() {
  const { x, y, z } = useGameStore(
    state => ({ x: state.x, y: state.y, z: state.z }),
    shallow // Use shallow comparison for objects
  );
  return <mesh position={[x, y, z]} />;
}
```

## Transient Subscriptions (No Re-renders)

For values that change every frame (like positions), use transient subscriptions:

```jsx
function TransientComponent() {
  const meshRef = useRef();

  useEffect(() => {
    // Subscribe without causing re-renders
    const unsubscribe = useGameStore.subscribe(
      state => state.playerPosition,
      position => {
        meshRef.current.position.copy(position);
      }
    );
    return unsubscribe;
  }, []);

  return <mesh ref={meshRef} />;
}
```

## getState() in useFrame

For animation, use `getState()` which doesn't subscribe:

```jsx
function AnimatedComponent() {
  const meshRef = useRef();

  useFrame(() => {
    // No subscription, no re-renders
    const { targetPosition, speed } = useStore.getState();
    meshRef.current.position.lerp(targetPosition, speed);
  });

  return <mesh ref={meshRef} />;
}
```

## Store Design for Performance

```jsx
const useGameStore = create((set, get) => ({
  // State
  playerX: 0,
  playerY: 0,
  score: 0,
  health: 100,

  // Actions (don't subscribe to these)
  movePlayer: (dx, dy) => set(state => ({
    playerX: state.playerX + dx,
    playerY: state.playerY + dy
  })),

  // Derived values as getters
  getPlayerPosition: () => {
    const { playerX, playerY } = get();
    return new THREE.Vector3(playerX, playerY, 0);
  }
}));
```

## Comparison

| Method | Re-renders | Use Case |
|--------|------------|----------|
| `useStore()` | Every change | Never use |
| `useStore(s => s.value)` | When value changes | Most cases |
| `useStore(selector, shallow)` | When any selected value changes | Multiple values |
| `useStore.subscribe()` | Never | Continuous updates |
| `useStore.getState()` | Never | Inside useFrame |

## References

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [R3F State Management](https://docs.pmnd.rs/react-three-fiber/tutorials/using-with-zustand)
