import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    category: string;
  };
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-navy-light p-6 rounded-lg border border-teal/20"
    >
      <span className="text-sm font-mono text-gold">{skill.category}</span>
      <h3 className="text-xl font-display mt-2 mb-4">{skill.name}</h3>
      <div className="h-2 bg-navy-dark rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-teal rounded-full"
        />
      </div>
    </motion.div>
  );
}