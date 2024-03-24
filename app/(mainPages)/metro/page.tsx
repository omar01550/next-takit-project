"use client"
import SearchForm from '@/app/components/searchForm'
import React, { useState } from 'react'
import ContainerWrapper from '@/app/components/containerWrapper'
import TrainTicket from '../train/components/trainTicket'



const TrainPage = () => {

      const [BookData,setBookData] = useState({
          from:"",
          to:"",
          date:"",
          return :false,
          count:0,
      })

  return (
    <main className='min-h-[30vh]'>
         <ContainerWrapper>
                <SearchForm BookData={BookData} setBookData={setBookData}/>          
                <div className="tickets-container px-0 lg:px-20">
                       {
                         [1,2,3,4,5,6,7,8,1,2,3,4,5,6].map((ticket) => {
                            return (
                              <TrainTicket 
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
   
   
                          />
                            )
                         })
                       }



                </div>
         </ContainerWrapper>

   </main>
  )
}

export default TrainPage