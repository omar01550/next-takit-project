import React from 'react'
import IndecatorImage from '../images/Graph.png'
import ArrowUp from '../images/arrow-up.png'
import Image from 'next/image';

const InfoCard = () => {
  return (
     <div className="w-[350px] h-[150px] rounded-md border-[#767FB4] border-solid border-[2px] p-3">
         <h3 className="title text-xl font-semibold capitalize">
              Sales
         </h3>

         <div className="bottom-card">
              <p className="text-3xl font-semibold">6K</p>
              <div className="flex justify-between items-center text-base">
                   <div className="text flex justify-start items-center">
                   <Image src={ArrowUp} alt="not found" loading='lazy'/>

                       <span className="text-green-200">26%</span>
                       <span className="">up vs last year</span>
                   </div>

                   <Image src={IndecatorImage} alt="not found" className='w-[130px] h-[70px] -translate-y-5' loading='lazy'/>

                   
              </div>
         </div>

           
 </div>

  )
}

export default InfoCard