# TSL Post-Processing

Modern post-processing using TSL (Three.js Shading Language) for WebGPU and WebGL.

## TSL Post-Processing Setup

```javascript
import { pass, bloom, gaussianBlur, grayscale } from 'three/tsl';

const scenePass = pass(scene, camera);
const beauty = scenePass.getTextureNode();

// Chain effects
postProcessing.outputNode = bloom(grayscale(beauty), 1, 0.4, 0.85);
```

## Available Effects

| Effect | Signature |
|--------|-----------|
| After Image | `afterImage(node, damp)` |
| Anamorphic Flare | `anamorphic(node, threshold, scale, samples)` |
| Bloom | `bloom(node, strength, radius, threshold)` |
| Box Blur | `boxBlur(textureNode, options)` |
| Chromatic Aberration | `chromaticAberration(node, strength, center, scale)` |
| Denoise | `denoise(node, depthNode, normalNode, camera)` |
| Depth of Field | `dof(node, viewZ, focusDistance, focalLength, bokehScale)` |
| Dot Screen | `dotScreen(node, angle, scale)` |
| Film Grain | `film(inputNode, intensity, uv)` |
| FXAA | `fxaa(node)` |
| Gaussian Blur | `gaussianBlur(node, direction, sigma, options)` |
| Grayscale | `grayscale(color)` |
| Hash Blur | `hashBlur(textureNode, blurAmount, options)` |
| LUT Grading | `lut3D(node, lut, size, intensity)` |
| Motion Blur | `motionBlur(inputNode, velocity, samples)` |
| Outline | `outline(scene, camera, params)` |
| RGB Shift | `rgbShift(node, amount, angle)` |
| Sepia | `sepia(color)` |
| SMAA | `smaa(node)` |
| Sobel | `sobel(node)` |
| SSR | `ssr(colorNode, depthNode, normalNode, metalness, roughness, camera)` |
| SSGI | `ssgi(beautyNode, depthNode, normalNode, camera)` |
| AO | `ao(depthNode, normalNode, camera)` |
| Transition | `transition(nodeA, nodeB, mixTexture, ratio, threshold, useTexture)` |
| TRAA | `traa(beautyNode, depthNode, velocityNode, camera)` |

## Common Patterns

### Bloom

```javascript
import { pass, bloom } from 'three/tsl';

const scenePass = pass(scene, camera);
const beauty = scenePass.getTextureNode();

postProcessing.outputNode = bloom(beauty, 1, 0.4, 0.85);
// Parameters: node, strength, radius, threshold
```

### Gaussian Blur

```javascript
import { gaussianBlur, pass } from 'three/tsl';

const scenePass = pass(scene, camera);
const beauty = scenePass.getTextureNode();

postProcessing.outputNode = gaussianBlur(beauty, 4);
// Parameters: node, sigma
```

### Color Grading Pipeline

```javascript
import { pass, grayscale, saturation, hue, bloom } from 'three/tsl';

const scenePass = pass(scene, camera);
const beauty = scenePass.getTextureNode();

// Chain multiple effects
const graded = saturation(hue(beauty, 0.1), 1.2);
const final = bloom(graded, 0.5, 0.4, 0.9);

postProcessing.outputNode = final;
```

### Depth of Field

```javascript
import { pass, dof } from 'three/tsl';

const scenePass = pass(scene, camera);
const beauty = scenePass.getTextureNode();
const depth = scenePass.getDepthNode();

postProcessing.outputNode = dof(
  beauty,
  depth,
  5,     // focusDistance
  0.02,  // focalLength
  0.025  // bokehScale
);
```

## TSL vs EffectComposer

### EffectComposer (WebGL Traditional)

```javascript
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(resolution, strength, radius, threshold));

// In render loop
composer.render();
```

### TSL Post-Processing (Modern)

```javascript
import { pass, bloom } from 'three/tsl';

const scenePass = pass(scene, camera);
const beauty = scenePass.getTextureNode();

postProcessing.outputNode = bloom(beauty, 1, 0.4, 0.85);
```

## Best Practices

1. **Tone Mapping**: When using postprocessing, set `renderer.toneMapping = NoToneMapping` and add tone mapping as last effect

2. **Precision**: Use `HalfFloatType` for high precision frame buffers

3. **Anti-Aliasing**: WebGL AA is bypassed with postprocessing; add FXAA/SMAA at the end

4. **Performance**: Combine multiple effects into single pass when possible

5. **Order**: RenderPass always first, AA always last

## Alternative: pmndrs/postprocessing

High-performance post-processing library from Poimandres ecosystem:
- Better performance than built-in EffectComposer
- Optimized effects
- Better selective bloom support

```bash
npm install postprocessing
```

## References

- [Three.js Examples - Post-Processing](https://threejs.org/examples/?q=postprocessing)
- [pmndrs/postprocessing](https://github.com/pmndrs/postprocessing)
