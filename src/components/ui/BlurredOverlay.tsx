import { motion, useScroll, useTransform } from 'framer-motion';

export function BlurredOverlay() {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 0.5]
  );
  
  const blur = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['blur(0px)', 'blur(8px)']
  );

  return (
    <motion.div
      style={{ opacity, backdropFilter: blur }}
      className="fixed inset-0 bg-background/50 pointer-events-none z-20"
    />
  );
}