import React, { ReactNode } from 'react'
import './globals.css';
import { headers } from 'next/headers';
import Header from './components/header';
import Hero from './components/hero';
import ClientWrapper from '@/context/app';
import Footer from './components/footer';

export const metadata ={
  title:"takit home page ",
  description:`with  Takit: Your one-stop shop for Egypt's rail, bus & metro bookings.
  Search & compare journeys online.
  Select your preferred time, service & seat.
  Fast & secure booking - all from your phone or computer.
  Experience a simpler way to travel Egypt.`

}



const Layout = ({children}:{children:ReactNode}) => {
  const headersList = headers()
  const route = headersList.get('route');
  
  
let isAuth  = false;

if (route?.includes("signup") || route?.includes("login")) {
   isAuth= true;
}

       
       

  return (
    <html>
        <body>
          {/* {!isAuth&&<Hero/>}  */}
          
<ClientWrapper>
   
    {children};     

</ClientWrapper>
<Footer/>
        </body>
    </html>
  )
}

export default Layout