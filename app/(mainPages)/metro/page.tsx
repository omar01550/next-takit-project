'use client';

import { Select, SelectTrigger,SelectItem, SelectContent, SelectValue } from '@/components/ui/select';



import React from 'react'

const MetroPage = () => {
  return (
    <div>
       <h1>MetroPage</h1>
       <Select onValueChange={(value) => {
        console.log(value);
        
       }}>
      <SelectTrigger className="w-[180px] focus:outline-none outline-none focus:ring-white">
        <SelectValue placeholder="Select a count of tickkets" onChange={(e) => {
          console.log("changed");
          
        }}/>
      </SelectTrigger>
      <SelectContent>


          {
             [1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((item) => {
              return (
                 <SelectItem value={item}>
                   {item}
                 </SelectItem>
              )
             })
          }

      </SelectContent>
    </Select>


  

    </div>
  )
}

export default MetroPage