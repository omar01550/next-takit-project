import { Train } from 'lucide-react'
import React, { useState } from 'react'

const SearchInput = () => {

    const [open,setOpen] = useState(false);
    const [value,setValue] = useState("");
    const stations =[
       "almansoutrah",
       "talha"
    ]

  return (
    <div className="serach-input-flex flex-col gap-2 justify-center items-center py-2 relative w-full">
           <div className="input-container p-2 flex justify-between items-center bg-white rounded-md w-full" onClick={() => {
              setOpen(!open)
           }}>
                  <Train/>
                  <input type="text" className='text-xl p-2 border-none outline-none text-black w-full' placeholder='return' onKeyUp={(e) => {
                      setValue(e.target.value)
                  }}/>
           </div>
           {
             open&&<div className="list w-full bg-white capitalize text-2xl absolute left-0 bottom-0 translate-y-[100%] overflow-auto p-2 space-y-2">
             { stations.map((item) => {
                    return (
                       
                        <div className="w-full p-4 item cursor-pointer shadow-sm" onClick={() => {
                          setValue(item)
                          setOpen(false)
                      }}>
                        {item}
                      </div>
                    )  
              })}
        </div>
           }
    </div>
  )
}

export default SearchInput