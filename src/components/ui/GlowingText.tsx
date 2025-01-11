import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingTextProps {
  children: ReactNode;
  className?: string;
}

export function GlowingText({ children, className = '' }: GlowingTextProps) {
  return (
    <motion.span
      className={`relative ${className}`}
      whileHover={{
        textShadow: [
          '0 0 4px #fff',
          '0 0 11px #fff',
          '0 0 19px #fff',
          '0 0 40px #0fa',
          '0 0 80px #0fa',
          '0 0 90px #0fa',
          '0 0 100px #0fa',
          '0 0 150px #0fa',
        ],
      }}
    >
      {children}
    </motion.span>
  );
}