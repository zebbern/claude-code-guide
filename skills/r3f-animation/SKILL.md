---
name: r3f-animation
description: React Three Fiber animation - useFrame, useAnimations, spring physics, keyframes. Use when animating objects, playing GLTF animations, creating procedural motion, or implementing physics-based movement.
---

# React Three Fiber Animation

## Quick Start

```tsx
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function RotatingBox() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <RotatingBox />
    </Canvas>
  )
}
```

## useFrame Hook

The core animation hook in R3F. Runs every frame.

### Basic Usage

```tsx
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function AnimatedMesh() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    // state contains: clock, camera, scene, gl, mouse, etc.
    // delta is time since last frame in seconds

    meshRef.current.rotation.y += delta
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
```

### State Object

```tsx
useFrame((state, delta, xrFrame) => {
  const {
    clock,           // THREE.Clock
    camera,          // Current camera
    scene,           // Scene
    gl,              // WebGLRenderer
    mouse,           // Normalized mouse position (-1 to 1)
    pointer,         // Same as mouse
    viewport,        // Viewport dimensions
    size,            // Canvas size
    raycaster,       // Raycaster
    get,             // Get current state
    set,             // Set state
    invalidate,      // Request re-render (when frameloop="demand")
  } = state

  // Time-based animation
  const t = clock.getElapsedTime()
  meshRef.current.position.y = Math.sin(t) * 2
})
```

### Render Priority

```tsx
// Lower numbers run first. Default is 0.
// Use negative for pre-render, positive for post-render

function PreRender() {
  useFrame(() => {
    // Runs before main render
  }, -1)
}

function PostRender() {
  useFrame(() => {
    // Runs after main render
  }, 1)
}

function DefaultRender() {
  useFrame(() => {
    // Runs at default priority (0)
  })
}
```

### Conditional Animation

```tsx
function ConditionalAnimation({ isAnimating }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (!isAnimating) return
    meshRef.current.rotation.y += delta
  })

  return <mesh ref={meshRef}>...</mesh>
}
```

## GLTF Animations with useAnimations

The recommended way to play animations from GLTF/GLB files.

### Basic Usage

```tsx
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'

function AnimatedModel() {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/character.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    // Play first animation
    actions[names[0]]?.play()
  }, [actions, names])

  return <primitive ref={group} object={scene} />
}
```

### Animation Control

```tsx
function Character() {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/character.glb')
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions['Walk']
    if (action) {
      // Playback control
      action.play()
      action.stop()
      action.reset()
      action.paused = true

      // Speed
      action.timeScale = 1.5  // 1.5x speed
      action.timeScale = -1   // Reverse

      // Loop modes
      action.loop = THREE.LoopOnce
      action.loop = THREE.LoopRepeat
      action.loop = THREE.LoopPingPong
      action.repetitions = 3
      action.clampWhenFinished = true

      // Weight (for blending)
      action.weight = 1
    }
  }, [actions])

  return <primitive ref={group} object={scene} />
}
```

### Crossfade Between Animations

```tsx
import { useGLTF, useAnimations } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'

function Character() {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/character.glb')
  const { actions } = useAnimations(animations, group)
  const [currentAnim, setCurrentAnim] = useState('Idle')

  useEffect(() => {
    // Fade out all animations
    Object.values(actions).forEach(action => {
      action?.fadeOut(0.5)
    })

    // Fade in current animation
    actions[currentAnim]?.reset().fadeIn(0.5).play()
  }, [currentAnim, actions])

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}
```

### Animation Events

```tsx
function AnimatedModel() {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/character.glb')
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    // Listen for animation events
    const onFinished = (e) => {
      console.log('Animation finished:', e.action.getClip().name)
    }

    const onLoop = (e) => {
      console.log('Animation looped:', e.action.getClip().name)
    }

    mixer.addEventListener('finished', onFinished)
    mixer.addEventListener('loop', onLoop)

    return () => {
      mixer.removeEventListener('finished', onFinished)
      mixer.removeEventListener('loop', onLoop)
    }
  }, [mixer])

  return <primitive ref={group} object={scene} />
}
```

### Animation Blending

```tsx
function CharacterController({ speed = 0 }) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/character.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Start all animations
    actions['Idle']?.play()
    actions['Walk']?.play()
    actions['Run']?.play()
  }, [actions])

  // Blend based on speed
  useFrame(() => {
    if (speed < 0.1) {
      actions['Idle']?.setEffectiveWeight(1)
      actions['Walk']?.setEffectiveWeight(0)
      actions['Run']?.setEffectiveWeight(0)
    } else if (speed < 5) {
      const t = speed / 5
      actions['Idle']?.setEffectiveWeight(1 - t)
      actions['Walk']?.setEffectiveWeight(t)
      actions['Run']?.setEffectiveWeight(0)
    } else {
      const t = Math.min((speed - 5) / 5, 1)
      actions['Idle']?.setEffectiveWeight(0)
      actions['Walk']?.setEffectiveWeight(1 - t)
      actions['Run']?.setEffectiveWeight(t)
    }
  })

  return <primitive ref={group} object={scene} />
}
```

