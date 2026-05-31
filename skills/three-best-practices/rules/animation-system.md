# Animation System

Complete guide to Three.js animation system including AnimationMixer, blending, morph targets, and skeletal animation.

## System Components

```
AnimationClip          --- Contains KeyframeTracks
    |
    +-- KeyframeTrack  --- Data for one animated property
    |   +-- times[]    --- Keyframe times
    |   +-- values[]   --- Values at each keyframe
    |
AnimationMixer         --- Connects clips with objects
    |
    +-- AnimationAction --- Controls playback
        +-- play()
        +-- pause()
        +-- stop()
        +-- reset()
        +-- setLoop()
        +-- setEffectiveWeight()
        +-- crossFadeTo()
```

## Basic Usage

```javascript
const mixer = new THREE.AnimationMixer(model);

// Play animation
const clip = THREE.AnimationClip.findByName(model.animations, 'walk');
const action = mixer.clipAction(clip);
action.play();

// In render loop
function animate() {
  const delta = clock.getDelta();
  mixer.update(delta);
}
```

## Animation Blending

```javascript
const walkAction = mixer.clipAction(walkClip);
const runAction = mixer.clipAction(runClip);

// Start both
walkAction.play();
runAction.play();

// Crossfade from walk to run
walkAction.crossFadeTo(runAction, 0.5, true);

// Or manual weight control
walkAction.setEffectiveWeight(0.7);
runAction.setEffectiveWeight(0.3);
```

## Morph Targets

```javascript
// Access morph targets
const mesh = model.getObjectByName('Face');
const morphTargetDictionary = mesh.morphTargetDictionary;
const morphTargetInfluences = mesh.morphTargetInfluences;

// Animate manually
morphTargetInfluences[morphTargetDictionary['smile']] = 0.5;

// Or use AnimationClip
const smileTrack = new THREE.NumberKeyframeTrack(
  'Face.morphTargetInfluences[smile]',
  [0, 1, 2],     // times
  [0, 1, 0]      // values
);
const clip = new THREE.AnimationClip('SmileAnim', 2, [smileTrack]);
```

## Skeletal Animation

```javascript
gltfLoader.load('character.glb', (gltf) => {
  const model = gltf.scene;

  // Find SkinnedMesh
  model.traverse((child) => {
    if (child.isSkinnedMesh) {
      // Access bones
      const skeleton = child.skeleton;
      const bones = skeleton.bones;

      // Manipulate bone directly
      const head = bones.find(b => b.name === 'Head');
      head.rotation.y = Math.PI / 4;
    }
  });
});
```

## Loop Modes

```javascript
action.setLoop(THREE.LoopOnce);       // Play once
action.setLoop(THREE.LoopRepeat);     // Repeat forever (default)
action.setLoop(THREE.LoopPingPong);   // Alternate direction
action.setLoop(THREE.LoopRepeat, 3);  // Repeat 3 times

// Clamp at end
action.clampWhenFinished = true;
```

## Events

```javascript
mixer.addEventListener('finished', (e) => {
  console.log('Animation finished:', e.action.getClip().name);
});

mixer.addEventListener('loop', (e) => {
  console.log('Loop:', e.action.getClip().name);
});
```

## Time Scale & Duration

```javascript
// Speed control
action.setEffectiveTimeScale(2);  // Double speed
action.setEffectiveTimeScale(0.5); // Half speed
action.setEffectiveTimeScale(-1); // Reverse

// Duration
const duration = clip.duration;

// Set to specific time
action.time = 1.5;

// Set to percentage
action.time = duration * 0.5; // 50%
```

## Creating Custom Animations

```javascript
// Position animation
const positionTrack = new THREE.VectorKeyframeTrack(
  '.position',
  [0, 1, 2],                           // times
  [0, 0, 0, 0, 5, 0, 0, 0, 0]         // positions (x,y,z for each keyframe)
);

// Rotation animation (quaternion)
const rotationTrack = new THREE.QuaternionKeyframeTrack(
  '.quaternion',
  [0, 1],
  [0, 0, 0, 1, 0, 0.707, 0, 0.707]   // quaternions
);

// Color animation
const colorTrack = new THREE.ColorKeyframeTrack(
  '.material.color',
  [0, 1],
  [1, 0, 0, 0, 0, 1]                  // red to blue
);

const clip = new THREE.AnimationClip('custom', 2, [
  positionTrack,
  rotationTrack,
  colorTrack
]);
```

## Best Practices

1. **Single Mixer**: Use one AnimationMixer per animated object hierarchy

2. **Delta Time**: Always pass delta time to mixer.update()

3. **Weight Management**: Reset weights when switching animations

4. **Cleanup**: Stop actions and remove mixers when disposing objects

5. **Preload**: Create all AnimationActions on init, not during runtime

6. **Performance**: Use animation.optimize() for production

```javascript
// Optimize animation data
clip.optimize();

// Cleanup
action.stop();
mixer.stopAllAction();
mixer.uncacheRoot(model);
```

## References

- [Three.js Animation System](https://threejs.org/docs/#manual/en/introduction/Animation-system)
- [Three.js AnimationMixer](https://threejs.org/docs/#api/en/animation/AnimationMixer)
