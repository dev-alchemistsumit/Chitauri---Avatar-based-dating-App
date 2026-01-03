// src/components/AvatarModel/AvatarModel.tsx
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/models/Avatar_Ichika.glb");
  const { actions, names } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
  }, [actions, names]);

  return <primitive object={gltf.scene} scale={1.3} position={[0, -1.2, 0]} />;
};

//Venelope
const Avatar_Venelope = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.6, 5], fov: 40 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          target={[0, 0.8, 0]}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 3}
        />
        <Stars radius={100} depth={80} count={5000} factor={4} saturation={0} />
      </Canvas>
    </div>
  );
};

export default Avatar_Venelope;