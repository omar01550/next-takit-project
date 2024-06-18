import React from 'react'
import Header from './header'
import ContainerWrapper from './containerWrapper'
import './css/hero.css';



const Hero = () => {

  

   
  return (
    <div className={
       'w-full h-[300px] text-white hero relative bg-home'
    }>

        <div className="overlay absolute left-0 top-0 w-full h-full bg-black opacity-15"></div>
         <ContainerWrapper>

     <Header/>
    
                <h1 className='text-3xl capitalize text-center font-bold mt-16 relative text-secondary-100'>Book it with Takit 

{Math.floor(Math.random()*1000)}
                </h1>
         </ContainerWrapper>
    </div>
  )
}

export default Hero