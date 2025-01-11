import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Box, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingModel() {
  const group = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = elapsedTime * 0.2;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = elapsedTime * 0.5;
      torusRef.current.position.y = Math.sin(elapsedTime) * 0.2;
    }

    if (boxRef.current) {
      boxRef.current.rotation.x = elapsedTime * 0.4;
      boxRef.current.position.y = Math.cos(elapsedTime) * 0.3;
    }

    if (icoRef.current) {
      icoRef.current.rotation.z = elapsedTime * 0.3;
      icoRef.current.position.y = Math.sin(elapsedTime + 2) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Torus ref={torusRef} args={[1, 0.2, 16, 32]} position={[-2, 0, 0]}>
        <meshPhongMaterial color="#00ff88" wireframe />
      </Torus>
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff0088" metalness={0.8} roughness={0.2} />
      </Box>
      <Icosahedron ref={icoRef} args={[0.7]} position={[2, 0, 0]}>
        <meshPhongMaterial color="#0088ff" wireframe />
      </Icosahedron>
    </group>
  );
}