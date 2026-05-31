# Error Handling & Context Recovery

Handling WebGL errors and context loss gracefully.

## WebGL Context Lost

```javascript
const canvas = renderer.domElement;

canvas.addEventListener('webglcontextlost', (event) => {
  event.preventDefault(); // Indicates we'll handle recovery
  console.warn('WebGL context lost');

  // Stop render loop
  cancelAnimationFrame(animationId);

  // Show error UI
  showErrorOverlay('Graphics context lost. Recovering...');
});

canvas.addEventListener('webglcontextrestored', () => {
  console.log('WebGL context restored');

  // Recreate resources
  initScene();
  initMaterials();
  initTextures();

  // Restart render loop
  animate();

  hideErrorOverlay();
});
```

## Common Causes of Context Loss

1. **Memory Leaks**: Not disposing resources
2. **GPU Overload**: Too many draw calls
3. **Browser Tab Switch**: Mobile browsers free memory
4. **Driver Issues**: Especially on Windows
5. **GPU Crash**: Hardware/driver failure

## Simulating Context Loss (Testing)

```javascript
const ext = renderer.getContext().getExtension('WEBGL_lose_context');

// Lose context
ext.loseContext();

// Restore after delay
setTimeout(() => ext.restoreContext(), 1000);
```

## Resource Recreation Pattern

```javascript
class SceneManager {
  constructor() {
    this.resources = [];
    this.setupContextHandlers();
  }

  setupContextHandlers() {
    const canvas = this.renderer.domElement;

    canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this.onContextLost();
    });

    canvas.addEventListener('webglcontextrestored', () => {
      this.onContextRestored();
    });
  }

  registerResource(resource) {
    this.resources.push(resource);
  }

  onContextLost() {
    // Mark all resources as needing recreation
    this.resources.forEach(r => r.needsRecreation = true);
  }

  onContextRestored() {
    // Recreate all resources
    this.resources.forEach(r => {
      if (r.needsRecreation) {
        r.recreate();
        r.needsRecreation = false;
      }
    });
  }
}
```

## React Error Boundary

```jsx
class ThreeErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Three.js error:', error);
    // Report to error tracking service
    reportError(error, info);
  }

  retry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <p>3D scene failed to load.</p>
          <button onClick={this.retry}>Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Usage
<ThreeErrorBoundary>
  <Canvas>
    <Scene />
  </Canvas>
</ThreeErrorBoundary>
```

## Production Logging

```javascript
function logRendererInfo() {
  const gl = renderer.getContext();
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

  const info = {
    vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
    renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
    maxViewportDims: gl.getParameter(gl.MAX_VIEWPORT_DIMS),
    memory: renderer.info.memory,
    render: renderer.info.render
  };

  console.log('Renderer Info:', info);
  return info;
}

// Log on errors
window.addEventListener('error', (e) => {
  if (e.message.includes('WebGL') || e.message.includes('THREE')) {
    logRendererInfo();
  }
});
```

## Memory Monitoring

```javascript
function checkMemory() {
  const { geometries, textures } = renderer.info.memory;

  console.log(`Geometries: ${geometries}, Textures: ${textures}`);

  // Warning thresholds
  if (textures > 100) {
    console.warn('High texture count - check for leaks');
  }
  if (geometries > 500) {
    console.warn('High geometry count - check for leaks');
  }
}

// Check periodically
setInterval(checkMemory, 30000);
```

## Graceful Degradation

```javascript
function initRenderer() {
  // Try WebGPU first
  if (navigator.gpu) {
    try {
      return new THREE.WebGPURenderer({ antialias: true });
    } catch (e) {
      console.warn('WebGPU failed, falling back to WebGL');
    }
  }

  // Try WebGL2
  try {
    const canvas = document.createElement('canvas');
    if (canvas.getContext('webgl2')) {
      return new THREE.WebGLRenderer({ antialias: true });
    }
  } catch (e) {
    console.warn('WebGL2 failed, trying WebGL1');
  }

  // WebGL1 fallback
  try {
    return new THREE.WebGLRenderer({
      antialias: false,
      precision: 'mediump'
    });
  } catch (e) {
    // Show static image fallback
    showStaticFallback();
    return null;
  }
}
```

## Recovery Strategies

| Strategy | When to Use |
|----------|-------------|
| **Prevent** | Dispose aggressively, monitor memory |
| **Detect** | Listen for context lost events |
| **Recover** | Recreate resources from saved state |
| **Fallback** | Show static image or message |

## Best Practices

1. **Always Handle Context Loss**: Don't assume WebGL is always available

2. **Save State**: Keep track of scene state for recreation

3. **Dispose Properly**: Prevent context loss by managing memory

4. **User Feedback**: Show clear messages during recovery

5. **Logging**: Capture device info for debugging

6. **Fallbacks**: Have static fallback for critical content

## References

- [WebGL Context Lost](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
- [Three.js dispose()](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects)
