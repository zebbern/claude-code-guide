# WebXR Setup

Guide to implementing VR and AR experiences with Three.js WebXR.

## Basic Setup

```javascript
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { ARButton } from 'three/addons/webxr/ARButton.js';

// Enable XR
renderer.xr.enabled = true;

// VR
document.body.appendChild(VRButton.createButton(renderer));

// AR
document.body.appendChild(ARButton.createButton(renderer, {
  requiredFeatures: ['hit-test']
}));

// Animation loop for XR (required)
renderer.setAnimationLoop(function() {
  renderer.render(scene, camera);
});
```

## Reference Spaces

```javascript
// AR - local space
renderer.xr.setReferenceSpaceType('local');

// VR - room-scale
renderer.xr.setReferenceSpaceType('local-floor');

// VR - seated
renderer.xr.setReferenceSpaceType('local');

// VR - unbounded (large areas)
renderer.xr.setReferenceSpaceType('unbounded');
```

## Controllers

```javascript
const controller1 = renderer.xr.getController(0);
const controller2 = renderer.xr.getController(1);
scene.add(controller1, controller2);

// Events
controller1.addEventListener('selectstart', onSelectStart);
controller1.addEventListener('selectend', onSelectEnd);
controller1.addEventListener('squeeze', onSqueeze);

// Controller models
import { XRControllerModelFactory } from 'three/addons/webxr/XRControllerModelFactory.js';

const controllerModelFactory = new XRControllerModelFactory();

const controllerGrip1 = renderer.xr.getControllerGrip(0);
controllerGrip1.add(controllerModelFactory.createControllerModel(controllerGrip1));
scene.add(controllerGrip1);

const controllerGrip2 = renderer.xr.getControllerGrip(1);
controllerGrip2.add(controllerModelFactory.createControllerModel(controllerGrip2));
scene.add(controllerGrip2);
```

## Hand Tracking

```javascript
import { XRHandModelFactory } from 'three/addons/webxr/XRHandModelFactory.js';

const handModelFactory = new XRHandModelFactory();

const hand1 = renderer.xr.getHand(0);
hand1.add(handModelFactory.createHandModel(hand1, 'mesh'));
scene.add(hand1);

const hand2 = renderer.xr.getHand(1);
hand2.add(handModelFactory.createHandModel(hand2, 'mesh'));
scene.add(hand2);
```

## AR Hit Testing

```javascript
let hitTestSource = null;
let hitTestSourceRequested = false;

renderer.xr.addEventListener('sessionstart', async () => {
  const session = renderer.xr.getSession();
  const viewerSpace = await session.requestReferenceSpace('viewer');
  hitTestSource = await session.requestHitTestSource({ space: viewerSpace });
});

renderer.xr.addEventListener('sessionend', () => {
  hitTestSource = null;
  hitTestSourceRequested = false;
});

function animate(timestamp, frame) {
  if (frame && hitTestSource) {
    const referenceSpace = renderer.xr.getReferenceSpace();
    const hitTestResults = frame.getHitTestResults(hitTestSource);

    if (hitTestResults.length > 0) {
      const hit = hitTestResults[0];
      const pose = hit.getPose(referenceSpace);

      reticle.visible = true;
      reticle.matrix.fromArray(pose.transform.matrix);
    } else {
      reticle.visible = false;
    }
  }

  renderer.render(scene, camera);
}
```

## AR Features

```javascript
// Request specific AR features
document.body.appendChild(ARButton.createButton(renderer, {
  requiredFeatures: ['hit-test'],
  optionalFeatures: ['dom-overlay', 'light-estimation'],
  domOverlay: { root: document.body }
}));

// Light estimation
renderer.xr.addEventListener('sessionstart', () => {
  const session = renderer.xr.getSession();
  session.requestLightProbe().then((lightProbe) => {
    // Use light probe data
  });
});
```

## Teleportation (VR)

```javascript
const marker = new THREE.Mesh(
  new THREE.CircleGeometry(0.25, 32).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

controller.addEventListener('selectstart', () => {
  const intersects = getIntersections(controller);
  if (intersects.length > 0) {
    const point = intersects[0].point;
    // Move user to point
    baseReferenceSpace = renderer.xr.getReferenceSpace();
    const offsetPosition = { x: -point.x, y: 0, z: -point.z, w: 1 };
    const transform = new XRRigidTransform(offsetPosition);
    const teleportSpace = baseReferenceSpace.getOffsetReferenceSpace(transform);
    renderer.xr.setReferenceSpace(teleportSpace);
  }
});
```

## Session Events

```javascript
renderer.xr.addEventListener('sessionstart', () => {
  console.log('XR session started');
});

renderer.xr.addEventListener('sessionend', () => {
  console.log('XR session ended');
});

// Check if in XR
if (renderer.xr.isPresenting) {
  // Currently in XR
}
```

## Browser Support (2025)

| Browser | VR | AR |
|---------|----|----|
| Chrome (Android) | Yes | Yes |
| Samsung Internet | Yes | Yes |
| Meta Quest Browser | Yes | Limited |
| Safari (iOS) | No | No |
| Firefox Reality | Yes | Yes |

## Best Practices

1. **setAnimationLoop**: Always use `renderer.setAnimationLoop()` for XR, not manual RAF

2. **Reference Space**: Choose appropriate reference space for your experience

3. **Controller Fallback**: Provide gaze/pointer fallback for devices without controllers

4. **Performance**: Target 72-90 fps for comfortable VR experience

5. **Comfort**: Avoid artificial locomotion; prefer teleportation

6. **UI**: Place UI at comfortable distance (1-3 meters)

7. **Testing**: Test on actual devices, not just emulators

## References

- [Three.js WebXR Examples](https://threejs.org/examples/?q=webxr)
- [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
- [Immersive Web](https://immersiveweb.dev/)
