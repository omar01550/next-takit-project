'use client'

import React, { useEffect, useState } from "react"
import { Menu, MenuIcon, Search } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarCheck2 } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
       Select,
       SelectContent,
       SelectGroup,
       SelectItem,
       SelectLabel,
       SelectTrigger,
       SelectValue,
     } from "@/components/ui/select"
     
import FromTO from "../test/page"
     
export default function SearchFrom({loading,setLoading,tickets,setTickets,error,setError}) {
       const [date, setDate] = React.useState<Date>()
       const [count,setCount] = React.useState<number>(1);
       const [from,setFrom] = useState<string|null>(null)
       const [to,setTo] = useState<string|null>(null)

       const [open, setOpen] = React.useState(false)
       
     
      const handleSearch = async () => {
        setLoading(true)
          fetch("http://192.168.0.104:3000/api/tickets")
          .then((res) => {
              return res.json()
          }).then((tickets) => {
               console.log(tickets);
               
              setTickets(tickets)
          }).finally(() => {
             setLoading(false)
          })
      }
       
       
      
       return (
         <div className="flex flex-col lg:flex-row justify-start items-start">

   {/* from to  */}
            <FromTO station={from} setStation={setFrom}/>
            <FromTO station={to} setStation={setTo}/>


{/* from to */}


{/* date */}
<Popover>
           <PopoverTrigger asChild>
             <Button
               variant={"outline"}
               className={cn(
                 "w-full justify-start text-left font-normal",
                 !date && "text-muted-foreground"
               )}
             >
               <CalendarCheck2 className="mr-2 h-4 w-4" />
               {date ? format(date, "PPP") : <span>Pick a date</span>}
             </Button>
           </PopoverTrigger>
           <PopoverContent className="w-auto p-0" align="start">
             <Calendar
               mode="single"
               selected={date}
               onSelect={(date) => {
                     setDate(date)
                     
               }}
               initialFocus
               showOutsideDays={false}
               weekStartsOn={6}
               fromDate={new Date()}
             />
           </PopoverContent>
         </Popover>
{/* date */}


         <Select defaultValue={count} onValueChange={(value) => {
               setCount(value)
               
         }}>
      <SelectTrigger className="w-full focus:ring-0 flex">
            <SelectValue placeholder="Select a count" />
            
      </SelectTrigger>
      <SelectContent>
        <SelectGroup onSelect={(value) => {
              console.log("value");
              
        }}>
          <SelectLabel>count</SelectLabel>
          {[1,2,3,4,5].map((number) => {
              return (
                 <SelectItem value={number}>{number}</SelectItem>
                     
              )
          })}
          
        </SelectGroup>
      </SelectContent>
    </Select>


    
    

    
      
       <button className="flex h-10 w-full lg:w-auto  items-center justify-start gap-2  rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus:outline-none  focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 bg-red-500 text-white" onClick={handleSearch}>{loading?'loading ....':<><Search/> Search</>}</button>
      
         </div>
       )
     }