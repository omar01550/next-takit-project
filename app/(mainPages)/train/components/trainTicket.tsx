import Logo from '@/app/components/logo'
import {  PersonStanding, ReceiptRussianRuble, Train, Undo, User } from 'lucide-react'
import Link from 'next/link'
import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion"
    

import React from 'react'
import { number } from 'zod'
interface ITrainTicket{
      type:"train"|"metro",
     number:number,
     from:{
        station:string
        time:string
     },
     to:{
        station:string
        time:string
     },
     round:boolean,
     count:number,
     price:number
};


const TrainTicket = ({number,from,to,count,price,round,type}:ITrainTicket) => {
  return (
    
           <div className='capitalize bg-[#F5FAFF] p-4 rounded-md mt-8' >
          <h3 className="text-center text-secondary-100 text-xl">
               No : {number}
          </h3>
          <h3 className="text-2xl mt-2 font-medium capitalize">
               <span className='text-primary-100'>
                   Egypt
               </span>

               <span className='px-2 text-secondary-100 capitalize'>
                 {
                   type=="train"?"Railaways":"Metro"
                 }
               </span>
          </h3>

          <div className="ticket-content flex flex-col gap-8 lg:gap-0 justify-center lg:flex-row lg:justify-between items-center">
                 <div className="from-to w-full flex justify-between items-center">
                         <div className="from mt-4">
                               <h4 className='text-secondary-100 font-bold text-2xl'>{from.time}</h4>
                               <h4 className='text-primary-100 font-bold text-2xl'>{from.station}</h4>

                         </div>
                         <div className='destance flex flex-col items-center'>
                                {
                                type=="train"?
                                <div className="md:flex justify-center gap-2 items-center text-gray-400 hidden">
                                     <div className="w-40 bg-gray-300 h-[2px]"></div>
                                       <div className="destance-count">{50}km</div>
                                     <div className="w-40 bg-gray-300 h-[2px]"></div>
                                </div>
                                :
                                <Undo/>
                                }
                                <Train className='text-primary-100 animate-pulse mt-2 '/>
                         </div>

                         <div className="to mt-4">
                               <h4 className='text-secondary-100 font-bold text-2xl'>{to.time}</h4>
                               <h4 className='text-primary-100 font-bold text-2xl'>{to.station}</h4>

                         </div>

                 </div>

                 <div className="count-persons w-full flex justify-evenly items-center ps-0 lg:ps-14">
                       <div className="count w-full flex justify-start items-center gap-1">
                             <User className='text-primary-100'/>
                             <h4 className="count-number text-secontary-100">1</h4>
                             <h4 className="count-string text-secontary-100">.One</h4>
                       </div>

                       <div className="price-section flex flex-col justify-center items-center gap-2 text-secondary-100">

                            <h4 className="price capitalize text-3xl flex justify-center items-center gap-2"><span>EGP</span> {price}</h4>
                            <h4 className="price capitalize text-xl font-bold">rounded</h4>
                             
                            <Link href="/" className='capitalize text-2xl font-bold text-blue-950'>
                                        tak<span className='text-primary-100'>it</span>
                            </Link>
                            
                       </div>



                 </div>
          </div>
          <div className="more-details w-full flex justify-start items-center">
          <Accordion type="single" collapsible className='w-full'>
              <AccordionItem value='1'>
                    <AccordionTrigger className=''>
                        <span className='bg-secondary-100 text-white p-1 rounded-md font-bold mt-2 w-auto'>more details</span>
                    </AccordionTrigger>
                    <AccordionContent className='w-full bg-gray-200 py-20'>
                          <h1 className="text-3xl text-center text-secondary-100">
                                hellr details
                          </h1>
                    </AccordionContent>

              </AccordionItem>
               
          </Accordion>
          </div>
          
    </div>
  )
}

export default TrainTicket