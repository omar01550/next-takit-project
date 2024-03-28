'use client';
import React, { useContext, useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useRouter } from 'next/navigation';
import { userContext } from '@/context/app';
import JWT from 'jsonwebtoken'

  


const LoginForm = () => {
  const [user,setUser] = useContext(userContext);

  const route = useRouter();
  const [showPassword,setShowPassword]  = useState(false);
  const {register,handleSubmit,formState,getValues,setError} = useForm()
  const [loading,setLoading] = useState(false);

      
  
  //handle  Login
  

const  handleLogin =(data) => {
  setLoading(true)
  if (data) {
   fetch("https://next-takit-project.vercel.app/api/login",{
      method:"POST",
      body:JSON.stringify(data)
   })
   .then((res) => {
      if(res.status == 200){
       return res.json()
      }else{
        return new Promise((res,rej)=>{rej("rej")})
      }
   })
   .then((result) => {
            
        const token = result.token ;
        document.cookie=`token=${token}`;
        if (token ) {
         const userDecoded = JWT.decode(token);
         setUser(userDecoded)
        route.push("/")    
}
     
   })
   .catch((error) => {
       setError('email',{message:"invalid email or password"})
     
   }).finally(() => {
    setLoading(false)
   })
   
  }   

};

    

  return (
    
 <form action="" className="flex flex-col items-center space-y-6 mt-12 w-full" onSubmit={handleSubmit(handleLogin)}>

      {/* email field */}
        <p className="text-red-500 error-message text-start text-bold text-xl">
              {
                formState.errors.email&& <span>{formState.errors.email.message}</span>
              }
          </p>  

          <div className="input-container bg-gray-100 flex justify-start items-center rounded-md p-4 space-x-2 w-full md:w-[380px]">
              <MailOutlineIcon  />
                <input type="email" placeholder='enter your email' className="bg-gray-100 text-blue-900 text-2xl focus:outline-none w-10/12"
                  {...register("email", {
                  required:{value:true,message:"email is required"},
                  pattern: {
                    value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    message:"in valied email",

                  }
                  })}
                />
                
          </div>

      {/* email field */}
        

        {/* password field */}
        

      <p className="text-red-500 error-message text-start text-bold text-xl">
              {
                formState.errors.password&& <span>
                  {formState.errors.password.message}
                </span>
              }
          </p>
          <div className="input-container bg-gray-100 flex justify-start items-center rounded-md p-4 space-x-2 w-full md:w-[380px]">
              <HttpsOutlinedIcon/>
              <input type={showPassword?"text":"password"} placeholder='enter your password' className="bg-gray-100 text-blue-900 text-2xl focus:outline-none w-10/12"
                  {...register("password")}
              />
                <span onClick={() => {
                  setShowPassword(!showPassword)
                }} className='cursor-pointer'>
                {
                  showPassword?<VisibilityOffIcon/>:<VisibilityIcon/>
                }
                </span>
          </div>

        {/* password field */}
        <Link href={'/forgotpassword'} className='text-end text-primary-100 underline w-full font-semibold text-base capitalize flex justify-end items-center md:px-28'>
              forgot your password ?
          </Link>

          <Link href={'/signup'} className='text-end text-primary-100 underline w-full font-semibold text-base capitalize flex justify-end items-center md:px-28 '>
              create new account<ArrowRightAltOutlinedIcon/>
          </Link>


          <Button className='bg-secondary-100 rounded-full px-20 py-3 w-fit text-2xl flex justify-center items-center mt-8 hover:bg-blue-800 cursor-pointer text-white'>
              {loading?<span className='w-[15px] h-[15px] rounded-full border-2 border-white border-solid animate-spin'></span>:"Login"}
          </Button>

  </form>
  )
}

export default LoginForm