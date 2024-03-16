'use client'
import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import StaticGenerationSearchParamsBailoutProvider from 'next/dist/client/components/static-generation-searchparams-bailout-provider'






const SelectInput = () => {
  return (
    <>
             <Select onValueChange={(value) => {
                console.log(value);
                
             }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a count"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
            [1,2,3,4,5].map((item) => {
                return(
                    <SelectItem value={item}>
                    {item}
              </SelectItem>
                )
            })
          }
             
        </SelectGroup>
      </SelectContent>
    </Select>
  

    </>
  )
}

export default SelectInput