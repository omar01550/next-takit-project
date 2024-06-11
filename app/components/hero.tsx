
import React from 'react'
import Header from './header'
import ContainerWrapper from './containerWrapper'
import './css/hero.css';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'
import { getUserState } from '@/lib/utils';

const Hero = () => {

  const allCookies = cookies();
  const token = allCookies.get("token")?.value;
   
const user = getUserState(token);
  return (
    <div className='w-full h-[300px] text-white hero relative'>


        {/* <div className="overlay absolute left-0 top-0 w-full h-full bg-black opacity-60"></div> */}
         <ContainerWrapper>
                <Header/>
    
                <h1 className='text-3xl capitalize text-center font-bold mt-14 relative text-secondary-100'>trains ticket in egypt search, book and compare </h1>
         </ContainerWrapper>
    </div>
  )
}

export default Hero