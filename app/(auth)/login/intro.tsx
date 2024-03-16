import LoginImage from '@/public/images/login'
import React from 'react'

const IntroLogin = () => {
  return (
    <section className="intro w-full lg:w-6/12  min-h-[100vh]  py-10 hidden lg:flex flex-col items-center">
    <h1 className="text-3xl md:text-5xl font-bold">
         <span className='text-omar-100'>
              Login
         </span> an account
    </h1>

    <LoginImage className=" mt-24" />

    <h3 className="text-omar-100 font-bold text-2xl capitalize  mt-10">
          Our Ticket check them now
    </h3>
    <h3 className="text-blue-900 font-bold text-2xl capitalize  mt-2">
          we are happry to server you
    </h3>
</section>

  )
}

export default IntroLogin