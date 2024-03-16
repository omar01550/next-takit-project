'use client'
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

  

const stations = [
     "almansourah",
     "talka",
     "samanoud",
     "almahalah",
     "tanta",
     "berkat alsab",
     "qwesna",
     "banha",
     "cairo"
]


const SearchInput = ({placeholder}) => {

  const [searchResult,setSearchResult ] = useState("");
  const [hiddenResults,setHiddenResults] = useState(true);

  useEffect(() => {
    console.log(searchResult);
    
  },[searchResult])

  return (
    <>
       {/* <Command>
         <CommandInput placeholder="from"/>
    </Command>
    <CommandList>

    </CommandList> */}
    <Command>
         <CommandInput placeholder={placeholder} onFocus={() => {
            setHiddenResults(false)
         }} onBlur={() => {
            setHiddenResults(true)
         }}/>
         
          {!hiddenResults&&         <CommandList>
        <CommandEmpty>No station</CommandEmpty>
          {/* stations */}
          {stations.map((station) => {
            return (
                <CommandItem >
                   <span onClick={() => {
                    setSearchResult(station)
                    console.log('clicked');
                    
                }}>
                    {station}
                   
                   </span>
              </CommandItem>
            )
          })}
        </CommandList>}

    </Command>
    </>
  )
}

export default SearchInput