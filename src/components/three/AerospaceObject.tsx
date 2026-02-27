"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AerospaceObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Create custom geometry - an abstract aerospace-inspired icosahedron with displaced vertices
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.8, 3);
    const positions = geo.attributes.position;

    // Displace vertices for an organic, abstract aerospace shape
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);

      const noise =
        Math.sin(x * 2.5) * Math.cos(y * 2.5) * 0.15 +
        Math.sin(y * 3 + z * 2) * 0.1;

      positions.setXYZ(
        i,
        x + x * noise,
        y + y * noise * 0.8,
        z + z * noise
      );
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();

    // Slow rotation
    meshRef.current.rotation.x = t * 0.08;
    meshRef.current.rotation.y = t * 0.12;

    // Subtle mouse influence
    const targetX = mouseRef.current.y * 0.3;
    const targetY = mouseRef.current.x * 0.3;
    meshRef.current.rotation.x +=
      (targetX - meshRef.current.rotation.x) * 0.01;
    meshRef.current.rotation.y +=
      (targetY - meshRef.current.rotation.y) * 0.01;

    // Gentle floating
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;
  });

  // Track mouse globally
  if (typeof window !== "undefined") {
    const handler = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    if (typeof window !== "undefined" && !meshRef.current) {
      window.addEventListener("mousemove", handler);
    }
  }

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color="#1a1a2e"
        emissive="#4f8fff"
        emissiveIntensity={0.15}
        roughness={0.6}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}
