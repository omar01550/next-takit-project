import Logo from '@/app/components/logo'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

import Link from 'next/link'
import React, { ReactNode } from 'react'


const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full flex">
         <section className="sidebar w-2/12 h-screen border-e-2 border-e-secondary-100  bg-primary-100 text-white py-10 px-6">
             
             <div className="user flex gap-2 flex-col">
             <Logo/>
                <Avatar>
                    <AvatarImage src='https://avatars.githubusercontent.com/u/107444038?v=4'/>
                </Avatar>
                <h3 className="text-base">Omar</h3>
                  
             </div>

             <div className="flex flex-col gap-2">
             <Link href={"/dashboard/admin/add-ticket"}>
                     Add Ticket
             </Link>

             <Link href={"/dashboard/admin/update-ticket"}>
                     Uodate Ticket
             </Link>
             
             
                 <Link href={"/dashboard/admin/add-user"}>
                     add user
                  </Link>

                  <Link href={"/dashboard/admin/update-user/34545"}>
                     Update user
                  </Link>
             </div>
         </section>
        <section className="w-10/12">
           {children }
        </section>
    </div>
  )
}

export default Layout