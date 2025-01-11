import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scrollbar track */}
      <div className="fixed right-0 top-0 bottom-0 w-1 bg-foreground/5 z-50" />
      
      {/* Scrollbar thumb with beam effect */}
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="fixed right-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary z-50"
      >
        {/* Animated beam effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 blur-sm animate-beam" />
      </motion.div>
    </>
  );
}