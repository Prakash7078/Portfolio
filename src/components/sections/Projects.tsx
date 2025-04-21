import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard, { Project } from '../ui/ProjectCard';
import event from '/Images/event.png'
import mythri from '/Images/mythri.png';
import atoms from '/Images/atoms.png';
import chat from '/Images/chat.png';
import clubs from '/Images/clubs.png';
import food from '/Images/thumbanaliaPP.png';
import flappy from '/Images/flappy-bird.jpg';
const projectsData: Project[] = [
  {
    id: 1,
    title: 'EventReply',
    description: 'Event Reply Mobile App Client Project.',
    image: event,
    tags: ['Ionic Framework', 'Sass', 'Angular'],
    github: 'https://gitlab.com/users/Prakash7078/contributed',
    demo: 'https://m.dev.eventreply.com/',
  },
  {
    id: 2,
    title: 'Mythri Jewellers',
    description: 'Mythri jewellers website',
    image: mythri,
    tags: ['React', 'Node JS', 'Mongo DB', 'Tailwind css','Express JS'],
    github: 'https://github.com/TangledDevs/mythri-jewellers',
    demo: 'https://mythri-jewellers.vercel.app/',
  },
  {
    id: 3,
    title: 'Atoms Education',
    description: 'Atoms Company Website',
    image: atoms,
    tags: ['React', 'Tailwind css'],
    github: 'https://github.com/TangledDevs/atoms-education',
    demo: 'https://education.atomsgroup.net/index.html',

  },
  {
    id: 4,
    title: 'ChatMe',
    description: 'Search Random person chat application ',
    image: chat,
    tags: ['React', 'Sass', 'JWT','Firebase'],
    github: 'https://github.com/Prakash7078/chatMe',
    demo: 'https://chat-dude.netlify.app/',
  },
  {
    id: 5,
    title: 'College Clubs Website',
    description: 'My College Clubs website for registrations on fridays.',
    image: clubs,
    tags: ['Vite', 'Tailwind css', 'Redux Toolkit', 'Node JS','Express JS', 'Mongo DB','JWT','AWS S3'],
    github: 'https://github.com/Prakash7078/VVIT-Clubs-main',
    demo: 'https://vvit-clubs.vercel.app/',
  },
  {
    id:6,
    title:"Food Share App",
    description:"App used to share food to trusts, old age homes and footpath people by adding food and contacting to food share communities.",
    image:food,
    github: 'https://github.com/Prakash7078/FoodShare',
    demo: 'https://github.com/Prakash7078/FoodShare',
    tags: ['React-Native', 'Firebase'],   
  },
  {
    id:7,
    title:"FlappyBird",
    description:"Flappy bird game using Unity Game Engine.",
    image:flappy,
    github: 'https://github.com/Prakash7078/Unity-FlappyBird',
    tags: ['Unity 3D', 'C#'],   
  },
];

// Extract all unique tags
const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const filteredProjects = selectedTag
    ? projectsData.filter(project => project.tags.includes(selectedTag))
    : projectsData;
    
  return (
    <AnimatedSection id="projects" className="bg-white dark:bg-dark-100">
      <SectionTitle
        title="My Projects"
        subtitle="Showcasing my latest work"
      />
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedTag === null
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-400'
          }`}
          onClick={() => setSelectedTag(null)}
        >
          All
        </motion.button>
        
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-400'
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </motion.button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTag || 'all'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default Projects;