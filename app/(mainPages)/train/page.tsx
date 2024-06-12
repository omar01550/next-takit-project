"use client"
import SearchForm from '@/app/components/searchForm'
import React, { useEffect, useState } from 'react'
import ContainerWrapper from '@/app/components/containerWrapper'
import TrainTicket from './components/trainTicket'
import TicketsLoadinzg from '@/app/components/ticketsLoading'
import ServiceTrain from '@/public/images/serviceTrain';
import TrainImage from '../../images/train&ticketsvg fill-min.png'
import Image from 'next/image'
import Service from '@/app/components/service'




const TrainPage =  () => {



  
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

      const [tickets,setTickets] = useState([
        {
             price:50,
             count:3,
             number:23434,
             grade:3,
             stations:[
                 {
                     name:'almansourah',
                     time:"1:00",
                 },
                 {
                    name:'talkha',
                    time:"1:05",
                 },
                 {
                    name:'samanoud',
                    time:"1:15",
                 },
                 {
                    name:'almahalah',
                    time:"1:25",
                 },
                 {
                    name:'mahalat rouh',
                    time:"1:35",
                 },
                 {
                    name:'tanta',
                    time:"1:45",
                 },
                 {
                    name:'berkat alsabe',
                    time:"1:55",
                 },
                 {
                    name:'quwesna',
                    time:"2:15",
                 },
                 {
                    name:'banha',
                    time:"2:35",
                 },
                 {
                    name:'shoubrah',
                    time:"2:45",
                 },
                 {
                    name:'cairo',
                    time:"3:00",
                 }
             ]
    
        },
        {
            price:100,
            count:234423,
             number:1,
            grade:1,
            stations:[
                {
                    name:'almansourah',
                    time:"3:00",
                },
                {
                   name:'talkha',
                   time:"3:05",
                },
                {
                   name:'samanoud',
                   time:"3:15",
                },
                {
                   name:'almahalah',
                   time:"3:25",
                },
                
                {
                   name:'banha',
                   time:"4:20",
                },
                {
                   name:'cairo',
                   time:"4:40",
                }
            ]
        }
    ]
    )
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
                         count={BookData.count}
                         price={ticket.price}
                         round={true}
                         type="train"
                         ticket={ticket}


                      />
                       
                         ) 
                     })

                     :loading?<TicketsLoading/>:
                     error?'fialed to load tickets'
                     :
                      <div className="flex justify-center items-center w-Fullscreen py-8">
                             <Service
                                ServiceImage={TrainImage}
                                title={'train'}
                             />
                        </div>

                  }
                       





                </div>
         </ContainerWrapper>
         
   </main>
  )
}

export default TrainPage