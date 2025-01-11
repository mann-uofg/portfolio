import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface ParallaxConfig {
  target: RefObject<HTMLElement>;
  offset?: [number, number];
  speed?: number;
}

export function useParallax({ target, offset = [-100, 100], speed = 1 }: ParallaxConfig) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], offset);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1 + speed * 0.1, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return { y, scale, opacity };
}