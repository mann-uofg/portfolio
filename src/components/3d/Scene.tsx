import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FloatingModel } from './FloatingModel';
import { MouseParallax } from '../effects/MouseParallax';

export default function Scene() {
  return (
    <MouseParallax>
      <Canvas className="h-full" camera={{ position: [0, 0, 6], fov: 75 }}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <FloatingModel />
      </Canvas>
    </MouseParallax>
  );
}