
import React from 'react'
import Header from './header'
import ContainerWrapper from './containerWrapper'
import './css/hero.css';
import { cookies ,headers} from 'next/headers';
import jwt from 'jsonwebtoken'
import { getUserState } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const Hero = () => {

  const allCookies = cookies();
  const allHeaders= headers();
  console.log(allHeaders);

  const token = allCookies.get("token")?.value;
  

   
const user = getUserState(token);
  return (
    <div className='w-full h-[300px] text-white hero relative bg-home'>


        <div className="overlay absolute left-0 top-0 w-full h-full bg-black opacity-15"></div>
         <ContainerWrapper>
                <Header/>
    
                <h1 className='text-3xl capitalize text-center font-bold mt-24 relative text-secondary-100'>Book it with Takit </h1>
         </ContainerWrapper>
    </div>
  )
}

export default Hero