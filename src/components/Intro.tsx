import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';
import leetcode from '/images/leetcode.png';
import {motion} from 'framer-motion';
import boy from '/images/boy.avif';
import {PiCertificateFill} from 'react-icons/pi'
function Intro() {
  return (
    <section id="#home" className="text-black body-font pt-5 pb-20 bg-yellow-400 ">
      <div className="p-5 mx-auto gap-2 flex flex-col-reverse md:pt-12 md:px-7 lg:py-20 md:flex-row-reverse items-center min-h-fit" >
      <motion.div
          initial={{ scale: 0, rotate: 300}}
          whileInView={{ scale: 1, rotate: 360}}
          transition={{ duration: 0.7 }}
        >
          <div className="mr-0 sm:mr-10">
            <motion.img
              className="object-cover border-2 border-yellow-800 cursor-pointer md:hover:scale-110 transition duration-1000 ease-in-out rounded-3xl h-72 w-96 mt-24 md:mt-0"
              alt="hero"
              src={boy}
              initial={{ scale: 1 }} // Initial scale
              whileHover={{ scale: 1.1 }} // Scale on hover
            />
          </div>
        </motion.div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center">
          <motion.div
          initial={{scale:0.5}}
          whileInView={{scale:1}}
          transition={{duration:0.7}}>
          <div className="flex gap-5 my-4">
            <a className="text-black text-2xl md:text-xl hover:scale-125" href="https://github.com/Prakash7078" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className="text-black text-2xl md:text-xl hover:scale-125" href="https://www.linkedin.com/in/prakash7078/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a className="text-black text-2xl md:text-xl hover:scale-125 w-5" href="https://leetcode.com/Prakash_7078/" rel="noreferrer" target="_blank"><img src={leetcode} alt='leetcode'/></a>
            <a className="text-black text-2xl md:text-xl hover:scale-125 w-5" href="https://drive.google.com/drive/folders/1X39-5TitgldeoQ9uJD-ot27UM2VNph6b?usp=sharing" rel="noreferrer" target="_blank"><PiCertificateFill/></a>
          </div>
          </motion.div>
          <motion.h2
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration:0.7}}>
            <h2 className="title-font md:text-3xl text-2xl mb-4 text-center font-medium ">
              Hello , I am  <span className='text-dark-orange'>Chandra Prakash Babu</span>
            </h2>
          </motion.h2>
          <div className="text-3xl  mb-4 font-medium lg:inline-block">
            <span className='text-darkblue'>{"_"}</span>
            <Typewriter 
                words={['Web Developer','UI/UX Designer','Enthusiastic Dev']} 
                loop={false} 
                typeSpeed={100} 
                deleteSpeed={100} 
                delaySpeed={1000}/>
          </div>
          <p className="mb-2  text-lg md:text-xl leading-relaxed">
          Adeptness in developing full-stack applications using the MERN stack.
          </p>
          <p className="text-lg  md:text-xl">I enjoy designing tech websites.</p>
          <div className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between">
            <motion.button
            initial={{y:-100}}
            whileInView={{y:0}}
            transition={{duration:0.7}}
            >
              <button className="inline-flex sm:font-medium border-2 border-red-500 sm:py-3 py-2 px-10 focus:outline-none hover:bg-orange-600 hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10 bg-white">
                <Link to="#contact" spy={true} smooth={true} offset={-100} duration={750} className="text-black hover:text-black ">
                  Hire Me
                </Link>
              </button>
            </motion.button>
            <motion.a
            initial={{y:100}}
            whileInView={{y:0}}
            transition={{duration:0.7}}
            >
              <a href="https://drive.google.com/file/d/1WOoFl-JfaJWXC0_avihQB5mcai4KUa5n/view?usp=sharing" target='_blank' rel='noreferrer' >
                <button className=" text-black inline-flex sm:font-medium py-2  bg-orange-600 border-2  sm:py-3 px-7 focus:outline-none hover:bg-white hover:border-orange-600 hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </button>
              </a>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro