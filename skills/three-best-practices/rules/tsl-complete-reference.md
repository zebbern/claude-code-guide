# TSL Complete Reference

Comprehensive reference for Three.js Shading Language (TSL) - the modern way to create shaders in Three.js.

## Type System

```javascript
// Scalar conversions
float(), int(), uint(), bool()

// Vector conversions
color(), vec2(), vec3(), vec4()

// Matrix conversions
mat2(), mat3(), mat4()

// Method-based conversion
positionWorld.toVec2()      // Access xy components
value.toFloat()             // Explicit conversion
value.toColor()             // Convert to color
```

## Uniforms with Update Events

```javascript
import { uniform } from 'three/tsl';

const myColor = uniform(new THREE.Color(0x0066FF));
material.colorNode = myColor;

// Update events
const posY = uniform(0);
posY.onObjectUpdate(({ object }) => object.position.y);  // Per object
posY.onRenderUpdate(() => value);                         // Per render pass
posY.onFrameUpdate(() => value);                          // Per frame
```

## Functions with Fn()

```javascript
import { Fn, vec3, float, time } from 'three/tsl';

// Basic function
const oscSine = Fn(([t = time]) => {
  return t.add(0.75).mul(Math.PI * 2).sin().mul(0.5).add(0.5);
});

// Named parameters
const customColor = Fn(({ r, g, b }) => {
  return vec3(r, g, b);
});

material.colorNode = customColor({ r: 1, g: 0, b: 0 });
```

## Conditionals

```javascript
import { Fn, If, select, vec3, float } from 'three/tsl';

// Ternary (inline) - GOOD for simple cases
const result = select(value.greaterThan(1), 1.0, value);

// If-Else (inside Fn) - NOTE: If with capital I
const limitedPosition = Fn(({ position }) => {
  const limit = 10;
  const result = vec3(position);

  If(result.y.greaterThan(limit), () => {
    result.y.assign(limit);
  });

  return result;
});

// Switch-Case
const col = color();
Switch(0)
  .Case(0, () => col.assign(color(1, 0, 0)))
  .Case(1, () => col.assign(color(0, 1, 0)))
  .Default(() => col.assign(color(1, 1, 1)));
```

## Loops

```javascript
// Basic loop
Loop(count, ({ i }) => {
  // Loop body
});

// Advanced configuration
Loop({ start: int(0), end: int(10), type: 'int', condition: '<' },
  ({ i }) => {}
);

// Nested loops
Loop(10, 5, ({ i, j }) => {});

// Boolean condition loop
const value = float(0);
Loop(value.lessThan(10), () => {
  value.addAssign(1);
});

// Flow control
Break();     // Exit loop
Continue();  // Next iteration
```

## Arrays

```javascript
// Creation
const colors = array([vec3(1, 0, 0), vec3(0, 1, 0)]);
const a = array('vec3', 2);                    // Fixed size
const a = vec3(0, 0, 1).toArray(2);           // Fill with value
const a = array([0, 1, 2], 'uint');           // Explicit type

// Access
const greenColor = colors.element(1);          // Dynamic index
const first = colors[0];                       // Constant index

// Uniform arrays
const tintColors = uniformArray(
  [new Color(1, 0, 0), new Color(0, 1, 0)],
  'color'
);
```

## Position Nodes

| Node | Description | Type |
|------|-------------|------|
| `positionGeometry` | Raw geometry position | `vec3` |
| `positionLocal` | Local transformed (post-skinning) | `vec3` |
| `positionWorld` | World space position | `vec3` |
| `positionWorldDirection` | Normalized world direction | `vec3` |
| `positionView` | View space position | `vec3` |
| `positionViewDirection` | Normalized view direction | `vec3` |

## Normal Nodes

| Node | Type |
|------|------|
| `normalGeometry` | `vec3` |
| `normalLocal` | `vec3` |
| `normalView` | `vec3` normalized |
| `normalWorld` | `vec3` normalized |
| `normalViewGeometry` | `vec3` |
| `normalWorldGeometry` | `vec3` |

