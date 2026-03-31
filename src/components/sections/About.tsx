import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import { Download, Calendar, MapPin, Mail } from 'lucide-react';
import mine from '/Images/boy.avif';
const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-gray-50 dark:bg-dark-100">
      <SectionTitle
        title="About Me"
        subtitle="Get to know me better"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-5 shadow-xl">
            <img
              src={mine}
              alt="John Doe"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-accent-200 dark:bg-accent-900 rounded-full blur-sm"></div>
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary-200 dark:bg-primary-900 rounded-full blur-sm"></div>
        </motion.div>
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            I'm <span className="text-primary-600 dark:text-primary-400">Chandra Prakash Babu Ponduri</span>, a Full-Stack Developer
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
           I am an experienced Full Stack Developer with strong expertise in building modern web and mobile applications and integrating AI-powered features into real-world products. I work across React, Angular, Node.js, Express.js, Ionic, SQL, and MongoDB to create clean, scalable, and user-friendly solutions. I am also skilled in data analysis, web scraping, data cleaning, and transforming large datasets into meaningful insights. Through my research and development work, I have handled 100k+ records, used Python, Selenium, Pandas, SQL, and OpenAI APIs to extract and structure complex data, and applied machine learning techniques to improve accuracy and automation. I enjoy solving challenging problems with smart code, building efficient systems, and delivering smooth user experiences across both frontend and backend development.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I enjoy taking complex problems and turning them into simple, beautiful solutions. When I'm not coding, you'll find me hiking, reading, or experimenting with new technologies.
          </p>
          
          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* <div className="flex items-center">
              <Calendar size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Born: May, 2003</span>
            </div> */}
            <div className="flex items-center">
              <MapPin size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Wichita, KS USA</span>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">ponduriprakash7078@gmail.com</span>
            </div>
          </div>
          
          <a 
            href="https://drive.google.com/file/d/1LbYwYS4NoRahbrKuCdrjsalUPN1c4CMC/view?usp=sharing" target='_blank'
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-500/25"
          >
            <Download size={18} className="mr-2" />
            Download CV
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;
