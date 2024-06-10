'use client';
import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "@/components/ui/button";
  import { Calendar } from "@/components/ui/calendar"
import { CalendarCheck2 } from "lucide-react"
import { cn } from '@/lib/utils';
import { format, getDate } from "date-fns"
import { useRouter } from 'next/navigation';

  

const DatePicker = () => {

const [date,setDate] = useState(() => {
   let currentDate = new Date();
   let day =currentDate.getDate();
   let month = currentDate.getMonth();
   let year= currentDate.getFullYear();
    return `${year}-${month+1}-${day}`
});
const route = useRouter();

useEffect(() => {
  console.log(date);
  
})


  return (
        <>
           <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full md:w-3/12 justify-start text-left font-normal",
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
            selected={Date.now()}
            onSelect={(date) => {
                   setDate(date)
                   
                   route.push(`/dashboard/owner?date=${date?.getFullYear()}-${date?.getMonth()+1}-${date?.getDate()}`)
                  
                  
            }}
            initialFocus
            showOutsideDays={false}
            weekStartsOn={6}
            fromDate={new Date()}
          />
        </PopoverContent>
      </Popover>

        </>
  )
}

export default DatePicker