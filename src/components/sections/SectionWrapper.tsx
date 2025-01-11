import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  gradient: string;
}

export function SectionWrapper({ children, id, className = '', gradient }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Gradient background with subtle animation */}
      <div className="section-bg absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0"
          style={{ 
            background: gradient,
            opacity: 0.6
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[50px]" />
      </div>

      {/* Content wrapper with clean animations */}
      <div className="section-content relative z-10 h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full"
        >
          {children}
        </motion.div>
      </div>

      {/* Subtle decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}