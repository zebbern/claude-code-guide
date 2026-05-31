# Spatial Audio

Three.js audio system for 3D positional sound.

## Components

```javascript
import * as THREE from 'three';

// AudioListener - represents user position (attach to camera)
const listener = new THREE.AudioListener();
camera.add(listener);

// Audio - non-positional (background music)
const sound = new THREE.Audio(listener);

// PositionalAudio - 3D spatial sound
const positionalSound = new THREE.PositionalAudio(listener);
mesh.add(positionalSound);
```

## Loading Audio

```javascript
const audioLoader = new THREE.AudioLoader();
audioLoader.load('sound.mp3', (buffer) => {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.5);
  sound.play();
});
```

## PositionalAudio Configuration

```javascript
const positionalAudio = new THREE.PositionalAudio(listener);

// Reference distance (max volume distance)
positionalAudio.setRefDistance(1);

// Maximum distance
positionalAudio.setMaxDistance(100);

// Rolloff model: 'linear', 'inverse', 'exponential'
positionalAudio.setRolloffFactor(1);
positionalAudio.setDistanceModel('inverse');

// Panning model: 'HRTF' (realistic) or 'equalpower'
positionalAudio.panner.panningModel = 'HRTF';

// Directionality (cone)
positionalAudio.setDirectionalCone(180, 230, 0.1);
// innerAngle, outerAngle, outerGain
```

## Distance Models

| Model | Behavior |
|-------|----------|
| `linear` | Linear decrease from ref to max distance |
| `inverse` | Inverse relationship (realistic) |
| `exponential` | Exponential falloff |

## Audio Controls

```javascript
// Play/pause
sound.play();
sound.pause();
sound.stop();

// Volume
sound.setVolume(0.5);  // 0.0 to 1.0

// Playback rate
sound.setPlaybackRate(1.5);

// Loop
sound.setLoop(true);

// Check state
if (sound.isPlaying) { }

// Duration
const duration = sound.buffer.duration;

// Current time
sound.offset; // read
```

## Audio Analyzer

```javascript
const analyser = new THREE.AudioAnalyser(sound, 32);

function animate() {
  const data = analyser.getAverageFrequency();
  // Use data for visualizations
  mesh.scale.setScalar(1 + data / 256);
}
```

## Multiple Audio Sources

```javascript
// Background music
const bgMusic = new THREE.Audio(listener);
audioLoader.load('music.mp3', (buffer) => {
  bgMusic.setBuffer(buffer);
  bgMusic.setLoop(true);
  bgMusic.setVolume(0.3);
});

// Spatial sounds on objects
objects.forEach((obj, i) => {
  const sound = new THREE.PositionalAudio(listener);
  audioLoader.load(`sound${i}.mp3`, (buffer) => {
    sound.setBuffer(buffer);
    sound.setRefDistance(5);
    sound.setLoop(true);
  });
  obj.add(sound);
});
```

## User Gesture Requirement

Audio requires user interaction to start (browser policy):

```javascript
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
  // Resume AudioContext
  if (listener.context.state === 'suspended') {
    listener.context.resume();
  }
  sound.play();
  startButton.style.display = 'none';
});
```

## Best Practices

1. **HRTF**: Use `panningModel: 'HRTF'` for realistic 3D audio (best with headphones)

2. **User Gesture**: Always require user interaction before playing audio

3. **Dispose**: Call `audio.disconnect()` when removing sounds
   ```javascript
   sound.stop();
   sound.disconnect();
   ```

4. **Mobile**: Audio consumes significant battery on mobile devices

5. **Buffer Reuse**: Reuse audio buffers for repeated sounds
   ```javascript
   const sharedBuffer = await loadBuffer('shoot.mp3');

   function playShot(position) {
     const sound = new THREE.PositionalAudio(listener);
     sound.setBuffer(sharedBuffer);
     sound.position.copy(position);
     scene.add(sound);
     sound.play();
     sound.onEnded = () => {
       scene.remove(sound);
       sound.disconnect();
     };
   }
   ```

6. **Volume Levels**: Keep sound effects around 0.3-0.7, music around 0.2-0.4

7. **Ref Distance**: Set refDistance to the size of the emitting object

## Audio Formats

| Format | Browser Support | Notes |
|--------|-----------------|-------|
| MP3 | All | Good compression, universal |
| OGG | Chrome, Firefox | Better quality at same size |
| WAV | All | Uncompressed, large files |
| AAC | All | Good for music |

## References

- [Three.js Audio](https://threejs.org/docs/#api/en/audio/Audio)
- [Three.js PositionalAudio](https://threejs.org/docs/#api/en/audio/PositionalAudio)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
