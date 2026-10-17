import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function Blob() {
  const mesh = useRef<Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.05;
    mesh.current.rotation.y += delta * 0.07;

    pointer.current.x += (state.pointer.x * 0.2 - pointer.current.x) * 0.02;
    pointer.current.y += (state.pointer.y * 0.2 - pointer.current.y) * 0.02;
    mesh.current.rotation.x += pointer.current.y * 0.008;
    mesh.current.rotation.y += pointer.current.x * 0.008;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={mesh} scale={1.5}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#0a3a5c"
          emissive="#1f6fb8"
          emissiveIntensity={0.35}
          roughness={0.35}
          metalness={0.4}
          distort={0.28}
          speed={1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5.4], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 3]} intensity={1.8} color="#8fd0ff" />
      <directionalLight position={[-3, -2, -2]} intensity={0.5} color="#2997ff" />
      <Blob />
    </Canvas>
  );
}
