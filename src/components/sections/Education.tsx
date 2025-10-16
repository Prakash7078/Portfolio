import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../ui/TimelineItem';

const educationData = [
  {
    id: 2,
    title: 'Master of Computer Science',
    subtitle: 'Wichita State University',
    date: '2024 - 2026',
    description: 'Specialized in Artificial Intelligence, Data Analysis, Web & Mobile Technologies.',
  },
  {
    id: 3,
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'Vasireddy Venkatadri International Technological University',
    date: '2020 - 2024',
    description: 'Focused on Software Engineering and Database Systems. Participated in multiple hackathons and coding competitions.',
  },
  
 
];

const Education: React.FC = () => {
  return (
    <AnimatedSection id="education" className="bg-white dark:bg-dark-100">
      <SectionTitle
        title="My Education"
        subtitle="Academic background and qualifications"
      />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {educationData.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              description={item.description}
              type="education"
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;
