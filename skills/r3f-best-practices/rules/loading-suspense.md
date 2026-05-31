# loading-suspense

**Wrap async components in Suspense.**

## Why It Matters

R3F integrates with React Suspense for loading states. Components using `useGLTF`, `useTexture`, or other async loaders will suspend and need a Suspense boundary with a fallback.

## Basic Example

```jsx
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/model.glb');
  return <primitive object={scene} />;
}

function App() {
  return (
    <Canvas>
      <Suspense fallback={<LoadingFallback />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
}
```

## Multiple Async Components

```jsx
function Scene() {
  return (
    <Suspense fallback={<Loader />}>
      <Environment preset="city" />
      <Model url="/character.glb" />
      <Ground />
    </Suspense>
  );
}
```

## Nested Suspense Boundaries

```jsx
function Scene() {
  return (
    <>
      {/* Environment loads first */}
      <Suspense fallback={null}>
        <Environment preset="sunset" />
      </Suspense>

      {/* Main content with visible loader */}
      <Suspense fallback={<Loader />}>
        <Character />
        <Props />
      </Suspense>

      {/* Background loads last, no blocking */}
      <Suspense fallback={null}>
        <BackgroundDetails />
      </Suspense>
    </>
  );
}
```

## Using useProgress

```jsx
import { useProgress, Html } from '@react-three/drei';

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Html center>
      <div className="loader">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p>{progress.toFixed(0)}% loaded</p>
        <p className="loading-item">{item}</p>
      </div>
    </Html>
  );
}

function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
```

## Error Boundaries

```jsx
import { ErrorBoundary } from 'react-error-boundary';

function ModelErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Html center>
      <div>
        <p>Failed to load model</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </Html>
  );
}

function SafeModel({ url }) {
  return (
    <ErrorBoundary
      FallbackComponent={ModelErrorFallback}
      onReset={() => {
        // Reset any state if needed
      }}
    >
      <Suspense fallback={<LoadingBox />}>
        <Model url={url} />
      </Suspense>
    </ErrorBoundary>
  );
}
```

## Preloading to Avoid Suspense

```jsx
import { useGLTF, useTexture } from '@react-three/drei';

// Preload at module level
useGLTF.preload('/model.glb');
useTexture.preload('/texture.png');

// Component won't suspend if already loaded
function Model() {
  const { scene } = useGLTF('/model.glb'); // Instant if preloaded
  return <primitive object={scene} />;
}
```

## Animated Fallback

```jsx
function AnimatedLoader() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial wireframe color="cyan" />
    </mesh>
  );
}
```

## References

- [React Suspense](https://react.dev/reference/react/Suspense)
- [Drei useProgress](https://github.com/pmndrs/drei#useprogress)
