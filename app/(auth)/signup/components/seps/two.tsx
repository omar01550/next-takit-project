import React, { useRef } from 'react'
import { useContext } from 'react';
import { SignupContext } from '../createAccount';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/app/components/logo';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';




const StepTwo = () => {
    
   const passwordRef = useRef();
    const [userData,setUserData,step,setStep] = useContext(SignupContext);
    const {register,handleSubmit,formState,getValues,setError} = useForm();
    const route = useRouter();
    const inputs =[
       {
         name:'firstname',
         title:"first name",
       
       },
       {
        name:'lastname',
        title:"last name",

        validation:{
          required:{
           value:true,
           message:"this field is erquired"
          
          },
        }
      },
      {
        name:'email',
        title:"email",

        validation:{
          required:{
           value:true,
           message:"this field is erquired"
          
          },
          pattern:{
             value:/^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/,
             message:"invaild email"
          }
        }
      },
      {
        name:"mobile",
        title:'mobile number',
        validation:{
           pattern:{
             value:/^0(?:10|11|12|15)\d{8}$/,
             message:"enter a valid mobile number"
           }
        }
      },
      {
        name:"password",
        title:"password",

        validation:{
           required:{
             value:true,
             message:"this field is erquired"
             
           }
        }

      }
      ,{
         name:"confirmpassword",
         title:"confirm password",
         validation:{
           validate: (value)=> (value=== getValues().password || "not match")
         }

      }
    ]

  return (
    <form action="" className='py-12 flex flex-col justify-center items-center gap-2 w-full px-0 lg:px-14 font-semibold' onSubmit={handleSubmit((data) => {
      console.log(formState.errors);
      
           if (data) {
               setUserData({
                  ...userData,
                  ...data
                 
               })
                // delete confirm password
                delete userData.confirmpassword
               fetch("http://localhost:3000/api/signup",{
                 method:"POST",
                 cache:"no-cache",
                 body:JSON.stringify(userData)
              
               }).then((res) => {
                  console.log('the response status is '+ res.status);
                
                   if (res.status == 409) {
                    return new Promise((res,rej)=>{rej("rej")})
                  }
                  
                    return res.json()
                  
                   
               }).then((res) => {
                   document.cookie=`token=${res.token};`
                   route.push("/")
                   route.refresh()
        
                   
               })
               .catch((err) => {
                
                setError("firstname",{message:"this user is already have a account"})
                console.log("error is working");
                
               })

           }               
    })}>
           <div className="flex justify-center items-center">
             <Logo/>
           </div>
           <h1 className="text-center text-2xl font-semi-bold capitalize  md:hidden">
                <span className='text-secondary-100'>create an</span> <span className='text-primary-100'>account</span>
           </h1>
          {
             inputs.map((item) => {
              return(
              <div className="input-container w-full flex flex-col justify-start items-start gap-2 mt-3">
                  
                <label htmlFor={item.name} className='capitalize text-lg font-semibold text-secondary-100'>{item.title}</label>
                {formState.errors[item.name]&&<h3 className="text-md text-primary-100 capitalize">{formState.errors[item.name]["message"]}</h3>}

              <input type="text"  id={item.name} placeholder={'enter your '+ item.title} className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-full  p-3 rounded-md text-base font-medium"
                      {...register(item.name, {...item.validation,required:{value:true,message:`${item.title}  is required`}})}
                       
                      />
              </div>
    
              )
             })
          }
          

<Button className='bg-secondary-100 rounded-full px-20 py-3 w-fit text-2xl flex justify-center items-center mt-8 hover:bg-blue-800 cursor-pointer text-white'>
            Next
          </Button>
          
    </form>
  )
}

export default StepTwo