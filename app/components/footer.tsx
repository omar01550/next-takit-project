import React from 'react'
import ContainerWrapper from './containerWrapper'
import Logo from './logo'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='w-full bg-blue-950 text-white'>
           <ContainerWrapper className='flex flex-col justify-center lg:flex-row lg:justify-between items-center '>
               <div className="services py-6 text-center">

               <Link href="/" className='capitalize text-4xl font-bold text-white w-full text-center'>
                        tak<span className='text-red-500'>it</span>
                </Link>

                <nav className='flex  w-full space-x-4 lg:flex-col justify-center lg:space-y-4 items-center capitalize py-4 ps-4  text-center'>
                  <Link href="/train" className='text-base font-semibold'>
                      train
                  </Link>

                  <Link href='/bus' className='text-base font-semibold '>
                      Buses
                  </Link>

                  <Link href='/metro' className='text-lg font-semibold'>
                      Metro
                  </Link>
            </nav>
                    
               </div>
{/* center item */}
               <div className="text w-full text-center text-xl md:text-3xl capitalize font-semibold">
                 <h1 >all your tickits options in one place</h1>
                 <p className="text-omar-100 text-center font-semibold text-lg mt-5">
                      Book train , bus ,metro tickets
                 </p>
               </div>
{/*end center item */}

{/* social media links */}

               <div className="links flex justify-center items-center gap-3 mt-6 lg:mt-0">
                    <Facebook/>
                    <Linkedin/>
                    <Instagram/>
                    <Youtube/>
                    
               </div>
 {/*end of social media links */}

                
           </ContainerWrapper>
    </footer>
  )
}

export default Footer