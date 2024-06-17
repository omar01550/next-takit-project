import MetroIcon from '@/app/HomeComponents/icons/metroIcon'
import TrainIcon from '@/app/HomeComponents/icons/trainIcon'
import BusIcon from '@/app/HomeComponents/icons/busIcon'
import React from 'react'

const ProgressCard = () => {
  return (
      <div className="flex justify-between items-end gap-4 mt-4">
            <TrainIcon/>
             {/* progress */}

            <div className="">
                 <h4 className="text-base text-secondary-100 capitalize">train</h4>
                 
                 <div className="progress w-[200px] md:w-[450px] shadow-md rounded-full h-[10px] relative bg-gray-200 mt-2">
                        <div className="progress-inner w-8/12  absolute h-full left-0 top-0 bg-gradient-to-l from-emerald-400 to-lime-400 rounded-[100px]"></div>
                 </div>

            </div>

            <p className="text-base text-secondary-100 capitalize">
                  25%
            </p>


            {/* <BusIcon/>
            <MetroIcon/> */}
      </div>

)
}

export default ProgressCard
{/* <div className="w-[259.16px] h-2.5 p-2.5 bg-gradient-to-l from-emerald-400 to-lime-400 rounded-[100px]" /> */}