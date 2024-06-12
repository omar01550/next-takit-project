import ContainerWrapper from '@/app/components/containerWrapper'
import Logo from '@/app/components/logo'
import SucssesImage from './sucsses.png'
import QrCode from './qr-code.png'
import React from 'react'
import Image from 'next/image'
import PaymentTicket from './ticket'

const PaymentStatus = () => {
  return (
    <main className="w-full">
           <div className="logo px-4 md:px-10 flex justify-start py-10">
                <Logo/>
           </div>
          <ContainerWrapper className='flex justify-center items-center flex-col gap-7'>

                    <Image src={SucssesImage} alt="not found image"/>
                    <h2 className="text-center text-xl md:text-3xl text-[#31A91D] capitalize font-semibold">
                        Congratulations! You have successfully booked tickets
                    </h2>

                    <Image src={QrCode} alt="not found image"/>
                    
                    <PaymentTicket/>

                    <div className="buttons flex justify-center gap-6 items-center w-full text-xl">
                            <button className="rounded-full border-solid border-2 border-secondary-100 px-6 py-2 text-secondary-100">
                            Download Ticket
                            </button>

                            <button className=" border-solid border-2 border-secondary-100 px-6 py-2 text-secondary-100 rounded-full">
                            Download Ticket
                            </button>

                    
                    </div>

                    <h4 className="text-2xl text-primary-100 font-semibold capitalize">
                    Thank you for using Takit website
                    </h4>

          </ContainerWrapper>
    </main>


)
}

export default PaymentStatus