'use client'
import React, { createContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import  StepOne from './seps/one';
import  StepTwo from './seps/two';
import  StepThree from './seps/three';
import ContainerWrapper from '@/app/components/containerWrapper';
import IntroSignup from './intro';
export const SignupContext= createContext({})

const CreateAccount = () => {
    const [step,setStep] = useState(0);
    const [userData,setUserData] = useState({});
       
    


useEffect(() => {
  console.log('the user data is ');
  
  console.log( userData);
  
},[userData])

   return (
       <section className="create-account w-full">
            <ContainerWrapper className='w-full flex justify-start items-start '>
                 {step!=0&&<IntroSignup/>}
                <SignupContext.Provider value={[userData,setUserData,step,setStep]}>
                {
                    step == 0
                    ?<StepOne />
                    :step==1
                    ?<StepTwo/>
                    :<StepThree/>
                    
                    }
                </SignupContext.Provider>
          </ContainerWrapper>
       </section>

   )
}
export default CreateAccount 