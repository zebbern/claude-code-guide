# TSL Compute Shaders

GPU compute shaders using TSL for WebGPU - enables GPGPU operations like particle systems, physics, and simulations.

## Basic Compute Shader

```javascript
import { Fn, instancedArray, instanceIndex, deltaTime } from 'three/tsl';

const COUNT = 1000000; // 1 million particles

// Storage buffers
const positionBuffer = instancedArray(COUNT, 'vec3');
const velocityBuffer = instancedArray(COUNT, 'vec3');

// Define compute shader
const computeParticles = Fn(() => {
  const position = positionBuffer.element(instanceIndex);
  const velocity = velocityBuffer.element(instanceIndex);

  position.addAssign(velocity.mul(deltaTime));
})().compute(COUNT);

// Execute in render loop
renderer.compute(computeParticles);
```

## Atomic Operations

```javascript
// Available atomic functions
atomicAdd(buffer, value)
atomicSub(buffer, value)
atomicMax(buffer, value)
atomicMin(buffer, value)
atomicAnd(buffer, value)
atomicOr(buffer, value)
atomicXor(buffer, value)
atomicStore(buffer, value)
atomicLoad(buffer)
```

## Barriers

```javascript
// Synchronization barriers
workgroupBarrier()   // Sync within workgroup
storageBarrier()     // Sync storage buffer access
textureBarrier()     // Sync texture access
barrier()            // Full barrier
```

## Compute Variables

| Variable | Description |
|----------|-------------|
| `workgroupId` | ID of current workgroup |
| `localId` | Local invocation ID |
| `globalId` | Global invocation ID |
| `numWorkgroups` | Total number of workgroups |
| `subgroupSize` | Size of subgroup |

## Particle System Example

```javascript
import {
  Fn, instancedArray, instanceIndex, deltaTime,
  If, float, vec3
} from 'three/tsl';

const COUNT = 100000;

const positionBuffer = instancedArray(COUNT, 'vec3');
const velocityBuffer = instancedArray(COUNT, 'vec3');

// Initialize positions
for (let i = 0; i < COUNT; i++) {
  positionBuffer.array[i * 3 + 0] = (Math.random() - 0.5) * 100;
  positionBuffer.array[i * 3 + 1] = Math.random() * 100;
  positionBuffer.array[i * 3 + 2] = (Math.random() - 0.5) * 100;

  velocityBuffer.array[i * 3 + 0] = 0;
  velocityBuffer.array[i * 3 + 1] = -9.81; // Gravity
  velocityBuffer.array[i * 3 + 2] = 0;
}

// Compute shader with physics
const computeParticles = Fn(() => {
  const position = positionBuffer.element(instanceIndex);
  const velocity = velocityBuffer.element(instanceIndex);

  // Apply velocity
  position.addAssign(velocity.mul(deltaTime));

  // Bounce off ground
  If(position.y.lessThan(0), () => {
    velocity.y.assign(velocity.y.negate().mul(0.8)); // Damping
    position.y.assign(0);
  });
})().compute(COUNT);

// In render loop
function animate() {
  renderer.compute(computeParticles);
  renderer.render(scene, camera);
}
```

## GPGPU with Render Targets (WebGL Fallback)

For WebGL without compute shaders:

```javascript
// Create position texture
const size = 256; // 256x256 = 65536 particles
const data = new Float32Array(size * size * 4);
for (let i = 0; i < size * size; i++) {
  data[i * 4 + 0] = Math.random() * 100 - 50; // x
  data[i * 4 + 1] = Math.random() * 100 - 50; // y
  data[i * 4 + 2] = Math.random() * 100 - 50; // z
  data[i * 4 + 3] = 1; // w
}

const positionTexture = new THREE.DataTexture(
  data, size, size,
  THREE.RGBAFormat, THREE.FloatType
);
positionTexture.needsUpdate = true;

// Ping-pong render targets
const rtA = new THREE.WebGLRenderTarget(size, size, {
  type: THREE.FloatType,
  format: THREE.RGBAFormat
});
const rtB = rtA.clone();

// Update shader
const updateMaterial = new THREE.ShaderMaterial({
  uniforms: {
    positions: { value: positionTexture },
    time: { value: 0 }
  },
  fragmentShader: `
    uniform sampler2D positions;
    uniform float time;
    varying vec2 vUv;

    void main() {
      vec4 pos = texture2D(positions, vUv);
      pos.y += sin(time + pos.x * 0.1) * 0.01;
      gl_FragColor = pos;
    }
  `
});
```

## Performance Comparison

| Method | Particles at 60fps |
|--------|-------------------|
| CPU | ~50,000 |
| GPGPU (WebGL) | ~500,000 |
| Compute Shaders (WebGPU) | 1,000,000+ (<1ms update) |

## Best Practices

1. **Workgroup Size**: Use multiples of 64 for optimal GPU utilization

2. **Memory Access**: Coalesce memory access patterns when possible

3. **Barriers**: Only use barriers when synchronization is necessary

4. **Buffer Types**: Use appropriate buffer types for your data

5. **Fallback**: Provide WebGL fallback for browsers without WebGPU support

## References

- [Three.js WebGPU Compute Examples](https://threejs.org/examples/?q=compute)
- [WebGPU Compute Shaders Spec](https://www.w3.org/TR/webgpu/#compute-pass-encoder)
