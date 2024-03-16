import React from 'react'
import Header from './header'
import ContainerWrapper from './containerWrapper'
import './css/hero.css';

const Hero = () => {
  return (
    <div className='w-full h-[230px] text-white hero relative'>
        <div className="hero-overlay absolute w-full h-full bg-black opacity-50 left-0 top-0">
             
        </div>
        
         <ContainerWrapper>
                <Header/>
                <h1 className='text-3xl capitalize text-center font-bold mt-6 relative'>trains ticket in egypt search, book and compare </h1>
         </ContainerWrapper>
    </div>
  )
}

export default Hero