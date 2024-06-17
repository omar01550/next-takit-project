'use client'

import React, { useState } from 'react'
import { TrollyFront, trollyLast, trollyMiddle } from './trollies'


 const trollies = [
     TrollyFront,
     trollyMiddle,
     trollyMiddle,
     trollyMiddle,
     trollyMiddle,
     trollyLast
 ]



const SelectChar = () => {
     const [active,setActive] = useState(1);
  return (
    <div>
              <div className="flex justify-center items-center gap-2 mt-6">
            
            {
               trollies.map((Trolly,i) => {
                   return (
                       <div className="trolly flex flex-col justify-center items-center gap-2 text-secondary-100 font-semibold text-2xl">
                             <Trolly active={i+1 == active&&true} setActive={setActive} index={i}/>
                             <span>{i+1}</span>
                       </div>
                   )
               })
            }
      
      
      
          </div>

          
          {/* <h4 className="text-center capitalize text-2xl font-semibold mt-6 text-secondary-100">
           Your place is in trolley number {active}
          </h4> */}
      
    </div>
)
}

export default SelectChar