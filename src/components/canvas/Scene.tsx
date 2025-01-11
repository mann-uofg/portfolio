import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Experience } from './Experience';

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      className="w-full h-full"
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      dpr={[1, 2]}
    >
      <Experience />
      <Preload all />
    </Canvas>
  );
}