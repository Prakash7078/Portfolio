import React from 'react'
import data from '../data';
import { Link } from "react-scroll";
import { BiMenu } from  'react-icons/bi'
import { MdClose } from "react-icons/md";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };  return (
    <div className='flex justify-between sm:py-4 py-6 bg-yellow-500  w-full z-[999] '>
        <h1 className='font-bold sm:text-3xl text-2xl pl-10 font-serif shadow-b'>Prakash</h1>
        <div className='hidden md:flex pr-10'>
          <ul className='flex gap-10'>
            {data.menuItems.map((item:{name:string,href:string},index:number)=>{
              return <li key={index}>
                <Link 
                to={item.href}
                smooth={true}
                duration={1000}
                className="capitalize before:block before:w-2 before:h-2 before:mx-auto before:rounded-full  hover:before:bg-black cursor-pointer text-black hover:text-black"
                >{item.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
        <div className='md:hidden'>
          {isMenuOpen ? <MdClose onClick={toggleMenu} className="mr-6"/>:<BiMenu onClick={toggleMenu} className="mr-6"/>}
        </div>
        {isMenuOpen && <div className={(isMenuOpen ? "block" : "hidden") + " md:hidden absolute left-6 right-6"}>
          <nav className="flex flex-col items-center self-end py-6 mt-10 space-y-6 bg-yellow-200 drop-shadow-md">
            {data.menuItems.map((item:{name:string,href:string}) => (
              <li key={item.name} className="list-none">
                <Link
                  to={item.href}
                  duration={300}
                  smooth={true}
                  className="capitalize text-black font-bold text-2xl"
                  onClick={() => toggleMenu()}
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