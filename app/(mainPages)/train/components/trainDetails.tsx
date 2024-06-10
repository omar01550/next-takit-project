import Logo from '@/app/components/logo'
import { Train, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TrainDetails = ({count,ticket}) => {




  return (
    <div className="w-full bf-white p-4">
          <div className="train-details-header flex justify-between items-center">
                <Logo/>
                <X/>
          </div>

          <div className="train-info flex flex-col md:flex-row justify-between items-center mt-5 capitalize text-secondary-100 text-2xl font-semibold">
              <div className="station-count">
                  Track ({ticket.stations.length} station)
              </div>

              <div className="train-number flex flex-col md:flex-row justify-center items-center gap-3">
              <Train/>

                   <p className="">Train 808- Featured tahya masr</p>

              </div>

          </div>

          <div className="stations-line w-full h-[2px] bg-primary-100 rounded-md mt-24 hidden md:flex justify-between items-center ">
              {
              ticket.stations.map((station) => {
                 return (
                     <div className='w-[14px] h-[14px] rounded-full border-2 border-solid border-secondary-100 relative bg-gray-100 '>
                          <div className="absolute station-name text-secondary-100 -top-10 font-semibold">
                             {station.name}
                          </div>

                          <div className="absolute station-name text-secondary-100 -bottom-14 font-semibold">
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

                    {/* train trolly */}
                    <div className="flex justify-between items-center gap-2 mt-4">
              {
                 [1,2,3,4,5,6].map((car,i) => { return (
                    // <div className="car border-2 border-secondary-100 rounded-md flex justify-center items-center gap-2 w-3/12 h-[120px] bg-gray-200">
                    //      Car {car}
                          
                    // </div>
                    <div className="w-[200px] h-[80px] bg-gray-300 border-solid border-2 border-secondary-100 flex justify-around items-start pt-3 rounded-md">
                          <div className="window w-[20px] h-[20px] border-solid border-[1px] border-secondary-100 rounded-md  mt-[5px]"></div>
                          <div className="door w-[20px] h-[64px] border-solid border-[1px] border-secondary-100 border-b-transparent"></div>
                          <div className="window w-[20px] h-[20px] border-solid border-[1px] border-secondary-100 rounded-md  mt-[5px]"></div>

                          <div className="window w-[20px] h-[20px] border-solid border-[1px] border-secondary-100 rounded-md  mt-[5px]"></div>

                          <div className="window w-[20px] h-[20px] border-solid border-[1px] border-secondary-100 rounded-md  mt-[5px]"></div>
                          <div className="door w-[20px] h-[64px] border-solid border-[1px] border-secondary-100 border-b-transparent"></div>


                    </div>

                 ) })
              }
           </div>
                    {/* train trolly */}




          <Link className="btn flex justify-center items-center mt-6" href={`/payment?count=${count}&id=${3432423}`}>
                <button className=' text-white bg-primary-100 font-semibold text-xl px-4 py-2 rounded-md shadow-sm capitalize'>Book Ticket</button>
          </Link>
    </div>
  )
}

export default TrainDetails