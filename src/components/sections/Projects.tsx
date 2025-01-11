import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Stock Price Prediction Model',
    description: 'A machine learning based project for predicting stock prices using historical data, technical indicators, and visualization tools.',
    image: 'https://plus.unsplash.com/premium_photo-1663931932687-c4c2366a5c61?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Python', 'TensorFlow', 'Beautiful Soup', 'Machine Learning'],
    link: 'https://github.com/mann-uofg/stock-price-prediction'
  },
  {
    title: 'Creative Portfolio Showcase',
    description: 'A responsive and visually appealing personal portfolio website showcasing projects, skills, and achievements.',
    image: 'https://plus.unsplash.com/premium_photo-1685726497739-c675f63a5725?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'EmailJS'],
    link: 'https://github.com/mann-uofg/portfolio'
  },
  {
    title: 'Unveiling Soon',
    description: 'To be Updated.',
    image: 'https://plus.unsplash.com/premium_photo-1731622288533-fd0addd267bd?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['1', '2', '3'],
    link: '#'
  }
];

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg overflow-hidden border border-primary/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-xs sm:text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm sm:text-base"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}