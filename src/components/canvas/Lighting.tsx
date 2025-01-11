import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SpotLight } from '@react-three/drei';
import * as THREE from 'three';

export function Lighting() {
  const spotLightRef = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 8;
      spotLightRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * 8;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <SpotLight
        ref={spotLightRef}
        position={[10, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        distance={20}
        color="#64FFDA"
      />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
    </>
  );
}