import React from 'react'
import data from '../data';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
function Experience() {
  return (
    <div className='mb-10' id='#experience'>
        <h1 className='font-bold text-center text-3xl my-20'>Experiences</h1>
        <motion.div
        initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:0.7}}>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mx-0 sm:mx-10">
              {data.Experinces.map((item:{name:string,company:string,duration:string,offer:string,certi:string,desc:string})=>(
                      <div className='flex flex-col w-fit gap-3 px-4 py-6 cursor-pointer bg-gray-200 sm:mx-auto mx-10 shadow-lg hover:scale-105 transition-all duration-500 text-center sm:text-start'>
                          <h1 className='font-bold text-2xl'>{item.name}</h1>
                          <p className=''>{item.company}</p>
                          <p>{item.duration}</p>
                          <p className=''>{item.desc}</p>
                          <div className='flex justify-evenly mt-2'>
                              <Link to={item.offer}><button className='text-orange-500 shadow-lg  px-4 py-1'>Offer</button></Link>
                              {item.certi && <Link to={item.certi}><button className='text-orange-500 shadow-lg  px-4 py-1'>Complete</button></Link>}
                          </div>
                      </div>
              ))}
          </div>
        </motion.div>
    </div>
  )
}

export default Experience