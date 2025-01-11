import { motion } from 'framer-motion';
import { Github, LinkedinIcon, Mail, ChevronUp } from 'lucide-react';
import { Meteors } from '../ui/Meteors';
import { BorderBeam } from '../ui/BorderBeam';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden px-4 py-20 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gradient-1 to-gradient-2" />
      <Meteors number={20} />
      
      <div className="container relative z-10 flex-1 flex items-center justify-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 text-center"
          >
            <div className="relative inline-block">
              {/* Background blurred text */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-4 opacity-20 blur-2xl select-none whitespace-nowrap">
                Creative
                <span className="block">Developer<span className="inline-block w-[0.15em] h-[0.15em] rounded-full bg-accent align-[0.00em] ml-[0.05em]" /></span>
              </h1>
              
              {/* Foreground text with gradient */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-4 absolute inset-0 whitespace-nowrap">
                <span 
                  className="bg-clip-text text-transparent relative inline-block"
                  style={{
                    backgroundImage: "linear-gradient(to right, #7042f8, #FF5E5B, #7042f8)",
                    backgroundSize: "200% 100%",
                    animation: "gradientMove 4s linear infinite"
                  }}
                >
                  Creative
                </span>
                <span 
                  className="block bg-clip-text text-transparent relative"
                  style={{
                    backgroundImage: "linear-gradient(to right, #ff5e5b, #7042f8, #ff5e5b)",
                    backgroundSize: "200% 100%",
                    animation: "gradientMove 4s linear infinite",
                    animationDelay: "0.2s"
                  }}
                >
                  Developer.<span className="inline-block w-[0.15em] h-[0.15em] rounded-full bg-clip-text align-[0.00em] ml-[0.05em]"></span>
                </span>
              </h1>
            </div>
            
            <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mt-6">
              Building digital experiences that merge art and technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/mann-uofg' },
              { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/mann-uofg' },
              { icon: Mail, label: 'Contact', href: 'mailto:modim@uoguelph.ca' }
            ].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                className="group relative px-4 py-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/20 hover:border-primary/50 transition-colors overflow-hidden"
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="font-mono text-xs sm:text-sm text-foreground/80 group-hover:text-foreground">
                  {item.label}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <BorderBeam size={150} duration={8} delay={0} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Guide */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.2,
          duration: 0.8
        }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2"
        >
          <ChevronUp className="w-6 h-6 text-primary animate-pulse" />
          <span className="font-mono text-xs text-foreground/60">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}