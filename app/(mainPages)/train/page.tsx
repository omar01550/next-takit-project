"use client"
import SearchForm from '@/app/components/searchForm'
import React, { useState } from 'react'
import ContainerWrapper from '@/app/components/containerWrapper'
import TrainTicket from './components/trainTicket'
import TicketsLoading from '@/app/components/ticketsLoading'
import ServiceTrain from '@/public/images/serviceTrain'



const TrainPage = () => {

      const [BookData,setBookData] = useState({
          from:"",
          to:"",
          date:"",
          return :false,
          count:0,
      })

      const [tickets,setTickets] = useState([])
      const [loading,setLoading] = useState(false);
      const [error,setError] = useState(null)

  return (
    <main className='min-h-[30vh]'>
         <ContainerWrapper>
                <SearchForm 
                      BookData={BookData} 
                      setBookData={setBookData} 
                      setTickets={setTickets}
                      setLoading={setLoading} 
                      setError={setError}
                />          

                <div className="tickets-container px-0 lg:px-20">
                  {
                     tickets.length!=0

                     ?tickets.map((ticket) => {
                         return (

                          <TrainTicket 
                          number={ticket.number}
                          from={{
                            station:ticket.stations[0].name,
                            time:ticket.stations[0].time
                          }}

                         to={{
                          station:ticket.stations[ticket.stations.length-1].name,
                           time:ticket.stations[ticket.stations.length-1].time,
                         }}
                         count={ticket.count}
                         price={ticket.price}
                         round={true}
                         type="train"


                      />
                       
                         ) 
                     })

                     :loading?<TicketsLoading/>:
                     error?'fialed to load tickets'
                     :
                      <div className="flex justify-center items-center w-Fullscreen py-8">
                            <ServiceTrain/>
                      </div>

                  }
                       





                </div>
         </ContainerWrapper>

   </main>
  )
}

export default TrainPage