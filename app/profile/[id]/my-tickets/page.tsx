
import TrainTicket from '../myTicket'
import ContainerWrapper from '@/app/components/containerWrapper'
import Logo from '@/app/components/logo'
import Image from 'next/image'
import React from 'react'
import QrCodeImage from "@/app/payment/status/qr-code.png"

const MyTickets = async () => {
  const res = await fetch("http://localhost:5000/tickets",{
     method:"POST",
     headers:{
      "Content-Type": "application/json"
    }
  })
  const result = await res.json();
  const tickets = result.tickets
  
  return (

    <main className="w-full">
                <ContainerWrapper className='w-full py-16'>
                     <Logo/>
                      
                      <div className="tickets flex flex-col gap-3 justify-center items-center w-full">
                           {
                               tickets.map((ticket) => {
                               
                              return <div className="flex w-full justify-between items-start  p-2 rounded-md gap-3">
                                    <TrainTicket ticket={ticket}/>
                                    <div className="mt-8 ">
                                        <Image src={QrCodeImage} alt="not found" width={230} height={230} loading='lazy'/>
                                            <div className="buttons flex justify-center items-center flex-col gap-2 mt-3">
                                                  <button className="text-base font-semibold capitalize text-secondary-100 rounded-full  border-solid border-2 border-secondary-100 px-6 py-2 w-[230px]">
                                                     Download  ticket
                                                  </button>
                                                  <button className="text-base font-semibold capitalize text-secondary-100 rounded-full  border-solid border-2 border-secondary-100 px-6 py-2 w-[230px]">
                                                     Print  ticket
                                                  </button>

                                            </div>

                                     </div>
                              </div>
                              
                             })
                           }

                      </div>
</ContainerWrapper>
    </main>

)
}

export default MyTickets