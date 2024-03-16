'use client';

import React, { createContext } from 'react'


export const authContext = createContext(null);

const user ={
   name:"Omar"
}




const AuthProvider = ({children}) => {


  return (
    <authContext.Provider value={user}>
               {children}
    </authContext.Provider>
  )
}

export default AuthProvider