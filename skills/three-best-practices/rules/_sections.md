# Rule Sections

## Priority 0: Modern Setup & Imports (FUNDAMENTAL)
- setup-use-import-maps
- setup-choose-renderer
- setup-animation-loop
- setup-basic-scene-template

## Priority 1: Memory Management & Dispose (CRITICAL)
- memory-dispose-geometry
- memory-dispose-material
- memory-dispose-textures
- memory-dispose-render-targets
- memory-dispose-recursive
- memory-dispose-on-unmount
- memory-renderer-dispose
- memory-reuse-objects

## Priority 2: Render Loop Optimization (CRITICAL)
- render-single-raf
- render-conditional
- render-delta-time
- render-avoid-allocations
- render-cache-computations
- render-frustum-culling
- render-update-matrix-manual
- render-pixel-ratio
- render-antialias-wisely

## Priority 3: Draw Call Optimization (CRITICAL)
- draw-call-optimization
- geometry-instanced-mesh
- geometry-batched-mesh
- geometry-merge-static

## Priority 4: Geometry & Buffer Management (HIGH)
- geometry-buffer-geometry
- geometry-merge-static
- geometry-instanced-mesh
- geometry-lod
- geometry-index-buffer
- geometry-vertex-count
- geometry-attributes-typed
- geometry-interleaved

## Priority 5: Material & Texture Optimization (HIGH)
- material-reuse
- material-simplest-sufficient
- material-texture-size-power-of-two
- material-texture-compression
- material-texture-mipmaps
- material-texture-anisotropy
- material-texture-atlas
- material-avoid-transparency
- material-onbeforecompile

## Priority 6: Asset Compression (HIGH)
- asset-compression
- asset-draco
- asset-ktx2
- asset-meshopt
- asset-lod

## Priority 7: Lighting & Shadows (MEDIUM-HIGH)
- lighting-limit-lights
- lighting-shadows-advanced
- lighting-bake-static
- lighting-shadow-camera-tight
- lighting-shadow-map-size
- lighting-shadow-selective
- lighting-shadow-cascade
- lighting-shadow-auto-update
- lighting-probe
- lighting-environment
- lighting-fake-shadows

## Priority 8: Scene Graph Organization (MEDIUM)
- scene-group-objects
- scene-layers
- scene-visible-toggle
- scene-flatten-static
- scene-name-objects
- object-pooling

## Priority 9: Shader Best Practices GLSL (MEDIUM)
- shader-precision
- shader-mobile
- shader-avoid-branching
- shader-precompute-cpu
- shader-avoid-discard
- shader-texture-lod
- shader-uniform-arrays
- shader-varying-interpolation
- shader-pack-data
- shader-chunk-injection

## Priority 10: TSL - Three.js Shading Language (MEDIUM)
- tsl-why-use
- tsl-setup-webgpu
- tsl-complete-reference
- tsl-material-slots
- tsl-node-materials
- tsl-basic-operations
- tsl-material-nodes
- tsl-functions
- tsl-conditionals
- tsl-textures
- tsl-noise
- tsl-post-processing
- tsl-compute-shaders
- tsl-glsl-to-tsl

## Priority 11: WebGPU Renderer (MEDIUM)
- webgpu-renderer
- webgpu-render-async
- webgpu-feature-detection
- webgpu-instanced-array
- webgpu-storage-textures
- webgpu-workgroup-memory
- webgpu-indirect-draws

## Priority 12: Loading & Assets (MEDIUM)
- loading-draco-compression
- loading-gltf-preferred
- gltf-loading-optimization
- loading-progress-feedback
- loading-async-await
- loading-lazy
- loading-cache-assets
- loading-dispose-unused

## Priority 13: Core Web Vitals (MEDIUM-HIGH)
- core-web-vitals
- vitals-lazy-load
- vitals-code-split
- vitals-preload
- vitals-progressive-loading
- vitals-placeholders
- vitals-web-workers
- vitals-streaming

## Priority 14: Camera & Controls (LOW-MEDIUM)
- camera-near-far
- camera-fov
- camera-controls-damping
- camera-resize-handler
- camera-orbit-limits

## Priority 15: Animation System (MEDIUM)
- animation-system

## Priority 16: Physics Integration (MEDIUM)
- physics-integration
- physics-compute-shaders

## Priority 17: WebXR / VR / AR (MEDIUM)
- webxr-setup

## Priority 18: Audio (LOW-MEDIUM)
- audio-spatial

## Priority 19: Post-Processing (MEDIUM)
- postprocessing-optimization
- postpro-renderer-config
- postpro-merge-effects
- postpro-selective-bloom
- postpro-resolution-scaling
- postpro-webgpu-native

## Priority 20: Mobile Optimization (HIGH)
- mobile-optimization
- raycasting-optimization

## Priority 21: Production (HIGH)
- error-handling-recovery
- migration-checklist

## Priority 22: Debug & DevTools (LOW)
- debug-devtools
- debug-stats-gl
- debug-lil-gui
- debug-spector
- debug-renderer-info
- debug-three-mesh-bvh
- debug-context-lost
- debug-animation-loop-profiling
- debug-conditional
