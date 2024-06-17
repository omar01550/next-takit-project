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
     
import FromTO from "../components/fromToSelector";

     
export default function SearchFrom({BookData,setBookData,errors,setErrors,setickets,setLoading,loading,setTickets}) {
       const [date, setDate] = React.useState<Date>()
       const [open, setOpen] = React.useState(false)
       
       const handleValidation = ()=>{
          


            // check date
            if (BookData.date == '') {
                setErrors({
                   to:errors.to,
                   date:"you must be select a date"
                })
            }

// check is empty
            if (BookData.from == ""  || BookData.to =="") {
              setErrors({
                to:"you must to select stations",
                date:errors.date
             })
            }

            // check if from == to
            if (BookData.from == BookData.to) {
                setErrors({
                  to:"the start station must be deffrence the end station",
                  date:errors.date
              })
            }
          
            
          }

       
        function getTickets() {
          setLoading(true)
          fetch("http://localhost:5000/tickets",{
             method:"POST",
             headers: {
              "Content-Type": "application/json"
          },
        
             body:JSON.stringify({
                 from:BookData.from,
                 to:BookData.to,
                 date:BookData.date,
                 count:BookData.count,
                 return:BookData.return,
                 serviceType:BookData.serviceType
             })
          })
          .then((res) => {
              if (res.status == 404) {
                setErrors({
                  ...errors,
                  noTickets:true

               })

                 return new Promise((res,rej)=>{rej("not found")})
              }
              return res.json()
          }).then((result) => {
            
            
               
               
              setTickets(result.tickets)
          })
          .finally(() => {
             setLoading(false)
          })
        }

      const handleSearch = async () => {
        
        handleValidation()
        
        
        if (errors.to == null && errors.date == null) {
           getTickets();   
          
        }
        
       
      }
       
       
      
       return (
         <section className="flex-col justify-center items-center flex w-full">
              
              <div className="flex flex-col lg:flex-row justify-start items-start -translate-y-6 w-full">

{/* from to  */}
         <FromTO BookData={BookData} inputTitle={'select a from station'}  setBookData ={setBookData} type="from"/>
         <FromTO BookData={BookData} inputTitle={'select a to station'}    setBookData ={setBookData} type="to"/>
         


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
                  setBookData({
                    ...BookData,
                    date:date
                  })
                  
            }}
            initialFocus
            showOutsideDays={false}
            weekStartsOn={6}
            fromDate={new Date()}
          />
        </PopoverContent>
      </Popover>
{/* date */}

{/* add return  */}

<button className="flex h-10 w-full  items-center justify-between gap-2  rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus:outline-none  focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black capitalize" onClick={() => {
    
        setBookData({
            ...BookData,
            return :!BookData.return
        })

}}> {BookData.return ?"Remove":"Add"} return <span>{BookData.return ?"-":"+"}</span></button>
   


{/* count */}
      <Select defaultValue={0} onValueChange={(value) => {
            setBookData({
              ...BookData,
              count:value
            })
            
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


 
 

 
   
    <button className="flex h-10 w-full lg:w-auto  items-center justify-start gap-2  rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus:outline-none  focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 bg-secondary-100 text-white" onClick={handleSearch}>{loading?'loading ....':<><Search/> Search</>}</button>
    

   
      </div>

          {
             errors.to?<p className="to:p text-center text-2xl text-red-600">{errors.to}</p>
             :errors.date?<p className="to:p text-center text-2xl text-red-600">{errors.date}</p>
             :errors.noTickets?<p className="to:p text-center text-2xl text-red-600">no tikites found</p>

             :""
          }
      
      
         </section>
       )
     }