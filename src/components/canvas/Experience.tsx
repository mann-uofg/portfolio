import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { FloatingShapes } from './FloatingShapes';
import { ParticleField } from './ParticleField';
import { Lighting } from './Lighting';

export function Experience() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Lighting />
      <FloatingShapes />
      <ParticleField />
    </group>
  );
}