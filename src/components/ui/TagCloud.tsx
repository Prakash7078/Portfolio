import React from 'react';
import { motion } from 'framer-motion';

interface TagCloudProps {
  tags: Array<{
    label: string;
    value: number;
  }>;
}

const TagCloud: React.FC<TagCloudProps> = ({ tags }) => {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center">
      {tags.map((tag, index) => {
        // Calculate random positions
        const angle = Math.random() * Math.PI * 2;
        const radius = 100 + Math.random() * 50;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.random() * 100 - 50;
        
        // Size based on value
        const size = 16 + tag.value * 8;
        
        // Animation duration
        const duration = 20 + Math.random() * 10;
        
        return (
          <motion.div
            key={index}
            initial={{ 
              x, 
              y, 
              z,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              transition: { 
                delay: index * 0.05,
                duration: 0.5,
              }
            }}
            className="absolute cursor-pointer"
            style={{
              fontSize: `${size}px`,
              zIndex: Math.round(z + 50),
              transform: `translate3d(${x}px, ${y}px, ${z}px)`,
            }}
            whileHover={{ 
              scale: 1.2,
              color: '#6366F1',
              transition: { duration: 0.3 }
            }}
          >
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {tag.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TagCloud;