'use client';
import ContainerWrapper from '@/app/components/containerWrapper'
import { Plus, Ticket, TicketCheck } from 'lucide-react';
import Image from 'next/image';
import React, { useReducer, useRef, useState } from 'react'




const Page = () => {
  
  
  
  

  return (
    <main className="w-full">
        <ContainerWrapper className='w-full py-16'>
               <h1 className="text-center text-3xl text-secondary-100 capitalize font-semibold">
                    Add Ticket
               </h1>

               <form action="" className="updateProfile w-full flex flex-col justify-center items-center space-y-6 mt-10">
                     
               <div className="updat-image w-[90px] h-[90px] rounded-full bg-gray-300 justify-center items-center flex mt-10"  onClick={() => { FileRef.current.click()}}>
                          {
                             <Ticket className=' text-secondary-100 text-3xl'  size={44}/>
                          }
                          </div>
                     

                     <div className="flex justify-around items-center w-full pt-6">
                          <input type="text" className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-5/12  p-3 rounded-md text-base font-medium" placeholder='Ticket Name'/>
                            
                          <input type="text" className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-5/12  p-3 rounded-md text-base font-medium" placeholder='Ticket Price'/>
                     </div>


                     <div className="flex justify-around items-center w-full mt-10">
                          <input type="text" className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-5/12  p-3 rounded-md text-base font-medium" placeholder=' From '/>
                            
                          <input type="text" className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-5/12  p-3 rounded-md text-base font-medium" placeholder='To'/>
                     </div>


                     <div className="flex justify-around items-center w-full mt-10">
                          <input type="text" className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-5/12  p-3 rounded-md text-base font-medium" placeholder='Ticket Type '/>
                            
                          <input type="text" className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-5/12  p-3 rounded-md text-base font-medium" placeholder='Ticket Number'/>
                     </div>

                     <div className="flex justify-around items-center w-full mt-10">
                          <input type="text" className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-5/12  p-3 rounded-md text-base font-medium" placeholder='time Dapatrue '/>
                            
                          <input type="text" className="bg-[rgb(238,242,255)] text-blue-900 focus:outline-none w-5/12  p-3 rounded-md text-base font-medium" placeholder='time Acsses'/>
                     </div>

                     <div className="flex w-full justify-center items-center pt-6">
                          <button className="px-6 py-2 bg-primary-100 text-2xl text-white capitalize rounded-md flex justify-center items-center gap-2 w-fit">
                                Add Ticket
                                
                               <TicketCheck/>
                          </button>
                     </div>

               </form>
        </ContainerWrapper>
    </main>


 )
}

export default Page