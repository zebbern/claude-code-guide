---
name: r3f-best-practices
description: React Three Fiber (R3F) and Poimandres ecosystem best practices. Use when writing, reviewing, or optimizing R3F code. Triggers on tasks involving @react-three/fiber, @react-three/drei, zustand, @react-three/postprocessing, @react-three/rapier, or leva.
license: MIT
metadata:
  author: three-agent-skills
  version: "1.1.0"
---

# React Three Fiber Best Practices

Comprehensive guide for React Three Fiber and the Poimandres ecosystem. Contains 70+ rules across 12 categories, prioritized by impact.

## Sources & Credits

> Additional tips from [100 Three.js Tips](https://www.utsubo.com/blog/threejs-best-practices-100-tips) by [Utsubo](https://www.utsubo.com)

## When to Apply

Reference these guidelines when:
- Writing new R3F components
- Optimizing R3F performance (re-renders are the #1 issue)
- Using Drei helpers correctly
- Managing state with Zustand
- Implementing post-processing or physics

## Ecosystem Coverage

- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions
- **@react-three/postprocessing** - Post-processing effects
- **@react-three/rapier** - Physics engine
- **zustand** - State management
- **leva** - Debug GUI

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Performance & Re-renders | CRITICAL | `perf-` |
| 2 | useFrame & Animation | CRITICAL | `frame-` |
| 3 | Component Patterns | HIGH | `component-` |
| 4 | Canvas & Setup | HIGH | `canvas-` |
| 5 | Drei Helpers | MEDIUM-HIGH | `drei-` |
| 6 | Loading & Suspense | MEDIUM-HIGH | `loading-` |
| 7 | State Management | MEDIUM | `state-` |
| 8 | Events & Interaction | MEDIUM | `events-` |
| 9 | Post-processing | MEDIUM | `postpro-` |
| 10 | Physics (Rapier) | LOW-MEDIUM | `physics-` |
| 11 | Leva (Debug GUI) | LOW | `leva-` |

## Quick Reference

### 1. Performance & Re-renders (CRITICAL)

- `perf-never-set-state-in-useframe` - NEVER call setState in useFrame
- `perf-isolate-state` - Isolate components that need React state
- `perf-zustand-selectors` - Use Zustand selectors, not entire store
- `perf-transient-subscriptions` - Use transient subscriptions for continuous values
- `perf-memo-components` - Memoize expensive components
- `perf-keys-for-lists` - Use stable keys for dynamic lists
- `perf-avoid-inline-objects` - Avoid creating objects/arrays in JSX
- `perf-dispose-auto` - Understand R3F auto-dispose behavior
- `perf-visibility-toggle` - Toggle visibility instead of remounting
- `perf-r3f-perf` - Use r3f-perf for performance monitoring

### 2. useFrame & Animation (CRITICAL)

- `frame-priority` - Use priority for execution order
- `frame-delta-time` - Always use delta for animations
- `frame-conditional-subscription` - Disable useFrame when not needed
- `frame-destructure-state` - Destructure only what you need
- `frame-render-on-demand` - Use invalidate() for on-demand rendering
- `frame-avoid-heavy-computation` - Move heavy work outside useFrame

### 3. Component Patterns (HIGH)

- `component-jsx-elements` - Use JSX for Three.js objects
- `component-attach-prop` - Use attach for non-standard properties
- `component-primitive` - Use primitive for existing objects
- `component-extend` - Use extend() for custom classes
- `component-forwardref` - Use forwardRef for reusable components
- `component-dispose-null` - Set dispose={null} on shared resources

### 4. Canvas & Setup (HIGH)

- `canvas-size-container` - Canvas fills parent container
- `canvas-camera-default` - Configure camera via prop
- `canvas-gl-config` - Configure WebGL context
- `canvas-shadows` - Enable shadows at Canvas level
- `canvas-frameloop` - Choose appropriate frameloop mode
- `canvas-events` - Configure event handling
- `canvas-linear-flat` - Use linear/flat for correct colors

### 5. Drei Helpers (MEDIUM-HIGH)

- `drei-use-gltf` - useGLTF with preloading
- `drei-use-texture` - useTexture for texture loading
- `drei-environment` - Environment for realistic lighting
- `drei-orbit-controls` - OrbitControls from Drei
- `drei-html` - Html for DOM overlays
- `drei-text` - Text for 3D text
- `drei-instances` - Instances for optimized instancing
- `drei-use-helper` - useHelper for debug visualization
- `drei-bounds` - Bounds to fit camera
- `drei-center` - Center to center objects
- `drei-float` - Float for floating animation

### 6. Loading & Suspense (MEDIUM-HIGH)

- `loading-suspense` - Wrap async components in Suspense
- `loading-preload` - Preload assets with useGLTF.preload
- `loading-use-progress` - useProgress for loading UI
- `loading-lazy-components` - Lazy load heavy components
- `loading-error-boundary` - Handle loading errors

### 7. State Management (MEDIUM)

- `state-zustand-store` - Create focused Zustand stores
- `state-avoid-objects-in-store` - Be careful with Three.js objects
- `state-subscribeWithSelector` - Fine-grained subscriptions
- `state-persist` - Persist state when needed
- `state-separate-concerns` - Separate stores by concern

### 8. Events & Interaction (MEDIUM)

- `events-pointer-events` - Use pointer events on meshes
- `events-stop-propagation` - Prevent event bubbling
- `events-cursor-pointer` - Change cursor on hover
- `events-raycast-filter` - Filter raycasting
- `events-event-data` - Understand event data structure

### 9. Post-processing (MEDIUM)

- `postpro-effect-composer` - Use EffectComposer
- `postpro-common-effects` - Common effects reference
- `postpro-selective-bloom` - SelectiveBloom for optimized glow
- `postpro-custom-shader` - Create custom effects
- `postpro-performance` - Optimize post-processing

### 10. Physics Rapier (LOW-MEDIUM)

- `physics-setup` - Basic Rapier setup
- `physics-body-types` - dynamic, fixed, kinematic
- `physics-colliders` - Choose appropriate colliders
- `physics-events` - Handle collision events
- `physics-api-ref` - Use ref for physics API
- `physics-performance` - Optimize physics

### 11. Leva (LOW)

- `leva-basic` - Basic Leva usage
- `leva-folders` - Organize with folders
- `leva-conditional` - Hide in production

## How to Use

Read individual rule files for detailed explanations and code examples:

```
rules/perf-never-set-state-in-useframe.md
rules/drei-use-gltf.md
rules/state-zustand-selectors.md
```

## Full Compiled Document

For the complete guide with all rules expanded: `../R3F_BEST_PRACTICES.md`

## Critical Patterns

### NEVER setState in useFrame

```jsx
// BAD - 60 re-renders per second!
function BadComponent() {
  const [position, setPosition] = useState(0);
  useFrame(() => {
    setPosition(p => p + 0.01); // NEVER DO THIS
  });
  return <mesh position-x={position} />;
}

// GOOD - Mutate refs directly
function GoodComponent() {
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.position.x += 0.01;
  });
  return <mesh ref={meshRef} />;
}
```

### Zustand Selectors

```jsx
// BAD - Re-renders on ANY store change
const store = useGameStore();

// GOOD - Only re-renders when playerX changes
const playerX = useGameStore(state => state.playerX);

// BETTER - No re-renders, direct mutation
useFrame(() => {
  const { value } = useStore.getState();
  ref.current.position.x = value;
});
```

### Drei useGLTF

```jsx
import { useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/model.glb');
  return <primitive object={scene} />;
}

// Preload for instant loading
useGLTF.preload('/model.glb');
```

### Suspense Loading

```jsx
function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
```

### r3f-perf Monitoring

```jsx
import { Perf } from 'r3f-perf';

function App() {
  return (
    <Canvas>
      <Perf position="top-left" />
      <Scene />
    </Canvas>
  );
}
```

### Toggle Visibility (Not Remounting)

```jsx
// BAD: Remounting destroys and recreates
{showModel && <Model />}

// GOOD: Toggle visibility, keeps instance alive
<Model visible={showModel} />
```
