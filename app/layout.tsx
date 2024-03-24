import React, { ReactNode } from 'react'
import './globals.css';
import { headers } from 'next/headers';
import Header from './components/header';
import Hero from './components/hero';
import ClientWrapper from '@/context/app';
import Footer from './components/footer';




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