import CounteyCard from '@/app/(auth)/components/countryCard'
import ContainerWrapper from '@/app/components/containerWrapper'
import Logo from '@/app/components/logo'
import React from 'react'
import OtherImage from '../../images/other'
import EgyptImage from '../../images/egypt'
import Link from 'next/link'
import SendBtn from '@/app/components/sendBtn'

const SelectCountry = ({step,setStep}) => {
  return (
         <section className='w-full'>
              <ContainerWrapper className='py-6'>
                    {/* start logo */}
                    <Link className="flex justify-start" href={'/'}>
                         <Logo/>
                         
                    </Link>
                    {/* end logo */}

                    <div className="title text-center mt-8">
                    <h2 className="text-3xl capitalize font-bold text-blue-950 text-center w-full ">
                            Select Your Nationality
                         </h2>

                         <h3 className='text-omar-100 font-bold text-xl  mt-3'>
                                Specify if you are Egyptian or from another country.
                         </h3>

                    </div>


                    {/* select country */}
                     <div className="select-country flex justify-evenly mt-12 flex-wrap">
                           
                                <EgyptImage/>
                                <OtherImage/>
                           

                     </div>


<div className="inputs flex space-y-3 p-2 lg:px-48">

       <form action="" className='w-full'>
                    <div className="form-filed mt-5">
                        <label htmlFor="" className='capitalize text-blue-950 font-bold text-xl block'> passport number</label>
                        <input type="text"  className="bg-[#f1f1f1] text-blue-900 text-2xl focus:outline-none mt-3 p-2 rounded-md w-full  lg:w-7/12 "/>
                        
                    </div>

                    <div className="form-filed mt-5">
                    <label htmlFor="" className='capitalize text-blue-950 font-bold text-xl block'> passport number</label>
                        <input type="text"  className="bg-[#f1f1f1] text-blue-900 text-2xl focus:outline-none mt-3 p-2 rounded-md w-full  lg:w-7/12 "/>
                        
                    </div>


                        

        </form>
                          
                     </div>

                     

                    {/* select country */}

                    <SendBtn
                      step={step}
                      setStep={setStep} 
                      text="next"
                    />


                         
              </ContainerWrapper>
         </section>          
  )
}

export default SelectCountry