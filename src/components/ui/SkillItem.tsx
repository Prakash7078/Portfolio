import React from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  level: number;
  icon?: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, icon, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          {icon && <img src={icon} alt={name} className="w-6 h-6 mr-2" />}
          <h3 className="font-medium text-gray-800 dark:text-gray-200">{name}</h3>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillItem;