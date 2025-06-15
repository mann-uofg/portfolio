import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[99999]"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "tween", 
        duration: 0.01, // Very short duration
        ease: "linear"
      }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isPointer ? 1.2 : 1,
        }}
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
            fill="white"
            stroke="black"
            strokeWidth="2"
            initial={{ pathLength: 0, fill: 'rgba(255, 255, 255, 0)' }}
            animate={{ 
              pathLength: 1,
              fill: 'rgba(255, 255, 255, 1)',
              scale: isPointer ? 1.1 : 1
            }}
            transition={{ 
              pathLength: { duration: 0.5, ease: "easeOut" },
              fill: { delay: 0.5, duration: 0.3 },
              scale: { duration: 0.2 }
            }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}