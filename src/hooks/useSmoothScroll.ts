import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach((section) => {
      const content = section.querySelector('.section-content');
      const background = section.querySelector('.section-bg');
      
      if (content && background) {
        gsap.set(content, {
          opacity: 0,
          y: 50
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 1,
          }
        });

        // Subtle parallax effect for background
        tl.to(background, {
          y: '-10%',
          scale: 1.05,
          duration: 1,
          ease: 'none'
        }, 0);

        // Clean fade in for content
        tl.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, 0);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
}