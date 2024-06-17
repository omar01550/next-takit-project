'use client'
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


import React, { useState } from 'react'

const DatePicker = ({className}) => {

    const [date,setDate] =  useState(new Date())
  return (
    <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
                
              "w-full justify-start text-left font-normal",
              className,
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
  )
}

export default DatePicker

