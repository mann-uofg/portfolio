import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.label.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav') && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        {/* Desktop Menu */}
        <div className="hidden md:block rounded-full border border-white/10 py-2.5 px-7 bg-background/10 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <motion.span
              className="text-sm font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.span>
            
            <ul className="flex gap-5 relative">
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  item={item}
                  isActive={activeSection === item.label.toLowerCase()}
                  isHovered={hoveredItem === item.label}
                  onHover={setHoveredItem}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Dynamic Island */}
        <div className="md:hidden">
          <motion.div
            layout
            style={{ 
              borderRadius: isMenuOpen ? '1rem' : '9999px',
            }}
            transition={{ 
              layout: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            className="relative border border-white/10 bg-background/10 backdrop-blur-lg overflow-hidden"
          >
            {/* Header */}
            <motion.div
              layout="position"
              className="flex items-center justify-between p-3"
            >
              <motion.span
                layout="position"
                className="text-sm font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isMenuOpen ? 'menu' : activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isMenuOpen ? 'Menu' : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isMenuOpen ? (
                      <X className="w-4 h-4 text-foreground" />
                    ) : (
                      <Menu className="w-4 h-4 text-foreground" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </motion.div>

            {/* Menu Items */}
            <AnimatePresence mode="wait">
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.3, ease: "easeOut" }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.2, ease: "easeIn" }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.05 }
                      },
                      closed: {
                        transition: { staggerChildren: 0.05, staggerDirection: -1 }
                      }
                    }}
                    className="px-2 pb-2 space-y-1"
                  >
                    {navItems.map((item) => (
                      <motion.div
                        key={item.label}
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                          },
                          closed: {
                            y: 20,
                            opacity: 0,
                            transition: { duration: 0.3, ease: [0.4, 0, 1, 1] }
                          }
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-2 px-4 rounded-lg font-mono text-sm transition-colors ${
                            activeSection === item.label.toLowerCase()
                              ? 'bg-primary/20 text-foreground'
                              : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}

function NavItem({ item, isActive, isHovered, onHover }: {
  item: { label: string; href: string };
  isActive: boolean;
  isHovered: boolean;
  onHover: (label: string | null) => void;
}) {
  return (
    <motion.li 
      onHoverStart={() => onHover(item.label)}
      onHoverEnd={() => onHover(null)}
      className="relative"
    >
      {(isActive || isHovered) && (
        <motion.div
          layoutId="navPill"
          className="absolute inset-0 -mx-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      )}
      <a
        href={item.href}
        className={`relative px-2.5 py-1.5 font-mono text-sm transition-colors ${
          isActive
            ? 'text-foreground'
            : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        {item.label}
      </a>
    </motion.li>
  );
}