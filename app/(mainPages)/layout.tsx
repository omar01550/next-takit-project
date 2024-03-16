import React, { ReactNode } from 'react'
import Hero from '../components/hero'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full">
        <Hero/>
          {children}
    </div>
  )
}

export default Layout