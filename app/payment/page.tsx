import React from 'react'
import ContainerWrapper from '../components/containerWrapper';
import { CreditCard, CreditCardIcon } from 'lucide-react';

 const PaymentPage = ({searchParams}) => {

  const {count,id} = searchParams;
  const price =50;
  
  return (
    <main className="payment w-full">
         <ContainerWrapper className="py-10">

            <h1 className="text-4xl font-semibold capitalize text-secondary-100 flex justify-center items-center gap-2">
               <CreditCardIcon size={44}/>
              payment</h1>


              <form className="payment-form mt-6 px-40 py-10 text-secondary-100">
                    <div className="w-full flex justify-center items-center">
                          <div className="card bg-white rounded-md w-80 text-blue-600 p-4 shadow-md">
                              <CreditCard/>
                              <p>Card</p>

                          </div>
                    </div>
                    {/* price */}
                    <h3 className="text-3xl text-secondary-100 font-semibold text-center flex justify-center items-center pt-8">
                         {count*price}
                         <span>$</span>
                    </h3>
                    {/* card */}

                    
                    <div className="w-full shadow-md p-2">
                               <label htmlFor="" className='text-base font-semibold text-secondary-100'>Card Number</label>
                               <input type="number" name="" id="" className="w-full p-2 border-2 border-gray-100 border-solid rounded-md mt-3" placeholder='1234 1234 1234 1234 '/>
                    </div>

                    

       {/* second inputs */}

                    <div className="w-full flex justify-between items-center p-2">
                          <div className="w-full shadow-md p-2">
                                    <label htmlFor="" className='text-base font-semibold text-secondary-100'>Card Number</label>
                                    <input type="number" name="" id="" className="w-full p-2 border-2 border-gray-100 border-solid rounded-md mt-3" placeholder='1234 1234 1234 1234 '/>
                          </div>

                          <div className="w-full shadow-md p-2">
                                    <label htmlFor="" className='text-base font-semibold text-secondary-100'>Card Number</label>
                                    <input type="number" name="" id="" className="w-full p-2 border-2 border-gray-100 border-solid rounded-md mt-3" placeholder='1234 1234 1234 1234 '/>
                          </div>
                    </div>

                    <div className="w-full flex justify-between items-center p-2">
                          <div className="w-full shadow-md p-2">
                                    <label htmlFor="" className='text-base font-semibold text-secondary-100'>Card Number</label>
                                    <input type="number" name="" id="" className="w-full p-2 border-2 border-gray-100 border-solid rounded-md mt-3" placeholder='1234 1234 1234 1234 '/>
                          </div>

                          <div className="w-full shadow-md p-2">
                                    <label htmlFor="" className='text-base font-semibold text-secondary-100'>Card Number</label>
                                    <input type="number" name="" id="" className="w-full p-2 border-2 border-gray-100 border-solid rounded-md mt-3" placeholder='1234 1234 1234 1234 '/>
                          </div>
                    </div>

                    <div className="flex justify-center items-center py-4 mt-6">
                           <button className="px-10 py-2 bg-secondary-100 text-white rounded-md text-xl font-semibold capitalize">
                                 buy now
                           </button>
                    </div>
                    

              </form>
                   
         </ContainerWrapper>
    </main>
  )
}

export default PaymentPage;

