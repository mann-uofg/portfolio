import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { designQuotes } from '../../data/designQuotes';

interface PageTransitionProps {
  isLoading: boolean;
}

export function PageTransition({ isLoading }: PageTransitionProps) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (isLoading) {
      const randomIndex = Math.floor(Math.random() * designQuotes.length);
      setQuote(designQuotes[randomIndex]);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] backdrop-blur-sm bg-background/80 flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative w-24 h-24">
          {/* Rotating ellipses */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-none stroke-primary/60"
                style={{
                  strokeWidth: '2',
                  transform: `rotate(${60 * i}deg)`,
                }}
              >
                <motion.ellipse
                  cx="50"
                  cy="50"
                  rx="30"
                  ry="15"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.div>
          ))}
          
          {/* Pulsing center */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-primary rounded-full blur-[2px]" />
          </motion.div>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md text-center font-display text-lg text-foreground/80"
        >
          "{quote}"
        </motion.p>
      </div>
    </motion.div>
  );
}