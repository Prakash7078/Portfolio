import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Award, Briefcase } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  offer: string,
  certi: string,
  type: 'education' | 'experience';
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  description,
  offer,
  certi,
  type,
  index
}) => {
  const isEven = index % 2 === 0;
  const Icon = type === 'education' ? Award : Briefcase;

  return (
    <div className={`flex md:contents ${isEven ? 'flex-row-reverse' : ''}`}>
      <div className={`col-start-1 col-end-2 mr-10 md:mx-auto relative ${isEven ? 'md:ml-8' : 'md:mr-10'}`}>
        <div className="h-full w-8 flex items-center justify-center">
          <div className="h-full w-1 bg-primary-200 dark:bg-primary-800 pointer-events-none"></div>
        </div>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 * index }}
          className="w-10 h-10 absolute top-1/2 -mt-5 rounded-full bg-primary-500 shadow flex items-center justify-center"
        >
          <Icon size={20} className="text-white" />
        </motion.div>
      </div>
      <motion.div 
        initial={{ 
          opacity: 0, 
          x: isEven ? 50 : -50
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0 
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: 0.2 * index,
          type: "spring", 
          stiffness: 100 
        }}
        className={`col-start-2 col-end-12 p-6 rounded-lg my-4 mr-auto md:w-5/12 ${
          isEven ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
        } relative bg-white dark:bg-dark-200 shadow-md hover:shadow-lg transition-shadow`}
      >
        <div className="flex flex-col  mb-3">
          <h3 className="font-bold text-primary-600 dark:text-primary-400 text-xl">{title}</h3>
          <div className="flex items-center  justify-end text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
            <CalendarDays size={16} className="mr-1" />
            {date}
          </div>
        </div>
        <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-2">{subtitle}</h4>
        <p className="text-gray-600 dark:text-gray-400 leading-tight">{description}</p>
        <div
          className='flex justify-between items-center mt-5 ml-2 underline'>
            <a href={offer} target='_blank'>Offer</a>
            <a href={certi} target='_blank'>complete</a>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;