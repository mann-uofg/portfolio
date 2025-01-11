import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';
import { Group } from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';

export function FloatingShapes() {
  const groupRef = useRef<Group>(null);
  const mousePosition = useMousePosition();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mousePosition.y * 0.1;
      groupRef.current.rotation.y = mousePosition.x * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[1, 32, 32]} position={[-4, 2, 0]}>
        <meshStandardMaterial color="#64FFDA" wireframe />
      </Sphere>
      <Torus args={[1.5, 0.5, 16, 32]} position={[4, -2, 0]}>
        <meshStandardMaterial color="#FFB649" wireframe />
      </Torus>
      <Box args={[1, 1, 1]} position={[0, 0, -2]}>
        <meshStandardMaterial color="#F8F5F2" wireframe />
      </Box>
    </group>
  );
}