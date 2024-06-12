import Logo from '@/app/components/logo'
import {  PersonStanding, ReceiptRussianRuble, Train, Undo, User } from 'lucide-react'
import Link from 'next/link'
    

import React from 'react'
import { number } from 'zod'
const NumberTransilation = {
       1:'One',
       2:"Two",
       3:"Three",
       4:"Four",
       5:"Five"
}


const PaymentTicket = ()=> {
  return (
    
           <div className='capitalize bg-[#ffe0b9] p-4 rounded-md mt-8' >
          <h3 className="text-center text-secondary-100 text-xl">
               No : {23889473287}
          </h3>
          <h3 className="text-2xl mt-2 font-medium capitalize">
               <span className='text-primary-100'>
                   Egypt
               </span>

               <span className='px-2 text-secondary-100 capitalize'>
                 {
                   "train"
                 }
               </span>
          </h3>

          <div className="ticket-content flex flex-col gap-8 lg:gap-0 justify-center lg:flex-row lg:justify-between items-center">
                 <div className="from-to w-full flex justify-between items-center">
                         <div className="from mt-4">
                               <h4 className='text-secondary-100 font-bold text-2xl'>{"14:20"}</h4>
                               <h4 className='text-primary-100 font-bold text-2xl'>{"almansourah"}</h4>

                         </div>
                         <div className='destance flex flex-col items-center'>
                               
                                <div className="md:flex justify-center gap-2 items-center text-gray-400 hidden">
                                     <div className="w-40 bg-gray-300 h-[2px]"></div>
                                       <div className="destance-count">{50}km</div>
                                     <div className="w-40 bg-gray-300 h-[2px]"></div>
                                </div>
                                                               <Train className='text-primary-100 animate-pulse mt-2 '/>
                         </div>

                         <div className="to mt-4">
                               <h4 className='text-secondary-100 font-bold text-2xl'>{"18:10"}</h4>
                               <h4 className='text-primary-100 font-bold text-2xl'>{"cairo"}</h4>

                         </div>

                 </div>

                 <div className="count-persons w-full flex justify-evenly items-center ps-0 lg:ps-14">
                       <div className="count w-full flex justify-start items-center gap-1">
                             <User className='text-primary-100'/>
                             <h4 className="count-number text-secontary-100">{2}</h4>
                             <h4 className="count-string text-secontary-100">.{12}</h4>
                       </div>

                       <div className="price-section flex flex-col justify-center items-center gap-2 text-secondary-100">

                            <h4 className="price capitalize text-3xl flex justify-center items-center gap-2"><span>EGP</span> {100}</h4>
                            <h4 className="price capitalize text-xl font-bold">rounded</h4>
                             
                            <Link href="/" className='capitalize text-2xl font-bold text-blue-950'>
                                        tak<span className='text-primary-100'>it</span>
                            </Link>
                            
                       </div>



                 </div>
          </div>
          <div className="more-details w-full flex justify-start items-center">
                   </div>
          
    </div>
  )
}

export default PaymentTicket