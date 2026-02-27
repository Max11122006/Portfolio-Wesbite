"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AerospaceObject from "./AerospaceObject";

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <AerospaceObject />
        </Suspense>
      </Canvas>
    </div>
  );
}
