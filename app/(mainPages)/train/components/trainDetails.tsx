import Logo from '@/app/components/logo'
import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TrainDetails = ({count,ticket}) => {




  return (
    <div className="w-full bf-white p-4">
          <div className="train-details-header flex justify-between items-center">
                <Logo/>
                <X/>
          </div>

          <div className="train-info flex justify-between items-center mt-5 capitalize text-secondary-100 text-2xl font-semibold">
              <div className="station-count">
                  Track ({ticket.stations.length} station)
              </div>

              <div className="train-number">
                 Train 808- Featured
              </div>

              <div className="ticket-number">
                  No : 0190909090
              </div>
          </div>

          <div className="stations-line w-full h-[2px] bg-primary-100 rounded-md mt-24 flex justify-between items-center">
              {
              ticket.stations.map((station) => {
                 return (
                     <div className='w-[10px] h-[10px] rounded-full border-2 border-solid border-secondary-100 relative '>
                          <div className="absolute station-name text-secondary-100 -top-10">
                             {station.name}
                          </div>

                          <div className="absolute station-name text-secondary-100 -bottom-14">
                             {station.time}
                          </div>

                     </div>
                 )
              })
              }
          </div>


          <h1 className="text-center capitalize text-2xl font-semibold mt-24 text-secondary-100">
               Detrmine where you sit
          </h1>


          <Link className="btn flex justify-center items-center mt-6" href={`/payment?count=${count}&id=${3432423}`}>
                <button className=' text-white bg-primary-100 font-semibold text-xl px-4 py-2 rounded-md shadow-sm capitalize'>chose this trip</button>
          </Link>
    </div>
  )
}

export default TrainDetails