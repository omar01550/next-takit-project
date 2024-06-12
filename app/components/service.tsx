import React from 'react'
import ServiceTrain from '@/public/images/serviceTrain'
import Image from 'next/image'
const Service = ({ServiceImage,title}) => {
  return (
    
    <div className="hover:scale-110 transition-all w-full md:w-[250px] lg:w-[300px] mt-8 lg:mt-0">
            <Image src={ServiceImage} alt="not found"  className='w-full'/>
            <h3 className='text-center text-secondary-100 text-2xl font-semibold'>{title} tickets</h3>
             <p className="text-center text-secondary-100 font-semibold text-xl mt-3">
                  Booking a {title} Tickets wasn`t easy , but with takit website it1`s now much easier.             </p> 
                </div>
  )
}

export default Service