"use client"
import SearchForm from '@/app/components/searchForm'
import React, { useState,useEffect } from 'react'
import ContainerWrapper from '@/app/components/containerWrapper'
import MetroTicket from './metroTicket'
import SearchFrom from '@/app/components/searchForm'


const MetroPage = () => {

   const [BookData,setBookData] = useState({
      from:"",
      to:"",
      date:"",
      return :false,
      count:2,
  })
   // valiadte search form
  const [errors ,setErrors] = useState({
    to:null,
    date:null
  })

  useEffect(function () {
     console.log('the errors in effect',errors);
     
  },[errors])

  const [tickets,setTickets] = useState([])
  const [loading,setLoading] = useState(false);
  const [error,setError ]= useState(null);



   useEffect(() => {
       console.log(BookData);
       
   },[BookData])

     

  return (
    <main className='min-h-[30vh]'>
         <ContainerWrapper>
         <SearchForm 
                      BookData={BookData} 
                      setBookData={setBookData} 
                      setTickets={setTickets}
                      setLoading={setLoading} 
                      errors={errors}
                      setErrors={setErrors}
                />          
                <div className="tickets-container px-0 lg:px-20">
                       {
                         tickets.map((ticket) => {
                            return (
                              <MetroTicket 
                              number={1002909209}
                              from={{
                                station:"almansourah",
                                time:"10:30"
                              }}
   
                             to={{
                               station:"cairo",
                               time:"1:30"
                             }}
                             count={3}
                             price={70}
                             round={true}
                             type="metro"
                             ticket={ticket}

   
   
                          />
                            )
                         })
                       }



                </div>
         </ContainerWrapper>

   </main>
  )
}

export default MetroPage