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
            I'm a data analyst and developer skilled in scraping, cleaning, and transforming large datasets into valuable insights. I build clean, efficient web and mobile apps, managing multiple projects with strong attention to detail.
            Passionate about solving problems with smart code and creating smooth user experiences.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I enjoy taking complex problems and turning them into simple, beautiful solutions. When I'm not coding, you'll find me hiking, reading, or experimenting with new technologies.
          </p>
          
          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Born: May, 2003</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="text-primary-600 dark:text-primary-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">ponduriprakash7078@gmail.com</span>
            </div>
          </div>
          
          <a 
            href="https://docs.google.com/document/d/1T_6Rtc3UDE_rGzUhwqLPmfFFWrlipYlL/edit?usp=sharing&ouid=100891520283484603709&rtpof=true&sd=true" target='_blank'
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