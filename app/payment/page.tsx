import React from 'react'
import Logo from '../components/logo'
import Image from 'next/image'
import PaymentIcon from './icon-payment.png'
import PaymentForm from './paymentForm'

const PaymentPage = () => {
  return (
  <main className="payment w-full">
        <div className="px-4 md:px-4 py-1 flex justify-start">
              <Logo/>
        </div>
        <div className="flex justify-center items-center gap-4 text-secondary-100 font-semibold text-xl md:text-3xl mt-4">
            <Image src={PaymentIcon} alt="not found image"/>
              <h3 className="">Payment</h3>
        </div>

        {/* payment from  */}
   <div className="flex justify-center items-center">
   <PaymentForm/>

   </div>
        {/* payment form  */}
  </main>

)
}

export default PaymentPage