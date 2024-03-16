import React from 'react'

const TrainTicket = ({ticket}) => {
  return (
    <div className="train-ticket w-full h-40 rounded-lg shadow-md mt-6">
          <h3 className="id text-blue-950 text-center capitalize font-semibold">No : {ticket.id}</h3>
          <div className="details flex flex-col lg:flex-row justify-between items-center flex-wrap p-4">
            <div className="one">
                 
            </div>

            <div className="two">
               two
            </div>
               

            <div className="three">three</div>
            <div className="four">
               <h1>{ticket.price}</h1>
               
            </div>

          </div>

    </div>

  )
}

export default TrainTicket