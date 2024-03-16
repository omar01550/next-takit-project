import SearchForm from '@/app/components/searchForm'
import React from 'react'
import TrainTicket from './trainTicket'


const Cairo =[
  {
    name:"almansourah",
    time:"07:00",

  },
  {
    name:"talkha",
    time:"07:05",

  },
  {
    name:"samanoud",
    time:"07:15",

  },
  {
    name:"almahla alkoubrah",
    time:"07:25",

  },
  {
    name:"tanta",
    time:"07:45",

  },
  {
    name:"banha",
    time:"08:40",

  },
  {
    name:"cairo",
    time:"09:00",

  }
]


const trains = [
   { 
     price:"200",
     id:1001203040,
     count:1,

      stations:Cairo
   },
   { 
    price:"140",
    id:1001245640,
    count:1,

     stations:Cairo
  },
  { 
    price:"170",
    id:1001245640,
    count:1,

     stations:Cairo
  },

]


const TrainPage = () => {
  return (
    <div>
        <SearchForm/>
        <div className="flex justify-center w-full">
        <div className="w-full lg:w-8/12 px-4">
            
            {
               trains.map((ticket) => {
                return (
                  <TrainTicket ticket={ticket}/>
                  
                )
               })
            }
        </div>
        </div>

   </div>
  )
}

export default TrainPage