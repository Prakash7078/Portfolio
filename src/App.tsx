import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-100 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ToastContainer position="bottom-center" bodyClassName="text-center font-bold text-blue-900"/>

      </div>
    </ThemeProvider>
  );
}

export default App;