// src/components/AvatarModel/AvatarModel.tsx
import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, useAnimations } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/models/russian_girl_mid_animated.glb');
  const { actions, names } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }, [actions, names]);

  return <primitive object={gltf.scene} scale={1.5} position={[0, -2.5, 0]} />;
};

const AvatarModel = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 35 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.7}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 3}
        />
        <Stars radius={100} depth={80} count={5000} factor={4} saturation={0} />
      </Canvas>
    </div>
  );
};

export default AvatarModel;