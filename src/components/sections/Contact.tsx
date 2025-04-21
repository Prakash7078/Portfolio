import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import { Send, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import leetcode from '/Images/leetcode.png';
import { ShieldCheck } from 'lucide-react';
import emailjs from "@emailjs/browser";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    emailjs.sendForm('service_ubc60ri', 'template_fh1hh3e', form.current, 'SEYplcctvMg-dG9Uk')
    .then((result) => {
      console.log(result.text);
    },(error) => {
      console.log(error.text);
    });
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    toast.success("Message send succesfully");

  };
  
  return (
    <AnimatedSection id="contact" className="bg-white dark:bg-dark-100">
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's work together"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Let's discuss your project
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          {/* Contact details */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Wichita, KS</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                <Mail size={20} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">cxponduri@shockers.wichita.edu</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                <Phone size={20} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900 dark:text-white">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">+1 (316) 372-5784</p>
              </div>
            </div>
          </div>
          
          {/* Social links */}
          <div className="pt-6">
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Find me on</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Prakash7078/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/prakash7078/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-colors" href="https://leetcode.com/Prakash_7078/" rel="noreferrer" target="_blank"><img src={leetcode} alt='leetcode'/></a>
              <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-colors" href="https://drive.google.com/drive/folders/1X39-5TitgldeoQ9uJD-ot27UM2VNph6b?usp=sharing" rel="noreferrer" target="_blank"><ShieldCheck /></a>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} ref={form} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Chandra Prakash"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="cxponduri@shockers.wichita.edu"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-300 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;