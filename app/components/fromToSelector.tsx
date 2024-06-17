
'use client'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ArrowDown, ChevronDown } from "lucide-react";
import { useState } from "react"

export default function FromTO({inputTitle,BookData,setBookData,type}) {

   const [open,setOpen]= useState(false);
  return (
    
                 <div className="w-full min-h-auto m-h-80">
                 <button onClick={_=> setOpen(!open)} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus:outline-none  focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">{BookData[type]?BookData[type]:inputTitle} <ChevronDown/></button>
          <Command className={open?"rounded-lg border shadow-md":"rounded-lg border shadow-md hidden"}  >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup title="from" className="">
                {["almansourah","talkha","banha","tanta","cairo","alex"].map((station) => {
                    return (
                      <CommandItem className="rounded-sm shadow-sm capitalize">
                         <span className="w-full p-2 rounded-sm"  onClick={() => {
                              
                              setBookData({
                                 ...BookData,
                                 [type]:station
                              })
                              
                              setOpen(false)

                          
                      }}>{station}</span>
                     </CommandItem>
                    )
                })}
        
          </CommandGroup>        
      </CommandList>
    </Command>

                 </div>

  )
}