## Camera Data

| Variable | Type |
|----------|------|
| `cameraNear`, `cameraFar` | `float` |
| `cameraProjectionMatrix`, `cameraViewMatrix`, `cameraWorldMatrix` | `mat4` |
| `cameraProjectionMatrixInverse` | `mat4` |
| `cameraNormalMatrix` | `mat3` |
| `cameraPosition` | `vec3` |

## Screen & Viewport

```javascript
// Screen (frame buffer in physical pixels)
screenUV           // Normalized coordinate (0-1)
screenCoordinate   // Physical pixels
screenSize         // Dimensions in physical pixels
screenDPR          // Device pixel ratio

// Viewport (from renderer.setViewport())
viewportUV         // Normalized coordinate
viewport           // vec4 dimensions
viewportCoordinate // Physical pixel coordinate
viewportSize       // Dimensions
viewportSharedTexture()   // Previously rendered content
viewportDepthTexture()    // Depth access
viewportLinearDepth       // Orthographic depth
```

## Texture Operations

```javascript
texture(texture, uv, level)          // vec4 with interpolation
textureLoad(texture, uv, level)      // vec4 without interpolation
textureStore(texture, uv, value)     // void
textureSize(texture, level)          // ivec2
textureBicubic(node, strength)       // vec4 bicubic filtering
cubeTexture(texture, uvw)            // vec4 from cube map
texture3D(texture, uvw)              // vec4 from 3D texture
triplanarTexture(texX, texY, texZ, scale, pos, normal)  // Triplanar mapping
```

## UV Utilities

```javascript
matcapUV                                    // vec2 for matcap
rotateUV(uv, rotation, center)             // vec2 rotated
spherizeUV(uv, strength, center)           // vec2 spherical distortion
spritesheetUV(count, uv, frame)            // vec2 for sprite animation
equirectUV(direction)                       // vec2 for equirectangular mapping
```

## Color Adjustments

```javascript
luminance(node)                  // Perceived brightness (float)
saturation(node, adjustment)     // Adjust saturation (color)
vibrance(node, adjustment)       // Enhance less saturated colors (color)
hue(node, adjustment)            // Rotate hue in radians (color)
posterize(node, steps)           // Reduce color levels (color)

material.colorNode = saturation(texture(map), 1.5);
material.colorNode = hue(texture(map), Math.PI / 2);
```

## Fog

```javascript
fog(color, factor)
rangeFogFactor(near, far)      // Linear fog
densityFogFactor(density)      // Exponential squared fog

scene.fogNode = fog(color(0x000000), rangeFogFactor(10, 100));
```

## Flow Control

```javascript
Discard()   // Discard current fragment
Return()    // Return from function
Break()     // Exit loop
Continue()  // Next iteration

const customFragment = Fn(() => {
  If(uv().x.lessThan(0.5), () => {
    Discard();
  });
  return vec4(1, 0, 0, 1);
});
```

## Utilities

```javascript
billboarding({ position, horizontal, vertical })  // Face camera
checker(coord)                                     // Checker pattern

// Full billboarding
material.vertexNode = billboarding();

// Horizontal only (for trees)
material.vertexNode = billboarding({ horizontal: true, vertical: false });
```

## Structs

```javascript
const BoundingBox = struct({ min: 'vec3', max: 'vec3' });

// Create instance
const bb = BoundingBox(vec3(0), vec3(1));
const bb2 = BoundingBox({ min: vec3(0), max: vec3(1) });

// Access members
const min = bb.get('min');
min.assign(vec3(-1));
```

## References

- [Three.js Wiki - TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language)
- [Maxime Heckel's Field Guide to TSL](https://blog.maximeheckel.com/posts/field-guide-to-tsl-and-webgpu/)
- [sbcode.net TSL Tutorials](https://sbcode.net/tsl/getting-started/)
