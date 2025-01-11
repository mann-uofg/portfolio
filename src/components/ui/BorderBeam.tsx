import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function BorderBeam({
  size = 250,
  duration = 12,
  delay = 0,
  className = '',
}: BorderBeamProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 360) % 360);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 1, rotate: rotation }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
      className={`absolute inset-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 animate-[beam_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary to-transparent blur-[2px]" />
      </div>
    </motion.div>
  );
}