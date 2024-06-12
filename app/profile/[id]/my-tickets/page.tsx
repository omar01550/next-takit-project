
import TrainTicket from '@/app/(mainPages)/train/components/trainTicket'
import ContainerWrapper from '@/app/components/containerWrapper'
import Logo from '@/app/components/logo'
import React from 'react'

const MyTickets = () => {
  return (

    <main className="w-full">
                <ContainerWrapper className='w-full py-16'>
                     <Logo/>
                      
                      <div className="tickets flex flex-col gap-3 justify-center items-center w-full">
                     
{[1,2,3,4,5,6,7,8,9,10].map((ticket) => {
  return (
    <TrainTicket 
    number={2002020}
    from={{
      station:"almansourah",
      time:"10:16"
    }}

   to={{
    station:"cairo",
     time:"10:13",
   }}
   count={1}
   price={20}
   round={true}
   type="train"
   ticket={null}


/>
  )
})}

                      </div>
</ContainerWrapper>
    </main>

)
}

export default MyTickets