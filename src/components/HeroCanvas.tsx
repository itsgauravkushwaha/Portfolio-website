import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

/** Subtle mouse-reactive floating shapes behind the hero */
function FloatingAccents() {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Track normalized mouse for gentle parallax
  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    // Gentle drift toward mouse position
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      mouse.current.x * viewport.width * 0.08,
      delta * 0.8
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      mouse.current.y * viewport.height * 0.06,
      delta * 0.8
    );
  });

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#BBCCD7',
        roughness: 0.3,
        metalness: 0.8,
        transparent: true,
        opacity: 0.15,
      }),
    []
  );

  return (
    <group ref={groupRef}>
      {/* Scattered subtle shapes */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[-3.5, 1.8, -2]} material={material}>
          <torusGeometry args={[0.4, 0.15, 16, 32]} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <mesh position={[4, -1.5, -3]} material={material}>
          <icosahedronGeometry args={[0.35, 0]} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[3, 2.2, -4]} material={material}>
          <octahedronGeometry args={[0.3, 0]} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh position={[-4.5, -2, -3.5]} material={material}>
          <dodecahedronGeometry args={[0.25, 0]} />
        </mesh>
      </Float>
    </group>
  );
}

export const HeroCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />

        {/* Star field */}
        <Stars
          radius={50}
          depth={60}
          count={1500}
          factor={3}
          saturation={0}
          fade
          speed={0.8}
        />

        <FloatingAccents />
      </Canvas>
    </div>
  );
};
