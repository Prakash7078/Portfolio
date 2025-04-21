import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-primary-500/10 to-cyan-500/10 dark:from-violet-900/20 dark:via-primary-900/20 dark:to-cyan-900/20 animate-gradient bg-[length:400%_400%]"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-500/20 dark:bg-violet-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/20 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-primary-600 to-cyan-600 dark:from-violet-400 dark:via-primary-400 dark:to-cyan-400 mb-6"
          >
            Prakash Ponduri
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl md:text-3xl text-gray-800 dark:text-gray-200 mb-8 h-14"
          >
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'Data Analyst', 2000,
                'Full-Stack Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              className="inline-block"
              repeat={Infinity}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 via-primary-600 to-cyan-600 hover:from-violet-700 hover:via-primary-700 hover:to-cyan-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-primary-500/25 hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-white/10 dark:bg-dark-200/50 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-dark-200/70 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <a href="#about" className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;