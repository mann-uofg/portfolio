import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useParallax } from '../../hooks/useParallax';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { y, opacity } = useParallax({ target: ref, offset: [-200, 200] });

  return (
    <section ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          style={{ y, opacity }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            About Me
          </h2>
          <div className="font-sans text-lg space-y-6 text-foreground/80">
            <p>
              Hey there, My name is Mann Modi, I am an International Student from India, currently enrolled in                  Computer Engineering at the University of Guelph. I am passionate about minimal yet aesthetic user                experience.
            </p>
            <p>
              I'm an aspiring creative developer passionate about building immersive digital experiences 
              that combine technical excellence with artistic vision.
            </p>
            <p>
              visioning and implementing 3D web technologies and modern frameworks, I try to create 
              engaging interfaces that push the boundaries of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}