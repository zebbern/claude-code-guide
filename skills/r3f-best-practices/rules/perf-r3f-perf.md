# r3f-perf for Performance Monitoring

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Use r3f-perf for comprehensive React Three Fiber performance monitoring.

## Installation

```bash
npm install r3f-perf
```

## Basic Usage

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

## Available Props

```jsx
<Perf
  position="top-left"     // Position: top-left, top-right, bottom-left, bottom-right
  minimal={false}         // Minimal mode (just FPS)
  showGraph={true}        // Show performance graph
  matrixUpdate={true}     // Show matrix updates
  deepAnalyze={false}     // Deep analysis (more CPU intensive)
  overClock={false}       // Over-clock mode for high refresh rate monitors
  logsPerSecond={10}      // Logs per second
/>
```

## What It Monitors

- **FPS** - Frames per second
- **MS** - Milliseconds per frame
- **CPU** - JavaScript execution time
- **GPU** - WebGL draw time (estimated)
- **Memory** - Geometries, textures, draw calls
- **Matrix Updates** - Number of matrix recalculations

## Conditional Rendering for Production

```jsx
import { Perf } from 'r3f-perf';

function App() {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <Canvas>
      {isDev && <Perf position="top-left" />}
      <Scene />
    </Canvas>
  );
}
```

## Deep Analyze Mode

For detailed per-object analysis:

```jsx
<Perf
  deepAnalyze={true}
  className="custom-perf"
/>
```

Shows render times for individual objects but has higher CPU overhead.

## Best Practices

1. **Remove in production** - Always hide in production builds
2. **Use sparingly** - Performance monitor itself has overhead
3. **Check draw calls** - Target under 100 draw calls
4. **Monitor memory** - Watch for leaking geometries/textures
5. **Use alongside renderer.info** - For detailed WebGL stats
