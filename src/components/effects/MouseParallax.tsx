import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface MouseParallaxProps {
  children: ReactNode;
}

export function MouseParallax({ children }: MouseParallaxProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{
        height: '100%',
        transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
      }}
      transition={{ type: 'spring', stiffness: 75, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}