import Logo from '@/app/components/logo'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

import Link from 'next/link'
import React, { ReactNode } from 'react'
import SideBar from './sidebar'


const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full flex">
    

         <SideBar/>
        <section className="w-10/12">
           {children }
        </section>
    </div>
  )
}

export default Layout