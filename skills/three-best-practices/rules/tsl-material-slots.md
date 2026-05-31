# TSL Material Node Slots

Complete reference for all material node slots available in TSL.

## Core Slots

| Slot | Description | Type |
|------|-------------|------|
| `.fragmentNode` | Replace fragment shader logic | `vec4` |
| `.vertexNode` | Replace vertex shader logic | `vec4` |
| `.geometryNode` | Execute geometry operations | `Fn()` |

## Basic Slots

| Slot | Description | Reference | Type |
|------|-------------|-----------|------|
| `.colorNode` | Base color x map | `materialColor` | `vec4` |
| `.depthNode` | Depth output | `depth` | `float` |
| `.opacityNode` | Opacity x alphaMap | `materialOpacity` | `float` |
| `.alphaTestNode` | Alpha threshold | `materialAlphaTest` | `float` |
| `.positionNode` | Vertex position + displacement | `positionLocal` | `vec3` |

## Lighting Slots

| Slot | Type |
|------|------|
| `.emissiveNode` | `color` |
| `.normalNode` | `vec3` |
| `.lightsNode` | Lighting model |
| `.envNode` | `color` |

## Shadow Slots

| Slot | Description | Type |
|------|-------------|------|
| `.castShadowNode` | Shadow color/opacity | `vec4` |
| `.maskShadowNode` | Shadow mask | `bool` |
| `.receivedShadowNode` | Shadow reception | `Fn()` |
| `.receivedShadowPositionNode` | Shadow projection position | `vec3` |
| `.aoNode` | Ambient occlusion | `float` |

## Output Slots

| Slot | Description | Type |
|------|-------------|------|
| `.maskNode` | Fragment mask | `bool` |
| `.mrtNode` | Custom MRT config | `mrt()` |
| `.outputNode` | Final output | `vec4` |

## MeshPhysicalNodeMaterial Specific

| Slot | Type |
|------|------|
| `.clearcoatNode` | `float` |
| `.clearcoatRoughnessNode` | `float` |
| `.clearcoatNormalNode` | `vec3` |
| `.sheenNode` | `color` |
| `.iridescenceNode` | `float` |
| `.iridescenceIORNode` | `float` |
| `.iridescenceThicknessNode` | `float` |
| `.specularIntensityNode` | `float` |
| `.specularColorNode` | `color` |
| `.iorNode` | `float` |
| `.transmissionNode` | `color` |
| `.thicknessNode` | `float` |
| `.attenuationDistanceNode` | `float` |
| `.attenuationColorNode` | `color` |
| `.dispersionNode` | `float` |
| `.anisotropyNode` | `vec2` |

## Usage Examples

### Color with Time Animation

```javascript
import { color, time, sin } from 'three/tsl';

const material = new MeshStandardNodeMaterial();
material.colorNode = color(0xff0000).mul(sin(time).mul(0.5).add(0.5));
```

### Custom Normal Mapping

```javascript
import { normalMap, texture, normalLocal } from 'three/tsl';

material.normalNode = normalMap(texture(normalTexture));
```

### Vertex Displacement

```javascript
import { positionLocal, normalLocal, sin, time } from 'three/tsl';

material.positionNode = positionLocal.add(
  normalLocal.mul(sin(time.add(positionLocal.y)).mul(0.1))
);
```

### Alpha Cutout

```javascript
import { texture, float } from 'three/tsl';

material.opacityNode = texture(alphaMap).r;
material.alphaTestNode = float(0.5);
```

### PBR Properties

```javascript
import { float, color } from 'three/tsl';

const material = new MeshPhysicalNodeMaterial();
material.clearcoatNode = float(1.0);
material.clearcoatRoughnessNode = float(0.1);
material.transmissionNode = float(0.9);
material.iorNode = float(1.5);
material.thicknessNode = float(0.5);
```
