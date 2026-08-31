import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/** Floating 3D shapes replacing static corner images in About section */
function CornerShapes() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03;
    }
  });

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#BBCCD7',
        roughness: 0.25,
        metalness: 0.85,
        transparent: true,
        opacity: 0.7,
      }),
    []
  );

  return (
    <group ref={groupRef}>
      {/* Top-left: replaces moon icon */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[-3.8, 2.5, -1]} material={material}>
          <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>
      </Float>

      {/* Top-right: replaces lego icon */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[3.8, 2.5, -1.5]} material={material}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
        </mesh>
      </Float>

      {/* Bottom-left: replaces sphere asset */}
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1}>
        <mesh position={[-3.2, -2.2, -1]} material={material}>
          <torusKnotGeometry args={[0.35, 0.12, 64, 16]} />
        </mesh>
      </Float>

      {/* Bottom-right: replaces group 134 */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.8}>
        <mesh position={[3.2, -2.2, -2]} material={material}>
          <icosahedronGeometry args={[0.45, 0]} />
        </mesh>
      </Float>
    </group>
  );
}

export const AboutScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1} />
        <directionalLight position={[-3, -4, 2]} intensity={0.3} />
        <CornerShapes />
      </Canvas>
    </div>
  );
};
