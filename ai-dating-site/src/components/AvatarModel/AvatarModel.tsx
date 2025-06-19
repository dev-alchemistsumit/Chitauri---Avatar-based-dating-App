// src/components/AvatarModel/AvatarModel.tsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/russian_girl_west_animated.glb");
  return <primitive object={scene} scale={2.5} position={[0, -2.5, 0]} />;
};

const AvatarModel = () => {
  return (
    <div className="w-full h-[450px]">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
        <Stars radius={50} depth={40} count={4000} factor={4} fade />
      </Canvas>
    </div>
  );
};

export default AvatarModel;