## Spring Animation (@react-spring/three)

Physics-based spring animations that integrate with R3F.

### Installation

```bash
npm install @react-spring/three
```

### Basic Spring

```tsx
import { useSpring, animated } from '@react-spring/three'

function AnimatedBox() {
  const [active, setActive] = useState(false)

  const { scale, color } = useSpring({
    scale: active ? 1.5 : 1,
    color: active ? '#ff6b6b' : '#4ecdc4',
    config: { mass: 1, tension: 280, friction: 60 }
  })

  return (
    <animated.mesh
      scale={scale}
      onClick={() => setActive(!active)}
    >
      <boxGeometry />
      <animated.meshStandardMaterial color={color} />
    </animated.mesh>
  )
}
```

### Spring Config Presets

```tsx
import { useSpring, animated, config } from '@react-spring/three'

function SpringPresets() {
  const { position } = useSpring({
    position: [0, 2, 0],
    config: config.wobbly  // Presets: default, gentle, wobbly, stiff, slow, molasses
  })

  // Or custom config
  const { rotation } = useSpring({
    rotation: [0, Math.PI, 0],
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
      clamp: false,
      precision: 0.01,
      velocity: 0,
    }
  })

  return (
    <animated.mesh position={position} rotation={rotation}>
      <boxGeometry />
      <meshStandardMaterial />
    </animated.mesh>
  )
}
```

### Multiple Springs

```tsx
import { useSprings, animated } from '@react-spring/three'

function AnimatedBoxes({ count = 5 }) {
  const [springs, api] = useSprings(count, (i) => ({
    position: [i * 2 - count, 0, 0],
    scale: 1,
    config: { mass: 1, tension: 280, friction: 60 }
  }))

  const handleClick = (index) => {
    api.start((i) => {
      if (i === index) return { scale: 1.5 }
      return { scale: 1 }
    })
  }

  return springs.map((spring, i) => (
    <animated.mesh
      key={i}
      position={spring.position}
      scale={spring.scale}
      onClick={() => handleClick(i)}
    >
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </animated.mesh>
  ))
}
```

### Gesture Integration

```tsx
import { useSpring, animated } from '@react-spring/three'
import { useDrag } from '@use-gesture/react'

function DraggableBox() {
  const [spring, api] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 }
  }))

  const bind = useDrag(({ movement: [mx, my], down }) => {
    api.start({
      position: down ? [mx / 100, -my / 100, 0] : [0, 0, 0]
    })
  })

  return (
    <animated.mesh {...bind()} position={spring.position}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </animated.mesh>
  )
}
```

### Chain Animations

```tsx
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/three'

function ChainedAnimation() {
  const scaleRef = useSpringRef()
  const rotationRef = useSpringRef()

  const { scale } = useSpring({
    ref: scaleRef,
    from: { scale: 0 },
    to: { scale: 1 },
    config: { tension: 200, friction: 20 }
  })

  const { rotation } = useSpring({
    ref: rotationRef,
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, Math.PI * 2, 0] },
    config: { tension: 100, friction: 30 }
  })

  // Scale first (0-0.5), then rotation (0.5-1)
  useChain([scaleRef, rotationRef], [0, 0.5])

  return (
    <animated.mesh scale={scale} rotation={rotation}>
      <boxGeometry />
      <meshStandardMaterial color="cyan" />
    </animated.mesh>
  )
}
```

## Morph Targets

Blend between different mesh shapes.

```tsx
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function MorphingFace() {
  const { scene, nodes } = useGLTF('/models/face.glb')
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Access morph target influences
    if (meshRef.current?.morphTargetInfluences) {
      // Animate smile
      const smileIndex = meshRef.current.morphTargetDictionary['smile']
      meshRef.current.morphTargetInfluences[smileIndex] = (Math.sin(t) + 1) / 2
    }
  })

  return (
    <primitive ref={meshRef} object={nodes.Face} />
  )
}
```

### Controlled Morph Targets

