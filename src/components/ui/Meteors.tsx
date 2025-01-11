import { motion } from 'framer-motion';

interface MeteorsProps {
  number?: number;
}

export function Meteors({ number = 20 }: MeteorsProps) {
  const meteors = [...Array(number)].map((_, idx) => ({
    id: idx,
    size: Math.floor(Math.random() * 30) + 10,
    left: Math.floor(Math.random() * 100),
    delay: Math.random() * 2,
    duration: Math.floor(Math.random() * 2) + 3,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden">
      {meteors.map((meteor) => (
        <motion.span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor"
          style={{
            top: '0px',
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          <span
            className="absolute left-1/2 top-1/2 h-[2px] -translate-y-1/2 transform bg-gradient-to-r from-primary to-transparent"
            style={{
              width: `${meteor.size}px`,
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}