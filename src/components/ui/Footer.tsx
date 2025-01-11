import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Made with love section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-2 text-sm text-foreground/60"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using</span>
            
            {/* React */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#61DAFB]" fill="currentColor">
                <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                <path d="M12 21.35a2.06 2.06 0 0 1-1-.25c-.33-.17-.67-.39-1-.66-.65-.51-1.31-1.13-1.93-1.85a24.06 24.06 0 0 1-3.02-4.08 14.27 14.27 0 0 1-1.3-2.71A8.07 8.07 0 0 1 3.35 9c-.1-.71-.06-1.45.11-2.13.18-.68.48-1.31.9-1.87A4.03 4.03 0 0 1 6.13 3.6c.68-.28 1.43-.4 2.17-.34.74.06 1.45.28 2.1.64.33.18.64.39.93.63.3-.24.61-.45.93-.63a6.03 6.03 0 0 1 2.1-.64 4.95 4.95 0 0 1 2.17.34c.74.3 1.39.78 1.77 1.4.42.56.72 1.19.9 1.87.17.68.21 1.42.11 2.13a8.07 8.07 0 0 1-.4 2.8c-.3.94-.74 1.85-1.3 2.71a24.06 24.06 0 0 1-3.02 4.08 20.92 20.92 0 0 1-1.93 1.85c-.33.27-.67.49-1 .66-.33.17-.66.25-1 .25Z"/>
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/80 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                React
              </span>
            </motion.div>

            {/* Three.js */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2c5.51 0 10 4.49 10 10s-4.49 10-10 10S2 17.51 2 12 6.49 2 12 2zm0 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/80 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Three.js
              </span>
            </motion.div>

            {/* Framer Motion */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FF5E5B]" fill="currentColor">
                <path d="M4 2h16v8h-8v4h4v4h-4v4H4V2zm8 12v-4H4v8h8v-4z"/>
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/80 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Framer Motion
              </span>
            </motion.div>

            {/* Tailwind */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#38BDF8]" fill="currentColor">
                <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/80 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Tailwind CSS
              </span>
            </motion.div>

            {/* TypeScript */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3178C6]" fill="currentColor">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/80 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                TypeScript
              </span>
            </motion.div>
          </motion.div>

          {/* Copyright text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="font-mono text-sm text-foreground/60">
              © {currentYear} Mann Modi. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-foreground/40">
              Crafted with precision and creativity.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}