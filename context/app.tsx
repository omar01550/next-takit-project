'use client';

import clearAllCookies from '@/lib/clearCookie';
import jwt from 'jsonwebtoken';
import React, { useEffect, useState } from 'react';
export const userContext = React.createContext(null);


const ClientWrapper = ({children}) => {
  
  
  const [user,setUser]= useState(null)

  useEffect(() => {
    console.log(document.cookie);
  
    
    const allCookies = document.cookie.split(";")
     const cookiesObj = {};
      
    allCookies.map((cookie) => {
          cookie= cookie.split("=");
          cookiesObj[cookie[0]]= cookie[1];
  
     });

     

     if (cookiesObj.token) {
      const userDecoded = jwt.decode(cookiesObj.token)
      console.log(userDecoded);
      
      if (userDecoded) {
         setUser(userDecoded)
      }else{
         clearAllCookies();
         window.location.reload()
      }
       
     }
     
     
     
     
  
  },[])




   
    

    
    
    
  // get token cookie 
  // if token cookie found 
  // decode token 
  // token decoded true 
      // update user
 // token false decoded 
    // delete cookie token 
    // refrsh page     
  


    
  
  return (
<>
  <userContext.Provider value={[user,setUser]}>
        {children}
  </userContext.Provider>
    
</>
    )
}

export default ClientWrapper