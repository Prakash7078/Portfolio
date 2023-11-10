import React from 'react'
import data from '../data';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import work from '/images/workgif.gif'
import '@splidejs/react-splide/css';
function Experience() {
  return (
    <div className='mb-10' id='#experience'>
        <h1 className='font-bold text-center text-3xl my-20'>Experiences</h1>
          <div >
            <Splide
                options={{
                  rewind:true,
                  perPage: 1,
                  dots:true,
                  speed: 2000,
                  arrows:true,
                  interval: 2000,
                  autoplay:false,
                }}
                aria-label="React Splide Example"
                data-splide-interval="1000"
              >
              {data.Experinces.map((item:{name:string,company:string,duration:string,offer:string,certi:string,desc:string})=>(
                      <SplideSlide  className="grid grid-cols-1 md:grid-cols-2">
                          <div><img src={work} alt='gif' className='lg:px-16'/></div>
                          <div className='flex flex-col w-fit gap-3 px-4 py-6 cursor-pointer md:mx-auto mx-10  hover:scale-105 transition-all duration-500 text-center md:text-start'>
                            <h1 className='font-bold text-2xl'>{item.name}</h1>
                            <p className=''>{item.company}</p>
                            <p>{item.duration}</p>
                            <p className='leading-loose pr-6'>{item.desc}</p>
                            {data.projectslinks.filter((ite:{name:string})=>ite.name===item.name).map((it:{name:string,link1:string,link2:string})=>(
                              <div key={it.name}>
                                <Link to={it.link1} target='_blank'><p className='text-blue-800 mb-2'>{it.link1}</p></Link>
                                <Link to={it.link2} target='_blank'><p className='text-blue-800 mb-2'>{it.link2}</p></Link>
                              </div>
                            ))}
                            <div className='flex justify-evenly mt-2'>
                                <Link to={item.offer} target='_blank'><button className='  shadow-inner border-2 border-b-rose-200  px-8 py-1'>Offer</button></Link>
                                {item.certi && <Link to={item.certi}  target='_blank'><button className='border-2 border-b-rose-200 shadow-inner px-8 py-1'>Complete</button></Link>}
                            </div>
                          </div>
                      </SplideSlide>
              ))}
            </Splide>
          </div>
    </div>
  )
}

export default Experience