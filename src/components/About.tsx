import {motion} from 'framer-motion'
import about from '/images/about.jpg'
const About = () => {
 
  return (
    <div id="#about" className=" py-10">
       <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1}}
          className=" mx-auto px-8"
          >
        <div className="lg:flex lg:items-center lg:gap-x-8">
        <motion.div
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        className="w-full lg:w-1/2"
          >
          <div >
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={about}
              alt="my-image"
            />
          </div>
          </motion.div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="px-4 py-7 md:py-10 lg:py-12">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg mb-4">
                Hi, I'm Prakash, a Software developer. I have a
                passion for creating web or mobile app applications that provide seamless user
                experiences and solve real-world problems.
              </p>
              <p className="text-lg mb-4">
                Aspiring software developer with strong skills in mobile/web app development, 
                data analysis, web scraping in Python, and managing databases 
                like SQL and MongoDB."
              </p>
              <p className="text-lg">
                I'm excited to take on new challenges and contribute to
                innovative projects. Feel free to connect with me through the
                social links below or reach out via email. Let's build something
                amazing together!
              </p>
              
            </div>
          </div>
        </div>
        </motion.div>
    </div>
  );
};

export default About;