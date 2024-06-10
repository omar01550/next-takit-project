import React from 'react'
import ContainerWrapper from './containerWrapper'
import Logo from './logo'
import Link from 'next/link'
import { Bus, Facebook, Instagram, Linkedin, Train, TrainFrontTunnel, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='w-full bg-primary-100 text-white'>
           <ContainerWrapper className='flex flex-col justify-center lg:flex-row lg:justify-between items-center py-8'>
               <div className="services py-6 text-center">

               <Link href="/" className='capitalize text-4xl font-bold text-white w-full text-center'>
                        tak<span className='text-secondary-100'>it</span>
                </Link>

                <nav className='flex  w-full space-x-4 lg:flex-col justify-center lg:space-y-2 items-center capitalize py-4 ps-4  text-center text-xl font-light'>
                  <Link href="/train" className='flex justify-center items-center gap-2'>
                       <Train/>
                      train
                  </Link>

                  <Link href='/bus' className='flex justify-center items-center gap-2'>
                      <Bus/>
                      Buses
                  </Link>

                  <Link href='/metro' className='flex justify-center items-center gap-2'>
                     <TrainFrontTunnel/>
                      Metro
                  </Link>
            </nav>
                    
               </div>
{/* center item */}
               <div className="text w-full text-center text-xl md:text-3xl capitalize font-semibold">
                 <h1 >all your tickits options in one place</h1>
                 <p className="text-[#9f6a3d] text-center font-semibold text-lg mt-5">
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