```tsx
function MorphControls({ morphInfluences }) {
  const { nodes } = useGLTF('/models/face.glb')
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current?.morphTargetInfluences) {
      Object.entries(morphInfluences).forEach(([name, value]) => {
        const index = meshRef.current.morphTargetDictionary[name]
        if (index !== undefined) {
          meshRef.current.morphTargetInfluences[index] = value
        }
      })
    }
  })

  return <primitive ref={meshRef} object={nodes.Face} />
}

// Usage
<MorphControls morphInfluences={{ smile: 0.5, blink: 1, angry: 0 }} />
```

## Skeletal Animation

### Accessing Bones

```tsx
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

function SkeletalCharacter() {
  const { scene } = useGLTF('/models/character.glb')
  const headBoneRef = useRef()

  useEffect(() => {
    // Find skeleton
    scene.traverse((child) => {
      if (child.isSkinnedMesh) {
        const skeleton = child.skeleton
        const headBone = skeleton.bones.find(b => b.name === 'Head')
        headBoneRef.current = headBone
      }
    })
  }, [scene])

  // Animate bone
  useFrame(({ clock }) => {
    if (headBoneRef.current) {
      headBoneRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.3
    }
  })

  return <primitive object={scene} />
}
```

### Bone Attachments

```tsx
function CharacterWithWeapon() {
  const { scene } = useGLTF('/models/character.glb')
  const weaponRef = useRef()
  const handBoneRef = useRef()

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isSkinnedMesh) {
        const handBone = child.skeleton.bones.find(b => b.name === 'RightHand')
        if (handBone && weaponRef.current) {
          handBone.add(weaponRef.current)
          handBoneRef.current = handBone
        }
      }
    })

    return () => {
      // Cleanup
      if (handBoneRef.current && weaponRef.current) {
        handBoneRef.current.remove(weaponRef.current)
      }
    }
  }, [scene])

  return (
    <>
      <primitive object={scene} />
      <mesh ref={weaponRef} position={[0, 0, 0.5]}>
        <boxGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>
  )
}
```

## Procedural Animation Patterns

### Smooth Damping

```tsx
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function SmoothFollow({ target }) {
  const meshRef = useRef()
  const currentPos = useRef(new THREE.Vector3())

  useFrame((state, delta) => {
    // Lerp towards target
    currentPos.current.lerp(target, delta * 5)
    meshRef.current.position.copy(currentPos.current)
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}
```

### Spring Physics (Manual)

```tsx
function SpringMesh({ target = 0 }) {
  const meshRef = useRef()
  const spring = useRef({
    position: 0,
    velocity: 0,
    stiffness: 100,
    damping: 10
  })

  useFrame((state, delta) => {
    const s = spring.current
    const force = -s.stiffness * (s.position - target)
    const dampingForce = -s.damping * s.velocity

    s.velocity += (force + dampingForce) * delta
    s.position += s.velocity * delta

    meshRef.current.position.y = s.position
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}
```

### Oscillation Patterns

```tsx
function OscillatingMesh() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime

    // Sine wave
    meshRef.current.position.y = Math.sin(t * 2) * 0.5

    // Circular motion
    meshRef.current.position.x = Math.cos(t) * 2
    meshRef.current.position.z = Math.sin(t) * 2

    // Bouncing
    meshRef.current.position.y = Math.abs(Math.sin(t * 3)) * 2

    // Figure 8
    meshRef.current.position.x = Math.sin(t) * 2
    meshRef.current.position.z = Math.sin(t * 2) * 1
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.3]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  )
}
```

## Drei Animation Helpers

### Float

```tsx
import { Float } from '@react-three/drei'

function FloatingObject() {
  return (
    <Float
      speed={1}            // Animation speed
      rotationIntensity={1} // Rotation intensity
      floatIntensity={1}   // Float intensity
      floatingRange={[-0.1, 0.1]} // Range of y-axis float
    >
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="gold" />
      </mesh>
    </Float>
  )
}
```

### MeshWobbleMaterial / MeshDistortMaterial

```tsx
import { MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei'

function WobblyMesh() {
  return (
    <mesh>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <MeshWobbleMaterial
        factor={1}     // Wobble amplitude
        speed={2}      // Wobble speed
        color="hotpink"
      />
    </mesh>
  )
}

function DistortedMesh() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        distort={0.5}  // Distortion amount
        speed={2}      // Animation speed
        color="cyan"
      />
    </mesh>
  )
}
```

### Trail

```tsx
import { Trail } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function TrailingMesh() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    meshRef.current.position.x = Math.sin(t) * 3
    meshRef.current.position.y = Math.cos(t * 2) * 2
  })

  return (
    <Trail
      width={2}
      length={8}
      color="hotpink"
      attenuation={(t) => t * t}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Trail>
  )
}
```

## Animation with Zustand State

