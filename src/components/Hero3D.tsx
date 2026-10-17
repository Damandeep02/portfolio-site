import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type EnergyRef = React.MutableRefObject<number>;

function EnergyDecay({ energyRef }: { energyRef: EnergyRef }) {
  useFrame((_, delta) => {
    energyRef.current = Math.max(0, energyRef.current - delta * 1.4);
  });
  return null;
}

function ParticleField({ energyRef }: { energyRef: EnergyRef }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.PointsMaterial>(null);
  const count = 1400;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4.2 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;
    const e = energyRef.current;
    points.current.rotation.y += delta * (0.035 + e * 0.25);
    points.current.rotation.x += delta * 0.012;
    const t = state.pointer;
    points.current.rotation.y += (t.x * 0.15 - points.current.rotation.y * 0.02) * 0.02;
    const scale = 1 + e * 0.22;
    points.current.scale.setScalar(scale);
    if (material.current) {
      material.current.opacity = 0.55 + e * 0.35;
      material.current.size = 0.028 + e * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={material}
        size={0.028}
        color="#6ee7c8"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

function WireCore({ energyRef }: { energyRef: EnergyRef }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const outerMat = useRef<THREE.MeshBasicMaterial>(null);
  const innerMat = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state, delta) => {
    if (!group.current || !inner.current) return;
    const e = energyRef.current;
    group.current.rotation.y += delta * (0.18 + e * 0.6);
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    inner.current.rotation.y -= delta * (0.32 + e * 0.9);
    inner.current.rotation.z += delta * 0.09;

    const { x, y } = state.pointer;
    group.current.rotation.y += x * 0.0006;
    group.current.rotation.x += -y * 0.0006;

    const scale = 1 + e * 0.3;
    group.current.scale.setScalar(scale);
    if (outerMat.current) outerMat.current.opacity = 0.35 + e * 0.35;
    if (innerMat.current) innerMat.current.opacity = 0.55 + e * 0.35;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshBasicMaterial ref={outerMat} color="#e8fff6" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial ref={innerMat} color="#6ee7c8" wireframe transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x += (state.pointer.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (state.pointer.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero3D() {
  const energy = useRef(0);

  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, cursor: "pointer" }}
      onClick={() => {
        energy.current = 1;
      }}
    >
      <ParticleField energyRef={energy} />
      <WireCore energyRef={energy} />
      <EnergyDecay energyRef={energy} />
      <Rig />
    </Canvas>
  );
}
