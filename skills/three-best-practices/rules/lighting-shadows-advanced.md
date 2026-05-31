# Lighting & Shadows Advanced

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Lighting is computationally expensive. Optimize carefully.

## Limit Active Lights

**Target: 3 or fewer active lights**

Each additional light increases shader complexity. Beyond 3 lights, consider baking.

## PointLight Shadow Cost

PointLights require 6 shadow map renders (cube faces):

```
Draw calls = objects × 6 × point_lights
```

A scene with 100 objects and 2 PointLights = 1,200 shadow draw calls.

**Prefer DirectionalLight or SpotLight for shadows.**

## Shadow Map Sizing

| Platform | Recommended Size |
|----------|------------------|
| Mobile | 512-1024 |
| Desktop | 1024-2048 |
| Quality-critical | 4096 |

```javascript
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
```

## Tight Shadow Camera Frustum

```javascript
const light = new THREE.DirectionalLight(0xffffff, 1);

// Fit tightly to scene bounds
light.shadow.camera.left = -10;
light.shadow.camera.right = 10;
light.shadow.camera.top = 10;
light.shadow.camera.bottom = -10;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 50;

// Use helper to visualize
const helper = new THREE.CameraHelper(light.shadow.camera);
scene.add(helper);
```

## Disable Shadow Auto-Update for Static Scenes

```javascript
renderer.shadowMap.autoUpdate = false;

// Manually trigger when needed (e.g., after moving light)
renderer.shadowMap.needsUpdate = true;
```

## Cascaded Shadow Maps (CSM) for Large Scenes

```javascript
import { CSM } from 'three/addons/csm/CSM.js';

const csm = new CSM({
  maxFar: camera.far,
  cascades: 4, // Desktop: 4, Mobile: 2
  shadowMapSize: 2048,
  lightDirection: new THREE.Vector3(-1, -1, -1).normalize(),
  camera: camera,
  parent: scene
});

// Update in render loop
function animate() {
  csm.update();
  renderer.render(scene, camera);
}
```

## Bake Lightmaps for Static Scenes

Options:
1. **Blender** - Bake lighting in Blender, export to glTF
2. **@react-three/lightmap** - Runtime baking in R3F

```jsx
// React Three Fiber
import { Lightmap } from '@react-three/lightmap';

<Lightmap>
  <Scene />
</Lightmap>
```

## Environment Maps for Ambient Light

```javascript
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

const pmremGenerator = new THREE.PMREMGenerator(renderer);

new RGBELoader().load('environment.hdr', (texture) => {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  scene.environment = envMap;
  texture.dispose();
  pmremGenerator.dispose();
});
```

## Fake Shadows for Simple Cases

Semi-transparent planes with radial gradients provide budget-friendly contact shadows:

```javascript
const shadowTexture = createRadialGradientTexture();
const shadowMaterial = new THREE.MeshBasicMaterial({
  map: shadowTexture,
  transparent: true,
  opacity: 0.5,
  depthWrite: false
});

const shadowPlane = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  shadowMaterial
);
shadowPlane.rotation.x = -Math.PI / 2;
shadowPlane.position.y = 0.01; // Slightly above ground
```

## Light Probes

For static scenes with complex lighting:

```javascript
import { LightProbeGenerator } from 'three/addons/lights/LightProbeGenerator.js';

const lightProbe = new THREE.LightProbe();

// Generate from cube camera
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
cubeCamera.update(renderer, scene);

lightProbe.copy(LightProbeGenerator.fromCubeRenderTarget(renderer, cubeRenderTarget));
scene.add(lightProbe);
```

## Checklist

- [ ] Limit to 3 or fewer active lights
- [ ] Avoid PointLight shadows when possible
- [ ] Size shadow maps for target platform
- [ ] Fit shadow camera frustum tightly
- [ ] Disable shadow autoUpdate for static scenes
- [ ] Use CSM for large outdoor scenes
- [ ] Bake lighting for static geometry
- [ ] Use environment maps for ambient lighting
- [ ] Consider fake shadows for simple cases
