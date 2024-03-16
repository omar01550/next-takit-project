'use client'
import React, { useState } from 'react'
import RegisterInfo from './seps/info'
import SelectCountry from './seps/country'

const CreateAccount = () => {


const [userData,setUserData] = useState(null);
const [step,setStep] = useState(0);
const steps=[<SelectCountry step={step} setStep={setStep}/>,<RegisterInfo setp={step}  setStep={setStep}/>];

  return (
    <section>
         {
             steps[step]
         }         
         
    </section>
  )
}

export default CreateAccount 