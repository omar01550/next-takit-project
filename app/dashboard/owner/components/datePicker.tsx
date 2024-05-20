'use client';
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "@/components/ui/button";
  import { Calendar } from "@/components/ui/calendar"
import { CalendarCheck2 } from "lucide-react"
import { cn } from '@/lib/utils';
import { format } from "date-fns"

  

const DatePicker = () => {

const [date,setDate] = useState(Date.now());


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