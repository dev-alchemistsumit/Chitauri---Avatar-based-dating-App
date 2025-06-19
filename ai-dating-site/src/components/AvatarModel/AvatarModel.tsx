// src/components/AvatarModel.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const AvatarModel = () => {
  return (
    <Canvas className="w-full h-64">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <mesh rotation={[0.5, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#b300ff" />
      </mesh>
      <OrbitControls enableZoom={false} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />
    </Canvas>
  );
};

export default AvatarModel;