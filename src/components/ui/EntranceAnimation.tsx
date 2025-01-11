import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface EntranceAnimationProps {
  onEnter: () => void;
}

export function EntranceAnimation({ onEnter }: EntranceAnimationProps) {
  const [show, setShow] = useState(true);

  const handleEnter = () => {
    setShow(false);
    onEnter();
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
      >
        {/* Large background welcome text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ 
            opacity: 0.2, 
            scale: 1,
            x: ['100%', '-100%']
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.3 },
            scale: { duration: 1, delay: 0.3 },
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none whitespace-nowrap"
        >
          <h1 className="font-display font-bold text-[20vw] text-primary/20 tracking-[0.08em] uppercase">
            Welcome <span className="tracking-[0.12em]">to</span> <span className="tracking-[0.1em]">the</span> <span className="tracking-[0.09em]">Future</span>
          </h1>
        </motion.div>

        <div className="relative">
          {/* Animated background element */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -inset-x-12 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative flex flex-col items-center gap-12"
          >
            <motion.h1 
              className="font-display text-4xl bg-clip-text text-transparent relative"
              style={{
                backgroundImage: "linear-gradient(to right, #7042f8, #FF5E5B, #7042f8)",
                backgroundSize: "200% 100%",
                animation: "gradientMove 4s linear infinite"
              }}
            >
              Welcome
            </motion.h1>

            <motion.button
              onClick={handleEnter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 flex items-center gap-2 rounded-full"
            >
              {/* Smooth infinite border animation */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]">
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,theme(colors.primary)_25%,theme(colors.accent)_50%,theme(colors.primary)_75%,transparent_100%)]" />
                  </div>
                </div>
                <div className="absolute inset-[1.5px] bg-background rounded-full" />
              </div>
              
              {/* Content */}
              <span className="relative font-mono text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                Enter
              </span>
              
              <motion.span
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 text-primary" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}