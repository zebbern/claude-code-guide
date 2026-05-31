# Post-Processing Optimization

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Post-processing can significantly impact performance. Optimize carefully.

## Use pmndrs/postprocessing (WebGL)

The pmndrs library is more performant than Three.js default EffectComposer:

```javascript
import { EffectComposer, Bloom, Vignette, EffectPass, RenderPass } from 'postprocessing';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new EffectPass(camera, new Bloom(), new Vignette()));

// In render loop
composer.render();
```

## Configure Renderer for Post-Processing

```javascript
const renderer = new THREE.WebGLRenderer({
  powerPreference: 'high-performance',
  antialias: false,      // AA handled by post-processing
  stencil: false,        // Disable if not needed
  depth: false           // Disable if not needed
});
```

## Disable Multisampling When Not Needed

```jsx
// React Three Fiber
<EffectComposer multisampling={0}>
  <Bloom />
</EffectComposer>
```

## Apply Tone Mapping at Pipeline End

```javascript
renderer.toneMapping = THREE.NoToneMapping;

// Add ToneMappingEffect as the LAST effect
composer.addPass(new EffectPass(camera, new ToneMappingEffect()));
```

## Add Antialiasing at the End

```javascript
import { SMAAEffect } from 'postprocessing';

// SMAA as the final pass
composer.addPass(new EffectPass(camera, new SMAAEffect()));
```

## Merge Compatible Effects

Reduce passes by combining effects:

```javascript
// BAD: Multiple passes
composer.addPass(new EffectPass(camera, new Bloom()));
composer.addPass(new EffectPass(camera, new Vignette()));
composer.addPass(new EffectPass(camera, new ChromaticAberration()));

// GOOD: Single pass with multiple effects
composer.addPass(new EffectPass(
  camera,
  new Bloom(),
  new Vignette(),
  new ChromaticAberration()
));
```

## Resolution Scaling

Half resolution can double frame rate:

```javascript
// Render at half resolution
composer.setSize(window.innerWidth / 2, window.innerHeight / 2);
```

## Selective Bloom

Only bloom objects that need it:

```javascript
import { SelectiveBloomEffect } from 'postprocessing';

const bloom = new SelectiveBloomEffect(scene, camera, {
  luminanceThreshold: 0.9,
  luminanceSmoothing: 0.3
});

// Add objects to bloom selection
bloom.selection.add(glowingObject);
```

## Bloom Parameter Tuning

| Parameter | Range | Description |
|-----------|-------|-------------|
| intensity | 0.5-2.0 | Overall strength |
| luminanceThreshold | 0.8-1.0 | Minimum brightness to bloom |
| radius | 0.5-1.0 | Spread size |

## WebGPU Native Post-Processing

For WebGPU, use Three.js native TSL-based post-processing:

```javascript
import { pass, bloom, fxaa } from 'three/tsl';

const postProcessing = new THREE.PostProcessing(renderer);
const scenePass = pass(scene, camera);

postProcessing.outputNode = scenePass
  .pipe(bloom({ threshold: 0.8, intensity: 1.0 }))
  .pipe(fxaa());

// In render loop
postProcessing.render();
```

## Performance Checklist

- [ ] Use pmndrs/postprocessing for WebGL
- [ ] Disable renderer AA, stencil, depth when using post-processing
- [ ] Merge compatible effects into single pass
- [ ] Add AA (SMAA/FXAA) as final effect
- [ ] Apply tone mapping at end
- [ ] Consider resolution scaling for mobile
- [ ] Use selective bloom instead of full-screen
- [ ] Disable multisampling when not needed
- [ ] Use TSL post-processing for WebGPU
