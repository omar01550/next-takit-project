import React, { useContext, useState ,useMemo} from 'react'
import { SignupContext } from '../createAccount'
import Logo from '@/app/components/logo';
import EgyptImage from '../../images/egypt';
import Other from '@/public/images/other';
import OtherImage from '../../images/other';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';


type  IChose = "egypt"|"other";

const StepOne = () => {
   
 

    const [userData,setUserData,step,setStep] = useContext(SignupContext);
    const {register,handleSubmit,formState,getValues,setError} = useForm()
    const [chose,setChose] = useState<IChose>("other") // chose egypt or forign

    const inputs ={
       
      egypt:[
          {
             name:"notionid",
             title:"notion id",
             placeholder:"enter your notion id",
             validation:{
                minLength:{
                   value:14,
                   message:"the notion id must be 14 number"
                },
                maxLength:{
                  value:14,
                  message:"the notion id must be 14 number"
               },
             }
          }
       ],
       other:[
          {
            name:"passport-number",
            title:"passport number",
            placeholder:"enter your passport number",
            validation:{
               minLength:{
                  value:14,
                  message:"the passport number must be 14 number"
               },
               maxLength:{
                 value:14,
                 message:"the notion id must be 14 number"
              },
            }
          },
          {
            name:"country",
            title:"country",
            placeholder:"enter your country",
            validation:{
               minLength:{
                  value:2,
                  message:"invalid country name"
               },
               
            }
          },

       ],


    }
    
    
  return (
     <div className="w-full py-10 px-0 lg:px-14">
          <Logo/>

        <div className="title">
            <h1 className="text-3xl text-secondary-100 mt-10 capittalize font-semibold text-center">
                Select Your Nationality
            </h1>

            <h3 className='text-primary-100 mt-4 text-center text-xl font-semibold capitalize'>
                    select your nationality if your a egyptian or other 
            </h3>

            <div className="select-country w-full flex flex-col lg:flex-row justify-center items-center gap-12 mt-12 ">
                  <EgyptImage chose={chose} setChose={setChose}/>
                  <OtherImage chose={chose} setChose={setChose}/>
            </div>

            <form action="" className="flex justify-center items-center gap-4 w-full flex-col mt-8" onSubmit={handleSubmit((data) => {
                   if (data) {
// add kcountry egypt
                      setStep(step+1)
                      setUserData(() => {
                           if (chose == 'egypt') {
                              return {...userData,...data,country:"egypt"}
                           }else{
                             return {...userData,...data}
                           }
                      })
                   }
                   
            })}>
                   
                   {
                      inputs[chose].map((item) => {
                        return (
                              <div className="input-field flex flex-col gap-2 w-full lg:w-5/12">
                                 

                              <label className='font-semibold text-xl capitalize text-secondary-100'>{item.title}</label>
                              {formState.errors[item.name]&&<h3 className="text-md text-primary-100 capitalize">{formState.errors[item.name].message}</h3>}
                              <input type="text" placeholder={item.placeholder} className='w-full text-xl bg-gray-100 p-2 ring-1 ring-secondary-100 rounded-md border-none outline-none' {...register(item.name,{
                                  required:{value:true,message:`${item.title} is required`},
                                  ...item.validation
                                  
                              })}/>
                           </div> 
                        )
                      })
                   }
                    
                   
          <Button className='bg-secondary-100 rounded-full px-20 py-3 w-fit text-2xl flex justify-center items-center mt-8 hover:bg-blue-800 cursor-pointer text-white'>
            Next
          </Button>
          
            </form>
            
        </div>
     </div>
  )
}

export default StepOne










