import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../ui/TimelineItem';

const experienceData = [
  {
    id:1,
    title:"Graduate Research Assistant",
    subtitle:"Wichita State Univeristy",
    date:"Sep2024 - Present",
    description:"Managed multiple concurrent research projects under three professors, prioritizing tasks, meeting deadlines, and maintaining clear communication to ensure timely delivery of code and documentation.",
  },
  {
    id: 2,
    title: "Software Developer",
    subtitle: '7 Dots Smart Solutions(OPC) Pvt Ltd, Hyderabad',
    date: 'Dec 2023 - June 2024',
    offer:"https://drive.google.com/file/d/1cCozPlg45F4Qy1WANsiH0IeABicf9zvm/view?usp=sharing",
    certi:"https://drive.google.com/file/d/1cyve2uX9QZpKNDFI8gm8dyxMkXCZZcyV/view?usp=sharing",
    description: 'As a software developer, I played a key role in developing major projects, including a mobile app and website for event management. My contributions were instrumental in shaping the functionality and success of these projects.',
  },
  {
    id:3,
    title:"Web Development Intern",
    subtitle:"Atoms Digital Solutions",
    duration:"Sept 2023-Dec 2023",
    offer:"https://drive.google.com/file/d/1XdDZTBvkdesbCHwAYSMfYfDl9JidPoO9/view?usp=sharing",
    certi:"https://drive.google.com/file/d/1MumZkFh0iwxoW1rSCfIxR3F9RJldp3G7/view?usp=sharing",
    description:"During my internship, I gained hands-on experience in developing complete projects, encompassing both frontend and backend aspects. This involved utilizing various AWS services, including AWS S3, EC2, and ECR.",
  },
  {
    id:4,
    title:"Risk Analyst Intern",
    subtitle:"Dynamatix Analytics Pvt Ltd",
    duration:"May 2022-March 2023",
    offer:"https://drive.google.com/file/d/1hO5vQNCZCeCUjT-0wTUmmym-CUVAvNjt/view?usp=sharing",
    certi:"https://drive.google.com/file/d/1fFp0zxdpB5SlJRHNHMMShfO3k2Zilb2b/view?usp=sharing",
    description:"Internship position with the Risk Analytics division.During my tenure as a Risk Analyst at a dynamic company, I excelled in creating flexes, controls, KRIS tools, and dashboards for visualizing and managing risks. My role involved designing action plans, constructing approver forms, and implementing automated email systems using Node.js. This experience honed my skills in risk analysis, data visualization, and process optimization. ",
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