'use client';
import ContainerWrapper from '@/app/components/containerWrapper'
import Logo from '@/app/components/logo';
import { Camera, Upload } from 'lucide-react'
import Image from 'next/image';
import React, { useEffect, useReducer, useRef, useState } from 'react'
import UserCard from './userCard';




const Page = () => {
  
  
  const [image,setImage] = useState(null)
  const [imageLoading,setImageLoading] = useState(false);
  const FileRef = useRef();
  const [user,setuser] = useState();

  const handleChange = (e) => {
     setuser({
          ...user,
          [e.target.name]:e.target.value

     })
}

const handleSubmit= (e) => {
     e.preventDefault()
     fetch("http://localhost:3000/api/users/347589748975",{
           body:JSON.stringify(user)
     })
     .then((res) => { 
          if (res.ok) {
               return res.json()
          }

          return new Promise((res,rej)=>rej("error"))
     }).then((result) => { 
           setuser(result.user)
      }).catch((error) => {
        setuser(null);
      })
}
  
  useEffect(() => { 
       fetch("http://localhost:3000/api/users/347589748975")
       .then((res) => { 
            if (res.ok) {
                 return res.json()
            }

            return new Promise((res,rej)=>rej("error"))
       }).then((result) => { 
             setuser(result.user)
        }).catch((error) => {
          setuser(null);
        })
  },[])

  return (
    <main className="w-full">
        <ContainerWrapper className='w-full py-16'>
              <Logo/>
              <UserCard/>
              
               <form action="" className="updateProfile w-full flex flex-col justify-center items-center space-y-6 mt-10 " onSubmit={handleSubmit}>
           

                     <div className="flex flex-col justify-center gap-3 lg:flex-row lg:justify-around items-center w-full pt-3 lg:pt-6 flex-wrap">
                          <input type="text" name="firstname" className="bg-[#F4ECDC] text-blue-900 focus:outline-none w-full lg:w-5/12   p-3 rounded-md text-base font-medium " placeholder='first name' value={user&&user.firstname} onChange={handleChange}/>
                            
                          <input type="text" className="bg-[#F4ECDC] text-blue-900 focus:outline-none w-full lg:w-5/12   p-3 rounded-md text-base font-medium" placeholder='last name' value={user&&user.lastname} onChange={handleChange} name='lastname'/>
                     </div>


                     <div className="flex flex-col justify-center gap-3 lg:flex-row lg:justify-around items-center w-full mt-10">
                          <input type="text" className="bg-[#F4ECDC] text-blue-900 focus:outline-none w-full lg:w-5/12   p-3 rounded-md text-base font-medium" placeholder='email' value={user&&user.email} onChange={handleChange} name='email'/>
                            
                          <input type="text" className="bg-[#F4ECDC] text-blue-900 focus:outline-none w-full lg:w-5/12   p-3 rounded-md text-base font-medium" placeholder='mobile number' value={user&&user.mobile} onChange={handleChange} name='mobile'/>
                     </div>


                     <div className="flex flex-col justify-center gap-3 lg:flex-row lg:justify-around items-center w-full mt-10">
                          <input type="text" className="bg-[#F4ECDC] text-blue-900 focus:outline-none w-full lg:w-5/12   p-3 rounded-md text-base font-medium" placeholder='country' value={user&&user.country} onChange={handleChange} name='country'/>
                            
                          <input type="text" className="bg-[#F4ECDC] text-blue-900 focus:outline-none w-full lg:w-5/12   p-3 rounded-md text-base font-medium" placeholder='passport' value={user&&user.passport} onChange={handleChange} name='passport'/>
                     </div>

                     <div className="flex w-full justify-center items-center pt-6">
                          <button className="px-6 py-2 bg-primary-100 text-2xl text-white capitalize rounded-md flex justify-center items-center gap-2 w-fit">
                                update
                                <Upload/>
                          </button>
                     </div>

               </form>
        </ContainerWrapper>
    </main>


 )
}

export default Page