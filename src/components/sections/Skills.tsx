import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';

type SkillCategory = 'frontend' | 'backend' | 'other' | 'Languages';

interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

const skillsData: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Angular', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'CSS/Sass/Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'Ionic', level: 65, category: 'frontend' },
  { name: 'C', level: 98, category: 'Languages' },
  { name: 'Python', level: 98, category: 'Languages' },
  { name: 'Java', level: 98, category: 'Languages' },
  { name: 'Docker', level: 70, category: 'other' },
  { name: 'Git', level: 90, category: 'other' },
  { name: 'AWS', level: 65, category: 'other' },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  
  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);
  
  return (
    <AnimatedSection id="skills" className="bg-gray-50 dark:bg-dark-100">
      <SectionTitle
        title="My Skills"
        subtitle="Technologies I work with"
      />
      
      {/* Category Filter */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex p-1 bg-white dark:bg-dark-200 rounded-2xl shadow-lg">
          {['all', 'Languages','frontend', 'backend', 'other'].map((category) => (
            <button
              key={category}
              className={`px-3 sm:px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
              onClick={() => setActiveCategory(category as SkillCategory | 'all')}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <span className="text-primary-500 dark:text-primary-400 font-bold">
                {skill.level}%
              </span>
            </div>
            <div className="relative h-2 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
              />
            </div>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;