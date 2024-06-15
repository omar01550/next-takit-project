
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
import { cn } from "@/lib/utils";
import { ArrowDown, ChevronDown } from "lucide-react";
import { useState } from "react"
import {countries} from '../../components/countresSelector/countries'
import Image from "next/image";

export default function CountriesSelector({className}) {

   const [open,setOpen]= useState(false);

  return (
    
                 <div className={cn("w-full min-h-auto m-h-80",className)}>
                 <button onClick={_=> setOpen(!open)} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus:outline-none  focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">Select your country <ChevronDown/></button>
          <Command className={open?"rounded-lg border shadow-md":"rounded-lg border shadow-md hidden"}  >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup title="from" className="">
                {countries.map((country) => {
                    return (
                      <CommandItem className="rounded-sm shadow-sm capitalize">
                         <span className="w-full p-2 rounded-sm flex justify-between items-center"  onClick={() => {
                              setOpen(false)

                          
                      }}>{country["country"]}
                        
                        <Image src={country.flag} alt="not founf" className="w-10 h-10" width={20} height={20}/>
                      </span>
                     </CommandItem>
                    )
                })}
        
          </CommandGroup>        
      </CommandList>
    </Command>

                 </div>

  )
}