```tsx
import { create } from 'zustand'
import { useFrame } from '@react-three/fiber'

const useStore = create((set) => ({
  isAnimating: false,
  speed: 1,
  toggleAnimation: () => set((state) => ({ isAnimating: !state.isAnimating })),
  setSpeed: (speed) => set({ speed })
}))

function AnimatedMesh() {
  const meshRef = useRef()
  const { isAnimating, speed } = useStore()

  useFrame((state, delta) => {
    if (isAnimating) {
      meshRef.current.rotation.y += delta * speed
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

// UI Component
function Controls() {
  const { toggleAnimation, setSpeed } = useStore()

  return (
    <div>
      <button onClick={toggleAnimation}>Toggle</button>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        onChange={(e) => setSpeed(parseFloat(e.target.value))}
      />
    </div>
  )
}
```

## State Management Performance

Critical patterns for high-performance state management in animations.

### getState() in useFrame

Use `getState()` instead of hooks inside useFrame for zero subscription overhead:

```tsx
import { create } from 'zustand'

const useGameStore = create((set) => ({
  playerPosition: [0, 0, 0],
  targetPosition: [0, 0, 0],
  setPlayerPosition: (pos) => set({ playerPosition: pos }),
}))

function Player() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    // ✅ GOOD: getState() has no subscription overhead
    const { targetPosition } = useGameStore.getState()

    // Lerp towards target
    meshRef.current.position.lerp(
      new THREE.Vector3(...targetPosition),
      delta * 5
    )
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}
```

### Transient Subscriptions

Subscribe to state changes without triggering React re-renders:

```tsx
import { useEffect, useRef } from 'react'

function Enemy() {
  const meshRef = useRef()

  useEffect(() => {
    // Subscribe directly - updates mesh without re-rendering component
    const unsub = useGameStore.subscribe(
      (state) => state.playerPosition,
      (playerPos) => {
        // Look at player (runs on every state change, no re-render)
        meshRef.current.lookAt(...playerPos)
      }
    )
    return unsub
  }, [])

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[0.5, 1, 4]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
```

### Selective Subscriptions with Shallow

Subscribe to multiple values efficiently:

```tsx
import { shallow } from 'zustand/shallow'

function HUD() {
  // Only re-renders when health OR score actually changes
  const { health, score } = useGameStore(
    (state) => ({ health: state.health, score: state.score }),
    shallow
  )

  return (
    <Html>
      <div>Health: {health}</div>
      <div>Score: {score}</div>
    </Html>
  )
}

// For single values, no shallow needed
const health = useGameStore((state) => state.health)
```

### Isolate Animated Components

Separate state-dependent UI from animated 3D objects:

```tsx
// ❌ BAD: Parent re-renders cause animation jank
function BadPattern() {
  const [score, setScore] = useState(0)
  const meshRef = useRef()

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta  // Affected by score re-renders
  })

  return (
    <>
      <mesh ref={meshRef}>...</mesh>
      <ScoreDisplay score={score} />
    </>
  )
}

// ✅ GOOD: Isolated animation component
function GoodPattern() {
  return (
    <>
      <AnimatedMesh />      {/* Never re-renders from score */}
      <ScoreDisplay />      {/* Has its own state subscription */}
    </>
  )
}

function AnimatedMesh() {
  const meshRef = useRef()

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta  // Smooth, uninterrupted
  })

  return <mesh ref={meshRef}>...</mesh>
}

function ScoreDisplay() {
  const score = useGameStore((state) => state.score)
  return <Html><div>Score: {score}</div></Html>
}
```

## Performance Tips

1. **Isolate animated components**: Only the animated mesh re-renders
2. **Use refs over state**: Avoid React re-renders for animations
3. **Throttle expensive calculations**: Use delta accumulation
4. **Pause offscreen animations**: Check visibility
5. **Share animation clips**: Same clip for multiple instances

```tsx
// Isolate animation to prevent parent re-renders
function Scene() {
  return (
    <>
      <StaticMesh />   {/* Never re-renders */}
      <AnimatedMesh /> {/* Only this updates */}
    </>
  )
}

// Throttle expensive operations
function ThrottledAnimation() {
  const meshRef = useRef()
  const accumulated = useRef(0)

  useFrame((state, delta) => {
    accumulated.current += delta

    // Only update every 100ms
    if (accumulated.current > 0.1) {
      // Expensive calculation here
      accumulated.current = 0
    }

    // Cheap operations every frame
    meshRef.current.rotation.y += delta
  })
}
```

## See Also

- `r3f-loaders` - Loading animated GLTF models
- `r3f-fundamentals` - useFrame and animation loop
- `r3f-shaders` - Vertex animation in shaders
