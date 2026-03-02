"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AerospaceObject() {
  const meshRef = useRef<THREE.Group>(null);

  // Create a wireframe icosahedron — abstract, aerospace-inspired
  const geometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(1.6, 1);
  }, []);

  const edgesGeometry = useMemo(() => {
    return new THREE.EdgesGeometry(geometry);
  }, [geometry]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Very slow rotation
    meshRef.current.rotation.x = t * 0.06;
    meshRef.current.rotation.y = t * 0.09;

    // Gentle float
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.08;
  });

  return (
    <group ref={meshRef}>
      {/* Wireframe edges */}
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color="#60a5fa" transparent opacity={0.3} />
      </lineSegments>

      {/* Very faint fill for depth */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.02}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
