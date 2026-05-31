# Shader Optimization for Mobile

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Mobile GPUs have specific constraints that require careful shader optimization.

## Use `mediump` Precision

Mobile processes `mediump` ~2x faster than `highp`:

```glsl
precision mediump float;

// Or per-variable
mediump vec3 color;
highp float depth; // Use highp only when necessary
```

## Minimize Varying Variables

Keep under 3 varyings for mobile GPUs by packing data:

```glsl
// BAD: 5 varyings
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vColor;
varying float vAlpha;

// GOOD: 2 varyings with packed data
varying vec4 vPositionAlpha; // xyz = position, w = alpha
varying vec4 vNormalUv;      // xy = normal.xy, zw = uv
// Reconstruct normal.z in fragment shader
```

## Replace Conditionals with `mix()` and `step()`

Branching is expensive on mobile GPUs:

```glsl
// BAD: Conditional
if (value > 0.5) {
  color = colorA;
} else {
  color = colorB;
}

// GOOD: Branchless
color = mix(colorB, colorA, step(0.5, value));
```

## Pack Data into RGBA Channels

Reduces texture fetches by 75%:

```glsl
// BAD: 4 texture fetches
float value1 = texture2D(tex1, uv).r;
float value2 = texture2D(tex2, uv).r;
float value3 = texture2D(tex3, uv).r;
float value4 = texture2D(tex4, uv).r;

// GOOD: 1 texture fetch
vec4 data = texture2D(dataTex, uv);
float value1 = data.r;
float value2 = data.g;
float value3 = data.b;
float value4 = data.a;
```

## Avoid Dynamic Loops

Use fixed loop bounds to enable compiler optimization:

```glsl
// BAD: Dynamic loop
for (int i = 0; i < numLights; i++) {
  // ...
}

// GOOD: Fixed loop with early exit
#define MAX_LIGHTS 4
for (int i = 0; i < MAX_LIGHTS; i++) {
  if (i >= numLights) break;
  // ...
}
```

## Avoid `discard`

Use `alphaTest` instead:

```javascript
// Instead of discard in shader
material.alphaTest = 0.5;
material.transparent = false; // Avoid transparent sorting
```

## Use TSL for Cross-Platform

TSL automatically optimizes for the target platform:

```javascript
import { color, positionLocal, sin, time } from 'three/tsl';

const material = new THREE.MeshStandardNodeMaterial();
material.colorNode = color(1, 0, 0).mul(sin(time).mul(0.5).add(0.5));
```

## Precompute on CPU

Move constant calculations out of shaders:

```javascript
// CPU: Compute once
const inverseViewMatrix = camera.matrixWorld.clone();
material.uniforms.uInverseView = { value: inverseViewMatrix };

// Update only when camera moves
camera.addEventListener('change', () => {
  material.uniforms.uInverseView.value.copy(camera.matrixWorld);
});
```

## Mobile Shader Checklist

- [ ] Use `mediump` precision by default
- [ ] Limit varyings to 3 or fewer
- [ ] Pack data into vec4 where possible
- [ ] Replace conditionals with mix/step
- [ ] Use fixed loop bounds
- [ ] Pack multiple values into single texture
- [ ] Avoid `discard`, use `alphaTest`
- [ ] Precompute constants on CPU
- [ ] Use TSL for automatic optimization
