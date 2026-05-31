# tsl-why-use

**Use TSL instead of onBeforeCompile hacks for custom materials.**

## Why It Matters

TSL (Three.js Shading Language) is the modern approach to shader creation in Three.js:

- Works with both WebGL and WebGPU backends
- No string manipulation or onBeforeCompile hacks
- Type-safe, composable shader nodes
- Automatic optimization and tree shaking
- Easier to maintain and debug

## Bad Example

```javascript
// OLD - onBeforeCompile (fragile, hard to maintain)
const material = new THREE.MeshStandardMaterial();
material.map = colorMap;
material.onBeforeCompile = (shader) => {
  shader.uniforms.detailMap = { value: detailMap };

  let token = '#define STANDARD';
  let insert = `uniform sampler2D detailMap;`;
  shader.fragmentShader = shader.fragmentShader.replace(token, token + insert);

  token = '#include <map_fragment>';
  insert = `diffuseColor *= texture2D(detailMap, vMapUv * 10.0);`;
  shader.fragmentShader = shader.fragmentShader.replace(token, token + insert);
};
```

Problems:
- String manipulation is error-prone
- Breaks with Three.js updates
- Hard to combine multiple modifications
- No type safety
- Difficult to debug

## Good Example

```javascript
// NEW - TSL (clean, composable)
import { texture, uv } from 'three/tsl';

const detail = texture(detailMap, uv().mul(10));

const material = new THREE.MeshStandardNodeMaterial();
material.colorNode = texture(colorMap).mul(detail);
```

Benefits:
- Clean, readable code
- Composable nodes
- Works with WebGL and WebGPU
- Type-safe with TypeScript
- Automatic optimization

## More TSL Examples

### Animated Color

```javascript
import { color, time, sin } from 'three/tsl';

const material = new THREE.MeshStandardNodeMaterial();
material.colorNode = color(0x00ff00).mul(sin(time).mul(0.5).add(0.5));
```

### Vertex Displacement

```javascript
import { positionLocal, sin, time } from 'three/tsl';

const material = new THREE.MeshStandardNodeMaterial();
material.positionNode = positionLocal.add(
  sin(time.add(positionLocal.y)).mul(0.1)
);
```

### Custom Function

```javascript
import { Fn, vec3, float } from 'three/tsl';

const oscSine = Fn(([t = time]) => {
  return t.add(0.75).mul(Math.PI * 2).sin().mul(0.5).add(0.5);
});

material.colorNode = vec3(oscSine(), 0, 0);
```

## References

- [Three.js TSL Documentation](https://threejs.org/docs/#api/en/nodes/TSL)
- [TSL Examples](https://threejs.org/examples/?q=tsl)
