import { Suspense } from 'react';
import { Scene } from './components/canvas/Scene';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Navbar } from './components/layout/Navbar';
import { Meteors } from './components/ui/Meteors';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { PageTransition } from './components/ui/PageTransition';
import { EntranceAnimation } from './components/ui/EntranceAnimation';
import { Footer } from './components/ui/Footer';
import { usePageTransition } from './hooks/usePageTransition';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { SectionWrapper } from './components/sections/SectionWrapper';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const { isLoading } = usePageTransition();
  const [hasEntered, setHasEntered] = useState(false);
  useSmoothScroll();

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden relative [&_*]:cursor-none">
      <CustomCursor />
      {hasEntered && <ScrollProgress />}
      <PageTransition isLoading={isLoading} />
      <EntranceAnimation onEnter={() => setHasEntered(true)} />
      <Suspense fallback={<LoadingScreen />}>
        {hasEntered && (
          <>
            <Navbar />
            <main>
              <SectionWrapper 
                id="home" 
                gradient="linear-gradient(45deg, #7042f88b, #ff5e5b)"
              >
                <div className="relative z-10">
                  <Hero />
                </div>
                <div className="absolute inset-0 z-0">
                  <Scene />
                </div>
              </SectionWrapper>
              
              <SectionWrapper 
                id="about" 
                gradient="linear-gradient(45deg, #ff5e5b, #2e1065)"
              >
                <About />
              </SectionWrapper>
              
              <SectionWrapper 
                id="projects" 
                gradient="linear-gradient(45deg, #7042f88b, #ff5e5b)"
              >
                <Projects />
              </SectionWrapper>
              
              <SectionWrapper 
                id="contact" 
                gradient="linear-gradient(45deg, #ff5e5b, #2e1065)"
              >
                <Contact />
              </SectionWrapper>
            </main>
            
            <Footer />
            
            <div className="fixed inset-0 pointer-events-none">
              <Meteors number={20} />
            </div>
          </>
        )}
      </Suspense>
      <Analytics />
    </div>
  );
}