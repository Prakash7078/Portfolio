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
    <div className={`flex fixed w-full left-0 right-0 max-w-7xl mx-auto backdrop-blur-sm justify-between md:py-4 lg:py-6 py-6 xl:py-10 z-[999] px-0 md:px-5 ${isMenuOpen?'bg-orange-300':'bg-none'}`}>
        <motion.h1 
        initial={{x:-100}}
        whileInView={{x:0}}
        transition={{duration:1}}
        >
          <h1 className='font-bold md:text-3xl text-2xl pl-8 md:pl-10 font-serif shadow-b'>Chandra</h1>
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
                className="capitalize before:block before:w-2 before:h-2 before:mx-auto before:rounded-full underline hover:before:bg-black cursor-pointer text-black hover:text-black"
                >{item.name}
                </Link>
              </li>
              </motion.li>
            })}
          </ul>
        </div>
        <div className='lg:hidden'>
          {!isMenuOpen ? <BiMenu size={25} onClick={toggleMenu} className="mr-6"/> : <MdClose size={25} onClick={toggleMenu} className="mr-6 rounded-full "/>}
        </div>
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 transition-all ease-in duration-1000 lg:hidden">
            <div className="rounded-b-lg backdrop-blur-lg bg-orange-300 shadow-lg px-5 pb-4">
              <motion.nav
                initial={{y:-100}}
                transition={{duration:0.7}}
                whileInView={{y:0}}
                
              >
              <nav className="flex flex-col gap-y-7 text-lg pl-6 pt-8 pb-4">
                {data.menuItems.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        onClick={() => setIsMenuOpen(false)}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={750}
                        to={item.href}
                        className="cursor-pointer "
                      >
                        {item.name}
                      </Link>
                    );
                  })}
              </nav>
                
              </motion.nav>
            </div>
          </div>
        )}
    </div>
  )
}

export default Navbar