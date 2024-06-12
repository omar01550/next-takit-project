import Logo from '@/app/components/logo'
import { Train, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Square from './square'
import BusStarionsLine from './busStationsLine'


const BusTicketDetails = ({count,ticket}) => {




  return (
      <section className="w-full p-3">
               <h1 className="text-3xl font-semibold capitalize text-secondary-100">
                   
                      <span className='text-primary-100 pr-2'>
                      Ticket 
                      </span>
                        Details
               </h1>
                <div className="ticket-details flex justify-between items-center">

<div className="left">
        <BusStarionsLine/>
</div>
<div className="flex justify-between items-center flex-wrap border-2 border-secondary-100 border-solid rounded-md p-2 w-[200px]">

          {[1,2,3,4,5,6,7,8,9].map((square) => {
                 return <>
                       <Square/>
                 </>
          })}
</div>

                  </div>
                  
</section>
  )
}

export default BusTicketDetails 