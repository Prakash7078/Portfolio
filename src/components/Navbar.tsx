import React, { useState } from 'react'
import data from '../data';
import { Link } from "react-scroll";
import { BiMenu } from  'react-icons/bi'
import {motion} from 'framer-motion';
import { MdClose } from "react-icons/md";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log("Menu toggle clicked");
    setIsMenuOpen(prevState => !prevState);
  };
 
  

  return (
    <div className='flex justify-between md:py-4 py-6 xl:py-10 bg-yellow-500  w-full z-[999] '>
        <motion.h1 
        initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:1}}
        >
          <h1 className='font-bold md:text-3xl text-2xl pl-10 font-serif shadow-b'>Prakash</h1>
        </motion.h1>    
            
        <div className='hidden lg:flex pr-16'>
          <ul className='flex gap-10'>
            {data.menuItems.map((item:{name:string,href:string},index:number)=>{
              return <motion.li
              initial={{ x:100 }}
              whileInView={{ x: 0 }}
              transition={{ duration:0.7 }}><li key={index}>
                <Link 
                to={item.href}
                smooth={true}
                duration={1000}
                className="capitalize before:block before:w-2 before:h-2 before:mx-auto before:rounded-full  hover:before:bg-black cursor-pointer text-black hover:text-black"
                >{item.name}
                </Link>
              </li>
              </motion.li>
            })}
          </ul>
        </div>
        <div className='lg:hidden'>
          {!isMenuOpen ? <BiMenu size={25} onClick={toggleMenu} className="mr-6"/> : <MdClose size={25} onClick={toggleMenu} className="mr-6 bg-yellow-700 rounded-full "/>}
        </div>
        {<div className={(isMenuOpen ? "block" : "hidden") + " lg:hidden absolute left-6 right-6 z-[999]"}>
          <nav className="flex flex-col items-center self-end py-6 mt-10 space-y-6 bg-yellow-200 drop-shadow-md">
            {data.menuItems.map((item:{name:string,href:string}) => (
              <li  key={item.name} className="list-none">
                <Link
                  to={item.href}
                  duration={300}
                  smooth={true}
                  onClick={toggleMenu}
                  className="capitalize text-black font-bold text-2xl"
                  
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </nav>
        </div>}
    </div>
  )
}

export default Navbar