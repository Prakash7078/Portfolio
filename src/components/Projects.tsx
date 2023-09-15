import React from 'react'
import Slider from "react-slick";
import {motion} from 'framer-motion';
import data from '../data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    focusOnSelect:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  };
  return (
    <div id='#projects'>
      <h1 className='text-center font-bold text-3xl mt-5'>Projects</h1>
        <div className='sm:mx-10 mt-10 mx-6'>
          <Slider {...settings}>
            {data.Projects.map((item:{name:string,image:string,codeurl:string,websiteurl:string,desc:string,tags:Array<string>})=>(
              <div key={item.name} className='my-10'>
                 <motion.div
                    initial={{scale:0.6}}
                    whileInView={{scale:1}}
                    transition={{duration:1}}>
                <div className='sm:mx-5 flex flex-col gap-10 border-2 shadow-lg pb-5 sm:h-96 h-fit cursor-pointer group relative'>
                  <div className=''>
                    <img src={item.image} alt={item.name} className='object-fill  h-60 mx-auto'/>
                  </div>
                  <div className="flex flex-wrap mb-4">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-200 px-3 mx-2 mb-2 text-xs font-semibold text-gray-900 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <div className="bg-black absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue rounded-xl">
                    <h3 className='text-2xl font-medium text-white mb-5'>{item.name}</h3>
                    <p className='px-4 text-center text-lg text-white'>{item.desc}</p>
                    <div className="flex gap-7 justify-center items-center my-7 text-2xl">
                      <a className='text-white' href={item.codeurl} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                      <a className='text-white' href={item.websiteurl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                    </div>
                  </div>
                </div>
                </motion.div>
              </div>
            ))}
          </Slider>
          <style>{`
                    /* Left Arrow */
                    .slick-prev:before {
                      color: #9C1137;
                    }

                    /* Right Arrow */
                    .slick-next:before {
                      color: #9C1137;
                    }
                  `}</style>
        </div>
    </div>
  )
}

export default Projects