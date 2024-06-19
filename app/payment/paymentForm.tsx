"use client"
import React from 'react'
import Image from 'next/image'
import PaymentIcon from './icon-payment.png'
import VisaIcon from './visaIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const PaymentForm = () => {

   const route = useRouter();
   route.prefetch("/payment/status")
  return (
    <div className="mt-5 form w-full p-2 md:p-8 lg:px-10 md:w-7/12">
    <div className="flex justify-between items-center ">
       {/* card */}
          <div className="flex flex-col items-start gap-4 card bg-orange-100 rounded-md border-solid border-secondary-100 border-[1px] p-2 w-[200px] md:w-[300px] lg:w-[400px]">
               <Image src={PaymentIcon} alt="not found"/>
               <h4 className="text-secondary-100 capitalize">
                     Card
               </h4>
          </div>

          <div className="flex flex-col items-start gap-4 card bg-orange-100 rounded-md border-solid border-secondary-100 border-[1px] p-2 w-[200px] md:w-[300px] lg:w-[400px]">
               <Image src={PaymentIcon} alt="not found"/>
               <h4 className="text-secondary-100 capitalize">
                     Card
               </h4>
          </div>
        {/* card */}
    </div>

    {/* card number */}
       <div className="flex items-start gap-2 flex-col mt-3">
          <label htmlFor="" className="text-secondary-100 text-xl font-semibold">Card number</label>
       <div className="w-full bg-orange-100 text-2xl p-[10px] rounded-md flex justify-between items-center">
              <input type='text' className='w-[70%] h-full bg-inherit focus:border-collapse focus:outline-none p-2 text-secondary-100 ' placeholder='1234 1234 1234 1234'/>
              <VisaIcon/>
       </div>
       </div>
    {/* card number */}

    <div className="flex justify-between items-center mt-3">
           
    <div className="flex-col items-start flex gap-3">
    <label htmlFor="" className="text-secondary-100 text-xl font-semibold">Expiry</label>

    <input placeholder='MM/YY' className='bg-orange-100 p-2 text-3xl rounded-md text-secondary-100 ' type='number'/>

    </div>


    <div className="flex-col items-start flex gap-3">
    <label htmlFor="" className="text-secondary-100 text-xl font-semibold">CVC</label>

    <input placeholder='CVC' className='bg-orange-100 p-2 text-3xl rounded-md text-secondary-100 ' type='number'/>

    </div>



    </div>

    {/* country and secret number */}
    <div className="flex justify-between items-center mt-3">
           
           <div className="flex-col items-start flex gap-3">
           <label htmlFor="" className="text-secondary-100 text-xl font-semibold">Select Country</label>
       
           <input placeholder='MM/YY' className='bg-orange-100 p-2 text-3xl rounded-md text-secondary-100 ' type='number'/>
       
           </div>
       
       
           <div className="flex-col items-start flex gap-3">
           <label htmlFor="" className="text-secondary-100 text-xl font-semibold">Secret Number</label>
       
           <input placeholder='CVC' className='bg-orange-100 p-2 text-3xl rounded-md text-secondary-100 ' type='number'/>
       
           </div>

  
       
       
       
           </div>
    {/* country and secret number */}

    <Link className="btn flex justify-center items-center mt-6" href={`/payment/status`}>
                <button className=' text-white bg-secondary-100 font-semibold text-xl px-8 py-2 rounded-md shadow-sm capitalize'>next</button>
          </Link>


</div>

)
}

export default PaymentForm