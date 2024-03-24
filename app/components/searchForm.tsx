'use client'
import React, { useState } from 'react'
import SearchInput from './searchInput'
import SelectInput from './selectInput'

import { BackpackIcon, Delete, KeyRound, LampDesk, Search, SearchIcon, Train, Undo2, Users } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'





const SearchForm = ({BookData,setBookData,setTickets,setLoading,setError}) => {
       const {register,handleSubmit,formState,getValues} = useForm();    
    
       const getTickets = async () => {
              setTickets([]);
              setLoading(true)
              try {
                   const res = await fetch("http://localhost:3000/api/tickets",{
                           method:"POST",
                           cache:"no-cache"
                   });
                   const wait = await new Promise((res,rej) => {
                     setTimeout(() => {
                           res('done')   
                     }, 4000);
                   });

                   const tickets = await res.json();
                   setTickets(tickets)
              
     
              } catch (error) {
               console.log(error);
               setError(error)
               
                    
              }
              finally{
setLoading(false)
              }
       }

  return (
     <form className="secrch-form w-full  -translate-y-0 lg:-translate-y-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-[#A1A9C3]/30 p-[6px] rounded-md gap-1" onSubmit={handleSubmit(getTickets)}>
     
           
           {/* <SearchInput/> */}
           <div className="input-container p-2 flex justify-between items-center bg-white rounded-md w-full">
                  <Train/>
                  <input type="text" className='text-xl p-2 border-none outline-none text-black w-full' placeholder='from' {...register("from")}/>
           </div>
           <div className="input-container p-2 flex justify-between items-center bg-white rounded-md w-full">
                  <Train/>
                  <input type="text" className='text-xl p-2 border-none outline-none text-black w-full' placeholder='to' {...register("to")}/>
           </div>
           <div className="input-container p-2 flex justify-between items-center bg-white rounded-md w-full">
                  <Users/>
                  <input type="text" className='text-xl p-2 border-none outline-none text-black w-full' placeholder='count' {...register("count")}/>
           </div>
             
           <div className="input-container p-2 flex justify-between items-center bg-white rounded-md w-full">
              
              <Undo2/>
                  <input type="text" className='text-xl p-2 border-none outline-none text-black w-full' placeholder='return' {...register("return")}/>
           </div>
            <button className="search-btn flex justify-center items-center gap-2 text-white bg-primary-100 capitalize p-4 rounded-md w-full lg:w-auto">
                 <Search/>
                 <span>search</span>
            </button>

           
           
           
     </form>
  )
}

export default SearchForm
