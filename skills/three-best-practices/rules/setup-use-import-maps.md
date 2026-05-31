# setup-use-import-maps

**Use Import Maps instead of old CDN script tags.**

## Why It Matters

The old CDN pattern (`<script src="...three.min.js">`) is outdated and causes:
- Module resolution issues
- No tree shaking
- Global namespace pollution
- Version conflicts

## Bad Example

```html
<!-- WRONG - Outdated pattern (DO NOT USE) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
  // THREE is global, no modules
  const scene = new THREE.Scene();
</script>
```

## Good Example

```html
<!-- CORRECT - Modern Import Maps pattern -->
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.182.0/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.182.0/examples/jsm/"
  }
}
</script>
<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
</script>
```

## WebGPU Import Map

```html
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.182.0/build/three.webgpu.js",
    "three/tsl": "https://cdn.jsdelivr.net/npm/three@0.182.0/build/three.tsl.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.182.0/examples/jsm/"
  }
}
</script>
```

## References

- [Three.js Installation Guide](https://threejs.org/manual/#en/installation)
- [MDN Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)
