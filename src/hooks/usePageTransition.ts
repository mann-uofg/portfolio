import { useState, useEffect } from 'react';

export function usePageTransition() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link?.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        setIsLoading(true);
        
        const href = link.getAttribute('href') as string;
        const section = document.querySelector(href);
        
        setTimeout(() => {
          section?.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => setIsLoading(false), 500);
        }, 800);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return { isLoading };
}