import React from 'react'
import { BarChart2, LineChart } from 'lucide-react'


const InfoCard = () => {
  return (
      <div className="p-3 border-[1px] border-black border-solid rounded-md w-full md:w-[250px]">
            <div className="flex justify-between items-center w-full">
                 <div className="number text-secondary-100 text-3xl flex justify-start gap-4 items-center  w-full">
                        100
                        <div className="w-[12px] h-[12px] bg-red-500 rounded-full"></div>
                 </div>

                 <p className="text-2xl font-semibold text-secondary-100">
                     Users
                 </p>
            </div>
            <div className="flex justify-center items-center mt-3">
                    <BarChart2  size={80} width={150} className='text-primary-100'/>
                    <BarChart2  size={80} width={150} className='text-primary-100'/>
            </div>
            
      </div>
  )
}

export default InfoCard