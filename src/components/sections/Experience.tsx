import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../ui/TimelineItem';

const experienceData = [
   {
    id:1,
    title:"Software Engineer",
    subtitle:"Cerner · Wichita, KS",
    date:"Jan 2026 - Present",
    description:"Build enterprise full-stack applications with Java, Spring Boot, Angular, React Native, SQL, .NET Core, and OpenAI APIs. Designed Kafka-based microservices, Redis caching, cloud CI/CD workflows, and a production RAG platform that improved retrieval accuracy by 45%.",
  },
  {
    id:2,
    title:"Graduate Research Assistant",
    subtitle:"Wichita State University · Wichita, KS",
    date:"Sep 2024 - May 2025",
    description:"Built Python, Selenium, SQL, and Pandas ETL pipelines for 110,000+ research records. Applied TF-IDF, cosine similarity, and DBSCAN clustering to reach 98% entity-matching accuracy, then delivered Power BI dashboards and semantic-search workflows.",
  },
  {
    id: 3,
    title: "Software Engineer",
    subtitle: '7 Dots Smart Solutions · Hyderabad, India',
    date: 'Jan 2022 - Jul 2024',
    description: 'Developed enterprise applications with Java, Spring Boot, React, Angular, SQL, and MongoDB. Architected 15+ microservices, resolved 130+ production issues, and deployed AWS applications with Docker, Kubernetes, CI/CD, JWT, and role-based access control.',
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
