"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import AerospaceObject from "./AerospaceObject";

function Fallback() {
  return null;
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<Fallback />}>
          {/* Ambient light */}
          <ambientLight intensity={0.2} />

          {/* Key light - cool blue */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.6}
            color="#4f8fff"
          />

          {/* Fill light - violet */}
          <directionalLight
            position={[-5, -3, 3]}
            intensity={0.3}
            color="#8b5cf6"
          />

          {/* Rim light */}
          <pointLight
            position={[0, 5, -5]}
            intensity={0.4}
            color="#ffffff"
          />

          <AerospaceObject />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
