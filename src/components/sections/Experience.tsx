import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../ui/TimelineItem';

const experienceData = [
   {
    id:1,
    title:"Software Engineer",
    subtitle:"T3-Wichita State Univeristy",
    date:"Jun 2025 - Present",
    offer:"https://drive.google.com/file/d/1XcABEWwwUqKHmOfGEiGiLSrJyCk7LI4s/view?usp=sharing",
    description:"Built and maintained web and mobile applications, developed scalable APIs, integrated AI-powered features, resolved production issues, and worked with large datasets for analysis and automation. Also streamlined bug tracking and task management using Azure DevOps while supporting a desktop app built with Electron, Angular, and SQLite.",
  },
  {
    id:2,
    title:"Graduate Research Assistant",
    subtitle:"Wichita State Univeristy",
    date:"Sep2024 - Present",
    description:"Managed multiple concurrent research projects under three professors, prioritizing tasks, meeting deadlines, and maintaining clear communication to ensure timely delivery of code and documentation.",
  },
  {
    id: 3,
    title: "Software Developer",
    subtitle: '7 Dots Smart Solutions(OPC) Pvt Ltd, Hyderabad',
    date: 'Dec 2021 - June 2024',
    certi:"https://drive.google.com/file/d/1cyve2uX9QZpKNDFI8gm8dyxMkXCZZcyV/view?usp=sharing",
    description: 'As a software developer, I played a key role in developing major projects, including a mobile app and website for event management. My contributions were instrumental in shaping the functionality and success of these projects.',
  },
 
  
 
];

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="bg-gray-50 dark:bg-dark-100">
      <SectionTitle
        title="Work Experience"
        subtitle="My professional journey"
      />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              description={item.description}
              offer={item.offer}
              certi={item.certi}
              type="experience"
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
