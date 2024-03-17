'use client'
import { authContext } from '@/context/app'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'


const Client = () => {



    const user = useContext(authContext);
    console.log(user);
    const route = useRouter();
    console.log(route);
    
    


  return (
    <div>client</div>
  )
}

export default Client